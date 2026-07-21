// Module ID: 14043
// Function ID: 106776
// Name: SynchronizeIcon
// Dependencies: []
// Exports: default

// Module 14043 (SynchronizeIcon)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default function SynchronizeIcon(iconStyles) {
  const fill = iconStyles.fill;
  let obj = { 978428631: false, 723669468: false, -749621663: false, 1996055172: false, 1705264465: false, -103308603: false, style: iconStyles.iconStyles, fill };
  obj = { id: "Frame_-_24px", children: callback(arg1(dependencyMap[2]).Rect, { "Bool(false)": 23710529, "Bool(false)": 1090588928, "Bool(false)": 69556, "Bool(false)": 1674133777 }) };
  const items = [callback(arg1(dependencyMap[2]).G, obj), ];
  obj = { id: "Filled_Icons" };
  const obj1 = {};
  const items1 = [callback(arg1(dependencyMap[2]).Path, { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" }), callback(arg1(dependencyMap[2]).Path, { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" })];
  obj1.children = items1;
  obj.children = callback2(arg1(dependencyMap[2]).G, obj1);
  items[1] = callback(arg1(dependencyMap[2]).G, obj);
  obj.children = items;
  return callback2(importDefault(dependencyMap[2]), obj);
};
