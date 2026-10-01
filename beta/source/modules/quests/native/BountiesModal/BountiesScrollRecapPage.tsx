// Module ID: 14585
// Function ID: 14586
// Name: BountiesScrollRecapPage
// Dependencies: [19, 17, 4825, 21, 576, 4836, 1364, 8271, 14586, 7755, 14587, 6400, 1613, 504, 14588, 4832, 1115, 8298, 5281, 2]
// Exports: BountiesScrollRecapPage

// Module 14585 (BountiesScrollRecapPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import common_Video from "common/Video" /* 7755 */;
import OrbsIcon from "OrbsIcon" /* 8298 */;
import _modDef14586 from "module_14586" /* 14586 */;
import _modDef14587 from "module_14587" /* 14587 */;
import _modDef14588 from "module_14588" /* 14588 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
function BountiesRecapOrbsBackground(arg0) {
  let APNGPlayer;
  let obj3;
  let obj5;
  let reducedMotion;
  let style;
  let tmp3Result;
  ({ style, reducedMotion } = arg0);
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: metroRequire(APNGPlayer, obj3) };
    obj3 = { url: _modDef14586, style: _false.absoluteFillObject, autoplay: !reducedMotion };
    APNGPlayer = tmp(8271).APNGPlayer;
    tmp3Result = tmp3(React3, obj2);
  } else {
    const obj4 = { source: obj5, style, resizeMode: "contain", paused: reducedMotion, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    obj5 = { uri: _modDef14587 };
    const VideoComponent = tmp(7755).VideoComponent;
    tmp3Result = tmp3(VideoComponent, obj4);
  }
  return tmp3Result;
}
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const lg = nativeDefault.radii.lg;
let closure_9 = createStyles.createStyles(() => {
  let num;
  let rect;
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" }, centeredCopy: { alignItems: "center", width: "100%" }, orbsBackground: { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 }, headerLabel: { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" }, titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 }, actions: rect, orbAmount: { marginTop: num, lineHeight: 46 } };
  ({ overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" });
  ({ paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 });
  rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  num = 0;
  const obj7 = PlatformUtils;
  if (obj7.isIOS()) {
    num = 6;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj17;
  let obj6;
  let onClose;
  let style;
  let useReducedMotion;
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
  const tmp3 = useSafeAreaInsetsDefault();
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: items1, pointerEvents: "box-none", children: items3 };
  items1 = [tmp.root, style];
  const obj4 = { style: _false.absoluteFillObject, pointerEvents: "none", children: items2 };
  const obj5 = { source: obj6, style: _false.absoluteFillObject, resizeMode: "cover", paused: stateFromStores, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj6 = { uri: _modDef14588 };
  const VideoComponent = common_Video.VideoComponent;
  items2 = [metroRequire(VideoComponent, obj5), ];
  const obj7 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items2[1] = metroRequire(BountiesRecapOrbsBackground, obj7);
  items3 = [metroImportDefault(React3, obj4), ];
  const obj8 = { style: tmp.content, pointerEvents: "box-none", children: items7 };
  const obj9 = { style: tmp.centeredCopy, pointerEvents: "none", children: items5 };
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: items4, children: intl.string(intl4.t.d6Rrn6) };
  items4 = [tmp.headerLabel, typeConsolidationEyebrow.style];
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items5 = [metroRequire(Text, obj10), , ];
  const obj11 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: metroImportDefault(React3, obj12) };
  obj12 = { style: tmp.titleRow, children: items6 };
  items6 = [metroRequire(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj13 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  const Text2 = Text_Text.Text;
  items6[1] = metroRequire(Text2, obj13);
  items5[1] = metroRequire(React3, obj11);
  const obj14 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: intl2.string(intl4.t.x0Ffz3) };
  const Text3 = Text_Text.Text;
  intl2 = intl4.intl;
  items5[2] = metroRequire(Text3, obj14);
  items7 = [metroImportDefault(React3, obj9), ];
  const obj15 = { style: items8, children: metroRequire(Button, obj17) };
  items8 = [tmp.actions, { bottom: tmp3.bottom + nativeDefault.space.PX_8 }];
  obj17 = { grow: true, variant: "primary", text: intl3.string(intl4.t.i4jeWR), size: "lg", onPress: onClose };
  ({ bottom: tmp3.bottom + nativeDefault.space.PX_8 });
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items7[1] = metroRequire(React3, obj15);
  items3[1] = metroImportDefault(React3, obj8);
  return metroImportDefault(React3, obj3);
};
