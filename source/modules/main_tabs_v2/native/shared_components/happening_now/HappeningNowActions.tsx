// Module ID: 14954
// Function ID: 113988
// Name: trackClick
// Dependencies: [31, 27, 1907, 1838, 1906, 14183, 653, 33, 4130, 689, 675, 8412, 14955, 1212, 8438, 14956, 8481, 14957, 10038, 11804, 14184, 4126, 2]
// Exports: HappeningNowCardCreateChannel, HappeningNowCardCustomizeGuild, HappeningNowCardInvite, HappeningNowStudentHubAddServer

// Module 14954 (trackClick)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
const require = arg1;
function trackClick(type, guild_id) {
  let obj = importDefault(675);
  obj = { type, order: 0, guild_id };
  obj.track(constants.ACTIVITY_CARD_CLICKED, obj);
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
let closure_9 = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HappeningNowCardTrackingType;
({ AnalyticEvents: closure_10, InstantInviteSources: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CARD_HEIGHT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.actionCard = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.actionCardImage = _createForOfIteratorHelperLoose;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
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
  const items = [callback(closure_4, obj), ];
  obj = { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(importDefault(14184), obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = {};
  const callback = importAllResult.useCallback(() => {
    outer1_16(outer1_9.GUILD_ACTION_CREATE_CHANNEL_CARD, guildId);
    outer1_1(outer1_2[11]).open(null, guildId, null, null);
  }, items);
  obj.imageSource = importDefault(14955);
  obj.onPress = callback;
  const intl = guildId(1212).intl;
  obj.text = intl.string(guildId(1212).t["fUYU+j"]);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  const obj = { text: "Customize" };
  const callback = importAllResult.useCallback(() => {
    outer1_16(outer1_9.GUILD_ACTION_CUSTOMIZE_CARD, guildId);
    outer1_1(outer1_2[14]).open(guildId);
  }, items);
  obj.imageSource = importDefault(14956);
  obj.onPress = callback;
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = {};
  const callback = importAllResult.useCallback(() => {
    const guild = outer1_7.getGuild(guildId);
    const channels = outer1_6.getChannels(guildId);
    const channelId = outer1_8.getChannelId(guildId);
    if (null != guild) {
      outer1_16(outer1_9.GUILD_ACTION_INVITE_CARD, guildId);
      const obj = guildId(outer1_2[16]);
      const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, outer1_11.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = importDefault(14957);
  obj.onPress = callback;
  const intl = guildId(1212).intl;
  obj.text = intl.string(guildId(1212).t.VINpSK);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = {};
  const callback = importAllResult.useCallback(() => {
    const guild = outer1_7.getGuild(guildId);
    const defaultChannel = outer1_6.getDefaultChannel(guildId);
    if (tmp3) {
      outer1_16(outer1_9.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, guildId);
      let obj = outer1_1(outer1_2[18]);
      obj = {};
      ({ id: obj2.directoryGuildId, name: obj2.directoryGuildName } = guild);
      obj.directoryChannelId = defaultChannel.id;
      obj.open(obj);
    }
  }, items);
  obj.imageSource = importDefault(11804);
  obj.onPress = callback;
  const intl = guildId(1212).intl;
  obj.text = intl.string(guildId(1212).t.emRpdS);
  obj.panelVariant = flag;
  return callback(closure_15, obj);
};
