// Module ID: 13015
// Function ID: 13016
// Name: PremiumFeaturesTable
// Dependencies: [32, 19, 17, 1074, 1374, 21, 4836, 576, 5753, 4767, 4685, 1177, 13016, 13017, 4832, 1115, 5293, 8665, 4488, 13018, 13019, 5899, 13020, 13021, 13022, 13023, 13024, 2]
// Exports: default

// Module 13015 (PremiumFeaturesTable)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl32 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import AssetRegistryDefault from "AssetRegistry" /* 13016 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13017 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj6;
let unpackModuleId;
function CheckIcon() {
  let tmp6;
  const tmp3 = useThemeDefault();
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp3);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj2 = { source: AssetRegistryDefault, color: tmp6, size: native.IconSizes.SMALL };
  tmp6 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  const Icon = tmp4(1177).Icon;
  return unpackModuleId(Icon, obj2);
}
function CloseIcon() {
  let tmp;
  const obj = { source: AssetRegistryDefault2, style: tmp.icon, size: native.IconSizes.SMALL };
  tmp = closure_16();
  const Icon = native.Icon;
  return unpackModuleId(Icon, obj);
}
function CellText(children) {
  return unpackModuleId(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.text });
}
function Row(withTopBorderRadius) {
  let closure_0;
  let column1;
  let column1AccessibilityLabel;
  let column2;
  let column2AccessibilityLabel;
  let disableHighlightColumn2;
  let first;
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let formatToPlainStringResult2;
  let highlightColumn1;
  let items1;
  let items5;
  let label;
  let obj10;
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
  closure_0 = undefined;
  const tmp = closure_14();
  [first, closure_0] = react.useState(0);
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
  const items = [tmp.row, ];
  const tmp4 = closure_12;
  if (withBottomBorder) {
    withBottomBorder = tmp.bottomBorder;
  }
  const obj = {
    style: items,
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  items[1] = withBottomBorder;
  const obj2 = { style: items1, accessible: !flag3, accessibilityLabel: rowName, children: label };
  items1 = [, ];
  ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
  const items2 = [unpackModuleId(View, obj2), , ];
  const items3 = [, , , , ];
  ({ cell: arr4[0], dataCell: arr4[1] } = tmp);
  items3[2] = highlightColumn1 && tmp.themedHighlightedCell;
  items3[3] = flag && tmp.topBorderRadius;
  const obj3 = { style: items3, accessibilityLabel: formatToPlainStringResult, accessible: !flag3, children: column1 };
  const tmp7 = flag2 && tmp.bottomBorderRadius;
  items3[4] = tmp7;
  formatToPlainStringResult = undefined;
  if (null != column1AccessibilityLabel) {
    const intl = intl32.intl;
    const stringResult = intl.string(intl32.t["t9uG/o"]);
    const intl2 = intl32.intl;
    const obj4 = { accessibilityLabel: column1AccessibilityLabel, rowNumber, rowName, columnNumber: 1, columnName: stringResult };
    formatToPlainStringResult = intl2.formatToPlainString(intl32.t.EZjXN3, obj4);
  }
  items2[1] = unpackModuleId(View, obj3);
  if ("nitro_home" === str) {
    if (!highlightColumn1) {
      let obj7;
      if (!disableHighlightColumn2) {
        const items4 = [, , , , , ];
        const tmp12 = flag && tmp.topBorderRadius;
        items4[0] = tmp12;
        let tmp13 = flag;
        if (tmp13) {
          tmp13 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
          const obj5 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
        }
        items4[1] = tmp13;
        items4[2] = flag2 && tmp.bottomBorderRadius;
        let tmp15 = flag2;
        if (tmp15) {
          tmp15 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
          const obj6 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
        }
        obj7 = { style: items4, accessibilityLabel: formatToPlainStringResult1, accessible: !flag3, children: unpackModuleId(LinearGradientDefault, obj10) };
        items4[3] = tmp15;
        items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
        items4[5] = { overflow: "hidden" };
        formatToPlainStringResult1 = undefined;
        if (null != column2AccessibilityLabel) {
          const intl3 = intl32.intl;
          const stringResult1 = intl3.string(intl32.t.lG6a5x);
          const intl4 = intl32.intl;
          const obj8 = { accessibilityLabel: column2AccessibilityLabel, rowNumber, rowName, columnNumber: 2, columnName: stringResult1 };
          formatToPlainStringResult1 = intl4.formatToPlainString(intl32.t.EZjXN3, obj8);
        }
        const sum = num + num2 + num3;
        obj10 = { style: items5, start: null, end: null, colors: ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"], children: column2 };
        items5 = [{ height: first - sum }, tmp.dataCell];
        const obj11 = { height: first - sum };
        ({ START: obj9.start, END: obj9.end } = HorizontalGradient);
      }
      items2[2] = unpackModuleId(View, obj7);
      obj.children = items2;
      return tmp4(View, obj);
    }
  }
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
  const obj12 = { style: items6, accessibilityLabel: formatToPlainStringResult2, accessible: !flag3, children: column2 };
  items6[4] = flag2;
  formatToPlainStringResult2 = undefined;
  if (null != column2AccessibilityLabel) {
    const intl5 = intl32.intl;
    const stringResult2 = intl5.string(intl32.t.lG6a5x);
    const intl6 = intl32.intl;
    const obj23 = { accessibilityLabel: column2AccessibilityLabel, rowNumber, rowName, columnNumber: 2, columnName: stringResult2 };
    formatToPlainStringResult2 = intl6.formatToPlainString(intl32.t.EZjXN3, obj23);
  }
  obj7 = obj12;
}
const View = react_native.View;
const HorizontalGradient = Constants.HorizontalGradient;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportDefault, PRICE_PLACEHOLDER: metroImportAll, PremiumTypes: c9, SubscriptionPlans: c10 } = PremiumConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = "rgba(184, 69, 193, 0.5)";
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1, width: "100%" }, headerText: { textAlign: "center" }, logo: { marginTop: 8, marginBottom: -6 }, table: { marginTop: 16 }, row: { display: "flex", flexDirection: "row" }, bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 }, topBorderRadius: obj2, bottomBorderRadius: obj3, cell: { paddingVertical: 12 }, labelCell: { flex: 1, justifyContent: "flex-start" }, dataCell: { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 }, themedHighlightedCell: obj4, nitroHomeHightlightedBorderLeftRight: { borderLeftColor: "rgba(184, 69, 193, 0.5)", borderLeftWidth: 2, borderRightColor: "rgba(184, 69, 193, 0.5)", borderRightWidth: 2 }, premiumGroupCard: { marginTop: 16 }, priceContainer: { alignItems: "center" } };
obj2 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: LegacyTokens.PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { icon: obj6 };
obj6 = { tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj5);
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default function PremiumFeaturesTable(highlightNitroBasic) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isFractionalOnly;
  let isPremiumGroup;
  let items1;
  let items2;
  let obj10;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj20;
  let obj21;
  let obj23;
  let obj25;
  let obj27;
  let obj6;
  let obj9;
  let parts;
  let parts1;
  let size1;
  let titleOverride;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  let flag = highlightNitroBasic.highlightNitroBasic;
  const style = highlightNitroBasic.style;
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
  const tmp = closure_14();
  const tmp3 = isPremiumGroup;
  const tmp4 = str(isPremiumGroup[9])();
  const tmp5 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_0);
  const tmp6 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  if (priceString == null) {
    priceString = closure_8;
  }
  let priceString1;
  if (tmp6 != null) {
    priceString1 = tmp6.priceString;
  }
  if (priceString1 == null) {
    priceString1 = closure_8;
  }
  const tmp9 = flag;
  let obj = flag(tmp3[18]);
  const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(closure_9.TIER_0);
  const obj2 = flag(tmp3[18]);
  const maxFileSizeForPremiumType1 = obj2.getMaxFileSizeForPremiumType(closure_9.TIER_2);
  const obj3 = { column1: closure_11(str(tmp3[19]), size), column2: closure_11(str(tmp3[20]), size1), withBottomBorder: false, disableAccessibility: true, hidden: !isPremiumGroup };
  size = { style: tmp.logo, width: 48, height: 9 };
  size1 = { style: tmp.logo, width: 50, height: 9 };
  const items = [obj3, , , , , , , , , , ];
  const obj4 = { accessible: true, accessibilityLabel: intl.string(flag(tmp3[15]).t["t9uG/o"]), style: tmp.logo, source: tmp2Result4 };
  const tmp2Result = str(tmp3[21]);
  intl = flag(tmp3[15]).intl;
  const obj7 = flag(tmp3[10]);
  if (obj7.isThemeDark(tmp4)) {
    tmp2Result4 = tmp2(tmp3[22]);
  } else {
    tmp2Result4 = tmp2(tmp3[23]);
  }
  const obj5 = { column1: closure_11(tmp2Result, obj4), column2: closure_11(tmp2Result5, obj6), withBottomBorder: false, withTopBorderRadius: true, disableAccessibility: true, hidden: isPremiumGroup };
  obj6 = { accessible: true, accessibilityLabel: intl2.string(tmp9(tmp3[15]).t.lG6a5x), style: tmp.logo, source: tmp2Result6 };
  tmp2Result5 = str(tmp3[21]);
  intl2 = tmp9(tmp3[15]).intl;
  const tmp9Result = tmp9(tmp3[10]);
  if (tmp9Result.isThemeDark(tmp4)) {
    tmp2Result6 = tmp2(tmp3[24]);
  } else {
    tmp2Result6 = tmp2(tmp3[25]);
  }
  items[1] = obj5;
  const obj8 = { label: closure_11(CellText, obj9), rowName: intl4.string(tmp9(tmp3[15]).t.LkKGZ2), column1: closure_11(View, obj10), column1AccessibilityLabel: priceString, column2: closure_11(View, obj11), column2AccessibilityLabel: priceString1 };
  obj9 = { text: intl3.string(tmp9(tmp3[15]).t.LkKGZ2) };
  intl3 = tmp9(tmp3[15]).intl;
  intl4 = tmp9(tmp3[15]).intl;
  obj10 = {
    style: tmp.priceContainer,
    children: parts.map((text) => {
      const obj = { text };
      return closure_1_11(CellText, obj, text);
    })
  };
  parts = priceString.split(/ (?=\()/g);
  obj11 = {
    style: tmp.priceContainer,
    children: parts1.map((text) => {
      const obj = { text };
      return closure_1_11(CellText, obj, text);
    })
  };
  parts1 = priceString1.split(/ (?=\()/g);
  items[2] = obj8;
  const obj12 = { label: closure_11(CellText, obj13), rowName: intl6.string(tmp9(tmp3[15]).t.ORlUdL), column1: closure_11(CheckIcon, {}), column1AccessibilityLabel: intl7.string(tmp9(tmp3[15]).t["tq+6t/"]), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl8.string(tmp9(tmp3[15]).t["tq+6t/"]) };
  obj13 = { text: intl5.string(tmp9(tmp3[15]).t.ORlUdL) };
  intl5 = tmp9(tmp3[15]).intl;
  intl6 = tmp9(tmp3[15]).intl;
  intl7 = tmp9(tmp3[15]).intl;
  intl8 = tmp9(tmp3[15]).intl;
  items[3] = obj12;
  const obj14 = { label: closure_11(CellText, obj15), rowName: intl10.string(tmp9(tmp3[15]).t["ufhQC+"]), column1: closure_11(tmp9(tmp3[14]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType }), column1AccessibilityLabel: maxFileSizeForPremiumType, column2: closure_11(tmp9(tmp3[14]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType1 }), column2AccessibilityLabel: maxFileSizeForPremiumType1 };
  obj15 = { text: intl9.string(tmp9(tmp3[15]).t["ufhQC+"]) };
  intl9 = tmp9(tmp3[15]).intl;
  intl10 = tmp9(tmp3[15]).intl;
  items[4] = obj14;
  const obj16 = { label: closure_11(CellText, obj17), rowName: intl12.string(tmp9(tmp3[15]).t["svn/YX"]), column1: closure_11(CheckIcon, {}), column1AccessibilityLabel: intl13.string(tmp9(tmp3[15]).t["tq+6t/"]), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl14.string(tmp9(tmp3[15]).t["tq+6t/"]), hidden: isFractionalOnly };
  obj17 = { text: intl11.string(tmp9(tmp3[15]).t["svn/YX"]) };
  intl11 = tmp9(tmp3[15]).intl;
  intl12 = tmp9(tmp3[15]).intl;
  intl13 = tmp9(tmp3[15]).intl;
  intl14 = tmp9(tmp3[15]).intl;
  items[5] = obj16;
  const obj18 = { label: closure_11(CellText, obj19), rowName: intl16.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, obj21), column1: closure_11(CloseIcon, {}), column1AccessibilityLabel: intl17.string(tmp9(tmp3[15]).t.l4qZrp), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl18.string(tmp9(tmp3[15]).t["tq+6t/"]), hidden: isFractionalOnly };
  obj19 = { text: intl15.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, obj20) };
  intl15 = tmp9(tmp3[15]).intl;
  obj20 = { numBoosts };
  intl16 = tmp9(tmp3[15]).intl;
  obj21 = { numBoosts };
  intl17 = tmp9(tmp3[15]).intl;
  intl18 = tmp9(tmp3[15]).intl;
  items[6] = obj18;
  const obj22 = { label: closure_11(CellText, obj23), rowName: intl20.string(tmp9(tmp3[15]).t["Gv/rQ6"]), column1: closure_11(CloseIcon, {}), column1AccessibilityLabel: intl21.string(tmp9(tmp3[15]).t.l4qZrp), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl22.string(tmp9(tmp3[15]).t["tq+6t/"]) };
  obj23 = { text: intl19.string(tmp9(tmp3[15]).t["Gv/rQ6"]) };
  intl19 = tmp9(tmp3[15]).intl;
  intl20 = tmp9(tmp3[15]).intl;
  intl21 = tmp9(tmp3[15]).intl;
  intl22 = tmp9(tmp3[15]).intl;
  items[7] = obj22;
  const obj24 = { label: closure_11(CellText, obj25), rowName: intl24.string(tmp9(tmp3[15]).t.myyAEr), column1: closure_11(CloseIcon, {}), column1AccessibilityLabel: intl25.string(tmp9(tmp3[15]).t.l4qZrp), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl26.string(tmp9(tmp3[15]).t["tq+6t/"]) };
  obj25 = { text: intl23.string(tmp9(tmp3[15]).t.myyAEr) };
  intl23 = tmp9(tmp3[15]).intl;
  intl24 = tmp9(tmp3[15]).intl;
  intl25 = tmp9(tmp3[15]).intl;
  intl26 = tmp9(tmp3[15]).intl;
  items[8] = obj24;
  const obj26 = { label: closure_11(CellText, obj27), rowName: intl28.string(tmp9(tmp3[15]).t.S6yQr8), column1: closure_11(CloseIcon, {}), column1AccessibilityLabel: intl29.string(tmp9(tmp3[15]).t.l4qZrp), column2: closure_11(CheckIcon, {}), column2AccessibilityLabel: intl30.string(tmp9(tmp3[15]).t["tq+6t/"]) };
  obj27 = { text: intl27.string(tmp9(tmp3[15]).t.S6yQr8) };
  intl27 = tmp9(tmp3[15]).intl;
  intl28 = tmp9(tmp3[15]).intl;
  intl29 = tmp9(tmp3[15]).intl;
  intl30 = tmp9(tmp3[15]).intl;
  items[9] = obj26;
  items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
  const found = items.filter((hidden) => null != hidden && !hidden.hidden);
  const obj28 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  const obj29 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: titleOverride };
  const Text = tmp9(tmp3[14]).Text;
  const tmp18 = closure_12;
  if (titleOverride == null) {
    const intl31 = tmp9(tmp3[15]).intl;
    titleOverride = intl31.string(tmp9(tmp3[15]).t.vLz3Zs);
  }
  items2 = [closure_11(Text, obj29), , ];
  if (isPremiumGroup) {
    isPremiumGroup = null != premiumGroupRole;
  }
  if (isPremiumGroup) {
    const obj30 = { style: tmp.premiumGroupCard, premiumGroupRole };
    isPremiumGroup = tmp12(tmp2(tmp3[26]), obj30);
  }
  items2[1] = isPremiumGroup;
  const obj31 = {
    style: tmp.table,
    children: found.map((item, rowNumber) => {
      const obj = { highlightColumn1: flag, disableHighlightColumn2: isPremiumGroup, variant: str, rowNumber };
      const merged = Object.assign(item);
      return unpackModuleId(Row, obj, rowNumber);
    })
  };
  items2[2] = closure_11(View, obj31);
  return tmp18(View, obj28);
};
