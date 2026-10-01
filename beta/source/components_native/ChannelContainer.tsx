// Module ID: 9537
// Function ID: 9538
// Name: ChannelContainer
// Dependencies: [19, 17, 4470, 2045, 2099, 1074, 2042, 21, 4836, 4695, 9538, 504, 8861, 7720, 4654, 2029, 10865, 10866, 8973, 2]
// Exports: ChannelContainer

// Module 9537 (ChannelContainer)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import useChatLayoutDefault from "useChatLayout" /* 4695 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let tmp;
let tmp2;
let unpackModuleId;
const NotificationsDefault = tmp2(9538);
const useChannelStylesShared = tmp(10865);
function NotificationsContainer() {
  let tmp4 = null;
  const tmp = closure_12();
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const obj = { style: tmp.container, children: authStore(NotificationsDefault, {}) };
    tmp4 = authStore(View, obj);
  }
  return tmp4;
}
let react = react_mod;
const View = react_native.View;
const ChannelTypes = Constants.ChannelTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 } });
let result = size.fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  let c2;
  let channel;
  let channelId;
  let closure_3;
  let isStageChannel;
  let items3;
  let items4;
  ({ guildId: require, channelId } = children);
  dependencyMap = undefined;
  react = undefined;
  let closure_4;
  let tmp = require;
  let tmp2 = dependencyMap;
  children = children.children;
  let obj = get_initialized;
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let _Boolean;
    let isGuildStageVoiceResult;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: _Boolean(isGuildStageVoiceResult) };
    _Boolean = Boolean;
    const channel = ChannelStore.getChannel(voiceChannelId);
    isGuildStageVoiceResult = undefined;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    return obj;
  });
  ({ channel, isStageChannel } = stateFromStoresObject);
  let voiceChannelId = stateFromStoresObject.voiceChannelId;
  let tmp5 = !isStageChannel;
  if (isStageChannel) {
    tmp5 = channelId(8861)(voiceChannelId);
  }
  const items1 = [LurkingStore];
  let isPrivateResult = null != channel;
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const isLurkingResult = null != require && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp8 = channelId(7720)(isPrivateResult);
  react = tmp8;
  const tmp9 = channelId(7720)(channelId);
  closure_4 = tmp9;
  const items2 = [channelId, tmp9, isPrivateResult, tmp8];
  const effect = react.useEffect(() => {
    let tmp = closure_3;
    let tmp2 = closure_3 && !c2;
    if (!tmp2) {
      if (tmp) {
        tmp = c2;
      }
      if (tmp) {
        tmp = channelId !== closure_4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
    }
  }, items2);
  const tmpResult2 = useChannelStylesShared;
  const channelStyles = tmpResult2.useChannelStyles();
  let obj2 = { style: channelStyles.scene, children: items4 };
  let type;
  const obj3 = { style: channelStyles.flex, children: items3 };
  if (channel != null) {
    type = channel.type;
  }
  let tmp15 = null;
  if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
    tmp15 = null;
    if (stateFromStores) {
      const obj4 = { channel };
      tmp15 = closure_10(tmp4(10866), obj4);
    }
  }
  items3 = [tmp15, children, ];
  if (tmp5) {
    const obj5 = { style: channelStyles.callPTTButton };
    tmp5 = closure_10(tmp4(8973), obj5);
  }
  items3[2] = tmp5;
  items4 = [closure_11(closure_4, obj3), closure_10(NotificationsContainer, {})];
  return closure_11(closure_4, obj2);
};
