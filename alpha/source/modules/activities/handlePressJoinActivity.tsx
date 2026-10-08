// Module ID: 10664
// Function ID: 10665
// Name: handlePressJoinActivity
// Dependencies: [5, 2021, 2063, 2086, 4707, 1389, 5111, 2062, 10665, 10659, 5297, 1126, 6842, 10658, 10666, 2]
// Exports: maybeJoinEmbeddedActivity

// Module 10664 (handlePressJoinActivity)
import intl9 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import showActivitiesInvalidPermissionsAlert from "showActivitiesInvalidPermissionsAlert" /* 10659 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 10665 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2021 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import size from "module_2" /* 2 */;

let application, currentUser;

function handlePressJoinActivity(arg0) {
  let embeddedActivityJoinability;
  let handleCanJoin;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const tmpResult = showActivitiesInvalidPermissionsAlert;
    const result = tmpResult.showActivitiesInvalidPermissionsAlert();
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    const obj2 = { title: intl7.string(intl9.t.PtobXW), body: intl8.string(intl9.t.UXoQTp), hideActionSheet: false };
    const show4 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    show4(obj2);
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    const obj3 = { title: intl5.string(intl9.t.PtobXW), body: intl6.string(intl9.t.uGDCcw), hideActionSheet: false };
    const show3 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl5 = tmp(1126).intl;
    intl6 = tmp(1126).intl;
    show3(obj3);
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    const obj4 = { title: intl3.string(intl9.t.PtobXW), body: intl4.string(intl9.t["4WuFRE"]), hideActionSheet: false };
    const show2 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    show2(obj4);
  } else {
    obj = { title: intl.string(intl9.t.PtobXW), body: intl2.string(intl9.t.FUCQco), hideActionSheet: false };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    show(obj);
  }
}
let obj = function _maybeJoinEmbeddedActivity() {
  obj = _asyncToGenerator(async (channelId) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c5;
      let c6;
      let c7;
      let closure_8;
      let obj4;
      let obj9;
      if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          const embeddedActivitiesForChannel = closure_130_10.getEmbeddedActivitiesForChannel(channelId);
          closure_8 = embeddedActivitiesForChannel.find((applicationId) => {
            let tmp = applicationId.applicationId === closure_1_1;
            if (tmp) {
              tmp = null == closure_1_2 || applicationId.launchId === tmp2;
            }
            return tmp;
          });
          application = c3;
          if (null == application) {
            let obj5 = closure_130_1(closure_130_2[12]);
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj5.fetchApplication(c1), done: false };
            return obj7;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        let closure_10 = value;
        application = closure_130_4.createFromServer(closure_10);
      }
      if (null != closure_8) {
        if (null != application) {
          currentUser = closure_130_8.getCurrentUser();
          let id;
          const tmp46 = closure_130_11;
          const tmp49 = closure_130_1(closure_130_2[8]);
          if (currentUser != null) {
            id = currentUser.id;
          }
          const obj8 = {
            embeddedActivityJoinability: tmp49(obj9),
            handleCanJoin() {
                  return closure_1_12(...arguments);
                }
          };
          obj9 = { userId: id, application, channelId, currentUser, isActivitiesEnabledForCurrentPlatform: obj4.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore: closure_130_5, VoiceStateStore: closure_130_9, PermissionStore: closure_130_7, GuildStore: closure_130_6 };
          obj4 = closure_130_0(closure_130_2[13]);
          tmp46(obj8);
        }
      }
      await "IconComponent";
      if (arg0 === 1) {
        throw value;
      }
      if (arg0 === 2) {
        return value;
      }
      ({ channelId: c0, applicationId: c1, launchId: c2, inputApplication: c3, analyticsLocations: c4, launchingComponentId: c5, sectionName: c6, inviterUserId: c7 } = closure_0);
      obj = function _handleCanJoin() {
        let activityChannelId;
        let analyticsLocations;
        let applicationId;
        let componentId;
        let inviterUserId;
        let sectionName;
        obj = closure_2_3(function*(arg0, value) {
          let v1;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else if (null != applicationId) {
                  const obj4 = { applicationId: applicationId.applicationId, activityChannelId, locationObject: {}, analyticsLocations, componentId, sectionName, inviterUserId };
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: c1(closure_1_2[14])(obj4), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp12) {
              c0 = 3;
              throw tmp12;
            }
          }
        });
        return obj(...arguments);
      };
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity() {
  return obj(...arguments);
};
