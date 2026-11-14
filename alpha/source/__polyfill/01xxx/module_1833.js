// Module ID: 1833
// Function ID: 1834
// Dependencies: [41, 42, 1700, 1834, 1666]

// Module 1833
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedModule2 from "ReanimatedModule" /* 1666 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1700 */;
import mutablesNative from "mutablesNative" /* 1834 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class Sensor {
  constructor(sensorType, config) {
    _classCallCheck(this, Sensor);
    this.listenersNumber = 0;
    this.sensorId = null;
    this.sensorType = sensorType;
    this.config = config;
    const makeMutable = mutablesNative.makeMutable;
    mutablesNative;
    if (LayoutAnimationType.SensorType.ACCELEROMETER !== sensorType) {
      if (LayoutAnimationType.SensorType.GYROSCOPE !== sensorType) {
        if (LayoutAnimationType.SensorType.GRAVITY !== sensorType) {
          this.data = makeMutable({ x: 0, y: 0, z: 0, interfaceOrientation: 0 });
        }
      }
    }
  }
}
const entry = {
  key: "register",
  value: function register(arg0) {
    let config;
    let sensorType;
    const self = this;
    ({ config, sensorType } = this);
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    let num = -1;
    const registerSensor = ReanimatedModule.registerSensor;
    if ("auto" !== config.interval) {
      num = config.interval;
    }
    self.sensorId = registerSensor(sensorType, num, config.iosReferenceFrame, arg0);
    return -1 !== self.sensorId;
  }
};
const items = [
  entry,
  {
    key: "isRunning",
    value: function isRunning() {
      return -1 !== this.sensorId && null !== this.sensorId;
    }
  },
  {
    key: "isAvailable",
    value: function isAvailable() {
      return -1 !== this.sensorId;
    }
  },
  {
    key: "getSharedValue",
    value: function getSharedValue() {
      return this.data;
    }
  },
  {
    key: "unregister",
    value: function unregister() {
      const self = this;
      const tmp = null !== this.sensorId && -1 !== self.sensorId;
      if (tmp) {
        const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
        ReanimatedModule.unregisterSensor(self.sensorId);
      }
      self.sensorId = null;
    }
  }
];

export default _createClassDefault(Sensor, items);
