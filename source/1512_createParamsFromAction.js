// Module ID: 1512
// Function ID: 1513
// Name: createParamsFromAction
// Dependencies: []

// Module 1512 (createParamsFromAction)
arg5.createParamsFromAction = function createParamsFromAction(routeParamList) {
  let name;
  let params;
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
