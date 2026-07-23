// Module ID: 1644
// Function ID: 18341
// Name: StretchInData
// Dependencies: [1640]

// Module 1644 (StretchInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { StretchInX: obj, StretchInY: obj };
obj = { name: "StretchInX", style: null, duration: 0.3 };
const items = [{ scaleX: 0 }];
const items1 = [{ scaleX: 1 }];
obj.style = { [0]: { transform: items }, [100]: { transform: items1 } };
obj = { name: "StretchInY", style: null, duration: 0.3 };
const items2 = [{ scaleY: 0 }];
const items3 = [{ scaleY: 1 }];
obj.style = { [0]: { transform: items2 }, [100]: { transform: items3 } };
const obj1 = { StretchOutX: obj2, StretchOutY: obj3 };
obj2 = { name: "StretchOutX", style: null, duration: 0.3 };
const items4 = [{ scaleX: 1 }];
const items5 = [{ scaleX: 0 }];
obj2.style = { [0]: { transform: items4 }, [100]: { transform: items5 } };
obj3 = { name: "StretchOutY", style: null, duration: 0.3 };
const items6 = [{ scaleY: 1 }];
const items7 = [{ scaleY: 0 }];
obj3.style = { [0]: { transform: items6 }, [100]: { transform: items7 } };
const obj4 = {};
const obj5 = {};
obj5.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.StretchInX);
obj5.duration = obj.StretchInX.duration;
obj4.StretchInX = obj5;
const obj6 = {};
obj6.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.StretchInY);
obj6.duration = obj.StretchInY.duration;
obj4.StretchInY = obj6;
const obj7 = {};
const obj8 = {};
obj8.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.StretchOutX);
obj8.duration = obj1.StretchOutX.duration;
obj7.StretchOutX = obj8;
const obj9 = {};
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.StretchOutY);
obj9.duration = obj1.StretchOutY.duration;
obj7.StretchOutY = obj9;

export const StretchInData = obj;
export const StretchOutData = obj1;
export const StretchIn = obj4;
export const StretchOut = obj7;
