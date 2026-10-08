// Module ID: 13813
// Function ID: 13814
// Name: ExperimentTriggerPointStore
// Dependencies: [4976, 1258, 13814, 13815, 504, 584, 2]

// Module 13813 (ExperimentTriggerPointStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 584 */;
import ConnectionOpenTriggerPoint2 from "ConnectionOpenTriggerPoint" /* 13815 */;
import ExperimentStore from "ExperimentStore" /* 4976 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import DebugExperiment from "DebugExperiment" /* 13814 */;
import size from "module_2" /* 2 */;

const Dispatcher = Dispatcher2;

function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = ConnectionOpenTriggerPoint2.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const Store = get_initializedDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    const obj = { CONNECTION_OPEN: handleConnectionOpen };
    const tmp2 = Dispatcher;
    const tmp3 = new tmp(tmp2, obj, Dispatcher2.DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp3;
  }
  initialize() {
    this.waitFor(ExperimentStore, ApexExperimentStore);
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
const tmp4 = new "initialize"(Dispatcher, obj, Dispatcher2.DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", Dispatcher, obj);
const result = size.fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;
