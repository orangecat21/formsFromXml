import { Modal } from "antd";

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  confirmLoading?: boolean;
  children: React.ReactNode;
  formId: string;
  title: string;
};

export const DialogForForm = ({
  isOpen,
  onCancel,
  confirmLoading,
  children,
  formId,
  title,
}: Props) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      okText="Submit"
      okButtonProps={{ htmlType: "submit", form: formId }}
    >
      {children}
    </Modal>
  );
};
