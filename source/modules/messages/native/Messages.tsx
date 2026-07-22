// Module ID: 10429
// Function ID: 80336
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10429 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
let closure_21 = importDefault(dependencyMap[18]);
let closure_22 = importDefault(dependencyMap[19]);
let closure_23 = importDefault(dependencyMap[20]);
let closure_24 = importDefault(dependencyMap[21]);
let closure_25 = importDefault(dependencyMap[22]);
let closure_26 = importDefault(dependencyMap[23]);
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = arg1(dependencyMap[24]));
let closure_29 = importDefault(dependencyMap[25]);
let closure_30 = importDefault(dependencyMap[26]);
let closure_31 = importDefault(dependencyMap[27]);
let closure_32 = importDefault(dependencyMap[28]);
let closure_33 = importDefault(dependencyMap[29]);
let closure_34 = importDefault(dependencyMap[30]);
let closure_35 = importDefault(dependencyMap[31]);
let closure_36 = importDefault(dependencyMap[32]);
let closure_37 = importDefault(dependencyMap[33]);
let closure_38 = importDefault(dependencyMap[34]);
let closure_39 = importDefault(dependencyMap[35]);
let closure_40 = importDefault(dependencyMap[36]);
let closure_41 = importDefault(dependencyMap[37]);
let closure_42 = importDefault(dependencyMap[38]);
let closure_43 = importDefault(dependencyMap[39]);
let closure_44 = importDefault(dependencyMap[40]);
let closure_45 = importDefault(dependencyMap[41]);
let closure_46 = importDefault(dependencyMap[42]);
let closure_47 = importDefault(dependencyMap[43]);
let closure_48 = importDefault(dependencyMap[44]);
let closure_49 = importDefault(dependencyMap[45]);
let closure_50 = importDefault(dependencyMap[46]);
let closure_51 = importDefault(dependencyMap[47]);
let closure_52 = importDefault(dependencyMap[48]);
let closure_53 = importDefault(dependencyMap[49]);
let closure_54 = importDefault(dependencyMap[50]);
let closure_55 = importDefault(dependencyMap[51]);
let closure_56 = importDefault(dependencyMap[52]);
let closure_57 = importDefault(dependencyMap[53]);
const tmp2 = arg1(dependencyMap[24]);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = arg1(dependencyMap[54]));
const tmp3 = arg1(dependencyMap[54]);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = arg1(dependencyMap[55]));
const tmp4 = arg1(dependencyMap[55]);
({ jsx: closure_65, jsxs: closure_66 } = arg1(dependencyMap[56]));
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
  ref = channel;
  let obj = ref(dependencyMap[57]);
  const items = [closure_46];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => messages.getMessages(channel.id), items1);
  const importDefault = stateFromStores;
  let id = channel.id;
  const dependencyMap = id;
  let guildId = channel.getGuildId();
  const callback = guildId;
  let obj1 = ref(dependencyMap[57]);
  const items2 = [closure_43];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => guild.getGuild(guildId));
  let systemChannelFlags;
  if (null != stateFromStores1) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  let obj2 = ref(dependencyMap[57]);
  const items3 = [closure_38];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => id.getId(), []);
  let closure_5 = stateFromStores2;
  const InlineAttachmentMedia = ref(dependencyMap[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = ref(dependencyMap[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = ref(dependencyMap[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = ref(dependencyMap[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = ref(dependencyMap[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = ref(dependencyMap[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = ref(dependencyMap[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = ref(dependencyMap[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = ref(dependencyMap[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  let obj3 = ref(dependencyMap[57]);
  const items4 = [closure_37];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => theme.theme, []);
  let obj4 = ref(dependencyMap[64]);
  const isMessageSwipeActionsEnabled = obj4.useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp15 = importDefault(dependencyMap[63])("Messages");
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  function useFetchMessageApplications(stateFromStores, application_id) {
    const channel = stateFromStores;
    stateFromStores = application_id;
    const items = [stateFromStores, application_id];
    const memo = stateFromStores1.useMemo(() => {
      const set = new Set();
      const arg0 = set;
      const item = arg0.forEach((applicationId) => {
        if (tmp) {
          set.add(applicationId.applicationId);
        }
      });
      if (null != arg1) {
        set.add(arg1);
      }
      return Array.from(set);
    }, items);
    const id = memo;
    let closure_3 = stateFromStores1.useRef([]);
    const items1 = [memo];
    const effect = stateFromStores1.useEffect(() => {
      if (!obj.areArraysShallowEqual(memo, ref.current)) {
        const obj2 = arg1(memo[60]);
        const found = arg1(memo[58])(memo).filter(arg0(memo[61]).isNotNullish);
        const arr = arg1(memo[58])(memo);
        const applications = obj2.fetchApplications(found.uniq().value(), false);
        ref.current = memo;
        const iter = found.uniq();
      }
    }, items1);
  }(stateFromStores, application_id);
  const tmp17 = function useMessageAuthorActivities(stateFromStores) {
    const channel = stateFromStores;
    const items = [stateFromStores];
    const memo = stateFromStores1.useMemo(() => {
      const obj = {};
      const arg0 = obj;
      const item = arg0.forEach((author) => {
        if (tmp) {
          obj[author.author.id] = null;
        }
      });
      return obj;
    }, items);
    stateFromStores = memo;
    const items1 = [closure_48];
    const items2 = [memo];
    return channel(id[57]).useStateFromStoresObject(items1, () => memo(closure_2[58]).mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
  }(stateFromStores);
  let obj5 = ref(dependencyMap[57]);
  const items5 = [closure_45];
  const stateFromStores4 = obj5.useStateFromStores(items5, () => store6.getInvites(), []);
  const tmp20 = callback(importDefault(dependencyMap[65])(stateFromStores, channel), 2);
  const fetchVoiceChannelInviteStartTimes = ref(dependencyMap[66]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const obj7 = ref(dependencyMap[66]);
  const items6 = [closure_16];
  const stateFromStoresObject = ref(dependencyMap[57]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: store2.getApplications(), invalidAppDirectoryEmbedApplicationIds: store2.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: store2.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const obj8 = ref(dependencyMap[57]);
  const items7 = [closure_8];
  const stateFromStoresArray = ref(dependencyMap[57]).useStateFromStoresArray(items7, () => items63.getFetchingOrFailedFetchingIds());
  const obj9 = ref(dependencyMap[57]);
  const items8 = [closure_7];
  const stateFromStoresArray1 = ref(dependencyMap[57]).useStateFromStoresArray(items8, () => channelSummariesExperiment.getFetchingIds());
  const obj10 = ref(dependencyMap[57]);
  const items9 = [closure_55];
  const stateFromStoresArray2 = ref(dependencyMap[57]).useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const obj11 = ref(dependencyMap[57]);
  const items10 = [closure_6];
  const items11 = [id];
  const stateFromStoresArray3 = ref(dependencyMap[57]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(channel(id[61]).isNotNullish);
  }, items11);
  const obj12 = ref(dependencyMap[57]);
  const items12 = [closure_6, closure_48];
  const stateFromStoresArray4 = ref(dependencyMap[57]).useStateFromStoresArray(items12, () => {
    let done;
    const items = [];
    const channel = items;
    function _loop(value) {
      const items = value;
      const userIds = value.userIds;
      const findActivityResult = closure_48.findActivity(userIds.values().next().value, (application_id) => application_id.application_id === application_id.applicationId);
      let details;
      if (null != findActivityResult) {
        details = findActivityResult.details;
      }
      if (null != details) {
        const _HermesInternal = HermesInternal;
        items.push("" + value.launchId + ":" + findActivityResult.details);
      }
    }
    const tmp = callback(store.getEmbeddedActivitiesForChannel(id));
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
  const obj13 = ref(dependencyMap[57]);
  const items13 = [closure_6];
  const stateFromStoresArray5 = ref(dependencyMap[57]).useStateFromStoresArray(items13, () => {
    const set = new Set();
    const channel = set;
    const embeddedActivitiesByChannel = store.getEmbeddedActivitiesByChannel();
    const item = embeddedActivitiesByChannel.forEach((arr) => {
      const item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((arg0) => {
          set.add("" + set + ":" + arg0);
        });
      });
    });
    return Array.from(set);
  });
  const obj14 = ref(dependencyMap[57]);
  const items14 = [closure_6];
  const stateFromStoresArray6 = ref(dependencyMap[57]).useStateFromStoresArray(items14, () => {
    let iter2;
    let tmp4;
    const items = [];
    const tmp = callback(store.getLaunchStates());
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_3;
        let tmp3 = closure_3(iter.value, 2);
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
  const obj15 = ref(dependencyMap[57]);
  const items15 = [closure_23];
  const stateFromStores5 = ref(dependencyMap[57]).useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const obj16 = ref(dependencyMap[57]);
  const items16 = [closure_20];
  const stateFromStores6 = ref(dependencyMap[57]).useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const obj17 = ref(dependencyMap[57]);
  const items17 = [closure_9];
  const stateFromStores7 = ref(dependencyMap[57]).useStateFromStores(items17, () => guildId.getBuildOverrides(), []);
  const obj18 = ref(dependencyMap[57]);
  const codedLinksExperimentEmbeds = ref(dependencyMap[67]).useCodedLinksExperimentEmbeds();
  const obj19 = ref(dependencyMap[67]);
  quests = ref(dependencyMap[68]).useQuests({ "Bool(false)": "is not allowed", "Bool(false)": "contains an invalid value" });
  ({ quests, isFetchingCurrentQuests } = quests);
  const found = stateFromStores.filter((type) => type.type === constants2.PREMIUM_REFERRAL);
  const mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(ref(dependencyMap[61]).isNotNullish);
  const obj20 = ref(dependencyMap[68]);
  const items18 = [closure_29];
  const stateFromStoresArray7 = ref(dependencyMap[57]).useStateFromStoresArray(items18, () => {
    const mapped = store.map((arg0) => {
      const relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(arg0);
      let id;
      if (null != relevantUserTrialOffer) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(channel(id[61]).isNotNullish);
  });
  const obj21 = ref(dependencyMap[57]);
  const trialOffer = ref(dependencyMap[69]).useTrialOffer(closure_63);
  const obj22 = ref(dependencyMap[69]);
  const items19 = [closure_53];
  const stateFromStores8 = ref(dependencyMap[57]).useStateFromStores(items19, () => stateFromStores(id[70]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const obj23 = ref(dependencyMap[57]);
  const items20 = [closure_40];
  const items21 = [id];
  const stateFromStores9 = ref(dependencyMap[57]).useStateFromStores(items20, () => editingMessageId.getEditingMessageId(id), items21);
  const obj24 = ref(dependencyMap[57]);
  const items22 = [closure_31];
  const items23 = [id];
  const stateFromStores10 = ref(dependencyMap[57]).useStateFromStores(items22, () => {
    const pendingReply = pendingReply.getPendingReply(id);
    let id;
    if (null != pendingReply) {
      id = pendingReply.message.id;
    }
    return id;
  }, items23);
  const obj25 = ref(dependencyMap[57]);
  const items24 = [closure_50];
  const items25 = [id];
  const stateFromStores11 = ref(dependencyMap[57]).useStateFromStores(items24, () => oldestUnreadMessageId.getOldestUnreadMessageId(id), items25);
  const obj26 = ref(dependencyMap[57]);
  const items26 = [closure_44];
  const items27 = [guildId];
  const stateFromStores12 = ref(dependencyMap[57]).useStateFromStores(items26, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_44.canChatInGuild(guildId);
    }
    return canChatInGuildResult;
  }, items27);
  const obj27 = ref(dependencyMap[57]);
  const items28 = [closure_47];
  const items29 = [channel];
  const stateFromStores13 = ref(dependencyMap[57]).useStateFromStores(items28, () => closure_47.can(constants3.SEND_MESSAGES, channel), items29);
  const obj28 = ref(dependencyMap[57]);
  const tmp44 = importDefault(dependencyMap[71])(id);
  const items30 = [closure_54];
  const items31 = [stateFromStores2];
  const stateFromStores14 = ref(dependencyMap[57]).useStateFromStores(items30, () => authStore3.getUserVoiceChannelId(closure_60, stateFromStores2), items31);
  const obj29 = ref(dependencyMap[57]);
  const items32 = [closure_49];
  const stateFromStores15 = ref(dependencyMap[57]).useStateFromStores(items32, () => channelId.getChannelId(), []);
  const obj30 = ref(dependencyMap[57]);
  const items33 = [closure_32];
  const items34 = [channel];
  const stateFromStores16 = ref(dependencyMap[57]).useStateFromStores(items33, () => {
    const THREADS = constants.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != channel.parent_id) {
        const obj = {};
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = channel);
        message = store4.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items34);
  const obj31 = ref(dependencyMap[57]);
  const items35 = [closure_41];
  const stateFromStoresObject1 = ref(dependencyMap[57]).useStateFromStoresObject(items35, () => ({ resolvingGiftCodes: store5.getResolvingCodes(), resolvedGiftCodes: store5.getResolvedCodes(), acceptingGiftCodes: store5.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const obj32 = ref(dependencyMap[57]);
  const items36 = [closure_11];
  const items37 = [id];
  const stateFromStores17 = ref(dependencyMap[57]).useStateFromStores(items36, () => participants.getParticipants(id).length, items37);
  const obj33 = ref(dependencyMap[57]);
  const items38 = [closure_52];
  const items39 = [id];
  const stateFromStores18 = ref(dependencyMap[57]).useStateFromStores(items38, () => files.getFiles(id), items39);
  const obj34 = ref(dependencyMap[57]);
  const items40 = [closure_32];
  const items41 = [id];
  const stateFromStores19 = ref(dependencyMap[57]).useStateFromStores(items40, () => store4.getReplyIdsForChannel(id), items41);
  const obj35 = ref(dependencyMap[57]);
  const items42 = [closure_5];
  const stateFromStoresObject2 = ref(dependencyMap[57]).useStateFromStoresObject(items42, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const obj36 = ref(dependencyMap[57]);
  const items43 = [closure_35];
  const items44 = [id];
  const stateFromStores20 = ref(dependencyMap[57]).useStateFromStores(items43, () => channelThreadsVersion.getChannelThreadsVersion(id), items44);
  const obj37 = ref(dependencyMap[57]);
  const items45 = [closure_22];
  const stateFromStoresObject3 = ref(dependencyMap[57]).useStateFromStoresObject(items45, () => messageInteractionStates.getMessageInteractionStates());
  const obj38 = ref(dependencyMap[57]);
  const items46 = [closure_21];
  const obj39 = ref(dependencyMap[57]);
  [tmp56, tmp57] = callback(ref(dependencyMap[57]).useStateFromStores(items46, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], ref(dependencyMap[72]).isVersionEqual), 2);
  const tmp55 = callback(ref(dependencyMap[57]).useStateFromStores(items46, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], ref(dependencyMap[72]).isVersionEqual), 2);
  const items47 = [closure_14];
  let stateFromStores21 = ref(dependencyMap[57]).useStateFromStores(items47, () => hasLoadedExperiments.hasLoadedExperiments);
  const obj40 = ref(dependencyMap[57]);
  const isSpamMessageRequest = ref(dependencyMap[73]).useIsSpamMessageRequest(channel.id);
  const obj41 = ref(dependencyMap[73]);
  let tmp61 = null != stateFromStores;
  const isMessageRequest = ref(dependencyMap[74]).useIsMessageRequest(channel.id);
  if (tmp61) {
    tmp61 = stateFromStores.ready || stateFromStores.cached;
    const tmp62 = stateFromStores.ready || stateFromStores.cached;
  }
  const obj42 = ref(dependencyMap[74]);
  const tmp63 = null != stateFromStores && stateFromStores.cached;
  const tmp64 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const items48 = [closure_19];
  const stateFromStores22 = ref(dependencyMap[57]).useStateFromStores(items48, () => rsvpVersion.getRsvpVersion());
  const obj43 = ref(dependencyMap[57]);
  const items49 = [closure_18];
  const stateFromStores23 = ref(dependencyMap[57]).useStateFromStores(items49, () => messagesVersion.getMessagesVersion());
  const obj44 = ref(dependencyMap[57]);
  const items50 = [closure_42];
  const stateFromStores24 = ref(dependencyMap[57]).useStateFromStores(items50, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const obj45 = ref(dependencyMap[57]);
  const items51 = [closure_42];
  const items52 = [guildId, stateFromStores];
  const stateFromStoresObject4 = ref(dependencyMap[57]).useStateFromStoresObject(items51, () => {
    if (null != guildId) {
      if (null != stateFromStores) {
        const obj = {};
        const channel = obj;
        const item = stateFromStores.forEach((author) => {
          author = author.author;
          let id;
          if (null != author) {
            id = author.id;
          }
          if (null != id) {
            const member = member.getMember(closure_3, author.author.id);
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
  const obj46 = ref(dependencyMap[57]);
  const items53 = [closure_47];
  const stateFromStores25 = ref(dependencyMap[57]).useStateFromStores(items53, () => closure_47.can(constants3.MODERATE_MEMBERS, stateFromStores1));
  const obj47 = ref(dependencyMap[57]);
  id = undefined;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  const obj48 = ref(dependencyMap[75]);
  const items54 = [closure_36];
  const stateFromStores26 = ref(dependencyMap[57]).useStateFromStores(items54, () => locale.locale);
  const obj49 = ref(dependencyMap[57]);
  const isPaymentsBlocked = ref(dependencyMap[76]).useIsPaymentsBlocked();
  const obj50 = ref(dependencyMap[76]);
  const items55 = [closure_34];
  const stateFromStores27 = ref(dependencyMap[57]).useStateFromStores(items55, () => {
    const tmp = !channel.isForumPost();
    let hasJoinedResult = !tmp;
    if (!tmp) {
      hasJoinedResult = closure_34.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const obj51 = ref(dependencyMap[57]);
  const items56 = [closure_24];
  const stateFromStores28 = ref(dependencyMap[57]).useStateFromStores(items56, () => closure_24.shouldDisplayPrompt(id));
  const obj52 = ref(dependencyMap[57]);
  const items57 = [closure_30];
  const stateFromStores29 = ref(dependencyMap[57]).useStateFromStores(items57, () => eligible.isEligible());
  const obj53 = ref(dependencyMap[57]);
  const items58 = [closure_10];
  const stateFromStores30 = ref(dependencyMap[57]).useStateFromStores(items58, () => lazyCacheStatus.getLazyCacheStatus());
  const obj54 = ref(dependencyMap[57]);
  const messageJumpAndroidKeyboardHeight = ref(dependencyMap[77]).useMessageJumpAndroidKeyboardHeight();
  const obj55 = ref(dependencyMap[77]);
  const tmp78 = importDefault(dependencyMap[78])();
  const channelSummariesExperiment = ref(dependencyMap[79]).useChannelSummariesExperiment(channel);
  closure_7 = channelSummariesExperiment;
  const obj56 = ref(dependencyMap[79]);
  const items59 = [closure_33];
  const items60 = [channelSummariesExperiment, channel.id];
  const items61 = [channel.id, , , , ];
  ({ hasMoreAfter: arr65[1], hasMoreBefore: arr65[2], length: arr65[3], ready: arr65[4] } = stateFromStores);
  const stateFromStores31 = ref(dependencyMap[57]).useStateFromStores(items59, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = closure_33.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items60);
  const effect = importAllResult.useEffect(() => {
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
  const obj57 = ref(dependencyMap[57]);
  obj = { guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackAnnouncementMessageViews = ref(dependencyMap[81]).useShouldTrackAnnouncementMessageViews(obj);
  const obj58 = ref(dependencyMap[81]);
  obj = { messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackRichPresenceInviteEmbedViews = ref(dependencyMap[81]).useShouldTrackRichPresenceInviteEmbedViews(obj);
  const obj60 = ref(dependencyMap[81]);
  obj1 = { guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackOfficialMessageViews = ref(dependencyMap[81]).useShouldTrackOfficialMessageViews(obj1);
  const obj62 = ref(dependencyMap[81]);
  obj2 = { messages: stateFromStores, isMessagesReady: tmp61 };
  const shouldTrackVoiceInviteEmbedViews = ref(dependencyMap[81]).useShouldTrackVoiceInviteEmbedViews(obj2);
  const obj64 = ref(dependencyMap[81]);
  const shouldDisplaySpoilerObscurity = ref(dependencyMap[82]).useShouldDisplaySpoilerObscurity(channel);
  const obj66 = ref(dependencyMap[82]);
  const items62 = [id, guildId];
  const isAgeVerified = ref(dependencyMap[83]).useIsAgeVerified();
  const effect1 = importAllResult.useEffect(() => {
    stateFromStores(id[84]).handleChannelSelect();
    return () => {
      callback(closure_2[84]).handleChannelSelect();
    };
  }, items62);
  const obj67 = ref(dependencyMap[83]);
  const shouldDisableInteractiveComponents = ref(dependencyMap[85]).useShouldDisableInteractiveComponents(channel.id);
  const items63 = [];
  closure_8 = items63;
  const obj68 = ref(dependencyMap[85]);
  const item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (null != messageReference) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items63.push(message_id);
    }
  });
  const tmp90 = callback2(channel.id);
  const tmp92 = callback3(items63);
  const items64 = [closure_15];
  const items65 = [id];
  const stateFromStores32 = ref(dependencyMap[57]).useStateFromStores(items64, () => channelFpInfo.getChannelFpInfo(id), items65);
  const obj69 = ref(dependencyMap[57]);
  const items66 = [closure_26];
  const stateFromStores33 = ref(dependencyMap[57]).useStateFromStores(items66, () => pendingConnection.getPendingConnection());
  const obj70 = ref(dependencyMap[57]);
  const tmp95 = importDefault(dependencyMap[86])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = importDefault(dependencyMap[87])(stateFromStores));
  const tmp96 = importDefault(dependencyMap[87])(stateFromStores);
  const items67 = [closure_53];
  const stateFromStores34 = ref(dependencyMap[57]).useStateFromStores(items67, () => {
    const currentUser = authStore2.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  });
  const obj71 = ref(dependencyMap[57]);
  const items68 = [closure_17];
  const stateFromStores35 = ref(dependencyMap[57]).useStateFromStores(items68, () => version.getVersion());
  const obj72 = ref(dependencyMap[57]);
  const colorStore = ref(dependencyMap[88]).useColorStore((palette) => Object.keys(palette.palette).length);
  const obj73 = ref(dependencyMap[88]);
  const items69 = [closure_13];
  guildId = ref(dependencyMap[57]).useStateFromStores(items69, () => guildEmoji.getGuildEmoji(guildId));
  const obj74 = ref(dependencyMap[57]);
  const items70 = [closure_54];
  const items71 = [guildId];
  guildId = ref(dependencyMap[57]).useStateFromStores(items70, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = authStore3.getVoiceStates(guildId);
      return channel(id[89]).getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items71);
  const obj75 = ref(dependencyMap[57]);
  const items72 = [closure_57, closure_12, closure_45, closure_39];
  guildId = ref(dependencyMap[57]).useStateFromStoresObject(items72, () => {
    let iter3;
    const obj = {};
    const invites = store6.getInvites();
    const tmp = callback(invites.values());
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
          let tmp15 = closure_0;
          let tmp16 = closure_2;
          let obj4 = closure_0(closure_2[90]);
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
            let tmp10 = closure_57;
            let voiceStatesForChannelAlt = closure_57.getVoiceStatesForChannelAlt(id, id1);
            let mapped = voiceStatesForChannelAlt.map((voiceState) => {
              let str = "";
              if (voiceState.voiceState.selfStream) {
                str = "*";
              }
              return "" + str + voiceState.user.id;
            });
            let tmp12 = closure_12;
            let tmp13 = closure_39;
            let joined = mapped.join(",");
            let startTime = closure_12.getStartTime(closure_39.getChannel(id));
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
        let tmp2 = tmp6;
        let tmp3 = tmp7;
        let tmp4 = tmp8;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return obj;
  });
  const obj76 = ref(dependencyMap[57]);
  const items73 = [closure_51];
  guildId = ref(dependencyMap[57]).useStateFromStoresArray(items73, () => {
    const items = [...closure_51.getRemoteActivities(), ...closure_51.getHiddenActivities()];
    return items.filter(channel(id[61]).isNotNullish);
  });
  closure_9 = guildId;
  const obj77 = ref(dependencyMap[57]);
  const items74 = [closure_56];
  guildId = ref(dependencyMap[57]).useStateFromStoresObject(items74, () => guildId.reduce((arg0, application_id) => {
    if (null == application_id.application_id) {
      return arg0;
    } else {
      const state = state.getState(application_id.application_id, constants.JOIN);
      if (null != state) {
        arg0[application_id.application_id] = state;
      }
      return arg0;
    }
  }, {}));
  const obj78 = ref(dependencyMap[57]);
  const items75 = [closure_25];
  guildId = ref(dependencyMap[57]).useStateFromStoresArray(items75, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const obj79 = ref(dependencyMap[57]);
  const items76 = [closure_53];
  guildId = ref(dependencyMap[57]).useStateFromStores(items76, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (null != currentUser) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const obj80 = ref(dependencyMap[57]);
  guildId = ref(dependencyMap[91]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  guildId = closure_66;
  obj3 = {};
  guildId = importDefault(dependencyMap[92]);
  obj3.profile = ref(dependencyMap[92]).Profiles.Messages;
  guildId = channel.isThread();
  if (guildId) {
    guildId = callback4;
    guildId = importDefault;
    guildId = dependencyMap;
    obj4 = { absolute: true };
    guildId = callback4(importDefault(dependencyMap[93]), obj4);
  }
  const items77 = [guildId, ];
  guildId = callback4;
  obj5 = { ref, theme: stateFromStores3, saturation, isVisualRefreshEnabled: tmp15, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp95, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp61, isMessagesCached: tmp63, isMessagesAckable: tmp64, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp17, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp44, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: guildId, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp56, interactionComponentStatesVersion: tmp57 };
  guildId = importDefault(dependencyMap[94]);
  if (stateFromStores21) {
    stateFromStores21 = tmp61;
  }
  obj5.hasLoadedExperiments = stateFromStores21;
  obj5.guildSystemChannelFlags = systemChannelFlags;
  obj5.currentUserCommunicationDisabled = callback(obj48.useCurrentUserCommunicationDisabled(id), 2)[1];
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
const tmp5 = arg1(dependencyMap[56]);
const result = arg1(dependencyMap[95]).fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
