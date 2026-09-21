// Module ID: 11556
// Function ID: 11557
// Name: Messages
// Dependencies: [32, 19, 4750, 2044, 8414, 4985, 11557, 7723, 4774, 10593, 5678, 4674, 7537, 7411, 8218, 8201, 7773, 7704, 8387, 8204, 11558, 8205, 7354, 4971, 11559, 7699, 11560, 7921, 7840, 10336, 4401, 7550, 2113, 1186, 502, 2045, 7922, 11561, 2109, 2067, 5632, 4742, 4978, 4399, 4798, 4781, 4773, 4776, 8085, 1376, 4777, 5729, 11588, 4782, 1078, 1378, 21, 558, 568, 12, 504, 560, 7410, 1374, 2023, 11589, 11596, 11600, 11603, 11607, 7696, 4418, 8244, 5651, 10358, 10359, 10423, 8240, 7661, 11646, 4627, 10338, 11285, 10589, 8547, 4970, 10590, 8386, 11647, 11650, 8406, 7982, 11651, 5343, 11653, 12087, 2]

// Module 11556 (Messages)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7410 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10423 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11285 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8414 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11557 */;
import CacheStore from "CacheStore" /* 7723 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10593 */;
import EmojiStore from "EmojiStore" /* 5678 */;
import ExperimentStore from "ExperimentStore" /* 4674 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7537 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 7411 */;
import BasicGuildStore from "BasicGuildStore" /* 8218 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8201 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7773 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7704 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8387 */;
import InteractionStore from "InteractionStore" /* 8204 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11558 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8205 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7354 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 4971 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7699 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11560 */;
import PendingReplyStore from "PendingReplyStore" /* 7921 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7840 */;
import SummaryStore from "SummaryStore" /* 10336 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4401 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7550 */;
import LocaleStore from "LocaleStore" /* 2113 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import EditMessageStore from "EditMessageStore" /* 7922 */;
import GiftCodeStore from "GiftCodeStore" /* 11561 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5632 */;
import InviteStore from "InviteStore" /* 4742 */;
import MessageStore from "MessageStore" /* 4978 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import PresenceStore from "PresenceStore" /* 4798 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;
import ReadStateStore from "ReadStateStore" /* 4773 */;
import SessionsStore from "SessionsStore" /* 4776 */;
import UploadStore from "UploadStore" /* 8085 */;
import UserStore from "UserStore" /* 1376 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;
import SKUStore from "SKUStore" /* 5729 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11588 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4782 */;

