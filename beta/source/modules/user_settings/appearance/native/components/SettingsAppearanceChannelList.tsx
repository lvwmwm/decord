// Module ID: 14836
// Function ID: 14837
// Name: SettingsAppearanceChannelList
// Dependencies: [19, 17, 21, 4836, 576, 14837, 14838, 14839, 4566, 1115, 14845, 8179, 14848, 2]
// Exports: default

// Module 14836 (SettingsAppearanceChannelList)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import SettingsAppearanceChannelRowItemDefault from "SettingsAppearanceChannelRowItem" /* 14837 */;
import SettingsAppearanceMessagesHeaderItemDefault from "SettingsAppearanceMessagesHeaderItem" /* 14838 */;
import SettingsAppearanceActivityCardsItemDefault from "SettingsAppearanceActivityCardsItem" /* 14839 */;
import SettingsAppearanceGradientBackgroundDefault from "SettingsAppearanceGradientBackground" /* 14845 */;
import SettingsAppearanceChannelListPreviewNitroUpsellDefault from "SettingsAppearanceChannelListPreviewNitroUpsell" /* 14848 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let item;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { channelPreviewGradient: obj2, channelPreviewCardContainer: obj3 };
obj2 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, width: "100%", borderWidth: 1, shadowColor: "#000000" };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default function ChannelListPreview(useGradientBackground) {
  let animatedStyles;
  let data;
  let intl;
  let isNitroLocked;
  let items2;
  let obj3;
  let obj5;
  let themeIndex;
  let themes;
  let tmp4Result;
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = closure_7();
  const items = [animatedStyles];
  let tmp5 = dependencyMap;
  const callback = react.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      const obj2 = { animatedStyles };
      const tmp21 = SettingsAppearanceChannelRowItemDefault;
      const merged = Object.assign(item);
      return hasOwnProperty(tmp21, obj2);
    } else if ("messages-header" === kind) {
      const obj3 = { animatedStyles };
      const tmp13 = SettingsAppearanceMessagesHeaderItemDefault;
      const merged1 = Object.assign(item);
      return hasOwnProperty(tmp13, obj3);
    } else if ("activity-cards" === kind) {
      const obj = { animatedStyles };
      const tmp5 = SettingsAppearanceActivityCardsItemDefault;
      const merged2 = Object.assign(item);
      return hasOwnProperty(tmp5, obj);
    } else {
      return null;
    }
  }, items);
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal, ];
  let bgSurfaceHigh = !useGradientBackground;
  const View = ReanimatedRexportDefault.View;
  const tmp3 = closure_6;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  let obj = { style: items1, accessible: true, accessibilityRole: "image", accessibilityLabel: intl.string(animatedStyles(1115).t.iGxm3x), children: items2 };
  items1[2] = bgSurfaceHigh;
  intl = animatedStyles(1115).intl;
  let tmp7 = null;
  const tmp6 = animatedStyles;
  if (useGradientBackground) {
    let obj2 = { style: tmp.channelPreviewGradient, children: closure_5(tmp4Result, obj3) };
    obj3 = { themes, themeIndex, isDimmed: false, backgroundToken: tmp4(576).colors.BACKGROUND_BASE_LOW };
    tmp4Result = SettingsAppearanceGradientBackgroundDefault;
    tmp7 = closure_5(closure_4, obj2);
  }
  items2 = [tmp7, , ];
  const obj4 = {
    contentContainerStyle: obj5,
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants"
  };
  obj5 = { paddingVertical: nativeDefault.space.PX_16 };
  const FlashList = tmp6(8179).FlashList;
  items2[1] = closure_5(FlashList, obj4);
  const obj6 = { visible: isNitroLocked, theme: themes[themeIndex] };
  items2[2] = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, obj6);
  return tmp3(View, obj);
};
