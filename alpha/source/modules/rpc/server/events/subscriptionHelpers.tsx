// Module ID: 16340
// Function ID: 16341
// Name: subscriptionHelpers
// Dependencies: [4862, 16290, 7846, 1072, 2018, 11693, 9326, 16294, 16295, 8773, 16296, 7868, 2]
// Exports: getInitialSubscriptionPayload

// Module 16340 (subscriptionHelpers)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 2018 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7868 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8773 */;
import getSocketFrameDefault from "getSocketFrame" /* 9326 */;
import Constants3 from "Constants" /* 11693 */;
import useThermalState from "useThermalState" /* 16294 */;
import ThermalStates from "ThermalStates" /* 16295 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 16296 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16290 */;
import QuestStore from "QuestStore" /* 7846 */;
import size from "module_2" /* 2 */;

const RPCEvents = Constants.RPCEvents;
const ActivityScreenOrientation = Constants2.ActivityScreenOrientation;
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
    let tmp37 = null;
    if (null != layoutModeForApp) {
      tmp37 = { is_pip_mode: layoutModeForApp !== ActivityLayoutMode.FOCUSED };
      const obj2 = { is_pip_mode: layoutModeForApp !== ActivityLayoutMode.FOCUSED };
    }
    return tmp37;
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
    let tmp32 = null;
    if (null != layoutModeForApp1) {
      tmp32 = { layout_mode: layoutModeForApp1 };
      const obj5 = { layout_mode: layoutModeForApp1 };
    }
    return tmp32;
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
