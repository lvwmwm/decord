// Module ID: 1110
// Function ID: 12656
// Name: browserReplayIntegrationNoop
// Dependencies: [65, 978, 1111]
// Exports: browserReplayIntegration

// Module 1110 (browserReplayIntegrationNoop)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
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
      const items = [".sentry-react-native-mask"];
      let mask = first.mask;
      const merged = Object.assign({}, first);
      if (!mask) {
        mask = [];
      }
      obj.mask = items.concat(_toConsumableArray(mask));
      const items1 = [".sentry-react-native-unmask:not(.sentry-react-native-mask *) > *"];
      let unmask = first.unmask;
      if (!unmask) {
        unmask = [];
      }
      obj.unmask = items1.concat(_toConsumableArray(unmask));
      replayIntegrationResult = require(1111) /* init */.replayIntegration(Object.assign(merged, obj));
      const obj3 = require(1111) /* init */;
      const tmp7 = _toConsumableArray;
      const tmp8 = _toConsumableArray;
    }
    return replayIntegrationResult;
  }
  first = {};
};
