// Module ID: 10261
// Function ID: 79307
// Name: MuteSettings
// Dependencies: []
// Exports: MuteSettingsHint, default

// Module 10261 (MuteSettings)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const UserNotificationSettings = arg1(dependencyMap[5]).UserNotificationSettings;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default function MuteSettings(guildId) {
  let muteConfig;
  let muted;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const channelId = guildId.channelId;
  const importDefault = channelId;
  const onOptionPress = guildId.onOptionPress;
  const dependencyMap = onOptionPress;
  let guild = guild.getGuild(guildId);
  const React = guild;
  const channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = React.useMemo(() => guildId(onOptionPress[9]).getMuteSettings(channelId), items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  guild = React.useCallback((muteDurationSeconds) => {
    let obj = channelId(onOptionPress[10]);
    obj.hideActionSheet();
    obj = { channelId, guildId, muteDurationSeconds, onOptionPress };
    const result = guildId(onOptionPress[9]).handleMuteSettingPress(obj);
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = React.useCallback(() => {
    channelId(onOptionPress[10]).hideActionSheet();
    const obj = channelId(onOptionPress[10]);
    guildId(onOptionPress[9]).handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = React.useMemo(() => guildId(onOptionPress[9]).getMuteSettingLabel(channel, guild), items3);
  const memo2 = React.useMemo(() => guildId(onOptionPress[9]).getMuteSettingSublabel(channel, guild), items4);
  if (null != channel) {
    if (muted) {
      let obj = {};
      obj = { hasIcons: true };
      let obj1 = {};
      const obj2 = { disableColor: true, source: importDefault(dependencyMap[14]) };
      obj1.icon = callback(arg1(dependencyMap[13]).Icon, obj2);
      const intl = arg1(dependencyMap[8]).intl;
      const obj3 = {};
      const obj9 = arg1(dependencyMap[15]);
      obj3.name = obj9.computeChannelName(channel, closure_7, closure_6, true);
      obj1.label = intl.format(arg1(dependencyMap[8]).t.eC+9rj, obj3);
      obj1.onPress = callback;
      obj.children = callback(arg1(dependencyMap[12]).TableRow, obj1);
      const items5 = [callback(arg1(dependencyMap[11]).TableRowGroup, obj), ];
      let obj4 = { muteConfig };
      const tmp17 = importDefault(dependencyMap[16]);
      const tmp7 = callback2;
      const tmp8 = closure_10;
      const tmp9 = callback;
      const MuteSettingType = arg1(dependencyMap[16]).MuteSettingType;
      obj4.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj4 = tmp9(tmp17, obj4);
      items5[1] = obj4;
      obj.children = items5;
      tmp7(tmp8, obj);
      const isPrivateResult = channel.isPrivate();
    }
  }
  obj1 = arg1(dependencyMap[9]);
  const muteOptions = obj1.getMuteOptions();
  const obj5 = {
    hasIcons: false,
    children: muteOptions.map((arg0) => {
      let label;
      ({ label, duration: closure_0 } = arg0);
      return callback(guildId(onOptionPress[12]).TableRow, {
        label,
        onPress() {
          return callback(closure_0);
        }
      }, label);
    })
  };
  const obj6 = {};
  const items6 = [callback(arg1(dependencyMap[18]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }), callback(arg1(dependencyMap[11]).TableRowGroup, obj5)];
  obj6.children = items6;
  return callback2(arg1(dependencyMap[17]).ActionSheet, obj6);
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    let obj = {};
    const intl5 = arg1(dependencyMap[8]).intl;
    obj.children = intl5.string(arg1(dependencyMap[8]).t.t0mEt2);
    let tmp4 = callback(arg1(dependencyMap[7]).Text, obj);
  } else if (tmp) {
    obj = {};
    const intl4 = arg1(dependencyMap[8]).intl;
    const obj1 = {
      mutedHook(children) {
          const obj = { INTEGRATION_CREATE: 1, ConstraintReasonCode: "center", children };
          return callback2(callback(closure_2[7]).Text, obj, arg1);
        }
    };
    obj.children = intl4.format(arg1(dependencyMap[8]).t.O34r15, obj1);
    tmp4 = callback(arg1(dependencyMap[7]).Text, obj);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[8]).intl;
    const obj3 = {
      notificationHook(children) {
          const obj = { INTEGRATION_CREATE: -76309222, ConstraintReasonCode: 285212671, children };
          return callback2(callback(closure_2[7]).Text, obj, arg1);
        }
    };
    obj2.children = intl3.format(arg1(dependencyMap[8]).t.nRwUIL, obj3);
    tmp4 = callback(arg1(dependencyMap[7]).Text, obj2);
  } else {
    if (guildMessageNotifications !== UserNotificationSettings.ALL_MESSAGES) {
      tmp4 = null;
    }
    obj = {};
    if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
      const intl2 = arg1(dependencyMap[8]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[8]).t.mUbulW);
    } else {
      const intl = arg1(dependencyMap[8]).intl;
      stringResult = intl.string(arg1(dependencyMap[8]).t.GGAdHV);
    }
    obj.children = stringResult;
    callback(arg1(dependencyMap[7]).Text, obj);
    const tmp5 = callback;
  }
  return tmp4;
};
