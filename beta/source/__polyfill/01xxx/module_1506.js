// Module ID: 1506
// Function ID: 1507
// Dependencies: [1500, 1504]
// Exports: createRouteFromAction

// Module 1506
import nanoid from "nanoid" /* 1500 */;
import _mod1504 from "module_1504" /* 1504 */;


export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1504;
  return obj;
};
