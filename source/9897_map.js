// Module ID: 9897
// Function ID: 76581
// Name: map
// Dependencies: []
// Exports: PileOverflow

// Module 9897 (map)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
({ jsxs: closure_4, jsx: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { color: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z", fontFamily: "1.5", fontSize: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z", lineHeight: "1.5", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const items = [[null, null], [], ["System service not available", "cover"], [], [1074859868, -1408749273], [false, false]];
const map = new Map(items);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  let borderRadius;
  let value;
  size = size.size;
  ({ borderRadius, value } = size);
  let obj = arg1(dependencyMap[6]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = {};
  const items1 = [callback().container, ];
  obj = { borderRadius, minWidth: size, height: size };
  let num = 4;
  if (size >= 32) {
    num = 8;
  }
  obj.paddingHorizontal = num;
  items1[1] = obj;
  obj.style = items1;
  const obj1 = { 843352751: "Lightbox Frame", 843126092: "EdgeHTML" };
  value = map.get(size);
  let str = "text-md/semibold";
  if (null != value) {
    str = value;
  }
  obj1.variant = str;
  const items2 = [true, arg1(dependencyMap[8]).humanizeValue(value, stateFromStores)];
  obj1.children = items2;
  obj.children = closure_4(arg1(dependencyMap[7]).Text, obj1);
  return closure_5(View, obj);
};
