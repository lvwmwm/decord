// Module ID: 1644
// Function ID: 18335
// Name: StretchInData
// Dependencies: []

// Module 1644 (StretchInData)
let obj = { StretchInX: obj, StretchInY: obj };
obj = { 9223372036854775807: "ZoomOutRight", 0: null, 0: 0.3 };
const items = [{ scaleX: 0 }];
const items1 = [{ scaleX: 1 }];
obj.style = { [0]: { transform: items }, [100]: { transform: items1 } };
obj = { 9223372036854775807: "0vw", 0: 1, 0: "center" };
const items2 = [{ scaleY: 0 }];
const items3 = [{ scaleY: 1 }];
obj.style = { [0]: { transform: items2 }, [100]: { transform: items3 } };
const obj1 = { StretchOutX: obj2, StretchOutY: obj3 };
const obj2 = { 9223372036854775807: null, 0: null, 0: null };
const items4 = [{ scaleX: 1 }];
const items5 = [{ scaleX: 0 }];
obj2.style = { [0]: { transform: items4 }, [100]: { transform: items5 } };
const obj3 = { 9223372036854775807: "relative", 0: null, 0: null };
const items6 = [{ scaleY: 1 }];
const items7 = [{ scaleY: 0 }];
obj3.style = { [0]: { transform: items6 }, [100]: { transform: items7 } };
const obj4 = {};
const obj5 = {};
const _module = require(dependencyMap[0]);
obj5.style = _module.convertAnimationObjectToKeyframes(obj.StretchInX);
obj5.duration = obj.StretchInX.duration;
obj4.StretchInX = obj5;
const obj6 = {};
const _module1 = require(dependencyMap[0]);
obj6.style = _module1.convertAnimationObjectToKeyframes(obj.StretchInY);
obj6.duration = obj.StretchInY.duration;
obj4.StretchInY = obj6;
const obj7 = {};
const obj8 = {};
const _module2 = require(dependencyMap[0]);
obj8.style = _module2.convertAnimationObjectToKeyframes(obj1.StretchOutX);
obj8.duration = obj1.StretchOutX.duration;
obj7.StretchOutX = obj8;
const obj9 = {};
const _module3 = require(dependencyMap[0]);
obj9.style = _module3.convertAnimationObjectToKeyframes(obj1.StretchOutY);
obj9.duration = obj1.StretchOutY.duration;
obj7.StretchOutY = obj9;

export const StretchInData = obj;
export const StretchOutData = obj1;
export const StretchIn = obj4;
export const StretchOut = obj7;
