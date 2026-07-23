// Module ID: 1596
// Function ID: 17783
// Dependencies: [57, 6, 7, 100, 1585, 1597, 1598, 1607, 1593, 1586]

// Module 1596
import _slicedToArray from "_slicedToArray";
import WorkletsModule from "WorkletsModule";
import isWorkletFunction from "isWorkletFunction";
import isJest from "isJest";
import { mockedRequestAnimationFrame } from "mockedRequestAnimationFrame";

const require = arg1;
if (!isJest.isJest()) {
  const _globalThis = globalThis;
  if (requestAnimationFrame) {
    const _globalThis2 = globalThis;
    let mockedRequestAnimationFrame = requestAnimationFrame;
  }
  let closure_6 = importDefaultResult("workletsModule");
  let closure_7 = (() => {
    class JSReanimated {
      constructor() {
        self = this;
        tmp = outer1_3(this, self);
        obj = { writable: true, value: JSReanimated(outer1_1[6]).WorkletsModule };
        definePropertyResult = Object.defineProperty(this, outer1_6, obj);
        this.nextSensorId = 0;
        map = new Map();
        this.sensors = map;
        this.platform = undefined;
        this.getSensorCallback = (arg0, arg1, arg2) => {
          let closure_0 = arg0;
          let closure_1 = arg2;
          if (JSReanimated(outer2_1[7]).SensorType.ACCELEROMETER !== arg1) {
            if (JSReanimated(outer2_1[7]).SensorType.GRAVITY !== arg1) {
              if (JSReanimated(outer2_1[7]).SensorType.GYROSCOPE !== arg1) {
                if (JSReanimated(outer2_1[7]).SensorType.MAGNETIC_FIELD !== arg1) {
                  if (JSReanimated(outer2_1[7]).SensorType.ROTATION === arg1) {
                    return () => {
                      let tmp6;
                      let tmp7;
                      const tmp = outer3_2(closure_0.quaternion, 4);
                      const first = tmp[0];
                      if (closure_0.platform === outer3_8.WEB_ANDROID) {
                        const items = [tmp5, -tmp4];
                        [tmp6, tmp7] = items;
                      }
                      const tmp8 = -Math.atan2(2 * (tmp[2] * tmp[3] + first * tmp[1]), first * first - tmp[1] * tmp[1] - tmp[2] * tmp[2] + tmp[3] * tmp[3]);
                      const obj = { qw: first, qx: tmp[1], qy: tmp[2], qz: tmp[3], yaw: tmp8, pitch: Math.sin(-2 * (tmp[1] * tmp[3] - first * tmp[2])), roll: -Math.atan2(2 * (tmp[1] * tmp[2] + first * tmp[3]), first * first + tmp[1] * tmp[1] - tmp[2] * tmp[2] - tmp[3] * tmp[3]), interfaceOrientation: 0 };
                      callback(obj);
                    };
                  }
                }
              }
              return () => {
                callback({ x: closure_0.x, y: closure_0.y, z: closure_0.z, interfaceOrientation: 0 });
              };
            }
          }
          return () => {
            let x;
            let y;
            let z;
            ({ x, y, z } = closure_0);
            let first = x;
            let tmp2 = y;
            let tmp3 = z;
            if (closure_0.platform === outer3_8.WEB_ANDROID) {
              const items = [-x, -y, -z];
              first = items[0];
              tmp2 = items[1];
              tmp3 = items[2];
            }
            const obj = { x: first, y: tmp2, z: tmp3, interfaceOrientation: 0 };
            callback(obj);
          };
        };
        return;
      }
    }
    let obj = {
      key: "scheduleOnUI",
      value: function scheduleOnUI(arg0) {
        outer1_5(arg0);
      }
    };
    let items = [obj, , , , , , , , , , , , , , , , , , , , ];
    obj = {
      key: "createWorkletRuntime",
      value: function createWorkletRuntime(arg0, arg1) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("createWorkletRuntime is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[1] = obj;
    obj = {
      key: "scheduleOnRuntime",
      value: function scheduleOnRuntime() {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("scheduleOnRuntime is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[2] = obj;
    items[3] = {
      key: "registerEventHandler",
      value: function registerEventHandler(arg0, arg1, arg2) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("registerEventHandler is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[4] = {
      key: "unregisterEventHandler",
      value: function unregisterEventHandler(arg0) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("unregisterEventHandler is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[5] = {
      key: "enableLayoutAnimations",
      value: function enableLayoutAnimations() {
        if (obj.isWeb()) {
          const logger3 = tmp(tmp2[9]).logger;
          logger3.warn("Layout Animations are not supported on web yet.");
        } else {
          if (tmpResult.isJest()) {
            const logger2 = tmp3(tmp4[9]).logger;
            logger2.warn("Layout Animations are no-ops when using Jest.");
          } else {
            const tmp3Result = tmp3(tmp4[4]);
            const logger = JSReanimated(outer1_1[9]).logger;
            const warn = logger.warn;
            if (isChromeDebuggerResult) {
              warn("Layout Animations are no-ops when using Chrome Debugger.");
            } else {
              warn("Layout Animations are not supported on this configuration.");
            }
            isChromeDebuggerResult = tmp3(tmp4[4]).isChromeDebugger();
          }
          tmpResult = tmp(tmp2[4]);
        }
      }
    };
    items[6] = {
      key: "configureLayoutAnimationBatch",
      value: function configureLayoutAnimationBatch() {

      }
    };
    items[7] = {
      key: "setShouldAnimateExitingForTag",
      value: function setShouldAnimateExitingForTag() {

      }
    };
    items[8] = {
      key: "registerSensor",
      value: function registerSensor(arg0, arg1, arg2, arg3) {
        const self = this;
        if (obj.isWindowAvailable()) {
          if (undefined === self.platform) {
            self.detectPlatform();
          }
          const _window = window;
          if (self.getSensorName(arg0) in window) {
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
            const logger = JSReanimated(outer1_1[9]).logger;
            let str = "";
            let str2 = "";
            if (obj2.isWeb()) {
              const _location = location;
              str2 = str;
              if ("https:" !== location.protocol) {
                str2 = " Make sure you use secure origin with `npx expo start --web --https`.";
              }
            }
            if (self.platform === outer1_8.WEB_IOS) {
              str = " For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.";
            }
            logger.warn(`Sensor is not available.${str2}${str}`);
            return -1;
          }
        } else {
          return -1;
        }
        obj = JSReanimated(outer1_1[4]);
      }
    };
    items[9] = {
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
    };
    items[10] = {
      key: "subscribeForKeyboardEvents",
      value: function subscribeForKeyboardEvents(arg0) {
        if (obj.isWeb()) {
          const logger3 = tmp(tmp2[9]).logger;
          logger3.warn("useAnimatedKeyboard is not available on web yet.");
        } else {
          if (tmpResult.isJest()) {
            const logger2 = tmp3(tmp4[9]).logger;
            logger2.warn("useAnimatedKeyboard is not available when using Jest.");
          } else {
            const tmp3Result = tmp3(tmp4[4]);
            const logger = JSReanimated(outer1_1[9]).logger;
            const warn = logger.warn;
            if (isChromeDebuggerResult) {
              warn("useAnimatedKeyboard is not available when using Chrome Debugger.");
            } else {
              warn("useAnimatedKeyboard is not available on this configuration.");
            }
            isChromeDebuggerResult = tmp3(tmp4[4]).isChromeDebugger();
          }
          tmpResult = tmp(tmp2[4]);
        }
        return -1;
      }
    };
    items[11] = {
      key: "unsubscribeFromKeyboardEvents",
      value: function unsubscribeFromKeyboardEvents(arg0) {

      }
    };
    items[12] = {
      key: "initializeSensor",
      value: function initializeSensor(arg0, arg1) {
        if (arg1 <= 0) {
          let obj = { referenceFrame: "device" };
        } else {
          obj = { frequency: 1000 / arg1 };
        }
        if (JSReanimated(outer1_1[7]).SensorType.ACCELEROMETER === arg0) {
          const _window5 = window;
          const prototype5 = Accelerometer.prototype;
          const accelerometer = new Accelerometer(obj);
          return accelerometer;
        } else if (JSReanimated(outer1_1[7]).SensorType.GYROSCOPE === arg0) {
          const _window4 = window;
          const prototype4 = Gyroscope.prototype;
          const gyroscope = new Gyroscope(obj);
          return gyroscope;
        } else if (JSReanimated(outer1_1[7]).SensorType.GRAVITY === arg0) {
          const _window3 = window;
          const prototype3 = GravitySensor.prototype;
          const gravitySensor = new GravitySensor(obj);
          return gravitySensor;
        } else if (JSReanimated(outer1_1[7]).SensorType.MAGNETIC_FIELD === arg0) {
          const _window2 = window;
          const prototype2 = Magnetometer.prototype;
          const magnetometer = new Magnetometer(obj);
          return magnetometer;
        } else if (JSReanimated(outer1_1[7]).SensorType.ROTATION === arg0) {
          const _window = window;
          const prototype = AbsoluteOrientationSensor.prototype;
          const absoluteOrientationSensor = new AbsoluteOrientationSensor(obj);
          return absoluteOrientationSensor;
        }
      }
    };
    items[13] = {
      key: "getSensorName",
      value: function getSensorName(arg0) {
        if (JSReanimated(outer1_1[7]).SensorType.ACCELEROMETER === arg0) {
          return "Accelerometer";
        } else if (JSReanimated(outer1_1[7]).SensorType.GRAVITY === arg0) {
          return "GravitySensor";
        } else if (JSReanimated(outer1_1[7]).SensorType.GYROSCOPE === arg0) {
          return "Gyroscope";
        } else if (JSReanimated(outer1_1[7]).SensorType.MAGNETIC_FIELD === arg0) {
          return "Magnetometer";
        } else if (JSReanimated(outer1_1[7]).SensorType.ROTATION === arg0) {
          return "AbsoluteOrientationSensor";
        }
      }
    };
    items[14] = {
      key: "getSettledUpdates",
      value: function getSettledUpdates() {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("`getSettledUpdates` is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[15] = {
      key: "detectPlatform",
      value: function detectPlatform() {
        const self = this;
        let opera = navigator.userAgent;
        if (!opera) {
          const _navigator = navigator;
          opera = navigator.vendor;
        }
        if (!opera) {
          const _window = window;
          opera = window.opera;
        }
        if (undefined === opera) {
          self.platform = outer1_8.UNKNOWN;
        } else {
          if (obj.test(opera)) {
            self.platform = outer1_8.WEB_IOS;
          } else {
            if (obj2.test(opera)) {
              self.platform = tmp.WEB_ANDROID;
            } else {
              self.platform = tmp.WEB;
            }
            obj2 = /android/i;
          }
          obj = /iPad|iPhone|iPod/;
        }
      }
    };
    items[16] = {
      key: "getViewProp",
      value: function getViewProp(arg0, arg1, arg2, arg3) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("getViewProp is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[17] = {
      key: "configureProps",
      value: function configureProps() {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("configureProps is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[18] = {
      key: "executeOnUIRuntimeSync",
      value: function executeOnUIRuntimeSync(arg0) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("`executeOnUIRuntimeSync` is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[19] = {
      key: "markNodeAsRemovable",
      value: function markNodeAsRemovable(arg0) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("markNodeAsRemovable is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    items[20] = {
      key: "unmarkNodeAsRemovable",
      value: function unmarkNodeAsRemovable(arg0) {
        const reanimatedError = new JSReanimated(outer1_1[8]).ReanimatedError("unmarkNodeAsRemovable is not available in JSReanimated.");
        throw reanimatedError;
      }
    };
    return callback(JSReanimated, items);
  })();
  isJest = { WEB_IOS: "web iOS", WEB_ANDROID: "web Android", WEB: "web", UNKNOWN: "unknown" };
  exports.createJSReanimatedModule = function createJSReanimatedModule() {
    return new closure_7();
  };
  exports.Platform = isJest;
}
