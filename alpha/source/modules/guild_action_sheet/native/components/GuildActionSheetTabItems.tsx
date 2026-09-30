// Module ID: 13714
// Function ID: 13715
// Name: GuildActionSheetTabItems
// Dependencies: [19, 2045, 4497, 2099, 1074, 21, 13702, 4773, 504, 9479, 9476, 5942, 7558, 1115, 8877, 576, 5046, 4830, 5943, 9692, 7586, 6736, 6995, 9247, 2]
// Exports: default

// Module 13714 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5046 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5943 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6736 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9476 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9479 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4497 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let stateFromStores;
  let canAccessSettings = guild(13702).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4773)(guild.id).total;
  let obj = guild(13702);
  const items = [GuildChannelStore];
  stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  let shouldRenderInviteResult = guild(9479).shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  closure_2 = noop.useCallback(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    let channel = ChannelStore.getChannel(utils_InstantInviteUtils.getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = GuildChannelStore.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = instant_invite_InstantInviteUtils;
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, constants4.SERVER_PROFILE);
    }
  }, items1);
  let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1115).intl;
    const obj5 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1115).intl;
    formatToPlainStringResult = intl.string(tmp(1115).t.Uj0md3);
  }
  const obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  let obj3 = guild(9479);
  const tmp6 = closure_13;
  obj6.icon = closure_12(guild(8877).BoostGemIcon, { color: stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_PINK });
  obj6.onPress = function onPress() {
    const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
    const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    actions_BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(7558).IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1115).intl;
    obj8.label = intl3.string(tmp(1115).t.VINpSK);
    obj8.icon = tmp3(9692);
    obj8.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_2();
    };
    shouldRenderInviteResult = tmp7(tmp(7558).IconButton, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1115).intl;
  obj9.label = intl4.string(guild(1115).t.HcoRu0);
  obj9.icon = stateFromStores(7586);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(7558).IconButton, obj9);
  if (canAccessSettings) {
    const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1115).intl;
    obj10.label = intl5.string(tmp(1115).t["3D5yo/"]);
    obj10.icon = tmp3(6995);
    obj10.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = tmp7(tmp(7558).IconButton, obj10);
  }
  items2[3] = canAccessSettings;
  obj4.children = items2;
  return tmp6(guild(5942).ButtonGroup, obj4);
};
