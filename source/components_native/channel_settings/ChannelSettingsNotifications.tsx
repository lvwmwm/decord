// Module ID: 10280
// Function ID: 79394
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1352, 1348, 4051, 3767, 4325, 1849, 653, 33, 1212, 4130, 689, 5079, 4098, 10281, 1934, 5073, 4324, 4320, 5503, 5165, 10285, 5504, 7519, 7518, 4126, 7495, 4541, 3842, 566, 10286, 10287, 2]
// Exports: default

// Module 10280 (_isNativeReflectConstruct)
import closure_3 from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import module_5079 from "module_5079";
import showActionSheet from "showActionSheet";
import importAllResult from "Form";
import _callSuper from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "ManaContext";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getDefaultNotificationsSublabel(arg0) {
  if (constants.ALL_MESSAGES === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["n/bTaY"]);
  } else if (constants.ONLY_MENTIONS === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.format(require(1212) /* getSystemLocale */.t.L2hmYy, {});
  } else if (constants.NO_MESSAGES === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CtVGyQ);
  }
}
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let guildId;
  let obj = onClose(stateFromStores[34]);
  const items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => outer1_11.getChannel(channelId));
  guildId = undefined;
  if (null != stateFromStores) {
    guildId = stateFromStores.getGuildId();
  }
  const items1 = [closure_14];
  const stateFromStoresObject = onClose(stateFromStores[34]).useStateFromStoresObject(items1, () => {
    let parent_id;
    if (null != stateFromStores) {
      parent_id = stateFromStores.parent_id;
    }
    if (null != parent_id) {
      let NULL = outer1_14.getChannelMessageNotifications(guildId, stateFromStores.parent_id);
    } else {
      NULL = outer1_17.NULL;
    }
    const messageNotifications = outer1_14.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== outer1_17.NULL) {
      tmp8 = NULL;
    }
    const obj = { messageNotifications: outer1_14.getChannelMessageNotifications(guildId, channelId), muted: outer1_14.isChannelMuted(guildId, channelId), muteConfig: outer1_14.getChannelMuteConfig(guildId, channelId), guildMuted: outer1_14.isMuted(guildId), guildMessageNotifications: messageNotifications };
    let newForumThreadsCreated = null != stateFromStores;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = outer1_14.getNewForumThreadsCreated(stateFromStores);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    return obj;
  });
  const obj3 = onClose(stateFromStores[34]);
  const items2 = [closure_12];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = onClose(stateFromStores[34]).useStateFromStores(items2, () => outer1_12.getMemberCount(guildId));
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      if (null != onClose) {
        onClose();
      }
    }
  }, items3);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { onClose, channel: stateFromStores };
    const merged = Object.assign(stateFromStoresObject);
    obj["guildMemberCount"] = stateFromStores1;
    tmp5 = callback3(closure_25, obj);
  }
  return tmp5;
}
({ isGuildTextChannelType: closure_9, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: closure_10 } = _callSuper);
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, SettingsPaneTypes: closure_19, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_20 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.stackPadding = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class ChannelSettingsNotifications {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_26()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.radioGroupRef = outer1_8.createRef();
      tmp2Result.updateSetting = (arg0, NotificationLabel) => {
        let messageNotifications;
        let mute_config;
        let muted;
        ({ muted, messageNotifications, mute_config } = arg0);
        const channel = tmp2Result.props.channel;
        const obj = {};
        let flag = false;
        if (undefined !== muted) {
          obj.muted = muted;
          let tmp = null;
          if (null != mute_config) {
            tmp = mute_config;
          }
          obj.mute_config = tmp;
          flag = true;
        }
        if (undefined !== messageNotifications) {
          obj.message_notifications = messageNotifications;
          flag = true;
        }
        if (flag) {
          const obj2 = outer2_1(outer2_2[17]);
          const result = obj2.updateChannelOverrideSettings(channel.getGuildId(), channel.id, obj, NotificationLabel);
        }
      };
      tmp2Result.handleToggleMuteChannel = () => {
        muted = muted.state.muted;
        const channel = muted.props.channel;
        if (muted) {
          let obj = { muted: !muted };
          muted.setState(obj, () => {
            const NotificationLabel = ChannelSettingsNotifications(outer3_2[21]).NotificationLabel;
            return muted.updateSetting({ muted: !muted }, NotificationLabel.muted(!muted));
          });
        } else {
          obj = outer2_1(outer2_2[18]);
          const _HermesInternal = HermesInternal;
          obj = {};
          const combined = "muteSettings" + channel.id;
          obj.guildId = channel.getGuildId();
          obj.channelId = channel.id;
          obj.onOptionPress = function onOptionPress(muted) {
            const NotificationLabel = ChannelSettingsNotifications(outer3_2[21]).NotificationLabel;
            return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
          };
          obj.openLazy(ChannelSettingsNotifications(outer2_2[20])(outer2_2[19], outer2_2.paths), combined, obj);
          const tmp4 = ChannelSettingsNotifications(outer2_2[20])(outer2_2[19], outer2_2.paths);
        }
      };
      tmp2Result.handleTypeChange = (messageNotifications) => {
        messageNotifications.setState({ messageNotifications }, () => {
          const NotificationLabel = ChannelSettingsNotifications(outer3_2[21]).NotificationLabel;
          return messageNotifications.updateSetting({ messageNotifications }, NotificationLabel.notifications(messageNotifications));
        });
      };
      tmp2Result.state = { messageNotifications: PureComponent.messageNotifications, muted: PureComponent.muted };
      return tmp2Result;
    }
  }
  callback2(ChannelSettingsNotifications, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = outer1_1(outer1_2[22]);
      obj = { settings_type: "channel", destination_pane: outer1_19.CHANNEL_NOTIFICATION_SETTINGS };
      obj.trackWithMetadata(outer1_16.SETTINGS_PANE_VIEWED, obj);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(muted) {
      const self = this;
      if (muted.muted !== this.props.muted) {
        let obj = { muted: self.props.muted };
        self.setState(obj);
      }
      if (muted.messageNotifications !== self.props.messageNotifications) {
        obj = { messageNotifications: self.props.messageNotifications };
        self.setState(obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "renderMuteSection",
    value() {
      const props = this.props;
      const channel = props.channel;
      const muted = this.state.muted;
      let obj = ChannelSettingsNotifications(outer1_2[23]);
      const channelName = obj.computeChannelName(channel, outer1_15, outer1_13, true);
      obj = {};
      obj = {};
      const intl = ChannelSettingsNotifications(outer1_2[14]).intl;
      obj.description = intl.string(ChannelSettingsNotifications(outer1_2[14]).t["6yI+JS"]);
      obj.hasIcons = false;
      const obj1 = {};
      const intl2 = ChannelSettingsNotifications(outer1_2[14]).intl;
      const format = intl2.format;
      const t = ChannelSettingsNotifications(outer1_2[14]).t;
      if (muted) {
        const obj2 = { name: channelName };
        let formatResult = format(t["eC+9rj"], obj2);
      } else {
        const obj3 = { name: channelName };
        formatResult = format(t.byjuJm, obj3);
      }
      obj1.label = formatResult;
      obj1.onPress = this.handleToggleMuteChannel;
      obj1.arrow = !muted;
      obj.children = outer1_21(ChannelSettingsNotifications(outer1_2[25]).TableRow, obj1);
      const items = [outer1_21(ChannelSettingsNotifications(outer1_2[24]).TableRowGroup, obj), ];
      if (!muted) {
        items[1] = null;
        obj.children = items;
        return outer1_23(outer1_22, obj);
      } else {
        const obj4 = { muteConfig: props.muteConfig };
        if (channel.type === outer1_18.GUILD_CATEGORY) {
          let CHANNEL = ChannelSettingsNotifications(outer1_2[26]).MuteSettingType.CATEGORY;
        } else {
          CHANNEL = ChannelSettingsNotifications(outer1_2[26]).MuteSettingType.CHANNEL;
        }
        obj4.type = CHANNEL;
        outer1_21(outer1_1(outer1_2[26]), obj4);
        const tmp10 = outer1_1(outer1_2[26]);
        const tmp7 = outer1_21;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderForumSettings",
    value() {
      let ChannelSettingsNotifications;
      let newForumThreadsCreated;
      const props = this.props;
      ({ channel: ChannelSettingsNotifications, newForumThreadsCreated } = props);
      let guildMuted = this.state.muted;
      const obj = {};
      const intl = ChannelSettingsNotifications(outer1_2[14]).intl;
      obj.label = intl.string(ChannelSettingsNotifications(outer1_2[14]).t.Rkgjph);
      obj.value = newForumThreadsCreated;
      if (!guildMuted) {
        guildMuted = props.guildMuted;
      }
      obj.disabled = guildMuted;
      obj.onValueChange = function onValueChange() {
        const result = outer2_1(outer2_2[17]).setForumThreadsCreated(closure_0, !newForumThreadsCreated);
      };
      return outer1_21(ChannelSettingsNotifications(outer1_2[27]).TableSwitchRow, obj);
    }
  };
  items[4] = {
    key: "renderNotificationSettings",
    value() {
      let channel;
      let defaultSetting;
      let guildMemberCount;
      let guildMuted;
      const self = this;
      ({ channel, guildMuted, guildMemberCount, defaultSetting } = this.props);
      const state = this.state;
      let muted = state.muted;
      if (null != channel.parent_id) {
        const intl2 = ChannelSettingsNotifications(outer1_2[14]).intl;
        let stringResult = intl2.string(ChannelSettingsNotifications(outer1_2[14]).t.wlrV1c);
      } else {
        const intl = ChannelSettingsNotifications(outer1_2[14]).intl;
        stringResult = intl.string(ChannelSettingsNotifications(outer1_2[14]).t["1Wn2M4"]);
      }
      const TableRadioGroup = ChannelSettingsNotifications(outer1_2[28]).TableRadioGroup;
      let obj = { value: state.messageNotifications, onChange: self.handleTypeChange, groupRef: self.radioGroupRef };
      const intl3 = ChannelSettingsNotifications(outer1_2[14]).intl;
      obj.title = intl3.string(ChannelSettingsNotifications(outer1_2[14]).t.h850Ss);
      obj.hasIcons = false;
      const TableRadioRow = ChannelSettingsNotifications(outer1_2[29]).TableRadioRow;
      obj = {};
      if (isGuildStageVoiceResult) {
        let tmp32 = muted;
        if (!muted) {
          tmp32 = guildMuted;
        }
        obj.disabled = tmp32;
        obj.label = stringResult;
        obj.subLabel = outer1_27(defaultSetting);
        obj.value = outer1_17.NULL;
        const items = [tmp8(TableRadioRow, obj), , ];
        obj = {};
        let tmp38 = muted;
        if (!muted) {
          tmp38 = guildMuted;
        }
        obj.disabled = tmp38;
        obj.value = outer1_17.ONLY_MENTIONS;
        const intl8 = ChannelSettingsNotifications(outer1_2[14]).intl;
        obj.label = intl8.string(ChannelSettingsNotifications(outer1_2[14]).t["BENn/6"]);
        items[1] = outer1_21(ChannelSettingsNotifications(outer1_2[29]).TableRadioRow, obj);
        const obj1 = {};
        if (!muted) {
          muted = guildMuted;
        }
        obj1.disabled = muted;
        obj1.value = outer1_17.NO_MESSAGES;
        const intl9 = ChannelSettingsNotifications(outer1_2[14]).intl;
        obj1.label = intl9.string(ChannelSettingsNotifications(outer1_2[14]).t.CtVGyQ);
        items[2] = outer1_21(ChannelSettingsNotifications(outer1_2[29]).TableRadioRow, obj1);
        obj.children = items;
        let tmp7Result = tmp7(TableRadioGroup, obj);
        const tmp35 = outer1_21;
        const tmp42 = outer1_21;
      } else {
        obj.label = stringResult;
        obj.subLabel = outer1_27(defaultSetting);
        let tmp10 = muted;
        if (!muted) {
          tmp10 = guildMuted;
        }
        obj.disabled = tmp10;
        obj.value = outer1_17.NULL;
        const items1 = [tmp8(TableRadioRow, obj), , , ];
        const obj2 = {};
        const intl4 = ChannelSettingsNotifications(outer1_2[14]).intl;
        obj2.label = intl4.string(ChannelSettingsNotifications(outer1_2[14]).t["n/bTaY"]);
        let tmp15 = muted;
        if (!muted) {
          tmp15 = guildMuted;
        }
        obj2.disabled = tmp15;
        let stringResult1 = null;
        if (null != guildMemberCount) {
          stringResult1 = null;
          if (guildMemberCount >= outer1_20) {
            const intl5 = ChannelSettingsNotifications(outer1_2[14]).intl;
            stringResult1 = intl5.string(ChannelSettingsNotifications(outer1_2[14]).t.Dh5p5j);
          }
        }
        obj2.subLabel = stringResult1;
        obj2.value = outer1_17.ALL_MESSAGES;
        items1[1] = outer1_21(ChannelSettingsNotifications(outer1_2[29]).TableRadioRow, obj2);
        const obj3 = {};
        const intl6 = ChannelSettingsNotifications(outer1_2[14]).intl;
        obj3.label = intl6.format(ChannelSettingsNotifications(outer1_2[14]).t.L2hmYy, {});
        let tmp24 = muted;
        if (!muted) {
          tmp24 = guildMuted;
        }
        obj3.disabled = tmp24;
        obj3.value = outer1_17.ONLY_MENTIONS;
        items1[2] = outer1_21(ChannelSettingsNotifications(outer1_2[29]).TableRadioRow, obj3);
        const obj4 = {};
        const intl7 = ChannelSettingsNotifications(outer1_2[14]).intl;
        obj4.label = intl7.string(ChannelSettingsNotifications(outer1_2[14]).t.CtVGyQ);
        let tmp29 = muted;
        if (!muted) {
          tmp29 = guildMuted;
        }
        obj4.disabled = tmp29;
        obj4.value = outer1_17.NO_MESSAGES;
        items1[3] = outer1_21(ChannelSettingsNotifications(outer1_2[29]).TableRadioRow, obj4);
        obj.children = items1;
        tmp7Result = tmp7(TableRadioGroup, obj);
        const tmp12 = outer1_21;
        const tmp21 = outer1_21;
        const tmp26 = outer1_21;
      }
      return tmp7Result;
    }
  };
  items[5] = {
    key: "render",
    value() {
      let guildMessageNotifications;
      let guildMuted;
      const self = this;
      const tmp = outer1_24(this.context);
      const props = this.props;
      const channel = props.channel;
      ({ guildMuted, guildMessageNotifications } = props);
      let tmp9Result = null;
      if (null != channel) {
        if (guildMuted) {
          let obj = { variant: "text-sm/medium", color: "text-muted" };
          const intl = ChannelSettingsNotifications(outer1_2[14]).intl;
          obj = {
            mutedHook(children) {
                  const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
                  return outer2_21(ChannelSettingsNotifications(outer2_2[30]).Text, obj, arg1);
                }
          };
          obj.children = intl.format(ChannelSettingsNotifications(outer1_2[14]).t.O34r15, obj);
          let tmp5 = outer1_21(ChannelSettingsNotifications(outer1_2[30]).Text, obj);
        } else if (guildMessageNotifications === outer1_17.NO_MESSAGES) {
          obj = { variant: "text-sm/medium", color: "text-muted" };
          const intl3 = ChannelSettingsNotifications(outer1_2[14]).intl;
          const obj1 = {
            notificationHook(children) {
                  const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
                  return outer2_21(ChannelSettingsNotifications(outer2_2[30]).Text, obj, arg1);
                }
          };
          obj.children = intl3.format(ChannelSettingsNotifications(outer1_2[14]).t.nRwUIL, obj1);
          tmp5 = outer1_21(ChannelSettingsNotifications(outer1_2[30]).Text, obj);
        }
        const obj2 = { style: tmp.screenContainer };
        const obj3 = { spacing: outer1_1(outer1_2[16]).space.PX_24, style: tmp.stackPadding };
        let renderMuteSectionResult = null;
        if (tmp2) {
          renderMuteSectionResult = self.renderMuteSection();
        }
        const items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
        let tmp15 = null;
        if (channel.isForumLikeChannel()) {
          const obj4 = {};
          const intl2 = ChannelSettingsNotifications(outer1_2[14]).intl;
          obj4.title = intl2.string(ChannelSettingsNotifications(outer1_2[14]).t.bK11jO);
          obj4.hasIcons = false;
          obj4.children = self.renderForumSettings();
          tmp15 = outer1_21(ChannelSettingsNotifications(outer1_2[24]).TableRowGroup, obj4);
        }
        items[2] = tmp15;
        items[3] = tmp5;
        obj3.children = items;
        obj2.children = outer1_23(ChannelSettingsNotifications(outer1_2[32]).Stack, obj3);
        tmp9Result = outer1_21(ChannelSettingsNotifications(outer1_2[31]).Form, obj2);
        const tmp12 = outer1_23;
        const tmp9 = outer1_21;
      }
      return tmp9Result;
    }
  };
  return callback(ChannelSettingsNotifications, items);
})(importAllResult.PureComponent);
let closure_25 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let merged1 = arg0;
  const _require = arg0;
  let obj = _require(566);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getChannel(channelId.channelId));
  _require(10286);
  if (null == stateFromStores) {
    return null;
  } else {
    if (!tmp4) {
      obj = {};
      const merged = Object.assign(merged1);
      let tmp11 = callback3(ChannelSettingsNotificationsGuard, obj);
    }
    obj = { channel: stateFromStores };
    merged1 = Object.assign(merged1);
    tmp11 = callback3(importDefault(10287), obj);
    const tmp15 = importDefault(10287);
  }
};
