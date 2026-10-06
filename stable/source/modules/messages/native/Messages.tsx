// Module ID: 10836
// Function ID: 10837
// Name: Messages
// Dependencies: [32, 19, 4826, 2050, 7600, 5064, 10837, 6900, 4853, 9794, 5772, 4752, 6712, 6586, 7401, 7384, 6950, 6881, 7574, 7387, 10838, 7388, 6529, 5050, 10839, 6876, 10840, 7097, 7017, 9538, 4474, 6725, 2115, 1194, 502, 2051, 7098, 10841, 2111, 2073, 5726, 4818, 5057, 4472, 4877, 4860, 4852, 4855, 7261, 1378, 4856, 5823, 10868, 4861, 1086, 1380, 21, 558, 576, 12, 504, 568, 6585, 1376, 2027, 10869, 10876, 10880, 10883, 10670, 6873, 4491, 7427, 5745, 9560, 9561, 9627, 7423, 6838, 10887, 4705, 9540, 7335, 7353, 10483, 9790, 7723, 5049, 9791, 7573, 10888, 10891, 7593, 7158, 10892, 5438, 10895, 11315, 2]

// Module 10836 (Messages)
import _modDef12 from "module_12" /* 12 */;
import shallowEqual from "shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6585 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9627 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10483 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 7600 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10837 */;
import CacheStore from "CacheStore" /* 6900 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4853 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 9794 */;
import EmojiStore from "EmojiStore" /* 5772 */;
import ExperimentStore from "ExperimentStore" /* 4752 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6712 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6586 */;
import BasicGuildStore from "BasicGuildStore" /* 7401 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7384 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6950 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6881 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7574 */;
import InteractionStore from "InteractionStore" /* 7387 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 10838 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7388 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6529 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5050 */;
import PollsInteractionStore from "PollsInteractionStore" /* 10839 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6876 */;
import PushFeedbackStore from "PushFeedbackStore" /* 10840 */;
import PendingReplyStore from "PendingReplyStore" /* 7097 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7017 */;
import SummaryStore from "SummaryStore" /* 9538 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4474 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6725 */;
import LocaleStore from "LocaleStore" /* 2115 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import EditMessageStore from "EditMessageStore" /* 7098 */;
import GiftCodeStore from "GiftCodeStore" /* 10841 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildStore from "GuildStore" /* 2073 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5726 */;
import InviteStore from "InviteStore" /* 4818 */;
import MessageStore from "MessageStore" /* 5057 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import PresenceStore from "PresenceStore" /* 4877 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import ReadStateStore from "ReadStateStore" /* 4852 */;
import SessionsStore from "SessionsStore" /* 4855 */;
import UploadStore from "UploadStore" /* 7261 */;
import UserStore from "UserStore" /* 1378 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import SKUStore from "SKUStore" /* 5823 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 10868 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4861 */;
import Constants from "Constants" /* 1086 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _loopResult, _require, channel, closure_6, dependencyMap, findActivity, invites, messageReference, relevantUserTrialOffer, set, state, voiceStatesForChannelAlt;

let closure_27;
let closure_28;
let closure_58;
let closure_59;
let closure_60;
let closure_61;
let closure_62;
let closure_63;
let closure_64;
let closure_65;
let closure_66;
let _slicedToArray = _slicedToArray_mod;
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = PollsInteractionStore);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = Constants);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = PremiumConstants);
({ jsx: closure_65, jsxs: closure_66 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_67 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
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
}) : ((arg0) => {
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
let closure_68 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
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
}) : ((arg0, arg1) => {
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
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1) => {
  let TIER_2;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let channelId;
  let closure_3;
  let communicationDisabledVersion;
  let eligible;
  let fetchingIds;
  let fetchingSkuIds;
  let first;
  let found1;
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
  let theme;
  let tmp10;
  let tmp102;
  let tmp103;
  let tmp104;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp112;
  let tmp113;
  let tmp114;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp12;
  let tmp122;
  let tmp123;
  let tmp124;
  let tmp127;
  let tmp128;
  let tmp129;
  let tmp131;
  let tmp132;
  let tmp133;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp48;
  let tmp49;
  let tmp52;
  let tmp53;
  let tmp56;
  let tmp57;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp64;
  let tmp65;
  let tmp67;
  let tmp68;
  let tmp7;
  let tmp70;
  let tmp71;
  let tmp73;
  let tmp74;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp93;
  let tmp94;
  let tmp98;
  let tmp99;
  let version;
  const tmp = channel;
  let tmp2 = id;
  let obj = channel(id[58]);
  const cResult = obj.c(327);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = MessageStore;
    let items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    function ye() {
      return MessageStore.getMessages(channel.id);
    }
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = ye;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = ye;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[60]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  id = channel.id;
  if (cResult[4] !== channel) {
    const guildId = channel.getGuildId();
    cResult[4] = channel;
    cResult[5] = guildId;
    tmp8 = guildId;
  } else {
    tmp8 = cResult[5];
  }
  _slicedToArray = tmp8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp11 = GuildStore;
    const items2 = [GuildStore];
    cResult[6] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] !== tmp8) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    cResult[7] = tmp8;
    cResult[8] = Pe;
    tmp12 = Pe;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  const tmpResult30 = tmp(tmp2[60]);
  const stateFromStores1 = tmpResult30.useStateFromStores(tmp10, tmp12);
  if (stateFromStores1 != null) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items3 = [AuthenticationStore];
    class Oe {
      constructor() {
        return id.getId();
      }
    }
    const items4 = [];
    cResult[9] = items3;
    cResult[10] = Oe;
    cResult[11] = items4;
    tmp16 = items4;
    tmp15 = Oe;
    tmp14 = items3;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp15 = cResult[10];
    tmp16 = cResult[11];
  }
  const tmpResult31 = tmp(tmp2[60]);
  const stateFromStores2 = tmpResult31.useStateFromStores(tmp14, tmp15, tmp16);
  const InlineAttachmentMedia = tmp(tmp2[64]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[64]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[64]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[64]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[64]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[64]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[64]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[64]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[64]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items5 = [ThemeStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    const items6 = [];
    cResult[12] = Ge;
    cResult[13] = items6;
    cResult[14] = items5;
    tmp29 = items5;
    tmp28 = items6;
    tmp27 = Ge;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp28 = cResult[13];
    tmp29 = cResult[14];
  }
  const tmpResult32 = tmp(tmp2[60]);
  const stateFromStores3 = tmpResult32.useStateFromStores(tmp29, tmp27, tmp28);
  const tmpResult33 = tmp(tmp2[65]);
  const isMessageSwipeActionsEnabled = tmpResult33.useIsMessageSwipeActionsEnabled();
  closure_67(stateFromStores);
  const tmp33 = closure_68;
  if (channel.linkedLobby != null) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  tmp33(stateFromStores, undefined);
  const first1 = _slicedToArray(stateFromStores(tmp2[66])(stateFromStores, channel), 1)[0];
  const tmp35 = stateFromStores;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items7 = [InviteStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    const items8 = [];
    cResult[15] = items7;
    cResult[16] = tmp40;
    cResult[17] = items8;
    tmp39 = items8;
    tmp38 = tmp40;
    tmp37 = items7;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp38 = cResult[16];
    tmp39 = cResult[17];
  }
  const tmpResult34 = tmp(tmp2[60]);
  const stateFromStores4 = tmpResult34.useStateFromStores(tmp37, tmp38, tmp39);
  const tmpResult35 = tmp(tmp2[67]);
  const fetchVoiceChannelInviteStartTimes = tmpResult35.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    const items10 = [];
    cResult[18] = items9;
    cResult[19] = tmp46;
    cResult[20] = items10;
    tmp45 = items10;
    tmp44 = tmp46;
    tmp43 = items9;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp44 = cResult[19];
    tmp45 = cResult[20];
  }
  const tmpResult36 = tmp(tmp2[60]);
  const stateFromStoresObject = tmpResult36.useStateFromStoresObject(tmp43, tmp44, tmp45);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items11 = [ApplicationStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[21] = items11;
    cResult[22] = tmp50;
    tmp49 = tmp50;
    tmp48 = items11;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp49 = cResult[22];
  }
  const tmpResult37 = tmp(tmp2[60]);
  const stateFromStoresArray = tmpResult37.useStateFromStoresArray(tmp48, tmp49);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items12 = [ApplicationAssetsStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[23] = items12;
    cResult[24] = tmp54;
    tmp53 = tmp54;
    tmp52 = items12;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp53 = cResult[24];
  }
  const tmpResult38 = tmp(tmp2[60]);
  const stateFromStoresArray1 = tmpResult38.useStateFromStoresArray(tmp52, tmp53);
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items13 = [SKUStore];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[25] = items13;
    cResult[26] = tmp58;
    tmp57 = tmp58;
    tmp56 = items13;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    tmp57 = cResult[26];
  }
  const tmpResult39 = tmp(tmp2[60]);
  const stateFromStoresArray2 = tmpResult39.useStateFromStoresArray(tmp56, tmp57);
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
    const items14 = [found1];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[27] = items14;
    tmp60 = items14;
  } else {
    class Pe {
      constructor() {
        return GuildStore.getGuild(closure_3);
      }
    }
  }
  if (cResult[28] !== id) {
    class Ft {
      constructor() {
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[63]).isNotNullish);
      }
    }
    const items15 = [id];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[28] = id;
    cResult[29] = Ft;
    cResult[30] = items15;
    tmp62 = items15;
    tmp61 = Ft;
  } else {
    class Ft {
      constructor() {
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[63]).isNotNullish);
      }
    }
    tmp62 = cResult[30];
  }
  const tmpResult40 = tmp(tmp2[60]);
  const stateFromStoresArray3 = tmpResult40.useStateFromStoresArray(tmp60, tmp61, tmp62);
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class Ft {
      constructor() {
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[63]).isNotNullish);
      }
    }
    const items16 = [found1, ];
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    items16[1] = PresenceStore;
    cResult[31] = items16;
    tmp64 = items16;
  } else {
    class Ft {
      constructor() {
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[63]).isNotNullish);
      }
    }
  }
  if (cResult[32] !== id) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    cResult[32] = id;
    class Ge {
      constructor() {
        return theme.theme;
      }
    }
    cResult[33] = Mt;
    tmp65 = Mt;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
  const tmpResult41 = tmp(tmp2[60]);
  const stateFromStoresArray4 = tmpResult41.useStateFromStoresArray(tmp64, tmp65);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    const items17 = [found1];
    class Rt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          let closure_0 = index;
          let item = arr.forEach(() => { /* body not rendered: F150543 */ });
        });
        return Array.from(set);
      }
    }
    cResult[34] = items17;
    cResult[35] = Rt;
    tmp68 = Rt;
    tmp67 = items17;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    tmp68 = cResult[35];
  }
  const tmpResult42 = tmp(tmp2[60]);
  const stateFromStoresArray5 = tmpResult42.useStateFromStoresArray(tmp67, tmp68);
  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    const items18 = [found1];
    class Tt {
      constructor() {
        let tmp6;
        const launchStates = found1.getLaunchStates();
        const items = [];
        const tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp5 = closure_3(tmp3, 2);
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
      }
    }
    cResult[36] = items18;
    cResult[37] = Tt;
    tmp71 = Tt;
    tmp70 = items18;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    tmp71 = cResult[37];
  }
  const tmpResult43 = tmp(tmp2[60]);
  const stateFromStoresArray6 = tmpResult43.useStateFromStoresArray(tmp70, tmp71);
  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    class Tt {
      constructor() {
        let tmp6;
        const launchStates = found1.getLaunchStates();
        const items = [];
        const tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp5 = closure_3(tmp3, 2);
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
      }
    }
    cResult[38] = items19;
    cResult[39] = tmp75;
    tmp74 = tmp75;
    tmp73 = items19;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    tmp74 = cResult[39];
  }
  const tmpResult44 = tmp(tmp2[60]);
  const stateFromStores5 = tmpResult44.useStateFromStores(tmp73, tmp74);
  if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    class Gt {
      constructor() {
        return guildTemplates.getGuildTemplates();
      }
    }
    const items21 = [];
    cResult[40] = items20;
    cResult[41] = Gt;
    cResult[42] = items21;
    tmp79 = items21;
    tmp78 = Gt;
    tmp77 = items20;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    tmp78 = cResult[41];
    tmp79 = cResult[42];
  }
  const tmpResult45 = tmp(tmp2[60]);
  const stateFromStores6 = tmpResult45.useStateFromStores(tmp77, tmp78, tmp79);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    const items22 = [BuildOverrideStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    const items23 = [];
    cResult[43] = items22;
    cResult[44] = Bt;
    cResult[45] = items23;
    tmp83 = items23;
    tmp82 = Bt;
    tmp81 = items22;
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    tmp82 = cResult[44];
    tmp83 = cResult[45];
  }
  const tmpResult46 = tmp(tmp2[60]);
  const stateFromStores7 = tmpResult46.useStateFromStores(tmp81, tmp82, tmp83);
  const tmpResult47 = tmp(tmp2[68]);
  const codedLinksExperimentEmbeds = tmpResult47.useCodedLinksExperimentEmbeds();
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    cResult[46] = tmp87;
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
  } else {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
  const tmpResult48 = tmp(tmp2[69]);
  const quests1 = tmpResult48.useQuests(tmp86);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[47] !== stateFromStores) {
    class Mt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          let closure_0 = iter;
          const userIds = iter.userIds;
          findActivity = findActivity.findActivity;
          iter = userIds.values();
          const findActivityResult = findActivity(iter.next().value, () => { /* body not rendered: F150542 */ });
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
    if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
      class Qt {
        constructor(type) {
          return type.type === constants.PREMIUM_REFERRAL;
        }
      }
      cResult[49] = Qt;
      class Bt {
        constructor() {
          return BuildOverrideStore.getBuildOverrides();
        }
      }
    } else {
      class Qt {
        constructor(type) {
          return type.type === constants.PREMIUM_REFERRAL;
        }
      }
    }
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(referralTrialOfferId) {
          return referralTrialOfferId.referralTrialOfferId;
        }
      }
      cResult[50] = Kt;
      class Bt {
        constructor() {
          return BuildOverrideStore.getBuildOverrides();
        }
      }
    } else {
      class Kt {
        constructor(referralTrialOfferId) {
          return referralTrialOfferId.referralTrialOfferId;
        }
      }
    }
    const found = stateFromStores.filter(tmp90);
    let mapped = found.map(tmp91);
    found1 = mapped.filter(tmp(tmp2[63]).isNotNullish);
    cResult[47] = stateFromStores;
    cResult[48] = found1;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  found1 = tmp89;
  if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items24 = [ReferralTrialStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[51] = items24;
    tmp93 = items24;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[52] !== tmp89) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    cResult[52] = tmp89;
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[53] = tmp95;
    tmp94 = tmp95;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  const tmpResult49 = tmp(tmp2[60]);
  const stateFromStoresArray7 = tmpResult49.useStateFromStoresArray(tmp93, tmp94);
  const tmpResult50 = tmp(tmp2[70]);
  const trialOffer = tmpResult50.useTrialOffer(closure_63);
  if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items25 = [UserStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[54] = items25;
    cResult[55] = tmp100;
    tmp99 = tmp100;
    tmp98 = items25;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    tmp99 = cResult[55];
  }
  const tmpResult51 = tmp(tmp2[60]);
  const stateFromStores8 = tmpResult51.useStateFromStores(tmp98, tmp99);
  if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items26 = [EditMessageStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[56] = items26;
    tmp102 = items26;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[57] !== id) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items27 = [id];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[57] = id;
    cResult[58] = tmp105;
    cResult[59] = items27;
    tmp104 = items27;
    tmp103 = tmp105;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    tmp104 = cResult[59];
  }
  const tmpResult52 = tmp(tmp2[60]);
  const stateFromStores9 = tmpResult52.useStateFromStores(tmp102, tmp103, tmp104);
  if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items28 = [PendingReplyStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[60] = items28;
    tmp107 = items28;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[61] !== id) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items29 = [id];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[61] = id;
    cResult[62] = tmp110;
    cResult[63] = items29;
    tmp109 = items29;
    tmp108 = tmp110;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    tmp109 = cResult[63];
  }
  const tmpResult53 = tmp(tmp2[60]);
  const stateFromStores10 = tmpResult53.useStateFromStores(tmp107, tmp108, tmp109);
  if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items30 = [ReadStateStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[64] = items30;
    tmp112 = items30;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[65] !== id) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items31 = [id];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[65] = id;
    cResult[66] = tmp115;
    cResult[67] = items31;
    tmp114 = items31;
    tmp113 = tmp115;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    tmp114 = cResult[67];
  }
  const tmpResult54 = tmp(tmp2[60]);
  const stateFromStores11 = tmpResult54.useStateFromStores(tmp112, tmp113, tmp114);
  if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items32 = [GuildVerificationStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[68] = items32;
    tmp117 = items32;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[69] !== tmp8) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items33 = [tmp8];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[69] = tmp8;
    cResult[70] = tmp120;
    cResult[71] = items33;
    tmp119 = items33;
    tmp118 = tmp120;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    tmp119 = cResult[71];
  }
  const tmpResult55 = tmp(tmp2[60]);
  const stateFromStores12 = tmpResult55.useStateFromStores(tmp117, tmp118, tmp119);
  if (cResult[72] === Symbol.for("react.memo_cache_sentinel")) {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
    const items34 = [PermissionStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[72] = items34;
    tmp122 = items34;
  } else {
    class Kt {
      constructor(referralTrialOfferId) {
        return referralTrialOfferId.referralTrialOfferId;
      }
    }
  }
  if (cResult[73] !== channel) {
    class Is {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items35 = [channel];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[73] = channel;
    cResult[74] = Is;
    cResult[75] = items35;
    tmp124 = items35;
    tmp123 = Is;
  } else {
    class Is {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    tmp124 = cResult[75];
  }
  const tmpResult56 = tmp(tmp2[60]);
  const stateFromStores13 = tmpResult56.useStateFromStores(tmp122, tmp123, tmp124);
  tmp35(tmp2[72])(id);
  if (cResult[76] === Symbol.for("react.memo_cache_sentinel")) {
    class Is {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
    const items36 = [VoiceStateStore];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[76] = items36;
    tmp127 = items36;
  } else {
    class Is {
      constructor() {
        return PermissionStore.can(constants2.SEND_MESSAGES, channel);
      }
    }
  }
  if (cResult[77] !== stateFromStores2) {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
    const items37 = [stateFromStores2];
    class Bt {
      constructor() {
        return BuildOverrideStore.getBuildOverrides();
      }
    }
    cResult[77] = stateFromStores2;
    cResult[78] = As;
    cResult[79] = items37;
    tmp129 = items37;
    tmp128 = As;
  } else {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
    tmp129 = cResult[79];
  }
  const tmpResult57 = tmp(tmp2[60]);
  const stateFromStores14 = tmpResult57.useStateFromStores(tmp127, tmp128, tmp129);
  if (cResult[80] === Symbol.for("react.memo_cache_sentinel")) {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
    const items38 = [RTCConnectionStore];
    class Ds {
      constructor() {
        return channelId.getChannelId();
      }
    }
    const items39 = [];
    cResult[80] = items38;
    cResult[81] = Ds;
    cResult[82] = items39;
    tmp133 = items39;
    tmp132 = Ds;
    tmp131 = items38;
  } else {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
    tmp132 = cResult[81];
    tmp133 = cResult[82];
  }
  const tmpResult58 = tmp(tmp2[60]);
  const stateFromStores15 = tmpResult58.useStateFromStores(tmp131, tmp132, tmp133);
  if (cResult[83] === Symbol.for("react.memo_cache_sentinel")) {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
    const items40 = [ReferencedMessageStore];
    class Ds {
      constructor() {
        return channelId.getChannelId();
      }
    }
    cResult[83] = items40;
  } else {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
  }
  if (cResult[84] === channel.guild_id) {
    class As {
      constructor() {
        return VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2);
      }
    }
  }
  class Ns {
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
  cResult[84] = channel.guild_id;
  cResult[85] = channel.id;
  cResult[86] = channel.parent_id;
  cResult[87] = channel.type;
  cResult[88] = Ns;
}) : ((channel, ref) => {
  let TIER_2;
  let acceptingGiftCodes;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let channelId;
  let channelSummariesExperiment;
  let communicationDisabledVersion;
  let displayNameStylesEnabled;
  let eligible;
  let fetchingSkuIds;
  let guildTemplates;
  let hasLoadedExperiments;
  let id;
  let id2;
  let invalidAppDirectoryEmbedApplicationIds;
  let isFetchingCurrentQuests;
  let items63;
  let items77;
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
  let stateFromStoresArray8;
  let theme;
  let tmp25;
  let tmp65;
  let tmp66;
  let unloadableContentEntryMessageIds;
  let unloadedContentEntryMessageIds;
  let useReducedMotion;
  let version;
  const f105126 = () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  };
  channel = channel.channel;
  const tmp = channel;
  let tmp2 = id;
  let obj = channel(id[60]);
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  const items2 = [GuildStore];
  const obj2 = channel(id[60]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const items3 = [AuthenticationStore];
  const tmpResult = tmp(tmp2[60]);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp(tmp2[64]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[64]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[64]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[64]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[64]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[64]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[64]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[64]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[64]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const items4 = [ThemeStore];
  const tmpResult76 = tmp(tmp2[60]);
  const stateFromStores3 = tmpResult76.useStateFromStores(items4, () => theme.theme, []);
  const tmpResult77 = tmp(tmp2[65]);
  const isMessageSwipeActionsEnabled = tmpResult77.useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp18 = closure_67(stateFromStores);
  const tmp19 = closure_68;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  tmp19(stateFromStores, application_id);
  [tmp25, r10107] = guildId(stateFromStores(tmp2[66])(stateFromStores, channel), 2);
  guildId(stateFromStores(tmp2[66])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const tmpResult78 = tmp(tmp2[60]);
  const stateFromStores4 = tmpResult78.useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmpResult79 = tmp(tmp2[67]);
  const fetchVoiceChannelInviteStartTimes = tmpResult79.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const tmpResult80 = tmp(tmp2[60]);
  const stateFromStoresObject = tmpResult80.useStateFromStoresObject(items6, () => {
    const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    return obj;
  }, []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const items7 = [items63];
  const tmpResult81 = tmp(tmp2[60]);
  const stateFromStoresArray = tmpResult81.useStateFromStoresArray(items7, () => items63.getFetchingOrFailedFetchingIds());
  const items8 = [channelSummariesExperiment];
  const tmpResult82 = tmp(tmp2[60]);
  const stateFromStoresArray1 = tmpResult82.useStateFromStoresArray(items8, () => channelSummariesExperiment.getFetchingIds());
  const items9 = [SKUStore];
  const tmpResult83 = tmp(tmp2[60]);
  const stateFromStoresArray2 = tmpResult83.useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const items10 = [closure_6];
  const items11 = [id];
  const tmpResult84 = tmp(tmp2[60]);
  const stateFromStoresArray3 = tmpResult84.useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const items12 = [closure_6, PresenceStore];
  const tmpResult85 = tmp(tmp2[60]);
  const stateFromStoresArray4 = tmpResult85.useStateFromStoresArray(items12, () => {
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
  const items13 = [closure_6];
  const tmpResult86 = tmp(tmp2[60]);
  const stateFromStoresArray5 = tmpResult86.useStateFromStoresArray(items13, () => {
    set = new Set();
    const embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
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
  const items14 = [closure_6];
  const tmpResult87 = tmp(tmp2[60]);
  const stateFromStoresArray6 = tmpResult87.useStateFromStoresArray(items14, () => {
    let tmp6;
    const launchStates = closure_6.getLaunchStates();
    const items = [];
    const tmp2 = launchStates[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = guildId(tmp3, 2);
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
  const tmpResult88 = tmp(tmp2[60]);
  const stateFromStores5 = tmpResult88.useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const items16 = [GuildTemplateStore];
  const tmpResult89 = tmp(tmp2[60]);
  const stateFromStores6 = tmpResult89.useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const items17 = [stateFromStoresArray8];
  const tmpResult90 = tmp(tmp2[60]);
  const stateFromStores7 = tmpResult90.useStateFromStores(items17, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult91 = tmp(tmp2[68]);
  const codedLinksExperimentEmbeds = tmpResult91.useCodedLinksExperimentEmbeds();
  const tmpResult92 = tmp(tmp2[69]);
  const quests1 = tmpResult92.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[63]).isNotNullish);
  const items18 = [ReferralTrialStore];
  const tmpResult93 = tmp(tmp2[60]);
  const stateFromStoresArray7 = tmpResult93.useStateFromStoresArray(items18, () => {
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
  const tmpResult94 = tmp(tmp2[70]);
  const trialOffer = tmpResult94.useTrialOffer(closure_63);
  const items19 = [UserStore];
  const tmpResult95 = tmp(tmp2[60]);
  const stateFromStores8 = tmpResult95.useStateFromStores(items19, () => {
    const obj = stateFromStores(id[71]);
    return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
  });
  const items20 = [EditMessageStore];
  const items21 = [id];
  const tmpResult96 = tmp(tmp2[60]);
  const stateFromStores9 = tmpResult96.useStateFromStores(items20, () => EditMessageStore.getEditingMessageId(id), items21);
  const items22 = [PendingReplyStore];
  const items23 = [id];
  const tmpResult97 = tmp(tmp2[60]);
  const stateFromStores10 = tmpResult97.useStateFromStores(items22, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items23);
  const items24 = [ReadStateStore];
  const items25 = [id];
  const tmpResult98 = tmp(tmp2[60]);
  const stateFromStores11 = tmpResult98.useStateFromStores(items24, () => ReadStateStore.getOldestUnreadMessageId(id), items25);
  const items26 = [GuildVerificationStore];
  const items27 = [guildId];
  const tmpResult99 = tmp(tmp2[60]);
  const stateFromStores12 = tmpResult99.useStateFromStores(items26, () => {
    const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items27);
  const items28 = [PermissionStore];
  const items29 = [channel];
  const tmpResult100 = tmp(tmp2[60]);
  const stateFromStores13 = tmpResult100.useStateFromStores(items28, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items29);
  const items30 = [VoiceStateStore];
  const items31 = [stateFromStores2];
  const tmp52 = stateFromStores(tmp2[72])(id);
  const tmpResult101 = tmp(tmp2[60]);
  const stateFromStores14 = tmpResult101.useStateFromStores(items30, () => VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2), items31);
  const items32 = [RTCConnectionStore];
  const tmpResult102 = tmp(tmp2[60]);
  const stateFromStores15 = tmpResult102.useStateFromStores(items32, () => channelId.getChannelId(), []);
  const items33 = [ReferencedMessageStore];
  const items34 = [channel];
  const tmpResult103 = tmp(tmp2[60]);
  const stateFromStores16 = tmpResult103.useStateFromStores(items33, () => {
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
  }, items34);
  const items35 = [GiftCodeStore];
  const tmpResult104 = tmp(tmp2[60]);
  const stateFromStoresObject1 = tmpResult104.useStateFromStoresObject(items35, () => {
    const obj = { resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() };
    return obj;
  }, []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const items36 = [ChannelRTCStore];
  const items37 = [id];
  const tmpResult105 = tmp(tmp2[60]);
  const stateFromStores17 = tmpResult105.useStateFromStores(items36, () => ChannelRTCStore.getParticipants(id).length, items37);
  const items38 = [UploadStore];
  const items39 = [id];
  const tmpResult106 = tmp(tmp2[60]);
  const stateFromStores18 = tmpResult106.useStateFromStores(items38, () => UploadStore.getFiles(id), items39);
  const items40 = [ReferencedMessageStore];
  const items41 = [id];
  const tmpResult107 = tmp(tmp2[60]);
  const stateFromStores19 = tmpResult107.useStateFromStores(items40, () => ReferencedMessageStore.getReplyIdsForChannel(id), items41);
  const items42 = [stateFromStores2];
  const tmpResult108 = tmp(tmp2[60]);
  const stateFromStoresObject2 = tmpResult108.useStateFromStoresObject(items42, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const items43 = [ThreadMessageStore];
  const items44 = [id];
  const tmpResult109 = tmp(tmp2[60]);
  const stateFromStores20 = tmpResult109.useStateFromStores(items43, () => ThreadMessageStore.getChannelThreadsVersion(id), items44);
  const items45 = [InteractionStore];
  const tmpResult110 = tmp(tmp2[60]);
  const stateFromStoresObject3 = tmpResult110.useStateFromStoresObject(items45, () => messageInteractionStates.getMessageInteractionStates());
  const items46 = [LocalInteractionComponentStateStore];
  const tmpResult111 = tmp(tmp2[60]);
  [tmp65, tmp66] = guildId(tmpResult111.useStateFromStores(items46, f105126, [], tmp(tmp2[73]).isVersionEqual), 2);
  guildId(tmpResult111.useStateFromStores(items46, f105126, [], tmp(tmp2[73]).isVersionEqual), 2);
  const items47 = [ExperimentStore];
  const tmpResult112 = tmp(tmp2[60]);
  let stateFromStores21 = tmpResult112.useStateFromStores(items47, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult113 = tmp(tmp2[74]);
  const isSpamMessageRequest = tmpResult113.useIsSpamMessageRequest(channel.id);
  let tmp70 = null != stateFromStores;
  const tmpResult114 = tmp(tmp2[75]);
  const isMessageRequest = tmpResult114.useIsMessageRequest(channel.id);
  const tmp23 = guildId;
  const tmp26 = InviteStore;
  const tmp50 = PermissionStore;
  const tmp53 = VoiceStateStore;
  if (tmp70) {
    tmp70 = stateFromStores.ready || stateFromStores.cached;
  }
  const items48 = [GuildScheduledEventStore];
  const tmp72 = null != stateFromStores && stateFromStores.cached;
  const tmp73 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult115 = tmp(tmp2[60]);
  const stateFromStores22 = tmpResult115.useStateFromStores(items48, () => rsvpVersion.getRsvpVersion());
  const items49 = [GuildAutomodMessageStore];
  const tmpResult116 = tmp(tmp2[60]);
  const stateFromStores23 = tmpResult116.useStateFromStores(items49, () => messagesVersion.getMessagesVersion());
  const items50 = [GuildMemberStore];
  const tmpResult117 = tmp(tmp2[60]);
  const stateFromStores24 = tmpResult117.useStateFromStores(items50, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const items51 = [GuildMemberStore];
  const items52 = [guildId, stateFromStores];
  const tmpResult118 = tmp(tmp2[60]);
  const stateFromStoresObject4 = tmpResult118.useStateFromStoresObject(items51, () => {
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
  }, items52);
  const items53 = [tmp50];
  const tmpResult119 = tmp(tmp2[60]);
  const stateFromStores25 = tmpResult119.useStateFromStores(items53, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  let id1;
  const useCurrentUserCommunicationDisabled = tmp(tmp2[77]).useCurrentUserCommunicationDisabled;
  tmp(tmp2[77]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const items54 = [LocaleStore];
  const tmp81 = tmp23(useCurrentUserCommunicationDisabled(id1), 2)[1];
  const tmpResult121 = tmp(tmp2[60]);
  const stateFromStores26 = tmpResult121.useStateFromStores(items54, () => locale.locale);
  const tmpResult122 = tmp(tmp2[78]);
  const isPaymentsBlocked = tmpResult122.useIsPaymentsBlocked();
  const items55 = [JoinedThreadsStore];
  const tmpResult123 = tmp(tmp2[60]);
  const stateFromStores27 = tmpResult123.useStateFromStores(items55, () => {
    const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
    return hasJoinedResult;
  });
  const items56 = [MediaPostSharePromptStore];
  const tmpResult124 = tmp(tmp2[60]);
  const stateFromStores28 = tmpResult124.useStateFromStores(items56, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const items57 = [PushFeedbackStore];
  const tmpResult125 = tmp(tmp2[60]);
  const stateFromStores29 = tmpResult125.useStateFromStores(items57, () => eligible.isEligible());
  const items58 = [CacheStore];
  const tmpResult126 = tmp(tmp2[60]);
  const stateFromStores30 = tmpResult126.useStateFromStores(items58, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult127 = tmp(tmp2[79]);
  const messageJumpAndroidKeyboardHeight = tmpResult127.useMessageJumpAndroidKeyboardHeight();
  const tmp89 = stateFromStores(tmp2[80])();
  const tmpResult128 = tmp(tmp2[81]);
  channelSummariesExperiment = tmpResult128.useChannelSummariesExperiment(channel);
  const items59 = [SummaryStore];
  const items60 = [channelSummariesExperiment, channel.id];
  const tmpResult129 = tmp(tmp2[60]);
  const stateFromStores31 = tmpResult129.useStateFromStores(items59, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items60);
  const tmpResult130 = tmp(tmp2[82]);
  const isConversationTopicHeaderEnabled = tmpResult130.useIsConversationTopicHeaderEnabled(channel.guild_id, "messages_conversation_header");
  let tmp93;
  if (isConversationTopicHeaderEnabled) {
    tmp93 = tmp22(tmp2[83])(channel.id);
  }
  const items61 = [channel.id, , , , ];
  ({ hasMoreAfter: arr65[1], hasMoreBefore: arr65[2], length: arr65[3], ready: arr65[4] } = stateFromStores);
  const effect = stateFromStores1.useEffect(() => {
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
  }, items61);
  const tmpResult131 = tmp(tmp2[85]);
  const shouldTrackAnnouncementMessageViews = tmpResult131.useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult132 = tmp(tmp2[85]);
  const shouldTrackRichPresenceInviteEmbedViews = tmpResult132.useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult133 = tmp(tmp2[85]);
  const shouldTrackOfficialMessageViews = tmpResult133.useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult134 = tmp(tmp2[85]);
  const shouldTrackVoiceInviteEmbedViews = tmpResult134.useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult135 = tmp(tmp2[86]);
  const shouldDisplaySpoilerObscurity = tmpResult135.useShouldDisplaySpoilerObscurity(channel);
  const items62 = [id, guildId];
  const tmpResult136 = tmp(tmp2[87]);
  const isAgeVerified = tmpResult136.useIsAgeVerified();
  const effect1 = stateFromStores1.useEffect(() => {
    let obj = stateFromStores(id[88]);
    obj.handleChannelSelect();
    return () => {
      const obj = stateFromStores(id[88]);
      obj.handleChannelSelect();
    };
  }, items62);
  const tmpResult137 = tmp(tmp2[89]);
  const shouldDisableInteractiveComponents = tmpResult137.useShouldDisableInteractiveComponents(channel.id);
  items63 = [];
  const tmp103 = closure_27(channel.id);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items63.push(message_id);
    }
  });
  const items64 = [ExplicitMediaStore];
  const items65 = [id];
  const tmp105 = closure_28(items63);
  const tmpResult138 = tmp(tmp2[60]);
  const stateFromStores32 = tmpResult138.useStateFromStores(items64, () => ExplicitMediaStore.getChannelFpInfo(id), items65);
  const items66 = [FamilyCenterPendingConnectionStore];
  const tmpResult139 = tmp(tmp2[60]);
  const stateFromStores33 = tmpResult139.useStateFromStores(items66, () => pendingConnection.getPendingConnection());
  const tmp108 = stateFromStores(tmp2[90])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[91])(stateFromStores));
  stateFromStores(tmp2[91])(stateFromStores);
  const items67 = [UserStore];
  const tmpResult140 = tmp(tmp2[60]);
  const stateFromStores34 = tmpResult140.useStateFromStores(items67, () => {
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
  const items68 = [BasicGuildStore];
  const tmpResult141 = tmp(tmp2[60]);
  const stateFromStores35 = tmpResult141.useStateFromStores(items68, () => version.getVersion());
  const tmpResult142 = tmp(tmp2[92]);
  const colorStore = tmpResult142.useColorStore((palette) => Object.keys(palette.palette).length);
  const items69 = [EmojiStore];
  const tmpResult143 = tmp(tmp2[60]);
  const stateFromStores36 = tmpResult143.useStateFromStores(items69, () => EmojiStore.getGuildEmoji(guildId));
  const items70 = [tmp53];
  const items71 = [guildId];
  const tmpResult144 = tmp(tmp2[60]);
  const stateFromStores37 = tmpResult144.useStateFromStores(items70, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      const obj = messages_MessagesUtils;
      return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items71);
  const items72 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp26, ChannelStore];
  const tmpResult145 = tmp(tmp2[60]);
  const stateFromStoresObject5 = tmpResult145.useStateFromStoresObject(items72, () => {
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
        let obj4 = channel(id[93]);
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
  const items73 = [SessionsStore];
  const tmpResult146 = tmp(tmp2[60]);
  stateFromStoresArray8 = tmpResult146.useStateFromStoresArray(items73, () => {
    const items = [...closure_1_51.getRemoteActivities(), ...closure_1_51.getHiddenActivities()];
    return items.filter(channel(id[63]).isNotNullish);
  });
  const items74 = [ActivityLauncherStore];
  const tmpResult147 = tmp(tmp2[60]);
  const stateFromStoresObject6 = tmpResult147.useStateFromStoresObject(items74, () => stateFromStoresArray8.reduce((acc, application_id) => {
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
  const items75 = [AuthorizedAppsStore];
  const tmpResult148 = tmp(tmp2[60]);
  const stateFromStoresArray9 = tmpResult148.useStateFromStoresArray(items75, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const items76 = [UserStore];
  const tmpResult149 = tmp(tmp2[60]);
  const stateFromStores38 = tmpResult149.useStateFromStores(items76, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult150 = tmp(tmp2[94]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmpResult150.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: tmp(tmp2[97]).Profiles.Messages, children: items77 };
  const tmp22Result = stateFromStores(tmp2[97]);
  let isThreadResult = channel.isThread();
  const tmp121 = closure_66;
  if (isThreadResult) {
    isThreadResult = closure_65(tmp22(tmp2[95]), { absolute: true });
  }
  items77 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp108, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp70, isMessagesCached: tmp72, isMessagesAckable: tmp73, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp18, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp52, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: stateFromStores37, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp65, interactionComponentStatesVersion: tmp66, hasLoadedExperiments: stateFromStores21, guildSystemChannelFlags: systemChannelFlags, currentUserCommunicationDisabled: tmp81, renderCommunicationDisabled: stateFromStores25, userSettingsLocale: stateFromStores26, paymentsBlocked: isPaymentsBlocked, isFollowingForumPost: stateFromStores27, showMediaPostSharePrompt: stateFromStores28, showPushFeedback: stateFromStores29, cacheStoreLoaded: "initializing" !== stateFromStores30, androidKeyboardHeight: messageJumpAndroidKeyboardHeight, selectedSummary: stateFromStores31, selectedConversation: tmp93, keyboardType: tmp89, shouldTrackAnnouncementMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackOfficialMessageViews, shouldTrackVoiceInviteEmbedViews, shouldObscureSpoiler: shouldDisplaySpoilerObscurity, shouldDisableInteractiveComponents, channelPolls: tmp103, messageReferencePolls: tmp105, explicitMediaFalsePositiveInfo: stateFromStores32, familyCenterPendingConnection: stateFromStores33, threadStartingReferenceMessage: stateFromStores16, unloadedContentEntryMessageIds, unloadableContentEntryMessageIds, resolvedReferralTrialOfferIds: stateFromStoresArray7, referralTrialOfferId: id2, isPremiumTier2User: stateFromStores8, activityInviteMessageIds: tmp25, guildInviteColorsFetched: colorStore, isAgeVerified, guildEmojis: stateFromStores36, enableSwipeActions: isMessageSwipeActionsEnabled, selfActivities: stateFromStoresArray8, activityLaunchJoinStates: stateFromStoresObject6, authorizedAppsTokens: stateFromStoresArray9, currentUserDisplayNameStyles: stateFromStores38, voiceInviteDataByChannelId: stateFromStoresObject5, officialMessageColor };
  const tmp125 = closure_65;
  const tmp22Result2 = stateFromStores(tmp2[96]);
  if (stateFromStores21) {
    stateFromStores21 = tmp70;
  }
  id2 = undefined;
  if (trialOffer != null) {
    id2 = trialOffer.id;
  }
  officialMessageColor = undefined;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  const merged = Object.assign(channel);
  items77[1] = tmp125(tmp22Result2, obj4);
  return tmp121(tmp22Result, obj3);
}));
forwardRefResult.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
