// Module ID: 9641
// Function ID: 9642
// Name: handlePressJoinActivity
// Dependencies: [5, 2002, 2042, 2064, 4396, 1372, 4776, 2041, 9642, 9619, 5109, 1115, 7410, 9618, 9643, 2]
// Exports: maybeJoinEmbeddedActivity

// Module 9641 (handlePressJoinActivity)
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5109 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 9642 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2002 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4396 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;

require = fn;
function handlePressJoinActivity(arg0) {
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (tmp(9642).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const result = tmp(9619).showActivitiesInvalidPermissionsAlert();
    const tmpResult = tmp(9619);
  } else if (tmp(9642).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    const obj2 = { title: null, body: null, hideActionSheet: false };
    const intl7 = tmp(1115).intl;
    obj2.title = intl7.string(tmp(1115).t.PtobXW);
    const intl8 = tmp(1115).intl;
    obj2.body = intl8.string(tmp(1115).t.UXoQTp);
    AlertActionCreatorsDefault.show(obj2);
  } else if (tmp(9642).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    const obj4 = { title: null, body: null, hideActionSheet: false };
    const intl5 = tmp(1115).intl;
    obj4.title = intl5.string(tmp(1115).t.PtobXW);
    const intl6 = tmp(1115).intl;
    obj4.body = intl6.string(tmp(1115).t.uGDCcw);
    AlertActionCreatorsDefault.show(obj4);
  } else if (tmp(9642).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    const obj6 = { title: null, body: null, hideActionSheet: false };
    const intl3 = tmp(1115).intl;
    obj6.title = intl3.string(tmp(1115).t.PtobXW);
    const intl4 = tmp(1115).intl;
    obj6.body = intl4.string(tmp(1115).t["4WuFRE"]);
    AlertActionCreatorsDefault.show(obj6);
  } else {
    const obj8 = { title: null, body: null, hideActionSheet: false };
    const intl = tmp(1115).intl;
    obj8.title = intl.string(tmp(1115).t.PtobXW);
    const intl2 = tmp(1115).intl;
    obj8.body = intl2.string(tmp(1115).t.FUCQco);
    AlertActionCreatorsDefault.show(obj8);
  }
}
let closure_12 = async function _maybeJoinEmbeddedActivity(arg0, value) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      const embeddedActivitiesForChannel = closure_130_10.getEmbeddedActivitiesForChannel(closure_129_0);
      closure_129_8 = embeddedActivitiesForChannel.find((applicationId) => {
        let tmp = applicationId.applicationId === closure_1_1;
        if (tmp) {
          tmp = null == closure_1_2 || applicationId.launchId === tmp2;
          const tmp4 = null == closure_1_2 || applicationId.launchId === tmp2;
        }
        return tmp;
      });
      closure_129_9 = closure_129_3;
      if (null == closure_129_9) {
        c3 = 2;
        c4 = 1;
        return { value: closure_130_1(closure_130_2[12]).fetchApplication(closure_129_1), done: false };
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else {
    closure_129_10 = value;
    closure_129_9 = closure_130_4.createFromServer(closure_129_10);
  }
  if (null != closure_129_8) {
    if (null != closure_129_9) {
      const currentUser = closure_130_8.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      const obj8 = { embeddedActivityJoinability: null, handleCanJoin: null };
      const obj9 = { userId: id, application: closure_129_9, channelId: closure_129_0, currentUser, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
      obj9.isActivitiesEnabledForCurrentPlatform = closure_130_0(closure_130_2[13]).getIsActivitiesEnabledForCurrentPlatform();
      obj9.ChannelStore = closure_130_5;
      obj9.VoiceStateStore = closure_130_9;
      obj9.PermissionStore = closure_130_7;
      obj9.GuildStore = closure_130_6;
      obj8.embeddedActivityJoinability = closure_130_1(closure_130_2[8])(obj9);
      obj8.handleCanJoin = function handleCanJoin() {
        const self = this;
        const apply = closure_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      closure_130_11(obj8);
      closure_130_0(closure_130_2[13]);
      closure_130_1(closure_130_2[8]);
    }
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ channelId: closure_129_0, applicationId: closure_129_1, launchId: closure_129_2, inputApplication: closure_129_3, analyticsLocations: closure_129_4, launchingComponentId: closure_129_5, sectionName: closure_129_6, inviterUserId: closure_129_7 } = closure_0);
  closure_129_12 = function _handleCanJoin() {
    const self = this;
    const tmp = c3(function*(arg0, value) {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (null != applicationId) {
              const obj4 = { applicationId: applicationId.applicationId, activityChannelId, locationObject: {}, analyticsLocations, componentId, sectionName, inviterUserId };
              v1 = 1;
              c0 = 1;
              const obj5 = { value: v1(closure_1_2[14])(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          c0 = tmp;
          throw tmp13;
        }
      }
    });
    closure_12 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return "flex";
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
