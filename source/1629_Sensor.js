// Module ID: 1629
// Function ID: 18217
// Name: Sensor
// Dependencies: [6, 7, 1607, 1619, 1590]

// Module 1629 (Sensor)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export default (() => {
  class Sensor {
    constructor(arg0, arg1) {
      tmp = outer1_2(this, Sensor);
      this.listenersNumber = 0;
      this.sensorId = null;
      this.sensorType = arg0;
      this.config = arg1;
      if (arg0 === Sensor(outer1_1[2]).SensorType.ROTATION) {
        tmp5 = Sensor;
        tmp6 = outer1_1;
        num2 = 3;
        obj2 = Sensor(outer1_1[3]);
        mutable = obj2.makeMutable({ qw: 0, qx: 0, qy: 0, qz: 0, yaw: 0, pitch: 0, roll: 0, interfaceOrientation: 0 });
      } else {
        tmp2 = Sensor;
        tmp3 = outer1_1;
        num = 3;
        obj = Sensor(outer1_1[3]);
        mutable = obj.makeMutable({ x: 0, y: 0, z: 0, interfaceOrientation: 0 });
      }
      this.data = mutable;
      return;
    }
  }
  let obj = {
    key: "register",
    value: function register(arg0) {
      let config;
      let sensorType;
      const self = this;
      ({ config, sensorType } = this);
      const ReanimatedModule = Sensor(outer1_1[4]).ReanimatedModule;
      let num = -1;
      if ("auto" !== config.interval) {
        num = config.interval;
      }
      self.sensorId = ReanimatedModule.registerSensor(sensorType, num, config.iosReferenceFrame, arg0);
      return -1 !== self.sensorId;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isRunning",
    value: function isRunning() {
      let tmp = -1 !== this.sensorId;
      if (tmp) {
        tmp = null !== this.sensorId;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "isAvailable",
    value: function isAvailable() {
      return -1 !== this.sensorId;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSharedValue",
    value: function getSharedValue() {
      return this.data;
    }
  };
  items[4] = {
    key: "unregister",
    value: function unregister() {
      const self = this;
      let tmp = null !== this.sensorId;
      if (tmp) {
        tmp = -1 !== self.sensorId;
      }
      if (tmp) {
        const ReanimatedModule = Sensor(outer1_1[4]).ReanimatedModule;
        ReanimatedModule.unregisterSensor(self.sensorId);
      }
      self.sensorId = null;
    }
  };
  return callback(Sensor, items);
})();
