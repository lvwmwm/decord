// Module ID: 1647
// Function ID: 18344
// Name: LightSpeedInData
// Dependencies: [1640]

// Module 1647 (LightSpeedInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { LightSpeedInRight: obj, LightSpeedInLeft: obj };
obj = { name: "LightSpeedInRight", style: null, duration: 0.3 };
const items = [{ translateX: "100vw", skewX: "-45deg" }];
const items1 = [{ skewX: "10deg" }];
const items2 = [{ skewX: "-5deg" }];
const items3 = [{ skewX: "0deg" }];
obj.style = { [0]: { transform: items, opacity: 0 }, [70]: { transform: items1 }, [85]: { transform: items2 }, [100]: { transform: items3 } };
obj = { name: "LightSpeedInLeft", style: null, duration: 0.3 };
const items4 = [{ translateX: "-100vw", skewX: "45deg" }];
const items5 = [{ skewX: "-10deg" }];
const items6 = [{ skewX: "5deg" }];
const items7 = [{ skewX: "0deg" }];
obj.style = { [0]: { transform: items4, opacity: 0 }, [70]: { transform: items5 }, [85]: { transform: items6 }, [100]: { transform: items7 } };
const obj1 = { LightSpeedOutRight: obj2, LightSpeedOutLeft: obj3 };
obj2 = { name: "LightSpeedOutRight", style: null, duration: 0.3 };
const items8 = [{ translateX: "0vw", skewX: "0deg" }];
const items9 = [{ translateX: "100vw", skewX: "-45deg" }];
obj2.style = { [0]: { transform: items8, opacity: 1 }, [100]: { transform: items9, opacity: 0 } };
obj3 = { name: "LightSpeedOutLeft", style: null, duration: 0.3 };
const items10 = [{ translateX: "0vw", skew: "0deg" }];
const items11 = [{ translateX: "-100vw", skew: "45deg" }];
obj3.style = { [0]: { transform: items10, opacity: 1 }, [100]: { transform: items11, opacity: 0 } };
const obj4 = {};
const obj5 = {};
obj5.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.LightSpeedInRight);
obj5.duration = obj.LightSpeedInRight.duration;
obj4.LightSpeedInRight = obj5;
const obj6 = {};
obj6.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.LightSpeedInLeft);
obj6.duration = obj.LightSpeedInLeft.duration;
obj4.LightSpeedInLeft = obj6;
const obj7 = {};
const obj8 = {};
obj8.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.LightSpeedOutRight);
obj8.duration = obj1.LightSpeedOutRight.duration;
obj7.LightSpeedOutRight = obj8;
const obj9 = {};
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.LightSpeedOutLeft);
obj9.duration = obj1.LightSpeedOutLeft.duration;
obj7.LightSpeedOutLeft = obj9;

export const LightSpeedInData = obj;
export const LightSpeedOutData = obj1;
export const LightSpeedIn = obj4;
export const LightSpeedOut = obj7;
