// Module ID: 11102
// Function ID: 86349
// Name: INITIAL_STATE
// Dependencies: [621, 2]
// Exports: useDiceRollState

// Module 11102 (INITIAL_STATE)
import keys from "keys";

let obj = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
obj = keys.create(() => obj);
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj;
export const INITIAL_STATE = obj;
export const useDiceRollState = function useDiceRollState(channelId) {
  let closure_0 = channelId;
  return obj((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
};
