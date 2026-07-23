// Module ID: 1738
// Function ID: 19477
// Name: eulerToQuaternion
// Dependencies: [31, 1607, 1626, 1589]
// Exports: useAnimatedSensor

// Module 1738 (eulerToQuaternion)
import result from "result";

let closure_2;
let closure_3;
let closure_4;
({ useEffect: closure_2, useMemo: closure_3, useRef: closure_4 } = result);
let closure_5 = { code: "function eulerToQuaternion_Pnpm_useAnimatedSensorTs1(pitch,roll,yaw){const c1=Math.cos(pitch/2);const s1=Math.sin(pitch/2);const c2=Math.cos(roll/2);const s2=Math.sin(roll/2);const c3=Math.cos(yaw/2);const s3=Math.sin(yaw/2);return[s1*c2*c3-c1*s2*s3,c1*s2*c3+s1*c2*s3,c1*c2*s3+s1*s2*c3,c1*c2*c3-s1*s2*s3];}" };
let closure_6 = (() => {
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
  eulerToQuaternion.__closure = {};
  eulerToQuaternion.__workletHash = 14525486759705;
  eulerToQuaternion.__initData = closure_5;
  return eulerToQuaternion;
})();
let closure_7 = { code: "function adjustRotationToInterfaceOrientation_Pnpm_useAnimatedSensorTs2(data){const{InterfaceOrientation,eulerToQuaternion}=this.__closure;const{interfaceOrientation:interfaceOrientation,pitch:pitch,roll:roll,yaw:yaw}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.pitch=roll;data.roll=-pitch;data.yaw=yaw-Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.pitch=-roll;data.roll=pitch;data.yaw=yaw+Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.pitch*=-1;data.roll*=-1;data.yaw*=-1;}const q=eulerToQuaternion(data.pitch,data.roll,data.yaw);data.qx=q[0];data.qy=q[1];data.qz=q[2];data.qw=q[3];return data;}" };
let closure_8 = (() => {
  function adjustRotationToInterfaceOrientation(pitch) {
    let interfaceOrientation;
    let roll;
    let yaw;
    ({ interfaceOrientation, pitch, roll, yaw } = pitch);
    if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_90) {
      pitch.pitch = roll;
      pitch.roll = -pitch;
      const _Math2 = Math;
      pitch.yaw = yaw - Math.PI / 2;
    } else if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_270) {
      pitch.pitch = -roll;
      pitch.roll = pitch;
      const _Math = Math;
      pitch.yaw = yaw + Math.PI / 2;
    } else if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_180) {
      pitch.pitch = pitch.pitch * -1;
      pitch.roll = pitch.roll * -1;
      pitch.yaw = pitch.yaw * -1;
    }
    const tmp5 = outer1_6(pitch.pitch, pitch.roll, pitch.yaw);
    [pitch.qx, pitch.qy] = tmp5;
    pitch.qz = tmp5[2];
    pitch.qw = tmp5[3];
    return pitch;
  }
  adjustRotationToInterfaceOrientation.__closure = { InterfaceOrientation: require(1607) /* isWorkletFunction */.InterfaceOrientation, eulerToQuaternion: closure_6 };
  adjustRotationToInterfaceOrientation.__workletHash = 16635654688360;
  adjustRotationToInterfaceOrientation.__initData = closure_7;
  return adjustRotationToInterfaceOrientation;
})();
let closure_9 = { code: "function adjustVectorToInterfaceOrientation_Pnpm_useAnimatedSensorTs3(data){const{InterfaceOrientation}=this.__closure;const{interfaceOrientation:interfaceOrientation,x:x,y:y}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.x=-y;data.y=x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.x=y;data.y=-x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.x*=-1;data.y*=-1;}return data;}" };
let closure_10 = (() => {
  function adjustVectorToInterfaceOrientation(arg0) {
    let interfaceOrientation;
    let x;
    let y;
    ({ interfaceOrientation, x, y } = arg0);
    if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_90) {
      arg0.x = -y;
      arg0.y = x;
    } else if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_270) {
      arg0.x = y;
      arg0.y = -x;
    } else if (interfaceOrientation === outer1_0(outer1_1[1]).InterfaceOrientation.ROTATION_180) {
      arg0.x = arg0.x * -1;
      arg0.y = arg0.y * -1;
    }
    return arg0;
  }
  adjustVectorToInterfaceOrientation.__closure = { InterfaceOrientation: require(1607) /* isWorkletFunction */.InterfaceOrientation };
  adjustVectorToInterfaceOrientation.__workletHash = 5352466445526;
  adjustVectorToInterfaceOrientation.__initData = closure_9;
  return adjustVectorToInterfaceOrientation;
})();
let closure_11 = { code: "function pnpm_useAnimatedSensorTs4(data){const{adjustToInterfaceOrientation,sensorType,SensorType,adjustRotationToInterfaceOrientation,adjustVectorToInterfaceOrientation,sensorData,callMicrotasks}=this.__closure;if(adjustToInterfaceOrientation){if(sensorType===SensorType.ROTATION){data=adjustRotationToInterfaceOrientation(data);}else{data=adjustVectorToInterfaceOrientation(data);}}sensorData.value=data;callMicrotasks();}" };

