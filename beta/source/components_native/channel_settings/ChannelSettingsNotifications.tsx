// Module ID: 9599
// Function ID: 9600
// Name: ChannelSettingsNotifications
// Dependencies: [19, 2049, 2045, 4754, 4479, 5017, 1372, 1074, 21, 1115, 4836, 576, 4540, 5016, 6540, 4800, 9600, 1981, 6535, 4989, 5999, 5917, 9604, 6621, 5997, 6000, 4832, 8053, 5279, 504, 9605, 9606, 2]
// Exports: default

// Module 9599 (ChannelSettingsNotifications)
import nativeDefault from "native" /* 576 */;
import intl16 from "intl" /* 1115 */;
import native from "native" /* 4540 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
import Form2 from "Form" /* 8053 */;
import MutedUntilTextDefault from "MutedUntilText" /* 9604 */;
import NotificationSettingsChannelDefault from "NotificationSettingsChannel" /* 9606 */;
import react from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let unpackModuleId;
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  const tmp = onClose;
  let obj = onClose(stateFromStores[29]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guildId;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  const items1 = [UserGuildSettingsStore];
  const tmpResult = tmp(tmp2[29]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let NULL;
    let newForumThreadsCreated;
    let parent_id;
    if (stateFromStores != null) {
      parent_id = tmp.parent_id;
    }
    if (null != parent_id) {
      NULL = UserGuildSettingsStore.getChannelMessageNotifications(guildId, tmp.parent_id);
    } else {
      NULL = constants.NULL;
    }
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== constants.NULL) {
      tmp8 = NULL;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId), muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId), guildMuted: UserGuildSettingsStore.isMuted(guildId), guildMessageNotifications: messageNotifications, newForumThreadsCreated, defaultSetting: tmp8 };
    newForumThreadsCreated = null != tmp && UserGuildSettingsStore.getNewForumThreadsCreated(tmp);
    return obj;
  });
  const items2 = [GuildMemberCountStore];
  const items3 = [stateFromStores, onClose];
  const tmpResult2 = tmp(stateFromStores[29]);
  const stateFromStores1 = tmpResult2.useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp7 = null;
  if (null != stateFromStores) {
    let tmp8 = closure_16;
    const obj2 = { onClose, channel: stateFromStores, guildMemberCount: stateFromStores1 };
    const merged = Object.assign(stateFromStoresObject);
    tmp7 = closure_16(ChannelSettingsNotifications, obj2);
  }
  return tmp7;
}
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
({ AnalyticEvents: unpackModuleId, UserNotificationSettings: closure_12, ChannelTypes: map1, SettingsPaneTypes: closure_14, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15 } = Constants);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { screenContainer: obj2, stackPadding: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_19 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(messageNotifications) {
    let paths;
    const tmp2 = new ChannelSettingsNotifications(messageNotifications, new.target, tmp);
    let state = tmp2;
    tmp2.radioGroupRef = react.createRef();
    tmp2.updateSetting = function updateSetting(arg0, label) {
      let messageNotifications;
      let mute_config;
      let muted;
      ({ muted, messageNotifications, mute_config } = arg0);
      const channel = state.props.channel;
      const obj = {};
      let flag = false;
      if (undefined !== muted) {
        obj.muted = muted;
        if (mute_config == null) {
          mute_config = null;
        }
        obj.mute_config = mute_config;
        flag = true;
      }
      if (undefined !== messageNotifications) {
        obj.message_notifications = messageNotifications;
        flag = true;
      }
      if (flag) {
        const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj, label };
        const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
        NotificationSettingsModalActionCreatorsDefault;
        const result = updateChannelOverrideSettings(obj2);
      }
    };
    tmp2.handleToggleMuteChannel = function handleToggleMuteChannel() {
      let muted;
      let obj = muted;
      muted = muted.state.muted;
      const channel = muted.props.channel;
      if (muted) {
        const obj2 = { muted: !muted };
        obj.setState(obj2, () => {
          const updateSetting = muted.updateSetting;
          const obj = { muted: !muted };
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          return updateSetting(obj, NotificationLabel.muted(!muted));
        });
      } else {
        const openLazy = require("ActionSheetActionCreators").openLazy;
        const _HermesInternal = HermesInternal;
        require("ActionSheetActionCreators");
        const obj3 = {
          guildId: channel.getGuildId(),
          channelId: channel.id,
          onOptionPress(muted) {
              const updateSetting = muted.updateSetting;
              const NotificationLabel = muted(paths[18]).NotificationLabel;
              return updateSetting(muted, NotificationLabel.muted(muted.muted));
            }
        };
        const tmp5 = state(paths[17])(paths[16], paths.paths);
        const combined = "muteSettings" + channel.id;
        openLazy(tmp5, combined, obj3);
      }
    };
    tmp2.handleTypeChange = function handleTypeChange(messageNotifications) {
      state = messageNotifications;
      let obj = { messageNotifications };
      state.setState(obj, () => {
        const updateSetting = messageNotifications.updateSetting;
        const obj = { messageNotifications };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        return updateSetting(obj, NotificationLabel.notifications(messageNotifications));
      });
    };
    tmp2.state = { messageNotifications: messageNotifications.messageNotifications, muted: messageNotifications.muted };
    return tmp2;
  }
  componentDidMount() {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS };
    obj.trackWithMetadata(unpackModuleId.SETTINGS_PANE_VIEWED, obj2);
  }
  componentDidUpdate(muted) {
    const self = this;
    if (muted.muted !== this.props.muted) {
      const obj = { muted: self.props.muted };
      self.setState(obj);
    }
    if (muted.messageNotifications !== self.props.messageNotifications) {
      const obj2 = { messageNotifications: self.props.messageNotifications };
      self.setState(obj2);
    }
  }
  renderMuteSection() {
    let CHANNEL;
    let TableRow;
    let formatResult;
    let intl;
    let obj5;
    const props = this.props;
    const channel = props.channel;
    const muted = this.state.muted;
    const muteConfig = props.muteConfig;
    const obj = useChannelName;
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
    const obj2 = { description: intl.string(intl16.t["6yI+JS"]), hasIcons: false, children: authStore3(TableRow, obj5) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl = intl16.intl;
    TableRow = TableRow2.TableRow;
    const intl2 = intl16.intl;
    const format = intl2.format;
    const t = intl16.t;
    const tmp4 = authStore4;
    const tmp5 = closure_17;
    if (muted) {
      const obj3 = { name: channelName };
      formatResult = format(t["eC+9rj"], obj3);
    } else {
      const obj4 = { name: channelName };
      formatResult = format(t.byjuJm, obj4);
    }
    obj5 = { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted };
    const children = [authStore3(TableRowGroup, obj2), ];
    let tmp6Result = null;
    if (muted) {
      const obj6 = { muteConfig, type: CHANNEL };
      const tmp10 = MutedUntilTextDefault;
      if (channel.type === map1.GUILD_CATEGORY) {
        CHANNEL = tmp(9604).MuteSettingType.CATEGORY;
      } else {
        CHANNEL = tmp(9604).MuteSettingType.CHANNEL;
      }
      tmp6Result = tmp6(tmp10, obj6);
    }
    children[1] = tmp6Result;
    return tmp4(tmp5, { children });
  }
  renderForumSettings() {
    let intl;
    let newForumThreadsCreated;
    let require;
    const props = this.props;
    ({ channel: require, newForumThreadsCreated } = props);
    let muted = this.state.muted;
    const guildMuted = props.guildMuted;
    let obj = {
      label: intl.string(intl16.t.Rkgjph),
      value: newForumThreadsCreated,
      disabled: muted,
      onValueChange() {
        const obj = NotificationSettingsModalActionCreatorsDefault;
        const result = obj.setForumThreadsCreated(_require, !newForumThreadsCreated);
      }
    };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl16.intl;
    const tmp = closure_16;
    if (!muted) {
      muted = guildMuted;
    }
    return tmp(TableSwitchRow, obj);
  }
  renderNotificationSettings() {
    let channel;
    let defaultSetting;
    let guildMemberCount;
    let guildMuted;
    let intl12;
    let intl13;
    let intl3;
    let intl6;
    let intl8;
    let intl9;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let tmp11Result;
    let tmp18;
    let tmp5;
    let tmp7;
    const self = this;
    ({ channel, guildMuted, guildMemberCount, defaultSetting } = this.props);
    const state = this.state;
    let muted = state.muted;
    const messageNotifications = state.messageNotifications;
    if (null != channel.parent_id) {
      const intl2 = intl16.intl;
      stringResult = intl2.string(intl16.t.wlrV1c);
      tmp5 = require;
      tmp7 = require;
    } else {
      const intl = intl16.intl;
      stringResult = intl.string(intl16.t["1Wn2M4"]);
      tmp5 = require;
      tmp7 = require;
    }
    const isGuildStageVoiceResult = channel.isGuildStageVoice();
    const TableRadioGroup = tmp7(5997).TableRadioGroup;
    const obj = { value: messageNotifications, onChange: self.handleTypeChange, groupRef: self.radioGroupRef, title: intl3.string(tmp7(1115).t.h850Ss), hasIcons: false, children: null };
    intl3 = tmp7(1115).intl;
    const TableRadioRow = tmp7(6000).TableRadioRow;
    if (isGuildStageVoiceResult) {
      const obj2 = { disabled: tmp18, label: stringResult, subLabel: stringResult1, value: constants2.NULL };
      tmp18 = muted || guildMuted;
      if (constants2.ALL_MESSAGES === defaultSetting) {
        const intl11 = tmp5(1115).intl;
        stringResult1 = intl11.string(tmp5(1115).t["n/bTaY"]);
      } else if (constants2.ONLY_MENTIONS === defaultSetting) {
        const intl10 = tmp5(1115).intl;
        stringResult1 = intl10.format(tmp5(1115).t.L2hmYy, {});
      } else if (constants2.NO_MESSAGES === defaultSetting) {
        const intl15 = tmp5(1115).intl;
        stringResult1 = intl15.string(tmp5(1115).t.CtVGyQ);
      }
      const items = [authStore3(TableRadioRow, obj2), , ];
      let tmp21 = muted;
      const TableRadioRow5 = tmp7(6000).TableRadioRow;
      if (!muted) {
        tmp21 = guildMuted;
      }
      const obj3 = { disabled: tmp21, value: constants2.ONLY_MENTIONS, label: intl12.string(tmp7(1115).t["BENn/6"]) };
      intl12 = tmp7(1115).intl;
      items[1] = authStore3(TableRadioRow5, obj3);
      const TableRadioRow6 = tmp7(6000).TableRadioRow;
      if (!muted) {
        muted = guildMuted;
      }
      const obj4 = { disabled: muted, value: constants2.NO_MESSAGES, label: intl13.string(tmp7(1115).t.CtVGyQ) };
      intl13 = tmp7(1115).intl;
      items[2] = authStore3(TableRadioRow6, obj4);
      obj.children = items;
      tmp11Result = tmp11(TableRadioGroup, obj);
    } else {
      const obj5 = { label: stringResult, subLabel: stringResult2, disabled: muted || guildMuted, value: constants2.NULL };
      if (constants2.ALL_MESSAGES === defaultSetting) {
        const intl5 = tmp5(1115).intl;
        stringResult2 = intl5.string(tmp5(1115).t["n/bTaY"]);
      } else if (constants2.ONLY_MENTIONS === defaultSetting) {
        const intl4 = tmp5(1115).intl;
        stringResult2 = intl4.format(tmp5(1115).t.L2hmYy, {});
      } else if (constants2.NO_MESSAGES === defaultSetting) {
        const intl14 = tmp5(1115).intl;
        stringResult2 = intl14.string(tmp5(1115).t.CtVGyQ);
      }
      const items1 = [authStore3(TableRadioRow, obj5), , , ];
      const obj6 = { label: intl6.string(tmp7(1115).t["n/bTaY"]), disabled: muted || guildMuted, subLabel: stringResult3, value: constants2.ALL_MESSAGES };
      const TableRadioRow2 = tmp7(6000).TableRadioRow;
      intl6 = tmp7(1115).intl;
      stringResult3 = null;
      if (null != guildMemberCount) {
        stringResult3 = null;
        if (guildMemberCount >= closure_15) {
          const intl7 = tmp7(1115).intl;
          stringResult3 = intl7.string(tmp7(1115).t.Dh5p5j);
        }
      }
      items1[1] = authStore3(TableRadioRow2, obj6);
      const obj7 = { label: intl8.format(tmp7(1115).t.L2hmYy, {}), disabled: muted || guildMuted, value: constants2.ONLY_MENTIONS };
      const TableRadioRow3 = tmp7(6000).TableRadioRow;
      intl8 = tmp7(1115).intl;
      items1[2] = authStore3(TableRadioRow3, obj7);
      const obj8 = { label: intl9.string(tmp7(1115).t.CtVGyQ), disabled: muted || guildMuted, value: constants2.NO_MESSAGES };
      const TableRadioRow4 = tmp7(6000).TableRadioRow;
      intl9 = tmp7(1115).intl;
      items1[3] = authStore3(TableRadioRow4, obj8);
      obj.children = items1;
      tmp11Result = tmp11(TableRadioGroup, obj);
    }
    return tmp11Result;
  }
  render() {
    let Stack;
    let guildMessageNotifications;
    let guildMuted;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    let obj4;
    let obj6;
    let tmp12;
    const self = this;
    const tmp = closure_19(this.context);
    const props = this.props;
    const channel = props.channel;
    ({ guildMuted, guildMessageNotifications } = props);
    let tmp9Result2 = null;
    const tmp2 = React3(channel.type) || channel.isForumLikeChannel();
    if (null != channel) {
      let tmp5;
      if (guildMuted) {
        let obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(intl16.t.O34r15, obj2) };
        const Text = Text_Text.Text;
        intl = intl16.intl;
        obj2 = {
          mutedHook(children, arg1) {
                const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
                return closure_1_16(require("Text/Text").Text, obj, arg1);
              }
        };
        tmp5 = authStore3(Text, obj);
      } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl3.format(intl16.t.nRwUIL, obj4) };
        const Text2 = Text_Text.Text;
        intl3 = intl16.intl;
        obj4 = {
          notificationHook(children, arg1) {
                const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
                return closure_1_16(require("Text/Text").Text, obj, arg1);
              }
        };
        tmp5 = authStore3(Text2, obj3);
      }
      const obj5 = { style: tmp.screenContainer, children: tmp12(Stack, obj6) };
      const Form = Form2.Form;
      obj6 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
      Stack = Stack_Stack.Stack;
      let renderMuteSectionResult = null;
      tmp12 = authStore4;
      if (tmp2) {
        renderMuteSectionResult = self.renderMuteSection();
      }
      items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
      let tmp9Result = null;
      if (channel.isForumLikeChannel()) {
        const obj7 = { title: intl2.string(intl16.t.bK11jO), hasIcons: false, children: self.renderForumSettings() };
        const TableRowGroup = tmp10(5999).TableRowGroup;
        intl2 = tmp10(1115).intl;
        tmp9Result = tmp9(TableRowGroup, obj7);
      }
      items[2] = tmp9Result;
      items[3] = tmp5;
      tmp9Result2 = tmp9(Form, obj5);
    }
    return tmp9Result2;
  }
}
const prototype = ChannelSettingsNotifications.prototype;
ChannelSettingsNotifications.contextType = native.ThemeContext;
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let channelId;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId.channelId));
  let tmp3 = null;
  const obj2 = require("notifications/NotificationUtils");
  if (null != stateFromStores) {
    if (obj2.useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative")) {
      let tmp10;
      if (set.has(stateFromStores.type)) {
        const obj3 = { channel: stateFromStores };
        const tmp13 = NotificationSettingsChannelDefault;
        const merged = Object.assign(arg0);
        tmp10 = closure_16(tmp13, obj3);
      }
      tmp3 = tmp10;
    }
    const obj4 = {};
    const merged1 = Object.assign(arg0);
    tmp10 = closure_16(ChannelSettingsNotificationsGuard, obj4);
  }
  return tmp3;
};
