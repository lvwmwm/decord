// Module ID: 15578
// Function ID: 15579
// Name: RegistrationUtils
// Dependencies: [19, 4817, 8201, 15570, 15571, 1074, 21, 1241, 15567, 5943, 2]
// Exports: BackButtonWithTracking, getCommonErrorDetails, getTrackRegTransition, hasAllRegistrationFieldsCompleted

// Module 15578 (RegistrationUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react from "react" /* 19 */;
import InviteStore from "InviteStore" /* 4817 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8201 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function trackRegTransition(overrideRegistrationOptions) {
  let actionType;
  let code;
  let details;
  let fromStep;
  let id;
  let id1;
  let id2;
  let step;
  let toStep;
  let type;
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  const displayedInviteCode = DisplayedInviteStore.getDisplayedInviteCode();
  if (registrationOptions == null) {
    registrationOptions = metroImportDefault.getState().registrationOptions;
  }
  let invite = null;
  if (null != displayedInviteCode) {
    invite = InviteStore.getInvite(displayedInviteCode);
  }
  let str = null;
  if (null != invite) {
    str = "invite";
  }
  let email;
  if (registrationOptions != null) {
    email = registrationOptions.email;
  }
  let str2 = "email";
  if (null == email) {
    let phone;
    if (registrationOptions != null) {
      phone = registrationOptions.phone;
    }
    str2 = null;
    if (null != phone) {
      str2 = "phone";
    }
  }
  const obj = { step, identity_type: str2, action_type: actionType, action_details: details, registration_source: str, invite_code: code, invite_channel_id: id, invite_channel_type: type, invite_guild_id: id1, invite_inviter_id: id2, from_step: fromStep, to_step: toStep };
  code = undefined;
  const track = AnalyticsUtilsDefault.track;
  const REGISTER_TRANSITION = AnalyticEvents.REGISTER_TRANSITION;
  AnalyticsUtilsDefault;
  if (invite != null) {
    code = invite.code;
  }
  id = undefined;
  if (invite != null) {
    const channel = invite.channel;
    if (channel != null) {
      id = channel.id;
    }
  }
  type = undefined;
  if (invite != null) {
    const channel2 = invite.channel;
    if (channel2 != null) {
      type = channel2.type;
    }
  }
  id1 = undefined;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id1 = guild.id;
    }
  }
  id2 = undefined;
  if (invite != null) {
    const inviter = invite.inviter;
    if (inviter != null) {
      id2 = inviter.id;
    }
  }
  track(REGISTER_TRANSITION, obj);
}
({ clearRegistrationErrorMessage: metroRequire, useRegistrationUIStore: metroImportDefault } = RegistrationUIStore);
({ RegisterTransitionSteps: metroImportAll, RegistrationTransitionActionTypes: c9 } = RegistrationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUtils.tsx");

export const hasAllRegistrationFieldsCompleted = function hasAllRegistrationFieldsCompleted(email, isConsentRequired) {
  isConsentRequired = isConsentRequired.isConsentRequired;
  let tmp = null != email.email || null != email.phoneToken;
  if (tmp) {
    let tmp2 = null != email.username;
    if (tmp2) {
      let tmp3 = null != email.password;
      if (tmp3) {
        let tmp4 = null != email.birthday;
        if (tmp4) {
          let tmp5 = null != email.consent;
          if (tmp5) {
            let tmp6 = !isConsentRequired;
            if (isConsentRequired) {
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
export function getTrackRegTransition(arg0) {
  const ref = arg0;
  return (arg0) => {
    let actionType;
    let details;
    let overrideRegistrationOptions;
    let step;
    let toStep;
    ({ step, actionType, toStep, details, overrideRegistrationOptions } = arg0);
    const tmp = constants;
    if (actionType === constants.VIEWED) {
      if (step === metroImportAll.CAPTCHA) {
        const obj = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj);
      }
    }
    if (actionType === tmp.VIEWED) {
      if (null != step) {
        const obj2 = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj2);
      }
      ref.current = step;
    } else if (null != step) {
      const obj3 = { step, toStep, actionType, details, overrideRegistrationOptions };
      trackRegTransition(obj3);
    }
    return tmp9;
  };
}
export const BackButtonWithTracking = function BackButtonWithTracking(arg0) {
  let closure_0;
  let step;
  _require = react.useContext(require("Auth").TrackRegistrationContext);
  ({ destinationStep: importDefault, onPress: dependencyMap } = arg0);
  const HeaderBackButton = require("module_5943").HeaderBackButton;
  const merged = Object.assign(arg0);
  return <HeaderBackButton onPress={function onPress() {
    if (null != dependencyMap) {
      metroRequire();
      const obj = { step: importDefault, actionType: constants.VIEWED };
      closure_0(obj);
      tmp();
    }
  }} />;
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
