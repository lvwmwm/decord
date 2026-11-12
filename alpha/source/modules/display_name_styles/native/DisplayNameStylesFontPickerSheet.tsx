// Module ID: 17839
// Function ID: 17840
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [32, 19, 17, 5268, 1083, 21, 9999, 575, 5243, 8493, 17840, 17838, 5315, 1395, 1393, 5491, 5489, 5503, 17841, 1113, 3077, 5873, 5866, 4464, 16985, 5314, 16978, 16973, 16979, 5957, 17842, 7682, 16981, 6274, 5974, 2]
// Exports: default

// Module 17839 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import _modDef3077 from "module_3077" /* 3077 */;
import _modDef4464 from "module_4464" /* 4464 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import FastImageDefault from "FastImage" /* 5957 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9999 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 16973 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 16979 */;
import HexagonCampaignDaysLeftBadgeDefault from "HexagonCampaignDaysLeftBadge" /* 16985 */;
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader" /* 17841 */;
import AssetRegistryDefault from "AssetRegistry" /* 17842 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: metroImportAll, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c9, HexagonCampaignPerk: c10 } = HexagonCampaignConstants);
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const tmp5 = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
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
let closure_14 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(arg0) {
  let Button;
  let c2;
  let c3;
  let closure_1;
  let closure_5;
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
  let items5;
  let items6;
  let obj10;
  let obj12;
  let obj17;
  let obj18;
  let obj20;
  let obj24;
  let obj7;
  let obj8;
  let obj9;
  let onSelectFont;
  let selectedFontId;
  let showCampaignSection;
  let tmp15Result;
  let tmp16;
  let visibleFontOrder;
  ({ selectedFontId, onSelectFont } = arg0);
  ({ displayName, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  let closure_7;
  let tmp = closure_14();
  importDefault = tmp;
  let tmp2 = onSelectFont;
  let tmp3 = dependencyMap;
  let obj = onSelectFont(8493);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = onSelectFont(17840);
  const hexagonCampaignFontPickerSection = obj2.useHexagonCampaignFontPickerSection("DisplayNameStylesFontPickerSheet", isTryItOut);
  ({ gridFontOrder, showCampaignSection, visibleFontOrder } = hexagonCampaignFontPickerSection);
  let obj3 = onSelectFont(17838);
  const displayNameStylesNewFonts = obj3.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  [first, closure_5] = first.useState(selectedFontId);
  let tmp9 = first === closure_7;
  const tmp8 = closure_7;
  let obj4 = onSelectFont(5315);
  const radioA11yNative = obj4.useRadioA11yNative({ selected: tmp9 });
  const DEFAULT = onSelectFont(1395).DisplayNameFont.DEFAULT;
  const tmp12 = first !== selectedFontId;
  let closure_6 = tmp12;
  const obj5 = onSelectFont(1393);
  const hasNonLatinLettersResult = obj5.hasNonLatinLetters(displayName);
  closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  let items = [tmp12, first, onSelectFont];
  const callback = first.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = closure_6;
    if (tmp3) {
      onSelectFont(first);
    }
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  const obj6 = { ref: bottomSheetRef, startExpanded: showCampaignSection, header: closure_12(tmp16, obj7), children: closure_12(closure_5, obj9) };
  const BottomSheet = onSelectFont(5503).BottomSheet;
  obj7 = { title: intl.string(_modDef3077["0JCuGm"]), trailing: closure_12(Button, obj8) };
  tmp16 = DisplayNameStylesSheetHeaderDefault;
  intl = onSelectFont(1113).intl;
  obj8 = { text: intl2.string(onSelectFont(1113).t.XqMe3N), onPress: callback, variant: "primary", size: "sm" };
  Button = onSelectFont(5873).Button;
  intl2 = onSelectFont(1113).intl;
  obj9 = { style: tmp.container, children: closure_13(closure_5, obj10) };
  obj10 = { style: tmp.contentContainer, children: items5 };
  if (showCampaignSection) {
    const obj11 = { style: tmp.campaignSection, children: closure_13(closure_5, obj12) };
    obj12 = { style: tmp.campaignContent, children: items2 };
    const obj13 = { style: tmp.campaignHeader, children: items1 };
    const obj14 = { variant: "body-sm/semibold", color: "text-subtle", children: intl3.string(_modDef4464["2UCcmW"]) };
    let Text = tmp2(5866).Text;
    intl3 = tmp2(1113).intl;
    items1 = [closure_12(Text, obj14), ];
    const obj15 = { perk: constants.DISPLAY_NAME_STYLE };
    items1[1] = closure_12(HexagonCampaignDaysLeftBadgeDefault, obj15);
    items2 = [closure_13(closure_5, obj13), , ];
    const obj16 = { theme: tmp2(16978).ThemeTypes.DARK, children: closure_12(closure_6, obj17) };
    const ThemeContextProvider = tmp2(5314).ThemeContextProvider;
    obj17 = {
      onPress() {
          return closure_7(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
        },
      accessibilityLabel: intl4.string(getDisplayNameStylesFontNameDefault(tmp8)),
      children: closure_13(closure_5, obj18)
    };
    const merged = Object.assign(radioA11yNative);
    intl4 = tmp2(1113).intl;
    const items3 = [tmp.campaignCard, ];
    obj18 = { style: items3, children: items4 };
    const tmp24 = tmp9 && tmp.campaignCardSelected;
    items3[1] = tmp24;
    items4 = [closure_12(HexagonCampaignPromoGradientDefault, { angle: 166 }), , , ];
    const obj19 = { style: tmp.campaignLogoFrame, children: closure_12(tmp15Result, obj20) };
    obj20 = { source: AssetRegistryDefault, style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    tmp15Result = FastImageDefault;
    items4[1] = closure_12(closure_5, obj19);
    const obj21 = { variant: "heading-xl/semibold", color: "text-default", style: tmp.campaignName, lineClamp: 1, children: displayName };
    items4[2] = closure_12(tmp2(5866).Text, obj21);
    const obj22 = { selected: tmp9 };
    items4[3] = closure_12(tmp2(7682).FormRadio, obj22);
    items2[1] = closure_12(ThemeContextProvider, obj16);
    const obj23 = { variant: "body-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: intl5.format(_modDef4464.y2YmJv, obj24) };
    const Text2 = tmp2(5866).Text;
    intl5 = tmp2(1113).intl;
    obj24 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
          const obj = { variant: "body-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(set[32]).openHexagonCampaignLearnMore, children };
          const Text = onSelectFont(set[22]).Text;
          return closure_1_12(Text, obj, arg1);
        }
    };
    items2[2] = closure_12(Text2, obj23);
    showCampaignSection = tmp14(tmp17, obj11);
  }
  let tmp18Result = first !== DEFAULT;
  items5 = [showCampaignSection, , ];
  const obj25 = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: gridFontOrder.map((item) => {
      let items1;
      let items2;
      let obj2;
      let tmp10;
      let closure_0 = item;
      let tmp = first;
      let tmp3 = set;
      const intl = onSelectFont(set[19]).intl;
      const stringResult = intl.string(closure_1(set[27])(item));
      let PRIMARY_SEMIBOLD = onSelectFont(set[6]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      const tmp2 = onSelectFont;
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = set.has(item);
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp6;
      const obj = {
        onPress() {
          closure_7(item);
          const tmp = item;
          const tmp3 = hasItem;
          if (tmp3) {
            c3(tmp);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: { selected: item === tmp },
        children: tmp10(closure_5, obj2)
      };
      tmp10 = closure_1_13;
      const tmp9 = closure_6;
      if (item === tmp) {
        fontCardSelected = tmp12.fontCardSelected;
      }
      obj2 = { style: items, children: items2 };
      items[1] = fontCardSelected;
      let str = "text-default";
      const Text = tmp2(tmp3[22]).Text;
      if (item === tmp) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "body-lg/semibold", color: str, style: items1, children: "Gg" };
      items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      items2 = [closure_1_12(Text, obj3), ];
      if (hasItem) {
        const obj4 = { style: hasItem.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = tmp8(tmp11, obj4);
      }
      items2[1] = hasItem;
      return closure_1_12(tmp9, obj, item);
    })
  };
  const Stack = tmp2(6274).Stack;
  items5[1] = closure_12(Stack, obj25);
  if (tmp18Result) {
    tmp18Result = hasNonLatinLettersResult;
  }
  if (tmp18Result) {
    const obj26 = { style: tmp.nonLatinDisclaimer, children: items6 };
    items6 = [closure_12(tmp2(5974).CircleInformationIcon, { size: "sm" }), ];
    const obj27 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: intl6.string(_modDef3077["+O1xL2"]) };
    const Text3 = tmp2(5866).Text;
    intl6 = tmp2(1113).intl;
    items6[1] = closure_12(Text3, obj27);
    tmp18Result = tmp18(tmp17, obj26);
  }
  items5[2] = tmp18Result;
  return closure_12(BottomSheet, obj6);
};
