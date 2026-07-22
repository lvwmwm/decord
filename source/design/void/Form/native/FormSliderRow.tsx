// Module ID: 7517
// Function ID: 60206
// Name: FormSliderRow
// Dependencies: []
// Exports: default

// Module 7517 (FormSliderRow)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ labels: { "Null": "<string:3435973836>", "Null": "<string:1903247380>", "Null": "r" }, slider: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  let label;
  let trailing;
  ({ label, trailing } = arg0);
  let obj = Object.create(null);
  obj.label = 0;
  obj.trailing = 0;
  const merged = Object.assign(arg0, obj);
  const context = React.useContext(arg1(dependencyMap[4]).RedesignCompatContext);
  const tmp4 = callback2();
  if (context) {
    obj = {};
    const obj1 = { style: tmp4.labels };
    const obj2 = { children: label };
    const items = [callback(arg1(dependencyMap[6]).Text, obj2), trailing];
    obj1.children = items;
    const items1 = [tmp5(View, obj1), ];
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3["style"] = tmp4.slider;
    items1[1] = callback(importDefault(dependencyMap[7]), obj3);
    obj.children = items1;
    let tmp5Result = tmp5(arg1(dependencyMap[5]).Card, obj);
    const tmp20 = importDefault(dependencyMap[7]);
  } else {
    obj = {};
    const obj4 = { label, trailing };
    const items2 = [callback(importDefault(dependencyMap[8]), obj4), ];
    const obj5 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(importDefault(dependencyMap[7]), obj5);
    obj.children = items2;
    tmp5Result = tmp5(closure_7, obj);
    const tmp10 = importDefault(dependencyMap[7]);
  }
  return tmp5Result;
};
