// Module ID: 17451
// Function ID: 17452
// Name: HexagonCampaignAppIconSection
// Dependencies: [19, 17, 5034, 21, 5009, 575, 5037, 16411, 6778, 9959, 5077, 1114, 4282, 5591, 5619, 16433, 5075, 16427, 16428, 16943, 6947, 7056, 16430, 2]
// Exports: default

// Module 17451 (HexagonCampaignAppIconSection)
import nativeDefault from "native" /* 575 */;
import _modDef4282 from "module_4282" /* 4282 */;
import AppIconTypes from "AppIconTypes" /* 9959 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 16428 */;
import AppIconDefault from "AppIcon" /* 16943 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let obj = onSelect(5037);
  const hexagonCampaignPerkAvailability = obj.useHexagonCampaignPerkAvailability(constants.APP_ICON, "HexagonCampaignAppIconSection");
  const useTrackHexagonCampaignContentViewed = onSelect(16411).useTrackHexagonCampaignContentViewed;
  onSelect(16411);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(onSelect(6778).QuestContent.APP_ICON_SETTINGS, onSelect(16411).HexagonCampaignContentSurface.APP_ICON_PICKER, true);
  const tmp8 = currentAppIcon === onSelect(9959).LimitedTimeAppIconIds.HEXAGON;
  const obj2 = onSelect(5077);
  const radioA11yNative = obj2.useRadioA11yNative({ selected: tmp8, busy: flag });
  const intl = onSelect(1114).intl;
  const stringResult = intl.string(_modDef4282.JC4Pii);
  const obj4 = { style: tmp.section, children: items1 };
  const obj5 = { style: tmp.header, children: items };
  const obj3 = onSelect(5591);
  const token = obj3.useToken(nativeDefault.colors.WHITE);
  const obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(_modDef4282["2UCcmW"]) };
  let Text = onSelect(5619).Text;
  intl2 = onSelect(1114).intl;
  items = [closure_9(Text, obj6), ];
  let tmp15Result = hexagonCampaignPerkAvailability !== constants2.LOCKED;
  const tmp4 = constants;
  if (tmp15Result) {
    const obj7 = { perk: tmp4.APP_ICON };
    tmp15Result = tmp15(tmp10(16433), obj7);
  }
  items[1] = tmp15Result;
  items1 = [closure_10(closure_4, obj5), ];
  const obj8 = { theme: onSelect(16427).ThemeTypes.DARK, children: closure_10(tmp17, obj9) };
  const ThemeContextProvider = tmp2(5075).ThemeContextProvider;
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
  const obj10 = { id: onSelect(9959).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp.icon };
  const tmp10Result = AppIconDefault;
  items2[1] = closure_9(tmp10Result, obj10);
  const obj11 = { variant: "text-md/semibold", color: "text-strong", style: tmp.label, children: stringResult };
  items2[2] = closure_9(onSelect(5619).Text, obj11);
  tmp17 = closure_3;
  if (flag) {
    const obj12 = { size: "small", color: token };
    tmp15Result2 = tmp15(tmp2(6947).ActivityIndicator, obj12);
  } else {
    const obj13 = { selected: tmp8 };
    tmp15Result2 = tmp15(tmp2(7056).FormRadio, obj13);
  }
  const obj14 = { children: items3 };
  items2[3] = tmp15Result2;
  items3 = [closure_9(ThemeContextProvider, obj8), ];
  const obj15 = { style: tmp.legal, children: closure_9(Text2, obj16) };
  obj16 = { variant: "text-xs/medium", color: "text-muted", children: intl3.format(_modDef4282.y2YmJv, obj17) };
  Text2 = tmp2(5619).Text;
  intl3 = tmp2(1114).intl;
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
