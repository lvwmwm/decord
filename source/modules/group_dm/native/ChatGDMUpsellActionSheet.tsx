// Module ID: 10873
// Function ID: 84585
// Name: ChatGDMUpsellActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 1557, 3946, 1334, 4098, 5187, 5085, 10874, 4543, 1212, 5189, 4126, 10875, 4074, 2]
// Exports: default

// Module 10873 (ChatGDMUpsellActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.footer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.noticeContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.innerContainer = { flexDirection: "row", alignItems: "center", paddingBottom: 16 };
_createForOfIteratorHelperLoose.secondInnerContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.text = { flex: 1 };
_createForOfIteratorHelperLoose.titleImage = { padding: 16, justifyContent: "center", alignItems: "center" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, marginRight: 16, height: 40, width: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.item = obj3;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.button = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("jsxProd").fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default function ChatGDMUpsellActionSheet(onClick) {
  onClick = onClick.onClick;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [onClick];
  const callback = React.useCallback(() => {
    const result = onClick(outer1_2[6]).UNSAFE_markDismissibleContentAsDismissed(onClick(outer1_2[7]).DismissibleContent.GDM_INVITE_REMINDER);
    const obj = onClick(outer1_2[6]);
    outer1_1(outer1_2[8]).hideActionSheet();
    onClick();
  }, items);
  let obj = { showGradient: true, scrollable: true, startExpanded: true };
  obj = { style: tmp.titleImage };
  obj = { source: importDefault(10874), resizeMode: "contain" };
  obj.children = callback(importDefault(5085), obj);
  obj.header = callback(View, obj);
  const obj1 = { style: items1 };
  items1 = [tmp.footer, ];
  const tmp3 = importDefault(5085);
  items1[1] = { padding: 16, paddingBottom: importDefault(1557)().bottom + 16 };
  const obj3 = {};
  const intl = onClick(1212).intl;
  obj3.text = intl.string(onClick(1212).t["3PatSz"]);
  obj3.onPress = callback;
  const items2 = [callback(onClick(4543).Button, obj3), ];
  const obj4 = { style: tmp.button };
  const obj5 = {};
  const intl2 = onClick(1212).intl;
  obj5.text = intl2.string(onClick(1212).t["ETE/oC"]);
  obj5.onPress = function onPress() {
    outer1_1(outer1_2[8]).hideActionSheet();
  };
  obj5.variant = "tertiary";
  obj4.children = callback(onClick(4543).Button, obj5);
  items2[1] = callback(View, obj4);
  obj1.children = items2;
  obj.footer = callback2(View, obj1);
  const obj6 = {};
  const obj7 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header" };
  const intl3 = onClick(1212).intl;
  obj7.children = intl3.string(onClick(1212).t["bkqux/"]);
  const items3 = [callback(onClick(4126).Text, obj7), , ];
  const obj8 = { style: tmp.body, variant: "text-md/medium", color: "text-muted" };
  const intl4 = onClick(1212).intl;
  obj8.children = intl4.string(onClick(1212).t.N6TdqN);
  items3[1] = callback(onClick(4126).Text, obj8);
  const obj9 = { style: tmp.noticeContainer };
  const obj10 = { style: tmp.innerContainer };
  const obj2 = { padding: 16, paddingBottom: importDefault(1557)().bottom + 16 };
  const items4 = [callback(View, { style: tmp.item, children: callback(onClick(10875).TimerIcon, { size: "sm" }) }), ];
  const obj12 = { style: tmp.text, variant: "text-sm/medium", color: "text-default" };
  const intl5 = onClick(1212).intl;
  obj12.children = intl5.string(onClick(1212).t.Fq3DJb);
  items4[1] = callback(onClick(4126).Text, obj12);
  obj10.children = items4;
  const items5 = [callback2(View, obj10), ];
  const obj13 = { style: tmp.secondInnerContainer };
  const obj11 = { style: tmp.item, children: callback(onClick(10875).TimerIcon, { size: "sm" }) };
  const items6 = [callback(View, { style: tmp.item, children: callback(onClick(4074).LinkIcon, { size: "sm" }) }), ];
  const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default" };
  const intl6 = onClick(1212).intl;
  obj15.children = intl6.string(onClick(1212).t.XKbf2G);
  items6[1] = callback(onClick(4126).Text, obj15);
  obj13.children = items6;
  items5[1] = callback2(View, obj13);
  obj9.children = items5;
  items3[2] = callback2(View, obj9);
  obj6.children = items3;
  obj.children = callback2(onClick(5189).BottomSheetScrollView, obj6);
  return callback(onClick(5187).BottomSheet, obj);
};
