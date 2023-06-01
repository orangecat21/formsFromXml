export const getUriByName = (xml: Document, name: string) => {
  const node = xml.querySelector(
    `[name="${name}"] xml-properties > [name="uriTemplate"]`
  );

  return node?.getAttribute("value");
};
