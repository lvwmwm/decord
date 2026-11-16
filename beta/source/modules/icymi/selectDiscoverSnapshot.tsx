// Module ID: 10223
// Function ID: 10224
// Name: selectDiscoverSnapshot
// Dependencies: [32, 10210, 10224, 2]
// Exports: selectDiscoverSnapshot

// Module 10223 (selectDiscoverSnapshot)
import ICYMITypes from "ICYMITypes" /* 10210 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/icymi/selectDiscoverSnapshot.tsx");

export function selectDiscoverSnapshot(items, fn) {
  let tmp6;
  let tmp7;
  items = [];
  set = new Set();
  const entries = items.entries();
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    let tmp9 = require;
    if (tmp7.type === ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
      let tmp9Result = tmp9(10224);
      let data = tmp8.data;
      let item;
      let parseWaterwheelsCard = tmp9Result.parseWaterwheelsCard;
      if (data != null) {
        item = data.item;
      }
      let parseWaterwheelsCardResult = parseWaterwheelsCard(item);
      let tmp13 = parseWaterwheelsCardResult;
      if (parseWaterwheelsCardResult.ok) {
        if (!set.has(tmp13.card.id)) {
          let addResult = set.add(tmp13.card.id);
          let obj = { brokerPosition: tmp6, card: tmp13.card };
          let merged = Object.assign(tmp8);
          let tmp21 = obj;
          let arr = items.push(obj);
          if (fn != null) {
            let tmp25 = fn(tmp8, tmp21);
          }
        }
      }
    }
    continue;
  }
  return items;
}
