// Module ID: 5175
// Function ID: 44989
// Name: FormSubLabel
// Dependencies: []
// Exports: default

// Module 5175 (FormSubLabel)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  let accessible;
  let numberOfLines;
  let style;
  let text;
  let str = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (str === undefined) {
    str = "text-subtle";
  }
  const obj = { color: str, variant: "text-xs/normal", lineClamp: numberOfLines, style, accessible, children: text };
  return jsx(arg1(dependencyMap[2]).Text, obj);
};
