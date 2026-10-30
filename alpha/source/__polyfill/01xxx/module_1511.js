// Module ID: 1511
// Function ID: 1512
// Dependencies: []
// Exports: createParamsFromAction

// Module 1511

export function createParamsFromAction(routeParamList) {
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
}
