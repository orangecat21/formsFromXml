import { useCallback } from "react";
import { useBooleanState } from "./useBooleanState";

export const useEntitySave = (closeModal: () => void) => {
  const {
    value: isSaving,
    setTrue: setInProgress,
    setFalse: setFinished,
  } = useBooleanState();

  const entitySave = useCallback(
    (values: Record<string, unknown>, targetRoute: string) => {
      setInProgress();
      fetch(targetRoute, {
        method: "PUT",
        body: JSON.stringify(values, (_, value) => value ?? ""),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
        })
        .then(closeModal)
        .catch((error) => alert(`Can't save new entity: ${error}`))
        .finally(setFinished);
    },
    [closeModal, setFinished, setInProgress]
  );

  return {
    entitySave,
    isSaving,
  };
};
