// Module ID: 9600
// Function ID: 9601
// Name: MuteSettingsActionSheet
// Dependencies: [19, 2045, 2067, 4479, 1372, 1074, 21, 4832, 1115, 9601, 4800, 5999, 5917, 1177, 9603, 4989, 9604, 6618, 6570, 2]
// Exports: MuteSettingsHint, default

// Module 9600 (MuteSettingsActionSheet)
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9601 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore_mod from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let unpackModuleId;
let GuildStore = GuildStore_mod;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default function MuteSettings(guildId) {
  let Icon;
  let MuteSettingType;
  let TableRow;
  let closure_5;
  let format;
  let isPrivateResult;
  let items6;
  let muteConfig;
  let muted;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let prop;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const onOptionPress = guildId.onOptionPress;
  let channel;
  GuildStore = undefined;
  const guild = GuildStore.getGuild(guildId);
  channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = guild.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettings(channelId);
  }, items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  GuildStore = guild.useCallback((muteDurationSeconds) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = MuteSettingsUtils;
    const obj3 = { channelId, guildId, muteDurationSeconds, onOptionPress };
    const result = obj2.handleMuteSettingPress(obj3);
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = guild.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = MuteSettingsUtils;
    obj2.handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = guild.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettingLabel(channel, guild);
  }, items3);
  if (null != channel) {
    let tmp10Result;
    let tmp8;
    let tmp6;
    let tmp9;
    if (muted) {
      let obj = { hasIcons: true, children: closure_9(TableRow, obj3) };
      const TableRowGroup2 = guildId(onOptionPress[11]).TableRowGroup;
      obj3 = { icon: closure_9(Icon, obj4), label: format(prop, obj5), onPress: callback };
      TableRow = guildId(onOptionPress[12]).TableRow;
      obj4 = { disableColor: true, source: channelId(onOptionPress[14]) };
      Icon = guildId(onOptionPress[13]).Icon;
      const intl = guildId(onOptionPress[8]).intl;
      format = intl.format;
      obj5 = { name: obj8.computeChannelName(channel, UserStore, RelationshipStore, true) };
      prop = guildId(onOptionPress[8]).t["eC+9rj"];
      obj8 = guildId(onOptionPress[15]);
      const items5 = [closure_9(TableRowGroup2, obj), ];
      const obj6 = { muteConfig, type: isPrivateResult ? MuteSettingType.DM : MuteSettingType.CHANNEL };
      const tmp21 = channelId(onOptionPress[16]);
      isPrivateResult = channel.isPrivate();
      MuteSettingType = guildId(onOptionPress[16]).MuteSettingType;
      const obj7 = { children: items5 };
      items5[1] = closure_9(tmp21, obj6);
      tmp10Result = closure_11(closure_10, obj7);
      tmp8 = tmp12;
      tmp6 = onOptionPress;
      tmp9 = guildId;
    }
    const obj9 = { children: items6 };
    const ActionSheet = tmp9(tmp6[17]).ActionSheet;
    const obj10 = { title: memo1, subtitle: tmp5 };
    items6 = [tmp8(tmp9(tmp6[18]).BottomSheetTitleHeader, obj10), tmp10Result];
    return closure_11(ActionSheet, obj9);
  }
  tmp6 = onOptionPress;
  let obj2 = guildId(onOptionPress[9]);
  const muteOptions = obj2.getMuteOptions();
  const obj11 = {
    hasIcons: false,
    children: muteOptions.map((item) => {
      let label;
      ({ label, duration: guildId } = item);
      const obj = {
        label,
        onPress() {
          return closure_5(guildId);
        }
      };
      return closure_1_9(guildId(onOptionPress[12]).TableRow, obj, label);
    })
  };
  const TableRowGroup = guildId(onOptionPress[11]).TableRowGroup;
  tmp10Result = closure_9(TableRowGroup, obj11);
  tmp8 = closure_9;
  tmp9 = guildId;
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  let intl3;
  let intl4;
  let intl5;
  let obj4;
  let obj6;
  let tmp4Result;
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.t0mEt2) };
    const Text4 = Text_Text.Text;
    intl5 = intl6.intl;
    tmp4Result = React4(Text4, obj2);
  } else if (tmp) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl4.format(intl6.t.O34r15, obj4) };
    const Text3 = Text_Text.Text;
    intl4 = intl6.intl;
    obj4 = {
      mutedHook(children, arg1) {
          const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
          return closure_1_9(Text_Text.Text, obj, arg1);
        }
    };
    tmp4Result = React4(Text3, obj3);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", children: intl3.format(intl6.t.nRwUIL, obj6) };
    const Text2 = Text_Text.Text;
    intl3 = intl6.intl;
    obj6 = {
      notificationHook(children, arg1) {
          const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
          return closure_1_9(Text_Text.Text, obj, arg1);
        }
    };
    tmp4Result = React4(Text2, obj5);
  } else if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
    let stringResult;
    const Text = Text_Text.Text;
    const tmp4 = React4;
    if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
      const intl2 = tmp5(1115).intl;
      stringResult = intl2.string(tmp5(1115).t.mUbulW);
    } else {
      const intl = tmp5(1115).intl;
      stringResult = intl.string(tmp5(1115).t.GGAdHV);
    }
    let obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    tmp4Result = tmp4(Text, obj);
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
};
