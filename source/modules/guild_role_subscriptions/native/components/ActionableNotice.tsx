// Module ID: 16471
// Function ID: 128346
// Name: ActionableNotice
// Dependencies: [31, 27, 33, 4130, 4126, 4543, 2]
// Exports: default

// Module 16471 (ActionableNotice)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" }, message: { marginEnd: 27, flex: 3 }, actionButton: { flexGrow: 0, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
  let ctaMessage;
  let disabled;
  let message;
  let onClick;
  let style;
  let submitting;
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback2();
  let obj = { style: items };
  items = [style, tmp.container];
  obj = { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message };
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.actionButton };
  const obj1 = { size: "sm", onPress: onClick };
  if (!submitting) {
    submitting = disabled;
  }
  obj1.disabled = submitting;
  obj1.text = ctaMessage;
  obj.children = callback(require(4543) /* Button */.Button, obj1);
  items1[1] = callback(View, obj);
  obj.children = items1;
  return closure_4(View, obj);
};
