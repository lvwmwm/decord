// Module ID: 13613
// Function ID: 13614
// Name: handleConnectionOpen
// Dependencies: [4394, 1209, 13614, 13615, 586, 706, 2]

// Module 13613 (handleConnectionOpen)
import initializeDefault from "initialize" /* 586 */;
import dispatcher from "dispatcher" /* 706 */;
import commonTriggerPointConfiguration from "commonTriggerPointConfiguration" /* 13615 */;
import closure_3 from "getHash" /* 4394 */;
import closure_4 from "initialize" /* 1209 */;
import apexExperiment from "apexExperiment" /* 13614 */;
import importDefaultResult from "dispatcher" /* 706 */;

require = arg1;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const Store = initializeDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = require("dispatcher");
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, handleConnectionOpen, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
// ThrowIfThisInitialized (0x7c)
const tmp4 = new "initialize"(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", importDefaultResult, obj);
const result = require("set").fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;
