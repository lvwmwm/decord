// Module ID: 13235
// Function ID: 13236
// Name: ExperimentTriggerPointStore
// Dependencies: [4752, 1247, 13236, 13237, 504, 585, 2]

// Module 13235 (ExperimentTriggerPointStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 585 */;
import ConnectionOpenTriggerPoint2 from "ConnectionOpenTriggerPoint" /* 13237 */;
import ExperimentStore from "ExperimentStore" /* 4752 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import DebugExperiment from "DebugExperiment" /* 13236 */;
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
