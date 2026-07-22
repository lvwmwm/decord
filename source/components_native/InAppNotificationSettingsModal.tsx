// Module ID: 10266
// Function ID: 79302
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10266 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_12];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (callback(channel.type)) {
          isChannelMutedResult = channelMuted.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return callback4(closure_18, obj);
}
function getScreens(channelId, pop) {
  const callback = channel.getChannel(channelId);
  let obj = {};
  obj = {
    headerTitle() {
      const obj = {};
      const intl = callback(closure_2[18]).intl;
      obj.title = intl.string(callback(closure_2[18]).t.h850Ss);
      let channelName = null;
      if (null != callback) {
        const obj2 = callback(closure_2[16]);
        channelName = obj2.computeChannelName(tmp, closure_13, closure_11, true);
      }
      obj.subtitle = channelName;
      return closure_16(callback(closure_2[21]).NavigatorHeader, obj);
    },
    headerLeft: callback(dependencyMap[21]).getHeaderCloseButton(pop),
    render() {
      return callback2(closure_20, { channel: closure_0 });
    }
  };
  obj.IN_APP_NOTIFICATION_SETTINGS = obj;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const isMultiUserDM = arg1(dependencyMap[6]).isMultiUserDM;
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
({ ChannelTypes: closure_14, UserSettingsSections: closure_15 } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[12]));
let closure_18 = (PureComponent) => {
  class InAppNotificationSettingsScreen {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, InAppNotificationSettingsScreen);
      items1 = [...items];
      obj = closure_6(InAppNotificationSettingsScreen);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      InAppNotificationSettingsScreen = tmp2Result;
      tmp2Result.handleGroupDMMute = () => {
        let channel;
        let isMuted;
        ({ channel, isMuted } = tmp2Result.props);
        if (null != channel) {
          let obj = callback(closure_2[13]);
          const guildId = channel.getGuildId();
          obj = { muted: !isMuted };
          const NotificationLabel = tmp2Result(closure_2[14]).NotificationLabel;
          const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
        }
      };
      tmp2Result.handleOpenUserSettings = () => {
        let obj = tmp2Result(closure_2[15]);
        obj = { screen: constants.NOTIFICATIONS };
        obj.openUserSettings(obj);
      };
      return tmp2Result;
    }
  }
  const arg1 = InAppNotificationSettingsScreen;
  callback3(InAppNotificationSettingsScreen, PureComponent);
  let obj = {
    key: "renderGroupDMNotificationSettings",
    value() {
      const channel = this.props.channel;
      if (null == channel) {
        return null;
      } else {
        let obj = InAppNotificationSettingsScreen(closure_2[16]);
        const channelName = obj.computeChannelName(channel, closure_13, closure_11);
        obj = {};
        obj = {};
        const intl = InAppNotificationSettingsScreen(closure_2[18]).intl;
        const obj1 = { name: channelName };
        obj.label = intl.format(InAppNotificationSettingsScreen(closure_2[18]).t.u/rEuc, obj1);
        obj.value = tmp2;
        obj.onValueChange = tmp.handleGroupDMMute;
        obj.children = callback4(InAppNotificationSettingsScreen(closure_2[17]).FormSwitchRow, obj);
        return callback4(InAppNotificationSettingsScreen(closure_2[17]).FormSection, obj);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "renderTextChannelNotificationSettings",
    value() {
      const channel = this.props.channel;
      let tmp = null;
      if (null != channel) {
        const obj = { channelId: channel.id };
        tmp = callback4(callback(closure_2[19]), obj);
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderChannelNotificationSettings",
    value() {
      const self = this;
      const channel = this.props.channel;
      if (null == channel) {
        return null;
      } else {
        const type = channel.type;
        if (constants.GROUP_DM === type) {
          return self.renderGroupDMNotificationSettings();
        } else {
          if (constants.GUILD_TEXT !== type) {
            if (constants.GUILD_ANNOUNCEMENT !== type) {
              return null;
            }
          }
          return self.renderTextChannelNotificationSettings();
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let obj = {};
      const items = [this.renderChannelNotificationSettings(), , ];
      obj = {};
      const intl = InAppNotificationSettingsScreen(closure_2[18]).intl;
      obj.title = intl.string(InAppNotificationSettingsScreen(closure_2[18]).t.clE4PU);
      obj = {};
      const intl2 = InAppNotificationSettingsScreen(closure_2[18]).intl;
      obj.label = intl2.string(InAppNotificationSettingsScreen(closure_2[18]).t.cHMaba);
      obj.onPress = this.handleOpenUserSettings;
      obj.trailing = callback4(InAppNotificationSettingsScreen(closure_2[17]).FormRow.Arrow, {});
      obj.children = callback4(InAppNotificationSettingsScreen(closure_2[17]).FormRow, obj);
      items[1] = callback4(InAppNotificationSettingsScreen(closure_2[17]).FormSection, obj);
      const obj1 = {};
      const intl3 = InAppNotificationSettingsScreen(closure_2[18]).intl;
      obj1.children = intl3.string(InAppNotificationSettingsScreen(closure_2[18]).t.avgbp1);
      items[2] = callback4(InAppNotificationSettingsScreen(closure_2[17]).FormHint, obj1);
      obj.children = items;
      return callback5(InAppNotificationSettingsScreen(closure_2[17]).Form, obj);
    }
  };
  return callback2(InAppNotificationSettingsScreen, items);
}(importAllResult.PureComponent);
const tmp3 = arg1(dependencyMap[12]);
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const onClose = channelId.onClose;
  const importDefault = onClose;
  const items = [channelId, onClose];
  const screens = importAllResult.useMemo(() => callback(channelId, onClose), items);
  return callback4(arg1(dependencyMap[22]).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;
