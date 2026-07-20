// Module ID: 244
// Function ID: 3273
// Name: registerComponent
// Dependencies: []

// Module 244 (registerComponent)
function registerComponent(Discord, arg1, arg2) {
  arg1 = Discord;
  arg2 = arg1;
  closure_2 = arg2(closure_2[1])();
  closure_5[Discord] = (fabric) => {
    let initialProps;
    let rootTag;
    const tmp = arg1(closure_2[2]);
    ({ initialProps, rootTag } = fabric);
    let tmp3 = callback;
    if (callback) {
      tmp3 = callback(fabric);
    }
    let tmp5 = callback2;
    if (callback2) {
      tmp5 = callback2(fabric);
    }
    tmp(callback3(arg1, closure_2), initialProps, rootTag, tmp3, tmp5, fabric.fabric, closure_2, "LogBox" === fabric, fabric, arg1);
  };
  if (arg2) {
    closure_6[Discord] = closure_5[Discord];
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

};
arg5.setRootViewStyleProvider = function setRootViewStyleProvider(arg0) {

};
arg5.registerConfig = function registerConfig(arr) {
  const item = arr.forEach((run) => {
    if (run.run) {
      callback3(run.appKey, run.run);
    } else {
      callback(closure_2[0])(null != run.component, "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.", run.appKey);
      callback2(run.appKey, run.component, run.section);
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
  return closure_5[Discord];
};
arg5.getRegistry = function getRegistry() {
  return { sections: getSectionKeys(), runnables: Object.assign({}, closure_5) };
};
arg5.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(arg0) {
  const componentProviderInstrumentationHook = arg0;
};
arg5.runApplication = function runApplication(name) {
  if ("LogBox" !== name) {
    const _HermesInternal = HermesInternal;
    const _console = console;
    console.log("Running \"" + name + "\"");
  }
  arg2(arg6[0])(closure_5[name], "\"" + name + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  let obj = arg2(arg6[3]);
  obj = { name };
  obj.setActiveScene(obj);
  const tmp3 = arg2(arg6[0]);
  closure_5[name](arg1, arg1(arg6[4]).coerceDisplayMode(arg2));
};
arg5.setSurfaceProps = function setSurfaceProps(arg0, arg1, arg2) {
  if ("LogBox" !== arg0) {
    const _JSON = JSON;
    const text = `Updating props for Surface "${arg0}`;
    const _console = console;
    console.log(`${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(arg1)}`);
  }
  arg2(arg6[0])(closure_5[arg0], "\"" + arg0 + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  const tmp4 = arg2(arg6[0]);
  closure_5[arg0](arg1, arg1(arg6[4]).coerceDisplayMode(arg2));
};
arg5.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(arg0) {
  const result = arg1(arg6[5]).unmountComponentAtNodeAndRemoveContainer(arg0);
};
arg5.registerHeadlessTask = function registerHeadlessTask(arg0, arg1) {
  registerCancellableHeadlessTask(arg0, arg1, () => () => {

  });
};
arg5.registerCancellableHeadlessTask = registerCancellableHeadlessTask;
arg5.startHeadlessTask = function startHeadlessTask(arg0, arg1, arg2) {
  arg1 = arg0;
  const value = map.get(arg1);
  if (value) {
    const promise = value()(arg2);
    value()(arg2).then(() => {
      if (callback(closure_2[6])) {
        callback(closure_2[6]).notifyTaskFinished(arg0);
        const obj = callback(closure_2[6]);
      }
    }).catch((arg0) => {
      console.error(arg0);
      let tmp2 = callback(closure_2[6]);
      if (tmp2) {
        tmp2 = arg0 instanceof callback(closure_2[7]);
      }
      if (tmp2) {
        const obj = callback(closure_2[6]);
        callback(closure_2[6]).notifyTaskRetry(arg0).then((arg0) => {
          if (!arg0) {
            callback(closure_2[6]).notifyTaskFinished(closure_0);
            const obj = callback(closure_2[6]);
          }
        });
        const notifyTaskRetryResult = callback(closure_2[6]).notifyTaskRetry(arg0);
      }
    });
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("No task registered for key " + arg1);
    if (arg2(arg6[6])) {
      arg2(arg6[6]).notifyTaskFinished(arg0);
      const obj = arg2(arg6[6]);
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
