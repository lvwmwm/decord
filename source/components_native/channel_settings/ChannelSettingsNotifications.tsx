// Module ID: 10267
// Function ID: 79321
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 10267 (_isNativeReflectConstruct)
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
    const intl3 = arg1(dependencyMap[14]).intl;
    return intl3.string(arg1(dependencyMap[14]).t.n/bTaY);
  } else if (constants.ONLY_MENTIONS === arg0) {
    const intl2 = arg1(dependencyMap[14]).intl;
    return intl2.format(arg1(dependencyMap[14]).t.L2hmYy, {});
  } else if (constants.NO_MESSAGES === arg0) {
    const intl = arg1(dependencyMap[14]).intl;
    return intl.string(arg1(dependencyMap[14]).t.CtVGyQ);
  }
}
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const arg1 = onClose;
  const importDefault = onClose.channelId;
  let closure_3;
  let obj = arg1(dependencyMap[34]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  let guildId;
  if (null != stateFromStores) {
    guildId = stateFromStores.getGuildId();
  }
  closure_3 = guildId;
  const items1 = [closure_14];
  const stateFromStoresObject = arg1(dependencyMap[34]).useStateFromStoresObject(items1, () => {
    let parent_id;
    if (null != stateFromStores) {
      parent_id = stateFromStores.parent_id;
    }
    if (null != parent_id) {
      let NULL = store.getChannelMessageNotifications(guildId, stateFromStores.parent_id);
    } else {
      NULL = constants.NULL;
    }
    const messageNotifications = store.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== constants.NULL) {
      tmp8 = NULL;
    }
    const obj = { messageNotifications: store.getChannelMessageNotifications(guildId, channelId), muted: store.isChannelMuted(guildId, channelId), muteConfig: store.getChannelMuteConfig(guildId, channelId), guildMuted: store.isMuted(guildId), guildMessageNotifications: messageNotifications };
    let newForumThreadsCreated = null != stateFromStores;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = store.getNewForumThreadsCreated(stateFromStores);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    return obj;
  });
  const obj3 = arg1(dependencyMap[34]);
  const items2 = [closure_12];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = arg1(dependencyMap[34]).useStateFromStores(items2, () => memberCount.getMemberCount(guildId));
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
    tmp5 = callback3(tmp6, obj);
  }
  return tmp5;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ isGuildTextChannelType: closure_9, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
