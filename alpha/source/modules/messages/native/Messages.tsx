// Module ID: 11360
// Function ID: 11361
// Name: Messages
// Dependencies: [32, 19, 5015, 4862, 8722, 2038, 11361, 7655, 6843, 10116, 6796, 5238, 7464, 11362, 6882, 8413, 8383, 6855, 7637, 8697, 8389, 11365, 8390, 7276, 11366, 11367, 7632, 11368, 7822, 7766, 10122, 4948, 7477, 2062, 1192, 502, 4863, 7823, 11369, 4926, 4885, 6708, 5749, 6061, 4946, 5761, 5764, 6842, 5766, 8392, 1383, 5679, 6896, 11523, 5767, 1072, 11363, 1385, 21, 504, 12, 558, 6881, 1379, 4839, 11534, 11541, 11545, 11548, 9681, 7629, 2047, 8438, 6766, 11258, 11259, 9894, 8434, 7602, 11552, 5209, 10124, 9866, 11553, 10112, 8845, 6726, 10113, 8696, 11554, 11558, 8715, 7878, 11559, 11562, 10736, 11563, 2]

// Module 11360 (Messages)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9894 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11553 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8722 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11361 */;
import CacheStore from "CacheStore" /* 7655 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10116 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7464 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11362 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6882 */;
import BasicGuildStore from "BasicGuildStore" /* 8413 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8383 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7637 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8697 */;
import InteractionStore from "InteractionStore" /* 8389 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11365 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8390 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7276 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 11366 */;
import PollsInteractionStore from "PollsInteractionStore" /* 11367 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7632 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11368 */;
import PendingReplyStore from "PendingReplyStore" /* 7822 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7766 */;
import SummaryStore from "SummaryStore" /* 10122 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4948 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7477 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import EditMessageStore from "EditMessageStore" /* 7823 */;
import GiftCodeStore from "GiftCodeStore" /* 11369 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6708 */;
import InviteStore from "InviteStore" /* 5749 */;
import MessageStore from "MessageStore" /* 6061 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import SessionsStore from "SessionsStore" /* 5766 */;
import UploadStore from "UploadStore" /* 8392 */;
import UserStore from "UserStore" /* 1383 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import SKUStore from "SKUStore" /* 6896 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11523 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5767 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let invites, messageReference, relevantUserTrialOffer, set, state, voiceStatesForChannelAlt;

let closure_28;
let closure_29;
let closure_59;
let closure_60;
let closure_61;
let closure_62;
let closure_63;
let closure_65;
let closure_66;
let closure_67;
let closure_68;
class MessagesConnected {
  constructor(ref) {
    let TIER_2;
    let acceptingGiftCodes;
    let appDirectoryEmbedApplicationFetchStates;
    let appDirectoryEmbedApplications;
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
    let items85;
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
    let tmp29;
    let tmp71;
    let tmp72;
    let unloadableContentEntryMessageIds;
    let unloadedContentEntryMessageIds;
    let useReducedMotion;
    let version;
    const f99203 = () => {
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
    let items71;
    let stateFromStoresArray9;
    let channel = merged.channel;
    let tmp2 = channel;
    let tmp3 = id;
    let obj = channel(id[59]);
    let items = [MessageStore];
    const items1 = [channel.id];
    const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
    id = channel.id;
    const guildId = channel.getGuildId();
    const items2 = [GuildStore];
    let tmp5 = GuildStore;
    const obj2 = channel(id[59]);
    const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
    let systemChannelFlags;
    if (stateFromStores1 != null) {
      systemChannelFlags = stateFromStores1.systemChannelFlags;
    }
    const items3 = [AuthenticationStore];
    const tmp2Result = tmp2(tmp3[59]);
    stateFromStores2 = tmp2Result.useStateFromStores(items3, () => id.getId(), []);
    const InlineAttachmentMedia = tmp2(tmp3[64]).InlineAttachmentMedia;
    const setting = InlineAttachmentMedia.useSetting();
    const InlineEmbedMedia = tmp2(tmp3[64]).InlineEmbedMedia;
    const setting1 = InlineEmbedMedia.useSetting();
    const RenderEmbeds = tmp2(tmp3[64]).RenderEmbeds;
    const setting2 = RenderEmbeds.useSetting();
    const RenderReactions = tmp2(tmp3[64]).RenderReactions;
    const setting3 = RenderReactions.useSetting();
    const DeveloperMode = tmp2(tmp3[64]).DeveloperMode;
    const setting4 = DeveloperMode.useSetting();
    const AnimateEmoji = tmp2(tmp3[64]).AnimateEmoji;
    const setting5 = AnimateEmoji.useSetting();
    const AnimateStickers = tmp2(tmp3[64]).AnimateStickers;
    const setting6 = AnimateStickers.useSetting();
    const GifAutoPlay = tmp2(tmp3[64]).GifAutoPlay;
    const setting7 = GifAutoPlay.useSetting();
    const TimestampHourCycle = tmp2(tmp3[64]).TimestampHourCycle;
    const setting8 = TimestampHourCycle.useSetting();
    const items4 = [ThemeStore];
    const tmp2Result78 = tmp2(tmp3[59]);
    const stateFromStores3 = tmp2Result78.useStateFromStores(items4, () => theme.theme, []);
    const items5 = [stateFromStores];
    const tmp2Result79 = tmp2(tmp3[65]);
    const isMessageSwipeActionsEnabled = tmp2Result79.useIsMessageSwipeActionsEnabled();
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
    const tmp2Result80 = tmp2(tmp3[59]);
    const stateFromStoresObject = tmp2Result80.useStateFromStoresObject(items6, () => {
      let primaryActivity;
      const obj = stateFromStores(id[60]);
      return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    }, items7);
    const tmp21 = PresenceStore;
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
      const obj = channel(id[61]);
      const tmp = channel;
      const tmp4 = ref;
      if (!obj.areArraysShallowEqual(memo1, ref.current)) {
        const fetchApplications = stateFromStores(id[62]).fetchApplications;
        stateFromStores(id[62]);
        const arr = stateFromStores(id[60])(memo1);
        const found = arr.filter(tmp(tmp2[63]).isNotNullish);
        const iter = found.uniq();
        const applications = fetchApplications(iter.value(), false);
        tmp4.current = memo1;
      }
    }, items9);
    [tmp29, r10132] = guildId(stateFromStores(tmp3[66])(stateFromStores, channel), 2);
    guildId(stateFromStores(tmp3[66])(stateFromStores, channel), 2);
    const items10 = [InviteStore];
    const tmp2Result81 = tmp2(tmp3[59]);
    const stateFromStores4 = tmp2Result81.useStateFromStores(items10, () => InviteStore.getInvites(), []);
    const tmp2Result82 = tmp2(tmp3[67]);
    const fetchVoiceChannelInviteStartTimes = tmp2Result82.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
    const items11 = [ApplicationDirectoryApplicationsStore];
    const tmp2Result83 = tmp2(tmp3[59]);
    const stateFromStoresObject1 = tmp2Result83.useStateFromStoresObject(items11, () => {
      const obj = { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
      return obj;
    }, []);
    ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject1);
    const items12 = [channelSummariesExperiment];
    const tmp2Result84 = tmp2(tmp3[59]);
    const stateFromStoresArray = tmp2Result84.useStateFromStoresArray(items12, () => channelSummariesExperiment.getFetchingOrFailedFetchingIds());
    const items13 = [closure_7];
    const tmp2Result85 = tmp2(tmp3[59]);
    const stateFromStoresArray1 = tmp2Result85.useStateFromStoresArray(items13, () => closure_7.getFetchingIds());
    const items14 = [SKUStore];
    const tmp2Result86 = tmp2(tmp3[59]);
    const stateFromStoresArray2 = tmp2Result86.useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
    const items15 = [stateFromStores7];
    const items16 = [id];
    const tmp2Result87 = tmp2(tmp3[59]);
    const stateFromStoresArray3 = tmp2Result87.useStateFromStoresArray(items15, () => {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
      const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
      return mapped.filter(GlobalUtils.isNotNullish);
    }, items16);
    const items17 = [stateFromStores7, tmp21];
    const tmp2Result88 = tmp2(tmp3[59]);
    const stateFromStoresArray4 = tmp2Result88.useStateFromStoresArray(items17, () => {
      const items = [];
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
      function _loop(iter) {
        let closure_0 = iter;
        const userIds = iter.userIds;
        iter = userIds.values();
        const value = iter.next().value;
        let findActivityResult;
        if (null != value) {
          findActivityResult = closure_2_49.findActivity(value, (application_id) => application_id.application_id === applicationId.applicationId);
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
        let _loopResult = _loop(iter.next());
        continue;
      }
      return items;
    });
    const items18 = [stateFromStores7];
    const tmp2Result89 = tmp2(tmp3[59]);
    const stateFromStoresArray5 = tmp2Result89.useStateFromStoresArray(items18, () => {
      set = new Set();
      const embeddedActivitiesByChannel = stateFromStores7.getEmbeddedActivitiesByChannel();
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
    const items19 = [stateFromStores7];
    const tmp2Result90 = tmp2(tmp3[59]);
    const stateFromStoresArray6 = tmp2Result90.useStateFromStoresArray(items19, () => {
      let tmp6;
      const launchStates = stateFromStores7.getLaunchStates();
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
    const tmp2Result91 = tmp2(tmp3[59]);
    const stateFromStores5 = tmp2Result91.useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
    const items21 = [GuildTemplateStore];
    const tmp2Result92 = tmp2(tmp3[59]);
    const stateFromStores6 = tmp2Result92.useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
    const items22 = [GameOrganizationInviteStore];
    const tmp2Result93 = tmp2(tmp3[59]);
    stateFromStores7 = tmp2Result93.useStateFromStores(items22, () => invites.getInvites(), []);
    const items23 = [tmp5];
    const items24 = [stateFromStores7];
    const tmp2Result94 = tmp2(tmp3[59]);
    const stateFromStoresArray7 = tmp2Result94.useStateFromStoresArray(items23, () => {
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
    }, items24);
    const items25 = [items71];
    const tmp2Result95 = tmp2(tmp3[59]);
    const stateFromStores8 = tmp2Result95.useStateFromStores(items25, () => items71.getBuildOverrides(), []);
    const tmp2Result96 = tmp2(tmp3[68]);
    const codedLinksExperimentEmbeds = tmp2Result96.useCodedLinksExperimentEmbeds();
    const tmp2Result97 = tmp2(tmp3[69]);
    const quests1 = tmp2Result97.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
    ({ quests, isFetchingCurrentQuests } = quests1);
    let found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
    let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
    closure_7 = mapped.filter(tmp2(tmp3[63]).isNotNullish);
    const items26 = [ReferralTrialStore];
    const tmp2Result98 = tmp2(tmp3[59]);
    const stateFromStoresArray8 = tmp2Result98.useStateFromStoresArray(items26, () => {
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
    const tmp2Result99 = tmp2(tmp3[70]);
    const trialOffer = tmp2Result99.useTrialOffer(closure_65);
    const items27 = [UserStore];
    const tmp2Result100 = tmp2(tmp3[59]);
    const stateFromStores9 = tmp2Result100.useStateFromStores(items27, () => {
      const obj = stateFromStores(id[71]);
      return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
    });
    const items28 = [EditMessageStore];
    const items29 = [id];
    const tmp2Result101 = tmp2(tmp3[59]);
    const stateFromStores10 = tmp2Result101.useStateFromStores(items28, () => EditMessageStore.getEditingMessageId(id), items29);
    const items30 = [PendingReplyStore];
    const items31 = [id];
    const tmp2Result102 = tmp2(tmp3[59]);
    const stateFromStores11 = tmp2Result102.useStateFromStores(items30, () => {
      const pendingReply = PendingReplyStore.getPendingReply(id);
      id = undefined;
      if (pendingReply != null) {
        id = pendingReply.message.id;
      }
      return id;
    }, items31);
    const items32 = [ReadStateStore];
    const items33 = [id];
    const tmp2Result103 = tmp2(tmp3[59]);
    const stateFromStores12 = tmp2Result103.useStateFromStores(items32, () => ReadStateStore.getOldestUnreadMessageId(id), items33);
    const items34 = [GuildVerificationStore];
    const items35 = [guildId];
    const tmp2Result104 = tmp2(tmp3[59]);
    const stateFromStores13 = tmp2Result104.useStateFromStores(items34, () => {
      const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
      return canChatInGuildResult;
    }, items35);
    const items36 = [PermissionStore];
    const items37 = [channel];
    const tmp2Result105 = tmp2(tmp3[59]);
    const stateFromStores14 = tmp2Result105.useStateFromStores(items36, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items37);
    const items38 = [VoiceStateStore];
    const items39 = [stateFromStores2];
    const tmp58 = stateFromStores(tmp3[72])(id);
    const tmp2Result106 = tmp2(tmp3[59]);
    const stateFromStores15 = tmp2Result106.useStateFromStores(items38, () => VoiceStateStore.getUserVoiceChannelId(set2, stateFromStores2), items39);
    const items40 = [RTCConnectionStore];
    const tmp2Result107 = tmp2(tmp3[59]);
    const stateFromStores16 = tmp2Result107.useStateFromStores(items40, () => channelId.getChannelId(), []);
    const items41 = [ReferencedMessageStore];
    const items42 = [channel];
    const tmp2Result108 = tmp2(tmp3[59]);
    const stateFromStores17 = tmp2Result108.useStateFromStores(items41, () => {
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
    }, items42);
    const items43 = [GiftCodeStore];
    const tmp2Result109 = tmp2(tmp3[59]);
    const stateFromStoresObject2 = tmp2Result109.useStateFromStoresObject(items43, () => {
      const obj = { resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() };
      return obj;
    }, []);
    ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
    const items44 = [ChannelRTCStore];
    const items45 = [id];
    const tmp2Result110 = tmp2(tmp3[59]);
    const stateFromStores18 = tmp2Result110.useStateFromStores(items44, () => ChannelRTCStore.getParticipants(id).length, items45);
    const items46 = [UploadStore];
    const items47 = [id];
    const tmp2Result111 = tmp2(tmp3[59]);
    const stateFromStores19 = tmp2Result111.useStateFromStores(items46, () => UploadStore.getFiles(id), items47);
    const items48 = [ReferencedMessageStore];
    const items49 = [id];
    const tmp2Result112 = tmp2(tmp3[59]);
    const stateFromStores20 = tmp2Result112.useStateFromStores(items48, () => ReferencedMessageStore.getReplyIdsForChannel(id), items49);
    const items50 = [stateFromStores2];
    const tmp2Result113 = tmp2(tmp3[59]);
    const stateFromStoresObject3 = tmp2Result113.useStateFromStoresObject(items50, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
    ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject3);
    const items51 = [ThreadMessageStore];
    const items52 = [id];
    const tmp2Result114 = tmp2(tmp3[59]);
    const stateFromStores21 = tmp2Result114.useStateFromStores(items51, () => ThreadMessageStore.getChannelThreadsVersion(id), items52);
    const items53 = [InteractionStore];
    const tmp2Result115 = tmp2(tmp3[59]);
    const stateFromStoresObject4 = tmp2Result115.useStateFromStoresObject(items53, () => messageInteractionStates.getMessageInteractionStates());
    const items54 = [LocalInteractionComponentStateStore];
    const tmp2Result116 = tmp2(tmp3[59]);
    [tmp71, tmp72] = guildId(tmp2Result116.useStateFromStores(items54, f99203, [], tmp2(tmp3[73]).isVersionEqual), 2);
    guildId(tmp2Result116.useStateFromStores(items54, f99203, [], tmp2(tmp3[73]).isVersionEqual), 2);
    const items55 = [ExperimentStore];
    const tmp2Result117 = tmp2(tmp3[59]);
    let stateFromStores22 = tmp2Result117.useStateFromStores(items55, () => hasLoadedExperiments.hasLoadedExperiments);
    const tmp2Result118 = tmp2(tmp3[74]);
    const isSpamMessageRequest = tmp2Result118.useIsSpamMessageRequest(channel.id);
    let tmp76 = null != stateFromStores;
    const tmp2Result119 = tmp2(tmp3[75]);
    const isMessageRequest = tmp2Result119.useIsMessageRequest(channel.id);
    const tmp27 = guildId;
    const tmp30 = InviteStore;
    const tmp56 = PermissionStore;
    const tmp59 = VoiceStateStore;
    if (tmp76) {
      tmp76 = stateFromStores.ready || stateFromStores.cached;
    }
    const items56 = [GuildScheduledEventStore];
    const tmp78 = null != stateFromStores && stateFromStores.cached;
    const tmp79 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
    const tmp2Result120 = tmp2(tmp3[59]);
    const stateFromStores23 = tmp2Result120.useStateFromStores(items56, () => rsvpVersion.getRsvpVersion());
    const items57 = [GuildAutomodMessageStore];
    const tmp2Result121 = tmp2(tmp3[59]);
    const stateFromStores24 = tmp2Result121.useStateFromStores(items57, () => messagesVersion.getMessagesVersion());
    const items58 = [GuildMemberStore];
    const tmp2Result122 = tmp2(tmp3[59]);
    const stateFromStores25 = tmp2Result122.useStateFromStores(items58, () => communicationDisabledVersion.getCommunicationDisabledVersion());
    const items59 = [GuildMemberStore];
    const items60 = [guildId, stateFromStores];
    const tmp2Result123 = tmp2(tmp3[59]);
    const stateFromStoresObject5 = tmp2Result123.useStateFromStoresObject(items59, () => {
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
    }, items60);
    const items61 = [tmp56];
    const tmp2Result124 = tmp2(tmp3[59]);
    const stateFromStores26 = tmp2Result124.useStateFromStores(items61, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
    let id1;
    const useCurrentUserCommunicationDisabled = tmp2(tmp3[77]).useCurrentUserCommunicationDisabled;
    tmp2(tmp3[77]);
    if (stateFromStores1 != null) {
      id1 = stateFromStores1.id;
    }
    const items62 = [LocaleStore];
    const tmp87 = tmp27(useCurrentUserCommunicationDisabled(id1), 2)[1];
    const tmp2Result126 = tmp2(tmp3[59]);
    const stateFromStores27 = tmp2Result126.useStateFromStores(items62, () => locale.locale);
    const tmp2Result127 = tmp2(tmp3[78]);
    const isPaymentsBlocked = tmp2Result127.useIsPaymentsBlocked();
    const items63 = [JoinedThreadsStore];
    const tmp2Result128 = tmp2(tmp3[59]);
    const stateFromStores28 = tmp2Result128.useStateFromStores(items63, () => {
      const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
      return hasJoinedResult;
    });
    const items64 = [MediaPostSharePromptStore];
    const tmp2Result129 = tmp2(tmp3[59]);
    const stateFromStores29 = tmp2Result129.useStateFromStores(items64, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
    const items65 = [PushFeedbackStore];
    const tmp2Result130 = tmp2(tmp3[59]);
    const stateFromStores30 = tmp2Result130.useStateFromStores(items65, () => eligible.isEligible());
    const items66 = [stateFromStoresArray9];
    const tmp2Result131 = tmp2(tmp3[59]);
    const stateFromStores31 = tmp2Result131.useStateFromStores(items66, () => stateFromStoresArray9.getLazyCacheStatus());
    const tmp2Result132 = tmp2(tmp3[79]);
    const messageJumpAndroidKeyboardHeight = tmp2Result132.useMessageJumpAndroidKeyboardHeight();
    const tmp95 = stateFromStores(tmp3[80])();
    const tmp2Result133 = tmp2(tmp3[81]);
    channelSummariesExperiment = tmp2Result133.useChannelSummariesExperiment(channel);
    const items67 = [SummaryStore];
    const items68 = [channelSummariesExperiment, channel.id];
    const tmp2Result134 = tmp2(tmp3[59]);
    const stateFromStores32 = tmp2Result134.useStateFromStores(items67, () => {
      let selectedSummaryResult = null;
      if (channelSummariesExperiment) {
        selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
      }
      return selectedSummaryResult;
    }, items68);
    const items69 = [channel.id, , , , ];
    ({ hasMoreAfter: arr73[1], hasMoreBefore: arr73[2], length: arr73[3], ready: arr73[4] } = stateFromStores);
    const tmp98 = stateFromStores(tmp3[82])(channel.id);
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
    }, items69);
    const tmp2Result135 = tmp2(tmp3[84]);
    const shouldTrackAnnouncementMessageViews = tmp2Result135.useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp76 });
    const tmp2Result136 = tmp2(tmp3[84]);
    const shouldTrackRichPresenceInviteEmbedViews = tmp2Result136.useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp76 });
    const tmp2Result137 = tmp2(tmp3[84]);
    const shouldTrackOfficialMessageViews = tmp2Result137.useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp76 });
    const tmp2Result138 = tmp2(tmp3[84]);
    const shouldTrackVoiceInviteEmbedViews = tmp2Result138.useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp76 });
    const tmp2Result139 = tmp2(tmp3[85]);
    const shouldDisplaySpoilerObscurity = tmp2Result139.useShouldDisplaySpoilerObscurity(channel);
    const items70 = [id, guildId];
    const tmp2Result140 = tmp2(tmp3[86]);
    const isAgeVerified = tmp2Result140.useIsAgeVerified();
    const effect2 = obj6.useEffect(() => {
      let obj = stateFromStores(id[87]);
      obj.handleChannelSelect();
      return () => {
        const obj = stateFromStores(id[87]);
        obj.handleChannelSelect();
      };
    }, items70);
    const tmp2Result141 = tmp2(tmp3[88]);
    const shouldDisableInteractiveComponents = tmp2Result141.useShouldDisableInteractiveComponents(channel.id);
    items71 = [];
    const tmp108 = closure_28(channel.id);
    let item = stateFromStores.forEach((messageReference) => {
      messageReference = messageReference.messageReference;
      let message_id;
      if (messageReference != null) {
        message_id = messageReference.message_id;
      }
      if (null != message_id) {
        items71.push(message_id);
      }
    });
    const items72 = [ExplicitMediaStore];
    const items73 = [id];
    const tmp110 = closure_29(items71);
    const tmp2Result142 = tmp2(tmp3[59]);
    const stateFromStores33 = tmp2Result142.useStateFromStores(items72, () => ExplicitMediaStore.getChannelFpInfo(id), items73);
    const items74 = [FamilyCenterPendingConnectionStore];
    const tmp2Result143 = tmp2(tmp3[59]);
    const stateFromStores34 = tmp2Result143.useStateFromStores(items74, () => pendingConnection.getPendingConnection());
    const tmp113 = stateFromStores(tmp3[89])();
    ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp3[90])(stateFromStores));
    stateFromStores(tmp3[90])(stateFromStores);
    const items75 = [UserStore];
    const tmp2Result144 = tmp2(tmp3[59]);
    const stateFromStores35 = tmp2Result144.useStateFromStores(items75, () => {
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
    const items76 = [BasicGuildStore];
    const tmp2Result145 = tmp2(tmp3[59]);
    const stateFromStores36 = tmp2Result145.useStateFromStores(items76, () => version.getVersion());
    const tmp2Result146 = tmp2(tmp3[91]);
    const colorStore = tmp2Result146.useColorStore((palette) => Object.keys(palette.palette).length);
    const items77 = [EmojiStore];
    const tmp2Result147 = tmp2(tmp3[59]);
    const stateFromStores37 = tmp2Result147.useStateFromStores(items77, () => EmojiStore.getGuildEmoji(guildId));
    const items78 = [tmp59];
    const items79 = [guildId];
    const tmp2Result148 = tmp2(tmp3[59]);
    const stateFromStores38 = tmp2Result148.useStateFromStores(items78, () => {
      if (null == guildId) {
        return null;
      } else {
        const voiceStates = VoiceStateStore.getVoiceStates(tmp);
        const obj = messages_MessagesUtils;
        return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
      }
    }, items79);
    const items80 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, tmp30, ChannelStore];
    const tmp2Result149 = tmp2(tmp3[59]);
    const stateFromStoresObject6 = tmp2Result149.useStateFromStoresObject(items80, () => {
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
          let obj4 = channel(id[92]);
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
    const items81 = [SessionsStore];
    const tmp2Result150 = tmp2(tmp3[59]);
    stateFromStoresArray9 = tmp2Result150.useStateFromStoresArray(items81, () => {
      const items = [...closure_1_52.getRemoteActivities(), ...closure_1_52.getHiddenActivities()];
      return items.filter(channel(id[63]).isNotNullish);
    });
    const items82 = [ActivityLauncherStore];
    const tmp2Result151 = tmp2(tmp3[59]);
    const stateFromStoresObject7 = tmp2Result151.useStateFromStoresObject(items82, () => stateFromStoresArray9.reduce((acc, application_id) => {
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
    const items83 = [AuthorizedAppsStore];
    const tmp2Result152 = tmp2(tmp3[59]);
    const stateFromStoresArray10 = tmp2Result152.useStateFromStoresArray(items83, () => {
      const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
      return items;
    }, []);
    const items84 = [UserStore];
    const tmp2Result153 = tmp2(tmp3[59]);
    const stateFromStores39 = tmp2Result153.useStateFromStores(items84, () => {
      const currentUser = authStore2.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      return displayNameStyles;
    });
    const tmp2Result154 = tmp2(tmp3[93]);
    const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2Result154.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
    const obj3 = { profile: tmp2(tmp3[94]).Profiles.Messages, children: items85 };
    const tmp26Result = stateFromStores(tmp3[94]);
    let isThreadResult = channel.isThread();
    const tmp126 = closure_68;
    if (isThreadResult) {
      isThreadResult = closure_67(tmp26(tmp3[95]), { absolute: true });
    }
    items85 = [isThreadResult, ];
    let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp113, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp76, isMessagesCached: tmp78, isMessagesAckable: tmp79, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: stateFromStoresObject, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, joinedGameOrganizationGuildIds: stateFromStoresArray7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp58, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject5, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject4, interactionComponentStates: tmp71, interactionComponentStatesVersion: tmp72, hasLoadedExperiments: stateFromStores22, guildSystemChannelFlags: systemChannelFlags, currentUserCommunicationDisabled: tmp87, renderCommunicationDisabled: stateFromStores26, userSettingsLocale: stateFromStores27, paymentsBlocked: isPaymentsBlocked, isFollowingForumPost: stateFromStores28, showMediaPostSharePrompt: stateFromStores29, showPushFeedback: stateFromStores30, cacheStoreLoaded: "initializing" !== stateFromStores31, androidKeyboardHeight: messageJumpAndroidKeyboardHeight, selectedSummary: stateFromStores32, selectedConversation: tmp98, keyboardType: tmp95, shouldTrackAnnouncementMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackOfficialMessageViews, shouldTrackVoiceInviteEmbedViews, shouldObscureSpoiler: shouldDisplaySpoilerObscurity, shouldDisableInteractiveComponents, channelPolls: tmp108, messageReferencePolls: tmp110, explicitMediaFalsePositiveInfo: stateFromStores33, familyCenterPendingConnection: stateFromStores34, threadStartingReferenceMessage: stateFromStores17, unloadedContentEntryMessageIds, unloadableContentEntryMessageIds, resolvedReferralTrialOfferIds: stateFromStoresArray8, referralTrialOfferId: id2, isPremiumTier2User: stateFromStores9, activityInviteMessageIds: tmp29, guildInviteColorsFetched: colorStore, isAgeVerified, guildEmojis: stateFromStores37, enableSwipeActions: isMessageSwipeActionsEnabled, selfActivities: stateFromStoresArray9, activityLaunchJoinStates: stateFromStoresObject7, authorizedAppsTokens: stateFromStoresArray10, currentUserDisplayNameStyles: stateFromStores39, voiceInviteDataByChannelId: stateFromStoresObject6, officialMessageColor };
    const tmp130 = closure_67;
    const tmp26Result2 = stateFromStores(tmp3[96]);
    if (stateFromStores22) {
      stateFromStores22 = tmp76;
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
    items85[1] = tmp130(tmp26Result2, obj4);
    return tmp126(tmp26Result, obj3);
  }
}
({ useChannelPollInteractions: closure_28, useMessagePollInteractions: closure_29 } = PollsInteractionStore);
({ ActivityActionTypes: closure_59, ChannelTypesSets: closure_60, ME: closure_61, MessageTypes: closure_62, Permissions: closure_63 } = Constants);
let closure_64 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_65, PremiumTypes: closure_66 } = PremiumConstants);
({ jsx: closure_67, jsxs: closure_68 } = Fragment);
MessagesConnected.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default MessagesConnected;
