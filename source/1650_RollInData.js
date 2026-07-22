// Module ID: 1650
// Function ID: 18346
// Name: RollInData
// Dependencies: []

// Module 1650 (RollInData)
let obj = { RollInLeft: obj, RollInRight: { style: { [0]: { transform: items2 }, [100]: { transform: items3 } } } };
obj = { "Bool(false)": -1, "Bool(false)": -1, "Bool(false)": 1090650111 };
const items = [{ 140586312: "\u{1F383}", 1434737489: 6 }];
const items1 = [{ 140586312: "<string:475070466>", 1434737489: "<string:858849663>" }];
obj.style = { [0]: { transform: items }, [100]: { transform: items1 } };
const items2 = [{}];
const items3 = [{ 140586312: "<string:475070466>", 1434737489: "<string:858849663>" }];
obj = { RollOutLeft: obj1, RollOutRight: { style: { [0]: { transform: items6 }, [100]: { transform: items7 } } } };
const obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
const items4 = [{ 140586312: "<string:475070466>", 1434737489: "<string:858849663>" }];
const items5 = [{ 140586312: "\u{1F383}", 1434737489: 6 }];
obj1.style = { [0]: { transform: items4 }, [100]: { transform: items5 } };
const items6 = [{ 140586312: "<string:475070466>", 1434737489: "<string:858849663>" }];
const items7 = [{}];
const obj2 = {};
const obj3 = {};
const _module = require(dependencyMap[0]);
obj3.style = _module.convertAnimationObjectToKeyframes(obj.RollInLeft);
obj3.duration = obj.RollInLeft.duration;
obj2.RollInLeft = obj3;
const obj4 = {};
const _module1 = require(dependencyMap[0]);
obj4.style = _module1.convertAnimationObjectToKeyframes(obj.RollInRight);
obj4.duration = obj.RollInRight.duration;
obj2.RollInRight = obj4;
const obj5 = {};
const obj6 = {};
const _module2 = require(dependencyMap[0]);
obj6.style = _module2.convertAnimationObjectToKeyframes(obj.RollOutLeft);
obj6.duration = obj.RollOutLeft.duration;
obj5.RollOutLeft = obj6;
const obj7 = {};
const _module3 = require(dependencyMap[0]);
obj7.style = _module3.convertAnimationObjectToKeyframes(obj.RollOutRight);
obj7.duration = obj.RollOutRight.duration;
obj5.RollOutRight = obj7;

export const RollInData = obj;
export const RollOutData = obj;
export const RollIn = obj2;
export const RollOut = obj5;
