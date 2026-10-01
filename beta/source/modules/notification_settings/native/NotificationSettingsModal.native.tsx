// Module ID: 17620
// Function ID: 17621
// Name: NotificationSettingsModal
// Dependencies: [109, 19, 17, 2049, 2045, 6532, 4754, 2067, 17276, 4479, 5017, 1372, 1074, 21, 4836, 576, 4540, 5016, 4800, 9600, 1981, 6540, 6535, 9610, 9616, 9623, 5997, 1115, 6000, 5999, 6621, 4832, 1177, 4525, 2111, 9609, 5917, 9604, 5923, 12269, 4472, 5020, 5335, 4989, 8053, 5279, 9605, 1485, 504, 6533, 6461, 5936, 17621, 9599, 6421, 2]
// Exports: default

// Module 17620 (NotificationSettingsModal)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import MuteTimers from "MuteTimers" /* 4472 */;
import native from "native" /* 4540 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useChannelName from "useChannelName" /* 4989 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowIcon2 from "TableRowIcon" /* 5923 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import TableRowGroup3 from "TableRowGroup" /* 5999 */;
import TableRadioRow4 from "TableRadioRow" /* 6000 */;
import Navigator2 from "Navigator" /* 6421 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6533 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import TableSwitchRow6 from "TableSwitchRow" /* 6621 */;
import Form2 from "Form" /* 8053 */;
import MutedUntilTextDefault from "MutedUntilText" /* 9604 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9605 */;
import NotificationSettingsMuteBanner2 from "NotificationSettingsMuteBanner" /* 9609 */;
import NotificationSettingsPresets from "NotificationSettingsPresets" /* 9610 */;
import NotificationSettingsMessageNotification from "NotificationSettingsMessageNotification" /* 9616 */;
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread" /* 9623 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12269 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6532 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildStore from "GuildStore" /* 2067 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17276 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let closure_16;
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
let closure_27;
let closure_28;
let obj2;
let obj3;
let obj4;
function ConnectedNotificationSettings(guildId) {
  let items2;
  guildId = guildId.guildId;
  let obj = guildId(1485);
  navigation = obj.useNavigation();
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const obj2 = guildId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  });
  const categories = stateFromStoresObject.categories;
  const items1 = [categories];
  const tmp3 = _objectWithoutProperties(stateFromStoresObject, closure_3);
  const memo = react.useMemo(() => getFlattedChannelListDefault(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    const tmp = closure_1_7(type) || type === constants.GUILD_CATEGORY;
    return tmp;
  }), items1);
  const obj4 = { children: items2 };
  const obj3 = guildId(9605);
  const obj5 = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: obj3.useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  items2 = [closure_26(NotificationSettings, obj5), closure_26(guildId(6461).NavScrim, {})];
  return closure_27(closure_28, obj4);
}
let closure_3 = ["categories"];
const View = react_native.View;
const isGuildReadableType = ChannelRecord.isGuildReadableType;
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, NotificationSettingsSections: closure_19, SettingsPaneTypes: closure_20, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_21, GuildFeatures: closure_22, HighlightSettings: closure_23, HelpdeskArticles: closure_24, EMPTY_STRING_SNOWFLAKE_ID: closure_25 } = Constants);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = Fragment);
let obj = { highlightsLearnMore: obj2, separator: obj3, formStack: obj4 };
obj2 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_29 = createLegacyClassComponentStyles(obj);
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
        const tmp8 = asyncRequire(9600, dependencyMap.paths);
        openLazy(tmp8, "muteSettings" + guildId, obj);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const obj2 = { [mobile_push]: arg1 };
      const result = obj.updateGuildNotificationSettings(require.props.guildId, obj2, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(message_notifications) {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const guildId = require.props.guildId;
      const obj = { message_notifications };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    applyArgumentsResult.handleAddOverride = function handleAddOverride() {
      const props = require.props;
      navigation = props.navigation;
      const obj = { guildId: props.guildId };
      navigation.push(constants.ADD_OVERRIDE, obj);
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      navigation = require.props.navigation;
      const obj = { channelId };
      navigation.push(constants.CHANNEL_OVERRIDE, obj);
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
    let items;
    let items1;
    let items2;
    let messageNotifications;
    let muted;
    let shouldUseNewNotificationSystem;
    let stringResult;
    let tmp2Result;
    const self = this;
    const props = this.props;
    ({ muted, guildMemberCount } = props);
    ({ messageNotifications, shouldUseNewNotificationSystem } = props);
    if (shouldUseNewNotificationSystem) {
      const obj2 = { children: items1 };
      const obj3 = { children: items };
      const obj4 = { guildId: self.props.guildId };
      items = [prioritySpeakerDucking(NotificationSettingsPresets.NotificationSettingsGuildPresets, obj4), , ];
      const obj5 = { style: { marginTop: 24 }, guildId: self.props.guildId };
      items[1] = prioritySpeakerDucking(NotificationSettingsMessageNotification.NotificationSettingsGuildMessageNotification, obj5);
      const obj6 = { style: { marginTop: 24 }, guildId: self.props.guildId };
      items[2] = prioritySpeakerDucking(NotificationSettingsMessageUnread.NotificationSettingsGuildMessageUnread, obj6);
      items1 = [closure_27(View, obj3), ];
      const obj7 = { style: tmp.separator };
      items1[1] = prioritySpeakerDucking(View, obj7);
      tmp2Result = tmp2(__initData, obj2);
    } else {
      const obj = { title: intl.string(intl8.t.lprV7V), value: messageNotifications, onChange: self.handleTypeChange, hasIcons: false, children: items2 };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      intl = intl8.intl;
      const obj8 = { label: intl2.string(intl8.t["n/bTaY"]), disabled: muted, value: constants2.ALL_MESSAGES, subLabel: stringResult };
      const TableRadioRow = TableRadioRow4.TableRadioRow;
      intl2 = intl8.intl;
      stringResult = null;
      if (null != guildMemberCount) {
        stringResult = null;
        if (guildMemberCount >= closure_21) {
          const intl3 = tmp3(1115).intl;
          stringResult = intl3.string(tmp3(1115).t.Dh5p5j);
        }
      }
      items2 = [prioritySpeakerDucking(TableRadioRow, obj8), , ];
      const obj9 = { label: intl4.format(intl8.t.L2hmYy, {}), value: constants2.ONLY_MENTIONS, disabled: muted };
      const TableRadioRow2 = tmp3(6000).TableRadioRow;
      intl4 = tmp3(1115).intl;
      items2[1] = prioritySpeakerDucking(TableRadioRow2, obj9);
      const obj10 = { label: intl5.string(intl8.t.CtVGyQ), value: constants2.NO_MESSAGES, disabled: muted };
      const TableRadioRow3 = tmp3(6000).TableRadioRow;
      intl5 = tmp3(1115).intl;
      items2[2] = prioritySpeakerDucking(TableRadioRow3, obj10);
      tmp2Result = tmp2(TableRadioGroup, obj);
    }
    return tmp2Result;
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
    const tmp2 = closure_27;
    const tmp = closure_29(this.context);
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
    const tmp3 = closure_28;
    const tmp4 = View;
    if (suppressEveryone == null) {
      suppressEveryone = false;
    }
    const items = [closure_26(TableSwitchRow, obj), , ];
    const obj2 = {
      label: intl2.string(intl8.t["O/QdoD"]),
      value: suppressRoles,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      }
    };
    const TableSwitchRow2 = tmp5(6621).TableSwitchRow;
    intl2 = tmp5(1115).intl;
    if (suppressRoles == null) {
      suppressRoles = false;
    }
    items[1] = closure_26(TableSwitchRow2, obj2);
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
    const TableSwitchRow3 = tmp5(6621).TableSwitchRow;
    intl3 = tmp5(1115).intl;
    const obj4 = { children: items1 };
    const obj5 = { hasIcons: false, children: items };
    tmp8 = muted || notifyHighlights === constants6.DISABLED;
    items[2] = closure_26(TableSwitchRow3, obj3);
    items1 = [tmp2(TableRowGroup, obj5), , ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: intl4.string(intl8.t["Vw/Xn8"]) };
    const Text = tmp5(4832).Text;
    intl4 = tmp5(1115).intl;
    items1[1] = closure_26(Text, obj6);
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
    const LegacyText = tmp5(1177).LegacyText;
    intl5 = tmp5(1115).intl;
    items1[2] = closure_26(LegacyText, obj7);
    const items2 = [tmp2(tmp4, obj4), ];
    const TableRowGroup2 = tmp5(5999).TableRowGroup;
    const obj8 = {
      label: intl6.string(intl8.t.ONG3Yz),
      value: muteEvents,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      }
    };
    const TableSwitchRow4 = tmp5(6621).TableSwitchRow;
    intl6 = tmp5(1115).intl;
    if (muteEvents == null) {
      muteEvents = false;
    }
    const items3 = [closure_26(TableSwitchRow4, obj8), ];
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
    const TableSwitchRow5 = tmp5(6621).TableSwitchRow;
    intl7 = tmp5(1115).intl;
    tmp10 = !muted;
    if (tmp10) {
      if (mobilePush == null) {
        mobilePush = false;
      }
      tmp10 = mobilePush;
    }
    const obj10 = { children: items2 };
    const obj11 = { hasIcons: false, children: items3 };
    items3[1] = closure_26(TableSwitchRow5, obj9);
    items2[1] = tmp2(TableRowGroup2, obj11);
    return tmp2(tmp3, obj10);
  }
  renderMuteSection() {
    let guild;
    let intl2;
    let intl3;
    let muteConfig;
    let muted;
    let obj5;
    let obj7;
    const self = this;
    const props = this.props;
    ({ muted, muteConfig, guild } = props);
    if (props.shouldUseNewNotificationSystem) {
      let tmp16 = null;
      if (muted) {
        const obj2 = { title: intl3.string(intl8.t.ZSkXJY), subtitle: obj7.getMuteBannerSubtitleFromConfig(muteConfig), style: { marginBottom: 16 }, onPressUnmute: self.handleMutePress };
        const NotificationSettingsMuteBanner = NotificationSettingsMuteBanner2.NotificationSettingsMuteBanner;
        intl3 = intl8.intl;
        obj7 = NotificationSettingsMuteBanner2;
        tmp16 = prioritySpeakerDucking(NotificationSettingsMuteBanner, obj2);
      }
      return tmp16;
    } else {
      let formatResult;
      let tmp8;
      const intl = intl8.intl;
      const format = intl.format;
      const t = intl8.t;
      if (muted) {
        let name;
        const e8hzDQ = t.e8hzDQ;
        if (guild != null) {
          name = guild.name;
        }
        const obj3 = { name };
        formatResult = format(e8hzDQ, obj3);
        tmp8 = tmp;
      } else {
        let name1;
        const prop = t["J+7D9E"];
        if (guild != null) {
          name1 = guild.name;
        }
        const obj = { name: name1 };
        formatResult = format(prop, obj);
        tmp8 = tmp;
      }
      const obj4 = { helperText: intl2.string(tmp8(1115).t["8wbTQ6"]), hasIcons: false, children: prioritySpeakerDucking(tmp8(5917).TableRow, obj5) };
      const TableRowGroup = tmp8(5999).TableRowGroup;
      intl2 = tmp8(1115).intl;
      obj5 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
      const items = [prioritySpeakerDucking(TableRowGroup, obj4, "mute"), ];
      let tmp11Result = null;
      const tmp11 = prioritySpeakerDucking;
      if (muted) {
        const obj6 = { muteConfig, type: tmp8(9604).MuteSettingType.SERVER };
        const tmp15 = MutedUntilTextDefault;
        tmp11Result = tmp11(tmp15, obj6, "muted-until");
      }
      items[1] = tmp11Result;
      return items;
    }
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
    const obj = { title: intl.string(intl8.t.O4TIvi), hasIcons: true, children: prioritySpeakerDucking(TableRow, obj2) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    intl = intl8.intl;
    obj2 = { icon: prioritySpeakerDucking(TableRowIcon, obj3), label: intl2.string(intl8.t.quib7R), onPress: this.handleAddOverride };
    TableRow = TableRow2.TableRow;
    obj3 = { IconComponent: PlusMediumIcon.PlusMediumIcon };
    TableRowIcon = TableRowIcon2.TableRowIcon;
    intl2 = intl8.intl;
    const items = [prioritySpeakerDucking(TableRowGroup, obj, "override-header"), ];
    const obj4 = { hasIcons: true, children: overriddenChannels.map((item) => self.renderChannel(item)) };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    overriddenChannels = this.getOverriddenChannels();
    items[1] = prioritySpeakerDucking(TableRowGroup2, obj4, "override-channels");
    return items;
  }
  renderChannel(parent_id) {
    let TableRowIcon;
    let channelName;
    let obj3;
    let tmp12Result;
    let tmp4Result6;
    let tmp4Result7;
    const self = this;
    let closure_0 = parent_id;
    if (null != parent_id) {
      let stringResult;
      let channel;
      if (null != parent_id.parent_id) {
        channel = ChannelStore.getChannel(parent_id.parent_id);
      }
      const obj = MuteTimers;
      if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
        const intl3 = tmp4(1115).intl;
        stringResult = intl3.string(tmp4(1115).t.fpKdS1);
      } else {
        const message_notifications = tmp.message_notifications;
        if (constants2.ALL_MESSAGES === message_notifications) {
          const intl2 = tmp4(1115).intl;
          stringResult = intl2.string(tmp4(1115).t["n/bTaY"]);
        } else if (constants2.ONLY_MENTIONS === message_notifications) {
          const intl = tmp4(1115).intl;
          stringResult = intl.string(tmp4(1115).t["6fQPhu"]);
        } else if (constants2.NO_MESSAGES === message_notifications) {
          const intl4 = tmp4(1115).intl;
          stringResult = intl4.string(tmp4(1115).t.CtVGyQ);
        }
      }
      if (self.props.shouldUseNewNotificationSystem) {
        const presetName = notificationSettingsPresetUtils.presetName;
        notificationSettingsPresetUtils;
        const presetFromSettings = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(parent_id);
        stringResult = presetName(presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(parent_id)));
      }
      const obj2 = {
        icon: prioritySpeakerDucking(TableRowIcon, obj3),
        label: tmp4Result7.computeChannelName(parent_id, UserStore, RelationshipStore),
        onPress() {
            return self.handleChannelSelect(id.id);
          },
        subLabel: channelName,
        trailing: tmp12Result,
        arrow: true
      };
      const TableRow = tmp4(5917).TableRow;
      obj3 = { IconComponent: tmp4Result6.getChannelIconComponent(parent_id) };
      TableRowIcon = tmp4(5923).TableRowIcon;
      tmp4Result6 = utils_ChannelUtils;
      channelName = null;
      const tmp13 = UserStore;
      const tmp14 = RelationshipStore;
      tmp4Result7 = useChannelName;
      if (null != channel) {
        const tmp4Result8 = useChannelName;
        channelName = tmp4Result8.computeChannelName(channel, tmp13, tmp14);
      }
      tmp12Result = undefined;
      if (null != stringResult) {
        const obj4 = { text: stringResult };
        tmp12Result = tmp12(tmp4(5917).TableRow.TrailingText, obj4);
      }
      return prioritySpeakerDucking(TableRow, obj2, parent_id.id);
    }
  }
  render() {
    let items;
    let tmp4Result;
    const self = this;
    const guild = this.props.guild;
    const tmp = closure_29(this.context);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants5.HUB);
    }
    const Form = Form2.Form;
    const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
    if (hasItem) {
      const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
      const Stack2 = tmp5(5279).Stack;
      obj.children = prioritySpeakerDucking(Stack2, obj2);
      tmp4Result = tmp4(Form, obj);
    } else {
      const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: items };
      const Stack = tmp5(5279).Stack;
      items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj.children = closure_27(Stack, obj3);
      tmp4Result = tmp4(Form, obj);
    }
    return tmp4Result;
  }
  getOverriddenChannels() {
    const props = this.props;
    const channels = props.channels;
    const channelOverrides = props.channelOverrides;
    const obj = notifications_NotificationUtils;
    const obj2 = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
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
        return closure_1_26(closure_1_31, obj);
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
        return closure_1_26(closure_1_1(closure_1_2[52]), obj);
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
        return closure_1_26(closure_1_1(closure_1_2[53]), { channelId: channelId.channelId, inGuildContext: true });
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
  const tmp3 = prioritySpeakerDucking;
  if (stateFromStores == null) {
    stateFromStores = closure_25;
  }
  items1 = [obj3];
  return tmp3(Navigator, obj2);
};
export { NotificationSettings };
