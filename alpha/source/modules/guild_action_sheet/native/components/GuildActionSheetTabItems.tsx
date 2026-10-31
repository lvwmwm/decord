// Module ID: 15800
// Function ID: 15801
// Name: GuildActionSheetTabItems
// Dependencies: [19, 4863, 4944, 4917, 1072, 21, 15785, 8468, 504, 9121, 9118, 6767, 8028, 1113, 9920, 575, 5760, 5258, 6768, 10978, 8399, 7288, 7562, 9074, 2]
// Exports: default

// Module 15800 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6768 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7288 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9121 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let tmp3;
let unpackModuleId;
const instant_invite_InstantInviteUtils = tmp3(9118);
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  let BoostGemIcon;
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj7;
  guild = guild.guild;
  let stateFromStores;
  const tmp = guild;
  let obj = guild(15785);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  let tmp3 = stateFromStores;
  const total = stateFromStores(8468)(guild.id).total;
  let obj2 = guild(504);
  const items = [GuildChannelStore];
  stateFromStores = obj2.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj3 = guild(9121);
  let shouldRenderInviteResult = obj3.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  let closure_2 = react.useCallback(() => {
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
  const ButtonGroup = guild(6767).ButtonGroup;
  const IconButton = guild(8028).IconButton;
  const tmp6 = closure_13;
  if (total > 0) {
    const intl2 = tmp(1113).intl;
    let obj5 = { subscriptions: total };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1113).intl;
    formatToPlainStringResult = intl.string(tmp(1113).t.Uj0md3);
  }
  const obj6 = {
    variant: "secondary",
    label: formatToPlainStringResult,
    icon: closure_12(BoostGemIcon, obj7),
    grow: true,
    onPress() {
      let obj3;
      const obj2 = { location: obj3 };
      obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet();
      const obj5 = BoostingActionCreatorsAll;
      obj5.openApplyBoostModal(guild.id);
    }
  };
  obj7 = { color: tmp3(575).unsafe_rawColors.GUILD_BOOSTING_PINK };
  BoostGemIcon = tmp(9920).BoostGemIcon;
  items2 = [tmp7(IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = {
      variant: "secondary",
      label: intl3.string(tmp(1113).t.VINpSK),
      icon: tmp3(10978),
      grow: true,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_2();
        }
    };
    const IconButton2 = tmp(8028).IconButton;
    intl3 = tmp(1113).intl;
    shouldRenderInviteResult = tmp7(IconButton2, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = {
    variant: "secondary",
    label: intl4.string(tmp(1113).t.HcoRu0),
    icon: tmp3(8399),
    grow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const IconButton3 = tmp(8028).IconButton;
  intl4 = tmp(1113).intl;
  items2[2] = closure_12(IconButton3, obj9);
  if (canAccessSettings) {
    const obj10 = {
      variant: "secondary",
      label: intl5.string(tmp(1113).t["3D5yo/"]),
      icon: tmp3(7562),
      grow: true,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.open(guild.id);
        }
    };
    const IconButton4 = tmp(8028).IconButton;
    intl5 = tmp(1113).intl;
    canAccessSettings = tmp7(IconButton4, obj10);
  }
  items2[3] = canAccessSettings;
  return tmp6(ButtonGroup, obj4);
};
