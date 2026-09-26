// Module ID: 16926
// Function ID: 16927
// Name: VoicePanelHeaderUserState
// Dependencies: [19, 4852, 21, 4566, 8370, 4836, 576, 16927, 16925, 9132, 5901, 11754, 504, 4837, 2]

// Module 16926 (VoicePanelHeaderUserState)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import useStableParticipant from "useStableParticipant" /* 16925 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 16927 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;

const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;

require = fn;
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  const tmp = closure_8();
  let type;
  if (participant != null) {
    type = participant.type;
  }
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  obj = useStableParticipant;
  const items = [];
  const iter = tmp4(type, id, guildId)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp11 = require;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let obj2 = { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null };
      let obj3 = { style: tmp.floatingIcon, state: null };
      obj3.state = tmp9.videoIconState;
      obj2.children = jsx(tmp11(9132).VideoIcon, { style: tmp.floatingIcon, state: null });
      let arr = items.push(jsx(tmp11(8370).BackgroundBlurView, { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null }, "video"));
    }
    if (tmp9.type === tmp11(16927).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let tmp35 = jsx;
      let tmp36 = jsx;
      let items1 = [tmp.floatingIconWrapper, ];
      let leftMargin;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      let obj4 = { blurTheme: "dark", style: null, children: null };
      items1[1] = leftMargin;
      obj4.style = items1;
      let obj5 = { style: tmp.floatingIcon, state: null };
      obj5.state = tmp9.muteDeafenIconState;
      obj4.children = tmp36(tmp11(9132).MuteDeafenIcon, obj5);
      let arr2 = items.push(tmp35(tmp11(8370).BackgroundBlurView, obj4, "mute-deafen"));
    }
    continue;
  }
  if (0 !== items.length) {
    const obj6 = { style: null, children: null };
    const items2 = [tmp.iconContainer, userIcons];
    obj6.style = items2;
    obj6.children = items;
    return jsx(NativeViewDefault, { style: null, children: null });
  }
  const tmp4Result = tmp4(type, id, guildId);
}
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(8370).BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
const createStyles = fn(4836);
let obj = { container: null, iconContainer: null, floatingIconWrapper: null, floatingIcon: null, leftMargin: null };
const rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
obj.container = rect;
obj.iconContainer = { flexDirection: "row" };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.floatingIconWrapper = size;
const size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
obj.floatingIcon = size1;
obj.leftMargin = { marginLeft: 4 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default noop.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = noop.useContext(channelId(11754));
  channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = closure_8();
  const items = [ChannelRTCStore];
  const stateFromStores = isHeaderHidden(504).useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(16925)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4566);
  const fn = function h() {
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, closure_7) };
  };
  let obj = isHeaderHidden(504);
  fn.__closure = { withTiming: isHeaderHidden(4837).withTiming, isHeaderHidden, OPACITY_TIMING };
  fn.__workletHash = 7032221979181;
  fn.__initData = __initData;
  let tmp7 = null;
  if (null != tmp4) {
    const obj3 = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items1 = [tmp2.container, tmp6];
    obj3.style = items1;
    obj3.children = tmp4;
    tmp7 = <closure_6 blurTheme="dark" style={null} pointerEvents="none">{null}</closure_6>;
  }
  return tmp7;
});
export { useVoicePanelHeaderUserStateIcons };
