// Module ID: 1648
// Function ID: 18345
// Name: PinwheelData
// Dependencies: [1640]

// Module 1648 (PinwheelData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { PinwheelIn: obj, PinwheelOut: obj };
obj = { name: "PinwheelIn", style: null, duration: 0.3 };
const items = [{ rotate: "5rad", scale: 0 }];
const items1 = [{ rotate: "0deg", scale: 1 }];
obj.style = { [0]: { transform: items, opacity: 0 }, [100]: { transform: items1, opacity: 1 } };
obj = { name: "PinwheelOut", style: null, duration: 0.3 };
const items2 = [{ rotate: "0rad", scale: 1 }];
const items3 = [{ rotate: "5rad", scale: 0 }];
obj.style = { [0]: { transform: items2, opacity: 1 }, [100]: { transform: items3, opacity: 0 } };
const obj1 = {};
const obj2 = {};
obj2.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelIn);
obj2.duration = obj.PinwheelIn.duration;
obj1.PinwheelIn = obj2;
const obj3 = {};
obj3.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelOut);
obj3.duration = obj.PinwheelOut.duration;
obj1.PinwheelOut = obj3;

export const PinwheelData = obj;
export const Pinwheel = obj1;
