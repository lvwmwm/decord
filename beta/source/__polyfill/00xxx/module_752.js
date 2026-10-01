// Module ID: 752
// Function ID: 753
// Dependencies: [688, 689, 713]
// Exports: addIntegration, afterSetupIntegrations, defineIntegration, getIntegrationsToSetup, setupIntegrations

// Module 752
import _mod688 from "module_688" /* 688 */;
import _mod713 from "module_713" /* 713 */;

let integrations;

function setupIntegration(on, name, arg2) {
  let closure_0 = on;
  if (arg2[name.name]) {
    const tmp10 = require;
    if (_mod688.DEBUG_BUILD) {
      const debug2 = tmp10(689).debug;
      const _HermesInternal2 = HermesInternal;
      debug2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    const arr = items;
    const tmp = items.includes(name.name) || typeof name.setupOnce !== "function";
    if (!tmp) {
      name.setupOnce();
      arr.push(name.name);
    }
    const tmp4 = name.setup && typeof name.setup === "function";
    if (tmp4) {
      name.setup(on);
    }
    if (typeof name.preprocessEvent === "function") {
      const preprocessEvent = name.preprocessEvent;
      let closure_1 = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => closure_1(arg0, arg1, closure_0));
    }
    if (typeof name.processEvent === "function") {
      const processEvent = name.processEvent;
      let closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: name.name };
      on.addEventProcessor(Object.assign((arg0, arg1) => closure_2(arg0, arg1, closure_0), obj));
    }
    const tmp6 = require;
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp6(689).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Integration installed: " + name.name);
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [];

export const addIntegration = function addIntegration(name) {
  const obj = _mod713;
  const client = obj.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (_mod688.DEBUG_BUILD) {
    const debug = tmp(689).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, arg1) {
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let afterAllSetup;
    if (nextResult != null) {
      afterAllSetup = nextResult.afterAllSetup;
    }
    if (afterAllSetup) {
      let afterAllSetupResult = obj.afterAllSetup(arg0);
    }
    continue;
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  let arr2;
  const arr = defaultIntegrations.defaultIntegrations || [];
  integrations = defaultIntegrations.integrations;
  const item = arr.forEach((item) => {
    item.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    items = [];
    HermesBuiltin.arraySpread(items, integrations, HermesBuiltin.arraySpread(items, arr, 0));
    arr2 = items;
  } else {
    arr2 = arr;
    if (typeof integrations === "function") {
      const integrationsResult = integrations(arr);
      const _Array = Array;
      let tmp3 = integrationsResult;
      if (!Array.isArray(integrationsResult)) {
        const items1 = [integrationsResult];
        tmp3 = items1;
      }
      arr2 = tmp3;
    }
  }
  const obj = {};
  const item1 = arr2.forEach((name) => {
    name = name.name;
    let isDefaultInstance = tmp2;
    const tmp = obj;
    if (obj[name]) {
      isDefaultInstance = !tmp2.isDefaultInstance;
    }
    if (isDefaultInstance) {
      isDefaultInstance = name.isDefaultInstance;
    }
    if (!isDefaultInstance) {
      tmp[name] = name;
    }
  });
  return Object.values(obj);
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  let closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((item) => {
    const tmp = item;
    if (tmp) {
      setupIntegration(closure_0, item, obj);
    }
  });
  return obj;
};
