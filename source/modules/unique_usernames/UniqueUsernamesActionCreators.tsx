// Module ID: 13666
// Function ID: 104955
// Dependencies: [5, 653, 1212, 686, 507, 675, 4942, 480, 4029, 2]

// Module 13666
import expandLocation from "expandLocation";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ AnalyticEvents: closure_4, Endpoints: closure_5 } = ME);
const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesActionCreators.tsx");

export default {
  resetSuggestions() {
    return importDefault(686).dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
  },
  fetchSuggestionsRegistration(globalName) {
    let num = arg1;
    let closure_0 = globalName;
    if (arg1 === undefined) {
      num = 1500;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  attemptUsername(arg0, arg1, outer1_2, outer1_3) {
    let str = arg1;
    let flag = outer1_2;
    let flag2 = outer1_3;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      str = "modal";
    }
    if (flag === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return flag2(tmp)();
  }
};
