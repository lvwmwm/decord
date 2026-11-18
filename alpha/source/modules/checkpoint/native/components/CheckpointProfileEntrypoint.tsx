// Module ID: 14528
// Function ID: 14529
// Name: CheckpointProfileEntrypoint
// Dependencies: [5, 17, 12417, 21, 12422, 5037, 14529, 2121, 6248, 504, 6956, 1113, 3339, 10015, 2]
// Exports: default

// Module 14528 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6248 */;
import openCheckpoint from "openCheckpoint" /* 12422 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;
import size from "module_2" /* 2 */;

let c2, c3;

let obj = function _handlePress() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp3;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj3.openCheckpoint(closure_0), done: false };
            obj3 = openCheckpoint;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = closure_129_1(closure_129_2[5]);
          obj.hideAllActionSheets();
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
function CheckpointProfileEntrypointRow(source) {
  let isFetching;
  let tmp5Result;
  source = source.source;
  obj = source(6248);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = source(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = source(6956).TableRow;
  const intl = source(1113).intl;
  const intl2 = source(1113).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: source(10015).ExperimentalCheckpointIcon };
    const Icon = tmp(6956).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(14529, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(checkpointQAMode(3339)["8hclXY"])} subLabel={intl2.string(checkpointQAMode(3339).BFc4lY)} icon={tmp5Result} onPress={function onPress() {
    function handlePress() {
      return closure_1_7(...arguments);
    }
    return handlePress(source);
  }} onLongPress={fn} arrow start end />;
}
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint(source) {
  source = source.source;
  let tmp = null;
  obj = CheckpointExperiments;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow source={source} />;
  }
  return tmp;
};
