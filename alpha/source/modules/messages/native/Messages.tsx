// Module ID: 10459
// Function ID: 10460
// Name: Messages
// Dependencies: [32, 109, 19, 5079, 2062, 8251, 5436, 10460, 7186, 6041, 9566, 5992, 4976, 6977, 10461, 6843, 7946, 7725, 6059, 7168, 8226, 7856, 10463, 7857, 6786, 5906, 10464, 7163, 10465, 7356, 7301, 9572, 4709, 6992, 2128, 1205, 502, 2063, 7357, 10466, 2124, 2086, 5887, 5071, 5428, 4707, 5106, 5108, 6040, 5110, 7859, 1389, 5111, 6092, 11247, 5114, 1085, 1391, 21, 558, 576, 12, 504, 568, 6842, 1387, 2040, 11257, 11264, 11268, 11271, 10575, 7160, 4726, 7972, 5962, 10363, 10364, 9317, 7968, 7125, 11275, 4947, 9574, 9270, 9289, 11276, 9562, 8374, 5905, 9563, 8225, 11277, 11280, 8244, 7417, 11282, 10211, 11285, 11647, 2]

// Module 10459 (Messages)
import _modDef12 from "module_12" /* 12 */;
import shallowEqual from "shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6842 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9317 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11276 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8251 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10460 */;
import CacheStore from "CacheStore" /* 7186 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 9566 */;
import EmojiStore from "EmojiStore" /* 5992 */;
import ExperimentStore from "ExperimentStore" /* 4976 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6977 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10461 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6843 */;
import BasicGuildStore from "BasicGuildStore" /* 7946 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7725 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6059 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7168 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8226 */;
import InteractionStore from "InteractionStore" /* 7856 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 10463 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7857 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6786 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5906 */;
import PollsInteractionStore from "PollsInteractionStore" /* 10464 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7163 */;
import PushFeedbackStore from "PushFeedbackStore" /* 10465 */;
import PendingReplyStore from "PendingReplyStore" /* 7356 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7301 */;
import SummaryStore from "SummaryStore" /* 9572 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4709 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6992 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import EditMessageStore from "EditMessageStore" /* 7357 */;
import GiftCodeStore from "GiftCodeStore" /* 10466 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5887 */;
import InviteStore from "InviteStore" /* 5071 */;
import MessageStore from "MessageStore" /* 5428 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import SessionsStore from "SessionsStore" /* 5110 */;
import UploadStore from "UploadStore" /* 7859 */;
import UserStore from "UserStore" /* 1389 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import SKUStore from "SKUStore" /* 6092 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11247 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5114 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _loopResult, _require, dependencyMap, findActivity, invites, messageReference, relevantUserTrialOffer, set, state, voiceStatesForChannelAlt;

let closure_30;
let closure_31;
let closure_61;
let closure_62;
let closure_63;
let closure_64;
let closure_65;
let closure_66;
let closure_67;
let closure_68;
let closure_69;
let closure_3 = ["ref"];
let react = react_mod;
({ useChannelPollInteractions: closure_30, useMessagePollInteractions: closure_31 } = PollsInteractionStore);
({ ActivityActionTypes: closure_61, ChannelTypesSets: closure_62, ME: closure_63, MessageTypes: closure_64, Permissions: closure_65 } = Constants);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_66, PremiumTypes: closure_67 } = PremiumConstants);
({ jsx: closure_68, jsxs: closure_69 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_70 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorActivities(arr) {
  let closure_0;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] !== arr) {
    let obj2 = {};
    _require = obj2;
    const item = arr.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        closure_0[author.author.id] = null;
      }
    });
    cResult[0] = arr;
    cResult[1] = obj2;
  } else {
    _require = cResult[1];
  }
  obj2 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function l() {
      let primaryActivity;
      const obj = _modDef12;
      return obj.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(tmp6, tmp8, tmp9);
}) : (function useMessageAuthorActivities(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  let obj = require("get initialized");
  const items1 = [PresenceStore];
  const items2 = [memo];
  return obj.useStateFromStoresObject(items1, () => {
    let primaryActivity;
    const obj = _modDef12;
    return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_71 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchMessageApplications(arr, arg1) {
  let ref;
  let obj = set(576);
  const cResult = obj.c(9);
  if (cResult[0] === arg1) {
    let tmp5;
    let tmp9;
    let tmp11;
    let tmp10;
    if (cResult[1] === arr) {
      set = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      const tmp6 = globalThis;
      const _Array = Array;
      arr = Array.from(tmp2);
      cResult[3] = tmp2;
      cResult[4] = arr;
      tmp5 = arr;
    } else {
      tmp5 = cResult[4];
    }
    const current = tmp5;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[5] = items;
      tmp9 = items;
    } else {
      tmp9 = cResult[5];
    }
    dependencyMap = react.useRef(tmp9);
    const obj3 = react;
    if (cResult[6] !== tmp5) {
      const fn = function h() {
        const obj = shallowEqual;
        const tmp4 = ref;
        if (!obj.areArraysShallowEqual(current, ref.current)) {
          const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
          ApplicationActionCreatorsDefault;
          const arr = _modDef12(current);
          const found = arr.filter(GlobalUtils.isNotNullish);
          const iter = found.uniq();
          const applications = fetchApplications(iter.value(), false);
          tmp4.current = current;
        }
      };
      const items1 = [tmp5];
      cResult[6] = tmp5;
      cResult[7] = fn;
      cResult[8] = items1;
      tmp11 = items1;
      tmp10 = fn;
    } else {
      tmp10 = cResult[7];
      tmp11 = cResult[8];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
  }
  set = new Set();
  const item = arr.forEach((applicationId) => {
    const tmp = null != applicationId.applicationId && null == applicationId.application;
    if (tmp) {
      set.add(applicationId.applicationId);
    }
  });
  if (null != arg1) {
    set.add(arg1);
  }
  cResult[0] = arg1;
  cResult[1] = arr;
  cResult[2] = set;
}) : (function useFetchMessageApplications(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const memo = react.useMemo(() => {
    set = new Set();
    const item = closure_0.forEach((applicationId) => {
      const tmp = null != applicationId.applicationId && null == applicationId.application;
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    if (null != closure_1) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items);
  const ref = react.useRef([]);
  const items1 = [memo];
  const effect = react.useEffect(() => {
    const obj = shallowEqual;
    const tmp4 = ref;
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(memo);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      tmp4.current = memo;
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((ref) => {
  let TIER_2;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let buildOverrides;
  let channel;
  let channelId;
  let communicationDisabledVersion;
  let eligible;
  let fetchingOrFailedFetchingIds;
  let fetchingSkuIds;
  let guildTemplates;
  let hasLoadedExperiments;
  let id;
  let invalidAppDirectoryEmbedApplicationIds;
  let isFetchingCurrentQuests;
  let lazyCacheStatus;
  let locale;
  let mediaPostEmbeds;
  let messageInteractionStates;
  let messagesVersion;
  let pendingConnection;
  let quests;
  let rsvpVersion;
  let startTime;
  let stateFromStores2;
  let theme;
  let tmp105;
  let tmp106;
  let tmp11;
  let tmp110;
  let tmp111;
  let tmp114;
  let tmp115;
  let tmp116;
  let tmp119;
  let tmp12;
  let tmp120;
  let tmp121;
  let tmp124;
  let tmp125;
  let tmp126;
  let tmp128;
  let tmp129;
  let tmp13;
  let tmp130;
  let tmp132;
  let tmp133;
  let tmp134;
  let tmp137;
  let tmp138;
  let tmp139;
  let tmp14;
  let tmp142;
  let tmp143;
  let tmp144;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp4;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp54;
  let tmp55;
  let tmp57;
  let tmp58;
  let tmp61;
  let tmp62;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp69;
  let tmp70;
  let tmp72;
  let tmp73;
  let tmp75;
  let tmp76;
  let tmp79;
  let tmp80;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp9;
  let tmp91;
  let tmp92;
  let tmp93;
  const tmp = channel;
  let tmp2 = id;
  let obj = channel(id[60]);
  const cResult = obj.c(334);
  if (cResult[0] !== ref) {
    const tmp6 = stateFromStores2;
    let tmp7 = closure_3;
    let tmp8 = stateFromStores2(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  channel = tmp4.channel;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = MessageStore;
    let items = [MessageStore];
    cResult[3] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items1 = [channel.id];
    cResult[4] = channel.id;
    cResult[5] = Ee;
    cResult[6] = items1;
    tmp12 = items1;
    tmp11 = Ee;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult = tmp(tmp2[62]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
  id = channel.id;
  if (cResult[7] !== channel) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp14;
    tmp13 = tmp14;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  closure_3 = tmp13;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items2 = [GuildStore];
    cResult[9] = items2;
    tmp15 = items2;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  if (cResult[10] !== tmp13) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    cResult[10] = tmp13;
    cResult[11] = tmp17;
    tmp16 = tmp17;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  const tmpResult31 = tmp(tmp2[62]);
  const stateFromStores1 = tmpResult31.useStateFromStores(tmp15, tmp16);
  if (stateFromStores1 != null) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items3 = [AuthenticationStore];
    class Ge {
      constructor() {
        return id.getId();
      }
    }
    const items4 = [];
    cResult[12] = items3;
    cResult[13] = Ge;
    cResult[14] = items4;
    tmp21 = items4;
    tmp20 = Ge;
    tmp19 = items3;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp20 = cResult[13];
    tmp21 = cResult[14];
  }
  const tmpResult32 = tmp(tmp2[62]);
  stateFromStores2 = tmpResult32.useStateFromStores(tmp19, tmp20, tmp21);
  const InlineAttachmentMedia = tmp(tmp2[66]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[66]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[66]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[66]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[66]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[66]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[66]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[66]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[66]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items5 = [ThemeStore];
    class Ge {
      constructor() {
        return id.getId();
      }
    }
    const items6 = [];
    cResult[15] = items5;
    cResult[16] = tmp35;
    cResult[17] = items6;
    tmp34 = items6;
    tmp33 = tmp35;
    tmp32 = items5;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp33 = cResult[16];
    tmp34 = cResult[17];
  }
  const tmpResult33 = tmp(tmp2[62]);
  const stateFromStores3 = tmpResult33.useStateFromStores(tmp32, tmp33, tmp34);
  const tmpResult34 = tmp(tmp2[67]);
  const isMessageSwipeActionsEnabled = tmpResult34.useIsMessageSwipeActionsEnabled();
  closure_70(stateFromStores);
  const tmp39 = closure_71;
  if (channel.linkedLobby != null) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  tmp39(stateFromStores, undefined);
  const first = stateFromStores1(stateFromStores(tmp2[68])(stateFromStores, channel), 1)[0];
  const tmp41 = stateFromStores;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items7 = [InviteStore];
    class Ge {
      constructor() {
        return id.getId();
      }
    }
    const items8 = [];
    cResult[18] = items7;
    cResult[19] = tmp46;
    cResult[20] = items8;
    tmp45 = items8;
    tmp44 = tmp46;
    tmp43 = items7;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp44 = cResult[19];
    tmp45 = cResult[20];
  }
  const tmpResult35 = tmp(tmp2[62]);
  const stateFromStores4 = tmpResult35.useStateFromStores(tmp43, tmp44, tmp45);
  const tmpResult36 = tmp(tmp2[69]);
  const fetchVoiceChannelInviteStartTimes = tmpResult36.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    class Ge {
      constructor() {
        return id.getId();
      }
    }
    const items10 = [];
    cResult[21] = items9;
    cResult[22] = tmp52;
    cResult[23] = items10;
    tmp51 = items10;
    tmp50 = tmp52;
    tmp49 = items9;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp50 = cResult[22];
    tmp51 = cResult[23];
  }
  const tmpResult37 = tmp(tmp2[62]);
  const stateFromStoresObject = tmpResult37.useStateFromStoresObject(tmp49, tmp50, tmp51);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items11 = [ApplicationStore];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[24] = items11;
    cResult[25] = St;
    tmp55 = St;
    tmp54 = items11;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp55 = cResult[25];
  }
  const tmpResult38 = tmp(tmp2[62]);
  const stateFromStoresArray = tmpResult38.useStateFromStoresArray(tmp54, tmp55);
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items12 = [ApplicationAssetsStore];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[26] = items12;
    cResult[27] = tmp59;
    tmp58 = tmp59;
    tmp57 = items12;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp58 = cResult[27];
  }
  const tmpResult39 = tmp(tmp2[62]);
  const stateFromStoresArray1 = tmpResult39.useStateFromStoresArray(tmp57, tmp58);
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items13 = [SKUStore];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[28] = items13;
    cResult[29] = tmp63;
    tmp62 = tmp63;
    tmp61 = items13;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp62 = cResult[29];
  }
  const tmpResult40 = tmp(tmp2[62]);
  const stateFromStoresArray2 = tmpResult40.useStateFromStoresArray(tmp61, tmp62);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[30] = items14;
    tmp65 = items14;
  } else {
    class Ee {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  if (cResult[31] !== id) {
    class At {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    const items15 = [id];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[31] = id;
    cResult[32] = At;
    cResult[33] = items15;
    tmp67 = items15;
    tmp66 = At;
  } else {
    class At {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    tmp67 = cResult[33];
  }
  const tmpResult41 = tmp(tmp2[62]);
  const stateFromStoresArray3 = tmpResult41.useStateFromStoresArray(tmp65, tmp66, tmp67);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class At {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    const items16 = [EmbeddedActivitiesStore, ];
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    items16[1] = PresenceStore;
    cResult[34] = items16;
    tmp69 = items16;
  } else {
    class At {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
  }
  if (cResult[35] !== id) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    cResult[35] = id;
    class St {
      constructor() {
        return fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[36] = Vt;
    tmp70 = Vt;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult42 = tmp(tmp2[62]);
  const stateFromStoresArray4 = tmpResult42.useStateFromStoresArray(tmp69, tmp70);
  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items17 = [EmbeddedActivitiesStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(() => { /* body not rendered: F153613 */ });
        });
        return Array.from(set);
      }
    }
    cResult[37] = items17;
    cResult[38] = Dt;
    tmp73 = Dt;
    tmp72 = items17;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp73 = cResult[38];
  }
  const tmpResult43 = tmp(tmp2[62]);
  const stateFromStoresArray5 = tmpResult43.useStateFromStoresArray(tmp72, tmp73);
  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items18 = [EmbeddedActivitiesStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(() => { /* body not rendered: F153613 */ });
        });
        return Array.from(set);
      }
    }
    cResult[39] = items18;
    cResult[40] = tmp77;
    tmp76 = tmp77;
    tmp75 = items18;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp76 = cResult[40];
  }
  const tmpResult44 = tmp(tmp2[62]);
  const stateFromStoresArray6 = tmpResult44.useStateFromStoresArray(tmp75, tmp76);
  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items19 = [MediaPostEmbedStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(() => { /* body not rendered: F153613 */ });
        });
        return Array.from(set);
      }
    }
    cResult[41] = items19;
    cResult[42] = tmp81;
    tmp80 = tmp81;
    tmp79 = items19;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp80 = cResult[42];
  }
  const tmpResult45 = tmp(tmp2[62]);
  const stateFromStores5 = tmpResult45.useStateFromStores(tmp79, tmp80);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items20 = [GuildTemplateStore];
    class Bt {
      constructor() {
        return guildTemplates.getGuildTemplates();
      }
    }
    const items21 = [];
    cResult[43] = items20;
    cResult[44] = Bt;
    cResult[45] = items21;
    tmp85 = items21;
    tmp84 = Bt;
    tmp83 = items20;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp84 = cResult[44];
    tmp85 = cResult[45];
  }
  const tmpResult46 = tmp(tmp2[62]);
  const stateFromStores6 = tmpResult46.useStateFromStores(tmp83, tmp84, tmp85);
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items22 = [GameOrganizationInviteStore];
    class Ht {
      constructor() {
        return invites.getInvites();
      }
    }
    const items23 = [];
    cResult[46] = items22;
    cResult[47] = Ht;
    cResult[48] = items23;
    tmp89 = items23;
    tmp88 = Ht;
    tmp87 = items22;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp88 = cResult[47];
    tmp89 = cResult[48];
  }
  const tmpResult47 = tmp(tmp2[62]);
  const stateFromStores7 = tmpResult47.useStateFromStores(tmp87, tmp88, tmp89);
  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items24 = [BuildOverrideStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    const items25 = [];
    cResult[49] = items24;
    cResult[50] = Kt;
    cResult[51] = items25;
    tmp93 = items25;
    tmp92 = Kt;
    tmp91 = items24;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp92 = cResult[50];
    tmp93 = cResult[51];
  }
  const tmpResult48 = tmp(tmp2[62]);
  const stateFromStores8 = tmpResult48.useStateFromStores(tmp91, tmp92, tmp93);
  const tmpResult49 = tmp(tmp2[70]);
  const codedLinksExperimentEmbeds = tmpResult49.useCodedLinksExperimentEmbeds();
  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    cResult[52] = tmp97;
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult50 = tmp(tmp2[71]);
  const quests1 = tmpResult50.useQuests(tmp96);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[53] !== stateFromStores) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            let closure_0 = iter;
            const userIds = iter.userIds;
            findActivity = findActivity.findActivity;
            iter = userIds.values();
            const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      cResult[55] = tmp101;
      class Kt {
        constructor() {
          return buildOverrides.getBuildOverrides();
        }
      }
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            let closure_0 = iter;
            const userIds = iter.userIds;
            findActivity = findActivity.findActivity;
            iter = userIds.values();
            const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            let closure_0 = iter;
            const userIds = iter.userIds;
            findActivity = findActivity.findActivity;
            iter = userIds.values();
            const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      cResult[56] = tmp103;
      class Kt {
        constructor() {
          return buildOverrides.getBuildOverrides();
        }
      }
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            let closure_0 = iter;
            const userIds = iter.userIds;
            findActivity = findActivity.findActivity;
            iter = userIds.values();
            const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    const found = stateFromStores.filter(tmp100);
    let mapped = found.map(tmp102);
    let found1 = mapped.filter(tmp(tmp2[65]).isNotNullish);
    cResult[53] = stateFromStores;
    cResult[54] = found1;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  found1 = tmp99;
  if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items26 = [ReferralTrialStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[57] = items26;
    tmp105 = items26;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  if (cResult[58] !== tmp99) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    cResult[58] = tmp99;
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[59] = tmp107;
    tmp106 = tmp107;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult51 = tmp(tmp2[62]);
  const stateFromStoresArray7 = tmpResult51.useStateFromStoresArray(tmp105, tmp106);
  const tmpResult52 = tmp(tmp2[72]);
  const trialOffer = tmpResult52.useTrialOffer(closure_66);
  if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items27 = [UserStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[60] = items27;
    cResult[61] = tmp112;
    tmp111 = tmp112;
    tmp110 = items27;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp111 = cResult[61];
  }
  const tmpResult53 = tmp(tmp2[62]);
  const stateFromStores9 = tmpResult53.useStateFromStores(tmp110, tmp111);
  if (cResult[62] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items28 = [EditMessageStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[62] = items28;
    tmp114 = items28;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  if (cResult[63] !== id) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items29 = [id];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[63] = id;
    cResult[64] = tmp117;
    cResult[65] = items29;
    tmp116 = items29;
    tmp115 = tmp117;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp116 = cResult[65];
  }
  const tmpResult54 = tmp(tmp2[62]);
  const stateFromStores10 = tmpResult54.useStateFromStores(tmp114, tmp115, tmp116);
  if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items30 = [PendingReplyStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[66] = items30;
    tmp119 = items30;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  if (cResult[67] !== id) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items31 = [id];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[67] = id;
    cResult[68] = tmp122;
    cResult[69] = items31;
    tmp121 = items31;
    tmp120 = tmp122;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp121 = cResult[69];
  }
  const tmpResult55 = tmp(tmp2[62]);
  const stateFromStores11 = tmpResult55.useStateFromStores(tmp119, tmp120, tmp121);
  if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items32 = [ReadStateStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[70] = items32;
    tmp124 = items32;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F153612 */ });
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  if (cResult[71] !== id) {
    class Is {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    const items33 = [id];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[71] = id;
    cResult[72] = Is;
    cResult[73] = items33;
    tmp126 = items33;
    tmp125 = Is;
  } else {
    class Is {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    tmp126 = cResult[73];
  }
  const tmpResult56 = tmp(tmp2[62]);
  const stateFromStores12 = tmpResult56.useStateFromStores(tmp124, tmp125, tmp126);
  if (cResult[74] === Symbol.for("react.memo_cache_sentinel")) {
    class Is {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    const items34 = [GuildVerificationStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[74] = items34;
    tmp128 = items34;
  } else {
    class Is {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
  }
  if (cResult[75] !== tmp13) {
    class Es {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items35 = [tmp13];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[75] = tmp13;
    cResult[76] = Es;
    cResult[77] = items35;
    tmp130 = items35;
    tmp129 = Es;
  } else {
    class Es {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    tmp130 = cResult[77];
  }
  const tmpResult57 = tmp(tmp2[62]);
  const stateFromStores13 = tmpResult57.useStateFromStores(tmp128, tmp129, tmp130);
  if (cResult[78] === Symbol.for("react.memo_cache_sentinel")) {
    class Es {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items36 = [PermissionStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[78] = items36;
    tmp132 = items36;
  } else {
    class Es {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
  }
  if (cResult[79] !== channel) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items37 = [channel];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[79] = channel;
    cResult[80] = Ts;
    cResult[81] = items37;
    tmp134 = items37;
    tmp133 = Ts;
  } else {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    tmp134 = cResult[81];
  }
  const tmpResult58 = tmp(tmp2[62]);
  const stateFromStores14 = tmpResult58.useStateFromStores(tmp132, tmp133, tmp134);
  tmp41(tmp2[74])(id);
  if (cResult[82] === Symbol.for("react.memo_cache_sentinel")) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items38 = [VoiceStateStore];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[82] = items38;
    tmp137 = items38;
  } else {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
  }
  if (cResult[83] !== stateFromStores2) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items39 = [stateFromStores2];
    class Kt {
      constructor() {
        return buildOverrides.getBuildOverrides();
      }
    }
    cResult[83] = stateFromStores2;
    cResult[84] = tmp140;
    cResult[85] = items39;
    tmp139 = items39;
    tmp138 = tmp140;
  } else {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    tmp139 = cResult[85];
  }
  const tmpResult59 = tmp(tmp2[62]);
  const stateFromStores15 = tmpResult59.useStateFromStores(tmp137, tmp138, tmp139);
  if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items40 = [RTCConnectionStore];
    class Us {
      constructor() {
        return channelId.getChannelId();
      }
    }
    const items41 = [];
    cResult[86] = items40;
    cResult[87] = Us;
    cResult[88] = items41;
    tmp144 = items41;
    tmp143 = Us;
    tmp142 = items40;
  } else {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    tmp143 = cResult[87];
    tmp144 = cResult[88];
  }
  const tmpResult60 = tmp(tmp2[62]);
  const stateFromStores16 = tmpResult60.useStateFromStores(tmp142, tmp143, tmp144);
  if (cResult[89] === Symbol.for("react.memo_cache_sentinel")) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items42 = [ReferencedMessageStore];
    class Us {
      constructor() {
        return channelId.getChannelId();
      }
    }
    cResult[89] = items42;
  } else {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
  }
  if (cResult[90] === channel.guild_id) {
    class Ts {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
  }
  function $s() {
    const THREADS = constants.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != channel.parent_id) {
        const obj = { channel_id: null, message_id: null, guild_id: null };
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = channel);
        message = ReferencedMessageStore.getMessageByReference(obj).message;
      }
    }
    return message;
  }
  cResult[90] = channel.guild_id;
  cResult[91] = channel.id;
  cResult[92] = channel.parent_id;
  cResult[93] = channel.type;
  cResult[94] = $s;
}) : ((ref) => {
  let TIER_2;
  let acceptingGiftCodes;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let buildOverrides;
  let channelId;
  let closure_6;
  let communicationDisabledVersion;
  let displayNameStylesEnabled;
  let eligible;
  let fetchingOrFailedFetchingIds;
  let fetchingSkuIds;
  let guildTemplates;
  let hasLoadedExperiments;
  let id2;
  let invalidAppDirectoryEmbedApplicationIds;
  let isFetchingCurrentQuests;
  let items78;
  let lazyCacheStatus;
  let locale;
  let mediaPostEmbeds;
  let messageInteractionStates;
  let messagesVersion;
  let officialMessageColor;
  let officialMessageStyle;
  let pendingConnection;
  let quests;
  let resolvedGiftCodes;
  let resolvingGiftCodes;
  let roleStyle;
  let rsvpVersion;
  let saturation;
  let startTime;
  let theme;
  let tmp26;
  let tmp67;
  let tmp68;
  let unloadableContentEntryMessageIds;
  let unloadedContentEntryMessageIds;
  let useReducedMotion;
  const f104435 = () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  };
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let id;
  let stateFromStores2;
  react = undefined;
  let channelSummariesExperiment;
  let items64;
  let stateFromStoresArray8;
  let channel = merged.channel;
  let tmp2 = channel;
  let tmp3 = id;
  let obj = channel(id[62]);
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  const items2 = [GuildStore];
  const obj2 = channel(id[62]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const items3 = [AuthenticationStore];
  const tmp2Result = tmp2(tmp3[62]);
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp2(tmp3[66]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp2(tmp3[66]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp2(tmp3[66]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp2(tmp3[66]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp2(tmp3[66]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp2(tmp3[66]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp2(tmp3[66]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp2(tmp3[66]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp2(tmp3[66]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const items4 = [ThemeStore];
  const tmp2Result77 = tmp2(tmp3[62]);
  const stateFromStores3 = tmp2Result77.useStateFromStores(items4, () => theme.theme, []);
  const tmp2Result78 = tmp2(tmp3[67]);
  const isMessageSwipeActionsEnabled = tmp2Result78.useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp19 = closure_70(stateFromStores);
  const tmp20 = closure_71;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  tmp20(stateFromStores, application_id);
  [tmp26, r10112] = stateFromStores1(stateFromStores(tmp3[68])(stateFromStores, channel), 2);
  stateFromStores1(stateFromStores(tmp3[68])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const tmp2Result79 = tmp2(tmp3[62]);
  const stateFromStores4 = tmp2Result79.useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmp2Result80 = tmp2(tmp3[69]);
  const fetchVoiceChannelInviteStartTimes = tmp2Result80.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const tmp2Result81 = tmp2(tmp3[62]);
  const stateFromStoresObject = tmp2Result81.useStateFromStoresObject(items6, () => {
    const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    return obj;
  }, []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const items7 = [ApplicationStore];
  const tmp2Result82 = tmp2(tmp3[62]);
  const stateFromStoresArray = tmp2Result82.useStateFromStoresArray(items7, () => fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds());
  const items8 = [stateFromStoresArray8];
  const tmp2Result83 = tmp2(tmp3[62]);
  const stateFromStoresArray1 = tmp2Result83.useStateFromStoresArray(items8, () => stateFromStoresArray8.getFetchingIds());
  const items9 = [SKUStore];
  const tmp2Result84 = tmp2(tmp3[62]);
  const stateFromStoresArray2 = tmp2Result84.useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const items10 = [items64];
  const items11 = [id];
  const tmp2Result85 = tmp2(tmp3[62]);
  const stateFromStoresArray3 = tmp2Result85.useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const items12 = [items64, PresenceStore];
  const tmp2Result86 = tmp2(tmp3[62]);
  const stateFromStoresArray4 = tmp2Result86.useStateFromStoresArray(items12, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop2(iter) {
      let closure_0 = iter;
      const userIds = iter.userIds;
      findActivity = findActivity.findActivity;
      iter = userIds.values();
      const findActivityResult = findActivity(iter.next().value, (application_id) => application_id.application_id === applicationId.applicationId);
      let details;
      if (findActivityResult != null) {
        details = findActivityResult.details;
      }
      if (null != details) {
        const _HermesInternal = HermesInternal;
        items.push("" + iter.launchId + ":" + findActivityResult.details);
      }
    }
    let iter = embeddedActivitiesForChannel[Symbol.iterator]();
    while (iter !== undefined) {
      let _loop2Result = _loop2(iter.next());
      continue;
    }
    return items;
  });
  const items13 = [items64];
  const tmp2Result87 = tmp2(tmp3[62]);
  const stateFromStoresArray5 = tmp2Result87.useStateFromStoresArray(items13, () => {
    set = new Set();
    const embeddedActivitiesByChannel = items64.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((arr, index) => {
      let closure_0 = index;
      let item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((item) => {
          set.add("" + closure_1_0 + ":" + item);
        });
      });
    });
    return Array.from(set);
  });
  const items14 = [items64];
  const tmp2Result88 = tmp2(tmp3[62]);
  const stateFromStoresArray6 = tmp2Result88.useStateFromStoresArray(items14, () => {
    let tmp6;
    const launchStates = items64.getLaunchStates();
    const items = [];
    const tmp2 = launchStates[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStores1(tmp3, 2);
      [r10016, tmp6] = tmp5;
      let tmp7 = tmp6;
      let isLaunching = tmp6.isLaunching;
      if (isLaunching) {
        isLaunching = null != tmp7.componentId;
      }
      if (isLaunching) {
        isLaunching = tmp7.componentId.length > 0;
      }
      if (isLaunching) {
        let arr = items.push(tmp7.componentId);
      }
      continue;
    }
    return items;
  });
  const items15 = [MediaPostEmbedStore];
  const tmp2Result89 = tmp2(tmp3[62]);
  const stateFromStores5 = tmp2Result89.useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const items16 = [GuildTemplateStore];
  const tmp2Result90 = tmp2(tmp3[62]);
  const stateFromStores6 = tmp2Result90.useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const items17 = [GameOrganizationInviteStore];
  const tmp2Result91 = tmp2(tmp3[62]);
  const stateFromStores7 = tmp2Result91.useStateFromStores(items17, () => invites.getInvites(), []);
  const items18 = [BuildOverrideStore];
  const tmp2Result92 = tmp2(tmp3[62]);
  const stateFromStores8 = tmp2Result92.useStateFromStores(items18, () => buildOverrides.getBuildOverrides(), []);
  const tmp2Result93 = tmp2(tmp3[70]);
  const codedLinksExperimentEmbeds = tmp2Result93.useCodedLinksExperimentEmbeds();
  const tmp2Result94 = tmp2(tmp3[71]);
  const quests1 = tmp2Result94.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  react = mapped.filter(tmp2(tmp3[65]).isNotNullish);
  const items19 = [ReferralTrialStore];
  const tmp2Result95 = tmp2(tmp3[62]);
  const stateFromStoresArray7 = tmp2Result95.useStateFromStoresArray(items19, () => {
    const mapped = closure_6.map((item) => {
      relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
      id = undefined;
      if (relevantUserTrialOffer != null) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const tmp2Result96 = tmp2(tmp3[72]);
  const trialOffer = tmp2Result96.useTrialOffer(closure_66);
  const items20 = [UserStore];
  const tmp2Result97 = tmp2(tmp3[62]);
  const stateFromStores9 = tmp2Result97.useStateFromStores(items20, () => {
    const obj = stateFromStores(id[73]);
    return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
  });
  const items21 = [EditMessageStore];
  const items22 = [id];
  const tmp2Result98 = tmp2(tmp3[62]);
  const stateFromStores10 = tmp2Result98.useStateFromStores(items21, () => EditMessageStore.getEditingMessageId(id), items22);
  const items23 = [PendingReplyStore];
  const items24 = [id];
  const tmp2Result99 = tmp2(tmp3[62]);
  const stateFromStores11 = tmp2Result99.useStateFromStores(items23, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items24);
  const items25 = [ReadStateStore];
  const items26 = [id];
  const tmp2Result100 = tmp2(tmp3[62]);
  const stateFromStores12 = tmp2Result100.useStateFromStores(items25, () => ReadStateStore.getOldestUnreadMessageId(id), items26);
  const items27 = [GuildVerificationStore];
  const items28 = [guildId];
  const tmp2Result101 = tmp2(tmp3[62]);
  const stateFromStores13 = tmp2Result101.useStateFromStores(items27, () => {
    const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items28);
  const items29 = [PermissionStore];
  const items30 = [channel];
  const tmp2Result102 = tmp2(tmp3[62]);
  const stateFromStores14 = tmp2Result102.useStateFromStores(items29, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items30);
  const items31 = [VoiceStateStore];
  const items32 = [stateFromStores2];
  const tmp54 = stateFromStores(tmp3[74])(id);
  const tmp2Result103 = tmp2(tmp3[62]);
  const stateFromStores15 = tmp2Result103.useStateFromStores(items31, () => VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2), items32);
  const items33 = [RTCConnectionStore];
  const tmp2Result104 = tmp2(tmp3[62]);
  const stateFromStores16 = tmp2Result104.useStateFromStores(items33, () => channelId.getChannelId(), []);
  const items34 = [ReferencedMessageStore];
  const items35 = [channel];
  const tmp2Result105 = tmp2(tmp3[62]);
  const stateFromStores17 = tmp2Result105.useStateFromStores(items34, () => {
    const THREADS = constants.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != channel.parent_id) {
        const obj = { channel_id: null, message_id: null, guild_id: null };
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = channel);
        message = ReferencedMessageStore.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items35);
  const items36 = [GiftCodeStore];
  const tmp2Result106 = tmp2(tmp3[62]);
  const stateFromStoresObject1 = tmp2Result106.useStateFromStoresObject(items36, () => {
    const obj = { resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() };
    return obj;
  }, []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const items37 = [ChannelRTCStore];
  const items38 = [id];
  const tmp2Result107 = tmp2(tmp3[62]);
  const stateFromStores18 = tmp2Result107.useStateFromStores(items37, () => ChannelRTCStore.getParticipants(id).length, items38);
  const items39 = [UploadStore];
  const items40 = [id];
  const tmp2Result108 = tmp2(tmp3[62]);
  const stateFromStores19 = tmp2Result108.useStateFromStores(items39, () => UploadStore.getFiles(id), items40);
  const items41 = [ReferencedMessageStore];
  const items42 = [id];
  const tmp2Result109 = tmp2(tmp3[62]);
  const stateFromStores20 = tmp2Result109.useStateFromStores(items41, () => ReferencedMessageStore.getReplyIdsForChannel(id), items42);
  const items43 = [channelSummariesExperiment];
  const tmp2Result110 = tmp2(tmp3[62]);
  const stateFromStoresObject2 = tmp2Result110.useStateFromStoresObject(items43, () => ({ useReducedMotion: channelSummariesExperiment.useReducedMotion, roleStyle: channelSummariesExperiment.roleStyle, officialMessageStyle: channelSummariesExperiment.officialMessageStyle, saturation: channelSummariesExperiment.saturation, displayNameStylesEnabled: channelSummariesExperiment.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const items44 = [ThreadMessageStore];
  const items45 = [id];
  const tmp2Result111 = tmp2(tmp3[62]);
  const stateFromStores21 = tmp2Result111.useStateFromStores(items44, () => ThreadMessageStore.getChannelThreadsVersion(id), items45);
  const items46 = [InteractionStore];
  const tmp2Result112 = tmp2(tmp3[62]);
  const stateFromStoresObject3 = tmp2Result112.useStateFromStoresObject(items46, () => messageInteractionStates.getMessageInteractionStates());
  const items47 = [LocalInteractionComponentStateStore];
  const tmp2Result113 = tmp2(tmp3[62]);
  [tmp67, tmp68] = stateFromStores1(tmp2Result113.useStateFromStores(items47, f104435, [], tmp2(tmp3[75]).isVersionEqual), 2);
  stateFromStores1(tmp2Result113.useStateFromStores(items47, f104435, [], tmp2(tmp3[75]).isVersionEqual), 2);
  const items48 = [ExperimentStore];
  const tmp2Result114 = tmp2(tmp3[62]);
  let stateFromStores22 = tmp2Result114.useStateFromStores(items48, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmp2Result115 = tmp2(tmp3[76]);
  const isSpamMessageRequest = tmp2Result115.useIsSpamMessageRequest(channel.id);
  let tmp72 = null != stateFromStores;
  const tmp2Result116 = tmp2(tmp3[77]);
  const isMessageRequest = tmp2Result116.useIsMessageRequest(channel.id);
  const tmp24 = stateFromStores1;
  const tmp27 = InviteStore;
  const tmp52 = PermissionStore;
  const tmp55 = VoiceStateStore;
  if (tmp72) {
    tmp72 = stateFromStores.ready || stateFromStores.cached;
  }
  const items49 = [GuildScheduledEventStore];
  const tmp74 = null != stateFromStores && stateFromStores.cached;
  const tmp75 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmp2Result117 = tmp2(tmp3[62]);
  const stateFromStores23 = tmp2Result117.useStateFromStores(items49, () => rsvpVersion.getRsvpVersion());
  const items50 = [GuildAutomodMessageStore];
  const tmp2Result118 = tmp2(tmp3[62]);
  const stateFromStores24 = tmp2Result118.useStateFromStores(items50, () => messagesVersion.getMessagesVersion());
  const items51 = [GuildMemberStore];
  const tmp2Result119 = tmp2(tmp3[62]);
  const stateFromStores25 = tmp2Result119.useStateFromStores(items51, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const items52 = [GuildMemberStore];
  const items53 = [guildId, stateFromStores];
  const tmp2Result120 = tmp2(tmp3[62]);
  const stateFromStoresObject4 = tmp2Result120.useStateFromStoresObject(items52, () => {
    if (null != guildId) {
      const arr = stateFromStores;
      if (null != stateFromStores) {
        let obj = {};
        const item = arr.forEach((item) => {
          obj = messages_MessagesUtils;
          const messageAuthorMemberUserIds = obj.getMessageAuthorMemberUserIds(item);
          const iter = messageAuthorMemberUserIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let member = GuildMemberStore.getMember(guildId, nextResult);
            if (null != member) {
              obj[tmp3] = tmp7;
            }
            continue;
          }
        });
        return obj;
      }
    }
    return {};
  }, items53);
  const items54 = [tmp52];
  const tmp2Result121 = tmp2(tmp3[62]);
  const stateFromStores26 = tmp2Result121.useStateFromStores(items54, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  let id1;
  const useCurrentUserCommunicationDisabled = tmp2(tmp3[79]).useCurrentUserCommunicationDisabled;
  tmp2(tmp3[79]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const items55 = [LocaleStore];
  const tmp83 = tmp24(useCurrentUserCommunicationDisabled(id1), 2)[1];
  const tmp2Result123 = tmp2(tmp3[62]);
  const stateFromStores27 = tmp2Result123.useStateFromStores(items55, () => locale.locale);
  const tmp2Result124 = tmp2(tmp3[80]);
  const isPaymentsBlocked = tmp2Result124.useIsPaymentsBlocked();
  const items56 = [JoinedThreadsStore];
  const tmp2Result125 = tmp2(tmp3[62]);
  const stateFromStores28 = tmp2Result125.useStateFromStores(items56, () => {
    const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
    return hasJoinedResult;
  });
  const items57 = [MediaPostSharePromptStore];
  const tmp2Result126 = tmp2(tmp3[62]);
  const stateFromStores29 = tmp2Result126.useStateFromStores(items57, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const items58 = [PushFeedbackStore];
  const tmp2Result127 = tmp2(tmp3[62]);
  const stateFromStores30 = tmp2Result127.useStateFromStores(items58, () => eligible.isEligible());
  const items59 = [CacheStore];
  const tmp2Result128 = tmp2(tmp3[62]);
  const stateFromStores31 = tmp2Result128.useStateFromStores(items59, () => lazyCacheStatus.getLazyCacheStatus());
  const tmp2Result129 = tmp2(tmp3[81]);
  const messageJumpAndroidKeyboardHeight = tmp2Result129.useMessageJumpAndroidKeyboardHeight();
  const tmp91 = stateFromStores(tmp3[82])();
  const tmp2Result130 = tmp2(tmp3[83]);
  channelSummariesExperiment = tmp2Result130.useChannelSummariesExperiment(channel);
  const items60 = [SummaryStore];
  const items61 = [channelSummariesExperiment, channel.id];
  const tmp2Result131 = tmp2(tmp3[62]);
  const stateFromStores32 = tmp2Result131.useStateFromStores(items60, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items61);
  const tmp2Result132 = tmp2(tmp3[84]);
  const isConversationTopicHeaderEnabled = tmp2Result132.useIsConversationTopicHeaderEnabled(channel.guild_id, "messages_conversation_header");
  let tmp95;
  if (isConversationTopicHeaderEnabled) {
    tmp95 = tmp23(tmp3[85])(channel.id);
  }
  const items62 = [channel.id, , , , ];
  ({ hasMoreAfter: arr66[1], hasMoreBefore: arr66[2], length: arr66[3], ready: arr66[4] } = stateFromStores);
  const effect = react.useEffect(() => {
    const ready = stateFromStores.ready;
    let hasMoreAfter = !ready;
    if (ready) {
      hasMoreAfter = 0 !== arr.length;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = arr.hasMoreBefore;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = arr.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      const _Date = Date;
      const obj = DimensionActionCreatorsDefault;
      const result = obj.updateChannelDimensions(channel.id, Date.now(), 1, 1, 0);
    }
  }, items62);
  const tmp2Result133 = tmp2(tmp3[87]);
  const shouldTrackAnnouncementMessageViews = tmp2Result133.useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result134 = tmp2(tmp3[87]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp2Result134.useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result135 = tmp2(tmp3[87]);
  const shouldTrackOfficialMessageViews = tmp2Result135.useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result136 = tmp2(tmp3[87]);
  const shouldTrackVoiceInviteEmbedViews = tmp2Result136.useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result137 = tmp2(tmp3[88]);
  const shouldDisplaySpoilerObscurity = tmp2Result137.useShouldDisplaySpoilerObscurity(channel);
  const items63 = [id, guildId];
  const tmp2Result138 = tmp2(tmp3[89]);
  const isAgeVerified = tmp2Result138.useIsAgeVerified();
  const effect1 = react.useEffect(() => {
    let obj = stateFromStores(id[90]);
    obj.handleChannelSelect();
    return () => {
      const obj = stateFromStores(id[90]);
      obj.handleChannelSelect();
    };
  }, items63);
  const tmp2Result139 = tmp2(tmp3[91]);
  const shouldDisableInteractiveComponents = tmp2Result139.useShouldDisableInteractiveComponents(channel.id);
  items64 = [];
  const tmp105 = closure_30(channel.id);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items64.push(message_id);
    }
  });
  const items65 = [ExplicitMediaStore];
  const items66 = [id];
  const tmp107 = closure_31(items64);
  const tmp2Result140 = tmp2(tmp3[62]);
  const stateFromStores33 = tmp2Result140.useStateFromStores(items65, () => ExplicitMediaStore.getChannelFpInfo(id), items66);
  const items67 = [FamilyCenterPendingConnectionStore];
  const tmp2Result141 = tmp2(tmp3[62]);
  const stateFromStores34 = tmp2Result141.useStateFromStores(items67, () => pendingConnection.getPendingConnection());
  const tmp110 = stateFromStores(tmp3[92])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp3[93])(stateFromStores));
  stateFromStores(tmp3[93])(stateFromStores);
  const items68 = [UserStore];
  const tmp2Result142 = tmp2(tmp3[62]);
  const stateFromStores35 = tmp2Result142.useStateFromStores(items68, () => {
    const currentUser = authStore2.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items69 = [BasicGuildStore];
  const tmp2Result143 = tmp2(tmp3[62]);
  const stateFromStores36 = tmp2Result143.useStateFromStores(items69, () => version.getVersion());
  const tmp2Result144 = tmp2(tmp3[94]);
  const colorStore = tmp2Result144.useColorStore((palette) => Object.keys(palette.palette).length);
  const items70 = [EmojiStore];
  const tmp2Result145 = tmp2(tmp3[62]);
  const stateFromStores37 = tmp2Result145.useStateFromStores(items70, () => EmojiStore.getGuildEmoji(guildId));
  const items71 = [tmp55];
  const items72 = [guildId];
  const tmp2Result146 = tmp2(tmp3[62]);
  const stateFromStores38 = tmp2Result146.useStateFromStores(items71, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      const obj = messages_MessagesUtils;
      return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items72);
  const items73 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp27, ChannelStore];
  const tmp2Result147 = tmp2(tmp3[62]);
  const stateFromStoresObject5 = tmp2Result147.useStateFromStoresObject(items73, () => {
    const obj = {};
    invites = InviteStore.getInvites();
    const values = invites.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      channel = nextResult.channel;
      let id1;
      if (channel != null) {
        id1 = channel.id;
      }
      if (null != id1) {
        let obj4 = channel(id[95]);
        if (obj4.isVoiceChannelInvite(tmp3)) {
          id = tmp3.channel.id;
          let guild = tmp3.guild;
          let id2;
          if (guild != null) {
            id2 = guild.id;
          }
          voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(id, id2);
          let mapped = voiceStatesForChannelAlt.map((voiceState) => {
            let str = "";
            if (voiceState.voiceState.selfStream) {
              str = "*";
            }
            return "" + str + voiceState.user.id;
          });
          let joined = mapped.join(",");
          let str = startTime.getStartTime(channel.getChannel(id));
          if (str == null) {
            str = "";
          }
          let _HermesInternal = HermesInternal;
          obj[id] = "" + joined + ":" + str;
        }
      }
      continue;
    }
    return obj;
  });
  const items74 = [SessionsStore];
  const tmp2Result148 = tmp2(tmp3[62]);
  stateFromStoresArray8 = tmp2Result148.useStateFromStoresArray(items74, () => {
    const items = [...closure_1_54.getRemoteActivities(), ...closure_1_54.getHiddenActivities()];
    return items.filter(channel(id[65]).isNotNullish);
  });
  const items75 = [ActivityLauncherStore];
  const tmp2Result149 = tmp2(tmp3[62]);
  const stateFromStoresObject6 = tmp2Result149.useStateFromStoresObject(items75, () => stateFromStoresArray8.reduce((acc, application_id) => {
    if (null == application_id.application_id) {
      return acc;
    } else {
      state = state.getState(application_id.application_id, constants.JOIN);
      if (null != state) {
        acc[application_id.application_id] = state;
      }
      return acc;
    }
  }, {}));
  const items76 = [AuthorizedAppsStore];
  const tmp2Result150 = tmp2(tmp3[62]);
  const stateFromStoresArray9 = tmp2Result150.useStateFromStoresArray(items76, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const items77 = [UserStore];
  const tmp2Result151 = tmp2(tmp3[62]);
  const stateFromStores39 = tmp2Result151.useStateFromStores(items77, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmp2Result152 = tmp2(tmp3[96]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2Result152.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: tmp2(tmp3[99]).Profiles.Messages, children: items78 };
  const tmp23Result = stateFromStores(tmp3[99]);
  let isThreadResult = channel.isThread();
  const tmp123 = closure_69;
  if (isThreadResult) {
    isThreadResult = closure_68(tmp23(tmp3[97]), { absolute: true });
  }
  items78 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp110, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp72, isMessagesCached: tmp74, isMessagesAckable: tmp75, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp19, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp54, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp67, interactionComponentStatesVersion: tmp68, hasLoadedExperiments: stateFromStores22, guildSystemChannelFlags: systemChannelFlags, currentUserCommunicationDisabled: tmp83, renderCommunicationDisabled: stateFromStores26, userSettingsLocale: stateFromStores27, paymentsBlocked: isPaymentsBlocked, isFollowingForumPost: stateFromStores28, showMediaPostSharePrompt: stateFromStores29, showPushFeedback: stateFromStores30, cacheStoreLoaded: "initializing" !== stateFromStores31, androidKeyboardHeight: messageJumpAndroidKeyboardHeight, selectedSummary: stateFromStores32, selectedConversation: tmp95, keyboardType: tmp91, shouldTrackAnnouncementMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackOfficialMessageViews, shouldTrackVoiceInviteEmbedViews, shouldObscureSpoiler: shouldDisplaySpoilerObscurity, shouldDisableInteractiveComponents, channelPolls: tmp105, messageReferencePolls: tmp107, explicitMediaFalsePositiveInfo: stateFromStores33, familyCenterPendingConnection: stateFromStores34, threadStartingReferenceMessage: stateFromStores17, unloadedContentEntryMessageIds, unloadableContentEntryMessageIds, resolvedReferralTrialOfferIds: stateFromStoresArray7, referralTrialOfferId: id2, isPremiumTier2User: stateFromStores9, activityInviteMessageIds: tmp26, guildInviteColorsFetched: colorStore, isAgeVerified, guildEmojis: stateFromStores37, enableSwipeActions: isMessageSwipeActionsEnabled, selfActivities: stateFromStoresArray8, activityLaunchJoinStates: stateFromStoresObject6, authorizedAppsTokens: stateFromStoresArray9, currentUserDisplayNameStyles: stateFromStores39, voiceInviteDataByChannelId: stateFromStoresObject5, officialMessageColor };
  const tmp127 = closure_68;
  const tmp23Result2 = stateFromStores(tmp3[98]);
  if (stateFromStores22) {
    stateFromStores22 = tmp72;
  }
  id2 = undefined;
  if (trialOffer != null) {
    id2 = trialOffer.id;
  }
  officialMessageColor = undefined;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  const merged1 = Object.assign(merged);
  items78[1] = tmp127(tmp23Result2, obj4);
  return tmp123(tmp23Result, obj3);
});
tmp6.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default tmp6;
