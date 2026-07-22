// Module ID: 13314
// Function ID: 101155
// Name: getInitialSubscriptionPayload
// Dependencies: []
// Exports: getInitialSubscriptionPayload

// Module 13314 (getInitialSubscriptionPayload)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const RPCEvents = arg1(dependencyMap[3]).RPCEvents;
({ ActivityLayoutMode: closure_6, ActivityScreenOrientation: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(closure_1, closure_2, closure_3) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === closure_2) {
    const application4 = closure_1.application;
    let id;
    if (null != application4) {
      id = application4.id;
    }
    let layoutModeForApp = null;
    if (null != id) {
      layoutModeForApp = store.getLayoutModeForApp(id);
    }
    let tmp40 = null;
    if (null != layoutModeForApp) {
      let obj = { is_pip_mode: layoutModeForApp !== constants.FOCUSED };
      tmp40 = obj;
    }
    return tmp40;
  } else if (RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE === closure_2) {
    const application3 = closure_1.application;
    let id1;
    if (null != application3) {
      id1 = application3.id;
    }
    let layoutModeForApp1 = null;
    if (null != id1) {
      layoutModeForApp1 = store.getLayoutModeForApp(id1);
    }
    let tmp35 = null;
    if (null != layoutModeForApp1) {
      obj = { layout_mode: layoutModeForApp1 };
      tmp35 = obj;
    }
    return tmp35;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === closure_2) {
    const application2 = closure_1.application;
    let id2;
    if (null != application2) {
      id2 = application2.id;
    }
    let tmp26 = null;
    if (null != id2) {
      const connectedFrame = connectedFrame.getConnectedFrame();
      let layoutMode;
      if (null != connectedFrame) {
        layoutMode = connectedFrame.layoutMode;
      }
      tmp26 = layoutMode;
    }
    let tmp30 = null;
    if (null != tmp26) {
      const obj1 = { layout_mode: tmp26 };
      tmp30 = obj1;
    }
    return tmp30;
  } else if (RPCEvents.THERMAL_STATE_UPDATE === closure_2) {
    const thermalState = closure_2(dependencyMap[5]).getThermalState();
    let tmp23 = null;
    if (thermalState !== closure_2(dependencyMap[5]).ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: thermalState };
      tmp23 = obj2;
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === closure_2) {
    const obj3 = {};
    let obj4 = closure_2(dependencyMap[6]);
    obj3.screen_orientation = obj4.getIsScreenLandscape() ? closure_7.LANDSCAPE : closure_7.PORTRAIT;
    return obj3;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === closure_2) {
    obj2 = closure_2(dependencyMap[7]);
    return obj2.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === closure_2) {
    const quest_id = closure_3.quest_id;
    if (quest_id) {
      const quest = quest.getQuest(quest_id);
      obj = closure_2(dependencyMap[8]);
      const activityApplicationId = obj.getActivityApplicationId(quest);
      let tmp10 = null;
      if (null != quest) {
        tmp10 = null;
        if (null != activityApplicationId) {
          const application = closure_1.application;
          let id3;
          if (null != application) {
            id3 = application.id;
          }
          tmp10 = null;
          if (activityApplicationId === id3) {
            obj4 = { quest_id };
            const userStatus = quest.userStatus;
            let enrolledAt;
            if (null != userStatus) {
              enrolledAt = userStatus.enrolledAt;
            }
            obj4.is_enrolled = null != enrolledAt;
            const userStatus2 = quest.userStatus;
            let enrolledAt1;
            if (null != userStatus2) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            let tmp14 = null;
            if (null != enrolledAt1) {
              tmp14 = enrolledAt1;
            }
            obj4.enrolled_at = tmp14;
            tmp10 = obj4;
          }
        }
      }
      return tmp10;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
