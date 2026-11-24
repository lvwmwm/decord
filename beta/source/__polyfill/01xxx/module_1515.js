// Module ID: 1515
// Function ID: 1516
// Dependencies: [1509, 1513]
// Exports: createRouteFromAction

// Module 1515
import nanoid from "nanoid" /* 1509 */;
import _mod1513 from "module_1513" /* 1513 */;


export function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1513;
  return obj;
}
