// Module ID: 16533
// Function ID: 128771
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 1352, 1348, 5070, 4051, 1838, 16241, 3767, 4325, 1849, 653, 33, 4130, 689, 4098, 10310, 1934, 5079, 5073, 4324, 10320, 10324, 10331, 7654, 1212, 7653, 5501, 5502, 4126, 1273, 3827, 1920, 10319, 5165, 10314, 5170, 11815, 3761, 4328, 4593, 4320, 7636, 4541, 10315, 3842, 1456, 566, 5071, 5448, 5087, 16534, 10309, 5517, 2]
// Exports: default

// Module 16533 (_isNativeReflectConstruct)
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "ME";
import closure_9 from "jsxProd";
import importAllResult from "getSystemLocale";
import { View } from "NotificationSettingsPresets";
import { isGuildReadableType } from "_callSuper";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_createForOfIteratorHelperLoose";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "TableRowGroupTitle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function ConnectedNotificationSettings(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1456);
  const navigation = obj.useNavigation();
  const items = [closure_19, closure_16, closure_14, closure_15];
  const stateFromStoresObject = guildId(566).useStateFromStoresObject(items, () => ({ guild: outer1_16.getGuild(guildId), suppressEveryone: outer1_19.isSuppressEveryoneEnabled(guildId), suppressRoles: outer1_19.isSuppressRolesEnabled(guildId), mobilePush: outer1_19.isMobilePushEnabled(guildId), muteEvents: outer1_19.isMuteScheduledEventsEnabled(guildId), muted: outer1_19.isMuted(guildId), muteConfig: outer1_19.getMuteConfig(guildId), messageNotifications: outer1_19.getMessageNotifications(guildId), channelOverrides: outer1_19.getChannelOverrides(guildId), categories: outer1_14.getCategories(guildId), guildMemberCount: outer1_15.getMemberCount(guildId), notifyHighlights: outer1_19.getNotifyHighlights(guildId) }));
  const categories = stateFromStoresObject.categories;
  const obj2 = guildId(566);
  const items1 = [categories];
  const memo = importAllResult.useMemo(() => categories(outer1_2[54])(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    let tmp = outer2_12(type);
    if (!tmp) {
      tmp = type === outer2_23.GUILD_CATEGORY;
    }
    return tmp;
  }), items1);
  const tmp3 = callback(stateFromStoresObject, closure_3);
  obj = {};
  obj = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: guildId(10315).useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  const items2 = [callback4(closure_35, obj), callback4(guildId(5448).NavScrim, {})];
  obj.children = items2;
  return callback5(closure_33, obj);
}
let closure_3 = ["categories"];
({ AnalyticEvents: closure_21, UserNotificationSettings: closure_22, ChannelTypes: closure_23, NotificationSettingsSections: closure_24, SettingsPaneTypes: closure_25, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_26, GuildFeatures: closure_27, HighlightSettings: closure_28, HelpdeskArticles: closure_29, EMPTY_STRING_SNOWFLAKE_ID: closure_30 } = ME);
({ jsx: closure_31, jsxs: closure_32, Fragment: closure_33 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { fontSize: 12, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, marginTop: 4 };
_createForOfIteratorHelperLoose.highlightsLearnMore = _createForOfIteratorHelperLoose;
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 24 };
_createForOfIteratorHelperLoose.separator = obj1;
_createForOfIteratorHelperLoose.formStack = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp5 = ((PureComponent) => {
  class NotificationSettings {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_5(this, apply);
      items1 = [...items];
      obj = outer1_8(apply);
      tmp2 = outer1_7;
      if (outer1_36()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleMutePress = () => {
        let guildId;
        let muted;
        ({ guildId, muted } = tmp2Result.props);
        if (muted) {
          let tmpResult = tmp(tmp2[24]);
          let obj = { muted: !muted };
          const NotificationLabel = NotificationSettings(tmp2[25]).NotificationLabel;
          const result = tmpResult.updateGuildNotificationSettings(guildId, obj, NotificationLabel.muted(!muted));
        } else {
          tmpResult = tmp(tmp2[21]);
          const _HermesInternal = HermesInternal;
          obj = { guildId };
          tmpResult.openLazy(NotificationSettings(tmp2[23])(tmp2[22], tmp2.paths), "muteSettings" + guildId, obj);
          const tmp4 = NotificationSettings(tmp2[23])(tmp2[22], tmp2.paths);
        }
      };
      tmp2Result.handleToggleChange = (arg0, arg1, NotificationLabel) => {
        let obj = outer2_1(outer2_2[24]);
        obj = { [arg0]: arg1 };
        const result = obj.updateGuildNotificationSettings(tmp2Result.props.guildId, obj, NotificationLabel);
      };
      tmp2Result.handleTypeChange = (message_notifications) => {
        let obj = outer2_1(outer2_2[24]);
        obj = { message_notifications };
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(tmp2Result.props.guildId, obj, NotificationLabel.notifications(message_notifications));
      };
      tmp2Result.handleAddOverride = () => {
        const props = tmp2Result.props;
        const navigation = props.navigation;
        navigation.push(outer2_24.ADD_OVERRIDE, { guildId: props.guildId });
      };
      tmp2Result.handleChannelSelect = (channelId) => {
        const navigation = tmp2Result.props.navigation;
        navigation.push(outer2_24.CHANNEL_OVERRIDE, { channelId });
      };
      return tmp2Result;
    }
  }
  callback3(NotificationSettings, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = outer1_1(outer1_2[26]);
      obj = { settings_type: "guild", destination_pane: outer1_25.GUILD_NOTIFICATION_SETTINGS };
      obj.trackWithMetadata(outer1_21.SETTINGS_PANE_VIEWED, obj);
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "renderServerSettings",
    value() {
      let guildMemberCount;
      let messageNotifications;
      let muted;
      let shouldUseNewNotificationSystem;
      const self = this;
      const props = this.props;
      ({ muted, guildMemberCount } = props);
      ({ messageNotifications, shouldUseNewNotificationSystem } = props);
      if (shouldUseNewNotificationSystem) {
        let obj = {};
        obj = {};
        const obj1 = { guildId: self.props.guildId };
        const items = [outer1_31(NotificationSettings(outer1_2[27]).NotificationSettingsGuildPresets, obj1), , ];
        const obj2 = {};
        const obj3 = { marginTop: 24 };
        obj2.style = obj3;
        obj2.guildId = self.props.guildId;
        items[1] = outer1_31(NotificationSettings(outer1_2[28]).NotificationSettingsGuildMessageNotification, obj2);
        const obj4 = {};
        const obj5 = { marginTop: 24 };
        obj4.style = obj5;
        obj4.guildId = self.props.guildId;
        items[2] = outer1_31(NotificationSettings(outer1_2[29]).NotificationSettingsGuildMessageUnread, obj4);
        obj.children = items;
        const items1 = [tmp2(outer1_11, obj), ];
        const obj6 = { style: tmp.separator };
        items1[1] = outer1_31(outer1_11, obj6);
        obj.children = items1;
        let tmp2Result = tmp2(outer1_33, obj);
      } else {
        obj = {};
        const intl = NotificationSettings(outer1_2[31]).intl;
        obj.title = intl.string(NotificationSettings(outer1_2[31]).t.lprV7V);
        obj.value = messageNotifications;
        obj.onChange = self.handleTypeChange;
        obj.hasIcons = false;
        const obj7 = {};
        const intl2 = NotificationSettings(outer1_2[31]).intl;
        obj7.label = intl2.string(NotificationSettings(outer1_2[31]).t["n/bTaY"]);
        obj7.disabled = muted;
        obj7.value = outer1_22.ALL_MESSAGES;
        let stringResult = null;
        if (null != guildMemberCount) {
          stringResult = null;
          if (guildMemberCount >= outer1_26) {
            const intl3 = NotificationSettings(outer1_2[31]).intl;
            stringResult = intl3.string(NotificationSettings(outer1_2[31]).t.Dh5p5j);
          }
        }
        obj7.subLabel = stringResult;
        const items2 = [outer1_31(NotificationSettings(outer1_2[32]).TableRadioRow, obj7), , ];
        const obj8 = {};
        const intl4 = NotificationSettings(outer1_2[31]).intl;
        obj8.label = intl4.format(NotificationSettings(outer1_2[31]).t.L2hmYy, {});
        obj8.value = outer1_22.ONLY_MENTIONS;
        obj8.disabled = muted;
        items2[1] = outer1_31(NotificationSettings(outer1_2[32]).TableRadioRow, obj8);
        const obj9 = {};
        const intl5 = NotificationSettings(outer1_2[31]).intl;
        obj9.label = intl5.string(NotificationSettings(outer1_2[31]).t.CtVGyQ);
        obj9.value = outer1_22.NO_MESSAGES;
        obj9.disabled = muted;
        items2[2] = outer1_31(NotificationSettings(outer1_2[32]).TableRadioRow, obj9);
        obj.children = items2;
        tmp2Result = tmp2(NotificationSettings(outer1_2[30]).TableRadioGroup, obj);
        const tmp5 = outer1_31;
      }
      return tmp2Result;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderNotificationOptions",
    value() {
      let closure_1;
      let mobilePush;
      let muteEvents;
      let muted;
      let suppressEveryone;
      let suppressRoles;
      const self = this;
      const props = this.props;
      ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: closure_1 } = props);
      let obj = {};
      obj = {};
      obj = { hasIcons: false };
      const obj1 = {};
      const intl = NotificationSettings(outer1_2[31]).intl;
      obj1.label = intl.format(NotificationSettings(outer1_2[31]).t.OWiWAp, {});
      obj1.value = null != suppressEveryone && suppressEveryone;
      obj1.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        self.handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
      };
      const items = [outer1_31(NotificationSettings(outer1_2[34]).TableSwitchRow, obj1), , ];
      const obj2 = {};
      const intl2 = NotificationSettings(outer1_2[31]).intl;
      obj2.label = intl2.string(NotificationSettings(outer1_2[31]).t["O/QdoD"]);
      obj2.value = null != suppressRoles && suppressRoles;
      obj2.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        self.handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      };
      items[1] = outer1_31(NotificationSettings(outer1_2[34]).TableSwitchRow, obj2);
      const obj3 = { disabled: muted };
      const intl3 = NotificationSettings(outer1_2[31]).intl;
      obj3.label = intl3.string(NotificationSettings(outer1_2[31]).t.gPuteJ);
      let tmp8 = muted;
      if (!muted) {
        tmp8 = props.notifyHighlights === outer1_28.DISABLED;
      }
      obj3.value = tmp8;
      obj3.onValueChange = function onValueChange(arg0) {
        let obj = outer2_1(outer2_2[24]);
        obj = { notify_highlights: arg0 ? tmp2.DISABLED : tmp2.ENABLED };
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(closure_1, obj, NotificationLabel.highlights(!arg0));
      };
      items[2] = outer1_31(NotificationSettings(outer1_2[34]).TableSwitchRow, obj3);
      obj.children = items;
      const items1 = [outer1_32(NotificationSettings(outer1_2[33]).TableRowGroup, obj), , ];
      const obj4 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 } };
      const intl4 = NotificationSettings(outer1_2[31]).intl;
      obj4.children = intl4.string(NotificationSettings(outer1_2[31]).t["Vw/Xn8"]);
      items1[1] = outer1_31(NotificationSettings(outer1_2[35]).Text, obj4);
      const obj5 = {
        style: outer1_34(this.context).highlightsLearnMore,
        accessibilityRole: "link",
        onPress() {
          const obj = outer2_1(outer2_2[37]);
          return obj.openURL(outer2_1(outer2_2[38]).getArticleURL(outer2_29.HIGHLIGHTS));
        }
      };
      const intl5 = NotificationSettings(outer1_2[31]).intl;
      obj5.children = intl5.string(NotificationSettings(outer1_2[31]).t.PRBn9K);
      items1[2] = outer1_31(NotificationSettings(outer1_2[36]).LegacyText, obj5);
      obj.children = items1;
      const items2 = [outer1_32(outer1_11, obj), ];
      const obj6 = { hasIcons: false };
      const obj7 = {};
      const intl6 = NotificationSettings(outer1_2[31]).intl;
      obj7.label = intl6.string(NotificationSettings(outer1_2[31]).t.ONG3Yz);
      obj7.value = null != muteEvents && muteEvents;
      obj7.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        self.handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      };
      const items3 = [outer1_31(NotificationSettings(outer1_2[34]).TableSwitchRow, obj7), ];
      const obj8 = { disabled: muted };
      const intl7 = NotificationSettings(outer1_2[31]).intl;
      obj8.label = intl7.string(NotificationSettings(outer1_2[31]).t.h1DL66);
      obj8.value = !muted && null != mobilePush && mobilePush;
      obj8.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = NotificationSettings(outer2_2[25]).NotificationLabel;
        self.handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
      };
      items3[1] = outer1_31(NotificationSettings(outer1_2[34]).TableSwitchRow, obj8);
      obj6.children = items3;
      items2[1] = outer1_32(NotificationSettings(outer1_2[33]).TableRowGroup, obj6);
      obj.children = items2;
      return outer1_32(outer1_33, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderMuteSection",
    value() {
      let guild;
      let muteConfig;
      let muted;
      const self = this;
      const props = this.props;
      ({ muted, muteConfig, guild } = props);
      if (props.shouldUseNewNotificationSystem) {
        let tmp18 = null;
        if (muted) {
          let obj = {};
          const intl3 = NotificationSettings(outer1_2[31]).intl;
          obj.title = intl3.string(NotificationSettings(outer1_2[31]).t.ZSkXJY);
          obj.subtitle = NotificationSettings(outer1_2[39]).getMuteBannerSubtitleFromConfig(muteConfig);
          obj = { marginBottom: 16 };
          obj.style = obj;
          obj.onPressUnmute = self.handleMutePress;
          tmp18 = outer1_31(NotificationSettings(outer1_2[39]).NotificationSettingsMuteBanner, obj);
          const obj7 = NotificationSettings(outer1_2[39]);
        }
        return tmp18;
      } else {
        const intl = NotificationSettings(outer1_2[31]).intl;
        const format = intl.format;
        const t = NotificationSettings(outer1_2[31]).t;
        if (muted) {
          const obj1 = {};
          let name;
          if (null != guild) {
            name = guild.name;
          }
          obj1.name = name;
          let formatResult = format(t.e8hzDQ, obj1);
        } else {
          obj = {};
          let name1;
          if (null != guild) {
            name1 = guild.name;
          }
          obj.name = name1;
          formatResult = format(t["J+7D9E"], obj);
        }
        const obj2 = {};
        const intl2 = NotificationSettings(outer1_2[31]).intl;
        obj2.helperText = intl2.string(NotificationSettings(outer1_2[31]).t["8wbTQ6"]);
        obj2.hasIcons = false;
        const obj3 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
        obj2.children = outer1_31(NotificationSettings(outer1_2[40]).TableRow, obj3);
        const items = [outer1_31(NotificationSettings(outer1_2[33]).TableRowGroup, obj2, "mute"), ];
        let tmp12 = null;
        if (muted) {
          const obj4 = { muteConfig, type: NotificationSettings(outer1_2[41]).MuteSettingType.SERVER };
          tmp12 = outer1_31(outer1_1(outer1_2[41]), obj4, "muted-until");
          const tmp16 = outer1_1(outer1_2[41]);
        }
        items[1] = tmp12;
        return items;
      }
    }
  };
  items[4] = {
    key: "renderChannels",
    value() {
      const self = this;
      let obj = {};
      const intl = NotificationSettings(outer1_2[31]).intl;
      obj.title = intl.string(NotificationSettings(outer1_2[31]).t.O4TIvi);
      obj.hasIcons = true;
      obj = {};
      obj = { IconComponent: NotificationSettings(outer1_2[43]).PlusMediumIcon };
      obj.icon = outer1_31(NotificationSettings(outer1_2[42]).TableRowIcon, obj);
      const intl2 = NotificationSettings(outer1_2[31]).intl;
      obj.label = intl2.string(NotificationSettings(outer1_2[31]).t.quib7R);
      obj.onPress = this.handleAddOverride;
      obj.children = outer1_31(NotificationSettings(outer1_2[40]).TableRow, obj);
      const items = [outer1_31(NotificationSettings(outer1_2[33]).TableRowGroup, obj, "override-header"), ];
      const obj1 = { hasIcons: true };
      const overriddenChannels = this.getOverriddenChannels();
      obj1.children = overriddenChannels.map((arg0) => self.renderChannel(arg0));
      items[1] = outer1_31(NotificationSettings(outer1_2[33]).TableRowGroup, obj1, "override-channels");
      return items;
    }
  };
  items[5] = {
    key: "renderChannel",
    value(parent_id) {
      let self = this;
      self = this;
      let closure_1 = parent_id;
      if (null != parent_id) {
        let channel;
        if (null != parent_id.parent_id) {
          channel = outer1_13.getChannel(parent_id.parent_id);
        }
        let obj = NotificationSettings(outer1_2[44]);
        if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
          const intl3 = NotificationSettings(outer1_2[31]).intl;
          let stringResult = intl3.string(NotificationSettings(outer1_2[31]).t.fpKdS1);
        } else {
          const message_notifications = tmp.message_notifications;
          if (outer1_22.ALL_MESSAGES === message_notifications) {
            const intl2 = NotificationSettings(outer1_2[31]).intl;
            stringResult = intl2.string(NotificationSettings(outer1_2[31]).t["n/bTaY"]);
          } else if (outer1_22.ONLY_MENTIONS === message_notifications) {
            const intl = NotificationSettings(outer1_2[31]).intl;
            stringResult = intl.string(NotificationSettings(outer1_2[31]).t["6fQPhu"]);
          } else if (outer1_22.NO_MESSAGES === message_notifications) {
            const intl4 = NotificationSettings(outer1_2[31]).intl;
            stringResult = intl4.string(NotificationSettings(outer1_2[31]).t.CtVGyQ);
          }
        }
        if (self.props.shouldUseNewNotificationSystem) {
          let obj1 = NotificationSettings(outer1_2[45]);
          const unreadSetting = outer1_19.resolveUnreadSetting(parent_id);
          stringResult = obj1.presetName(NotificationSettings(outer1_2[45]).presetFromSettings(unreadSetting, outer1_19.resolvedMessageNotifications(parent_id)));
          const obj3 = NotificationSettings(outer1_2[45]);
        }
        obj = {};
        obj = { IconComponent: NotificationSettings(outer1_2[46]).getChannelIconComponent(parent_id) };
        obj.icon = outer1_31(NotificationSettings(outer1_2[42]).TableRowIcon, obj);
        const obj6 = NotificationSettings(outer1_2[46]);
        const tmp20 = outer1_31;
        obj.label = NotificationSettings(outer1_2[47]).computeChannelName(parent_id, outer1_20, outer1_18);
        obj.onPress = function onPress() {
          return self.handleChannelSelect(parent_id.id);
        };
        let channelName = null;
        if (null != channel) {
          channelName = NotificationSettings(outer1_2[47]).computeChannelName(channel, outer1_20, outer1_18);
          const obj8 = NotificationSettings(outer1_2[47]);
        }
        obj.subLabel = channelName;
        let tmp31;
        if (null != stringResult) {
          obj1 = { text: stringResult };
          tmp31 = outer1_31(NotificationSettings(outer1_2[40]).TableRow.TrailingText, obj1);
        }
        obj.trailing = tmp31;
        obj.arrow = true;
        return tmp20(NotificationSettings(outer1_2[40]).TableRow, obj, parent_id.id);
      }
    }
  };
  items[6] = {
    key: "render",
    value() {
      const self = this;
      const guild = this.props.guild;
      const tmp = outer1_34(this.context);
      if (null != guild) {
        const features = guild.features;
        if (features.has(outer1_27.HUB)) {
          let obj = {};
          obj = { paddingTop: 16 };
          obj.contentContainerStyle = obj;
          const obj1 = { spacing: outer1_1(outer1_2[20]).space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
          obj.children = outer1_31(NotificationSettings(outer1_2[49]).Stack, obj1);
          let tmp3 = outer1_31(NotificationSettings(outer1_2[48]).Form, obj);
        }
        return tmp3;
      }
      obj = { contentContainerStyle: { paddingTop: 16 } };
      const obj2 = { spacing: outer1_1(outer1_2[20]).space.PX_24, style: tmp.formStack };
      const items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj2.children = items;
      obj.children = outer1_32(NotificationSettings(outer1_2[49]).Stack, obj2);
      tmp3 = outer1_31(NotificationSettings(outer1_2[48]).Form, obj);
    }
  };
  items[7] = {
    key: "getOverriddenChannels",
    value() {
      const props = this.props;
      const channels = props.channels;
      let obj = NotificationSettings(outer1_2[50]);
      obj = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
      const set = new Set(obj.filterOverrides(props.channelOverrides, obj));
      const mapped = channels.map((channel) => {
        channel = channel.channel;
        let tmp = null;
        if (set.has(channel.id)) {
          tmp = channel;
        }
        return tmp;
      });
      return mapped.filter((arg0) => arg0);
    }
  };
  return callback2(NotificationSettings, items);
})(importAllResult.PureComponent);
let closure_35 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_defineProperties").fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  let obj = require(566) /* initialize */;
  const items = [closure_17];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_17.getProps().guildId);
  const memo = importAllResult.useMemo(() => (function getScreens() {
    let obj = {};
    obj = { headerLeft: outer2_0(outer2_2[56]).getHeaderCloseButton(outer2_1(outer2_2[24]).close) };
    const intl = outer2_0(outer2_2[31]).intl;
    obj.title = intl.string(outer2_0(outer2_2[31]).t.h850Ss);
    obj.render = function render(guildId) {
      return outer3_31(outer3_37, { guildId: guildId.guildId });
    };
    obj[outer2_24.OVERVIEW] = obj;
    obj = {};
    const intl2 = outer2_0(outer2_2[31]).intl;
    obj.title = intl2.string(outer2_0(outer2_2[31]).t.s7vIQT);
    const obj3 = outer2_0(outer2_2[56]);
    obj.headerLeft = outer2_0(outer2_2[56]).getHeaderBackButton();
    obj.render = function render(guildId, navigation) {
      return outer3_31(outer3_1(outer3_2[57]), { guildId: guildId.guildId, navigation });
    };
    obj[outer2_24.ADD_OVERRIDE] = obj;
    const obj1 = {};
    const obj5 = outer2_0(outer2_2[56]);
    obj1.headerLeft = outer2_0(outer2_2[56]).getHeaderBackButton();
    const intl3 = outer2_0(outer2_2[31]).intl;
    obj1.title = intl3.string(outer2_0(outer2_2[31]).t.h850Ss);
    obj1.render = function render(channelId) {
      return outer3_31(outer3_1(outer3_2[58]), { channelId: channelId.channelId, inGuildContext: true });
    };
    obj[outer2_24.CHANNEL_OVERRIDE] = obj1;
    return obj;
  })(), []);
  obj = { screens: memo };
  obj = { name: constants.OVERVIEW };
  let obj1 = {};
  if (null == stateFromStores) {
    stateFromStores = closure_30;
  }
  obj1.guildId = stateFromStores;
  obj.params = obj1;
  const items1 = [obj];
  obj.initialRouteStack = items1;
  return closure_31(require(5517) /* NavigationStack */.Navigator, obj);
};
export const NotificationSettings = tmp5;
