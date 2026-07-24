// Module ID: 4009
// Function ID: 33275
// Name: registerHost
// Dependencies: [4010, 4005]

// Module 4009 (registerHost)
const require = arg1;
const dependencyMap = arg6;
function registerHost(merged, hostName) {
  if (!(hostName in merged)) {
    merged[hostName] = [];
  }
  return merged;
}
function removePortal(children, hostName, portalName) {
  const _require = portalName;
  if (hostName in children) {
    const findIndexResult = children[hostName].findIndex((name) => name.name === closure_0);
    if (-1 !== findIndexResult) {
      children[hostName].splice(findIndexResult, 1);
      const arr = children[hostName];
    }
    return children;
  } else {
    let obj = _require(4010);
    obj = { component: reducer.name, method: removePortal.name };
    const _HermesInternal = HermesInternal;
    obj.params = "Failed to remove portal '" + portalName + "', '" + hostName + "' was not registered!";
    obj.print(obj);
    return children;
  }
}
function reducer(arg0, type) {
  type = type.type;
  const merged = Object.assign({}, arg0);
  if (require(4005).ACTIONS.REGISTER_HOST === type) {
    registerHost(merged, type.hostName);
    return merged;
  } else if (require(4005).ACTIONS.DEREGISTER_HOST === type) {
    const hostName = type.hostName;
    delete tmp[tmp2];
    return merged;
  } else if (require(4005).ACTIONS.ADD_UPDATE_PORTAL === type) {
    (function addUpdatePortal(merged, hostName, portalName, node) {
      let closure_0 = portalName;
      if (!(hostName in merged)) {
        outer1_2(merged, hostName);
      }
      let obj = merged[hostName];
      const findIndexResult = obj.findIndex((name) => name.name === closure_0);
      if (-1 !== findIndexResult) {
        merged[hostName][findIndexResult].node = node;
      } else {
        let arr = merged[hostName];
        obj = { name: portalName, node };
        arr = arr.push(obj);
      }
      return merged;
    })(merged, type.hostName, type.portalName, type.node);
    return merged;
  } else if (require(4005).ACTIONS.REMOVE_PORTAL === type) {
    removePortal(merged, type.hostName, type.portalName);
    return merged;
  } else {
    return arg0;
  }
}
arg5.reducer = reducer;
