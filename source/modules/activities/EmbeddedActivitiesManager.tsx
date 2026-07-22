// Module ID: 10498
// Function ID: 81965
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getActiveAnalyticsSessionIDs, trackFrameSessionEnd, trackFrameSessionStart

// Module 10498 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getShelfItemTrackingProperties(activity) {
  const obj = {};
  let release_phase;
  if (null != activity) {
    activity = activity.activity;
    if (null != activity) {
      const obj2 = arg1(dependencyMap[17]);
      release_phase = activity.client_platform_config[importDefault(dependencyMap[16])(undefined, obj2.getOS(obj2))].release_phase;
      const tmp4 = importDefault(dependencyMap[16]);
    }
  }
  obj.releasePhase = release_phase;
  return obj;
}
function setAwaitingAnalyticsContext(arg0) {
  let applicationId;
  let locations;
  let nonce;
  let source;
  ({ locations, source } = arg0);
  let flag = null != locations;
  ({ applicationId, nonce } = arg0);
  if (!flag) {
    flag = null != source;
  }
  if (flag) {
    const obj = { nonce, locations, source };
    closure_24[applicationId] = obj;
    flag = true;
  }
  return flag;
}
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  if (null != closure_24[arg0]) {
    if (tmp.nonce === arg1) {
      delete r1[r2];
      return tmp;
    }
  }
}
function clearAwaitingAnalyticsContextAsync(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const timerId = setTimeout(() => callback(arg0, arg1), 2000);
}
function handleActivityLaunchStart(applicationId) {
  const source = applicationId.source;
  const obj = { applicationId: applicationId.applicationId, nonce: applicationId.nonce, locations: applicationId.analyticsLocations };
  let tmp2;
  if (null != source) {
    tmp2 = source;
  }
  obj.source = tmp2;
  setAwaitingAnalyticsContext(obj);
}
function handleActivityClose() {
  return _handleActivityClose(...arguments);
}
function _handleActivityClose() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _handleActivityClose = obj;
  return obj(...arguments);
}
function handleOpenEmbeddedActivity(applicationId) {
  let _location;
  let embeddedActivity;
  let inviterUserId;
  let isStart;
  let participants;
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  let obj = arg1(dependencyMap[23]);
  obj.leaveCurrentFrame();
  let obj1 = arg1(dependencyMap[24]);
  if (obj1.tryLaunchAsFrame({ applicationId })) {
    obj = { isStart, inviterUserId };
    const obj15 = arg1(dependencyMap[25]);
    obj.channelId = arg1(dependencyMap[19]).getEmbeddedActivityLocationChannelId(_location);
    const obj17 = arg1(dependencyMap[19]);
    obj.guildId = arg1(dependencyMap[19]).getEmbeddedActivityLocationGuildId(_location);
    obj.locationKind = _location.kind;
    ({ launchId: obj16.launchId, compositeInstanceId: obj16.compositeInstanceId } = embeddedActivity);
    let num12 = 1;
    if ("location" in embeddedActivity) {
      num12 = 2;
    }
    obj.activitiesInfraVersion = num12;
    const result = obj15.stashPendingFrameLaunch(applicationId, obj);
    const obj18 = arg1(dependencyMap[19]);
  } else {
    const importDefault = id.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    let obj2 = arg1(dependencyMap[19]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
    let obj3 = arg1(dependencyMap[19]);
    const embeddedActivityLocationGuildId = obj3.getEmbeddedActivityLocationGuildId(_location);
    const channel = store.getChannel(embeddedActivityLocationChannelId);
    let isFirstActivityInChannel = isStart;
    if (isStart) {
      isFirstActivityInChannel = null != channel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = channel.isPrivate();
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = applicationId.isFirstActivityInChannel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = null == found;
    }
    if (isFirstActivityInChannel) {
      const participant = importDefault(dependencyMap[26]).selectParticipant(channel.id, null);
      const obj6 = importDefault(dependencyMap[26]);
    }
    if (null != found) {
      const mediaSessionId = store2.getMediaSessionId();
      const compositeInstanceId = embeddedActivity.compositeInstanceId;
      let tmp17 = null == mediaSessionId;
      if (tmp17) {
        let isVocalResult;
        if (null != channel) {
          isVocalResult = channel.isVocal();
        }
        tmp17 = true === isVocalResult;
      }
      if (tmp17) {
        let isPrivateResult;
        if (null != channel) {
          isPrivateResult = channel.isPrivate();
        }
        tmp17 = false === isPrivateResult;
      }
      if (null != compositeInstanceId) {
        if (!tmp17) {
          const v4Result = arg1(dependencyMap[27]).v4();
          let num5 = 1;
          if ("location" in embeddedActivity) {
            num5 = 2;
          }
          const currentUser = authStore2.getCurrentUser();
          if (null != currentUser) {
            const shelfActivities = store4.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = store3.getState().shelfOrder;
            obj = { applicationId, activityConfigs: shelfActivities };
            const tmp65 = importDefault(dependencyMap[20])(obj);
            const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === applicationId);
            const rawThermalState = importDefault(dependencyMap[21]).getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            obj1 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num5 };
            closure_23[applicationId] = obj1;
            const obj20 = importDefault(dependencyMap[21]);
            let isNullOrEmptyResult = arg1(dependencyMap[28]).isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (null != tmp26) {
                nonce = tmp26.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const obj9 = arg1(dependencyMap[28]);
            obj2 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId };
            let locations;
            if (null != closure_24[applicationId]) {
              locations = tmp26.locations;
            }
            obj2.location_stack = locations;
            obj2.user_premium_tier = currentUser.premiumType;
            obj2.raw_thermal_state = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = authStore.getUserParticipantCount(channel.id);
            }
            obj2.n_participants = userParticipantCount;
            obj2.is_activity_start = isStart;
            obj2.release_phase = getShelfItemTrackingProperties(tmp65).releasePhase;
            let shelf_rank;
            if (null != tmp65) {
              const activity = tmp65.activity;
              if (null != activity) {
                shelf_rank = activity.shelf_rank;
              }
            }
            obj2.shelf_rank = shelf_rank;
            let tmp39 = null;
            if (sum > 0) {
              tmp39 = sum;
            }
            obj2.shelf_sorted_rank = tmp39;
            obj2.activity_user_session_id = v4Result;
            let type;
            if (null != channel) {
              type = channel.type;
            }
            obj2.channel_type = type;
            let source;
            if (null != closure_24[applicationId]) {
              source = tmp26.source;
            }
            obj2.source = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = arg1(dependencyMap[29]).computeCommandContextType(channel, applicationId);
              const obj12 = arg1(dependencyMap[29]);
            }
            obj2.command_context_type = commandContextType;
            obj2.invite_inviter_id = inviterUserId;
            let interactionId;
            if (null != closure_24[applicationId]) {
              interactionId = tmp26.interactionId;
            }
            obj2.interaction_id = interactionId;
            obj2.embedded_activity_location_kind = _location.kind;
            importDefault(dependencyMap[22]).track(constants.ACTIVITY_SESSION_JOINED, obj2);
            const obj10 = importDefault(dependencyMap[22]);
            obj3 = {};
            let locations1;
            if (null != closure_24[applicationId]) {
              locations1 = tmp26.locations;
            }
            obj3.location_stack = locations1;
            obj3.channel_id = embeddedActivityLocationChannelId;
            let type1;
            if (null != channel) {
              type1 = channel.type;
            }
            obj3.channel_type = type1;
            obj3.guild_id = embeddedActivityLocationGuildId;
            obj3.application_id = applicationId;
            obj3.instance_id = embeddedActivity.launchId;
            obj3.initial_media_session_id = items1[0];
            obj3.activity_user_session_id = v4Result;
            obj3.raw_thermal_state = rawThermalState;
            obj3.is_activity_start = isStart;
            let shelf_rank1;
            if (null != tmp65) {
              const activity2 = tmp65.activity;
              if (null != activity2) {
                shelf_rank1 = activity2.shelf_rank;
              }
            }
            obj3.shelf_rank = shelf_rank1;
            let tmp53 = null;
            if (sum > 0) {
              tmp53 = sum;
            }
            obj3.shelf_sorted_rank = tmp53;
            obj3.activities_infra_version = num5;
            obj3.embedded_activity_location_kind = _location.kind;
            importDefault(dependencyMap[22]).track(constants.ACTIVITY_IFRAME_MOUNT, obj3);
            const obj13 = importDefault(dependencyMap[22]);
          }
          const obj7 = arg1(dependencyMap[27]);
        }
      }
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const GUILD_VOCAL_CHANNEL_TYPES = arg1(dependencyMap[7]).GUILD_VOCAL_CHANNEL_TYPES;
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
({ AnalyticEvents: closure_18, RPCCloseCodes: closure_19, Endpoints: closure_20, RTCConnectionStates: closure_21, ComponentActions: closure_22 } = arg1(dependencyMap[15]));
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26;
const tmp2 = arg1(dependencyMap[15]);
const tmp3 = (arg0) => {
  class EmbeddedActivitiesManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, EmbeddedActivitiesManager);
      items1 = [...items];
      obj = closure_6(EmbeddedActivitiesManager);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      EmbeddedActivitiesManager = tmp2Result;
      tmp2Result.handleSelectedChannelUpdate = () => {
        let iter2;
        const voiceChannelId = store.getVoiceChannelId();
        const selfEmbeddedActivities = store2.getSelfEmbeddedActivities();
        const tmp2 = callback3(selfEmbeddedActivities.values());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let value = iter.value;
            let _location = value.location;
            let tmp3 = closure_0;
            let tmp4 = closure_2;
            let obj2 = closure_0(closure_2[19]);
            let embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
            let tmp6 = null != embeddedActivityLocationChannelId;
            if (tmp6) {
              let tmp7 = closure_1;
              let tmp8 = closure_2;
              tmp6 = closure_1(closure_2[30])(embeddedActivityLocationChannelId);
            }
            if (tmp6) {
              tmp6 = embeddedActivityLocationChannelId !== voiceChannelId;
            }
            if (tmp6) {
              let tmp9 = closure_0;
              let obj = { location: _location, applicationId: value.applicationId };
              let leaveActivityResult = closure_0.leaveActivity(obj);
            }
            iter2 = tmp2();
            iter = iter2;
          } while (!iter2.done);
        }
        if (null != voiceChannelId) {
          const embeddedActivitiesForChannel = store2.getEmbeddedActivitiesForChannel(voiceChannelId);
          const id2 = id.getId();
          const item = embeddedActivitiesForChannel.forEach((userIds) => {
            userIds = userIds.userIds;
            if (userIds.has(lib)) {
              let obj = lib(closure_2[19]);
              const selfEmbeddedActivityForChannel = selfEmbeddedActivityForChannel.getSelfEmbeddedActivityForChannel(obj.getEmbeddedActivityLocationChannelId(userIds.location));
              if (null == selfEmbeddedActivityForChannel) {
                obj = {};
                ({ location: obj3.location, applicationId: obj3.applicationId } = userIds);
                lib.leaveActivity(obj);
              } else if (null == tmp14) {
                obj = {};
                ({ location: obj2.location, applicationId: obj2.applicationId } = selfEmbeddedActivityForChannel);
                lib.hidePIPEmbed(obj);
              }
            }
          });
        }
        let tmp14;
        if (null != voiceChannelId) {
          tmp14 = voiceChannelId;
        }
      };
      tmp2Result.handleActivityWebViewRelease = () => {
        tmp2Result.releaseWebView();
      };
      tmp2Result.handleActivityLaunchSuccess = (applicationId) => {
        callback6(applicationId.applicationId, applicationId.nonce);
        if (obj.isUsingDevShelfActivityUrlOverride()) {
          const result = tmp2Result.showDevShelfOverrideEnabled();
        }
      };
      tmp2Result.handleActivityLaunchFail = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleActivityLaunchCancel = (applicationId) => {
        callback5(applicationId.applicationId, applicationId.nonce);
      };
      tmp2Result.superHandleRPCDisconnect = (reason) => {
        let iter;
        reason = reason.reason;
        const id = reason.application.id;
        if (null != id) {
          if (null != reason) {
            const selfEmbeddedActivities = store2.getSelfEmbeddedActivities();
            const tmp13 = callback3(selfEmbeddedActivities.values());
            let iter2 = tmp13();
            if (!iter2.done) {
              do {
                if (iter2.value.applicationId === id) {
                  let tmp2 = closure_0;
                  let obj = { location: tmp, applicationId: id };
                  let leaveActivityResult = closure_0.leaveActivity(obj);
                }
                iter = tmp13();
                iter2 = iter;
              } while (!iter.done);
            }
            if (reason.code !== constants2.CLOSE_NORMAL) {
              obj = {};
              ({ code: obj3.rpc_close_code, message: obj3.rpc_message } = reason);
              obj.application_id = id;
              callback(closure_2[22]).track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
              tmp2Result.showErrorModal(reason, id);
              const obj2 = callback(closure_2[22]);
            }
          }
        }
      };
      tmp2Result.handleCallDelete = (channelId) => {
        channelId = channelId.channelId;
        const voiceChannelId = store.getVoiceChannelId();
        if (tmp2) {
          tmp2Result.handleCallEnded(channelId);
        }
      };
      tmp2Result.handleRTCConnectionState = (state) => {
        if (state.state === constants3.DISCONNECTED) {
          tmp2Result.handleCallEnded(state.channelId);
        }
      };
      tmp2Result.handleCallEnded = (channelId) => {
        const selfEmbeddedActivityForChannel = store2.getSelfEmbeddedActivityForChannel(channelId);
        if (null != selfEmbeddedActivityForChannel) {
          const obj = {};
          ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
          tmp2Result.leaveActivity(obj);
        }
      };
      tmp2Result.handleDeferredOpen = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleGuildDelete = (guild) => {
        const selfEmbeddedActivities = store2.getSelfEmbeddedActivities();
        const item = selfEmbeddedActivities.forEach((location) => {
          const _location = location.location;
          let obj = guild(closure_2[19]);
          if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
            obj = { location: _location, applicationId: location.applicationId };
            guild.leaveActivity(obj);
          }
        });
      };
      tmp2Result.handleChannelDelete = (channel) => {
        const selfEmbeddedActivityForChannel = store2.getSelfEmbeddedActivityForChannel(channel.channel.id);
        if (null != selfEmbeddedActivityForChannel) {
          const obj = {};
          ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
          tmp2Result.leaveActivity(obj);
        }
      };
      tmp2Result.handleInteractionQueue = (arg0) => {
        let data;
        let nonce;
        ({ nonce, data } = arg0);
        if (null == closure_24[data.applicationId]) {
          if (data.interactionType === tmp2Result(closure_2[40]).InteractionTypes.APPLICATION_COMMAND) {
            const items = [callback(closure_2[41]).INTERACTION_APPLICATION_COMMAND];
            let tmp3 = items;
          } else if (data.interactionType === tmp2Result(closure_2[40]).InteractionTypes.MESSAGE_COMPONENT) {
            const items1 = [callback(closure_2[41]).INTERACTION_MESSAGE_COMPONENT];
            tmp3 = items1;
          } else if (data.interactionType === tmp2Result(closure_2[40]).InteractionTypes.MODAL_SUBMIT) {
            const items2 = [callback(closure_2[41]).INTERACTION_MODAL_SUBMIT];
            tmp3 = items2;
          }
          const obj = { applicationId: data.applicationId, nonce, locations: tmp3 };
          if (callback4(obj)) {
            closure_25[nonce] = data.applicationId;
          }
        }
      };
      tmp2Result.handleInteractionCreate = (nonce) => {
        nonce = nonce.nonce;
        if (null != nonce) {
          if (null != closure_25[nonce]) {
            if (null != closure_24[tmp3]) {
              tmp5.interactionId = tmp;
            }
          }
        }
      };
      tmp2Result.handleInteractionSuccess = (nonce) => {
        nonce = nonce.nonce;
        if (null != nonce) {
          if (null != closure_25[nonce]) {
            delete r1[r3];
            callback6(tmp2, nonce);
          }
        }
      };
      tmp2Result.handleInteractionFailure = (nonce) => {
        nonce = nonce.nonce;
        if (null != nonce) {
          if (null != closure_25[nonce]) {
            delete r1[r3];
            callback5(tmp2, nonce);
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = EmbeddedActivitiesManager;
  callback2(EmbeddedActivitiesManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      closure_14.addChangeListener(this.handleSelectedChannelUpdate);
      const ComponentDispatch = EmbeddedActivitiesManager(closure_2[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
      const ComponentDispatch2 = EmbeddedActivitiesManager(closure_2[42]).ComponentDispatch;
      const subscription1 = ComponentDispatch2.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, closure_37);
      const subscription2 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", closure_34);
      const obj = callback(closure_2[43]);
      const subscription3 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
      const obj2 = callback(closure_2[43]);
      const subscription4 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
      const obj3 = callback(closure_2[43]);
      const subscription5 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
      const obj4 = callback(closure_2[43]);
      const subscription6 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_CLOSE", closure_35);
      const obj5 = callback(closure_2[43]);
      const subscription7 = callback(closure_2[43]).subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
      const obj6 = callback(closure_2[43]);
      const subscription8 = callback(closure_2[43]).subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
      const obj7 = callback(closure_2[43]);
      const subscription9 = callback(closure_2[43]).subscribe("CALL_DELETE", this.handleCallDelete);
      const obj8 = callback(closure_2[43]);
      const subscription10 = callback(closure_2[43]).subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
      const obj9 = callback(closure_2[43]);
      const subscription11 = callback(closure_2[43]).subscribe("GUILD_DELETE", this.handleGuildDelete);
      const obj10 = callback(closure_2[43]);
      const subscription12 = callback(closure_2[43]).subscribe("CHANNEL_DELETE", this.handleChannelDelete);
      const obj11 = callback(closure_2[43]);
      const subscription13 = callback(closure_2[43]).subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
      const obj12 = callback(closure_2[43]);
      const subscription14 = callback(closure_2[43]).subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
      const obj13 = callback(closure_2[43]);
      const subscription15 = callback(closure_2[43]).subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
      const obj14 = callback(closure_2[43]);
      const subscription16 = callback(closure_2[43]).subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      closure_14.removeChangeListener(this.handleSelectedChannelUpdate);
      const ComponentDispatch = EmbeddedActivitiesManager(closure_2[42]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
      const ComponentDispatch2 = EmbeddedActivitiesManager(closure_2[42]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.OPEN_EMBEDDED_ACTIVITY, closure_37);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", closure_34);
      const obj = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
      const obj2 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
      const obj3 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
      const obj4 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_CLOSE", closure_35);
      const obj5 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
      const obj6 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
      const obj7 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("CALL_DELETE", this.handleCallDelete);
      const obj8 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
      const obj9 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("GUILD_DELETE", this.handleGuildDelete);
      const obj10 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
      const obj11 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
      const obj12 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate);
      const obj13 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
      const obj14 = callback(closure_2[43]);
      callback(closure_2[43]).unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
  };
  items[1] = obj;
  return callback(EmbeddedActivitiesManager, items);
}(importDefault(dependencyMap[44]));
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default tmp3;
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId) {
  let activitiesInfraVersion;
  let channelId;
  let compositeInstanceId;
  let guildId;
  let isStart;
  let launchId;
  let locationKind;
  const arg1 = applicationId;
  let obj = arg1(dependencyMap[25]);
  const result = obj.consumePendingFrameLaunch(applicationId);
  if (null != result) {
    ({ isStart, channelId, guildId, locationKind, launchId, compositeInstanceId, activitiesInfraVersion } = result);
    const currentUser = authStore2.getCurrentUser();
    if (null != currentUser) {
      let channel = null;
      if (null != channelId) {
        channel = store.getChannel(channelId);
      }
      const mediaSessionId = store2.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        let items1 = items;
      } else {
        items1 = [];
      }
      let obj1 = arg1(dependencyMap[27]);
      const v4Result = obj1.v4();
      obj = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion };
      const _Date = Date;
      obj.connectedSince = Date.now();
      obj.frameChannelId = channelId;
      obj.frameGuildId = guildId;
      obj.frameLocationKind = locationKind;
      closure_23[applicationId] = obj;
      const shelfActivities = store4.getShelfActivities(guildId);
      const shelfOrder = store3.getState().shelfOrder;
      obj = { applicationId, activityConfigs: shelfActivities };
      const tmp15 = importDefault(dependencyMap[20])(obj);
      const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === arg0);
      const rawThermalState = importDefault(dependencyMap[21]).getRawThermalState();
      const obj5 = importDefault(dependencyMap[21]);
      obj1 = { channel_id: channelId, guild_id: guildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId };
      let locations;
      if (null != closure_24[applicationId]) {
        locations = tmp20.locations;
      }
      obj1.location_stack = locations;
      obj1.user_premium_tier = currentUser.premiumType;
      obj1.raw_thermal_state = rawThermalState;
      let userParticipantCount = null;
      if (null != channel) {
        userParticipantCount = authStore.getUserParticipantCount(channel.id);
      }
      obj1.n_participants = userParticipantCount;
      obj1.is_activity_start = isStart;
      obj1.release_phase = getShelfItemTrackingProperties(tmp15).releasePhase;
      let shelf_rank;
      if (null != tmp15) {
        const activity = tmp15.activity;
        if (null != activity) {
          shelf_rank = activity.shelf_rank;
        }
      }
      obj1.shelf_rank = shelf_rank;
      let tmp27 = null;
      if (sum > 0) {
        tmp27 = sum;
      }
      obj1.shelf_sorted_rank = tmp27;
      obj1.activity_user_session_id = v4Result;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj1.channel_type = type;
      let source;
      if (null != closure_24[applicationId]) {
        source = tmp20.source;
      }
      obj1.source = source;
      let commandContextType = null;
      if (null != channel) {
        commandContextType = arg1(dependencyMap[29]).computeCommandContextType(channel, applicationId);
        const obj8 = arg1(dependencyMap[29]);
      }
      obj1.command_context_type = commandContextType;
      obj1.invite_inviter_id = result.inviterUserId;
      let interactionId;
      if (null != closure_24[applicationId]) {
        interactionId = tmp20.interactionId;
      }
      obj1.interaction_id = interactionId;
      obj1.embedded_activity_location_kind = locationKind;
      importDefault(dependencyMap[22]).track(constants.ACTIVITY_SESSION_JOINED, obj1);
      const obj6 = importDefault(dependencyMap[22]);
      const obj2 = {};
      let locations1;
      if (null != closure_24[applicationId]) {
        locations1 = tmp20.locations;
      }
      obj2.location_stack = locations1;
      obj2.channel_id = channelId;
      let type1;
      if (null != channel) {
        type1 = channel.type;
      }
      obj2.channel_type = type1;
      obj2.guild_id = guildId;
      obj2.application_id = applicationId;
      obj2.instance_id = launchId;
      obj2.initial_media_session_id = items1[0];
      obj2.activity_user_session_id = v4Result;
      obj2.raw_thermal_state = rawThermalState;
      obj2.is_activity_start = isStart;
      let shelf_rank1;
      if (null != tmp15) {
        const activity2 = tmp15.activity;
        if (null != activity2) {
          shelf_rank1 = activity2.shelf_rank;
        }
      }
      obj2.shelf_rank = shelf_rank1;
      let tmp41 = null;
      if (sum > 0) {
        tmp41 = sum;
      }
      obj2.shelf_sorted_rank = tmp41;
      obj2.activities_infra_version = activitiesInfraVersion;
      obj2.embedded_activity_location_kind = locationKind;
      importDefault(dependencyMap[22]).track(constants.ACTIVITY_IFRAME_MOUNT, obj2);
      const obj9 = importDefault(dependencyMap[22]);
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return closure_23[id];
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  const currentUser = authStore2.getCurrentUser();
  if (null != closure_23[applicationId]) {
    if (null != currentUser) {
      const frameChannelId = tmp.frameChannelId;
      let tmp3 = null;
      if (null != frameChannelId) {
        tmp3 = frameChannelId;
      }
      const frameGuildId = tmp.frameGuildId;
      let tmp4 = null;
      if (null != frameGuildId) {
        tmp4 = frameGuildId;
      }
      let channel = null;
      if (null != tmp3) {
        channel = store.getChannel(tmp3);
      }
      const shelfActivities = store4.getShelfActivities(tmp4);
      let obj = { applicationId, activityConfigs: shelfActivities };
      const tmp11 = importDefault(dependencyMap[20])(obj);
      const rawThermalState = importDefault(dependencyMap[21]).getRawThermalState();
      let diff = null;
      if (null != tmp.connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp.connectedSince;
      }
      const obj2 = importDefault(dependencyMap[21]);
      obj = { channel_id: tmp3, guild_id: tmp4, media_session_id: tmp.mediaSessionIds[0], activity_session_id: tmp.activitySessionId, application_id: applicationId, duration_ms: diff, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase: getShelfItemTrackingProperties(tmp11).releasePhase };
      let shelf_rank;
      if (null != tmp11) {
        const activity = tmp11.activity;
        if (null != activity) {
          shelf_rank = activity.shelf_rank;
        }
      }
      obj.shelf_rank = shelf_rank;
      obj.activity_user_session_id = tmp.activityUserSessionId;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      ({ mediaSessionIds: obj4.media_session_ids, frameLocationKind: obj4.embedded_activity_location_kind } = tmp);
      importDefault(dependencyMap[22]).track(constants.ACTIVITY_SESSION_LEFT, obj);
      const obj3 = importDefault(dependencyMap[22]);
      obj = { channel_id: tmp3, guild_id: tmp4, application_id: applicationId };
      let tmp25;
      if (null != tmp.launchId) {
        const items = [tmp.launchId];
        tmp25 = items;
      }
      obj.instance_ids = tmp25;
      ({ mediaSessionIds: obj6.media_session_ids, activityUserSessionId: obj6.activity_user_session_id } = tmp);
      obj.raw_thermal_state = rawThermalState;
      obj.duration_ms = diff;
      obj.embedded_activity_location_kind = tmp.frameLocationKind;
      importDefault(dependencyMap[22]).track(constants.ACTIVITY_IFRAME_UNMOUNT, obj);
      delete r0[r1];
      const obj5 = importDefault(dependencyMap[22]);
    }
  }
};
