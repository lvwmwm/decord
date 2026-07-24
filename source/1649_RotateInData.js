// Module ID: 1649
// Function ID: 18347
// Name: RotateInData
// Dependencies: [1640]

// Module 1649 (RotateInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { RotateInDownLeft: obj, RotateInDownRight: obj, RotateInUpLeft: obj1, RotateInUpRight: obj2 };
obj = { name: "RotateInDownLeft", style: null, duration: 0.3 };
const items = [{ translateX: "-50%", translateY: "-250%", rotate: "-90deg" }];
const items1 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
obj.style = { [0]: { transform: items, opacity: 0 }, [100]: { transform: items1, opacity: 1 } };
obj = { name: "RotateInDownRight", style: null, duration: 0.3 };
const items2 = [{ translateX: "40%", translateY: "-250%", rotate: "90deg" }];
const items3 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
obj.style = { [0]: { transform: items2, opacity: 0 }, [100]: { transform: items3, opacity: 1 } };
obj1 = { name: "RotateInUpLeft", style: null, duration: 0.3 };
const items4 = [{ translateX: "-40%", translateY: "250%", rotate: "90deg" }];
const items5 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
obj1.style = { [0]: { transform: items4, opacity: 0 }, [100]: { transform: items5, opacity: 1 } };
obj2 = { name: "RotateInUpRight", style: null, duration: 0.3 };
const items6 = [{ translateX: "40%", translateY: "250%", rotate: "-90deg" }];
const items7 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
obj2.style = { [0]: { transform: items6, opacity: 0 }, [100]: { transform: items7, opacity: 1 } };
const obj3 = { RotateOutDownLeft: obj4, RotateOutDownRight: obj5, RotateOutUpLeft: obj6, RotateOutUpRight: obj7 };
obj4 = { name: "RotateOutDownLeft", style: null, duration: 0.3 };
const items8 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
const items9 = [{ translateX: "-40%", translateY: "250%", rotate: "90deg" }];
obj4.style = { [0]: { transform: items8, opacity: 1 }, [100]: { transform: items9, opacity: 0 } };
obj5 = { name: "RotateOutDownRight", style: null, duration: 0.3 };
const items10 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
const items11 = [{ translateX: "40%", translateY: "250%", rotate: "-90deg" }];
obj5.style = { [0]: { transform: items10, opacity: 1 }, [100]: { transform: items11, opacity: 0 } };
obj6 = { name: "RotateOutUpLeft", style: null, duration: 0.3 };
const items12 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
const items13 = [{ translateX: "-40%", translateY: "-250%", rotate: "-90deg" }];
obj6.style = { [0]: { transform: items12, opacity: 1 }, [100]: { transform: items13, opacity: 0 } };
obj7 = { name: "RotateOutUpRight", style: null, duration: 0.3 };
const items14 = [{ translateX: "0%", translateY: "0%", rotate: "0deg" }];
const items15 = [{ translateX: "40%", translateY: "-250%", rotate: "90deg" }];
obj7.style = { [0]: { transform: items14, opacity: 1 }, [100]: { transform: items15, opacity: 0 } };
const obj8 = {};
const obj9 = {};
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RotateInDownLeft);
obj9.duration = obj.RotateInDownLeft.duration;
obj8.RotateInDownLeft = obj9;
const obj10 = {};
obj10.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RotateInDownRight);
obj10.duration = obj.RotateInDownRight.duration;
obj8.RotateInDownRight = obj10;
const obj11 = {};
obj11.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RotateInUpLeft);
obj11.duration = obj.RotateInUpLeft.duration;
obj8.RotateInUpLeft = obj11;
const obj12 = {};
obj12.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RotateInUpRight);
obj12.duration = obj.RotateInUpRight.duration;
obj8.RotateInUpRight = obj12;
const obj13 = {};
const obj14 = {};
obj14.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.RotateOutDownLeft);
obj14.duration = obj3.RotateOutDownLeft.duration;
obj13.RotateOutDownLeft = obj14;
const obj15 = {};
obj15.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.RotateOutDownRight);
obj15.duration = obj3.RotateOutDownRight.duration;
obj13.RotateOutDownRight = obj15;
const obj16 = {};
obj16.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.RotateOutUpLeft);
obj16.duration = obj3.RotateOutUpLeft.duration;
obj13.RotateOutUpLeft = obj16;
const obj17 = {};
obj17.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.RotateOutUpRight);
obj17.duration = obj3.RotateOutUpRight.duration;
obj13.RotateOutUpRight = obj17;

export const RotateInData = obj;
export const RotateOutData = obj3;
export const RotateIn = obj8;
export const RotateOut = obj13;
