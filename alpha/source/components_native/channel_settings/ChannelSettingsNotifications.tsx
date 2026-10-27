// Module ID: 13791
// Function ID: 13792
// Name: ChannelSettingsNotifications
// Dependencies: [19, 4828, 4824, 5195, 4914, 6705, 1389, 1084, 6706, 1094, 21, 1125, 10996, 4972, 587, 5038, 5712, 7217, 5211, 11011, 1999, 7212, 5605, 6989, 6905, 11013, 7297, 6987, 6986, 5235, 8951, 5978, 558, 576, 504, 10993, 2]

// Module 13791 (ChannelSettingsNotifications)
import nativeDefault from "native" /* 587 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import intl16 from "intl" /* 1125 */;
import native from "native" /* 5038 */;
import Text_Text from "Text/Text" /* 5235 */;
import useChannelName from "useChannelName" /* 5605 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5712 */;
import Stack_Stack from "Stack/Stack" /* 5978 */;
import ReadStateConstants from "ReadStateConstants" /* 6706 */;
import TableRow2 from "TableRow" /* 6905 */;
import TableRowGroup2 from "TableRowGroup" /* 6989 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7212 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7217 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7297 */;
import Form2 from "Form" /* 8951 */;
import MutedUntilTextDefault from "MutedUntilText" /* 11013 */;
import react_mod from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 4828 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5195 */;
import RelationshipStore from "RelationshipStore" /* 4914 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6705 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelIdFlags;

let closure_12;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
({ AnalyticEvents: unpackModuleId, UserNotificationSettings: closure_12, ChannelTypes: map1, SettingsPaneTypes: closure_14, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15 } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_17 = UserSettingsConstants.ChannelNotificationSettingsFlags;
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
const hybrid = "hybrid";
let obj = { screenContainer: obj2, stackPadding: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const authStore5 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(messageNotifications) {
    let paths;
    let tmp;
    const tmp2 = new ChannelSettingsNotifications(messageNotifications, new.target, tmp);
    let props = tmp2;
    tmp2.radioGroupRef = react.createRef();
    tmp2.updateSetting = function updateSetting(arg0, label) {
      let flags;
      let messageNotifications;
      let mute_config;
      let muted;
      ({ muted, messageNotifications, flags, mute_config } = arg0);
      const channel = props.props.channel;
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
      if (undefined !== flags) {
        obj.flags = flags;
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
              const NotificationLabel = muted(paths[21]).NotificationLabel;
              return updateSetting(muted, NotificationLabel.muted(muted.muted));
            }
        };
        const tmp5 = muted(paths[20])(paths[19], paths.paths);
        const combined = "muteSettings" + channel.id;
        openLazy(tmp5, combined, obj3);
      }
    };
    tmp2.handleTypeChange = function handleTypeChange(arg0) {
      let ONLY_MENTIONS;
      let obj = ONLY_MENTIONS;
      props = ONLY_MENTIONS.props;
      const channel = props.channel;
      ONLY_MENTIONS = arg0;
      const useNewNotifications = props.useNewNotifications;
      const tmp = hybrid;
      if (arg0 === hybrid) {
        ONLY_MENTIONS = constants.ONLY_MENTIONS;
      }
      let tmp3;
      if (useNewNotifications) {
        let result;
        channelIdFlags = channelIdFlags.getChannelIdFlags(channel.getGuildId(), channel.id);
        if (ONLY_MENTIONS === constants.NULL) {
          const obj2 = ONLY_MENTIONS(paths[12]);
          result = obj2.resetChannelUnreadFlags(channelIdFlags);
        } else {
          ONLY_MENTIONS(paths[12]);
          if (arg0 !== tmp) {
            let UNREADS_ALL_MESSAGES;
            if (ONLY_MENTIONS !== tmp6.ALL_MESSAGES) {
              UNREADS_ALL_MESSAGES = constants2.UNREADS_ONLY_MENTIONS;
            }
            result = tmp10(channelIdFlags, UNREADS_ALL_MESSAGES);
          }
          UNREADS_ALL_MESSAGES = constants2.UNREADS_ALL_MESSAGES;
        }
        tmp3 = result;
      }
      const flags = tmp3;
      obj.setState({ messageNotifications: ONLY_MENTIONS }, () => {
        const updateSetting = ONLY_MENTIONS.updateSetting;
        const obj = { messageNotifications: ONLY_MENTIONS, flags };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        return updateSetting(obj, NotificationLabel.notifications(ONLY_MENTIONS));
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
    const obj2 = { description: intl.string(intl16.t["6yI+JS"]), hasIcons: false, children: authStore4(TableRow, obj5) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl = intl16.intl;
    TableRow = TableRow2.TableRow;
    const intl2 = intl16.intl;
    const format = intl2.format;
    const t = intl16.t;
    const tmp4 = closure_20;
    const tmp5 = closure_19;
    if (muted) {
      const obj3 = { name: channelName };
      formatResult = format(t["eC+9rj"], obj3);
    } else {
      const obj4 = { name: channelName };
      formatResult = format(t.byjuJm, obj4);
    }
    obj5 = { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted };
    const children = [authStore4(TableRowGroup, obj2), ];
    let tmp6Result = null;
    if (muted) {
      const obj6 = { muteConfig, type: CHANNEL };
      const tmp10 = MutedUntilTextDefault;
      if (channel.type === map1.GUILD_CATEGORY) {
        CHANNEL = tmp(11013).MuteSettingType.CATEGORY;
      } else {
        CHANNEL = tmp(11013).MuteSettingType.CHANNEL;
      }
      tmp6Result = tmp6(tmp10, obj6);
    }
    children[1] = tmp6Result;
    return tmp4(tmp5, { children });
  }
  renderForumSettings() {
    let intl;
    let newForumThreadsCreated;
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
        const result = obj.setForumThreadsCreated(require, !newForumThreadsCreated);
      }
    };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl16.intl;
    const tmp = closure_18;
    if (!muted) {
      muted = guildMuted;
    }
    return tmp(TableSwitchRow, obj);
  }
  renderNotificationSettings() {
    let channel;
    let defaultSetting;
    let defaultUnreadSetting;
    let guildMemberCount;
    let guildMuted;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl6;
    let intl7;
    let intl9;
    let items;
    let items1;
    let messageNotifications;
    let muted;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let tmp20;
    let tmp5;
    let tmp7;
    let unreadSetting;
    let useNewNotifications;
    const self = this;
    const props = this.props;
    ({ channel, guildMuted, guildMemberCount, defaultSetting, useNewNotifications } = props);
    ({ muted, messageNotifications } = this.state);
    ({ unreadSetting, defaultUnreadSetting } = props);
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
    const tmp10 = useNewNotifications && defaultSetting === constants2.ONLY_MENTIONS && defaultUnreadSetting === UnreadSetting.ALL_MESSAGES;
    if (tmp10) {
      const intl5 = tmp5(1125).intl;
      stringResult1 = intl5.string(tmp5(1125).t.JzbSEY);
    } else if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl4 = tmp5(1125).intl;
      stringResult1 = intl4.string(tmp5(1125).t["n/bTaY"]);
    } else if (constants2.ONLY_MENTIONS === defaultSetting) {
      const intl3 = tmp5(1125).intl;
      stringResult1 = intl3.format(tmp5(1125).t.L2hmYy, {});
    } else if (constants2.NO_MESSAGES === defaultSetting) {
      const intl15 = tmp5(1125).intl;
      stringResult1 = intl15.string(tmp5(1125).t.CtVGyQ);
    }
    if (channel.isGuildStageVoice()) {
      ({ handleTypeChange: obj7.onChange, radioGroupRef: obj7.groupRef } = self);
      const obj2 = { value: messageNotifications, onChange: null, groupRef: null, title: intl12.string(tmp7(1125).t.h850Ss), hasIcons: false, children: items };
      const TableRadioGroup2 = tmp7(6987).TableRadioGroup;
      intl12 = tmp7(1125).intl;
      let tmp28 = muted;
      const TableRadioRow6 = tmp7(6986).TableRadioRow;
      const tmp26 = closure_20;
      if (!muted) {
        tmp28 = guildMuted;
      }
      const obj3 = { disabled: tmp28, label: stringResult, subLabel: stringResult1, value: constants2.NULL };
      items = [authStore4(TableRadioRow6, obj3), , ];
      let tmp30 = muted;
      const TableRadioRow7 = tmp7(6986).TableRadioRow;
      if (!muted) {
        tmp30 = guildMuted;
      }
      const obj4 = { disabled: tmp30, value: constants2.ONLY_MENTIONS, label: intl13.string(tmp7(1125).t["BENn/6"]) };
      intl13 = tmp7(1125).intl;
      items[1] = authStore4(TableRadioRow7, obj4);
      const TableRadioRow8 = tmp7(6986).TableRadioRow;
      if (!muted) {
        muted = guildMuted;
      }
      const obj5 = { disabled: muted, value: constants2.NO_MESSAGES, label: intl14.string(tmp7(1125).t.CtVGyQ) };
      intl14 = tmp7(1125).intl;
      items[2] = authStore4(TableRadioRow8, obj5);
      return tmp26(TableRadioGroup2, obj2);
    } else {
      let tmp15 = messageNotifications;
      if (useNewNotifications) {
        tmp15 = messageNotifications;
        if (messageNotifications === constants2.ONLY_MENTIONS) {
          tmp15 = messageNotifications;
          if (unreadSetting === UnreadSetting.ALL_MESSAGES) {
            tmp15 = hybrid;
          }
        }
      }
      const obj = { value: tmp15, onChange: null, groupRef: null, title: intl6.string(tmp7(1125).t.h850Ss), hasIcons: false, children: items1 };
      ({ handleTypeChange: obj.onChange, radioGroupRef: obj.groupRef } = self);
      const TableRadioGroup = tmp7(6987).TableRadioGroup;
      intl6 = tmp7(1125).intl;
      const obj6 = { label: stringResult, subLabel: stringResult1, disabled: tmp20, value: constants2.NULL };
      tmp20 = muted;
      const TableRadioRow = tmp7(6986).TableRadioRow;
      const tmp18 = closure_20;
      if (!muted) {
        tmp20 = guildMuted;
      }
      items1 = [authStore4(TableRadioRow, obj6), , , , ];
      const obj8 = { label: intl7.string(tmp7(1125).t["n/bTaY"]), disabled: muted || guildMuted, subLabel: stringResult2, value: constants2.ALL_MESSAGES };
      const TableRadioRow2 = tmp7(6986).TableRadioRow;
      intl7 = tmp7(1125).intl;
      stringResult2 = null;
      if (null != guildMemberCount) {
        stringResult2 = null;
        if (guildMemberCount >= closure_15) {
          const intl8 = tmp7(1125).intl;
          stringResult2 = intl8.string(tmp7(1125).t.Dh5p5j);
        }
      }
      items1[1] = authStore4(TableRadioRow2, obj8);
      let tmp19Result = null;
      if (useNewNotifications) {
        const obj9 = { label: intl9.string(tmp7(1125).t.JzbSEY), disabled: muted || guildMuted, value: hybrid };
        const TableRadioRow3 = tmp7(6986).TableRadioRow;
        intl9 = tmp7(1125).intl;
        tmp19Result = tmp19(TableRadioRow3, obj9);
      }
      items1[2] = tmp19Result;
      const obj10 = { label: intl10.format(tmp7(1125).t.L2hmYy, {}), disabled: muted || guildMuted, value: constants2.ONLY_MENTIONS };
      const TableRadioRow4 = tmp7(6986).TableRadioRow;
      intl10 = tmp7(1125).intl;
      items1[3] = authStore4(TableRadioRow4, obj10);
      const obj19 = { label: intl11.string(tmp7(1125).t.CtVGyQ), disabled: muted || guildMuted, value: constants2.NO_MESSAGES };
      const TableRadioRow5 = tmp7(6986).TableRadioRow;
      intl11 = tmp7(1125).intl;
      items1[4] = authStore4(TableRadioRow5, obj19);
      return tmp18(TableRadioGroup, obj);
    }
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
    const tmp = closure_22(this.context);
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
                return closure_1_18(Text_Text.Text, obj, arg1);
              }
        };
        tmp5 = authStore4(Text, obj);
      } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl3.format(intl16.t.nRwUIL, obj4) };
        const Text2 = Text_Text.Text;
        intl3 = intl16.intl;
        obj4 = {
          notificationHook(children, arg1) {
                const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
                return closure_1_18(Text_Text.Text, obj, arg1);
              }
        };
        tmp5 = authStore4(Text2, obj3);
      }
      const obj5 = { style: tmp.screenContainer, children: tmp12(Stack, obj6) };
      const Form = Form2.Form;
      obj6 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
      Stack = Stack_Stack.Stack;
      let renderMuteSectionResult = null;
      tmp12 = closure_20;
      if (tmp2) {
        renderMuteSectionResult = self.renderMuteSection();
      }
      items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
      let tmp9Result = null;
      if (channel.isForumLikeChannel()) {
        const obj7 = { title: intl2.string(intl16.t.bK11jO), hasIcons: false, children: self.renderForumSettings() };
        const TableRowGroup = tmp10(6989).TableRowGroup;
        intl2 = tmp10(1125).intl;
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
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSettingsNotificationsGuard(onClose) {
  let closure_3;
  let first;
  let stateFromStores;
  let tmp13;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp7;
  const tmp = onClose;
  let obj = onClose(stateFromStores[33]);
  const cResult = obj.c(23);
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[34]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let tmp8 = null;
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    cResult[3] = stateFromStores;
    cResult[4] = guildId;
    tmp7 = guildId;
  } else {
    tmp7 = cResult[4];
  }
  react = tmp7;
  const tmpResult4 = tmp(stateFromStores[35]);
  let shouldUseNewNotificationSystem = tmpResult4.useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative");
  if (shouldUseNewNotificationSystem) {
    shouldUseNewNotificationSystem = null != stateFromStores;
  }
  if (shouldUseNewNotificationSystem) {
    shouldUseNewNotificationSystem = set.has(stateFromStores.type);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[5] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === channelId) {
      let tmp15;
      let tmp17;
      let tmp19;
      if (cResult[8] === tmp7) {
        tmp15 = cResult[9];
      }
      const tmpResult5 = tmp(stateFromStores[34]);
      const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp13, tmp15);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberCountStore];
        cResult[10] = items2;
        tmp17 = items2;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== tmp7) {
        class R {
          constructor() {
            return GuildMemberCountStore.getMemberCount(closure_3);
          }
        }
        cResult[11] = tmp7;
        cResult[12] = R;
        tmp19 = R;
      } else {
        class R {
          constructor() {
            return GuildMemberCountStore.getMemberCount(closure_3);
          }
        }
      }
      const tmpResult6 = tmp(stateFromStores[34]);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp17, tmp19);
      if (cResult[13] === stateFromStores) {
        class R {
          constructor() {
            return GuildMemberCountStore.getMemberCount(closure_3);
          }
        }
        const effect = react.useEffect(tmp21, tmp22);
        if (cResult[17] === stateFromStores) {
          class R {
            constructor() {
              return GuildMemberCountStore.getMemberCount(closure_3);
            }
          }
        }
        if (null != stateFromStores) {
          class R {
            constructor() {
              return GuildMemberCountStore.getMemberCount(closure_3);
            }
          }
          const merged = Object.assign(stateFromStoresObject);
          class U {
            constructor() {
              if (null == stateFromStores) {
                if (onClose != null) {
                  tmp();
                }
              }
            }
          }
        }
        cResult[17] = stateFromStores;
        cResult[18] = stateFromStores1;
        class U {
          constructor() {
            if (null == stateFromStores) {
              if (onClose != null) {
                tmp();
              }
            }
          }
        }
        cResult[19] = onClose;
        cResult[20] = stateFromStoresObject;
        cResult[21] = shouldUseNewNotificationSystem;
        cResult[22] = null;
      }
      class U {
        constructor() {
          if (null == stateFromStores) {
            if (onClose != null) {
              tmp();
            }
          }
        }
      }
      const items3 = [stateFromStores, onClose];
      cResult[13] = stateFromStores;
      cResult[14] = onClose;
      cResult[15] = U;
      cResult[16] = items3;
      tmp21 = U;
      tmp22 = items3;
    }
  }
  const fn2 = function _() {
    let NULL;
    let UNSET;
    let UNSET2;
    let UNSET3;
    let newForumThreadsCreated;
    let parent_id;
    if (stateFromStores != null) {
      parent_id = tmp.parent_id;
    }
    if (null != parent_id) {
      NULL = UserGuildSettingsStore.getChannelMessageNotifications(closure_3, tmp.parent_id);
    } else {
      NULL = constants.NULL;
    }
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(closure_3);
    let tmp8 = messageNotifications;
    if (NULL !== constants.NULL) {
      tmp8 = NULL;
    }
    let parent_id1;
    if (stateFromStores != null) {
      parent_id1 = tmp.parent_id;
    }
    if (null != parent_id1) {
      UNSET = UserGuildSettingsStore.getChannelUnreadSetting(tmp6, tmp.parent_id);
    } else {
      UNSET = UnreadSetting.UNSET;
    }
    if (null != closure_3) {
      UNSET2 = UserGuildSettingsStore.getGuildUnreadSetting(tmp6);
    } else {
      UNSET2 = UnreadSetting.UNSET;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(closure_3, channelId), muted: UserGuildSettingsStore.isChannelMuted(closure_3, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(closure_3, channelId), guildMuted: UserGuildSettingsStore.isMuted(closure_3), guildMessageNotifications: messageNotifications, newForumThreadsCreated, defaultSetting: tmp8, unreadSetting: UNSET3, defaultUnreadSetting: UNSET2 };
    newForumThreadsCreated = null != tmp && UserGuildSettingsStore.getNewForumThreadsCreated(tmp);
    if (null != stateFromStores) {
      UNSET3 = UserGuildSettingsStore.resolveUnreadSetting(tmp);
    } else {
      UNSET3 = UnreadSetting.UNSET;
    }
    if (UNSET !== UnreadSetting.UNSET) {
      UNSET2 = UNSET;
    }
    return obj;
  };
  cResult[6] = stateFromStores;
  cResult[7] = channelId;
  cResult[8] = tmp7;
  cResult[9] = fn2;
  tmp15 = fn2;
}) : (function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  const tmp = onClose;
  let obj = onClose(stateFromStores[34]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guildId;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  const tmpResult = tmp(tmp2[35]);
  let hasItem = tmpResult.useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative") && null != stateFromStores;
  if (hasItem) {
    hasItem = set.has(stateFromStores.type);
  }
  const items1 = [UserGuildSettingsStore];
  const tmpResult3 = tmp(stateFromStores[34]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(items1, () => {
    let NULL;
    let UNSET;
    let UNSET2;
    let UNSET3;
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
    let parent_id1;
    if (stateFromStores != null) {
      parent_id1 = tmp.parent_id;
    }
    if (null != parent_id1) {
      UNSET = UserGuildSettingsStore.getChannelUnreadSetting(tmp6, tmp.parent_id);
    } else {
      UNSET = UnreadSetting.UNSET;
    }
    if (null != guildId) {
      UNSET2 = UserGuildSettingsStore.getGuildUnreadSetting(tmp6);
    } else {
      UNSET2 = UnreadSetting.UNSET;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId), muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId), guildMuted: UserGuildSettingsStore.isMuted(guildId), guildMessageNotifications: messageNotifications, newForumThreadsCreated, defaultSetting: tmp8, unreadSetting: UNSET3, defaultUnreadSetting: UNSET2 };
    newForumThreadsCreated = null != tmp && UserGuildSettingsStore.getNewForumThreadsCreated(tmp);
    if (null != stateFromStores) {
      UNSET3 = UserGuildSettingsStore.resolveUnreadSetting(tmp);
    } else {
      UNSET3 = UnreadSetting.UNSET;
    }
    if (UNSET !== UnreadSetting.UNSET) {
      UNSET2 = UNSET;
    }
    return obj;
  });
  const items2 = [GuildMemberCountStore];
  const items3 = [stateFromStores, onClose];
  const tmpResult4 = tmp(stateFromStores[34]);
  const stateFromStores1 = tmpResult4.useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj2 = { onClose, channel: stateFromStores, guildMemberCount: stateFromStores1, useNewNotifications: hasItem };
    const merged = Object.assign(stateFromStoresObject);
    tmp9 = closure_18(ChannelSettingsNotifications, obj2);
  }
  return tmp9;
});
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default tmp7;
