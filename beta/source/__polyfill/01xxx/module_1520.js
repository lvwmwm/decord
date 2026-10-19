// Module ID: 1520
// Function ID: 1521
// Dependencies: [1514, 1518]
// Exports: createRouteFromAction

// Module 1520
import nanoid from "nanoid" /* 1514 */;
import _mod1518 from "module_1518" /* 1518 */;


export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1518;
  return obj;
};
