// Module ID: 19880
// Function ID: 19881
// Name: NotificationSettingsModal
// Dependencies: [109, 19, 17, 4861, 4857, 7267, 5231, 4879, 19514, 4947, 6762, 1389, 1084, 6763, 1094, 21, 5005, 587, 5071, 5749, 5247, 11100, 2000, 7275, 7270, 11066, 7045, 1125, 7044, 7047, 7355, 5271, 1199, 5698, 2065, 6963, 11102, 6971, 11244, 4940, 8561, 5641, 8988, 6015, 11063, 558, 576, 1503, 504, 7268, 5629, 6984, 19881, 14242, 7155, 2]

// Module 19880 (NotificationSettingsModal)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import intl8 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import MuteTimers from "MuteTimers" /* 4940 */;
import native from "native" /* 5071 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import useChannelName from "useChannelName" /* 5641 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5749 */;
import ReadStateConstants from "ReadStateConstants" /* 6763 */;
import TableRow2 from "TableRow" /* 6963 */;
import TableRowIcon2 from "TableRowIcon" /* 6971 */;
import NavigatorHeader from "NavigatorHeader" /* 6984 */;
import TableRadioRow5 from "TableRadioRow" /* 7044 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7045 */;
import TableRowGroup3 from "TableRowGroup" /* 7047 */;
import Navigator2 from "Navigator" /* 7155 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7268 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7270 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7275 */;
import TableSwitchRow6 from "TableSwitchRow" /* 7355 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8561 */;
import Form2 from "Form" /* 8988 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 11063 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11066 */;
import MutedUntilTextDefault from "MutedUntilText" /* 11102 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11244 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 14242 */;
import NotificationSettingChannelOverridesDefault from "NotificationSettingChannelOverrides" /* 19881 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7267 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5231 */;
import GuildStore from "GuildStore" /* 4879 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 19514 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6762 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, set;

let c9;
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
let closure_30;
let closure_31;
let closure_32;
let metroImportAll;
let obj2;
let obj3;
function getScreens() {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj5;
  let obj7;
  let obj = {};
  const OVERVIEW = constants3.OVERVIEW;
  const obj2 = {
    headerLeft: obj3.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close),
    title: intl.string(intl8.t.h850Ss),
    render(guildId) {
      const obj = { guildId: guildId.guildId };
      return closure_1_30(closure_1_36, obj);
    }
  };
  obj3 = NavigatorHeader;
  intl = intl8.intl;
  obj[OVERVIEW] = obj2;
  const ADD_OVERRIDE = constants3.ADD_OVERRIDE;
  const obj4 = {
    title: intl2.string(intl8.t.s7vIQT),
    headerLeft: obj5.getHeaderBackButton(),
    render(guildId, navigation) {
      const obj = { guildId: guildId.guildId, navigation };
      return closure_1_30(NotificationSettingChannelOverridesDefault, obj);
    }
  };
  intl2 = intl8.intl;
  obj[ADD_OVERRIDE] = obj4;
  obj5 = NavigatorHeader;
  const CHANNEL_OVERRIDE = constants3.CHANNEL_OVERRIDE;
  const obj6 = {
    headerLeft: obj7.getHeaderBackButton(),
    title: intl3.string(intl8.t.h850Ss),
    render(channelId) {
      return closure_1_30(ChannelSettingsNotificationsDefault, { channelId: channelId.channelId });
    }
  };
  obj7 = NavigatorHeader;
  intl3 = intl8.intl;
  obj[CHANNEL_OVERRIDE] = obj6;
  return obj;
}
let closure_3 = ["categories"];
let closure_4 = ["categories"];
const View = react_native.View;
({ CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: metroImportAll, isGuildReadableType: c9 } = ChannelRecord);
({ AnalyticEvents: closure_18, UserNotificationSettings: closure_19, ChannelTypes: closure_20, NotificationSettingsSections: closure_21, SettingsPaneTypes: closure_22, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_23, GuildFeatures: closure_24, HighlightSettings: closure_25, HelpdeskArticles: closure_26, EMPTY_STRING_SNOWFLAKE_ID: closure_27 } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_29 = UserSettingsConstants.GuildNotificationSettingsFlags;
({ jsx: closure_30, jsxs: closure_31, Fragment: closure_32 } = Fragment);
const hybrid = "hybrid";
let obj = { highlightsLearnMore: obj2, formStack: obj3 };
obj2 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const __initData3 = createLegacyClassComponentStyles(obj);
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
        const tmp8 = asyncRequire(11100, dependencyMap.paths);
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
    const tmp5 = __initData;
    if (null != guildMemberCount) {
      stringResult = null;
      if (guildMemberCount >= sidebars) {
        const intl3 = tmp6(1125).intl;
        stringResult = intl3.string(tmp6(1125).t.Dh5p5j);
      }
    }
    items = [closure_30(TableRadioRow, obj2), , , ];
    if (shouldUseNewNotificationSystem) {
      const obj3 = { label: intl4.string(intl8.t.JzbSEY), value: hybrid, disabled: muted };
      const TableRadioRow2 = tmp6(7044).TableRadioRow;
      intl4 = tmp6(1125).intl;
      const items1 = [closure_30(TableRadioRow2, obj3, hybrid)];
      items2 = items1;
    } else {
      items2 = [];
    }
    items[1] = items2;
    const obj4 = { label: intl5.format(intl8.t.L2hmYy, {}), value: constants2.ONLY_MENTIONS, disabled: muted };
    const TableRadioRow3 = tmp6(7044).TableRadioRow;
    intl5 = tmp6(1125).intl;
    items[2] = closure_30(TableRadioRow3, obj4);
    const obj5 = { label: intl6.string(intl8.t.CtVGyQ), value: constants2.NO_MESSAGES, disabled: muted };
    const TableRadioRow4 = tmp6(7044).TableRadioRow;
    intl6 = tmp6(1125).intl;
    items[3] = closure_30(TableRadioRow4, obj5);
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
    const tmp2 = closure_31;
    const tmp = closure_34(this.context);
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
    const tmp3 = closure_32;
    const tmp4 = View;
    if (suppressEveryone == null) {
      suppressEveryone = false;
    }
    const items = [closure_30(TableSwitchRow, obj), , ];
    const obj2 = {
      label: intl2.string(intl8.t["O/QdoD"]),
      value: suppressRoles,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      }
    };
    const TableSwitchRow2 = tmp5(7355).TableSwitchRow;
    intl2 = tmp5(1125).intl;
    if (suppressRoles == null) {
      suppressRoles = false;
    }
    items[1] = closure_30(TableSwitchRow2, obj2);
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
    const TableSwitchRow3 = tmp5(7355).TableSwitchRow;
    intl3 = tmp5(1125).intl;
    const obj4 = { children: items1 };
    const obj5 = { hasIcons: false, children: items };
    tmp8 = muted || notifyHighlights === constants6.DISABLED;
    items[2] = closure_30(TableSwitchRow3, obj3);
    items1 = [tmp2(TableRowGroup, obj5), , ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: intl4.string(intl8.t["Vw/Xn8"]) };
    const Text = tmp5(5271).Text;
    intl4 = tmp5(1125).intl;
    items1[1] = closure_30(Text, obj6);
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
    const LegacyText = tmp5(1199).LegacyText;
    intl5 = tmp5(1125).intl;
    items1[2] = closure_30(LegacyText, obj7);
    const items2 = [tmp2(tmp4, obj4), ];
    const TableRowGroup2 = tmp5(7047).TableRowGroup;
    const obj8 = {
      label: intl6.string(intl8.t.ONG3Yz),
      value: muteEvents,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      }
    };
    const TableSwitchRow4 = tmp5(7355).TableSwitchRow;
    intl6 = tmp5(1125).intl;
    if (muteEvents == null) {
      muteEvents = false;
    }
    const items3 = [closure_30(TableSwitchRow4, obj8), ];
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
    const TableSwitchRow5 = tmp5(7355).TableSwitchRow;
    intl7 = tmp5(1125).intl;
    tmp10 = !muted;
    if (tmp10) {
      if (mobilePush == null) {
        mobilePush = false;
      }
      tmp10 = mobilePush;
    }
    const obj10 = { children: items2 };
    const obj11 = { hasIcons: false, children: items3 };
    items3[1] = closure_30(TableSwitchRow5, obj9);
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
    const obj3 = { helperText: intl2.string(tmp7(1125).t["8wbTQ6"]), hasIcons: false, children: closure_30(tmp7(6963).TableRow, obj4) };
    const TableRowGroup = tmp7(7047).TableRowGroup;
    intl2 = tmp7(1125).intl;
    obj4 = { label: formatResult, onPress: this.handleMutePress, arrow: !muted };
    const items = [closure_30(TableRowGroup, obj3, "mute"), ];
    let tmp11Result = null;
    const tmp11 = closure_30;
    if (muted) {
      const obj5 = { muteConfig, type: tmp7(11102).MuteSettingType.SERVER };
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
    const obj = { title: intl.string(intl8.t.O4TIvi), hasIcons: true, children: closure_30(TableRow, obj2) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    intl = intl8.intl;
    obj2 = { icon: closure_30(TableRowIcon, obj3), label: intl2.string(intl8.t.quib7R), onPress: this.handleAddOverride };
    TableRow = TableRow2.TableRow;
    obj3 = { IconComponent: PlusMediumIcon.PlusMediumIcon };
    TableRowIcon = TableRowIcon2.TableRowIcon;
    intl2 = intl8.intl;
    const items = [closure_30(TableRowGroup, obj, "override-header"), ];
    const obj4 = { hasIcons: true, children: overriddenChannels.map((item) => self.renderChannel(item)) };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    overriddenChannels = this.getOverriddenChannels();
    items[1] = closure_30(TableRowGroup2, obj4, "override-channels");
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
        const intl4 = tmp4(1125).intl;
        stringResult = intl4.string(tmp4(1125).t.fpKdS1);
      } else {
        let message_notifications = channelNotificationOptions[parent_id.id];
        if (message_notifications == null) {
          message_notifications = tmp.message_notifications;
        }
        if (constants2.ALL_MESSAGES === message_notifications) {
          const intl3 = tmp4(1125).intl;
          stringResult = intl3.string(tmp4(1125).t["n/bTaY"]);
        } else if (hybrid === message_notifications) {
          const intl2 = tmp4(1125).intl;
          stringResult = intl2.string(tmp4(1125).t.JzbSEY);
        } else if (constants2.ONLY_MENTIONS === message_notifications) {
          const intl = tmp4(1125).intl;
          stringResult = intl.string(tmp4(1125).t["6fQPhu"]);
        } else if (constants2.NO_MESSAGES === message_notifications) {
          const intl5 = tmp4(1125).intl;
          stringResult = intl5.string(tmp4(1125).t.CtVGyQ);
        }
      }
      const obj2 = {
        icon: closure_30(TableRowIcon, obj3),
        label: tmp4Result3.computeChannelName(parent_id, UserStore, RelationshipStore),
        onPress() {
            return self.handleChannelSelect(id.id);
          },
        subLabel: channelName,
        trailing: tmp8Result,
        arrow: true
      };
      const TableRow = tmp4(6963).TableRow;
      obj3 = { IconComponent: tmp4Result.getChannelIconComponent(parent_id) };
      TableRowIcon = tmp4(6971).TableRowIcon;
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
        tmp8Result = tmp8(tmp4(6963).TableRow.TrailingText, obj4);
      }
      return closure_30(TableRow, obj2, parent_id.id);
    }
  }
  render() {
    let items;
    let tmp4Result;
    const self = this;
    const guild = this.props.guild;
    const tmp = closure_34(this.context);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants5.HUB);
    }
    const Form = Form2.Form;
    const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
    if (hasItem) {
      const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
      const Stack2 = tmp5(6015).Stack;
      obj.children = closure_30(Stack2, obj2);
      tmp4Result = tmp4(Form, obj);
    } else {
      const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: items };
      const Stack = tmp5(6015).Stack;
      items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj.children = __initData(Stack, obj3);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedNotificationSettings(guildId) {
  let channelOverrides;
  let closure_2;
  let first;
  let items2;
  let shouldUseNewNotificationSystem;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp22;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(25);
  guildId = guildId.guildId;
  let obj2 = guildId(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore, , , ];
    let tmp7 = GuildStore;
    items[1] = GuildStore;
    let tmp8 = GuildCategoryStore;
    items[2] = GuildCategoryStore;
    let tmp9 = GuildMemberCountStore;
    items[3] = GuildMemberCountStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), unreadSetting: UserGuildSettingsStore.getGuildUnreadSetting(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
      return obj;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10);
  if (cResult[3] !== stateFromStoresObject) {
    const categories = stateFromStoresObject.categories;
    const tmp14 = _objectWithoutProperties;
    let tmp15 = shouldUseNewNotificationSystem;
    let tmp16 = _objectWithoutProperties(stateFromStoresObject, shouldUseNewNotificationSystem);
    importDefault = tmp16;
    cResult[3] = stateFromStoresObject;
    cResult[4] = categories;
    cResult[5] = tmp16;
    tmp13 = tmp16;
    tmp12 = categories;
  } else {
    tmp12 = cResult[4];
    importDefault = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(channel) {
      const type = channel.channel.type;
      const tmp = closure_1_9(type) || type === constants.GUILD_CATEGORY;
      return tmp;
    };
    cResult[6] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== tmp12) {
    const tmp20 = getFlattedChannelListDefault(tmp12._categories, tmp12, tmp17);
    cResult[7] = tmp12;
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[8];
  }
  dependencyMap = tmp18;
  const tmpResult3 = tmp(11063);
  shouldUseNewNotificationSystem = tmpResult3.useShouldUseNewNotificationSystem("NotificationSettingsModalNative");
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[9] = items1;
    tmp22 = items1;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] === tmp18) {
    if (cResult[11] === tmp13.channelOverrides) {
      let tmp24;
      let tmp25;
      if (cResult[12] === shouldUseNewNotificationSystem) {
        tmp24 = cResult[13];
        tmp25 = cResult[14];
      }
      const tmpResult4 = tmp(504);
      const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(tmp22, tmp24, tmp25);
      if (cResult[15] === stateFromStoresObject1) {
        if (cResult[16] === tmp18) {
          if (cResult[17] === guildId) {
            if (cResult[18] === navigation) {
              if (cResult[19] === tmp13) {
                let tmp27;
                let tmp34;
                let tmp37;
                if (cResult[20] === shouldUseNewNotificationSystem) {
                  tmp27 = cResult[21];
                }
                const _Symbol = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp36 = closure_30(tmp(5629).NavScrim, {});
                  cResult[22] = tmp36;
                  tmp34 = tmp36;
                } else {
                  tmp34 = cResult[22];
                }
                if (cResult[23] !== tmp27) {
                  const obj3 = { children: items2 };
                  items2 = [tmp27, tmp34];
                  const tmp40 = closure_31(closure_32, obj3);
                  cResult[23] = tmp27;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                } else {
                  tmp37 = cResult[24];
                }
                return tmp37;
              }
            }
          }
        }
      }
      const obj4 = { guildId, channels: tmp18, channelNotificationOptions: stateFromStoresObject1, navigation, shouldUseNewNotificationSystem };
      const merged = Object.assign(tmp13);
      const tmp33 = closure_30(NotificationSettings, obj4);
      cResult[15] = stateFromStoresObject1;
      cResult[16] = tmp18;
      cResult[17] = guildId;
      cResult[18] = navigation;
      cResult[19] = tmp13;
      cResult[20] = shouldUseNewNotificationSystem;
      cResult[21] = tmp33;
      tmp27 = tmp33;
    }
  }
  class L {
    constructor() {
      const obj = {};
      const tmp = shouldUseNewNotificationSystem;
      if (tmp) {
        const iter = closure_2[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          let tmp7 = channel;
          if (null != channelOverrides.channelOverrides[channel.id]) {
            if (metroImportAll.has(tmp7.type)) {
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
    }
  }
  const items3 = [shouldUseNewNotificationSystem, tmp18, tmp13.channelOverrides];
  cResult[10] = tmp18;
  cResult[11] = tmp13.channelOverrides;
  cResult[12] = shouldUseNewNotificationSystem;
  cResult[13] = L;
  cResult[14] = items3;
  tmp25 = items3;
  tmp24 = L;
}) : (function ConnectedNotificationSettings(guildId) {
  let channelOverrides;
  let items4;
  guildId = guildId.guildId;
  let shouldUseNewNotificationSystem;
  let obj = guildId(1503);
  navigation = obj.useNavigation();
  let obj2 = guildId(504);
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), unreadSetting: UserGuildSettingsStore.getGuildUnreadSetting(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  });
  const categories = stateFromStoresObject.categories;
  const tmp3 = _objectWithoutProperties(stateFromStoresObject, shouldUseNewNotificationSystem);
  dependencyMap = tmp3;
  const items1 = [categories];
  const memo = react.useMemo(() => getFlattedChannelListDefault(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    const tmp = closure_1_9(type) || type === constants.GUILD_CATEGORY;
    return tmp;
  }), items1);
  const obj3 = guildId(11063);
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
            if (metroImportAll.has(tmp7.type)) {
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
  items4 = [closure_30(NotificationSettings, obj6), closure_30(guildId(5629).NavScrim, {})];
  return closure_31(closure_32, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsModal() {
  let items1;
  let obj4;
  let props;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationSettingsModalStore];
    const fn = function n() {
      return props.getProps().guildId;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = getScreens();
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  let tmp11 = stateFromStores;
  if (stateFromStores == null) {
    tmp11 = closure_27;
  }
  if (cResult[3] !== tmp11) {
    const obj3 = { name: constants3.OVERVIEW, params: obj4 };
    const obj2 = { screens: tmp8, initialRouteStack: items1 };
    items1 = [obj3];
    obj4 = { guildId: tmp11 };
    const tmp15 = closure_30(Navigator2.Navigator, obj2);
    cResult[3] = tmp11;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function NotificationSettingsModal() {
  let items1;
  let props;
  const items = [NotificationSettingsModalStore];
  const obj = get_initialized;
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = react.useMemo(() => getScreens(), []);
  const obj2 = { screens: memo, initialRouteStack: items1 };
  const obj3 = { name: constants3.OVERVIEW, params: { guildId: stateFromStores } };
  const Navigator = Navigator2.Navigator;
  const tmp3 = closure_30;
  if (stateFromStores == null) {
    stateFromStores = closure_27;
  }
  items1 = [obj3];
  return tmp3(Navigator, obj2);
});
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default tmp7;
export { NotificationSettings };
