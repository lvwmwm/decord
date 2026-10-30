// Module ID: 19943
// Function ID: 19944
// Name: NotificationSettingsModal
// Dependencies: [109, 19, 17, 4862, 4858, 7274, 5237, 4880, 19577, 4951, 6769, 1384, 1072, 6770, 1082, 21, 5009, 575, 5075, 5755, 5253, 11051, 1995, 7282, 7277, 11050, 7052, 1114, 7055, 7054, 7363, 5619, 1188, 5704, 2062, 6969, 11055, 6977, 11449, 4944, 8595, 5647, 8169, 6022, 11056, 1498, 504, 7275, 5601, 6992, 19944, 11049, 7163, 2]
// Exports: default

// Module 19943 (NotificationSettingsModal)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl8 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import MuteTimers from "MuteTimers" /* 4944 */;
import native from "native" /* 5075 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useChannelName from "useChannelName" /* 5647 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import TableRow2 from "TableRow" /* 6969 */;
import TableRowIcon2 from "TableRowIcon" /* 6977 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7052 */;
import TableRowGroup3 from "TableRowGroup" /* 7054 */;
import TableRadioRow5 from "TableRadioRow" /* 7055 */;
import Navigator2 from "Navigator" /* 7163 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7275 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7277 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import TableSwitchRow6 from "TableSwitchRow" /* 7363 */;
import _mod8169 from "module_8169" /* 8169 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11050 */;
import MutedUntilTextDefault from "MutedUntilText" /* 11055 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 11056 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11449 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7274 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;
import GuildStore from "GuildStore" /* 4880 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 19577 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_29;
let closure_30;
let closure_31;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function ConnectedNotificationSettings(guildId) {
  let channelOverrides;
  let items4;
  guildId = guildId.guildId;
  let memo;
  let shouldUseNewNotificationSystem;
  let obj = guildId(1498);
  navigation = obj.useNavigation();
  let obj2 = guildId(504);
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), unreadSetting: UserGuildSettingsStore.getGuildUnreadSetting(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  });
  const categories = stateFromStoresObject.categories;
  const tmp3 = shouldUseNewNotificationSystem(stateFromStoresObject, memo);
  dependencyMap = tmp3;
  const items1 = [categories];
  memo = react.useMemo(() => getFlattedChannelListDefault(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    const tmp = closure_1_8(type) || type === constants.GUILD_CATEGORY;
    return tmp;
  }), items1);
  const obj3 = guildId(11056);
  shouldUseNewNotificationSystem = obj3.useShouldUseNewNotificationSystem("NotificationSettingsModalNative");
  const items2 = [UserGuildSettingsStore];
  const items3 = [shouldUseNewNotificationSystem, memo, tmp3.channelOverrides];
  const obj5 = { children: items4 };
  const obj4 = guildId(504);
  const obj6 = {
    guildId,
    channels: memo,
    channelNotificationOptions: obj4.useStateFromStoresObject(items2, () => {
      const obj = {};
      const tmp = shouldUseNewNotificationSystem;
      if (tmp) {
        const iter = memo[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          let tmp7 = channel;
          if (null != channelOverrides.channelOverrides[channel.id]) {
            if (metroImportDefault.has(tmp7.type)) {
              let obj2 = UserGuildSettingsStore;
              let result = UserGuildSettingsStore.resolvedMessageNotifications(tmp7);
              if (result === constants.ONLY_MENTIONS) {
                if (obj2.resolveUnreadSetting(tmp7) === UnreadSetting.ALL_MESSAGES) {
                  obj[tmp14] = hybrid;
                }
              }
            }
          }
          continue;
        }
      }
      return obj;
    }, items3),
    navigation,
    shouldUseNewNotificationSystem
  };
  const merged = Object.assign(tmp3);
  items4 = [closure_29(NotificationSettings, obj6), closure_29(guildId(5601).NavScrim, {})];
  return closure_30(closure_31, obj5);
}
let closure_3 = ["categories"];
const View = react_native.View;
({ CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: metroImportDefault, isGuildReadableType: metroImportAll } = ChannelRecord);
({ AnalyticEvents: closure_17, UserNotificationSettings: closure_18, ChannelTypes: closure_19, NotificationSettingsSections: closure_20, SettingsPaneTypes: closure_21, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_22, GuildFeatures: closure_23, HighlightSettings: closure_24, HelpdeskArticles: closure_25, EMPTY_STRING_SNOWFLAKE_ID: closure_26 } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_28 = UserSettingsConstants.GuildNotificationSettingsFlags;
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = Fragment);
const hybrid = "hybrid";
let obj = { highlightsLearnMore: obj2, formStack: obj3 };
obj2 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const __initData2 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class NotificationSettings extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleMutePress = function handleMutePress() {
      let guildId;
      let muted;
      ({ guildId, muted } = require.props);
      if (muted) {
        const obj2 = { muted: !muted };
        const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
        NotificationSettingsModalActionCreatorsDefault;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateGuildNotificationSettings(guildId, obj2, NotificationLabel.muted(!muted));
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault;
        const obj = { guildId };
        const tmp8 = asyncRequire(11051, dependencyMap.paths);
        openLazy(tmp8, "muteSettings" + guildId, obj);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const obj2 = { [mobile_push]: arg1 };
      const result = obj.updateGuildNotificationSettings(require.props.guildId, obj2, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(ONLY_MENTIONS) {
      let obj4;
      const props = require.props;
      const guildId = props.guildId;
      const shouldUseNewNotificationSystem = props.shouldUseNewNotificationSystem;
      const tmp = hybrid;
      if (ONLY_MENTIONS === hybrid) {
        ONLY_MENTIONS = constants.ONLY_MENTIONS;
      }
      if (ONLY_MENTIONS !== tmp) {
        let UNREADS_ALL_MESSAGES;
        let obj3;
        if (ONLY_MENTIONS !== constants.ALL_MESSAGES) {
          UNREADS_ALL_MESSAGES = constants.UNREADS_ONLY_MENTIONS;
        }
        const obj = { message_notifications: ONLY_MENTIONS };
        const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
        NotificationSettingsModalActionCreatorsDefault;
        if (shouldUseNewNotificationSystem) {
          const obj2 = { flags: obj4.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId), UNREADS_ALL_MESSAGES) };
          obj3 = obj2;
          obj4 = notificationSettingsFlagUtils;
        } else {
          obj3 = {};
        }
        const merged = Object.assign(obj3);
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.notifications(ONLY_MENTIONS));
      }
      UNREADS_ALL_MESSAGES = constants.UNREADS_ALL_MESSAGES;
    };
    applyArgumentsResult.handleAddOverride = function handleAddOverride() {
      const props = require.props;
      navigation = props.navigation;
      const obj = { guildId: props.guildId };
      navigation.push(constants2.ADD_OVERRIDE, obj);
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      navigation = require.props.navigation;
      const obj = { channelId };
      navigation.push(constants2.CHANNEL_OVERRIDE, obj);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "guild", destination_pane: constants4.GUILD_NOTIFICATION_SETTINGS };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }
  renderServerSettings() {
    let guildMemberCount;
    let intl;
    let intl2;
    let intl4;
    let intl5;
    let intl6;
    let items;
    let items2;
    let messageNotifications;
    let muted;
    let shouldUseNewNotificationSystem;
    let stringResult;
    ({ messageNotifications, muted, guildMemberCount, shouldUseNewNotificationSystem } = this.props);
    let tmp2 = messageNotifications;
    if (shouldUseNewNotificationSystem) {
      tmp2 = messageNotifications;
      if (messageNotifications === constants2.ONLY_MENTIONS) {
        tmp2 = messageNotifications;
        if (tmp === UnreadSetting.ALL_MESSAGES) {
          tmp2 = hybrid;
        }
      }
    }
    const obj = { title: intl.string(intl8.t.lprV7V), value: tmp2, onChange: this.handleTypeChange, hasIcons: false, children: items };
    const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
    intl = intl8.intl;
    const obj2 = { label: intl2.string(intl8.t["n/bTaY"]), disabled: muted, value: constants2.ALL_MESSAGES, subLabel: stringResult };
    const TableRadioRow = TableRadioRow5.TableRadioRow;
    intl2 = intl8.intl;
    stringResult = null;
    const tmp5 = closure_30;
    if (null != guildMemberCount) {
      stringResult = null;
      if (guildMemberCount >= authStore6) {
        const intl3 = tmp6(1114).intl;
        stringResult = intl3.string(tmp6(1114).t.Dh5p5j);
      }
    }
    items = [closure_29(TableRadioRow, obj2), , , ];
    if (shouldUseNewNotificationSystem) {
      const obj3 = { label: intl4.string(intl8.t.JzbSEY), value: hybrid, disabled: muted };
      const TableRadioRow2 = tmp6(7055).TableRadioRow;
      intl4 = tmp6(1114).intl;
      const items1 = [closure_29(TableRadioRow2, obj3, hybrid)];
      items2 = items1;
    } else {
      items2 = [];
    }
    items[1] = items2;
    const obj4 = { label: intl5.format(intl8.t.L2hmYy, {}), value: constants2.ONLY_MENTIONS, disabled: muted };
    const TableRadioRow3 = tmp6(7055).TableRadioRow;
    intl5 = tmp6(1114).intl;
    items[2] = closure_29(TableRadioRow3, obj4);
    const obj5 = { label: intl6.string(intl8.t.CtVGyQ), value: constants2.NO_MESSAGES, disabled: muted };
    const TableRadioRow4 = tmp6(7055).TableRadioRow;
    intl6 = tmp6(1114).intl;
    items[3] = closure_29(TableRadioRow4, obj5);
    return tmp5(TableRadioGroup, obj);
  }
  renderNotificationOptions() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let items1;
    let mobilePush;
    let muteEvents;
    let muted;
    let suppressEveryone;
    let suppressRoles;
    let tmp10;
    let tmp8;
    const self = this;
    const props = this.props;
    ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: require } = props);
    const tmp2 = closure_30;
    const tmp = closure_33(this.context);
    const notifyHighlights = props.notifyHighlights;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    let obj = {
      label: intl.format(intl8.t.OWiWAp, {}),
      value: suppressEveryone,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
      }
    };
    const TableSwitchRow = TableSwitchRow6.TableSwitchRow;
    intl = intl8.intl;
    const tmp3 = closure_31;
    const tmp4 = View;
    if (suppressEveryone == null) {
      suppressEveryone = false;
    }
    const items = [closure_29(TableSwitchRow, obj), , ];
    const obj2 = {
      label: intl2.string(intl8.t["O/QdoD"]),
      value: suppressRoles,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      }
    };
    const TableSwitchRow2 = tmp5(7363).TableSwitchRow;
    intl2 = tmp5(1114).intl;
    if (suppressRoles == null) {
      suppressRoles = false;
    }
    items[1] = closure_29(TableSwitchRow2, obj2);
    const obj3 = {
      disabled: muted,
      label: intl3.string(intl8.t.gPuteJ),
      value: tmp8,
      onValueChange(arg0) {
        const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
        const obj = { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED };
        NotificationSettingsModalActionCreatorsDefault;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateGuildNotificationSettings(require, obj, NotificationLabel.highlights(!arg0));
      }
    };
    const TableSwitchRow3 = tmp5(7363).TableSwitchRow;
    intl3 = tmp5(1114).intl;
    const obj4 = { children: items1 };
    const obj5 = { hasIcons: false, children: items };
    tmp8 = muted || notifyHighlights === constants6.DISABLED;
    items[2] = closure_29(TableSwitchRow3, obj3);
    items1 = [tmp2(TableRowGroup, obj5), , ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: intl4.string(intl8.t["Vw/Xn8"]) };
    const Text = tmp5(5619).Text;
    intl4 = tmp5(1114).intl;
    items1[1] = closure_29(Text, obj6);
    const obj7 = {
      style: tmp.highlightsLearnMore,
      accessibilityRole: "link",
      onPress() {
        const openURL = self(dependencyMap[33]).openURL;
        self(dependencyMap[33]);
        const obj = self(dependencyMap[34]);
        return openURL(obj.getArticleURL(constants.HIGHLIGHTS));
      },
      children: intl5.string(intl8.t.PRBn9K)
    };
    const LegacyText = tmp5(1188).LegacyText;
    intl5 = tmp5(1114).intl;
    items1[2] = closure_29(LegacyText, obj7);
    const items2 = [tmp2(tmp4, obj4), ];
    const TableRowGroup2 = tmp5(7054).TableRowGroup;
    const obj8 = {
      label: intl6.string(intl8.t.ONG3Yz),
      value: muteEvents,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      }
    };
    const TableSwitchRow4 = tmp5(7363).TableSwitchRow;
    intl6 = tmp5(1114).intl;
    if (muteEvents == null) {
      muteEvents = false;
    }
    const items3 = [closure_29(TableSwitchRow4, obj8), ];
    const obj9 = {
      disabled: muted,
      label: intl7.string(intl8.t.h1DL66),
      value: tmp10,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
      }
    };
    const TableSwitchRow5 = tmp5(7363).TableSwitchRow;
    intl7 = tmp5(1114).intl;
    tmp10 = !muted;
    if (tmp10) {
      if (mobilePush == null) {
        mobilePush = false;
      }
      tmp10 = mobilePush;
    }
    const obj10 = { children: items2 };
    const obj11 = { hasIcons: false, children: items3 };
    items3[1] = closure_29(TableSwitchRow5, obj9);
    items2[1] = tmp2(TableRowGroup2, obj11);
    return tmp2(tmp3, obj10);
  }
  renderMuteSection() {
    let formatResult;
    let guild;
    let intl2;
    let muted;
    let obj4;
    let tmp7;
    const props = this.props;
    ({ muted, guild } = props);
    const muteConfig = props.muteConfig;
    const intl = intl8.intl;
    const format = intl.format;
    const t = intl8.t;
    if (muted) {
      let name;
      const e8hzDQ = t.e8hzDQ;
      if (guild != null) {
        name = guild.name;
      }
      const obj2 = { name };
      formatResult = format(e8hzDQ, obj2);
      tmp7 = tmp;
    } else {
      let name1;
      const prop = t["J+7D9E"];
      if (guild != null) {
        name1 = guild.name;
      }
      const obj = { name: name1 };
      formatResult = format(prop, obj);
      tmp7 = tmp;
    }
    const obj3 = { helperText: intl2.string(tmp7(1114).t["8wbTQ6"]), hasIcons: false, children: closure_29(tmp7(6969).TableRow, obj4) };
    const TableRowGroup = tmp7(7054).TableRowGroup;
    intl2 = tmp7(1114).intl;
    obj4 = { label: formatResult, onPress: this.handleMutePress, arrow: !muted };
    const items = [closure_29(TableRowGroup, obj3, "mute"), ];
    let tmp11Result = null;
    const tmp11 = closure_29;
    if (muted) {
      const obj5 = { muteConfig, type: tmp7(11055).MuteSettingType.SERVER };
      const tmp14 = MutedUntilTextDefault;
      tmp11Result = tmp11(tmp14, obj5, "muted-until");
    }
    items[1] = tmp11Result;
    return items;
  }
  renderChannels() {
    let TableRow;
    let TableRowIcon;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let overriddenChannels;
    const self = this;
    const obj = { title: intl.string(intl8.t.O4TIvi), hasIcons: true, children: closure_29(TableRow, obj2) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    intl = intl8.intl;
    obj2 = { icon: closure_29(TableRowIcon, obj3), label: intl2.string(intl8.t.quib7R), onPress: this.handleAddOverride };
    TableRow = TableRow2.TableRow;
    obj3 = { IconComponent: PlusMediumIcon.PlusMediumIcon };
    TableRowIcon = TableRowIcon2.TableRowIcon;
    intl2 = intl8.intl;
    const items = [closure_29(TableRowGroup, obj, "override-header"), ];
    const obj4 = { hasIcons: true, children: overriddenChannels.map((item) => self.renderChannel(item)) };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    overriddenChannels = this.getOverriddenChannels();
    items[1] = closure_29(TableRowGroup2, obj4, "override-channels");
    return items;
  }
  renderChannel(parent_id) {
    let TableRowIcon;
    let channelName;
    let obj3;
    let tmp4Result;
    let tmp4Result3;
    let tmp8Result;
    const self = this;
    let closure_0 = parent_id;
    if (null != parent_id) {
      let stringResult;
      const props = this.props;
      let channel;
      const channelNotificationOptions = props.channelNotificationOptions;
      if (null != parent_id.parent_id) {
        channel = ChannelStore.getChannel(parent_id.parent_id);
      }
      const obj = MuteTimers;
      if (obj.computeIsMuted(props.channelOverrides[parent_id.id])) {
        const intl4 = tmp4(1114).intl;
        stringResult = intl4.string(tmp4(1114).t.fpKdS1);
      } else {
        let message_notifications = channelNotificationOptions[parent_id.id];
        if (message_notifications == null) {
          message_notifications = tmp.message_notifications;
        }
        if (constants2.ALL_MESSAGES === message_notifications) {
          const intl3 = tmp4(1114).intl;
          stringResult = intl3.string(tmp4(1114).t["n/bTaY"]);
        } else if (hybrid === message_notifications) {
          const intl2 = tmp4(1114).intl;
          stringResult = intl2.string(tmp4(1114).t.JzbSEY);
        } else if (constants2.ONLY_MENTIONS === message_notifications) {
          const intl = tmp4(1114).intl;
          stringResult = intl.string(tmp4(1114).t["6fQPhu"]);
        } else if (constants2.NO_MESSAGES === message_notifications) {
          const intl5 = tmp4(1114).intl;
          stringResult = intl5.string(tmp4(1114).t.CtVGyQ);
        }
      }
      const obj2 = {
        icon: closure_29(TableRowIcon, obj3),
        label: tmp4Result3.computeChannelName(parent_id, UserStore, RelationshipStore),
        onPress() {
            return self.handleChannelSelect(id.id);
          },
        subLabel: channelName,
        trailing: tmp8Result,
        arrow: true
      };
      const TableRow = tmp4(6969).TableRow;
      obj3 = { IconComponent: tmp4Result.getChannelIconComponent(parent_id) };
      TableRowIcon = tmp4(6977).TableRowIcon;
      tmp4Result = utils_ChannelUtils;
      channelName = null;
      const tmp10 = RelationshipStore;
      tmp4Result3 = useChannelName;
      const tmp9 = UserStore;
      if (null != channel) {
        const tmp4Result4 = useChannelName;
        channelName = tmp4Result4.computeChannelName(channel, tmp9, tmp10);
      }
      tmp8Result = undefined;
      if (null != stringResult) {
        const obj4 = { text: stringResult };
        tmp8Result = tmp8(tmp4(6969).TableRow.TrailingText, obj4);
      }
      return closure_29(TableRow, obj2, parent_id.id);
    }
  }
  render() {
    let items;
    let tmp4Result;
    const self = this;
    const guild = this.props.guild;
    const tmp = closure_33(this.context);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants5.HUB);
    }
    const Form = _mod8169.Form;
    const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
    if (hasItem) {
      const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
      const Stack2 = tmp5(6022).Stack;
      obj.children = closure_29(Stack2, obj2);
      tmp4Result = tmp4(Form, obj);
    } else {
      const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: items };
      const Stack = tmp5(6022).Stack;
      items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj.children = closure_30(Stack, obj3);
      tmp4Result = tmp4(Form, obj);
    }
    return tmp4Result;
  }
  getOverriddenChannels() {
    const props = this.props;
    const channels = props.channels;
    const channelOverrides = props.channelOverrides;
    const obj = notifications_NotificationUtils;
    const obj2 = { ignoreNotificationSetting: false, ignoreMute: false, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
    set = new Set(obj.filterOverrides(channelOverrides, obj2));
    const mapped = channels.map((channel) => {
      channel = channel.channel;
      let tmp = null;
      if (set.has(channel.id)) {
        tmp = channel;
      }
      return tmp;
    });
    return mapped.filter((item) => null != item);
  }
}
const prototype = NotificationSettings.prototype;
NotificationSettings.contextType = native.ThemeContext;
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  let items1;
  let props;
  let obj = get_initialized;
  const items = [NotificationSettingsModalStore];
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj3;
    let obj5;
    let obj7;
    let obj = {};
    const OVERVIEW = constants.OVERVIEW;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close),
      title: intl.string(intl8.t.h850Ss),
      render(guildId) {
        const obj = { guildId: guildId.guildId };
        return closure_1_29(closure_1_35, obj);
      }
    };
    obj3 = NavigatorHeader;
    intl = intl8.intl;
    obj[OVERVIEW] = obj2;
    const ADD_OVERRIDE = constants.ADD_OVERRIDE;
    const obj4 = {
      title: intl2.string(intl8.t.s7vIQT),
      headerLeft: obj5.getHeaderBackButton(),
      render(guildId, navigation) {
        const obj = { guildId: guildId.guildId, navigation };
        return closure_1_29(closure_1_1(closure_1_2[50]), obj);
      }
    };
    intl2 = intl8.intl;
    obj[ADD_OVERRIDE] = obj4;
    obj5 = NavigatorHeader;
    const CHANNEL_OVERRIDE = constants.CHANNEL_OVERRIDE;
    const obj6 = {
      headerLeft: obj7.getHeaderBackButton(),
      title: intl3.string(intl8.t.h850Ss),
      render(channelId) {
        return closure_1_29(closure_1_1(closure_1_2[51]), { channelId: channelId.channelId });
      }
    };
    obj7 = NavigatorHeader;
    intl3 = intl8.intl;
    obj[CHANNEL_OVERRIDE] = obj6;
    return obj;
  }, []);
  let obj2 = { screens: memo, initialRouteStack: items1 };
  let obj3 = { name: constants3.OVERVIEW, params: { guildId: stateFromStores } };
  const Navigator = Navigator2.Navigator;
  const tmp3 = closure_29;
  if (stateFromStores == null) {
    stateFromStores = closure_26;
  }
  items1 = [obj3];
  return tmp3(Navigator, obj2);
};
export { NotificationSettings };
