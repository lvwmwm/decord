// Module ID: 14827
// Function ID: 111743
// Name: trackClick
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: HappeningNowCardCreateChannel, HappeningNowCardCustomizeGuild, HappeningNowCardInvite, HappeningNowStudentHubAddServer

// Module 14827 (trackClick)
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function trackClick(type, guild_id) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type, order: 0, guild_id };
  obj.track(constants.ACTIVITY_CARD_CLICKED, obj);
}
({ View: closure_4, Image: closure_5 } = __exportStarResult1);
let closure_9 = __exportStarResult1.HappeningNowCardTrackingType;
({ AnalyticEvents: closure_10, InstantInviteSources: closure_11 } = __exportStarResult1);
({ jsx: closure_12, jsxs: closure_13 } = __exportStarResult1);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.lg, height: __exportStarResult1.HAPPENING_NOW_CARD_HEIGHT, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.actionCard = obj;
__exportStarResult1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.actionCardImage = __exportStarResult1;
let closure_14 = __exportStarResult1.createStyles(obj);
let closure_15 = importAllResult.memo((panelVariant) => {
  let imageSource;
  let onPress;
  let text;
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag };
  obj = { style: tmp.actionCardImage, children: callback(closure_5, { source: imageSource }) };
  const items = [callback(closure_4, obj), callback(arg1(dependencyMap[21]).Text, { children: text })];
  obj.children = items;
  return callback2(importDefault(dependencyMap[20]), obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = {};
  const callback = importAllResult.useCallback(() => {
    callback2(constants.GUILD_ACTION_CREATE_CHANNEL_CARD, guildId);
    callback(closure_2[11]).open(null, guildId, null, null);
  }, items);
  obj.imageSource = importDefault(dependencyMap[12]);
  obj.onPress = callback;
  const intl = arg1(dependencyMap[13]).intl;
  obj.text = intl.string(arg1(dependencyMap[13]).t.fUYU+j);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = { text: "Customize" };
  const callback = importAllResult.useCallback(() => {
    callback2(constants.GUILD_ACTION_CUSTOMIZE_CARD, guildId);
    callback(closure_2[14]).open(guildId);
  }, items);
  obj.imageSource = importDefault(dependencyMap[15]);
  obj.onPress = callback;
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = {};
  const callback = importAllResult.useCallback(() => {
    const guild = guild.getGuild(guildId);
    const channels = channels.getChannels(guildId);
    const channelId = channelId.getChannelId(guildId);
    if (null != guild) {
      callback(constants.GUILD_ACTION_INVITE_CARD, guildId);
      const obj = guildId(closure_2[16]);
      const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, constants2.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = importDefault(dependencyMap[17]);
  obj.onPress = callback;
  const intl = arg1(dependencyMap[13]).intl;
  obj.text = intl.string(arg1(dependencyMap[13]).t.VINpSK);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = {};
  const callback = importAllResult.useCallback(() => {
    const guild = guild.getGuild(guildId);
    const defaultChannel = defaultChannel.getDefaultChannel(guildId);
    if (tmp3) {
      callback2(constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, guildId);
      let obj = callback(closure_2[18]);
      obj = {};
      ({ id: obj2.directoryGuildId, name: obj2.directoryGuildName } = guild);
      obj.directoryChannelId = defaultChannel.id;
      obj.open(obj);
    }
  }, items);
  obj.imageSource = importDefault(dependencyMap[19]);
  obj.onPress = callback;
  const intl = arg1(dependencyMap[13]).intl;
  obj.text = intl.string(arg1(dependencyMap[13]).t.emRpdS);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
