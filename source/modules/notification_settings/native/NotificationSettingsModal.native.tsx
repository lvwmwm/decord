// Module ID: 16346
// Function ID: 126139
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16346 (_isNativeReflectConstruct)
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
  const arg1 = guildId;
  let obj = arg1(dependencyMap[52]);
  const navigation = obj.useNavigation();
  const items = [closure_19, closure_16, closure_14, closure_15];
  const stateFromStoresObject = arg1(dependencyMap[53]).useStateFromStoresObject(items, () => ({ guild: guild.getGuild(guildId), suppressEveryone: store.isSuppressEveryoneEnabled(guildId), suppressRoles: store.isSuppressRolesEnabled(guildId), mobilePush: store.isMobilePushEnabled(guildId), muteEvents: store.isMuteScheduledEventsEnabled(guildId), muted: store.isMuted(guildId), muteConfig: store.getMuteConfig(guildId), messageNotifications: store.getMessageNotifications(guildId), channelOverrides: store.getChannelOverrides(guildId), categories: categories.getCategories(guildId), guildMemberCount: memberCount.getMemberCount(guildId), notifyHighlights: store.getNotifyHighlights(guildId) }));
  const categories = stateFromStoresObject.categories;
  const importDefault = categories;
  const obj2 = arg1(dependencyMap[53]);
  const items1 = [categories];
  const memo = importAllResult.useMemo(() => categories(closure_2[54])(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    let tmp = callback(type);
    if (!tmp) {
      tmp = type === constants.GUILD_CATEGORY;
    }
    return tmp;
  }), items1);
  const tmp3 = callback(stateFromStoresObject, closure_3);
  obj = {};
  obj = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: arg1(dependencyMap[50]).useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  const items2 = [callback4(tmp5, obj), callback4(arg1(dependencyMap[55]).NavScrim, {})];
  obj.children = items2;
  return callback5(closure_33, obj);
}
let closure_3 = [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044403913133906866];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const View = arg1(dependencyMap[7]).View;
const isGuildReadableType = arg1(dependencyMap[8]).isGuildReadableType;
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
({ AnalyticEvents: closure_21, UserNotificationSettings: closure_22, ChannelTypes: closure_23, NotificationSettingsSections: closure_24, SettingsPaneTypes: closure_25, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_26, GuildFeatures: closure_27, HighlightSettings: closure_28, HelpdeskArticles: closure_29, EMPTY_STRING_SNOWFLAKE_ID: closure_30 } = arg1(dependencyMap[17]));
const tmp3 = arg1(dependencyMap[17]);
({ jsx: closure_31, jsxs: closure_32, Fragment: closure_33 } = arg1(dependencyMap[18]));
let obj = arg1(dependencyMap[19]);
obj = {};
obj = { th: "\u{1F468}\u{1F3FB}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", ss: true, A: null, color: importDefault(dependencyMap[20]).unsafe_rawColors.BLUE_345 };
obj.highlightsLearnMore = obj;
const tmp4 = arg1(dependencyMap[18]);
obj.separator = { backgroundColor: importDefault(dependencyMap[20]).colors.BORDER_SUBTLE };
const obj1 = { backgroundColor: importDefault(dependencyMap[20]).colors.BORDER_SUBTLE };
obj.formStack = { paddingHorizontal: importDefault(dependencyMap[20]).modules.mobile.TABLE_ROW_PADDING };
let closure_34 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class NotificationSettings {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, NotificationSettings);
      items1 = [...items];
      obj = closure_8(NotificationSettings);
      tmp2 = closure_7;
      if (closure_36()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      NotificationSettings = tmp2Result;
      tmp2Result.handleMutePress = () => {
        let guildId;
        let muted;
        ({ guildId, muted } = tmp2Result.props);
        if (muted) {
          let tmpResult = tmp(tmp2[24]);
          let obj = { muted: !muted };
          const NotificationLabel = tmp2Result(tmp2[25]).NotificationLabel;
          const result = tmpResult.updateGuildNotificationSettings(guildId, obj, NotificationLabel.muted(!muted));
        } else {
          tmpResult = tmp(tmp2[21]);
          const _HermesInternal = HermesInternal;
          obj = { guildId };
          tmpResult.openLazy(tmp2Result(tmp2[23])(tmp2[22], tmp2.paths), "muteSettings" + guildId, obj);
          const tmp4 = tmp2Result(tmp2[23])(tmp2[22], tmp2.paths);
        }
      };
      tmp2Result.handleToggleChange = (arg0, arg1, NotificationLabel) => {
        let obj = callback(closure_2[24]);
        obj = { [arg0]: arg1 };
        const result = obj.updateGuildNotificationSettings(tmp2Result.props.guildId, obj, NotificationLabel);
      };
      tmp2Result.handleTypeChange = (message_notifications) => {
        let obj = callback(closure_2[24]);
        obj = { message_notifications };
        const NotificationLabel = tmp2Result(closure_2[25]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(tmp2Result.props.guildId, obj, NotificationLabel.notifications(message_notifications));
      };
      tmp2Result.handleAddOverride = () => {
        const props = tmp2Result.props;
        const navigation = props.navigation;
        navigation.push(constants.ADD_OVERRIDE, { guildId: props.guildId });
      };
      tmp2Result.handleChannelSelect = (channelId) => {
        const navigation = tmp2Result.props.navigation;
        navigation.push(constants.CHANNEL_OVERRIDE, { channelId });
      };
      return tmp2Result;
    }
  }
  const arg1 = NotificationSettings;
  callback3(NotificationSettings, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = callback(closure_2[26]);
      obj = { settings_type: "guild", destination_pane: constants3.GUILD_NOTIFICATION_SETTINGS };
      obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
    }
  };
  const items = [obj, , , , , , , ];
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
        const items = [callback4(NotificationSettings(closure_2[27]).NotificationSettingsGuildPresets, obj1), , ];
        const obj2 = {};
        const obj3 = { marginTop: 24 };
        obj2.style = obj3;
        obj2.guildId = self.props.guildId;
        items[1] = callback4(NotificationSettings(closure_2[28]).NotificationSettingsGuildMessageNotification, obj2);
        const obj4 = {};
        const obj5 = { marginTop: 24 };
        obj4.style = obj5;
        obj4.guildId = self.props.guildId;
        items[2] = callback4(NotificationSettings(closure_2[29]).NotificationSettingsGuildMessageUnread, obj4);
        obj.children = items;
        const items1 = [tmp2(closure_11, obj), ];
        const obj6 = { style: tmp.separator };
        items1[1] = callback4(closure_11, obj6);
        obj.children = items1;
        let tmp2Result = tmp2(closure_33, obj);
      } else {
        obj = {};
        const intl = NotificationSettings(closure_2[31]).intl;
        obj.title = intl.string(NotificationSettings(closure_2[31]).t.lprV7V);
        obj.value = messageNotifications;
        obj.onChange = self.handleTypeChange;
        obj.hasIcons = false;
        const obj7 = {};
        const intl2 = NotificationSettings(closure_2[31]).intl;
        obj7.label = intl2.string(NotificationSettings(closure_2[31]).t.n/bTaY);
        obj7.disabled = muted;
        obj7.value = constants2.ALL_MESSAGES;
        let stringResult = null;
        if (null != guildMemberCount) {
          stringResult = null;
          if (guildMemberCount >= closure_26) {
            const intl3 = NotificationSettings(closure_2[31]).intl;
            stringResult = intl3.string(NotificationSettings(closure_2[31]).t.Dh5p5j);
          }
        }
        obj7.subLabel = stringResult;
        const items2 = [callback4(NotificationSettings(closure_2[32]).TableRadioRow, obj7), , ];
        const obj8 = {};
        const intl4 = NotificationSettings(closure_2[31]).intl;
        obj8.label = intl4.format(NotificationSettings(closure_2[31]).t.L2hmYy, {});
        obj8.value = constants2.ONLY_MENTIONS;
        obj8.disabled = muted;
        items2[1] = callback4(NotificationSettings(closure_2[32]).TableRadioRow, obj8);
        const obj9 = {};
        const intl5 = NotificationSettings(closure_2[31]).intl;
        obj9.label = intl5.string(NotificationSettings(closure_2[31]).t.CtVGyQ);
        obj9.value = constants2.NO_MESSAGES;
        obj9.disabled = muted;
        items2[2] = callback4(NotificationSettings(closure_2[32]).TableRadioRow, obj9);
        obj.children = items2;
        tmp2Result = tmp2(NotificationSettings(closure_2[30]).TableRadioGroup, obj);
        const tmp5 = callback4;
      }
      return tmp2Result;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderNotificationOptions",
    value() {
      let mobilePush;
      let muteEvents;
      let muted;
      let suppressEveryone;
      let suppressRoles;
      const NotificationSettings = this;
      const props = this.props;
      ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: closure_1 } = props);
      let obj = {};
      obj = {};
      obj = { hasIcons: false };
      const obj1 = {};
      const intl = NotificationSettings(closure_2[31]).intl;
      obj1.label = intl.format(NotificationSettings(closure_2[31]).t.OWiWAp, {});
      obj1.value = null != suppressEveryone && suppressEveryone;
      obj1.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = self(closure_2[25]).NotificationLabel;
        self.handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
      };
      const items = [callback4(NotificationSettings(closure_2[34]).TableSwitchRow, obj1), , ];
      const obj2 = {};
      const intl2 = NotificationSettings(closure_2[31]).intl;
      obj2.label = intl2.string(NotificationSettings(closure_2[31]).t.O/QdoD);
      obj2.value = null != suppressRoles && suppressRoles;
      obj2.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = self(closure_2[25]).NotificationLabel;
        self.handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      };
      items[1] = callback4(NotificationSettings(closure_2[34]).TableSwitchRow, obj2);
      const obj3 = { disabled: muted };
      const intl3 = NotificationSettings(closure_2[31]).intl;
      obj3.label = intl3.string(NotificationSettings(closure_2[31]).t.gPuteJ);
      let tmp8 = muted;
      if (!muted) {
        tmp8 = props.notifyHighlights === constants5.DISABLED;
      }
      obj3.value = tmp8;
      obj3.onValueChange = function onValueChange(arg0) {
        let obj = callback(closure_2[24]);
        obj = { notify_highlights: arg0 ? tmp2.DISABLED : tmp2.ENABLED };
        const NotificationLabel = self(closure_2[25]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(callback, obj, NotificationLabel.highlights(!arg0));
      };
      items[2] = callback4(NotificationSettings(closure_2[34]).TableSwitchRow, obj3);
      obj.children = items;
      const items1 = [closure_32(NotificationSettings(closure_2[33]).TableRowGroup, obj), , ];
      const obj4 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", style: { marginTop: 8 } };
      const intl4 = NotificationSettings(closure_2[31]).intl;
      obj4.children = intl4.string(NotificationSettings(closure_2[31]).t.Vw/Xn8);
      items1[1] = callback4(NotificationSettings(closure_2[35]).Text, obj4);
      const obj5 = {
        style: callback6(this.context).highlightsLearnMore,
        accessibilityRole: "link",
        onPress() {
          const obj = callback(closure_2[37]);
          return obj.openURL(callback(closure_2[38]).getArticleURL(constants.HIGHLIGHTS));
        }
      };
      const intl5 = NotificationSettings(closure_2[31]).intl;
      obj5.children = intl5.string(NotificationSettings(closure_2[31]).t.PRBn9K);
      items1[2] = callback4(NotificationSettings(closure_2[36]).LegacyText, obj5);
      obj.children = items1;
      const items2 = [closure_32(closure_11, obj), ];
      const obj6 = { hasIcons: false };
      const obj7 = {};
      const intl6 = NotificationSettings(closure_2[31]).intl;
      obj7.label = intl6.string(NotificationSettings(closure_2[31]).t.ONG3Yz);
      obj7.value = null != muteEvents && muteEvents;
      obj7.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = self(closure_2[25]).NotificationLabel;
        self.handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      };
      const items3 = [callback4(NotificationSettings(closure_2[34]).TableSwitchRow, obj7), ];
      const obj8 = { disabled: muted };
      const intl7 = NotificationSettings(closure_2[31]).intl;
      obj8.label = intl7.string(NotificationSettings(closure_2[31]).t.h1DL66);
      obj8.value = !muted && null != mobilePush && mobilePush;
      obj8.onValueChange = function onValueChange(arg0) {
        const NotificationLabel = self(closure_2[25]).NotificationLabel;
        self.handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
      };
      items3[1] = callback4(NotificationSettings(closure_2[34]).TableSwitchRow, obj8);
      obj6.children = items3;
      items2[1] = closure_32(NotificationSettings(closure_2[33]).TableRowGroup, obj6);
      obj.children = items2;
      return closure_32(closure_33, obj);
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
          const intl3 = NotificationSettings(closure_2[31]).intl;
          obj.title = intl3.string(NotificationSettings(closure_2[31]).t.ZSkXJY);
          obj.subtitle = NotificationSettings(closure_2[39]).getMuteBannerSubtitleFromConfig(muteConfig);
          obj = { marginBottom: 16 };
          obj.style = obj;
          obj.onPressUnmute = self.handleMutePress;
          tmp18 = callback4(NotificationSettings(closure_2[39]).NotificationSettingsMuteBanner, obj);
          const obj7 = NotificationSettings(closure_2[39]);
        }
        return tmp18;
      } else {
        const intl = NotificationSettings(closure_2[31]).intl;
        const format = intl.format;
        const t = NotificationSettings(closure_2[31]).t;
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
          formatResult = format(t.J+7D9E, obj);
        }
        const obj2 = {};
        const intl2 = NotificationSettings(closure_2[31]).intl;
        obj2.helperText = intl2.string(NotificationSettings(closure_2[31]).t.8wbTQ6);
        obj2.hasIcons = false;
        const obj3 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
        obj2.children = callback4(NotificationSettings(closure_2[40]).TableRow, obj3);
        const items = [callback4(NotificationSettings(closure_2[33]).TableRowGroup, obj2, "mute"), ];
        let tmp12 = null;
        if (muted) {
          const obj4 = { muteConfig, type: NotificationSettings(closure_2[41]).MuteSettingType.SERVER };
          tmp12 = callback4(callback(closure_2[41]), obj4, "muted-until");
          const tmp16 = callback(closure_2[41]);
        }
        items[1] = tmp12;
        return items;
      }
    }
  };
  items[4] = {
    key: "renderChannels",
    value() {
      const NotificationSettings = this;
      let obj = {};
      const intl = NotificationSettings(closure_2[31]).intl;
      obj.title = intl.string(NotificationSettings(closure_2[31]).t.O4TIvi);
      obj.hasIcons = true;
      obj = {};
      obj = { IconComponent: NotificationSettings(closure_2[43]).PlusMediumIcon };
      obj.icon = callback4(NotificationSettings(closure_2[42]).TableRowIcon, obj);
      const intl2 = NotificationSettings(closure_2[31]).intl;
      obj.label = intl2.string(NotificationSettings(closure_2[31]).t.quib7R);
      obj.onPress = this.handleAddOverride;
      obj.children = callback4(NotificationSettings(closure_2[40]).TableRow, obj);
      const items = [callback4(NotificationSettings(closure_2[33]).TableRowGroup, obj, "override-header"), ];
      const obj1 = { hasIcons: true };
      const overriddenChannels = this.getOverriddenChannels();
      obj1.children = overriddenChannels.map((arg0) => self.renderChannel(arg0));
      items[1] = callback4(NotificationSettings(closure_2[33]).TableRowGroup, obj1, "override-channels");
      return items;
    }
  };
  items[5] = {
    key: "renderChannel",
    value(parent_id) {
      const self = this;
      const NotificationSettings = this;
      if (null != parent_id) {
        let channel;
        if (null != parent_id.parent_id) {
          channel = channel.getChannel(parent_id.parent_id);
        }
        let obj = NotificationSettings(closure_2[44]);
        if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
          const intl3 = NotificationSettings(closure_2[31]).intl;
          let stringResult = intl3.string(NotificationSettings(closure_2[31]).t.fpKdS1);
        } else {
          const message_notifications = tmp.message_notifications;
          if (constants2.ALL_MESSAGES === message_notifications) {
            const intl2 = NotificationSettings(closure_2[31]).intl;
            stringResult = intl2.string(NotificationSettings(closure_2[31]).t.n/bTaY);
          } else if (constants2.ONLY_MENTIONS === message_notifications) {
            const intl = NotificationSettings(closure_2[31]).intl;
            stringResult = intl.string(NotificationSettings(closure_2[31]).t.6fQPhu);
          } else if (constants2.NO_MESSAGES === message_notifications) {
            const intl4 = NotificationSettings(closure_2[31]).intl;
            stringResult = intl4.string(NotificationSettings(closure_2[31]).t.CtVGyQ);
          }
        }
        if (self.props.shouldUseNewNotificationSystem) {
          let obj1 = NotificationSettings(closure_2[45]);
          const unreadSetting = closure_19.resolveUnreadSetting(parent_id);
          stringResult = obj1.presetName(NotificationSettings(closure_2[45]).presetFromSettings(unreadSetting, closure_19.resolvedMessageNotifications(parent_id)));
          const obj3 = NotificationSettings(closure_2[45]);
        }
        obj = {};
        obj = { IconComponent: NotificationSettings(closure_2[46]).getChannelIconComponent(parent_id) };
        obj.icon = callback4(NotificationSettings(closure_2[42]).TableRowIcon, obj);
        const obj6 = NotificationSettings(closure_2[46]);
        const tmp20 = callback4;
        obj.label = NotificationSettings(closure_2[47]).computeChannelName(parent_id, closure_20, closure_18);
        obj.onPress = function onPress() {
          return self.handleChannelSelect(arg0.id);
        };
        let channelName = null;
        if (null != channel) {
          channelName = NotificationSettings(closure_2[47]).computeChannelName(channel, closure_20, closure_18);
          const obj8 = NotificationSettings(closure_2[47]);
        }
        obj.subLabel = channelName;
        let tmp31;
        if (null != stringResult) {
          obj1 = { text: stringResult };
          tmp31 = callback4(NotificationSettings(closure_2[40]).TableRow.TrailingText, obj1);
        }
        obj.trailing = tmp31;
        obj.arrow = true;
        return tmp20(NotificationSettings(closure_2[40]).TableRow, obj, parent_id.id);
      }
    }
  };
  items[6] = {
    key: "render",
    value() {
      const self = this;
      const guild = this.props.guild;
      const tmp = callback6(this.context);
      if (null != guild) {
        const features = guild.features;
        if (features.has(constants4.HUB)) {
          let obj = {};
          obj = { paddingTop: 16 };
          obj.contentContainerStyle = obj;
          const obj1 = { spacing: callback(closure_2[20]).space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
          obj.children = callback4(NotificationSettings(closure_2[49]).Stack, obj1);
          let tmp3 = callback4(NotificationSettings(closure_2[48]).Form, obj);
        }
        return tmp3;
      }
      obj = { contentContainerStyle: { paddingTop: 16 } };
      const obj2 = { spacing: callback(closure_2[20]).space.PX_24, style: tmp.formStack };
      const items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj2.children = items;
      obj.children = callback5(NotificationSettings(closure_2[49]).Stack, obj2);
      tmp3 = callback4(NotificationSettings(closure_2[48]).Form, obj);
    }
  };
  items[7] = {
    key: "getOverriddenChannels",
    value() {
      const props = this.props;
      const channels = props.channels;
      let obj = NotificationSettings(closure_2[50]);
      obj = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
      const NotificationSettings = new Set(obj.filterOverrides(props.channelOverrides, obj));
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
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[51]).ThemeContext;
const obj2 = { paddingHorizontal: importDefault(dependencyMap[20]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  let obj = arg1(dependencyMap[53]);
  const items = [closure_17];
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = importAllResult.useMemo(() => function getScreens() {
    let obj = {};
    obj = { headerLeft: callback(closure_2[56]).getHeaderCloseButton(callback2(closure_2[24]).close) };
    const intl = callback(closure_2[31]).intl;
    obj.title = intl.string(callback(closure_2[31]).t.h850Ss);
    obj.render = function render(guildId) {
      return callback2(closure_37, { guildId: guildId.guildId });
    };
    obj[constants.OVERVIEW] = obj;
    obj = {};
    const intl2 = callback(closure_2[31]).intl;
    obj.title = intl2.string(callback(closure_2[31]).t.s7vIQT);
    const obj3 = callback(closure_2[56]);
    obj.headerLeft = callback(closure_2[56]).getHeaderBackButton();
    obj.render = function render(guildId, navigation) {
      return callback2(callback(closure_2[57]), { guildId: guildId.guildId, navigation });
    };
    obj[constants.ADD_OVERRIDE] = obj;
    const obj1 = {};
    const obj5 = callback(closure_2[56]);
    obj1.headerLeft = callback(closure_2[56]).getHeaderBackButton();
    const intl3 = callback(closure_2[31]).intl;
    obj1.title = intl3.string(callback(closure_2[31]).t.h850Ss);
    obj1.render = function render(channelId) {
      return callback2(callback(closure_2[58]), { channelId: channelId.channelId, inGuildContext: true });
    };
    obj[constants.CHANNEL_OVERRIDE] = obj1;
    return obj;
  }(), []);
  obj = { screens: memo };
  obj = { name: constants.OVERVIEW };
  const obj1 = {};
  if (null == stateFromStores) {
    stateFromStores = closure_30;
  }
  obj1.guildId = stateFromStores;
  obj.params = obj1;
  const items1 = [obj];
  obj.initialRouteStack = items1;
  return closure_31(arg1(dependencyMap[59]).Navigator, obj);
};
export const NotificationSettings = tmp5;
