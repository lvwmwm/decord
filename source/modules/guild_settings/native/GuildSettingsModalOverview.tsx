// Module ID: 16267
// Function ID: 126261
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1391, 1348, 1907, 4051, 3758, 3767, 1849, 8483, 653, 33, 4130, 689, 1212, 8482, 10403, 5495, 4471, 4561, 3830, 5087, 5788, 1360, 7574, 4320, 5501, 5165, 7768, 16058, 5502, 7654, 7653, 15035, 1920, 16268, 1392, 9522, 1273, 7645, 5130, 7636, 4541, 5448, 3842, 1456, 566, 2]
// Exports: default

// Module 16267 (_isNativeReflectConstruct)
import isGuildOwner from "isGuildOwner";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "jsxProd";
import closure_6 from "_createForOfIteratorHelperLoose";
import getSystemLocale from "getSystemLocale";
import { isGuildOwnerWithRequiredMfaLevel as closure_8 } from "isGuildOwner";
import closure_9 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "items";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "TableRowInner";

let closure_10;
let closure_11;
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
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_10, GUILD_VOCAL_CHANNELS_KEY: closure_11 } = _isNativeReflectConstruct);
({ UserNotificationSettings: closure_17, ChannelTypes: closure_18, Permissions: closure_19, GuildFeatures: closure_20, HelpdeskArticles: closure_21, SystemChannelFlags: closure_22, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_23 } = ME);
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = jsxProd);
_createForOfIteratorHelperLoose = { overview: { flex: 1 }, overviewContent: { paddingTop: 16 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.stackPadding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let items = [
  {
    value: 60,
    label() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 1 });
    }
  },
  {
    value: 300,
    label() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 5 });
    }
  },
  {
    value: 900,
    label() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 15 });
    }
  },
  {
    value: 1800,
    label() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 30 });
    }
  },
  {
    value: 3600,
    label() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.xCjYxK, { hours: 1 });
    }
  }
];
let closure_28 = Object.freeze(items);
const tmp6 = ((PureComponent) => {
  class GuildSettingsModalOverview {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_30()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleNameChange = (name) => {
        let obj = outer2_1(outer2_2[19]);
        obj = { name };
        obj.updateGuild(obj);
      };
      tmp2Result.handleDescriptionChange = (description) => {
        let obj = outer2_1(outer2_2[19]);
        obj = { description };
        obj.updateGuild(obj);
      };
      tmp2Result.handleAfkChannelChange = () => {
        let obj = { guildId: tmp2Result.props.guild.id, channelType: outer2_11 };
        const intl = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj.noChannelOptionLabel = intl.string(GuildSettingsModalOverview(outer2_2[18]).t.wGiHkK);
        obj.onSelect = function onSelect(id) {
          let obj = outer3_1(outer3_2[19]);
          obj = {};
          id = undefined;
          if (null != id) {
            id = id.id;
          }
          obj.afkChannelId = id;
          obj.updateGuild(obj);
        };
        obj.filterFn = function filterFn(channel) {
          return channel.channel.type === outer3_18.GUILD_VOICE;
        };
        const afkChannel = tmp2Result.props.afkChannel;
        let tmp2 = null;
        if (null != afkChannel) {
          tmp2 = afkChannel;
        }
        obj.selectedChannel = tmp2;
        outer2_1(outer2_2[20])(obj);
      };
      tmp2Result.handleSystemChannelChange = () => {
        let obj = {
          guildId: tmp2Result.props.guild.id,
          channelType: outer2_10,
          filterFn(channel) {
            return channel.channel.type === outer3_18.GUILD_TEXT;
          }
        };
        const intl = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj.noChannelOptionLabel = intl.string(GuildSettingsModalOverview(outer2_2[18]).t.ibUhoa);
        obj.onSelect = function onSelect(id) {
          let obj = outer3_1(outer3_2[19]);
          obj = {};
          id = undefined;
          if (null != id) {
            id = id.id;
          }
          obj.systemChannelId = id;
          obj.updateGuild(obj);
        };
        const systemChannel = tmp2Result.props.systemChannel;
        let tmp2 = null;
        if (null != systemChannel) {
          tmp2 = systemChannel;
        }
        obj.selectedChannel = tmp2;
        outer2_1(outer2_2[20])(obj);
      };
      tmp2Result.handleSystemJoinMessages = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_JOIN_NOTIFICATIONS, !arg0);
      };
      tmp2Result.handleSystemJoinMessageReplies = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !arg0);
      };
      tmp2Result.handleSystemPremiumSubscribe = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !arg0);
      };
      tmp2Result.handleSystemReminderNotifications = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !arg0);
      };
      tmp2Result.handleSystemGuildRoleSubscriptionPurchaseMessages = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !arg0);
      };
      tmp2Result.handleSystemGuildRoleSubscriptionPurchaseMessageReplies = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !arg0);
      };
      tmp2Result.handleSystemVoiceSessionMessages = (arg0) => {
        const result = tmp2Result.handleSystemChannelFlagsChange(outer2_22.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !arg0);
      };
      tmp2Result.handleAFKTimeoutChange = () => {
        let obj = GuildSettingsModalOverview(outer2_2[21]);
        obj = {
          key: "AFKTimeout",
          options: outer2_28.map((label) => {
            let closure_0 = label;
            return {
              label: label.label(),
              onPress() {
                let obj = outer4_1(outer4_2[19]);
                obj = { afkTimeout: label.value };
                obj.updateGuild(obj);
              }
            };
          }),
          hasIcons: false
        };
        const result = obj.showSimpleActionSheet(obj);
      };
      tmp2Result.handleDeleteServer = () => {
        let obj = outer2_1(outer2_2[22]);
        obj = {};
        const intl = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj.title = intl.string(GuildSettingsModalOverview(outer2_2[18]).t.l3hWP6);
        const intl2 = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj = { name: tmp2Result.props.guild.name };
        obj.body = intl2.format(GuildSettingsModalOverview(outer2_2[18]).t["Zuo+Vd"], obj);
        const intl3 = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj.cancelText = intl3.string(GuildSettingsModalOverview(outer2_2[18]).t.gm1Vej);
        const intl4 = GuildSettingsModalOverview(outer2_2[18]).intl;
        obj.confirmText = intl4.string(GuildSettingsModalOverview(outer2_2[18]).t.p89ACt);
        obj.onConfirm = tmp2Result.handleConfirmDeleteServer;
        obj.confirmColor = outer2_1(outer2_2[23]).Colors.RED;
        obj.show(obj);
      };
      tmp2Result.handleConfirmDeleteServer = () => {
        outer2_1(outer2_2[19]).deleteGuild(tmp2Result.props.guild.id);
      };
      tmp2Result.handleSplashChange = (splash) => {
        let obj = outer2_1(outer2_2[19]);
        obj = { splash };
        obj.updateGuild(obj);
      };
      tmp2Result.handleSummariesToggle = (arg0) => {
        const set = new Set(tmp2Result.props.guild.features);
        if (arg0) {
          set.add(outer2_20.SUMMARIES_ENABLED_BY_USER);
        } else {
          set.delete(outer2_20.SUMMARIES_ENABLED_BY_USER);
        }
        outer2_1(outer2_2[19]).updateGuild({ features: set });
      };
      tmp2Result.handleBannerChange = (banner) => {
        let obj = outer2_1(outer2_2[19]);
        obj = { banner };
        obj.updateGuild(obj);
      };
      tmp2Result.handleOverviewSaveChanges = () => {
        let afkChannelId;
        let afkTimeout;
        let banner;
        let defaultMessageNotifications;
        let description;
        let features;
        let icon;
        let id;
        let name;
        let premiumProgressBarEnabled;
        let safetyAlertsChannelId;
        let splash;
        let systemChannelFlags;
        let systemChannelId;
        ({ id, name, icon, afkChannelId, afkTimeout, systemChannelId, safetyAlertsChannelId, systemChannelFlags, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled } = tmp2Result.props.guild);
        outer2_1(outer2_2[19]).saveGuild(id, { name, icon, afkChannelId, afkTimeout, systemChannelId, systemChannelFlags, safetyAlertsChannelId, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled });
      };
      tmp2Result.handleBoostProgressBarToggle = (premiumProgressBarEnabled) => {
        let obj = outer2_1(outer2_2[19]);
        obj = { premiumProgressBarEnabled };
        obj.updateGuild(obj);
      };
      return tmp2Result;
    }
  }
  callback2(GuildSettingsModalOverview, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigator();
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(errors) {
      errors = this.props.errors;
      this.updateNavigator(errors);
      let tmp2 = errors.errors.message !== errors.message;
      if (tmp2) {
        tmp2 = null != errors.message;
      }
      if (tmp2) {
        GuildSettingsModalOverview(outer1_2[24]).presentError(errors.message);
        const obj = GuildSettingsModalOverview(outer1_2[24]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigator",
    value(submitting) {
      let hasChanges;
      let navigation;
      const self = this;
      ({ navigation, submitting, hasChanges } = this.props);
      if (!tmp) {
        let setOptionsResult = {};
        let intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        setOptionsResult.title = intl.string(GuildSettingsModalOverview(outer1_2[18]).t["/dp6yY"]);
        let fn;
        if (submitting) {
          fn = () => null;
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => outer2_24(GuildSettingsModalOverview(outer2_2[25]).HeaderSubmittingIndicator, {});
        } else if (hasChanges) {
          fn2 = () => {
            const obj = { onPress: self.handleOverviewSaveChanges };
            const intl = GuildSettingsModalOverview(outer2_2[18]).intl;
            obj.text = intl.string(GuildSettingsModalOverview(outer2_2[18]).t["R3BPH+"]);
            return outer2_24(GuildSettingsModalOverview(outer2_2[26]).HeaderActionButton, obj);
          };
        }
        setOptionsResult.headerRight = fn2;
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value() {
      outer1_1(outer1_2[19]).cancelChanges(this.props.guild.id);
    }
  };
  items[4] = {
    key: "getError",
    value(arg0) {
      const errors = this.props.errors;
      let first;
      if (null != errors) {
        if (null != errors[arg0]) {
          first = tmp3[0];
        }
      }
      return first;
    }
  };
  items[5] = {
    key: "handleSystemChannelFlagsChange",
    value(arg0, arg1) {
      const obj = GuildSettingsModalOverview(outer1_2[27]);
      const setFlagResult = GuildSettingsModalOverview(outer1_2[27]).setFlag(this.props.guild.systemChannelFlags, arg0, arg1);
      outer1_1(outer1_2[19]).updateGuild({ systemChannelFlags: setFlagResult });
    }
  };
  items[6] = {
    key: "handleDefaultNotificationsChange",
    value(defaultMessageNotifications) {
      let obj = outer1_1(outer1_2[19]);
      obj = { defaultMessageNotifications };
      obj.updateGuild(obj);
    }
  };
  items[7] = {
    key: "renderGuildName",
    value() {
      let canManage;
      let guild;
      ({ guild, canManage } = this.props);
      const obj = {};
      const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl.string(GuildSettingsModalOverview(outer1_2[18]).t.dBih7e);
      obj.value = guild.name;
      obj.isDisabled = !canManage;
      obj.onChange = this.handleNameChange;
      obj.errorMessage = this.getError("name");
      return outer1_24(GuildSettingsModalOverview(outer1_2[28]).TextInput, obj);
    }
  };
  items[8] = {
    key: "renderAFKSettings",
    value() {
      let afkChannel;
      let canManage;
      const self = this;
      const props = this.props;
      const guild = props.guild;
      ({ canManage, afkChannel } = props);
      if (null != afkChannel) {
        let obj = GuildSettingsModalOverview(outer1_2[29]);
        let channelName = obj.computeChannelName(afkChannel, outer1_15, outer1_14);
      } else {
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        channelName = intl.string(GuildSettingsModalOverview(outer1_2[18]).t.wGiHkK);
      }
      let found = null;
      if (null != guild.afkChannelId) {
        found = outer1_28.find((value) => value.value === guild.afkTimeout);
      }
      if (null != found) {
        let labelResult = found.label();
      } else {
        let obj1 = outer1_28[1];
        labelResult = obj1.label();
      }
      obj = {};
      const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.title = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.qyGmGt);
      const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.description = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t.ffEOKP);
      obj.hasIcons = false;
      obj = {};
      const intl4 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl4.string(GuildSettingsModalOverview(outer1_2[18]).t.KuYcnU);
      obj.disabled = !canManage;
      obj1 = { text: channelName };
      obj.trailing = outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow.TrailingText, obj1);
      obj.arrow = true;
      obj.onPress = self.handleAfkChannelChange;
      const items = [outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow, obj), ];
      const obj2 = {};
      const intl5 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj2.label = intl5.string(GuildSettingsModalOverview(outer1_2[18]).t.brhYaR);
      obj2.disabled = !canManage || null == guild.afkChannelId;
      const obj3 = { text: labelResult };
      obj2.trailing = outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow.TrailingText, obj3);
      obj2.arrow = true;
      obj2.onPress = self.handleAFKTimeoutChange;
      items[1] = outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow, obj2);
      obj.children = items;
      return outer1_25(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
    }
  };
  items[9] = {
    key: "renderSystemMessageSettings",
    value() {
      let canManage;
      let guild;
      let systemChannel;
      const self = this;
      ({ guild, canManage, systemChannel } = this.props);
      if (null != systemChannel) {
        let obj = GuildSettingsModalOverview(outer1_2[29]);
        let channelName = obj.computeChannelName(systemChannel, outer1_15, outer1_14);
      } else {
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        channelName = intl.string(GuildSettingsModalOverview(outer1_2[18]).t.ibUhoa);
      }
      let obj1 = GuildSettingsModalOverview(outer1_2[32]);
      const result = obj1.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild);
      let hasFlagResult = result;
      if (!result) {
        let obj2 = GuildSettingsModalOverview(outer1_2[27]);
        hasFlagResult = obj2.hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
      }
      let hasFlagResult1 = result;
      if (!result) {
        let obj3 = GuildSettingsModalOverview(outer1_2[27]);
        hasFlagResult1 = obj3.hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
      }
      let obj4 = GuildSettingsModalOverview(outer1_2[33]);
      let result1 = obj4.isPastVcActivityMessagesEnabled(guild.id, "GuildSettingsModalOverview");
      if (!result1) {
        let obj5 = GuildSettingsModalOverview(outer1_2[27]);
        result1 = obj5.hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
      }
      obj = {};
      const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.title = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.DP39VH);
      const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.description = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t.BT9zR3);
      obj.hasIcons = false;
      obj = {};
      const intl4 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl4.string(GuildSettingsModalOverview(outer1_2[18]).t.GK18KJ);
      obj.disabled = !canManage;
      obj1 = { text: channelName };
      obj.trailing = outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow.TrailingText, obj1);
      obj.arrow = true;
      obj.onPress = self.handleSystemChannelChange;
      const items = [outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow, obj), , , , , , , ];
      obj2 = {};
      const intl5 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj2.label = intl5.string(GuildSettingsModalOverview(outer1_2[18]).t["+f0bXQ"]);
      obj2.disabled = !canManage;
      obj2.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_JOIN_NOTIFICATIONS);
      obj2.onValueChange = self.handleSystemJoinMessages;
      items[1] = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj2);
      obj3 = {};
      const intl6 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj3.label = intl6.string(GuildSettingsModalOverview(outer1_2[18]).t["72k7jf"]);
      obj3.disabled = !canManage;
      const obj11 = GuildSettingsModalOverview(outer1_2[27]);
      const tmp21 = outer1_25;
      obj3.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      obj3.onValueChange = self.handleSystemJoinMessageReplies;
      items[2] = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj3);
      obj4 = {};
      const intl7 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj4.label = intl7.string(GuildSettingsModalOverview(outer1_2[18]).t["2L8NCN"]);
      obj4.disabled = !canManage;
      const obj13 = GuildSettingsModalOverview(outer1_2[27]);
      obj4.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_PREMIUM_SUBSCRIPTIONS);
      obj4.onValueChange = self.handleSystemPremiumSubscribe;
      items[3] = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj4);
      obj5 = {};
      const intl8 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj5.label = intl8.string(GuildSettingsModalOverview(outer1_2[18]).t["NvnW+V"]);
      obj5.disabled = !canManage;
      const obj15 = GuildSettingsModalOverview(outer1_2[27]);
      obj5.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS);
      obj5.onValueChange = self.handleSystemReminderNotifications;
      items[4] = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj5);
      if (hasFlagResult) {
        const obj6 = {};
        const intl9 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj6.label = intl9.string(GuildSettingsModalOverview(outer1_2[18]).t["54n19R"]);
        obj6.disabled = !canManage;
        obj6.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
        obj6.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessages;
        hasFlagResult = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj6);
        const obj19 = GuildSettingsModalOverview(outer1_2[27]);
      }
      items[5] = hasFlagResult;
      if (hasFlagResult1) {
        const obj7 = {};
        const intl10 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj7.label = intl10.string(GuildSettingsModalOverview(outer1_2[18]).t["IhF5d+"]);
        obj7.disabled = !canManage;
        obj7.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        obj7.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessageReplies;
        hasFlagResult1 = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj7);
        const obj21 = GuildSettingsModalOverview(outer1_2[27]);
      }
      items[6] = hasFlagResult1;
      if (result1) {
        const obj8 = {};
        const intl11 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj8.label = intl11.string(GuildSettingsModalOverview(outer1_2[18]).t.IMtHBW);
        obj8.disabled = !canManage;
        obj8.value = !GuildSettingsModalOverview(outer1_2[27]).hasFlag(guild.systemChannelFlags, outer1_22.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
        obj8.onValueChange = self.handleSystemVoiceSessionMessages;
        result1 = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj8);
        const obj23 = GuildSettingsModalOverview(outer1_2[27]);
      }
      items[7] = result1;
      obj.children = items;
      return tmp21(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
    }
  };
  items[10] = {
    key: "renderDefaultNotificationSettings",
    value() {
      let canManage;
      let guildMemberCount;
      const self = this;
      const props = this.props;
      ({ canManage, guildMemberCount } = props);
      let obj = {};
      const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.title = intl.string(GuildSettingsModalOverview(outer1_2[18]).t["23TVhl"]);
      const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.description = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.PA2MZv);
      obj.value = props.guild.defaultMessageNotifications;
      obj.onChange = function onChange(arg0) {
        return self.handleDefaultNotificationsChange(arg0);
      };
      obj.hasIcons = false;
      obj = { value: outer1_17.ALL_MESSAGES };
      const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t["n/bTaY"]);
      let stringResult;
      if (null != guildMemberCount) {
        if (guildMemberCount >= outer1_23) {
          const intl4 = GuildSettingsModalOverview(outer1_2[18]).intl;
          stringResult = intl4.string(GuildSettingsModalOverview(outer1_2[18]).t["L+P4t2"]);
        }
      }
      obj.subLabel = stringResult;
      obj.disabled = !canManage;
      const items = [outer1_24(GuildSettingsModalOverview(outer1_2[36]).TableRadioRow, obj), ];
      obj = { value: outer1_17.ONLY_MENTIONS };
      const intl5 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl5.format(GuildSettingsModalOverview(outer1_2[18]).t.L2hmYy, {});
      obj.disabled = !canManage;
      items[1] = outer1_24(GuildSettingsModalOverview(outer1_2[36]).TableRadioRow, obj);
      obj.children = items;
      return outer1_25(GuildSettingsModalOverview(outer1_2[35]).TableRadioGroup, obj);
    }
  };
  items[11] = {
    key: "renderBoostProgressBar",
    value() {
      let canManage;
      let guild;
      ({ guild, canManage } = this.props);
      let obj = GuildSettingsModalOverview(outer1_2[37]);
      let tmp = null;
      if (obj.getMobileBoostProgressBarEnabled("GuildSettingsModalOverview")) {
        obj = {};
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.title = intl.string(GuildSettingsModalOverview(outer1_2[18]).t["0morVD"]);
        const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.description = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.O87mwg);
        obj.hasIcons = false;
        obj = {};
        const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.label = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t.Dl4mJS);
        obj.disabled = !canManage;
        obj.value = guild.premiumProgressBarEnabled;
        obj.onValueChange = this.handleBoostProgressBarToggle;
        obj.children = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj);
        tmp = outer1_24(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
      }
      return tmp;
    }
  };
  items[12] = {
    key: "renderSplash",
    value() {
      let canManage;
      let guild;
      ({ guild, canManage } = this.props);
      const features = guild.features;
      let tmp = null;
      if (features.has(outer1_20.INVITE_SPLASH)) {
        let obj = {};
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.title = intl.string(GuildSettingsModalOverview(outer1_2[18]).t.tzGY0q);
        const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.description = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.FEFkkG);
        const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj = { articleURL: outer1_1(outer1_2[38]).getArticleURL(outer1_21.GUILD_INVITE_SPLASH) };
        obj.helperText = intl3.format(GuildSettingsModalOverview(outer1_2[18]).t.ZYA9PV, obj);
        obj.hasIcons = false;
        obj.hasTrailingText = null != guild.splash && canManage;
        obj = {
          disabled: !canManage,
          guild,
          rawSource: guild.splash,
          getSource(id, size) {
              let obj = outer2_1(outer2_2[40]);
              obj = { id: id.id, splash: id.splash, size };
              return obj.getGuildSplashSource(obj);
            },
          onChooseAsset: this.handleSplashChange,
          size: { width: 1920, height: 1080 }
        };
        obj.children = outer1_24(outer1_1(outer1_2[39]), obj);
        tmp = outer1_24(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
        const obj3 = outer1_1(outer1_2[38]);
        const tmp2 = outer1_24;
      }
      return tmp;
    }
  };
  items[13] = {
    key: "renderSummaries",
    value() {
      const props = this.props;
      const guild = props.guild;
      let obj = GuildSettingsModalOverview(outer1_2[41]);
      if (obj.canGuildUseConversationSummaries(guild, false)) {
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj = { helpdeskArticle: outer1_1(outer1_2[38]).getArticleURL(outer1_21.CONVERSATION_SUMMARIES) };
        const obj3 = outer1_1(outer1_2[38]);
        obj = {};
        const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.title = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.XPDhcc);
        obj.description = intl.format(GuildSettingsModalOverview(outer1_2[18]).t["c6Cy/h"], obj);
        obj.hasIcons = false;
        const obj1 = {};
        const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj1.label = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t.vmEDQs);
        obj1.trailing = outer1_24(GuildSettingsModalOverview(outer1_2[42]).BetaTag, {});
        const features = guild.features;
        obj1.value = features.has(outer1_20.SUMMARIES_ENABLED_BY_USER);
        obj1.disabled = !props.canManage;
        obj1.onValueChange = this.handleSummariesToggle;
        obj.children = outer1_24(GuildSettingsModalOverview(outer1_2[34]).TableSwitchRow, obj1);
        return outer1_24(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
      } else {
        return null;
      }
    }
  };
  items[14] = {
    key: "renderDescription",
    value() {
      let canManage;
      let guild;
      ({ guild, canManage } = this.props);
      const obj = {};
      const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.label = intl.string(GuildSettingsModalOverview(outer1_2[18]).t["RSfm+i"]);
      const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.description = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t["/B6PRw"]);
      obj.maxLength = GuildSettingsModalOverview(outer1_2[44]).MAX_DESCRIPTION_LENGTH;
      const description = guild.description;
      let str = "";
      if (null != description) {
        str = description;
      }
      obj.value = str;
      obj.isDisabled = !canManage;
      obj.onChange = this.handleDescriptionChange;
      const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
      obj.placeholder = intl3.string(GuildSettingsModalOverview(outer1_2[18]).t.Nvfowl);
      return outer1_24(GuildSettingsModalOverview(outer1_2[43]).TextArea, obj);
    }
  };
  items[15] = {
    key: "renderBanner",
    value() {
      let canManage;
      let guild;
      ({ guild, canManage } = this.props);
      let features = guild.features;
      if (features.has(outer1_20.BANNER)) {
        let obj = {};
        const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.title = intl.string(GuildSettingsModalOverview(outer1_2[18]).t["0r0AzF"]);
        const intl2 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj.description = intl2.string(GuildSettingsModalOverview(outer1_2[18]).t.UfqmIb);
        const intl3 = GuildSettingsModalOverview(outer1_2[18]).intl;
        obj = { articleURL: outer1_1(outer1_2[38]).getArticleURL(outer1_21.GUILD_BANNER_SPLASH) };
        obj.helperText = intl3.format(GuildSettingsModalOverview(outer1_2[18]).t.vBcWUv, obj);
        obj.hasIcons = false;
        obj.hasTrailingText = null != guild.banner && canManage;
        obj = {
          disabled: !canManage,
          guild,
          rawSource: guild.banner,
          getSource(features) {
              features = features.features;
              const hasItem = features.has(outer2_20.ANIMATED_BANNER);
              return outer2_1(outer2_2[40]).getGuildBannerSource(features, hasItem);
            },
          onChooseAsset: this.handleBannerChange,
          size: { width: 960, height: 540 }
        };
        obj.children = outer1_24(outer1_1(outer1_2[39]), obj);
        return outer1_24(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
      } else {
        return null;
      }
    }
  };
  items[16] = {
    key: "renderDeleteGuild",
    value() {
      const currentUser = outer1_15.getCurrentUser();
      let tmp2 = null;
      if (null != currentUser) {
        tmp2 = null;
        if (outer1_8(this.props.guild, currentUser)) {
          let obj = { hasIcons: false };
          obj = { variant: "danger" };
          const intl = GuildSettingsModalOverview(outer1_2[18]).intl;
          obj.label = intl.string(GuildSettingsModalOverview(outer1_2[18]).t.l3hWP6);
          obj.onPress = this.handleDeleteServer;
          obj.children = outer1_24(GuildSettingsModalOverview(outer1_2[31]).TableRow, obj);
          tmp2 = outer1_24(GuildSettingsModalOverview(outer1_2[30]).TableRowGroup, obj);
        }
      }
      return tmp2;
    }
  };
  items[17] = {
    key: "render",
    value() {
      const tmp = outer1_27(this.context);
      let obj = {};
      obj = { style: tmp.overview, contentContainerStyle: items };
      items = [tmp.overviewContent, this.props.contentContainerStyle];
      obj = { style: tmp.stackPadding, spacing: outer1_1(outer1_2[17]).space.PX_24 };
      const items1 = [this.renderGuildName(), this.renderSummaries(), this.renderAFKSettings(), this.renderSystemMessageSettings(), this.renderDefaultNotificationSettings(), this.renderBoostProgressBar(), this.renderDescription(), this.renderBanner(), this.renderSplash(), this.renderDeleteGuild()];
      obj.children = items1;
      obj.children = outer1_25(GuildSettingsModalOverview(outer1_2[46]).Stack, obj);
      const items2 = [outer1_24(GuildSettingsModalOverview(outer1_2[45]).Form, obj), outer1_24(GuildSettingsModalOverview(outer1_2[47]).NavScrim, {})];
      obj.children = items2;
      return outer1_25(outer1_26, obj);
    }
  };
  return callback(GuildSettingsModalOverview, items);
})(require("TableRowInner").PureComponent);
let closure_29 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
let obj1 = {
  value: 60,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 1 });
  }
};
let obj2 = {
  value: 300,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 5 });
  }
};
let obj3 = {
  value: 900,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 15 });
  }
};
let obj4 = {
  value: 1800,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes: 30 });
  }
};
let obj5 = {
  value: 3600,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.xCjYxK, { hours: 1 });
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOverview.tsx");

