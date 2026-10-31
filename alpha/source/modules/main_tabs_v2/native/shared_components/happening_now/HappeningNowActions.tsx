// Module ID: 18137
// Function ID: 18138
// Name: HappeningNowActions
// Dependencies: [19, 17, 4944, 4885, 4917, 17274, 1072, 21, 5014, 575, 1252, 9034, 18138, 1113, 9074, 18139, 9118, 18140, 13841, 14371, 17275, 5717, 5624, 2]
// Exports: HappeningNowCardCreateChannel, HappeningNowCardCustomizeGuild, HappeningNowCardInvite, HappeningNowStudentHubAddServer

// Module 18137 (HappeningNowActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9034 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13841 */;
import AssetRegistryDefault from "AssetRegistry" /* 14371 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 17275 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18138 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 18139 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 18140 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17274 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let HAPPENING_NOW_CARD_HEIGHT;
let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let size;
let unpackModuleId;
const View = react_native.View;
({ HappeningNowCardTrackingType: metroImportAll, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
({ AnalyticEvents: c9, InstantInviteSources: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionCard: obj2, actionCardImage: size };
obj2 = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
let closure_14 = react.memo(function ActionCard(panelVariant) {
  let imageSource;
  let items;
  let onPress;
  let text;
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_13();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: items };
  const obj2 = { style: tmp.actionCardImage, children: unpackModuleId(FastImageDefault, { source: imageSource }) };
  const tmp2 = HappeningNowCardDefault;
  items = [unpackModuleId(View, obj2), unpackModuleId(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  return authStore2(tmp2, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export function HappeningNowCardCreateChannel(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault2, onPress: callback, text: intl.string(guildId(1113).t["fUYU+j"]), panelVariant: flag };
  callback = react.useCallback(() => {
    const GUILD_ACTION_CREATE_CHANNEL_CARD = metroImportAll.GUILD_ACTION_CREATE_CHANNEL_CARD;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(constants.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = CreateChannelModalActionCreatorsDefault;
    obj3.open(null, guildId, null, null);
  }, items);
  intl = guildId(1113).intl;
  return closure_11(closure_14, obj);
}
export function HappeningNowCardCustomizeGuild(guildId) {
  let callback;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: AssetRegistryDefault3, onPress: callback, panelVariant: flag };
  callback = react.useCallback(() => {
    const GUILD_ACTION_CUSTOMIZE_CARD = metroImportAll.GUILD_ACTION_CUSTOMIZE_CARD;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(constants.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = GuildSettingsActionCreatorsDefault;
    obj3.open(guildId);
  }, items);
  return closure_11(closure_14, obj);
}
export function HappeningNowCardInvite(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault4, onPress: callback, text: intl.string(guildId(1113).t.VINpSK), panelVariant: flag };
  callback = react.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    const tmp = guildId;
    if (null != guild) {
      const GUILD_ACTION_INVITE_CARD = metroImportAll.GUILD_ACTION_INVITE_CARD;
      const obj2 = { type: GUILD_ACTION_INVITE_CARD, order: 0, guild_id: tmp };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants2.SERVER_PROFILE);
    }
  }, items);
  intl = guildId(1113).intl;
  return closure_11(closure_14, obj);
}
export function HappeningNowStudentHubAddServer(guildId) {
  let callback;
  let intl;
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: AssetRegistryDefault, onPress: callback, text: intl.string(guildId(1113).t.emRpdS), panelVariant: flag };
  callback = react.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    const tmp = guildId;
    const tmp4 = null != guild && null != defaultChannel;
    if (tmp4) {
      const GUILD_ACTION_STUDENT_HUB_ADD_SERVER = metroImportAll.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
      const obj2 = { type: GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: tmp };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: defaultChannel.id };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      const obj3 = GuildDirectoryAddModalActionCreatorsDefault;
      obj3.open(obj6);
    }
  }, items);
  intl = guildId(1113).intl;
  return closure_11(closure_14, obj);
}
