// Module ID: 7525
// Function ID: 59997
// Name: BuyNitroPerk
// Dependencies: [31, 27, 33, 4130, 689, 5165, 7526, 2]
// Exports: default

// Module 7525 (BuyNitroPerk)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { x: 0, y: 0 };
let closure_8 = { x: 1, y: 1 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.iconTile = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerk.tsx");

export default function BuyNitroPerk(perk) {
  let end;
  let selectedTier;
  let start;
  perk = perk.perk;
  const onOpenDetails = perk.onOpenDetails;
  ({ selectedTier, start, end } = perk);
  let tmp2 = !perk.disabled;
  if (tmp2) {
    tmp2 = null != perk.detail;
  }
  let obj = { label: perk.label, subLabel: perk.subLabel, disabled: perk.disabled };
  obj = { style: _createForOfIteratorHelperLoose().iconTile };
  obj = { selectedTier, nitroColors: perk.iconGradient, basicColors: perk.iconGradientBasic, start: closure_7, end: closure_8, style: absoluteFill.absoluteFill };
  const items = [callback(onOpenDetails(7526), obj), ];
  const tmp = _createForOfIteratorHelperLoose();
  const tmp4 = callback;
  items[1] = callback(perk.IconComponent, { size: "sm", color: onOpenDetails(689).colors.WHITE });
  obj.children = items;
  obj.icon = callback2(closure_4, obj);
  obj.arrow = tmp2;
  let fn;
  if (tmp2) {
    fn = () => onOpenDetails(perk);
  }
  obj.onPress = fn;
  obj.start = start;
  obj.end = end;
  return tmp4(perk(5165).TableRow, obj);
};
