// Module ID: 18895
// Function ID: 18896
// Name: MuteSettingsScreen
// Dependencies: [19, 17, 4858, 4880, 4951, 1384, 9792, 1072, 21, 5009, 575, 8194, 7282, 7277, 11052, 6969, 1188, 11054, 5619, 1114, 5647, 11055, 1498, 11122, 11051, 1499, 563, 1376, 9791, 1626, 2]

// Module 18895 (MuteSettingsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import react_native2 from "react-native" /* 9792 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 11052 */;
import threadActionSheets from "threadActionSheets" /* 11122 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore_mod from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, closure_6, navigation;

let c10;
let closure_12;
let obj2;
let unpackModuleId;
function UnmuteOptions(channel) {
  let Icon;
  let MuteSettingType;
  let Text;
  let format;
  let isPrivateResult;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let prop;
  channel = channel.channel;
  navigation = channel.navigation;
  const muteConfig = channel.muteConfig;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  let obj = { style: closure_13().options, children: items1 };
  closure_13();
  const callback = react.useCallback(() => {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    obj.handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  const obj2 = { icon: closure_10(Icon, obj3), label: closure_10(Text, obj4), onPress: callback, start: true, end: true };
  const TableRow = channel(6969).TableRow;
  obj3 = { disableColor: true, source: navigation(11054) };
  Icon = channel(1188).Icon;
  obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: format(prop, obj5) };
  Text = channel(5619).Text;
  const intl = channel(1114).intl;
  format = intl.format;
  obj5 = { name: obj6.computeChannelName(channel, UserStore, RelationshipStore, true) };
  prop = channel(1114).t["eC+9rj"];
  obj6 = channel(5647);
  items1 = [closure_10(TableRow, obj2), ];
  const obj7 = { muteConfig, type: isPrivateResult ? MuteSettingType.DM : MuteSettingType.CHANNEL };
  const tmp7 = navigation(11055);
  isPrivateResult = channel.isPrivate();
  MuteSettingType = channel(11055).MuteSettingType;
  items1[1] = closure_10(tmp7, obj7);
  return closure_11(View, obj);
}
function MuteOptions(channel) {
  channel = channel.channel;
  const applicationId = channel.applicationId;
  navigation = channel.navigation;
  let memo;
  const tmp = closure_13();
  memo = memo.useMemo(() => {
    const obj = channel(navigation[14]);
    return obj.getMuteOptions();
  }, []);
  const items = [channel, navigation, applicationId];
  let closure_4 = memo.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    let obj2 = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        let NotificationLabel;
        let mute_config;
        let muted;
        let obj5;
        let tmp11;
        let tmp3;
        ({ muted, mute_config } = arg0);
        if (mute_config === undefined) {
          mute_config = null;
        }
        if (undefined !== muted) {
          if (closure_1_0.isThread()) {
            const obj2 = { muted, mute_config };
            const setNotificationSettings = applicationId(navigation[11]).setNotificationSettings;
            applicationId(navigation[11]);
            if (mute_config == null) {
              mute_config = null;
            }
            const result = setNotificationSettings(obj, obj2);
          } else if (null != closure_1_1) {
            const updateAppDMOverrideSettings = applicationId(navigation[12]).updateAppDMOverrideSettings;
            const tmp9 = applicationId(navigation[12]);
            const guildId = obj.getGuildId();
            const id = obj.id;
            const obj3 = { muted, mute_config: tmp11 };
            tmp11 = mute_config;
            if (mute_config == null) {
              tmp11 = null;
            }
            const NotificationLabel2 = channel(navigation[13]).NotificationLabel;
            const result1 = updateAppDMOverrideSettings(guildId, id, tmp, obj3, NotificationLabel2.muted(muted));
          } else {
            const obj4 = { guildId: closure_1_0.getGuildId(), channelId: closure_1_0.id, settings: obj5, label: NotificationLabel.muted(muted) };
            const updateChannelOverrideSettings = applicationId(navigation[12]).updateChannelOverrideSettings;
            applicationId(navigation[12]);
            obj5 = { muted, mute_config: tmp3 };
            tmp3 = mute_config;
            if (mute_config == null) {
              tmp3 = null;
            }
            NotificationLabel = channel(navigation[13]).NotificationLabel;
            const result2 = updateChannelOverrideSettings(obj4);
          }
        }
      },
      muteDurationSeconds
    };
    let result = obj.handleMuteSettingPress(obj2);
  }, items);
  let obj = {
    style: tmp.options,
    children: memo.map((item, index) => {
      let label;
      ({ label, duration: channel } = item);
      const obj = {
        label,
        onPress() {
          return closure_4(channel);
        },
        start: 0 === index,
        end: index === memo.length - 1
      };
      return closure_1_10(channel(navigation[15]).TableRow, obj, label);
    })
  };
  return closure_10(closure_4, obj);
}
function NotificationSettingsButton(channel) {
  let intl;
  let isGuildMuted;
  let isMuted;
  let items2;
  let items3;
  let messageNotifications;
  let obj3;
  let tmp11;
  channel = channel.channel;
  ({ isMuted, isGuildMuted, messageNotifications } = channel);
  navigation = undefined;
  const guildMessageNotifications = channel.guildMessageNotifications;
  let tmp = closure_13();
  let obj = channel(navigation[22]);
  const tmp3 = navigation;
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = react.useCallback(() => {
    const tmp = channel;
    if (channel.isThread()) {
      const obj = threadActionSheets;
      const result = obj.showThreadNotificationsBottomSheet(tmp);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  }, items);
  const memo = react.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMessageNotificationsText(messageNotifications);
  }, items1);
  const obj2 = { label: intl.string(channel(navigation[19]).t.h850Ss), onPress: callback, trailing: closure_11(View, obj3), disabled: tmp11, start: true, end: true };
  const TableRow = channel(navigation[15]).TableRow;
  intl = channel(navigation[19]).intl;
  obj3 = { style: tmp.trailing, children: items2 };
  items2 = [closure_10(channel(navigation[18]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }), closure_10(channel(navigation[15]).TableRow.Arrow, {})];
  const obj4 = { children: items3 };
  tmp11 = isMuted || isGuildMuted;
  items3 = [closure_10(TableRow, obj2), ];
  const obj5 = { style: tmp.hint, children: closure_10(channel(tmp3[24]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications }) };
  items3[1] = closure_10(View, obj5);
  return closure_11(closure_12, obj4);
}
const View = react_native.View;
let RelationshipStore = RelationshipStore_mod;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { container: obj2, options: { marginBottom: 16 }, trailing: { flexDirection: "row", alignItems: "center" }, hint: { marginTop: 8, paddingHorizontal: 12 }, headerRightSpacer: { width: MIN_HEADER_HEIGHT } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConnectedChannelMuteScreen() {
  let channelId;
  let closure_0;
  let guildMessageNotifications;
  let guildMuted;
  let items5;
  let items6;
  let messageNotifications;
  let muteConfig;
  const tmp = closure_13();
  _require = tmp;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const obj2 = require("Link");
  const route = obj2.useRoute();
  channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  const items = [closure_5];
  const obj3 = require("useStateFromStores");
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [closure_6];
  const obj5 = require("useStateFromStores");
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettingLabel(stateFromStores, stateFromStores1);
  }, items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_6 = stateFromStores.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettingSublabel(stateFromStores, stateFromStores1);
  }, items3);
  const obj7 = require("PlatformUtils");
  let isIOSResult = obj7.isIOS();
  if (isIOSResult) {
    let isThreadResult;
    if (stateFromStores != null) {
      isThreadResult = stateFromStores.isThread();
    }
    isIOSResult = isThreadResult;
  }
  RelationshipStore = isIOSResult;
  const layoutEffect = obj6.useLayoutEffect(() => {
    let fn;
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_10(closure_0(channelId[28]).GenericHeaderTitle, obj);
      },
      headerRight: fn,
      headerTitleAlign: "center"
    };
    const setOptions = navigation.setOptions;
    fn = undefined;
    if (RelationshipStore) {
      fn = () => {
        const obj = { style: closure_1_0.headerRightSpacer };
        return closure_2_10(stateFromStores1, obj);
      };
    }
    setOptions(obj);
  });
  const items4 = [channelId];
  const memo = obj6.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettings(channelId);
  }, items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp12Result = null;
  if (null != stateFromStores) {
    let tmp14Result;
    let tmp17;
    const obj4 = { style: items5, children: items6 };
    items5 = [tmp.container, ];
    const obj8 = { paddingBottom: tmp10 };
    items5[1] = obj8;
    const tmp12 = closure_11;
    const tmp13 = stateFromStores1;
    if (muted) {
      const obj9 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      tmp14Result = tmp14(UnmuteOptions, obj9);
      tmp17 = tmp14;
    } else {
      const obj10 = { channel: stateFromStores, applicationId, navigation };
      tmp14Result = tmp14(MuteOptions, obj10);
      tmp17 = tmp14;
    }
    items6 = [tmp14Result, ];
    let tmp17Result = !stateFromStores.isPrivate();
    stateFromStores.isPrivate();
    if (tmp17Result) {
      const obj11 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
      tmp17Result = tmp17(NotificationSettingsButton, obj11);
    }
    items6[1] = tmp17Result;
    tmp12Result = tmp12(tmp13, obj4);
  }
  return tmp12Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default memoResult;
