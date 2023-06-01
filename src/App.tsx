import { Spin, Layout, Button, Space } from "antd";
import { useAAIXml } from "./hooks/useAAIXml";
import { useBooleanState } from "./hooks/useBooleanState";
import { useEntitySave } from "./hooks/useEntitySave";
import { EntityForm } from "./components/EntityForm";
import { DialogForForm } from "./components/DialogForForm";
import "./App.css";

function App() {
  const { xmlDocument, isLoading: isDocumentLoading } = useAAIXml();

  const {
    value: isPnfOpen,
    setTrue: openPnf,
    setFalse: closePnf,
  } = useBooleanState();

  const {
    value: isComplexOpen,
    setTrue: openComplex,
    setFalse: closeComplex,
  } = useBooleanState();

  const { isSaving, entitySave } = useEntitySave(() => {
    if (isPnfOpen) {
      closePnf();
    } else {
      closeComplex();
    }
  });

  if (isDocumentLoading || !xmlDocument) {
    return (
      <div className="spin-container">
        <Spin tip="Loading" size="large">
          <div />
        </Spin>
      </div>
    );
  }

  return (
    <Layout.Content className="content">
      <Space size="large">
        <Button type="primary" onClick={openPnf}>
          Add new PNF
        </Button>

        <Button type="primary" onClick={openComplex}>
          Add new Complex
        </Button>
      </Space>

      <DialogForForm
        title="Add new PNF"
        formId="Pnf"
        isOpen={isPnfOpen}
        onCancel={closePnf}
        confirmLoading={isSaving}
      >
        <EntityForm
          onSubmit={entitySave}
          xmlDocument={xmlDocument}
          entityName="Pnf"
        />
      </DialogForForm>

      <DialogForForm
        title="Add new Complex"
        formId="Complex"
        isOpen={isComplexOpen}
        onCancel={closeComplex}
        confirmLoading={isSaving}
      >
        <EntityForm
          onSubmit={entitySave}
          xmlDocument={xmlDocument}
          entityName="Complex"
        />
      </DialogForForm>
    </Layout.Content>
  );
}

export default App;
