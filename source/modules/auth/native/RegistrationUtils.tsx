// Module ID: 14616
// Function ID: 110217
// Name: trackRegTransition
// Dependencies: []
// Exports: BackButtonWithTracking, getCommonErrorDetails, getTrackRegTransition, hasAllRegistrationFieldsCompleted

// Module 14616 (trackRegTransition)
function trackRegTransition(overrideRegistrationOptions) {
  let actionType;
  let details;
  let fromStep;
  let step;
  let toStep;
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  const displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
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
  let obj = importDefault(dependencyMap[7]);
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ clearRegistrationErrorMessage: closure_6, useRegistrationUIStore: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/auth/native/RegistrationUtils.tsx");

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
  const arg1 = closure_0;
  return (arg0) => {
    let actionType;
    let details;
    let overrideRegistrationOptions;
    let step;
    let toStep;
    ({ step, actionType } = arg0);
    ({ toStep, details, overrideRegistrationOptions } = arg0);
    if (actionType === constants2.VIEWED) {
      if (step === constants.CAPTCHA) {
        let obj = { step, fromStep: arg0.current, actionType };
        callback(obj);
      }
    }
    if (actionType === constants2.VIEWED) {
      if (null != step) {
        obj = { step, fromStep: arg0.current, actionType };
        callback(obj);
      }
      arg0.current = step;
    } else if (null != step) {
      obj = { step, toStep, actionType, details, overrideRegistrationOptions };
      callback(obj);
    }
    return tmp8;
  };
}
export const BackButtonWithTracking = function BackButtonWithTracking(arg0) {
  const callback = React.useContext(callback(dependencyMap[8]).TrackRegistrationContext);
  ({ destinationStep: closure_1, onPress: closure_2 } = arg0);
  const obj = {};
  const merged = Object.assign(arg0);
  obj["onPress"] = function onPress() {
    if (null != callback2) {
      callback3();
      const obj = { step: closure_1, actionType: constants.VIEWED };
      callback(obj);
      callback2();
    }
  };
  return jsx(callback(dependencyMap[9]).HeaderBackButton, obj);
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
