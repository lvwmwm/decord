// Module ID: 10308
// Function ID: 79566
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1352, 1348, 3767, 4325, 1849, 653, 33, 5079, 5073, 5796, 4320, 7636, 1212, 10309, 566, 5087, 5517, 2]

// Module 10308 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import openUserSettings from "openUserSettings";
import Form from "Form";
import getSystemLocale from "getSystemLocale";
import importAllResult from "result";
import { isMultiUserDM } from "_callSuper";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
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
  let obj = channel(566);
  const items = [closure_12];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (outer1_9(channel.type)) {
          isChannelMutedResult = outer1_12.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return callback3(closure_18, obj);
}
function getScreens(channelId, pop) {
  const _require = channel.getChannel(channelId);
  let obj = {};
  obj = {
    headerTitle() {
      const obj = {};
      const intl = callback(outer1_2[18]).intl;
      obj.title = intl.string(callback(outer1_2[18]).t.h850Ss);
      let channelName = null;
      if (null != callback) {
        const obj2 = callback(outer1_2[16]);
        channelName = obj2.computeChannelName(tmp, outer1_13, outer1_11, true);
      }
      obj.subtitle = channelName;
      return outer1_16(callback(outer1_2[21]).NavigatorHeader, obj);
    },
    headerLeft: _require(5087).getHeaderCloseButton(pop),
    render() {
      return outer1_16(outer1_20, { channel: closure_0 });
    }
  };
  obj.IN_APP_NOTIFICATION_SETTINGS = obj;
  return obj;
}
({ ChannelTypes: closure_14, UserSettingsSections: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = ((PureComponent) => {
  class InAppNotificationSettingsScreen {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleGroupDMMute = () => {
        let channel;
        let isMuted;
        ({ channel, isMuted } = tmp2Result.props);
        if (null != channel) {
          let obj = outer2_1(outer2_2[13]);
          const guildId = channel.getGuildId();
          obj = { muted: !isMuted };
          const NotificationLabel = InAppNotificationSettingsScreen(outer2_2[14]).NotificationLabel;
          const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
        }
      };
      tmp2Result.handleOpenUserSettings = () => {
        let obj = InAppNotificationSettingsScreen(outer2_2[15]);
        obj = { screen: outer2_15.NOTIFICATIONS };
        obj.openUserSettings(obj);
      };
      return tmp2Result;
    }
  }
  callback2(InAppNotificationSettingsScreen, PureComponent);
  let obj = {
    key: "renderGroupDMNotificationSettings",
    value() {
      const channel = this.props.channel;
      if (null == channel) {
        return null;
      } else {
        let obj = InAppNotificationSettingsScreen(outer1_2[16]);
        const channelName = obj.computeChannelName(channel, outer1_13, outer1_11);
        obj = {};
        obj = {};
        const intl = InAppNotificationSettingsScreen(outer1_2[18]).intl;
        const obj1 = { name: channelName };
        obj.label = intl.format(InAppNotificationSettingsScreen(outer1_2[18]).t["u/rEuc"], obj1);
        obj.value = tmp2;
        obj.onValueChange = tmp.handleGroupDMMute;
        obj.children = outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormSwitchRow, obj);
        return outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormSection, obj);
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "renderTextChannelNotificationSettings",
    value() {
      const channel = this.props.channel;
      let tmp = null;
      if (null != channel) {
        const obj = { channelId: channel.id };
        tmp = outer1_16(outer1_1(outer1_2[19]), obj);
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
        if (outer1_14.GROUP_DM === type) {
          return self.renderGroupDMNotificationSettings();
        } else {
          if (outer1_14.GUILD_TEXT !== type) {
            if (outer1_14.GUILD_ANNOUNCEMENT !== type) {
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
      const intl = InAppNotificationSettingsScreen(outer1_2[18]).intl;
      obj.title = intl.string(InAppNotificationSettingsScreen(outer1_2[18]).t.clE4PU);
      obj = {};
      const intl2 = InAppNotificationSettingsScreen(outer1_2[18]).intl;
      obj.label = intl2.string(InAppNotificationSettingsScreen(outer1_2[18]).t.cHMaba);
      obj.onPress = this.handleOpenUserSettings;
      obj.trailing = outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormRow.Arrow, {});
      obj.children = outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormRow, obj);
      items[1] = outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormSection, obj);
      const obj1 = {};
      const intl3 = InAppNotificationSettingsScreen(outer1_2[18]).intl;
      obj1.children = intl3.string(InAppNotificationSettingsScreen(outer1_2[18]).t.avgbp1);
      items[2] = outer1_16(InAppNotificationSettingsScreen(outer1_2[17]).FormHint, obj1);
      obj.children = items;
      return outer1_17(InAppNotificationSettingsScreen(outer1_2[17]).Form, obj);
    }
  };
  return callback(InAppNotificationSettingsScreen, items);
})(importAllResult.PureComponent);
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = importAllResult.useMemo(() => outer1_21(channelId, onClose), items);
  return callback3(channelId(5517).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;
