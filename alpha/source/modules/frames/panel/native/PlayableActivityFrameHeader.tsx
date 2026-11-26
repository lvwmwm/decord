// Module ID: 19427
// Function ID: 19428
// Name: PlayableActivityFrameHeader
// Dependencies: [19, 17, 5669, 6871, 21, 5043, 575, 19428, 19422, 19407, 7691, 5303, 16567, 5634, 1112, 4727, 7944, 7247, 6052, 2]
// Exports: default

// Module 19427 (PlayableActivityFrameHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5669 */;
import AlertModal from "AlertModal" /* 6052 */;
import QuestConstants from "QuestConstants" /* 6871 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

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
  let tmp9;
  let wrapperOffset;
  const f134558 = () => {
    const obj = require("leaveFrame");
    return obj.leaveFrame(closure_1_0);
  };
  ({ frameId: require, playable } = arg0);
  let isClaimed;
  let setMode;
  function onLeave() {
    setMode(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(f134558, 400);
  }
  let tmp = closure_9();
  const tmp4 = isClaimed(setMode[7])(playable.id);
  isClaimed = tmp4.isClaimed;
  const remainingSeconds = tmp4.remainingSeconds;
  const context = onLeave.useContext(isClaimed(setMode[8]));
  setMode = context.setMode;
  ({ wrapperOffset, pipState } = context);
  let obj = require("ActivityPanelHeader");
  const obj2 = { gesture: obj.useBaseActivityPanelHeaderContent({ landscape: false, setMode, wrapperOffset, pipState }).gesture, children: tmp8(tmp9, obj3) };
  tmp9 = View;
  obj3 = { style: tmp.header, children: items };
  const obj4 = { style: tmp.handleWrapper, pointerEvents: "none", children: closure_7(View, obj5) };
  obj5 = { style: tmp.handle };
  const GestureDetector = require("LegacyBaseButton").GestureDetector;
  items = [closure_7(View, obj4), , ];
  const obj6 = { style: tmp.info, children: items1 };
  items1 = [, ];
  const obj7 = { isCompleted: isClaimed, totalSeconds: playable.rewardTimerSeconds, remainingSeconds };
  items1[0] = closure_7(isClaimed(setMode[12]), obj7);
  const obj8 = { style: tmp.titleGroup, children: items2 };
  const obj9 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 1.25, style: tmp.textShadow, children: productName };
  const Text = require("Text/Text").Text;
  if (isClaimed) {
    let intl = tmp6(tmp3[14]).intl;
    productName = intl.string(tmp2(tmp3[15])["08Kgg0"]);
  } else {
    productName = playable.productName;
  }
  items2 = [tmp7(Text, obj9), ];
  if (isClaimed) {
    const obj10 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 1.25, style: items3, children: intl2.formatToPlainString(isClaimed(setMode[15]).Hshnic, obj11) };
    items3 = [, ];
    ({ textShadow: arr4[0], subtitle: arr4[1] } = tmp);
    const Text2 = tmp6(tmp3[13]).Text;
    intl2 = tmp6(tmp3[14]).intl;
    obj11 = { orbAmount };
    isClaimed = tmp7(Text2, obj10);
  }
  items2[1] = isClaimed;
  items1[1] = closure_8(tmp9, obj8);
  items[1] = closure_8(tmp9, obj6);
  const obj12 = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_7(XSmallIcon, obj13),
    accessibilityLabel: intl3.string(require("intl").t.cpT0Cq),
    onPress: function onClose() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      const tmp = isClaimed;
      if (tmp) {
        let obj = { key: "playable-leave-game-confirm", title: intl.string(intl5.t.sfp1IW), content: intl2.string(intl5.t.N9rsFG), confirmText: intl3.string(intl5.t["Hi1/aQ"]), cancelText: intl4.string(intl5.t.DvApnG), onConfirm: onLeave };
        const showConfirmModal = AlertModal.showConfirmModal;
        AlertModal;
        intl = intl5.intl;
        intl2 = intl5.intl;
        intl3 = intl5.intl;
        intl4 = intl5.intl;
        showConfirmModal(obj);
      } else {
        setMode(ActivityPanelModes.DISCONNECTED);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(f134558, 400);
      }
    }
  };
  const IconButton = tmp6(tmp3[16]).IconButton;
  obj13 = { size: "sm", color: isClaimed(setMode[6]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  XSmallIcon = tmp6(tmp3[17]).XSmallIcon;
  intl3 = tmp6(tmp3[14]).intl;
  items[2] = closure_7(IconButton, obj12);
  return closure_7(GestureDetector, obj2);
};
