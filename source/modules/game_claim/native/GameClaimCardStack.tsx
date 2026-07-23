// Module ID: 15019
// Function ID: 114444
// Name: importDefaultResult1
// Dependencies: [31, 27, 33, 689, 666, 4130, 8734, 2]
// Exports: default

// Module 15019 (importDefaultResult1)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult from "t";
import importDefaultResult1 from "t";
import importDefaultResult2 from "t";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const sum = require("_createForOfIteratorHelperLoose").space.PX_12 + require("_createForOfIteratorHelperLoose").space.PX_8 + 96;
const sum1 = sum + 4 + require("_createForOfIteratorHelperLoose").space.PX_16;
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.5);
const hexResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
const alphaResult1 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.25);
const hexResult1 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
const alphaResult2 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.35);
let obj = {};
obj = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 + 4 };
obj.container = obj;
let obj1 = { width: 72, height: 96, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", flexShrink: 0 };
let items = [{ rotate: "-6deg" }];
obj1.transform = items;
obj1.shadowColor = require("_createForOfIteratorHelperLoose").colors.BLACK;
obj1.shadowOffset = { width: 0, height: 2 };
obj1.shadowOpacity = 0.25;
obj1.shadowRadius = 4;
obj1.elevation = 4;
obj.gameCard = obj1;
obj.gameImage = { width: "100%", height: "100%" };
const obj2 = { width: 72, height: 96, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, flexShrink: 0, transform: null, borderWidth: 2, borderStyle: "dashed" };
const items1 = [{ rotate: "6deg" }];
obj2.transform = items1;
obj2.borderColor = hexResult;
obj2.backgroundColor = hexResult1;
obj2.alignItems = "center";
obj2.justifyContent = "center";
obj2.marginStart = -require("_createForOfIteratorHelperLoose").space.PX_8;
obj2.marginTop = require("_createForOfIteratorHelperLoose").space.PX_8;
obj.addCard = obj2;
const obj3 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.35).hex(), alignItems: "center", justifyContent: "center" };
obj.addIconWrapper = obj3;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const hexResult2 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.35).hex();
const result = require("jsxProd").fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(uri) {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.gameCard, children: callback(closure_2, obj) };
  obj = { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" };
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.addCard, children: callback(closure_3, { style: tmp.addIconWrapper, children: callback(require(8734) /* PlusSmallIcon */.PlusSmallIcon, { size: "sm", color: "text-brand" }) }) };
  items[1] = callback(closure_3, obj1);
  obj.children = items;
  return callback2(closure_3, obj);
};
export const CARD_STACK_HEIGHT = sum1;
