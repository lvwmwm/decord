// Module ID: 10216
// Function ID: 78836
// Name: NotificationsContainer
// Dependencies: [31, 27, 3759, 1348, 1906, 653, 1345, 33, 4130, 3984, 10217, 566, 10367, 8284, 3946, 1334, 10368, 10369, 10384, 2]
// Exports: ChannelContainer

// Module 10216 (NotificationsContainer)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function NotificationsContainer() {
  let tmp2 = null;
  if (importDefault(3984)().isChatBesideChannelList) {
    const obj = { style: tmp.container, children: callback(importDefault(10217), {}) };
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  let channelId;
  let isStageChannel;
  let require;
  let voiceChannelId;
  ({ guildId: require, channelId } = children);
  let dependencyMap;
  let React;
  let c4;
  let obj = require(566) /* initialize */;
  const items = [closure_7, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const voiceChannelId = outer1_7.getVoiceChannelId();
    const obj = { channel: outer1_6.getChannel(channelId), voiceChannelId };
    const channel = outer1_6.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (null != channel) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj.isStageChannel = Boolean(isGuildStageVoiceResult);
    return obj;
  });
  let channel = stateFromStoresObject.channel;
  ({ voiceChannelId, isStageChannel } = stateFromStoresObject);
  let tmp2 = !isStageChannel || channelId(10367)(voiceChannelId);
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  let isPrivateResult = null != channel;
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_0;
    if (isLurkingResult) {
      isLurkingResult = outer1_5.isLurking(closure_0);
    }
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp5 = channelId(8284)(isPrivateResult);
  React = tmp5;
  const tmp6 = channelId(8284)(channelId);
  c4 = tmp6;
  const items2 = [channelId, tmp6, isPrivateResult, tmp5];
  const effect = React.useEffect(() => {
    let tmp = c3;
    if (c3) {
      tmp = !_undefined;
    }
    if (!tmp) {
      let tmp3 = c3;
      if (c3) {
        tmp3 = _undefined;
      }
      if (tmp3) {
        tmp3 = channelId !== c4;
      }
      tmp = tmp3;
    }
    if (tmp) {
      let obj = outer1_0(_undefined[14]);
      obj = { dismissAction: outer1_9.AUTO };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(outer1_0(_undefined[15]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
    }
  }, items2);
  let obj2 = require(10368) /* styles */;
  const channelStyles = obj2.useChannelStyles();
  obj = { style: channelStyles.scene };
  obj = { style: channelStyles.flex };
  let type;
  if (null != channel) {
    type = channel.type;
  }
  let tmp13 = null;
  if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
    tmp13 = null;
    if (stateFromStores) {
      obj1 = { channel };
      tmp13 = callback(channelId(10369), obj1);
    }
  }
  const items3 = [tmp13, children.children, ];
  if (tmp2) {
    obj2 = { style: channelStyles.callPTTButton };
    tmp2 = callback(channelId(10384), obj2);
  }
  items3[2] = tmp2;
  obj.children = items3;
  const items4 = [closure_11(c4, obj), callback(NotificationsContainer, {})];
  obj.children = items4;
  return closure_11(c4, obj);
};
