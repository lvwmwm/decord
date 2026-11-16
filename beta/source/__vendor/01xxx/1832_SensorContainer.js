// Module ID: 1832
// Function ID: 1833
// Name: SensorContainer
// Dependencies: [41, 42, 1666, 1833]

// Module 1832 (SensorContainer)
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedModule2 from "ReanimatedModule" /* 1666 */;
import _modDef1833 from "module_1833" /* 1833 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set;

class SensorContainer {
  constructor() {
    _classCallCheck(this, SensorContainer);
    this.nativeSensors = new Map();
    new Map();
    this.availability = new Map();
    new Map();
  }
}
const entry = {
  key: "isSensorAvailable",
  value: function isSensorAvailable(arg0) {
    const availability = this.availability;
    let value = availability.get(arg0);
    if (undefined === value) {
      const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
      const isSensorAvailableResult = ReanimatedModule.isSensorAvailable(arg0);
      const availability2 = this.availability;
      const result = availability2.set(arg0, isSensorAvailableResult);
      value = isSensorAvailableResult;
    }
    return value;
  }
};
const items = [
  entry,
  {
    key: "getSensorId",
    value: function getSensorId(arg0, iosReferenceFrame) {
      const result = 100 * arg0;
      const result1 = 10 * iosReferenceFrame.iosReferenceFrame;
      return result + result1 + Number(iosReferenceFrame.adjustToInterfaceOrientation);
    }
  },
  {
    key: "initializeSensor",
    value: function initializeSensor(arg0, iosReferenceFrame) {
      const self = this;
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (!nativeSensors.has(sensorId)) {
        const nativeSensors2 = self.nativeSensors;
        const self2 = this;
        const self3 = this;
        set = nativeSensors2.set;
        const tmp6 = new _modDef1833(arg0, iosReferenceFrame);
        const result = set(sensorId, tmp6);
      }
      const nativeSensors3 = self.nativeSensors;
      const value = nativeSensors3.get(sensorId);
      return value.getSharedValue();
    }
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, iosReferenceFrame, arg2) {
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(sensorId)) {
        const nativeSensors2 = this.nativeSensors;
        const value = nativeSensors2.get(sensorId);
        let num = -1;
        if (value) {
          num = -1;
          if (value.isAvailable()) {
            if (value.isRunning()) {
              value.listenersNumber = value.listenersNumber + 1;
              num = sensorId;
            } else {
              num = -1;
            }
          }
        }
        return num;
      } else {
        return -1;
      }
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(arg0)) {
        const nativeSensors2 = this.nativeSensors;
        const value = nativeSensors2.get(arg0);
        const tmp = value && value.isRunning();
        if (tmp) {
          value.listenersNumber = value.listenersNumber - 1;
          if (0 === value.listenersNumber) {
            value.unregister();
          }
        }
      }
    }
  }
];
const SensorContainer_export = _createClassDefault(SensorContainer, items);

export { SensorContainer_export as SensorContainer };
