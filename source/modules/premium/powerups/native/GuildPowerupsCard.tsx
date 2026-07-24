// Module ID: 11628
// Function ID: 90410
// Name: importDefaultResult1
// Dependencies: [31, 27, 33, 4130, 666, 689, 5167, 2]
// Exports: default

// Module 11628 (importDefaultResult1)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";
import importDefaultResult1 from "t";
import importDefaultResult2 from "t";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360);
_createForOfIteratorHelperLoose.borderColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360).alpha(0.35).hex();
_createForOfIteratorHelperLoose.cardActive = _createForOfIteratorHelperLoose;
const obj1 = {};
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300);
obj1.borderColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
_createForOfIteratorHelperLoose.cardExpiring = obj1;
const obj2 = {};
const alphaResult1 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300);
obj2.borderColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
_createForOfIteratorHelperLoose.cardRemoving = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const alphaResult2 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300).alpha(0.35);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  let children;
  let containerStyle;
  let style;
  status = status.status;
  let obj = { children: 0, containerStyle: 0, status: 0, style: 0 };
  ({ children, containerStyle, style } = status);
  Object.setPrototypeOf(null);
  const merged = Object.assign(status, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = { style: containerStyle };
  obj = { border: "faint", radius: 16, shadow: "none" };
  const merged1 = Object.assign(merged);
  let type;
  if (null != status) {
    type = status.type;
  }
  const items = ["active" === type && tmp3.cardActive, , , ];
  let type1;
  if (null != status) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp3.cardExpiring;
  let type2;
  if (null != status) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp3.cardRemoving;
  items[3] = style;
  obj["style"] = items;
  obj["children"] = children;
  obj.children = jsx(require(5167) /* getCardBackgroundToken */.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View border="faint" radius={16} shadow="none" />;
};
