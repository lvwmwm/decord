// Module ID: 1518
// Function ID: 1519
// Dependencies: [1512, 1516]
// Exports: createRouteFromAction

// Module 1518
import nanoid from "nanoid" /* 1512 */;
import _mod1516 from "module_1516" /* 1516 */;


export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1516;
  return obj;
};
