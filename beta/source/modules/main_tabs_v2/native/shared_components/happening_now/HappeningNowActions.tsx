// Module ID: 15723
// Function ID: 15724
// Name: HappeningNowActions
// Dependencies: [19, 17, 4467, 2067, 2099, 14841, 1074, 21, 4836, 576, 1241, 9015, 15724, 1115, 9048, 15725, 9275, 15726, 11791, 12289, 14842, 4832, 2]
// Exports: HappeningNowCardCreateChannel, HappeningNowCardCustomizeGuild, HappeningNowCardInvite, HappeningNowStudentHubAddServer

// Module 15723 (HappeningNowActions)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9015 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import AssetRegistryDefault from "AssetRegistry" /* 12289 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 14842 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15724 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15725 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15726 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let HAPPENING_NOW_CARD_HEIGHT;
let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let size;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionCard: obj2, actionCardImage: size };
obj2 = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
let closure_14 = createStyles(obj);
let closure_15 = react.memo((panelVariant) => {
  let imageSource;
  let items;
  let onPress;
  let text;
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: items };
  const obj2 = { style: tmp.actionCardImage, children: closure_12(hasOwnProperty, { source: imageSource }) };
  const tmp2 = HappeningNowCardDefault;
  items = [closure_12(React3, obj2), closure_12(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  return map1(tmp2, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault2, onPress: callback, text: intl.string(guildId(1115).t["fUYU+j"]), panelVariant: flag };
  callback = react.useCallback(() => {
    const GUILD_ACTION_CREATE_CHANNEL_CARD = constants.GUILD_ACTION_CREATE_CHANNEL_CARD;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = CreateChannelModalActionCreatorsDefault;
    obj3.open(null, guildId, null, null);
  }, items);
  intl = guildId(1115).intl;
  return closure_12(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  let callback;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: AssetRegistryDefault3, onPress: callback, panelVariant: flag };
  callback = react.useCallback(() => {
    const GUILD_ACTION_CUSTOMIZE_CARD = constants.GUILD_ACTION_CUSTOMIZE_CARD;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = GuildSettingsActionCreatorsDefault;
    obj3.open(guildId);
  }, items);
  return closure_12(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault4, onPress: callback, text: intl.string(guildId(1115).t.VINpSK), panelVariant: flag };
  callback = react.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    const tmp = guildId;
    if (null != guild) {
      const GUILD_ACTION_INVITE_CARD = constants.GUILD_ACTION_INVITE_CARD;
      const obj2 = { type: GUILD_ACTION_INVITE_CARD, order: 0, guild_id: tmp };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.SERVER_PROFILE);
    }
  }, items);
  intl = guildId(1115).intl;
  return closure_12(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault, onPress: callback, text: intl.string(guildId(1115).t.emRpdS), panelVariant: flag };
  callback = react.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    const tmp = guildId;
    const tmp4 = null != guild && null != defaultChannel;
    if (tmp4) {
      const GUILD_ACTION_STUDENT_HUB_ADD_SERVER = constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
      const obj2 = { type: GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: tmp };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: defaultChannel.id };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      const obj3 = GuildDirectoryAddModalActionCreatorsDefault;
      obj3.open(obj6);
    }
  }, items);
  intl = guildId(1115).intl;
  return closure_12(closure_15, obj);
};
