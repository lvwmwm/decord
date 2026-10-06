// Module ID: 8806
// Function ID: 8807
// Name: activityLaunchErrorUtils
// Dependencies: [5, 8317, 1086, 1127, 8783, 2027, 8777, 5065, 7577, 2]
// Exports: getActivityLaunchErrorInfo

// Module 8806 (activityLaunchErrorUtils)
import Constants from "Constants" /* 1086 */;
import intl11 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import InteractionCallbackErrorDefault from "InteractionCallbackError" /* 5065 */;
import InteractionUtils from "InteractionUtils" /* 7577 */;
import DeveloperActivityShelfStore2 from "DeveloperActivityShelfStore" /* 8317 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8777 */;
import EmbeddedActivityClientErrorDefault from "EmbeddedActivityClientError" /* 8783 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6, fetchState;

let obj = function _getActivityLaunchErrorInfo() {
  let ClientError;
  let constants2;
  obj = _asyncToGenerator(async (arg0, value) => {
    let code;
    let detailCode;
    let obj5;
    let reason;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let message;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            let ApiError;
            detailCode = undefined;
            reason = undefined;
            const intl9 = intl11.intl;
            message = intl9.string(intl11.t["IOy+I5"]);
            const tmp82 = closure_1;
            if (closure_0 instanceof EmbeddedActivityClientErrorDefault) {
              ApiError = ClientError.ClientError;
              reason = tmp81.reason;
              fetchState = fetchState.getFetchState();
              const DeveloperMode = UserSettings.DeveloperMode;
              const setting = DeveloperMode.getSetting() && fetchState !== constants.LOADED;
              if (setting) {
                c5 = 1;
                c6 = 1;
                const obj6 = { value: obj5.fetchDeveloperApplications(), done: false };
                obj5 = EmbeddedActivitiesActionCreators;
                return obj6;
              }
            } else if (closure_0 instanceof InteractionCallbackErrorDefault) {
              ApiError = tmp7.CallbackError;
              reason = tmp81.reason;
              const obj2 = InteractionUtils;
              const result = obj2.interactionCallbackErrorReason(tmp81.reason, tmp82);
              let closure_2 = result;
              if (result == null) {
                closure_2 = message;
              }
              message = closure_2;
            } else {
              ApiError = tmp7.ApiError;
              ({ status: detailCode, code: reason, code } = closure_0);
              if (constants2.INVALID_ACTIVITY_LAUNCH_NO_ACCESS === code) {
                const intl6 = intl11.intl;
                message = intl6.string(intl11.t.GyzcrS);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER === code) {
                const intl5 = intl11.intl;
                message = intl5.string(intl11.t.zxv7EF);
              } else if (constants2.INVALID_PERMISSIONS === code) {
                const intl4 = intl11.intl;
                message = intl4.string(intl11.t.hHGrWz);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL === code) {
                const intl3 = intl11.intl;
                message = intl3.string(intl11.t.j29zCr);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_AGE_GATED === code) {
                const intl2 = intl11.intl;
                message = intl2.string(intl11.t["4WuFRE"]);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE === code) {
                const intl = intl11.intl;
                message = intl.string(intl11.t.RvkXdb);
              } else if (constants2.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM === code) {
                const intl10 = intl11.intl;
                message = intl10.string(intl11.t.uGDCcw);
              }
            }
            const obj7 = { message, errorType: ApiError, errorStatus: detailCode, errorCode: reason };
            c6 = 3;
            const obj8 = { value: obj7, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        reason = closure_0.reason;
        if (closure_132_1(closure_132_2[4]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND === reason) {
          if (closure_132_4.inDevModeForApplication(closure_1)) {
            const intl8 = closure_132_0(closure_132_2[3]).intl;
            message = intl8.string(closure_132_0(closure_132_2[3]).t.hXRXfz);
          }
        } else if (closure_132_1(closure_132_2[4]).Reasons.INVALID_CHANNEL === reason) {
          const intl7 = closure_132_0(closure_132_2[3]).intl;
          message = intl7.string(closure_132_0(closure_132_2[3]).t.j29zCr);
        } else if (closure_132_1(closure_132_2[4]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED === reason) {
          detailCode = closure_0.detailCode;
        }
      } catch (tmp77) {
        c6 = 3;
        throw tmp77;
      }
    }
  });
  return obj(...arguments);
};
const DevShelfFetchState = DeveloperActivityShelfStore2.DevShelfFetchState;
const AbortCodes = Constants.AbortCodes;
obj = { ClientError: 0, [0]: "ClientError", CallbackError: 1, [1]: "CallbackError", ApiError: 2, [2]: "ApiError" };
let result = size.fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export const ActivityLaunchFailErrorType = obj;
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo() {
  return obj(...arguments);
};
