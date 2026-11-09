// Module ID: 12321
// Function ID: 12322
// Name: conjureGamePickerOptions
// Dependencies: [19, 2137, 2156, 11854, 504, 7583, 12322, 2]
// Exports: conjureGamePickerOptions, useConjureGameNameLookup, useConjureGameOptions

// Module 12321 (conjureGamePickerOptions)
import get_initialized from "get initialized" /* 504 */;
import _extends from "_extends" /* 7583 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11854 */;
import useConjureSettingPickerOptions from "useConjureSettingPickerOptions" /* 12322 */;
import react from "react" /* 19 */;
import RunningGameStore from "RunningGameStore" /* 2137 */;
import DetectableGameStore from "DetectableGameStore" /* 2156 */;
import size from "module_2" /* 2 */;

let detectableGame, runningGames, set;

const keys = ["label", "description"];
const result = size.fileFinishedImporting("modules/conjure/settings/conjureGamePickerOptions.tsx");

export function useConjureGameOptions() {
  let games;
  let memo;
  let stateFromStores;
  const effect = react.useEffect(() => {
    const obj = stateFromStores1(memo[3]);
    const detectableGames = obj.getDetectableGames();
  }, []);
  let obj = stateFromStores(memo[4]);
  let items = [DetectableGameStore];
  stateFromStores = obj.useStateFromStores(items, () => games.games);
  const obj2 = stateFromStores(memo[4]);
  let items1 = [RunningGameStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    runningGames = runningGames.getRunningGames();
    const flatMapResult = runningGames.flatMap((id) => {
      let items1;
      if (null != id.id) {
        const items = [id.id];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
    return flatMapResult.join(",");
  });
  const items2 = [stateFromStores];
  memo = react.useMemo(() => {
    let joined;
    set = new Set();
    const items = [];
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (!set.has(nextResult.id)) {
        let addResult = set.add(tmp3.id);
        let obj = { id: null, value: null, label: null, description: joined };
        ({ id: obj2.id, id: obj2.value, name: obj2.label } = tmp3);
        joined = undefined;
        let push = items.push;
        if (tmp3.aliases.length > 0) {
          let aliases = tmp3.aliases;
          joined = aliases.join(", ");
        }
        let arr = push(obj);
      }
      continue;
    }
    return items;
  }, items2);
  const items3 = [memo, stateFromStores1];
  return react.useMemo(() => {
    const obj = { allOptions: memo, runningIds: stateFromStores1.split(",") };
    return obj;
  }, items3);
}
export function conjureGamePickerOptions(allOptions, query, runningIds, first1) {
  let found;
  let closure_0 = allOptions;
  let closure_1 = runningIds;
  set = new Set(first1);
  if ("" === query.trim()) {
    found = allOptions.filter((value) => {
      const hasItem = set.has(value.value) || closure_1.includes(value.value);
      return hasItem;
    });
  } else {
    const items = [];
    const matchSorter = _extends.matchSorter;
    _extends;
    HermesBuiltin.arraySpread(items, allOptions, 0);
    let obj = { keys };
    const matchSorterResult = matchSorter(items, query, obj);
    found = matchSorterResult.slice(0, 50);
  }
  const set1 = new Set(found.map((value) => value.value));
  const found1 = first1.filter((item) => !set1.has(item));
  const mapped = found1.map((id) => {
    closure_0 = id;
    let found = closure_0.find((value) => value.value === closure_0);
    if (found == null) {
      found = { id, value: id, label: id };
      const obj = { id, value: id, label: id };
    }
    return found;
  });
  const items1 = [...mapped];
  const obj2 = useConjureSettingPickerOptions;
  return obj2.withPickCap(items1, first1);
}
export function useConjureGameNameLookup() {
  const effect = react.useEffect(() => {
    const obj = GamesActionCreatorsDefault;
    const detectableGames = obj.getDetectableGames();
  }, []);
  let obj = get_initialized;
  const items = [DetectableGameStore];
  const items1 = [obj.useStateFromStores(items, () => detectableGame.games)];
  return react.useCallback((id) => {
    detectableGame = detectableGame.getDetectableGame(id);
    let name;
    if (detectableGame != null) {
      name = detectableGame.name;
    }
    return name;
  }, items1);
}
