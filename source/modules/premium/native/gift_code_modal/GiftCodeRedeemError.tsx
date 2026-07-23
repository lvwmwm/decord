// Module ID: 12262
// Function ID: 95733
// Name: GiftCodeRedeemError
// Dependencies: [31, 27, 33, 4130, 689, 1457, 5121, 12263, 12264, 4126, 1212, 4543, 4337, 2]
// Exports: default

// Module 12262 (GiftCodeRedeemError)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_3, View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
_createForOfIteratorHelperLoose.header = { marginTop: 32, textAlign: "center" };
_createForOfIteratorHelperLoose.message = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(1457) /* Link */;
  const theme = obj.useTheme();
  obj = { bottom: true, style: tmp.container };
  obj = { contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  const obj1 = {};
  if (theme.dark) {
    let tmp7Result = tmp7(12263);
  } else {
    tmp7Result = tmp7(12264);
  }
  obj1.source = tmp7Result;
  const items = [callback(closure_3, obj1), , ];
  const obj2 = { variant: "heading-xl/bold", style: tmp.header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.formatToMarkdownString(require(1212) /* getSystemLocale */.t.JUvC0s, {});
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  items[2] = callback(require(4126) /* Text */.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj.children = items;
  const items1 = [closure_7(closure_5, obj), ];
  const obj4 = { style: tmp.footer };
  const obj5 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl2.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj5.size = "md";
  obj5.onPress = function onPress() {
    return outer1_1(outer1_2[12]).pop();
  };
  obj4.children = callback(require(4543) /* Button */.Button, obj5);
  items1[1] = callback(closure_4, obj4);
  obj.children = items1;
  return closure_7(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
