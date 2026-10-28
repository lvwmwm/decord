// Module ID: 16921
// Function ID: 16922
// Name: HexagonCampaignAppIconSection
// Dependencies: [19, 17, 5028, 21, 5003, 587, 558, 576, 5031, 15891, 6745, 9898, 5071, 1128, 4279, 5284, 5266, 15908, 15914, 15909, 16418, 6912, 7020, 5069, 15911, 2]

// Module 16921 (HexagonCampaignAppIconSection)
import nativeDefault from "native" /* 587 */;
import _modDef4279 from "module_4279" /* 4279 */;
import AppIconTypes from "AppIconTypes" /* 9898 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 15909 */;
import AppIconDefault from "AppIcon" /* 16418 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignAppIconSection(currentAppIcon) {
  let intl2;
  let isPending;
  let items;
  let onSelect;
  let obj = onSelect(576);
  const cResult = obj.c(39);
  ({ isPending, onSelect } = currentAppIcon);
  let tmp4 = undefined !== isPending;
  currentAppIcon = currentAppIcon.currentAppIcon;
  if (tmp4) {
    tmp4 = isPending;
  }
  const tmp5 = closure_11();
  const tmpResult = onSelect(5031);
  const hexagonCampaignPerkAvailability = tmpResult.useHexagonCampaignPerkAvailability(constants.APP_ICON, "HexagonCampaignAppIconSection");
  const useTrackHexagonCampaignContentViewed = onSelect(15891).useTrackHexagonCampaignContentViewed;
  onSelect(15891);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(tmp(6745).QuestContent.APP_ICON_SETTINGS, tmp(15891).HexagonCampaignContentSurface.APP_ICON_PICKER, true);
  const tmp10 = currentAppIcon === onSelect(9898).LimitedTimeAppIconIds.HEXAGON;
  const tmp6 = constants;
  if (cResult[0] === tmp4) {
    let tmp11;
    let tmp14;
    let tmp20;
    let tmp23;
    if (cResult[1] === tmp10) {
      tmp11 = cResult[2];
    }
    const tmpResult5 = onSelect(5071);
    const radioA11yNative = tmpResult5.useRadioA11yNative(tmp11);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(_modDef4279.JC4Pii);
      cResult[3] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[3];
    }
    const tmpResult6 = onSelect(5284);
    const token = tmpResult6.useToken(nativeDefault.colors.WHITE);
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      function learnMoreHook(children, arg1) {
        const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelect(dependencyMap[17]).openHexagonCampaignLearnMore, children };
        const Text = onSelect(dependencyMap[16]).Text;
        return closure_1_9(Text, obj, arg1);
      }
      cResult[4] = learnMoreHook;
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(_modDef4279["2UCcmW"]) };
      let Text = tmp(5266).Text;
      intl2 = tmp(1128).intl;
      const tmp22 = closure_9(Text, obj2);
      cResult[5] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[5];
    }
    if (cResult[6] !== hexagonCampaignPerkAvailability) {
      let tmp25 = hexagonCampaignPerkAvailability !== constants2.LOCKED;
      if (tmp25) {
        const obj3 = { perk: tmp6.APP_ICON };
        tmp25 = closure_9(tmp17(15914), obj3);
      }
      cResult[6] = hexagonCampaignPerkAvailability;
      cResult[7] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[7];
    }
    if (cResult[8] === tmp5.header) {
      let tmp40Result;
      if (cResult[11] !== onSelect) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        cResult[11] = onSelect;
        cResult[12] = L;
      } else {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        cResult[13] = closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 });
        const tmp33 = closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 });
      } else {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
      }
      if (cResult[14] !== tmp5.icon) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        const obj4 = { id: onSelect(9898).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp5.icon };
        const tmp17Result = AppIconDefault;
        cResult[14] = tmp5.icon;
        cResult[15] = closure_9(tmp17Result, obj4);
        const tmp36 = closure_9(tmp17Result, obj4);
      } else {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
      }
      if (cResult[16] !== tmp5.label) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        const obj5 = { variant: "text-md/semibold", color: "text-strong", style: tmp5.label, children: tmp14 };
        cResult[16] = tmp5.label;
        cResult[17] = closure_9(onSelect(5266).Text, obj5);
        const tmp38 = closure_9(onSelect(5266).Text, obj5);
      } else {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
      }
      if (cResult[18] === tmp4) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
      }
      if (tmp4) {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        tmp43[1] = token;
        tmp40Result = tmp40(tmp(6912).ActivityIndicator, tmp43);
      } else {
        class L {
          constructor() {
            return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
          }
        }
        tmp41[0] = tmp10;
        tmp40Result = tmp40(tmp(7020).FormRadio, tmp41);
      }
      cResult[18] = tmp4;
      cResult[19] = tmp10;
      cResult[20] = token;
      cResult[21] = tmp40Result;
    }
    const obj6 = { style: tmp5.header, children: items };
    items = [tmp20, tmp23];
    cResult[8] = tmp5.header;
    cResult[9] = tmp23;
    cResult[10] = closure_10(closure_4, obj6);
    const tmp30 = closure_10(closure_4, obj6);
  }
  const obj7 = { selected: tmp10, busy: tmp4 };
  cResult[0] = tmp4;
  cResult[1] = tmp10;
  cResult[2] = obj7;
  tmp11 = obj7;
}) : (function HexagonCampaignAppIconSection(isPending) {
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
  let obj = onSelect(5031);
  const hexagonCampaignPerkAvailability = obj.useHexagonCampaignPerkAvailability(constants.APP_ICON, "HexagonCampaignAppIconSection");
  const useTrackHexagonCampaignContentViewed = onSelect(15891).useTrackHexagonCampaignContentViewed;
  onSelect(15891);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(onSelect(6745).QuestContent.APP_ICON_SETTINGS, onSelect(15891).HexagonCampaignContentSurface.APP_ICON_PICKER, true);
  const tmp8 = currentAppIcon === onSelect(9898).LimitedTimeAppIconIds.HEXAGON;
  const obj2 = onSelect(5071);
  const radioA11yNative = obj2.useRadioA11yNative({ selected: tmp8, busy: flag });
  const intl = onSelect(1128).intl;
  const stringResult = intl.string(_modDef4279.JC4Pii);
  const obj4 = { style: tmp.section, children: items1 };
  const obj5 = { style: tmp.header, children: items };
  const obj3 = onSelect(5284);
  const token = obj3.useToken(nativeDefault.colors.WHITE);
  const obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(_modDef4279["2UCcmW"]) };
  let Text = onSelect(5266).Text;
  intl2 = onSelect(1128).intl;
  items = [closure_9(Text, obj6), ];
  let tmp15Result = hexagonCampaignPerkAvailability !== constants2.LOCKED;
  const tmp4 = constants;
  if (tmp15Result) {
    const obj7 = { perk: tmp4.APP_ICON };
    tmp15Result = tmp15(tmp10(15914), obj7);
  }
  items[1] = tmp15Result;
  items1 = [closure_10(closure_4, obj5), ];
  const obj8 = { theme: onSelect(15911).ThemeTypes.DARK, children: closure_10(tmp17, obj9) };
  const ThemeContextProvider = tmp2(5069).ThemeContextProvider;
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
  const obj10 = { id: onSelect(9898).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp.icon };
  const tmp10Result = AppIconDefault;
  items2[1] = closure_9(tmp10Result, obj10);
  const obj11 = { variant: "text-md/semibold", color: "text-strong", style: tmp.label, children: stringResult };
  items2[2] = closure_9(onSelect(5266).Text, obj11);
  tmp17 = closure_3;
  if (flag) {
    const obj12 = { size: "small", color: token };
    tmp15Result2 = tmp15(tmp2(6912).ActivityIndicator, obj12);
  } else {
    const obj13 = { selected: tmp8 };
    tmp15Result2 = tmp15(tmp2(7020).FormRadio, obj13);
  }
  const obj14 = { children: items3 };
  items2[3] = tmp15Result2;
  items3 = [closure_9(ThemeContextProvider, obj8), ];
  const obj15 = { style: tmp.legal, children: closure_9(Text2, obj16) };
  obj16 = { variant: "text-xs/medium", color: "text-muted", children: intl3.format(_modDef4279.y2YmJv, obj17) };
  Text2 = tmp2(5266).Text;
  intl3 = tmp2(1128).intl;
  obj17 = {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelect(dependencyMap[17]).openHexagonCampaignLearnMore, children };
      const Text = onSelect(dependencyMap[16]).Text;
      return closure_1_9(Text, obj, arg1);
    }
  };
  items3[1] = closure_9(closure_4, obj15);
  items1[1] = closure_10(closure_4, obj14);
  return closure_10(closure_4, obj4);
});
const result = size.fileFinishedImporting("modules/app_icons/native/HexagonCampaignAppIconSection.tsx");

export default tmp7;
