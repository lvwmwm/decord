// Module ID: 5440
// Function ID: 46542
// Name: FormLabel
// Dependencies: []
// Exports: default

// Module 5440 (FormLabel)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(numberOfLines) {
  let accessible;
  let color;
  let style;
  let num = numberOfLines.numberOfLines;
  if (num === undefined) {
    num = 0;
  }
  ({ color, style, accessible } = numberOfLines);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  const obj = { variant: "heading-md/semibold", color, lineClamp: num, style, maxFontSizeMultiplier: 2, accessible, children: numberOfLines.text };
  return jsx(arg1(dependencyMap[2]).Text, obj);
};
