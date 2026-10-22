// Module ID: 11308
// Function ID: 11309
// Name: tryJoinAsFrame
// Dependencies: [5, 4820, 5698, 1087, 7393, 11309, 11307, 11310, 4890, 12641, 2]
// Exports: tryJoinAsFrame

// Module 11308 (tryJoinAsFrame)
import Constants from "Constants" /* 1087 */;
import getOrFetchApplicationDefault from "getOrFetchApplication" /* 11307 */;
import canLaunchContextlessFrame2 from "canLaunchContextlessFrame" /* 11309 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import PresenceStore from "PresenceStore" /* 5698 */;
import size from "module_2" /* 2 */;

let c8, c9;

let obj = function _tryJoinAsFrame() {
  let applicationActivity;
  obj = _asyncToGenerator(async (arg0, value) => {
    let activity;
    let analyticsLocations;
    let applicationId;
    let c2;
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let locationObject;
    let obj4;
    let obj8;
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let sessionId;
        let channelId;
        let messageId;
        let intent;
        let _location;
        let userId;
        let canLaunchContextlessFrame;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp4;
            sessionId = undefined;
            applicationId = undefined;
            channelId = undefined;
            messageId = undefined;
            intent = undefined;
            activity = undefined;
            _location = undefined;
            userId = closure_0.userId;
            ({ sessionId: c2, applicationId } = closure_0);
            ({ channelId: c4, messageId: c5, intent: c6, activity } = closure_0);
            let applicationActivity2 = activity;
            const tmp55 = closure_0;
            if (activity == null) {
              applicationActivity2 = applicationActivity.getApplicationActivity(userId, applicationId);
            }
            activity = applicationActivity2;
            const embedded = tmp55.embedded;
            const tmp46 = canLaunchContextlessFrame2;
            let closure_5 = tmp46;
            canLaunchContextlessFrame = tmp46.canLaunchContextlessFrame;
            c8 = 1;
            c9 = 1;
            const obj5 = { value: getOrFetchApplicationDefault(applicationId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (canLaunchContextlessFrame(value)) {
          let tmp28Result;
          _location = closure_134_4.getEmbeddedActivityForUserId(userId, applicationId, true);
          if (null != _location) {
            const obj7 = { applicationId, activityChannelId: obj4.getEmbeddedActivityLocationChannelId(_location.location), source: closure_0.source, locationObject, analyticsLocations };
            const tmp28 = closure_134_1(closure_134_2[7]);
            obj4 = closure_134_0(closure_134_2[8]);
            locationObject = closure_0.locationObject ?? {};
            analyticsLocations = closure_0.analyticsLocations ?? [];
            tmp28Result = tmp28(obj7);
          } else {
            obj = { application: obj8, userId, activity, sessionId, channelId, messageId, intent };
            obj8 = { id: applicationId };
            tmp28Result = closure_134_1(closure_134_2[9])(obj);
          }
          c9 = 3;
          const obj9 = { value: tmp28Result, done: true };
          return obj9;
        }
        c9 = 3;
        return { value: null, done: true };
      } catch (tmp49) {
        c9 = 3;
        throw tmp49;
      }
    }
  });
  return obj(...arguments);
};
const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("actions/GamesActionCreators.shared.tsx");

export const tryJoinAsFrame = function tryJoinAsFrame() {
  return obj(...arguments);
};
