// Module ID: 11766
// Function ID: 91336
// Dependencies: [5, 653, 4942, 480, 1361, 507, 686, 2]

// Module 11766
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
const result = require("makeRequest").fileFinishedImporting("actions/HubActionCreators.tsx");

export default {
  signup(email, school) {
    let obj = importDefault(4942);
    obj = { url: Endpoints.HUB_WAITLIST_SIGNUP, body: obj };
    obj = {
      email,
      school,
      trackedActionData: {
        event: require(480) /* isThrottled */.NetworkActionNames.HUB_WAITLIST_SIGNUP,
        properties(body) {
          let email_domain;
          if (null != body) {
            body = body.body;
            if (null != body) {
              email_domain = body.email_domain;
            }
          }
          let flag = false;
          if (null != email_domain) {
            const parts = email_domain.split(".");
            flag = -1 !== parts.indexOf("edu");
          }
          let obj = outer1_0(outer1_2[4]);
          obj = { is_edu_email: flag };
          return obj.exact(obj);
        }
      }
    };
    const obj1 = {
      event: require(480) /* isThrottled */.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties(body) {
        let email_domain;
        if (null != body) {
          body = body.body;
          if (null != body) {
            email_domain = body.email_domain;
          }
        }
        let flag = false;
        if (null != email_domain) {
          const parts = email_domain.split(".");
          flag = -1 !== parts.indexOf("edu");
        }
        let obj = outer1_0(outer1_2[4]);
        obj = { is_edu_email: flag };
        return obj.exact(obj);
      }
    };
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.post(obj);
  },
  sendVerificationEmail(arg0, arg1, id) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  verify(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  verifyCode(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
