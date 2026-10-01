// Module ID: 10968
// Function ID: 10969
// Name: Messages
// Dependencies: [32, 19, 4825, 2044, 7596, 5063, 10969, 6896, 4852, 10850, 5771, 4750, 6711, 6585, 7397, 7380, 6946, 6877, 7570, 7383, 10970, 7384, 6528, 5049, 10971, 6872, 10972, 7093, 7013, 10887, 4471, 6724, 2112, 1182, 502, 2045, 7094, 10973, 2108, 2067, 5725, 4817, 5056, 4469, 4876, 4859, 4851, 4854, 7257, 1372, 4855, 5822, 11000, 4860, 1074, 1374, 21, 504, 12, 558, 6584, 1370, 2021, 11001, 11008, 11012, 11015, 10681, 6869, 4488, 7423, 5744, 10907, 10908, 10822, 7419, 6837, 11019, 4703, 10889, 7331, 7349, 10450, 10846, 7719, 5048, 10847, 7569, 11020, 11023, 7589, 7154, 11024, 11027, 5437, 11028, 2]

// Module 10968 (Messages)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10450 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10822 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 7596 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import CacheStore from "CacheStore" /* 6896 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10850 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6711 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6585 */;
import BasicGuildStore from "BasicGuildStore" /* 7397 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7380 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6877 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7570 */;
import InteractionStore from "InteractionStore" /* 7383 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 10970 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7384 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6528 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5049 */;
import PollsInteractionStore from "PollsInteractionStore" /* 10971 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6872 */;
import PushFeedbackStore from "PushFeedbackStore" /* 10972 */;
import PendingReplyStore from "PendingReplyStore" /* 7093 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7013 */;
import SummaryStore from "SummaryStore" /* 10887 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import EditMessageStore from "EditMessageStore" /* 7094 */;
import GiftCodeStore from "GiftCodeStore" /* 10973 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5725 */;
import InviteStore from "InviteStore" /* 4817 */;
import MessageStore from "MessageStore" /* 5056 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import UploadStore from "UploadStore" /* 7257 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import SKUStore from "SKUStore" /* 5822 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11000 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let channel, closure_6, findActivity, invites, messageReference, relevantUserTrialOffer, set, state, voiceStatesForChannelAlt;

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
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = PollsInteractionStore);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = Constants);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = PremiumConstants);
({ jsx: closure_65, jsxs: closure_66 } = Fragment);
const forwardRefResult = react.forwardRef((channel, ref) => {
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
  let items68;
  let items82;
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
  let tmp27;
  let tmp67;
  let tmp68;
  let unloadableContentEntryMessageIds;
  let unloadedContentEntryMessageIds;
  let useReducedMotion;
  let version;
  const f92389 = () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  };
  channel = channel.channel;
  let tmp = channel;
  let tmp2 = id;
  let obj = channel(id[57]);
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  const items2 = [GuildStore];
  const obj2 = channel(id[57]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const items3 = [AuthenticationStore];
  const tmpResult = tmp(tmp2[57]);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp(tmp2[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const items4 = [ThemeStore];
  const tmpResult77 = tmp(tmp2[57]);
  const stateFromStores3 = tmpResult77.useStateFromStores(items4, () => theme.theme, []);
  const items5 = [stateFromStores];
  const tmpResult78 = tmp(tmp2[63]);
  const isMessageSwipeActionsEnabled = tmpResult78.useIsMessageSwipeActionsEnabled();
  const memo = stateFromStores1.useMemo(() => {
    const obj = {};
    const item = stateFromStores.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items5);
  const items6 = [PresenceStore];
  const items7 = [memo];
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmpResult79 = tmp(tmp2[57]);
  const stateFromStoresObject = tmpResult79.useStateFromStoresObject(items6, () => {
    let primaryActivity;
    const obj = stateFromStores(id[58]);
    return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
  }, items7);
  const tmp19 = PresenceStore;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const items8 = [stateFromStores, application_id];
  const memo1 = obj6.useMemo(() => {
    set = new Set();
    const item = stateFromStores.forEach((applicationId) => {
      const tmp = null != applicationId.applicationId && null == applicationId.application;
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    if (null != application_id) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items8);
  let closure_3 = obj6.useRef([]);
  const items9 = [memo1];
  const effect = obj6.useEffect(() => {
    const obj = channel(id[59]);
    const tmp = channel;
    const tmp4 = ref;
    if (!obj.areArraysShallowEqual(memo1, ref.current)) {
      const fetchApplications = stateFromStores(id[60]).fetchApplications;
      stateFromStores(id[60]);
      const arr = stateFromStores(id[58])(memo1);
      const found = arr.filter(tmp(tmp2[61]).isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      tmp4.current = memo1;
    }
  }, items9);
  [tmp27, r10127] = guildId(stateFromStores(tmp2[64])(stateFromStores, channel), 2);
  guildId(stateFromStores(tmp2[64])(stateFromStores, channel), 2);
  const items10 = [InviteStore];
  const tmpResult80 = tmp(tmp2[57]);
  const stateFromStores4 = tmpResult80.useStateFromStores(items10, () => InviteStore.getInvites(), []);
  const tmpResult81 = tmp(tmp2[65]);
  const fetchVoiceChannelInviteStartTimes = tmpResult81.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const items11 = [ApplicationDirectoryApplicationsStore];
  const tmpResult82 = tmp(tmp2[57]);
  const stateFromStoresObject1 = tmpResult82.useStateFromStoresObject(items11, () => {
    const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    return obj;
  }, []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject1);
  const items12 = [items68];
  const tmpResult83 = tmp(tmp2[57]);
  const stateFromStoresArray = tmpResult83.useStateFromStoresArray(items12, () => items68.getFetchingOrFailedFetchingIds());
  const items13 = [channelSummariesExperiment];
  const tmpResult84 = tmp(tmp2[57]);
  const stateFromStoresArray1 = tmpResult84.useStateFromStoresArray(items13, () => channelSummariesExperiment.getFetchingIds());
  const items14 = [SKUStore];
  const tmpResult85 = tmp(tmp2[57]);
  const stateFromStoresArray2 = tmpResult85.useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
  const items15 = [closure_6];
  const items16 = [id];
  const tmpResult86 = tmp(tmp2[57]);
  const stateFromStoresArray3 = tmpResult86.useStateFromStoresArray(items15, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items16);
  const items17 = [closure_6, tmp19];
  const tmpResult87 = tmp(tmp2[57]);
  const stateFromStoresArray4 = tmpResult87.useStateFromStoresArray(items17, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop(iter) {
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
      let _loopResult = _loop(iter.next());
      continue;
    }
    return items;
  });
  const items18 = [closure_6];
  const tmpResult88 = tmp(tmp2[57]);
  const stateFromStoresArray5 = tmpResult88.useStateFromStoresArray(items18, () => {
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
  const items19 = [closure_6];
  const tmpResult89 = tmp(tmp2[57]);
  const stateFromStoresArray6 = tmpResult89.useStateFromStoresArray(items19, () => {
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
  const items20 = [MediaPostEmbedStore];
  const tmpResult90 = tmp(tmp2[57]);
  const stateFromStores5 = tmpResult90.useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
  const items21 = [GuildTemplateStore];
  const tmpResult91 = tmp(tmp2[57]);
  const stateFromStores6 = tmpResult91.useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
  const items22 = [stateFromStoresArray8];
  const tmpResult92 = tmp(tmp2[57]);
  const stateFromStores7 = tmpResult92.useStateFromStores(items22, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult93 = tmp(tmp2[66]);
  const codedLinksExperimentEmbeds = tmpResult93.useCodedLinksExperimentEmbeds();
  const tmpResult94 = tmp(tmp2[67]);
  const quests1 = tmpResult94.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  let found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[61]).isNotNullish);
  const items23 = [ReferralTrialStore];
  const tmpResult95 = tmp(tmp2[57]);
  const stateFromStoresArray7 = tmpResult95.useStateFromStoresArray(items23, () => {
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
  const tmpResult96 = tmp(tmp2[68]);
  const trialOffer = tmpResult96.useTrialOffer(closure_63);
  const items24 = [UserStore];
  const tmpResult97 = tmp(tmp2[57]);
  const stateFromStores8 = tmpResult97.useStateFromStores(items24, () => {
    const obj = stateFromStores(id[69]);
    return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
  });
  const items25 = [EditMessageStore];
  const items26 = [id];
  const tmpResult98 = tmp(tmp2[57]);
  const stateFromStores9 = tmpResult98.useStateFromStores(items25, () => EditMessageStore.getEditingMessageId(id), items26);
  const items27 = [PendingReplyStore];
  const items28 = [id];
  const tmpResult99 = tmp(tmp2[57]);
  const stateFromStores10 = tmpResult99.useStateFromStores(items27, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items28);
  const items29 = [ReadStateStore];
  const items30 = [id];
  const tmpResult100 = tmp(tmp2[57]);
  const stateFromStores11 = tmpResult100.useStateFromStores(items29, () => ReadStateStore.getOldestUnreadMessageId(id), items30);
  const items31 = [GuildVerificationStore];
  const items32 = [guildId];
  const tmpResult101 = tmp(tmp2[57]);
  const stateFromStores12 = tmpResult101.useStateFromStores(items31, () => {
    const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items32);
  const items33 = [PermissionStore];
  const items34 = [channel];
  const tmpResult102 = tmp(tmp2[57]);
  const stateFromStores13 = tmpResult102.useStateFromStores(items33, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items34);
  const items35 = [VoiceStateStore];
  const items36 = [stateFromStores2];
  const tmp54 = stateFromStores(tmp2[70])(id);
  const tmpResult103 = tmp(tmp2[57]);
  const stateFromStores14 = tmpResult103.useStateFromStores(items35, () => VoiceStateStore.getUserVoiceChannelId(internalBinaryWrite2, stateFromStores2), items36);
  const items37 = [RTCConnectionStore];
  const tmpResult104 = tmp(tmp2[57]);
  const stateFromStores15 = tmpResult104.useStateFromStores(items37, () => channelId.getChannelId(), []);
  const items38 = [ReferencedMessageStore];
  const items39 = [channel];
  const tmpResult105 = tmp(tmp2[57]);
  const stateFromStores16 = tmpResult105.useStateFromStores(items38, () => {
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
  }, items39);
  const items40 = [GiftCodeStore];
  const tmpResult106 = tmp(tmp2[57]);
  const stateFromStoresObject2 = tmpResult106.useStateFromStoresObject(items40, () => {
    const obj = { resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() };
    return obj;
  }, []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
  const items41 = [ChannelRTCStore];
  const items42 = [id];
  const tmpResult107 = tmp(tmp2[57]);
  const stateFromStores17 = tmpResult107.useStateFromStores(items41, () => ChannelRTCStore.getParticipants(id).length, items42);
  const items43 = [UploadStore];
  const items44 = [id];
  const tmpResult108 = tmp(tmp2[57]);
  const stateFromStores18 = tmpResult108.useStateFromStores(items43, () => UploadStore.getFiles(id), items44);
  const items45 = [ReferencedMessageStore];
  const items46 = [id];
  const tmpResult109 = tmp(tmp2[57]);
  const stateFromStores19 = tmpResult109.useStateFromStores(items45, () => ReferencedMessageStore.getReplyIdsForChannel(id), items46);
  const items47 = [stateFromStores2];
  const tmpResult110 = tmp(tmp2[57]);
  const stateFromStoresObject3 = tmpResult110.useStateFromStoresObject(items47, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject3);
  const items48 = [ThreadMessageStore];
  const items49 = [id];
  const tmpResult111 = tmp(tmp2[57]);
  const stateFromStores20 = tmpResult111.useStateFromStores(items48, () => ThreadMessageStore.getChannelThreadsVersion(id), items49);
  const items50 = [InteractionStore];
  const tmpResult112 = tmp(tmp2[57]);
  const stateFromStoresObject4 = tmpResult112.useStateFromStoresObject(items50, () => messageInteractionStates.getMessageInteractionStates());
  const items51 = [LocalInteractionComponentStateStore];
  const tmpResult113 = tmp(tmp2[57]);
  [tmp67, tmp68] = guildId(tmpResult113.useStateFromStores(items51, f92389, [], tmp(tmp2[71]).isVersionEqual), 2);
  guildId(tmpResult113.useStateFromStores(items51, f92389, [], tmp(tmp2[71]).isVersionEqual), 2);
  const items52 = [ExperimentStore];
  const tmpResult114 = tmp(tmp2[57]);
  let stateFromStores21 = tmpResult114.useStateFromStores(items52, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult115 = tmp(tmp2[72]);
  const isSpamMessageRequest = tmpResult115.useIsSpamMessageRequest(channel.id);
  let tmp72 = null != stateFromStores;
  const tmpResult116 = tmp(tmp2[73]);
  const isMessageRequest = tmpResult116.useIsMessageRequest(channel.id);
  const tmp25 = guildId;
  const tmp28 = InviteStore;
  const tmp52 = PermissionStore;
  const tmp55 = VoiceStateStore;
  if (tmp72) {
    tmp72 = stateFromStores.ready || stateFromStores.cached;
  }
  const items53 = [GuildScheduledEventStore];
  const tmp74 = null != stateFromStores && stateFromStores.cached;
  const tmp75 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult117 = tmp(tmp2[57]);
  const stateFromStores22 = tmpResult117.useStateFromStores(items53, () => rsvpVersion.getRsvpVersion());
  const items54 = [GuildAutomodMessageStore];
  const tmpResult118 = tmp(tmp2[57]);
  const stateFromStores23 = tmpResult118.useStateFromStores(items54, () => messagesVersion.getMessagesVersion());
  const items55 = [GuildMemberStore];
  const tmpResult119 = tmp(tmp2[57]);
  const stateFromStores24 = tmpResult119.useStateFromStores(items55, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const items56 = [GuildMemberStore];
  const items57 = [guildId, stateFromStores];
  const tmpResult120 = tmp(tmp2[57]);
  const stateFromStoresObject5 = tmpResult120.useStateFromStoresObject(items56, () => {
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
  }, items57);
  const items58 = [tmp52];
  const tmpResult121 = tmp(tmp2[57]);
  const stateFromStores25 = tmpResult121.useStateFromStores(items58, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  let id1;
  const useCurrentUserCommunicationDisabled = tmp(tmp2[75]).useCurrentUserCommunicationDisabled;
  tmp(tmp2[75]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const items59 = [LocaleStore];
  const tmp83 = tmp25(useCurrentUserCommunicationDisabled(id1), 2)[1];
  const tmpResult123 = tmp(tmp2[57]);
  const stateFromStores26 = tmpResult123.useStateFromStores(items59, () => locale.locale);
  const tmpResult124 = tmp(tmp2[76]);
  const isPaymentsBlocked = tmpResult124.useIsPaymentsBlocked();
  const items60 = [JoinedThreadsStore];
  const tmpResult125 = tmp(tmp2[57]);
  const stateFromStores27 = tmpResult125.useStateFromStores(items60, () => {
    const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
    return hasJoinedResult;
  });
  const items61 = [MediaPostSharePromptStore];
  const tmpResult126 = tmp(tmp2[57]);
  const stateFromStores28 = tmpResult126.useStateFromStores(items61, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const items62 = [PushFeedbackStore];
  const tmpResult127 = tmp(tmp2[57]);
  const stateFromStores29 = tmpResult127.useStateFromStores(items62, () => eligible.isEligible());
  const items63 = [CacheStore];
  const tmpResult128 = tmp(tmp2[57]);
  const stateFromStores30 = tmpResult128.useStateFromStores(items63, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult129 = tmp(tmp2[77]);
  const messageJumpAndroidKeyboardHeight = tmpResult129.useMessageJumpAndroidKeyboardHeight();
  const tmp91 = stateFromStores(tmp2[78])();
  const tmpResult130 = tmp(tmp2[79]);
  channelSummariesExperiment = tmpResult130.useChannelSummariesExperiment(channel);
  const items64 = [SummaryStore];
  const items65 = [channelSummariesExperiment, channel.id];
  const tmpResult131 = tmp(tmp2[57]);
  const stateFromStores31 = tmpResult131.useStateFromStores(items64, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items65);
  const tmpResult132 = tmp(tmp2[80]);
  const isConversationTopicHeaderEnabled = tmpResult132.useIsConversationTopicHeaderEnabled(channel.guild_id, "messages_conversation_header");
  let tmp95;
  if (isConversationTopicHeaderEnabled) {
    tmp95 = tmp24(tmp2[81])(channel.id);
  }
  const items66 = [channel.id, , , , ];
  ({ hasMoreAfter: arr70[1], hasMoreBefore: arr70[2], length: arr70[3], ready: arr70[4] } = stateFromStores);
  const effect1 = obj6.useEffect(() => {
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
  }, items66);
  const tmpResult133 = tmp(tmp2[83]);
  const shouldTrackAnnouncementMessageViews = tmpResult133.useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult134 = tmp(tmp2[83]);
  const shouldTrackRichPresenceInviteEmbedViews = tmpResult134.useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult135 = tmp(tmp2[83]);
  const shouldTrackOfficialMessageViews = tmpResult135.useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult136 = tmp(tmp2[83]);
  const shouldTrackVoiceInviteEmbedViews = tmpResult136.useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult137 = tmp(tmp2[84]);
  const shouldDisplaySpoilerObscurity = tmpResult137.useShouldDisplaySpoilerObscurity(channel);
  const items67 = [id, guildId];
  const tmpResult138 = tmp(tmp2[85]);
  const isAgeVerified = tmpResult138.useIsAgeVerified();
  const effect2 = obj6.useEffect(() => {
    let obj = stateFromStores(id[86]);
    obj.handleChannelSelect();
    return () => {
      const obj = stateFromStores(id[86]);
      obj.handleChannelSelect();
    };
  }, items67);
  const tmpResult139 = tmp(tmp2[87]);
  const shouldDisableInteractiveComponents = tmpResult139.useShouldDisableInteractiveComponents(channel.id);
  items68 = [];
  const tmp105 = closure_27(channel.id);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items68.push(message_id);
    }
  });
  const items69 = [ExplicitMediaStore];
  const items70 = [id];
  const tmp107 = closure_28(items68);
  const tmpResult140 = tmp(tmp2[57]);
  const stateFromStores32 = tmpResult140.useStateFromStores(items69, () => ExplicitMediaStore.getChannelFpInfo(id), items70);
  const items71 = [FamilyCenterPendingConnectionStore];
  const tmpResult141 = tmp(tmp2[57]);
  const stateFromStores33 = tmpResult141.useStateFromStores(items71, () => pendingConnection.getPendingConnection());
  const tmp110 = stateFromStores(tmp2[88])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[89])(stateFromStores));
  stateFromStores(tmp2[89])(stateFromStores);
  const items72 = [UserStore];
  const tmpResult142 = tmp(tmp2[57]);
  const stateFromStores34 = tmpResult142.useStateFromStores(items72, () => {
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
  const items73 = [BasicGuildStore];
  const tmpResult143 = tmp(tmp2[57]);
  const stateFromStores35 = tmpResult143.useStateFromStores(items73, () => version.getVersion());
  const tmpResult144 = tmp(tmp2[90]);
  const colorStore = tmpResult144.useColorStore((palette) => Object.keys(palette.palette).length);
  const items74 = [EmojiStore];
  const tmpResult145 = tmp(tmp2[57]);
  const stateFromStores36 = tmpResult145.useStateFromStores(items74, () => EmojiStore.getGuildEmoji(guildId));
  const items75 = [tmp55];
  const items76 = [guildId];
  const tmpResult146 = tmp(tmp2[57]);
  const stateFromStores37 = tmpResult146.useStateFromStores(items75, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      const obj = messages_MessagesUtils;
      return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items76);
  const items77 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp28, ChannelStore];
  const tmpResult147 = tmp(tmp2[57]);
  const stateFromStoresObject6 = tmpResult147.useStateFromStoresObject(items77, () => {
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
        let obj4 = channel(id[91]);
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
  const items78 = [SessionsStore];
  const tmpResult148 = tmp(tmp2[57]);
  stateFromStoresArray8 = tmpResult148.useStateFromStoresArray(items78, () => {
    const items = [...closure_1_51.getRemoteActivities(), ...closure_1_51.getHiddenActivities()];
    return items.filter(channel(id[61]).isNotNullish);
  });
  const items79 = [ActivityLauncherStore];
  const tmpResult149 = tmp(tmp2[57]);
  const stateFromStoresObject7 = tmpResult149.useStateFromStoresObject(items79, () => stateFromStoresArray8.reduce((acc, application_id) => {
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
  const items80 = [AuthorizedAppsStore];
  const tmpResult150 = tmp(tmp2[57]);
  const stateFromStoresArray9 = tmpResult150.useStateFromStoresArray(items80, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const items81 = [UserStore];
  const tmpResult151 = tmp(tmp2[57]);
  const stateFromStores38 = tmpResult151.useStateFromStores(items81, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult152 = tmp(tmp2[92]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmpResult152.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: tmp(tmp2[93]).Profiles.Messages, children: items82 };
  const tmp24Result = stateFromStores(tmp2[93]);
  let isThreadResult = channel.isThread();
  const tmp123 = closure_66;
  if (isThreadResult) {
    isThreadResult = closure_65(tmp24(tmp2[94]), { absolute: true });
  }
  items82 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp110, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp72, isMessagesCached: tmp74, isMessagesAckable: tmp75, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: stateFromStoresObject, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp54, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: stateFromStores37, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject5, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject4, interactionComponentStates: tmp67, interactionComponentStatesVersion: tmp68, hasLoadedExperiments: stateFromStores21, guildSystemChannelFlags: systemChannelFlags, currentUserCommunicationDisabled: tmp83, renderCommunicationDisabled: stateFromStores25, userSettingsLocale: stateFromStores26, paymentsBlocked: isPaymentsBlocked, isFollowingForumPost: stateFromStores27, showMediaPostSharePrompt: stateFromStores28, showPushFeedback: stateFromStores29, cacheStoreLoaded: "initializing" !== stateFromStores30, androidKeyboardHeight: messageJumpAndroidKeyboardHeight, selectedSummary: stateFromStores31, selectedConversation: tmp95, keyboardType: tmp91, shouldTrackAnnouncementMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackOfficialMessageViews, shouldTrackVoiceInviteEmbedViews, shouldObscureSpoiler: shouldDisplaySpoilerObscurity, shouldDisableInteractiveComponents, channelPolls: tmp105, messageReferencePolls: tmp107, explicitMediaFalsePositiveInfo: stateFromStores32, familyCenterPendingConnection: stateFromStores33, threadStartingReferenceMessage: stateFromStores16, unloadedContentEntryMessageIds, unloadableContentEntryMessageIds, resolvedReferralTrialOfferIds: stateFromStoresArray7, referralTrialOfferId: id2, isPremiumTier2User: stateFromStores8, activityInviteMessageIds: tmp27, guildInviteColorsFetched: colorStore, isAgeVerified, guildEmojis: stateFromStores36, enableSwipeActions: isMessageSwipeActionsEnabled, selfActivities: stateFromStoresArray8, activityLaunchJoinStates: stateFromStoresObject7, authorizedAppsTokens: stateFromStoresArray9, currentUserDisplayNameStyles: stateFromStores38, voiceInviteDataByChannelId: stateFromStoresObject6, officialMessageColor };
  const tmp127 = closure_65;
  const tmp24Result2 = stateFromStores(tmp2[95]);
  if (stateFromStores21) {
    stateFromStores21 = tmp72;
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
  items82[1] = tmp127(tmp24Result2, obj4);
  return tmp123(tmp24Result, obj3);
});
forwardRefResult.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
