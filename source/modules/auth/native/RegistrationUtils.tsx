// Module ID: 14739
// Function ID: 112424
// Name: trackRegTransition
// Dependencies: [31, 4115, 8486, 14731, 14732, 653, 33, 675, 14729, 5094, 2]
// Exports: BackButtonWithTracking, getCommonErrorDetails, getTrackRegTransition, hasAllRegistrationFieldsCompleted

// Module 14739 (trackRegTransition)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackRegTransition(overrideRegistrationOptions) {
  let actionType;
  let details;
  let fromStep;
  let step;
  let toStep;
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
  if (null == registrationOptions) {
    registrationOptions = state.getState().registrationOptions;
  }
  let invite = null;
  if (null != displayedInviteCode) {
    invite = invite.getInvite(displayedInviteCode);
  }
  let str = null;
  if (null != invite) {
    str = "invite";
  }
  let email;
  if (null != registrationOptions) {
    email = registrationOptions.email;
  }
  let str2 = "email";
  if (null == email) {
    let phone;
    if (null != registrationOptions) {
      phone = registrationOptions.phone;
    }
    str2 = null;
    if (null != phone) {
      str2 = "phone";
    }
  }
  let obj = importDefault(675);
  obj = { step, identity_type: str2, action_type: actionType, action_details: details, registration_source: str };
  let code;
  if (null != invite) {
    code = invite.code;
  }
  obj.invite_code = code;
  let id;
  if (null != invite) {
    const channel = invite.channel;
    if (null != channel) {
      id = channel.id;
    }
  }
  obj.invite_channel_id = id;
  let type;
  if (null != invite) {
    const channel2 = invite.channel;
    if (null != channel2) {
      type = channel2.type;
    }
  }
  obj.invite_channel_type = type;
  let id1;
  if (null != invite) {
    const guild = invite.guild;
    if (null != guild) {
      id1 = guild.id;
    }
  }
  obj.invite_guild_id = id1;
  let id2;
  if (null != invite) {
    const inviter = invite.inviter;
    if (null != inviter) {
      id2 = inviter.id;
    }
  }
  obj.invite_inviter_id = id2;
  obj.from_step = fromStep;
  obj.to_step = toStep;
  obj.track(AnalyticEvents.REGISTER_TRANSITION, obj);
}
({ clearRegistrationErrorMessage: closure_6, useRegistrationUIStore: closure_7 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = RegistrationTransitionActionTypes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/RegistrationUtils.tsx");

export const hasAllRegistrationFieldsCompleted = function hasAllRegistrationFieldsCompleted(email, isConsentRequired) {
  let tmp = null != email.email;
  if (!tmp) {
    tmp = null != email.phoneToken;
  }
  if (tmp) {
    let tmp2 = null != email.username;
    if (tmp2) {
      let tmp3 = null != email.password;
      if (tmp3) {
        let tmp4 = null != email.birthday;
        if (tmp4) {
          let tmp5 = null != email.consent;
          if (tmp5) {
            let tmp6 = !isConsentRequired.isConsentRequired;
            if (!tmp6) {
              tmp6 = true === email.consent;
            }
            tmp5 = tmp6;
          }
          tmp4 = tmp5;
        }
        tmp3 = tmp4;
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};
export { trackRegTransition };
export function getTrackRegTransition(closure_0) {
  return (arg0) => {
    let actionType;
    let details;
    let overrideRegistrationOptions;
    let step;
    let toStep;
    ({ step, actionType } = arg0);
    ({ toStep, details, overrideRegistrationOptions } = arg0);
    if (actionType === outer1_9.VIEWED) {
      if (step === outer1_8.CAPTCHA) {
        let obj = { step, fromStep: ref.current, actionType };
        outer1_12(obj);
      }
    }
    if (actionType === outer1_9.VIEWED) {
      if (null != step) {
        obj = { step, fromStep: ref.current, actionType };
        outer1_12(obj);
      }
      ref.current = step;
    } else if (null != step) {
      obj = { step, toStep, actionType, details, overrideRegistrationOptions };
      outer1_12(obj);
    }
    return tmp8;
  };
}
export const BackButtonWithTracking = function BackButtonWithTracking(arg0) {
  let dependencyMap;
  let importDefault;
  _require = React.useContext(_require(14729).TrackRegistrationContext);
  ({ destinationStep: importDefault, onPress: dependencyMap } = arg0);
  let obj = {};
  const merged = Object.assign(arg0);
  obj["onPress"] = function onPress() {
    if (null != callback2) {
      outer1_6();
      const obj = { step: closure_1, actionType: outer1_9.VIEWED };
      callback(obj);
      callback2();
    }
  };
  return jsx(_require(5094).HeaderBackButton, {});
};
export const getCommonErrorDetails = function getCommonErrorDetails(error_code) {
  if (-1 === error_code) {
    const _HermesInternal7 = HermesInternal;
    return "" + error_code + ": Captcha was not completed";
  } else if (0 === error_code) {
    const _HermesInternal6 = HermesInternal;
    return "" + error_code + ": Internal server error";
  } else if (40333 === error_code) {
    const _HermesInternal5 = HermesInternal;
    return "" + error_code + ": Blocked by proxy";
  } else if (50022 === error_code) {
    const _HermesInternal4 = HermesInternal;
    return "" + error_code + ": Phone number invalid";
  } else if (70005 === error_code) {
    const _HermesInternal3 = HermesInternal;
    return "" + error_code + ": Phone number not mobile";
  } else if (70003 === error_code) {
    const _HermesInternal2 = HermesInternal;
    return "" + error_code + ": Unable to send sms to phone number";
  } else {
    if (70008 !== error_code) {
      if (70011 !== error_code) {
        if (undefined === error_code) {
          return "No error code";
        } else {
          return error_code.toString();
        }
      }
    }
    const _HermesInternal = HermesInternal;
    return "" + error_code + ": Phone number already associated with an account";
  }
};
