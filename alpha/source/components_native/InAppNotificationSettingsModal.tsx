// Module ID: 11067
// Function ID: 11068
// Name: InAppNotificationSettingsModal
// Dependencies: [19, 4867, 4863, 4956, 6775, 1383, 1072, 21, 7288, 7283, 5652, 8177, 1113, 11068, 7563, 504, 6998, 7169, 2]

// Module 11067 (InAppNotificationSettingsModal)
import intl4 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import useChannelName from "useChannelName" /* 5652 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6998 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7283 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7288 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import _mod8177 from "module_8177" /* 8177 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 11068 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let unpackModuleId;
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  const obj = channel(504);
  const items = [UserGuildSettingsStore];
  const obj2 = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(channel.type)) {
          isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(obj.getGuildId(), obj.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return closure_11(InAppNotificationSettingsScreen, obj2);
}
const isMultiUserDM = ChannelRecord.isMultiUserDM;
({ ChannelTypes: c9, UserSettingsSections: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PureComponent = react.PureComponent;
class InAppNotificationSettingsScreen extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleGroupDMMute = function handleGroupDMMute() {
      let NotificationLabel;
      let channel;
      let isMuted;
      let obj2;
      ({ channel, isMuted } = require.props);
      if (null != channel) {
        const obj = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj2, label: NotificationLabel.muted(!isMuted) };
        const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
        NotificationSettingsModalActionCreatorsDefault;
        obj2 = { muted: !isMuted };
        NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateChannelOverrideSettings(obj);
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      const obj = openUserSettings;
      const obj2 = { screen: constants.NOTIFICATIONS };
      obj.openUserSettings(obj2);
    };
    return applyArgumentsResult;
  }
  renderGroupDMNotificationSettings() {
    let FormSwitchRow;
    let intl;
    let obj3;
    let obj4;
    const channel = this.props.channel;
    if (null == channel) {
      return null;
    } else {
      const obj = useChannelName;
      const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      const obj2 = { children: unpackModuleId(FormSwitchRow, obj3) };
      const FormSection = _mod8177.FormSection;
      obj3 = { label: intl.format(intl4.t["u/rEuc"], obj4), value: tmp2, onValueChange: tmp.handleGroupDMMute };
      FormSwitchRow = _mod8177.FormSwitchRow;
      intl = intl4.intl;
      obj4 = { name: channelName };
      return unpackModuleId(FormSection, obj2);
    }
  }
  renderTextChannelNotificationSettings() {
    const channel = this.props.channel;
    let tmp = null;
    if (null != channel) {
      const obj = { channelId: channel.id };
      tmp = unpackModuleId(ChannelSettingsNotificationsDefault, obj);
    }
    return tmp;
  }
  renderChannelNotificationSettings() {
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
            if (constants.GUILD_APP !== type) {
              return null;
            }
          }
        }
        return self.renderTextChannelNotificationSettings();
      }
    }
  }
  render() {
    let FormRow;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj3;
    const obj = { children: items };
    const Form = _mod8177.Form;
    items = [this.renderChannelNotificationSettings(), , ];
    const obj2 = { title: intl.string(intl4.t.clE4PU), children: unpackModuleId(FormRow, obj3) };
    const FormSection = _mod8177.FormSection;
    intl = intl4.intl;
    obj3 = { label: intl2.string(intl4.t.cHMaba), onPress: this.handleOpenUserSettings, trailing: unpackModuleId(_mod8177.FormRow.Arrow, {}) };
    FormRow = _mod8177.FormRow;
    intl2 = intl4.intl;
    items[1] = unpackModuleId(FormSection, obj2);
    const obj4 = { children: intl3.string(intl4.t.avgbp1) };
    const FormHint = _mod8177.FormHint;
    intl3 = intl4.intl;
    items[2] = unpackModuleId(FormHint, obj4);
    return authStore2(Form, obj);
  }
}
const prototype = InAppNotificationSettingsScreen.prototype;
const memoResult = react.memo(function InAppNotificationSettingsModal(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = react.useMemo(() => {
    let obj2;
    let obj3;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { IN_APP_NOTIFICATION_SETTINGS: obj2 };
    obj2 = {
      headerTitle() {
        let channelName;
        let intl;
        const obj = { title: intl.string(channelId(closure_2_2[12]).t.h850Ss), subtitle: channelName };
        const NavigatorHeader = channelId(closure_2_2[16]).NavigatorHeader;
        intl = channelId(closure_2_2[12]).intl;
        channelName = null;
        const tmp2 = closure_2_11;
        const tmp3 = channelId;
        const tmp4 = closure_2_2;
        if (null != channel) {
          const tmp3Result = tmp3(tmp4[10]);
          channelName = tmp3Result.computeChannelName(tmp, closure_2_8, closure_2_6, true);
        }
        return tmp2(NavigatorHeader, obj);
      },
      headerLeft: obj3.getHeaderCloseButton(onClose),
      render() {
        const obj = { channel };
        return closure_2_11(closure_2_14, obj);
      }
    };
    obj3 = NavigatorHeader2;
    return obj;
  }, items);
  return closure_11(channelId(7169).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
let result = size.fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;
