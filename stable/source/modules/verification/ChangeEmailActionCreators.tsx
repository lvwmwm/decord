// Module ID: 7077
// Function ID: 7078
// Name: ChangeEmailActionCreators
// Dependencies: [5, 1072, 6747, 1260, 2]
// Exports: confirmEmailChange, sendConfirmationCode

// Module 7077 (ChangeEmailActionCreators)
import Constants from "Constants" /* 1072 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6747 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _confirmEmailChange() {
  obj = _asyncToGenerator(async (code) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj5;
      const request = { url: constants.USER_EMAIL_VERIFY_CODE, body: obj4, trackedActionData: obj5, rejectWithError: false };
      obj4 = { code };
      obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE };
      const post = TrackedHTTPUtilsDefault.post;
      TrackedHTTPUtilsDefault;
      await post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj2 = { url: Endpoints.USER_EMAIL, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: { is_resend: flag } }, rejectWithError: false };
  obj = TrackedHTTPUtilsDefault;
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: { is_resend: flag } });
  return obj.put(obj2);
}
export function confirmEmailChange() {
  return obj(...arguments);
}
