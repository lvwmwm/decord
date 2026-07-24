// Module ID: 14970
// Function ID: 114063
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1347, 4808, 12682, 6758, 1353, 6901, 4149, 1194, 5658, 1348, 1907, 1838, 3758, 4217, 3767, 4325, 1849, 4146, 14233, 653, 8860, 566, 14971, 14972, 5688, 5664, 686, 10662, 20, 22, 4345, 14973, 14974, 14975, 5689, 14976, 8529, 1327, 5122, 2]
// Exports: default

// Module 14970 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import apply from "apply";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import { MemberListRowTypes } from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_20 } from "_isNativeReflectConstruct";
import closure_21 from "_createForOfIteratorHelperLoose";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import importDefaultResult3 from "_isNativeReflectConstruct";
import { HappeningNowItem } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import ME from "ME";

let closure_10;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_8;
let closure_9;
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
({ eventScheduledToStartWithin: closure_8, isEventUpcoming: closure_9, isGuildScheduledEventActive: closure_10 } = _isNativeReflectConstruct);
({ ActivityFlags: closure_29, GuildFeatures: closure_30, Permissions: closure_31, StatusTypes: closure_32 } = ME);
let items = [importDefaultResult1, importDefaultResult, importDefaultResult3, importDefaultResult2];
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx");

