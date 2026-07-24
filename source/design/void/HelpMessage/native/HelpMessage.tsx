// Module ID: 13056
// Function ID: 100901
// Name: getIcon
// Dependencies: [31, 27, 33, 4130, 689, 665, 7577, 4086, 5776, 4091, 4126, 2]
// Exports: default

// Module 13056 (getIcon)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";
import pad2 from "pad2";

let closure_4;
let closure_5;
const require = arg1;
function getIcon(arg0) {
  if (pad2.WARNING === arg0) {
    let obj = { color: importDefault(689).unsafe_rawColors.YELLOW_300 };
    return callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, obj);
  } else if (pad2.INFO === arg0) {
    obj = { color: importDefault(689).unsafe_rawColors.BLUE_345 };
    return callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj);
  } else if (pad2.ERROR === arg0) {
    const obj1 = { color: importDefault(689).unsafe_rawColors.RED_400 };
    return callback(require(5776) /* CircleXIcon */.CircleXIcon, obj1);
  } else if (pad2.SUCCESS === arg0) {
    obj = { color: importDefault(689).unsafe_rawColors.GREEN_400 };
    return callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, obj);
  }
}
function useContainerStyle(messageType, warningContainer) {
  if (pad2.WARNING === messageType) {
    return warningContainer.warningContainer;
  } else if (pad2.INFO === messageType) {
    return warningContainer.infoContainer;
  } else if (pad2.ERROR === messageType) {
    return warningContainer.errorContainer;
  } else {
    return pad2.SUCCESS === messageType ? warningContainer.successContainer : undefined;
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderWidth: 1, borderStyle: "solid", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.content = { flex: 1, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj2 = {};
obj2.backgroundColor = pad2.int2rgba(pad2.hex2int(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300), 0.1);
obj2.borderColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300;
_createForOfIteratorHelperLoose.warningContainer = obj2;
const obj3 = {};
obj3.backgroundColor = pad2.int2rgba(pad2.hex2int(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345), 0.1);
obj3.borderColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345;
_createForOfIteratorHelperLoose.infoContainer = obj3;
const obj4 = {};
obj4.backgroundColor = pad2.int2rgba(pad2.hex2int(require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400), 0.1);
obj4.borderColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400;
_createForOfIteratorHelperLoose.errorContainer = obj4;
pad2 = {};
pad2.backgroundColor = pad2.int2rgba(pad2.hex2int(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400), 0.1);
pad2.borderColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400;
_createForOfIteratorHelperLoose.successContainer = pad2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
pad2 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
let obj1 = { flex: 1, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(textColor) {
  let messageType;
  let textVariant;
  ({ messageType, textVariant } = textColor);
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = textColor.borderRadius;
  if (xs === undefined) {
    xs = importDefault(689).radii.xs;
  }
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp3.container, useContainerStyle(messageType, tmp3), ];
  obj = { borderRadius: xs };
  items[2] = obj;
  obj.style = items;
  obj = { style: tmp3.row };
  const items1 = [getIcon(messageType), ];
  const obj1 = { style: tmp3.content, color: str, variant: textVariant, children: textColor.children };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  const items2 = [callback2(View, obj), textColor.button];
  obj.children = items2;
  return callback2(View, obj);
};
export const HelpMessageTypes = pad2;
