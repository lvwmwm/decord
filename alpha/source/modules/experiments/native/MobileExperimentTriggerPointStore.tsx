// Module ID: 14955
// Function ID: 14956
// Name: MobileExperimentTriggerPointStore
// Dependencies: [5176, 1261, 14956, 504, 584, 2]

// Module 14955 (MobileExperimentTriggerPointStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 584 */;
import MobileConnectionOpenTriggerPoint2 from "MobileConnectionOpenTriggerPoint" /* 14956 */;
import ExperimentStore from "ExperimentStore" /* 5176 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import size from "module_2" /* 2 */;

const Dispatcher = Dispatcher2;

function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = MobileConnectionOpenTriggerPoint2.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
const Store = get_initializedDefault.Store;
class MobileExperimentTriggerPointStore extends Store {
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
const prototype = MobileExperimentTriggerPointStore.prototype;
MobileExperimentTriggerPointStore.displayName = "MobileExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
let tmp3 = new "initialize"(Dispatcher, obj, Dispatcher2.DispatchBand.Early, prototype, MobileExperimentTriggerPointStore, "initialize", Dispatcher, obj);
const result = size.fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp3;
