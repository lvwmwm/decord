// Module ID: 11571
// Function ID: 11572
// Name: useRelativeTimestampUpdates
// Dependencies: [19, 8378, 6032, 7131, 8600, 11058, 1089, 2]
// Exports: default

// Module 11571 (useRelativeTimestampUpdates)
import DurationsDefault from "Durations" /* 1089 */;
import MarkupTypes from "MarkupTypes" /* 6032 */;
import TimestampUtils from "TimestampUtils" /* 8600 */;
import react_mod from "react" /* 19 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8378 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let closure_4;
let hasOwnProperty;
function findRelativeTimestamps(type, items) {
  if (items === undefined) {
    items = [];
  }
  if (typeof type === "object") {
    if (null != type) {
      if (type.type !== MarkupTypes.AST_KEY.TIMESTAMP) {
        const _Object = Object;
        const values = Object.values(type);
        const tmp5 = values[Symbol.iterator]();
        while (tmp5 !== undefined) {
          let tmp10 = findRelativeTimestamps(tmp7, items);
          continue;
        }
      } else if ("R" === type.format) {
        items.push(type);
      }
    }
  }
  return items;
}
function getRelativeTimestamps(type) {
  let value = weakMap.get(type);
  const obj = weakMap;
  if (null == value) {
    const tmp3 = findRelativeTimestamps(type);
    const result = obj.set(type, tmp3);
    value = tmp3;
  }
  return value;
}
function getRowId(type) {
  let context;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === hasOwnProperty.MESSAGE) {
    const message = type.message;
    let id;
    if (message != null) {
      id = message.id;
    }
    context = id;
  } else {
    let revealed;
    if (type != null) {
      revealed = type.revealed;
    }
    if (revealed) {
      context = type.button.action.context;
    }
  }
  return context;
}
let react = react_mod;
({ Changeset: closure_4, RowType: hasOwnProperty } = RowGeneratorConstants);
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("modules/messages/native/hooks/useRelativeTimestampUpdates.tsx");

export default function useRelativeTimestampUpdates(isActive) {
  let ref;
  let ref2;
  isActive = isActive.isActive;
  const chatManager = isActive.chatManager;
  react = undefined;
  const onRefresh = isActive.onRefresh;
  dependencyMap = react.useRef({ first: -1, last: -1 });
  react = react.useRef(null);
  const ref3 = react.useRef(undefined);
  const tmp = chatManager(7131)(onRefresh);
  let closure_5 = tmp;
  function update() {
    let first;
    let id;
    let labelSetsMissingRow;
    let last;
    let obj4;
    clearTimeout(ref3.current);
    const previousRows = chatManager.getPreviousRows();
    ref2.current = previousRows;
    if (false !== isActive) {
      ({ first, last } = ref.current);
      const _Date = Date;
      const timestamp = Date.now();
      let num = Infinity;
      const items = [];
      if (last >= 0) {
        let tmp34 = last;
        if (last <= first) {
          while (true) {
            let tmp3 = previousRows[tmp34];
            let tmp5 = getRowId(tmp3);
            if (null != tmp5) {
              let items1 = [];
              let tmp51 = getRelativeTimestamps(tmp3);
              for (const item10022 of tmp51) {
                let tmp8 = item10022;
                let obj = weakMap1;
                let value = weakMap1.get(item10022);
                if (value == null) {
                  let items2;
                  let obj2 = { dueAt: timestamp, shownIn: _Set1 };
                  let _Set = Set;
                  if (tmp3.changeType === ref3.NOOP) {
                    items2 = [];
                  } else {
                    items2 = [tmp5];
                  }
                  let self = this;
                  let self2 = this;
                  let _Set1 = new _Set(items2);
                  value = obj2;
                }
                let tmp14 = value;
                if (value.dueAt <= timestamp) {
                  let tmp53 = require;
                  let TIMESTAMP_FORMATS = TimestampUtils.TIMESTAMP_FORMATS;
                  let RResult = TIMESTAMP_FORMATS.R(tmp8.parsed);
                  if (RResult !== tmp8.formatted) {
                    tmp8.formatted = tmp57;
                    let _Set2 = Set;
                    let self3 = this;
                    let self4 = this;
                    set = new Set();
                    tmp14.shownIn = set;
                  }
                  let tmp53Result = tmp53(11058);
                  tmp14.dueAt = timestamp + tmp53Result.getTimestampUpdateInterval(tmp8.parsed, timestamp);
                  let result = obj.set(tmp8, tmp14);
                }
                let _Math = Math;
                num = Math.min(num, tmp14.dueAt);
                let shownIn = tmp14.shownIn;
                if (!shownIn.has(tmp5)) {
                  let arr = items1.push(tmp14.shownIn);
                }
                continue;
              }
              if (items1.length > 0) {
                let obj3 = { id: tmp5, row: obj4, labelSetsMissingRow: items1 };
                obj4 = { index: tmp34, changeType: ref3.UPDATE };
                let push = items.push;
                let merged = Object.assign(tmp3);
                let arr2 = push(obj3);
              }
            }
            let sum = tmp34 + 1;
            if (last < 0) {
              break;
            } else {
              tmp34 = sum;
              if (sum > first) {
                break;
              }
            }
          }
        }
      }
      if (items.length > 0) {
        if (closure_5(items.map((row) => row.row))) {
          for (const item10100 of items) {
            ({ id, labelSetsMissingRow } = item10100);
            for (const item10107 of labelSetsMissingRow) {
              let addResult = item10107.add(id);
              continue;
            }
            continue;
          }
        } else {
          const _Math2 = Math;
          num = Math.min(num, timestamp + DurationsDefault.Millis.SECOND);
        }
      }
      if (num < Infinity) {
        const _setTimeout = setTimeout;
        ref3.current = setTimeout(update, num - timestamp);
      }
    }
  }
  let items = [isActive, chatManager, tmp];
  const callback = react.useCallback(update, items);
  let items1 = [callback];
  const effect = react.useEffect(() => {
    callback();
    return () => clearTimeout(ref.current);
  }, items1);
  const effect1 = react.useEffect(() => {
    if (ref2.current !== chatManager.getPreviousRows()) {
      callback();
    }
  });
  let items2 = [callback];
  return react.useCallback((arg0, arg1) => {
    let num = arg0;
    if (arg0 == null) {
      num = -1;
    }
    let num2 = arg1;
    if (arg1 == null) {
      num2 = -1;
    }
    const tmp2 = num === ref.current.first && num2 === ref.current.last;
    if (!tmp2) {
      const obj = { first: num, last: num2 };
      ref.current = obj;
      callback();
    }
  }, items2);
};
