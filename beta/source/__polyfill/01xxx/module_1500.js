// Module ID: 1500
// Function ID: 1501
// Dependencies: [1494, 1498]
// Exports: createRouteFromAction

// Module 1500
import nanoid from "nanoid" /* 1494 */;
import _mod1498 from "module_1498" /* 1498 */;


export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1498;
  return obj;
};
