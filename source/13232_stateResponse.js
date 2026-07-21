// Module ID: 13232
// Function ID: 100410
// Name: stateResponse
// Dependencies: []

// Module 13232 (stateResponse)
arg5.assertHasStateResponsePlugin = undefined;
arg5.default = undefined;
arg5.hasStateResponsePlugin = undefined;
arg5.default = function stateResponse() {
  return (arg0) => {
    const features = {
      stateActionComplete(name, action) {
        return name.send("state.action.complete", { name, action }, arguments.length > 2 && undefined !== arguments[2] && arguments[2]);
      },
      stateValuesResponse(path, value) {
        const tmp = arguments.length > 2 && undefined !== arguments[2];
        let tmp2 = !tmp;
        if (tmp) {
          tmp2 = arguments[2];
        }
        const obj = { path, value, valid: tmp2 };
        return path.send("state.values.response", obj);
      },
      stateKeysResponse(path, keys) {
        const tmp = arguments.length > 2 && undefined !== arguments[2];
        let tmp2 = !tmp;
        if (tmp) {
          tmp2 = arguments[2];
        }
        const obj = { path, keys, valid: tmp2 };
        return path.send("state.keys.response", obj);
      },
      stateValuesChange(changes) {
        let sendResult = changes.length > 0;
        if (sendResult) {
          const obj = { changes };
          sendResult = changes.send("state.values.change", obj);
        }
        return sendResult;
      },
      stateBackupResponse(state) {
        return state.send("state.backup.response", { state });
      }
    };
    return { features };
  };
};
function hasStateResponsePlugin(stateActionComplete) {
  let tmp = stateActionComplete;
  if (stateActionComplete) {
    tmp = "stateActionComplete" in stateActionComplete;
  }
  if (tmp) {
    tmp = "function" === typeof stateActionComplete.stateActionComplete;
  }
  if (tmp) {
    tmp = "stateValuesResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = "function" === typeof stateActionComplete.stateValuesResponse;
  }
  if (tmp) {
    tmp = "stateKeysResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = "function" === typeof stateActionComplete.stateKeysResponse;
  }
  if (tmp) {
    tmp = "stateValuesChange" in stateActionComplete;
  }
  if (tmp) {
    tmp = "function" === typeof stateActionComplete.stateValuesChange;
  }
  if (tmp) {
    tmp = "stateBackupResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = "function" === typeof stateActionComplete.stateBackupResponse;
  }
  return tmp;
}
arg5.hasStateResponsePlugin = hasStateResponsePlugin;
arg5.assertHasStateResponsePlugin = function assertHasStateResponsePlugin(stateActionComplete) {
  if (!hasStateResponsePlugin(stateActionComplete)) {
    const _Error = Error;
    const error = new Error("This Reactotron client has not had the state responses plugin applied to it. Make sure that you add `use(stateResponse())` before adding this plugin.");
    throw error;
  }
};
