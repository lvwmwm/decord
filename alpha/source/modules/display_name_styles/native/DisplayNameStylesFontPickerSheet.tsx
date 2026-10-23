// Module ID: 16661
// Function ID: 16662
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [32, 19, 17, 1410, 4994, 1098, 21, 9220, 587, 4969, 558, 576, 5232, 15845, 8657, 16658, 16660, 4997, 5037, 1412, 1409, 5210, 5208, 1128, 2928, 16662, 5242, 15851, 5035, 15848, 15840, 15846, 5667, 16663, 6986, 5975, 5684, 5263, 2]

// Module 16661 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1410 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import HapticUtils from "HapticUtils" /* 5210 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9220 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
let HEXAGON_CAMPAIGN_FONTS = DisplayNameStylesConstants.HEXAGON_CAMPAIGN_FONTS;
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: c9, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c10, HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const Fonts = Constants.Fonts;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let tmp5 = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
let result = 3 * nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, gridContainer: { flexWrap: "wrap", maxWidth: 350 }, fontCard: size, fontCardSelected: obj3, fontText: { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" }, campaignSection: obj4, campaignContent: obj5, campaignHeader: obj6, campaignCard: obj7, campaignCardSelected: obj8, campaignLogoFrame: { width: 48, height: 48, alignItems: "center", justifyContent: "center" }, campaignLogo: { width: 32, height: 24 }, campaignName: { flex: 1, fontFamily: tmp5 }, campaignLegal: { paddingHorizontal: 2 }, tileNewDot: size1, nonLatinDisclaimer: obj9, disclaimerText: { flex: 1 } };
obj2 = { padding: nativeDefault.space.PX_8, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 79, height: 79, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj4 = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_20, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
obj5 = { width: "100%", maxWidth: 316 + result, gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj7 = { height: 64, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, overflow: "hidden" };
obj8 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesFontPickerSheet(displayName) {
  let closure_7;
  let dotFontIds;
  let first1;
  let onSelectFont;
  let selectedFontId;
  let tmp6;
  let tmp = onSelectFont;
  let tmp2 = dotFontIds;
  let obj = onSelectFont(dotFontIds[11]);
  const cResult = obj.c(73);
  ({ selectedFontId, onSelectFont } = displayName);
  displayName = displayName.displayName;
  let closure_1 = closure_16();
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function learnMoreHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(dotFontIds[13]).openHexagonCampaignLearnMore, children };
      const Text = onSelectFont(dotFontIds[12]).Text;
      return closure_1_14(Text, obj, arg1);
    }
    cResult[0] = learnMoreHook;
    let first = learnMoreHook;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(tmp2[14]);
  const bottomSheetRef = tmpResult.useBottomSheetRef().bottomSheetRef;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeCampaignFonts: true };
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult5 = tmp(tmp2[15]);
  const visibleFontOrder = tmpResult5.useVisibleFontOrder(tmp6);
  const tmpResult6 = tmp(tmp2[16]);
  const displayNameStylesNewFonts = tmpResult6.useDisplayNameStylesNewFonts(visibleFontOrder);
  dotFontIds = displayNameStylesNewFonts.dotFontIds;
  const dismissFontDot = displayNameStylesNewFonts.dismissFontDot;
  const tmpResult7 = tmp(tmp2[17]);
  const tmp8 = tmpResult7.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "DisplayNameStylesFontPickerSheet") === constants2.SELECTABLE;
  if (cResult[2] === tmp8) {
    let tmp20;
    let tmp26;
    if (cResult[3] === visibleFontOrder) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] !== visibleFontOrder) {
      let tmp12;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return !tmp27.includes(arg0);
          }
        }
        cResult[7] = B;
        tmp12 = B;
      } else {
        class B {
          constructor(arg0) {
            return !tmp27.includes(arg0);
          }
        }
      }
      const found = visibleFontOrder.filter(tmp12);
      cResult[5] = visibleFontOrder;
      cResult[6] = found;
      const tmp11 = found;
    } else {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
    }
    const tmp16 = dismissFontDot(first1.useState(selectedFontId), 2);
    first1 = tmp16[0];
    let closure_5 = tmp16[1];
    if (cResult[8] !== (first1 === HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT)) {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
      tmp21[0] = first1 === HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
      cResult[8] = first1 === HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    } else {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
    }
    const tmpResult8 = tmp(tmp2[18]);
    const radioA11yNative = tmpResult8.useRadioA11yNative(tmp20);
    const DEFAULT = tmp(tmp2[19]).DisplayNameFont.DEFAULT;
    if (cResult[10] !== displayName) {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
      cResult[10] = displayName;
      cResult[11] = obj8.hasNonLatinLetters(displayName);
      const hasNonLatinLettersResult = obj8.hasNonLatinLetters(displayName);
    } else {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
    }
    let closure_6 = tmp25;
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
      cResult[12] = tmp27;
      tmp26 = tmp27;
    } else {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
    }
    HEXAGON_CAMPAIGN_FONTS = tmp26;
    if (cResult[13] === first1 !== selectedFontId) {
      class B {
        constructor(arg0) {
          return !tmp27.includes(arg0);
        }
      }
    }
    const fn = function $() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const tmp3 = closure_6;
      if (tmp3) {
        onSelectFont(first1);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    };
    cResult[13] = first1 !== selectedFontId;
    cResult[14] = first1;
    cResult[15] = onSelectFont;
    cResult[16] = fn;
  }
  let hasItem = tmp8;
  if (hasItem) {
    class B {
      constructor(arg0) {
        return !tmp27.includes(arg0);
      }
    }
    hasItem = visibleFontOrder.includes(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
  }
  cResult[2] = tmp8;
  cResult[3] = visibleFontOrder;
  cResult[4] = hasItem;
}) : (function DisplayNameStylesFontPickerSheet(displayName) {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let closure_1;
  let closure_6;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj16;
  let obj17;
  let obj19;
  let obj23;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let onSelectFont;
  let selectedFontId;
  let tmp17Result;
  let tmp18;
  ({ selectedFontId, onSelectFont } = displayName);
  displayName = displayName.displayName;
  let visibleFontOrder;
  _slicedToArray = undefined;
  react = undefined;
  first = undefined;
  closure_6 = undefined;
  let closure_8;
  let tmp = closure_16();
  importDefault = tmp;
  let tmp2 = onSelectFont;
  let tmp3 = visibleFontOrder;
  let obj = onSelectFont(visibleFontOrder[14]);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = onSelectFont(visibleFontOrder[15]);
  visibleFontOrder = obj2.useVisibleFontOrder({ includeCampaignFonts: true });
  let obj4 = onSelectFont(visibleFontOrder[16]);
  const displayNameStylesNewFonts = obj4.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c3, dismissFontDot: c4 } = displayNameStylesNewFonts);
  const tmp5 = constants;
  const obj5 = onSelectFont(visibleFontOrder[17]);
  let hasItem = obj5.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "DisplayNameStylesFontPickerSheet") === constants2.SELECTABLE && visibleFontOrder.includes(closure_8);
  let items = [visibleFontOrder];
  const memo = react.useMemo(() => visibleFontOrder.filter((item) => !closure_1_7.includes(item)), items);
  [first, closure_6] = react.useState(selectedFontId);
  const tmp11 = first === closure_8;
  let tmp10 = closure_8;
  const tmp2Result = tmp2(tmp3[18]);
  const radioA11yNative = tmp2Result.useRadioA11yNative({ selected: tmp11 });
  const DEFAULT = tmp2(tmp3[19]).DisplayNameFont.DEFAULT;
  let closure_7 = tmp14;
  const tmp2Result2 = tmp2(tmp3[20]);
  const hasNonLatinLettersResult = tmp2Result2.hasNonLatinLetters(displayName);
  closure_8 = react.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  let items1 = [first !== selectedFontId, first, onSelectFont];
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = closure_7;
    if (tmp3) {
      onSelectFont(first);
    }
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  let obj3 = { ref: bottomSheetRef, startExpanded: hasItem, header: closure_14(tmp18, obj6), children: closure_14(first, obj8) };
  BottomSheet = tmp2(tmp3[37]).BottomSheet;
  obj6 = { title: intl.string(require("module_2928")["0JCuGm"]), trailing: closure_14(Button, obj7) };
  tmp18 = require("DisplayNameStylesSheetHeader");
  intl = tmp2(tmp3[23]).intl;
  obj7 = { text: intl2.string(tmp2(tmp3[23]).t.XqMe3N), onPress: callback, variant: "primary", size: "sm" };
  Button = tmp2(tmp3[26]).Button;
  intl2 = tmp2(tmp3[23]).intl;
  obj8 = { style: tmp.container, children: closure_15(first, obj9) };
  obj9 = { style: tmp.contentContainer, children: items6 };
  if (hasItem) {
    const obj10 = { style: tmp.campaignSection, children: closure_15(first, obj11) };
    obj11 = { style: tmp.campaignContent, children: items3 };
    const obj12 = { style: tmp.campaignHeader, children: items2 };
    const obj13 = { variant: "text-sm/semibold", color: "text-subtle", children: intl3.string(tmp2(tmp3[23]).t["2UCcmW"]) };
    let Text = tmp2(tmp3[12]).Text;
    intl3 = tmp2(tmp3[23]).intl;
    items2 = [closure_14(Text, obj13), ];
    const obj14 = { perk: tmp5.DISPLAY_NAME_STYLE };
    items2[1] = closure_14(require("HexagonCampaignDaysLeftBadge"), obj14);
    items3 = [closure_15(first, obj12), , ];
    const obj15 = { theme: tmp2(tmp3[29]).ThemeTypes.DARK, children: closure_14(closure_6, obj16) };
    const ThemeContextProvider = tmp2(tmp3[28]).ThemeContextProvider;
    obj16 = {
      onPress() {
          return closure_8(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
        },
      accessibilityLabel: intl4.string(require("getDisplayNameStylesFontName")(tmp10)),
      children: closure_15(first, obj17)
    };
    const merged = Object.assign(radioA11yNative);
    intl4 = tmp2(tmp3[23]).intl;
    const items4 = [tmp.campaignCard, ];
    obj17 = { style: items4, children: items5 };
    const tmp25 = tmp11 && tmp.campaignCardSelected;
    items4[1] = tmp25;
    items5 = [closure_14(require("HexagonCampaignPromoGradient"), { angle: 166 }), , , ];
    const obj18 = { style: tmp.campaignLogoFrame, children: closure_14(tmp17Result, obj19) };
    obj19 = { source: require("AssetRegistry"), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    tmp17Result = require("FastImage");
    items5[1] = closure_14(first, obj18);
    const obj20 = { variant: "heading-xl/semibold", color: "text-default", style: tmp.campaignName, lineClamp: 1, children: displayName };
    items5[2] = closure_14(tmp2(tmp3[12]).Text, obj20);
    const obj21 = { selected: tmp11 };
    items5[3] = closure_14(tmp2(tmp3[34]).FormRadio, obj21);
    items3[1] = closure_14(ThemeContextProvider, obj15);
    const obj22 = { variant: "text-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: intl5.format(tmp2(tmp3[23]).t.y2YmJv, obj23) };
    const Text2 = tmp2(tmp3[12]).Text;
    intl5 = tmp2(tmp3[23]).intl;
    obj23 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(visibleFontOrder[13]).openHexagonCampaignLearnMore, children };
          const Text = onSelectFont(visibleFontOrder[12]).Text;
          return closure_1_14(Text, obj, arg1);
        }
    };
    items3[2] = closure_14(Text2, obj22);
    hasItem = tmp16(tmp19, obj10);
  }
  let tmp20Result = first !== DEFAULT;
  items6 = [hasItem, , ];
  const obj24 = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: memo.map((item) => {
      let items1;
      let items2;
      let obj2;
      let tmp10;
      let closure_0 = item;
      let tmp = first;
      let tmp3 = visibleFontOrder;
      const intl = onSelectFont(visibleFontOrder[23]).intl;
      const stringResult = intl.string(closure_1(visibleFontOrder[30])(item));
      let PRIMARY_SEMIBOLD = onSelectFont(visibleFontOrder[7]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      const tmp2 = onSelectFont;
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = _undefined.has(item);
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp6;
      const obj = {
        onPress() {
          closure_8(item);
          const tmp = item;
          const tmp3 = hasItem;
          if (tmp3) {
            c4(tmp);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: { selected: item === tmp },
        children: tmp10(first, obj2)
      };
      tmp10 = closure_1_15;
      const tmp9 = closure_6;
      if (item === tmp) {
        fontCardSelected = tmp12.fontCardSelected;
      }
      obj2 = { style: items, children: items2 };
      items[1] = fontCardSelected;
      let str = "text-default";
      const Text = tmp2(tmp3[12]).Text;
      if (item === tmp) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "text-lg/semibold", color: str, style: items1, children: "Gg" };
      items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      items2 = [closure_1_14(Text, obj3), ];
      if (hasItem) {
        const obj4 = { style: hasItem.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = tmp8(tmp11, obj4);
      }
      items2[1] = hasItem;
      return closure_1_14(tmp9, obj, item);
    })
  };
  const Stack = tmp2(tmp3[35]).Stack;
  items6[1] = closure_14(Stack, obj24);
  if (tmp20Result) {
    tmp20Result = hasNonLatinLettersResult;
  }
  if (tmp20Result) {
    const obj25 = { style: tmp.nonLatinDisclaimer, children: items7 };
    items7 = [closure_14(tmp2(tmp3[36]).CircleInformationIcon, { size: "sm" }), ];
    const obj26 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: intl6.string(require("module_2928")["+O1xL2"]) };
    const Text3 = tmp2(tmp3[12]).Text;
    intl6 = tmp2(tmp3[23]).intl;
    items7[1] = closure_14(Text3, obj26);
    tmp20Result = tmp20(tmp19, obj25);
  }
  items6[2] = tmp20Result;
  return closure_14(BottomSheet, obj3);
});
size = size_mod;
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default tmp8;
