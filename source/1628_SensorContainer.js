// Module ID: 1628
// Function ID: 18208
// Name: SensorContainer
// Dependencies: []

// Module 1628 (SensorContainer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export const SensorContainer = () => {
  class SensorContainer {
    constructor() {
      tmp = closure_2(this, SensorContainer);
      map = new Map();
      this.nativeSensors = map;
      return;
    }
  }
  const importDefault = SensorContainer;
  let obj = {
    key: "getSensorId",
    value: function getSensorId(arg0, iosReferenceFrame) {
      const result = 100 * arg0;
      const result1 = 10 * iosReferenceFrame.iosReferenceFrame;
      return result + result1 + Number(iosReferenceFrame.adjustToInterfaceOrientation);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "initializeSensor",
    value: function initializeSensor(arg0, iosReferenceFrame) {
      const self = this;
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (!nativeSensors.has(sensorId)) {
        let tmp4 = SensorContainer(closure_1[2]);
        const prototype = tmp4.prototype;
        tmp4 = new tmp4(arg0, iosReferenceFrame);
        const nativeSensors2 = self.nativeSensors;
        const result = nativeSensors2.set(sensorId, tmp4);
      }
      const nativeSensors3 = self.nativeSensors;
      const value = nativeSensors3.get(sensorId);
      return value.getSharedValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "registerSensor",
    value: function registerSensor(arg0, iosReferenceFrame) {
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
  };
  items[2] = obj;
  items[3] = {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(arg0)) {
        const nativeSensors2 = this.nativeSensors;
        const value = nativeSensors2.get(arg0);
        let isRunningResult = value;
        if (value) {
          isRunningResult = value.isRunning();
        }
        if (isRunningResult) {
          value.listenersNumber = value.listenersNumber - 1;
          if (0 === value.listenersNumber) {
            value.unregister();
          }
        }
      }
    }
  };
  return callback(SensorContainer, items);
}();
