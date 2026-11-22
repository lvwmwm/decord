// Module ID: 19209
// Function ID: 19210
// Name: PlayableActivityFrameHeader
// Dependencies: [19, 17, 5539, 6558, 21, 4913, 575, 19210, 19204, 19189, 5173, 16360, 5504, 1112, 4661, 7591, 7151, 6953, 2]
// Exports: default

// Module 19209 (PlayableActivityFrameHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5173 */;
import Text_Text from "Text/Text" /* 5504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import leaveFrame from "leaveFrame" /* 6953 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 19189 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let rect1;
let size;
const View = react_native.View;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const orbAmount = QuestConstants.PLAYABLE_REWARD_ORB_QUANTITY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: rect, handleWrapper: rect1, handle: size, info: obj2, titleGroup: { flex: 1, minWidth: 0 }, textShadow: obj3, subtitle: { opacity: 0.8 } };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", left: 0, right: 0, top: nativeDefault.space.PX_4, alignItems: "center" };
size = { width: 31, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, flex: 1, minWidth: 0 };
obj3 = { margin: -14, padding: 14, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 14 };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/frames/panel/native/PlayableActivityFrameHeader.tsx");

export default function PlayableActivityFrameHeader(arg0) {
  let XSmallIcon;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj3;
  let obj5;
  let pipState;
  let playable;
  let productName;
  let wrapperOffset;
  ({ frameId: require, playable } = arg0);
  let setMode;
  const tmp = closure_9();
  const tmp4 = setMode(19210)(playable.id);
  let isClaimed = tmp4.isClaimed;
  const remainingSeconds = tmp4.remainingSeconds;
  const context = react.useContext(setMode(19204));
  setMode = context.setMode;
  ({ wrapperOffset, pipState } = context);
  let obj = ActivityPanelHeader;
  const obj2 = { gesture: obj.useBaseActivityPanelHeaderContent({ landscape: false, setMode, wrapperOffset, pipState }).gesture, children: closure_8(View, obj3) };
  obj3 = { style: tmp.header, children: items };
  const obj4 = { style: tmp.handleWrapper, pointerEvents: "none", children: closure_7(View, obj5) };
  obj5 = { style: tmp.handle };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items = [closure_7(View, obj4), , ];
  const obj6 = { style: tmp.info, children: items1 };
  items1 = [, ];
  const obj7 = { isCompleted: isClaimed, totalSeconds: playable.rewardTimerSeconds, remainingSeconds };
  items1[0] = closure_7(setMode(16360), obj7);
  const obj8 = { style: tmp.titleGroup, children: items2 };
  const obj9 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 1.25, style: tmp.textShadow, children: productName };
  const Text = Text_Text.Text;
  if (isClaimed) {
    const intl = tmp6(1112).intl;
    productName = intl.string(tmp2(4661)["08Kgg0"]);
  } else {
    productName = playable.productName;
  }
  items2 = [closure_7(Text, obj9), ];
  if (isClaimed) {
    const obj10 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 1.25, style: items3, children: intl2.formatToPlainString(setMode(4661).Hshnic, obj11) };
    items3 = [, ];
    ({ textShadow: arr4[0], subtitle: arr4[1] } = tmp);
    const Text2 = tmp6(5504).Text;
    intl2 = tmp6(1112).intl;
    obj11 = { orbAmount };
    isClaimed = tmp7(Text2, obj10);
  }
  items2[1] = isClaimed;
  items1[1] = closure_8(View, obj8);
  items[1] = closure_8(View, obj6);
  const obj12 = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_7(XSmallIcon, obj13),
    accessibilityLabel: intl3.string(intl4.t.cpT0Cq),
    onPress: function onClose() {
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        const obj = leaveFrame;
        return obj.leaveFrame(closure_1_0);
      }, 400);
    }
  };
  const IconButton = tmp6(7591).IconButton;
  obj13 = { size: "sm", color: setMode(575).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  XSmallIcon = tmp6(7151).XSmallIcon;
  intl3 = tmp6(1112).intl;
  items[2] = closure_7(IconButton, obj12);
  return closure_7(GestureDetector, obj2);
};
