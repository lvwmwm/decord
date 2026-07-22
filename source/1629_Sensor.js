// Module ID: 1629
// Function ID: 18215
// Name: Sensor
// Dependencies: []

// Module 1629 (Sensor)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class Sensor {
    constructor(arg0, arg1) {
      tmp = closure_2(this, Sensor);
      this.listenersNumber = 0;
      this.sensorId = null;
      this.sensorType = arg0;
      this.config = arg1;
      if (arg0 === Sensor(closure_1[2]).SensorType.ROTATION) {
        tmp5 = Sensor;
        tmp6 = closure_1;
        num2 = 3;
        obj2 = Sensor(closure_1[3]);
        mutable = obj2.makeMutable({ content: 0.6, padding: "BounceOut", getChannel: null, ip: 0.6, Array: "BounceOutRight", "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutLeft" });
      } else {
        tmp2 = Sensor;
        tmp3 = closure_1;
        num = 3;
        obj = Sensor(closure_1[3]);
        mutable = obj.makeMutable({ translateX: -24, translateY: null, scale: 1, channel: "Malaysia" });
      }
      this.data = mutable;
      return;
    }
  }
  const arg1 = Sensor;
  let obj = {
    key: "register",
    value: function register(arg0) {
      let config;
      let sensorType;
      const self = this;
      ({ config, sensorType } = this);
      const ReanimatedModule = Sensor(closure_1[4]).ReanimatedModule;
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
        const ReanimatedModule = Sensor(closure_1[4]).ReanimatedModule;
        ReanimatedModule.unregisterSensor(self.sensorId);
      }
      self.sensorId = null;
    }
  };
  return callback(Sensor, items);
}();
