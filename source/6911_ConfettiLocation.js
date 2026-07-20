// Module ID: 6911
// Function ID: 55082
// Name: ConfettiLocation
// Dependencies: []

// Module 6911 (ConfettiLocation)
let obj = { LEVEL_1: 0, [0]: "LEVEL_1", LEVEL_2: 1, [1]: "LEVEL_2", LEVEL_3: 2, [2]: "LEVEL_3", LEVEL_4: 3, [3]: "LEVEL_4", LEVEL_5: 4, [4]: "LEVEL_5" };
obj = { [obj.LEVEL_1]: items, [obj.LEVEL_2]: items1, [obj.LEVEL_3]: items2, [obj.LEVEL_4]: items3, [obj.LEVEL_5]: items4 };
const items = [[false, false], [null, null], [], ["\u00AF", "<"], [], [null, null], [], ["<string:3814719503>", "<string:2222981142>"]];
const items1 = [[false, false], [true, true], [true, true], [null, null], [32000, 327680], [true, true], [], []];
const items2 = [["<string:2410807299>", "<string:2824798211>"], [], [720, 480], ["Array", "isArray"], ["<string:3001853655>", "<string:1689197513>"], ["call", "concat"], ["<string:2024554733>", "<string:2011893856>"], [1122264568, 1035748975]];
const items3 = [[false, false], [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000071076482670028545, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010312547709620587], [720, 480], ["Array", "isArray"], ["<string:3001853655>", "<string:1689197513>"], ["call", "concat"], [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003540452265435494, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030038497102798853], []];
const items4 = [["<string:2410807299>", "<string:2824798211>"], [], [720, 480], ["Array", "isArray"], [null, null], [true, true], [], []];
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