export const useAnimatedSensor = function useAnimatedSensor(arg0, adjustToInterfaceOrientation) {
  const _require = arg0;
  const tmp = callback3(adjustToInterfaceOrientation);
  const dependencyMap = tmp;
  let current = tmp.current;
  let prop;
  if (null != current) {
    prop = current.adjustToInterfaceOrientation;
  }
  let prop1;
  if (null != adjustToInterfaceOrientation) {
    prop1 = adjustToInterfaceOrientation.adjustToInterfaceOrientation;
  }
  let tmp4 = prop !== prop1;
  if (!tmp4) {
    const current2 = tmp.current;
    let interval;
    if (null != current2) {
      interval = current2.interval;
    }
    let interval1;
    if (null != adjustToInterfaceOrientation) {
      interval1 = adjustToInterfaceOrientation.interval;
    }
    tmp4 = interval !== interval1;
  }
  if (!tmp4) {
    const current3 = tmp.current;
    let iosReferenceFrame;
    if (null != current3) {
      iosReferenceFrame = current3.iosReferenceFrame;
    }
    let iosReferenceFrame1;
    if (null != adjustToInterfaceOrientation) {
      iosReferenceFrame1 = adjustToInterfaceOrientation.iosReferenceFrame;
    }
    tmp4 = iosReferenceFrame !== iosReferenceFrame1;
  }
  if (tmp4) {
    const _Object = Object;
    tmp.current = Object.assign({}, adjustToInterfaceOrientation);
  }
  const items = [tmp.current];
  const tmp10 = callback2(() => {
    const obj = { interval: "auto", adjustToInterfaceOrientation: true, iosReferenceFrame: callback(tmp[1]).IOSReferenceFrame.Auto };
    return Object.assign(obj, tmp.current);
  }, items);
  const callback = tmp10;
  let obj = {
    sensor: _require(1626).initializeSensor(arg0, tmp10),
    unregister() {

    },
    isAvailable: false,
    config: tmp10
  };
  const tmp11 = callback3(obj);
  callback2 = tmp11;
  const items1 = [arg0, tmp10];
  callback(() => {
    let obj = {
      sensor: callback(tmp[2]).initializeSensor(sensor, registerSensorResult),
      unregister() {

      },
      isAvailable: false,
      config: registerSensorResult
    };
    tmp11.current = obj;
    sensor = tmp11.current.sensor;
    const adjustToInterfaceOrientation = tmp11.current.config.adjustToInterfaceOrientation;
    const obj2 = callback(tmp[2]);
    /* worklet (recovered source) */ function pnpm_useAnimatedSensorTs4(data){const{adjustToInterfaceOrientation,sensorType,SensorType,adjustRotationToInterfaceOrientation,adjustVectorToInterfaceOrientation,sensorData,callMicrotasks}=this.__closure;if(adjustToInterfaceOrientation){if(sensorType===SensorType.ROTATION){data=adjustRotationToInterfaceOrientation(data);}else{data=adjustVectorToInterfaceOrientation(data);}}sensorData.value=data;callMicrotasks();}
    obj = { adjustToInterfaceOrientation, sensorType: sensor, SensorType: callback(tmp[1]).SensorType, adjustRotationToInterfaceOrientation: outer1_8, adjustVectorToInterfaceOrientation: outer1_10, sensorData: sensor, callMicrotasks: callback(tmp[3]).callMicrotasks };
    pnpm_useAnimatedSensorTs4.__closure = obj;
    pnpm_useAnimatedSensorTs4.__workletHash = 6807952122364;
    pnpm_useAnimatedSensorTs4.__initData = outer1_11;
    registerSensorResult = callback(tmp[2]).registerSensor(sensor, registerSensorResult, pnpm_useAnimatedSensorTs4);
    if (-1 !== registerSensorResult) {
      tmp11.current.unregister = () => sensor(adjustToInterfaceOrientation[2]).unregisterSensor(closure_2);
      tmp11.current.isAvailable = true;
    } else {
      tmp11.current.unregister = () => {

      };
      tmp11.current.isAvailable = false;
    }
    return () => {
      const current = outer1_3.current;
      current.unregister();
    };
  }, items1);
  return tmp11.current;
};
