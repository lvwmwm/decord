// Module ID: 1647
// Function ID: 18343
// Name: LightSpeedInData
// Dependencies: []

// Module 1647 (LightSpeedInData)
let obj = { LightSpeedInRight: obj, LightSpeedInLeft: obj };
obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261458271587, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002834928291182685, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003204256084956046 };
const items = [{ -573176507: "r", -1862763182: "AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE" }];
const items1 = [{ skewX: "10deg" }];
const items2 = [{ skewX: "-5deg" }];
const items3 = [{ skewX: "0deg" }];
obj.style = { [0]: { transform: items, opacity: 0 }, [70]: { transform: items1 }, [85]: { transform: items2 }, [100]: { transform: items3 } };
obj = { "Bool(false)": "<string:1733361666>", "Bool(false)": "<string:858849583>", "Bool(false)": "<string:858993459>" };
const items4 = [{ -573176507: 0.00000000000000000000000000000000000000000000000000000000000004133892104714262, -1862763182: 136687334195.2 }];
const items5 = [{ skewX: "-10deg" }];
const items6 = [{ skewX: "5deg" }];
const items7 = [{ skewX: "0deg" }];
obj.style = { [0]: { transform: items4, opacity: 0 }, [70]: { transform: items5 }, [85]: { transform: items6 }, [100]: { transform: items7 } };
const obj1 = { LightSpeedOutRight: obj2, LightSpeedOutLeft: obj3 };
const obj2 = { "Bool(false)": 5109226308654697000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 15185637673219034000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261426604566 };
const items8 = [{ -573176507: "<string:475070466>", -1862763182: "<string:858849663>" }];
const items9 = [{ -573176507: "r", -1862763182: "AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE" }];
obj2.style = { [0]: { transform: items8, opacity: 1 }, [100]: { transform: items9, opacity: 0 } };
const obj3 = { "Bool(false)": 1189584450017357500000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 15185637729757675000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261426576925 };
const items10 = [{ topScreenId: "<string:475070466>", belowTopScreenId: "<string:858849663>" }];
const items11 = [{ topScreenId: 0.00000000000000000000000000000000000000000000000000000000000004133892104714262, belowTopScreenId: 136687334195.2 }];
obj3.style = { [0]: { transform: items10, opacity: 1 }, [100]: { transform: items11, opacity: 0 } };
const obj4 = {};
const obj5 = {};
const _module = require(dependencyMap[0]);
obj5.style = _module.convertAnimationObjectToKeyframes(obj.LightSpeedInRight);
obj5.duration = obj.LightSpeedInRight.duration;
obj4.LightSpeedInRight = obj5;
const obj6 = {};
const _module1 = require(dependencyMap[0]);
obj6.style = _module1.convertAnimationObjectToKeyframes(obj.LightSpeedInLeft);
obj6.duration = obj.LightSpeedInLeft.duration;
obj4.LightSpeedInLeft = obj6;
const obj7 = {};
const obj8 = {};
const _module2 = require(dependencyMap[0]);
obj8.style = _module2.convertAnimationObjectToKeyframes(obj1.LightSpeedOutRight);
obj8.duration = obj1.LightSpeedOutRight.duration;
obj7.LightSpeedOutRight = obj8;
const obj9 = {};
const _module3 = require(dependencyMap[0]);
obj9.style = _module3.convertAnimationObjectToKeyframes(obj1.LightSpeedOutLeft);
obj9.duration = obj1.LightSpeedOutLeft.duration;
obj7.LightSpeedOutLeft = obj9;

export const LightSpeedInData = obj;
export const LightSpeedOutData = obj1;
export const LightSpeedIn = obj4;
export const LightSpeedOut = obj7;
