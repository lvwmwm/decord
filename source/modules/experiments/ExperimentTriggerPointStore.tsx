// Module ID: 12858
// Function ID: 12859
// Name: handleConnectionOpen
// Dependencies: [4199, 1212, 12859, 12860, 589, 709, 2]

// Module 12858 (handleConnectionOpen)
import getHash from "getHash";
import initialize from "initialize";
import apexExperiment from "apexExperiment";
import { Store } from "initialize";
import importDefaultResult from "dispatcher";

const require = arg1;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = require(12860) /* commonTriggerPointConfiguration */.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
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
  this.waitFor(getHash, initialize);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
// ThrowIfThisInitialized (0x7c)
const tmp4 = new "initialize"(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", importDefaultResult, obj);
const result = require("apexExperiment").fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;
