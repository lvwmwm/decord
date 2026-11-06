// Module ID: 18623
// Function ID: 18624
// Name: useFavoritesPruneInactiveThreads
// Dependencies: [5, 19, 6648, 5022, 504, 10967, 2]
// Exports: default

// Module 18623 (useFavoritesPruneInactiveThreads)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6648 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;
import size from "module_2" /* 2 */;

let c0, c1;

const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesPruneInactiveThreads.tsx");

export default function useFavoritesPruneInactiveThreads() {
  let connected;
  let pruneInactiveThreads;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores(stateFromStores1[4]);
  const items = [GatewayConnectionStore];
  stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj2 = stateFromStores(stateFromStores1[4]);
  const items1 = [FavoriteStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => pruneInactiveThreads.pruneInactiveThreads);
  const items2 = [stateFromStores, stateFromStores1];
  const effect = react.useEffect(() => {
    function prune() {
      return obj(...arguments);
    }
    let obj = function _prune() {
      obj = closure_2_2(function*(arg0, value) {
        let v3;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c2 = 1;
                const obj2 = c0(c1[5]);
                c1 = 2;
                c0 = 1;
                const obj5 = { value: obj2.pruneInactiveFavoriteThreads(), done: false };
                return obj5;
              }
            } else if (1 === tmp3) {
              c2 = 0;
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp6) {
            if (0 === c2) {
              c0 = 3;
              throw tmp6;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = stateFromStores && stateFromStores1;
    if (tmp) {
      const tmp2 = prune();
    }
  }, items2);
};
