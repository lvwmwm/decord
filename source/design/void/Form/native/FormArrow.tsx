// Module ID: 5442
// Function ID: 46554
// Name: FormArrow
// Dependencies: []
// Exports: default

// Module 5442 (FormArrow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { wrapper: { "Null": 7, "Null": 370 } };
obj = { height: "text-sm/medium", paddingTop: "text-overlay-light", alignItems: null, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.icon = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  let label;
  let style;
  ({ label, style } = arg0);
  const tmp = callback3();
  if (null != label) {
    let obj = { style: tmp.wrapper };
    obj = { children: label };
    const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
    const obj1 = {};
    const items1 = [tmp.icon, style];
    obj1.style = items1;
    obj1.source = importDefault(dependencyMap[7]);
    obj1.size = arg1(dependencyMap[6]).Icon.Sizes.MEDIUM;
    items[1] = callback(arg1(dependencyMap[6]).Icon, obj1);
    obj.children = items;
    let tmp6 = callback2(View, obj);
  } else {
    obj = {};
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = importDefault(dependencyMap[7]);
    obj.size = arg1(dependencyMap[6]).Icon.Sizes.MEDIUM;
    tmp6 = callback(arg1(dependencyMap[6]).Icon, obj);
  }
  return tmp6;
};
