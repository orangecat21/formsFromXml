export type FieldConfig = {
  name: string;
  required: boolean;
};

export const getFieldsByEntityName = (
  xml: Document,
  name: string
): FieldConfig[] => {
  const nodeList = xml.querySelectorAll(
    `[name="${name}"] java-attributes > [type="java.lang.String"]`
  );

  return Array.from(nodeList).map((node) => ({
    name: node.getAttribute("name") ?? "Unknown",
    required: node.getAttribute("required") === "true",
  }));
};
