// Module ID: 6835
// Function ID: 6836
// Name: transitionToGuild
// Dependencies: [32, 1071, 6836, 1098, 2]
// Exports: transitionToGuild

// Module 6835 (transitionToGuild)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 6836 */;
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
