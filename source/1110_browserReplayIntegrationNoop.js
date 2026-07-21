// Module ID: 1110
// Function ID: 12654
// Name: browserReplayIntegrationNoop
// Dependencies: []
// Exports: browserReplayIntegration

// Module 1110 (browserReplayIntegrationNoop)
let closure_2 = importDefault(dependencyMap[0]);
function browserReplayIntegrationNoop() {
  return {
    name: "Replay",
    start() {

    },
    startBuffering() {

    },
    stop() {
      return Promise.resolve();
    },
    flush() {
      return Promise.resolve();
    },
    getReplayId() {

    },
    getRecordingMode() {

    }
  };
}

export const browserReplayIntegration = function browserReplayIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (obj2.notWeb()) {
      let replayIntegrationResult = browserReplayIntegrationNoop();
    } else {
      const _Object = Object;
      const obj = {};
      const items = [null];
      let mask = first.mask;
      const merged = Object.assign({}, first);
      if (!mask) {
        mask = [];
      }
      obj.mask = items.concat(closure_2(mask));
      const items1 = ["thirty"];
      let unmask = first.unmask;
      if (!unmask) {
        unmask = [];
      }
      obj.unmask = items1.concat(closure_2(unmask));
      replayIntegrationResult = arg1(dependencyMap[2]).replayIntegration(Object.assign(merged, obj));
      const obj3 = arg1(dependencyMap[2]);
      const tmp7 = closure_2;
      const tmp8 = closure_2;
    }
    return replayIntegrationResult;
  }
  first = {};
};
