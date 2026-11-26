// Module ID: 1516
// Function ID: 1517
// Dependencies: [1510, 1514]
// Exports: createRouteFromAction

// Module 1516
import nanoid from "nanoid" /* 1510 */;
import _mod1514 from "module_1514" /* 1514 */;


export function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + obj2.nanoid(), name, params: obj3.createParamsFromAction({ action, routeParamList }) };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1514;
  return obj;
}
