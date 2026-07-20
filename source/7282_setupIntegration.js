// Module ID: 7282
// Function ID: 58764
// Name: setupIntegration
// Dependencies: []
// Exports: addIntegration, afterSetupIntegrations, defineIntegration, getIntegrationsToSetup, setupIntegrations

// Module 7282 (setupIntegration)
function setupIntegration(on, name) {
  const require = on;
  if (arg2[name.name]) {
    if (require(closure_1[2]).DEBUG_BUILD) {
      const logger2 = require(closure_1[3]).logger;
      const _HermesInternal2 = HermesInternal;
      logger2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    let tmp2 = -1 === items.indexOf(name.name);
    if (tmp2) {
      tmp2 = "function" === typeof name.setupOnce;
    }
    if (tmp2) {
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
      closure_1 = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => callback(arg0, arg1, arg0));
    }
    if ("function" === typeof name.processEvent) {
      const processEvent = name.processEvent;
      let closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: name.name };
      on.addEventProcessor(Object.assign((arg0, arg1) => callback2(arg0, arg1, arg0), obj));
    }
    if (require(closure_1[2]).DEBUG_BUILD) {
      const logger = require(closure_1[3]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Integration installed: " + name.name);
    }
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const items = [];

export const addIntegration = function addIntegration(name) {
  const client = require(dependencyMap[4]).getClient();
  if (client) {
    client.addIntegration(name);
  } else if (require(dependencyMap[2]).DEBUG_BUILD) {
    const logger = require(dependencyMap[3]).logger;
    const _HermesInternal = HermesInternal;
    logger.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, items) {
  for (const item10005 of arg1) {
    let obj = item10005;
    let afterAllSetup = item10005;
    if (item10005) {
      let tmp = item10005;
      afterAllSetup = obj.afterAllSetup;
    }
    if (afterAllSetup) {
      let tmp2 = item10005;
      let tmp3 = arg0;
      let afterAllSetupResult = obj.afterAllSetup(arg0);
    }
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  let arr = defaultIntegrations.defaultIntegrations || [];
  const integrations = defaultIntegrations.integrations;
  const item = arr.forEach((arg0) => {
    arg0.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    const items = [];
    let combined = items.concat(callback2(arr), callback2(integrations));
    const tmp6 = callback2(arr);
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
  const arr4 = function filterDuplicates(combined) {
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
  }(combined);
  const findIndexResult = arr4.findIndex((name) => "Debug" === name.name);
  if (findIndexResult > -1) {
    arr = arr4.push(callback(arr4.splice(findIndexResult, 1), 1)[0]);
  }
  return arr4;
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  const require = arg0;
  const obj = {};
  const dependencyMap = obj;
  const item = arr.forEach((arg0) => {
    if (arg0) {
      callback(arg0, arg0, obj);
    }
  });
  return obj;
};
