// Module ID: 13993
// Function ID: 13994
// Name: ExperimentTriggerPointStore
// Dependencies: [4706, 1239, 13994, 13995, 504, 577, 2]

// Module 13993 (ExperimentTriggerPointStore)
import initializeDefault from "initialize" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 577 */;
import ConnectionOpenTriggerPoint2 from "ConnectionOpenTriggerPoint" /* 13995 */;
import ExperimentStore from "ExperimentStore" /* 4706 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;

const Dispatcher = Dispatcher2;

require = fn;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = ConnectionOpenTriggerPoint2.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const DebugExperiment = fn(13994);
const Store = initializeDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = closure_1(closure_2[5]);
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp1 = new tmp(tmp2, obj, closure_0(closure_2[5]).DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp1;
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ExperimentStore, ApexExperimentStore);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default new "initialize"(Dispatcher, obj, fn(577).DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", Dispatcher, obj);
