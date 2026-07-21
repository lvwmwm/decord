// Module ID: 7918
// Function ID: 63112
// Name: _fetchApplicationCommandIndex
// Dependencies: []
// Exports: fetchApplicationCommandIndex, requestApplicationCommandIndex

// Module 7918 (_fetchApplicationCommandIndex)
async function _fetchApplicationCommandIndex(arg0, arg1, arg2) {
  function end(error) {
    const diff = performance.now() - undefined;
    let obj = callback(closure_2[5]);
    obj = { duration_ms: diff, error: error.error, aborted: globalThis.c.signal.aborted, include_applications: true, retries: Math.max(undefined - 1, 0), kind: null, command_type: null, url: undefined, target_type: type.type, target_id: callback2(type), failure_statuses: undefined };
    obj.track(constants.APPLICATION_COMMAND_PERFORMANCE, obj);
  }
  return function*(type) {
    let end = type;
    let closure_2;
    let closure_3;
    let closure_4;
    let closure_5;
    let fetch;
    function retry() {
      return _retry(...arguments);
    }
    async function _retry(arg0, arg1) {
      if (closure_4 >= 3) {
        const arr = arr.push(1002);
        let obj = { error: true };
        callback3(obj);
        obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: arg0 };
        let dispatchResult = callback(closure_2[2]).dispatch(obj);
        const obj2 = callback(closure_2[2]);
      } else {
        yield new Promise((arg0) => setTimeout(arg0, arg0));
        dispatchResult = callback2();
      }
      return dispatchResult;
    }
    end = function end(error) {
      const diff = performance.now() - closure_3;
      let obj = arg1(closure_2[5]);
      obj = { duration_ms: diff, error: error.error, aborted: arg1.signal.aborted, include_applications: true, retries: Math.max(closure_4 - 1, 0), kind: null, command_type: null, url: closure_2, target_type: error.type, target_id: _retry(error), failure_statuses: constants };
      obj.track(constants.APPLICATION_COMMAND_PERFORMANCE, obj);
    };
    closure_3 = performance.now();
    closure_4 = 0;
    closure_5 = [];
    type = type.type;
    if ("channel" === type) {
      closure_2 = fetch.APPLICATION_COMMAND_INDEX_CHANNEL(type.channelId);
    } else if ("guild" === type) {
      closure_2 = fetch.APPLICATION_COMMAND_INDEX_GUILD(type.guildId);
    } else if ("user" === type) {
      closure_2 = fetch.APPLICATION_COMMAND_INDEX_USER;
    } else if ("application" === type) {
      closure_2 = fetch.APPLICATION_COMMAND_INDEX_APPLICATION(type.applicationId);
    }
    fetch = function fetch() {
      const HTTP = arg0(closure_2[3]).HTTP;
      const value = HTTP.get({
        url: closure_2,
        retries: 3 - closure_4 - 1,
        signal: arg1.signal,
        onRequestCreated() {
          let closure_4 = tmp + 1;
          return +closure_4;
        },
        rejectWithError: false
      });
      return value.then((status) => {
        if (202 === status.status) {
          const arr = arr.push(202);
          let dispatchResult = callback(5000);
        } else {
          let obj = { error: false };
          callback2(obj);
          obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: closure_0, index: status.body };
          dispatchResult = lib(closure_2[2]).dispatch(obj);
          const obj2 = lib(closure_2[2]);
        }
        return dispatchResult;
      }, (status) => {
        if (lib.signal.aborted) {
          let arr = arr.push(1001);
          let obj = { error: true };
          callback2(obj);
        } else if (429 === status.status) {
          arr = arr.push(429);
          let dispatchResult = callback(status.body.retry_after * lib(closure_2[4]).Millis.SECOND);
        } else {
          status = status.status;
          let num2 = 1000;
          if (null != status) {
            num2 = status;
          }
          arr.push(num2);
          obj = { error: true };
          callback2(obj);
          obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: closure_0 };
          dispatchResult = lib(closure_2[2]).dispatch(obj);
          const obj2 = lib(closure_2[2]);
        }
        return dispatchResult;
      });
    };
    yield fetch();
  };
}
function getTargetId(type) {
  type = type.type;
  if ("channel" === type) {
    return type.channelId;
  } else if ("guild" === type) {
    return type.guildId;
  } else if ("user" === type) {
    return null;
  } else if ("application" === type) {
    return type.applicationId;
  } else {
    arg1(dependencyMap[6]).assertNever(type);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_5, Endpoints: closure_6 } = tmp2);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/application_commands/ApplicationCommandIndexActionCreators.tsx");

export const fetchApplicationCommandIndex = function fetchApplicationCommandIndex(arg0, abortController) {
  return _fetchApplicationCommandIndex(...arguments);
};
export const requestApplicationCommandIndex = function requestApplicationCommandIndex(target) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target };
  obj.dispatch(obj);
};
