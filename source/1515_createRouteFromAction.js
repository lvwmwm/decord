// Module ID: 1515
// Function ID: 1516
// Name: createRouteFromAction
// Dependencies: [1509, 1513]

// Module 1515 (createRouteFromAction)
const require = arg1;
const dependencyMap = arg6;
arg5.createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: null, name: null, params: null };
  obj[0] = "" + name + "-" + require(1509) /* nanoid */.nanoid();
  obj[1] = name;
  const obj2 = require(1509) /* nanoid */;
  obj[2] = require(1513) /* createParamsFromAction */.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
