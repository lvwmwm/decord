// Module ID: 11711
// Function ID: 90927
// Name: Steps
// Dependencies: [1849, 11706, 11707, 653, 11709, 675, 11712, 2]
// Exports: trackFlowEnd, trackFlowStart, trackFlowStep

// Module 11711 (Steps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { getIsOnboarding } from "initialValues";
import { ContactPermissions } from "ContactSyncLandingPage";
import { AnalyticEvents } from "ME";

const require = arg1;
let obj = { INITIALIZED: "Flow Initialized", LANDING: "Landing", PERMISSION_REQUESTED: "Contacts Permission Requested", NAME_INPUT: "Name Input", SUGGESTIONS_RESULTS: "Suggestions Results", CONTACT_INVITES: "Contact Invites", ADD_PHONE_NUMBER: "Add Phone Number", VERIFY_PHONE_NUMBER: "Verify Phone Number", PASSWORD_CONFIRM: "Password Confirmation", COMPLETE: "Complete" };
let c8 = null;
let c9 = 0;
let result = require("ContactSyncLandingPage").fileFinishedImporting("modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx");

export const Steps = obj;
export const CONTACT_SYNC_ONBOARDING_LOCATION = "Onboarding";
export const trackFlowStart = function trackFlowStart(arg0) {
  const _require = arg0;
  const LANDING = obj.LANDING;
  let closure_9 = Date.now();
  currentUser = currentUser.getCurrentUser();
  let phone;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  let closure_1 = null != phone;
  obj = _require(11709);
  const result = obj.checkContactPermissions();
  result.then((arg0) => {
    let tmp = null;
    if (arg0 !== outer1_5.NOT_DETERMINED) {
      let str = "denied";
      if (arg0 === outer1_5.AUTHORIZED) {
        str = "accepted";
      }
      tmp = str;
    }
    let obj = callback(outer1_2[5]);
    obj = {};
    const merged = Object.assign(closure_0);
    obj["flow_type"] = "Contact Sync";
    obj["from_step"] = outer1_7.INITIALIZED;
    obj["to_step"] = outer1_7.LANDING;
    obj["skip"] = false;
    obj["back"] = false;
    obj["seconds_on_from_step"] = 0;
    obj["has_phone_number"] = callback;
    obj["mobile_contacts_permission"] = tmp;
    obj.track(outer1_6.CONTACT_SYNC_FLOW_KEY, obj);
  });
};
export const trackFlowStep = function trackFlowStep(ADD_PHONE_NUMBER, skip, arg2, location) {
  const tmp = getIsOnboarding();
  const timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(location);
  let str = "Onboarding";
  if (!tmp) {
    let _location;
    if (null != location) {
      _location = location.location;
    }
    str = _location;
  }
  obj["location"] = str;
  obj["flow_type"] = "Contact Sync";
  obj["from_step"] = closure_8;
  obj["to_step"] = ADD_PHONE_NUMBER;
  obj["skip"] = skip;
  obj["back"] = arg2;
  obj["seconds_on_from_step"] = result;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  if (tmp) {
    obj = { skip };
    require(11712) /* trackNUFStep */.trackNUFStep(closure_8, ADD_PHONE_NUMBER, obj);
    const obj3 = require(11712) /* trackNUFStep */;
  }
  closure_8 = ADD_PHONE_NUMBER;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  const timestamp = Date.now();
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(location);
  let str = "Onboarding";
  if (!tmp) {
    let _location;
    if (null != location) {
      _location = location.location;
    }
    str = _location;
  }
  obj["location"] = str;
  obj["flow_type"] = "Contact Sync";
  obj["from_step"] = c8;
  obj["to_step"] = obj.COMPLETE;
  obj["skip"] = flag;
  obj["back"] = false;
  obj["seconds_on_from_step"] = (timestamp - c9) / 1000;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  c8 = null;
};
