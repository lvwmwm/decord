// Module ID: 19160
// Function ID: 19161
// Name: VoicePanelHeaderUserState
// Dependencies: [19, 6837, 21, 5090, 8983, 5009, 575, 19161, 19159, 9214, 6954, 11203, 504, 5249, 2]

// Module 19160 (VoicePanelHeaderUserState)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5249 */;
import NativeViewDefault from "NativeView" /* 6954 */;
import native from "native" /* 8983 */;
import useStableParticipant from "useStableParticipant" /* 19159 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 19161 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

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
      let BackgroundBlurView = tmp11(8983).BackgroundBlurView;
      let obj3 = { style: tmp.floatingIcon, state: tmp9.videoIconState };
      let arr = push(<BackgroundBlurView key="video" blurTheme="dark" style={tmp.floatingIconWrapper}>{null}</BackgroundBlurView>);
    }
    if (tmp9.type === tmp11(19161).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let tmp35 = jsx;
      let push2 = items.push;
      let tmp36 = jsx;
      let items1 = [tmp.floatingIconWrapper, ];
      let leftMargin;
      let BackgroundBlurView2 = tmp11(8983).BackgroundBlurView;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      let obj4 = { blurTheme: "dark", style: items1, children: tmp36(tmp11(9214).MuteDeafenIcon, obj5) };
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
let closure_6 = ReanimatedRexport.createAnimatedComponent(native.BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
let createStyles = createStyles_mod;
let obj = { container: rect, iconContainer: { flexDirection: "row" }, floatingIconWrapper: size, floatingIcon: size1, leftMargin: { marginLeft: 4 } };
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
createStyles = createStyles.createStyles;
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
const __initData = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
const memoResult = react.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = react.useContext(channelId(11203));
  channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = closure_8();
  let obj = isHeaderHidden(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(19159)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(5090);
  const fn = function h() {
    const withTiming = timing.withTiming;
    let num = 0;
    timing;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, OPACITY_TIMING) };
    return obj;
  };
  fn.__closure = { withTiming: isHeaderHidden(5249).withTiming, isHeaderHidden, OPACITY_TIMING };
  fn.__workletHash = 7032221979181;
  fn.__initData = __initData;
  let tmp7 = null;
  ({ withTiming: isHeaderHidden(5249).withTiming, isHeaderHidden, OPACITY_TIMING });
  if (null != tmp4) {
    const items1 = [tmp2.container, tmp6];
    tmp7 = <closure_6 blurTheme="dark" style={items1} pointerEvents="none">{tmp4}</closure_6>;
  }
  return tmp7;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };
