// Module ID: 17511
// Function ID: 17512
// Name: HexagonCampaignAppIconSection
// Dependencies: [19, 17, 5039, 21, 5014, 575, 5042, 16453, 6784, 9980, 5082, 1113, 4285, 5596, 5624, 16475, 5080, 16469, 16470, 16999, 6953, 7062, 16472, 2]
// Exports: default

// Module 17511 (HexagonCampaignAppIconSection)
import nativeDefault from "native" /* 575 */;
import _modDef4285 from "module_4285" /* 4285 */;
import AppIconTypes from "AppIconTypes" /* 9980 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 16470 */;
import AppIconDefault from "AppIcon" /* 16999 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ Pressable: c3, View: closure_4 } = react_native);
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: metroRequire, HexagonCampaignPerk: metroImportDefault, HexagonCampaignPerkAvailability: metroImportAll } = HexagonCampaignConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, header: obj3, row: obj4, icon: obj5, label: { flex: 1 }, legal: obj6 };
obj2 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, borderWidth: 1, borderBottomWidth: 0, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj5 = { borderRadius: nativeDefault.radii.md };
obj6 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/app_icons/native/HexagonCampaignAppIconSection.tsx");

export default function HexagonCampaignAppIconSection(isPending) {
  let Text2;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let obj16;
  let obj17;
  let obj9;
  let tmp15Result2;
  let tmp17;
  let flag = isPending.isPending;
  const currentAppIcon = isPending.currentAppIcon;
  if (flag === undefined) {
    flag = false;
  }
  const onSelect = isPending.onSelect;
  const tmp = closure_11();
  let obj = onSelect(5042);
  const hexagonCampaignPerkAvailability = obj.useHexagonCampaignPerkAvailability(constants.APP_ICON, "HexagonCampaignAppIconSection");
  const useTrackHexagonCampaignContentViewed = onSelect(16453).useTrackHexagonCampaignContentViewed;
  onSelect(16453);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(onSelect(6784).QuestContent.APP_ICON_SETTINGS, onSelect(16453).HexagonCampaignContentSurface.APP_ICON_PICKER, true);
  const tmp8 = currentAppIcon === onSelect(9980).LimitedTimeAppIconIds.HEXAGON;
  const obj2 = onSelect(5082);
  const radioA11yNative = obj2.useRadioA11yNative({ selected: tmp8, busy: flag });
  const intl = onSelect(1113).intl;
  const stringResult = intl.string(_modDef4285.JC4Pii);
  const obj4 = { style: tmp.section, children: items1 };
  const obj5 = { style: tmp.header, children: items };
  const obj3 = onSelect(5596);
  const token = obj3.useToken(nativeDefault.colors.WHITE);
  const obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(_modDef4285["2UCcmW"]) };
  let Text = onSelect(5624).Text;
  intl2 = onSelect(1113).intl;
  items = [closure_9(Text, obj6), ];
  let tmp15Result = hexagonCampaignPerkAvailability !== constants2.LOCKED;
  const tmp4 = constants;
  if (tmp15Result) {
    const obj7 = { perk: tmp4.APP_ICON };
    tmp15Result = tmp15(tmp10(16475), obj7);
  }
  items[1] = tmp15Result;
  items1 = [closure_10(closure_4, obj5), ];
  const obj8 = { theme: onSelect(16469).ThemeTypes.DARK, children: closure_10(tmp17, obj9) };
  const ThemeContextProvider = tmp2(5080).ThemeContextProvider;
  obj9 = {
    onPress() {
      return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
    },
    style: tmp.row,
    accessibilityLabel: stringResult,
    children: items2
  };
  const merged = Object.assign(radioA11yNative);
  items2 = [closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 }), , , ];
  const obj10 = { id: onSelect(9980).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp.icon };
  const tmp10Result = AppIconDefault;
  items2[1] = closure_9(tmp10Result, obj10);
  const obj11 = { variant: "text-md/semibold", color: "text-strong", style: tmp.label, children: stringResult };
  items2[2] = closure_9(onSelect(5624).Text, obj11);
  tmp17 = closure_3;
  if (flag) {
    const obj12 = { size: "small", color: token };
    tmp15Result2 = tmp15(tmp2(6953).ActivityIndicator, obj12);
  } else {
    const obj13 = { selected: tmp8 };
    tmp15Result2 = tmp15(tmp2(7062).FormRadio, obj13);
  }
  const obj14 = { children: items3 };
  items2[3] = tmp15Result2;
  items3 = [closure_9(ThemeContextProvider, obj8), ];
  const obj15 = { style: tmp.legal, children: closure_9(Text2, obj16) };
  obj16 = { variant: "text-xs/medium", color: "text-muted", children: intl3.format(_modDef4285.y2YmJv, obj17) };
  Text2 = tmp2(5624).Text;
  intl3 = tmp2(1113).intl;
  obj17 = {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelect(dependencyMap[22]).openHexagonCampaignLearnMore, children };
      const Text = onSelect(dependencyMap[14]).Text;
      return closure_1_9(Text, obj, arg1);
    }
  };
  items3[1] = closure_9(closure_4, obj15);
  items1[1] = closure_10(closure_4, obj14);
  return closure_10(closure_4, obj4);
};
