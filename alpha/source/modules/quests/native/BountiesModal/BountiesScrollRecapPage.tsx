// Module ID: 17230
// Function ID: 17231
// Name: BountiesScrollRecapPage
// Dependencies: [19, 17, 5171, 21, 575, 5170, 1377, 9606, 17231, 8965, 17232, 1627, 504, 17233, 5781, 1113, 9634, 5788, 2]
// Exports: BountiesScrollRecapPage

// Module 17230 (BountiesScrollRecapPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import common_Video from "common/Video" /* 8965 */;
import OrbsIcon from "OrbsIcon" /* 9634 */;
import _modDef17231 from "module_17231" /* 17231 */;
import _modDef17232 from "module_17232" /* 17232 */;
import _modDef17233 from "module_17233" /* 17233 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
    obj3 = { url: _modDef17231, style: _false.absoluteFillObject, autoplay: !reducedMotion };
    APNGPlayer = tmp(9606).APNGPlayer;
    tmp3Result = tmp3(React3, obj2);
  } else {
    const obj4 = { source: obj5, style, resizeMode: "contain", paused: reducedMotion, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    obj5 = { uri: _modDef17232 };
    const VideoComponent = tmp(8965).VideoComponent;
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
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" }, centeredCopy: { alignItems: "center", width: "100%" }, orbsBackground: { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 }, headerLabel: { paddingBottom: nativeDefault.space.PX_4 }, titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 }, actions: rect, orbAmount: { marginTop: num, lineHeight: 46 } };
  ({ overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" });
  ({ paddingBottom: nativeDefault.space.PX_4 });
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

export function BountiesScrollRecapPage(orbAmount) {
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
  let obj11;
  let obj16;
  let obj5;
  let onClose;
  let style;
  let useReducedMotion;
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  const tmp2 = useSafeAreaInsetsDefault();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: items1, pointerEvents: "box-none", children: items3 };
  items1 = [tmp.root, style];
  const obj3 = { style: _false.absoluteFillObject, pointerEvents: "none", children: items2 };
  const obj4 = { source: obj5, style: _false.absoluteFillObject, resizeMode: "cover", paused: stateFromStores, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj5 = { uri: _modDef17233 };
  const VideoComponent = common_Video.VideoComponent;
  items2 = [metroRequire(VideoComponent, obj4), ];
  const obj6 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items2[1] = metroRequire(BountiesRecapOrbsBackground, obj6);
  items3 = [metroImportDefault(React3, obj3), ];
  const obj7 = { style: tmp.content, pointerEvents: "box-none", children: items6 };
  const obj8 = { style: tmp.centeredCopy, pointerEvents: "none", children: items4 };
  const obj9 = { variant: "body-sm/medium", color: "text-brand", style: tmp.headerLabel, children: intl.string(intl4.t.d6Rrn6) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items4 = [metroRequire(Text, obj9), , ];
  const obj10 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: metroImportDefault(React3, obj11) };
  obj11 = { style: tmp.titleRow, children: items5 };
  items5 = [metroRequire(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj12 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  const Text2 = Text_Text.Text;
  items5[1] = metroRequire(Text2, obj12);
  items4[1] = metroRequire(React3, obj10);
  const obj13 = { variant: "body-md/medium", color: "text-muted", style: { textAlign: "center" }, children: intl2.string(intl4.t.x0Ffz3) };
  const Text3 = Text_Text.Text;
  intl2 = intl4.intl;
  items4[2] = metroRequire(Text3, obj13);
  items6 = [metroImportDefault(React3, obj8), ];
  const obj14 = { style: items7, children: metroRequire(Button, obj16) };
  items7 = [tmp.actions, { bottom: tmp2.bottom + nativeDefault.space.PX_8 }];
  obj16 = { grow: true, variant: "primary", text: intl3.string(intl4.t.i4jeWR), size: "lg", onPress: onClose };
  ({ bottom: tmp2.bottom + nativeDefault.space.PX_8 });
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items6[1] = metroRequire(React3, obj14);
  items3[1] = metroImportDefault(React3, obj7);
  return metroImportDefault(React3, obj2);
}
