// Module ID: 17883
// Function ID: 17884
// Name: FriendsActionCreators
// Dependencies: [1078, 577, 1105, 17230, 2]

// Module 17883 (FriendsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const router_utils = tmp(1105);
const trackFriendListClickedDefault = tmp5(17230);
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("actions/FriendsActionCreators.tsx");

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
      router_utils.transitionTo(tmp3.FRIENDS);
      const tmpResult = router_utils;
    }
    obj2 = router_utils;
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_SECTION", section: PENDING });
    if (flag) {
      const obj5 = { tab_opened: PENDING };
      trackFriendListClickedDefault(obj5);
    }
  },
  setSection(section) {
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_SECTION", section });
  },
  setInitialSection(section) {
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section });
  }
};
