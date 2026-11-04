// Module ID: 7422
// Function ID: 7423
// Name: DiceRollActionCreators
// Dependencies: [572, 2]
// Exports: startDiceRoll

// Module 7422 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export function startDiceRoll(channelId, diceCount, diceSides) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj2);
}
