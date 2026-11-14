// Module ID: 1903
// Function ID: 1904
// Name: useAnimatedSensor
// Dependencies: [19, 1700, 1830]
// Exports: useAnimatedSensor

// Module 1903 (useAnimatedSensor)
import LayoutAnimationType from "LayoutAnimationType" /* 1700 */;
import startMapper from "startMapper" /* 1830 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp10;
let tmp11;
let tmp12;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
({ useCallback: c2, useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useSyncExternalStore: metroRequire } = react);
let items = [{ code: "(function eulerToQuaternion_Pnpm_useAnimatedSensorTs1(pitch,roll,yaw){const c1=Math.cos(pitch/2);const s1=Math.sin(pitch/2);const c2=Math.cos(roll/2);const s2=Math.sin(roll/2);const c3=Math.cos(yaw/2);const s3=Math.sin(yaw/2);return[s1*c2*c3-c1*s2*s3,c1*s2*c3+s1*c2*s3,c1*c2*s3+s1*s2*c3,c1*c2*c3-s1*s2*s3];})" }];
[tmp3] = items;
function eulerToQuaternion(arg0, arg1, arg2) {
  const cosResult = Math.cos(arg0 / 2);
  const sinResult = Math.sin(arg0 / 2);
  const cosResult1 = Math.cos(arg1 / 2);
  const sinResult1 = Math.sin(arg1 / 2);
  const cosResult2 = Math.cos(arg2 / 2);
  const sinResult2 = Math.sin(arg2 / 2);
  const items = [sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2, cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2, cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2, cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2];
  return items;
}
eulerToQuaternion.__workletHash = 262887109432;
eulerToQuaternion.__initData = tmp3;
let items1 = [{ code: "(function adjustRotationToInterfaceOrientation_Pnpm_useAnimatedSensorTs2(data){let[InterfaceOrientation,eulerToQuaternion]=this.__closure;const{interfaceOrientation:interfaceOrientation,pitch:pitch,roll:roll,yaw:yaw}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.pitch=roll;data.roll=-pitch;data.yaw=yaw-Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.pitch=-roll;data.roll=pitch;data.yaw=yaw+Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.pitch*=-1;data.roll*=-1;data.yaw*=-1;}const q=eulerToQuaternion(data.pitch,data.roll,data.yaw);data.qx=q[0];data.qy=q[1];data.qz=q[2];data.qw=q[3];return data;})" }, LayoutAnimationType.InterfaceOrientation, eulerToQuaternion];
[tmp4, tmp5, tmp6] = items1;
function adjustRotationToInterfaceOrientation(pitch) {
  let interfaceOrientation;
  let roll;
  let yaw;
  ({ interfaceOrientation, pitch, roll, yaw } = pitch);
  if (interfaceOrientation === _undefined.ROTATION_90) {
    pitch.pitch = roll;
    pitch.roll = -pitch;
    const _Math2 = Math;
    pitch.yaw = yaw - Math.PI / 2;
  } else if (interfaceOrientation === _undefined.ROTATION_270) {
    pitch.pitch = -roll;
    pitch.roll = pitch;
    const _Math = Math;
    pitch.yaw = yaw + Math.PI / 2;
  } else if (interfaceOrientation === _undefined.ROTATION_180) {
    pitch.pitch = pitch.pitch * -1;
    pitch.roll = pitch.roll * -1;
    pitch.yaw = pitch.yaw * -1;
  }
  [pitch.qx, pitch.qy, pitch.qz, pitch.qw] = _undefined2(pitch.pitch, pitch.roll, pitch.yaw);
  _undefined2(pitch.pitch, pitch.roll, pitch.yaw);
  return pitch;
}
let items2 = [tmp5, tmp6];
adjustRotationToInterfaceOrientation.__closure = items2;
adjustRotationToInterfaceOrientation.__workletHash = 16982514813329;
adjustRotationToInterfaceOrientation.__initData = tmp4;
let items3 = [{ code: "(function adjustVectorToInterfaceOrientation_Pnpm_useAnimatedSensorTs3(data){let[InterfaceOrientation]=this.__closure;const{interfaceOrientation:interfaceOrientation,x:x,y:y}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.x=-y;data.y=x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.x=y;data.y=-x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.x*=-1;data.y*=-1;}return data;})" }, LayoutAnimationType.InterfaceOrientation];
[tmp7, tmp8] = items3;
function adjustVectorToInterfaceOrientation(arg0) {
  let interfaceOrientation;
  let x;
  let y;
  ({ interfaceOrientation, x, y } = arg0);
  if (interfaceOrientation === _undefined.ROTATION_90) {
    arg0.x = -y;
    arg0.y = x;
  } else if (interfaceOrientation === _undefined.ROTATION_270) {
    arg0.x = y;
    arg0.y = -x;
  } else if (interfaceOrientation === _undefined.ROTATION_180) {
    arg0.x = arg0.x * -1;
    arg0.y = arg0.y * -1;
  }
  return arg0;
}
let items4 = [tmp8];
adjustVectorToInterfaceOrientation.__closure = items4;
adjustVectorToInterfaceOrientation.__workletHash = 4544131326927;
adjustVectorToInterfaceOrientation.__initData = tmp7;
const items5 = [{ code: "(function adjustDataToInterfaceOrientation_Pnpm_useAnimatedSensorTs4(sensorType,data){let[SensorType,adjustVectorToInterfaceOrientation,adjustRotationToInterfaceOrientation]=this.__closure;switch(sensorType){case SensorType.ACCELEROMETER:case SensorType.GYROSCOPE:case SensorType.GRAVITY:case SensorType.MAGNETIC_FIELD:return adjustVectorToInterfaceOrientation(data);case SensorType.ROTATION:return adjustRotationToInterfaceOrientation(data);}})" }, LayoutAnimationType.SensorType, adjustVectorToInterfaceOrientation, adjustRotationToInterfaceOrientation];
let c0;
let c1;
c2 = undefined;
[tmp9, tmp10, tmp11, tmp12] = items5;
function adjustDataToInterfaceOrientation(arg0, arg1) {
  if (_undefined.ACCELEROMETER !== arg0) {
    if (_undefined.GYROSCOPE !== arg0) {
      if (_undefined.GRAVITY !== arg0) {
        if (_undefined.MAGNETIC_FIELD !== arg0) {
          if (_undefined.ROTATION === arg0) {
            return _undefined3(arg1);
          }
        }
      }
    }
  }
  return _undefined2(arg1);
}
const items6 = [tmp10, tmp11, tmp12];
adjustDataToInterfaceOrientation.__closure = items6;
adjustDataToInterfaceOrientation.__workletHash = 7185976917906;
adjustDataToInterfaceOrientation.__initData = tmp9;
function NOOP() {

}
function subscribeToSensorAvailability() {
  return NOOP;
}
function getServerSensorAvailability() {
  return false;
}
let closure_11 = { code: "(function pnpm_useAnimatedSensorTs5(data){let[sensor,adjustToInterfaceOrientation,adjustDataToInterfaceOrientation,sensorType]=this.__closure;sensor.value=adjustToInterfaceOrientation?adjustDataToInterfaceOrientation(sensorType,data):data;})" };

export function useAnimatedSensor(sensorType, arg1) {
  let config;
  let sensor;
  _require = sensorType;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const interval = obj.interval;
  let str = "auto";
  if (undefined !== interval) {
    str = interval;
  }
  let adjustToInterfaceOrientation = obj.adjustToInterfaceOrientation;
  let tmp = undefined === adjustToInterfaceOrientation || adjustToInterfaceOrientation;
  adjustToInterfaceOrientation = tmp;
  let Auto = obj.iosReferenceFrame;
  if (undefined === Auto) {
    let tmp2 = _require;
    const tmp3 = str;
    Auto = require("LayoutAnimationType").IOSReferenceFrame.Auto;
  }
  let items = [str, tmp, Auto];
  const tmp4 = config(() => ({ interval: str, adjustToInterfaceOrientation, iosReferenceFrame: Auto }), items);
  config = tmp4;
  let items1 = [sensorType];
  const tmp5 = sensor(subscribeToSensorAvailability, adjustToInterfaceOrientation(() => {
    const obj = startMapper;
    return obj.isSensorAvailable(sensorType);
  }, items1), getServerSensorAvailability);
  const isAvailable = tmp5;
  const items2 = [sensorType, tmp4];
  const tmp6 = config(() => {
    const obj = startMapper;
    return obj.initializeSensor(sensorType, config);
  }, items2);
  sensor = tmp6;
  const obj2 = { sensorType, config: tmp4, unregister: NOOP };
  let closure_7 = isAvailable(obj2);
  const items3 = [sensorType, tmp4, tmp6, tmp];
  const tmp7 = Auto(() => {
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let obj = startMapper;
    let tmp = sensorType;
    let tmp2 = config;
    const items = [closure_11, sensor, adjustToInterfaceOrientation, adjustDataToInterfaceOrientation, sensorType];
    let c0;
    let c2;
    let c3;
    [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
    function pnpm_useAnimatedSensorTs5(arg0) {
      let tmp2 = arg0;
      const tmp = c0;
      if (c1) {
        tmp2 = _undefined(c3, arg0);
      }
      tmp.value = tmp2;
    }
    const items1 = [tmp4, tmp5, tmp6, tmp7];
    pnpm_useAnimatedSensorTs5.__closure = items1;
    pnpm_useAnimatedSensorTs5.__workletHash = 4029983037524;
    pnpm_useAnimatedSensorTs5.__initData = tmp3;
    const registerSensorResult = obj.registerSensor(tmp, tmp2, pnpm_useAnimatedSensorTs5);
    let c1 = -1 !== registerSensorResult;
    function unregister() {
      const tmp = c1;
      if (tmp) {
        c1 = false;
        const obj = sensorType(str[2]);
        obj.unregisterSensor(registerSensorResult);
      }
    }
    closure_7.current = { sensorType: tmp, config: tmp2, unregister };
    return unregister;
  }, items3);
  const items4 = [sensorType, tmp6, tmp5, tmp4];
  return config(() => {
    let ref;
    return {
      sensor,
      isAvailable,
      config,
      unregister() {
        const current = ref.current;
        const tmp = current.sensorType === sensorType && current.config === config;
        if (tmp) {
          current.unregister();
        }
      }
    };
  }, items4);
}
