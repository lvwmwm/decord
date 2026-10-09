// Module ID: 14637
// Function ID: 14638
// Name: ConjureVoiceSessionCoordinator
// Dependencies: [14638, 502, 2012, 5109, 1390, 5112, 1085, 5116, 5245, 10896, 14639, 1279, 5242, 14643, 14640, 10775, 2]

// Module 14637 (ConjureVoiceSessionCoordinator)
import Constants2 from "Constants" /* 1085 */;
import v1 from "v1" /* 1279 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5242 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 5245 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10775 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 14639 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14640 */;
import ConjureVoiceGeometry from "ConjureVoiceGeometry" /* 14643 */;
import FrameVisibilityStore from "FrameVisibilityStore" /* 14638 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import Constants from "Constants" /* 5116 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, set, user, user_id;

let c10;
let unpackModuleId;
const RPCErrors = Constants2.RPCErrors;
({ Features: c10, MediaEngineContextTypes: unpackModuleId } = Constants);
let closure_12 = { x: 0, y: 0, z: -1 };
let closure_13 = { isSpatial: true, distanceAttenuation: { enabled: true }, airAbsorption: { enabled: true } };
class ConjureVoiceSessionCoordinator {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.sessions = new Map();
    obj.spatialHolder = null;
    obj.spatialRequested = false;
    obj.focusSequence = 0;
    obj.unsubscribeFrameLifecycle = null;
    obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
      const sessions = obj.sessions;
      const items = [...sessions.values()];
      for (const item10014 of items) {
        let tmp = item10014;
        if (!item10014.pooled) {
          item10014.pooled = FrameVisibilityStore.isFramePooled(tmp.frameId);
        }
        if (tmp.pooled) {
          if (!FrameVisibilityStore.isFramePooled(tmp.frameId)) {
            let releaseSessionResult = obj.releaseSession(tmp);
          }
          continue;
        }
        let tmp12 = !FrameVisibilityStore.isFrameVisible(tmp.frameId);
        let tmp13 = tmp12;
        if (tmp.backgrounded !== tmp12) {
          tmp.backgrounded = tmp13;
          if (!tmp13) {
            let sum = obj.focusSequence + 1;
            obj.focusSequence = sum;
            tmp.focusSequence = sum;
          }
        }
      }
      obj.syncSpatialHolder();
    };
    new Map();
    return obj;
  }
  getCapabilitiesForSocket(socket) {
    this.validateFrame(socket);
    return this.getCapabilities();
  }
  getParticipantsForSession(socket, session_id) {
    return this.getParticipants(this.validateSession(socket, session_id).channelId);
  }
  getCapabilities() {
    let spatialCapabilities;
    const obj = { available: true, connected: null != this.getConnectedRTCConnection(), participant_updates: true, binary_speaking: true, spatial: spatialCapabilities };
    spatialCapabilities = this.getSpatialCapabilities();
    return obj;
  }
  getSpatialCapabilities() {
    const obj = SpatialAudioForVoiceExperimentDefault;
    const available = obj.getConfig({ location: "VibegrationsVoiceSessionCoordinator" }).enabled && MediaEngineStore.supports(constants.SPATIAL_AUDIO);
    return { available, source_positioning: available, source_gain: false, source_spatial_blend: false, listener_pose: available, room_size: false, reflections: false, max_sources: 50, max_updates_per_second: 20 };
  }
  getConnectedRTCConnection() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let tmp = null;
    if (null != rTCConnection) {
      tmp = null;
      if ("RTC_CONNECTED" === rTCConnection.state) {
        tmp = null;
        if (null != rTCConnection.getMediaEngineConnectionId()) {
          tmp = rTCConnection;
        }
      }
    }
    return tmp;
  }
  getParticipants(arg0) {
    const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(arg0));
    return values.flatMap((userId) => {
      let avatar;
      let globalName;
      let items;
      user = user.getUser(userId.userId);
      if (null == user) {
        items = [];
      } else {
        const obj = { user_id: userId.userId, username: null, global_name: globalName, avatar, mute: null, deaf: null, self_mute: null, self_deaf: null, self_video: null };
        ({ username: obj.username, globalName } = user);
        if (globalName == null) {
          globalName = null;
        }
        avatar = user.avatar;
        if (avatar == null) {
          avatar = null;
        }
        ({ mute: obj.mute, deaf: obj.deaf, selfMute: obj.self_mute, selfDeaf: obj.self_deaf, selfVideo: obj.self_video } = userId);
        items = [obj];
      }
      return items;
    });
  }
  start(id) {
    let applicationId;
    let channelId;
    let frame;
    let frameId;
    let mediaEngineConnectionId;
    let obj7;
    const self = this;
    ({ frameId, applicationId, frame, channelId } = this.validateFrame(id));
    this.validateFrame(id);
    const connectedRTCConnection = this.getConnectedRTCConnection();
    if (connectedRTCConnection != null) {
      mediaEngineConnectionId = connectedRTCConnection.getMediaEngineConnectionId();
    }
    if (null != connectedRTCConnection) {
      if (null != mediaEngineConnectionId) {
        if (channelId !== connectedRTCConnection.channelId) {
          const obj11 = validateConjureAppFrame;
          if (obj11.isConjureApplication(applicationId)) {
            const tmp30Result = validateConjureAppFrame;
            if (!tmp30Result.isUserScopedConjureApplication(applicationId)) {
              const tmp30Result2 = validateConjureAppFrame;
              if (!tmp30Result2.isVoiceChannelInFrameGuild(frame, connectedRTCConnection.channelId)) {
                const self4 = this;
                const self5 = this;
                const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
                const tmp11 = new RPCErrorDefault(obj, "This app can only start a voice session in a voice channel in the server it is installed in");
                throw tmp11;
              }
            }
          } else {
            const self2 = this;
            const self3 = this;
            const obj2 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
            const tmp6 = new RPCErrorDefault(obj2, "Only an app running in your voice channel can start a voice session");
            throw tmp6;
          }
        }
        const sessions = self.sessions;
        const value = sessions.get(frameId);
        if (null != value) {
          self.releaseSession(value);
        }
        let focusSequence;
        if (value != null) {
          focusSequence = value.focusSequence;
        }
        if (focusSequence == null) {
          let num = 0;
          if (FrameVisibilityStore.isFrameVisible(frameId)) {
            const sum = self.focusSequence + 1;
            self.focusSequence = sum;
            num = sum;
          }
          focusSequence = num;
        }
        const obj3 = { id: obj7.v4(), socketId: id.id, frameId, applicationId, channelId: connectedRTCConnection.channelId, rtcConnectionId: connectedRTCConnection.getRTCConnectionId(), mediaEngineConnectionId, spatialEnabled: false, focusSequence, backgrounded: !FrameVisibilityStore.isFrameVisible(frameId), pooled: FrameVisibilityStore.isFramePooled(frameId), sources: [], appliedUserIds: set, updateTimer: null };
        const _Set = Set;
        const self6 = this;
        const self7 = this;
        obj7 = v1;
        const obj8 = FrameVisibilityStore;
        set = new Set();
        if (self.hasMediaEngineConnection(obj3)) {
          const sessions2 = self.sessions;
          const result = sessions2.set(frameId, obj3);
          if (self.unsubscribeFrameLifecycle == null) {
            self.unsubscribeFrameLifecycle = obj8.subscribe(self.handleFrameLifecycleChange);
          }
          return obj3;
        } else {
          const self8 = this;
          const self9 = this;
          const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const tmp26 = new RPCErrorDefault(obj4, "The voice connection is unavailable");
          throw tmp26;
        }
      }
    }
    const obj5 = { errorCode: RPCErrors.INVALID_CHANNEL };
    const tmp29 = new RPCErrorDefault(obj5, "Join a voice channel before starting a voice session");
    throw tmp29;
  }
  enableSpatial(socket, session_id) {
    const self = this;
    const validateSessionResult = this.validateSession(socket, session_id);
    if (this.getSpatialCapabilities().available) {
      validateSessionResult.spatialEnabled = true;
      self.syncSpatialHolder(validateSessionResult);
      const sessions = self.sessions;
      const value = sessions.get(validateSessionResult.frameId);
      let spatialEnabled;
      if (value != null) {
        spatialEnabled = value.spatialEnabled;
      }
      const self4 = this;
      const self5 = this;
      const obj2 = { errorCode: RPCErrors.INVALID_CHANNEL };
      const tmp16 = new RPCErrorDefault(obj2, "The voice connection is unavailable");
      throw tmp16;
    } else {
      const self2 = this;
      const self3 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp6 = new RPCErrorDefault(obj, "Spatial voice is not supported by this client");
      throw tmp6;
    }
  }
  disableSpatial(socket, session_id) {
    const validateSessionResult = this.validateSession(socket, session_id);
    validateSessionResult.spatialEnabled = false;
    this.retireSpatialClaim(validateSessionResult);
  }
  retireSpatialClaim(validateSessionResult) {
    const self = this;
    if (this.spatialHolder !== validateSessionResult) {
      self.deactivateEffects(validateSessionResult);
    }
    self.syncSpatialHolder();
  }
  syncSpatialHolder(validateSessionResult) {
    let tmp = validateSessionResult;
    if (validateSessionResult === undefined) {
      tmp = null;
    }
    const result = this.handOverSpatialHolder(tmp);
    const result1 = this.syncSpatialAudioOverrides();
  }
  handOverSpatialHolder(validateSessionResult) {
    const self = this;
    while (true) {
      let result = self.pickFocusedSpatialSession();
      let spatialHolder = self.spatialHolder;
      let tmp2 = spatialHolder === result;
      let tmp3 = tmp2 && null != result && result === validateSessionResult;
      if (tmp2) {
        if (!tmp3) {
          break;
        }
      }
      self.spatialHolder = result;
      if (!tmp3) {
        tmp3 = null == spatialHolder;
      }
      if (!tmp3) {
        let deactivateEffectsResult = self.deactivateEffects(spatialHolder);
      }
      if (null != result) {
        if (!self.activateEffects(result)) {
          self.spatialHolder = null;
          continue;
        }
      }
    }
  }
  syncSpatialAudioOverrides() {
    const sessions = this.sessions;
    const items = [...sessions.values()];
    const someResult = items.some((spatialEnabled) => spatialEnabled.spatialEnabled);
    if (someResult !== this.spatialRequested) {
      this.spatialRequested = someResult;
      const obj = AudioActionCreatorsDefault;
      const result = obj.setSpatialAudioOverrides(someResult ? closure_13 : {});
    }
  }
  pickFocusedSpatialSession() {
    let tmp = null;
    const sessions = this.sessions;
    const values = sessions.values();
    for (const item10011 of values) {
      let tmp3 = item10011;
      let spatialEnabled = item10011.spatialEnabled;
      if (spatialEnabled) {
        spatialEnabled = !tmp3.backgrounded;
      }
      if (spatialEnabled) {
        let tmp6 = null == tmp;
        if (!tmp6) {
          tmp6 = tmp3.focusSequence > tmp.focusSequence;
        }
        spatialEnabled = tmp6;
      }
      if (spatialEnabled) {
        tmp = item10011;
      }
      continue;
    }
    return tmp;
  }
  update(id, id2, arg2, arr) {
    let closure_2;
    const self = this;
    let closure_0 = arg2;
    const validateSessionResult = this.validateSession(id, id);
    if (validateSessionResult.spatialEnabled) {
      if (arr.length > 50) {
        let obj2 = { errorCode: RPCErrors.INVALID_PAYLOAD };
        const self6 = this;
        const self7 = this;
        const tmp18 = new RPCErrorDefault(obj2, "Spatial voice supports at most 50 sources");
        throw tmp18;
      } else {
        importDefault = self.getParticipantIds(validateSessionResult.channelId);
        dependencyMap = AuthenticationStore.getId();
        const _Set = Set;
        const self4 = this;
        const self5 = this;
        set = new Set();
        validateSessionResult.sources = arr.map((user_id) => {
          let obj3;
          user_id = user_id.user_id;
          if (user_id !== closure_2) {
            if (set.has(user_id)) {
              const obj = set;
              if (!set.has(user_id)) {
                obj.add(user_id);
                const obj2 = { userId: user_id, position: obj3.toListenerRelativePosition(closure_0, user_id.position) };
                obj3 = ConjureVoiceGeometry;
                return obj2;
              }
            }
          }
          const obj4 = { errorCode: RPCErrors.INVALID_PAYLOAD };
          const tmp6 = RPCErrorDefault;
          const tmp62 = new tmp6(obj4, "Invalid spatial voice source " + user_id.user_id);
          throw tmp62;
        });
        if (self.spatialHolder === validateSessionResult) {
          self.scheduleApply(validateSessionResult);
        }
      }
    } else {
      let obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const self2 = this;
      const self3 = this;
      let tmp6 = new RPCErrorDefault(obj, "Enable spatial voice on this session before sending a spatial snapshot");
      throw tmp6;
    }
  }
  stop(id, id2) {
    this.releaseSession(this.validateSession(id, id));
  }
  validateEventSubscription(socket, session_id) {
    this.validateSession(socket, session_id);
  }
  getParticipantsForEventSubscription(socket, id) {
    try {
      const self = this;
      return this.getParticipants(this.validateSession(socket, id).channelId);
    } catch (err) {
      return [];
    }
  }
  getActiveSessionIdsForChannel(channelId) {
    let closure_0 = channelId;
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    const sessions = this.sessions;
    const items = [...sessions.values()];
    const found = items.filter((channelId) => {
      const tmp = channelId.channelId === closure_0 && null != closure_1 && closure_1.channelId === channelId.channelId && closure_1.getRTCConnectionId() === channelId.rtcConnectionId && closure_1.getMediaEngineConnectionId() === channelId.mediaEngineConnectionId;
      return tmp;
    });
    return found.map((id) => id.id);
  }
  releaseSocket(id) {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10014 of items) {
      if (item10014.socketId === id) {
        let releaseSessionResult = self.releaseSession(tmp);
      }
      continue;
    }
  }
  releaseUnlessChannel(channelId) {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10014 of items) {
      if (item10014.channelId !== channelId) {
        let releaseSessionResult = self.releaseSession(tmp);
      }
      continue;
    }
  }
  release() {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10012 of items) {
      let releaseSessionResult = self.releaseSession(item10012);
      continue;
    }
  }
  releaseSession(value) {
    const self = this;
    const sessions = this.sessions;
    if (sessions.get(value.frameId) === value) {
      const sessions2 = self.sessions;
      sessions2.delete(value.frameId);
      self.retireSpatialClaim(value);
      if (0 === self.sessions.size) {
        const unsubscribeFrameLifecycle = self.unsubscribeFrameLifecycle;
        if (unsubscribeFrameLifecycle != null) {
          const result = unsubscribeFrameLifecycle();
        }
        self.unsubscribeFrameLifecycle = null;
      }
    }
  }
  reconcileParticipants() {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10012 of items) {
      let reconcileSessionResult = self.reconcileSession(item10012);
      continue;
    }
  }
  reconcileSession(item10012) {
    const self = this;
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null != rTCConnection) {
      if (rTCConnection.channelId === item10012.channelId) {
        if (rTCConnection.getRTCConnectionId() === item10012.rtcConnectionId) {
          if (rTCConnection.getMediaEngineConnectionId() === item10012.mediaEngineConnectionId) {
            if (item10012.spatialEnabled) {
              if (!self.getSpatialCapabilities().available) {
                item10012.spatialEnabled = false;
                item10012.sources = [];
                self.retireSpatialClaim(item10012);
              }
            }
            set = self.getParticipantIds(item10012.channelId);
            const sources = item10012.sources;
            item10012.sources = sources.filter((userId) => set.has(userId.userId));
            const items = [];
            HermesBuiltin.arraySpread(items, item10012.appliedUserIds, 0);
            const found = items.filter((item) => !set.has(item));
            if (0 !== found.length) {
              if (self.withMediaEngineConnection(item10012, (setUserPosition) => {
                for (const item10006 of found) {
                  let setUserPositionResult = setUserPosition.setUserPosition(item10006, closure_12);
                  continue;
                }
              })) {
                for (const item10054 of found) {
                  let appliedUserIds = item10012.appliedUserIds;
                  let deleteResult = appliedUserIds.delete(item10054);
                  continue;
                }
              } else {
                self.demoteFromSpatial(item10012);
                self.syncSpatialHolder();
              }
            }
          }
        }
      }
    }
    self.releaseSession(item10012);
  }
  deactivateEffects(spatialHolder) {
    this.cancelPendingUpdate(spatialHolder);
    this.clearAppliedSources(spatialHolder);
  }
  demoteFromSpatial(appliedUserIds) {
    appliedUserIds.spatialEnabled = false;
    appliedUserIds = appliedUserIds.appliedUserIds;
    appliedUserIds.clear();
    this.cancelPendingUpdate(appliedUserIds);
  }
  activateEffects(result) {
    const self = this;
    this.cancelPendingUpdate(result);
    result = this.resetParticipantEffects(result);
    let flag = this.applySources(result);
    if (!flag) {
      self.demoteFromSpatial(result);
      flag = false;
    }
    return flag;
  }
  scheduleApply(validateSessionResult) {
    const self = this;
    let closure_0 = validateSessionResult;
    if (null == validateSessionResult.updateTimer) {
      const _setTimeout = setTimeout;
      validateSessionResult.updateTimer = setTimeout(() => {
        require.updateTimer = null;
        if (self.spatialHolder === require) {
          if (!self.applySources(require)) {
            self.demoteFromSpatial(require);
            self.syncSpatialHolder();
          }
        }
      }, 50);
    }
  }
  applySources(sources) {
    sources = sources.sources;
    set = new Set(sources.map((userId) => userId.userId));
    const items = [...sources.appliedUserIds];
    let closure_2 = items.filter((item) => !set.has(item));
    const result = this.withMediaEngineConnection(sources, (setUserPosition) => {
      for (const item10006 of closure_2) {
        let setUserPositionResult = setUserPosition.setUserPosition(item10006, closure_12);
        continue;
      }
      sources = sources.sources;
      for (const item10017 of sources) {
        let setUserPositionResult1 = setUserPosition.setUserPosition(item10017.userId, item10017.position);
        continue;
      }
    });
    if (result) {
      sources.appliedUserIds = set;
    }
    return result;
  }
  clearAppliedSources(appliedUserIds) {
    if (0 !== appliedUserIds.appliedUserIds.size) {
      const self = this;
      const result = this.withMediaEngineConnection(appliedUserIds, (setUserPosition) => {
        appliedUserIds = appliedUserIds.appliedUserIds;
        for (const item10007 of appliedUserIds) {
          let setUserPositionResult = setUserPosition.setUserPosition(item10007, closure_12);
          continue;
        }
      });
      appliedUserIds = appliedUserIds.appliedUserIds;
      appliedUserIds.clear();
    }
  }
  resetParticipantEffects(result) {
    let closure_0;
    const self = this;
    const channelId = result;
    const id = AuthenticationStore.getId();
    result = this.withMediaEngineConnection(result, (setUserPosition) => {
      const participantIds = self.getParticipantIds(channelId.channelId);
      for (const item10011 of participantIds) {
        if (item10011 !== closure_0) {
          let setUserPositionResult = setUserPosition.setUserPosition(tmp2, closure_12);
        }
        continue;
      }
    });
  }
  getParticipantIds(channelId) {
    set = new Set(Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)));
    return set;
  }
  hasMediaEngineConnection(item10012) {
    return this.withMediaEngineConnection(item10012, () => {

    });
  }
  withMediaEngineConnection(item10012, arg1) {
    let closure_0 = item10012;
    let closure_1 = arg1;
    let c2 = false;
    const mediaEngine = MediaEngineStore.getMediaEngine();
    mediaEngine.eachConnection((mediaEngineConnectionId) => {
      if (mediaEngineConnectionId.mediaEngineConnectionId === closure_0.mediaEngineConnectionId) {
        c2 = true;
        closure_1(mediaEngineConnectionId);
      }
    }, unpackModuleId.DEFAULT);
    return c2;
  }
  cancelPendingUpdate(updateTimer) {
    if (null != updateTimer.updateTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(updateTimer.updateTimer);
      updateTimer.updateTimer = null;
    }
  }
  validateFrame(id) {
    const frame = validateEmbeddedAppFrameDefault(id).frame;
    const obj = { frame, frameId: frame.id, applicationId: frame.applicationId, channelId: getChannelIdForEmbeddedSurfaceDefault(frame.surface) };
    return obj;
  }
  validateSession(id, id2) {
    const self = this;
    const validateFrameResult = this.validateFrame(id);
    const sessions = this.sessions;
    const applicationId = validateFrameResult.applicationId;
    const value = sessions.get(validateFrameResult.frameId);
    if (null != value) {
      if (value.id === id) {
        if (value.socketId === id.id) {
          if (value.applicationId === applicationId) {
            const rTCConnection = RTCConnectionStore.getRTCConnection();
            if (null != rTCConnection) {
              if (rTCConnection.channelId === value.channelId) {
                if (rTCConnection.getRTCConnectionId() === value.rtcConnectionId) {
                  if (rTCConnection.getMediaEngineConnectionId() === value.mediaEngineConnectionId) {
                    return value;
                  }
                }
              }
            }
            self.releaseSession(value);
            const self2 = this;
            const self3 = this;
            const obj = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp8 = new RPCErrorDefault(obj, "The voice session was invalidated");
            throw tmp8;
          }
        }
      }
    }
    const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp10 = new RPCErrorDefault(obj2, "Unknown or stale voice session");
    throw tmp10;
  }
}
const prototype = ConjureVoiceSessionCoordinator.prototype;
let obj = Object.create(ConjureVoiceSessionCoordinator.prototype);
const map = new Map();
obj.sessions = map;
obj.spatialHolder = null;
obj.spatialRequested = false;
obj.focusSequence = 0;
obj.unsubscribeFrameLifecycle = null;
obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
  const sessions = obj.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    let tmp = item10014;
    if (!item10014.pooled) {
      item10014.pooled = FrameVisibilityStore.isFramePooled(tmp.frameId);
    }
    if (tmp.pooled) {
      if (!FrameVisibilityStore.isFramePooled(tmp.frameId)) {
        let releaseSessionResult = obj.releaseSession(tmp);
      }
      continue;
    }
    let tmp12 = !FrameVisibilityStore.isFrameVisible(tmp.frameId);
    let tmp13 = tmp12;
    if (tmp.backgrounded !== tmp12) {
      tmp.backgrounded = tmp13;
      if (!tmp13) {
        let sum = obj.focusSequence + 1;
        obj.focusSequence = sum;
        tmp.focusSequence = sum;
      }
    }
  }
  obj.syncSpatialHolder();
};
let result = size.fileFinishedImporting("modules/conjure/voice/ConjureVoiceSessionCoordinator.tsx");

export default obj;
export const MAX_SOURCES = 50;
