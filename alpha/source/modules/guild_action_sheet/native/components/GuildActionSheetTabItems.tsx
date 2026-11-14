// Module ID: 16421
// Function ID: 16422
// Name: GuildActionSheetTabItems
// Dependencies: [19, 5155, 5236, 5209, 1072, 21, 16401, 9241, 504, 8464, 8460, 6951, 7988, 1113, 9981, 575, 6067, 16422, 16423, 5552, 6952, 10982, 9173, 7883, 10570, 8404, 16424, 2]
// Exports: default

// Module 16421 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6067 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6952 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7883 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8404 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 8464 */;
import GuildActionSheetAnalyticsUtils from "GuildActionSheetAnalyticsUtils" /* 16422 */;
import GuildActionSheetTypes from "GuildActionSheetTypes" /* 16423 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import Constants from "Constants" /* 1072 */;
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
const instant_invite_InstantInviteUtils = tmp3(8460);
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
  let obj = guild(16401);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  let tmp3 = canAccessSettings;
  const total = canAccessSettings(9241)(guild.id).total;
  let obj2 = guild(504);
  const items = [GuildChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj3 = guild(8464);
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
  const ButtonGroup = guild(6951).ButtonGroup;
  const IconButton = guild(7988).IconButton;
  const tmp6 = closure_13;
  if (total > 0) {
    const intl2 = tmp(1113).intl;
    let obj5 = { subscriptions: total };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1113).intl;
    formatToPlainStringResult = intl.string(tmp(1113).t.Uj0md3);
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
  BoostGemIcon = tmp(9981).BoostGemIcon;
  items2 = [tmp7(IconButton, obj6), , , , ];
  if (shouldRenderInviteResult) {
    const obj8 = {
      variant: "secondary",
      label: intl3.string(tmp(1113).t.VINpSK),
      icon: tmp3(10982),
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
    const IconButton2 = tmp(7988).IconButton;
    intl3 = tmp(1113).intl;
    shouldRenderInviteResult = tmp7(IconButton2, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = {
    variant: "secondary",
    label: intl4.string(tmp(1113).t.HcoRu0),
    icon: tmp3(9173),
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
  const IconButton3 = tmp(7988).IconButton;
  intl4 = tmp(1113).intl;
  items2[2] = closure_12(IconButton3, obj9);
  if (canAccessSettings) {
    const obj10 = {
      variant: "secondary",
      label: intl5.string(tmp(1113).t["3D5yo/"]),
      icon: tmp3(10570),
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
    const IconButton4 = tmp(7988).IconButton;
    intl5 = tmp(1113).intl;
    canAccessSettings = tmp7(IconButton4, obj10);
  }
  items2[3] = canAccessSettings;
  items2[4] = closure_12(tmp3(16424), { guild });
  return tmp6(ButtonGroup, obj4);
};
