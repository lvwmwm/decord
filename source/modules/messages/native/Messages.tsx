// Module ID: 10468
// Function ID: 80578
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4122, 1347, 7910, 4167, 10469, 6708, 4143, 9514, 4991, 4044, 5671, 5464, 7733, 7716, 6758, 6693, 7886, 7718, 10470, 7719, 5066, 4348, 7989, 6689, 10471, 6921, 6829, 9520, 3760, 5683, 1921, 1278, 1194, 1348, 6922, 8237, 1917, 1838, 4946, 4115, 4349, 3758, 4217, 4202, 4142, 4145, 7079, 1849, 4146, 4175, 10472, 4203, 653, 1851, 33, 566, 22, 620, 5463, 1327, 3803, 1324, 10479, 10482, 10486, 10489, 10493, 6687, 3776, 7757, 4964, 10433, 10434, 7753, 6656, 10874, 3996, 9522, 9918, 9510, 10875, 4347, 9511, 7885, 10876, 10879, 7903, 9348, 6977, 10881, 10883, 4662, 10884, 2]

// Module 10468 (_createForOfIteratorHelperLoose)
import initialize from "initialize";
import importAllResult from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_createForOfIteratorHelperLoose";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import closure_26 from "_isNativeReflectConstruct";
import useMessagePollInteractions from "useMessagePollInteractions";
import closure_29 from "_isNativeReflectConstruct";
import closure_30 from "_isNativeReflectConstruct";
import closure_31 from "_createForOfIteratorHelperLoose";
import closure_32 from "_isNativeReflectConstruct";
import closure_33 from "_isNativeReflectConstruct";
import closure_34 from "_isNativeReflectConstruct";
import closure_35 from "_isNativeReflectConstruct";
import closure_36 from "_isNativeReflectConstruct";
import closure_37 from "_isNativeReflectConstruct";
import closure_38 from "_isNativeReflectConstruct";
import closure_39 from "_isNativeReflectConstruct";
import closure_40 from "_isNativeReflectConstruct";
import closure_41 from "_isNativeReflectConstruct";
import closure_42 from "_isNativeReflectConstruct";
import closure_43 from "_createForOfIteratorHelperLoose";
import closure_44 from "_isNativeReflectConstruct";
import closure_45 from "_isNativeReflectConstruct";
import closure_46 from "_isNativeReflectConstruct";
import closure_47 from "_isNativeReflectConstruct";
import closure_48 from "_isNativeReflectConstruct";
import closure_49 from "_isNativeReflectConstruct";
import closure_50 from "_isNativeReflectConstruct";
import closure_51 from "_isNativeReflectConstruct";
import closure_52 from "_isNativeReflectConstruct";
import closure_53 from "_isNativeReflectConstruct";
import closure_54 from "_isNativeReflectConstruct";
import closure_55 from "_isNativeReflectConstruct";
import closure_56 from "_isNativeReflectConstruct";
import closure_57 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "_isNativeReflectConstruct";

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
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = useMessagePollInteractions);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = ME);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = GuildFeatures);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  let acceptingGiftCodes;
  let appDirectoryEmbedApplicationFetchStates;
  let appDirectoryEmbedApplications;
  let displayNameStylesEnabled;
  let invalidAppDirectoryEmbedApplicationIds;
  let isFetchingCurrentQuests;
  let officialMessageStyle;
  let quests;
  let resolvedGiftCodes;
  let resolvingGiftCodes;
  let roleStyle;
  let saturation;
  let tmp56;
  let tmp57;
  let unloadableContentEntryMessageIds;
  let unloadedContentEntryMessageIds;
  let useReducedMotion;
  channel = channel.channel;
  let obj = channel(id[57]);
  let items = [closure_46];
  let items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_46.getMessages(channel.id), items1);
  id = channel.id;
  let guildId = channel.getGuildId();
  let obj1 = channel(id[57]);
  let items2 = [closure_43];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_43.getGuild(guildId));
  let systemChannelFlags;
  if (null != stateFromStores1) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  let obj2 = channel(id[57]);
  const items3 = [closure_38];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_38.getId(), []);
  const InlineAttachmentMedia = channel(id[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channel(id[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channel(id[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = channel(id[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = channel(id[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = channel(id[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = channel(id[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = channel(id[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = channel(id[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  let obj3 = channel(id[57]);
  const items4 = [closure_37];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => outer1_37.theme, []);
  let obj4 = channel(id[64]);
  const isMessageSwipeActionsEnabled = obj4.useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  let tmp15 = stateFromStores(id[63])("Messages");
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  (function useFetchMessageApplications(stateFromStores, application_id) {
    let closure_0 = stateFromStores;
    let closure_1 = application_id;
    const items = [stateFromStores, application_id];
    const memo = stateFromStores1.useMemo(() => {
      const set = new Set();
      const item = set.forEach((applicationId) => {
        if (tmp) {
          set.add(applicationId.applicationId);
        }
      });
      if (null != closure_1) {
        set.add(closure_1);
      }
      return Array.from(set);
    }, items);
    let initialize = stateFromStores1.useRef([]);
    const items1 = [memo];
    const effect = stateFromStores1.useEffect(() => {
      if (!obj.areArraysShallowEqual(memo, ref.current)) {
        const obj2 = stateFromStores(id[60]);
        const found = stateFromStores(id[58])(memo).filter(channel(id[61]).isNotNullish);
        const arr = stateFromStores(id[58])(memo);
        const applications = obj2.fetchApplications(found.uniq().value(), false);
        ref.current = memo;
        const iter = found.uniq();
      }
    }, items1);
  })(stateFromStores, application_id);
  const tmp17 = (function useMessageAuthorActivities(stateFromStores) {
    let closure_0 = stateFromStores;
    const items = [stateFromStores];
    const memo = stateFromStores1.useMemo(() => {
      const obj = {};
      const item = obj.forEach((author) => {
        if (tmp) {
          obj[author.author.id] = null;
        }
      });
      return obj;
    }, items);
    const items1 = [outer1_48];
    const items2 = [memo];
    return channel(id[57]).useStateFromStoresObject(items1, () => stateFromStores(id[58]).mapValues(memo, (arg0, arg1) => outer3_48.getPrimaryActivity(arg1)), items2);
  })(stateFromStores);
  let obj5 = channel(id[57]);
  const items5 = [closure_45];
  const stateFromStores4 = obj5.useStateFromStores(items5, () => outer1_45.getInvites(), []);
  const tmp20 = guildId(stateFromStores(id[65])(stateFromStores, channel), 2);
  const fetchVoiceChannelInviteStartTimes = channel(id[66]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const obj7 = channel(id[66]);
  const items6 = [closure_16];
  const stateFromStoresObject = channel(id[57]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: outer1_16.getApplications(), invalidAppDirectoryEmbedApplicationIds: outer1_16.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: outer1_16.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const obj8 = channel(id[57]);
  const items7 = [items63];
  const stateFromStoresArray = channel(id[57]).useStateFromStoresArray(items7, () => items63.getFetchingOrFailedFetchingIds());
  const obj9 = channel(id[57]);
  const items8 = [channelSummariesExperiment];
  const stateFromStoresArray1 = channel(id[57]).useStateFromStoresArray(items8, () => channelSummariesExperiment.getFetchingIds());
  const obj10 = channel(id[57]);
  const items9 = [closure_55];
  const stateFromStoresArray2 = channel(id[57]).useStateFromStoresArray(items9, () => outer1_55.getFetchingSkuIds());
  const obj11 = channel(id[57]);
  const items10 = [_createForOfIteratorHelperLoose];
  const items11 = [id];
  const stateFromStoresArray3 = channel(id[57]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(channel(id[61]).isNotNullish);
  }, items11);
  const obj12 = channel(id[57]);
  const items12 = [_createForOfIteratorHelperLoose, closure_48];
  const stateFromStoresArray4 = channel(id[57]).useStateFromStoresArray(items12, () => {
    let done;
    let items = [];
    function _loop(value) {
      const items = value;
      const userIds = value.userIds;
      const findActivityResult = outer2_48.findActivity(userIds.values().next().value, (application_id) => application_id.application_id === value.applicationId);
      let details;
      if (null != findActivityResult) {
        details = findActivityResult.details;
      }
      if (null != details) {
        const _HermesInternal = HermesInternal;
        items.push("" + value.launchId + ":" + findActivityResult.details);
      }
    }
    const tmp = outer1_67(store.getEmbeddedActivitiesForChannel(id));
    let iter = tmp();
    if (!iter.done) {
      do {
        let _loopResult = _loop(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return items;
  });
  const obj13 = channel(id[57]);
  const items13 = [_createForOfIteratorHelperLoose];
  const stateFromStoresArray5 = channel(id[57]).useStateFromStoresArray(items13, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = store.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((arr) => {
      let closure_0 = arg1;
      let item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((arg0) => {
          set.add("" + outer1_0 + ":" + arg0);
        });
      });
    });
    return Array.from(set);
  });
  const obj14 = channel(id[57]);
  const items14 = [_createForOfIteratorHelperLoose];
  const stateFromStoresArray6 = channel(id[57]).useStateFromStoresArray(items14, () => {
    let iter2;
    let tmp4;
    const items = [];
    const tmp = outer1_67(store.getLaunchStates());
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = guildId;
        let tmp3 = guildId(iter.value, 2);
        [r10016, tmp4] = tmp3;
        let tmp5 = tmp4.isLaunching && null != tmp4.componentId && tmp4.componentId.length > 0;
        if (tmp5) {
          let arr = items.push(tmp4.componentId);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  });
  const obj15 = channel(id[57]);
  const items15 = [closure_23];
  const stateFromStores5 = channel(id[57]).useStateFromStores(items15, () => outer1_23.getMediaPostEmbeds());
  const obj16 = channel(id[57]);
  const items16 = [closure_20];
  const stateFromStores6 = channel(id[57]).useStateFromStores(items16, () => outer1_20.getGuildTemplates(), []);
  const obj17 = channel(id[57]);
  const items17 = [guildId];
  const stateFromStores7 = channel(id[57]).useStateFromStores(items17, () => guildId.getBuildOverrides(), []);
  const obj18 = channel(id[57]);
  const codedLinksExperimentEmbeds = channel(id[67]).useCodedLinksExperimentEmbeds();
  const obj19 = channel(id[67]);
  quests = channel(id[68]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests);
  let found = stateFromStores.filter((type) => type.type === outer1_61.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  _createForOfIteratorHelperLoose = mapped.filter(channel(id[61]).isNotNullish);
  const obj20 = channel(id[68]);
  const items18 = [closure_29];
  const stateFromStoresArray7 = channel(id[57]).useStateFromStoresArray(items18, () => {
    const mapped = store.map((arg0) => {
      const relevantUserTrialOffer = outer2_29.getRelevantUserTrialOffer(arg0);
      let id;
      if (null != relevantUserTrialOffer) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(channel(id[61]).isNotNullish);
  });
  const obj21 = channel(id[57]);
  const trialOffer = channel(id[69]).useTrialOffer(closure_63);
  const obj22 = channel(id[69]);
  const items19 = [closure_53];
  const stateFromStores8 = channel(id[57]).useStateFromStores(items19, () => stateFromStores(id[70]).isPremiumExactly(outer1_53.getCurrentUser(), outer1_64.TIER_2));
  const obj23 = channel(id[57]);
  const items20 = [closure_40];
  const items21 = [id];
  const stateFromStores9 = channel(id[57]).useStateFromStores(items20, () => outer1_40.getEditingMessageId(id), items21);
  const obj24 = channel(id[57]);
  const items22 = [closure_31];
  const items23 = [id];
  const stateFromStores10 = channel(id[57]).useStateFromStores(items22, () => {
    const pendingReply = outer1_31.getPendingReply(id);
    id = undefined;
    if (null != pendingReply) {
      id = pendingReply.message.id;
    }
    return id;
  }, items23);
  const obj25 = channel(id[57]);
  const items24 = [closure_50];
  const items25 = [id];
  const stateFromStores11 = channel(id[57]).useStateFromStores(items24, () => outer1_50.getOldestUnreadMessageId(id), items25);
  const obj26 = channel(id[57]);
  const items26 = [closure_44];
  const items27 = [guildId];
  const stateFromStores12 = channel(id[57]).useStateFromStores(items26, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = outer1_44.canChatInGuild(guildId);
    }
    return canChatInGuildResult;
  }, items27);
  const obj27 = channel(id[57]);
  const items28 = [closure_47];
  const items29 = [channel];
  const stateFromStores13 = channel(id[57]).useStateFromStores(items28, () => outer1_47.can(outer1_62.SEND_MESSAGES, channel), items29);
  const obj28 = channel(id[57]);
  const tmp44 = stateFromStores(id[71])(id);
  const items30 = [closure_54];
  const items31 = [stateFromStores2];
  const stateFromStores14 = channel(id[57]).useStateFromStores(items30, () => outer1_54.getUserVoiceChannelId(outer1_60, stateFromStores2), items31);
  const obj29 = channel(id[57]);
  const items32 = [closure_49];
  const stateFromStores15 = channel(id[57]).useStateFromStores(items32, () => outer1_49.getChannelId(), []);
  const obj30 = channel(id[57]);
  const items33 = [closure_32];
  const items34 = [channel];
  const stateFromStores16 = channel(id[57]).useStateFromStores(items33, () => {
    const THREADS = outer1_59.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != channel.parent_id) {
        const obj = {};
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = channel);
        message = outer1_32.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items34);
  const obj31 = channel(id[57]);
  const items35 = [closure_41];
  const stateFromStoresObject1 = channel(id[57]).useStateFromStoresObject(items35, () => ({ resolvingGiftCodes: outer1_41.getResolvingCodes(), resolvedGiftCodes: outer1_41.getResolvedCodes(), acceptingGiftCodes: outer1_41.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const obj32 = channel(id[57]);
  const items36 = [closure_11];
  const items37 = [id];
  const stateFromStores17 = channel(id[57]).useStateFromStores(items36, () => outer1_11.getParticipants(id).length, items37);
  const obj33 = channel(id[57]);
  const items38 = [closure_52];
  const items39 = [id];
  const stateFromStores18 = channel(id[57]).useStateFromStores(items38, () => outer1_52.getFiles(id), items39);
  const obj34 = channel(id[57]);
  const items40 = [closure_32];
  const items41 = [id];
  const stateFromStores19 = channel(id[57]).useStateFromStores(items40, () => outer1_32.getReplyIdsForChannel(id), items41);
  const obj35 = channel(id[57]);
  const items42 = [stateFromStores2];
  const stateFromStoresObject2 = channel(id[57]).useStateFromStoresObject(items42, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const obj36 = channel(id[57]);
  const items43 = [closure_35];
  const items44 = [id];
  const stateFromStores20 = channel(id[57]).useStateFromStores(items43, () => outer1_35.getChannelThreadsVersion(id), items44);
  const obj37 = channel(id[57]);
  const items45 = [closure_22];
  const stateFromStoresObject3 = channel(id[57]).useStateFromStoresObject(items45, () => outer1_22.getMessageInteractionStates());
  const obj38 = channel(id[57]);
  const items46 = [closure_21];
  const obj39 = channel(id[57]);
  [tmp56, tmp57] = guildId(channel(id[57]).useStateFromStores(items46, () => {
    const items = [outer1_21.getInteractionComponentStates(), outer1_21.getInteractionComponentStateVersion()];
    return items;
  }, [], channel(id[72]).isVersionEqual), 2);
  const tmp55 = guildId(channel(id[57]).useStateFromStores(items46, () => {
    const items = [outer1_21.getInteractionComponentStates(), outer1_21.getInteractionComponentStateVersion()];
    return items;
  }, [], channel(id[72]).isVersionEqual), 2);
  const items47 = [closure_14];
  let stateFromStores21 = channel(id[57]).useStateFromStores(items47, () => outer1_14.hasLoadedExperiments);
  const obj40 = channel(id[57]);
  const isSpamMessageRequest = channel(id[73]).useIsSpamMessageRequest(channel.id);
  const obj41 = channel(id[73]);
  let tmp61 = null != stateFromStores;
  const isMessageRequest = channel(id[74]).useIsMessageRequest(channel.id);
  if (tmp61) {
    tmp61 = stateFromStores.ready || stateFromStores.cached;
    const tmp62 = stateFromStores.ready || stateFromStores.cached;
  }
  const obj42 = channel(id[74]);
  const tmp63 = null != stateFromStores && stateFromStores.cached;
  const tmp64 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const items48 = [closure_19];
  const stateFromStores22 = channel(id[57]).useStateFromStores(items48, () => outer1_19.getRsvpVersion());
  const obj43 = channel(id[57]);
  const items49 = [closure_18];
  const stateFromStores23 = channel(id[57]).useStateFromStores(items49, () => outer1_18.getMessagesVersion());
  const obj44 = channel(id[57]);
  const items50 = [closure_42];
  const stateFromStores24 = channel(id[57]).useStateFromStores(items50, () => outer1_42.getCommunicationDisabledVersion());
  const obj45 = channel(id[57]);
  const items51 = [closure_42];
  const items52 = [guildId, stateFromStores];
  const stateFromStoresObject4 = channel(id[57]).useStateFromStoresObject(items51, () => {
    if (null != guildId) {
      if (null != stateFromStores) {
        const obj = {};
        const item = stateFromStores.forEach((author) => {
          author = author.author;
          let id;
          if (null != author) {
            id = author.id;
          }
          if (null != id) {
            const member = outer2_42.getMember(outer1_3, author.author.id);
            if (null != member) {
              obj[author.author.id] = member;
            }
          }
        });
        return obj;
      }
    }
    return {};
  }, items52);
  const obj46 = channel(id[57]);
  const items53 = [closure_47];
  const stateFromStores25 = channel(id[57]).useStateFromStores(items53, () => outer1_47.can(outer1_62.MODERATE_MEMBERS, stateFromStores1));
  const obj47 = channel(id[57]);
  id = undefined;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  const obj48 = channel(id[75]);
  const items54 = [closure_36];
  const stateFromStores26 = channel(id[57]).useStateFromStores(items54, () => outer1_36.locale);
  const obj49 = channel(id[57]);
  const isPaymentsBlocked = channel(id[76]).useIsPaymentsBlocked();
  const obj50 = channel(id[76]);
  const items55 = [closure_34];
  const stateFromStores27 = channel(id[57]).useStateFromStores(items55, () => {
    const tmp = !channel.isForumPost();
    let hasJoinedResult = !tmp;
    if (!tmp) {
      hasJoinedResult = outer1_34.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const obj51 = channel(id[57]);
  const items56 = [closure_24];
  const stateFromStores28 = channel(id[57]).useStateFromStores(items56, () => outer1_24.shouldDisplayPrompt(id));
  const obj52 = channel(id[57]);
  const items57 = [closure_30];
  const stateFromStores29 = channel(id[57]).useStateFromStores(items57, () => outer1_30.isEligible());
  const obj53 = channel(id[57]);
  const items58 = [closure_10];
  const stateFromStores30 = channel(id[57]).useStateFromStores(items58, () => outer1_10.getLazyCacheStatus());
  const obj54 = channel(id[57]);
  const messageJumpAndroidKeyboardHeight = channel(id[77]).useMessageJumpAndroidKeyboardHeight();
  const obj55 = channel(id[77]);
  const tmp78 = stateFromStores(id[78])();
  channelSummariesExperiment = channel(id[79]).useChannelSummariesExperiment(channel);
  const obj56 = channel(id[79]);
  const items59 = [closure_33];
  const items60 = [channelSummariesExperiment, channel.id];
  const items61 = [channel.id, , , , ];
  ({ hasMoreAfter: arr65[1], hasMoreBefore: arr65[2], length: arr65[3], ready: arr65[4] } = stateFromStores);
  const stateFromStores31 = channel(id[57]).useStateFromStores(items59, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = outer1_33.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items60);
  let effect = stateFromStores1.useEffect(() => {
    let hasMoreAfter = !stateFromStores.ready;
    if (!hasMoreAfter) {
      hasMoreAfter = 0 !== stateFromStores.length;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = stateFromStores.hasMoreBefore;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = stateFromStores.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      const obj = stateFromStores(id[80]);
      const _Date = Date;
      const result = obj.updateChannelDimensions(channel.id, Date.now(), 1, 1, 0);
    }
  }, items61);
  const obj57 = channel(id[57]);
  obj = { guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackAnnouncementMessageViews = channel(id[81]).useShouldTrackAnnouncementMessageViews(obj);
  const obj58 = channel(id[81]);
  obj = { messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackRichPresenceInviteEmbedViews = channel(id[81]).useShouldTrackRichPresenceInviteEmbedViews(obj);
  const obj60 = channel(id[81]);
  obj1 = { guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackOfficialMessageViews = channel(id[81]).useShouldTrackOfficialMessageViews(obj1);
  const obj62 = channel(id[81]);
  obj2 = { messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackVoiceInviteEmbedViews = channel(id[81]).useShouldTrackVoiceInviteEmbedViews(obj2);
  const obj64 = channel(id[81]);
  const shouldDisplaySpoilerObscurity = channel(id[82]).useShouldDisplaySpoilerObscurity(channel);
  const obj66 = channel(id[82]);
  const items62 = [id, guildId];
  const isAgeVerified = channel(id[83]).useIsAgeVerified();
  const effect1 = stateFromStores1.useEffect(() => {
    stateFromStores(id[84]).handleChannelSelect();
    return () => {
      stateFromStores(id[84]).handleChannelSelect();
    };
  }, items62);
  const obj67 = channel(id[83]);
  const shouldDisableInteractiveComponents = channel(id[85]).useShouldDisableInteractiveComponents(channel.id);
  items63 = [];
  const obj68 = channel(id[85]);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (null != messageReference) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items63.push(message_id);
    }
  });
  const tmp90 = callback(channel.id);
  const tmp92 = callback2(items63);
  const items64 = [closure_15];
  const items65 = [id];
  const stateFromStores32 = channel(id[57]).useStateFromStores(items64, () => outer1_15.getChannelFpInfo(id), items65);
  const obj69 = channel(id[57]);
  const items66 = [closure_26];
  const stateFromStores33 = channel(id[57]).useStateFromStores(items66, () => outer1_26.getPendingConnection());
  const obj70 = channel(id[57]);
  const tmp95 = stateFromStores(id[86])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(id[87])(stateFromStores));
  const tmp96 = stateFromStores(id[87])(stateFromStores);
  const items67 = [closure_53];
  const stateFromStores34 = channel(id[57]).useStateFromStores(items67, () => {
    const currentUser = outer1_53.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  });
  const obj71 = channel(id[57]);
  const items68 = [closure_17];
  const stateFromStores35 = channel(id[57]).useStateFromStores(items68, () => outer1_17.getVersion());
  const obj72 = channel(id[57]);
  const colorStore = channel(id[88]).useColorStore((palette) => Object.keys(palette.palette).length);
  const obj73 = channel(id[88]);
  const items69 = [closure_13];
  guildId = channel(id[57]).useStateFromStores(items69, () => outer1_13.getGuildEmoji(guildId));
  const obj74 = channel(id[57]);
  const items70 = [closure_54];
  const items71 = [guildId];
  guildId = channel(id[57]).useStateFromStores(items70, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = outer1_54.getVoiceStates(guildId);
      return channel(id[89]).getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items71);
  const obj75 = channel(id[57]);
  const items72 = [closure_57, closure_12, closure_45, closure_39];
  guildId = channel(id[57]).useStateFromStoresObject(items72, () => {
    let iter3;
    const obj = {};
    const invites = outer1_45.getInvites();
    const tmp = outer1_67(invites.values());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let channel = value.channel;
        let id;
        if (null != channel) {
          id = channel.id;
        }
        let tmp6 = tmp2;
        let tmp7 = tmp3;
        let tmp8 = tmp4;
        if (null != id) {
          let tmp15 = channel;
          let tmp16 = id;
          let obj4 = channel(id[90]);
          tmp6 = tmp2;
          tmp7 = tmp3;
          tmp8 = tmp4;
          if (obj4.isVoiceChannelInvite(value)) {
            id = value.channel.id;
            let guild = value.guild;
            let id1;
            if (null != guild) {
              id1 = guild.id;
            }
            let tmp10 = outer1_57;
            let voiceStatesForChannelAlt = outer1_57.getVoiceStatesForChannelAlt(id, id1);
            let mapped = voiceStatesForChannelAlt.map((voiceState) => {
              let str = "";
              if (voiceState.voiceState.selfStream) {
                str = "*";
              }
              return "" + str + voiceState.user.id;
            });
            let tmp12 = outer1_12;
            let tmp13 = outer1_39;
            let joined = mapped.join(",");
            let startTime = outer1_12.getStartTime(outer1_39.getChannel(id));
            let str = "";
            if (null != startTime) {
              str = startTime;
            }
            let _HermesInternal = HermesInternal;
            obj[id] = "" + joined + ":" + str;
            tmp6 = guild;
            tmp7 = id;
            tmp8 = startTime;
          }
        }
        iter3 = tmp();
        tmp2 = tmp6;
        tmp3 = tmp7;
        tmp4 = tmp8;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return obj;
  });
  const obj76 = channel(id[57]);
  const items73 = [closure_51];
  guildId = channel(id[57]).useStateFromStoresArray(items73, () => {
    const items = [...outer1_51.getRemoteActivities(), ...outer1_51.getHiddenActivities()];
    return items.filter(channel(id[61]).isNotNullish);
  });
  const obj77 = channel(id[57]);
  const items74 = [closure_56];
  guildId = channel(id[57]).useStateFromStoresObject(items74, () => guildId.reduce((arg0, application_id) => {
    if (null == application_id.application_id) {
      return arg0;
    } else {
      const state = outer2_56.getState(application_id.application_id, outer2_58.JOIN);
      if (null != state) {
        arg0[application_id.application_id] = state;
      }
      return arg0;
    }
  }, {}));
  const obj78 = channel(id[57]);
  const items75 = [closure_25];
  guildId = channel(id[57]).useStateFromStoresArray(items75, () => {
    const items = [outer1_25.getNewestTokens(), outer1_25.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const obj79 = channel(id[57]);
  const items76 = [closure_53];
  guildId = channel(id[57]).useStateFromStores(items76, () => {
    const currentUser = outer1_53.getCurrentUser();
    let displayNameStyles;
    if (null != currentUser) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const obj80 = channel(id[57]);
  guildId = channel(id[91]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  guildId = closure_66;
  obj3 = {};
  guildId = stateFromStores(id[92]);
  obj3.profile = channel(id[92]).Profiles.Messages;
  guildId = channel.isThread();
  if (guildId) {
    guildId = callback3;
    guildId = stateFromStores;
    guildId = id;
    obj4 = { absolute: true };
    guildId = callback3(stateFromStores(id[93]), obj4);
  }
  const items77 = [guildId, ];
  guildId = callback3;
  obj5 = { ref, theme: stateFromStores3, saturation, isVisualRefreshEnabled: tmp15, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp95, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp61, isMessagesCached: tmp63, isMessagesAckable: tmp64, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp17, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp44, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: guildId, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp56, interactionComponentStatesVersion: tmp57 };
  guildId = stateFromStores(id[94]);
  if (stateFromStores21) {
    stateFromStores21 = tmp61;
  }
  obj5.hasLoadedExperiments = stateFromStores21;
  obj5.guildSystemChannelFlags = systemChannelFlags;
  obj5.currentUserCommunicationDisabled = guildId(obj48.useCurrentUserCommunicationDisabled(id), 2)[1];
  obj5.renderCommunicationDisabled = stateFromStores25;
  obj5.userSettingsLocale = stateFromStores26;
  obj5.paymentsBlocked = isPaymentsBlocked;
  obj5.isFollowingForumPost = stateFromStores27;
  obj5.showMediaPostSharePrompt = stateFromStores28;
  obj5.showPushFeedback = stateFromStores29;
  obj5.cacheStoreLoaded = "initializing" !== stateFromStores30;
  obj5.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj5.selectedSummary = stateFromStores31;
  obj5.keyboardType = tmp78;
  obj5.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj5.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj5.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj5.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj5.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj5.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj5.channelPolls = tmp90;
  obj5.messageReferencePolls = tmp92;
  obj5.explicitMediaFalsePositiveInfo = stateFromStores32;
  obj5.familyCenterPendingConnection = stateFromStores33;
  obj5.threadStartingReferenceMessage = stateFromStores16;
  obj5.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
  obj5.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
  obj5.resolvedReferralTrialOfferIds = stateFromStoresArray7;
  guildId = undefined;
  if (null != trialOffer) {
    guildId = trialOffer.id;
  }
  obj5.referralTrialOfferId = guildId;
  obj5.isPremiumTier2User = stateFromStores8;
  obj5.activityInviteMessageIds = tmp20[0];
  obj5.guildInviteColorsFetched = colorStore;
  obj5.isAgeVerified = isAgeVerified;
  obj5.guildEmojis = guildId;
  obj5.enableSwipeActions = isMessageSwipeActionsEnabled;
  obj5.selfActivities = guildId;
  obj5.activityLaunchJoinStates = guildId;
  obj5.authorizedAppsTokens = guildId;
  obj5.currentUserDisplayNameStyles = guildId;
  obj5.voiceInviteDataByChannelId = guildId;
  guildId = undefined;
  if (null != stateFromStores1) {
    guildId = stateFromStores1.officialMessageColor;
  }
  guildId = undefined;
  obj5.officialMessageColor = guildId;
  guildId = Object.assign(channel);
  items77[1] = guildId(guildId, obj5);
  obj3.children = items77;
  return guildId(guildId, obj3);
});
forwardRefResult.displayName = "MessagesConnected";
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
