// Module ID: 244
// Function ID: 3273
// Name: registerComponent
// Dependencies: [44, 205, 245, 257, 256, 117, 258, 260]

// Module 244 (registerComponent)
const require = arg1;
const module = arg2;
let dependencyMap = arg6;
function registerComponent(Discord, arg1, arg2) {
  let closure_0 = Discord;
  const _module = arg1;
  const dependencyMap = _module(205)();
  dependencyMap2[Discord] = (fabric) => {
    let initialProps;
    let rootTag;
    const tmp = callback(table[2]);
    ({ initialProps, rootTag } = fabric);
    let tmp3 = outer1_3;
    if (outer1_3) {
      tmp3 = outer1_3(fabric);
    }
    let tmp5 = outer1_4;
    if (outer1_4) {
      tmp5 = outer1_4(fabric);
    }
    tmp(outer1_9(callback, table), initialProps, rootTag, tmp3, tmp5, fabric.fabric, table, "LogBox" === closure_0, closure_0, arg1);
  };
  if (arg2) {
    closure_6[Discord] = dependencyMap2[Discord];
  }
  return Discord;
}
function registerRunnable(Discord, arg1) {
  closure_5[Discord] = arg1;
  return Discord;
}
function getSectionKeys() {
  return Object.keys(closure_6);
}
function registerCancellableHeadlessTask(arg0, arg1, arg2) {
  if (map.has(arg0)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + arg0 + "'");
  }
  const result = map.set(arg0, arg1);
  const result1 = map1.set(arg0, arg2);
}
let closure_5 = {};
let closure_6 = {};
const map = new Map();
const map1 = new Map();
function componentProviderInstrumentationHook(arg0) {
  return arg0();
}
arg5.setWrapperComponentProvider = function setWrapperComponentProvider(arg0) {
  let closure_3 = arg0;
};
arg5.setRootViewStyleProvider = function setRootViewStyleProvider(arg0) {
  let closure_4 = arg0;
};
arg5.registerConfig = function registerConfig(arr) {
  const item = arr.forEach((run) => {
    if (run.run) {
      outer1_11(run.appKey, run.run);
    } else {
      outer1_1(outer1_2[0])(null != run.component, "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.", run.appKey);
      outer1_10(run.appKey, run.component, run.section);
    }
  });
};
arg5.registerComponent = registerComponent;
arg5.registerRunnable = registerRunnable;
arg5.registerSection = function registerSection(Discord) {
  registerComponent(Discord, arg1, true);
};
arg5.getAppKeys = function getAppKeys() {
  return Object.keys(closure_5);
};
arg5.getSectionKeys = getSectionKeys;
arg5.getSections = function getSections() {
  return Object.assign({}, closure_6);
};
arg5.getRunnable = function getRunnable(Discord) {
  return dependencyMap2[Discord];
};
arg5.getRegistry = function getRegistry() {
  return { sections: getSectionKeys(), runnables: Object.assign({}, closure_5) };
};
arg5.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(arg0) {
  let closure_9 = arg0;
};
arg5.runApplication = function runApplication(name) {
  if ("LogBox" !== name) {
    const _HermesInternal = HermesInternal;
    const _console = console;
    console.log("Running \"" + name + "\"");
  }
  module(44)(dependencyMap2[name], "\"" + name + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  let obj = module(257);
  obj = { name };
  obj.setActiveScene(obj);
  const tmp3 = module(44);
  dependencyMap2[name](arg1, require(256) /* frozen */.coerceDisplayMode(arg2));
};
arg5.setSurfaceProps = function setSurfaceProps(arg0, arg1, arg2) {
  if ("LogBox" !== arg0) {
    const _JSON = JSON;
    const text = `Updating props for Surface "${arg0}`;
    const _console = console;
    console.log(`${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(arg1)}`);
  }
  module(44)(dependencyMap2[arg0], "\"" + arg0 + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  const tmp4 = module(44);
  dependencyMap2[arg0](arg1, require(256) /* frozen */.coerceDisplayMode(arg2));
};
arg5.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(arg0) {
  const result = require(117) /* renderElement */.unmountComponentAtNodeAndRemoveContainer(arg0);
};
arg5.registerHeadlessTask = function registerHeadlessTask(arg0, arg1) {
  registerCancellableHeadlessTask(arg0, arg1, () => () => {

  });
};
arg5.registerCancellableHeadlessTask = registerCancellableHeadlessTask;
arg5.startHeadlessTask = function startHeadlessTask(arg0, arg1, arg2) {
  let closure_0 = arg0;
  const value = map.get(arg1);
  if (value) {
    const promise = value()(arg2);
    value()(arg2).then(() => {
      if (outer1_1(outer1_2[6])) {
        outer1_1(outer1_2[6]).notifyTaskFinished(closure_0);
        const obj = outer1_1(outer1_2[6]);
      }
    }).catch((arg0) => {
      console.error(arg0);
      let tmp2 = outer1_1(outer1_2[6]);
      if (tmp2) {
        tmp2 = arg0 instanceof outer1_1(outer1_2[7]);
      }
      if (tmp2) {
        let obj = outer1_1(outer1_2[6]);
        outer1_1(outer1_2[6]).notifyTaskRetry(closure_0).then((arg0) => {
          if (!arg0) {
            outer2_1(outer2_2[6]).notifyTaskFinished(outer1_0);
            const obj = outer2_1(outer2_2[6]);
          }
        });
        const notifyTaskRetryResult = outer1_1(outer1_2[6]).notifyTaskRetry(closure_0);
      }
    });
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("No task registered for key " + arg1);
    if (module(258)) {
      module(258).notifyTaskFinished(arg0);
      let obj = module(258);
    }
  }
};
arg5.cancelHeadlessTask = function cancelHeadlessTask(arg0, arg1) {
  const value = map1.get(arg1);
  if (value) {
    value()();
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("No task canceller registered for key '" + arg1 + "'");
    throw error;
  }
};
