// Module ID: 16487
// Function ID: 16488
// Name: subscriptionHelpers
// Dependencies: [4989, 11056, 7970, 1072, 2147, 6967, 11831, 9454, 16441, 16442, 8897, 16443, 7992, 2]
// Exports: getInitialSubscriptionPayload

// Module 16487 (subscriptionHelpers)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 2147 */;
import FramesConstants from "FramesConstants" /* 6967 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7992 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8897 */;
import getSocketFrameDefault from "getSocketFrame" /* 9454 */;
import Constants3 from "Constants" /* 11831 */;
import useThermalState from "useThermalState" /* 16441 */;
import ThermalStates from "ThermalStates" /* 16442 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 16443 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11056 */;
import QuestStore from "QuestStore" /* 7970 */;
import size from "module_2" /* 2 */;

const RPCEvents = Constants.RPCEvents;
const ActivityScreenOrientation = Constants2.ActivityScreenOrientation;
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const ActivityLayoutMode = Constants3.ActivityLayoutMode;
const result = size.fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export function getInitialSubscriptionPayload(application, arg1, quest_id) {
  let enrolledAt;
  let enrolledAt1;
  let obj4;
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === arg1) {
    const application3 = application.application;
    let id;
    if (application3 != null) {
      id = application3.id;
    }
    let layoutModeForApp = null;
    if (null != id) {
      layoutModeForApp = EmbeddedActivitiesStore.getLayoutModeForApp(id);
    }
    if (null == layoutModeForApp) {
      const tmp46 = getSocketFrameDefault(application);
      let tmp47 = null;
      if (null != tmp46) {
        let FOCUSED2;
        if (tmp46.data.layoutMode === FrameLayoutModes.PIP) {
          FOCUSED2 = ActivityLayoutMode.PIP;
        } else {
          FOCUSED2 = ActivityLayoutMode.FOCUSED;
        }
        tmp47 = FOCUSED2;
      }
      layoutModeForApp = tmp47;
    }
    let tmp51 = null;
    if (null != layoutModeForApp) {
      tmp51 = { is_pip_mode: layoutModeForApp !== ActivityLayoutMode.FOCUSED };
      const obj2 = { is_pip_mode: layoutModeForApp !== ActivityLayoutMode.FOCUSED };
    }
    return tmp51;
  } else if (RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE === arg1) {
    const application2 = application.application;
    let id1;
    if (application2 != null) {
      id1 = application2.id;
    }
    let layoutModeForApp1 = null;
    if (null != id1) {
      layoutModeForApp1 = EmbeddedActivitiesStore.getLayoutModeForApp(id1);
    }
    if (null == layoutModeForApp1) {
      const tmp34 = getSocketFrameDefault(application);
      let tmp35 = null;
      if (null != tmp34) {
        let FOCUSED;
        if (tmp34.data.layoutMode === FrameLayoutModes.PIP) {
          FOCUSED = ActivityLayoutMode.PIP;
        } else {
          FOCUSED = ActivityLayoutMode.FOCUSED;
        }
        tmp35 = FOCUSED;
      }
      layoutModeForApp1 = tmp35;
    }
    let tmp39 = null;
    if (null != layoutModeForApp1) {
      tmp39 = { layout_mode: layoutModeForApp1 };
      const obj5 = { layout_mode: layoutModeForApp1 };
    }
    return tmp39;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === arg1) {
    const tmp26 = getSocketFrameDefault(application);
    let tmp27 = null;
    if (null != tmp26) {
      tmp27 = { layout_mode: tmp26.data.layoutMode };
      const obj7 = { layout_mode: tmp26.data.layoutMode };
    }
    return tmp27;
  } else if (RPCEvents.THERMAL_STATE_UPDATE === arg1) {
    const obj6 = useThermalState;
    const thermalState = obj6.getThermalState();
    let tmp23 = null;
    if (thermalState !== ThermalStates.ThermalStates.UNHANDLED) {
      tmp23 = { thermal_state: thermalState };
      const obj8 = { thermal_state: thermalState };
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === arg1) {
    const obj9 = { screen_orientation: obj4.getIsScreenLandscape() ? ActivityScreenOrientation.LANDSCAPE : ActivityScreenOrientation.PORTRAIT };
    obj4 = useIsScreenLandscape;
    return obj9;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === arg1) {
    const obj3 = activityInstanceConnectedParticipants;
    return obj3.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === arg1) {
    quest_id = quest_id.quest_id;
    if (quest_id) {
      const quest = QuestStore.getQuest(quest_id);
      const obj = QuestTaskUtils;
      const activityApplicationId = obj.getActivityApplicationId(quest);
      let tmp11 = null;
      if (null != quest) {
        tmp11 = null;
        if (null != activityApplicationId) {
          application = application.application;
          let id2;
          if (application != null) {
            id2 = application.id;
          }
          tmp11 = null;
          if (activityApplicationId === id2) {
            const userStatus = quest.userStatus;
            const obj10 = { quest_id, is_enrolled: null != enrolledAt, enrolled_at: enrolledAt1 };
            enrolledAt = undefined;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            const userStatus2 = quest.userStatus;
            enrolledAt1 = undefined;
            if (userStatus2 != null) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            if (enrolledAt1 == null) {
              enrolledAt1 = null;
            }
            tmp11 = obj10;
          }
        }
      }
      return tmp11;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
