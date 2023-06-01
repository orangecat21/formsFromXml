import { useCallback, useMemo } from "react";
import { Form, Input } from "antd";
import { getFieldsByEntityName } from "../../utils/getObjectByName";
import { getUriByName } from "../../utils/getUriByName";

const convertFieldNameToDisplayName = (name: string) =>
  name.replace(/-/g, " ").replace(/^(\w)/, (match) => match.toUpperCase());

type Props = {
  xmlDocument: Document;
  entityName: string;
  onSubmit: (values: Record<string, unknown>, targetRoute: string) => void;
};

export const EntityForm = ({ xmlDocument, entityName, onSubmit }: Props) => {
  const fieldsConfig = useMemo(
    () => getFieldsByEntityName(xmlDocument, entityName),
    [xmlDocument, entityName]
  );

  const uriTemplate = useMemo(
    () => getUriByName(xmlDocument, entityName),
    [xmlDocument, entityName]
  );

  const onFinish = useCallback(
    (values: Record<string, unknown>) => {
      if (!uriTemplate) {
        throw new Error("Template uri for entity not found");
      }

      const targetRoute = uriTemplate.replace(
        /{([\w-]+)}/,
        (_, p1: string) => values[p1] as string
      );

      onSubmit(values, targetRoute);
    },
    [uriTemplate, onSubmit]
  );

  return (
    <Form
      id={entityName}
      name={entityName}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      {fieldsConfig.map((field) => (
        <Form.Item
          key={field.name}
          label={convertFieldNameToDisplayName(field.name)}
          name={field.name}
          rules={[
            {
              required: field.required,
              message: `Please input ${convertFieldNameToDisplayName(
                field.name
              )}`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ))}
    </Form>
  );
};
