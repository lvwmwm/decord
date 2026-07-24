// Module ID: 11359
// Function ID: 88383
// Name: getContainerStyles
// Dependencies: [31, 27, 33, 689, 4130, 1273, 2]
// Exports: default

// Module 11359 (getContainerStyles)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getContainerStyles(arg0) {
  if (obj.RED === arg0) {
    obj = { backgroundColor: importDefault(689).colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: importDefault(689).colors.BORDER_FEEDBACK_CRITICAL };
    return obj;
  } else if (obj.YELLOW === arg0) {
    obj = { backgroundColor: importDefault(689).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(689).colors.STATUS_WARNING };
    return obj;
  }
}
function getTextColor(arg0) {
  if (obj.RED === arg0) {
    return importDefault(689).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (obj.YELLOW === arg0) {
    return importDefault(689).colors.TEXT_FEEDBACK_WARNING;
  }
}
let obj = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(getContainerStyles(arg0));
  obj["alignItems"] = "center";
  obj["borderRadius"] = importDefault(689).radii.xs;
  obj["borderWidth"] = 1;
  obj["padding"] = 8;
  obj["width"] = "100%";
  obj.container = obj;
  obj = { textAlign: "center", color: getTextColor(arg0) };
  obj.text = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  const tmp = callback(children.color);
  obj = { style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, obj) };
  obj = { style: tmp.text, children: children.children };
  return <View style={tmp.text}>{arg0.children}</View>;
};
export const MessageBlockColors = obj;
