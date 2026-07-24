// Module ID: 12459
// Function ID: 96668
// Name: CheckIcon
// Dependencies: [57, 31, 27, 653, 1851, 33, 4130, 689, 4973, 4066, 3976, 1273, 12460, 12461, 4126, 1212, 4554, 7432, 3776, 12462, 12463, 5085, 12464, 12465, 12466, 12467, 12468, 2]
// Exports: default

// Module 12459 (CheckIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import { HorizontalGradient } from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function CheckIcon() {
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const tmp = importDefault(4066)();
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  const isThemeDarkResult = obj.isThemeDark(importDefault(4066)());
  obj = { source: importDefault(12460) };
  obj.color = obj.isThemeDark(importDefault(4066)()) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  obj.size = require(1273) /* Button */.IconSizes.SMALL;
  return callback2(require(1273) /* Button */.Icon, obj);
}
function CloseIcon() {
  const obj = { source: importDefault(12461), style: callback3().icon, size: require(1273) /* Button */.IconSizes.SMALL };
  return callback2(require(1273) /* Button */.Icon, obj);
}
function CellText(text) {
  const obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: text.text };
  return callback2(require(4126) /* Text */.Text, obj);
}
function getAccesibilityLabel(column2AccessibilityLabel, rowNumber, columnNumber, rowName, intl) {
  intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.EZjXN3, { accessibilityLabel: column2AccessibilityLabel, rowNumber, rowName, columnNumber, columnName: intl });
}
function Row(withTopBorderRadius) {
  let column1;
  let column1AccessibilityLabel;
  let column2;
  let column2AccessibilityLabel;
  let disableHighlightColumn2;
  let highlightColumn1;
  let label;
  let rowName;
  let rowNumber;
  let withBottomBorder;
  ({ column2, withBottomBorder } = withTopBorderRadius);
  ({ label, column1 } = withTopBorderRadius);
  if (withBottomBorder === undefined) {
    withBottomBorder = true;
  }
  let flag = withTopBorderRadius.withTopBorderRadius;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = withTopBorderRadius.withBottomBorderRadius;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ highlightColumn1, disableHighlightColumn2 } = withTopBorderRadius);
  if (disableHighlightColumn2 === undefined) {
    disableHighlightColumn2 = false;
  }
  let str = withTopBorderRadius.variant;
  if (str === undefined) {
    str = "default";
  }
  let flag3 = withTopBorderRadius.disableAccessibility;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ rowName, column1AccessibilityLabel, column2AccessibilityLabel, rowNumber } = withTopBorderRadius);
  let _require;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(0), 2);
  _require = tmp2[1];
  let num = 0;
  if (withBottomBorder) {
    num = 1;
  }
  let num2 = 0;
  if (flag) {
    num2 = 2;
  }
  let num3 = 0;
  if (flag2) {
    num3 = 2;
  }
  let obj = {};
  const items = [tmp.row, ];
  if (withBottomBorder) {
    withBottomBorder = tmp.bottomBorder;
  }
  items[1] = withBottomBorder;
  obj.style = items;
  obj.onLayout = function onLayout(nativeEvent) {
    return callback(nativeEvent.nativeEvent.layout.height);
  };
  obj = { style: items1 };
  items1 = [, ];
  ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
  obj.accessible = !flag3;
  obj.accessibilityLabel = rowName;
  obj.children = label;
  const items2 = [callback2(View, obj), , ];
  obj = {};
  const items3 = [, , , , ];
  ({ cell: arr4[0], dataCell: arr4[1] } = tmp);
  let themedHighlightedCell = highlightColumn1;
  if (highlightColumn1) {
    themedHighlightedCell = tmp.themedHighlightedCell;
  }
  items3[2] = themedHighlightedCell;
  let topBorderRadius = flag;
  if (flag) {
    topBorderRadius = tmp.topBorderRadius;
  }
  items3[3] = topBorderRadius;
  let bottomBorderRadius = flag2;
  if (flag2) {
    bottomBorderRadius = tmp.bottomBorderRadius;
  }
  items3[4] = bottomBorderRadius;
  obj.style = items3;
  let tmp7;
  if (null != column1AccessibilityLabel) {
    const intl = _require(1212).intl;
    tmp7 = getAccesibilityLabel(column1AccessibilityLabel, rowNumber, 1, rowName, intl.string(_require(1212).t["t9uG/o"]));
  }
  obj.accessibilityLabel = tmp7;
  obj.accessible = !flag3;
  obj.children = column1;
  items2[1] = callback2(View, obj);
  if ("nitro_home" === str) {
    if (!highlightColumn1) {
      if (!disableHighlightColumn2) {
        let obj1 = {};
        let topBorderRadius2 = flag;
        if (flag) {
          topBorderRadius2 = tmp.topBorderRadius;
        }
        const items4 = [topBorderRadius2, , , , , ];
        let tmp16 = flag;
        if (flag) {
          const obj2 = { borderTopColor: c13, borderTopWidth: 2 };
          tmp16 = obj2;
        }
        items4[1] = tmp16;
        let bottomBorderRadius2 = flag2;
        if (flag2) {
          bottomBorderRadius2 = tmp.bottomBorderRadius;
        }
        items4[2] = bottomBorderRadius2;
        let tmp18 = flag2;
        if (flag2) {
          const obj3 = { borderBottomColor: c13, borderBottomWidth: 2 };
          tmp18 = obj3;
        }
        items4[3] = tmp18;
        items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
        const obj4 = { overflow: "hidden" };
        items4[5] = obj4;
        obj1.style = items4;
        let tmp20;
        if (null != column2AccessibilityLabel) {
          const intl2 = _require(1212).intl;
          tmp20 = getAccesibilityLabel(column2AccessibilityLabel, rowNumber, 2, rowName, intl2.string(_require(1212).t.lG6a5x));
        }
        obj1.accessibilityLabel = tmp20;
        obj1.accessible = !flag3;
        const obj5 = {};
        const obj6 = { height: tmp2[0] - (num + num2 + num3) };
        const items5 = [obj6, tmp.dataCell];
        obj5.style = items5;
        obj5.start = HorizontalGradient.START;
        obj5.end = HorizontalGradient.END;
        obj5.colors = ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"];
        obj5.children = column2;
        obj1.children = callback2(importDefault(4554), obj5);
      }
      items2[2] = tmp14(tmp15, obj1);
      obj.children = items2;
      return closure_12(View, obj);
    }
  }
  const obj7 = {};
  const items6 = [, , , , ];
  ({ cell: arr7[0], dataCell: arr7[1] } = tmp);
  items6[2] = !highlightColumn1 && !disableHighlightColumn2 && tmp.themedHighlightedCell;
  if (flag) {
    flag = tmp.topBorderRadius;
  }
  items6[3] = flag;
  if (flag2) {
    flag2 = tmp.bottomBorderRadius;
  }
  items6[4] = flag2;
  obj7.style = items6;
  let tmp32;
  if (null != column2AccessibilityLabel) {
    const intl3 = _require(1212).intl;
    tmp32 = getAccesibilityLabel(column2AccessibilityLabel, rowNumber, 2, rowName, intl3.string(_require(1212).t.lG6a5x));
  }
  obj7.accessibilityLabel = tmp32;
  obj7.accessible = !flag3;
  obj7.children = column2;
  obj1 = obj7;
}
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PRICE_PLACEHOLDER: closure_8, PremiumTypes: closure_9, SubscriptionPlans: closure_10 } = GuildFeatures);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = "rgba(184, 69, 193, 0.5)";
_createForOfIteratorHelperLoose = { container: { display: "flex", flex: 1, width: "100%" }, headerText: { textAlign: "center" }, logo: { marginTop: 8, marginBottom: -6 }, table: { marginTop: 16 }, row: { display: "flex", flexDirection: "row" }, bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 } };
_createForOfIteratorHelperLoose = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.topBorderRadius = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bottomBorderRadius = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.cell = { paddingVertical: 12 };
_createForOfIteratorHelperLoose.labelCell = { flex: 1, justifyContent: "flex-start" };
_createForOfIteratorHelperLoose.dataCell = { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 };
let obj1 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.themedHighlightedCell = { backgroundColor: require("result").PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
_createForOfIteratorHelperLoose.nitroHomeHightlightedBorderLeftRight = { borderLeftColor: "rgba(184, 69, 193, 0.5)", borderLeftWidth: 2, borderRightColor: "rgba(184, 69, 193, 0.5)", borderRightWidth: 2 };
_createForOfIteratorHelperLoose.premiumGroupCard = { marginTop: 16 };
_createForOfIteratorHelperLoose.priceContainer = { alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = {};
let obj2 = { backgroundColor: require("result").PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj3.icon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj3);
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default function PremiumFeaturesTable(highlightNitroBasic) {
  let isFractionalOnly;
  let isPremiumGroup;
  let titleOverride;
  let flag = highlightNitroBasic.highlightNitroBasic;
  if (flag === undefined) {
    flag = false;
  }
  let str = highlightNitroBasic.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ titleOverride, isFractionalOnly, isPremiumGroup } = highlightNitroBasic);
  if (isPremiumGroup === undefined) {
    isPremiumGroup = false;
  }
  const premiumGroupRole = highlightNitroBasic.premiumGroupRole;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = str(isPremiumGroup[9])();
  const tmp3 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_0);
  const tmp4 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (null != tmp3) {
    priceString = tmp3.priceString;
  }
  if (null == priceString) {
    priceString = closure_8;
  }
  let priceString1;
  if (null != tmp4) {
    priceString1 = tmp4.priceString;
  }
  if (null == priceString1) {
    priceString1 = closure_8;
  }
  let obj = flag(isPremiumGroup[18]);
  const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(closure_9.TIER_0);
  let obj1 = flag(isPremiumGroup[18]);
  const maxFileSizeForPremiumType1 = obj1.getMaxFileSizeForPremiumType(closure_9.TIER_2);
  obj = { column1: callback2(str(isPremiumGroup[19]), obj), column2: callback2(str(isPremiumGroup[20]), obj1), withBottomBorder: false, disableAccessibility: true };
  obj = { style: tmp.logo, width: 48, height: 9 };
  obj1 = { style: tmp.logo, width: 50, height: 9 };
  obj.hidden = !isPremiumGroup;
  const items = [obj, , , , , , , , , , ];
  const obj2 = { column1: null, column2: null, withBottomBorder: false, withTopBorderRadius: true, disableAccessibility: true };
  const obj3 = { accessible: true };
  const intl = flag(isPremiumGroup[15]).intl;
  obj3.accessibilityLabel = intl.string(flag(isPremiumGroup[15]).t["t9uG/o"]);
  obj3.style = tmp.logo;
  let obj7 = flag(isPremiumGroup[10]);
  if (obj7.isThemeDark(tmp2)) {
    let tmp11Result = tmp11(tmp12[22]);
  } else {
    tmp11Result = tmp11(tmp12[23]);
  }
  obj3.source = tmp11Result;
  obj2.column1 = callback2(str(isPremiumGroup[21]), obj3);
  const obj4 = { accessible: true };
  const tmp10 = str(isPremiumGroup[21]);
  const tmp14 = callback2;
  const tmp9 = callback2;
  const intl2 = flag(isPremiumGroup[15]).intl;
  obj4.accessibilityLabel = intl2.string(flag(isPremiumGroup[15]).t.lG6a5x);
  obj4.style = tmp.logo;
  let obj9 = flag(isPremiumGroup[10]);
  if (obj9.isThemeDark(tmp2)) {
    let tmp16Result = tmp16(tmp17[24]);
  } else {
    tmp16Result = tmp16(tmp17[25]);
  }
  obj4.source = tmp16Result;
  obj2.column2 = tmp14(str(isPremiumGroup[21]), obj4);
  obj2.hidden = isPremiumGroup;
  items[1] = obj2;
  const obj5 = {};
  const obj6 = {};
  const intl3 = flag(isPremiumGroup[15]).intl;
  obj6.text = intl3.string(flag(isPremiumGroup[15]).t.LkKGZ2);
  obj5.label = callback2(CellText, obj6);
  const intl4 = flag(isPremiumGroup[15]).intl;
  obj5.rowName = intl4.string(flag(isPremiumGroup[15]).t.LkKGZ2);
  obj7 = { style: tmp.priceContainer };
  const parts = priceString.split(/ (?=\()/g);
  obj7.children = parts.map((text) => outer1_11(outer1_18, { text }, text));
  obj5.column1 = callback2(View, obj7);
  obj5.column1AccessibilityLabel = priceString;
  const obj8 = { style: tmp.priceContainer };
  const parts1 = priceString1.split(/ (?=\()/g);
  obj8.children = parts1.map((text) => outer1_11(outer1_18, { text }, text));
  obj5.column2 = callback2(View, obj8);
  obj5.column2AccessibilityLabel = priceString1;
  items[2] = obj5;
  obj9 = {};
  const obj10 = {};
  const intl5 = flag(isPremiumGroup[15]).intl;
  obj10.text = intl5.string(flag(isPremiumGroup[15]).t.ORlUdL);
  obj9.label = callback2(CellText, obj10);
  const intl6 = flag(isPremiumGroup[15]).intl;
  obj9.rowName = intl6.string(flag(isPremiumGroup[15]).t.ORlUdL);
  obj9.column1 = callback2(CheckIcon, {});
  const intl7 = flag(isPremiumGroup[15]).intl;
  obj9.column1AccessibilityLabel = intl7.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  obj9.column2 = callback2(CheckIcon, {});
  const intl8 = flag(isPremiumGroup[15]).intl;
  obj9.column2AccessibilityLabel = intl8.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  items[3] = obj9;
  const obj11 = {};
  const obj12 = {};
  const intl9 = flag(isPremiumGroup[15]).intl;
  obj12.text = intl9.string(flag(isPremiumGroup[15]).t["ufhQC+"]);
  obj11.label = callback2(CellText, obj12);
  const intl10 = flag(isPremiumGroup[15]).intl;
  obj11.rowName = intl10.string(flag(isPremiumGroup[15]).t["ufhQC+"]);
  const obj13 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType };
  obj11.column1 = callback2(flag(isPremiumGroup[14]).Text, obj13);
  obj11.column1AccessibilityLabel = maxFileSizeForPremiumType;
  const obj14 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType1 };
  obj11.column2 = callback2(flag(isPremiumGroup[14]).Text, obj14);
  obj11.column2AccessibilityLabel = maxFileSizeForPremiumType1;
  items[4] = obj11;
  const obj15 = {};
  const obj16 = {};
  const intl11 = flag(isPremiumGroup[15]).intl;
  obj16.text = intl11.string(flag(isPremiumGroup[15]).t["svn/YX"]);
  obj15.label = callback2(CellText, obj16);
  const intl12 = flag(isPremiumGroup[15]).intl;
  obj15.rowName = intl12.string(flag(isPremiumGroup[15]).t["svn/YX"]);
  obj15.column1 = callback2(CheckIcon, {});
  const intl13 = flag(isPremiumGroup[15]).intl;
  obj15.column1AccessibilityLabel = intl13.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  obj15.column2 = callback2(CheckIcon, {});
  const intl14 = flag(isPremiumGroup[15]).intl;
  obj15.column2AccessibilityLabel = intl14.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  obj15.hidden = isFractionalOnly;
  items[5] = obj15;
  const obj17 = {};
  const obj18 = {};
  const intl15 = flag(isPremiumGroup[15]).intl;
  obj18.text = intl15.formatToPlainString(flag(isPremiumGroup[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj17.label = callback2(CellText, obj18);
  const intl16 = flag(isPremiumGroup[15]).intl;
  obj17.rowName = intl16.formatToPlainString(flag(isPremiumGroup[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj17.column1 = callback2(CloseIcon, {});
  const intl17 = flag(isPremiumGroup[15]).intl;
  obj17.column1AccessibilityLabel = intl17.string(flag(isPremiumGroup[15]).t.l4qZrp);
  obj17.column2 = callback2(CheckIcon, {});
  const intl18 = flag(isPremiumGroup[15]).intl;
  obj17.column2AccessibilityLabel = intl18.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  obj17.hidden = isFractionalOnly;
  items[6] = obj17;
  const obj21 = {};
  const obj22 = {};
  const intl19 = flag(isPremiumGroup[15]).intl;
  obj22.text = intl19.string(flag(isPremiumGroup[15]).t["Gv/rQ6"]);
  obj21.label = callback2(CellText, obj22);
  const intl20 = flag(isPremiumGroup[15]).intl;
  obj21.rowName = intl20.string(flag(isPremiumGroup[15]).t["Gv/rQ6"]);
  obj21.column1 = callback2(CloseIcon, {});
  const intl21 = flag(isPremiumGroup[15]).intl;
  obj21.column1AccessibilityLabel = intl21.string(flag(isPremiumGroup[15]).t.l4qZrp);
  obj21.column2 = callback2(CheckIcon, {});
  const intl22 = flag(isPremiumGroup[15]).intl;
  obj21.column2AccessibilityLabel = intl22.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  items[7] = obj21;
  const obj23 = {};
  const obj24 = {};
  const intl23 = flag(isPremiumGroup[15]).intl;
  obj24.text = intl23.string(flag(isPremiumGroup[15]).t.myyAEr);
  obj23.label = callback2(CellText, obj24);
  const intl24 = flag(isPremiumGroup[15]).intl;
  obj23.rowName = intl24.string(flag(isPremiumGroup[15]).t.myyAEr);
  obj23.column1 = callback2(CloseIcon, {});
  const intl25 = flag(isPremiumGroup[15]).intl;
  obj23.column1AccessibilityLabel = intl25.string(flag(isPremiumGroup[15]).t.l4qZrp);
  obj23.column2 = callback2(CheckIcon, {});
  const intl26 = flag(isPremiumGroup[15]).intl;
  obj23.column2AccessibilityLabel = intl26.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  items[8] = obj23;
  const obj25 = {};
  const obj26 = {};
  const intl27 = flag(isPremiumGroup[15]).intl;
  obj26.text = intl27.string(flag(isPremiumGroup[15]).t.S6yQr8);
  obj25.label = callback2(CellText, obj26);
  const intl28 = flag(isPremiumGroup[15]).intl;
  obj25.rowName = intl28.string(flag(isPremiumGroup[15]).t.S6yQr8);
  obj25.column1 = callback2(CloseIcon, {});
  const intl29 = flag(isPremiumGroup[15]).intl;
  obj25.column1AccessibilityLabel = intl29.string(flag(isPremiumGroup[15]).t.l4qZrp);
  obj25.column2 = callback2(CheckIcon, {});
  const intl30 = flag(isPremiumGroup[15]).intl;
  obj25.column2AccessibilityLabel = intl30.string(flag(isPremiumGroup[15]).t["tq+6t/"]);
  items[9] = obj25;
  items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
  const found = items.filter((hidden) => null != hidden && !hidden.hidden);
  const obj27 = { style: items1 };
  items1 = [tmp.container, highlightNitroBasic.style];
  const obj28 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  if (null == titleOverride) {
    const intl31 = flag(isPremiumGroup[15]).intl;
    titleOverride = intl31.string(flag(isPremiumGroup[15]).t.vLz3Zs);
  }
  obj28.children = titleOverride;
  const items2 = [callback2(flag(isPremiumGroup[14]).Text, obj28), , ];
  if (isPremiumGroup) {
    isPremiumGroup = null != premiumGroupRole;
  }
  if (isPremiumGroup) {
    const obj29 = { style: tmp.premiumGroupCard, premiumGroupRole };
    isPremiumGroup = callback2(str(isPremiumGroup[26]), obj29);
  }
  items2[1] = isPremiumGroup;
  const obj19 = { numBoosts: closure_7 };
  const obj20 = { numBoosts: closure_7 };
  const tmp15 = str(isPremiumGroup[21]);
  const tmp19 = closure_12;
  const tmp20 = View;
  const tmp21 = callback2;
  items2[2] = callback2(View, {
    style: tmp.table,
    children: found.map((arg0, arg1) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["highlightColumn1"] = flag;
      obj["disableHighlightColumn2"] = isPremiumGroup;
      obj["variant"] = str;
      obj["rowNumber"] = arg1;
      return outer1_11(outer1_20, obj, arg1);
    })
  });
  obj27.children = items2;
  return tmp19(tmp20, obj27);
};
