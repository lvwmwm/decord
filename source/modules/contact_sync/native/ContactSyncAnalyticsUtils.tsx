// Module ID: 11700
// Function ID: 90865
// Name: Steps
// Dependencies: []
// Exports: trackFlowEnd, trackFlowStart, trackFlowStep

// Module 11700 (Steps)
let closure_3 = importDefault(dependencyMap[0]);
const getIsOnboarding = arg1(dependencyMap[1]).getIsOnboarding;
const ContactPermissions = arg1(dependencyMap[2]).ContactPermissions;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const obj = { INITIALIZED: "Flow Initialized", LANDING: "Landing", PERMISSION_REQUESTED: "Contacts Permission Requested", NAME_INPUT: "Name Input", SUGGESTIONS_RESULTS: "Suggestions Results", CONTACT_INVITES: "Contact Invites", ADD_PHONE_NUMBER: "Add Phone Number", VERIFY_PHONE_NUMBER: "Verify Phone Number", PASSWORD_CONFIRM: "Password Confirmation", COMPLETE: "Complete" };
let closure_8 = null;
let closure_9 = 0;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx");

export const Steps = obj;
export const CONTACT_SYNC_ONBOARDING_LOCATION = "Onboarding";
export const trackFlowStart = function trackFlowStart(arg0) {
  const arg1 = arg0;
  const LANDING = obj.LANDING;
  let closure_9 = Date.now();
  const currentUser = currentUser.getCurrentUser();
  let phone;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  let closure_1 = null != phone;
  const obj = arg1(dependencyMap[4]);
  const result = obj.checkContactPermissions();
  result.then((arg0) => {
    let tmp = null;
    if (arg0 !== constants.NOT_DETERMINED) {
      let str = "denied";
      if (arg0 === constants.AUTHORIZED) {
        str = "accepted";
      }
      tmp = str;
    }
    let obj = callback(closure_2[5]);
    obj = {};
    const merged = Object.assign(arg0);
    obj["flow_type"] = "Contact Sync";
    obj["from_step"] = constants3.INITIALIZED;
    obj["to_step"] = constants3.LANDING;
    obj["skip"] = false;
    obj["back"] = false;
    obj["seconds_on_from_step"] = 0;
    obj["has_phone_number"] = callback;
    obj["mobile_contacts_permission"] = tmp;
    obj.track(constants2.CONTACT_SYNC_FLOW_KEY, obj);
  });
};
export const trackFlowStep = function trackFlowStep(ADD_PHONE_NUMBER, skip, arg2, location) {
  const tmp = getIsOnboarding();
  const timestamp = Date.now();
  const result = (timestamp - closure_9) / 1000;
  let obj = importDefault(dependencyMap[5]);
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
    skip(dependencyMap[6]).trackNUFStep(closure_8, ADD_PHONE_NUMBER, obj);
    const obj3 = skip(dependencyMap[6]);
  }
  closure_9 = timestamp;
  closure_8 = ADD_PHONE_NUMBER;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  const timestamp = Date.now();
  let obj = importDefault(dependencyMap[5]);
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
  obj["to_step"] = obj.COMPLETE;
  obj["skip"] = flag;
  obj["back"] = false;
  obj["seconds_on_from_step"] = (timestamp - closure_9) / 1000;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  closure_8 = null;
};
