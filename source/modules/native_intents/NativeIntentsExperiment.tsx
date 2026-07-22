// Module ID: 16436
// Function ID: 126959
// Name: items
// Dependencies: []

// Module 16436 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: "4e1581119cf1ddaae8c3aa4ebdd90f99", flex: "StickerIcon", sk: "png", defaultConfig: { "Bool(false)": true, "Bool(false)": false, "Bool(false)": false } };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: {} };
const items = [obj, , , ];
const obj1 = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: {} };
items[1] = obj1;
const obj2 = { displayNameStylesEnabled: "Array", submitButtonEnabled: "PREMIUM_TIER_2_DISCOUNT_ENDING", config: { "Bool(false)": "<string:37639497>", "Bool(false)": "<string:37618238>", "Bool(false)": "<string:37618238>" } };
items[2] = obj2;
items[3] = { config: {} };
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
