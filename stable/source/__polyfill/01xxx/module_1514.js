// Module ID: 1514
// Function ID: 1515
// Dependencies: [1508, 1512]
// Exports: createRouteFromAction

// Module 1514
import nanoid from "nanoid" /* 1508 */;
import _mod1512 from "module_1512" /* 1512 */;


export function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1512;
  return obj;
}
