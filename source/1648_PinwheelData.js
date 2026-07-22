// Module ID: 1648
// Function ID: 18344
// Name: PinwheelData
// Dependencies: []

// Module 1648 (PinwheelData)
let obj = { PinwheelIn: obj, PinwheelOut: obj };
obj = { "Bool(false)": "<string:374407170>", "Bool(false)": "<string:858849538>", "Bool(false)": "<string:858993459>" };
const items = [{ "Bool(false)": null, "Bool(false)": null }];
const items1 = [{ "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000267289683084733, "Bool(false)": -0.00000000000000000000000000000000000000000000000000000000000008872421112444312 }];
obj.style = { [0]: { transform: items, opacity: 0 }, [100]: { transform: items1, opacity: 1 } };
obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004133535079133172, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000018012311667728757, "Bool(false)": 0.998 };
const items2 = [{ "Bool(false)": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002353438200334684, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000016918195896015135 }];
const items3 = [{ "Bool(false)": null, "Bool(false)": null }];
obj.style = { [0]: { transform: items2, opacity: 1 }, [100]: { transform: items3, opacity: 0 } };
const obj1 = {};
const obj2 = {};
const _module = require(dependencyMap[0]);
obj2.style = _module.convertAnimationObjectToKeyframes(obj.PinwheelIn);
obj2.duration = obj.PinwheelIn.duration;
obj1.PinwheelIn = obj2;
const obj3 = {};
const _module1 = require(dependencyMap[0]);
obj3.style = _module1.convertAnimationObjectToKeyframes(obj.PinwheelOut);
obj3.duration = obj.PinwheelOut.duration;
obj1.PinwheelOut = obj3;

export const PinwheelData = obj;
export const Pinwheel = obj1;
