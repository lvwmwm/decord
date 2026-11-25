// Module ID: 16624
// Function ID: 16625
// Name: PlayableStore
// Dependencies: [6905, 2118, 1071, 5638, 6906, 6931, 1091, 16625, 6847, 504, 572, 2]

// Module 16624 (PlayableStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5638 */;
import AdCreativeType from "AdCreativeType" /* 6847 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6931 */;
import PlayableAnalytics from "PlayableAnalytics" /* 16625 */;
import FramesStore from "FramesStore" /* 6905 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import size from "module_2" /* 2 */;

let _null;

let c10;
let closure_12;
let unpackModuleId;
function pauseOrResumeTimer(startedAt) {
  let diff;
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = authStore(FramesStore.getFrame(startedAt.frameId));
  const obj2 = DiscordAppStateDefault;
  const state = obj2.getState();
  let tmp8 = state === ConstantsIOS.AppStates.ACTIVE;
  const tmp2 = authStore;
  if (tmp8) {
    let activityPanelMode;
    if (tmp3 != null) {
      activityPanelMode = tmp3.data.activityPanelMode;
    }
    tmp8 = activityPanelMode === ActivityPanelModes.PANEL;
  }
  if (tmp8) {
    let flag;
    if (null == startedAt) {
      const obj3 = { startedAt: Date.now() };
      const merged = Object.assign(startedAt);
      const _Date = Date;
      obj = obj3;
      flag = true;
    }
    return flag;
  }
  const tmp2Result = tmp2(obj.getFrame(startedAt.frameId));
  const tmp4Result = DiscordAppStateDefault;
  const state1 = tmp4Result.getState();
  let tmp17 = state1 === ConstantsIOS.AppStates.ACTIVE;
  if (tmp17) {
    let activityPanelMode1;
    if (tmp2Result != null) {
      activityPanelMode1 = tmp2Result.data.activityPanelMode;
    }
    tmp17 = activityPanelMode1 === ActivityPanelModes.PANEL;
  }
  if (!tmp17) {
    tmp17 = !tmp;
  }
  let flag2 = !tmp17;
  if (flag2) {
    const _Date2 = Date;
    const obj4 = { playedMsBeforeRun: startedAt.playedMsBeforeRun + diff, startedAt: null };
    diff = Date.now() - startedAt;
    const merged1 = Object.assign(startedAt);
    obj = obj4;
    flag2 = true;
  }
  flag = flag2;
}
function attachPlayable(id, playable, impressionId) {
  let obj4;
  const mainFrame = FramesStore.getMainFrame();
  id = undefined;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  let tmp3 = id === id && id === unpackModuleId(playable.applicationId, authStore2);
  if (tmp3) {
    let c3 = null;
    let frameId;
    if (obj != null) {
      frameId = obj.frameId;
    }
    if (frameId !== id) {
      obj = { playable, impressionId, frameId: id, playedMsBeforeRun: 0, rewardReached: false, completionReached: false, startedAt: null };
      pauseOrResumeTimer(obj);
      const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: obj4 };
      obj4 = { progress: 0, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
      const obj2 = PlayableAnalytics;
      obj2.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
    }
    tmp3 = tmp7;
  }
  return tmp3;
}
function handleVisibilityChange() {
  const tmp = null != obj && pauseOrResumeTimer(obj);
  return tmp;
}
const AnalyticEvents = Constants.AnalyticEvents;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: c10, makeFrameId: unpackModuleId, MAIN_SURFACE: closure_12 } = FramesConstants);
let c13 = 30000;
let c3 = null;
let obj = null;
let set = new Set();
const Store = get_initializedDefault.Store;
class PlayableStore extends Store {
  initialize() {
    this.waitFor(FramesStore, AppStateStore);
  }
  getPlayableForFrame(frameId) {
    frameId = undefined;
    if (obj != null) {
      frameId = obj.frameId;
    }
    let playable = null;
    if (frameId === frameId) {
      playable = obj.playable;
    }
    return playable;
  }
  getTimerState(playingPlayableId) {
    let id;
    if (obj != null) {
      id = obj.playable.id;
    }
    let tmp2 = null;
    if (id === playingPlayableId) {
      tmp2 = obj;
    }
    return tmp2;
  }
  getPlayingPlayableId() {
    let id;
    if (obj != null) {
      id = obj.playable.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  }
  isPlayableCompleted(id) {
    return set.has(id);
  }
  isRunning(arg0) {
    let id;
    if (obj != null) {
      id = obj.playable.id;
    }
    return id === arg0 && null != obj.startedAt;
  }
  getRewardRemainingMs(playingPlayableId) {
    let bound = null;
    if (null != obj) {
      bound = null;
      if (obj.playable.id === playingPlayableId) {
        const self = this;
        const _Math = Math;
        const result = 1000 * obj.playable.rewardTimerSeconds;
        bound = Math.max(0, result - this.getPlayedMs(playingPlayableId));
      }
    }
    return bound;
  }
  getPlayedMs(id) {
    let sum = null;
    if (null != obj) {
      sum = null;
      if (obj.playable.id === id) {
        let num = 0;
        const playedMsBeforeRun = obj.playedMsBeforeRun;
        if (null != obj.startedAt) {
          const _Date = Date;
          num = Date.now() - obj.startedAt;
        }
        sum = playedMsBeforeRun + num;
      }
    }
    return sum;
  }
  getCompletionRemainingMs(playingPlayableId) {
    const playedMs = this.getPlayedMs(playingPlayableId);
    let bound = null;
    if (null != playedMs) {
      const _Math = Math;
      bound = Math.max(0, c13 - playedMs);
    }
    return bound;
  }
}
const prototype = PlayableStore.prototype;
PlayableStore.displayName = "PlayableStore";
obj = {
  LOGOUT: function handleLogout() {
    let c3 = null;
    new Set();
  },
  PLAYABLE_LAUNCH: function handlePlayableLaunch(playable) {
    let c3 = { playable: playable.playable, launchId: playable.launchId, impressionId: playable.impressionId };
    return false;
  },
  PLAYABLE_LAUNCH_COMPLETE: function handlePlayableLaunchComplete(arg0) {
    let launchId;
    let success;
    let launchId1;
    ({ launchId, success } = arg0);
    if (_null != null) {
      launchId1 = _null.launchId;
    }
    if (launchId1 !== launchId) {
      return false;
    } else {
      const playable = _null.playable;
      if (success) {
        const mainFrame = FramesStore.getMainFrame();
        let applicationId;
        if (mainFrame != null) {
          applicationId = mainFrame.applicationId;
        }
        if (applicationId === playable.applicationId) {
          let flag2;
          if (mainFrame.id === unpackModuleId(playable.applicationId, authStore2)) {
            const tmp8 = authStore(mainFrame);
            let iframeId;
            if (tmp8 != null) {
              iframeId = tmp8.data.iframeId;
            }
            flag2 = null != iframeId && attachPlayable(mainFrame.id, playable, tmp12);
          }
          return flag2;
        }
        _null = null;
        flag2 = false;
      } else {
        _null = null;
        return false;
      }
    }
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    const frame = FramesStore.getFrame(frameId);
    let playable;
    if (_null != null) {
      playable = _null.playable;
    }
    let tmp5Result = null != playable;
    if (tmp5Result) {
      let applicationId1;
      const applicationId = playable.applicationId;
      if (frame != null) {
        applicationId1 = frame.applicationId;
      }
      tmp5Result = applicationId === applicationId1;
    }
    if (tmp5Result) {
      let impressionId;
      const tmp5 = attachPlayable;
      if (_null != null) {
        impressionId = _null.impressionId;
      }
      tmp5Result = tmp5(frameId, playable, impressionId);
    }
    return tmp5Result;
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    let applicationId;
    let frameId;
    let obj3;
    ({ frameId, applicationId } = arg0);
    let applicationId1;
    if (_null != null) {
      applicationId1 = _null.playable.applicationId;
    }
    const tmp2 = applicationId1 === applicationId && frameId === unpackModuleId(applicationId, authStore2);
    if (tmp2) {
      _null = null;
    }
    if (null != obj) {
      if (obj.frameId === frameId) {
        const playedMs = playableStore.getPlayedMs(obj.playable.id);
        obj = PlayableAnalytics;
        const obj2 = { event: AnalyticEvents.AD_PLAYABLE_CLOSED, properties: obj3 };
        obj3 = { elapsed_ms: playedMs, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
        obj.trackPlayableEvent(obj.playable.id, obj.impressionId, obj2);
        obj = null;
      }
    }
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(playableId) {
    let obj4;
    playableId = playableId.playableId;
    if (null != obj) {
      if (obj.playable.id === playableId) {
        if (!obj.rewardReached) {
          obj = { rewardReached: true };
          const merged = Object.assign(obj);
          const _Math = Math;
          const bound = Math.min(1, playableStore.getPlayedMs(playableId) / c13);
          const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: obj4 };
          obj4 = { progress: bound, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
          const obj2 = PlayableAnalytics;
          obj2.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
        }
      }
    }
    return false;
  },
  PLAYABLE_COMPLETION_REACHED: function handlePlayableCompletionReached(arg0) {
    let obj4;
    if (null != obj) {
      if (obj.playable.id === tmp) {
        if (!obj.completionReached) {
          obj = { completionReached: true };
          const merged = Object.assign(obj);
          const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: obj4 };
          obj4 = { progress: 1, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
          const obj2 = PlayableAnalytics;
          obj2.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
        }
      }
    }
    return false;
  },
  PLAYABLE_REWARD_CLAIM_SUCCESS: function handleClaimPlayableRewardSuccess(playableId) {
    playableId = playableId.playableId;
    set = new Set(set);
    set.add(playableId);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(creative) {
    creative = creative.creative;
    let type;
    if (creative != null) {
      type = creative.type;
    }
    if (type === AdCreativeType.AdCreativeType.PLAYABLE) {
      if (set.has(creative.playable.id)) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(set);
        set.delete(creative.playable.id);
      }
    }
    return false;
  },
  APP_STATE_UPDATE: handleVisibilityChange,
  FRAME_SET_PANEL_MODE: handleVisibilityChange
};
const playableStore = new PlayableStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/quests/native/PlayableStore.tsx");

export default playableStore;
export const PLAYABLE_COMPLETION_MS = 30000;
