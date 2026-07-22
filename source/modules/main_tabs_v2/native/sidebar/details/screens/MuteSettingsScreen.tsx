// Module ID: 15430
// Function ID: 117732
// Name: UnmuteOptions
// Dependencies: []

// Module 15430 (UnmuteOptions)
function UnmuteOptions(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const navigation = channel.navigation;
  const importDefault = navigation;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  let obj = { style: callback3().options };
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(closure_2[13]).handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  obj = {};
  obj = { disableColor: true, source: importDefault(dependencyMap[16]) };
  obj.icon = callback(arg1(dependencyMap[15]).Icon, obj);
  const obj1 = {};
  const intl = arg1(dependencyMap[18]).intl;
  const obj2 = {};
  const tmp = callback3();
  const tmp3 = closure_11;
  const tmp4 = View;
  obj2.name = arg1(dependencyMap[19]).computeChannelName(channel, closure_8, closure_7, true);
  obj1.children = intl.format(arg1(dependencyMap[18]).t.eC+9rj, obj2);
  obj.label = callback(arg1(dependencyMap[17]).Text, obj1);
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  const items1 = [callback(arg1(dependencyMap[14]).TableRow, obj), ];
  const obj3 = { muteConfig: channel.muteConfig };
  const obj6 = arg1(dependencyMap[19]);
  const tmp5 = callback;
  const tmp6 = importDefault(dependencyMap[20]);
  const MuteSettingType = arg1(dependencyMap[20]).MuteSettingType;
  obj3.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = tmp5(tmp6, obj3);
  obj.children = items1;
  return tmp3(tmp4, obj);
}
function MuteOptions(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const applicationId = channel.applicationId;
  const importDefault = applicationId;
  const navigation = channel.navigation;
  const dependencyMap = navigation;
  const memo = importAllResult.useMemo(() => channel(navigation[13]).getMuteOptions(), []);
  const items = [channel, navigation, applicationId];
  let closure_4 = importAllResult.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    let obj = channel(navigation[13]);
    obj = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        let mute_config;
        let muted;
        let obj = callback;
        ({ muted, mute_config } = arg0);
        if (mute_config === undefined) {
          mute_config = null;
        }
        if (undefined !== muted) {
          if (obj.isThread()) {
            obj = { muted };
            let tmp25 = null;
            if (null != mute_config) {
              tmp25 = mute_config;
            }
            obj.mute_config = tmp25;
            const result = callback2(closure_2[10]).setNotificationSettings(obj, obj);
            const obj4 = callback2(closure_2[10]);
          } else if (null != tmp) {
            let obj1 = callback2(closure_2[11]);
            const guildId = obj.getGuildId();
            const id = obj.id;
            obj = { muted };
            let tmp14 = null;
            if (null != mute_config) {
              tmp14 = mute_config;
            }
            obj.mute_config = tmp14;
            const NotificationLabel2 = callback(closure_2[12]).NotificationLabel;
            const result1 = obj1.updateAppDMOverrideSettings(guildId, id, tmp, obj, NotificationLabel2.muted(muted));
          } else {
            const obj6 = callback2(closure_2[11]);
            const guildId1 = obj.getGuildId();
            const id2 = obj.id;
            obj1 = { muted };
            let tmp3 = null;
            if (null != mute_config) {
              tmp3 = mute_config;
            }
            obj1.mute_config = tmp3;
            const NotificationLabel = callback(closure_2[12]).NotificationLabel;
            const result2 = obj6.updateChannelOverrideSettings(guildId1, id2, obj1, NotificationLabel.muted(muted));
          }
        }
      },
      muteDurationSeconds
    };
    const result = obj.handleMuteSettingPress(obj);
  }, items);
  const tmp = callback3();
  return callback(closure_4, {
    style: callback3().options,
    children: memo.map((arg0, arg1) => {
      let label;
      ({ label, duration: closure_0 } = arg0);
      return callback(channel(navigation[14]).TableRow, {
        label,
        onPress() {
          return callback(closure_0);
        },
        start: 0 === arg1,
        end: arg1 === memo.length - 1
      }, label);
    })
  });
}
function NotificationSettingsButton(guildMessageNotifications) {
  let isGuildMuted;
  let isMuted;
  let messageNotifications;
  const channel = guildMessageNotifications.channel;
  const arg1 = channel;
  ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
  const importDefault = messageNotifications;
  const tmp = callback3();
  let obj = arg1(dependencyMap[21]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = importAllResult.useCallback(() => {
    if (channel.isThread()) {
      const result = channel(navigation[22]).showThreadNotificationsBottomSheet(channel);
      const obj = channel(navigation[22]);
    } else {
      navigation.navigate(constants.NOTIFICATIONS);
    }
  }, items);
  obj = {};
  const memo = importAllResult.useMemo(() => channel(navigation[13]).getMessageNotificationsText(messageNotifications), items1);
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.label = intl.string(arg1(dependencyMap[18]).t.h850Ss);
  obj.onPress = callback;
  const obj1 = { style: tmp.trailing };
  const obj2 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0, children: memo };
  const items2 = [callback(arg1(dependencyMap[17]).Text, obj2), callback(arg1(dependencyMap[14]).TableRow.Arrow, {})];
  obj1.children = items2;
  obj.trailing = callback2(View, obj1);
  let tmp8 = isMuted;
  if (!isMuted) {
    tmp8 = isGuildMuted;
  }
  obj.disabled = tmp8;
  obj.start = true;
  obj.end = true;
  const items3 = [callback(arg1(dependencyMap[14]).TableRow, obj), callback(View, { style: tmp.hint, children: callback(arg1(dependencyMap[23]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications: guildMessageNotifications.guildMessageNotifications }) })];
  obj.children = items3;
  return callback2(closure_12, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ChannelSettingsSections = arg1(dependencyMap[6]).ChannelSettingsSections;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let obj = {};
obj = { "Null": false, "Null": false, "Null": false, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.options = { marginBottom: 16 };
obj.trailing = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.hint = { flexGrow: null, gap: null };
let closure_13 = arg1(dependencyMap[8]).createStyles(obj);
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(() => {
  let guildMessageNotifications;
  let guildMuted;
  let messageNotifications;
  let muteConfig;
  let obj = arg1(dependencyMap[21]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  let obj1 = arg1(dependencyMap[24]);
  const route = obj1.useRoute();
  const channelId = route.params.channelId;
  const importDefault = channelId;
  const applicationId = route.params.applicationId;
  let obj2 = arg1(dependencyMap[25]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  const tmp = callback3();
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  let closure_4 = importAllResult.useMemo(() => navigation(stateFromStores[13]).getMuteSettingLabel(stateFromStores, stateFromStores1), items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = importAllResult.useMemo(() => navigation(stateFromStores[13]).getMuteSettingSublabel(stateFromStores, stateFromStores1), items3);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + closure_4 + " (" + closure_5 + ")",
      headerTitle() {
        return callback2(callback(closure_2[26]).GenericHeaderTitle, { title: closure_4, subtitle: closure_5 });
      },
      headerTitleAlign: "center"
    });
  });
  const items4 = [channelId];
  const memo = importAllResult.useMemo(() => navigation(stateFromStores[13]).getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items5 = [tmp.container, ];
    obj = { paddingBottom: tmp7 };
    items5[1] = obj;
    obj.style = items5;
    if (muted) {
      obj1 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      let tmp11Result = tmp11(UnmuteOptions, obj1);
    } else {
      obj2 = { channel: stateFromStores, applicationId, navigation };
      tmp11Result = tmp11(MuteOptions, obj2);
    }
    const items6 = [tmp11Result, ];
    let tmp15 = !stateFromStores.isPrivate();
    if (tmp15) {
      const obj3 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
      tmp15 = callback(NotificationSettingsButton, obj3);
    }
    items6[1] = tmp15;
    obj.children = items6;
    tmp9Result = closure_11(closure_4, obj);
    const tmp10 = closure_4;
    const tmp9 = closure_11;
  }
  return tmp9Result;
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default memoResult;
