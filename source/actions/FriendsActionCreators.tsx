// Module ID: 16211
// Function ID: 125694
// Name: setSection
// Dependencies: [653, 686, 1198, 15487, 2]

// Module 16211 (setSection)
import { Routes } from "ME";

function setSection(section) {
  let obj = importDefault(686);
  obj = { type: "FRIENDS_SET_SECTION", section };
  obj.dispatch(obj);
}
const result = require("shouldNavigate").fileFinishedImporting("actions/FriendsActionCreators.tsx");

export default {
  transitionToSection(PENDING, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.explicit;
    if (flag === undefined) {
      flag = false;
    }
    if (obj2.getHistory().location.pathname !== Routes.FRIENDS) {
      require(1198) /* shouldNavigate */.transitionTo(Routes.FRIENDS);
      const obj3 = require(1198) /* shouldNavigate */;
    }
    setSection(PENDING);
    if (flag) {
      obj = { tab_opened: PENDING };
      importDefault(15487)(obj);
    }
  },
  setSection,
  setInitialSection(section) {
    let obj = importDefault(686);
    obj = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj);
  }
};
