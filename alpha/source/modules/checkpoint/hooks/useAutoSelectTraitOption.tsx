// Module ID: 12875
// Function ID: 12876
// Name: useAutoSelectTraitOption
// Dependencies: [19, 6366, 6413, 2]
// Exports: useAutoSelectTraitOption

// Module 12875 (useAutoSelectTraitOption)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6366 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function getInitialTraitOption(availableTraitOptions) {
  let random = arg1;
  if (arg1 === undefined) {
    let tmp = globalThis;
    let _Math = Math;
    random = Math.random;
  }
  let found = availableTraitOptions.filter((item) => {
    let rarity;
    let status;
    ({ status, rarity } = item);
    const tmp3 = status === random(found[2]).CheckpointTraitOptionStatus.UNLOCKED && rarity !== random(found[1]).CheckpointTraitRarity.NITRO;
    return tmp3;
  });
  function _loop(iter) {
    let tmp;
    let closure_0 = iter;
    found = found.filter((rarity) => rarity.rarity === closure_0);
    if (1 === found.length) {
      tmp = { v: found[0] };
      const obj2 = { v: found[0] };
    } else if (found.length > 1) {
      const _Math = Math;
      tmp = { v: found[Math.floor(Math, random(undefined) * found.length)] };
      const obj = { v: found[Math.floor(Math, random(undefined) * found.length)] };
    }
    return tmp;
  }
  let tmp3 = items;
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    let tmp5 = _loopResult;
    if (tmp5) {
      let v = _loopResult.v;
      iter.return();
      return v;
    }
  }
  return found[0];
}
let items = [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA, CheckpointTraitRarity.CheckpointTraitRarity.EPIC, CheckpointTraitRarity.CheckpointTraitRarity.RARE, CheckpointTraitRarity.CheckpointTraitRarity.COMMON, CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT];
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export { getInitialTraitOption };
export function useAutoSelectTraitOption(availableTraitOptions) {
  let onSelectOption;
  availableTraitOptions = availableTraitOptions.availableTraitOptions;
  ({ selectedOptionId: dependencyMap, onSelectOption } = availableTraitOptions);
  let flag = availableTraitOptions.isPaused;
  if (flag === undefined) {
    flag = false;
  }
  items = [availableTraitOptions];
  const memo = onSelectOption.useMemo(() => getInitialTraitOption(availableTraitOptions), items);
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === dependencyMap);
  let c5 = someResult;
  const items1 = [memo, someResult, onSelectOption, flag];
  const effect = onSelectOption.useEffect(() => {
    const tmp = flag || c5;
    if (!tmp) {
      if (null != memo) {
        onSelectOption(memo.trait, memo.optionId);
      }
    }
  }, items1);
}
