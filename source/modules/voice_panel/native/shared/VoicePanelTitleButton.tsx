// Module ID: 15836
// Function ID: 122221
// Name: ChannelButtonIcons
// Dependencies: [31, 27, 4167, 1353, 1348, 4148, 33, 4130, 8970, 1212, 4544, 5173, 566, 4320, 8917, 8416, 689, 10046, 4319, 15837, 4541, 7473, 15760, 15834, 4601, 8321, 669, 15833, 15838, 2]

// Module 15836 (ChannelButtonIcons)
import importAllResult from "result";
import { View } from "isStableStreamParticipant";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function ChannelButtonIcons() {
  let obj = { style: callback3().channelButtons };
  obj = { size: "xs" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.VHXh8a);
  const items = [callback(require(8970) /* ShieldLockIcon */.ShieldLockIcon, obj), ];
  obj = { source: importDefault(5173) };
  items[1] = callback(require(4544) /* CollapsingText */.BaseTextButton.Icon, obj);
  obj.children = items;
  return callback2(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(channelId));
  const tmp2 = importDefault(4320)(stateFromStores);
  const isCallSecureFramesVerified = channelId(8917).useIsCallSecureFramesVerified({ channelId });
  obj = { accessibilityRole: "button" };
  const intl = channelId(1212).intl;
  obj.accessibilityHint = intl.string(channelId(1212).t["Y2b7+e"]);
  let str = "???";
  if (null != tmp2) {
    str = tmp2;
  }
  obj.text = str;
  if (isCallSecureFramesVerified) {
    let tmp7 = callback(ChannelButtonIcons, {});
  } else {
    tmp7 = importDefault(5173);
  }
  obj.icon = tmp7;
  obj.iconOpticalOffsetMargin = -importDefault(689).space.PX_4;
  obj.iconPosition = "end";
  obj.onPress = channelId.onPress;
  obj.maxFontSizeMultiplier = 2;
  return callback(channelId(8416).HeaderButton, obj);
}
function StreamButton(arg0) {
  let channelId;
  let guildId;
  let onPress;
  let participant;
  ({ participant, onPress } = arg0);
  const context = importAllResult.useContext(importDefault(10046));
  ({ guildId, channelId } = context);
  let obj = importDefault(4319);
  const name = obj.useName(guildId, channelId, participant.user);
  obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t["Y2b7+e"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.I0mOAs, { username: name });
  obj.text = name;
  obj.icon = importDefault(15837);
  obj.iconPosition = "start";
  obj.onPress = onPress;
  return callback(require(8416) /* TwinButtons */.HeaderButton, obj);
}
function ActivityButton(participant) {
  participant = participant.participant;
  let obj = participant(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getApplication(participant.applicationId));
  obj = { direction: "horizontal", spacing: importDefault(689).space.PX_8 };
  obj = { accessibilityRole: "button" };
  const intl = participant(1212).intl;
  obj.accessibilityHint = intl.string(participant(1212).t["Y2b7+e"]);
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  let str = "???";
  if (null != name) {
    str = name;
  }
  obj.text = str;
  obj.icon = importDefault(7473);
  obj.iconPosition = "start";
  obj.onPress = participant.onPress;
  obj.shrink = true;
  const items1 = [callback(participant(8416).HeaderButton, obj), callback(importDefault(15760), { applicationId: participant.applicationId })];
  obj.children = items1;
  return closure_10(participant(4541).Stack, obj);
}
function UserButton(participant) {
  participant = participant.participant;
  const context = importAllResult.useContext(importDefault(10046));
  const guildId = context.guildId;
  let obj = importDefault(4319);
  const name = obj.useName(guildId, context.channelId, participant.user);
  const tmp = callback3();
  const voicePanelHeaderUserStateIcons = require(15834) /* _createForOfIteratorHelperLoose */.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t["Y2b7+e"]);
  obj.icon = voicePanelHeaderUserStateIcons;
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  obj.iconPosition = str;
  obj.text = name;
  obj.onPress = participant.onPress;
  return closure_9(require(8416) /* TwinButtons */.HeaderButton, obj);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [closure_6];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getStageInstanceByChannel(channelId), items1);
  const items2 = [closure_7];
  const stateFromStores1 = channelId(566).useStateFromStores(items2, () => outer1_7.getChannel(channelId));
  let stringResult = importDefault(4320)(stateFromStores1);
  obj = { accessibilityRole: "button" };
  const intl = channelId(1212).intl;
  obj.accessibilityHint = intl.string(channelId(1212).t["Y2b7+e"]);
  let topic;
  if (null != stateFromStores) {
    topic = stateFromStores.topic;
  }
  if (null != topic) {
    stringResult = topic;
  }
  if (null == stringResult) {
    const intl2 = channelId(1212).intl;
    stringResult = intl2.string(channelId(1212).t.zLZPmk);
  }
  obj.text = stringResult;
  obj.icon = importDefault(4601);
  obj.iconPosition = "start";
  obj.onPress = channelId.onPress;
  return closure_9(channelId(8416).HeaderButton, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
const memoResult = importAllResult.memo(function VoicePanelTitleButton() {
  let channelType;
  let focused;
  const context = importAllResult.useContext(channelId(10046));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(8321);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(15833)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = importAllResult.useCallback(() => {
    const result = guildId(outer1_2[28]).openVoicePanelSettingsActionSheet(guildId, channelId);
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
  return callback(channelType === guildId(669).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, { channelId, onPress });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default memoResult;
