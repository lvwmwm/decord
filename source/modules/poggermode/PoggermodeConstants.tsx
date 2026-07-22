// Module ID: 6916
// Function ID: 55115
// Name: ConfettiLocation
// Dependencies: []

// Module 6916 (ConfettiLocation)
let obj = { LEVEL_1: 0, [0]: "LEVEL_1", LEVEL_2: 1, [1]: "LEVEL_2", LEVEL_3: 2, [2]: "LEVEL_3", LEVEL_4: 3, [3]: "LEVEL_4", LEVEL_5: 4, [4]: "LEVEL_5" };
obj = { [obj.LEVEL_1]: items, [obj.LEVEL_2]: items1, [obj.LEVEL_3]: items2, [obj.LEVEL_4]: items3, [obj.LEVEL_5]: items4 };
const items = [[false, false], [null, null], [], [-1176832152, 46415683], ["<string:3814719503>", "<string:2222981142>"], [true, true], [67302912, 65103616], []];
const items1 = [[false, false], ["client_report", "[Offline]:"], ["<string:301989994>", "<string:594804858>"], [], [], [], [], []];
const items2 = [[], [], [], [true, true], [true, true], [null, null], [], ["<string:2381877063>", "<string:115617528>"]];
const items3 = [[false, false], ["ml", "apply"], [], [true, true], [true, true], [null, null], ["<string:48627716>", "<string:2504130564>"], [true, true]];
const items4 = [[], [], [], [true, true], [], [-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031370271628780002, 2.000000480193015], ["st", "container"], []];
const keys = Object.keys(obj);
const reduced = keys.reduce((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[arg1] = obj[arg1].map((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
  return obj;
}, { [obj.LEVEL_1]: [], [obj.LEVEL_2]: [], [obj.LEVEL_3]: [], [obj.LEVEL_4]: [], [obj.LEVEL_5]: [] });
const keys1 = Object.keys(obj);
const reduced1 = keys1.reduce((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[arg1] = obj[arg1].map((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
  return obj;
}, { [obj.LEVEL_1]: [], [obj.LEVEL_2]: [], [obj.LEVEL_3]: [], [obj.LEVEL_4]: [], [obj.LEVEL_5]: [] });
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/poggermode/PoggermodeConstants.tsx");

export const ConfettiLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", REACTION: 1, [1]: "REACTION", MEMBER_USER: 2, [2]: "MEMBER_USER", CALL_TILE: 3, [3]: "CALL_TILE" };
export const ShakeLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", VOICE_USER: 1, [1]: "VOICE_USER", MENTION: 2, [2]: "MENTION" };
export const ShakeLevel = obj;
export const SHAKE_STEPS = reduced;
export const SHAKE_STEP_DIVIDER = reduced1;
