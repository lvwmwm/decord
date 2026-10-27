// Module ID: 7450
// Function ID: 7451
// Name: transitionToGuild
// Dependencies: [32, 1084, 7322, 5596, 1111, 2]
// Exports: transitionToGuild

// Module 7450 (transitionToGuild)
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5596 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7322 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const first = _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0];
  const obj2 = DeprecatedLayoutAnimation;
  const result = obj2.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "k", delete: "guildId" });
  const transitionTo = router_utils.transitionTo;
  const obj3 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, first);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj3);
};
