// Module ID: 7292
// Function ID: 58861
// Name: setupIntegration
// Dependencies: [57, 65, 7264, 7236, 7263]
// Exports: addIntegration, afterSetupIntegrations, defineIntegration, getIntegrationsToSetup, setupIntegrations

// Module 7292 (setupIntegration)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

function setupIntegration(on, name) {
  const _require = on;
  if (arg2[name.name]) {
    if (_require(7264).DEBUG_BUILD) {
      const logger2 = _require(7236).logger;
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
    if (_require(7264).DEBUG_BUILD) {
      const logger = _require(7236).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Integration installed: " + name.name);
    }
  }
}
let items = [];

export const addIntegration = function addIntegration(name) {
  const client = require(7263) /* getCurrentScope */.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (require(7264).DEBUG_BUILD) {
    const logger = require(7236) /* consoleSandbox */.logger;
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
    continue;
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  let arr = defaultIntegrations.defaultIntegrations || [];
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
  const arr4 = (function filterDuplicates(combined) {
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
  const findIndexResult = arr4.findIndex((name) => "Debug" === name.name);
  if (findIndexResult > -1) {
    arr = arr4.push(_slicedToArray(arr4.splice(findIndexResult, 1), 1)[0]);
  }
  return arr4;
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  let closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((arg0) => {
    if (arg0) {
      outer1_5(closure_0, arg0, obj);
    }
  });
  return obj;
};
