import { useEffect, useState } from "react";
import { getDocument } from "../utils/fetchXml";

export const useAAIXml = () => {
  const [xmlDocument, setDocument] = useState<Document | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocument()
      .then((document) => setDocument(document))
      .catch((error) => {
        alert(`Can't load xml document: ${error}`);
        throw new Error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    xmlDocument,
    isLoading,
  };
};
