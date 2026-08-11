// Module ID: 1514
// Function ID: 1515
// Name: createRouteFromAction
// Dependencies: [1508, 1512]

// Module 1514 (createRouteFromAction)
const require = arg1;
const dependencyMap = arg6;
arg5.createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: null, name: null, params: null };
  obj[0] = "" + name + "-" + require(1508) /* nanoid */.nanoid();
  obj[1] = name;
  const obj2 = require(1508) /* nanoid */;
  obj[2] = require(1512) /* createParamsFromAction */.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
