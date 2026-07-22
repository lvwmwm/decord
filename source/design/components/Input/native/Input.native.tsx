// Module ID: 7500
// Function ID: 60145
// Name: Input
// Dependencies: []
// Exports: Input

// Module 7500 (Input)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flexDirection: "row", gap: importDefault(dependencyMap[4]).space.PX_8, marginTop: importDefault(dependencyMap[4]).space.PX_4, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
obj.inputRow = obj;
const obj1 = { 0: "<string:1912603085>", 0: true, 0: true, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
obj.labelWrapper = obj1;
const tmp3 = arg1(dependencyMap[2]);
obj.label = { marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const obj2 = { marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
obj.description = { marginTop: importDefault(dependencyMap[4]).space.PX_4 };
const obj3 = { marginTop: importDefault(dependencyMap[4]).space.PX_4 };
obj.error = { marginTop: importDefault(dependencyMap[4]).space.PX_4, width: "auto" };
let closure_5 = obj.createStyles(obj);
const obj4 = { marginTop: importDefault(dependencyMap[4]).space.PX_4, width: "auto" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  let children;
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let labelId;
  let labelTrailing;
  let required;
  const tmp = callback3();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  if ("string" === typeof label) {
    if (true === required) {
      const intl = arg1(dependencyMap[5]).intl;
      const _HermesInternal = HermesInternal;
      const combined = "" + label + " (" + intl.string(arg1(dependencyMap[5]).t.EkokLy) + ")";
    }
  }
  let obj = { style: containerStyle };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: tmp.inputRow, children };
    items[1] = callback(View, obj);
    let tmp22 = null;
    if (null != description) {
      obj = { cachedAt: "center", edpbxy: "center", style: tmp.description, children: description };
      tmp22 = callback(arg1(dependencyMap[6]).Text, obj);
    }
    items[2] = tmp22;
    let tmp26 = null;
    if (null != errorMessage) {
      const obj1 = { style: tmp.error, children: errorMessage };
      tmp26 = callback(arg1(dependencyMap[7]).ErrorText, obj1);
    }
    items[3] = tmp26;
    obj.children = items;
    return tmp7(tmp8, obj);
  } else if (null != labelTrailing) {
    const obj2 = { style: tmp.labelWrapper };
    const obj3 = { cachedAt: true, edpbxy: true, nativeID: labelId, children: label };
    const items1 = [callback(arg1(dependencyMap[6]).Text, obj3), labelTrailing];
    obj2.children = items1;
    let tmp30Result = callback2(View, obj2);
  } else {
    const obj4 = { cachedAt: true, edpbxy: true, style: tmp.label, nativeID: labelId, accessibilityLabel: combined };
    const items2 = [label, ];
    let tmp12 = null;
    if (required) {
      const obj5 = { cachedAt: "/assets/.cache/intl/ZGVzaWdu", edpbxy: null, cos: "5a487b732abaf0eeae777df0c577f380", children: [-10111734812216596000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009748035637130972] };
      tmp12 = callback2(arg1(dependencyMap[6]).Text, obj5);
    }
    items2[1] = tmp12;
    obj4.children = items2;
    tmp30Result = callback2(arg1(dependencyMap[6]).Text, obj4);
    const tmp30 = callback2;
  }
};
