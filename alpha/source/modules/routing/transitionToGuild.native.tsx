// Module ID: 7168
// Function ID: 7169
// Name: transitionToGuild
// Dependencies: [32, 1072, 7169, 1099, 2]
// Exports: transitionToGuild

// Module 7168 (transitionToGuild)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7169 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const first = _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0];
  const transitionTo = router_utils.transitionTo;
  const obj2 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, first);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj2);
}
