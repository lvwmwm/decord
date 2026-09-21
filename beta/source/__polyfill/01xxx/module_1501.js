// Module ID: 1501
// Function ID: 1502
// Dependencies: []
// Exports: createParamsFromAction

// Module 1501

export const createParamsFromAction = function createParamsFromAction(routeParamList) {
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
