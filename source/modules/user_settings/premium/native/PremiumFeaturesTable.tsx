// Module ID: 12287
// Function ID: 94154
// Name: CheckIcon
// Dependencies: []
// Exports: default

// Module 12287 (CheckIcon)
function CheckIcon() {
  let obj = arg1(dependencyMap[10]);
  const tmp = importDefault(dependencyMap[9])();
  const unsafe_rawColors = importDefault(dependencyMap[7]).unsafe_rawColors;
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[9])());
  obj = { source: importDefault(dependencyMap[12]) };
  obj.color = obj.isThemeDark(importDefault(dependencyMap[9])()) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  obj.size = arg1(dependencyMap[11]).IconSizes.SMALL;
  return callback3(arg1(dependencyMap[11]).Icon, obj);
}
function CloseIcon() {
  const obj = { source: importDefault(dependencyMap[13]), style: callback5().icon, size: arg1(dependencyMap[11]).IconSizes.SMALL };
  return callback3(arg1(dependencyMap[11]).Icon, obj);
}
function CellText(children) {
  return callback3(arg1(dependencyMap[14]).Text, { children: children.text });
}
function getAccesibilityLabel(column2AccessibilityLabel, rowNumber, columnNumber, rowName, intl) {
  intl = rowNumber(dependencyMap[15]).intl;
  return intl.formatToPlainString(rowNumber(dependencyMap[15]).t.EZjXN3, { accessibilityLabel: column2AccessibilityLabel, rowNumber, rowName, columnNumber, columnName: intl });
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
  let callback;
  const tmp = callback4();
  const tmp2 = callback2(React.useState(0), 2);
  callback = tmp2[1];
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
  const items1 = [, ];
  ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
  obj.accessible = !flag3;
  obj.accessibilityLabel = rowName;
  obj.children = label;
  const items2 = [callback3(View, obj), , ];
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
    const intl = callback(dependencyMap[15]).intl;
    tmp7 = getAccesibilityLabel(column1AccessibilityLabel, rowNumber, 1, rowName, intl.string(callback(dependencyMap[15]).t.t9uG/o));
  }
  obj.accessibilityLabel = tmp7;
  obj.accessible = !flag3;
  obj.children = column1;
  items2[1] = callback3(View, obj);
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
          const obj2 = { borderTopColor: closure_12, borderTopWidth: 2 };
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
          const obj3 = { borderBottomColor: closure_12, borderBottomWidth: 2 };
          tmp18 = obj3;
        }
        items4[3] = tmp18;
        items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
        const obj4 = { overflow: "hidden" };
        items4[5] = obj4;
        obj1.style = items4;
        let tmp20;
        if (null != column2AccessibilityLabel) {
          const intl2 = callback(dependencyMap[15]).intl;
          tmp20 = getAccesibilityLabel(column2AccessibilityLabel, rowNumber, 2, rowName, intl2.string(callback(dependencyMap[15]).t.lG6a5x));
        }
        obj1.accessibilityLabel = tmp20;
        obj1.accessible = !flag3;
        const obj5 = {};
        const obj6 = { height: tmp2[0] - (num + num2 + num3) };
        const items5 = [obj6, tmp.dataCell];
        obj5.style = items5;
        obj5.start = HorizontalGradient.START;
        obj5.end = HorizontalGradient.END;
        obj5.colors = [-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012528747644163019, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012329364938550453, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003900375176262811];
        obj5.children = column2;
        obj1.children = callback3(importDefault(dependencyMap[16]), obj5);
      }
      items2[2] = tmp14(tmp15, obj1);
      obj.children = items2;
      return closure_11(View, obj);
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
    const intl3 = callback(dependencyMap[15]).intl;
    tmp32 = getAccesibilityLabel(column2AccessibilityLabel, rowNumber, 2, rowName, intl3.string(callback(dependencyMap[15]).t.lG6a5x));
  }
  obj7.accessibilityLabel = tmp32;
  obj7.accessible = !flag3;
  obj7.children = column2;
  obj1 = obj7;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const HorizontalGradient = arg1(dependencyMap[3]).HorizontalGradient;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PremiumTypes: closure_8, SubscriptionPlans: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = "rgba(184, 69, 193, 0.5)";
