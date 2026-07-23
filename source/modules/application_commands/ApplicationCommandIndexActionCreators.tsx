// Module ID: 7924
// Function ID: 63159
// Name: _fetchApplicationCommandIndex
// Dependencies: [5, 653, 686, 507, 664, 675, 1327, 2]
// Exports: fetchApplicationCommandIndex, requestApplicationCommandIndex

// Module 7924 (_fetchApplicationCommandIndex)
import expandLocation from "expandLocation";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
async function _fetchApplicationCommandIndex(arg0, arg1, arg2) {
  function end(error) {
    const diff = performance.now() - undefined;
    let obj = outer2_1(outer2_2[5]);
    obj = { duration_ms: diff, error: error.error, aborted: globalThis.c.signal.aborted, include_applications: true, retries: Math.max(undefined - 1, 0), kind: null, command_type: null, url: undefined, target_type: outer2_4.type, target_id: outer2_8(outer2_4), failure_statuses: undefined };
    obj.track(outer2_5.APPLICATION_COMMAND_PERFORMANCE, obj);
  }
  return (function*(type) {
    let closure_0 = type;
    let closure_1 = arg1;
    let closure_2;
    let expandLocation;
    let c4;
    let closure_5;
    let fetch;
    function retry() {
      return _retry(...arguments);
    }
    async function _retry(arg0, arg1) {
      let closure_0 = arg0;
      if (outer2_4 >= 3) {
        outer2_5.push(1002);
        let obj = { error: true };
        outer2_9(obj);
        obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: outer2_0 };
        let dispatchResult = outer5_1(outer5_2[2]).dispatch(obj);
        const obj2 = outer5_1(outer5_2[2]);
      } else {
        yield new Promise((arg0) => setTimeout(arg0, closure_0));
        dispatchResult = outer2_6();
      }
      return dispatchResult;
    }
    function end(error) {
      const diff = performance.now() - expandLocation;
      let obj = outer3_1(outer3_2[5]);
      obj = { duration_ms: diff, error: error.error, aborted: closure_1.signal.aborted, include_applications: true, retries: Math.max(c4 - 1, 0), kind: null, command_type: null, url: closure_2, target_type: type.type, target_id: outer3_8(type), failure_statuses: closure_5 };
      obj.track(outer3_5.APPLICATION_COMMAND_PERFORMANCE, obj);
    }
    expandLocation = performance.now();
    c4 = 0;
    closure_5 = [];
    type = type.type;
    if ("channel" === type) {
      closure_2 = outer2_6.APPLICATION_COMMAND_INDEX_CHANNEL(type.channelId);
    } else if ("guild" === type) {
      closure_2 = outer2_6.APPLICATION_COMMAND_INDEX_GUILD(type.guildId);
    } else if ("user" === type) {
      closure_2 = outer2_6.APPLICATION_COMMAND_INDEX_USER;
    } else if ("application" === type) {
      closure_2 = outer2_6.APPLICATION_COMMAND_INDEX_APPLICATION(type.applicationId);
    }
    fetch = function fetch() {
      const HTTP = outer3_0(outer3_2[3]).HTTP;
      const value = HTTP.get({
        url: closure_2,
        retries: 3 - c4 - 1,
        signal: closure_1.signal,
        onRequestCreated() {
          const outer1_4 = tmp + 1;
          return +outer1_4;
        },
        rejectWithError: false
      });
      return value.then((status) => {
        if (202 === status.status) {
          outer1_5.push(202);
          let dispatchResult = outer1_7(5000);
        } else {
          let obj = { error: false };
          outer1_9(obj);
          obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: outer1_0, index: status.body };
          dispatchResult = outer4_1(outer4_2[2]).dispatch(obj);
          const obj2 = outer4_1(outer4_2[2]);
        }
        return dispatchResult;
      }, (status) => {
        if (outer1_1.signal.aborted) {
          outer1_5.push(1001);
          let obj = { error: true };
          outer1_9(obj);
        } else if (429 === status.status) {
          outer1_5.push(429);
          let dispatchResult = outer1_7(status.body.retry_after * outer4_1(outer4_2[4]).Millis.SECOND);
        } else {
          status = status.status;
          let num2 = 1000;
          if (null != status) {
            num2 = status;
          }
          outer1_5.push(num2);
          obj = { error: true };
          outer1_9(obj);
          obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: outer1_0 };
          dispatchResult = outer4_1(outer4_2[2]).dispatch(obj);
          const obj2 = outer4_1(outer4_2[2]);
        }
        return dispatchResult;
      });
    };
    yield fetch();
  })();
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
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(type);
  }
}
({ AnalyticEvents: closure_5, Endpoints: closure_6 } = ME);
const result = require("dispatcher").fileFinishedImporting("modules/application_commands/ApplicationCommandIndexActionCreators.tsx");

export const fetchApplicationCommandIndex = function fetchApplicationCommandIndex(arg0, abortController) {
  return _fetchApplicationCommandIndex(...arguments);
};
export const requestApplicationCommandIndex = function requestApplicationCommandIndex(target) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target };
  obj.dispatch(obj);
};
