// Module ID: 15496
// Function ID: 119318
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 31, 27, 3760, 1352, 1391, 7597, 1348, 1907, 1838, 3758, 4142, 15497, 3767, 1849, 15498, 653, 1355, 5685, 1211, 482, 33, 4130, 689, 566, 9957, 22, 4324, 7596, 3831, 10332, 1212, 7936, 4312, 3771, 1360, 3976, 15499, 8415, 4471, 4126, 5459, 8438, 4320, 4561, 3982, 4029, 15500, 5087, 9122, 15501, 7512, 7504, 477, 5503, 5504, 4345, 5167, 13090, 15502, 7937, 7519, 7518, 1357, 1359, 1920, 5165, 5650, 8422, 10204, 10346, 4074, 1358, 15503, 9167, 10169, 13857, 10195, 7007, 4094, 4084, 4652, 10199, 4072, 4089, 4541, 9858, 7771, 8734, 4660, 15504, 7495, 3842, 1456, 2]
// Exports: default

// Module 15496 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import importAllResult from "apply";
import { View } from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { isGuildNSFW } from "isGuildOwner";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_createForOfIteratorHelperLoose";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import { ChannelSettingsAutoFocusElement as closure_26 } from "ChannelSettingsAutoFocusElement";
import ME from "ME";
import set from "set";
import { MAX_FORUM_TAGS } from "FORUM_GUIDELINES_ACTION_SHEET";
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_47 } from "AbortCodes";
import jsxProd from "init";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_defineProperties";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_44;
let closure_45;
let closure_48;
let closure_49;
let closure_50;
const require = arg1;
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
    channelId = global.channelId;
    tmp = jsxs();
    obj = require("initialize");
    items = [];
    items[0] = c22;
    tmp2 = undefined;
    if (obj.useStateFromStores(items, () => outer1_22.hasUnreadPins(channelId))) {
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
    items1[0] = jsx(require("PinIcon").PinIcon, {});
    items1[1] = tmp2;
    obj2.children = items1;
    return jsxs(View, obj2);
  }
}
({ EDITABLE_VOICE_SETTINGS_TYPES: closure_12, isGuildTextChannelType: closure_13, THREADED_CHANNEL_TYPES: closure_14, THREAD_CHANNEL_TYPES: closure_15 } = _callSuper);
({ AnalyticEvents: closure_27, BITRATE_DEFAULT: closure_28, BITRATE_MIN: closure_29, ChannelSettingsSections: closure_30, ChannelTypes: closure_31, ChannelTypesSets: closure_32, GuildFeatures: closure_33, GuildSettingsSections: closure_34, HelpdeskArticles: closure_35, MAX_CHANNEL_NAME_LENGTH: closure_36, MAX_VOICE_USER_LIMIT: closure_37, MAX_STAGE_VOICE_USER_LIMIT: closure_38, Permissions: closure_39, SettingsPaneTypes: closure_40, SLOWMODE_VALUES: closure_41, VideoQualityMode: closure_42 } = ME);
({ ChannelFlags: closure_43, MAX_CHANNEL_TOPIC_LENGTH: closure_44, MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_45 } = set);
({ jsx: closure_48, jsxs: closure_49, Fragment: closure_50 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: 2, right: -4, width: 12, height: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.outer = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.badge = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { screenContainer: { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 }, slider: { marginHorizontal: 15 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
obj2.stackPadding = _createForOfIteratorHelperLoose;
obj2.alertText = { marginTop: 16 };
obj2.tagsWrapper = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
let obj3 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj2.addTagIconButtonWrapper = { justifyContent: "center", margin: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj6 = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj2.createTagButton = obj6;
obj2.createTagButtonText = { fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_52 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj2);
let tmp7 = ((PureComponent) => {
  class ChannelSettingsOverview {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_54()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj2 = outer1_1(outer1_2[31]);
      tmp2Result._cooldown = obj2.findIndex(outer1_41, (arg0) => arg0 >= tmp2Result.props.channel.rateLimitPerUser);
      tmp2Result.state = { hasChanges: false };
      tmp2Result.pushScreen = (arg0) => {
        const items = [...arguments];
        const navigation = tmp2Result.props.navigation;
        const items1 = [...items];
        navigation.push.apply(items1);
        if (items[0] !== outer2_30.PERMISSIONS) {
          let obj = outer2_1(outer2_2[32]);
          obj = { settings_type: "channel", origin_pane: outer2_40.CHANNEL_SETTINGS, destination_pane: items[0] };
          obj.trackWithMetadata(outer2_27.SETTINGS_PANE_VIEWED, obj);
        }
      };
      tmp2Result.handleSave = () => {
        let threadMetadata;
        if (channel.state.hasChanges) {
          channel = channel.props.channel;
          let obj = outer2_1(outer2_2[33]);
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
              let navigation = outer3_1(outer3_2[34]).open;
              let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: outer3_1(outer3_2[35]) };
              const tmp6 = outer3_1(outer3_2[34]);
              const intl = ChannelSettingsOverview(outer3_2[36]).intl;
              const string = intl.string;
              let n2Y84J = ChannelSettingsOverview(outer3_2[36]).t;
              if (isThreadResult) {
                n2Y84J = n2Y84J.n2Y84J;
                let stringResult = string(n2Y84J);
              } else {
                stringResult = string(n2Y84J["FE/ohq"]);
              }
              goBackResult.content = stringResult;
              navigation(goBackResult);
              navigation = channel.props.navigation;
              goBackResult = navigation.goBack();
              isThreadResult = channel.isThread();
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
          let result = outer2_1(outer2_2[37])(arg0, false);
        } else {
          const LIMITED_CHANNEL_NAME = outer2_32.LIMITED_CHANNEL_NAME;
          result = arg0;
          if (LIMITED_CHANNEL_NAME.has(channel.type)) {
            let obj = ChannelSettingsOverview(outer2_2[38]);
            result = obj.sanitizeGuildTextChannelName(arg0);
          }
        }
        obj = { name: result };
        outer2_1(outer2_2[33]).updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleBlurName = () => {
        const channel = tmp2Result.props.channel;
        if (channel.isThread()) {
          const tmp3 = outer2_1(outer2_2[37])(channel.name, true);
          if (tmp3 !== channel.name) {
            let obj = outer2_1(outer2_2[33]);
            obj = { name: tmp3 };
            obj.updateChannel(obj);
            obj = { hasChanges: true };
            tmp2Result.setState(obj);
          }
        }
      };
      tmp2Result.handleChangeTopic = (emojiName) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { topic: outer2_1(outer2_2[39]).translateInlineEmojiToSurrogates(emojiName) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleBitRateChange = (arg0) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { bitrate: Math.round(arg0) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleVideoQualityModeChange = (videoQualityMode) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { videoQualityMode };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleNsfwChange = (nsfw) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { nsfw };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleThreadSpoilerChange = (arg0) => {
        const obj = ChannelSettingsOverview(outer2_2[40]);
        const setFlagResult = ChannelSettingsOverview(outer2_2[40]).setFlag(tmp2Result.props.channel.flags, outer2_43.IS_SPOILER_CHANNEL, arg0);
        outer2_1(outer2_2[33]).updateChannel({ flags: setFlagResult });
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleSlowmodeChange = (arg0) => {
        let hasChanges = tmp2Result.state.hasChanges;
        const tmp2 = outer2_41[Math.round(Math, arg0)];
        let obj = outer2_1(outer2_2[33]);
        obj.updateChannel({ rateLimitPerUser: tmp2 });
        const AccessibilityAnnouncer = ChannelSettingsOverview(outer2_2[41]).AccessibilityAnnouncer;
        const intl = ChannelSettingsOverview(outer2_2[36]).intl;
        AccessibilityAnnouncer.announce(ChannelSettingsOverview(outer2_2[42]).getSecondsSliderLabel(tmp2, false, intl.string(ChannelSettingsOverview(outer2_2[36]).t.zvDu4h)));
        obj = {};
        if (!hasChanges) {
          hasChanges = tmp2Result.props.channel.rateLimitPerUser !== tmp2;
        }
        obj.hasChanges = hasChanges;
        tmp2Result.setState(obj);
      };
      tmp2Result.handleDefaultAutoArchiveDurationChange = (defaultAutoArchiveDuration) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { defaultAutoArchiveDuration };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleAutoArchiveDurationChange = (autoArchiveDuration) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { autoArchiveDuration };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleDefaultSortOrderChange = (defaultSortOrder) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { defaultSortOrder };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleDefaultTagSettingChange = (defaultTagSetting) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { defaultTagSetting };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleInvitableChange = (invitable) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { invitable };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleAnnouncementChange = (arg0) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { type: arg0 ? tmp.GUILD_TEXT : tmp.GUILD_ANNOUNCEMENT };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleActiveChannelsRemovedChange = (arg0) => {
        const obj = ChannelSettingsOverview(outer2_2[40]);
        const setFlagResult = ChannelSettingsOverview(outer2_2[40]).setFlag(tmp2Result.props.channel.flags, outer2_43.ACTIVE_CHANNELS_REMOVED, !arg0);
        outer2_1(outer2_2[33]).updateChannel({ flags: setFlagResult });
        tmp2Result.setState({ hasChanges: true });
      };
      fn = (arg0) => {
        let obj = outer2_1(outer2_2[33]);
        obj = { userLimit: Math.round(arg0) };
        obj.updateChannel(obj);
        tmp2Result.setState({ hasChanges: true });
      };
      tmp2Result.handleUserLimitChange = fn;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp7 = outer1_3(fn);
      tmp2Result.handleDeleteChannel = tmp7;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp2Result.handleConfirmDeleteChannel = outer1_3(tmp7);
      tmp2Result.handlePressTag = (tag) => {
        tmp2Result.pushScreen(outer2_30.EDIT_FORUM_TAG, { tag });
      };
      tmp2Result.handleToggleRequireTag = () => {
        if (tmp2Result.props.canManageChannels) {
          const channel = tmp2Result.props.channel;
          let obj = ChannelSettingsOverview(outer2_2[40]);
          const hasFlagResult = channel.hasFlag(outer2_43.REQUIRE_TAG);
          const setFlagResult = obj.setFlag(tmp2Result.props.channel.flags, outer2_43.REQUIRE_TAG, !channel.hasFlag(outer2_43.REQUIRE_TAG));
          obj = { flags: setFlagResult };
          outer2_1(outer2_2[33]).updateChannel(obj);
          obj = { hasChanges: true };
          tmp2Result.setState(obj);
          const obj2 = outer2_1(outer2_2[33]);
        }
      };
      tmp2Result.handleToggleShowMediaDownloadOptions = () => {
        if (tmp2Result.props.canManageChannels) {
          const channel = tmp2Result.props.channel;
          let obj = ChannelSettingsOverview(outer2_2[40]);
          const hasFlagResult = channel.hasFlag(outer2_43.HIDE_MEDIA_DOWNLOAD_OPTIONS);
          const setFlagResult = obj.setFlag(tmp2Result.props.channel.flags, outer2_43.HIDE_MEDIA_DOWNLOAD_OPTIONS, !channel.hasFlag(outer2_43.HIDE_MEDIA_DOWNLOAD_OPTIONS));
          obj = { flags: setFlagResult };
          outer2_1(outer2_2[33]).updateChannel(obj);
          obj = { hasChanges: true };
          tmp2Result.setState(obj);
          const obj2 = outer2_1(outer2_2[33]);
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
      tmp2Result.state.hasChanges = outer1_17.hasChanges();
      return tmp2Result;
    }
  }
  callback2(ChannelSettingsOverview, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this.updateNavigation(undefined, this.state);
      if (tmp2) {
        let obj = outer1_1(outer1_2[52]);
        const regions = obj.fetchRegions(self.props.guild.id);
      }
      obj = { settings_type: "channel", destination_pane: outer1_40.CHANNEL_SETTINGS };
      outer1_1(outer1_2[32]).trackWithMetadata(outer1_27.SETTINGS_PANE_VIEWED, obj);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
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
      const self = this;
      const props = this.props;
      ({ navigation, submitting, isThread } = props);
      const type = props.channel.type;
      hasChanges = this.state.hasChanges;
      if (isThread) {
        const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
        const string = intl3.string;
        let BsJrhj = ChannelSettingsOverview(outer1_2[36]).t;
        if (props.isForumPost) {
          BsJrhj = BsJrhj.BsJrhj;
          let stringResult = string(BsJrhj);
        } else {
          stringResult = string(BsJrhj.d4n5Q1);
        }
      } else {
        if (type === outer1_31.GUILD_CATEGORY) {
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          let stringResult1 = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["/uELTj"]);
        } else {
          let intl = ChannelSettingsOverview(outer1_2[36]).intl;
          stringResult1 = intl.string(ChannelSettingsOverview(outer1_2[36]).t.XPDhcc);
        }
        let setOptionsResult = {};
        if (submitting) {
          let fn = ChannelSettingsOverview(outer1_2[53]).HeaderSubmittingIndicator;
        } else {
          fn = (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["onPress"] = self.handleSave;
            const intl = ChannelSettingsOverview(outer2_2[36]).intl;
            obj["label"] = intl.string(ChannelSettingsOverview(outer2_2[36]).t["R3BPH+"]);
            obj["disabled"] = !hasChanges;
            return outer2_48(ChannelSettingsOverview(outer2_2[54]).HeaderTextButton, obj);
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
      let hasItem = outer1_13(channel.type) && !isThread;
      if (!hasItem) {
        const GUILD_THREADS_ONLY = outer1_32.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      let obj = ChannelSettingsOverview(outer1_2[55]);
      const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({ canManageThread, canManageChannels, canSendMessages, isForumPost, isThread, isChannelOwner });
      if (channel.isForumPost()) {
        const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
        let stringResult = intl4.string(ChannelSettingsOverview(outer1_2[36]).t.uyVrTN);
      } else if (isThread) {
        const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
        stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.j3XWjD);
      } else if (channel.type === outer1_31.GUILD_CATEGORY) {
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        stringResult = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.OCAkGP);
      } else {
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        stringResult = intl.string(ChannelSettingsOverview(outer1_2[36]).t.PVbHDl);
      }
      obj = { ref: self.props.channelNameRef, label: stringResult, accessibilityLabel: stringResult };
      const TextInput = ChannelSettingsOverview(outer1_2[56]).TextInput;
      obj.value = ChannelSettingsOverview(outer1_2[48]).computeChannelName(channel, outer1_25, outer1_24);
      ({ handleChangeName: obj2.onChange, handleBlurName: obj2.onBlur } = self);
      obj.isDisabled = !isChannelNameSettingEditable;
      obj.maxLength = outer1_36;
      obj.errorMessage = self.getError("name");
      obj.enableAndroidSanitizedInputWorkaround = true;
      if (!hasItem) {
        obj = {};
        const items = [tmp14, undefined];
        obj.children = items;
        return outer1_49(outer1_50, obj);
      } else {
        const intl5 = ChannelSettingsOverview(outer1_2[36]).intl;
        const string = intl5.string;
        const t = ChannelSettingsOverview(outer1_2[36]).t;
        if (isForumLikeChannelResult) {
          let stringResult1 = string(t.yR6HwZ);
        } else {
          stringResult1 = string(t.X8jMDh);
        }
        const obj1 = { label: stringResult1, accessibilityLabel: stringResult1 };
        isForumLikeChannelResult = channel.isForumLikeChannel();
        const tmp19 = outer1_48;
        obj1.value = outer1_1(outer1_2[39]).translateSurrogatesToInlineEmoji(channel.topic);
        obj1.onChange = self.handleChangeTopic;
        obj1.isDisabled = !canManageChannels;
        obj1.autoCorrect = true;
        obj1.maxLength = channel.isForumLikeChannel() ? outer1_45 : outer1_44;
        obj1.errorMessage = self.getError("topic");
        tmp19(ChannelSettingsOverview(outer1_2[57]).TextArea, obj1);
        const obj5 = outer1_1(outer1_2[39]);
      }
    }
  };
  items[4] = {
    key: "renderNsfwConfig",
    value() {
      const channel = this.props.channel;
      let tmp7Result = null;
      if (channel.type === outer1_31.GUILD_TEXT) {
        tmp7Result = null;
        if (tmp2) {
          let obj = ChannelSettingsOverview(outer1_2[58]);
          tmp7Result = null;
          if (!obj.isIOS()) {
            obj = {};
            const intl = ChannelSettingsOverview(outer1_2[36]).intl;
            obj.helperText = intl.string(ChannelSettingsOverview(outer1_2[36]).t["9eUgwR"]);
            obj.hasIcons = false;
            obj = {};
            const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
            obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.Es25Yf);
            obj.value = ChannelSettingsOverview(outer1_2[61]).isChannelOrGuildNSFW(channel);
            obj.onValueChange = tmp.handleNsfwChange;
            obj.disabled = tmp3;
            let stringResult;
            if (null != channel.linkedLobby) {
              const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
              stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.l6uSVa);
            }
            obj.subLabel = stringResult;
            obj.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj);
            tmp7Result = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "nsfw-section");
            const obj4 = ChannelSettingsOverview(outer1_2[61]);
            const tmp10 = outer1_48;
            const tmp7 = outer1_48;
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
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.helperText = intl.string(ChannelSettingsOverview(outer1_2[36]).t.ddWXHa);
        obj.hasIcons = false;
        obj = {};
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.TvUHTb);
        obj.value = channel.isSpoilerChannel();
        obj.onValueChange = this.handleThreadSpoilerChange;
        obj.disabled = !props.canManageThread;
        obj.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj);
        tmp = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "thread-spoiler-section");
      }
      return tmp;
    }
  };
  items[6] = {
    key: "renderSlowmode",
    value() {
      const self = this;
      const channel = this.props.channel;
      if (channel.type !== outer1_31.GUILD_TEXT) {
        return null;
      }
      const items = [];
      let obj = ChannelSettingsOverview(outer1_2[42]);
      const intl = ChannelSettingsOverview(outer1_2[36]).intl;
      const secondsSliderLabel = obj.getSecondsSliderLabel(channel.rateLimitPerUser, false, intl.string(ChannelSettingsOverview(outer1_2[36]).t.zvDu4h));
      if (channel.isForumLikeChannel()) {
        const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
        let stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t["a+1pdO"]);
      } else {
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        const string = intl2.string;
        const t = ChannelSettingsOverview(outer1_2[36]).t;
        if (isThreadResult) {
          stringResult = string(t.OMmNCv);
        } else {
          stringResult = string(t["HEA/DU"]);
        }
        isThreadResult = channel.isThread();
      }
      obj = { helperText: stringResult, hasIcons: false };
      obj = { border: "none" };
      const obj1 = { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" } };
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: { flexShrink: 1 } };
      const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
      obj2.children = intl4.string(ChannelSettingsOverview(outer1_2[36]).t.piZgKF);
      const items1 = [outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj2), ];
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel };
      items1[1] = outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj3);
      obj1.children = items1;
      const items2 = [outer1_49(outer1_10, obj1), ];
      const obj4 = { style: items3, value: self._cooldown, minimumValue: 0, maximumValue: outer1_41.length - 1, onValueChange: self.handleSlowmodeChange };
      items3 = [outer1_52(this.context).slider, { marginStart: -4, marginTop: 8 }];
      const intl5 = ChannelSettingsOverview(outer1_2[36]).intl;
      obj4.accessibilityLabel = intl5.string(ChannelSettingsOverview(outer1_2[36]).t.piZgKF);
      obj4.accessibilityValue = { text: secondsSliderLabel };
      items2[1] = outer1_48(ChannelSettingsOverview(outer1_2[63]).Slider, obj4);
      obj.children = items2;
      obj.children = outer1_49(ChannelSettingsOverview(outer1_2[62]).Card, obj);
      items.push(outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "slowmode-section"));
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
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          const string = intl.string;
          const t = ChannelSettingsOverview(outer1_2[36]).t;
          if (isForumPost) {
            let stringResult = string(t["3aJN9M"]);
          } else {
            stringResult = string(t.YUXr4Z);
          }
          const obj = {};
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.title = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.FGjMZS);
          obj.description = stringResult;
          const threadMetadata = channel.threadMetadata;
          let autoArchiveDuration;
          if (null != threadMetadata) {
            autoArchiveDuration = threadMetadata.autoArchiveDuration;
          }
          if (null == autoArchiveDuration) {
            autoArchiveDuration = outer1_47;
          }
          obj.selected = autoArchiveDuration;
          obj.channel = channel;
          obj.onSelectDuration = this.handleAutoArchiveDurationChange;
          return outer1_48(ChannelSettingsOverview(outer1_2[64]).AutoArchiveDurationOptions, obj);
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
        if (channel.type === outer1_31.PRIVATE_THREAD) {
          let obj = {};
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.description = intl.string(ChannelSettingsOverview(outer1_2[36]).t.cSyXJk);
          obj.hasIcons = false;
          obj = { disabled: !tmp2 };
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.s2rpNf);
          obj.value = channel.threadMetadata.invitable;
          obj.onValueChange = tmp.handleInvitableChange;
          obj.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj);
          tmp3 = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "thread-invitable-section");
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
      if (outer1_14.has(channel.type)) {
        tmp = null;
        if (props.canManageChannels) {
          const obj = {};
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(outer1_2[36]).t.FGjMZS);
          obj.selected = ChannelSettingsOverview(outer1_2[65]).getAutoArchiveDuration(channel, null);
          obj.channel = channel;
          obj.onSelectDuration = this.handleDefaultAutoArchiveDurationChange;
          const obj2 = ChannelSettingsOverview(outer1_2[65]);
          const tmp2 = outer1_48;
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          const string = intl2.string;
          let fyXclY = ChannelSettingsOverview(outer1_2[36]).t;
          if (isForumLikeChannelResult) {
            fyXclY = fyXclY.fyXclY;
            let stringResult = string(fyXclY);
          } else {
            stringResult = string(fyXclY.W3Noi9);
          }
          obj.description = stringResult;
          tmp2(ChannelSettingsOverview(outer1_2[64]).AutoArchiveDurationOptions, obj);
          isForumLikeChannelResult = channel.isForumLikeChannel();
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
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(outer1_2[36]).t.gePre2);
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.description = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["165cVX"]);
          obj.value = defaultSortOrder;
          obj.onChange = this.handleDefaultSortOrderChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.ElZtzj);
          obj.value = ChannelSettingsOverview(outer1_2[68]).ThreadSortOrder.LATEST_ACTIVITY;
          const items = [outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(outer1_2[36]).t.w28f3F);
          obj.value = ChannelSettingsOverview(outer1_2[68]).ThreadSortOrder.CREATION_DATE;
          items[1] = outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj);
          obj.children = items;
          return outer1_49(ChannelSettingsOverview(outer1_2[66]).TableRadioGroup, obj);
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
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(outer1_2[36]).t.Paxaug);
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.description = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.DqOl8J);
          obj.value = defaultTagSetting;
          obj.onChange = this.handleDefaultTagSettingChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.rQ0ctQ);
          obj.value = ChannelSettingsOverview(outer1_2[69]).ThreadSearchTagSetting.MATCH_SOME;
          const items = [outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(outer1_2[36]).t.FCXUu0);
          obj.value = ChannelSettingsOverview(outer1_2[69]).ThreadSearchTagSetting.MATCH_ALL;
          items[1] = outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj);
          obj.children = items;
          return outer1_49(ChannelSettingsOverview(outer1_2[66]).TableRadioGroup, obj);
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
      if (outer1_13(channel.type)) {
        if (null != guild) {
          const features = guild.features;
          if (features.has(outer1_33.NEWS)) {
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
                const intl = ChannelSettingsOverview(outer1_2[36]).intl;
                obj = { documentationLink: outer1_1(outer1_2[70]).getArticleURL(outer1_35.ANNOUNCEMENT_CHANNELS) };
                const items1 = [intl.format(ChannelSettingsOverview(outer1_2[36]).t.tI7KNX, obj), "\n\n", ];
                const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
                items1[2] = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["2Ab4Id"]);
                obj.children = items1;
                obj.description = outer1_49(outer1_50, obj);
                obj.hasIcons = false;
                const obj1 = { disabled: !props.canManageChannels };
                const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
                obj1.label = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.Au2b7m);
                obj1.value = channel.type === outer1_31.GUILD_ANNOUNCEMENT;
                const handleAnnouncementChange = self.handleAnnouncementChange;
                obj1.onValueChange = handleAnnouncementChange.bind(self, channel.type === outer1_31.GUILD_ANNOUNCEMENT);
                obj.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj1);
                items.push(outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "announcement-section"));
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
          let obj = ChannelSettingsOverview(outer1_2[38]);
          const bitrateLimit = obj.getBitrateLimit(guild, channel);
          obj = {};
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj = { bitrate: outer1_28 / 1000 };
          obj.description = intl.format(ChannelSettingsOverview(outer1_2[36]).t.SbQJk5, obj);
          obj.hasIcons = false;
          const obj1 = {};
          const obj2 = { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" } };
          const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
          const obj4 = { flexShrink: 1 };
          obj3.style = obj4;
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj3.children = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.w2d0vU);
          const items1 = [outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj3), ];
          const obj5 = { variant: "text-md/medium", color: "text-muted" };
          const _Math = Math;
          const _HermesInternal = HermesInternal;
          obj5.children = "" + Math.round(channel.bitrate / 1000) + "kbps";
          items1[1] = outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj5);
          obj2.children = items1;
          const items2 = [outer1_49(outer1_10, obj2), ];
          const obj6 = { style: tmp.slider };
          const _Math2 = Math;
          obj6.value = Math.min(channel.bitrate, bitrateLimit);
          obj6.minimumValue = outer1_29;
          obj6.maximumValue = bitrateLimit;
          obj6.onValueChange = this.handleBitRateChange;
          items2[1] = outer1_48(ChannelSettingsOverview(outer1_2[63]).Slider, obj6);
          obj1.children = items2;
          obj.children = outer1_49(ChannelSettingsOverview(outer1_2[62]).Card, obj1);
          items.push(outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "bitrate-section"));
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
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.title = intl.string(ChannelSettingsOverview(outer1_2[36]).t.jhJEJs);
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.description = intl2.format(ChannelSettingsOverview(outer1_2[36]).t.c5W7Ss, {});
          let AUTO = channel.videoQualityMode;
          if (null == AUTO) {
            AUTO = outer1_42.AUTO;
          }
          obj.value = AUTO;
          obj.onChange = this.handleVideoQualityModeChange;
          obj.hasIcons = false;
          obj = {};
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.jjKYpu);
          obj.value = outer1_42.AUTO;
          const items1 = [outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj), ];
          obj = {};
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl4.string(ChannelSettingsOverview(outer1_2[36]).t["7jOoJE"]);
          obj.value = outer1_42.FULL;
          items1[1] = outer1_48(ChannelSettingsOverview(outer1_2[67]).TableRadioRow, obj);
          obj.children = items1;
          items.push(outer1_49(ChannelSettingsOverview(outer1_2[66]).TableRadioGroup, obj, "video-quality-section"));
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
            const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
            let stringResult = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.XX5ciX);
          } else {
            const intl = ChannelSettingsOverview(outer1_2[36]).intl;
            let obj = { num: rounded };
            stringResult = intl.formatToPlainString(ChannelSettingsOverview(outer1_2[36]).t["3uHFUR"], obj);
          }
          const tmp9 = channel.isGuildStageVoice() ? outer1_38 : outer1_37;
          obj = {};
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          const format = intl3.format;
          const t = ChannelSettingsOverview(outer1_2[36]).t;
          if (isGuildStageVoiceResult) {
            let formatResult = format(t.OqZI8D, {});
          } else {
            formatResult = format(t["8yb3JT"], {});
          }
          obj.description = formatResult;
          obj.hasIcons = false;
          obj = {};
          const obj1 = { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" } };
          const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
          const obj3 = { flexShrink: 1 };
          obj2.style = obj3;
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj2.children = intl4.string(ChannelSettingsOverview(outer1_2[36]).t["/AoSGN"]);
          const items1 = [outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj2), ];
          const obj4 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
          items1[1] = outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj4);
          obj1.children = items1;
          const items2 = [outer1_49(outer1_10, obj1), ];
          const obj5 = { style: tmp.slider };
          const _Math2 = Math;
          obj5.value = Math.min(channel.userLimit, tmp9);
          obj5.minimumValue = 0;
          obj5.maximumValue = tmp9;
          obj5.onValueChange = this.handleUserLimitChange;
          items2[1] = outer1_48(ChannelSettingsOverview(outer1_2[63]).Slider, obj5);
          obj.children = items2;
          obj.children = outer1_49(ChannelSettingsOverview(outer1_2[62]).Card, obj);
          items.push(outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "channel-user-limit"));
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
      let self = this;
      self = this;
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
                const intl = ChannelSettingsOverview(outer1_2[36]).intl;
                name = intl.string(ChannelSettingsOverview(outer1_2[36]).t.JEmsap);
              }
              const items = [];
              let obj = {};
              const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
              obj.title = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["Ms8bX+"]);
              const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
              obj.description = intl3.string(ChannelSettingsOverview(outer1_2[36]).t["dbTs+z"]);
              obj.hasIcons = false;
              obj = {};
              const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
              obj.label = intl4.string(ChannelSettingsOverview(outer1_2[36]).t["Ms8bX+"]);
              obj = { text: name };
              obj.trailing = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow.TrailingText, obj);
              obj.arrow = true;
              obj.disabled = tmp2;
              obj.onPress = function onPress() {
                return self.pushScreen(outer2_30.CHANGE_RTC_REGION);
              };
              obj.children = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj);
              items.push(outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "channel-region-override"));
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
        hasItem = outer1_12.has(channel.type);
      }
      if (hasItem) {
        let enabled = channel.isGuildVocal();
        if (!enabled) {
          const VoiceInThreadsExperiment = ChannelSettingsOverview(outer1_2[72]).VoiceInThreadsExperiment;
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
      const self = this;
      if (!this.props.canManageRoles) {
        return null;
      } else {
        let tmp5Result = {};
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        tmp5Result.helperText = intl.string(ChannelSettingsOverview(outer1_2[36]).t.UAoMCL);
        let flag = true;
        tmp5Result.hasIcons = true;
        tmp5Result = {};
        if (tmp.type === outer1_31.GUILD_CATEGORY) {
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          let stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.PgkvDf);
        } else {
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.BAZMBn);
        }
        tmp5Result.label = stringResult;
        tmp5Result.arrow = flag;
        flag = ChannelSettingsOverview(outer1_2[73]).ShieldUserIcon;
        tmp5Result.icon = outer1_48(flag, {});
        tmp5Result.onPress = function onPress() {
          return self.pushScreen(outer2_30.PERMISSIONS, { origin: outer2_30.OVERVIEW });
        };
        tmp5Result = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, tmp5Result);
        tmp5Result.children = tmp5Result;
        outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, tmp5Result);
        const tmp2 = outer1_48;
        const tmp5 = outer1_48;
      }
    }
  };
  items[19] = {
    key: "renderSettingsSection",
    value(children) {
      let tmp = null;
      if (children.length > 0) {
        const obj = { hasIcons: true, children };
        tmp = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj);
      }
      return tmp;
    }
  };
  items[20] = {
    key: "renderCommonSettingsSection",
    value() {
      let self = this;
      self = this;
      const props = this.props;
      const channel = props.channel;
      let canManageChannels = props.canManageChannels;
      const items = [];
      if (tmp) {
        let obj = {};
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(outer1_2[36]).t.h850Ss);
        obj.arrow = true;
        obj.icon = outer1_48(ChannelSettingsOverview(outer1_2[74]).BellIcon, {});
        obj.onPress = function onPress() {
          if (channel.isThread()) {
            let result = ChannelSettingsOverview(outer2_2[75]).showThreadNotificationsBottomSheet(channel);
            const obj = ChannelSettingsOverview(outer2_2[75]);
          } else {
            result = self.pushScreen(outer2_30.NOTIFICATIONS);
          }
          return result;
        };
        items.push(outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj, "rowNotifications"));
      }
      if (outer1_13(channel.type)) {
        obj = {};
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["mp1N/2"]);
        obj.arrow = true;
        obj = { channelId: channel.id };
        obj.icon = outer1_48(outer1_55, obj);
        obj.onPress = function onPress() {
          return self.pushScreen(outer2_30.PINNED_MESSAGES);
        };
        obj.disabled = self.props.pinDisabled;
        items.push(outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj, "rowPinnedMessages"));
      }
      if (canManageChannels) {
        canManageChannels = channel.type !== outer1_31.GUILD_CATEGORY;
      }
      if (canManageChannels) {
        canManageChannels = !channel.isThread();
      }
      if (canManageChannels) {
        const obj1 = {};
        const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj1.label = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.ngRFjZ);
        obj1.arrow = true;
        obj1.icon = outer1_48(ChannelSettingsOverview(outer1_2[76]).LinkIcon, {});
        obj1.onPress = function onPress() {
          return self.pushScreen(outer2_30.INSTANT_INVITES);
        };
        items.push(outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj1, "rowInstantInvites"));
      }
      return self.renderSettingsSection(items);
    }
  };
  items[21] = {
    key: "renderDefaultForumLayout",
    value() {
      const self = this;
      const channel = this.props.channel;
      if (!channel.isForumChannel()) {
        return null;
      } else {
        let obj = {};
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.description = intl.string(ChannelSettingsOverview(outer1_2[36]).t.mOSViT);
        obj.hasIcons = true;
        obj = {};
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["kQvoC/"]);
        obj = {};
        if (channel.defaultForumLayout === ChannelSettingsOverview(outer1_2[77]).ForumLayout.GRID) {
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          let stringResult = intl4.string(ChannelSettingsOverview(outer1_2[36]).t["8RswJG"]);
        } else {
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t["4HXEZG"]);
        }
        obj.text = stringResult;
        obj.trailing = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow.TrailingText, obj);
        obj.arrow = true;
        if (channel.defaultForumLayout === ChannelSettingsOverview(outer1_2[77]).ForumLayout.GRID) {
          let tmp16 = outer1_48(ChannelSettingsOverview(outer1_2[78]).GridSquareIcon, {});
        } else {
          tmp16 = outer1_48(ChannelSettingsOverview(outer1_2[79]).ListViewIcon, {});
        }
        obj.icon = tmp16;
        obj.onPress = function onPress() {
          return self.pushScreen(outer2_30.DEFAULT_FORUM_LAYOUT);
        };
        obj.children = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj, "forumDefaultLayout");
        outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj, "default-forum-layout");
        const tmp = outer1_48;
        const tmp4 = outer1_48;
        const tmp5 = outer1_48;
      }
    }
  };
  items[22] = {
    key: "renderUncommonSettingsSection",
    value() {
      let self = this;
      self = this;
      const props = this.props;
      const canManageWebhooks = props.canManageWebhooks;
      let tmp = undefined !== canManageWebhooks && canManageWebhooks;
      let closure_1 = tmp;
      let obj = ChannelSettingsOverview(outer1_2[80]);
      const result = obj.canUnlinkLobbyChannel(props.channel);
      let closure_2 = result;
      const items = [];
      if (!tmp) {
        tmp = result;
      }
      if (tmp) {
        obj = {};
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(outer1_2[36]).t.CIsNZw);
        obj.arrow = true;
        obj.icon = outer1_48(ChannelSettingsOverview(outer1_2[81]).PuzzlePieceIcon, {});
        obj.onPress = function onPress() {
          return self.pushScreen(outer2_30.INTEGRATIONS, { canManageWebhooks: closure_1, canUnlinkLobby: closure_2 });
        };
        items.push(outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj, "rowIntegrations"));
      }
      return self.renderSettingsSection(items);
    }
  };
  items[23] = {
    key: "renderThreadManagementActions",
    value() {
      let ChannelSettingsOverview;
      let canManageThread;
      let canUnarchiveThread;
      let hasJoinedThread;
      let isArchivedThread;
      let isForumPost;
      let isLockedThread;
      let isThreadModerator;
      const props = this.props;
      ({ channel: ChannelSettingsOverview, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
      ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
      let obj = { hasIcons: true };
      if (hasJoinedThread) {
        const items = [null, , , , , ];
        let tmp11 = null;
        if (isArchivedThread) {
          tmp11 = null;
          if (canUnarchiveThread) {
            obj = { icon: outer1_48(ChannelSettingsOverview(outer1_2[84]).ClockIcon, {}) };
            const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
            const string2 = intl2.string;
            let cnRubV = ChannelSettingsOverview(outer1_2[36]).t;
            if (isForumPost) {
              cnRubV = cnRubV.cnRubV;
              let string2Result = string2(cnRubV);
            } else {
              string2Result = string2(cnRubV.S9E4G7);
            }
            obj.label = string2Result;
            obj.onPress = function onPress() {
              return outer2_1(outer2_2[83]).unarchiveThread(closure_0, false);
            };
            outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj);
            const tmp12 = outer1_48;
          }
        }
        items[1] = tmp11;
        let tmp20 = null;
        if (!isArchivedThread) {
          tmp20 = null;
          if (canManageThread) {
            obj = { icon: outer1_48(ChannelSettingsOverview(outer1_2[85]).XLargeIcon, {}) };
            const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
            const string3 = intl3.string;
            let BTs4Kb = ChannelSettingsOverview(outer1_2[36]).t;
            if (isForumPost) {
              BTs4Kb = BTs4Kb.BTs4Kb;
              let string3Result = string3(BTs4Kb);
            } else {
              string3Result = string3(BTs4Kb.wiIevd);
            }
            obj.label = string3Result;
            obj.onPress = function onPress() {
              return outer2_1(outer2_2[83]).archiveThread(closure_0, false);
            };
            outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj);
            const tmp21 = outer1_48;
          }
        }
        items[2] = tmp20;
        let tmp29 = null;
        if (isThreadModerator) {
          tmp29 = null;
          if (isLockedThread) {
            const obj1 = { icon: outer1_48(ChannelSettingsOverview(outer1_2[86]).LockIcon, {}) };
            const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
            const string4 = intl4.string;
            _OKSxp = ChannelSettingsOverview(outer1_2[36]).t;
            if (isForumPost) {
              _OKSxp = _OKSxp["/OKSxp"];
              let string4Result = string4(_OKSxp);
            } else {
              string4Result = string4(_OKSxp["jeyb/W"]);
            }
            obj1.label = string4Result;
            obj1.onPress = function onPress() {
              return outer2_1(outer2_2[83]).unlockThread(closure_0);
            };
            outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj1);
            const tmp30 = outer1_48;
          }
        }
        items[3] = tmp29;
        let tmp38 = null;
        if (isThreadModerator) {
          tmp38 = null;
          if (!isLockedThread) {
            const obj2 = { icon: outer1_48(ChannelSettingsOverview(outer1_2[86]).LockIcon, {}) };
            const intl5 = ChannelSettingsOverview(outer1_2[36]).intl;
            const string5 = intl5.string;
            Ur_0Na = ChannelSettingsOverview(outer1_2[36]).t;
            if (isForumPost) {
              Ur_0Na = Ur_0Na["Ur/0Na"];
              let string5Result = string5(Ur_0Na);
            } else {
              string5Result = string5(Ur_0Na.HoCqm8);
            }
            obj2.label = string5Result;
            obj2.onPress = function onPress() {
              return outer2_1(outer2_2[83]).lockThread(closure_0);
            };
            outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj2);
            const tmp39 = outer1_48;
          }
        }
        items[4] = tmp38;
        const obj3 = { icon: outer1_48(ChannelSettingsOverview(outer1_2[76]).LinkIcon, {}) };
        const intl6 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj3.label = intl6.string(ChannelSettingsOverview(outer1_2[36]).t.WqhZss);
        obj3.onPress = function onPress() {
          return ChannelSettingsOverview(outer2_2[87]).copyGuildChannelOrThreadLink(closure_0.guild_id, closure_0.id);
        };
        items[5] = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj3);
        obj.children = items;
        return outer1_49(tmp2, obj);
      } else {
        const obj4 = { icon: outer1_48(ChannelSettingsOverview(outer1_2[82]).GroupPlusIcon, {}) };
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        const string = intl.string;
        let ihLPiO = ChannelSettingsOverview(outer1_2[36]).t;
        if (isForumPost) {
          ihLPiO = ihLPiO.ihLPiO;
          let stringResult = string(ihLPiO);
        } else {
          stringResult = string(ihLPiO["10kukS"]);
        }
        obj4.label = stringResult;
        obj4.onPress = function onPress() {
          return outer2_1(outer2_2[83]).joinThread(closure_0, "Context Menu");
        };
        outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj4);
        const tmp3 = outer1_48;
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
      ({ canManageChannels, isForumPost } = props);
      ({ isThreadModerator, hasJoinedThread } = props);
      if (channel.isThread()) {
        canManageChannels = isThreadModerator;
      }
      let tmp = null;
      if (canManageChannels) {
        if (channel.type === outer1_31.GUILD_CATEGORY) {
          const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
          let stringResult = intl3.string(ChannelSettingsOverview(outer1_2[36]).t.ifbXnL);
        } else if (isForumPost) {
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.nEOg1N);
        } else {
          const intl = ChannelSettingsOverview(outer1_2[36]).intl;
          const string = intl.string;
          const t = ChannelSettingsOverview(outer1_2[36]).t;
          if (isThreadResult) {
            stringResult = string(t.H7vTe2);
          } else {
            stringResult = string(t["8D8Rsb"]);
          }
          isThreadResult = channel.isThread();
        }
        let obj = { hasIcons: true };
        if (!hasJoinedThread) {
          const items = [null, ];
          obj = { variant: "danger" };
          obj = { color: "text-feedback-critical" };
          obj.icon = outer1_48(ChannelSettingsOverview(outer1_2[89]).TrashIcon, obj);
          obj.label = stringResult;
          obj.onPress = this.handleDeleteChannel;
          items[1] = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj);
          obj.children = items;
          tmp = tmp11(tmp14, obj);
        } else {
          const obj1 = { variant: "danger" };
          const obj2 = { color: "text-feedback-critical" };
          obj1.icon = outer1_48(ChannelSettingsOverview(outer1_2[88]).UserMinusIcon, obj2);
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          const string2 = intl4.string;
          if (isForumPost) {
            let string2Result = string2(_2LsZdT);
          } else {
            string2Result = string2(_2LsZdT["fa/84m"]);
          }
          obj1.label = string2Result;
          obj1.onPress = function onPress() {
            return outer2_1(outer2_2[83]).leaveThread(channel, "Context Menu");
          };
          outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj1);
          const tmp16 = outer1_48;
        }
        tmp11 = outer1_49;
      }
      return tmp;
    }
  };
  items[25] = {
    key: "renderForumTags",
    value() {
      let canManageChannels;
      let channel;
      let self = this;
      self = this;
      const tmp = outer1_52(this.context);
      ({ channel, canManageChannels } = this.props);
      if (channel.isForumLikeChannel()) {
        let availableTags = channel.availableTags;
        if (null != availableTags) {
          const everyResult = availableTags.every((moderated) => moderated.moderated);
        }
        let tmp3 = canManageChannels;
        if (canManageChannels) {
          tmp3 = channel.availableTags.length < outer1_46;
        }
        const error = self.getError("available_tags");
        let obj = { spacing: outer1_1(outer1_2[28]).space.PX_12 };
        obj = {};
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.title = intl.string(ChannelSettingsOverview(outer1_2[36]).t["P/y+sj"]);
        let stringResult;
        if (channel.availableTags.length <= 0) {
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          stringResult = intl2.string(ChannelSettingsOverview(outer1_2[36]).t["3v8kZH"]);
        }
        obj.description = stringResult;
        obj.hasIcons = false;
        obj = { style: tmp.tagsWrapper };
        let tmp17Result = null;
        if (channel.availableTags.length > 0) {
          const obj1 = {};
          availableTags = channel.availableTags;
          const items = [availableTags.map((id) => outer2_48(outer2_1(outer2_2[91]), { tag: id, onPress: self.handlePressTag, disabled: !canManageChannels }, id.id)), ];
          let tmp19 = null;
          if (tmp3) {
            const obj2 = { style: tmp.addTagIconButtonWrapper };
            const obj3 = {};
            const obj4 = { size: "sm", color: outer1_1(outer1_2[28]).colors.WHITE };
            obj3.icon = outer1_48(ChannelSettingsOverview(outer1_2[93]).PlusSmallIcon, obj4);
            obj3.size = "sm";
            obj3.onPress = function onPress() {
              return self.handlePressTag();
            };
            const intl3 = ChannelSettingsOverview(outer1_2[36]).intl;
            obj3.accessibilityLabel = intl3.string(ChannelSettingsOverview(outer1_2[36]).t["/jubeD"]);
            obj2.children = outer1_48(ChannelSettingsOverview(outer1_2[92]).IconButton, obj3);
            tmp19 = outer1_48(outer1_10, obj2);
          }
          items[1] = tmp19;
          obj1.children = items;
          tmp17Result = outer1_49(outer1_50, obj1);
          const tmp17 = outer1_49;
          const tmp18 = outer1_50;
        }
        obj.children = tmp17Result;
        obj.children = outer1_48(outer1_10, obj);
        const items1 = [outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj), , , ];
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
          const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.createTagButtonText };
          const intl4 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj6.children = intl4.string(ChannelSettingsOverview(outer1_2[36]).t.F4is7L);
          obj5.children = outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj6);
          tmp27 = outer1_48(ChannelSettingsOverview(outer1_2[94]).PressableOpacity, obj5);
        }
        items1[1] = tmp27;
        let tmp32 = null != error && error.length > 0;
        if (tmp32) {
          const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
          tmp32 = outer1_48(ChannelSettingsOverview(outer1_2[45]).Text, obj7);
        }
        items1[2] = tmp32;
        const obj8 = { hasIcons: false };
        const obj9 = {};
        let tmp40 = !canManageChannels;
        if (!tmp40) {
          tmp40 = everyResult;
        }
        obj9.disabled = tmp40;
        const intl5 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj9.label = intl5.string(ChannelSettingsOverview(outer1_2[36]).t.yX24uI);
        obj9.value = channel.hasFlag(outer1_43.REQUIRE_TAG);
        obj9.onValueChange = self.handleToggleRequireTag;
        obj8.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj9);
        items1[3] = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj8);
        obj.children = items1;
        return outer1_49(ChannelSettingsOverview(outer1_2[90]).Stack, obj);
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
        const intl = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.label = intl.string(ChannelSettingsOverview(outer1_2[36]).t.u8LZOt);
        const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
        obj.subLabel = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.J4wCc7);
        obj.value = !channel.hasFlag(outer1_43.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        obj.onValueChange = this.handleToggleShowMediaDownloadOptions;
        obj.children = outer1_48(ChannelSettingsOverview(outer1_2[60]).TableSwitchRow, obj);
        tmp = outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj);
      }
      return tmp;
    }
  };
  items[27] = {
    key: "renderCategory",
    value() {
      let canManageParent;
      let category;
      const self = this;
      const props = this.props;
      ({ category, canManageParent } = props);
      if (props.hasCategories) {
        if (props.channel.type !== outer1_31.GUILD_CATEGORY) {
          if (null == category) {
            const intl = ChannelSettingsOverview(outer1_2[36]).intl;
            let stringResult = intl.string(ChannelSettingsOverview(outer1_2[36]).t.GSfOoo);
          } else {
            let obj = ChannelSettingsOverview(outer1_2[48]);
            stringResult = obj.computeChannelName(category, outer1_25, outer1_24);
          }
          obj = { hasIcons: true };
          obj = { icon: outer1_48(ChannelSettingsOverview(outer1_2[95]).FolderPlusIcon, {}) };
          const intl2 = ChannelSettingsOverview(outer1_2[36]).intl;
          obj.label = intl2.string(ChannelSettingsOverview(outer1_2[36]).t.vHCZwr);
          const obj1 = { text: stringResult };
          obj.trailing = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow.TrailingText, obj1);
          obj.arrow = canManageParent;
          let fn;
          if (canManageParent) {
            fn = () => self.pushScreen(outer2_30.CHANGE_CATEGORY);
          }
          obj.onPress = fn;
          obj.children = outer1_48(ChannelSettingsOverview(outer1_2[71]).TableRow, obj);
          return outer1_48(ChannelSettingsOverview(outer1_2[59]).TableRowGroup, obj);
        }
      }
      return null;
    }
  };
  items[28] = {
    key: "renderThreadSettings",
    value() {
      let obj = {};
      obj = { spacing: outer1_1(outer1_2[28]).space.PX_24, style: outer1_52(this.context).stackPadding };
      const items = [this.renderChannelInfo(), this.renderCommonSettingsSection(), this.renderThreadManagementActions(), this.renderThreadSpoiler(), this.renderSlowmode(), this.renderAutoArchiveDuration(), this.renderInvitable(), this.renderDeleteButton()];
      obj.children = items;
      obj.children = outer1_49(ChannelSettingsOverview(outer1_2[90]).Stack, obj);
      return outer1_48(ChannelSettingsOverview(outer1_2[96]).Form, obj);
    }
  };
  items[29] = {
    key: "renderChannelSettings",
    value() {
      let obj = {};
      obj = { spacing: outer1_1(outer1_2[28]).space.PX_24, style: outer1_52(this.context).stackPadding };
      const items = [this.renderChannelInfo(), this.renderForumTags(), this.renderCategory(), this.renderPermissions(), this.renderCommonSettingsSection(), this.renderDefaultForumLayout(), this.renderDefaultSortOrder(), this.renderDefaultTagSetting(), this.renderAnnouncement(), this.renderNsfwConfig(), this.renderSlowmode(), this.renderDefaultAutoArchiveDuration(), this.renderBitrateSettings(), this.renderVideoQualityModeSettings(), this.renderUserLimitSettings(), this.renderRegionOverride(), this.renderUncommonSettingsSection(), this.renderShowMediaDownloadOptions(), this.renderDeleteButton()];
      obj.children = items;
      obj.children = outer1_49(ChannelSettingsOverview(outer1_2[90]).Stack, obj);
      return outer1_48(ChannelSettingsOverview(outer1_2[96]).Form, obj);
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
      const obj = { style: outer1_52(this.context).screenContainer, children: renderThreadSettingsResult };
      return outer1_48(outer1_10, obj);
    }
  };
  return callback(ChannelSettingsOverview, items);
})(importAllResult.PureComponent);
let closure_53 = tmp7;
tmp7.contextType = require("ManaContext").ThemeContext;
let result = set.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  let autoFocusElement;
  let hasJoinedThread;
  let isMutedThread;
  let require;
  ({ channelId: require, autoFocusElement } = arg0);
  let obj = require(navigation[98]);
  navigation = obj.useNavigation();
  const items = [closure_18];
  const stateFromStores = require(navigation[29]).useStateFromStores(items, () => outer1_18.getChannel(closure_0));
  const obj2 = require(navigation[29]);
  const items1 = [closure_17];
  const stateFromStores1 = require(navigation[29]).useStateFromStores(items1, () => outer1_17.getChannel());
  const obj4 = require(navigation[29]);
  const isThreadModerator = require(navigation[72]).useIsThreadModerator(stateFromStores);
  const obj5 = require(navigation[72]);
  const items2 = [closure_11];
  const stateFromStoresObject = require(navigation[29]).useStateFromStoresObject(items2, () => {
    const obj = {};
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = outer1_11.isMuted(stateFromStores.id);
    }
    obj.isMutedThread = isMutedResult;
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = outer1_11.hasJoined(stateFromStores.id);
    }
    obj.hasJoinedThread = hasJoinedResult;
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj6 = require(navigation[29]);
  const canManageThread = require(navigation[72]).useCanManageThread(stateFromStores);
  const obj7 = require(navigation[72]);
  const shouldHideChannelContent = require(navigation[61]).useShouldHideChannelContent(stateFromStores);
  const obj8 = require(navigation[61]);
  const items3 = [closure_17, closure_20, closure_18, closure_25, closure_23, closure_19, closure_21];
  const items4 = [stateFromStores, shouldHideChannelContent];
  const stateFromStoresObject1 = require(navigation[29]).useStateFromStoresObject(items3, () => {
    let errors;
    let submitting;
    const props = outer1_17.getProps();
    ({ submitting, errors } = props);
    if (null == stateFromStores) {
      let obj = { isThread: false, submitting, errors };
      return obj;
    } else {
      const guild = outer1_20.getGuild(stateFromStores.getGuildId());
      const channel = outer1_18.getChannel(stateFromStores.parent_id);
      const currentUser = outer1_25.getCurrentUser();
      const hasItem = outer1_15.has(stateFromStores.type);
      obj = { isThread: hasItem, guild, category: channel };
      const regions = outer1_23.getRegions(stateFromStores.getGuildId());
      obj.hasCategories = outer1_19.hasCategories(stateFromStores.guild_id);
      obj.pinDisabled = shouldHideChannelContent;
      obj.canManageChannels = outer1_21.can(outer1_39.MANAGE_CHANNELS, stateFromStores);
      let tmp3 = null != currentUser;
      if (tmp3) {
        tmp3 = stateFromStores.ownerId === currentUser.id;
      }
      obj.isChannelOwner = tmp3;
      if (null != channel) {
        let canResult = outer1_21.can(outer1_39.MANAGE_CHANNELS, channel);
      } else {
        canResult = outer1_21.can(outer1_39.MANAGE_CHANNELS, guild);
      }
      obj.canManageParent = canResult;
      obj.canManageRoles = outer1_21.can(outer1_39.MANAGE_ROLES, stateFromStores);
      obj.canSendMessages = outer1_21.can(outer1_39.SEND_MESSAGES, stateFromStores);
      let canResult1 = outer1_13(stateFromStores.type);
      if (canResult1) {
        canResult1 = outer1_21.can(outer1_39.MANAGE_WEBHOOKS, stateFromStores);
      }
      obj.canManageWebhooks = canResult1;
      obj = outer1_0(navigation[72]);
      obj.canUnarchiveThread = obj.canUnarchiveThread(stateFromStores);
      obj.regions = regions;
      obj.submitting = submitting;
      obj.errors = errors;
      let tmp21 = outer1_16(guild);
      if (!tmp21) {
        tmp21 = null != stateFromStores.linkedLobby;
      }
      obj.isNSFWDisabled = tmp21;
      return obj;
    }
  }, items4);
  const ref = importAllResult.useRef(null);
  const items5 = [autoFocusElement, navigation];
  const effect = importAllResult.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      if (outer1_1 === outer2_26.CHANNEL_NAME) {
        const current = outer1_5.current;
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
    tmp11Result = closure_48(closure_53, obj);
    const tmp11 = closure_48;
    const tmp12 = closure_53;
  }
  return tmp11Result;
};
export { PinImage };
