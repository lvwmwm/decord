// Module ID: 1513
// Function ID: 1514
// Dependencies: [1507, 1511]
// Exports: createRouteFromAction

// Module 1513
import nanoid from "nanoid" /* 1507 */;
import _mod1511 from "module_1511" /* 1511 */;


export function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1511;
  return obj;
}