const tmp3 = arg1(dependencyMap[6]);
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, SettingsPaneTypes: closure_19, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_20 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[12]);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = arg1(dependencyMap[13]));
let obj = arg1(dependencyMap[15]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWER, paddingTop: importDefault(dependencyMap[16]).space.PX_16 };
obj.screenContainer = obj;
const tmp5 = arg1(dependencyMap[13]);
obj.stackPadding = { paddingHorizontal: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_PADDING };
let closure_24 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class ChannelSettingsNotifications {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, ChannelSettingsNotifications);
      items = [];
      items[0] = PureComponent;
      obj = closure_6(ChannelSettingsNotifications);
      tmp2 = closure_5;
      if (closure_26()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ChannelSettingsNotifications = tmp2Result;
      tmp2Result.radioGroupRef = closure_8.createRef();
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
          const obj2 = callback(closure_2[17]);
          const result = obj2.updateChannelOverrideSettings(channel.getGuildId(), channel.id, obj, NotificationLabel);
        }
      };
      tmp2Result.handleToggleMuteChannel = () => {
        const muted = tmp2Result.state.muted;
        const channel = tmp2Result.props.channel;
        if (muted) {
          let obj = { muted: !muted };
          tmp2Result.setState(obj, () => {
            const NotificationLabel = muted(closure_2[21]).NotificationLabel;
            return muted.updateSetting({ muted: !muted }, NotificationLabel.muted(!muted));
          });
        } else {
          obj = callback(paths[18]);
          const _HermesInternal = HermesInternal;
          obj = {};
          const combined = "muteSettings" + channel.id;
          obj.guildId = channel.getGuildId();
          obj.channelId = channel.id;
          obj.onOptionPress = function onOptionPress(muted) {
            const NotificationLabel = muted(closure_2[21]).NotificationLabel;
            return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
          };
          obj.openLazy(tmp2Result(paths[20])(paths[19], paths.paths), combined, obj);
          const tmp4 = tmp2Result(paths[20])(paths[19], paths.paths);
        }
      };
      tmp2Result.handleTypeChange = (messageNotifications) => {
        messageNotifications.setState({ messageNotifications }, () => {
          const NotificationLabel = arg0(closure_2[21]).NotificationLabel;
          return arg0.updateSetting({ messageNotifications: arg0 }, NotificationLabel.notifications(arg0));
        });
      };
      tmp2Result.state = { messageNotifications: PureComponent.messageNotifications, muted: PureComponent.muted };
      return tmp2Result;
    }
  }
  const arg1 = ChannelSettingsNotifications;
  callback2(ChannelSettingsNotifications, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = callback(closure_2[22]);
      obj = { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS };
      obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
    }
  };
  const items = [obj, , , , , ];
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
      let obj = ChannelSettingsNotifications(closure_2[23]);
      const channelName = obj.computeChannelName(channel, closure_15, closure_13, true);
      obj = {};
      obj = {};
      const intl = ChannelSettingsNotifications(closure_2[14]).intl;
      obj.description = intl.string(ChannelSettingsNotifications(closure_2[14]).t.6yI+JS);
      obj.hasIcons = false;
      const obj1 = {};
      const intl2 = ChannelSettingsNotifications(closure_2[14]).intl;
      const format = intl2.format;
      const t = ChannelSettingsNotifications(closure_2[14]).t;
      if (muted) {
        const obj2 = { name: channelName };
        let formatResult = format(t.eC+9rj, obj2);
      } else {
        const obj3 = { name: channelName };
        formatResult = format(t.byjuJm, obj3);
      }
      obj1.label = formatResult;
      obj1.onPress = this.handleToggleMuteChannel;
      obj1.arrow = !muted;
      obj.children = closure_21(ChannelSettingsNotifications(closure_2[25]).TableRow, obj1);
      const items = [closure_21(ChannelSettingsNotifications(closure_2[24]).TableRowGroup, obj), ];
      if (!muted) {
        items[1] = null;
        obj.children = items;
        return closure_23(closure_22, obj);
      } else {
        const obj4 = { muteConfig: props.muteConfig };
        if (channel.type === constants3.GUILD_CATEGORY) {
          let CHANNEL = ChannelSettingsNotifications(closure_2[26]).MuteSettingType.CATEGORY;
        } else {
          CHANNEL = ChannelSettingsNotifications(closure_2[26]).MuteSettingType.CHANNEL;
        }
        obj4.type = CHANNEL;
        closure_21(callback(closure_2[26]), obj4);
        const tmp10 = callback(closure_2[26]);
        const tmp7 = closure_21;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderForumSettings",
    value() {
      let newForumThreadsCreated;
      const props = this.props;
      ({ channel: closure_0, newForumThreadsCreated } = props);
      let guildMuted = this.state.muted;
      const obj = {};
      const intl = ChannelSettingsNotifications(closure_2[14]).intl;
      obj.label = intl.string(ChannelSettingsNotifications(closure_2[14]).t.Rkgjph);
      obj.value = newForumThreadsCreated;
      if (!guildMuted) {
        guildMuted = props.guildMuted;
      }
      obj.disabled = guildMuted;
      obj.onValueChange = function onValueChange() {
        const result = newForumThreadsCreated(closure_2[17]).setForumThreadsCreated(closure_0, !newForumThreadsCreated);
      };
      return closure_21(ChannelSettingsNotifications(closure_2[27]).TableSwitchRow, obj);
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
        const intl2 = ChannelSettingsNotifications(closure_2[14]).intl;
        let stringResult = intl2.string(ChannelSettingsNotifications(closure_2[14]).t.wlrV1c);
      } else {
        const intl = ChannelSettingsNotifications(closure_2[14]).intl;
        stringResult = intl.string(ChannelSettingsNotifications(closure_2[14]).t.1Wn2M4);
      }
      const TableRadioGroup = ChannelSettingsNotifications(closure_2[28]).TableRadioGroup;
      let obj = { value: state.messageNotifications, onChange: self.handleTypeChange, groupRef: self.radioGroupRef };
      const intl3 = ChannelSettingsNotifications(closure_2[14]).intl;
      obj.title = intl3.string(ChannelSettingsNotifications(closure_2[14]).t.h850Ss);
      obj.hasIcons = false;
      const TableRadioRow = ChannelSettingsNotifications(closure_2[29]).TableRadioRow;
      obj = {};
      if (isGuildStageVoiceResult) {
        let tmp32 = muted;
        if (!muted) {
          tmp32 = guildMuted;
        }
        obj.disabled = tmp32;
        obj.label = stringResult;
        obj.subLabel = callback8(defaultSetting);
        obj.value = constants2.NULL;
        const items = [tmp8(TableRadioRow, obj), , ];
        obj = {};
        let tmp38 = muted;
        if (!muted) {
          tmp38 = guildMuted;
        }
        obj.disabled = tmp38;
        obj.value = constants2.ONLY_MENTIONS;
        const intl8 = ChannelSettingsNotifications(closure_2[14]).intl;
        obj.label = intl8.string(ChannelSettingsNotifications(closure_2[14]).t.BENn/6);
        items[1] = closure_21(ChannelSettingsNotifications(closure_2[29]).TableRadioRow, obj);
        const obj1 = {};
        if (!muted) {
          muted = guildMuted;
        }
        obj1.disabled = muted;
        obj1.value = constants2.NO_MESSAGES;
        const intl9 = ChannelSettingsNotifications(closure_2[14]).intl;
        obj1.label = intl9.string(ChannelSettingsNotifications(closure_2[14]).t.CtVGyQ);
        items[2] = closure_21(ChannelSettingsNotifications(closure_2[29]).TableRadioRow, obj1);
        obj.children = items;
        let tmp7Result = tmp7(TableRadioGroup, obj);
        const tmp35 = closure_21;
        const tmp42 = closure_21;
      } else {
        obj.label = stringResult;
        obj.subLabel = callback8(defaultSetting);
        let tmp10 = muted;
        if (!muted) {
          tmp10 = guildMuted;
        }
        obj.disabled = tmp10;
        obj.value = constants2.NULL;
        const items1 = [tmp8(TableRadioRow, obj), , , ];
        const obj2 = {};
        const intl4 = ChannelSettingsNotifications(closure_2[14]).intl;
        obj2.label = intl4.string(ChannelSettingsNotifications(closure_2[14]).t.n/bTaY);
        let tmp15 = muted;
        if (!muted) {
          tmp15 = guildMuted;
        }
        obj2.disabled = tmp15;
        let stringResult1 = null;
        if (null != guildMemberCount) {
          stringResult1 = null;
          if (guildMemberCount >= closure_20) {
            const intl5 = ChannelSettingsNotifications(closure_2[14]).intl;
            stringResult1 = intl5.string(ChannelSettingsNotifications(closure_2[14]).t.Dh5p5j);
          }
        }
        obj2.subLabel = stringResult1;
        obj2.value = constants2.ALL_MESSAGES;
        items1[1] = closure_21(ChannelSettingsNotifications(closure_2[29]).TableRadioRow, obj2);
        const obj3 = {};
        const intl6 = ChannelSettingsNotifications(closure_2[14]).intl;
        obj3.label = intl6.format(ChannelSettingsNotifications(closure_2[14]).t.L2hmYy, {});
        let tmp24 = muted;
        if (!muted) {
          tmp24 = guildMuted;
        }
        obj3.disabled = tmp24;
        obj3.value = constants2.ONLY_MENTIONS;
        items1[2] = closure_21(ChannelSettingsNotifications(closure_2[29]).TableRadioRow, obj3);
        const obj4 = {};
        const intl7 = ChannelSettingsNotifications(closure_2[14]).intl;
        obj4.label = intl7.string(ChannelSettingsNotifications(closure_2[14]).t.CtVGyQ);
        let tmp29 = muted;
        if (!muted) {
          tmp29 = guildMuted;
        }
        obj4.disabled = tmp29;
        obj4.value = constants2.NO_MESSAGES;
        items1[3] = closure_21(ChannelSettingsNotifications(closure_2[29]).TableRadioRow, obj4);
        obj.children = items1;
        tmp7Result = tmp7(TableRadioGroup, obj);
        const tmp12 = closure_21;
        const tmp21 = closure_21;
        const tmp26 = closure_21;
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
      const tmp = callback6(this.context);
      const props = this.props;
      const channel = props.channel;
      ({ guildMuted, guildMessageNotifications } = props);
      let tmp9Result = null;
      if (null != channel) {
        if (guildMuted) {
          let obj = { cachedAt: "y", edpbxy: "isArray" };
          const intl = ChannelSettingsNotifications(closure_2[14]).intl;
          obj = {
            mutedHook(children) {
                  const obj = { cachedAt: 1, edpbxy: "center", children };
                  return callback2(callback(closure_2[30]).Text, obj, arg1);
                }
          };
          obj.children = intl.format(ChannelSettingsNotifications(closure_2[14]).t.O34r15, obj);
          let tmp5 = callback5(ChannelSettingsNotifications(closure_2[30]).Text, obj);
        } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
          obj = { cachedAt: "y", edpbxy: "isArray" };
          const intl3 = ChannelSettingsNotifications(closure_2[14]).intl;
          const obj1 = {
            notificationHook(children) {
                  const obj = { cachedAt: -5, edpbxy: 16, children };
                  return callback2(callback(closure_2[30]).Text, obj, arg1);
                }
          };
          obj.children = intl3.format(ChannelSettingsNotifications(closure_2[14]).t.nRwUIL, obj1);
          tmp5 = callback5(ChannelSettingsNotifications(closure_2[30]).Text, obj);
        }
        const obj2 = { style: tmp.screenContainer };
        const obj3 = { spacing: callback(closure_2[16]).space.PX_24, style: tmp.stackPadding };
        let renderMuteSectionResult = null;
        if (tmp2) {
          renderMuteSectionResult = self.renderMuteSection();
        }
        const items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
        let tmp15 = null;
        if (channel.isForumLikeChannel()) {
          const obj4 = {};
          const intl2 = ChannelSettingsNotifications(closure_2[14]).intl;
          obj4.title = intl2.string(ChannelSettingsNotifications(closure_2[14]).t.bK11jO);
          obj4.hasIcons = false;
          obj4.children = self.renderForumSettings();
          tmp15 = callback5(ChannelSettingsNotifications(closure_2[24]).TableRowGroup, obj4);
        }
        items[2] = tmp15;
        items[3] = tmp5;
        obj3.children = items;
        obj2.children = closure_23(ChannelSettingsNotifications(closure_2[32]).Stack, obj3);
        tmp9Result = callback5(ChannelSettingsNotifications(closure_2[31]).Form, obj2);
        const tmp12 = closure_23;
        const tmp9 = callback5;
      }
      return tmp9Result;
    }
  };
  return callback(ChannelSettingsNotifications, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[33]).ThemeContext;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[37]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let merged1 = arg0;
  const arg1 = arg0;
  let obj = arg1(dependencyMap[34]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(arg0.channelId));
  arg1(dependencyMap[35]);
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
    tmp11 = callback3(importDefault(dependencyMap[36]), obj);
    const tmp15 = importDefault(dependencyMap[36]);
  }
};
