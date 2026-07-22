// Module ID: 4007
// Function ID: 33269
// Name: registerHost
// Dependencies: []

// Module 4007 (registerHost)
function registerHost(merged, hostName) {
  if (!(hostName in merged)) {
    merged[hostName] = [];
  }
  return merged;
}
function removePortal(closure_7, hostName, portalName) {
  hostName = portalName;
  if (hostName in closure_7) {
    const findIndexResult = closure_7[hostName].findIndex((name) => name.name === arg2);
    if (-1 !== findIndexResult) {
      closure_7[hostName].splice(findIndexResult, 1);
      const arr = closure_7[hostName];
    }
    return closure_7;
  } else {
    let obj = hostName(arg6[0]);
    obj = { component: reducer.name, method: removePortal.name };
    const _HermesInternal = HermesInternal;
    obj.params = "Failed to remove portal '" + portalName + "', '" + hostName + "' was not registered!";
    obj.print(obj);
    return closure_7;
  }
}
function reducer(arg0, type) {
  type = type.type;
  const merged = Object.assign({}, arg0);
  if (type(arg6[1]).ACTIONS.REGISTER_HOST === type) {
    registerHost(merged, type.hostName);
    return merged;
  } else if (type(arg6[1]).ACTIONS.DEREGISTER_HOST === type) {
    const hostName = type.hostName;
    delete r0[r4];
    return merged;
  } else if (type(arg6[1]).ACTIONS.ADD_UPDATE_PORTAL === type) {
    function addUpdatePortal(merged, hostName, portalName, node) {
      if (!(hostName in merged)) {
        callback(merged, hostName);
      }
      let obj = merged[hostName];
      const findIndexResult = obj.findIndex((name) => name.name === arg2);
      if (-1 !== findIndexResult) {
        merged[hostName][findIndexResult].node = node;
      } else {
        let arr = merged[hostName];
        obj = { name: portalName, node };
        arr = arr.push(obj);
      }
      return merged;
    }(merged, type.hostName, type.portalName, type.node);
    return merged;
  } else if (type(arg6[1]).ACTIONS.REMOVE_PORTAL === type) {
    removePortal(merged, type.hostName, type.portalName);
    return merged;
  } else {
    return arg0;
  }
}
arg5.reducer = reducer;
