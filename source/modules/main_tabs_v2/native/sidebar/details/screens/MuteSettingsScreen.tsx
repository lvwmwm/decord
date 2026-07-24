// Module ID: 15594
// Function ID: 120228
// Name: UnmuteOptions
// Dependencies: [31, 27, 1348, 1838, 3767, 1849, 653, 33, 4130, 689, 7006, 5079, 5073, 10311, 5165, 1273, 10313, 4126, 1212, 4320, 10314, 1456, 10375, 10310, 1457, 624, 9158, 1557, 2]

// Module 15594 (UnmuteOptions)
import importAllResult from "result";
import { View } from "useSafeAreaInsets";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ChannelSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function UnmuteOptions(channel) {
  channel = channel.channel;
  const navigation = channel.navigation;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  let obj = { style: callback3().options };
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(outer1_2[13]).handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  obj = {};
  obj = { disableColor: true, source: navigation(10313) };
  obj.icon = callback(channel(1273).Icon, obj);
  const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl = channel(1212).intl;
  const obj2 = {};
  const tmp = callback3();
  const tmp3 = closure_11;
  const tmp4 = View;
  obj2.name = channel(4320).computeChannelName(channel, closure_8, closure_7, true);
  obj1.children = intl.format(channel(1212).t["eC+9rj"], obj2);
  obj.label = callback(channel(4126).Text, obj1);
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  const items1 = [callback(channel(5165).TableRow, obj), ];
  const obj3 = { muteConfig: channel.muteConfig };
  const obj6 = channel(4320);
  const tmp5 = callback;
  const tmp6 = navigation(10314);
  const MuteSettingType = channel(10314).MuteSettingType;
  obj3.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = tmp5(tmp6, obj3);
  obj.children = items1;
  return tmp3(tmp4, obj);
}
function MuteOptions(channel) {
  channel = channel.channel;
  const applicationId = channel.applicationId;
  const navigation = channel.navigation;
  memo = memo.useMemo(() => channel(navigation[13]).getMuteOptions(), []);
  const items = [channel, navigation, applicationId];
  let closure_4 = memo.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    let obj = channel(navigation[13]);
    obj = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        let mute_config;
        let muted;
        let obj = outer1_0;
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
            const result = applicationId(navigation[10]).setNotificationSettings(obj, obj);
            const obj4 = applicationId(navigation[10]);
          } else if (null != tmp) {
            let obj1 = applicationId(navigation[11]);
            const guildId = obj.getGuildId();
            const id = obj.id;
            obj = { muted };
            let tmp14 = null;
            if (null != mute_config) {
              tmp14 = mute_config;
            }
            obj.mute_config = tmp14;
            const NotificationLabel2 = channel(navigation[12]).NotificationLabel;
            const result1 = obj1.updateAppDMOverrideSettings(guildId, id, tmp, obj, NotificationLabel2.muted(muted));
          } else {
            const obj6 = applicationId(navigation[11]);
            const guildId1 = obj.getGuildId();
            const id2 = obj.id;
            obj1 = { muted };
            let tmp3 = null;
            if (null != mute_config) {
              tmp3 = mute_config;
            }
            obj1.mute_config = tmp3;
            const NotificationLabel = channel(navigation[12]).NotificationLabel;
            const result2 = obj6.updateChannelOverrideSettings(guildId1, id2, obj1, NotificationLabel.muted(muted));
          }
        }
      },
      muteDurationSeconds
    };
    let result = obj.handleMuteSettingPress(obj);
  }, items);
  const tmp = callback3();
  return callback(closure_4, {
    style: callback3().options,
    children: memo.map((arg0, arg1) => {
      let channel;
      let label;
      ({ label, duration: channel } = arg0);
      return outer1_10(channel(navigation[14]).TableRow, {
        label,
        onPress() {
          return outer1_4(closure_0);
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
  ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
  const tmp = callback3();
  let obj = channel(navigation[21]);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = importAllResult.useCallback(() => {
    if (channel.isThread()) {
      const result = channel(navigation[22]).showThreadNotificationsBottomSheet(channel);
      const obj = channel(navigation[22]);
    } else {
      navigation.navigate(outer1_9.NOTIFICATIONS);
    }
  }, items);
  obj = {};
  const memo = importAllResult.useMemo(() => channel(navigation[13]).getMessageNotificationsText(messageNotifications), items1);
  obj = {};
  const intl = channel(navigation[18]).intl;
  obj.label = intl.string(channel(navigation[18]).t.h850Ss);
  obj.onPress = callback;
  const obj1 = { style: tmp.trailing };
  const obj2 = { variant: "text-md/medium", color: "text-muted", children: memo };
  const items2 = [callback(channel(navigation[17]).Text, obj2), callback(channel(navigation[14]).TableRow.Arrow, {})];
  obj1.children = items2;
  obj.trailing = callback2(View, obj1);
  let tmp8 = isMuted;
  if (!isMuted) {
    tmp8 = isGuildMuted;
  }
  obj.disabled = tmp8;
  obj.start = true;
  obj.end = true;
  const items3 = [callback(channel(navigation[14]).TableRow, obj), callback(View, { style: tmp.hint, children: callback(channel(navigation[23]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications: guildMessageNotifications.guildMessageNotifications }) })];
  obj.children = items3;
  return callback2(closure_12, obj);
}
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.container = obj;
obj.options = { marginBottom: 16 };
obj.trailing = { flexDirection: "row", alignItems: "center" };
obj.hint = { marginTop: 8, paddingHorizontal: 12 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let guildMessageNotifications;
  let guildMuted;
  let messageNotifications;
  let muteConfig;
  let obj = navigation(stateFromStores[21]);
  navigation = obj.useNavigation();
  let obj1 = navigation(stateFromStores[24]);
  const route = obj1.useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  let obj2 = navigation(stateFromStores[25]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj2.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp = callback3();
  const items1 = [closure_6];
  const stateFromStores1 = navigation(stateFromStores[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_6.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  let closure_4 = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettingLabel(stateFromStores, stateFromStores1), items2);
  const items3 = [stateFromStores, stateFromStores1];
  _isNativeReflectConstruct = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettingSublabel(stateFromStores, stateFromStores1), items3);
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + closure_4 + " (" + _isNativeReflectConstruct + ")",
      headerTitle() {
        return outer2_10(navigation(stateFromStores[26]).GenericHeaderTitle, { title: outer1_4, subtitle: outer1_5 });
      },
      headerTitleAlign: "center"
    });
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettings(channelId), items4);
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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default memoResult;
