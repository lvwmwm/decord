// Module ID: 15459
// Function ID: 15460
// Name: useFetchGuildBoostSlots
// Dependencies: [5, 32, 19, 7585, 1993, 504, 1092, 7604, 8465, 2]
// Exports: default

// Module 15459 (useFetchGuildBoostSlots)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7585 */;
import AppStateStore from "AppStateStore" /* 1993 */;
import size from "module_2" /* 2 */;

let c1, c2;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default function useFetchGuildBoostSlots() {
  let closure_1;
  let first;
  let hasFetched;
  let ref;
  let state;
  let stateFromStores;
  [first, closure_1] = react.useState(true);
  let obj = first(stateFromStores[5]);
  let items = [GuildBoostSlotStore];
  stateFromStores = obj.useStateFromStores(items, () => hasFetched.hasFetched);
  let obj2 = first(stateFromStores[5]);
  const items1 = [AppStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  _slicedToArray = react.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = react.useEffect(() => {
    let obj;
    function fetch() {
      return obj(...arguments);
    }
    const tmp = obj;
    if (tmp) {
      obj = function _fetch() {
        obj = _asyncToGenerator(async (arg0, value) => {
          let v1;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let resolved;
                  let closure_0 = tmp;
                  const items = [, , ];
                  const obj7 = closure_2_1(stateFromStores[7]);
                  items[0] = obj7.init();
                  const tmp18 = c2;
                  if (tmp18) {
                    resolved = Promise.resolve();
                  } else {
                    const obj2 = closure_2_0(stateFromStores[8]);
                    resolved = obj2.fetchGuildBoostSlots();
                  }
                  items[1] = resolved;
                  const obj3 = closure_2_0(stateFromStores[8]);
                  items[2] = obj3.fetchAppliedGuildBoostsForUser();
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: all(items), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c1(false);
                c2 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp11) {
              c2 = 3;
              throw tmp11;
            }
          }
        });
        return obj(...arguments);
      };
      ref.current = stateFromStores1;
      fetch();
    } else {
      const tmp3 = ref;
    }
  }, items2);
  return first;
};
