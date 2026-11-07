// Module ID: 19604
// Function ID: 19605
// Name: VoicePanelHeaderUserState
// Dependencies: [19, 6898, 21, 1652, 9072, 5140, 575, 19605, 19603, 9313, 7023, 11362, 504, 5370, 2]

// Module 19604 (VoicePanelHeaderUserState)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import NativeViewDefault from "NativeView" /* 7023 */;
import native from "native" /* 9072 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import useStableParticipant from "useStableParticipant" /* 19603 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 19605 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const useStableParticipantDefault = useStableParticipant;
const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;

let rect;
let size;
let size1;
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  let obj5;
  const tmp = closure_8();
  let type;
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  if (participant != null) {
    type = participant.type;
  }
  let id;
  const obj = useStableParticipant;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const items = [];
  const tmp4Result = tmp4(type, id, guildId);
  const iter = tmp4Result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp11 = require;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let push = items.push;
      let BackgroundBlurView = tmp11(9072).BackgroundBlurView;
      let obj3 = { style: tmp.floatingIcon, state: tmp9.videoIconState };
      let arr = push(<BackgroundBlurView key="video" blurTheme="dark" style={tmp.floatingIconWrapper}>{null}</BackgroundBlurView>);
    }
    if (tmp9.type === tmp11(19605).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let tmp35 = jsx;
      let push2 = items.push;
      let tmp36 = jsx;
      let items1 = [tmp.floatingIconWrapper, ];
      let leftMargin;
      let BackgroundBlurView2 = tmp11(9072).BackgroundBlurView;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      let obj4 = { blurTheme: "dark", style: items1, children: tmp36(tmp11(9313).MuteDeafenIcon, obj5) };
      items1[1] = leftMargin;
      obj5 = { style: tmp.floatingIcon, state: tmp9.muteDeafenIconState };
      let push2Result = push2(tmp35(BackgroundBlurView2, obj4, "mute-deafen"));
    }
    continue;
  }
  if (0 !== items.length) {
    const items2 = [tmp.iconContainer, userIcons];
    return jsx(NativeViewDefault, { style: items2, children: items });
  }
}
const jsx = Fragment.jsx;
let closure_6 = module_1652.createAnimatedComponent(native.BackgroundBlurView);
let closure_7 = { duration: 100 };
let createStyles = createStyles_mod;
let obj = { container: rect, iconContainer: { flexDirection: "row" }, floatingIconWrapper: size, floatingIcon: size1, leftMargin: { marginLeft: 4 } };
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
createStyles = createStyles.createStyles;
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
let closure_10 = { code: "(function VoicePanelHeaderUserStateTsx1(){let[withTiming,isHeaderHidden,OPACITY_TIMING]=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};})" };
const memoResult = react.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const context = react.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = closure_8();
  let obj = channelId(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(useStableParticipantDefault(stateFromStores, channelId, guildId), guildId);
  channelId(1652);
  const items1 = [closure_10, channelId(5370).withTiming, isHeaderHidden, closure_7];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class VoicePanelHeaderUserStateTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get()) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  VoicePanelHeaderUserStateTsx1.__closure = items2;
  VoicePanelHeaderUserStateTsx1.__workletHash = 15393024042132;
  VoicePanelHeaderUserStateTsx1.__initData = tmp6;
  let tmp11 = null;
  if (null != tmp4) {
    const items3 = [tmp2.container, tmp10];
    tmp11 = <closure_6 blurTheme="dark" style={items3} pointerEvents="none">{tmp4}</closure_6>;
  }
  return tmp11;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };
