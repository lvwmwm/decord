// Module ID: 16416
// Function ID: 16417
// Name: AdvertiserCtaBanner
// Dependencies: [109, 19, 17, 21, 1655, 4792, 575, 9850, 5397, 7490, 5479, 5383, 5390, 2]
// Exports: default

// Module 16416 (AdvertiserCtaBanner)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import Text_Text from "Text/Text" /* 5383 */;
import components_Button_Button from "components/Button/Button" /* 5390 */;
import ButtonHooks from "ButtonHooks" /* 5397 */;
import FastImageDefault from "FastImage" /* 5479 */;
import BackgroundBlurView2 from "BackgroundBlurView" /* 7490 */;
import AssetUtils from "AssetUtils" /* 9850 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

const module_1655 = _mod1655;

let Pressable;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["style"];
({ StyleSheet: hasOwnProperty, View: metroRequire, Pressable } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = module_1655.createAnimatedComponent(Pressable);
let closure_10 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  let rect;
  const obj = { outerContainer: rect, ctaPressable: obj2, cta: { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, ctaLogoContainer: size, ctaLogo: obj4, ctaInfo: { flex: 1, justifyContent: "center" } };
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.lg };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj4 = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/AdvertiserCtaBanner.tsx");

export default function AdvertiserCtaBanner(ctaInfo) {
  let BackgroundBlurView;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj12;
  let obj5;
  let obj6;
  let obj8;
  let onButtonPress;
  let onContainerPress;
  let style;
  ctaInfo = ctaInfo.ctaInfo;
  ({ style, onContainerPress, onButtonPress } = ctaInfo);
  const tmp = closure_10();
  let scaledImageUrl;
  if (null != ctaInfo.iconImageUri) {
    size = { assetUrl: ctaInfo.iconImageUri, width: 40, height: 40 };
    const obj = AssetUtils;
    scaledImageUrl = obj.getScaledImageUrl(size);
  }
  const obj3 = _mod1655;
  const sharedValue = obj3.useSharedValue(0);
  const obj4 = ButtonHooks;
  const buttonPressAnimationProps = obj4.useButtonPressAnimationProps(sharedValue);
  const style2 = buttonPressAnimationProps.style;
  const obj2 = { style: items, children: metroImportDefault(closure_9, obj5) };
  items = [tmp.outerContainer, style];
  obj5 = { onPress: onContainerPress, accessibilityRole: "button", accessibilityLabel: ctaInfo.label, style: items1, children: metroImportAll(BackgroundBlurView, obj6) };
  const tmp7 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
  const View = module_1655.View;
  const merged = Object.assign(tmp7);
  items1 = [tmp.ctaPressable, style2];
  obj6 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: items2 };
  const obj7 = { style: tmp.ctaLogoContainer, children: metroImportDefault(FastImageDefault, obj8) };
  BackgroundBlurView = BackgroundBlurView2.BackgroundBlurView;
  obj8 = { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" };
  items2 = [metroImportDefault(metroRequire, obj7), , ];
  const obj9 = { style: tmp.ctaInfo, children: metroImportDefault(Text_Text.Text, obj10) };
  obj10 = { lineClamp: 2, variant: "body-sm/semibold", color: "text-default", children: ctaInfo.label };
  items2[1] = metroImportDefault(metroRequire, obj9);
  const obj11 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: metroImportDefault(components_Button_Button.Button, obj12) };
  obj12 = { variant: "primary-overlay", text: ctaInfo.buttonLabel, size: "sm", onPress: onButtonPress };
  items2[2] = metroImportDefault(metroRequire, obj11);
  return metroImportDefault(View, obj2);
};
