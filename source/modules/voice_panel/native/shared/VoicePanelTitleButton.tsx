// Module ID: 15661
// Function ID: 119644
// Name: ChannelButtonIcons
// Dependencies: []

// Module 15661 (ChannelButtonIcons)
function ChannelButtonIcons() {
  let obj = { style: callback3().channelButtons };
  obj = { size: "xs" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.VHXh8a);
  const items = [callback(arg1(dependencyMap[8]).ShieldLockIcon, obj), ];
  obj = { source: importDefault(dependencyMap[11]) };
  items[1] = callback(arg1(dependencyMap[10]).BaseTextButton.Icon, obj);
  obj.children = items;
  return callback2(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp2 = importDefault(dependencyMap[13])(stateFromStores);
  const isCallSecureFramesVerified = arg1(dependencyMap[14]).useIsCallSecureFramesVerified({ channelId });
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.Y2b7+e);
  let str = "???";
  if (null != tmp2) {
    str = tmp2;
  }
  obj.text = str;
  if (isCallSecureFramesVerified) {
    let tmp7 = callback(ChannelButtonIcons, {});
  } else {
    tmp7 = importDefault(dependencyMap[11]);
  }
  obj.icon = tmp7;
  obj.iconOpticalOffsetMargin = -importDefault(dependencyMap[16]).space.PX_4;
  obj.iconPosition = "end";
  obj.onPress = channelId.onPress;
  obj.maxFontSizeMultiplier = 2;
  return callback(arg1(dependencyMap[15]).HeaderButton, obj);
}
function StreamButton(arg0) {
  let channelId;
  let guildId;
  let onPress;
  let participant;
  ({ participant, onPress } = arg0);
  const context = importAllResult.useContext(importDefault(dependencyMap[17]));
  ({ guildId, channelId } = context);
  let obj = importDefault(dependencyMap[18]);
  const name = obj.useName(guildId, channelId, participant.user);
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.Y2b7+e);
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[9]).t.I0mOAs, { username: name });
  obj.text = name;
  obj.icon = importDefault(dependencyMap[19]);
  obj.iconPosition = "start";
  obj.onPress = onPress;
  return callback(arg1(dependencyMap[15]).HeaderButton, obj);
}
function ActivityButton(participant) {
  participant = participant.participant;
  const arg1 = participant;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => application.getApplication(participant.applicationId));
  obj = { direction: "horizontal", spacing: importDefault(dependencyMap[16]).space.PX_8 };
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.Y2b7+e);
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  let str = "???";
  if (null != name) {
    str = name;
  }
  obj.text = str;
  obj.icon = importDefault(dependencyMap[21]);
  obj.iconPosition = "start";
  obj.onPress = participant.onPress;
  obj.shrink = true;
  const items1 = [callback(arg1(dependencyMap[15]).HeaderButton, obj), callback(importDefault(dependencyMap[22]), { applicationId: participant.applicationId })];
  obj.children = items1;
  return closure_10(arg1(dependencyMap[20]).Stack, obj);
}
function UserButton(participant) {
  participant = participant.participant;
  const context = importAllResult.useContext(importDefault(dependencyMap[17]));
  const guildId = context.guildId;
  let obj = importDefault(dependencyMap[18]);
  const name = obj.useName(guildId, context.channelId, participant.user);
  const tmp = callback3();
  const voicePanelHeaderUserStateIcons = arg1(dependencyMap[23]).useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.Y2b7+e);
  obj.icon = voicePanelHeaderUserStateIcons;
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  obj.iconPosition = str;
  obj.text = name;
  obj.onPress = participant.onPress;
  return closure_9(arg1(dependencyMap[15]).HeaderButton, obj);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(channelId), items1);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[12]).useStateFromStores(items2, () => channel.getChannel(channelId));
  let stringResult = importDefault(dependencyMap[13])(stateFromStores1);
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.Y2b7+e);
  let topic;
  if (null != stateFromStores) {
    topic = stateFromStores.topic;
  }
  if (null != topic) {
    stringResult = topic;
  }
  if (null == stringResult) {
    const intl2 = arg1(dependencyMap[9]).intl;
    stringResult = intl2.string(arg1(dependencyMap[9]).t.zLZPmk);
  }
  obj.text = stringResult;
  obj.icon = importDefault(dependencyMap[24]);
  obj.iconPosition = "start";
  obj.onPress = channelId.onPress;
  return closure_9(arg1(dependencyMap[15]).HeaderButton, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ParticipantTypes = arg1(dependencyMap[5]).ParticipantTypes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ userIcons: { marginLeft: -6 }, channelButtons: {} });
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function VoicePanelTitleButton() {
  let channelType;
  let focused;
  const context = importAllResult.useContext(importDefault(dependencyMap[17]));
  const guildId = context.guildId;
  const arg1 = guildId;
  const channelId = context.channelId;
  const importDefault = channelId;
  ({ channelType, focused } = context);
  let obj = arg1(dependencyMap[25]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = importDefault(dependencyMap[27])(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = importAllResult.useCallback(() => {
    const result = guildId(closure_2[28]).openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      obj = { participant: tmp3, onPress };
      return callback(StreamButton, obj);
    } else if (tmp3.type === ParticipantTypes.ACTIVITY) {
      obj = { participant: tmp3, onPress };
      return callback(ActivityButton, obj);
    } else if (tmp3.type === ParticipantTypes.USER) {
      const obj1 = { participant: tmp3, onPress };
      return callback(UserButton, obj1);
    }
  }
  return callback(channelType === arg1(dependencyMap[26]).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, { channelId, onPress });
});
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default memoResult;
