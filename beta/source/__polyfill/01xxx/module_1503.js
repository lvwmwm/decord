// Module ID: 1503
// Function ID: 1504
// Dependencies: [1497, 1501]
// Exports: createRouteFromAction

// Module 1503
import nanoid from "nanoid" /* 1497 */;
import _mod1501 from "module_1501" /* 1501 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1501.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
