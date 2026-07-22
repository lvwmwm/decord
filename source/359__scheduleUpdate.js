// Module ID: 359
// Function ID: 5326
// Name: _scheduleUpdate
// Dependencies: []

// Module 359 (_scheduleUpdate)
function _scheduleUpdate() {
  if (!closure_7) {
    if (closure_9 > 0) {
      const _setTimeout = setTimeout;
      let timerId = setTimeout(_processUpdate, 0);
    } else {
      const _setImmediate = setImmediate;
      timerId = setImmediate(_processUpdate);
    }
    closure_7 = timerId;
  }
}
function _processUpdate() {
  let _default;
  let closure_7 = 0;
  const size = set.size;
  const item = set1.forEach((arg0) => set.add(arg0));
  const item1 = set2.forEach((arg0) => set.delete(arg0));
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
          let tmp13 = closure_9;
          if (closure_9 > 0) {
            let tmp14 = arg1;
            let tmp15 = dependencyMap;
            _default = arg1(dependencyMap[3]).default;
            let tmp16 = closure_9;
            if (_default.getEventLoopRunningTime() >= closure_9) {
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
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult();
let _default1 = {
  Events: { go: 42977857, next: -531558144 },
  runAfterInteractions(arg0) {
    const arg1 = arg0;
    let closure_1 = [];
    const promise = new Promise((run) => {
      callback();
      if (run) {
        let arr = arr.push(run);
      }
      const obj = { run };
      let str = run;
      if (run) {
        str = run.name;
      }
      if (!str) {
        str = "?";
      }
      obj.name = `resolve ${str}`;
      arr = arr.push(obj);
      closure_6.enqueueTasks(arr);
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        closure_6.cancelTasks(closure_1);
      }
    };
  },
  createInteractionHandle() {
    _scheduleUpdate();
    const sum = closure_8 + 1;
    closure_8 = sum;
    set1.add(sum);
    return sum;
  },
  clearInteractionHandle(arg0) {
    arg1(dependencyMap[1])(arg0, "InteractionManager: Must provide a handle to clear.");
    _scheduleUpdate();
    set1.delete(arg0);
    set2.add(arg0);
  },
  addListener: addListener.bind(importDefaultResult),
  setDeadline(arg0) {
    let closure_9 = arg0;
  }
};
const addListener = importDefaultResult.addListener;
const set = new Set();
const set1 = new Set();
const set2 = new Set();
const _default = new arg1(dependencyMap[2]).default({ onMoreTasks: _scheduleUpdate });
let closure_7 = 0;
let closure_8 = 0;
let closure_9 = -1;
if (importAllResult.disableInteractionManager()) {
  _default1 = arg1(dependencyMap[5]).default;
}

export default _default1;