export default function ConnectedGuildSettingsModalOverview(contentContainerStyle) {
  let errors;
  let hasChanges;
  let submitting;
  let obj = guild(1456);
  const navigation = obj.useNavigation();
  const items = [closure_16];
  const stateFromStoresObject = guild(566).useStateFromStoresObject(items, () => ({ guild: outer1_16.getGuild(), submitting: outer1_16.isSubmitting(), hasChanges: outer1_16.hasChanges(), errors: outer1_16.getErrors() }), []);
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges, errors } = stateFromStoresObject);
  const obj2 = guild(566);
  const items1 = [closure_13];
  const items2 = [guild];
  const stateFromStores = guild(566).useStateFromStores(items1, () => outer1_13.can(outer1_19.MANAGE_GUILD, guild), items2);
  const obj3 = guild(566);
  const items3 = [closure_9];
  const stateFromStores1 = guild(566).useStateFromStores(items3, () => {
    let afkChannelId;
    if (null != guild) {
      afkChannelId = guild.afkChannelId;
    }
    return outer1_9.getChannel(afkChannelId);
  });
  const obj4 = guild(566);
  const items4 = [closure_9];
  const stateFromStores2 = guild(566).useStateFromStores(items4, () => {
    let systemChannelId;
    if (null != guild) {
      systemChannelId = guild.systemChannelId;
    }
    return outer1_9.getChannel(systemChannelId);
  });
  guild(566);
  [][0] = closure_12;
  let tmp8 = null;
  if (null != guild) {
    obj = { navigation, guild, submitting, hasChanges, canManage: stateFromStores, afkChannel: stateFromStores1, systemChannel: stateFromStores2, guildMemberCount: tmp7, errors, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    tmp8 = callback3(closure_29, obj);
  }
  return tmp8;
};
