// Module ID: 9902
// Function ID: 76608
// Name: map
// Dependencies: []
// Exports: PileOverflow

// Module 9902 (map)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
({ jsxs: closure_4, jsx: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const items = [[], [], [], ["isArray", "MAX_FORUM_TAGS"], [1074859868, -1408749273], ["Array", "commonProperty"]];
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
  const obj1 = { 2085692463: null, 839748315: null };
  value = map.get(size);
  let str = "text-md/semibold";
  if (null != value) {
    str = value;
  }
  obj1.variant = str;
  const items2 = [null, arg1(dependencyMap[8]).humanizeValue(value, stateFromStores)];
  obj1.children = items2;
  obj.children = closure_4(arg1(dependencyMap[7]).Text, obj1);
  return closure_5(View, obj);
};
