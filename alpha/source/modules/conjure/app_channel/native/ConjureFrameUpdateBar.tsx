// Module ID: 18743
// Function ID: 18744
// Name: ConjureFrameUpdateBar
// Dependencies: [19, 17, 6810, 18739, 21, 4917, 575, 6026, 5508, 1112, 4192, 13902, 13896, 2]
// Exports: default

// Module 18743 (ConjureFrameUpdateBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import Text_Text from "Text/Text" /* 5508 */;
import Pressables from "Pressables" /* 6026 */;
import restartFrames from "restartFrames" /* 13896 */;
import RefreshIcon2 from "RefreshIcon" /* 13902 */;
import ConjureFrameUpdateStore from "ConjureFrameUpdateStore" /* 18739 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6810 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let rect;
class ConjureFrameUpdateBarContent {
  constructor(onReload) {
    let intl;
    let intl2;
    let items;
    onReload = onReload.onReload;
    const tmp = closure_9();
    const obj = { accessibilityRole: "button", style: tmp.bar, onPress: onReload, children: items };
    const PressableOpacity = Pressables.PressableOpacity;
    const obj2 = { variant: "body-sm/semibold", color: "text-overlay-light", style: tmp.text, children: intl.string(_modDef4192["93nLLM"]) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items = [metroImportDefault(Text, obj2), , ];
    const obj3 = { variant: "body-sm/semibold", color: "text-overlay-light", children: intl2.string(_modDef4192["9091U0"]) };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    items[1] = metroImportDefault(Text2, obj3);
    const obj4 = { size: "sm", color: nativeDefault.colors.WHITE };
    const RefreshIcon = RefreshIcon2.RefreshIcon;
    items[2] = metroImportDefault(RefreshIcon, obj4);
    return metroImportAll(PressableOpacity, obj);
  }
}
const View = react_native.View;
let closure_6 = ConjureFrameUpdateStore.useConjureFrameUpdateAvailable;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: { flex: 1 }, bar: rect, text: { flex: 1 } };
rect = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, flexDirection: "row", alignItems: "center", minHeight: 45, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const React4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureFrameUpdateBar.tsx");

export default function ConjureFrameUpdateBar(frameId) {
  let items;
  frameId = frameId.frameId;
  const children = frameId.children;
  [][0] = frameId;
  const tmp = closure_9();
  let obj = { style: tmp.container, children: items };
  items = [children, ];
  let tmp6 = null;
  const tmp2 = closure_6(frameId);
  const tmp4 = closure_8;
  const tmp5 = View;
  if (tmp2) {
    const obj2 = { onReload: tmp3 };
    tmp6 = closure_7(ConjureFrameUpdateBarContent, obj2);
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj);
};
export { ConjureFrameUpdateBarContent };
