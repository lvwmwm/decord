// Module ID: 15119
// Function ID: 114090
// Name: ICYMIHeader
// Dependencies: []
// Exports: default

// Module 15119 (ICYMIHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createICYMIStyles((margin) => {
  let obj = { text: obj };
  obj = { 1449229240: "row", 371666258: "center", marginHorizontal: margin.margin };
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
  obj.separator = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.separator };
  const items = [callback(View, obj), ];
  obj = { "Null": "String", "Null": "kind", "Null": "justifyContent", style: tmp.text };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.jnXV/V);
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  obj.children = items;
  return callback2(closure_5, obj);
};
