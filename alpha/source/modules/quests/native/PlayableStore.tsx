// Module ID: 17581
// Function ID: 17582
// Name: PlayableStore
// Dependencies: [8739, 6956, 2117, 5896, 6957, 6984, 1092, 8740, 5278, 5282, 504, 572, 2]

// Module 17581 (PlayableStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import QuestTypes from "QuestTypes" /* 5278 */;
import AdCreativeType from "AdCreativeType" /* 5282 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5896 */;
import FramesConstants from "FramesConstants" /* 6957 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6984 */;
import AdDecisionUtils from "AdDecisionUtils" /* 8740 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8739 */;
import FramesStore from "FramesStore" /* 6956 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import size from "module_2" /* 2 */;

function pauseOrResumeTimer(startedAt) {
  let diff;
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = asLaunched(FramesStore.getFrame(startedAt.frameId));
  const obj2 = DiscordAppStateDefault;
  const state = obj2.getState();
  let tmp8 = state === ConstantsIOS.AppStates.ACTIVE;
  const tmp2 = asLaunched;
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
const asLaunched = FramesConstants.asLaunched;
let obj = null;
let set = new Set();
const Store = get_initializedDefault.Store;
class PlayableStore extends Store {
  initialize() {
    this.waitFor(FramesStore, AdDeliveryStore, AppStateStore);
  }
  getPlayingPlayableId() {
    let playableId;
    if (obj != null) {
      playableId = obj.playableId;
    }
    if (playableId == null) {
      playableId = null;
    }
    return playableId;
  }
  isPlayableCompleted(id) {
    return set.has(id);
  }
  isRunning(arg0) {
    let playableId;
    if (obj != null) {
      playableId = obj.playableId;
    }
    return playableId === arg0 && null != obj.startedAt;
  }
  getRemainingMs(playingPlayableId) {
    let tmp = null;
    if (null != obj) {
      tmp = null;
      if (obj.playableId === playingPlayableId) {
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
    new Set();
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    if (null != obj) {
      return false;
    } else {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      const getDeliveredPlayable = AdDecisionUtils.getDeliveredPlayable;
      AdDecisionUtils;
      const value = deliveryAdDecisionByPlacement.get(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
      let creative;
      if (value != null) {
        creative = value.creative;
      }
      const deliveredPlayable = getDeliveredPlayable(creative);
      if (null != deliveredPlayable) {
        const applicationId = deliveredPlayable.applicationId;
        const frame = FramesStore.getFrame(frameId);
        let applicationId1;
        if (frame != null) {
          applicationId1 = frame.applicationId;
        }
        if (applicationId === applicationId1) {
          obj = { playableId: deliveredPlayable.id, frameId, remainingMs: 1000 * deliveredPlayable.rewardTimerSeconds, startedAt: null };
          pauseOrResumeTimer(obj);
        }
      }
      return false;
    }
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(arg0) {
    if (null != obj) {
      if (obj.playableId === tmp) {
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
