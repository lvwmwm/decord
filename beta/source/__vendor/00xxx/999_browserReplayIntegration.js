// Module ID: 999
// Function ID: 1000
// Name: browserReplayIntegration
// Dependencies: [867, 1000]
// Exports: browserReplayIntegration

// Module 999 (browserReplayIntegration)
import _mod867 from "module_867" /* 867 */;
import init from "init" /* 1000 */;

function browserReplayIntegrationNoop() {

}

export const browserReplayIntegration = () => {
  let items;
  let items1;
  let replayIntegrationResult;
  function start() {

  }
  function startBuffering() {

  }
  function stop() {
    return Promise.resolve();
  }
  function flush() {
    return Promise.resolve();
  }
  function getReplayId() {

  }
  function getRecordingMode() {

  }
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod867;
  if (obj2.notWeb()) {
    if (typeof browserReplayIntegrationNoop === "function") {
      replayIntegrationResult = { name: "Replay", start, startBuffering, stop, flush, getReplayId, getRecordingMode };
      const obj3 = { name: "Replay", start, startBuffering, stop, flush, getReplayId, getRecordingMode };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _Object2 = Object;
    const replayIntegration = tmp2(1000).replayIntegration;
    const _Object = Object;
    let mask = obj.mask;
    init;
    const merged = Object.assign({}, obj);
    if (!mask) {
      mask = [];
    }
    const obj4 = { mask: items, unmask: items1 };
    items = [".sentry-react-native-mask"];
    HermesBuiltin.arraySpread(items, mask, 1);
    items1 = [".sentry-react-native-unmask:not(.sentry-react-native-mask *) > *"];
    const tmp10 = obj.unmask || [];
    HermesBuiltin.arraySpread(items1, tmp10, 1);
    replayIntegrationResult = replayIntegration(assign(merged, obj4));
  }
  return replayIntegrationResult;
};
