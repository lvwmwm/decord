// Module ID: 8142
// Function ID: 64414
// Name: ForumExplicitMediaAlert
// Dependencies: [31, 27, 33, 4130, 689, 4561, 4126, 1212, 4543, 5459, 8143, 2]
// Exports: default

// Module 8142 (ForumExplicitMediaAlert)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "stretch" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonContainer = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("jsxProd").fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  let importDefault;
  let onClose;
  let require;
  ({ channelId: require, messageId: importDefault, onClose } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { noDefaultButtons: true, style: tmp.container, onClose };
  obj = { accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default" };
  const items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  obj.style = items;
  const intl = require(onClose[7]).intl;
  obj.children = intl.string(require(onClose[7]).t.B3vFdU);
  const items1 = [callback(require(onClose[6]).Text, obj), , , ];
  obj = { style: null, maxFontSizeMultiplier: 1, variant: "text-md/normal" };
  const items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  obj.style = items2;
  const intl2 = require(onClose[7]).intl;
  obj.children = intl2.string(require(onClose[7]).t.i4AbAS);
  items1[1] = callback(require(onClose[6]).Text, obj);
  const obj1 = { style: tmp.buttonContainer };
  const obj2 = { variant: "primary", size: "md" };
  const intl3 = require(onClose[7]).intl;
  obj2.text = intl3.string(require(onClose[7]).t.WAI6xu);
  obj2.onPress = onClose;
  obj1.children = callback(require(onClose[8]).Button, obj2);
  items1[2] = callback(View, obj1);
  const obj3 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted" };
  const intl4 = require(onClose[7]).intl;
  obj3.children = intl4.format(require(onClose[7]).t["APQGZ+"], {
    handleFalsePositiveHook() {
      onClose();
      const result = outer1_0(onClose[10]).handleSenderFalsePositiveFlow(closure_0, closure_1);
    }
  });
  items1[3] = callback(require(onClose[9]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items1;
  return callback2(importDefault(onClose[5]), obj);
};
