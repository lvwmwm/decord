// Module ID: 16752
// Function ID: 16753
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [32, 19, 17, 4938, 1082, 21, 9456, 575, 4913, 9457, 8149, 16753, 16751, 4975, 1396, 1394, 5129, 5127, 5141, 16754, 1112, 3248, 5511, 5504, 4597, 15886, 4974, 15879, 15874, 15880, 5600, 16755, 7350, 15882, 5929, 5617, 2]
// Exports: default

// Module 16752 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9456 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4938 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, nonPremiumEndDate;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: metroImportAll, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c9, HexagonCampaignPerk: c10 } = HexagonCampaignConstants);
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const tmp5 = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
let result = 3 * nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, gridContainer: { flexWrap: "wrap", maxWidth: 350 }, fontCard: size, fontCardSelected: obj3, fontText: { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" }, campaignSection: obj4, campaignContent: obj5, campaignHeader: obj6, campaignCard: obj7, campaignCardSelected: obj8, campaignLogoFrame: { width: 48, height: 48, alignItems: "center", justifyContent: "center" }, campaignLogo: { width: 32, height: 24 }, campaignName: { flex: 1, fontFamily: tmp5 }, campaignNameFallback: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, campaignLegal: { paddingHorizontal: 2 }, tileNewDot: size1, nonLatinDisclaimer: obj9, disclaimerText: { flex: 1 } };
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
let closure_14 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(arg0) {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let closure_1;
  let closure_6;
  let closure_8;
  let displayName;
  let first;
  let gridFontOrder;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isTryItOut;
  let items1;
  let items2;
  let items4;
  let items6;
  let items7;
  let obj10;
  let obj11;
  let obj13;
  let obj18;
  let obj19;
  let obj21;
  let obj25;
  let obj8;
  let obj9;
  let onSelectFont;
  let selectedFontId;
  let showCampaignSection;
  let tmp16Result;
  let tmp17;
  let tmp21;
  let visibleFontOrder;
  ({ selectedFontId, onSelectFont } = arg0);
  ({ displayName, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let displayNameFontsAvailable;
  _slicedToArray = undefined;
  react = undefined;
  first = undefined;
  closure_6 = undefined;
  let closure_7;
  let tmp = closure_14();
  importDefault = tmp;
  const tmp2 = onSelectFont;
  let tmp3 = displayNameFontsAvailable;
  let obj = onSelectFont(displayNameFontsAvailable[9]);
  displayNameFontsAvailable = obj.useDisplayNameFontsAvailable();
  let obj2 = onSelectFont(displayNameFontsAvailable[10]);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  let obj3 = onSelectFont(displayNameFontsAvailable[11]);
  const hexagonCampaignFontPickerSection = obj3.useHexagonCampaignFontPickerSection("DisplayNameStylesFontPickerSheet", isTryItOut);
  ({ gridFontOrder, showCampaignSection, visibleFontOrder } = hexagonCampaignFontPickerSection);
  let obj4 = onSelectFont(displayNameFontsAvailable[12]);
  const displayNameStylesNewFonts = obj4.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c3, dismissFontDot: c4 } = displayNameStylesNewFonts);
  [first, closure_6] = react.useState(selectedFontId);
  let tmp10 = first === closure_7;
  const tmp9 = closure_7;
  const obj5 = onSelectFont(displayNameFontsAvailable[13]);
  const radioA11yNative = obj5.useRadioA11yNative({ selected: tmp10 });
  const DEFAULT = onSelectFont(displayNameFontsAvailable[14]).DisplayNameFont.DEFAULT;
  const tmp13 = first !== selectedFontId;
  closure_7 = tmp13;
  const obj6 = onSelectFont(displayNameFontsAvailable[15]);
  const hasNonLatinLettersResult = obj6.hasNonLatinLetters(displayName);
  nonPremiumEndDate = react.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  let items = [tmp13, first, onSelectFont];
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = closure_7;
    if (tmp3) {
      onSelectFont(first);
    }
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  const obj7 = { ref: bottomSheetRef, startExpanded: showCampaignSection, header: closure_12(tmp17, obj8), children: closure_12(first, obj10) };
  const BottomSheet = onSelectFont(displayNameFontsAvailable[18]).BottomSheet;
  obj8 = { title: intl.string(require("module_3248")["0JCuGm"]), trailing: closure_12(Button, obj9) };
  tmp17 = require("DisplayNameStylesSheetHeader");
  intl = onSelectFont(displayNameFontsAvailable[20]).intl;
  obj9 = { text: intl2.string(onSelectFont(displayNameFontsAvailable[20]).t.XqMe3N), onPress: callback, variant: "primary", size: "sm" };
  Button = onSelectFont(displayNameFontsAvailable[22]).Button;
  intl2 = onSelectFont(displayNameFontsAvailable[20]).intl;
  obj10 = { style: tmp.container, children: closure_13(first, obj11) };
  obj11 = { style: tmp.contentContainer, children: items6 };
  if (showCampaignSection) {
    const obj12 = { style: tmp.campaignSection, children: closure_13(first, obj13) };
    obj13 = { style: tmp.campaignContent, children: items2 };
    const obj14 = { style: tmp.campaignHeader, children: items1 };
    const obj15 = { variant: "body-sm/semibold", color: "text-subtle", children: intl3.string(require("module_4597")["2UCcmW"]) };
    let Text = tmp2(tmp3[23]).Text;
    intl3 = tmp2(tmp3[20]).intl;
    items1 = [closure_12(Text, obj15), ];
    const obj16 = { perk: constants.DISPLAY_NAME_STYLE };
    items1[1] = closure_12(require("HexagonCampaignDaysLeftBadge"), obj16);
    items2 = [closure_13(first, obj14), , ];
    const obj17 = { theme: tmp2(tmp3[27]).ThemeTypes.DARK, children: closure_12(tmp21, obj18) };
    const ThemeContextProvider = tmp2(tmp3[26]).ThemeContextProvider;
    obj18 = {
      onPress() {
          return closure_8(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
        },
      accessibilityLabel: intl4.string(require("getDisplayNameStylesFontName")(tmp9)),
      children: closure_13(first, obj19)
    };
    const merged = Object.assign(radioA11yNative);
    intl4 = tmp2(tmp3[20]).intl;
    const items3 = [tmp.campaignCard, ];
    obj19 = { style: items3, children: items4 };
    const tmp25 = tmp10 && tmp.campaignCardSelected;
    items3[1] = tmp25;
    items4 = [closure_12(require("HexagonCampaignPromoGradient"), { angle: 166 }), , , ];
    const obj20 = { style: tmp.campaignLogoFrame, children: closure_12(tmp16Result, obj21) };
    obj21 = { source: require("AssetRegistry"), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    tmp16Result = require("FastImage");
    items4[1] = closure_12(first, obj20);
    const items5 = [tmp.campaignName, ];
    let campaignNameFallback = !displayNameFontsAvailable;
    const Text2 = tmp2(tmp3[23]).Text;
    tmp21 = closure_6;
    if (!displayNameFontsAvailable) {
      campaignNameFallback = tmp.campaignNameFallback;
    }
    const obj22 = { variant: "heading-xl/semibold", color: "text-default", style: items5, lineClamp: 1, children: displayName };
    items5[1] = campaignNameFallback;
    items4[2] = closure_12(Text2, obj22);
    const obj23 = { selected: tmp10 };
    items4[3] = closure_12(tmp2(tmp3[32]).FormRadio, obj23);
    items2[1] = closure_12(ThemeContextProvider, obj17);
    const obj24 = { variant: "body-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: intl5.format(require("module_4597").y2YmJv, obj25) };
    const Text3 = tmp2(tmp3[23]).Text;
    intl5 = tmp2(tmp3[20]).intl;
    obj25 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
          const obj = { variant: "body-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(displayNameFontsAvailable[33]).openHexagonCampaignLearnMore, children };
          const Text = onSelectFont(displayNameFontsAvailable[23]).Text;
          return closure_1_12(Text, obj, arg1);
        }
    };
    items2[2] = closure_12(Text3, obj24);
    showCampaignSection = tmp15(tmp18, obj12);
  }
  let tmp19Result = first !== DEFAULT;
  items6 = [showCampaignSection, , ];
  const obj26 = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: gridFontOrder.map((item) => {
      let items1;
      let items2;
      let obj2;
      let tmp11;
      let closure_0 = item;
      let tmp3 = displayNameFontsAvailable;
      let tmp = first;
      const intl = onSelectFont(displayNameFontsAvailable[20]).intl;
      let PRIMARY_SEMIBOLD = null;
      const stringResult = intl.string(closure_1(displayNameFontsAvailable[28])(item));
      if (displayNameFontsAvailable) {
        PRIMARY_SEMIBOLD = tmp2(tmp3[6]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      }
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = _undefined.has(item);
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp7;
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
        children: tmp11(first, obj2)
      };
      const tmp10 = closure_6;
      tmp11 = closure_1_13;
      if (item === tmp) {
        fontCardSelected = tmp13.fontCardSelected;
      }
      obj2 = { style: items, children: items2 };
      items[1] = fontCardSelected;
      let str = "text-default";
      const Text = tmp2(tmp3[23]).Text;
      if (item === tmp) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "body-lg/semibold", color: str, style: items1, children: "Gg" };
      items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      items2 = [closure_1_12(Text, obj3), ];
      if (hasItem) {
        const obj4 = { style: hasItem.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = tmp9(tmp12, obj4);
      }
      items2[1] = hasItem;
      return closure_1_12(tmp10, obj, item);
    })
  };
  const Stack = tmp2(tmp3[34]).Stack;
  items6[1] = closure_12(Stack, obj26);
  if (tmp19Result) {
    tmp19Result = hasNonLatinLettersResult;
  }
  if (tmp19Result) {
    const obj27 = { style: tmp.nonLatinDisclaimer, children: items7 };
    items7 = [closure_12(tmp2(tmp3[35]).CircleInformationIcon, { size: "sm" }), ];
    const obj28 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: intl6.string(require("module_3248")["+O1xL2"]) };
    const Text4 = tmp2(tmp3[23]).Text;
    intl6 = tmp2(tmp3[20]).intl;
    items7[1] = closure_12(Text4, obj28);
    tmp19Result = tmp19(tmp18, obj27);
  }
  items6[2] = tmp19Result;
  return closure_12(BottomSheet, obj7);
};
