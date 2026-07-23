// Module ID: 359
// Function ID: 5326
// Name: _scheduleUpdate
// Dependencies: [98, 44, 360, 63, 79, 361]

// Module 359 (_scheduleUpdate)
import importDefaultResult from "EventEmitter";

const require = arg1;
function _scheduleUpdate() {
  if (!timerId) {
    if (c9 > 0) {
      const _setTimeout = setTimeout;
      timerId = setTimeout(_processUpdate, 0);
    } else {
      const _setImmediate = setImmediate;
      timerId = setImmediate(_processUpdate);
    }
  }
}
function _processUpdate() {
  let _default;
  let c7 = 0;
  const size = set.size;
  const item = set1.forEach((arg0) => outer1_3.add(arg0));
  const item1 = set2.forEach((arg0) => outer1_3.delete(arg0));
  const size2 = set.size;
  if (0 !== size) {
    if (0 === size2) {
      importDefaultResult.emit(_default1.Events.interactionComplete);
    }
    if (0 === size2) {
      if (_default.hasTasksToProcess()) {
        while (true) {
          let tmp11 = _default;
          let processNextResult = _default.processNext();
          let tmp13 = c9;
          if (c9 > 0) {
            let tmp14 = require;
            let tmp15 = dependencyMap;
            _default = require(63) /* MessageQueue */.default;
            let tmp16 = c9;
            if (_default.getEventLoopRunningTime() >= c9) {
              break;
            }
          }
          let tmp17 = _default;
        }
        _scheduleUpdate();
      }
    }
    set1.clear();
    set2.clear();
  }
  if (tmp3) {
    importDefaultResult.emit(_default1.Events.interactionStart);
  }
}
importDefaultResult = new importDefaultResult();
let _default1 = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    let closure_0 = arg0;
    let closure_1 = [];
    const promise = new Promise((run) => {
      outer1_11();
      if (name) {
        arr = arr.push(name);
      }
      const obj = { run };
      let str = name;
      if (name) {
        str = name.name;
      }
      if (!str) {
        str = "?";
      }
      obj.name = `resolve ${str}`;
      arr = arr.push(obj);
      outer1_6.enqueueTasks(arr);
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        outer1_6.cancelTasks(closure_1);
      }
    };
  },
  createInteractionHandle() {
    _scheduleUpdate();
    const sum = c8 + 1;
    c8 = sum;
    set1.add(sum);
    return sum;
  },
  clearInteractionHandle(arg0) {
    require(44) /* invariant */(arg0, "InteractionManager: Must provide a handle to clear.");
    _scheduleUpdate();
    set1.delete(arg0);
    set2.add(arg0);
  },
  addListener: addListener.bind(importDefaultResult),
  setDeadline(arg0) {
    let closure_9 = arg0;
  }
};
addListener = importDefaultResult.addListener;
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let _default = new require("TaskQueue").default({ onMoreTasks: _scheduleUpdate });
let c7 = 0;
let c8 = 0;
let c9 = -1;
if (importAllResult.disableInteractionManager()) {
  _default1 = require("reject").default;
}

export default _default1;
