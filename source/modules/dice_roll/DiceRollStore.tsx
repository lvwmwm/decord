// Module ID: 11185
// Function ID: 11186
// Name: INITIAL_STATE
// Dependencies: [644, 2]
// Exports: useDiceRollState

// Module 11185 (INITIAL_STATE)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
obj = keys.create(() => obj);
const result = set.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj;
export const INITIAL_STATE = obj;
export const useDiceRollState = function useDiceRollState(channelId) {
  closure_0 = channelId;
  return obj((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
};
