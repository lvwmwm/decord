// Module ID: 15197
// Function ID: 15198
// Name: GuildActionSheetTabItems
// Dependencies: [19, 4762, 4843, 4816, 1071, 21, 15177, 8749, 504, 8055, 8051, 6545, 7591, 1112, 9370, 575, 5650, 15198, 15199, 5127, 6546, 11055, 8683, 7485, 10372, 7994, 15200, 2]
// Exports: default

// Module 15197 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6546 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7485 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7994 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 8055 */;
import GuildActionSheetAnalyticsUtils from "GuildActionSheetAnalyticsUtils" /* 15198 */;
import GuildActionSheetTypes from "GuildActionSheetTypes" /* 15199 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let tmp3;
let unpackModuleId;
const instant_invite_InstantInviteUtils = tmp3(8051);
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  let BoostGemIcon;
  let closure_3;
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj7;
  guild = guild.guild;
  const tmp = guild;
  let obj = guild(15177);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  let tmp3 = canAccessSettings;
  const total = canAccessSettings(8749)(guild.id).total;
  let obj2 = guild(504);
  const items = [GuildChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj3 = guild(8055);
  let shouldRenderInviteResult = obj3.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  dependencyMap = react.useCallback(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const obj = utils_InstantInviteUtils;
    let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = GuildChannelStore.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = instant_invite_InstantInviteUtils;
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
    }
  }, items1);
  let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: items2 };
  const ButtonGroup = guild(6545).ButtonGroup;
  const IconButton = guild(7591).IconButton;
  const tmp6 = closure_13;
  if (total > 0) {
    const intl2 = tmp(1112).intl;
    let obj5 = { subscriptions: total };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1112).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1112).intl;
    formatToPlainStringResult = intl.string(tmp(1112).t.Uj0md3);
  }
  let obj6 = {
    variant: "secondary",
    label: formatToPlainStringResult,
    icon: tmp7(BoostGemIcon, obj7),
    grow: true,
    onPress() {
      let obj3;
      const obj2 = { location: obj3 };
      obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
      const obj4 = GuildActionSheetAnalyticsUtils;
      const obj5 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.BOOST, canAccessSettings };
      const result = obj4.trackGuildActionSheetOptionPressed(obj5);
      const obj6 = ActionSheetActionCreatorsDefault;
      obj6.hideActionSheet();
      const obj7 = BoostingActionCreatorsAll;
      obj7.openApplyBoostModal(guild.id);
    }
  };
  obj7 = { color: tmp3(575).unsafe_rawColors.GUILD_BOOSTING_PINK };
  BoostGemIcon = tmp(9370).BoostGemIcon;
  items2 = [tmp7(IconButton, obj6), , , , ];
  if (shouldRenderInviteResult) {
    const obj8 = {
      variant: "secondary",
      label: intl3.string(tmp(1112).t.VINpSK),
      icon: tmp3(11055),
      grow: true,
      onPress() {
          const obj = GuildActionSheetAnalyticsUtils;
          const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.INVITE, canAccessSettings };
          const result = obj.trackGuildActionSheetOptionPressed(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          closure_3();
        }
    };
    const IconButton2 = tmp(7591).IconButton;
    intl3 = tmp(1112).intl;
    shouldRenderInviteResult = tmp7(IconButton2, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = {
    variant: "secondary",
    label: intl4.string(tmp(1112).t.HcoRu0),
    icon: tmp3(8683),
    grow: true,
    onPress() {
      const obj = GuildActionSheetAnalyticsUtils;
      const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.NOTIFICATIONS, canAccessSettings };
      const result = obj.trackGuildActionSheetOptionPressed(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
      const obj4 = NotificationSettingsModalActionCreatorsDefault;
      obj4.open(guild.id);
    }
  };
  const IconButton3 = tmp(7591).IconButton;
  intl4 = tmp(1112).intl;
  items2[2] = closure_12(IconButton3, obj9);
  if (canAccessSettings) {
    const obj10 = {
      variant: "secondary",
      label: intl5.string(tmp(1112).t["3D5yo/"]),
      icon: tmp3(10372),
      grow: true,
      onPress() {
          const obj = GuildActionSheetAnalyticsUtils;
          const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.SETTINGS, canAccessSettings };
          const result = obj.trackGuildActionSheetOptionPressed(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = GuildSettingsActionCreatorsDefault;
          obj4.open(guild.id);
        }
    };
    const IconButton4 = tmp(7591).IconButton;
    intl5 = tmp(1112).intl;
    canAccessSettings = tmp7(IconButton4, obj10);
  }
  items2[3] = canAccessSettings;
  items2[4] = closure_12(tmp3(15200), { guild });
  return tmp6(ButtonGroup, obj4);
};
