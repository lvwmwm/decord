// Module ID: 1696
// Function ID: 1697
// Dependencies: [32, 41, 42, 1697, 1665, 1698]
// Exports: createJSReanimatedModule

// Module 1696
import _createClassDefault from "_createClass" /* 42 */;
import _mod1665 from "module_1665" /* 1665 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1697 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let tmp;
const DefaultStaticFeatureFlags = tmp(1698);
class JSReanimated {
  constructor() {
    const self = this;
    let tmp = _classCallCheck(this, JSReanimated);
    this.nextSensorId = 0;
    this.sensors = new Map();
    this.platform = undefined;
    this.getSensorCallback = (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg2;
      let tmp = self;
      let tmp2 = closure_1_1;
      if (self(closure_1_1[3]).SensorType.ACCELEROMETER !== arg1) {
        if (tmp(tmp2[3]).SensorType.GRAVITY !== arg1) {
          if (tmp(tmp2[3]).SensorType.GYROSCOPE !== arg1) {
            if (tmp(tmp2[3]).SensorType.MAGNETIC_FIELD !== arg1) {
              if (tmp(tmp2[3]).SensorType.ROTATION === arg1) {
                return () => {
                  let tmp2;
                  let tmp3;
                  let tmp7;
                  let tmp8;
                  [tmp2, tmp3] = closure_3_2(closure_0.quaternion, 2);
                  closure_3_2(closure_0.quaternion, 2);
                  const tmp4 = closure_3_2(closure_0.quaternion, 4);
                  if (self.platform === constants.WEB_ANDROID) {
                    const items = [tmp4[3], -tmp4[2]];
                    [tmp8, tmp7] = items;
                  }
                  const tmp9 = -Math.atan2(2 * (tmp4[2] * tmp4[3] + tmp2 * tmp3), tmp2 * tmp2 - tmp3 * tmp3 - tmp4[2] * tmp4[2] + tmp4[3] * tmp4[3]);
                  const sinResult = Math.sin(-2 * (tmp3 * tmp4[3] - tmp2 * tmp4[2]));
                  const obj = { qw: tmp2, qx: tmp3, qy: tmp4[2], qz: tmp4[3], yaw: tmp9, pitch: sinResult, roll: -Math.atan2(2 * (tmp3 * tmp4[2] + tmp2 * tmp4[3]), tmp2 * tmp2 + tmp3 * tmp3 - tmp4[2] * tmp4[2] - tmp4[3] * tmp4[3]), interfaceOrientation: 0 };
                  closure_1(obj);
                };
              }
            }
          }
          return () => {
            const point = { x: closure_0.x, y: closure_0.y, z: closure_0.z, interfaceOrientation: 0 };
            closure_1(point);
          };
        }
      }
      return () => {
        let tmp;
        let tmp2;
        let tmp3;
        let x;
        let y;
        let z;
        ({ x, y, z } = closure_0);
        tmp = z;
        tmp2 = y;
        tmp3 = x;
        if (self.platform === constants.WEB_ANDROID) {
          const items = [-x, -y, -z];
          [tmp3, tmp2, tmp] = items;
        }
        closure_1({ x: tmp3, y: tmp2, z: tmp, interfaceOrientation: 0 });
      };
    };
    new Map();
  }
}
const entry = {
  key: "registerEventHandler",
  value: function registerEventHandler(arg0, arg1, arg2) {
    const error = new Error("[Reanimated] registerEventHandler is not available in JSReanimated.");
    throw error;
  }
};
let items = [
  entry,
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      const error = new Error("[Reanimated] unregisterEventHandler is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {

    }
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {

    }
  },
  {
    key: "isSensorAvailable",
    value: function isSensorAvailable(arg0) {
      let IS_WINDOW_AVAILABLE = _mod1665.IS_WINDOW_AVAILABLE;
      if (IS_WINDOW_AVAILABLE) {
        const self = this;
        const _window = window;
        IS_WINDOW_AVAILABLE = this.getSensorName(arg0) in window;
      }
      return IS_WINDOW_AVAILABLE;
    }
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      if (_mod1665.IS_WINDOW_AVAILABLE) {
        const self = this;
        if (undefined === this.platform) {
          self.detectPlatform();
        }
        if (self.isSensorAvailable(arg0)) {
          if (undefined === self.platform) {
            self.detectPlatform();
          }
          const initializeSensorResult = self.initializeSensor(arg0, arg1);
          const listener = initializeSensorResult.addEventListener("reading", self.getSensorCallback(initializeSensorResult, arg0, arg3));
          initializeSensorResult.start();
          const sensors = self.sensors;
          const result = sensors.set(self.nextSensorId, initializeSensorResult);
          self.nextSensorId = +self.nextSensorId + 1;
          return +self.nextSensorId;
        } else {
          const logger = tmp(1665).logger;
          const warn = logger.warn;
          let str = "";
          let str2 = "";
          if (_mod1665.IS_WEB) {
            const _location = location;
            str2 = str;
            if ("https:" !== location.protocol) {
              str2 = " Make sure you use secure origin with `npx expo start --web --https`.";
            }
          }
          if (self.platform === obj.WEB_IOS) {
            str = " For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.";
          }
          const _HermesInternal = HermesInternal;
          warn("Sensor is not available." + str2 + str);
          return -1;
        }
      } else {
        return -1;
      }
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const sensors = this.sensors;
      const value = sensors.get(arg0);
      if (undefined !== value) {
        value.stop();
        const sensors2 = this.sensors;
        sensors2.delete(arg0);
      }
    }
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0) {
      const IS_WEB = _mod1665.IS_WEB;
      const tmp3 = _mod1665;
      if (IS_WEB) {
        const logger2 = tmp3.logger;
        logger2.warn("useAnimatedKeyboard is not available on web yet.");
      } else {
        const IS_JEST = tmp3.IS_JEST;
        const logger = _mod1665.logger;
        const warn = logger.warn;
        if (IS_JEST) {
          warn("useAnimatedKeyboard is not available when using Jest.");
        } else {
          warn("useAnimatedKeyboard is not available on this configuration.");
        }
      }
      return -1;
    }
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {

    }
  },
  {
    key: "initializeSensor",
    value: function initializeSensor(arg0, arg1) {
      let obj;
      if (arg1 <= 0) {
        obj = { referenceFrame: "device" };
      } else {
        obj = { frequency: 1000 / arg1 };
      }
      if (LayoutAnimationType.SensorType.ACCELEROMETER === arg0) {
        const _window5 = window;
        const self9 = this;
        const self10 = this;
        const accelerometer = new window.Accelerometer(obj);
        return accelerometer;
      } else if (LayoutAnimationType.SensorType.GYROSCOPE === arg0) {
        const _window4 = window;
        const self7 = this;
        const self8 = this;
        const gyroscope = new window.Gyroscope(obj);
        return gyroscope;
      } else if (LayoutAnimationType.SensorType.GRAVITY === arg0) {
        const _window3 = window;
        const self5 = this;
        const self6 = this;
        const gravitySensor = new window.GravitySensor(obj);
        return gravitySensor;
      } else if (LayoutAnimationType.SensorType.MAGNETIC_FIELD === arg0) {
        const _window2 = window;
        const self3 = this;
        const self4 = this;
        const magnetometer = new window.Magnetometer(obj);
        return magnetometer;
      } else if (LayoutAnimationType.SensorType.ROTATION === arg0) {
        const _window = window;
        const self = this;
        const self2 = this;
        const absoluteOrientationSensor = new window.AbsoluteOrientationSensor(obj);
        return absoluteOrientationSensor;
      }
    }
  },
  {
    key: "getSensorName",
    value: function getSensorName(arg0) {
      if (LayoutAnimationType.SensorType.ACCELEROMETER === arg0) {
        return "Accelerometer";
      } else if (LayoutAnimationType.SensorType.GRAVITY === arg0) {
        return "GravitySensor";
      } else if (LayoutAnimationType.SensorType.GYROSCOPE === arg0) {
        return "Gyroscope";
      } else if (LayoutAnimationType.SensorType.MAGNETIC_FIELD === arg0) {
        return "Magnetometer";
      } else if (LayoutAnimationType.SensorType.ROTATION === arg0) {
        return "AbsoluteOrientationSensor";
      }
    }
  },
  {
    key: "detectPlatform",
    value: function detectPlatform() {
      let obj;
      let opera = navigator.userAgent;
      if (!opera) {
        const _navigator = navigator;
        opera = navigator.vendor;
      }
      if (!opera) {
        const _window = window;
        opera = window.opera;
      }
      const self = this;
      if (undefined === opera) {
        self.platform = obj.UNKNOWN;
      } else {
        obj = /iPad|iPhone|iPod/;
        if (obj.test(opera)) {
          self.platform = obj.WEB_IOS;
        } else {
          const obj2 = /android/i;
          if (obj2.test(opera)) {
            self.platform = obj.WEB_ANDROID;
          } else {
            self.platform = obj.WEB;
          }
        }
      }
    }
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, arg2, arg3) {
      const error = new Error("[Reanimated] getViewProp is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      let tmp3 = !_mod1665.IS_JEST;
      if (tmp3) {
        let flag = DefaultStaticFeatureFlags.DefaultStaticFeatureFlags[arg0];
        if (flag == null) {
          flag = false;
        }
        tmp3 = flag;
      }
      return tmp3;
    }
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag() {

    }
  },
  {
    key: "setViewStyle",
    value: function setViewStyle(arg0, arg1) {
      const error = new Error("[Reanimated] setViewStyle is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "setCSSEventHandler",
    value: function setCSSEventHandler(arg0) {
      const error = new Error("[Reanimated] `setCSSEventHandler` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      const error = new Error("[Reanimated] markNodeAsRemovable is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const error = new Error("[Reanimated] unmarkNodeAsRemovable is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "registerCSSKeyframes",
    value: function registerCSSKeyframes(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `registerCSSKeyframes` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSKeyframes",
    value: function unregisterCSSKeyframes(arg0, arg1) {
      const error = new Error("[Reanimated] `unregisterCSSKeyframes` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "applyCSSAnimations",
    value: function applyCSSAnimations(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `applyCSSAnimations` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSAnimations",
    value: function unregisterCSSAnimations(arg0) {
      const error = new Error("[Reanimated] `unregisterCSSAnimations` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "runCSSTransition",
    value: function runCSSTransition(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `runCSSTransition` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSTransition",
    value: function unregisterCSSTransition(arg0) {
      const error = new Error("[Reanimated] `unregisterCSSTransition` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      const error = new Error("[Reanimated] `getSettledUpdates` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "registerPseudoStyles",
    value: function registerPseudoStyles() {
      const error = new Error("[Reanimated] `registerPseudoStyles` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterPseudoStyles",
    value: function unregisterPseudoStyles() {
      const error = new Error("[Reanimated] `unregisterPseudoStyles` is not available in JSReanimated.");
      throw error;
    }
  }
];
let closure_4 = _createClassDefault(JSReanimated, items);
const Platform = { WEB_IOS: "web iOS", WEB_ANDROID: "web Android", WEB: "web", UNKNOWN: "unknown" };

export function createJSReanimatedModule() {
  const tmp = new closure_4();
  return tmp;
}
export { Platform };
