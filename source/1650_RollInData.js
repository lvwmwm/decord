// Module ID: 1650
// Function ID: 18348
// Name: RollInData
// Dependencies: [1640]

// Module 1650 (RollInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { RollInLeft: obj, RollInRight: obj };
obj = { name: "RollInLeft", style: null, duration: 0.3 };
const items = [{ translateX: "-100vw", rotate: "-180deg" }];
const items1 = [{ translateX: "0vw", rotate: "0deg" }];
obj.style = { [0]: { transform: items }, [100]: { transform: items1 } };
obj = { name: "RollInRight", style: null, duration: 0.3 };
const items2 = [{ translateX: "100vw", rotate: "180deg" }];
const items3 = [{ translateX: "0vw", rotate: "0deg" }];
obj.style = { [0]: { transform: items2 }, [100]: { transform: items3 } };
const obj1 = { RollOutLeft: obj2, RollOutRight: obj3 };
obj2 = { name: "RollOutLeft", style: null, duration: 0.3 };
const items4 = [{ translateX: "0vw", rotate: "0deg" }];
const items5 = [{ translateX: "-100vw", rotate: "-180deg" }];
obj2.style = { [0]: { transform: items4 }, [100]: { transform: items5 } };
obj3 = { name: "RollOutRight", style: null, duration: 0.3 };
const items6 = [{ translateX: "0vw", rotate: "0deg" }];
const items7 = [{ translateX: "100vw", rotate: "180deg" }];
obj3.style = { [0]: { transform: items6 }, [100]: { transform: items7 } };
const obj4 = {};
const obj5 = {};
obj5.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RollInLeft);
obj5.duration = obj.RollInLeft.duration;
obj4.RollInLeft = obj5;
const obj6 = {};
obj6.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RollInRight);
obj6.duration = obj.RollInRight.duration;
obj4.RollInRight = obj6;
const obj7 = {};
const obj8 = {};
obj8.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.RollOutLeft);
obj8.duration = obj1.RollOutLeft.duration;
obj7.RollOutLeft = obj8;
const obj9 = {};
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.RollOutRight);
obj9.duration = obj1.RollOutRight.duration;
obj7.RollOutRight = obj9;

export const RollInData = obj;
export const RollOutData = obj1;
export const RollIn = obj4;
export const RollOut = obj7;