let obj = arg1(dependencyMap[6]);
obj = { container: {}, headerText: { textAlign: "center" }, logo: {}, table: { marginTop: 16 }, row: {}, bottomBorder: {} };
obj = { borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[7]).radii.sm };
obj.topBorderRadius = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.bottomBorderRadius = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.sm };
obj.cell = { paddingVertical: 12 };
obj.labelCell = { markAsSpoilerTitle: "guildFallbackImage", keyboardAppearance: "MAX_AGE" };
obj.dataCell = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.sm };
obj.themedHighlightedCell = { backgroundColor: arg1(dependencyMap[8]).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj.nitroHomeHightlightedBorderLeftRight = { "Bool(true)": 24, "Bool(true)": 16, "Bool(true)": "flex", "Bool(true)": "column" };
obj.premiumGroupCard = { marginTop: 16 };
obj.priceContainer = { alignItems: "center" };
let closure_13 = obj.createStyles(obj);
const obj2 = { backgroundColor: arg1(dependencyMap[8]).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
const obj3 = {};
const obj6 = arg1(dependencyMap[6]);
obj3.icon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
let closure_14 = obj6.createStyles(obj3);
const obj4 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default function PremiumFeaturesTable(highlightNitroBasic) {
  let isFractionalOnly;
  let isPremiumGroup;
  let titleOverride;
  let flag = highlightNitroBasic.highlightNitroBasic;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let str = highlightNitroBasic.variant;
  if (str === undefined) {
    str = "default";
  }
  const importDefault = str;
  ({ titleOverride, isFractionalOnly, isPremiumGroup } = highlightNitroBasic);
  if (isPremiumGroup === undefined) {
    isPremiumGroup = false;
  }
  const dependencyMap = isPremiumGroup;
  const premiumGroupRole = highlightNitroBasic.premiumGroupRole;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[9])();
  const tmp3 = importDefault(dependencyMap[17])(closure_9.PREMIUM_MONTH_TIER_0);
  const tmp4 = importDefault(dependencyMap[17])(closure_9.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (null != tmp3) {
    priceString = tmp3.priceString;
  }
  let str2 = "$...";
  let str3 = "$...";
  if (null != priceString) {
    str3 = priceString;
  }
  let priceString1;
  if (null != tmp4) {
    priceString1 = tmp4.priceString;
  }
  if (null != priceString1) {
    str2 = priceString1;
  }
  let obj = arg1(dependencyMap[18]);
  const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(closure_8.TIER_0);
  let obj1 = arg1(dependencyMap[18]);
  const maxFileSizeForPremiumType1 = obj1.getMaxFileSizeForPremiumType(closure_8.TIER_2);
  obj = { column1: callback3(importDefault(dependencyMap[19]), obj), column2: callback3(importDefault(dependencyMap[20]), obj1), withBottomBorder: false, disableAccessibility: true };
  obj = { style: tmp.logo };
  obj1 = { style: tmp.logo };
  obj.hidden = !isPremiumGroup;
  const items = [obj, , , , , , , , , , ];
  const obj2 = {};
  const obj3 = { accessible: true };
  const intl = arg1(dependencyMap[15]).intl;
  obj3.accessibilityLabel = intl.string(arg1(dependencyMap[15]).t.t9uG/o);
  obj3.style = tmp.logo;
  let obj7 = arg1(dependencyMap[10]);
  if (obj7.isThemeDark(tmp2)) {
    let tmp11Result = tmp11(tmp12[22]);
  } else {
    tmp11Result = tmp11(tmp12[23]);
  }
  obj3.source = tmp11Result;
  obj2.column1 = callback3(importDefault(dependencyMap[21]), obj3);
  const obj4 = { accessible: true };
  const tmp10 = importDefault(dependencyMap[21]);
  const tmp14 = callback3;
  const tmp9 = callback3;
  const intl2 = arg1(dependencyMap[15]).intl;
  obj4.accessibilityLabel = intl2.string(arg1(dependencyMap[15]).t.lG6a5x);
  obj4.style = tmp.logo;
  let obj9 = arg1(dependencyMap[10]);
  if (obj9.isThemeDark(tmp2)) {
    let tmp16Result = tmp16(tmp17[24]);
  } else {
    tmp16Result = tmp16(tmp17[25]);
  }
  obj4.source = tmp16Result;
  obj2.column2 = tmp14(importDefault(dependencyMap[21]), obj4);
  obj2.hidden = isPremiumGroup;
  items[1] = obj2;
  const obj5 = {};
  const obj6 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[15]).t.LkKGZ2);
  obj5.label = callback3(CellText, obj6);
  const intl4 = arg1(dependencyMap[15]).intl;
  obj5.rowName = intl4.string(arg1(dependencyMap[15]).t.LkKGZ2);
  obj7 = { style: tmp.priceContainer };
  const parts = str3.split(/ (?=\()/g);
  obj7.children = parts.map((text) => callback(closure_17, { text }, text));
  obj5.column1 = callback3(View, obj7);
  obj5.column1AccessibilityLabel = str3;
  const obj8 = { style: tmp.priceContainer };
  const parts1 = str2.split(/ (?=\()/g);
  obj8.children = parts1.map((text) => callback(closure_17, { text }, text));
  obj5.column2 = callback3(View, obj8);
  obj5.column2AccessibilityLabel = str2;
  items[2] = obj5;
  obj9 = {};
  const obj10 = {};
  const intl5 = arg1(dependencyMap[15]).intl;
  obj10.text = intl5.string(arg1(dependencyMap[15]).t.ORlUdL);
  obj9.label = callback3(CellText, obj10);
  const intl6 = arg1(dependencyMap[15]).intl;
  obj9.rowName = intl6.string(arg1(dependencyMap[15]).t.ORlUdL);
  obj9.column1 = callback3(CheckIcon, {});
  const intl7 = arg1(dependencyMap[15]).intl;
  obj9.column1AccessibilityLabel = intl7.string(arg1(dependencyMap[15]).t.tq+6t/);
  obj9.column2 = callback3(CheckIcon, {});
  const intl8 = arg1(dependencyMap[15]).intl;
  obj9.column2AccessibilityLabel = intl8.string(arg1(dependencyMap[15]).t.tq+6t/);
  items[3] = obj9;
  const obj11 = {};
  const obj12 = {};
  const intl9 = arg1(dependencyMap[15]).intl;
  obj12.text = intl9.string(arg1(dependencyMap[15]).t.ufhQC+);
  obj11.label = callback3(CellText, obj12);
  const intl10 = arg1(dependencyMap[15]).intl;
  obj11.rowName = intl10.string(arg1(dependencyMap[15]).t.ufhQC+);
  obj11.column1 = callback3(arg1(dependencyMap[14]).Text, { children: maxFileSizeForPremiumType });
  obj11.column1AccessibilityLabel = maxFileSizeForPremiumType;
  obj11.column2 = callback3(arg1(dependencyMap[14]).Text, { children: maxFileSizeForPremiumType1 });
  obj11.column2AccessibilityLabel = maxFileSizeForPremiumType1;
  items[4] = obj11;
  const obj13 = {};
  const obj14 = {};
  const intl11 = arg1(dependencyMap[15]).intl;
  obj14.text = intl11.string(arg1(dependencyMap[15]).t.svn/YX);
  obj13.label = callback3(CellText, obj14);
  const intl12 = arg1(dependencyMap[15]).intl;
  obj13.rowName = intl12.string(arg1(dependencyMap[15]).t.svn/YX);
  obj13.column1 = callback3(CheckIcon, {});
  const intl13 = arg1(dependencyMap[15]).intl;
  obj13.column1AccessibilityLabel = intl13.string(arg1(dependencyMap[15]).t.tq+6t/);
  obj13.column2 = callback3(CheckIcon, {});
  const intl14 = arg1(dependencyMap[15]).intl;
  obj13.column2AccessibilityLabel = intl14.string(arg1(dependencyMap[15]).t.tq+6t/);
  obj13.hidden = isFractionalOnly;
  items[5] = obj13;
  const obj15 = {};
  const obj16 = {};
  const intl15 = arg1(dependencyMap[15]).intl;
  obj16.text = intl15.formatToPlainString(arg1(dependencyMap[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj15.label = callback3(CellText, obj16);
  const intl16 = arg1(dependencyMap[15]).intl;
  obj15.rowName = intl16.formatToPlainString(arg1(dependencyMap[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj15.column1 = callback3(CloseIcon, {});
  const intl17 = arg1(dependencyMap[15]).intl;
  obj15.column1AccessibilityLabel = intl17.string(arg1(dependencyMap[15]).t.l4qZrp);
  obj15.column2 = callback3(CheckIcon, {});
  const intl18 = arg1(dependencyMap[15]).intl;
  obj15.column2AccessibilityLabel = intl18.string(arg1(dependencyMap[15]).t.tq+6t/);
  obj15.hidden = isFractionalOnly;
  items[6] = obj15;
  const obj19 = {};
  const obj20 = {};
  const intl19 = arg1(dependencyMap[15]).intl;
  obj20.text = intl19.string(arg1(dependencyMap[15]).t.Gv/rQ6);
  obj19.label = callback3(CellText, obj20);
  const intl20 = arg1(dependencyMap[15]).intl;
  obj19.rowName = intl20.string(arg1(dependencyMap[15]).t.Gv/rQ6);
  obj19.column1 = callback3(CloseIcon, {});
  const intl21 = arg1(dependencyMap[15]).intl;
  obj19.column1AccessibilityLabel = intl21.string(arg1(dependencyMap[15]).t.l4qZrp);
  obj19.column2 = callback3(CheckIcon, {});
  const intl22 = arg1(dependencyMap[15]).intl;
  obj19.column2AccessibilityLabel = intl22.string(arg1(dependencyMap[15]).t.tq+6t/);
  items[7] = obj19;
  const obj21 = {};
  const obj22 = {};
  const intl23 = arg1(dependencyMap[15]).intl;
  obj22.text = intl23.string(arg1(dependencyMap[15]).t.myyAEr);
  obj21.label = callback3(CellText, obj22);
  const intl24 = arg1(dependencyMap[15]).intl;
  obj21.rowName = intl24.string(arg1(dependencyMap[15]).t.myyAEr);
  obj21.column1 = callback3(CloseIcon, {});
  const intl25 = arg1(dependencyMap[15]).intl;
  obj21.column1AccessibilityLabel = intl25.string(arg1(dependencyMap[15]).t.l4qZrp);
  obj21.column2 = callback3(CheckIcon, {});
  const intl26 = arg1(dependencyMap[15]).intl;
  obj21.column2AccessibilityLabel = intl26.string(arg1(dependencyMap[15]).t.tq+6t/);
  items[8] = obj21;
  const obj23 = {};
  const obj24 = {};
  const intl27 = arg1(dependencyMap[15]).intl;
  obj24.text = intl27.string(arg1(dependencyMap[15]).t.S6yQr8);
  obj23.label = callback3(CellText, obj24);
  const intl28 = arg1(dependencyMap[15]).intl;
  obj23.rowName = intl28.string(arg1(dependencyMap[15]).t.S6yQr8);
  obj23.column1 = callback3(CloseIcon, {});
  const intl29 = arg1(dependencyMap[15]).intl;
  obj23.column1AccessibilityLabel = intl29.string(arg1(dependencyMap[15]).t.l4qZrp);
  obj23.column2 = callback3(CheckIcon, {});
  const intl30 = arg1(dependencyMap[15]).intl;
  obj23.column2AccessibilityLabel = intl30.string(arg1(dependencyMap[15]).t.tq+6t/);
  items[9] = obj23;
  items[10] = {};
  const found = items.filter((hidden) => null != hidden && !hidden.hidden);
  const obj25 = { style: items1 };
  const items1 = [tmp.container, highlightNitroBasic.style];
  const obj26 = { style: tmp.headerText };
  if (null == titleOverride) {
    const intl31 = arg1(dependencyMap[15]).intl;
    titleOverride = intl31.string(arg1(dependencyMap[15]).t.vLz3Zs);
  }
  obj26.children = titleOverride;
  const items2 = [callback3(arg1(dependencyMap[14]).Text, obj26), , ];
  if (isPremiumGroup) {
    isPremiumGroup = null != premiumGroupRole;
  }
  if (isPremiumGroup) {
    const obj27 = { style: tmp.premiumGroupCard, premiumGroupRole };
    isPremiumGroup = callback3(importDefault(dependencyMap[26]), obj27);
  }
  items2[1] = isPremiumGroup;
  const obj17 = { numBoosts: closure_7 };
  const obj18 = { numBoosts: closure_7 };
  const tmp15 = importDefault(dependencyMap[21]);
  const tmp19 = closure_11;
  const tmp20 = View;
  const tmp21 = callback3;
  items2[2] = callback3(View, {
    style: tmp.table,
    children: found.map((arg0, arg1) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["highlightColumn1"] = flag;
      obj["disableHighlightColumn2"] = isPremiumGroup;
      obj["variant"] = str;
      obj["rowNumber"] = arg1;
      return callback(closure_19, obj, arg1);
    })
  });
  obj25.children = items2;
  return tmp19(tmp20, obj25);
};
