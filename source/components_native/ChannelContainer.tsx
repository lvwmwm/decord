// Module ID: 10203
// Function ID: 78740
// Name: NotificationsContainer
// Dependencies: []
// Exports: ChannelContainer

// Module 10203 (NotificationsContainer)
function NotificationsContainer() {
  let tmp2 = null;
  if (importDefault(dependencyMap[9])().isChatBesideChannelList) {
    const obj = { style: tmp.container, children: callback(importDefault(dependencyMap[10]), {}) };
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ChannelTypes = arg1(dependencyMap[5]).ChannelTypes;
const ContentDismissActionType = arg1(dependencyMap[6]).ContentDismissActionType;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles({ container: { "Null": 4, "Null": "absolute", "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": 0 } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  let channelId;
  let isStageChannel;
  let voiceChannelId;
  ({ guildId: closure_0, channelId } = children);
  const importDefault = channelId;
  let dependencyMap;
  let React;
  let View;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    const obj = { channel: store.getChannel(channelId), voiceChannelId };
    const channel = store.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (null != channel) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj.isStageChannel = Boolean(isGuildStageVoiceResult);
    return obj;
  });
  const channel = stateFromStoresObject.channel;
  ({ voiceChannelId, isStageChannel } = stateFromStoresObject);
  let tmp2 = !isStageChannel || importDefault(dependencyMap[12])(voiceChannelId);
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  let isPrivateResult = null != channel;
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_0;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(closure_0);
    }
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp5 = importDefault(dependencyMap[13])(isPrivateResult);
  React = tmp5;
  const tmp6 = importDefault(dependencyMap[13])(channelId);
  View = tmp6;
  const items2 = [channelId, tmp6, isPrivateResult, tmp5];
  const effect = React.useEffect(() => {
    let tmp = tmp5;
    if (tmp5) {
      tmp = !isPrivateResult;
    }
    if (!tmp) {
      let tmp3 = tmp5;
      if (tmp5) {
        tmp3 = isPrivateResult;
      }
      if (tmp3) {
        tmp3 = channelId !== tmp6;
      }
      tmp = tmp3;
    }
    if (tmp) {
      let obj = callback(isPrivateResult[14]);
      obj = { dismissAction: constants.AUTO };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(callback(isPrivateResult[15]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
    }
  }, items2);
  let obj2 = arg1(dependencyMap[16]);
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
      tmp13 = callback(importDefault(dependencyMap[17]), obj1);
    }
  }
  const items3 = [tmp13, children.children, ];
  if (tmp2) {
    obj2 = { style: channelStyles.callPTTButton };
    tmp2 = callback(importDefault(dependencyMap[18]), obj2);
  }
  items3[2] = tmp2;
  obj.children = items3;
  const items4 = [closure_11(View, obj), callback(NotificationsContainer, {})];
  obj.children = items4;
  return closure_11(View, obj);
};
