// Module ID: 19542
// Function ID: 19543
// Name: FriendsActionCreators
// Dependencies: [1072, 572, 1100, 18784, 2]

// Module 19542 (FriendsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import size from "module_2" /* 2 */;

let tmp5;
const trackFriendListClickedDefault = tmp5(18784);
const Routes = Constants.Routes;
let obj = {
  transitionToSection(PENDING, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.explicit;
    if (flag === undefined) {
      flag = false;
    }
    const obj2 = router_utils;
    if (obj2.getHistory().location.pathname !== Routes.FRIENDS) {
      const tmpResult = router_utils;
      tmpResult.transitionTo(tmp3.FRIENDS);
    }
    const obj3 = { type: "FRIENDS_SET_SECTION", section: PENDING };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj3);
    if (flag) {
      const obj5 = { tab_opened: PENDING };
      trackFriendListClickedDefault(obj5);
    }
  },
  setSection(section) {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRIENDS_SET_SECTION", section };
    obj.dispatch(obj2);
  },
  setInitialSection(section) {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/FriendsActionCreators.tsx");

export default obj;
