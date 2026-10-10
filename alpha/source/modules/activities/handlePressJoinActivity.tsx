// Module ID: 10923
// Function ID: 10924
// Name: handlePressJoinActivity
// Dependencies: [5, 2022, 2065, 2087, 4750, 1390, 5113, 2064, 10920, 10877, 5299, 1126, 6852, 5924, 10846, 10822, 2]
// Exports: maybeJoinEmbeddedActivity

// Module 10923 (handlePressJoinActivity)
import intl11 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import showActivitiesInvalidPermissionsAlert from "showActivitiesInvalidPermissionsAlert" /* 10877 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 10920 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import size from "module_2" /* 2 */;

let application, currentUser;

function handlePressJoinActivity(arg0) {
  let embeddedActivityJoinability;
  let handleCanJoin;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const tmpResult = showActivitiesInvalidPermissionsAlert;
    const result = tmpResult.showActivitiesInvalidPermissionsAlert();
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    const obj2 = { title: intl9.string(intl11.t.PtobXW), body: intl10.string(intl11.t.UXoQTp), hideActionSheet: false };
    const show5 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl9 = tmp(1126).intl;
    intl10 = tmp(1126).intl;
    show5(obj2);
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    const obj3 = { title: intl7.string(intl11.t.PtobXW), body: intl8.string(intl11.t.uGDCcw), hideActionSheet: false };
    const show4 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    show4(obj3);
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    const obj4 = { title: intl5.string(intl11.t.PtobXW), body: intl6.string(intl11.t["4WuFRE"]), hideActionSheet: false };
    const show3 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl5 = tmp(1126).intl;
    intl6 = tmp(1126).intl;
    show3(obj4);
  } else if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CHANNEL_CONTENT_GATED === embeddedActivityJoinability) {
    const obj5 = { title: intl3.string(intl11.t.PtobXW), body: intl4.string(intl11.t.pKLV22), hideActionSheet: false };
    const show2 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    show2(obj5);
  } else {
    obj = { title: intl.string(intl11.t.PtobXW), body: intl2.string(intl11.t.FUCQco), hideActionSheet: false };
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
      let obj10;
      let obj4;
      let obj5;
      let obj6;
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
            c3 = 2;
            c4 = 1;
            const obj8 = { value: obj6.fetchApplication(c1), done: false };
            obj6 = closure_130_1(closure_130_2[12]);
            return obj8;
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
          const channel = closure_130_5.getChannel(channelId);
          let id;
          const tmp50 = closure_130_11;
          const tmp53 = closure_130_1(closure_130_2[8]);
          if (currentUser != null) {
            id = currentUser.id;
          }
          const obj9 = {
            embeddedActivityJoinability: tmp53(obj10),
            handleCanJoin() {
                  return closure_1_13(...arguments);
                }
          };
          obj10 = { userId: id, application, channelId, currentUser, isContentGated: obj4.isChannelContentGated(channel), isActivitiesEnabledForCurrentPlatform: obj5.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore: closure_130_5, VoiceStateStore: closure_130_9, PermissionStore: closure_130_7, GuildStore: closure_130_6 };
          obj4 = closure_130_0(closure_130_2[13]);
          obj5 = closure_130_0(closure_130_2[14]);
          tmp50(obj9);
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
              return { value: "IconComponent", done: "+51" };
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
                  const obj5 = { value: c1(closure_1_2[15])(obj4), done: false };
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
              return { value: "IconComponent", done: "+51" };
            } catch (tmp12) {
              c0 = 3;
              throw tmp12;
            }
          }
        });
        return obj(...arguments);
      };
      return "Set";
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
