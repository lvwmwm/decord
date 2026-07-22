// Module ID: 15379
// Function ID: 117144
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 15379 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class PinImage {
  constructor(arg0) {
    arg1 = global.channelId;
    tmp = jsxs();
    obj = arg1(dependencyMap[29]);
    items = [];
    items[0] = closure_22;
    tmp2 = undefined;
    if (obj.useStateFromStores(items, () => closure_22.hasUnreadPins(channelId))) {
      tmp3 = jsx;
      tmp4 = View;
      obj = {};
      obj.style = tmp.outer;
      tmp5 = jsx;
      tmp6 = View;
      obj1 = {};
      obj1.style = tmp.badge;
      obj.children = jsx(View, obj1);
      tmp2 = jsx(View, obj);
    }
    obj2 = { style: global.style };
    items1 = [, ];
    items1[0] = jsx(arg1(dependencyMap[30]).PinIcon, {});
    items1[1] = tmp2;
    obj2.children = items1;
    return jsxs(View, obj2);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const View = arg1(dependencyMap[7]).View;
let closure_11 = importDefault(dependencyMap[8]);
({ EDITABLE_VOICE_SETTINGS_TYPES: closure_12, isGuildTextChannelType: closure_13, THREADED_CHANNEL_TYPES: closure_14, THREAD_CHANNEL_TYPES: closure_15 } = arg1(dependencyMap[9]));
const isGuildNSFW = arg1(dependencyMap[10]).isGuildNSFW;
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
let closure_22 = importDefault(dependencyMap[16]);
let closure_23 = importDefault(dependencyMap[17]);
let closure_24 = importDefault(dependencyMap[18]);
let closure_25 = importDefault(dependencyMap[19]);
let closure_26 = arg1(dependencyMap[20]).ChannelSettingsAutoFocusElement;
const tmp3 = arg1(dependencyMap[9]);
({ AnalyticEvents: closure_27, BITRATE_DEFAULT: closure_28, BITRATE_MIN: closure_29, ChannelSettingsSections: closure_30, ChannelTypes: closure_31, ChannelTypesSets: closure_32, GuildFeatures: closure_33, GuildSettingsSections: closure_34, HelpdeskArticles: closure_35, MAX_CHANNEL_NAME_LENGTH: closure_36, MAX_VOICE_USER_LIMIT: closure_37, MAX_STAGE_VOICE_USER_LIMIT: closure_38, Permissions: closure_39, SettingsPaneTypes: closure_40, SLOWMODE_VALUES: closure_41, VideoQualityMode: closure_42 } = arg1(dependencyMap[21]));
const tmp4 = arg1(dependencyMap[21]);
({ ChannelFlags: closure_43, MAX_CHANNEL_TOPIC_LENGTH: closure_44, MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_45 } = arg1(dependencyMap[22]));
const MAX_FORUM_TAGS = arg1(dependencyMap[23]).MAX_FORUM_TAGS;
let closure_47 = arg1(dependencyMap[24]).DEFAULT_AUTO_ARCHIVE_DURATION;
const tmp5 = arg1(dependencyMap[22]);
({ jsx: closure_48, jsxs: closure_49, Fragment: closure_50 } = arg1(dependencyMap[26]));
let obj = arg1(dependencyMap[27]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[28]).radii.md, backgroundColor: importDefault(dependencyMap[28]).colors.BACKGROUND_SURFACE_HIGH };
obj.outer = obj;
const tmp6 = arg1(dependencyMap[26]);
obj.badge = { backgroundColor: importDefault(dependencyMap[28]).unsafe_rawColors.RED_400, borderRadius: importDefault(dependencyMap[28]).radii.xs };
let closure_51 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[27]);
const obj2 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[28]).unsafe_rawColors.RED_400, borderRadius: importDefault(dependencyMap[28]).radii.xs };
obj2.screenContainer = { flex: 1, backgroundColor: importDefault(dependencyMap[28]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: importDefault(dependencyMap[28]).space.PX_16 };
obj2.slider = { marginHorizontal: 15 };
obj4 = { paddingHorizontal: importDefault(dependencyMap[28]).modules.mobile.TABLE_ROW_PADDING };
obj2.stackPadding = obj4;
obj2.alertText = { marginTop: 16 };
obj2.tagsWrapper = { position: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164, location: 0.000000007919535119815975, body: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164 };
const obj3 = { flex: 1, backgroundColor: importDefault(dependencyMap[28]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: importDefault(dependencyMap[28]).space.PX_16 };
obj2.addTagIconButtonWrapper = { justifyContent: "center", margin: importDefault(dependencyMap[28]).space.PX_4 };
const obj5 = { justifyContent: "center", margin: importDefault(dependencyMap[28]).space.PX_4 };
obj2.createTagButton = { marginTop: importDefault(dependencyMap[28]).space.PX_4 };
obj2.createTagButtonText = { fontFamily: arg1(dependencyMap[25]).Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_52 = obj4.createLegacyClassComponentStyles(obj2);
const tmp7 = (PureComponent) => {
  class ChannelSettingsOverview {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, ChannelSettingsOverview);
      items = [];
      items[0] = PureComponent;
      obj = closure_7(ChannelSettingsOverview);
      tmp2 = closure_6;
      if (closure_54()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ChannelSettingsOverview = tmp2Result;
      obj2 = closure_1(closure_2[31]);
      tmp2Result._cooldown = obj2.findIndex(closure_41, (arg0) => arg0 >= tmp2Result.props.channel.rateLimitPerUser);
      tmp2Result.state = { hasChanges: false };
      tmp2Result.pushScreen = (arg0) => {
        const items = [...arguments];
        const navigation = tmp2Result.props.navigation;
        const items1 = [...items];
        navigation.push.apply(items1);
        if (items[0] !== constants2.PERMISSIONS) {
          let obj = callback(closure_2[32]);
          obj = { settings_type: "channel", origin_pane: constants4.CHANNEL_SETTINGS, destination_pane: items[0] };
          obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
        }
      };
      tmp2Result.handleSave = () => {
        let threadMetadata;
        if (tmp2Result.state.hasChanges) {
          const channel = tmp2Result.props.channel;
          let obj = callback(closure_2[33]);
          obj = {};
          ({ name: obj2.name, type: obj2.type, topic: obj2.topic, position: obj2.position, bitrate: obj2.bitrate, userLimit: obj2.userLimit, defaultAutoArchiveDuration: obj2.defaultAutoArchiveDuration, nsfw: obj2.nsfw, rateLimitPerUser: obj2.rateLimitPerUser, videoQualityMode: obj2.videoQualityMode, threadMetadata } = channel);
          let autoArchiveDuration;
          if (null != threadMetadata) {
            autoArchiveDuration = threadMetadata.autoArchiveDuration;
          }
          obj.autoArchiveDuration = autoArchiveDuration;
          const threadMetadata2 = channel.threadMetadata;
          let locked;
          if (null != threadMetadata2) {
            locked = threadMetadata2.locked;
          }
          obj.locked = locked;
          const threadMetadata3 = channel.threadMetadata;
          let invitable;
          if (null != threadMetadata3) {
            invitable = threadMetadata3.invitable;
          }
          obj.invitable = invitable;
          obj.flags = channel.flags;
          obj.defaultSortOrder = channel.getDefaultSortOrder();
          obj.defaultForumLayout = channel.defaultForumLayout;
          obj.defaultTagSetting = channel.getDefaultTagSetting();
          ({ iconEmoji: obj2.iconEmoji, themeColor: obj2.themeColor } = channel);
          obj.saveChannel(channel.id, obj).then((status) => {
            if (200 === status.status) {
              let navigation = callback(closure_2[34]).open;
              let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: callback(closure_2[35]) };
              const tmp6 = callback(closure_2[34]);
              const intl = channel(closure_2[36]).intl;
              const string = intl.string;
              let n2Y84J = channel(closure_2[36]).t;
              if (isThreadResult) {
                n2Y84J = n2Y84J.n2Y84J;
                let stringResult = string(n2Y84J);
              } else {
                stringResult = string(n2Y84J.FE/ohq);
              }
              goBackResult.content = stringResult;
              navigation(goBackResult);
              navigation = channel.props.navigation;
              goBackResult = navigation.goBack();
              const isThreadResult = channel.isThread();
            }
          });
          obj = { hasChanges: false };
          channel.setState(obj);
          const saveChannelResult = obj.saveChannel(channel.id, obj);
        }
      };
      tmp2Result.handleChangeName = (arg0) => {
        const channel = tmp2Result.props.channel;
        if (channel.isThread()) {
          let result = callback(closure_2[37])(arg0, false);
        } else {
          const LIMITED_CHANNEL_NAME = constants3.LIMITED_CHANNEL_NAME;
          result = arg0;
          if (LIMITED_CHANNEL_NAME.has(channel.type)) {
            let obj = tmp2Result(closure_2[38]);
            result = obj.sanitizeGuildTextChannelName(arg0);
          }
        }
        obj = { name: result };
        callback(closure_2[33]).updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleBlurName = () => {
        const channel = tmp2Result.props.channel;
        if (channel.isThread()) {
          const tmp3 = callback(closure_2[37])(channel.name, true);
          if (tmp3 !== channel.name) {
            let obj = callback(closure_2[33]);
            obj = { name: tmp3 };
            obj.updateChannel(obj);
            obj = { hasChanges: true };
            tmp2Result.setState(obj);
          }
        }
      };
      tmp2Result.handleChangeTopic = (emojiName) => {
        let obj = callback(closure_2[33]);
        obj = { topic: callback(closure_2[39]).translateInlineEmojiToSurrogates(emojiName) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleBitRateChange = (arg0) => {
        let obj = callback(closure_2[33]);
        obj = { bitrate: Math.round(arg0) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleVideoQualityModeChange = (videoQualityMode) => {
        let obj = callback(closure_2[33]);
        obj = { videoQualityMode };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleNsfwChange = (nsfw) => {
        let obj = callback(closure_2[33]);
        obj = { nsfw };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleThreadSpoilerChange = (arg0) => {
        const obj = tmp2Result(closure_2[40]);
        const setFlagResult = tmp2Result(closure_2[40]).setFlag(tmp2Result.props.channel.flags, constants5.IS_SPOILER_CHANNEL, arg0);
        callback(closure_2[33]).updateChannel({ flags: setFlagResult });
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleSlowmodeChange = (arg0) => {
        let hasChanges = tmp2Result.state.hasChanges;
        let obj = callback(closure_2[33]);
        obj.updateChannel({ rateLimitPerUser: closure_41[Math.round(Math, arg0)] });
        const AccessibilityAnnouncer = tmp2Result(closure_2[41]).AccessibilityAnnouncer;
        const intl = tmp2Result(closure_2[36]).intl;
        AccessibilityAnnouncer.announce(tmp2Result(closure_2[42]).getSecondsSliderLabel(closure_41[Math.round(Math, arg0)], false, intl.string(tmp2Result(closure_2[36]).t.zvDu4h)));
        obj = {};
        if (!hasChanges) {
          hasChanges = tmp2Result.props.channel.rateLimitPerUser !== tmp2;
        }
        obj.hasChanges = hasChanges;
        tmp2Result.setState(obj);
      };
      tmp2Result.handleDefaultAutoArchiveDurationChange = (defaultAutoArchiveDuration) => {
        let obj = callback(closure_2[33]);
        obj = { defaultAutoArchiveDuration };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleAutoArchiveDurationChange = (autoArchiveDuration) => {
        let obj = callback(closure_2[33]);
        obj = { autoArchiveDuration };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleDefaultSortOrderChange = (defaultSortOrder) => {
        let obj = callback(closure_2[33]);
        obj = { defaultSortOrder };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleDefaultTagSettingChange = (defaultTagSetting) => {
        let obj = callback(closure_2[33]);
        obj = { defaultTagSetting };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleInvitableChange = (invitable) => {
        let obj = callback(closure_2[33]);
        obj = { invitable };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleAnnouncementChange = (arg0) => {
        let obj = callback(closure_2[33]);
        obj = { type: arg0 ? tmp.GUILD_TEXT : tmp.GUILD_ANNOUNCEMENT };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleActiveChannelsRemovedChange = (arg0) => {
        const obj = tmp2Result(closure_2[40]);
        const setFlagResult = tmp2Result(closure_2[40]).setFlag(tmp2Result.props.channel.flags, constants5.ACTIVE_CHANNELS_REMOVED, !arg0);
        callback(closure_2[33]).updateChannel({ flags: setFlagResult });
        tmp2Result.setState({ hasChanges: true });
      };
      fn = (arg0) => {
        let obj = callback(closure_2[33]);
        obj = { userLimit: Math.round(arg0) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleUserLimitChange = fn;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp7 = closure_3(fn);
      tmp2Result.handleDeleteChannel = tmp7;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp2Result.handleConfirmDeleteChannel = closure_3(tmp7);
      tmp2Result.handlePressTag = (tag) => {
        tmp2Result.pushScreen(constants2.EDIT_FORUM_TAG, { tag });
      };
      tmp2Result.handleToggleRequireTag = () => {
        if (tmp2Result.props.canManageChannels) {
          const channel = tmp2Result.props.channel;
          let obj = tmp2Result(closure_2[40]);
          const hasFlagResult = channel.hasFlag(constants5.REQUIRE_TAG);
          const setFlagResult = obj.setFlag(tmp2Result.props.channel.flags, constants5.REQUIRE_TAG, !channel.hasFlag(constants5.REQUIRE_TAG));
          obj = { flags: setFlagResult };
          callback(closure_2[33]).updateChannel(obj);
          obj = { hasChanges: true };
          tmp2Result.setState(obj);
          const obj2 = callback(closure_2[33]);
        }
      };
      tmp2Result.handleToggleShowMediaDownloadOptions = () => {
        if (tmp2Result.props.canManageChannels) {
          const channel = tmp2Result.props.channel;
          let obj = tmp2Result(closure_2[40]);
          const hasFlagResult = channel.hasFlag(constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS);
          const setFlagResult = obj.setFlag(tmp2Result.props.channel.flags, constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS, !channel.hasFlag(constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS));
          obj = { flags: setFlagResult };
          callback(closure_2[33]).updateChannel(obj);
          obj = { hasChanges: true };
          tmp2Result.setState(obj);
          const obj2 = callback(closure_2[33]);
        }
      };
      tmp2Result.getError = (arg0) => {
        const errors = tmp2Result.props.errors;
        let tmp;
        if (null != errors) {
          tmp = errors[arg0];
        }
        return tmp;
      };
      tmp2Result.state.hasChanges = closure_17.hasChanges();
      return tmp2Result;
    }
  }
  const arg1 = ChannelSettingsOverview;
  callback2(ChannelSettingsOverview, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this.updateNavigation(undefined, this.state);
      if (tmp2) {
        let obj = callback(closure_2[52]);
        const regions = obj.fetchRegions(self.props.guild.id);
      }
      obj = { settings_type: "channel", destination_pane: constants6.CHANNEL_SETTINGS };
      callback(closure_2[32]).trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0, arg1) {
      this.updateNavigation(arg0, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigation",
    value(submitting, hasChanges) {
      let isThread;
      let navigation;
      const ChannelSettingsOverview = this;
      const props = this.props;
      ({ navigation, submitting, isThread } = props);
      const type = props.channel.type;
      hasChanges = this.state.hasChanges;
      if (isThread) {
        const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
        const string = intl3.string;
        let BsJrhj = ChannelSettingsOverview(closure_2[36]).t;
        if (props.isForumPost) {
          BsJrhj = BsJrhj.BsJrhj;
          let stringResult = string(BsJrhj);
        } else {
          stringResult = string(BsJrhj.d4n5Q1);
        }
      } else {
        if (type === constants2.GUILD_CATEGORY) {
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          let stringResult1 = intl2.string(ChannelSettingsOverview(closure_2[36]).t./uELTj);
        } else {
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          stringResult1 = intl.string(ChannelSettingsOverview(closure_2[36]).t.XPDhcc);
        }
        let setOptionsResult = {};
        if (submitting) {
          let fn = ChannelSettingsOverview(closure_2[53]).HeaderSubmittingIndicator;
        } else {
          fn = (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["onPress"] = self.handleSave;
            const intl = self(closure_2[36]).intl;
            obj["label"] = intl.string(self(closure_2[36]).t.R3BPH+);
            obj["disabled"] = !hasChanges;
            return callback(self(closure_2[54]).HeaderTextButton, obj);
          };
        }
        setOptionsResult.headerRight = fn;
        setOptionsResult.title = stringResult1;
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderChannelInfo",
    value() {
      let canManageChannels;
      let canManageThread;
      let canSendMessages;
      let channel;
      let isChannelOwner;
      let isForumPost;
      let isThread;
      const self = this;
      const props = this.props;
      ({ channel, canManageChannels, isThread } = props);
      ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
      let hasItem = callback5(channel.type) && !isThread;
      if (!hasItem) {
        const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      let obj = ChannelSettingsOverview(closure_2[55]);
      const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({ canManageThread, canManageChannels, canSendMessages, isForumPost, isThread, isChannelOwner });
      if (channel.isForumPost()) {
        const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
        let stringResult = intl4.string(ChannelSettingsOverview(closure_2[36]).t.uyVrTN);
      } else if (isThread) {
        const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
        stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.j3XWjD);
      } else if (channel.type === constants2.GUILD_CATEGORY) {
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        stringResult = intl2.string(ChannelSettingsOverview(closure_2[36]).t.OCAkGP);
      } else {
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        stringResult = intl.string(ChannelSettingsOverview(closure_2[36]).t.PVbHDl);
      }
      obj = { ref: self.props.channelNameRef, label: stringResult, accessibilityLabel: stringResult };
      const TextInput = ChannelSettingsOverview(closure_2[56]).TextInput;
      obj.value = ChannelSettingsOverview(closure_2[48]).computeChannelName(channel, closure_25, closure_24);
      ({ handleChangeName: obj2.onChange, handleBlurName: obj2.onBlur } = self);
      obj.isDisabled = !isChannelNameSettingEditable;
      obj.maxLength = closure_36;
      obj.errorMessage = self.getError("name");
      obj.enableAndroidSanitizedInputWorkaround = true;
      if (!hasItem) {
        obj = {};
        const items = [tmp14, undefined];
        obj.children = items;
        return callback7(closure_50, obj);
      } else {
        const intl5 = ChannelSettingsOverview(closure_2[36]).intl;
        const string = intl5.string;
        const t = ChannelSettingsOverview(closure_2[36]).t;
        if (isForumLikeChannelResult) {
          let stringResult1 = string(t.yR6HwZ);
        } else {
          stringResult1 = string(t.X8jMDh);
        }
        const obj1 = { label: stringResult1, accessibilityLabel: stringResult1 };
        const isForumLikeChannelResult = channel.isForumLikeChannel();
        const tmp19 = closure_48;
        obj1.value = callback(closure_2[39]).translateSurrogatesToInlineEmoji(channel.topic);
        obj1.onChange = self.handleChangeTopic;
        obj1.isDisabled = !canManageChannels;
        obj1.autoCorrect = true;
        obj1.maxLength = channel.isForumLikeChannel() ? closure_45 : closure_44;
        obj1.errorMessage = self.getError("topic");
        tmp19(ChannelSettingsOverview(closure_2[57]).TextArea, obj1);
        const obj5 = callback(closure_2[39]);
      }
    }
  };
  items[4] = {
    key: "renderNsfwConfig",
    value() {
      const channel = this.props.channel;
      let tmp7Result = null;
      if (channel.type === constants2.GUILD_TEXT) {
        tmp7Result = null;
        if (tmp2) {
          let obj = ChannelSettingsOverview(closure_2[58]);
          tmp7Result = null;
          if (!obj.isIOS()) {
            obj = {};
            const intl = ChannelSettingsOverview(closure_2[36]).intl;
            obj.helperText = intl.string(ChannelSettingsOverview(closure_2[36]).t.9eUgwR);
            obj.hasIcons = false;
            obj = {};
            const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
            obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.Es25Yf);
            obj.value = ChannelSettingsOverview(closure_2[61]).isChannelOrGuildNSFW(channel);
            obj.onValueChange = tmp.handleNsfwChange;
            obj.disabled = tmp3;
            let stringResult;
            if (null != channel.linkedLobby) {
              const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
              stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.l6uSVa);
            }
            obj.subLabel = stringResult;
            obj.children = closure_48(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj);
            tmp7Result = closure_48(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "nsfw-section");
            const obj4 = ChannelSettingsOverview(closure_2[61]);
            const tmp10 = closure_48;
            const tmp7 = closure_48;
          }
        }
      }
      return tmp7Result;
    }
  };
  items[5] = {
    key: "renderThreadSpoiler",
    value() {
      const props = this.props;
      const channel = props.channel;
      let tmp = null;
      if (channel.isThread()) {
        let obj = {};
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        obj.helperText = intl.string(ChannelSettingsOverview(closure_2[36]).t.ddWXHa);
        obj.hasIcons = false;
        obj = {};
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.TvUHTb);
        obj.value = channel.isSpoilerChannel();
        obj.onValueChange = this.handleThreadSpoilerChange;
        obj.disabled = !props.canManageThread;
        obj.children = callback6(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj);
        tmp = callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "thread-spoiler-section");
      }
      return tmp;
    }
  };
  items[6] = {
    key: "renderSlowmode",
    value() {
      const self = this;
      const channel = this.props.channel;
      if (channel.type !== constants2.GUILD_TEXT) {
        return null;
      }
      const items = [];
      let obj = ChannelSettingsOverview(closure_2[42]);
      const intl = ChannelSettingsOverview(closure_2[36]).intl;
      const secondsSliderLabel = obj.getSecondsSliderLabel(channel.rateLimitPerUser, false, intl.string(ChannelSettingsOverview(closure_2[36]).t.zvDu4h));
      if (channel.isForumLikeChannel()) {
        const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
        let stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.a+1pdO);
      } else {
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        const string = intl2.string;
        const t = ChannelSettingsOverview(closure_2[36]).t;
        if (isThreadResult) {
          stringResult = string(t.OMmNCv);
        } else {
          stringResult = string(t.HEA/DU);
        }
        const isThreadResult = channel.isThread();
      }
      obj = { helperText: stringResult, hasIcons: false };
      obj = { border: "none" };
      const obj1 = { style: { "Null": -504174744899997300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003696267499710345, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011865276442541145, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015865757 } };
      const obj2 = { style: { flexShrink: 1 } };
      const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
      obj2.children = intl4.string(ChannelSettingsOverview(closure_2[36]).t.piZgKF);
      const items1 = [callback6(ChannelSettingsOverview(closure_2[45]).Text, obj2), ];
      const obj3 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0, children: secondsSliderLabel };
      items1[1] = callback6(ChannelSettingsOverview(closure_2[45]).Text, obj3);
      obj1.children = items1;
      const items2 = [callback7(closure_10, obj1), ];
      const obj4 = { style: items3, value: self._cooldown, minimumValue: 0, maximumValue: length.length - 1, onValueChange: self.handleSlowmodeChange };
      const items3 = [callback8(this.context).slider, {}];
      const intl5 = ChannelSettingsOverview(closure_2[36]).intl;
      obj4.accessibilityLabel = intl5.string(ChannelSettingsOverview(closure_2[36]).t.piZgKF);
      obj4.accessibilityValue = { text: secondsSliderLabel };
      items2[1] = callback6(ChannelSettingsOverview(closure_2[63]).Slider, obj4);
      obj.children = items2;
      obj.children = callback7(ChannelSettingsOverview(closure_2[62]).Card, obj);
      items.push(callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "slowmode-section"));
      return items;
    }
  };
  items[7] = {
    key: "renderAutoArchiveDuration",
    value() {
      let canManageThread;
      let isForumPost;
      const props = this.props;
      const channel = props.channel;
      ({ canManageThread, isForumPost } = props);
      if (channel.isThread()) {
        if (canManageThread) {
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          const string = intl.string;
          const t = ChannelSettingsOverview(closure_2[36]).t;
          if (isForumPost) {
            let stringResult = string(t.3aJN9M);
          } else {
            stringResult = string(t.YUXr4Z);
          }
          const obj = {};
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.title = intl2.string(ChannelSettingsOverview(closure_2[36]).t.FGjMZS);
          obj.description = stringResult;
          const threadMetadata = channel.threadMetadata;
          let autoArchiveDuration;
          if (null != threadMetadata) {
            autoArchiveDuration = threadMetadata.autoArchiveDuration;
          }
          if (null == autoArchiveDuration) {
            autoArchiveDuration = closure_47;
          }
          obj.selected = autoArchiveDuration;
          obj.channel = channel;
          obj.onSelectDuration = this.handleAutoArchiveDurationChange;
          return closure_48(ChannelSettingsOverview(closure_2[64]).AutoArchiveDurationOptions, obj);
        }
      }
      return null;
    }
  };
  items[8] = {
    key: "renderInvitable",
    value() {
      const channel = this.props.channel;
      let tmp3 = null;
      if (null != channel.threadMetadata) {
        tmp3 = null;
        if (channel.type === constants2.PRIVATE_THREAD) {
          let obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj.description = intl.string(ChannelSettingsOverview(closure_2[36]).t.cSyXJk);
          obj.hasIcons = false;
          obj = { disabled: !tmp2 };
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.s2rpNf);
          obj.value = channel.threadMetadata.invitable;
          obj.onValueChange = tmp.handleInvitableChange;
          obj.children = callback6(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj);
          tmp3 = callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "thread-invitable-section");
        }
      }
      return tmp3;
    }
  };
  items[9] = {
    key: "renderDefaultAutoArchiveDuration",
    value() {
      const props = this.props;
      const channel = props.channel;
      let tmp = null;
      if (set2.has(channel.type)) {
        tmp = null;
        if (props.canManageChannels) {
          const obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(closure_2[36]).t.FGjMZS);
          obj.selected = ChannelSettingsOverview(closure_2[65]).getAutoArchiveDuration(channel, null);
          obj.channel = channel;
          obj.onSelectDuration = this.handleDefaultAutoArchiveDurationChange;
          const obj2 = ChannelSettingsOverview(closure_2[65]);
          const tmp2 = closure_48;
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          const string = intl2.string;
          let fyXclY = ChannelSettingsOverview(closure_2[36]).t;
          if (isForumLikeChannelResult) {
            fyXclY = fyXclY.fyXclY;
            let stringResult = string(fyXclY);
          } else {
            stringResult = string(fyXclY.W3Noi9);
          }
          obj.description = stringResult;
          tmp2(ChannelSettingsOverview(closure_2[64]).AutoArchiveDurationOptions, obj);
          const isForumLikeChannelResult = channel.isForumLikeChannel();
        }
      }
      return tmp;
    }
  };
  items[10] = {
    key: "renderDefaultSortOrder",
    value() {
      const props = this.props;
      const channel = props.channel;
      if (channel.isForumLikeChannel()) {
        if (props.canManageChannels) {
          const defaultSortOrder = channel.getDefaultSortOrder();
          let obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(closure_2[36]).t.gePre2);
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.description = intl2.string(ChannelSettingsOverview(closure_2[36]).t.165cVX);
          obj.value = defaultSortOrder;
          obj.onChange = this.handleDefaultSortOrderChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(closure_2[36]).t.ElZtzj);
          obj.value = ChannelSettingsOverview(closure_2[68]).ThreadSortOrder.LATEST_ACTIVITY;
          const items = [callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(closure_2[36]).t.w28f3F);
          obj.value = ChannelSettingsOverview(closure_2[68]).ThreadSortOrder.CREATION_DATE;
          items[1] = callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj);
          obj.children = items;
          return callback7(ChannelSettingsOverview(closure_2[66]).TableRadioGroup, obj);
        }
      }
      return null;
    }
  };
  items[11] = {
    key: "renderDefaultTagSetting",
    value() {
      const props = this.props;
      const channel = props.channel;
      if (channel.isForumLikeChannel()) {
        if (props.canManageChannels) {
          const defaultTagSetting = channel.getDefaultTagSetting();
          let obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(closure_2[36]).t.Paxaug);
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.description = intl2.string(ChannelSettingsOverview(closure_2[36]).t.DqOl8J);
          obj.value = defaultTagSetting;
          obj.onChange = this.handleDefaultTagSettingChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(closure_2[36]).t.rQ0ctQ);
          obj.value = ChannelSettingsOverview(closure_2[69]).ThreadSearchTagSetting.MATCH_SOME;
          const items = [callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(closure_2[36]).t.FCXUu0);
          obj.value = ChannelSettingsOverview(closure_2[69]).ThreadSearchTagSetting.MATCH_ALL;
          items[1] = callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj);
          obj.children = items;
          return callback7(ChannelSettingsOverview(closure_2[66]).TableRadioGroup, obj);
        }
      }
      return null;
    }
  };
  items[12] = {
    key: "renderAnnouncement",
    value() {
      let channel;
      let guild;
      const self = this;
      const props = this.props;
      ({ channel, guild } = props);
      if (callback5(channel.type)) {
        if (null != guild) {
          const features = guild.features;
          if (features.has(constants4.NEWS)) {
            let rulesChannelId;
            if (null != guild) {
              rulesChannelId = guild.rulesChannelId;
            }
            if (channel.id !== rulesChannelId) {
              let prop;
              if (null != guild) {
                prop = guild.publicUpdatesChannelId;
              }
              if (channel.id !== prop) {
                const items = [];
                let obj = {};
                obj = {};
                const intl = ChannelSettingsOverview(closure_2[36]).intl;
                obj = { documentationLink: callback(closure_2[70]).getArticleURL(constants5.ANNOUNCEMENT_CHANNELS) };
                const items1 = [intl.format(ChannelSettingsOverview(closure_2[36]).t.tI7KNX, obj), "\n\n", ];
                const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
                items1[2] = intl2.string(ChannelSettingsOverview(closure_2[36]).t.2Ab4Id);
                obj.children = items1;
                obj.description = callback7(closure_50, obj);
                obj.hasIcons = false;
                const obj1 = { disabled: !props.canManageChannels };
                const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
                obj1.label = intl3.string(ChannelSettingsOverview(closure_2[36]).t.Au2b7m);
                obj1.value = channel.type === constants2.GUILD_ANNOUNCEMENT;
                const handleAnnouncementChange = self.handleAnnouncementChange;
                obj1.onValueChange = handleAnnouncementChange.bind(self, channel.type === constants2.GUILD_ANNOUNCEMENT);
                obj.children = callback6(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj1);
                items.push(callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "announcement-section"));
                return items;
              }
            }
          }
        }
      }
      return null;
    }
  };
  items[13] = {
    key: "renderBitrateSettings",
    value() {
      let canManageChannels;
      let guild;
      const props = this.props;
      const channel = props.channel;
      ({ canManageChannels, guild } = props);
      if (this.showVoiceSettings()) {
        if (canManageChannels) {
          const items = [];
          let obj = ChannelSettingsOverview(closure_2[38]);
          const bitrateLimit = obj.getBitrateLimit(guild, channel);
          obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj = { bitrate: closure_28 / 1000 };
          obj.description = intl.format(ChannelSettingsOverview(closure_2[36]).t.SbQJk5, obj);
          obj.hasIcons = false;
          const obj1 = {};
          const obj2 = { style: { "Null": -504174744899997300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003696267499710345, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011865276442541145, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015865757 } };
          const obj3 = {};
          const obj4 = { flexShrink: 1 };
          obj3.style = obj4;
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj3.children = intl2.string(ChannelSettingsOverview(closure_2[36]).t.w2d0vU);
          const items1 = [callback6(ChannelSettingsOverview(closure_2[45]).Text, obj3), ];
          const obj5 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0 };
          const _Math = Math;
          const _HermesInternal = HermesInternal;
          obj5.children = "" + Math.round(channel.bitrate / 1000) + "kbps";
          items1[1] = callback6(ChannelSettingsOverview(closure_2[45]).Text, obj5);
          obj2.children = items1;
          const items2 = [callback7(closure_10, obj2), ];
          const obj6 = { style: tmp.slider };
          const _Math2 = Math;
          obj6.value = Math.min(channel.bitrate, bitrateLimit);
          obj6.minimumValue = closure_29;
          obj6.maximumValue = bitrateLimit;
          obj6.onValueChange = this.handleBitRateChange;
          items2[1] = callback6(ChannelSettingsOverview(closure_2[63]).Slider, obj6);
          obj1.children = items2;
          obj.children = callback7(ChannelSettingsOverview(closure_2[62]).Card, obj1);
          items.push(callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "bitrate-section"));
          return items;
        }
      }
      return null;
    }
  };
  items[14] = {
    key: "renderVideoQualityModeSettings",
    value() {
      let canManageChannels;
      let channel;
      ({ channel, canManageChannels } = this.props);
      if (this.showVoiceSettings()) {
        if (canManageChannels) {
          const items = [];
          let obj = {};
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(closure_2[36]).t.jhJEJs);
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.description = intl2.format(ChannelSettingsOverview(closure_2[36]).t.c5W7Ss, {});
          let AUTO = channel.videoQualityMode;
          if (null == AUTO) {
            AUTO = constants7.AUTO;
          }
          obj.value = AUTO;
          obj.onChange = this.handleVideoQualityModeChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(closure_2[36]).t.jjKYpu);
          obj.value = constants7.AUTO;
          const items1 = [callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(closure_2[36]).t.7jOoJE);
          obj.value = constants7.FULL;
          items1[1] = callback6(ChannelSettingsOverview(closure_2[67]).TableRadioRow, obj);
          obj.children = items1;
          items.push(closure_49(ChannelSettingsOverview(closure_2[66]).TableRadioGroup, obj, "video-quality-section"));
          return items;
        }
      }
      return null;
    }
  };
  items[15] = {
    key: "renderUserLimitSettings",
    value() {
      const props = this.props;
      const channel = props.channel;
      if (this.showVoiceSettings()) {
        if (props.canManageChannels) {
          const items = [];
          const _Math = Math;
          const rounded = Math.round(channel.userLimit);
          if (0 === rounded) {
            const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
            let stringResult = intl2.string(ChannelSettingsOverview(closure_2[36]).t.XX5ciX);
          } else {
            const intl = ChannelSettingsOverview(closure_2[36]).intl;
            let obj = { num: rounded };
            stringResult = intl.formatToPlainString(ChannelSettingsOverview(closure_2[36]).t.3uHFUR, obj);
          }
          const tmp9 = channel.isGuildStageVoice() ? closure_38 : closure_37;
          obj = {};
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          const format = intl3.format;
          const t = ChannelSettingsOverview(closure_2[36]).t;
          if (isGuildStageVoiceResult) {
            let formatResult = format(t.OqZI8D, {});
          } else {
            formatResult = format(t.8yb3JT, {});
          }
          obj.description = formatResult;
          obj.hasIcons = false;
          obj = {};
          const obj1 = { style: { "Null": -504174744899997300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003696267499710345, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011865276442541145, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015865757 } };
          const obj2 = {};
          const obj3 = { flexShrink: 1 };
          obj2.style = obj3;
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          obj2.children = intl4.string(ChannelSettingsOverview(closure_2[36]).t./AoSGN);
          const items1 = [callback6(ChannelSettingsOverview(closure_2[45]).Text, obj2), ];
          const obj4 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0, children: stringResult };
          items1[1] = callback6(ChannelSettingsOverview(closure_2[45]).Text, obj4);
          obj1.children = items1;
          const items2 = [callback7(closure_10, obj1), ];
          const obj5 = { style: tmp.slider };
          const _Math2 = Math;
          obj5.value = Math.min(channel.userLimit, tmp9);
          obj5.minimumValue = 0;
          obj5.maximumValue = tmp9;
          obj5.onValueChange = this.handleUserLimitChange;
          items2[1] = callback6(ChannelSettingsOverview(closure_2[63]).Slider, obj5);
          obj.children = items2;
          obj.children = callback7(ChannelSettingsOverview(closure_2[62]).Card, obj);
          items.push(callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "channel-user-limit"));
          return items;
        }
      }
      return null;
    }
  };
  items[16] = {
    key: "renderRegionOverride",
    value() {
      let channel;
      let regions;
      const self = this;
      const ChannelSettingsOverview = this;
      const props = this.props;
      ({ regions, channel } = props);
      if (null == props.guild) {
        return null;
      } else {
        if (self.showVoiceSettings()) {
          if (tmp) {
            if (!channel.isGuildStageVoice()) {
              let tmp2 = null == regions;
              if (!tmp2) {
                tmp2 = 0 === regions.length;
              }
              let found = null;
              if (null != regions) {
                found = regions.find((id) => id.id === channel.rtcRegion);
              }
              if (null != found) {
                let name = found.name;
              } else {
                const intl = ChannelSettingsOverview(closure_2[36]).intl;
                name = intl.string(ChannelSettingsOverview(closure_2[36]).t.JEmsap);
              }
              const items = [];
              let obj = {};
              const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
              obj.title = intl2.string(ChannelSettingsOverview(closure_2[36]).t.Ms8bX+);
              const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
              obj.description = intl3.string(ChannelSettingsOverview(closure_2[36]).t.dbTs+z);
              obj.hasIcons = false;
              obj = {};
              const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
              obj.label = intl4.string(ChannelSettingsOverview(closure_2[36]).t.Ms8bX+);
              obj = { text: name };
              obj.trailing = callback6(ChannelSettingsOverview(closure_2[71]).TableRow.TrailingText, obj);
              obj.arrow = true;
              obj.disabled = tmp2;
              obj.onPress = function onPress() {
                return self.pushScreen(constants.CHANGE_RTC_REGION);
              };
              obj.children = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj);
              items.push(callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "channel-region-override"));
              return items;
            }
          }
        }
        return null;
      }
    }
  };
  items[17] = {
    key: "showVoiceSettings",
    value() {
      const channel = this.props.channel;
      let hasItem = null != channel && null != channel.guild_id;
      if (hasItem) {
        hasItem = set.has(channel.type);
      }
      if (hasItem) {
        let enabled = channel.isGuildVocal();
        if (!enabled) {
          const VoiceInThreadsExperiment = ChannelSettingsOverview(closure_2[72]).VoiceInThreadsExperiment;
          const obj = { guildId: channel.guild_id, location: "9b50bd_1" };
          enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
        }
        hasItem = enabled;
      }
      return hasItem;
    }
  };
  items[18] = {
    key: "renderPermissions",
    value() {
      const ChannelSettingsOverview = this;
      if (!this.props.canManageRoles) {
        return null;
      } else {
        let tmp5Result = {};
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        tmp5Result.helperText = intl.string(ChannelSettingsOverview(closure_2[36]).t.UAoMCL);
        let flag = true;
        tmp5Result.hasIcons = true;
        tmp5Result = {};
        if (tmp.type === constants2.GUILD_CATEGORY) {
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          let stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.PgkvDf);
        } else {
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(closure_2[36]).t.BAZMBn);
        }
        tmp5Result.label = stringResult;
        tmp5Result.arrow = flag;
        flag = ChannelSettingsOverview(closure_2[73]).ShieldUserIcon;
        tmp5Result.icon = callback6(flag, {});
        tmp5Result.onPress = function onPress() {
          return self.pushScreen(constants.PERMISSIONS, { origin: constants.OVERVIEW });
        };
        tmp5Result = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, tmp5Result);
        tmp5Result.children = tmp5Result;
        callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, tmp5Result);
        const tmp2 = callback6;
        const tmp5 = callback6;
      }
    }
  };
  items[19] = {
    key: "renderSettingsSection",
    value(children) {
      let tmp = null;
      if (children.length > 0) {
        const obj = { hasIcons: true, children };
        tmp = callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj);
      }
      return tmp;
    }
  };
  items[20] = {
    key: "renderCommonSettingsSection",
    value() {
      const self = this;
      const ChannelSettingsOverview = this;
      const props = this.props;
      const channel = props.channel;
      let canManageChannels = props.canManageChannels;
      const items = [];
      if (tmp) {
        let obj = {};
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(closure_2[36]).t.h850Ss);
        obj.arrow = true;
        obj.icon = callback6(ChannelSettingsOverview(closure_2[74]).BellIcon, {});
        obj.onPress = function onPress() {
          if (channel.isThread()) {
            let result = self(closure_2[75]).showThreadNotificationsBottomSheet(channel);
            const obj = self(closure_2[75]);
          } else {
            result = self.pushScreen(constants.NOTIFICATIONS);
          }
          return result;
        };
        items.push(callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj, "rowNotifications"));
      }
      if (callback5(channel.type)) {
        obj = {};
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.mp1N/2);
        obj.arrow = true;
        obj = { channelId: channel.id };
        obj.icon = callback6(closure_55, obj);
        obj.onPress = function onPress() {
          return self.pushScreen(constants.PINNED_MESSAGES);
        };
        obj.disabled = self.props.pinDisabled;
        items.push(callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj, "rowPinnedMessages"));
      }
      if (canManageChannels) {
        canManageChannels = channel.type !== constants2.GUILD_CATEGORY;
      }
      if (canManageChannels) {
        canManageChannels = !channel.isThread();
      }
      if (canManageChannels) {
        const obj1 = {};
        const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
        obj1.label = intl3.string(ChannelSettingsOverview(closure_2[36]).t.ngRFjZ);
        obj1.arrow = true;
        obj1.icon = callback6(ChannelSettingsOverview(closure_2[76]).LinkIcon, {});
        obj1.onPress = function onPress() {
          return self.pushScreen(constants.INSTANT_INVITES);
        };
        items.push(callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj1, "rowInstantInvites"));
      }
      return self.renderSettingsSection(items);
    }
  };
  items[21] = {
    key: "renderDefaultForumLayout",
    value() {
      const ChannelSettingsOverview = this;
      const channel = this.props.channel;
      if (!channel.isForumChannel()) {
        return null;
      } else {
        let obj = {};
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        obj.description = intl.string(ChannelSettingsOverview(closure_2[36]).t.mOSViT);
        obj.hasIcons = true;
        obj = {};
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.kQvoC/);
        obj = {};
        if (channel.defaultForumLayout === ChannelSettingsOverview(closure_2[77]).ForumLayout.GRID) {
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          let stringResult = intl4.string(ChannelSettingsOverview(closure_2[36]).t.8RswJG);
        } else {
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.4HXEZG);
        }
        obj.text = stringResult;
        obj.trailing = callback6(ChannelSettingsOverview(closure_2[71]).TableRow.TrailingText, obj);
        obj.arrow = true;
        if (channel.defaultForumLayout === ChannelSettingsOverview(closure_2[77]).ForumLayout.GRID) {
          let tmp16 = callback6(ChannelSettingsOverview(closure_2[78]).GridSquareIcon, {});
        } else {
          tmp16 = callback6(ChannelSettingsOverview(closure_2[79]).ListViewIcon, {});
        }
        obj.icon = tmp16;
        obj.onPress = function onPress() {
          return self.pushScreen(constants.DEFAULT_FORUM_LAYOUT);
        };
        obj.children = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj, "forumDefaultLayout");
        callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj, "default-forum-layout");
        const tmp = callback6;
        const tmp4 = callback6;
        const tmp5 = callback6;
      }
    }
  };
  items[22] = {
    key: "renderUncommonSettingsSection",
    value() {
      const self = this;
      const ChannelSettingsOverview = this;
      const props = this.props;
      const canManageWebhooks = props.canManageWebhooks;
      let tmp = undefined !== canManageWebhooks && canManageWebhooks;
      let obj = ChannelSettingsOverview(result[80]);
      const result = obj.canUnlinkLobbyChannel(props.channel);
      const items = [];
      if (!tmp) {
        tmp = result;
      }
      if (tmp) {
        obj = {};
        const intl = ChannelSettingsOverview(result[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(result[36]).t.CIsNZw);
        obj.arrow = true;
        obj.icon = callback6(ChannelSettingsOverview(result[81]).PuzzlePieceIcon, {});
        obj.onPress = function onPress() {
          return self.pushScreen(constants.INTEGRATIONS, { canManageWebhooks: tmp, canUnlinkLobby: result });
        };
        items.push(callback6(ChannelSettingsOverview(result[71]).TableRow, obj, "rowIntegrations"));
      }
      return self.renderSettingsSection(items);
    }
  };
  items[23] = {
    key: "renderThreadManagementActions",
    value() {
      let canManageThread;
      let canUnarchiveThread;
      let hasJoinedThread;
      let isArchivedThread;
      let isForumPost;
      let isLockedThread;
      let isThreadModerator;
      const props = this.props;
      ({ channel: closure_0, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
      ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
      let obj = { hasIcons: true };
      if (hasJoinedThread) {
        const items = [null, , , , , ];
        let tmp11 = null;
        if (isArchivedThread) {
          tmp11 = null;
          if (canUnarchiveThread) {
            obj = { icon: callback6(ChannelSettingsOverview(closure_2[84]).ClockIcon, {}) };
            const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
            const string2 = intl2.string;
            let cnRubV = ChannelSettingsOverview(closure_2[36]).t;
            if (isForumPost) {
              cnRubV = cnRubV.cnRubV;
              let string2Result = string2(cnRubV);
            } else {
              string2Result = string2(cnRubV.S9E4G7);
            }
            obj.label = string2Result;
            obj.onPress = function onPress() {
              return callback(closure_2[83]).unarchiveThread(closure_0, false);
            };
            callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj);
            const tmp12 = callback6;
          }
        }
        items[1] = tmp11;
        let tmp20 = null;
        if (!isArchivedThread) {
          tmp20 = null;
          if (canManageThread) {
            obj = { icon: callback6(ChannelSettingsOverview(closure_2[85]).XLargeIcon, {}) };
            const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
            const string3 = intl3.string;
            let BTs4Kb = ChannelSettingsOverview(closure_2[36]).t;
            if (isForumPost) {
              BTs4Kb = BTs4Kb.BTs4Kb;
              let string3Result = string3(BTs4Kb);
            } else {
              string3Result = string3(BTs4Kb.wiIevd);
            }
            obj.label = string3Result;
            obj.onPress = function onPress() {
              return callback(closure_2[83]).archiveThread(closure_0, false);
            };
            callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj);
            const tmp21 = callback6;
          }
        }
        items[2] = tmp20;
        let tmp29 = null;
        if (isThreadModerator) {
          tmp29 = null;
          if (isLockedThread) {
            const obj1 = { icon: callback6(ChannelSettingsOverview(closure_2[86]).LockIcon, {}) };
            const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
            const string4 = intl4.string;
            /OKSxp = ChannelSettingsOverview(closure_2[36]).t;
            if (isForumPost) {
              /OKSxp = _OKSxp./OKSxp;
              let string4Result = string4(_OKSxp);
            } else {
              string4Result = string4(_OKSxp.jeyb/W);
            }
            obj1.label = string4Result;
            obj1.onPress = function onPress() {
              return callback(closure_2[83]).unlockThread(closure_0);
            };
            callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj1);
            const tmp30 = callback6;
          }
        }
        items[3] = tmp29;
        let tmp38 = null;
        if (isThreadModerator) {
          tmp38 = null;
          if (!isLockedThread) {
            const obj2 = { icon: callback6(ChannelSettingsOverview(closure_2[86]).LockIcon, {}) };
            const intl5 = ChannelSettingsOverview(closure_2[36]).intl;
            const string5 = intl5.string;
            Ur/0Na = ChannelSettingsOverview(closure_2[36]).t;
            if (isForumPost) {
              Ur/0Na = Ur_0Na.Ur/0Na;
              let string5Result = string5(Ur_0Na);
            } else {
              string5Result = string5(Ur_0Na.HoCqm8);
            }
            obj2.label = string5Result;
            obj2.onPress = function onPress() {
              return callback(closure_2[83]).lockThread(closure_0);
            };
            callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj2);
            const tmp39 = callback6;
          }
        }
        items[4] = tmp38;
        const obj3 = { icon: callback6(ChannelSettingsOverview(closure_2[76]).LinkIcon, {}) };
        const intl6 = ChannelSettingsOverview(closure_2[36]).intl;
        obj3.label = intl6.string(ChannelSettingsOverview(closure_2[36]).t.WqhZss);
        obj3.onPress = function onPress() {
          return lib(closure_2[87]).copyGuildChannelOrThreadLink(lib.guild_id, lib.id);
        };
        items[5] = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj3);
        obj.children = items;
        return closure_49(tmp2, obj);
      } else {
        const obj4 = { icon: callback6(ChannelSettingsOverview(closure_2[82]).GroupPlusIcon, {}) };
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        const string = intl.string;
        let ihLPiO = ChannelSettingsOverview(closure_2[36]).t;
        if (isForumPost) {
          ihLPiO = ihLPiO.ihLPiO;
          let stringResult = string(ihLPiO);
        } else {
          stringResult = string(ihLPiO.10kukS);
        }
        obj4.label = stringResult;
        obj4.onPress = function onPress() {
          return callback(closure_2[83]).joinThread(closure_0, "Context Menu");
        };
        callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj4);
        const tmp3 = callback6;
      }
    }
  };
  items[24] = {
    key: "renderDeleteButton",
    value() {
      let canManageChannels;
      let hasJoinedThread;
      let isForumPost;
      let isThreadModerator;
      const props = this.props;
      const channel = props.channel;
      const ChannelSettingsOverview = channel;
      ({ canManageChannels, isForumPost } = props);
      ({ isThreadModerator, hasJoinedThread } = props);
      if (channel.isThread()) {
        canManageChannels = isThreadModerator;
      }
      let tmp = null;
      if (canManageChannels) {
        if (channel.type === constants2.GUILD_CATEGORY) {
          const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
          let stringResult = intl3.string(ChannelSettingsOverview(closure_2[36]).t.ifbXnL);
        } else if (isForumPost) {
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(closure_2[36]).t.nEOg1N);
        } else {
          const intl = ChannelSettingsOverview(closure_2[36]).intl;
          const string = intl.string;
          const t = ChannelSettingsOverview(closure_2[36]).t;
          if (isThreadResult) {
            stringResult = string(t.H7vTe2);
          } else {
            stringResult = string(t.8D8Rsb);
          }
          const isThreadResult = channel.isThread();
        }
        let obj = { hasIcons: true };
        if (!hasJoinedThread) {
          const items = [null, ];
          obj = { variant: "danger" };
          obj = { color: "text-feedback-critical" };
          obj.icon = callback6(ChannelSettingsOverview(closure_2[89]).TrashIcon, obj);
          obj.label = stringResult;
          obj.onPress = this.handleDeleteChannel;
          items[1] = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj);
          obj.children = items;
          tmp = tmp11(tmp14, obj);
        } else {
          const obj1 = { variant: "danger" };
          const obj2 = { color: "text-feedback-critical" };
          obj1.icon = callback6(ChannelSettingsOverview(closure_2[88]).UserMinusIcon, obj2);
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          const string2 = intl4.string;
          if (isForumPost) {
            let string2Result = string2(_2LsZdT);
          } else {
            string2Result = string2(_2LsZdT.fa/84m);
          }
          obj1.label = string2Result;
          obj1.onPress = function onPress() {
            return callback(closure_2[83]).leaveThread(channel, "Context Menu");
          };
          callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj1);
          const tmp16 = callback6;
        }
        const tmp11 = closure_49;
      }
      return tmp;
    }
  };
  items[25] = {
    key: "renderForumTags",
    value() {
      let canManageChannels;
      let channel;
      const self = this;
      const ChannelSettingsOverview = this;
      const tmp = callback8(this.context);
      ({ channel, canManageChannels } = this.props);
      if (channel.isForumLikeChannel()) {
        let availableTags = channel.availableTags;
        if (null != availableTags) {
          const everyResult = availableTags.every((moderated) => moderated.moderated);
        }
        let tmp3 = canManageChannels;
        if (canManageChannels) {
          tmp3 = channel.availableTags.length < closure_46;
        }
        const error = self.getError("available_tags");
        let obj = { spacing: canManageChannels(closure_2[28]).space.PX_12 };
        obj = {};
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        obj.title = intl.string(ChannelSettingsOverview(closure_2[36]).t.P/y+sj);
        let stringResult;
        if (channel.availableTags.length <= 0) {
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(closure_2[36]).t.3v8kZH);
        }
        obj.description = stringResult;
        obj.hasIcons = false;
        obj = { style: tmp.tagsWrapper };
        let tmp17Result = null;
        if (channel.availableTags.length > 0) {
          const obj1 = {};
          availableTags = channel.availableTags;
          const items = [availableTags.map((id) => callback(canManageChannels(closure_2[91]), { tag: id, onPress: self.handlePressTag, disabled: !canManageChannels }, id.id)), ];
          let tmp19 = null;
          if (tmp3) {
            const obj2 = { style: tmp.addTagIconButtonWrapper };
            const obj3 = {};
            const obj4 = { size: "sm", color: canManageChannels(closure_2[28]).colors.WHITE };
            obj3.icon = callback6(ChannelSettingsOverview(closure_2[93]).PlusSmallIcon, obj4);
            obj3.size = "sm";
            obj3.onPress = function onPress() {
              return self.handlePressTag();
            };
            const intl3 = ChannelSettingsOverview(closure_2[36]).intl;
            obj3.accessibilityLabel = intl3.string(ChannelSettingsOverview(closure_2[36]).t./jubeD);
            obj2.children = callback6(ChannelSettingsOverview(closure_2[92]).IconButton, obj3);
            tmp19 = callback6(closure_10, obj2);
          }
          items[1] = tmp19;
          obj1.children = items;
          tmp17Result = closure_49(closure_50, obj1);
          const tmp17 = closure_49;
          const tmp18 = closure_50;
        }
        obj.children = tmp17Result;
        obj.children = callback6(closure_10, obj);
        const items1 = [callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj), , , ];
        let tmp27 = null;
        if (channel.availableTags.length <= 0) {
          const obj5 = {
            disabled: !canManageChannels,
            onPress() {
                  return self.handlePressTag();
                },
            style: tmp.createTagButton,
            accessibilityRole: "button"
          };
          const obj6 = { cachedAt: "png", edpbxy: "absolute", style: tmp.createTagButtonText };
          const intl4 = ChannelSettingsOverview(closure_2[36]).intl;
          obj6.children = intl4.string(ChannelSettingsOverview(closure_2[36]).t.F4is7L);
          obj5.children = callback6(ChannelSettingsOverview(closure_2[45]).Text, obj6);
          tmp27 = callback6(ChannelSettingsOverview(closure_2[94]).PressableOpacity, obj5);
        }
        items1[1] = tmp27;
        let tmp32 = null != error && error.length > 0;
        if (tmp32) {
          const obj7 = { cachedAt: "GESTURE_FULL", edpbxy: "Int8Array", children: error };
          tmp32 = callback6(ChannelSettingsOverview(closure_2[45]).Text, obj7);
        }
        items1[2] = tmp32;
        const obj8 = { hasIcons: false };
        const obj9 = {};
        let tmp40 = !canManageChannels;
        if (!tmp40) {
          tmp40 = everyResult;
        }
        obj9.disabled = tmp40;
        const intl5 = ChannelSettingsOverview(closure_2[36]).intl;
        obj9.label = intl5.string(ChannelSettingsOverview(closure_2[36]).t.yX24uI);
        obj9.value = channel.hasFlag(constants8.REQUIRE_TAG);
        obj9.onValueChange = self.handleToggleRequireTag;
        obj8.children = callback6(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj9);
        items1[3] = callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj8);
        obj.children = items1;
        return closure_49(ChannelSettingsOverview(closure_2[90]).Stack, obj);
      } else {
        return null;
      }
    }
  };
  items[26] = {
    key: "renderShowMediaDownloadOptions",
    value() {
      const props = this.props;
      const channel = props.channel;
      let tmp = null;
      if (channel.isMediaChannel()) {
        let obj = { hasIcons: false };
        obj = { disabled: !props.canManageChannels };
        const intl = ChannelSettingsOverview(closure_2[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(closure_2[36]).t.u8LZOt);
        const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
        obj.subLabel = intl2.string(ChannelSettingsOverview(closure_2[36]).t.J4wCc7);
        obj.value = !channel.hasFlag(constants8.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        obj.onValueChange = this.handleToggleShowMediaDownloadOptions;
        obj.children = callback6(ChannelSettingsOverview(closure_2[60]).TableSwitchRow, obj);
        tmp = callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj);
      }
      return tmp;
    }
  };
  items[27] = {
    key: "renderCategory",
    value() {
      let canManageParent;
      let category;
      const ChannelSettingsOverview = this;
      const props = this.props;
      ({ category, canManageParent } = props);
      if (props.hasCategories) {
        if (props.channel.type !== constants2.GUILD_CATEGORY) {
          if (null == category) {
            const intl = ChannelSettingsOverview(closure_2[36]).intl;
            let stringResult = intl.string(ChannelSettingsOverview(closure_2[36]).t.GSfOoo);
          } else {
            let obj = ChannelSettingsOverview(closure_2[48]);
            stringResult = obj.computeChannelName(category, closure_25, closure_24);
          }
          obj = { hasIcons: true };
          obj = { icon: callback6(ChannelSettingsOverview(closure_2[95]).FolderPlusIcon, {}) };
          const intl2 = ChannelSettingsOverview(closure_2[36]).intl;
          obj.label = intl2.string(ChannelSettingsOverview(closure_2[36]).t.vHCZwr);
          const obj1 = { text: stringResult };
          obj.trailing = callback6(ChannelSettingsOverview(closure_2[71]).TableRow.TrailingText, obj1);
          obj.arrow = canManageParent;
          let fn;
          if (canManageParent) {
            fn = () => self.pushScreen(constants.CHANGE_CATEGORY);
          }
          obj.onPress = fn;
          obj.children = callback6(ChannelSettingsOverview(closure_2[71]).TableRow, obj);
          return callback6(ChannelSettingsOverview(closure_2[59]).TableRowGroup, obj);
        }
      }
      return null;
    }
  };
  items[28] = {
    key: "renderThreadSettings",
    value() {
      let obj = {};
      obj = { spacing: callback(closure_2[28]).space.PX_24, style: callback8(this.context).stackPadding };
      const items = [this.renderChannelInfo(), this.renderCommonSettingsSection(), this.renderThreadManagementActions(), this.renderThreadSpoiler(), this.renderSlowmode(), this.renderAutoArchiveDuration(), this.renderInvitable(), this.renderDeleteButton()];
      obj.children = items;
      obj.children = callback7(ChannelSettingsOverview(closure_2[90]).Stack, obj);
      return callback6(ChannelSettingsOverview(closure_2[96]).Form, obj);
    }
  };
  items[29] = {
    key: "renderChannelSettings",
    value() {
      let obj = {};
      obj = { spacing: callback(closure_2[28]).space.PX_24, style: callback8(this.context).stackPadding };
      const items = [this.renderChannelInfo(), this.renderForumTags(), this.renderCategory(), this.renderPermissions(), this.renderCommonSettingsSection(), this.renderDefaultForumLayout(), this.renderDefaultSortOrder(), this.renderDefaultTagSetting(), this.renderAnnouncement(), this.renderNsfwConfig(), this.renderSlowmode(), this.renderDefaultAutoArchiveDuration(), this.renderBitrateSettings(), this.renderVideoQualityModeSettings(), this.renderUserLimitSettings(), this.renderRegionOverride(), this.renderUncommonSettingsSection(), this.renderShowMediaDownloadOptions(), this.renderDeleteButton()];
      obj.children = items;
      obj.children = callback7(ChannelSettingsOverview(closure_2[90]).Stack, obj);
      return callback6(ChannelSettingsOverview(closure_2[96]).Form, obj);
    }
  };
  items[30] = {
    key: "render",
    value() {
      const self = this;
      if (this.props.isThread) {
        let renderThreadSettingsResult = self.renderThreadSettings();
      } else {
        renderThreadSettingsResult = self.renderChannelSettings();
      }
      const obj = { style: callback8(this.context).screenContainer, children: renderThreadSettingsResult };
      return callback6(closure_10, obj);
    }
  };
  return callback(ChannelSettingsOverview, items);
}(importAllResult.PureComponent);
tmp7.contextType = arg1(dependencyMap[97]).ThemeContext;
const obj6 = { marginTop: importDefault(dependencyMap[28]).space.PX_4 };
const result = arg1(dependencyMap[99]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  let autoFocusElement;
  let hasJoinedThread;
  let isMutedThread;
  ({ channelId: closure_0, autoFocusElement } = arg0);
  const importDefault = autoFocusElement;
  let obj = arg1(dependencyMap[98]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const items = [closure_18];
  const stateFromStores = arg1(dependencyMap[29]).useStateFromStores(items, () => store2.getChannel(closure_0));
  let closure_3 = stateFromStores;
  const obj2 = arg1(dependencyMap[29]);
  const items1 = [closure_17];
  const stateFromStores1 = arg1(dependencyMap[29]).useStateFromStores(items1, () => store.getChannel());
  const obj4 = arg1(dependencyMap[29]);
  const isThreadModerator = arg1(dependencyMap[72]).useIsThreadModerator(stateFromStores);
  const obj5 = arg1(dependencyMap[72]);
  const items2 = [closure_11];
  const stateFromStoresObject = arg1(dependencyMap[29]).useStateFromStoresObject(items2, () => {
    const obj = {};
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = closure_11.isMuted(stateFromStores.id);
    }
    obj.isMutedThread = isMutedResult;
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = closure_11.hasJoined(stateFromStores.id);
    }
    obj.hasJoinedThread = hasJoinedResult;
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj6 = arg1(dependencyMap[29]);
  const canManageThread = arg1(dependencyMap[72]).useCanManageThread(stateFromStores);
  const obj7 = arg1(dependencyMap[72]);
  const shouldHideChannelContent = arg1(dependencyMap[61]).useShouldHideChannelContent(stateFromStores);
  let closure_4 = shouldHideChannelContent;
  const obj8 = arg1(dependencyMap[61]);
  const items3 = [closure_17, closure_20, closure_18, closure_25, closure_23, closure_19, closure_21];
  const items4 = [stateFromStores, shouldHideChannelContent];
  const stateFromStoresObject1 = arg1(dependencyMap[29]).useStateFromStoresObject(items3, () => {
    let errors;
    let submitting;
    const props = store.getProps();
    ({ submitting, errors } = props);
    if (null == stateFromStores) {
      let obj = { isThread: false, submitting, errors };
      return obj;
    } else {
      const guild = guild.getGuild(stateFromStores.getGuildId());
      const channel = store2.getChannel(stateFromStores.parent_id);
      const currentUser = currentUser.getCurrentUser();
      const hasItem = set.has(stateFromStores.type);
      obj = { isThread: hasItem, guild, category: channel };
      const regions = regions.getRegions(stateFromStores.getGuildId());
      obj.hasCategories = closure_19.hasCategories(stateFromStores.guild_id);
      obj.pinDisabled = shouldHideChannelContent;
      obj.canManageChannels = closure_21.can(constants.MANAGE_CHANNELS, stateFromStores);
      let tmp3 = null != currentUser;
      if (tmp3) {
        tmp3 = stateFromStores.ownerId === currentUser.id;
      }
      obj.isChannelOwner = tmp3;
      if (null != channel) {
        let canResult = closure_21.can(constants.MANAGE_CHANNELS, channel);
      } else {
        canResult = closure_21.can(constants.MANAGE_CHANNELS, guild);
      }
      obj.canManageParent = canResult;
      obj.canManageRoles = closure_21.can(constants.MANAGE_ROLES, stateFromStores);
      obj.canSendMessages = closure_21.can(constants.SEND_MESSAGES, stateFromStores);
      let canResult1 = callback2(stateFromStores.type);
      if (canResult1) {
        canResult1 = closure_21.can(constants.MANAGE_WEBHOOKS, stateFromStores);
      }
      obj.canManageWebhooks = canResult1;
      obj = callback(navigation[72]);
      obj.canUnarchiveThread = obj.canUnarchiveThread(stateFromStores);
      obj.regions = regions;
      obj.submitting = submitting;
      obj.errors = errors;
      let tmp21 = callback3(guild);
      if (!tmp21) {
        tmp21 = null != stateFromStores.linkedLobby;
      }
      obj.isNSFWDisabled = tmp21;
      return obj;
    }
  }, items4);
  const ref = importAllResult.useRef(null);
  let closure_5 = ref;
  const items5 = [autoFocusElement, navigation];
  const effect = importAllResult.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      if (closure_1 === constants.CHANNEL_NAME) {
        const current = ref.current;
        let focusResult;
        if (null != current) {
          focusResult = current.focus();
        }
        return focusResult;
      }
    }
  }), items5);
  let tmp11Result = null;
  if (null != stateFromStores1) {
    obj = {};
    const merged = Object.assign(stateFromStoresObject1);
    obj["channel"] = stateFromStores1;
    obj["navigation"] = navigation;
    obj["isThreadModerator"] = isThreadModerator;
    let isLockedThreadResult;
    if (null != stateFromStores) {
      isLockedThreadResult = stateFromStores.isLockedThread();
    }
    obj["isLockedThread"] = isLockedThreadResult;
    let isArchivedThreadResult;
    if (null != stateFromStores) {
      isArchivedThreadResult = stateFromStores.isArchivedThread();
    }
    obj["isArchivedThread"] = isArchivedThreadResult;
    obj["canManageThread"] = canManageThread;
    obj["canUnarchiveThread"] = stateFromStoresObject1.canUnarchiveThread;
    obj["isMutedThread"] = isMutedThread;
    obj["hasJoinedThread"] = hasJoinedThread;
    let isForumPostResult;
    if (null != stateFromStores) {
      isForumPostResult = stateFromStores.isForumPost();
    }
    obj["isForumPost"] = isForumPostResult;
    obj["channelNameRef"] = ref;
    tmp11Result = closure_48(tmp7, obj);
    const tmp11 = closure_48;
    const tmp12 = tmp7;
  }
  return tmp11Result;
};
export { PinImage };
