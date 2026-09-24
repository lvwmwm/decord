// Module ID: 12125
// Function ID: 12126
// Name: DiceRollStore
// Dependencies: [562, 558, 568, 2]

// Module 12125 (DiceRollStore)
import c from "c" /* 568 */;
import module_562 from "module_562" /* 562 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const INITIAL_STATE = { channelId: null, rolling: false, dismissing: false, diceCount: 1, diceSides: 6, results: null };
const obj2 = module_562.create(() => obj);
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj2;
export { INITIAL_STATE };
export const useDiceRollState = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const fn = function t(channelId) {
      let tmp = null;
      if (channelId.channelId === closure_0) {
        tmp = channelId;
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj2(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return obj2((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      tmp = channelId;
    }
    return tmp;
  });
});
