// Module ID: 1512
// Function ID: 1513
// Dependencies: [1506, 1510]
// Exports: createRouteFromAction

// Module 1512
import nanoid from "nanoid" /* 1506 */;
import _mod1510 from "module_1510" /* 1510 */;


export function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1510;
  return obj;
}
