// Module ID: 5441
// Function ID: 46506
// Name: FormRadio
// Dependencies: []
// Exports: default

// Module 5441 (FormRadio)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ radio: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: callback().radio };
  if (selected.selected) {
    let tmp5 = tmp4[4];
  } else {
    tmp5 = tmp4[5];
  }
  obj.source = importDefault(tmp5);
  return <Image {...obj} />;
};
