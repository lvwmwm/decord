// Module ID: 7188
// Function ID: 57852
// Name: PaymentFlowWarningMessage
// Dependencies: []
// Exports: default

// Module 7188 (PaymentFlowWarningMessage)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { 0: "scalar", 0: 6, 0: "emoji_frecency", 0: "message", 0: 7, 0: "All Masks", borderRadius: importDefault(dependencyMap[4]).radii.xs, backgroundColor: arg1(dependencyMap[5]).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.container = obj;
obj.icon = { marginRight: 10 };
obj.text = { flexShrink: 1 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon, color: importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [callback(arg1(dependencyMap[6]).WarningCircle, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = callback(arg1(dependencyMap[7]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