export default function useHappeningNowData(has, guildId) {
  const _require = has;
  guildId = guildId.guildId;
  const withoutUserCards = guildId.withoutUserCards;
  const showMultipleActivitiesPerChannel = guildId.showMultipleActivitiesPerChannel;
  let callback = tmp;
  const isFocused = guildId.isFocused;
  const hasItem = has.has(callback4.LIVE_GUILD_STAGE);
  const hasItem1 = has.has(callback4.EMBEDDED_ACTIVITY);
  const hasItem2 = has.has(callback4.STREAMS);
  const hasItem3 = has.has(callback4.USER_CUSTOM_STATUS);
  const hasItem4 = has.has(callback4.ACTIVITIES);
  const hasItem5 = has.has(callback4.USER);
  let effect = isFocused.useEffect(() => {
    const userAffinitiesV2 = has(withoutUserCards[22]).fetchUserAffinitiesV2();
  }, []);
  let items = [hasItem1];
  const stateFromStores = _require(withoutUserCards[23]).useStateFromStores(items, () => hasItem1.isConnected());
  let obj = _require(withoutUserCards[23]);
  let items1 = [stateFromStores3];
  const stateFromStores1 = _require(withoutUserCards[23]).useStateFromStores(items1, () => null != stateFromStores3.getSessionId());
  let items2 = [has, stateFromStores1, guildId, isFocused, stateFromStores];
  callback = isFocused.useCallback(() => {
    if (null != guildId) {
      if (has.has(callback4.ACTIVE_CHANNEL)) {
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
                const activeChannels = has(withoutUserCards[24]).fetchActiveChannels(guildId);
                const obj = has(withoutUserCards[24]);
              }
            }
          }
        }
      }
    }
  }, items2);
  let items3 = [callback];
  const effect1 = isFocused.useEffect(() => {
    callback();
  }, items3);
  let obj2 = _require(withoutUserCards[23]);
  let items4 = [stateFromStores7];
  const stateFromStores2 = _require(withoutUserCards[23]).useStateFromStores(items4, () => {
    let guild = null;
    if (null != guildId) {
      guild = stateFromStores7.getGuild(guildId);
    }
    return guild;
  });
  let obj3 = _require(withoutUserCards[23]);
  let items5 = [callback2];
  stateFromStores3 = _require(withoutUserCards[23]).useStateFromStores(items5, () => {
    let defaultChannel = null;
    if (null != guildId) {
      defaultChannel = callback2.getDefaultChannel(guildId);
    }
    return defaultChannel;
  });
  let obj4 = _require(withoutUserCards[23]);
  const firstGloballyViewbleGuildChannelId = _require(withoutUserCards[25]).useFirstGloballyViewbleGuildChannelId(guildId);
  let obj5 = _require(withoutUserCards[25]);
  const items6 = [callback2];
  const stateFromStores4 = _require(withoutUserCards[23]).useStateFromStores(items6, () => {
    let channels = null;
    if (null != guildId) {
      channels = callback2.getChannels(guildId);
    }
    return channels;
  });
  const items7 = [stateFromStores1, stateFromStores3, firstGloballyViewbleGuildChannelId, guildId, isFocused, stateFromStores];
  const callback1 = isFocused.useCallback(() => {
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
      has(withoutUserCards[26]).subscribeGuild(guildId);
      const obj = has(withoutUserCards[26]);
      has(withoutUserCards[26]).subscribeChannel(guildId, stateFromStores3.id, has(withoutUserCards[27]).DEFAULT_RANGES);
      let tmp14 = null != firstGloballyViewbleGuildChannelId;
      if (tmp14) {
        tmp14 = firstGloballyViewbleGuildChannelId !== stateFromStores3.id;
      }
      if (tmp14) {
        has(withoutUserCards[26]).subscribeChannel(guildId, firstGloballyViewbleGuildChannelId, has(withoutUserCards[27]).DEFAULT_RANGES);
        const obj3 = has(withoutUserCards[26]);
      }
      const obj2 = has(withoutUserCards[26]);
    }
  }, items7);
  const items8 = [callback1];
  const effect2 = isFocused.useEffect(() => {
    callback1();
  }, items8);
  const items9 = [callback, callback1];
  callback2 = isFocused.useCallback(() => {
    callback();
    callback1();
  }, items9);
  const items10 = [callback2];
  const effect3 = isFocused.useEffect(() => {
    const subscription = guildId(withoutUserCards[28]).subscribe("CONNECTION_OPEN", callback2);
    return () => {
      guildId(withoutUserCards[28]).unsubscribe("CONNECTION_OPEN", outer1_19);
    };
  }, items10);
  let obj6 = _require(withoutUserCards[23]);
  let tmp21 = isFocused;
  if (isFocused) {
    tmp21 = !obj7.useIsVoicePanelFullscreen();
  }
  let closure_20 = tmp21;
  obj7 = _require(withoutUserCards[29]);
  const items11 = [firstGloballyViewbleGuildChannelId];
  const stateFromStores5 = _require(withoutUserCards[23]).useStateFromStores(items11, () => {
    if (null != guildId) {
      if (null != stateFromStores3) {
        const props = firstGloballyViewbleGuildChannelId.getProps(guildId, stateFromStores3.id);
        let tmp6 = null == props || null == props.groups;
        if (!tmp6) {
          tmp6 = props.groups.length <= 0;
        }
        let tmp7 = !tmp6;
        if (!tmp6) {
          tmp7 = props.groups[0].id === outer1_32.UNKNOWN;
        }
        return tmp7;
      }
    }
    return false;
  });
  let obj8 = _require(withoutUserCards[23]);
  const items12 = [hasItem2];
  const items13 = [guildId, has];
  const stateFromStores6 = _require(withoutUserCards[23]).useStateFromStores(items12, () => {
    let tmp = null != guildId;
    if (tmp) {
      const tmp4 = !has.has(callback4.ACTIVE_CHANNEL);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = null == hasItem2.getActiveChannelIds(guildId);
      }
      tmp = tmp5;
    }
    return tmp;
  }, items13);
  let obj9 = _require(withoutUserCards[23]);
  const items14 = [callback];
  stateFromStores7 = _require(withoutUserCards[23]).useStateFromStores(items14, () => callback.getUserAffinities());
  let obj10 = _require(withoutUserCards[23]);
  const items15 = [closure_24];
  const stateFromStoresArray = _require(withoutUserCards[23]).useStateFromStoresArray(items15, () => tmp30.getFriendIDs());
  let obj11 = _require(withoutUserCards[23]);
  const items16 = [stateFromStoresArray];
  const items17 = [guildId];
  const stateFromStoresObject = _require(withoutUserCards[23]).useStateFromStoresObject(items16, () => {
    const obj = { permissionChannelsVersion: stateFromStoresArray.getChannelsVersion() };
    let guildVersion = null;
    if (null != guildId) {
      guildVersion = stateFromStoresArray.getGuildVersion(guildId);
    }
    obj.permissionGuildVersion = guildVersion;
    return obj;
  }, items17);
  const obj12 = _require(withoutUserCards[23]);
  const items18 = [hasItem2];
  const items19 = [guildId];
  const stateFromStores8 = _require(withoutUserCards[23]).useStateFromStores(items18, () => {
    let activeChannelIds = null;
    if (null != guildId) {
      activeChannelIds = hasItem2.getActiveChannelIds(guildId);
    }
    return activeChannelIds;
  }, items19);
  const obj13 = _require(withoutUserCards[23]);
  const items20 = [stateFromStores];
  const items21 = [guildId];
  const stateFromStoresArray1 = _require(withoutUserCards[23]).useStateFromStoresArray(items20, () => stateFromStores.getGuildScheduledEventsForGuild(guildId), items21);
  const obj14 = _require(withoutUserCards[23]);
  const items22 = [hasItem];
  const items23 = [guildId];
  let tmp30 = !stateFromStores1;
  const stateFromStoresArray2 = _require(withoutUserCards[23]).useStateFromStoresArray(items22, () => {
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
  const ref = isFocused.useRef({ guildId, hasComputed: false });
  const items24 = [guildId, stateFromStores7, stateFromStores3, hasItem, stateFromStoresArray, stateFromStoresArray1, hasItem5, hasItem2, hasItem1, undefined !== showMultipleActivitiesPerChannel && showMultipleActivitiesPerChannel, hasItem3, hasItem4, has, withoutUserCards, stateFromStores2, stateFromStores4, stateFromStores8, stateFromStoresObject, stateFromStoresArray2];
  const callback3 = isFocused.useCallback(() => guildId(withoutUserCards[30]).time("\u{1F3A8}", "computeHappeningNowState", () => {
    let done;
    let iter4;
    let iter9;
    function addUser(userId, primaryActivity, displayName, canViewChannel, arg4) {
      if (!closure_24.isBlockedOrIgnored(userId)) {
        let channelId;
        if (null != displayName) {
          channelId = displayName.channelId;
        }
        const channel = callback1.getChannel(channelId);
        let obj1 = set(withoutUserCards[32]);
        if (!obj1.isChannelContentGated(channel)) {
          if (null != channel) {
            if (channel.isGroupDM()) {
              if (null != displayName) {
                if (null != outer2_1) {
                  let guildId = outer2_1;
                } else if (null != channel) {
                  guildId = channel.getGuildId();
                }
                const streamForUser = stateFromStores2.getStreamForUser(userId, guildId);
                if (null != streamForUser) {
                  if (outer2_7) {
                    let obj = { userId, guildId: outer2_1, kind: "activity" };
                    let tmp69;
                    if (null != primaryActivity) {
                      tmp69 = primaryActivity;
                    }
                    obj.activity = tmp69;
                    if (null == outer2_1) {
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
                        const stageInstanceByChannel = stateFromStores1.getStageInstanceByChannel(channel.id);
                        if (null != stageInstanceByChannel) {
                          if (stateFromStoresArray.can(outer3_31.CONNECT, channel)) {
                            obj = { kind: "live-guild-stage", stage: stageInstanceByChannel };
                            obj[channel.id] = obj;
                          }
                        }
                      }
                    } else {
                      if (outer2_6) {
                        const embeddedActivitiesForChannel = hasItem.getEmbeddedActivitiesForChannel(channel.id);
                        if (outer2_3) {
                          const found = embeddedActivitiesForChannel.filter((userIds) => {
                            const items = [...userIds.userIds];
                            return items.some(() => { ... });
                          });
                          obj1[channel.id] = found.map((activity) => ({ kind: "embedded-activity", userId: closure_0, voiceState: closure_1, guildId: outer3_1, activity }));
                        } else {
                          const result = set(withoutUserCards[33]).findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel);
                          if (null !== result) {
                            obj1 = { kind: "embedded-activity", userId, voiceState: displayName, guildId: outer2_1, activity: result };
                            let items = [obj1];
                            obj1[channel.id] = items;
                          }
                          const obj11 = set(withoutUserCards[33]);
                        }
                      }
                      obj2 = { kind: "voice", userId, voiceState: displayName };
                      if (null != outer2_1) {
                        let guildId2 = outer2_1;
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
            let obj4 = set(withoutUserCards[34]);
            if (obj4.isActivityPermanentCustomStatus(primaryActivity)) {
              if (outer2_8) {
                const obj3 = { kind: "activity", userId, guildId: outer2_1, activity: primaryActivity };
                items2.push(obj3);
              }
            } else {
              let obj5 = set(withoutUserCards[35]);
              if (obj5.isActivityTemporaryCustomStatus(primaryActivity)) {
                if (outer2_8) {
                  obj4 = { userId, guildId: outer2_1, kind: "activity", activity: primaryActivity };
                  obj4[userId] = obj4;
                }
              } else if (outer2_9) {
                let tmp27 = guildId(withoutUserCards[36])(primaryActivity, outer3_29.EMBEDDED);
                if (tmp27) {
                  const voiceStateForSession = authStore.getVoiceStateForSession(userId, primaryActivity.session_id);
                  let channelId1;
                  if (null != voiceStateForSession) {
                    channelId1 = voiceStateForSession.channelId;
                  }
                  const channel1 = callback1.getChannel(channelId1);
                  let guildId3;
                  if (null != channel1) {
                    guildId3 = channel1.getGuildId();
                  }
                  tmp27 = guildId3 !== outer2_1;
                }
                if (!tmp27) {
                  obj5 = { userId, guildId: outer2_1, kind: "activity", activity: primaryActivity };
                  obj3[userId] = obj5;
                }
              }
            }
          } else if (outer2_10) {
            const status = stateFromStoresArray1.getStatus(userId, outer2_1);
            if (null != status) {
              if (status === outer3_32.OFFLINE) {
                const obj6 = { kind: "user", userId, guildId: outer2_1 };
                items3.push(obj6);
              } else {
                const obj7 = { kind: "user", userId, guildId: outer2_1 };
                items2.push(obj7);
              }
            }
          }
        }
      }
    }
    outer1_25.current.guildId = outer1_1;
    outer1_25.current.hasComputed = true;
    const set = new Set();
    let bound = Math.min(outer1_21.length, 50);
    for (let num = 0; num < bound; num = num + 1) {
      let tmp2 = outer1_21;
      let addResult = set.add(outer1_21[num].otherUserId);
    }
    const tmp4 = outer2_34(outer1_22);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let addResult1 = set.add(iter.value);
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const mutablePrivateChannels = callback1.getMutablePrivateChannels();
    for (const key10044 in mutablePrivateChannels) {
      bound = key10044;
      let obj15 = mutablePrivateChannels[key10044];
      if (!obj15.isPrivate()) {
        continue;
      } else {
        let addResult2 = set.add(obj15.getRecipientId());
        continue;
      }
      continue;
    }
    if (null != outer1_1) {
      if (null != outer1_15) {
        let rows = firstGloballyViewbleGuildChannelId.getRows(outer1_1, outer1_15.id);
      }
      const item = rows.forEach((type) => {
        if (type.type === stateFromStores4.MEMBER) {
          set.add(type.userId);
        }
      });
      let items = [];
      const items1 = [];
      const _Set = Set;
      const set1 = new Set();
      const tmp18 = outer2_34(outer1_23);
      let iter3 = tmp18();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          let tmp19 = hasItem5;
          if (hasItem5(value)) {
            let arr = items.push(value);
          } else {
            let tmp20 = hasItem4;
            let tmp21 = hasItem4(value);
            if (tmp21) {
              let tmp22 = hasItem3;
              tmp21 = hasItem3(value, 604800);
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
      let obj1 = {};
      let obj2 = {};
      let obj3 = {};
      let obj4 = {};
      if (null != outer1_1) {
        if (outer1_5) {
          const stageInstancesByGuild = stateFromStores1.getStageInstancesByGuild(outer1_1);
          const item1 = guildId(withoutUserCards[31]).forEach(stageInstancesByGuild, (channelId) => {
            let obj = { channelId: channelId.channel_id };
            let result = stateFromStoresArray.canWithPartialContext(outer3_31.CONNECT, obj);
            if (result) {
              result = !(function blockedOrIgnoredUserInVoiceChannel(channel_id) {
                if (null == channel_id) {
                  return false;
                } else {
                  voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel_id);
                  let someResult = null != voiceStatesForChannel;
                  if (someResult) {
                    const mapped = guildId(withoutUserCards[31])(voiceStatesForChannel).map(() => { ... });
                    const found = mapped.filter(callback(withoutUserCards[39]).isNotNullish);
                    someResult = found.some(() => { ... });
                    const arr = guildId(withoutUserCards[31])(voiceStatesForChannel);
                  }
                  return someResult;
                }
              })(channelId.channel_id);
            }
            if (result) {
              obj = { kind: "live-guild-stage", stage: channelId };
              obj[channelId.channel_id] = obj;
            }
          });
          const arr5 = guildId(withoutUserCards[31]);
        }
      }
      const items2 = [];
      const items3 = [];
      voiceStates = voiceStates.getVoiceStates(outer1_1);
      const _Set2 = Set;
      const set2 = new Set();
      const item2 = set.forEach((userId) => {
        const user = callback3.getUser(userId);
        if (null != user) {
          if (user.bot) {
            set2.add(userId);
          } else {
            const primaryActivity = stateFromStoresArray1.getPrimaryActivity(userId, outer2_1);
            if (null != outer2_1) {
              let voiceStateForUser = voiceStates[userId];
            } else {
              voiceStateForUser = authStore.getVoiceStateForUser(userId);
            }
            let tmp8 = outer2_10;
            if (!outer2_10) {
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
      if (null != outer1_1) {
        const item3 = guildId(withoutUserCards[31]).forEach(voiceStates, (userId) => {
          userId = userId.userId;
          addUser(userId, stateFromStoresArray1.getPrimaryActivity(userId, outer2_1), userId);
        });
        const arr8 = guildId(withoutUserCards[31]);
      }
      const items4 = [];
      const tmp50 = outer2_34(outer1_0);
      const iter5 = tmp50();
      let iter6 = iter5;
      if (!iter5.done) {
        do {
          value = iter6.value;
          let tmp61 = callback4;
          if (callback4.LIVE_GUILD_STAGE === value) {
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
                continue;
              }
            }
          } else {
            bound = callback4;
            if (callback4.LIVE_GUILD_EVENT === value) {
              bound = items.forEach((event) => {
                const obj = { kind: "guild-event", event, isLive: true };
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
              bound = callback4;
              if (callback4.UPCOMING_GUILD_EVENT === value) {
                bound = items1.forEach((event) => {
                  const obj = { kind: "guild-event", event, isLive: false };
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
                bound = callback4;
                if (callback4.VOICES === value) {
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
                      continue;
                    }
                  }
                } else {
                  bound = callback4;
                  if (callback4.EMBEDDED_ACTIVITY === value) {
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
                        bound = outer2_34;
                        num11 = outer2_34(obj1[bound]);
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
                    bound = callback4;
                    if (callback4.COMBINED_VC === value) {
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
                          continue;
                        }
                      }
                    } else {
                      bound = callback4;
                      if (callback4.STREAMS === value) {
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
                            continue;
                          }
                        }
                      } else {
                        bound = callback4;
                        if (callback4.USER_CUSTOM_STATUS === value) {
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
                              continue;
                            }
                          }
                        } else {
                          bound = callback4;
                          if (callback4.ACTIVITIES === value) {
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
                                continue;
                              }
                            }
                          } else {
                            bound = callback4;
                            if (callback4.ACTIVE_CHANNEL === value) {
                              bound = outer1_1;
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
                              if (null != outer1_1) {
                                bound = callback;
                                bound = withoutUserCards;
                                let obj16 = callback(withoutUserCards[37]);
                                bound = outer1_1;
                                bound = callback1;
                                let items5 = [callback1, , , ];
                                bound = stateFromStoresArray;
                                items5[1] = stateFromStoresArray;
                                bound = hasItem2;
                                items5[2] = hasItem2;
                                bound = ref;
                                items5[3] = ref;
                                num11 = obj16.getActiveTextChannels(outer1_1, items5);
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
                                    bound = outer1_1;
                                    obj6.guildId = outer1_1;
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
                              bound = callback4;
                              if (callback4.USER === value) {
                                num11 = 0;
                                let num12 = 0;
                                let num13 = 0;
                                let num14 = 0;
                                bound = tmp58;
                                if (0 < items2.length) {
                                  while (true) {
                                    bound = items2[num12];
                                    bound = outer1_2;
                                    bound = null != outer1_2;
                                    if (bound) {
                                      bound = outer1_2;
                                      bound = outer1_2.has(bound.userId);
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
                                      bound = outer1_2;
                                      bound = null != outer1_2;
                                      if (bound) {
                                        bound = outer1_2;
                                        bound = outer1_2.has(bound.userId);
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
                                        if (bound < 50) {
                                          continue;
                                        } else {
                                          break;
                                        }
                                        break;
                                      }
                                    }
                                  }
                                }
                              } else {
                                bound = callback4;
                                if (callback4.STUDENT_HUB_ADD_CHANNEL === value) {
                                  let tmp99 = outer1_14;
                                  bound = null != outer1_14;
                                  if (bound) {
                                    bound = outer1_14;
                                    let features = outer1_14.features;
                                    bound = outer2_30;
                                    bound = features.has(outer2_30.HUB);
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
                                    bound = outer1_14;
                                    obj7.guildId = outer1_14.id;
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
                                  bound = callback4;
                                  if (callback4.CREATE_CHANNEL === value) {
                                    let tmp90 = outer1_14;
                                    let canResult = null != outer1_14;
                                    if (canResult) {
                                      let tmp92 = stateFromStoresArray;
                                      let tmp93 = outer2_31;
                                      let tmp94 = outer1_14;
                                      canResult = stateFromStoresArray.can(outer2_31.MANAGE_CHANNELS, outer1_14);
                                    }
                                    if (canResult) {
                                      let tmp95 = outer1_17;
                                      canResult = null != outer1_17;
                                    }
                                    if (canResult) {
                                      num11 = outer1_17;
                                      let tmp96 = closure_20;
                                      canResult = outer1_17[closure_20].length <= 2;
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
                                      let tmp97 = outer1_14;
                                      obj8.guildId = outer1_14.id;
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
                                    bound = callback4;
                                    if (callback4.INVITE === value) {
                                      let tmp82 = outer1_14;
                                      let shouldRenderInviteResult = null != outer1_14;
                                      if (shouldRenderInviteResult) {
                                        let tmp84 = outer1_17;
                                        shouldRenderInviteResult = null != outer1_17;
                                      }
                                      if (shouldRenderInviteResult) {
                                        let tmp85 = callback;
                                        let tmp86 = withoutUserCards;
                                        let obj9 = callback(withoutUserCards[38]);
                                        num11 = outer1_17;
                                        let tmp87 = outer1_14;
                                        shouldRenderInviteResult = obj9.shouldRenderInvite(outer1_17, outer1_14);
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
                                        let tmp88 = outer1_14;
                                        obj9.guildId = outer1_14.id;
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
                                      bound = callback4;
                                      if (callback4.CUSTOMIZE_GUILD === value) {
                                        let tmp73 = outer1_14;
                                        let canResult1 = null != outer1_14;
                                        if (canResult1) {
                                          let tmp75 = stateFromStoresArray;
                                          let tmp76 = outer2_31;
                                          let tmp77 = outer1_14;
                                          canResult1 = stateFromStoresArray.can(outer2_31.MANAGE_GUILD, outer1_14);
                                        }
                                        if (canResult1) {
                                          let tmp78 = outer1_14;
                                          num11 = null == outer1_14;
                                          let icon;
                                          if (!num11) {
                                            num11 = outer1_14;
                                            icon = outer1_14.icon;
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
                                          let tmp80 = outer1_14;
                                          obj10.guildId = outer1_14.id;
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
                                        let tmp62 = callback;
                                        let tmp63 = withoutUserCards;
                                        obj7 = callback(withoutUserCards[39]);
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
          tmp51 = tmp65;
          tmp52 = tmp66;
          tmp53 = tmp67;
          tmp54 = tmp68;
          tmp55 = num9;
          tmp56 = tmp69;
          tmp57 = tmp70;
          tmp58 = tmp71;
          tmp59 = num10;
          tmp60 = tmp72;
          iter6 = iter9;
        } while (!iter9.done);
      }
      return items4;
    }
    rows = [];
  }), items24);
  const tmp33 = callback(isFocused.useState(() => {
    if (closure_24) {
      return [];
    } else {
      const tmp2 = callback3();
      if (null != guildId) {
        let obj = guildId(withoutUserCards[28]);
        obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: outer1_36(tmp2), guildId };
        obj.dispatch(obj);
      }
      return tmp2;
    }
  }), 2);
  let closure_27 = tmp33[1];
  const items25 = [callback3, guildId];
  callback4 = isFocused.useCallback(() => {
    const tmp = callback3();
    callback(tmp);
    if (null != guildId) {
      let obj = guildId(withoutUserCards[28]);
      obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: outer1_36(tmp), guildId };
      obj.dispatch(obj);
    }
  }, items25);
  const items26 = [guildId, tmp30, tmp21, callback4];
  const effect4 = isFocused.useEffect(() => {
    if (guildId !== ref.current.guildId) {
      const obj = { guildId, hasComputed: false };
      ref.current = obj;
    }
    if (ref.current.hasComputed) {
      if (closure_20) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          outer1_28();
        }, 50);
        return () => clearTimeout(closure_0);
      }
    } else if (!closure_24) {
      callback4();
    }
  }, items26);
  let id;
  if (null != stateFromStores3) {
    id = stateFromStores3.id;
  }
  (function useSpammyStoresVersion(guildId, id, isFocused, callback4) {
    let closure_0 = guildId;
    let closure_1 = id;
    let closure_2 = isFocused;
    let _slicedToArray = callback4;
    let apply = isFocused.useRef(-1);
    let _createForOfIteratorHelperLoose = isFocused.useRef(0);
    const items = [guildId, id, callback4, isFocused];
    const callback = isFocused.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const userStoreVersion = callback3.getUserStoreVersion();
          const sum = userStoreVersion + callback1.getPrivateChannelsVersion();
          let num = -1;
          const sum1 = sum + voiceStateVersion.getVoiceStateVersion();
          if (null != outer1_0) {
            num = -1;
            if (null != outer1_1) {
              num = firstGloballyViewbleGuildChannelId.getProps(outer1_0, outer1_1).version;
            }
          }
          const sum2 = sum1 + num;
          if (outer1_5.current !== sum2) {
            outer1_5.current = sum2;
            outer1_3();
          }
        }, 1000);
      }
    }, items);
    const items1 = [callback];
    const effect = isFocused.useEffect(() => {
      let item = outer2_33.forEach((addChangeListener) => {
        addChangeListener.addChangeListener(outer1_6);
      });
      return () => {
        if (-1 !== outer1_4.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(outer1_4.current);
        }
        const item = outer3_33.forEach((removeChangeListener) => {
          removeChangeListener.removeChangeListener(outer2_6);
        });
      };
    }, items1);
  })(guildId, id, isFocused, callback4);
  const items27 = [tmp33[0], ];
  if (!tmp30) {
    tmp30 = !guildId(withoutUserCards[40])(ref).hasComputed;
  }
  items27[1] = tmp30;
  return items27;
};
