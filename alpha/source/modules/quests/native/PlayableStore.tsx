// Module ID: 17732
// Function ID: 17733
// Name: PlayableStore
// Dependencies: [7027, 2120, 5953, 7028, 7055, 1092, 6969, 504, 572, 2]

// Module 17732 (PlayableStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5953 */;
import AdCreativeType from "AdCreativeType" /* 6969 */;
import DiscordAppStateDefault from "DiscordAppState" /* 7055 */;
import FramesStore from "FramesStore" /* 7027 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import FramesConstants from "FramesConstants" /* 7028 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let unpackModuleId;
function pauseOrResumeTimer(startedAt) {
  let diff;
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = React4(FramesStore.getFrame(startedAt.frameId));
  const obj2 = DiscordAppStateDefault;
  const state = obj2.getState();
  let tmp8 = state === ConstantsIOS.AppStates.ACTIVE;
  const tmp2 = React4;
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
    const obj4 = { remainingMs: Math.max(0, startedAt.remainingMs - diff), startedAt: null };
    diff = Date.now() - startedAt;
    const merged1 = Object.assign(startedAt);
    const _Math = Math;
    obj = obj4;
    flag2 = true;
  }
  flag = flag2;
}
function handleVisibilityChange() {
  const tmp = null != obj && pauseOrResumeTimer(obj);
  return tmp;
}
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: c9, makeFrameId: c10, MAIN_SURFACE: unpackModuleId } = FramesConstants);
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
    playable = null;
    if (frameId === frameId) {
      playable = obj.playable;
    }
    return playable;
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
  getRemainingMs(playingPlayableId) {
    let tmp = null;
    if (null != obj) {
      tmp = null;
      if (obj.playable.id === playingPlayableId) {
        let remainingMs;
        if (null == obj.startedAt) {
          remainingMs = obj.remainingMs;
        } else {
          const _Math = Math;
          const _Date = Date;
          remainingMs = Math.max(0, obj.remainingMs - (Date.now() - obj.startedAt));
        }
        tmp = remainingMs;
      }
    }
    return tmp;
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
    playable = playable.playable;
    return false;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    obj = FramesStore;
    const frame = FramesStore.getFrame(frameId);
    let tmp3 = null != playable;
    if (tmp3) {
      let applicationId1;
      const applicationId = tmp2.applicationId;
      if (frame != null) {
        applicationId1 = frame.applicationId;
      }
      tmp3 = applicationId === applicationId1;
    }
    if (tmp3) {
      const mainFrame = obj.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      let flag = false;
      if (id === frameId) {
        flag = false;
        if (frameId === authStore(playable.applicationId, unpackModuleId)) {
          playable = null;
          const obj2 = { playable, frameId, remainingMs: 1000 * playable.rewardTimerSeconds, startedAt: null };
          obj = obj2;
          pauseOrResumeTimer(obj2);
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    let applicationId;
    let frameId;
    ({ frameId, applicationId } = arg0);
    let applicationId1;
    if (playable != null) {
      applicationId1 = playable.applicationId;
    }
    const tmp2 = applicationId1 === applicationId && frameId === authStore(applicationId, unpackModuleId);
    if (tmp2) {
      playable = null;
    }
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(arg0) {
    if (null != obj) {
      if (obj.playable.id === tmp) {
        obj = { remainingMs: 0, startedAt: null };
        const merged = Object.assign(obj);
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
const result = size.fileFinishedImporting("modules/quests/native/PlayableStore.tsx");

export default playableStore;
