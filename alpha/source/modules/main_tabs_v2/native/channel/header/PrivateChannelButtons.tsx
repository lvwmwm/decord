// Module ID: 13676
// Function ID: 13677
// Name: PrivateChannelButtons
// Dependencies: [19, 17, 6252, 2065, 2012, 4816, 1390, 5172, 9531, 1085, 5174, 2115, 9532, 5176, 21, 1200, 5151, 587, 504, 10661, 13677, 8216, 13678, 6282, 9535, 10452, 13679, 5361, 13680, 1126, 13681, 12842, 12902, 5166, 5115, 13696, 2000, 6405, 6960, 13697, 6307, 4862, 1265, 13698, 8451, 8416, 13673, 7313, 7698, 8446, 9544, 9542, 5147, 13700, 11093, 2]

// Module 13676 (PrivateChannelButtons)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ChangelogConstants from "ChangelogConstants" /* 2115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5166 */;
import CallConstants from "CallConstants" /* 5174 */;
import Constants2 from "Constants" /* 5176 */;
import useAlertStore from "useAlertStore" /* 5361 */;
import ChannelRTCStore2 from "ChannelRTCStore" /* 6252 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6960 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7698 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9531 */;
import TrackingConstants from "TrackingConstants" /* 9532 */;
import AppChannelChat from "AppChannelChat" /* 9535 */;
import getPrivateChannelCallDefault from "getPrivateChannelCall" /* 10452 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12902 */;
import ConfirmStartCall from "ConfirmStartCall" /* 13679 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 13680 */;
import ChannelHeader from "ChannelHeader" /* 13681 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RelationshipStore from "RelationshipStore" /* 4816 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5172 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5151 */;
import size_mod from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const ChannelRTCStore = ChannelRTCStore2;
let dependencyMap;

