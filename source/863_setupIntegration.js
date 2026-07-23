// Module ID: 863
// Function ID: 9640
// Name: setupIntegration
// Dependencies: [65, 800, 801, 825]
// Exports: addIntegration, afterSetupIntegrations, defineIntegration, getIntegrationsToSetup, setupIntegrations

// Module 863 (setupIntegration)
import _toConsumableArray from "_toConsumableArray";

function setupIntegration(on, name) {
  const _require = on;
  if (arg2[name.name]) {
    if (_require(800).DEBUG_BUILD) {
      const debug2 = _require(801).debug;
      const _HermesInternal2 = HermesInternal;
      debug2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    let hasItem = items.includes(name.name);
    if (!hasItem) {
      hasItem = "function" !== typeof name.setupOnce;
    }
    if (!hasItem) {
      name.setupOnce();
      items.push(name.name);
    }
    let setup = name.setup;
    if (setup) {
      setup = "function" === typeof name.setup;
    }
    if (setup) {
      name.setup(on);
    }
    if ("function" === typeof name.preprocessEvent) {
      const preprocessEvent = name.preprocessEvent;
      const dependencyMap = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => callback(arg0, arg1, closure_0));
    }
    if ("function" === typeof name.processEvent) {
      const processEvent = name.processEvent;
      let closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: name.name };
      on.addEventProcessor(Object.assign((arg0, arg1) => callback2(arg0, arg1, closure_0), obj));
    }
    if (_require(800).DEBUG_BUILD) {
      const debug = _require(801).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Integration installed: " + name.name);
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [];

export const addIntegration = function addIntegration(name) {
  const client = require(825) /* getCurrentScope */.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (require(800).DEBUG_BUILD) {
    const debug = require(801) /* consoleSandbox */.debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, arg1) {
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let tmp2 = null != nextResult;
    let afterAllSetup = tmp2;
    if (tmp2) {
      let tmp3 = nextResult;
      afterAllSetup = obj.afterAllSetup;
    }
    if (afterAllSetup) {
      let tmp4 = nextResult;
      let tmp5 = arg0;
      let afterAllSetupResult = obj.afterAllSetup(arg0);
    }
    continue;
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  const arr = defaultIntegrations.defaultIntegrations || [];
  const integrations = defaultIntegrations.integrations;
  let item = arr.forEach((arg0) => {
    arg0.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    const items = [];
    let combined = items.concat(_toConsumableArray(arr), _toConsumableArray(integrations));
    const tmp6 = _toConsumableArray(arr);
  } else {
    combined = arr;
    if ("function" === typeof integrations) {
      const integrationsResult = integrations(arr);
      const _Array = Array;
      let tmp4 = integrationsResult;
      if (!Array.isArray(integrationsResult)) {
        const items1 = [integrationsResult];
        tmp4 = items1;
      }
      combined = tmp4;
    }
  }
  return (function filterDuplicates(combined) {
    const obj = {};
    const item = combined.forEach((name) => {
      name = name.name;
      let isDefaultInstance = tmp;
      if (obj[name]) {
        isDefaultInstance = !tmp.isDefaultInstance;
      }
      if (isDefaultInstance) {
        isDefaultInstance = name.isDefaultInstance;
      }
      if (!isDefaultInstance) {
        obj[name] = name;
      }
    });
    return Object.values(obj);
  })(combined);
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  let closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((arg0) => {
    if (arg0) {
      outer1_4(closure_0, arg0, obj);
    }
  });
  return obj;
};
