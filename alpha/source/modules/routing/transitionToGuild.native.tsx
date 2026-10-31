// Module ID: 7522
// Function ID: 7523
// Name: transitionToGuild
// Dependencies: [32, 1072, 7392, 5609, 1099, 2]
// Exports: transitionToGuild

// Module 7522 (transitionToGuild)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5609 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7392 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const first = _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0];
  const obj2 = DeprecatedLayoutAnimation;
  const result = obj2.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "__closure", delete: "assign" });
  const transitionTo = router_utils.transitionTo;
  const obj3 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, first);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj3);
}
