// Module ID: 15240
// Function ID: 116288
// Name: placeholderRowWidth
// Dependencies: [31, 27, 33, 15179, 689, 11671, 3991, 15218, 2]
// Exports: ICYMILoading

// Module 15240 (placeholderRowWidth)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function placeholderRowWidth(arg0, arg1, arg2) {
  const result = 100 * Math.sin(arg0);
  return (result - Math.floor(result)) * (arg2 - arg1) + arg1;
}
function ICYMILoadingItem() {
  let avatarTitle;
  let subtitle;
  let title;
  const tmp = callback3();
  const tmp2 = importDefault(11671)({ visible: true, animated: true });
  const memo = React.useMemo(() => ({ avatarTitle: Math.floor(10 * Math.random()), title: Math.floor(10 * Math.random()), subtitle: Math.floor(10 * Math.random()) }), []);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.avatarRow };
  ({ avatarTitle, title, subtitle } = memo);
  const items = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  const items1 = [callback(importDefault(3991).View, { style: items }), ];
  const obj1 = {};
  const items2 = [, , , ];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj2 = { width: "" + placeholderRowWidth(avatarTitle, 30, 60) + "%" };
  items2[3] = obj2;
  obj1.style = items2;
  items1[1] = callback(importDefault(3991).View, obj1);
  obj.children = items1;
  const items3 = [callback2(View, obj), , , ];
  const obj3 = {};
  const items4 = [, , , ];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj4 = { width: "" + placeholderRowWidth(title, 75, 100) + "%" };
  items4[3] = obj4;
  obj3.style = items4;
  items3[1] = callback(importDefault(3991).View, obj3);
  const obj5 = {};
  const items5 = [, , , ];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj6 = { width: "" + placeholderRowWidth(subtitle, 75, 100) + "%" };
  items5[3] = obj6;
  obj5.style = items5;
  items3[2] = callback(importDefault(3991).View, obj5);
  const items6 = [, , ];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  items3[3] = callback(importDefault(3991).View, { style: items6 });
  obj.children = items3;
  const items7 = [callback2(View, obj), callback(require(15218) /* Separator */.Separator, {})];
  obj.children = items7;
  return callback2(closure_7, obj);
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
let closure_8 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE };
  obj.backgroundColor = obj;
  obj.container = { padding: margin.margin };
  obj = { flexDirection: "row", alignItems: "center", marginBottom: margin.margin };
  obj.avatarRow = obj;
  const obj1 = { width: 40, height: 40, borderRadius: importDefault(689).radii.md, marginRight: importDefault(689).space.PX_12 };
  obj.avatar = obj1;
  obj.avatarTitle = { height: 18, borderRadius: 10, flexShrink: 1 };
  obj.title = { height: importDefault(689).space.PX_16, marginBottom: importDefault(689).space.PX_12, borderRadius: 10, flexShrink: 1 };
  const obj2 = { height: importDefault(689).space.PX_16, marginBottom: importDefault(689).space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj.subtitle = { height: importDefault(689).space.PX_16, marginBottom: margin.margin, borderRadius: 10, flexShrink: 1 };
  const obj4 = { width: "100%", height: 240, borderRadius: importDefault(689).radii.lg };
  obj.image = obj4;
  obj.separator = {};
  return obj;
});
let result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = function ICYMILoading() {
  const obj = {};
  const items = [callback(ICYMILoadingItem, {}), callback(ICYMILoadingItem, {})];
  obj.children = items;
  return callback2(closure_7, obj);
};