require = fn;
const PollsInteractionStore = fn(11559);
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = PollsInteractionStore);
const Constants = fn(1078);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = Constants);
const PremiumConstants = fn(1378);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_67 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arr) {
    let obj2 = {};
    _require = obj2;
    const item = arr.forEach((author) => {
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
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function l() {
      return _modDef12.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(tmp6, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  const items1 = [PresenceStore];
  const items2 = [memo];
  return require("initialize").useStateFromStoresObject(items1, () => _modDef12.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
});
ReactCompilerGating = fn(558);
let closure_68 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
  const cResult = set(568).c(9);
  if (cResult[0] === arg1) {
    if (cResult[1] === arr) {
      set = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      const _Array = Array;
      arr = Array.from(tmp2);
      cResult[3] = tmp2;
      cResult[4] = arr;
      let tmp5 = arr;
    } else {
      tmp5 = cResult[4];
    }
    closure_1 = tmp5;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[5] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[5];
    }
    dependencyMap = noop.useRef(tmp9);
    if (cResult[6] !== tmp5) {
      const fn = function h() {
        if (!obj.areArraysShallowEqual(closure_1, ref.current)) {
          const obj2 = ApplicationActionCreatorsDefault;
          const found = _modDef12(tmp3).filter(GlobalUtils.isNotNullish);
          const arr = _modDef12(tmp3);
          const applications = obj2.fetchApplications(found.uniq().value(), false);
          ref.current = tmp3;
          const iter = found.uniq();
        }
      };
      const items1 = [tmp5];
      cResult[6] = tmp5;
      cResult[7] = fn;
      cResult[8] = items1;
      let tmp11 = items1;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[7];
      tmp11 = cResult[8];
    }
    const effect = noop.useEffect(tmp10, tmp11);
  }
  set = new Set();
  const item = arr.forEach((applicationId) => {
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
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const memo = noop.useMemo(() => {
    const set = new Set();
    const item = closure_0.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    if (null != closure_1) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items);
  noop.useRef([]);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(tmp3).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(tmp3);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = tmp3;
      const iter = found.uniq();
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1) => {
  const cResult = channel(id[58]).c(326);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = ye;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = channel(id[58]);
  const stateFromStores = channel(id[60]).useStateFromStores(first, tmp6, tmp7);
  id = channel.id;
  if (cResult[4] !== channel) {
    const guildId = channel.getGuildId();
    cResult[4] = channel;
    cResult[5] = guildId;
    let tmp8 = guildId;
  } else {
    tmp8 = cResult[5];
  }
  _slicedToArray = tmp8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[6] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] !== tmp8) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    cResult[7] = tmp8;
    cResult[8] = Pe;
    let tmp12 = Pe;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
  }
  const tmpResult = channel(id[60]);
  const stateFromStores1 = channel(id[60]).useStateFromStores(tmp10, tmp12);
  if (stateFromStores1 != null) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items3 = [AuthenticationStore];
    class Oe {
      constructor() {
        return closure_1_38.getId();
      }
    }
    const items4 = [];
    cResult[9] = items3;
    cResult[10] = Oe;
    cResult[11] = items4;
    let tmp16 = items4;
    let tmp15 = Oe;
    let tmp14 = items3;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp15 = cResult[10];
    tmp16 = cResult[11];
  }
  const tmpResult30 = channel(id[60]);
  const stateFromStores2 = channel(id[60]).useStateFromStores(tmp14, tmp15, tmp16);
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
        return closure_43.getGuild(closure_3);
      }
    }
    const items5 = [ThemeStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    const items6 = [];
    cResult[12] = Ge;
    cResult[13] = items6;
    cResult[14] = items5;
    let tmp29 = items5;
    let tmp28 = items6;
    const tmp27 = Ge;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp28 = cResult[13];
    tmp29 = cResult[14];
  }
  const tmpResult31 = channel(id[60]);
  const stateFromStores3 = channel(id[60]).useStateFromStores(tmp29, tmp27, tmp28);
  const tmpResult32 = channel(id[60]);
  const isMessageSwipeActionsEnabled = channel(id[65]).useIsMessageSwipeActionsEnabled();
  closure_67(stateFromStores);
  if (channel.linkedLobby != null) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
  }
  closure_68(stateFromStores, undefined);
  const first1 = _slicedToArray(stateFromStores(tmp2[66])(stateFromStores, channel), 1)[0];
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items7 = [InviteStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    const items8 = [];
    cResult[15] = items7;
    cResult[16] = tmp40;
    cResult[17] = items8;
    let tmp39 = items8;
    let tmp38 = tmp40;
    const tmp37 = items7;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp38 = cResult[16];
    tmp39 = cResult[17];
  }
  const tmp35 = stateFromStores;
  const tmpResult33 = channel(id[65]);
  const stateFromStores4 = channel(id[60]).useStateFromStores(tmp37, tmp38, tmp39);
  const tmpResult34 = channel(id[60]);
  const fetchVoiceChannelInviteStartTimes = channel(id[67]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    const items10 = [];
    cResult[18] = items9;
    cResult[19] = tmp46;
    cResult[20] = items10;
    let tmp45 = items10;
    let tmp44 = tmp46;
    const tmp43 = items9;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp44 = cResult[19];
    tmp45 = cResult[20];
  }
  const tmpResult35 = channel(id[67]);
  const stateFromStoresObject = channel(id[60]).useStateFromStoresObject(tmp43, tmp44, tmp45);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items11 = [ApplicationStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    cResult[21] = items11;
    cResult[22] = tmp50;
    let tmp49 = tmp50;
    const tmp48 = items11;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp49 = cResult[22];
  }
  const tmpResult36 = channel(id[60]);
  const stateFromStoresArray = channel(id[60]).useStateFromStoresArray(tmp48, tmp49);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items12 = [ApplicationAssetsStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    cResult[23] = items12;
    cResult[24] = tmp54;
    let tmp53 = tmp54;
    const tmp52 = items12;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp53 = cResult[24];
  }
  const tmpResult37 = channel(id[60]);
  const stateFromStoresArray1 = channel(id[60]).useStateFromStoresArray(tmp52, tmp53);
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items13 = [SKUStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    cResult[25] = items13;
    cResult[26] = tmp58;
    let tmp57 = tmp58;
    const tmp56 = items13;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    tmp57 = cResult[26];
  }
  const tmpResult38 = channel(id[60]);
  const stateFromStoresArray2 = channel(id[60]).useStateFromStoresArray(tmp56, tmp57);
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    cResult[27] = items14;
    const tmp60 = items14;
  } else {
    class Pe {
      constructor() {
        return closure_43.getGuild(closure_3);
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
        return closure_1_37.theme;
      }
    }
    cResult[28] = id;
    cResult[29] = Ft;
    cResult[30] = items15;
    let tmp62 = items15;
    const tmp61 = Ft;
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
  const tmpResult39 = channel(id[60]);
  const stateFromStoresArray3 = channel(id[60]).useStateFromStoresArray(tmp60, tmp61, tmp62);
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class Ft {
      constructor() {
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[63]).isNotNullish);
      }
    }
    const items16 = [EmbeddedActivitiesStore, ];
    class Ge {
      constructor() {
        return closure_1_37.theme;
      }
    }
    items16[1] = PresenceStore;
    cResult[31] = items16;
    const tmp64 = items16;
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
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        return closure_1_37.theme;
      }
    }
    cResult[33] = Ct;
    const tmp65 = Ct;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult40 = channel(id[60]);
  const stateFromStoresArray4 = channel(id[60]).useStateFromStoresArray(tmp64, tmp65);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Rt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          closure_0 = index;
          let item = arr.forEach(() => { ... });
        });
        return Array.from(set);
      }
    }
    cResult[34] = items17;
    cResult[35] = Rt;
    let tmp68 = Rt;
    const tmp67 = items17;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult41 = channel(id[60]);
  const stateFromStoresArray5 = channel(id[60]).useStateFromStoresArray(tmp67, tmp68);
  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Tt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[36] = items18;
    cResult[37] = Tt;
    let tmp71 = Tt;
    const tmp70 = items18;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult42 = channel(id[60]);
  const stateFromStoresArray6 = channel(id[60]).useStateFromStoresArray(tmp70, tmp71);
  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[38] = items19;
    cResult[39] = tmp75;
    let tmp74 = tmp75;
    const tmp73 = items19;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult43 = channel(id[60]);
  const stateFromStores5 = channel(id[60]).useStateFromStores(tmp73, tmp74);
  if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        return closure_1_20.getGuildTemplates();
      }
    }
    const items21 = [];
    cResult[40] = items20;
    cResult[41] = Gt;
    cResult[42] = items21;
    let tmp79 = items21;
    let tmp78 = Gt;
    const tmp77 = items20;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult44 = channel(id[60]);
  const stateFromStores6 = channel(id[60]).useStateFromStores(tmp77, tmp78, tmp79);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        return closure_9.getBuildOverrides();
      }
    }
    const items23 = [];
    cResult[43] = items22;
    cResult[44] = Bt;
    cResult[45] = items23;
    let tmp83 = items23;
    let tmp82 = Bt;
    const tmp81 = items22;
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult45 = channel(id[60]);
  const stateFromStores7 = channel(id[60]).useStateFromStores(tmp81, tmp82, tmp83);
  const tmpResult46 = channel(id[60]);
  const codedLinksExperimentEmbeds = channel(id[68]).useCodedLinksExperimentEmbeds();
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        return closure_9.getBuildOverrides();
      }
    }
  } else {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult47 = channel(id[68]);
  const quests1 = channel(id[69]).useQuests(tmp86);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[47] !== stateFromStores) {
    class Ct {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        constructor(arg0) {
          return channel.type === closure_1_61.PREMIUM_REFERRAL;
        }
      }
      cResult[49] = Qt;
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
    } else {
      class Qt {
        constructor(arg0) {
          return channel.type === closure_1_61.PREMIUM_REFERRAL;
        }
      }
    }
    class Bt {
      constructor() {
        return closure_9.getBuildOverrides();
      }
    }
    if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      cResult[50] = Kt;
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    const found = stateFromStores.filter(filter);
    let mapped = found.map(tmp90);
    filter = mapped.filter;
    const found1 = filter(tmp(tmp2[63]).isNotNullish);
    cResult[47] = stateFromStores;
    cResult[48] = found1;
  } else {
    class Kt {
      constructor(arg0) {
        return channel.referralTrialOfferId;
      }
    }
    EmbeddedActivitiesStore = tmp89;
    const _Symbol = Symbol;
    class Bt {
      constructor() {
        return closure_9.getBuildOverrides();
      }
    }
    if (tmp93 === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items24 = [ReferralTrialStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[51] = items24;
      const tmp94 = items24;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[52] !== tmp89) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      cResult[52] = tmp89;
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[53] = tmp96;
      const tmp95 = tmp96;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    const stateFromStoresArray7 = tmp(tmp2[60]).useStateFromStoresArray(tmp94, tmp95);
    const tmpResult49 = tmp(tmp2[60]);
    const trialOffer = tmp(tmp2[70]).useTrialOffer(closure_63);
    const _Symbol2 = Symbol;
    if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items25 = [UserStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[54] = items25;
      cResult[55] = tmp102;
      let tmp101 = tmp102;
      const tmp100 = items25;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      tmp101 = cResult[55];
    }
    const tmpResult50 = tmp(tmp2[70]);
    const stateFromStores8 = tmp(tmp2[60]).useStateFromStores(tmp100, tmp101);
    const _Symbol3 = Symbol;
    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items26 = [EditMessageStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[56] = items26;
      const tmp104 = items26;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[57] !== id) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items27 = [id];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[57] = id;
      cResult[58] = tmp107;
      cResult[59] = items27;
      let tmp106 = items27;
      const tmp105 = tmp107;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      tmp106 = cResult[59];
    }
    const tmpResult51 = tmp(tmp2[60]);
    const stateFromStores9 = tmp(tmp2[60]).useStateFromStores(tmp104, tmp105, tmp106);
    const _Symbol4 = Symbol;
    if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items28 = [PendingReplyStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[60] = items28;
      const tmp109 = items28;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[61] !== id) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items29 = [id];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[61] = id;
      cResult[62] = tmp112;
      cResult[63] = items29;
      let tmp111 = items29;
      const tmp110 = tmp112;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      tmp111 = cResult[63];
    }
    const tmpResult52 = tmp(tmp2[60]);
    const stateFromStores10 = tmp(tmp2[60]).useStateFromStores(tmp109, tmp110, tmp111);
    const _Symbol5 = Symbol;
    if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items30 = [ReadStateStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[64] = items30;
      const tmp114 = items30;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[65] !== id) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items31 = [id];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[65] = id;
      cResult[66] = tmp117;
      cResult[67] = items31;
      let tmp116 = items31;
      const tmp115 = tmp117;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      tmp116 = cResult[67];
    }
    const tmpResult53 = tmp(tmp2[60]);
    const stateFromStores11 = tmp(tmp2[60]).useStateFromStores(tmp114, tmp115, tmp116);
    const _Symbol6 = Symbol;
    if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items32 = [GuildVerificationStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[68] = items32;
      const tmp119 = items32;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[69] !== tmp8) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items33 = [tmp8];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[69] = tmp8;
      cResult[70] = tmp122;
      cResult[71] = items33;
      let tmp121 = items33;
      const tmp120 = tmp122;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      tmp121 = cResult[71];
    }
    const tmpResult54 = tmp(tmp2[60]);
    const stateFromStores12 = tmp(tmp2[60]).useStateFromStores(tmp119, tmp120, tmp121);
    const _Symbol7 = Symbol;
    if (cResult[72] === Symbol.for("react.memo_cache_sentinel")) {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
      const items34 = [PermissionStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[72] = items34;
      const tmp124 = items34;
    } else {
      class Kt {
        constructor(arg0) {
          return channel.referralTrialOfferId;
        }
      }
    }
    if (cResult[73] !== channel) {
      class Is {
        constructor() {
          return closure_47.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items35 = [channel];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[73] = channel;
      cResult[74] = Is;
      cResult[75] = items35;
      let tmp126 = items35;
      const tmp125 = Is;
    } else {
      class Is {
        constructor() {
          return closure_47.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      tmp126 = cResult[75];
    }
    const tmpResult55 = tmp(tmp2[60]);
    const stateFromStores13 = tmp(tmp2[60]).useStateFromStores(tmp124, tmp125, tmp126);
    tmp35(tmp2[72])(id);
    const _Symbol8 = Symbol;
    if (cResult[76] === Symbol.for("react.memo_cache_sentinel")) {
      class Is {
        constructor() {
          return closure_47.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items36 = [VoiceStateStore];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[76] = items36;
      const tmp129 = items36;
    } else {
      class Is {
        constructor() {
          return closure_47.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    if (cResult[77] !== stateFromStores2) {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items37 = [stateFromStores2];
      class Bt {
        constructor() {
          return closure_9.getBuildOverrides();
        }
      }
      cResult[77] = stateFromStores2;
      cResult[78] = As;
      cResult[79] = items37;
      let tmp131 = items37;
      const tmp130 = As;
    } else {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp131 = cResult[79];
    }
    const tmpResult56 = tmp(tmp2[60]);
    const stateFromStores14 = tmp(tmp2[60]).useStateFromStores(tmp129, tmp130, tmp131);
    const _Symbol9 = Symbol;
    if (cResult[80] === Symbol.for("react.memo_cache_sentinel")) {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items38 = [RTCConnectionStore];
      class Ds {
        constructor() {
          return closure_1_49.getChannelId();
        }
      }
      const items39 = [];
      cResult[80] = items38;
      cResult[81] = Ds;
      cResult[82] = items39;
      let tmp135 = items39;
      let tmp134 = Ds;
      const tmp133 = items38;
    } else {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp134 = cResult[81];
      tmp135 = cResult[82];
    }
    const tmpResult57 = tmp(tmp2[60]);
    const stateFromStores15 = tmp(tmp2[60]).useStateFromStores(tmp133, tmp134, tmp135);
    const _Symbol10 = Symbol;
    if (cResult[83] === Symbol.for("react.memo_cache_sentinel")) {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items40 = [ReferencedMessageStore];
      class Ds {
        constructor() {
          return closure_1_49.getChannelId();
        }
      }
      cResult[83] = items40;
    } else {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    if (cResult[84] === channel.guild_id) {
      class As {
        constructor() {
          return closure_54.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    class Ns {
      constructor() {
        THREADS = ChannelTypesSets.THREADS;
        tmp = channel;
        message = null;
        if (THREADS.has(channel.type)) {
          message = null;
          if (null != tmp.parent_id) {
            tmp3 = closure_32;
            obj = { channel_id: null, message_id: null, guild_id: null };
            ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = tmp);
            message = closure_32.getMessageByReference(obj).message;
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
    const tmpResult58 = tmp(tmp2[60]);
  }
}) : ((channel, ref) => {
  channel = channel.channel;
  const tmp = channel;
  const tmp2 = id;
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = channel(id[60]).useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  let obj = channel(id[60]);
  const items2 = [GuildStore];
  const stateFromStores1 = channel(id[60]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const obj2 = channel(id[60]);
  const items3 = [AuthenticationStore];
  const stateFromStores2 = tmp(tmp2[60]).useStateFromStores(items3, () => id.getId(), []);
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
  const tmpResult = tmp(tmp2[60]);
  const items4 = [ThemeStore];
  const stateFromStores3 = tmp(tmp2[60]).useStateFromStores(items4, () => theme.theme, []);
  const tmpResult75 = tmp(tmp2[60]);
  const isMessageSwipeActionsEnabled = tmp(tmp2[65]).useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmpResult76 = tmp(tmp2[65]);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  closure_68(stateFromStores, application_id);
  const tmp18 = closure_67(stateFromStores);
  const tmp23 = guildId;
  [tmp25, r10107] = guildId(stateFromStores(tmp2[66])(stateFromStores, channel), 2);
  const tmp24 = guildId(stateFromStores(tmp2[66])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const stateFromStores4 = tmp(tmp2[60]).useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmp26 = InviteStore;
  const tmpResult77 = tmp(tmp2[60]);
  const fetchVoiceChannelInviteStartTimes = tmp(tmp2[67]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmpResult78 = tmp(tmp2[67]);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const stateFromStoresObject = tmp(tmp2[60]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const tmpResult79 = tmp(tmp2[60]);
  const items7 = [items63];
  const stateFromStoresArray = tmp(tmp2[60]).useStateFromStoresArray(items7, () => items63.getFetchingOrFailedFetchingIds());
  const tmpResult80 = tmp(tmp2[60]);
  const items8 = [channelSummariesExperiment];
  const stateFromStoresArray1 = tmp(tmp2[60]).useStateFromStoresArray(items8, () => channelSummariesExperiment.getFetchingIds());
  const tmpResult81 = tmp(tmp2[60]);
  const items9 = [SKUStore];
  const stateFromStoresArray2 = tmp(tmp2[60]).useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const tmpResult82 = tmp(tmp2[60]);
  const items10 = [closure_6];
  const items11 = [id];
  const stateFromStoresArray3 = tmp(tmp2[60]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const tmpResult83 = tmp(tmp2[60]);
  const items12 = [closure_6, PresenceStore];
  const stateFromStoresArray4 = tmp(tmp2[60]).useStateFromStoresArray(items12, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop2(iter) {
      const userIds = iter.userIds;
      iter = userIds.values();
      const findActivityResult = PresenceStore.findActivity(iter.next().value, (application_id) => application_id.application_id === iter.applicationId);
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
  const tmpResult84 = tmp(tmp2[60]);
  const items13 = [closure_6];
  const stateFromStoresArray5 = tmp(tmp2[60]).useStateFromStoresArray(items13, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((arr, index) => {
      closure_0 = index;
      let item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((item) => {
          set.add("" + closure_1_0 + ":" + item);
        });
      });
    });
    return Array.from(set);
  });
  const tmpResult85 = tmp(tmp2[60]);
  const items14 = [closure_6];
  const stateFromStoresArray6 = tmp(tmp2[60]).useStateFromStoresArray(items14, () => {
    const launchStates = closure_6.getLaunchStates();
    const items = [];
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
  const tmpResult86 = tmp(tmp2[60]);
  const items15 = [MediaPostEmbedStore];
  const stateFromStores5 = tmp(tmp2[60]).useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmpResult87 = tmp(tmp2[60]);
  const items16 = [GuildTemplateStore];
  const stateFromStores6 = tmp(tmp2[60]).useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const tmpResult88 = tmp(tmp2[60]);
  const items17 = [stateFromStoresArray8];
  const stateFromStores7 = tmp(tmp2[60]).useStateFromStores(items17, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult89 = tmp(tmp2[60]);
  const codedLinksExperimentEmbeds = tmp(tmp2[68]).useCodedLinksExperimentEmbeds();
  const tmpResult90 = tmp(tmp2[68]);
  const quests1 = tmp(tmp2[69]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[63]).isNotNullish);
  const tmpResult91 = tmp(tmp2[69]);
  const items18 = [ReferralTrialStore];
  const stateFromStoresArray7 = tmp(tmp2[60]).useStateFromStoresArray(items18, () => {
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
  const tmpResult92 = tmp(tmp2[60]);
  const trialOffer = tmp(tmp2[70]).useTrialOffer(closure_63);
  const tmpResult93 = tmp(tmp2[70]);
  const items19 = [UserStore];
  const stateFromStores8 = tmp(tmp2[60]).useStateFromStores(items19, () => stateFromStores(id[71]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmpResult94 = tmp(tmp2[60]);
  const items20 = [EditMessageStore];
  const items21 = [id];
  const stateFromStores9 = tmp(tmp2[60]).useStateFromStores(items20, () => EditMessageStore.getEditingMessageId(id), items21);
  const tmpResult95 = tmp(tmp2[60]);
  const items22 = [PendingReplyStore];
  const items23 = [id];
  const stateFromStores10 = tmp(tmp2[60]).useStateFromStores(items22, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items23);
  const tmpResult96 = tmp(tmp2[60]);
  const items24 = [ReadStateStore];
  const items25 = [id];
  const stateFromStores11 = tmp(tmp2[60]).useStateFromStores(items24, () => ReadStateStore.getOldestUnreadMessageId(id), items25);
  const tmpResult97 = tmp(tmp2[60]);
  const items26 = [GuildVerificationStore];
  const items27 = [guildId];
  const stateFromStores12 = tmp(tmp2[60]).useStateFromStores(items26, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items27);
  const tmpResult98 = tmp(tmp2[60]);
  const items28 = [PermissionStore];
  const items29 = [channel];
  const stateFromStores13 = tmp(tmp2[60]).useStateFromStores(items28, () => PermissionStore.can(constants3.SEND_MESSAGES, channel), items29);
  const tmp50 = PermissionStore;
  const tmpResult99 = tmp(tmp2[60]);
  const tmp52 = stateFromStores(tmp2[72])(id);
  const items30 = [VoiceStateStore];
  const items31 = [stateFromStores2];
  const stateFromStores14 = tmp(tmp2[60]).useStateFromStores(items30, () => VoiceStateStore.getUserVoiceChannelId(closure_2_60, stateFromStores2), items31);
  const tmp53 = VoiceStateStore;
  const tmpResult100 = tmp(tmp2[60]);
  const items32 = [RTCConnectionStore];
  const stateFromStores15 = tmp(tmp2[60]).useStateFromStores(items32, () => channelId.getChannelId(), []);
  const tmpResult101 = tmp(tmp2[60]);
  const items33 = [ReferencedMessageStore];
  const items34 = [channel];
  const stateFromStores16 = tmp(tmp2[60]).useStateFromStores(items33, () => {
    const THREADS = constants.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != tmp.parent_id) {
        const obj = { channel_id: null, message_id: null, guild_id: null };
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = tmp);
        message = ReferencedMessageStore.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items34);
  const tmpResult102 = tmp(tmp2[60]);
  const items35 = [GiftCodeStore];
  const stateFromStoresObject1 = tmp(tmp2[60]).useStateFromStoresObject(items35, () => ({ resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const tmpResult103 = tmp(tmp2[60]);
  const items36 = [ChannelRTCStore];
  const items37 = [id];
  const stateFromStores17 = tmp(tmp2[60]).useStateFromStores(items36, () => ChannelRTCStore.getParticipants(id).length, items37);
  const tmpResult104 = tmp(tmp2[60]);
  const items38 = [UploadStore];
  const items39 = [id];
  const stateFromStores18 = tmp(tmp2[60]).useStateFromStores(items38, () => UploadStore.getFiles(id), items39);
  const tmpResult105 = tmp(tmp2[60]);
  const items40 = [ReferencedMessageStore];
  const items41 = [id];
  const stateFromStores19 = tmp(tmp2[60]).useStateFromStores(items40, () => ReferencedMessageStore.getReplyIdsForChannel(id), items41);
  const tmpResult106 = tmp(tmp2[60]);
  const items42 = [stateFromStores2];
  const stateFromStoresObject2 = tmp(tmp2[60]).useStateFromStoresObject(items42, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const tmpResult107 = tmp(tmp2[60]);
  const items43 = [ThreadMessageStore];
  const items44 = [id];
  const stateFromStores20 = tmp(tmp2[60]).useStateFromStores(items43, () => ThreadMessageStore.getChannelThreadsVersion(id), items44);
  const tmpResult108 = tmp(tmp2[60]);
  const items45 = [InteractionStore];
  const stateFromStoresObject3 = tmp(tmp2[60]).useStateFromStoresObject(items45, () => messageInteractionStates.getMessageInteractionStates());
  const tmpResult109 = tmp(tmp2[60]);
  const items46 = [LocalInteractionComponentStateStore];
  const tmpResult110 = tmp(tmp2[60]);
  [tmp65, tmp66] = guildId(tmp(tmp2[60]).useStateFromStores(items46, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[73]).isVersionEqual), 2);
  const tmp64 = guildId(tmp(tmp2[60]).useStateFromStores(items46, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[73]).isVersionEqual), 2);
  const items47 = [ExperimentStore];
  let stateFromStores21 = tmp(tmp2[60]).useStateFromStores(items47, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult111 = tmp(tmp2[60]);
  const isSpamMessageRequest = tmp(tmp2[74]).useIsSpamMessageRequest(channel.id);
  const tmpResult112 = tmp(tmp2[74]);
  let tmp70 = null != stateFromStores;
  const isMessageRequest = tmp(tmp2[75]).useIsMessageRequest(channel.id);
  if (tmp70) {
    tmp70 = stateFromStores.ready || stateFromStores.cached;
    const tmp71 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp72 = null != stateFromStores && stateFromStores.cached;
  const tmp73 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult113 = tmp(tmp2[75]);
  const items48 = [GuildScheduledEventStore];
  const stateFromStores22 = tmp(tmp2[60]).useStateFromStores(items48, () => rsvpVersion.getRsvpVersion());
  const tmpResult114 = tmp(tmp2[60]);
  const items49 = [GuildAutomodMessageStore];
  const stateFromStores23 = tmp(tmp2[60]).useStateFromStores(items49, () => messagesVersion.getMessagesVersion());
  const tmpResult115 = tmp(tmp2[60]);
  const items50 = [GuildMemberStore];
  const stateFromStores24 = tmp(tmp2[60]).useStateFromStores(items50, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmpResult116 = tmp(tmp2[60]);
  const items51 = [GuildMemberStore];
  const items52 = [guildId, stateFromStores];
  const stateFromStoresObject4 = tmp(tmp2[60]).useStateFromStoresObject(items51, () => {
    if (null != guildId) {
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
      arr = stateFromStores;
    }
    return {};
  }, items52);
  const tmpResult117 = tmp(tmp2[60]);
  const items53 = [tmp50];
  const stateFromStores25 = tmp(tmp2[60]).useStateFromStores(items53, () => PermissionStore.can(constants3.MODERATE_MEMBERS, stateFromStores1));
  const tmpResult118 = tmp(tmp2[60]);
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const tmpResult119 = tmp(tmp2[77]);
  const items54 = [LocaleStore];
  const stateFromStores26 = tmp(tmp2[60]).useStateFromStores(items54, () => locale.locale);
  const tmpResult120 = tmp(tmp2[60]);
  const isPaymentsBlocked = tmp(tmp2[78]).useIsPaymentsBlocked();
  const tmpResult121 = tmp(tmp2[78]);
  const items55 = [JoinedThreadsStore];
  const stateFromStores27 = tmp(tmp2[60]).useStateFromStores(items55, () => {
    let hasJoinedResult = channel.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const tmpResult122 = tmp(tmp2[60]);
  const items56 = [MediaPostSharePromptStore];
  const stateFromStores28 = tmp(tmp2[60]).useStateFromStores(items56, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const tmpResult123 = tmp(tmp2[60]);
  const items57 = [PushFeedbackStore];
  const stateFromStores29 = tmp(tmp2[60]).useStateFromStores(items57, () => eligible.isEligible());
  const tmpResult124 = tmp(tmp2[60]);
  const items58 = [CacheStore];
  const stateFromStores30 = tmp(tmp2[60]).useStateFromStores(items58, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult125 = tmp(tmp2[60]);
  const messageJumpAndroidKeyboardHeight = tmp(tmp2[79]).useMessageJumpAndroidKeyboardHeight();
  const tmpResult126 = tmp(tmp2[79]);
  const tmp87 = stateFromStores(tmp2[80])();
  channelSummariesExperiment = tmp(tmp2[81]).useChannelSummariesExperiment(channel);
  const tmpResult127 = tmp(tmp2[81]);
  const items59 = [SummaryStore];
  const items60 = [channelSummariesExperiment, channel.id];
  const items61 = [channel.id, , , , ];
  ({ hasMoreAfter: arr65[1], hasMoreBefore: arr65[2], length: arr65[3], ready: arr65[4] } = stateFromStores);
  const stateFromStores31 = tmp(tmp2[60]).useStateFromStores(items59, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items60);
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
      const obj = DimensionActionCreatorsDefault;
      const _Date = Date;
      const result = obj.updateChannelDimensions(channel.id, Date.now(), 1, 1, 0);
    }
  }, items61);
  const tmpResult128 = tmp(tmp2[60]);
  const shouldTrackAnnouncementMessageViews = tmp(tmp2[83]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult129 = tmp(tmp2[83]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp(tmp2[83]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult130 = tmp(tmp2[83]);
  const shouldTrackOfficialMessageViews = tmp(tmp2[83]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult131 = tmp(tmp2[83]);
  const shouldTrackVoiceInviteEmbedViews = tmp(tmp2[83]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp70 });
  const tmpResult132 = tmp(tmp2[83]);
  const shouldDisplaySpoilerObscurity = tmp(tmp2[84]).useShouldDisplaySpoilerObscurity(channel);
  const tmpResult133 = tmp(tmp2[84]);
  const items62 = [id, guildId];
  const isAgeVerified = tmp(tmp2[85]).useIsAgeVerified();
  const effect1 = stateFromStores1.useEffect(() => {
    stateFromStores(id[86]).handleChannelSelect();
    return () => {
      stateFromStores(id[86]).handleChannelSelect();
    };
  }, items62);
  const tmpResult134 = tmp(tmp2[85]);
  const shouldDisableInteractiveComponents = tmp(tmp2[87]).useShouldDisableInteractiveComponents(channel.id);
  items63 = [];
  const tmpResult135 = tmp(tmp2[87]);
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
  const tmp99 = closure_27(channel.id);
  const tmp101 = closure_28(items63);
  const items64 = [ExplicitMediaStore];
  const items65 = [id];
  const stateFromStores32 = tmp(tmp2[60]).useStateFromStores(items64, () => ExplicitMediaStore.getChannelFpInfo(id), items65);
  const tmpResult136 = tmp(tmp2[60]);
  const items66 = [FamilyCenterPendingConnectionStore];
  const stateFromStores33 = tmp(tmp2[60]).useStateFromStores(items66, () => pendingConnection.getPendingConnection());
  const tmpResult137 = tmp(tmp2[60]);
  const tmp104 = stateFromStores(tmp2[88])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[89])(stateFromStores));
  const tmp105 = stateFromStores(tmp2[89])(stateFromStores);
  const items67 = [UserStore];
  const stateFromStores34 = tmp(tmp2[60]).useStateFromStores(items67, () => {
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
  const tmpResult138 = tmp(tmp2[60]);
  const items68 = [BasicGuildStore];
  const stateFromStores35 = tmp(tmp2[60]).useStateFromStores(items68, () => version.getVersion());
  const tmpResult139 = tmp(tmp2[60]);
  const colorStore = tmp(tmp2[90]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmpResult140 = tmp(tmp2[90]);
  const items69 = [EmojiStore];
  const stateFromStores36 = tmp(tmp2[60]).useStateFromStores(items69, () => EmojiStore.getGuildEmoji(guildId));
  const tmpResult141 = tmp(tmp2[60]);
  const items70 = [tmp53];
  const items71 = [guildId];
  const stateFromStores37 = tmp(tmp2[60]).useStateFromStores(items70, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items71);
  const tmpResult142 = tmp(tmp2[60]);
  const items72 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp26, ChannelStore];
  const stateFromStoresObject5 = tmp(tmp2[60]).useStateFromStoresObject(items72, () => {
    const obj = {};
    const invites = InviteStore.getInvites();
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
        let obj4 = channel(id[91]);
        if (obj4.isVoiceChannelInvite(tmp3)) {
          id = tmp3.channel.id;
          guild = tmp3.guild;
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
  const tmpResult143 = tmp(tmp2[60]);
  const items73 = [SessionsStore];
  stateFromStoresArray8 = tmp(tmp2[60]).useStateFromStoresArray(items73, () => {
    const items = [...closure_1_51.getRemoteActivities(), ...closure_1_51.getHiddenActivities()];
    return items.filter(channel(id[63]).isNotNullish);
  });
  const tmpResult144 = tmp(tmp2[60]);
  const items74 = [ActivityLauncherStore];
  const stateFromStoresObject6 = tmp(tmp2[60]).useStateFromStoresObject(items74, () => stateFromStoresArray8.reduce((acc, application_id) => {
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
  const tmpResult145 = tmp(tmp2[60]);
  const items75 = [AuthorizedAppsStore];
  const stateFromStoresArray9 = tmp(tmp2[60]).useStateFromStoresArray(items75, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmpResult146 = tmp(tmp2[60]);
  const items76 = [UserStore];
  const stateFromStores38 = tmp(tmp2[60]).useStateFromStores(items76, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult147 = tmp(tmp2[60]);
  const fetchSocialLayerStorefrontProductDetailsEmbedData = tmp(tmp2[92]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  const obj3 = { profile: null, children: null };
  const tmp117 = closure_66;
  const tmpResult148 = tmp(tmp2[92]);
  obj3.profile = tmp(tmp2[95]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = closure_65(tmp22(tmp2[93]), { absolute: true });
  }
  const items77 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp104, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp70, isMessagesCached: tmp72, isMessagesAckable: tmp73, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp18, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp52, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: stateFromStores37, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp65, interactionComponentStatesVersion: tmp66, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  const tmp121 = closure_65;
  const tmp22Result = stateFromStores(tmp2[95]);
  if (stateFromStores21) {
    stateFromStores21 = tmp70;
  }
  obj4.hasLoadedExperiments = stateFromStores21;
  obj4.guildSystemChannelFlags = systemChannelFlags;
  obj4.currentUserCommunicationDisabled = tmp23(tmpResult119.useCurrentUserCommunicationDisabled(id1), 2)[1];
  obj4.renderCommunicationDisabled = stateFromStores25;
  obj4.userSettingsLocale = stateFromStores26;
  obj4.paymentsBlocked = isPaymentsBlocked;
  obj4.isFollowingForumPost = stateFromStores27;
  obj4.showMediaPostSharePrompt = stateFromStores28;
  obj4.showPushFeedback = stateFromStores29;
  obj4.cacheStoreLoaded = "initializing" !== stateFromStores30;
  obj4.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj4.selectedSummary = stateFromStores31;
  obj4.keyboardType = tmp87;
  obj4.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj4.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj4.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj4.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj4.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj4.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj4.channelPolls = tmp99;
  obj4.messageReferencePolls = tmp101;
  obj4.explicitMediaFalsePositiveInfo = stateFromStores32;
  obj4.familyCenterPendingConnection = stateFromStores33;
  obj4.threadStartingReferenceMessage = stateFromStores16;
  obj4.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
  obj4.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
  obj4.resolvedReferralTrialOfferIds = stateFromStoresArray7;
  let id2;
  if (trialOffer != null) {
    id2 = trialOffer.id;
  }
  obj4.referralTrialOfferId = id2;
  obj4.isPremiumTier2User = stateFromStores8;
  obj4.activityInviteMessageIds = tmp25;
  obj4.guildInviteColorsFetched = colorStore;
  obj4.isAgeVerified = isAgeVerified;
  obj4.guildEmojis = stateFromStores36;
  obj4.enableSwipeActions = isMessageSwipeActionsEnabled;
  obj4.selfActivities = stateFromStoresArray8;
  obj4.activityLaunchJoinStates = stateFromStoresObject6;
  obj4.authorizedAppsTokens = stateFromStoresArray9;
  obj4.currentUserDisplayNameStyles = stateFromStores38;
  obj4.voiceInviteDataByChannelId = stateFromStoresObject5;
  let officialMessageColor;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  obj4.officialMessageColor = officialMessageColor;
  const merged = Object.assign(channel);
  items77[1] = tmp121(stateFromStores(tmp2[94]), obj4);
  obj3.children = items77;
  return tmp117(tmp22Result, obj3);
}));
forwardRefResult.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
