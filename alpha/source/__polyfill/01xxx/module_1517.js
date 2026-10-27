// Module ID: 1517
// Function ID: 1518
// Dependencies: [1511, 1515]
// Exports: createRouteFromAction

// Module 1517
import nanoid from "nanoid" /* 1511 */;
import _mod1515 from "module_1515" /* 1515 */;


export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1515;
  return obj;
};
