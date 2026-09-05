// Module ID: 1496
// Function ID: 1497
// Name: createParamsFromAction
// Dependencies: []

// Module 1496 (createParamsFromAction)
arg5.createParamsFromAction = function createParamsFromAction(routeParamList) {
  routeParamList = routeParamList.routeParamList;
  ({ name, params } = routeParamList.action.payload);
  let tmp = params;
  if (undefined !== routeParamList[name]) {
    const obj = {};
    const merged = Object.assign(routeParamList[name]);
    const merged1 = Object.assign(params);
    tmp = obj;
  }
  return tmp;
};
