// Module ID: 11748
// Function ID: 91239
// Dependencies: []

// Module 11748
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[7]).fileFinishedImporting("actions/HubActionCreators.tsx");

export default {
  signup(email, school) {
    let obj = importDefault(dependencyMap[2]);
    obj = { url: Endpoints.HUB_WAITLIST_SIGNUP, body: obj };
    obj = {
      email,
      school,
      trackedActionData: {
        event: school(dependencyMap[3]).NetworkActionNames.HUB_WAITLIST_SIGNUP,
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
          let obj = callback(closure_2[4]);
          obj = { is_edu_email: flag };
          return obj.exact(obj);
        }
      }
    };
    const obj1 = {
      event: school(dependencyMap[3]).NetworkActionNames.HUB_WAITLIST_SIGNUP,
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
        let obj = callback(closure_2[4]);
        obj = { is_edu_email: flag };
        return obj.exact(obj);
      }
    };
    obj.rejectWithError = school(dependencyMap[5]).rejectWithMigratedError();
    return obj.post(obj);
  },
  sendVerificationEmail(arg0, arg1, id) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  verify(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  verifyCode(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
