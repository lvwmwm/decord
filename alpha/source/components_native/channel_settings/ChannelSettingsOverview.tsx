// Module ID: 18835
// Function ID: 18836
// Name: ChannelSettingsOverview
// Dependencies: [5, 19, 17, 4943, 4862, 4876, 8192, 4858, 4939, 4880, 4941, 6836, 18836, 4951, 1384, 18837, 1072, 4865, 7448, 1113, 1083, 21, 5009, 575, 504, 10960, 18838, 1114, 5075, 12, 18839, 5755, 6992, 9791, 8191, 5707, 9026, 7449, 4955, 1397, 5016, 9024, 5954, 5619, 9055, 5647, 6025, 7413, 13228, 18840, 6440, 5194, 18841, 7076, 7247, 1376, 7054, 7363, 6728, 15812, 18842, 9756, 4948, 9027, 18843, 18844, 7052, 7055, 4867, 4869, 2062, 6041, 6969, 7437, 9040, 9189, 11122, 5722, 4868, 18849, 7255, 10789, 16807, 10958, 8194, 5735, 10748, 8659, 10962, 5720, 5733, 6022, 11121, 8020, 9550, 6974, 18158, 8169, 1498, 2]
// Exports: default

// Module 18835 (ChannelSettingsOverview)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1083 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import intl9 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FlagUtils from "FlagUtils" /* 1397 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import ThreadSortOrder from "ThreadSortOrder" /* 4867 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 4869 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4948 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4955 */;
import shared from "shared" /* 5016 */;
import native from "native" /* 5075 */;
import useChannelName from "useChannelName" /* 5647 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import LinkIcon from "LinkIcon" /* 5722 */;
import ClockIcon from "ClockIcon" /* 5735 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7052 */;
import TableRowGroup3 from "TableRowGroup" /* 7054 */;
import TableRadioRow3 from "TableRadioRow" /* 7055 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7363 */;
import ThreadHooks from "ThreadHooks" /* 7437 */;
import ForumConstants from "ForumConstants" /* 7448 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7449 */;
import _mod8169 from "module_8169" /* 8169 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8191 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8194 */;
import LockIcon from "LockIcon" /* 8659 */;
import sanitizeChannelNameDefault from "sanitizeChannelName" /* 9026 */;
import AppChannelApplicationSelectorDefault from "AppChannelApplicationSelector" /* 9027 */;
import ThreadAutoArchive from "ThreadAutoArchive" /* 9756 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import XLargeIcon from "XLargeIcon" /* 10748 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10958 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10962 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 11121 */;
import threadActionSheets from "threadActionSheets" /* 11122 */;
import TableSliderRow2 from "TableSliderRow" /* 15812 */;
import ChannelSettingsConstants from "ChannelSettingsConstants" /* 18837 */;
import SecondsSliderUtils from "SecondsSliderUtils" /* 18838 */;
import RegionActionCreatorsDefault from "RegionActionCreators" /* 18839 */;
import ChannelSettingsUtils from "ChannelSettingsUtils" /* 18841 */;
import ThreadAutoArchiveBottomSheet from "ThreadAutoArchiveBottomSheet" /* 18842 */;
import VoiceChannelAppSettingDefault from "VoiceChannelAppSetting" /* 18844 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8192 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import RegionStore from "RegionStore" /* 18836 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c5, c6, navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_26;
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
let closure_47;
let closure_48;
let closure_49;
let map1;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
class PinImage {
  constructor(channelId) {
    let items1;
    let obj3;
    channelId = channelId.channelId;
    const style = channelId.style;
    const tmp = closure_50();
    const items = [ReadStateStore];
    let tmp4;
    const obj = channelId(504);
    const tmp2 = channelId;
    if (obj.useStateFromStores(items, () => ReadStateStore.hasUnreadPins(channelId))) {
      const obj2 = { style: tmp.outer, children: closure_47(View, obj3) };
      obj3 = { style: tmp.badge };
      tmp4 = closure_47(View, obj2);
    }
    const obj4 = { style, children: items1 };
    items1 = [closure_47(tmp2(10960).PinIcon, {}), tmp4];
    return closure_48(View, obj4);
  }
}
function formatSlowmodeCooldown(arg0) {
  const getSecondsSliderLabel = SecondsSliderUtils.getSecondsSliderLabel;
  SecondsSliderUtils;
  const tmp2 = length[Math.round(Math, arg0)];
  const intl = intl9.intl;
  return getSecondsSliderLabel(tmp2, false, intl.string(intl9.t.zvDu4h));
}
function formatBitrate(arg0) {
  return "" + Math.round(arg0 / 1000) + "kbps";
}
function formatUserLimit(arg0) {
  let stringResult;
  const rounded = Math.round(arg0);
  if (0 === rounded) {
    const intl2 = intl9.intl;
    stringResult = intl2.string(intl9.t.XX5ciX);
  } else {
    const intl = intl9.intl;
    const obj = { num: rounded };
    stringResult = intl.formatToPlainString(intl9.t["3uHFUR"], obj);
  }
  return stringResult;
}
const View = react_native.View;
({ EDITABLE_VOICE_SETTINGS_TYPES: metroImportDefault, isGuildTextChannelType: metroImportAll, THREADED_CHANNEL_TYPES: c9, THREAD_CHANNEL_TYPES: c10, SLOWMODE_CHANNEL_TYPES: unpackModuleId, NSFW_CHANNEL_TYPES: closure_12, TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: map1, GUILD_WEBHOOK_CHANNEL_TYPES: closure_14 } = ChannelRecord);
const isGuildNSFW = GuildRecord.isGuildNSFW;
let closure_25 = ChannelSettingsConstants.ChannelSettingsAutoFocusElement;
({ AnalyticEvents: closure_26, BITRATE_DEFAULT: closure_27, BITRATE_MIN: closure_28, ChannelSettingsSections: closure_29, ChannelTypes: closure_30, ChannelTypesSets: closure_31, GuildFeatures: closure_32, GuildSettingsSections: closure_33, HelpdeskArticles: closure_34, MAX_CHANNEL_NAME_LENGTH: closure_35, MAX_VOICE_USER_LIMIT: closure_36, MAX_STAGE_VOICE_USER_LIMIT: closure_37, Permissions: closure_38, SettingsPaneTypes: closure_39, SLOWMODE_VALUES: closure_40, VideoQualityMode: closure_41 } = Constants);
({ ChannelFlags: closure_42, MAX_CHANNEL_TOPIC_LENGTH: closure_43, MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_44 } = ChannelConstants);
const MAX_FORUM_TAGS = ForumConstants.MAX_FORUM_TAGS;
let closure_46 = ThreadConstants.DEFAULT_AUTO_ARCHIVE_DURATION;
const Fonts = Constants2.Fonts;
({ jsx: closure_47, jsxs: closure_48, Fragment: closure_49 } = Fragment);
let createStyles = createStyles_mod;
let obj = { outer: size, badge: size1 };
size = { position: "absolute", top: 2, right: -4, width: 12, height: 12, borderRadius: nativeDefault.radii.md, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
let closure_50 = createStyles(obj);
createStyles = createStyles_mod;
let obj2 = { screenContainer: obj3, stackPadding: obj4, alertText: { marginTop: 16 }, tagsWrapper: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, addTagIconButtonWrapper: obj5, createTagButton: obj6, createTagButtonText: { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14 } };
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: nativeDefault.space.PX_16 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj5 = { justifyContent: "center", margin: nativeDefault.space.PX_4 };
obj6 = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: nativeDefault.space.PX_4 };
const isGuildMetadataLoaded = createLegacyClassComponentStyles(obj2);
const PureComponent = react.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp5 = new tmp(arg0, tmp4, tmp3, tmp2);
    let obj = _modDef12;
    tmp5._cooldown = obj.findIndex(closure_40, (arg0) => arg0 >= closure_0.props.channel.rateLimitPerUser);
    tmp5.state = { hasChanges: false };
    tmp5.pushScreen = function pushScreen() {
      const items = [...arguments];
      navigation = closure_0.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== constants2.PERMISSIONS) {
        const obj2 = { settings_type: "channel", origin_pane: constants4.CHANNEL_SETTINGS, destination_pane: items[0] };
        const obj = AppAnalyticsUtilsDefault;
        obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
      }
    };
    tmp5.handleSave = function handleSave() {
      let autoArchiveDuration;
      let channel;
      let invitable;
      let locked;
      let threadMetadata;
      let obj = channel;
      if (channel.state.hasChanges) {
        channel = obj.props.channel;
        const tmp3 = ChannelSettingsActionCreatorsDefault;
        ({ name: obj2.name, type: obj2.type, topic: obj2.topic, position: obj2.position, bitrate: obj2.bitrate, userLimit: obj2.userLimit, defaultAutoArchiveDuration: obj2.defaultAutoArchiveDuration, nsfw: obj2.nsfw, rateLimitPerUser: obj2.rateLimitPerUser, videoQualityMode: obj2.videoQualityMode, threadMetadata } = channel);
        const obj3 = { name: null, type: null, topic: null, position: null, bitrate: null, userLimit: null, defaultAutoArchiveDuration: null, nsfw: null, rateLimitPerUser: null, videoQualityMode: null, autoArchiveDuration, locked, invitable, flags: channel.flags, defaultSortOrder: channel.getDefaultSortOrder(), defaultForumLayout: channel.defaultForumLayout, defaultTagSetting: channel.getDefaultTagSetting(), iconEmoji: null, themeColor: null, applicationId: null };
        autoArchiveDuration = undefined;
        const saveChannel = tmp3.saveChannel;
        const id = channel.id;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        const threadMetadata2 = channel.threadMetadata;
        locked = undefined;
        if (threadMetadata2 != null) {
          locked = threadMetadata2.locked;
        }
        const threadMetadata3 = channel.threadMetadata;
        invitable = undefined;
        if (threadMetadata3 != null) {
          invitable = threadMetadata3.invitable;
        }
        ({ iconEmoji: obj2.iconEmoji, themeColor: obj2.themeColor, application_id: obj2.applicationId } = channel);
        const saveChannelResult = saveChannel(id, obj3);
        saveChannelResult.then((status) => {
          if (200 === status.status) {
            let stringResult;
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            const isThreadResult = channel.isThread();
            const intl = intl9.intl;
            const string = intl.string;
            const t = intl9.t;
            if (isThreadResult) {
              stringResult = string(t.n2Y84J);
            } else {
              stringResult = string(t["FE/ohq"]);
            }
            const obj = { text: stringResult, variant: "success" };
            open("THREAD_SETTINGS_UPDATED", obj);
            navigation = channel.props.navigation;
            navigation.goBack();
          }
        });
        obj.setState({ hasChanges: false });
      }
    };
    tmp5.handleChangeName = function handleChangeName(arg0) {
      const channel = closure_0.props.channel;
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { name: sanitizeChannelNameDefault(arg0, channel.type) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleBlurName = function handleBlurName() {
      const channel = closure_0.props.channel;
      const obj = closure_0;
      if (channel.isThread()) {
        const tmp3 = sanitizeThreadNameDefault(channel.name, true);
        const tmp = importDefault;
        if (tmp3 !== channel.name) {
          const obj2 = { name: tmp3 };
          const tmpResult = tmp(8191);
          tmpResult.updateChannel(obj2);
          obj.setState({ hasChanges: true });
        }
      }
    };
    tmp5.handleChangeTopic = function handleChangeTopic(emojiName) {
      let obj2;
      const obj = { topic: obj2.translateInlineEmojiToSurrogates(emojiName) };
      const updateChannel = ChannelSettingsActionCreatorsDefault.updateChannel;
      ChannelSettingsActionCreatorsDefault;
      obj2 = UnicodeEmojisDefault;
      updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleBitRateChange = function handleBitRateChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { bitrate: Math.round(arg0) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { videoQualityMode };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleNsfwChange = function handleNsfwChange(nsfw) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { nsfw };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleThreadSpoilerChange = function handleThreadSpoilerChange(arg0) {
      const channel = closure_0.props.channel;
      const obj = FlagUtils;
      const setFlagResult = obj.setFlag(channel.flags, constants5.IS_SPOILER_CHANNEL, arg0);
      const obj2 = ChannelSettingsActionCreatorsDefault;
      obj2.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
      let hasChanges = closure_0.state.hasChanges;
      const channel = closure_0.props.channel;
      const tmp2 = closure_40[Math.round(Math, arg0)];
      const obj = ChannelSettingsActionCreatorsDefault;
      obj.updateChannel({ rateLimitPerUser: tmp2 });
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const getSecondsSliderLabel = SecondsSliderUtils.getSecondsSliderLabel;
      SecondsSliderUtils;
      const intl = intl9.intl;
      announce(getSecondsSliderLabel(tmp2, false, intl.string(intl9.t.zvDu4h)));
      const setState = closure_0.setState;
      if (!hasChanges) {
        hasChanges = channel.rateLimitPerUser !== tmp2;
      }
      setState({ hasChanges });
    };
    tmp5.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(defaultAutoArchiveDuration) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultAutoArchiveDuration };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { autoArchiveDuration };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultSortOrder };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultTagSetting };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleInvitableChange = function handleInvitableChange(invitable) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { invitable };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { type: arg0 ? constants3.GUILD_TEXT : constants3.GUILD_ANNOUNCEMENT };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const channel = closure_0.props.channel;
      const obj = FlagUtils;
      const setFlagResult = obj.setFlag(channel.flags, constants5.ACTIVE_CHANNELS_REMOVED, !arg0);
      const obj2 = ChannelSettingsActionCreatorsDefault;
      obj2.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleUserLimitChange = function handleUserLimitChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { userLimit: Math.round(arg0) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDeleteChannel = _asyncToGenerator(async () => {
      let closure_1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items;
      let items1;
      let obj10;
      let obj13;
      let obj14;
      let obj17;
      let tmp;
      tmp = closure_1_52(tmp.context);
      const channel = tmp.props.channel;
      const user = guild.getGuild(channel.getGuildId());
      const obj19 = tmp(c2[41]);
      let closure_3 = await obj19.isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id);
      if (null != user) {
        const tmp5 = tmp;
        let tmp6 = tmp4;
        let tmp7 = user;
        const features = user.features;
        if (features.has(constants.COMMUNITY)) {
          if (user.publicUpdatesChannelId === channel.id) {
            const obj9 = { title: intl5.string(tmp(c2[27]).t["TY/V+H"]), confirmText: intl6.string(tmp(c2[27]).t.BddRzS), children: closure_1_48(closure_1_49, obj10) };
            const show2 = tmp4(c2[42]).show;
            const tmp74 = tmp4(c2[42]);
            intl5 = tmp(c2[27]).intl;
            intl6 = tmp(c2[27]).intl;
            obj10 = { children: items };
            const obj11 = { style: tmp.alertText, variant: "text-md/medium", children: intl7.string(tmp(c2[27]).t["1B1/NB"]) };
            const Text3 = tmp(c2[43]).Text;
            intl7 = tmp(c2[27]).intl;
            items = [closure_1_47(Text3, obj11), ];
            const obj12 = { style: tmp.alertText, variant: "text-md/medium", children: intl8.format(tmp(c2[27]).t.LAJbDm, obj13) };
            const Text4 = tmp(c2[43]).Text;
            intl8 = tmp(c2[27]).intl;
            obj13 = {
              onClick() {
                      const obj = closure_3_1(closure_3_2[42]);
                      obj.close();
                      const obj2 = closure_3_1(closure_3_2[34]);
                      obj2.close();
                      const obj3 = closure_3_1(closure_3_2[44]);
                      obj3.open(user.id, constants.COMMUNITY);
                    }
            };
            items[1] = closure_1_47(Text4, obj12);
            show2(obj9);
          }
          let c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
      if (null != user) {
        const tmp110 = closure_3;
        if (!tmp110) {
          let obj = { title: intl.string(tmp(c2[27]).t["TY/V+H"]), confirmText: intl2.string(tmp(c2[27]).t.BddRzS), children: closure_1_48(closure_1_49, obj14) };
          let show = tmp4(c2[42]).show;
          const tmp17 = tmp4(c2[42]);
          intl = tmp(c2[27]).intl;
          intl2 = tmp(c2[27]).intl;
          obj14 = { children: items1 };
          const obj15 = { style: tmp.alertText, variant: "text-md/medium", children: intl3.string(tmp(c2[27]).t.iWlB6h) };
          const Text = tmp(c2[43]).Text;
          intl3 = tmp(c2[27]).intl;
          items1 = [closure_1_47(Text, obj15), ];
          const obj16 = { style: tmp.alertText, variant: "text-md/medium", children: intl4.format(tmp(c2[27]).t.ajiBwB, obj17) };
          const Text2 = tmp(c2[43]).Text;
          intl4 = tmp(c2[27]).intl;
          obj17 = {
            onClick() {
                  const obj = closure_3_1(closure_3_2[42]);
                  obj.close();
                  const obj2 = closure_3_1(closure_3_2[34]);
                  obj2.close();
                  const obj3 = closure_3_1(closure_3_2[44]);
                  obj3.open(user.id, constants.ONBOARDING);
                }
          };
          items1[1] = closure_1_47(Text2, obj16);
          show(obj);
        }
      }
      const obj6 = tmp(c2[45]);
      let closure_4 = obj6.computeChannelName(channel, closure_1_24, closure_1_23, true);
      function showDeleteAlert() {
        let intl3;
        let intl4;
        let intl5;
        let obj2;
        let stringResult;
        let tmp7;
        const show = channel(c2[42]).show;
        channel(c2[42]);
        const tmp = channel;
        if (props.props.isForumPost) {
          const intl2 = closure_0(tmp2[27]).intl;
          stringResult = intl2.string(closure_0(tmp2[27]).t.nEOg1N);
          tmp7 = closure_0;
        } else {
          const isThread = tmp4.props.isThread;
          const intl = closure_0(tmp2[27]).intl;
          const string = intl.string;
          const t = closure_0(tmp2[27]).t;
          if (isThread) {
            stringResult = string(t.H7vTe2);
            tmp7 = tmp5;
          } else {
            stringResult = string(t["8D8Rsb"]);
            tmp7 = tmp5;
          }
        }
        const obj = { title: stringResult, body: intl3.format(tmp7(c2[27]).t.a6Gz9J, obj2), cancelText: intl4.string(tmp7(c2[27]).t.gm1Vej), confirmText: intl5.string(tmp7(c2[27]).t.p89ACt), onConfirm: props.handleConfirmDeleteChannel, confirmColor: tmp(c2[46]).Colors.RED };
        intl3 = tmp7(tmp2[27]).intl;
        obj2 = { channelName };
        intl4 = tmp7(tmp2[27]).intl;
        intl5 = tmp7(tmp2[27]).intl;
        return show(obj);
      }
      const obj7 = tmp(c2[47]);
      const applicationId = obj7.conjureChannelAppId(channel);
      if (null != user) {
        if (null != applicationId) {
          const obj8 = tmp(c2[48]);
          const conjureServerApp = obj8.loadConjureServerApp(user.id, applicationId);
          conjureServerApp.then((app) => {
            let tmp6;
            if (null == app) {
              tmp6 = closure_1_5();
            } else {
              const obj = { app, applicationId, channelId: id.id, onDeleteChannel: null, onAppRemoved: null };
              ({ handleConfirmDeleteChannel: obj.onDeleteChannel, leaveDeletedChannel: obj.onAppRemoved } = closure_0);
              tmp6 = closure_3_1(closure_3_2[49])(obj);
            }
            return tmp6;
          }, showDeleteAlert);
        }
      }
      showDeleteAlert();
    });
    let closure_0 = tmp5;
    tmp5.handleConfirmDeleteChannel = _asyncToGenerator(async function(arg0, value) {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let closure_1;
          let text;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              text = undefined;
              c4 = 1;
              const channel = text.props.channel;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj4.deleteChannel(channel.id), done: false };
              obj4 = closure_1(closure_2[34]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_1 = closure_3;
              const self = this;
              const self2 = this;
              const aPIError = new text(closure_2[50]).APIError(closure_1);
              text = aPIError.getAnyErrorMessage();
              const open = closure_1(closure_2[35]).open;
              const tmp18 = closure_1(closure_2[35]);
              if (text == null) {
                const intl = text(closure_2[27]).intl;
                text = intl.string(text(closure_2[27]).t.CKsXk3);
              }
              const obj6 = { text };
              open("CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR", obj6);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_130_0.leaveDeletedChannel();
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp30) {
          closure_3 = tmp30;
          if (0 === c4) {
            c6 = 3;
            throw tmp30;
          } else {
            c5 = 1;
          }
        }
      }
    });
    tmp5.leaveDeletedChannel = function leaveDeletedChannel() {
      const obj = closure_0(dependencyMap[51]);
      const rootNavigationRef = obj.getRootNavigationRef();
      let isReadyResult;
      if (rootNavigationRef != null) {
        isReadyResult = rootNavigationRef.isReady();
      }
      if (isReadyResult) {
        rootNavigationRef.goBack();
      }
    };
    tmp5.handlePressTag = function handlePressTag(tag) {
      const obj = { tag };
      closure_0.pushScreen(constants2.EDIT_FORUM_TAG, obj);
    };
    tmp5.handleToggleRequireTag = function handleToggleRequireTag() {
      if (closure_0.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(constants5.REQUIRE_TAG);
        const obj2 = FlagUtils;
        const obj4 = { flags: obj2.setFlag(closure_0.props.channel.flags, constants5.REQUIRE_TAG, !hasFlagResult) };
        const obj3 = ChannelSettingsActionCreatorsDefault;
        obj3.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp5.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      if (closure_0.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const obj2 = FlagUtils;
        const obj4 = { flags: obj2.setFlag(closure_0.props.channel.flags, constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS, !hasFlagResult) };
        const obj3 = ChannelSettingsActionCreatorsDefault;
        obj3.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp5.getError = function getError(arg0) {
      const errors = closure_0.props.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp5.handleApplicationChange = function handleApplicationChange(applicationId) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { applicationId };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.state.hasChanges = ChannelSettingsStore.hasChanges();
    return tmp5;
  }
  componentDidMount() {
    const self = this;
    this.updateNavigation(undefined, this.state);
    const tmp2 = null == this.props.regions && null != self.props.guild;
    if (tmp2) {
      const obj = RegionActionCreatorsDefault;
      const regions = obj.fetchRegions(self.props.guild.id);
    }
    const obj2 = AppAnalyticsUtilsDefault;
    const obj3 = { settings_type: "channel", destination_pane: constants8.CHANNEL_SETTINGS };
    obj2.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj3);
  }
  componentDidUpdate(arg0, arg1) {
    this.updateNavigation(arg0, arg1);
  }
  updateNavigation(submitting, hasChanges) {
    let fn;
    let isThread;
    let stringResult1;
    let tmp3;
    const self = this;
    const props = this.props;
    ({ navigation, submitting, isThread } = props);
    const type = props.channel.type;
    hasChanges = this.state.hasChanges;
    const isForumPost = props.isForumPost;
    if (isThread) {
      let stringResult;
      let tmp12;
      const intl3 = hasChanges(1114).intl;
      const string = intl3.string;
      const t = hasChanges(1114).t;
      if (isForumPost) {
        stringResult = string(t.BsJrhj);
        tmp12 = tmp8;
      } else {
        stringResult = string(t.d4n5Q1);
        tmp12 = tmp8;
      }
      tmp3 = tmp12;
      stringResult1 = stringResult;
    } else if (type === constants3.GUILD_CATEGORY) {
      const intl2 = hasChanges(1114).intl;
      stringResult1 = intl2.string(hasChanges(1114).t["/uELTj"]);
      tmp3 = hasChanges;
    } else {
      tmp3 = hasChanges;
      let intl = hasChanges(1114).intl;
      stringResult1 = intl.string(hasChanges(1114).t.XPDhcc);
    }
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = tmp3(6992).HeaderSubmittingIndicator;
    } else {
      fn = (arg0) => {
        let intl;
        const obj = { onPress: self.handleSave, label: intl.string(intl9.t["R3BPH+"]), disabled: !hasChanges };
        const HeaderTextButton = HeaderShared.HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = intl9.intl;
        return vanityURLCode(HeaderTextButton, obj);
      };
    }
    setOptions({ headerRight: fn, title: stringResult1 });
  }
  renderChannelInfo() {
    let canManageChannels;
    let canManageThread;
    let canSendMessages;
    let channel;
    let isChannelOwner;
    let isForumPost;
    let isThread;
    let items;
    let obj5;
    let stringResult;
    let tmp3Result;
    const self = this;
    const props = this.props;
    ({ channel, canManageChannels, isThread } = props);
    ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
    let hasItem = metroImportAll(channel.type) && !isThread;
    if (!hasItem) {
      const GUILD_THREADS_ONLY = constants4.GUILD_THREADS_ONLY;
      hasItem = GUILD_THREADS_ONLY.has(channel.type);
    }
    const obj = ChannelSettingsUtils;
    const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({ canManageThread, canManageChannels, canSendMessages, isForumPost, isThread, isChannelOwner });
    if (channel.isForumPost()) {
      const intl4 = tmp3(1114).intl;
      stringResult = intl4.string(tmp3(1114).t.uyVrTN);
    } else if (isThread) {
      const intl3 = tmp3(1114).intl;
      stringResult = intl3.string(tmp3(1114).t.j3XWjD);
    } else if (channel.type === constants3.GUILD_CATEGORY) {
      const intl2 = tmp3(1114).intl;
      stringResult = intl2.string(tmp3(1114).t.OCAkGP);
    } else {
      const intl = tmp3(1114).intl;
      stringResult = intl.string(tmp3(1114).t.PVbHDl);
    }
    const obj3 = { ref: self.props.channelNameRef, label: stringResult, value: tmp3Result.computeChannelName(channel, UserStore, RelationshipStore), onChange: null, onBlur: null, disabled: !isChannelNameSettingEditable, maxLength, errorMessage: self.getError("name"), enableAndroidSanitizedInputWorkaround: true };
    const TextInput = tmp3(7076).TextInput;
    ({ handleChangeName: obj2.onChange, handleBlurName: obj2.onBlur } = self);
    let tmp8Result;
    tmp3Result = useChannelName;
    const tmp8 = vanityURLCode;
    const tmp9 = vanityURLCode(TextInput, obj3);
    if (hasItem) {
      let stringResult1;
      const isForumLikeChannelResult = channel.isForumLikeChannel();
      const intl5 = tmp3(1114).intl;
      const string = intl5.string;
      const t = tmp3(1114).t;
      if (isForumLikeChannelResult) {
        stringResult1 = string(t.yR6HwZ);
      } else {
        stringResult1 = string(t.X8jMDh);
      }
      const obj4 = { label: stringResult1, value: obj5.translateSurrogatesToInlineEmoji(channel.topic), onChange: self.handleChangeTopic, disabled: !canManageChannels, autoCorrect: true, maxLength: channel.isForumLikeChannel() ? numOpens : closure_43, errorMessage: self.getError("topic") };
      const TextArea = tmp3(7247).TextArea;
      obj5 = UnicodeEmojisDefault;
      tmp8Result = tmp8(TextArea, obj4);
    }
    const obj6 = { children: items };
    items = [tmp9, self.renderApplication(), tmp8Result];
    return closure_48(lastJoinedRecommendedGuild, obj6);
  }
  renderNsfwConfig() {
    let TableSwitchRow;
    let canManageChannels;
    let intl;
    let intl2;
    let isNSFWDisabled;
    let isTeen;
    let obj3;
    let stringResult;
    let tmp2Result;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, isNSFWDisabled, isTeen } = props);
    let tmp = null;
    if (set5.has(channel.type)) {
      tmp = null;
      if (canManageChannels) {
        tmp = null;
        if (!isTeen) {
          tmp = null;
          const obj = PlatformUtils;
          if (!obj.isIOS()) {
            const obj2 = { helperText: intl.string(intl9.t["9eUgwR"]), hasIcons: false, children: vanityURLCode(TableSwitchRow, obj3) };
            const TableRowGroup = tmp2(7054).TableRowGroup;
            intl = tmp2(1114).intl;
            obj3 = { label: intl2.string(intl9.t.Es25Yf), value: tmp2Result.isChannelOrGuildNSFW(channel), onValueChange: this.handleNsfwChange, disabled: isNSFWDisabled, subLabel: stringResult };
            TableSwitchRow = tmp2(7363).TableSwitchRow;
            intl2 = tmp2(1114).intl;
            stringResult = undefined;
            tmp2Result = AgeGateUtils;
            if (null != channel.linkedLobby) {
              const intl3 = tmp2(1114).intl;
              stringResult = intl3.string(tmp2(1114).t.l6uSVa);
            }
            tmp = tmp4(TableRowGroup, obj2, "nsfw-section");
          }
        }
      }
    }
    return tmp;
  }
  renderThreadSpoiler() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const props = this.props;
    const channel = props.channel;
    const canManageThread = props.canManageThread;
    let tmp = null;
    if (channel.isThread()) {
      const obj = { helperText: intl.string(intl9.t.ddWXHa), hasIcons: false, children: vanityURLCode(TableSwitchRow, obj2) };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      intl = intl9.intl;
      obj2 = { label: intl2.string(intl9.t.TvUHTb), value: channel.isSpoilerChannel(), onValueChange: this.handleThreadSpoilerChange, disabled: !canManageThread };
      TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl2 = intl9.intl;
      tmp = vanityURLCode(TableRowGroup, obj, "thread-spoiler-section");
    }
    return tmp;
  }
  renderSlowmode() {
    let TableSliderRow;
    let canManageChannels;
    let channel;
    let intl3;
    let obj2;
    const self = this;
    const props = this.props;
    ({ channel, canManageChannels } = props);
    const isThreadModerator = props.isThreadModerator;
    if (unpackModuleId.has(channel.type)) {
      if (channel.isThread()) {
        canManageChannels = isThreadModerator;
      }
      if (canManageChannels) {
        let stringResult;
        let tmp8;
        if (channel.isForumLikeChannel()) {
          const intl2 = intl9.intl;
          stringResult = intl2.string(intl9.t["a+1pdO"]);
          tmp8 = require;
        } else {
          const isThreadResult = channel.isThread();
          const intl = intl9.intl;
          const string = intl.string;
          const t = intl9.t;
          if (isThreadResult) {
            stringResult = string(t.OMmNCv);
            tmp8 = tmp4;
          } else {
            stringResult = string(t["HEA/DU"]);
            tmp8 = tmp4;
          }
        }
        const items = [];
        const push = items.push;
        const obj = { helperText: stringResult, hasIcons: false, children: vanityURLCode(TableSliderRow, obj2) };
        const TableRowGroup = tmp8(7054).TableRowGroup;
        obj2 = { label: intl3.string(tmp8(1114).t.piZgKF), value: self._cooldown, minValue: 0, maxValue: length.length - 1, onChange: self.handleSlowmodeChange, formatValue: formatSlowmodeCooldown };
        TableSliderRow = tmp8(15812).TableSliderRow;
        intl3 = tmp8(1114).intl;
        push(vanityURLCode(TableRowGroup, obj, "slowmode-section"));
        return items;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  renderAutoArchiveDuration() {
    let autoArchiveDuration;
    let canManageThread;
    let intl2;
    let isForumPost;
    const props = this.props;
    const channel = props.channel;
    ({ canManageThread, isForumPost } = props);
    if (channel.isThread()) {
      if (canManageThread) {
        let stringResult;
        let tmp5;
        const intl = intl9.intl;
        const string = intl.string;
        const t = intl9.t;
        if (isForumPost) {
          stringResult = string(t["3aJN9M"]);
          tmp5 = tmp;
        } else {
          stringResult = string(t.YUXr4Z);
          tmp5 = tmp;
        }
        const obj = { title: intl2.string(tmp5(1114).t.FGjMZS), description: stringResult, selected: autoArchiveDuration, channel, onSelectDuration: this.handleAutoArchiveDurationChange };
        const AutoArchiveDurationOptions = tmp5(18842).AutoArchiveDurationOptions;
        intl2 = tmp5(1114).intl;
        const threadMetadata = channel.threadMetadata;
        autoArchiveDuration = undefined;
        const tmp6 = vanityURLCode;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        if (autoArchiveDuration == null) {
          autoArchiveDuration = closure_46;
        }
        return tmp6(AutoArchiveDurationOptions, obj);
      }
    }
    return null;
  }
  renderInvitable() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const channel = this.props.channel;
    let tmp3 = null;
    if (null != channel.threadMetadata) {
      tmp3 = null;
      if (channel.type === constants3.PRIVATE_THREAD) {
        const obj = { description: intl.string(intl9.t.cSyXJk), hasIcons: false, children: vanityURLCode(TableSwitchRow, obj2) };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        intl = intl9.intl;
        obj2 = { disabled: !tmp2, label: intl2.string(intl9.t.s2rpNf), value: channel.threadMetadata.invitable, onValueChange: tmp.handleInvitableChange };
        TableSwitchRow = TableSwitchRow2.TableSwitchRow;
        intl2 = intl9.intl;
        tmp3 = vanityURLCode(TableRowGroup, obj, "thread-invitable-section");
      }
    }
    return tmp3;
  }
  renderDefaultAutoArchiveDuration() {
    let intl;
    let obj2;
    let stringResult;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    let tmp = null;
    if (set2.has(channel.type)) {
      tmp = null;
      if (canManageChannels) {
        const obj = { title: intl.string(intl9.t.FGjMZS), selected: obj2.getAutoArchiveDuration(channel, null), channel, onSelectDuration: this.handleDefaultAutoArchiveDurationChange, description: stringResult };
        const AutoArchiveDurationOptions = ThreadAutoArchiveBottomSheet.AutoArchiveDurationOptions;
        intl = intl9.intl;
        obj2 = ThreadAutoArchive;
        const isForumLikeChannelResult = channel.isForumLikeChannel();
        const intl2 = intl9.intl;
        const string = intl2.string;
        const t = intl9.t;
        const tmp2 = vanityURLCode;
        if (isForumLikeChannelResult) {
          stringResult = string(t.fyXclY);
        } else {
          stringResult = string(t.W3Noi9);
        }
        tmp = tmp2(AutoArchiveDurationOptions, obj);
      }
    }
    return tmp;
  }
  renderApplication() {
    let canManageChannels;
    let channel;
    let guild;
    let tmp9;
    ({ channel, guild, canManageChannels } = this.props);
    if (channel.type === constants3.GUILD_APP) {
      if (null != guild) {
        if (canManageChannels) {
          canManageChannels = PermissionStore.can(AppChannelPermissions.SWAP_APP_CHANNEL_APPLICATION_PERMISSIONS, channel);
        }
        const obj = { guildId: guild.id, channelId: null, selectedApplicationId: null, onChange: tmp.handleApplicationChange, disabled: !canManageChannels, description: tmp9 };
        ({ id: obj.channelId, application_id: obj.selectedApplicationId } = channel);
        tmp9 = undefined;
        const tmp5 = vanityURLCode;
        const tmp6 = importDefault;
        const tmp8 = AppChannelApplicationSelectorDefault;
        if (!canManageChannels) {
          tmp9 = tmp6(18843)(channel);
        }
        return tmp5(tmp8, obj);
      }
    }
    return null;
  }
  renderVoiceChannelApp() {
    const guild = this.props.guild;
    let tmp3 = null;
    if (null != guild) {
      const obj = { channel: tmp2, guildId: guild.id, onChange: tmp.handleApplicationChange };
      tmp3 = vanityURLCode(VoiceChannelAppSettingDefault, obj);
    }
    return tmp3;
  }
  renderDefaultSortOrder() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    if (channel.isForumLikeChannel()) {
      if (canManageChannels) {
        const defaultSortOrder = channel.getDefaultSortOrder();
        const obj = { title: intl.string(intl9.t.gePre2), description: intl2.string(intl9.t["165cVX"]), value: defaultSortOrder, onChange: this.handleDefaultSortOrderChange, hasIcons: false, children: items };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl9.intl;
        intl2 = intl9.intl;
        const obj2 = { label: intl3.string(intl9.t.ElZtzj), value: ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY };
        const TableRadioRow = TableRadioRow3.TableRadioRow;
        intl3 = intl9.intl;
        items = [vanityURLCode(TableRadioRow, obj2), ];
        const obj3 = { label: intl4.string(intl9.t.w28f3F), value: ThreadSortOrder.ThreadSortOrder.CREATION_DATE };
        const TableRadioRow2 = TableRadioRow3.TableRadioRow;
        intl4 = intl9.intl;
        items[1] = vanityURLCode(TableRadioRow2, obj3);
        return closure_48(TableRadioGroup, obj);
      }
    }
    return null;
  }
  renderDefaultTagSetting() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    if (channel.isForumLikeChannel()) {
      if (canManageChannels) {
        const defaultTagSetting = channel.getDefaultTagSetting();
        const obj = { title: intl.string(intl9.t.Paxaug), description: intl2.string(intl9.t.DqOl8J), value: defaultTagSetting, onChange: this.handleDefaultTagSettingChange, hasIcons: false, children: items };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl9.intl;
        intl2 = intl9.intl;
        const obj2 = { label: intl3.string(intl9.t.rQ0ctQ), value: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME };
        const TableRadioRow = TableRadioRow3.TableRadioRow;
        intl3 = intl9.intl;
        items = [vanityURLCode(TableRadioRow, obj2), ];
        const obj3 = { label: intl4.string(intl9.t.FCXUu0), value: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_ALL };
        const TableRadioRow2 = TableRadioRow3.TableRadioRow;
        intl4 = intl9.intl;
        items[1] = vanityURLCode(TableRadioRow2, obj3);
        return closure_48(TableRadioGroup, obj);
      }
    }
    return null;
  }
  renderAnnouncement() {
    let TableSwitchRow;
    let channel;
    let guild;
    let handleAnnouncementChange;
    let intl3;
    let items1;
    let obj2;
    let obj4;
    let obj5;
    const self = this;
    const props = this.props;
    ({ channel, guild } = props);
    const canManageChannels = props.canManageChannels;
    if (map1.has(channel.type)) {
      if (null != guild) {
        const features = guild.features;
        if (features.has(constants5.NEWS)) {
          let rulesChannelId;
          const id = channel.id;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          if (id !== rulesChannelId) {
            let prop;
            const id2 = channel.id;
            if (guild != null) {
              prop = guild.publicUpdatesChannelId;
            }
            if (id2 !== prop) {
              const items = [];
              const push = items.push;
              const obj = { description: closure_48(lastJoinedRecommendedGuild, obj2), hasIcons: false, children: vanityURLCode(TableSwitchRow, obj5) };
              obj2 = { children: items1 };
              const TableRowGroup = TableRowGroup3.TableRowGroup;
              const intl = intl9.intl;
              const format = intl.format;
              const obj3 = { documentationLink: obj4.getArticleURL(constants6.ANNOUNCEMENT_CHANNELS) };
              const tI7KNX = intl9.t.tI7KNX;
              obj4 = HelpdeskUtilsDefault;
              items1 = [format(tI7KNX, obj3), "\n\n", ];
              const intl2 = intl9.intl;
              items1[2] = intl2.string(intl9.t["2Ab4Id"]);
              obj5 = { disabled: !canManageChannels, label: intl3.string(intl9.t.Au2b7m), value: channel.type === constants3.GUILD_ANNOUNCEMENT, onValueChange: handleAnnouncementChange.bind(self, channel.type === constants3.GUILD_ANNOUNCEMENT) };
              TableSwitchRow = TableSwitchRow2.TableSwitchRow;
              intl3 = intl9.intl;
              handleAnnouncementChange = self.handleAnnouncementChange;
              push(vanityURLCode(TableRowGroup, obj, "announcement-section"));
              return items;
            }
          }
        }
      }
    }
    return null;
  }
  renderBitrateSettings() {
    let TableSliderRow;
    let canManageChannels;
    let guild;
    let intl;
    let intl2;
    let obj3;
    let obj4;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, guild } = props);
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        const items = [];
        const obj = ChannelUtils;
        const bitrateLimit = obj.getBitrateLimit(guild, channel);
        const push = items.push;
        const obj2 = { description: intl.format(intl9.t.SbQJk5, obj3), hasIcons: false, children: vanityURLCode(TableSliderRow, obj4) };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        intl = intl9.intl;
        obj3 = { bitrate: closure_27 / 1000 };
        obj4 = { label: intl2.string(intl9.t.w2d0vU), value: Math.min(channel.bitrate, bitrateLimit), minValue, maxValue: bitrateLimit, onChange: this.handleBitRateChange, formatValue: formatBitrate };
        TableSliderRow = TableSliderRow2.TableSliderRow;
        intl2 = intl9.intl;
        const _Math = Math;
        push(vanityURLCode(TableRowGroup, obj2, "bitrate-section"));
        return items;
      }
    }
    return null;
  }
  renderVideoQualityModeSettings() {
    let AUTO;
    let canManageChannels;
    let channel;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    ({ channel, canManageChannels } = this.props);
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        const items = [];
        const push = items.push;
        const obj = { title: intl.string(intl9.t.jhJEJs), description: intl2.format(intl9.t.c5W7Ss, {}), value: AUTO, onChange: this.handleVideoQualityModeChange, hasIcons: false, children: items1 };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl9.intl;
        intl2 = intl9.intl;
        AUTO = channel.videoQualityMode;
        const tmp = closure_48;
        if (AUTO == null) {
          AUTO = constants9.AUTO;
        }
        const obj2 = { label: intl3.string(intl9.t.jjKYpu), value: constants9.AUTO };
        const TableRadioRow = tmp2(7055).TableRadioRow;
        intl3 = tmp2(1114).intl;
        items1 = [vanityURLCode(TableRadioRow, obj2), ];
        const obj3 = { label: intl4.string(intl9.t["7jOoJE"]), value: constants9.FULL };
        const TableRadioRow2 = tmp2(7055).TableRadioRow;
        intl4 = tmp2(1114).intl;
        items1[1] = vanityURLCode(TableRadioRow2, obj3);
        push(tmp(TableRadioGroup, obj, "video-quality-section"));
        return items;
      }
    }
    return null;
  }
  renderUserLimitSettings() {
    let TableSliderRow;
    let intl2;
    let obj2;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        let formatResult;
        const tmp = channel.isGuildStageVoice() ? closure_37 : closure_36;
        const items = [];
        const push = items.push;
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        const isGuildStageVoiceResult = channel.isGuildStageVoice();
        const intl = intl9.intl;
        const format = intl.format;
        const t = intl9.t;
        if (isGuildStageVoiceResult) {
          formatResult = format(t.OqZI8D, {});
        } else {
          formatResult = format(t["8yb3JT"], {});
        }
        const obj = { description: formatResult, hasIcons: false, children: vanityURLCode(TableSliderRow, obj2) };
        obj2 = { label: intl2.string(intl9.t["/AoSGN"]), value: Math.min(channel.userLimit, tmp), minValue: 0, maxValue: tmp, onChange: this.handleUserLimitChange, formatValue: formatUserLimit };
        TableSliderRow = tmp3(15812).TableSliderRow;
        intl2 = tmp3(1114).intl;
        const _Math = Math;
        push(vanityURLCode(TableRowGroup, obj, "channel-user-limit"));
        return items;
      }
    }
    return null;
  }
  renderRegionOverride() {
    let TableRow;
    let channel;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj3;
    let regions;
    const self = this;
    const props = this.props;
    ({ regions, channel } = props);
    if (null == props.guild) {
      return null;
    } else {
      if (self.showVoiceSettings()) {
        if (tmp) {
          if (!channel.isGuildStageVoice()) {
            let name;
            let found = null;
            const tmp2 = null == regions || 0 === regions.length;
            if (null != regions) {
              found = regions.find((id) => id.id === channel.rtcRegion);
            }
            if (null != found) {
              name = found.name;
            } else {
              const intl = channel(1114).intl;
              name = intl.string(channel(1114).t.JEmsap);
            }
            const items = [];
            const push = items.push;
            const obj = { title: intl2.string(channel(1114).t["Ms8bX+"]), description: intl3.string(channel(1114).t["dbTs+z"]), hasIcons: false, children: closure_47(TableRow, obj2) };
            const TableRowGroup = channel(7054).TableRowGroup;
            intl2 = channel(1114).intl;
            intl3 = channel(1114).intl;
            obj2 = {
              label: intl4.string(channel(1114).t["Ms8bX+"]),
              trailing: closure_47(channel(6969).TableRow.TrailingText, obj3),
              arrow: true,
              disabled: tmp2,
              onPress() {
                        return self.pushScreen(constants.CHANGE_RTC_REGION);
                      }
            };
            TableRow = channel(6969).TableRow;
            intl4 = channel(1114).intl;
            obj3 = { text: name };
            push(closure_47(TableRowGroup, obj, "channel-region-override"));
            return items;
          }
        }
      }
      return null;
    }
  }
  showVoiceSettings() {
    const channel = this.props.channel;
    let hasItem = null != channel && null != channel.guild_id && metroImportDefault.has(channel.type);
    if (hasItem) {
      let enabled = channel.isGuildVocal();
      if (!enabled) {
        const VoiceInThreadsExperiment = ThreadHooks.VoiceInThreadsExperiment;
        const obj = { guildId: channel.guild_id, location: "9b50bd_1" };
        enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
      }
      hasItem = enabled;
    }
    return hasItem;
  }
  renderPermissions() {
    let TableRow;
    let intl;
    let obj2;
    const self = this;
    let tmp3Result = null;
    if (this.props.canManageRoles) {
      let stringResult;
      let obj = { helperText: intl.string(self(1114).t.UAoMCL), hasIcons: true, children: closure_47(TableRow, obj2) };
      const TableRowGroup = self(7054).TableRowGroup;
      intl = self(1114).intl;
      TableRow = self(6969).TableRow;
      if (tmp.type === constants3.GUILD_CATEGORY) {
        const intl3 = tmp4(1114).intl;
        stringResult = intl3.string(tmp4(1114).t.PgkvDf);
      } else {
        const intl2 = tmp4(1114).intl;
        stringResult = intl2.string(tmp4(1114).t.BAZMBn);
      }
      obj2 = {
        label: stringResult,
        arrow: true,
        icon: closure_47(self(9040).ShieldUserIcon, {}),
        onPress() {
            const obj = { origin: constants.OVERVIEW };
            return self.pushScreen(constants.PERMISSIONS, obj);
          }
      };
      tmp3Result = tmp3(TableRowGroup, obj);
    }
    return tmp3Result;
  }
  renderSettingsSection(items) {
    let tmp = null;
    if (items.length > 0) {
      const obj = { hasIcons: true, children: items };
      tmp = vanityURLCode(TableRowGroup3.TableRowGroup, obj);
    }
    return tmp;
  }
  renderCommonSettingsSection() {
    let intl;
    let intl2;
    let intl3;
    let obj3;
    const self = this;
    const props = this.props;
    const channel = props.channel;
    let canManageChannels = props.canManageChannels;
    let tmp = closure_8;
    const items = [];
    const tmp2 = closure_8(channel.type) || channel.isGuildStageVoice();
    if (tmp2) {
      const push = items.push;
      let obj = {
        label: intl.string(channel(1114).t.h850Ss),
        arrow: true,
        icon: closure_47(channel(9189).BellIcon, {}),
        onPress() {
            let result;
            const tmp = channel;
            if (channel.isThread()) {
              const obj = threadActionSheets;
              result = obj.showThreadNotificationsBottomSheet(tmp);
            } else {
              result = self.pushScreen(constants.NOTIFICATIONS);
            }
            return result;
          }
      };
      const TableRow = channel(6969).TableRow;
      intl = channel(1114).intl;
      push(closure_47(TableRow, obj, "rowNotifications"));
    }
    if (tmp(channel.type)) {
      const push2 = items.push;
      const obj2 = {
        label: intl2.string(channel(1114).t["mp1N/2"]),
        arrow: true,
        icon: closure_47(PinImage, obj3),
        onPress() {
            return self.pushScreen(constants.PINNED_MESSAGES);
          },
        disabled: self.props.pinDisabled
      };
      const TableRow2 = channel(6969).TableRow;
      intl2 = channel(1114).intl;
      obj3 = { channelId: channel.id };
      push2(closure_47(TableRow2, obj2, "rowPinnedMessages"));
    }
    if (canManageChannels) {
      canManageChannels = channel.type !== constants3.GUILD_CATEGORY;
    }
    if (canManageChannels) {
      canManageChannels = !channel.isThread();
    }
    if (canManageChannels) {
      const push3 = items.push;
      const obj4 = {
        label: intl3.string(channel(1114).t.ngRFjZ),
        arrow: true,
        icon: closure_47(channel(5722).LinkIcon, {}),
        onPress() {
            return self.pushScreen(constants.INSTANT_INVITES);
          }
      };
      const TableRow3 = channel(6969).TableRow;
      intl3 = channel(1114).intl;
      push3(closure_47(TableRow3, obj4, "rowInstantInvites"));
    }
    return self.renderSettingsSection(items);
  }
  renderDefaultForumLayout() {
    let TableRow;
    let TrailingText;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let tmp2Result;
    const self = this;
    const channel = this.props.channel;
    let tmp = null;
    if (channel.isForumChannel()) {
      let stringResult;
      const obj = { description: intl.string(self(1114).t.mOSViT), hasIcons: true, children: closure_47(TableRow, obj2, "forumDefaultLayout") };
      const TableRowGroup = self(7054).TableRowGroup;
      intl = self(1114).intl;
      obj2 = {
        label: intl2.string(self(1114).t["kQvoC/"]),
        trailing: closure_47(TrailingText, obj3),
        arrow: true,
        icon: tmp2Result,
        onPress() {
            return self.pushScreen(constants.DEFAULT_FORUM_LAYOUT);
          }
      };
      TableRow = self(6969).TableRow;
      intl2 = self(1114).intl;
      TrailingText = self(6969).TableRow.TrailingText;
      if (channel.defaultForumLayout === self(4868).ForumLayout.GRID) {
        const intl4 = tmp3(1114).intl;
        stringResult = intl4.string(tmp3(1114).t["8RswJG"]);
      } else {
        const intl3 = tmp3(1114).intl;
        stringResult = intl3.string(tmp3(1114).t["4HXEZG"]);
      }
      obj3 = { text: stringResult };
      if (channel.defaultForumLayout === self(4868).ForumLayout.GRID) {
        tmp2Result = tmp2(tmp3(18849).GridSquareIcon, {});
      } else {
        tmp2Result = tmp2(tmp3(7255).ListViewIcon, {});
      }
      tmp = tmp2(TableRowGroup, obj, "default-forum-layout");
    }
    return tmp;
  }
  renderUncommonSettingsSection() {
    let intl;
    const self = this;
    const props = this.props;
    let canManageWebhooks = props.canManageWebhooks;
    let tmp = undefined !== canManageWebhooks && canManageWebhooks;
    canManageWebhooks = tmp;
    const channel = props.channel;
    let obj = require("LobbyUtils");
    const result = obj.canUnlinkLobbyChannel(channel);
    require = result;
    if (!tmp) {
      tmp = result;
    }
    const items = [];
    if (tmp) {
      const push = items.push;
      const obj2 = {
        label: intl.string(require("intl").t.CIsNZw),
        arrow: true,
        icon: closure_47(require("PuzzlePieceIcon").PuzzlePieceIcon, {}),
        onPress() {
            const obj = { canManageWebhooks, canUnlinkLobby: require };
            return self.pushScreen(constants.INTEGRATIONS, obj);
          }
      };
      const TableRow = tmp2(tmp3[72]).TableRow;
      intl = tmp2(tmp3[27]).intl;
      push(closure_47(TableRow, obj2, "rowIntegrations"));
    }
    return self.renderSettingsSection(items);
  }
  renderThreadManagementActions() {
    let canManageThread;
    let canUnarchiveThread;
    let hasJoinedThread;
    let intl6;
    let isArchivedThread;
    let isForumPost;
    let isLockedThread;
    let isThreadModerator;
    let string2Result;
    let string3Result;
    let string4Result;
    let string5Result;
    let stringResult;
    const props = this.props;
    ({ channel: require, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
    ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
    let tmp5Result = null;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    const tmp = closure_48;
    if (!hasJoinedThread) {
      let obj = {
        icon: closure_47(GroupPlusIcon.GroupPlusIcon, {}),
        label: stringResult,
        onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.joinThread(require, "Context Menu");
          }
      };
      const TableRow = tmp2(6969).TableRow;
      const intl = tmp2(1114).intl;
      const string = intl.string;
      const t = tmp2(1114).t;
      const tmp5 = closure_47;
      if (isForumPost) {
        stringResult = string(t.ihLPiO);
      } else {
        stringResult = string(t["10kukS"]);
      }
      tmp5Result = tmp5(TableRow, obj);
    }
    const items = [tmp5Result, , , , , ];
    let tmp8Result = null;
    if (isArchivedThread) {
      tmp8Result = null;
      if (canUnarchiveThread) {
        const obj2 = {
          icon: closure_47(ClockIcon.ClockIcon, {}),
          label: string2Result,
          onPress() {
                const obj = ThreadActionCreatorsDefault;
                return obj.unarchiveThread(require, false);
              }
        };
        const TableRow2 = tmp2(6969).TableRow;
        const intl2 = tmp2(1114).intl;
        const string2 = intl2.string;
        const t2 = tmp2(1114).t;
        const tmp8 = closure_47;
        if (isForumPost) {
          string2Result = string2(t2.cnRubV);
        } else {
          string2Result = string2(t2.S9E4G7);
        }
        tmp8Result = tmp8(TableRow2, obj2);
      }
    }
    items[1] = tmp8Result;
    let tmp11Result = null;
    if (!isArchivedThread) {
      tmp11Result = null;
      if (canManageThread) {
        const obj3 = {
          icon: closure_47(XLargeIcon.XLargeIcon, {}),
          label: string3Result,
          onPress() {
                const obj = ThreadActionCreatorsDefault;
                return obj.archiveThread(require, false);
              }
        };
        const TableRow3 = tmp2(6969).TableRow;
        const intl3 = tmp2(1114).intl;
        const string3 = intl3.string;
        const t3 = tmp2(1114).t;
        const tmp11 = closure_47;
        if (isForumPost) {
          string3Result = string3(t3.BTs4Kb);
        } else {
          string3Result = string3(t3.wiIevd);
        }
        tmp11Result = tmp11(TableRow3, obj3);
      }
    }
    items[2] = tmp11Result;
    let tmp14Result = null;
    if (isThreadModerator) {
      tmp14Result = null;
      if (isLockedThread) {
        const obj4 = {
          icon: closure_47(LockIcon.LockIcon, {}),
          label: string4Result,
          onPress() {
                const obj = ThreadActionCreatorsDefault;
                return obj.unlockThread(require);
              }
        };
        const TableRow4 = tmp2(6969).TableRow;
        const intl4 = tmp2(1114).intl;
        const string4 = intl4.string;
        const t4 = tmp2(1114).t;
        const tmp14 = closure_47;
        if (isForumPost) {
          string4Result = string4(t4["/OKSxp"]);
        } else {
          string4Result = string4(t4["jeyb/W"]);
        }
        tmp14Result = tmp14(TableRow4, obj4);
      }
    }
    items[3] = tmp14Result;
    let tmp17Result = null;
    if (isThreadModerator) {
      tmp17Result = null;
      if (!isLockedThread) {
        const obj5 = {
          icon: closure_47(LockIcon.LockIcon, {}),
          label: string5Result,
          onPress() {
                const obj = ThreadActionCreatorsDefault;
                return obj.lockThread(require);
              }
        };
        const TableRow5 = tmp2(6969).TableRow;
        const intl5 = tmp2(1114).intl;
        const string5 = intl5.string;
        const t5 = tmp2(1114).t;
        const tmp17 = closure_47;
        if (isForumPost) {
          string5Result = string5(t5["Ur/0Na"]);
        } else {
          string5Result = string5(t5.HoCqm8);
        }
        tmp17Result = tmp17(TableRow5, obj5);
      }
    }
    const obj6 = { hasIcons: true, children: items };
    items[4] = tmp17Result;
    const obj7 = {
      icon: closure_47(LinkIcon.LinkIcon, {}),
      label: intl6.string(intl9.t.WqhZss),
      onPress() {
        const obj = ChannelActionSheetUtils;
        return obj.copyGuildChannelOrThreadLink(require.guild_id, require.id);
      }
    };
    const TableRow6 = tmp2(6969).TableRow;
    intl6 = tmp2(1114).intl;
    items[5] = closure_47(TableRow6, obj7);
    return tmp(TableRowGroup, obj6);
  }
  renderDeleteButton() {
    let canManageChannels;
    let hasJoinedThread;
    let isForumPost;
    let isThreadModerator;
    let items;
    let string2Result;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, isForumPost } = props);
    ({ isThreadModerator, hasJoinedThread } = props);
    if (channel.isThread()) {
      canManageChannels = isThreadModerator;
    }
    let tmp = null;
    if (canManageChannels) {
      let stringResult;
      let tmp8;
      if (channel.type === constants3.GUILD_CATEGORY) {
        const intl3 = channel(1114).intl;
        stringResult = intl3.string(channel(1114).t.ifbXnL);
        tmp8 = channel;
      } else if (isForumPost) {
        const intl2 = channel(1114).intl;
        stringResult = intl2.string(channel(1114).t.nEOg1N);
        tmp8 = channel;
      } else {
        const isThreadResult = channel.isThread();
        const intl = channel(1114).intl;
        const string = intl.string;
        const t = channel(1114).t;
        if (isThreadResult) {
          stringResult = string(t.H7vTe2);
          tmp8 = tmp4;
        } else {
          stringResult = string(t["8D8Rsb"]);
          tmp8 = tmp4;
        }
      }
      let tmp16Result = null;
      const TableRowGroup = tmp8(7054).TableRowGroup;
      const tmp13 = closure_48;
      if (hasJoinedThread) {
        let obj = {
          variant: "danger",
          icon: closure_47(tmp8(5720).UserMinusIcon, { color: "text-feedback-critical" }),
          label: string2Result,
          onPress() {
                const obj = ThreadActionCreatorsDefault;
                return obj.leaveThread(channel, "Context Menu");
              }
        };
        const TableRow = tmp8(6969).TableRow;
        const intl4 = tmp8(1114).intl;
        const string2 = intl4.string;
        const t2 = tmp8(1114).t;
        const tmp16 = closure_47;
        if (isForumPost) {
          string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        tmp16Result = tmp16(TableRow, obj);
      }
      const obj2 = { hasIcons: true, children: items };
      items = [tmp16Result, ];
      const obj3 = { variant: "danger", icon: closure_47(tmp8(5733).TrashIcon, { color: "text-feedback-critical" }), label: stringResult, onPress: this.handleDeleteChannel };
      const TableRow2 = tmp8(6969).TableRow;
      items[1] = closure_47(TableRow2, obj3);
      tmp = tmp13(TableRowGroup, obj2);
    }
    return tmp;
  }
  renderForumTags() {
    let IconButton;
    let PlusSmallIcon;
    let Text;
    let canManageChannels;
    let channel;
    let intl;
    let intl3;
    let intl4;
    let intl5;
    let items1;
    let obj12;
    let obj3;
    let obj5;
    let obj6;
    let obj9;
    let stringResult;
    let tmp6Result;
    const self = this;
    const tmp = closure_52(this.context);
    ({ channel, canManageChannels } = this.props);
    if (channel.isForumLikeChannel()) {
      let everyResult;
      const availableTags = channel.availableTags;
      if (availableTags != null) {
        everyResult = availableTags.every((moderated) => moderated.moderated);
      }
      const tmp3 = canManageChannels && channel.availableTags.length < MAX_FORUM_TAGS;
      const error = self.getError("available_tags");
      let obj = { spacing: self(575).space.PX_12, children: items1 };
      const Stack = canManageChannels(6022).Stack;
      const obj2 = { title: intl.string(canManageChannels(1114).t["P/y+sj"]), description: stringResult, hasIcons: false, children: closure_47(View, obj3) };
      const TableRowGroup = canManageChannels(7054).TableRowGroup;
      intl = canManageChannels(1114).intl;
      stringResult = undefined;
      const tmp9 = self;
      if (channel.availableTags.length <= 0) {
        const intl2 = tmp7(1114).intl;
        stringResult = intl2.string(tmp7(1114).t["3v8kZH"]);
      }
      obj3 = { style: tmp.tagsWrapper, children: tmp6Result };
      tmp6Result = null;
      if (channel.availableTags.length > 0) {
        const availableTags1 = channel.availableTags;
        const items = [
          availableTags1.map((tag) => {
                const obj = { tag, onPress: self.handlePressTag, disabled: !canManageChannels };
                return vanityURLCode(AvailableForumTagDefault, obj, tag.id);
              }),

        ];
        let tmp10Result = null;
        const tmp14 = closure_49;
        if (tmp3) {
          const obj4 = { style: tmp.addTagIconButtonWrapper, children: closure_47(IconButton, obj5) };
          obj5 = {
            icon: closure_47(PlusSmallIcon, obj6),
            size: "sm",
            onPress() {
                    return self.handlePressTag();
                  },
            accessibilityLabel: intl3.string(canManageChannels(1114).t["/jubeD"])
          };
          IconButton = tmp7(8020).IconButton;
          obj6 = { size: "sm", color: tmp9(575).colors.WHITE };
          PlusSmallIcon = tmp7(9550).PlusSmallIcon;
          intl3 = tmp7(1114).intl;
          tmp10Result = tmp10(tmp12, obj4);
        }
        const obj7 = { children: items };
        items[1] = tmp10Result;
        tmp6Result = tmp6(tmp14, obj7);
      }
      items1 = [closure_47(TableRowGroup, obj2), , , ];
      let tmp10Result3 = null;
      if (channel.availableTags.length <= 0) {
        const obj8 = {
          disabled: !canManageChannels,
          onPress() {
                return self.handlePressTag();
              },
          style: tmp.createTagButton,
          accessibilityRole: "button",
          children: closure_47(Text, obj9)
        };
        const PressableOpacity = tmp7(6974).PressableOpacity;
        obj9 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.createTagButtonText, children: intl4.string(canManageChannels(1114).t.F4is7L) };
        Text = tmp7(5619).Text;
        intl4 = tmp7(1114).intl;
        tmp10Result3 = tmp10(PressableOpacity, obj8);
      }
      items1[1] = tmp10Result3;
      let tmp10Result4 = null != error && error.length > 0;
      if (tmp10Result4) {
        const obj10 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
        tmp10Result4 = tmp10(tmp7(5619).Text, obj10);
      }
      items1[2] = tmp10Result4;
      const TableRowGroup2 = tmp7(7054).TableRowGroup;
      let tmp18 = !canManageChannels;
      const TableSwitchRow = tmp7(7363).TableSwitchRow;
      if (canManageChannels) {
        tmp18 = everyResult;
      }
      const obj11 = { hasIcons: false, children: closure_47(TableSwitchRow, obj12) };
      obj12 = { disabled: tmp18, label: intl5.string(canManageChannels(1114).t.yX24uI), value: channel.hasFlag(constants10.REQUIRE_TAG), onValueChange: self.handleToggleRequireTag };
      intl5 = tmp7(1114).intl;
      items1[3] = closure_47(TableRowGroup2, obj11);
      return closure_48(Stack, obj);
    } else {
      return null;
    }
  }
  renderShowMediaDownloadOptions() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    let tmp = null;
    if (channel.isMediaChannel()) {
      const obj = { hasIcons: false, children: vanityURLCode(TableSwitchRow, obj2) };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      obj2 = { disabled: !canManageChannels, label: intl.string(intl9.t.u8LZOt), subLabel: intl2.string(intl9.t.J4wCc7), value: !channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS), onValueChange: this.handleToggleShowMediaDownloadOptions };
      TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl9.intl;
      intl2 = intl9.intl;
      tmp = vanityURLCode(TableRowGroup, obj);
    }
    return tmp;
  }
  renderCategory() {
    let canManageParent;
    let category;
    let fn;
    let intl2;
    let obj3;
    const self = this;
    const props = this.props;
    ({ category, canManageParent } = props);
    if (props.hasCategories) {
      if (props.channel.type !== constants3.GUILD_CATEGORY) {
        let stringResult;
        let tmp7;
        if (null == category) {
          const intl = self(1114).intl;
          stringResult = intl.string(self(1114).t.GSfOoo);
          tmp7 = self;
        } else {
          const obj = self(5647);
          stringResult = obj.computeChannelName(category, UserStore, RelationshipStore);
          tmp7 = self;
        }
        const TableRowGroup = tmp7(7054).TableRowGroup;
        const obj2 = { icon: closure_47(tmp7(18158).FolderPlusIcon, {}), label: intl2.string(tmp7(1114).t.vHCZwr), trailing: closure_47(tmp7(6969).TableRow.TrailingText, obj3), arrow: canManageParent, onPress: fn };
        const TableRow = tmp7(6969).TableRow;
        intl2 = tmp7(1114).intl;
        fn = undefined;
        obj3 = { text: stringResult };
        if (canManageParent) {
          fn = () => self.pushScreen(constants.CHANGE_CATEGORY);
        }
        const obj4 = { hasIcons: true, children: closure_47(TableRow, obj2) };
        return closure_47(TableRowGroup, obj4);
      }
    }
    return null;
  }
  renderThreadSettings() {
    let Stack;
    let items;
    let obj2;
    const obj = { children: closure_48(Stack, obj2) };
    const tmp = closure_52(this.context);
    const Form = _mod8169.Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
    Stack = Stack_Stack.Stack;
    items = [this.renderChannelInfo(), this.renderCommonSettingsSection(), this.renderThreadManagementActions(), this.renderThreadSpoiler(), this.renderSlowmode(), this.renderAutoArchiveDuration(), this.renderInvitable(), this.renderDeleteButton()];
    return vanityURLCode(Form, obj);
  }
  renderChannelSettings() {
    let Stack;
    let items;
    let obj2;
    const obj = { children: closure_48(Stack, obj2) };
    const tmp = closure_52(this.context);
    const Form = _mod8169.Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
    Stack = Stack_Stack.Stack;
    items = [this.renderChannelInfo(), this.renderForumTags(), this.renderCategory(), this.renderPermissions(), this.renderCommonSettingsSection(), this.renderDefaultForumLayout(), this.renderDefaultSortOrder(), this.renderDefaultTagSetting(), this.renderAnnouncement(), this.renderNsfwConfig(), this.renderVoiceChannelApp(), this.renderSlowmode(), this.renderDefaultAutoArchiveDuration(), this.renderBitrateSettings(), this.renderVideoQualityModeSettings(), this.renderUserLimitSettings(), this.renderRegionOverride(), this.renderUncommonSettingsSection(), this.renderShowMediaDownloadOptions(), this.renderDeleteButton()];
    return vanityURLCode(Form, obj);
  }
  render() {
    let renderThreadSettingsResult;
    const self = this;
    const tmp = closure_52(this.context);
    if (this.props.isThread) {
      renderThreadSettingsResult = self.renderThreadSettings();
    } else {
      renderThreadSettingsResult = self.renderChannelSettings();
    }
    const obj = { style: tmp.screenContainer, children: renderThreadSettingsResult };
    return vanityURLCode(View, obj);
  }
}
const prototype = ChannelSettingsOverview.prototype;
ChannelSettingsOverview.contextType = native.ThemeContext;
size = size_mod;
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  let autoFocusElement;
  let hasJoinedThread;
  let isArchivedThreadResult;
  let isForumPostResult;
  let isLockedThreadResult;
  let isMutedThread;
  ({ channelId: require, autoFocusElement } = arg0);
  navigation = undefined;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj4 = require("get initialized");
  const items1 = [ChannelSettingsStore];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => channel.getChannel());
  const obj5 = require("ThreadHooks");
  const isThreadModerator = obj5.useIsThreadModerator(stateFromStores);
  const items2 = [JoinedThreadsStore];
  const obj6 = require("get initialized");
  const stateFromStoresObject = obj6.useStateFromStoresObject(items2, () => {
    let hasJoinedResult;
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = JoinedThreadsStore.isMuted(tmp.id);
    }
    const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
    hasJoinedResult = undefined;
    if (null != stateFromStores) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(tmp.id);
    }
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj7 = require("ThreadHooks");
  const canManageThread = obj7.useCanManageThread(stateFromStores);
  const obj8 = require("AgeGateUtils");
  const shouldHideChannelContent = obj8.useShouldHideChannelContent(stateFromStores);
  const items3 = [ChannelSettingsStore, GuildStore, ChannelStore, UserStore, RegionStore, GuildChannelStore, PermissionStore];
  const items4 = [stateFromStores, shouldHideChannelContent];
  const obj9 = require("get initialized");
  const stateFromStoresObject1 = obj9.useStateFromStoresObject(items3, () => {
    let canResult;
    let errors;
    let nsfwAllowed;
    let obj2;
    let regions;
    let submitting;
    const props = ChannelSettingsStore.getProps();
    ({ submitting, errors } = props);
    if (null == stateFromStores) {
      return { isThread: false, submitting, errors };
    } else {
      const guild = GuildStore.getGuild(obj.getGuildId());
      channel = ChannelStore.getChannel(obj.parent_id);
      const currentUser = UserStore.getCurrentUser();
      const hasItem = set.has(obj.type);
      const obj4 = { isThread: hasItem, guild, category: channel, hasCategories: GuildChannelStore.hasCategories(stateFromStores.guild_id), pinDisabled: shouldHideChannelContent, canManageChannels: PermissionStore.can(constants.MANAGE_CHANNELS, stateFromStores), isChannelOwner: null != currentUser && stateFromStores.ownerId === currentUser.id, canManageParent: canResult, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, stateFromStores), canSendMessages: PermissionStore.can(constants.SEND_MESSAGES, stateFromStores), canManageWebhooks: set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores), canUnarchiveThread: obj2.canUnarchiveThread(stateFromStores), regions, submitting, errors, isNSFWDisabled: isGuildNSFW(guild) || null != stateFromStores.linkedLobby, isTeen: false === nsfwAllowed };
      regions = RegionStore.getRegions(obj.getGuildId());
      if (null != channel) {
        canResult = obj5.can(tmp22.MANAGE_CHANNELS, channel);
      } else {
        canResult = obj5.can(tmp22.MANAGE_CHANNELS, guild);
      }
      set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores);
      nsfwAllowed = undefined;
      obj2 = ThreadHooks;
      isGuildNSFW(guild) || null != stateFromStores.linkedLobby;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return obj4;
    }
  }, items4);
  const ref = shouldHideChannelContent.useRef(null);
  const items5 = [autoFocusElement, navigation];
  const effect = shouldHideChannelContent.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      if (autoFocusElement === constants.CHANNEL_NAME) {
        const current = ref.current;
        let focusResult;
        if (current != null) {
          focusResult = current.focus();
        }
        return focusResult;
      }
    }
  }), items5);
  let tmp11Result = null;
  if (null != stateFromStores1) {
    const obj3 = { channel: stateFromStores1, navigation, isThreadModerator, isLockedThread: isLockedThreadResult, isArchivedThread: isArchivedThreadResult, canManageThread, canUnarchiveThread: stateFromStoresObject1.canUnarchiveThread, isMutedThread, hasJoinedThread, isForumPost: isForumPostResult, channelNameRef: ref };
    const merged = Object.assign(stateFromStoresObject1);
    isLockedThreadResult = undefined;
    const tmp11 = closure_47;
    const tmp12 = ChannelSettingsOverview;
    if (stateFromStores != null) {
      isLockedThreadResult = stateFromStores.isLockedThread();
    }
    isArchivedThreadResult = undefined;
    if (stateFromStores != null) {
      isArchivedThreadResult = stateFromStores.isArchivedThread();
    }
    isForumPostResult = undefined;
    if (stateFromStores != null) {
      isForumPostResult = stateFromStores.isForumPost();
    }
    tmp11Result = tmp11(tmp12, obj3);
  }
  return tmp11Result;
};
export { PinImage };
