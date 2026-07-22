// Module ID: 5180
// Function ID: 44997
// Name: FormCheckbox
// Dependencies: []
// Exports: default

// Module 5180 (FormCheckbox)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ checkbox: {} });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[3]).Checkbox, { style: callback().checkbox, selected: selected.selected });
};
