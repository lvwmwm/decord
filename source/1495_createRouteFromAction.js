// Module ID: 1495
// Function ID: 1496
// Name: createRouteFromAction
// Dependencies: [1489, 1493]

// Module 1495 (createRouteFromAction)
const require = arg1;
const dependencyMap = arg6;
arg5.createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: null, name: null, params: null };
  obj[0] = "" + name + "-" + require(1489) /* nanoid */.nanoid();
  obj[1] = name;
  const obj2 = require(1489) /* nanoid */;
  obj[2] = require(1493) /* createParamsFromAction */.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
