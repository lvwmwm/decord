// Module ID: 11119
// Function ID: 11120
// Name: Messages
// Dependencies: [32, 109, 19, 5006, 4856, 8680, 2043, 11120, 7643, 6830, 10069, 6783, 5227, 7450, 11121, 6869, 8368, 8194, 6842, 7625, 8655, 8324, 11124, 8325, 7263, 11125, 11126, 7620, 11127, 7810, 7754, 10075, 4939, 7463, 2066, 1204, 502, 4857, 7811, 11128, 4917, 4879, 6695, 5738, 6049, 4937, 5750, 5752, 6829, 5754, 8327, 1389, 5668, 6883, 11286, 5755, 1084, 11122, 1391, 21, 558, 576, 12, 504, 568, 6868, 1385, 4833, 11297, 11304, 11308, 11311, 9636, 7617, 2051, 8393, 6753, 11002, 11003, 9847, 8389, 7587, 11315, 5198, 10077, 9819, 11316, 10065, 8803, 6713, 10066, 8654, 11317, 11321, 8673, 7866, 11322, 10693, 11325, 13523, 2]

// Module 11119 (Messages)
import _modDef12 from "module_12" /* 12 */;
import shallowEqual from "shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6868 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9847 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11122 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11316 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4856 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8680 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11120 */;
import CacheStore from "CacheStore" /* 7643 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6830 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10069 */;
import EmojiStore from "EmojiStore" /* 6783 */;
import ExperimentStore from "ExperimentStore" /* 5227 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7450 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11121 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6869 */;
import BasicGuildStore from "BasicGuildStore" /* 8368 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8194 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6842 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7625 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8655 */;
import InteractionStore from "InteractionStore" /* 8324 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11124 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8325 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7263 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 11125 */;
import PollsInteractionStore from "PollsInteractionStore" /* 11126 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7620 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11127 */;
import PendingReplyStore from "PendingReplyStore" /* 7810 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7754 */;
import SummaryStore from "SummaryStore" /* 10075 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4939 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7463 */;
import LocaleStore from "LocaleStore" /* 2066 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import EditMessageStore from "EditMessageStore" /* 7811 */;
import GiftCodeStore from "GiftCodeStore" /* 11128 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import GuildStore from "GuildStore" /* 4879 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6695 */;
import InviteStore from "InviteStore" /* 5738 */;
import MessageStore from "MessageStore" /* 6049 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import PresenceStore from "PresenceStore" /* 5750 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import SessionsStore from "SessionsStore" /* 5754 */;
import UploadStore from "UploadStore" /* 8327 */;
import UserStore from "UserStore" /* 1389 */;
import VoiceStateStore from "VoiceStateStore" /* 5668 */;
import SKUStore from "SKUStore" /* 6883 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11286 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5755 */;
import Constants from "Constants" /* 1084 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _loopResult, _require, dependencyMap, invites, messageReference, relevantUserTrialOffer, set, state, voiceStatesForChannelAlt;

let closure_30;
let closure_31;
let closure_61;
let closure_62;
let closure_63;
let closure_64;
let closure_65;
let closure_67;
let closure_68;
let closure_69;
let closure_70;
let closure_3 = ["ref"];
({ useChannelPollInteractions: closure_30, useMessagePollInteractions: closure_31 } = PollsInteractionStore);
({ ActivityActionTypes: closure_61, ChannelTypesSets: closure_62, ME: closure_63, MessageTypes: closure_64, Permissions: closure_65 } = Constants);
const constants3 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_67, PremiumTypes: closure_68 } = PremiumConstants);
({ jsx: closure_69, jsxs: closure_70 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_71 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorActivities(arr) {
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
let closure_72 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchMessageApplications(arr, arg1) {
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesConnected(ref) {
  let TIER_2;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let buildOverrides;
  let channel;
  let channelId;
  let communicationDisabledVersion;
  let eligible;
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
  let tmp109;
  let tmp11;
  let tmp110;
  let tmp113;
  let tmp114;
  let tmp115;
  let tmp118;
  let tmp119;
  let tmp12;
  let tmp120;
  let tmp122;
  let tmp123;
  let tmp124;
  let tmp126;
  let tmp127;
  let tmp128;
  let tmp13;
  let tmp130;
  let tmp131;
  let tmp132;
  let tmp136;
  let tmp137;
  let tmp138;
  let tmp14;
  let tmp140;
  let tmp141;
  let tmp142;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp4;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp50;
  let tmp51;
  let tmp53;
  let tmp54;
  let tmp56;
  let tmp57;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp63;
  let tmp64;
  let tmp66;
  let tmp67;
  let tmp69;
  let tmp70;
  let tmp73;
  let tmp74;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp9;
  let tmp90;
  let tmp91;
  let tmp92;
  const tmp = channel;
  let tmp2 = id;
  let obj = channel(id[61]);
  const cResult = obj.c(339);
  if (cResult[0] !== ref) {
    let tmp6 = stateFromStores2;
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
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items1 = [channel.id];
    cResult[4] = channel.id;
    cResult[5] = Re;
    cResult[6] = items1;
    tmp12 = items1;
    tmp11 = Re;
  } else {
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult = tmp(tmp2[63]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
  id = channel.id;
  if (cResult[7] !== channel) {
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp14;
    tmp13 = tmp14;
  } else {
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  closure_3 = tmp13;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
    const items2 = [GuildStore];
    cResult[9] = items2;
    tmp15 = items2;
  } else {
    class Re {
      constructor() {
        return MessageStore.getMessages(channel.id);
      }
    }
  }
  if (cResult[10] !== tmp13) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    cResult[10] = tmp13;
    cResult[11] = Ge;
    tmp16 = Ge;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  const tmpResult32 = tmp(tmp2[63]);
  const stateFromStores1 = tmpResult32.useStateFromStores(tmp15, tmp16);
  if (stateFromStores1 != null) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items3 = [AuthenticationStore];
    function je() {
      return id.getId();
    }
    const items4 = [];
    cResult[12] = items3;
    cResult[13] = je;
    cResult[14] = items4;
    tmp20 = items4;
    tmp19 = je;
    tmp18 = items3;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp19 = cResult[13];
    tmp20 = cResult[14];
  }
  const tmpResult33 = tmp(tmp2[63]);
  stateFromStores2 = tmpResult33.useStateFromStores(tmp18, tmp19, tmp20);
  const InlineAttachmentMedia = tmp(tmp2[67]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[67]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[67]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[67]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[67]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[67]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[67]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[67]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[67]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items5 = [ThemeStore];
    function qe() {
      return theme.theme;
    }
    const items6 = [];
    cResult[15] = items5;
    cResult[16] = qe;
    cResult[17] = items6;
    tmp33 = items6;
    tmp32 = qe;
    tmp31 = items5;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp32 = cResult[16];
    tmp33 = cResult[17];
  }
  const tmpResult34 = tmp(tmp2[63]);
  const stateFromStores3 = tmpResult34.useStateFromStores(tmp31, tmp32, tmp33);
  const tmpResult35 = tmp(tmp2[68]);
  const isMessageSwipeActionsEnabled = tmpResult35.useIsMessageSwipeActionsEnabled();
  closure_71(stateFromStores);
  const tmp37 = closure_72;
  if (channel.linkedLobby != null) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  tmp37(stateFromStores, undefined);
  const first = stateFromStores1(stateFromStores(tmp2[69])(stateFromStores, channel), 1)[0];
  const tmp39 = stateFromStores;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items7 = [InviteStore];
    function it() {
      return InviteStore.getInvites();
    }
    const items8 = [];
    cResult[18] = items7;
    cResult[19] = it;
    cResult[20] = items8;
    tmp43 = items8;
    tmp42 = it;
    tmp41 = items7;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp42 = cResult[19];
    tmp43 = cResult[20];
  }
  const tmpResult36 = tmp(tmp2[63]);
  const stateFromStores4 = tmpResult36.useStateFromStores(tmp41, tmp42, tmp43);
  const tmpResult37 = tmp(tmp2[70]);
  const fetchVoiceChannelInviteStartTimes = tmpResult37.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    function dt() {
      const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
      return obj;
    }
    const items10 = [];
    cResult[21] = items9;
    cResult[22] = dt;
    cResult[23] = items10;
    tmp48 = items10;
    tmp47 = dt;
    tmp46 = items9;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp47 = cResult[22];
    tmp48 = cResult[23];
  }
  const tmpResult38 = tmp(tmp2[63]);
  const stateFromStoresObject = tmpResult38.useStateFromStoresObject(tmp46, tmp47, tmp48);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items11 = [ApplicationStore];
    function gt() {
      return ApplicationStore.getFetchingOrFailedFetchingIds();
    }
    cResult[24] = items11;
    cResult[25] = gt;
    tmp51 = gt;
    tmp50 = items11;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp51 = cResult[25];
  }
  const tmpResult39 = tmp(tmp2[63]);
  const stateFromStoresArray = tmpResult39.useStateFromStoresArray(tmp50, tmp51);
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items12 = [ApplicationAssetsStore];
    function bt() {
      return ApplicationAssetsStore.getFetchingIds();
    }
    cResult[26] = items12;
    cResult[27] = bt;
    tmp54 = bt;
    tmp53 = items12;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp54 = cResult[27];
  }
  const tmpResult40 = tmp(tmp2[63]);
  const stateFromStoresArray1 = tmpResult40.useStateFromStoresArray(tmp53, tmp54);
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items13 = [SKUStore];
    class It {
      constructor() {
        return fetchingSkuIds.getFetchingSkuIds();
      }
    }
    cResult[28] = items13;
    cResult[29] = It;
    tmp57 = It;
    tmp56 = items13;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp57 = cResult[29];
  }
  const tmpResult41 = tmp(tmp2[63]);
  const stateFromStoresArray2 = tmpResult41.useStateFromStoresArray(tmp56, tmp57);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    class It {
      constructor() {
        return fetchingSkuIds.getFetchingSkuIds();
      }
    }
    cResult[30] = items14;
    tmp59 = items14;
  } else {
    class Ge {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  if (cResult[31] !== id) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items15 = [id];
    class It {
      constructor() {
        return fetchingSkuIds.getFetchingSkuIds();
      }
    }
    cResult[31] = id;
    cResult[32] = Ct;
    cResult[33] = items15;
    tmp61 = items15;
    tmp60 = Ct;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    tmp61 = cResult[33];
  }
  const tmpResult42 = tmp(tmp2[63]);
  const stateFromStoresArray3 = tmpResult42.useStateFromStoresArray(tmp59, tmp60, tmp61);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items16 = [EmbeddedActivitiesStore, ];
    class It {
      constructor() {
        return fetchingSkuIds.getFetchingSkuIds();
      }
    }
    items16[1] = PresenceStore;
    cResult[34] = items16;
    tmp63 = items16;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
  }
  if (cResult[35] !== id) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class It {
      constructor() {
        return fetchingSkuIds.getFetchingSkuIds();
      }
    }
    cResult[36] = Pt;
    tmp64 = Pt;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
  const tmpResult43 = tmp(tmp2[63]);
  const stateFromStoresArray4 = tmpResult43.useStateFromStoresArray(tmp63, tmp64);
  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class Ot {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(function() { /* body not rendered: F163060 */ });
        });
        return Array.from(set);
      }
    }
    cResult[37] = items17;
    cResult[38] = Ot;
    tmp67 = Ot;
    tmp66 = items17;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    tmp67 = cResult[38];
  }
  const tmpResult44 = tmp(tmp2[63]);
  const stateFromStoresArray5 = tmpResult44.useStateFromStoresArray(tmp66, tmp67);
  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class Ot {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(function() { /* body not rendered: F163060 */ });
        });
        return Array.from(set);
      }
    }
    cResult[39] = items18;
    cResult[40] = tmp71;
    tmp70 = tmp71;
    tmp69 = items18;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    tmp70 = cResult[40];
  }
  const tmpResult45 = tmp(tmp2[63]);
  const stateFromStoresArray6 = tmpResult45.useStateFromStoresArray(tmp69, tmp70);
  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[41] = items19;
    cResult[42] = Lt;
    tmp74 = Lt;
    tmp73 = items19;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    tmp74 = cResult[42];
  }
  const tmpResult46 = tmp(tmp2[63]);
  const stateFromStores5 = tmpResult46.useStateFromStores(tmp73, tmp74);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    const items21 = [];
    cResult[43] = items20;
    cResult[44] = tmp79;
    cResult[45] = items21;
    tmp78 = items21;
    tmp77 = tmp79;
    tmp76 = items20;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    tmp77 = cResult[44];
    tmp78 = cResult[45];
  }
  const tmpResult47 = tmp(tmp2[63]);
  const stateFromStores6 = tmpResult47.useStateFromStores(tmp76, tmp77, tmp78);
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    const items23 = [];
    cResult[46] = items22;
    cResult[47] = tmp84;
    cResult[48] = items23;
    tmp83 = items23;
    tmp82 = tmp84;
    tmp81 = items22;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    tmp82 = cResult[47];
    tmp83 = cResult[48];
  }
  const tmpResult48 = tmp(tmp2[63]);
  const stateFromStores7 = tmpResult48.useStateFromStores(tmp81, tmp82, tmp83);
  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
    const items24 = [GuildStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[49] = items24;
    tmp86 = items24;
  } else {
    class Pt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          iter = userIds.values();
          const value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = closure_2_51.findActivity(value, function() { /* body not rendered: F163059 */ });
          }
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
  if (cResult[50] !== stateFromStores7) {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    const items25 = [stateFromStores7];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[50] = stateFromStores7;
    cResult[51] = Wt;
    cResult[52] = items25;
    tmp88 = items25;
    tmp87 = Wt;
  } else {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    tmp88 = cResult[52];
  }
  const tmpResult49 = tmp(tmp2[63]);
  const stateFromStoresArray7 = tmpResult49.useStateFromStoresArray(tmp86, tmp87, tmp88);
  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    const items26 = [BuildOverrideStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    const items27 = [];
    cResult[53] = items26;
    cResult[54] = tmp93;
    cResult[55] = items27;
    tmp92 = items27;
    tmp91 = tmp93;
    tmp90 = items26;
  } else {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    tmp91 = cResult[54];
    tmp92 = cResult[55];
  }
  const tmpResult50 = tmp(tmp2[63]);
  const stateFromStores8 = tmpResult50.useStateFromStores(tmp90, tmp91, tmp92);
  const tmpResult51 = tmp(tmp2[71]);
  const codedLinksExperimentEmbeds = tmpResult51.useCodedLinksExperimentEmbeds();
  if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[56] = tmp97;
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
  } else {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult52 = tmp(tmp2[72]);
  const quests1 = tmpResult52.useQuests(tmp96);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[57] !== stateFromStores) {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
      class Wt {
        constructor() {
          const items = [];
          const values = stateFromStores7.values();
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let tmp5 = nextResult.state === constants2.RESOLVED;
            if (tmp5) {
              tmp5 = null != GuildStore.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              let arr = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[59] = tmp101;
      class Lt {
        constructor() {
          return mediaPostEmbeds.getMediaPostEmbeds();
        }
      }
    } else {
      class Wt {
        constructor() {
          const items = [];
          const values = stateFromStores7.values();
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let tmp5 = nextResult.state === constants2.RESOLVED;
            if (tmp5) {
              tmp5 = null != GuildStore.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              let arr = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
    }
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
      class Wt {
        constructor() {
          const items = [];
          const values = stateFromStores7.values();
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let tmp5 = nextResult.state === constants2.RESOLVED;
            if (tmp5) {
              tmp5 = null != GuildStore.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              let arr = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[60] = tmp103;
      class Lt {
        constructor() {
          return mediaPostEmbeds.getMediaPostEmbeds();
        }
      }
    } else {
      class Wt {
        constructor() {
          const items = [];
          const values = stateFromStores7.values();
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let tmp5 = nextResult.state === constants2.RESOLVED;
            if (tmp5) {
              tmp5 = null != GuildStore.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              let arr = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
    }
    const found = stateFromStores.filter(tmp100);
    let mapped = found.map(tmp102);
    let found1 = mapped.filter(tmp(tmp2[66]).isNotNullish);
    cResult[57] = stateFromStores;
    cResult[58] = found1;
  } else {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
  }
  found1 = tmp99;
  if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    const items28 = [ReferralTrialStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[61] = items28;
    tmp105 = items28;
  } else {
    class Wt {
      constructor() {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
  }
  if (cResult[62] !== tmp99) {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    cResult[62] = tmp99;
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[63] = Ss;
    tmp106 = Ss;
  } else {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
  }
  const tmpResult53 = tmp(tmp2[63]);
  const stateFromStoresArray8 = tmpResult53.useStateFromStoresArray(tmp105, tmp106);
  const tmpResult54 = tmp(tmp2[73]);
  const trialOffer = tmpResult54.useTrialOffer(closure_67);
  if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items29 = [UserStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[64] = items29;
    cResult[65] = tmp111;
    tmp110 = tmp111;
    tmp109 = items29;
  } else {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    tmp110 = cResult[65];
  }
  const tmpResult55 = tmp(tmp2[63]);
  const stateFromStores9 = tmpResult55.useStateFromStores(tmp109, tmp110);
  if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items30 = [EditMessageStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[66] = items30;
    tmp113 = items30;
  } else {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
  }
  if (cResult[67] !== id) {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items31 = [id];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[67] = id;
    cResult[68] = tmp116;
    cResult[69] = items31;
    tmp115 = items31;
    tmp114 = tmp116;
  } else {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    tmp115 = cResult[69];
  }
  const tmpResult56 = tmp(tmp2[63]);
  const stateFromStores10 = tmpResult56.useStateFromStores(tmp113, tmp114, tmp115);
  if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items32 = [PendingReplyStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[70] = items32;
    tmp118 = items32;
  } else {
    class Ss {
      constructor() {
        mapped = closure_7.map((item) => {
          relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
          id = undefined;
          if (relevantUserTrialOffer != null) {
            id = relevantUserTrialOffer.id;
          }
          return id;
        });
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
  }
  if (cResult[71] !== id) {
    class Ms {
      constructor() {
        const pendingReply = PendingReplyStore.getPendingReply(id);
        id = undefined;
        if (pendingReply != null) {
          id = pendingReply.message.id;
        }
        return id;
      }
    }
    const items33 = [id];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[71] = id;
    cResult[72] = Ms;
    cResult[73] = items33;
    tmp120 = items33;
    tmp119 = Ms;
  } else {
    class Ms {
      constructor() {
        const pendingReply = PendingReplyStore.getPendingReply(id);
        id = undefined;
        if (pendingReply != null) {
          id = pendingReply.message.id;
        }
        return id;
      }
    }
    tmp120 = cResult[73];
  }
  const tmpResult57 = tmp(tmp2[63]);
  const stateFromStores11 = tmpResult57.useStateFromStores(tmp118, tmp119, tmp120);
  if (cResult[74] === Symbol.for("react.memo_cache_sentinel")) {
    class Ms {
      constructor() {
        const pendingReply = PendingReplyStore.getPendingReply(id);
        id = undefined;
        if (pendingReply != null) {
          id = pendingReply.message.id;
        }
        return id;
      }
    }
    const items34 = [ReadStateStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[74] = items34;
    tmp122 = items34;
  } else {
    class Ms {
      constructor() {
        const pendingReply = PendingReplyStore.getPendingReply(id);
        id = undefined;
        if (pendingReply != null) {
          id = pendingReply.message.id;
        }
        return id;
      }
    }
  }
  if (cResult[75] !== id) {
    class Rs {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    const items35 = [id];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[75] = id;
    cResult[76] = Rs;
    cResult[77] = items35;
    tmp124 = items35;
    tmp123 = Rs;
  } else {
    class Rs {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    tmp124 = cResult[77];
  }
  const tmpResult58 = tmp(tmp2[63]);
  const stateFromStores12 = tmpResult58.useStateFromStores(tmp122, tmp123, tmp124);
  if (cResult[78] === Symbol.for("react.memo_cache_sentinel")) {
    class Rs {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
    const items36 = [GuildVerificationStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[78] = items36;
    tmp126 = items36;
  } else {
    class Rs {
      constructor() {
        return ReadStateStore.getOldestUnreadMessageId(id);
      }
    }
  }
  if (cResult[79] !== tmp13) {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items37 = [tmp13];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[79] = tmp13;
    cResult[80] = Ds;
    cResult[81] = items37;
    tmp128 = items37;
    tmp127 = Ds;
  } else {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    tmp128 = cResult[81];
  }
  const tmpResult59 = tmp(tmp2[63]);
  const stateFromStores13 = tmpResult59.useStateFromStores(tmp126, tmp127, tmp128);
  if (cResult[82] === Symbol.for("react.memo_cache_sentinel")) {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items38 = [PermissionStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[82] = items38;
    tmp130 = items38;
  } else {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
  }
  if (cResult[83] !== channel) {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items39 = [channel];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[83] = channel;
    cResult[84] = tmp133;
    cResult[85] = items39;
    tmp132 = items39;
    tmp131 = tmp133;
  } else {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    tmp132 = cResult[85];
  }
  const tmpResult60 = tmp(tmp2[63]);
  const stateFromStores14 = tmpResult60.useStateFromStores(tmp130, tmp131, tmp132);
  tmp39(tmp2[75])(id);
  if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
    const items40 = [VoiceStateStore];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[86] = items40;
    tmp136 = items40;
  } else {
    class Ds {
      constructor() {
        const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
        return canChatInGuildResult;
      }
    }
  }
  if (cResult[87] !== stateFromStores2) {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
    const items41 = [stateFromStores2];
    class Lt {
      constructor() {
        return mediaPostEmbeds.getMediaPostEmbeds();
      }
    }
    cResult[87] = stateFromStores2;
    cResult[88] = Us;
    cResult[89] = items41;
    tmp138 = items41;
    tmp137 = Us;
  } else {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
    tmp138 = cResult[89];
  }
  const tmpResult61 = tmp(tmp2[63]);
  const stateFromStores15 = tmpResult61.useStateFromStores(tmp136, tmp137, tmp138);
  if (cResult[90] === Symbol.for("react.memo_cache_sentinel")) {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
    const items42 = [RTCConnectionStore];
    class Hs {
      constructor() {
        return channelId.getChannelId();
      }
    }
    const items43 = [];
    cResult[90] = items42;
    cResult[91] = Hs;
    cResult[92] = items43;
    tmp142 = items43;
    tmp141 = Hs;
    tmp140 = items42;
  } else {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
    tmp141 = cResult[91];
    tmp142 = cResult[92];
  }
  const tmpResult62 = tmp(tmp2[63]);
  const stateFromStores16 = tmpResult62.useStateFromStores(tmp140, tmp141, tmp142);
  if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
    const items44 = [ReferencedMessageStore];
    class Hs {
      constructor() {
        return channelId.getChannelId();
      }
    }
    cResult[93] = items44;
  } else {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
  }
  if (cResult[94] === channel.guild_id) {
    class Us {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2);
      }
    }
  }
  class Ks {
    constructor() {
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
  }
  cResult[94] = channel.guild_id;
  cResult[95] = channel.id;
  cResult[96] = channel.parent_id;
  cResult[97] = channel.type;
  cResult[98] = Ks;
}) : (function MessagesConnected(ref) {
  let TIER_2;
  let acceptingGiftCodes;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let buildOverrides;
  let channelId;
  let communicationDisabledVersion;
  let displayNameStylesEnabled;
  let eligible;
  let fetchingSkuIds;
  let guildTemplates;
  let hasLoadedExperiments;
  let id2;
  let invalidAppDirectoryEmbedApplicationIds;
  let isFetchingCurrentQuests;
  let items80;
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
  let tmp27;
  let tmp69;
  let tmp70;
  let unloadableContentEntryMessageIds;
  let unloadedContentEntryMessageIds;
  let useReducedMotion;
  const f111074 = () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  };
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let id;
  let stateFromStores2;
  let stateFromStores7;
  let closure_7;
  let channelSummariesExperiment;
  let items66;
  let stateFromStoresArray9;
  let channel = merged.channel;
  let tmp2 = channel;
  let tmp3 = id;
  let obj = channel(id[63]);
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  const items2 = [GuildStore];
  let tmp5 = GuildStore;
  const obj2 = channel(id[63]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const items3 = [AuthenticationStore];
  const tmp2Result = tmp2(tmp3[63]);
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp2(tmp3[67]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp2(tmp3[67]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp2(tmp3[67]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp2(tmp3[67]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp2(tmp3[67]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp2(tmp3[67]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp2(tmp3[67]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp2(tmp3[67]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp2(tmp3[67]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const items4 = [ThemeStore];
  const tmp2Result77 = tmp2(tmp3[63]);
  const stateFromStores3 = tmp2Result77.useStateFromStores(items4, () => theme.theme, []);
  const tmp2Result78 = tmp2(tmp3[68]);
  const isMessageSwipeActionsEnabled = tmp2Result78.useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp20 = closure_71(stateFromStores);
  const tmp21 = closure_72;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  tmp21(stateFromStores, application_id);
  [tmp27, r10112] = stateFromStores1(stateFromStores(tmp3[69])(stateFromStores, channel), 2);
  stateFromStores1(stateFromStores(tmp3[69])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const tmp2Result79 = tmp2(tmp3[63]);
  const stateFromStores4 = tmp2Result79.useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmp2Result80 = tmp2(tmp3[70]);
  const fetchVoiceChannelInviteStartTimes = tmp2Result80.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const tmp2Result81 = tmp2(tmp3[63]);
  const stateFromStoresObject = tmp2Result81.useStateFromStoresObject(items6, () => {
    const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    return obj;
  }, []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const items7 = [stateFromStoresArray9];
  const tmp2Result82 = tmp2(tmp3[63]);
  const stateFromStoresArray = tmp2Result82.useStateFromStoresArray(items7, () => stateFromStoresArray9.getFetchingOrFailedFetchingIds());
  const items8 = [items66];
  const tmp2Result83 = tmp2(tmp3[63]);
  const stateFromStoresArray1 = tmp2Result83.useStateFromStoresArray(items8, () => items66.getFetchingIds());
  const items9 = [SKUStore];
  const tmp2Result84 = tmp2(tmp3[63]);
  const stateFromStoresArray2 = tmp2Result84.useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const items10 = [channelSummariesExperiment];
  const items11 = [id];
  const tmp2Result85 = tmp2(tmp3[63]);
  const stateFromStoresArray3 = tmp2Result85.useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const items12 = [channelSummariesExperiment, PresenceStore];
  const tmp2Result86 = tmp2(tmp3[63]);
  const stateFromStoresArray4 = tmp2Result86.useStateFromStoresArray(items12, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop2(iter) {
      let closure_0 = iter;
      const userIds = iter.userIds;
      iter = userIds.values();
      const value = iter.next().value;
      let findActivityResult;
      if (null != value) {
        findActivityResult = closure_2_51.findActivity(value, (application_id) => application_id.application_id === applicationId.applicationId);
      }
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
  const items13 = [channelSummariesExperiment];
  const tmp2Result87 = tmp2(tmp3[63]);
  const stateFromStoresArray5 = tmp2Result87.useStateFromStoresArray(items13, () => {
    set = new Set();
    const embeddedActivitiesByChannel = channelSummariesExperiment.getEmbeddedActivitiesByChannel();
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
  const items14 = [channelSummariesExperiment];
  const tmp2Result88 = tmp2(tmp3[63]);
  const stateFromStoresArray6 = tmp2Result88.useStateFromStoresArray(items14, () => {
    let tmp6;
    const launchStates = channelSummariesExperiment.getLaunchStates();
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
  const tmp2Result89 = tmp2(tmp3[63]);
  const stateFromStores5 = tmp2Result89.useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const items16 = [GuildTemplateStore];
  const tmp2Result90 = tmp2(tmp3[63]);
  const stateFromStores6 = tmp2Result90.useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const items17 = [GameOrganizationInviteStore];
  const tmp2Result91 = tmp2(tmp3[63]);
  stateFromStores7 = tmp2Result91.useStateFromStores(items17, () => invites.getInvites(), []);
  const items18 = [tmp5];
  const items19 = [stateFromStores7];
  const tmp2Result92 = tmp2(tmp3[63]);
  const stateFromStoresArray7 = tmp2Result92.useStateFromStoresArray(items18, () => {
    const items = [];
    const values = stateFromStores7.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = nextResult.state === constants2.RESOLVED;
      if (tmp5) {
        tmp5 = null != GuildStore.getGuild(tmp3.guildId);
      }
      if (tmp5) {
        let arr = items.push(tmp3.guildId);
      }
      continue;
    }
    return items;
  }, items19);
  const items20 = [BuildOverrideStore];
  const tmp2Result93 = tmp2(tmp3[63]);
  const stateFromStores8 = tmp2Result93.useStateFromStores(items20, () => buildOverrides.getBuildOverrides(), []);
  const tmp2Result94 = tmp2(tmp3[71]);
  const codedLinksExperimentEmbeds = tmp2Result94.useCodedLinksExperimentEmbeds();
  const tmp2Result95 = tmp2(tmp3[72]);
  const quests1 = tmp2Result95.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_7 = mapped.filter(tmp2(tmp3[66]).isNotNullish);
  const items21 = [ReferralTrialStore];
  const tmp2Result96 = tmp2(tmp3[63]);
  const stateFromStoresArray8 = tmp2Result96.useStateFromStoresArray(items21, () => {
    const mapped = closure_7.map((item) => {
      relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
      id = undefined;
      if (relevantUserTrialOffer != null) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const tmp2Result97 = tmp2(tmp3[73]);
  const trialOffer = tmp2Result97.useTrialOffer(closure_67);
  const items22 = [UserStore];
  const tmp2Result98 = tmp2(tmp3[63]);
  const stateFromStores9 = tmp2Result98.useStateFromStores(items22, () => {
    const obj = stateFromStores(id[74]);
    return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
  });
  const items23 = [EditMessageStore];
  const items24 = [id];
  const tmp2Result99 = tmp2(tmp3[63]);
  const stateFromStores10 = tmp2Result99.useStateFromStores(items23, () => EditMessageStore.getEditingMessageId(id), items24);
  const items25 = [PendingReplyStore];
  const items26 = [id];
  const tmp2Result100 = tmp2(tmp3[63]);
  const stateFromStores11 = tmp2Result100.useStateFromStores(items25, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items26);
  const items27 = [ReadStateStore];
  const items28 = [id];
  const tmp2Result101 = tmp2(tmp3[63]);
  const stateFromStores12 = tmp2Result101.useStateFromStores(items27, () => ReadStateStore.getOldestUnreadMessageId(id), items28);
  const items29 = [GuildVerificationStore];
  const items30 = [guildId];
  const tmp2Result102 = tmp2(tmp3[63]);
  const stateFromStores13 = tmp2Result102.useStateFromStores(items29, () => {
    const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items30);
  const items31 = [PermissionStore];
  const items32 = [channel];
  const tmp2Result103 = tmp2(tmp3[63]);
  const stateFromStores14 = tmp2Result103.useStateFromStores(items31, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items32);
  const items33 = [VoiceStateStore];
  const items34 = [stateFromStores2];
  const tmp56 = stateFromStores(tmp3[75])(id);
  const tmp2Result104 = tmp2(tmp3[63]);
  const stateFromStores15 = tmp2Result104.useStateFromStores(items33, () => VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite4, stateFromStores2), items34);
  const items35 = [RTCConnectionStore];
  const tmp2Result105 = tmp2(tmp3[63]);
  const stateFromStores16 = tmp2Result105.useStateFromStores(items35, () => channelId.getChannelId(), []);
  const items36 = [ReferencedMessageStore];
  const items37 = [channel];
  const tmp2Result106 = tmp2(tmp3[63]);
  const stateFromStores17 = tmp2Result106.useStateFromStores(items36, () => {
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
  }, items37);
  const items38 = [GiftCodeStore];
  const tmp2Result107 = tmp2(tmp3[63]);
  const stateFromStoresObject1 = tmp2Result107.useStateFromStoresObject(items38, () => {
    const obj = { resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() };
    return obj;
  }, []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const items39 = [ChannelRTCStore];
  const items40 = [id];
  const tmp2Result108 = tmp2(tmp3[63]);
  const stateFromStores18 = tmp2Result108.useStateFromStores(items39, () => ChannelRTCStore.getParticipants(id).length, items40);
  const items41 = [UploadStore];
  const items42 = [id];
  const tmp2Result109 = tmp2(tmp3[63]);
  const stateFromStores19 = tmp2Result109.useStateFromStores(items41, () => UploadStore.getFiles(id), items42);
  const items43 = [ReferencedMessageStore];
  const items44 = [id];
  const tmp2Result110 = tmp2(tmp3[63]);
  const stateFromStores20 = tmp2Result110.useStateFromStores(items43, () => ReferencedMessageStore.getReplyIdsForChannel(id), items44);
  const items45 = [closure_7];
  const tmp2Result111 = tmp2(tmp3[63]);
  const stateFromStoresObject2 = tmp2Result111.useStateFromStoresObject(items45, () => ({ useReducedMotion: closure_7.useReducedMotion, roleStyle: closure_7.roleStyle, officialMessageStyle: closure_7.officialMessageStyle, saturation: closure_7.saturation, displayNameStylesEnabled: closure_7.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const items46 = [ThreadMessageStore];
  const items47 = [id];
  const tmp2Result112 = tmp2(tmp3[63]);
  const stateFromStores21 = tmp2Result112.useStateFromStores(items46, () => ThreadMessageStore.getChannelThreadsVersion(id), items47);
  const items48 = [InteractionStore];
  const tmp2Result113 = tmp2(tmp3[63]);
  const stateFromStoresObject3 = tmp2Result113.useStateFromStoresObject(items48, () => messageInteractionStates.getMessageInteractionStates());
  const items49 = [LocalInteractionComponentStateStore];
  const tmp2Result114 = tmp2(tmp3[63]);
  [tmp69, tmp70] = stateFromStores1(tmp2Result114.useStateFromStores(items49, f111074, [], tmp2(tmp3[76]).isVersionEqual), 2);
  stateFromStores1(tmp2Result114.useStateFromStores(items49, f111074, [], tmp2(tmp3[76]).isVersionEqual), 2);
  const items50 = [ExperimentStore];
  const tmp2Result115 = tmp2(tmp3[63]);
  let stateFromStores22 = tmp2Result115.useStateFromStores(items50, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmp2Result116 = tmp2(tmp3[77]);
  const isSpamMessageRequest = tmp2Result116.useIsSpamMessageRequest(channel.id);
  let tmp74 = null != stateFromStores;
  const tmp2Result117 = tmp2(tmp3[78]);
  const isMessageRequest = tmp2Result117.useIsMessageRequest(channel.id);
  const tmp25 = stateFromStores1;
  const tmp28 = InviteStore;
  const tmp54 = PermissionStore;
  const tmp57 = VoiceStateStore;
  if (tmp74) {
    tmp74 = stateFromStores.ready || stateFromStores.cached;
  }
  const items51 = [GuildScheduledEventStore];
  const tmp76 = null != stateFromStores && stateFromStores.cached;
  const tmp77 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmp2Result118 = tmp2(tmp3[63]);
  const stateFromStores23 = tmp2Result118.useStateFromStores(items51, () => rsvpVersion.getRsvpVersion());
  const items52 = [GuildAutomodMessageStore];
  const tmp2Result119 = tmp2(tmp3[63]);
  const stateFromStores24 = tmp2Result119.useStateFromStores(items52, () => messagesVersion.getMessagesVersion());
  const items53 = [GuildMemberStore];
  const tmp2Result120 = tmp2(tmp3[63]);
  const stateFromStores25 = tmp2Result120.useStateFromStores(items53, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const items54 = [GuildMemberStore];
  const items55 = [guildId, stateFromStores];
  const tmp2Result121 = tmp2(tmp3[63]);
  const stateFromStoresObject4 = tmp2Result121.useStateFromStoresObject(items54, () => {
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
  }, items55);
  const items56 = [tmp54];
  const tmp2Result122 = tmp2(tmp3[63]);
  const stateFromStores26 = tmp2Result122.useStateFromStores(items56, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  let id1;
  const useCurrentUserCommunicationDisabled = tmp2(tmp3[80]).useCurrentUserCommunicationDisabled;
  tmp2(tmp3[80]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const items57 = [LocaleStore];
  const tmp85 = tmp25(useCurrentUserCommunicationDisabled(id1), 2)[1];
  const tmp2Result124 = tmp2(tmp3[63]);
  const stateFromStores27 = tmp2Result124.useStateFromStores(items57, () => locale.locale);
  const tmp2Result125 = tmp2(tmp3[81]);
  const isPaymentsBlocked = tmp2Result125.useIsPaymentsBlocked();
  const items58 = [JoinedThreadsStore];
  const tmp2Result126 = tmp2(tmp3[63]);
  const stateFromStores28 = tmp2Result126.useStateFromStores(items58, () => {
    const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
    return hasJoinedResult;
  });
  const items59 = [MediaPostSharePromptStore];
  const tmp2Result127 = tmp2(tmp3[63]);
  const stateFromStores29 = tmp2Result127.useStateFromStores(items59, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const items60 = [PushFeedbackStore];
  const tmp2Result128 = tmp2(tmp3[63]);
  const stateFromStores30 = tmp2Result128.useStateFromStores(items60, () => eligible.isEligible());
  const items61 = [CacheStore];
  const tmp2Result129 = tmp2(tmp3[63]);
  const stateFromStores31 = tmp2Result129.useStateFromStores(items61, () => lazyCacheStatus.getLazyCacheStatus());
  const tmp2Result130 = tmp2(tmp3[82]);
  const messageJumpAndroidKeyboardHeight = tmp2Result130.useMessageJumpAndroidKeyboardHeight();
  const tmp93 = stateFromStores(tmp3[83])();
  const tmp2Result131 = tmp2(tmp3[84]);
  channelSummariesExperiment = tmp2Result131.useChannelSummariesExperiment(channel);
  const items62 = [SummaryStore];
  const items63 = [channelSummariesExperiment, channel.id];
  const tmp2Result132 = tmp2(tmp3[63]);
  const stateFromStores32 = tmp2Result132.useStateFromStores(items62, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items63);
  const items64 = [channel.id, , , , ];
  ({ hasMoreAfter: arr68[1], hasMoreBefore: arr68[2], length: arr68[3], ready: arr68[4] } = stateFromStores);
  const tmp96 = stateFromStores(tmp3[85])(channel.id);
  const effect = stateFromStores7.useEffect(() => {
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
  }, items64);
  const tmp2Result133 = tmp2(tmp3[87]);
  const shouldTrackAnnouncementMessageViews = tmp2Result133.useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result134 = tmp2(tmp3[87]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp2Result134.useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result135 = tmp2(tmp3[87]);
  const shouldTrackOfficialMessageViews = tmp2Result135.useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result136 = tmp2(tmp3[87]);
  const shouldTrackVoiceInviteEmbedViews = tmp2Result136.useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result137 = tmp2(tmp3[88]);
  const shouldDisplaySpoilerObscurity = tmp2Result137.useShouldDisplaySpoilerObscurity(channel);
  const items65 = [id, guildId];
  const tmp2Result138 = tmp2(tmp3[89]);
  const isAgeVerified = tmp2Result138.useIsAgeVerified();
  const effect1 = stateFromStores7.useEffect(() => {
    let obj = stateFromStores(id[90]);
    obj.handleChannelSelect();
    return () => {
      const obj = stateFromStores(id[90]);
      obj.handleChannelSelect();
    };
  }, items65);
  const tmp2Result139 = tmp2(tmp3[91]);
  const shouldDisableInteractiveComponents = tmp2Result139.useShouldDisableInteractiveComponents(channel.id);
  items66 = [];
  const tmp106 = closure_30(channel.id);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items66.push(message_id);
    }
  });
  const items67 = [ExplicitMediaStore];
  const items68 = [id];
  const tmp108 = closure_31(items66);
  const tmp2Result140 = tmp2(tmp3[63]);
  const stateFromStores33 = tmp2Result140.useStateFromStores(items67, () => ExplicitMediaStore.getChannelFpInfo(id), items68);
  const items69 = [FamilyCenterPendingConnectionStore];
  const tmp2Result141 = tmp2(tmp3[63]);
  const stateFromStores34 = tmp2Result141.useStateFromStores(items69, () => pendingConnection.getPendingConnection());
  const tmp111 = stateFromStores(tmp3[92])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp3[93])(stateFromStores));
  stateFromStores(tmp3[93])(stateFromStores);
  const items70 = [UserStore];
  const tmp2Result142 = tmp2(tmp3[63]);
  const stateFromStores35 = tmp2Result142.useStateFromStores(items70, () => {
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
  const items71 = [BasicGuildStore];
  const tmp2Result143 = tmp2(tmp3[63]);
  const stateFromStores36 = tmp2Result143.useStateFromStores(items71, () => version.getVersion());
  const tmp2Result144 = tmp2(tmp3[94]);
  const colorStore = tmp2Result144.useColorStore((palette) => Object.keys(palette.palette).length);
  const items72 = [EmojiStore];
  const tmp2Result145 = tmp2(tmp3[63]);
  const stateFromStores37 = tmp2Result145.useStateFromStores(items72, () => EmojiStore.getGuildEmoji(guildId));
  const items73 = [tmp57];
  const items74 = [guildId];
  const tmp2Result146 = tmp2(tmp3[63]);
  const stateFromStores38 = tmp2Result146.useStateFromStores(items73, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      const obj = messages_MessagesUtils;
      return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items74);
  const items75 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp28, ChannelStore];
  const tmp2Result147 = tmp2(tmp3[63]);
  const stateFromStoresObject5 = tmp2Result147.useStateFromStoresObject(items75, () => {
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
  const items76 = [SessionsStore];
  const tmp2Result148 = tmp2(tmp3[63]);
  stateFromStoresArray9 = tmp2Result148.useStateFromStoresArray(items76, () => {
    const items = [...closure_1_54.getRemoteActivities(), ...closure_1_54.getHiddenActivities()];
    return items.filter(channel(id[66]).isNotNullish);
  });
  const items77 = [ActivityLauncherStore];
  const tmp2Result149 = tmp2(tmp3[63]);
  const stateFromStoresObject6 = tmp2Result149.useStateFromStoresObject(items77, () => stateFromStoresArray9.reduce((acc, application_id) => {
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
  const items78 = [AuthorizedAppsStore];
  const tmp2Result150 = tmp2(tmp3[63]);
  const stateFromStoresArray10 = tmp2Result150.useStateFromStoresArray(items78, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const items79 = [UserStore];
  const tmp2Result151 = tmp2(tmp3[63]);
  const stateFromStores39 = tmp2Result151.useStateFromStores(items79, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmp2Result152 = tmp2(tmp3[96]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2Result152.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: tmp2(tmp3[99]).Profiles.Messages, children: items80 };
  const tmp24Result = stateFromStores(tmp3[99]);
  let isThreadResult = channel.isThread();
  const tmp124 = closure_70;
  if (isThreadResult) {
    isThreadResult = closure_69(tmp24(tmp3[97]), { absolute: true });
  }
  items80 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp111, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp74, isMessagesCached: tmp76, isMessagesAckable: tmp77, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp20, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, joinedGameOrganizationGuildIds: stateFromStoresArray7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp56, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp69, interactionComponentStatesVersion: tmp70, hasLoadedExperiments: stateFromStores22, guildSystemChannelFlags: systemChannelFlags, currentUserCommunicationDisabled: tmp85, renderCommunicationDisabled: stateFromStores26, userSettingsLocale: stateFromStores27, paymentsBlocked: isPaymentsBlocked, isFollowingForumPost: stateFromStores28, showMediaPostSharePrompt: stateFromStores29, showPushFeedback: stateFromStores30, cacheStoreLoaded: "initializing" !== stateFromStores31, androidKeyboardHeight: messageJumpAndroidKeyboardHeight, selectedSummary: stateFromStores32, selectedConversation: tmp96, keyboardType: tmp93, shouldTrackAnnouncementMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackOfficialMessageViews, shouldTrackVoiceInviteEmbedViews, shouldObscureSpoiler: shouldDisplaySpoilerObscurity, shouldDisableInteractiveComponents, channelPolls: tmp106, messageReferencePolls: tmp108, explicitMediaFalsePositiveInfo: stateFromStores33, familyCenterPendingConnection: stateFromStores34, threadStartingReferenceMessage: stateFromStores17, unloadedContentEntryMessageIds, unloadableContentEntryMessageIds, resolvedReferralTrialOfferIds: stateFromStoresArray8, referralTrialOfferId: id2, isPremiumTier2User: stateFromStores9, activityInviteMessageIds: tmp27, guildInviteColorsFetched: colorStore, isAgeVerified, guildEmojis: stateFromStores37, enableSwipeActions: isMessageSwipeActionsEnabled, selfActivities: stateFromStoresArray9, activityLaunchJoinStates: stateFromStoresObject6, authorizedAppsTokens: stateFromStoresArray10, currentUserDisplayNameStyles: stateFromStores39, voiceInviteDataByChannelId: stateFromStoresObject5, officialMessageColor };
  const tmp128 = closure_69;
  const tmp24Result2 = stateFromStores(tmp3[98]);
  if (stateFromStores22) {
    stateFromStores22 = tmp74;
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
  items80[1] = tmp128(tmp24Result2, obj4);
  return tmp124(tmp24Result, obj3);
});
tmp6.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default tmp6;