let closure_14;
let closure_15;
let closure_20;
let closure_21;
let map1;
let tmp;
const useSearchContext = tmp(12842);
const View = react_native.View;
const NO_PARTICIPANTS = ChannelRTCStore2.NO_PARTICIPANTS;
let closure_12 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15 } = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
const CHANGELOG_URL = ChangelogConstants.CHANGELOG_URL;
let closure_18 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const Features = Constants2.Features;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
const tmp4 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL];
let closure_22 = tmp4;
let obj = { direction: native.CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
let closure_24 = createStyles.createStyles(() => {
  obj = { privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 }, button: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, minHeight: nativeDefault.space.PX_32, minWidth: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_4, justifyContent: "center", flexDirection: "row", alignItems: "center" }, disabledButton: { opacity: 0.6 }, overflowBadge: size };
  ({ borderRadius: nativeDefault.modules.button.BORDER_RADIUS, minHeight: nativeDefault.space.PX_32, minWidth: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_4, justifyContent: "center", flexDirection: "row", alignItems: "center" });
  size = { backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.round, width: height, height, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  return obj;
});
const memoResult = react.memo(function PrivateChannelButtons(channelId) {
  let VideoDenyIcon;
  let button;
  let hasUnread;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let mentionCount;
  let obj16;
  let string2;
  let t2;
  let target;
  let tmp33Result;
  let tmp36;
  let tmp45;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let inappropriateConversationSafetyToolsWarningForChannel;
  let closure_6;
  let closure_7;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  let closure_11;
  let application;
  let isAppChannelChatOpen;
  let callback;
  let closure_15;
  let callback2;
  let tmp = closure_24();
  dependencyMap = tmp;
  let tmp2 = channelId;
  let tmp3 = dependencyMap;
  obj = channelId(504);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let recipientId;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  const items1 = [closure_11];
  const items2 = [stateFromStores];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const isInChannelResult = null != stateFromStores && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  }, items2);
  const tmp2Result9 = tmp2(10661);
  inappropriateConversationSafetyToolsWarningForChannel = tmp2Result9.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  let tmp7 = null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId;
  closure_6 = tmp7;
  const items3 = [visibleParticipants, totalParticipantCount];
  const tmp2Result10 = tmp2(504);
  let stateFromStores2 = tmp2Result10.useStateFromStores(items3, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let tmp2 = type === closure_15.DM && null != recipientId;
    if (tmp2) {
      let isBlockedResult = RelationshipStore.isBlocked(recipientId);
      const tmp5 = recipientId;
      if (!isBlockedResult) {
        const user = UserStore.getUser(tmp5);
        let isProvisional;
        if (user != null) {
          isProvisional = user.isProvisional;
        }
        isBlockedResult = true === isProvisional;
      }
      tmp2 = isBlockedResult;
    }
    return tmp2;
  });
  const items4 = [callParticipants];
  const tmp2Result11 = tmp2(504);
  const stateFromStores3 = tmp2Result11.useStateFromStores(items4, () => callParticipants.supports(constants2.VIDEO));
  const VideoGuardExperiment = tmp2(13677).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "PrivateChannelButtons" }).videoEnabled;
  closure_7 = tmp10;
  let id;
  const useIsCallActiveNullable = tmp2(8216).useIsCallActiveNullable;
  tmp2(8216);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = useIsCallActiveNullable(id);
  const items5 = [inappropriateConversationSafetyToolsWarningForChannel];
  const tmp2Result13 = tmp2(504);
  callParticipants = tmp2Result13.useStateFromStoresObject(items5, () => {
    let num;
    let participants;
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = obj.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      participants = ChannelRTCStore.getParticipants(obj.id);
    } else {
      participants = NO_PARTICIPANTS;
    }
    let isMultiUserDMResult1;
    const obj2 = { callParticipants: participants, participantsVersion: num };
    if (stateFromStores != null) {
      isMultiUserDMResult1 = obj.isMultiUserDM();
    }
    num = -1;
    if (true === isMultiUserDMResult1) {
      num = ChannelRTCStore.getParticipantsVersion(obj.id);
    }
    return obj2;
  }).callParticipants;
  const items6 = [callParticipants];
  const memo = stateFromStores.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === constants.USER);
    obj = { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
    return obj;
  }, items6);
  visibleParticipants = memo.visibleParticipants;
  totalParticipantCount = memo.totalParticipantCount;
  let isMultiUserDMResult;
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp16 = isMultiUserDMResult;
  if (tmp16) {
    let num = 0;
    tmp16 = callParticipants.length > 0;
  }
  closure_11 = tmp16;
  let obj2 = { context: { type: "channel", channel: stateFromStores } };
  const tmp18 = screenIndex(13678)(obj2);
  application = tmp18.application;
  const isAppDM = tmp18.isAppDM;
  const tmp2Result14 = tmp2(6282);
  const tmp19 = null != tmp2Result14.useDMAppChannelApplicationId(stateFromStores);
  let tmp21 = null;
  const useIsAppChannelChatOpen = tmp2(9535).useIsAppChannelChatOpen;
  tmp2(9535);
  if (tmp19) {
    tmp21 = channelId;
  }
  isAppChannelChatOpen = useIsAppChannelChatOpen(tmp21);
  let tmp24 = null;
  const useAppChannelChatUnread = tmp2(9535).useAppChannelChatUnread;
  tmp2(9535);
  if (tmp19) {
    tmp24 = channelId;
  }
  const appChannelChatUnread = useAppChannelChatUnread(tmp24);
  const items7 = [stateFromStores];
  ({ hasUnread, mentionCount } = appChannelChatUnread);
  callback = obj8.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const obj2 = getPrivateChannelCallDefault(stateFromStores, flag);
        if (obj2.inCall) {
          obj2.onPress();
        } else {
          const obj3 = ConfirmStartCall;
          obj3.confirmStartCall(obj2.onPress);
        }
      }
    }
  }, items7);
  const items8 = [callback];
  closure_15 = obj8.useCallback(() => {
    callback(false);
  }, items8);
  const items9 = [callback, tmp10];
  const items10 = [stateFromStores, channelId, screenIndex];
  const callback1 = obj8.useCallback(() => {
    let intl;
    const tmp = closure_7;
    if (tmp) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      obj = { title: intl.string(intl7.t["8jSzSe"]) };
      const tmp9 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl7.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, closure_20(tmp9, obj));
    } else {
      callback(true);
    }
  }, items9);
  callback2 = obj8.useCallback(() => {
    obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    const tmp3 = channelId;
    if (null != stateFromStores) {
      const guildId = obj2.getGuildId();
      const isThreadResult = stateFromStores.isThread();
      const tmpResult = useSearchContext;
      const channelDetailsSearchContext = tmpResult.getChannelDetailsSearchContext(tmp3, guildId, isThreadResult);
      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      const obj4 = search_tracking_TrackingDefault;
      obj4.trackSearchOpened(obj3);
    }
  }, items10);
  const items11 = [recipientId, stateFromStores, application];
  const items12 = [tmp7, tmp.button, callback2, channelId, recipientId, , ];
  let id1;
  const callback3 = obj8.useCallback(() => {
    let tmp2 = null != recipientId;
    const tmp = recipientId;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != application;
    }
    if (tmp2) {
      const obj2 = { settings_type: "user", destination_pane: closure_14.SETTINGS_APP_DMS_MENU, source_page: "app_dm_settings", application_id: application.id };
      obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(map1.SETTINGS_PANE_VIEWED, obj2);
      const obj4 = { userId: tmp, channel: stateFromStores, application };
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(13696, dependencyMap.paths), "AppDMOptionsBottomSheet", obj4);
    }
  }, items11);
  const useMemo = obj8.useMemo;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    id1 = inappropriateConversationSafetyToolsWarningForChannel.id;
  }
  items12[5] = id1;
  let type;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    type = inappropriateConversationSafetyToolsWarningForChannel.type;
  }
  items12[6] = type;
  const memo1 = useMemo(() => {
    let intl;
    let tmpResult;
    if (closure_6) {
      const obj3 = { channelId, recipientId, warningId: null, warningType: null };
      ({ id: obj2.warningId, type: obj2.warningType } = inappropriateConversationSafetyToolsWarningForChannel);
      tmpResult = tmp(tmp2(13697).SafetyToolsButton, obj3);
    } else {
      obj = { style: button.button, onPress: callback2, accessibilityLabel: intl.string(intl7.t["5h0QOP"]), accessibilityRole: "button", children: closure_20(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm" }) };
      const PressableOpacity = tmp2(6405).PressableOpacity;
      intl = intl7.intl;
      tmpResult = tmp(PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(6307)(channelId)) {
    let obj3 = {
      style: tmp.button,
      onPress: function handleChangelog() {
          obj = screenIndex(button[41]);
          obj.openURL(target);
          const obj2 = screenIndex(button[42]);
          const obj3 = { cta_type: "channel_header", target };
          obj2.track(isAppChannelChatOpen.CHANGE_LOG_CTA_CLICKED, obj3);
        },
      accessibilityLabel: intl6.string(tmp2(1126).t["+KSnWX"]),
      children: closure_20(tmp2(13698).WindowLaunchIcon, { size: "sm" })
    };
    const PressableOpacity6 = tmp2(6405).PressableOpacity;
    intl6 = tmp2(1126).intl;
    tmp33Result = closure_20(PressableOpacity6, obj3);
  } else if (isAppDM) {
    let tmp48Result2 = null;
    if (null != application) {
      let obj4 = { style: tmp.privateChannelButtonsWrapper, children: items14 };
      let tmp48Result = null;
      const tmp49 = recipientId;
      if (tmp19) {
        let ChatIcon;
        const obj5 = {
          style: tmp.button,
          onPress() {
                  let closeAppChannelChatResult;
                  obj = AppChannelChat;
                  if (isAppChannelChatOpen) {
                    closeAppChannelChatResult = obj.closeAppChannelChat(channelId);
                  } else {
                    closeAppChannelChatResult = obj.openAppChannelChat(null, channelId);
                  }
                  return closeAppChannelChatResult;
                },
          accessibilityLabel: string2(isAppChannelChatOpen ? t2["5MstTl"] : t2.kkKapG),
          accessibilityRole: "button",
          children: items13
        };
        const PressableOpacity3 = tmp2(6405).PressableOpacity;
        const intl3 = tmp2(1126).intl;
        string2 = intl3.string;
        t2 = tmp2(1126).t;
        if (isAppChannelChatOpen) {
          ChatIcon = tmp2(8451).AppsIcon;
        } else {
          ChatIcon = tmp2(8416).ChatIcon;
        }
        items13 = [closure_20(ChatIcon, { size: "sm" }), ];
        let tmp51Result = null;
        if (!isAppChannelChatOpen) {
          if (hasUnread) {
            tmp51Result = tmp51(tmp2(13673).ButtonBadge, { badgePosition: "right" });
          } else {
            tmp51Result = null;
          }
        }
        items13[1] = tmp51Result;
        tmp48Result = tmp48(PressableOpacity3, obj5);
      }
      items14 = [tmp48Result, , ];
      const obj6 = { style: tmp.button, onPress: callback2, accessibilityLabel: intl4.string(tmp2(1126).t["5h0QOP"]), accessibilityRole: "button", children: closure_20(tmp2(6960).MagnifyingGlassIcon, { size: "sm" }) };
      const PressableOpacity4 = tmp2(6405).PressableOpacity;
      intl4 = tmp2(1126).intl;
      items14[1] = closure_20(PressableOpacity4, obj6);
      const obj7 = { style: tmp.button, onPress: callback3, accessibilityLabel: intl5.string(tmp2(1126).t["+1H47t"]), accessibilityRole: "button", children: closure_20(tmp2(7313).SettingsIcon, { size: "sm" }) };
      const PressableOpacity5 = tmp2(6405).PressableOpacity;
      intl5 = tmp2(1126).intl;
      items14[2] = closure_20(PressableOpacity5, obj7);
      tmp48Result2 = tmp48(tmp49, obj4);
    }
    tmp33Result = tmp48Result2;
  } else {
    let stringResult;
    let tmp38Result;
    let tmp41;
    const obj9 = { style: tmp.privateChannelButtonsWrapper, children: items18 };
    let PressableOpacity = tmp2(6405).PressableOpacity;
    let intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (tmp16) {
      stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    const obj10 = {
      accessibilityLabel: stringResult,
      accessibilityRole: "button",
      style: items15,
      onPress() {
          const tmp = closure_11;
          if (tmp) {
            if (null != stateFromStores) {
              obj = PrivateChannelCallUtils;
              obj.openChannelCallModal(tmp2);
            }
          }
          closure_15();
        },
      disabled: stateFromStores2,
      children: items16
    };
    items15 = [tmp.button, , ];
    let num2;
    if (tmp16) {
      num2 = 1;
    }
    const obj11 = { borderWidth: num2, borderColor: tmp36 };
    tmp36 = undefined;
    if (tmp16) {
      const unsafe_rawColors = tmp17(587).unsafe_rawColors;
      tmp36 = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
    }
    items15[1] = obj11;
    let disabledButton = null;
    if (stateFromStores2) {
      disabledButton = tmp.disabledButton;
    }
    items15[2] = disabledButton;
    if (tmp16) {
      const VoiceNormalIcon = tmp2(8446).VoiceNormalIcon;
      const unsafe_rawColors2 = tmp17(587).unsafe_rawColors;
      const obj12 = { size: "sm", color: stateFromStores1 ? unsafe_rawColors2.GREEN_360 : unsafe_rawColors2.BRAND_400 };
      tmp38Result = tmp38(VoiceNormalIcon, obj12);
      tmp41 = tmp38;
    } else if (stateFromStores1) {
      const obj13 = { size: "sm", color: screenIndex(587).unsafe_rawColors.RED_400 };
      const PhoneHangUpIcon = tmp2(9544).PhoneHangUpIcon;
      tmp38Result = tmp38(PhoneHangUpIcon, obj13);
      tmp41 = tmp38;
    } else {
      let GREEN_360;
      const PhoneCallIcon = tmp2(9542).PhoneCallIcon;
      if (isCallActiveNullable) {
        GREEN_360 = tmp17(587).unsafe_rawColors.GREEN_360;
      }
      const obj14 = { size: "sm", color: GREEN_360 };
      tmp38Result = tmp38(PhoneCallIcon, obj14);
      tmp41 = tmp38;
    }
    items16 = [
      tmp38Result,
      visibleParticipants.map((user, index) => {
          let tmp7;
          const diff = visibleParticipants.length - 1;
          let num = -6;
          const CutoutableAvatarImage = native.CutoutableAvatarImage;
          const tmp2 = closure_20;
          if (0 === index) {
            num = nativeDefault.space.PX_4;
          }
          obj = { style: { marginLeft: num }, user: user.user, guildId: "r", size: native.AvatarSizes.XSMALL, cutout: tmp7 };
          if (index !== diff) {
            tmp7 = obj;
          }
          return tmp2(CutoutableAvatarImage, obj, user.id);
        }),

    ];
    let tmp41Result = totalParticipantCount > 5;
    if (tmp41Result) {
      const obj15 = { style: tmp.overflowBadge, children: closure_21(tmp2(5147).Text, obj16) };
      obj16 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: items17 };
      items17 = ["+", totalParticipantCount - 5];
      tmp41Result = tmp41(tmp34, obj15);
    }
    items16[2] = tmp41Result;
    items18 = [closure_21(PressableOpacity, obj10), , ];
    let tmp41Result2 = null;
    if (!isMultiUserDMResult) {
      tmp41Result2 = null;
      if (!stateFromStores1) {
        const items19 = [tmp.button, ];
        let disabledButton1 = null;
        const PressableOpacity2 = tmp2(6405).PressableOpacity;
        if (videoEnabled) {
          if (stateFromStores2) {
            disabledButton1 = tmp.disabledButton;
          } else {
            disabledButton1 = null;
          }
        }
        items19[1] = disabledButton1;
        const obj17 = { style: items19, onPress: callback1, disabled: tmp45, accessibilityLabel: intl2.string(tmp2(1126).t.oCqlGG), accessibilityRole: "button", children: tmp41(VideoDenyIcon, { size: "sm" }) };
        tmp45 = !tmp10;
        if (videoEnabled) {
          if (!stateFromStores2) {
            stateFromStores2 = !stateFromStores3;
          }
          tmp45 = stateFromStores2;
        }
        intl2 = tmp2(1126).intl;
        if (videoEnabled) {
          VideoDenyIcon = tmp2(11093).VideoIcon;
        } else {
          VideoDenyIcon = tmp2(13700).VideoDenyIcon;
        }
        tmp41Result2 = tmp41(PressableOpacity2, obj17);
      }
    }
    items18[1] = tmp41Result2;
    items18[2] = memo1;
    tmp33Result = tmp33(tmp34, obj9);
  }
  return tmp33Result;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;
