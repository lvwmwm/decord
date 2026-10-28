// Module ID: 19759
// Function ID: 19760
// Name: PlayableStore
// Dependencies: [7808, 6810, 1998, 5645, 6811, 6836, 1104, 7809, 6748, 504, 584, 2]

// Module 19759 (PlayableStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5645 */;
import QuestTypes from "QuestTypes" /* 6748 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6836 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7809 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7808 */;
import FramesStore from "FramesStore" /* 6810 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import size from "module_2" /* 2 */;

let _null;

function pauseOrResumeTimer(c3) {
  let diff;
  const startedAt = c3.startedAt;
  const tmp3 = asLaunched(FramesStore.getFrame(c3.frameId));
  const obj2 = DiscordAppStateDefault;
  const state = obj2.getState();
  let tmp8 = state === ConstantsIOS.AppStates.ACTIVE;
  const obj = FramesStore;
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
      const merged = Object.assign(c3);
      const _Date = Date;
      c3 = obj3;
      flag = true;
    }
    return flag;
  }
  const tmp2Result = tmp2(obj.getFrame(c3.frameId));
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
    const obj4 = { remainingMs: Math.max(0, c3.remainingMs - diff), startedAt: null };
    diff = Date.now() - startedAt;
    const merged1 = Object.assign(c3);
    const _Math = Math;
    c3 = obj4;
    flag2 = true;
  }
  flag = flag2;
}
function handleVisibilityChange() {
  const tmp = null != c3 && pauseOrResumeTimer(c3);
  return tmp;
}
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
const _false = null;
const Store = get_initializedDefault.Store;
class PlayableStore extends Store {
  initialize() {
    this.waitFor(FramesStore, AdDeliveryStore, AppStateStore);
  }
  getPlayingPlayableId() {
    let playableId;
    if (_null != null) {
      playableId = _null.playableId;
    }
    if (playableId == null) {
      playableId = null;
    }
    return playableId;
  }
  isRunning(arg0) {
    let playableId;
    if (_null != null) {
      playableId = _null.playableId;
    }
    return playableId === arg0 && null != _null.startedAt;
  }
  getRemainingMs(playingPlayableId) {
    let tmp = null;
    if (null != _null) {
      tmp = null;
      if (_null.playableId === playingPlayableId) {
        let remainingMs;
        if (null == _null.startedAt) {
          remainingMs = _null.remainingMs;
        } else {
          const _Math = Math;
          const _Date = Date;
          remainingMs = Math.max(0, _null.remainingMs - (Date.now() - _null.startedAt));
        }
        tmp = remainingMs;
      }
    }
    return tmp;
  }
}
const prototype = PlayableStore.prototype;
PlayableStore.displayName = "PlayableStore";
let obj = {
  LOGOUT: function handleLogout() {
    let c3 = null;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    if (null != c3) {
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
          const obj = { playableId: deliveredPlayable.id, frameId, remainingMs: 1000 * deliveredPlayable.rewardTimerSeconds, startedAt: null };
          c3 = obj;
          pauseOrResumeTimer(obj);
        }
      }
      return false;
    }
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    if (null != _null) {
      if (_null.frameId === tmp) {
        _null = null;
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
