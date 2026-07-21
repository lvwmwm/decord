// Module ID: 14796
// Function ID: 111497
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14796 (_createForOfIteratorHelperLoose)
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
function countActiveChannels(arr) {
  return arr.filter((kind) => {
    kind = kind.kind;
    let tmp = "active-channel" === kind;
    if (!tmp) {
      tmp = "voice" === kind;
    }
    if (!tmp) {
      tmp = "live-guild-stage" === kind;
    }
    if (!tmp) {
      tmp = "unified-vc" === kind;
    }
    if (!tmp) {
      tmp = "embedded-activity" === kind;
    }
    return tmp;
  }).length;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ eventScheduledToStartWithin: closure_8, isEventUpcoming: closure_9, isGuildScheduledEventActive: closure_10 } = arg1(dependencyMap[5]));
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
const importDefaultResult = importDefault(dependencyMap[10]);
const MemberListRowTypes = arg1(dependencyMap[10]).MemberListRowTypes;
const importDefaultResult1 = importDefault(dependencyMap[11]);
let closure_19 = importDefault(dependencyMap[12]);
let closure_20 = arg1(dependencyMap[12]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_21 = importDefault(dependencyMap[13]);
let closure_22 = importDefault(dependencyMap[14]);
let closure_23 = importDefault(dependencyMap[15]);
let closure_24 = importDefault(dependencyMap[16]);
let closure_25 = importDefault(dependencyMap[17]);
const importDefaultResult2 = importDefault(dependencyMap[18]);
const importDefaultResult3 = importDefault(dependencyMap[19]);
const HappeningNowItem = arg1(dependencyMap[20]).HappeningNowItem;
const tmp2 = arg1(dependencyMap[5]);
({ ActivityFlags: closure_29, GuildFeatures: closure_30, Permissions: closure_31, StatusTypes: closure_32 } = arg1(dependencyMap[21]));
const items = [importDefaultResult1, importDefaultResult, importDefaultResult3, importDefaultResult2];
const tmp7 = arg1(dependencyMap[21]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx");

export default function useHappeningNowData(has, guildId) {
  guildId = has;
  guildId = guildId.guildId;
  const importDefault = guildId;
  const withoutUserCards = guildId.withoutUserCards;
  const dependencyMap = withoutUserCards;
  const showMultipleActivitiesPerChannel = guildId.showMultipleActivitiesPerChannel;
  let callback = tmp;
  const isFocused = guildId.isFocused;
  const React = isFocused;
  const hasItem = has.has(HappeningNowItem.LIVE_GUILD_STAGE);
  let closure_5 = hasItem;
  const hasItem1 = has.has(HappeningNowItem.EMBEDDED_ACTIVITY);
  let closure_6 = hasItem1;
  const hasItem2 = has.has(HappeningNowItem.STREAMS);
  let closure_7 = hasItem2;
  const hasItem3 = has.has(HappeningNowItem.USER_CUSTOM_STATUS);
  const hasItem4 = has.has(HappeningNowItem.ACTIVITIES);
  const hasItem5 = has.has(HappeningNowItem.USER);
  const effect = React.useEffect(() => {
    const userAffinitiesV2 = arg0(withoutUserCards[22]).fetchUserAffinitiesV2();
  }, []);
  const items = [closure_6];
  const stateFromStores = guildId(dependencyMap[23]).useStateFromStores(items, () => hasItem1.isConnected());
  let closure_11 = stateFromStores;
  const obj = guildId(dependencyMap[23]);
  const items1 = [closure_15];
  const stateFromStores1 = guildId(dependencyMap[23]).useStateFromStores(items1, () => null != stateFromStores3.getSessionId());
  let closure_12 = stateFromStores1;
  const items2 = [has, stateFromStores1, guildId, isFocused, stateFromStores];
  callback = React.useCallback(() => {
    if (null != guildId) {
      if (arg0.has(callback4.ACTIVE_CHANNEL)) {
        if (stateFromStores1) {
          if (stateFromStores) {
            if (isFocused) {
              const activeChannelsFetchStatus = hasItem2.getActiveChannelsFetchStatus(guildId);
              let tmp7 = null == activeChannelsFetchStatus || null == activeChannelsFetchStatus.fetchedAt;
              if (!tmp7) {
                const _Date = Date;
                tmp7 = Date.now() - activeChannelsFetchStatus.fetchedAt > 300000;
              }
              if (tmp7) {
                const activeChannels = arg0(withoutUserCards[24]).fetchActiveChannels(guildId);
                const obj = arg0(withoutUserCards[24]);
              }
            }
          }
        }
      }
    }
  }, items2);
  let closure_13 = callback;
  const items3 = [callback];
  const effect1 = React.useEffect(() => {
    callback();
  }, items3);
  const obj2 = guildId(dependencyMap[23]);
  const items4 = [closure_21];
  const stateFromStores2 = guildId(dependencyMap[23]).useStateFromStores(items4, () => {
    let guild = null;
    if (null != guildId) {
      guild = stateFromStores7.getGuild(guildId);
    }
    return guild;
  });
  let closure_14 = stateFromStores2;
  const obj3 = guildId(dependencyMap[23]);
  const items5 = [closure_19];
  const stateFromStores3 = guildId(dependencyMap[23]).useStateFromStores(items5, () => {
    let defaultChannel = null;
    if (null != guildId) {
      defaultChannel = callback2.getDefaultChannel(guildId);
    }
    return defaultChannel;
  });
  closure_15 = stateFromStores3;
  const obj4 = guildId(dependencyMap[23]);
  const firstGloballyViewbleGuildChannelId = guildId(dependencyMap[25]).useFirstGloballyViewbleGuildChannelId(guildId);
  const importDefaultResult = firstGloballyViewbleGuildChannelId;
  const obj5 = guildId(dependencyMap[25]);
  const items6 = [closure_19];
  const stateFromStores4 = guildId(dependencyMap[23]).useStateFromStores(items6, () => {
    let channels = null;
    if (null != guildId) {
      channels = callback2.getChannels(guildId);
    }
    return channels;
  });
  const MemberListRowTypes = stateFromStores4;
  const items7 = [stateFromStores1, stateFromStores3, firstGloballyViewbleGuildChannelId, guildId, isFocused, stateFromStores];
  const callback1 = React.useCallback(() => {
    let tmp = stateFromStores1;
    if (stateFromStores1) {
      tmp = stateFromStores;
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = null != guildId;
    }
    if (tmp) {
      tmp = null != stateFromStores3;
    }
    if (tmp) {
      arg0(withoutUserCards[26]).subscribeGuild(guildId);
      const obj = arg0(withoutUserCards[26]);
      arg0(withoutUserCards[26]).subscribeChannel(guildId, stateFromStores3.id, arg0(withoutUserCards[27]).DEFAULT_RANGES);
      let tmp14 = null != firstGloballyViewbleGuildChannelId;
      if (tmp14) {
        tmp14 = firstGloballyViewbleGuildChannelId !== stateFromStores3.id;
      }
      if (tmp14) {
        arg0(withoutUserCards[26]).subscribeChannel(guildId, firstGloballyViewbleGuildChannelId, arg0(withoutUserCards[27]).DEFAULT_RANGES);
        const obj3 = arg0(withoutUserCards[26]);
      }
      const obj2 = arg0(withoutUserCards[26]);
    }
  }, items7);
  const items8 = [callback1];
  const effect2 = React.useEffect(() => {
    callback1();
  }, items8);
  const items9 = [callback, callback1];
  const callback2 = React.useCallback(() => {
    callback();
    callback1();
  }, items9);
  closure_19 = callback2;
  const items10 = [callback2];
  const effect3 = React.useEffect(() => {
    const subscription = guildId(withoutUserCards[28]).subscribe("CONNECTION_OPEN", callback2);
    return () => {
      callback(closure_2[28]).unsubscribe("CONNECTION_OPEN", closure_19);
    };
  }, items10);
  const obj6 = guildId(dependencyMap[23]);
  let tmp21 = isFocused;
  if (isFocused) {
    tmp21 = !obj7.useIsVoicePanelFullscreen();
  }
  let closure_20 = tmp21;
  const obj7 = guildId(dependencyMap[29]);
  const items11 = [importDefaultResult];
  const stateFromStores5 = guildId(dependencyMap[23]).useStateFromStores(items11, () => {
    if (null != guildId) {
      if (null != stateFromStores3) {
        const props = firstGloballyViewbleGuildChannelId.getProps(guildId, stateFromStores3.id);
        let tmp6 = null == props || null == props.groups;
        if (!tmp6) {
          tmp6 = props.groups.length <= 0;
        }
        let tmp7 = !tmp6;
        if (!tmp6) {
          tmp7 = props.groups[0].id === constants.UNKNOWN;
        }
        return tmp7;
      }
    }
    return false;
  });
  const obj8 = guildId(dependencyMap[23]);
  const items12 = [closure_7];
  const items13 = [guildId, has];
  const stateFromStores6 = guildId(dependencyMap[23]).useStateFromStores(items12, () => {
    let tmp = null != guildId;
    if (tmp) {
      const tmp4 = !arg0.has(callback4.ACTIVE_CHANNEL);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = null == hasItem2.getActiveChannelIds(guildId);
      }
      tmp = tmp5;
    }
    return tmp;
  }, items13);
  const obj9 = guildId(dependencyMap[23]);
  const items14 = [closure_13];
  const stateFromStores7 = guildId(dependencyMap[23]).useStateFromStores(items14, () => callback.getUserAffinities());
  closure_21 = stateFromStores7;
  const obj10 = guildId(dependencyMap[23]);
  const items15 = [closure_24];
  const stateFromStoresArray = guildId(dependencyMap[23]).useStateFromStoresArray(items15, () => tmp30.getFriendIDs());
  let closure_22 = stateFromStoresArray;
  const obj11 = guildId(dependencyMap[23]);
  const items16 = [closure_22];
  const items17 = [guildId];
  const stateFromStoresObject = guildId(dependencyMap[23]).useStateFromStoresObject(items16, () => {
    const obj = { permissionChannelsVersion: stateFromStoresArray.getChannelsVersion() };
    let guildVersion = null;
    if (null != guildId) {
      guildVersion = stateFromStoresArray.getGuildVersion(guildId);
    }
    obj.permissionGuildVersion = guildVersion;
    return obj;
  }, items17);
  const obj12 = guildId(dependencyMap[23]);
  const items18 = [closure_7];
  const items19 = [guildId];
  const stateFromStores8 = guildId(dependencyMap[23]).useStateFromStores(items18, () => {
    let activeChannelIds = null;
    if (null != guildId) {
      activeChannelIds = hasItem2.getActiveChannelIds(guildId);
    }
    return activeChannelIds;
  }, items19);
  const obj13 = guildId(dependencyMap[23]);
  const items20 = [closure_11];
  const items21 = [guildId];
  const stateFromStoresArray1 = guildId(dependencyMap[23]).useStateFromStoresArray(items20, () => stateFromStores.getGuildScheduledEventsForGuild(guildId), items21);
  let closure_23 = stateFromStoresArray1;
  const obj14 = guildId(dependencyMap[23]);
  const items22 = [closure_5];
  const items23 = [guildId];
  let tmp30 = !stateFromStores1;
  const stateFromStoresArray2 = guildId(dependencyMap[23]).useStateFromStoresArray(items22, () => {
    if (null == guildId) {
      let items = [];
    } else {
      items = hasItem.getEmbeddedActivitiesForGuild(guildId);
    }
    return items;
  }, items23);
  if (!tmp30) {
    tmp30 = stateFromStores5;
  }
  if (!tmp30) {
    tmp30 = stateFromStores6;
  }
  closure_24 = tmp30;
  const ref = React.useRef({ guildId, hasComputed: false });
  let closure_25 = ref;
  const items24 = [guildId, stateFromStores7, stateFromStores3, hasItem, stateFromStoresArray, stateFromStoresArray1, hasItem5, hasItem2, hasItem1, undefined !== showMultipleActivitiesPerChannel && showMultipleActivitiesPerChannel, hasItem3, hasItem4, has, withoutUserCards, stateFromStores2, stateFromStores4, stateFromStores8, stateFromStoresObject, stateFromStoresArray2];
  const callback3 = React.useCallback(() => guildId(withoutUserCards[30]).time("\u{1F3A8}", "computeHappeningNowState", () => {
    let done;
    let iter4;
    let iter9;
    function addUser(userId, primaryActivity, displayName, canViewChannel, arg4) {
      if (!closure_24.isBlockedOrIgnored(userId)) {
        let channelId;
        if (null != displayName) {
          channelId = displayName.channelId;
        }
        const channel = store.getChannel(channelId);
        let obj1 = set(obj[32]);
        if (!obj1.isChannelContentGated(channel)) {
          if (null != channel) {
            if (channel.isGroupDM()) {
              if (null != displayName) {
                if (null != set1) {
                  let guildId = set1;
                } else if (null != channel) {
                  guildId = channel.getGuildId();
                }
                const streamForUser = streamForUser.getStreamForUser(userId, guildId);
                if (null != streamForUser) {
                  if (obj4) {
                    let obj = { userId, guildId: set1, kind: "activity" };
                    let tmp69;
                    if (null != primaryActivity) {
                      tmp69 = primaryActivity;
                    }
                    obj.activity = tmp69;
                    if (null == set1) {
                      const tmp73 = streamForUser;
                    } else {
                      let guildId1;
                      if (null != streamForUser) {
                        guildId1 = streamForUser.guildId;
                      }
                    }
                    obj.stream = tmp73;
                    obj2[userId] = obj;
                    const tmp67 = obj2;
                  }
                }
                if (null != channel) {
                  if (!set1.has(channel.id)) {
                    if (channel.isGuildStageVoice()) {
                      if (closure_24.isFriend(userId)) {
                        const stageInstanceByChannel = items4.getStageInstanceByChannel(channel.id);
                        if (null != stageInstanceByChannel) {
                          if (closure_22.can(constants3.CONNECT, channel)) {
                            obj = { kind: "live-guild-stage", stage: stageInstanceByChannel };
                            obj[channel.id] = obj;
                          }
                        }
                      }
                    } else {
                      if (obj3) {
                        const embeddedActivitiesForChannel = obj2.getEmbeddedActivitiesForChannel(channel.id);
                        if (obj) {
                          const found = embeddedActivitiesForChannel.filter((userIds) => {
                            const items = [...userIds.userIds];
                            return items.some(() => { ... });
                          });
                          obj1[channel.id] = found.map((activity) => ({ kind: "embedded-activity", userId: activity, voiceState: arg2, guildId: arg2, activity }));
                        } else {
                          const result = set(obj[33]).findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel);
                          if (null !== result) {
                            obj1 = { kind: "embedded-activity", userId, voiceState: displayName, guildId: set1, activity: result };
                            const items = [obj1];
                            obj1[channel.id] = items;
                          }
                          const obj11 = set(obj[33]);
                        }
                      }
                      const obj2 = { kind: "voice", userId, voiceState: displayName };
                      if (null != set1) {
                        let guildId2 = set1;
                      } else if (null != channel) {
                        guildId2 = channel.getGuildId();
                      }
                      let tmp60;
                      if (null != guildId2) {
                        tmp60 = guildId2;
                      }
                      obj2.guildId = tmp60;
                      obj[channel.id] = obj2;
                      const tmp57 = obj;
                    }
                  }
                }
              }
            }
          }
          if (null != primaryActivity) {
            let obj4 = set(obj[34]);
            if (obj4.isActivityPermanentCustomStatus(primaryActivity)) {
              if (items2) {
                const obj3 = { kind: "activity", userId, guildId: set1, activity: primaryActivity };
                items2.push(obj3);
              }
            } else {
              let obj5 = set(obj[35]);
              if (obj5.isActivityTemporaryCustomStatus(primaryActivity)) {
                if (items2) {
                  obj4 = { userId, guildId: set1, kind: "activity", activity: primaryActivity };
                  obj4[userId] = obj4;
                }
              } else if (items3) {
                let tmp27 = set1(obj[36])(primaryActivity, constants2.EMBEDDED);
                if (tmp27) {
                  const voiceStateForSession = authStore.getVoiceStateForSession(userId, primaryActivity.session_id);
                  let channelId1;
                  if (null != voiceStateForSession) {
                    channelId1 = voiceStateForSession.channelId;
                  }
                  const channel1 = store.getChannel(channelId1);
                  let guildId3;
                  if (null != channel1) {
                    guildId3 = channel1.getGuildId();
                  }
                  tmp27 = guildId3 !== set1;
                }
                if (!tmp27) {
                  obj5 = { userId, guildId: set1, kind: "activity", activity: primaryActivity };
                  obj3[userId] = obj5;
                }
              }
            }
          } else if (voiceStates) {
            const status = store2.getStatus(userId, set1);
            if (null != status) {
              if (status === constants4.OFFLINE) {
                const obj6 = { kind: "user", userId, guildId: set1 };
                items3.push(obj6);
              } else {
                const obj7 = { kind: "user", userId, guildId: set1 };
                items2.push(obj7);
              }
            }
          }
        }
      }
    }
    ref.current.guildId = set1;
    ref.current.hasComputed = true;
    const set = new Set();
    let bound = Math.min(length.length, 50);
    for (let num = 0; num < bound; num = num + 1) {
      let tmp2 = length;
      let addResult = set.add(length[num].otherUserId);
    }
    const tmp4 = callback(closure_22);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let addResult1 = set.add(iter.value);
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const mutablePrivateChannels = mutablePrivateChannels.getMutablePrivateChannels();
    for (const key10044 in mutablePrivateChannels) {
      bound = key10044;
      let obj15 = mutablePrivateChannels[key10044];
      if (!obj15.isPrivate()) {
        continue;
      } else {
        let addResult2 = set.add(obj15.getRecipientId());
        // continue
      }
      continue;
    }
    if (null != set1) {
      if (null != id) {
        let rows = rows.getRows(set1, id.id);
      }
      const item = rows.forEach((type) => {
        if (type.type === constants.MEMBER) {
          set.add(type.userId);
        }
      });
      const items = [];
      const items1 = [];
      const _Set = Set;
      const set1 = new Set();
      const tmp18 = callback(closure_23);
      let iter3 = tmp18();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          let tmp19 = closure_10;
          if (closure_10(value)) {
            let arr = items.push(value);
          } else {
            let tmp20 = closure_9;
            let tmp21 = closure_9(value);
            if (tmp21) {
              let tmp22 = closure_8;
              tmp21 = closure_8(value, 604800);
            }
            if (tmp21) {
              arr = items1.push(value);
            }
          }
          if (null != value.channel_id) {
            let addResult3 = set1.add(value.channel_id);
          }
          iter4 = tmp18();
          iter3 = iter4;
        } while (!iter4.done);
      }
      let obj = {};
      obj = {};
      const obj1 = {};
      const obj2 = {};
      const obj3 = {};
      const obj4 = {};
      if (null != set1) {
        if (obj2) {
          const stageInstancesByGuild = items4.getStageInstancesByGuild(set1);
          const item1 = set1(obj[31]).forEach(stageInstancesByGuild, (channelId) => {
            let obj = { channelId: channelId.channel_id };
            let result = closure_22.canWithPartialContext(constants3.CONNECT, obj);
            if (result) {
              result = !function blockedOrIgnoredUserInVoiceChannel(channel_id) {
                if (null == channel_id) {
                  return false;
                } else {
                  const voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel_id);
                  let someResult = null != voiceStatesForChannel;
                  if (someResult) {
                    const mapped = callback2(closure_2[31])(voiceStatesForChannel).map(() => { ... });
                    const found = mapped.filter(callback(closure_2[39]).isNotNullish);
                    someResult = found.some(() => { ... });
                    const arr = callback2(closure_2[31])(voiceStatesForChannel);
                  }
                  return someResult;
                }
              }(channelId.channel_id);
            }
            if (result) {
              obj = { kind: "live-guild-stage", stage: channelId };
              obj[channelId.channel_id] = obj;
            }
          });
          const arr5 = set1(obj[31]);
        }
      }
      const items2 = [];
      const items3 = [];
      const voiceStates = voiceStates.getVoiceStates(set1);
      const _Set2 = Set;
      const set2 = new Set();
      const item2 = set.forEach((userId) => {
        const user = user.getUser(userId);
        if (null != user) {
          if (user.bot) {
            set2.add(userId);
          } else {
            const primaryActivity = store2.getPrimaryActivity(userId, set1);
            if (null != set1) {
              let voiceStateForUser = voiceStates[userId];
            } else {
              voiceStateForUser = authStore.getVoiceStateForUser(userId);
            }
            let tmp8 = voiceStates;
            if (!voiceStates) {
              tmp8 = null != primaryActivity;
            }
            if (!tmp8) {
              tmp8 = null != voiceStateForUser;
            }
            if (tmp8) {
              addUser(userId, primaryActivity, voiceStateForUser);
            }
          }
        }
      });
      if (tmp42) {
        const _Array = Array;
        addUser(Array.from(set2)[0], null, null);
      }
      if (null != set1) {
        const item3 = set1(obj[31]).forEach(voiceStates, (userId) => {
          userId = userId.userId;
          addUser(userId, store2.getPrimaryActivity(userId, set1), userId);
        });
        const arr8 = set1(obj[31]);
      }
      const items4 = [];
      const tmp50 = callback(set);
      const iter5 = tmp50();
      let iter6 = iter5;
      if (!iter5.done) {
        do {
          value = iter6.value;
          let tmp61 = closure_28;
          if (closure_28.LIVE_GUILD_STAGE === value) {
            bound = obj;
            let tmp65 = tmp51;
            let tmp66 = tmp52;
            let tmp67 = tmp53;
            let tmp68 = tmp54;
            let num9 = tmp55;
            let tmp69 = tmp56;
            let tmp70 = tmp57;
            let tmp71 = tmp58;
            let num10 = tmp59;
            let tmp72 = tmp60;
            bound = Object.keys();
            if (bound !== undefined) {
              tmp65 = tmp51;
              tmp66 = tmp52;
              tmp67 = tmp53;
              tmp68 = tmp54;
              num9 = tmp55;
              tmp69 = tmp56;
              tmp70 = tmp57;
              tmp71 = tmp58;
              num10 = tmp59;
              tmp72 = tmp60;
              bound = bound[num11];
              while (bound !== undefined) {
                bound = items4.push(obj[bound]);
                // continue
              }
            }
          } else {
            bound = closure_28;
            if (closure_28.LIVE_GUILD_EVENT === value) {
              bound = items.forEach((event) => {
                const obj = { 9223372036854775807: null, -9223372036854775808: "", -9223372036854775808: null, event };
                return items4.push(obj);
              });
              tmp65 = tmp51;
              tmp66 = tmp52;
              tmp67 = tmp53;
              tmp68 = tmp54;
              num9 = tmp55;
              tmp69 = tmp56;
              tmp70 = tmp57;
              tmp71 = tmp58;
              num10 = tmp59;
              tmp72 = tmp60;
            } else {
              bound = closure_28;
              if (closure_28.UPCOMING_GUILD_EVENT === value) {
                bound = items1.forEach((event) => items4.push({ event }));
                tmp65 = tmp51;
                tmp66 = tmp52;
                tmp67 = tmp53;
                tmp68 = tmp54;
                num9 = tmp55;
                tmp69 = tmp56;
                tmp70 = tmp57;
                tmp71 = tmp58;
                num10 = tmp59;
                tmp72 = tmp60;
              } else {
                bound = closure_28;
                if (closure_28.VOICES === value) {
                  bound = obj;
                  tmp65 = tmp51;
                  tmp66 = tmp52;
                  tmp67 = tmp53;
                  tmp68 = tmp54;
                  num9 = tmp55;
                  tmp69 = tmp56;
                  tmp70 = tmp57;
                  tmp71 = tmp58;
                  num10 = tmp59;
                  tmp72 = tmp60;
                  bound = Object.keys();
                  if (bound !== undefined) {
                    tmp65 = tmp51;
                    tmp66 = tmp52;
                    tmp67 = tmp53;
                    tmp68 = tmp54;
                    num9 = tmp55;
                    tmp69 = tmp56;
                    tmp70 = tmp57;
                    tmp71 = tmp58;
                    num10 = tmp59;
                    tmp72 = tmp60;
                    bound = bound[num11];
                    while (bound !== undefined) {
                      bound = items4.push(obj[bound]);
                      // continue
                    }
                  }
                } else {
                  bound = closure_28;
                  if (closure_28.EMBEDDED_ACTIVITY === value) {
                    bound = obj1;
                    bound = tmp51;
                    bound = tmp52;
                    tmp65 = tmp51;
                    tmp66 = tmp52;
                    tmp67 = tmp53;
                    tmp68 = tmp54;
                    num9 = tmp55;
                    tmp69 = tmp56;
                    tmp70 = tmp57;
                    tmp71 = tmp58;
                    num10 = tmp59;
                    tmp72 = tmp60;
                    bound = Object.keys();
                    if (bound !== undefined) {
                      tmp65 = bound;
                      tmp66 = bound;
                      tmp67 = tmp53;
                      tmp68 = tmp54;
                      num9 = tmp55;
                      tmp69 = tmp56;
                      tmp70 = tmp57;
                      tmp71 = tmp58;
                      num10 = tmp59;
                      tmp72 = tmp60;
                      bound = bound[bound];
                      while (bound !== undefined) {
                        bound = closure_34;
                        let num11 = closure_34(obj1[bound]);
                        let iter10 = num11();
                        bound = iter10;
                        bound = num11;
                        let iter8 = iter10;
                        if (iter10.done) {
                          continue;
                        } else {
                          bound = items4.push(iter8.value);
                          let iter7 = num11();
                          bound = iter7;
                          bound = num11;
                          iter8 = iter7;
                        }
                        continue;
                      }
                    }
                  } else {
                    bound = closure_28;
                    if (closure_28.COMBINED_VC === value) {
                      bound = obj;
                      tmp65 = tmp51;
                      tmp66 = tmp52;
                      tmp67 = tmp53;
                      tmp68 = tmp54;
                      num9 = tmp55;
                      tmp69 = tmp56;
                      tmp70 = tmp57;
                      tmp71 = tmp58;
                      num10 = tmp59;
                      tmp72 = tmp60;
                      bound = Object.keys();
                      if (bound !== undefined) {
                        tmp65 = tmp51;
                        tmp66 = tmp52;
                        tmp67 = tmp53;
                        tmp68 = tmp54;
                        num9 = tmp55;
                        tmp69 = tmp56;
                        tmp70 = tmp57;
                        tmp71 = tmp58;
                        num10 = tmp59;
                        tmp72 = tmp60;
                        bound = bound[num11];
                        while (bound !== undefined) {
                          let obj5 = {};
                          bound = obj5;
                          bound = Object.assign(obj[bound]);
                          obj5["kind"] = "unified-vc";
                          bound = items4.push(obj5);
                          // continue
                        }
                      }
                    } else {
                      bound = closure_28;
                      if (closure_28.STREAMS === value) {
                        bound = obj2;
                        tmp65 = tmp51;
                        tmp66 = tmp52;
                        tmp67 = tmp53;
                        tmp68 = tmp54;
                        num9 = tmp55;
                        tmp69 = tmp56;
                        tmp70 = tmp57;
                        tmp71 = tmp58;
                        num10 = tmp59;
                        tmp72 = tmp60;
                        bound = Object.keys();
                        if (bound !== undefined) {
                          tmp65 = tmp51;
                          tmp66 = tmp52;
                          tmp67 = tmp53;
                          tmp68 = tmp54;
                          num9 = tmp55;
                          tmp69 = tmp56;
                          tmp70 = tmp57;
                          tmp71 = tmp58;
                          num10 = tmp59;
                          tmp72 = tmp60;
                          bound = bound[num11];
                          while (bound !== undefined) {
                            bound = items4.push(obj2[bound]);
                            // continue
                          }
                        }
                      } else {
                        bound = closure_28;
                        if (closure_28.USER_CUSTOM_STATUS === value) {
                          bound = obj4;
                          tmp65 = tmp51;
                          tmp66 = tmp52;
                          tmp67 = tmp53;
                          tmp68 = tmp54;
                          num9 = tmp55;
                          tmp69 = tmp56;
                          tmp70 = tmp57;
                          tmp71 = tmp58;
                          num10 = tmp59;
                          tmp72 = tmp60;
                          bound = Object.keys();
                          if (bound !== undefined) {
                            tmp65 = tmp51;
                            tmp66 = tmp52;
                            tmp67 = tmp53;
                            tmp68 = tmp54;
                            num9 = tmp55;
                            tmp69 = tmp56;
                            tmp70 = tmp57;
                            tmp71 = tmp58;
                            num10 = tmp59;
                            tmp72 = tmp60;
                            bound = bound[num11];
                            while (bound !== undefined) {
                              bound = items4.push(obj4[bound]);
                              // continue
                            }
                          }
                        } else {
                          bound = closure_28;
                          if (closure_28.ACTIVITIES === value) {
                            bound = obj3;
                            tmp65 = tmp51;
                            tmp66 = tmp52;
                            tmp67 = tmp53;
                            tmp68 = tmp54;
                            num9 = tmp55;
                            tmp69 = tmp56;
                            tmp70 = tmp57;
                            tmp71 = tmp58;
                            num10 = tmp59;
                            tmp72 = tmp60;
                            bound = Object.keys();
                            if (bound !== undefined) {
                              tmp65 = tmp51;
                              tmp66 = tmp52;
                              tmp67 = tmp53;
                              tmp68 = tmp54;
                              num9 = tmp55;
                              tmp69 = tmp56;
                              tmp70 = tmp57;
                              tmp71 = tmp58;
                              num10 = tmp59;
                              tmp72 = tmp60;
                              bound = bound[num11];
                              while (bound !== undefined) {
                                bound = items4.push(obj3[bound]);
                                // continue
                              }
                            }
                          } else {
                            bound = closure_28;
                            if (closure_28.ACTIVE_CHANNEL === value) {
                              bound = closure_1;
                              tmp65 = tmp51;
                              tmp66 = tmp52;
                              tmp67 = tmp53;
                              tmp68 = tmp54;
                              num9 = tmp55;
                              tmp69 = tmp56;
                              tmp70 = tmp57;
                              tmp71 = tmp58;
                              num10 = tmp59;
                              tmp72 = tmp60;
                              if (null != closure_1) {
                                bound = closure_0;
                                bound = closure_2;
                                let obj16 = closure_0(closure_2[37]);
                                bound = closure_1;
                                bound = closure_18;
                                let items5 = [closure_18, , , ];
                                bound = closure_22;
                                items5[1] = closure_22;
                                bound = closure_7;
                                items5[2] = closure_7;
                                bound = closure_25;
                                items5[3] = closure_25;
                                num11 = obj16.getActiveTextChannels(closure_1, items5);
                                let _Math = Math;
                                bound = Math.min(2, num11.length);
                                let num16 = 0;
                                tmp65 = tmp51;
                                tmp66 = tmp52;
                                tmp67 = num11;
                                tmp68 = bound;
                                num9 = 0;
                                tmp69 = tmp56;
                                tmp70 = tmp57;
                                tmp71 = tmp58;
                                num10 = tmp59;
                                tmp72 = tmp60;
                                if (0 < bound) {
                                  do {
                                    let obj6 = { kind: "active-channel" };
                                    bound = closure_1;
                                    obj6.guildId = closure_1;
                                    obj6.channelId = num11[num16].id;
                                    bound = items4.push(obj6);
                                    num16 = num16 + 1;
                                    tmp65 = tmp51;
                                    tmp66 = tmp52;
                                    tmp67 = num11;
                                    tmp68 = bound;
                                    tmp69 = tmp56;
                                    tmp70 = tmp57;
                                    tmp71 = tmp58;
                                    num10 = tmp59;
                                    tmp72 = tmp60;
                                    num9 = num16;
                                  } while (num16 < bound);
                                }
                              }
                            } else {
                              bound = closure_28;
                              if (closure_28.USER === value) {
                                num11 = 0;
                                let num12 = 0;
                                let num13 = 0;
                                let num14 = 0;
                                bound = tmp58;
                                if (0 < items2.length) {
                                  while (true) {
                                    bound = items2[num12];
                                    bound = closure_2;
                                    bound = null != closure_2;
                                    if (bound) {
                                      bound = closure_2;
                                      bound = closure_2.has(bound.userId);
                                    }
                                    bound = num11;
                                    if (!bound) {
                                      bound = items4.push(bound);
                                      bound = num11 + 1;
                                    }
                                    bound = num12 + 1;
                                    num13 = bound;
                                    num14 = bound;
                                    if (bound >= items2.length) {
                                      break;
                                    } else {
                                      num11 = bound;
                                      num12 = bound;
                                      num14 = bound;
                                      num13 = bound;
                                      if (bound >= 50) {
                                        break;
                                      }
                                    }
                                  }
                                }
                                tmp65 = tmp51;
                                tmp66 = tmp52;
                                tmp67 = tmp53;
                                tmp68 = tmp54;
                                num9 = tmp55;
                                tmp69 = num13;
                                tmp70 = num14;
                                tmp71 = bound;
                                num10 = 0;
                                tmp72 = tmp60;
                                if (0 < items3.length) {
                                  num11 = num13;
                                  let num15 = 0;
                                  tmp65 = tmp51;
                                  tmp66 = tmp52;
                                  tmp67 = tmp53;
                                  tmp68 = tmp54;
                                  num9 = tmp55;
                                  tmp69 = num13;
                                  tmp70 = num14;
                                  tmp71 = bound;
                                  num10 = 0;
                                  tmp72 = tmp60;
                                  if (num13 < 50) {
                                    while (true) {
                                      bound = items3[num15];
                                      bound = closure_2;
                                      bound = null != closure_2;
                                      if (bound) {
                                        bound = closure_2;
                                        bound = closure_2.has(bound.userId);
                                      }
                                      bound = num11;
                                      if (!bound) {
                                        bound = items4.push(bound);
                                        bound = num11 + 1;
                                      }
                                      bound = num15 + 1;
                                      tmp65 = tmp51;
                                      tmp66 = tmp52;
                                      tmp67 = tmp53;
                                      tmp68 = tmp54;
                                      num9 = tmp55;
                                      tmp69 = bound;
                                      tmp70 = num14;
                                      tmp71 = bound;
                                      tmp72 = bound;
                                      num10 = bound;
                                      if (bound >= items3.length) {
                                        break;
                                      } else {
                                        num11 = bound;
                                        num15 = bound;
                                        tmp65 = tmp51;
                                        tmp66 = tmp52;
                                        tmp67 = tmp53;
                                        tmp68 = tmp54;
                                        num9 = tmp55;
                                        tmp69 = bound;
                                        tmp70 = num14;
                                        tmp71 = bound;
                                        num10 = bound;
                                        tmp72 = bound;
                                        break;
                                      }
                                    }
                                  }
                                }
                              } else {
                                bound = closure_28;
                                if (closure_28.STUDENT_HUB_ADD_CHANNEL === value) {
                                  let tmp99 = closure_14;
                                  bound = null != closure_14;
                                  if (bound) {
                                    bound = closure_14;
                                    let features = closure_14.features;
                                    bound = closure_30;
                                    bound = features.has(closure_30.HUB);
                                  }
                                  tmp65 = tmp51;
                                  tmp66 = tmp52;
                                  tmp67 = tmp53;
                                  tmp68 = tmp54;
                                  num9 = tmp55;
                                  tmp69 = tmp56;
                                  tmp70 = tmp57;
                                  tmp71 = tmp58;
                                  num10 = tmp59;
                                  tmp72 = tmp60;
                                  if (bound) {
                                    let obj7 = { kind: "student-hub-add-channel" };
                                    bound = closure_14;
                                    obj7.guildId = closure_14.id;
                                    bound = items4.push(obj7);
                                    tmp65 = tmp51;
                                    tmp66 = tmp52;
                                    tmp67 = tmp53;
                                    tmp68 = tmp54;
                                    num9 = tmp55;
                                    tmp69 = tmp56;
                                    tmp70 = tmp57;
                                    tmp71 = tmp58;
                                    num10 = tmp59;
                                    tmp72 = tmp60;
                                  }
                                } else {
                                  bound = closure_28;
                                  if (closure_28.CREATE_CHANNEL === value) {
                                    let tmp90 = closure_14;
                                    let canResult = null != closure_14;
                                    if (canResult) {
                                      let tmp92 = closure_22;
                                      let tmp93 = closure_31;
                                      let tmp94 = closure_14;
                                      canResult = closure_22.can(closure_31.MANAGE_CHANNELS, closure_14);
                                    }
                                    if (canResult) {
                                      let tmp95 = closure_17;
                                      canResult = null != closure_17;
                                    }
                                    if (canResult) {
                                      num11 = closure_17;
                                      let tmp96 = closure_20;
                                      canResult = closure_17[closure_20].length <= 2;
                                    }
                                    tmp65 = tmp51;
                                    tmp66 = tmp52;
                                    tmp67 = tmp53;
                                    tmp68 = tmp54;
                                    num9 = tmp55;
                                    tmp69 = tmp56;
                                    tmp70 = tmp57;
                                    tmp71 = tmp58;
                                    num10 = tmp59;
                                    tmp72 = tmp60;
                                    if (canResult) {
                                      let obj8 = { kind: "create-channel" };
                                      let tmp97 = closure_14;
                                      obj8.guildId = closure_14.id;
                                      let arr1 = items4.push(obj8);
                                      tmp65 = tmp51;
                                      tmp66 = tmp52;
                                      tmp67 = tmp53;
                                      tmp68 = tmp54;
                                      num9 = tmp55;
                                      tmp69 = tmp56;
                                      tmp70 = tmp57;
                                      tmp71 = tmp58;
                                      num10 = tmp59;
                                      tmp72 = tmp60;
                                    }
                                  } else {
                                    bound = closure_28;
                                    if (closure_28.INVITE === value) {
                                      let tmp82 = closure_14;
                                      let shouldRenderInviteResult = null != closure_14;
                                      if (shouldRenderInviteResult) {
                                        let tmp84 = closure_17;
                                        shouldRenderInviteResult = null != closure_17;
                                      }
                                      if (shouldRenderInviteResult) {
                                        let tmp85 = closure_0;
                                        let tmp86 = closure_2;
                                        let obj9 = closure_0(closure_2[38]);
                                        num11 = closure_17;
                                        let tmp87 = closure_14;
                                        shouldRenderInviteResult = obj9.shouldRenderInvite(closure_17, closure_14);
                                      }
                                      tmp65 = tmp51;
                                      tmp66 = tmp52;
                                      tmp67 = tmp53;
                                      tmp68 = tmp54;
                                      num9 = tmp55;
                                      tmp69 = tmp56;
                                      tmp70 = tmp57;
                                      tmp71 = tmp58;
                                      num10 = tmp59;
                                      tmp72 = tmp60;
                                      if (shouldRenderInviteResult) {
                                        obj9 = { kind: "invite" };
                                        let tmp88 = closure_14;
                                        obj9.guildId = closure_14.id;
                                        let arr2 = items4.push(obj9);
                                        tmp65 = tmp51;
                                        tmp66 = tmp52;
                                        tmp67 = tmp53;
                                        tmp68 = tmp54;
                                        num9 = tmp55;
                                        tmp69 = tmp56;
                                        tmp70 = tmp57;
                                        tmp71 = tmp58;
                                        num10 = tmp59;
                                        tmp72 = tmp60;
                                      }
                                    } else {
                                      bound = closure_28;
                                      if (closure_28.CUSTOMIZE_GUILD === value) {
                                        let tmp73 = closure_14;
                                        let canResult1 = null != closure_14;
                                        if (canResult1) {
                                          let tmp75 = closure_22;
                                          let tmp76 = closure_31;
                                          let tmp77 = closure_14;
                                          canResult1 = closure_22.can(closure_31.MANAGE_GUILD, closure_14);
                                        }
                                        if (canResult1) {
                                          let tmp78 = closure_14;
                                          num11 = null == closure_14;
                                          let icon;
                                          if (!num11) {
                                            num11 = closure_14;
                                            icon = closure_14.icon;
                                          }
                                          canResult1 = null == icon;
                                        }
                                        tmp65 = tmp51;
                                        tmp66 = tmp52;
                                        tmp67 = tmp53;
                                        tmp68 = tmp54;
                                        num9 = tmp55;
                                        tmp69 = tmp56;
                                        tmp70 = tmp57;
                                        tmp71 = tmp58;
                                        num10 = tmp59;
                                        tmp72 = tmp60;
                                        if (canResult1) {
                                          let obj10 = { kind: "customize-guild" };
                                          let tmp80 = closure_14;
                                          obj10.guildId = closure_14.id;
                                          let arr3 = items4.push(obj10);
                                          tmp65 = tmp51;
                                          tmp66 = tmp52;
                                          tmp67 = tmp53;
                                          tmp68 = tmp54;
                                          num9 = tmp55;
                                          tmp69 = tmp56;
                                          tmp70 = tmp57;
                                          tmp71 = tmp58;
                                          num10 = tmp59;
                                          tmp72 = tmp60;
                                        }
                                      } else {
                                        let tmp62 = closure_0;
                                        let tmp63 = closure_2;
                                        obj7 = closure_0(closure_2[39]);
                                        let assertNeverResult = obj7.assertNever(value);
                                        tmp65 = tmp51;
                                        tmp66 = tmp52;
                                        tmp67 = tmp53;
                                        tmp68 = tmp54;
                                        num9 = tmp55;
                                        tmp69 = tmp56;
                                        tmp70 = tmp57;
                                        tmp71 = tmp58;
                                        num10 = tmp59;
                                        tmp72 = tmp60;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          iter9 = tmp50();
          let tmp51 = tmp65;
          let tmp52 = tmp66;
          let tmp53 = tmp67;
          let tmp54 = tmp68;
          let tmp55 = num9;
          let tmp56 = tmp69;
          let tmp57 = tmp70;
          let tmp58 = tmp71;
          let tmp59 = num10;
          let tmp60 = tmp72;
          iter6 = iter9;
        } while (!iter9.done);
      }
      return items4;
    }
    rows = [];
  }), items24);
  const tmp33 = callback(React.useState(() => {
    if (tmp30) {
      return [];
    } else {
      const tmp2 = callback3();
      if (null != guildId) {
        let obj = guildId(withoutUserCards[28]);
        obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: callback2(tmp2), guildId };
        obj.dispatch(obj);
      }
      return tmp2;
    }
  }), 2);
  let closure_27 = tmp33[1];
  const items25 = [callback3, guildId];
  const callback4 = React.useCallback(() => {
    const tmp = callback3();
    callback(tmp);
    if (null != guildId) {
      let obj = guildId(withoutUserCards[28]);
      obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: callback2(tmp), guildId };
      obj.dispatch(obj);
    }
  }, items25);
  const HappeningNowItem = callback4;
  const items26 = [guildId, tmp30, tmp21, callback4];
  const effect4 = React.useEffect(() => {
    if (guildId !== ref.current.guildId) {
      const obj = { guildId, hasComputed: false };
      ref.current = obj;
    }
    if (ref.current.hasComputed) {
      if (tmp21) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback();
        }, 50);
        return () => clearTimeout(closure_0);
      }
    } else if (!tmp30) {
      callback4();
    }
  }, items26);
  let id;
  if (null != stateFromStores3) {
    id = stateFromStores3.id;
  }
  function useSpammyStoresVersion(guildId, id, isFocused, callback4) {
    guildId = id;
    const withoutUserCards = isFocused;
    const React = React.useRef(-1);
    let closure_5 = React.useRef(0);
    const items = [guildId, id, callback4, isFocused];
    const callback = React.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (arg2) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const userStoreVersion = userStoreVersion.getUserStoreVersion();
          const sum = userStoreVersion + privateChannelsVersion.getPrivateChannelsVersion();
          let num = -1;
          const sum1 = sum + voiceStateVersion.getVoiceStateVersion();
          if (null != closure_0) {
            num = -1;
            if (null != closure_1) {
              num = props.getProps(closure_0, closure_1).version;
            }
          }
          const sum2 = sum1 + num;
          if (ref.current !== sum2) {
            ref.current = sum2;
            callback();
          }
        }, 1000);
      }
    }, items);
    const hasItem1 = callback;
    const items1 = [callback];
    const effect = React.useEffect(() => {
      const item = closure_33.forEach((addChangeListener) => {
        addChangeListener.addChangeListener(closure_6);
      });
      return () => {
        if (-1 !== ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        const item = closure_33.forEach((removeChangeListener) => {
          removeChangeListener.removeChangeListener(closure_6);
        });
      };
    }, items1);
  }(guildId, id, isFocused, callback4);
  const items27 = [tmp33[0], ];
  if (!tmp30) {
    tmp30 = !importDefault(dependencyMap[40])(ref).hasComputed;
  }
  items27[1] = tmp30;
  return items27;
};
