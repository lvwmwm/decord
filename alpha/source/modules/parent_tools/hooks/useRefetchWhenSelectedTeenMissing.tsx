// Module ID: 16821
// Function ID: 16822
// Name: useRefetchWhenSelectedTeenMissing
// Dependencies: [5, 19, 7715, 4, 504, 8369, 7717, 2]
// Exports: default

// Module 16821 (useRefetchWhenSelectedTeenMissing)
import logger_Logger from "logger/Logger" /* 4 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7715 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

const logger = new logger_Logger.Logger("useRefetchWhenSelectedTeenMissing");
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefetchWhenSelectedTeenMissing.tsx");

export default function useRefetchWhenSelectedTeenMissing() {
  let hasActiveLinks;
  let isInitialized;
  let obj = isInitialized(hasActiveLinks[4]);
  const items = [FamilyCenterStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading(), selectedTeenId: FamilyCenterStore.getSelectedTeenId() };
    return obj;
  });
  isInitialized = stateFromStoresObject.isInitialized;
  const selectedTeenId = stateFromStoresObject.selectedTeenId;
  const isLoading = stateFromStoresObject.isLoading;
  let obj2 = isInitialized(hasActiveLinks[5]);
  hasActiveLinks = obj2.useHasActiveLinks();
  const ref = react.useRef(false);
  const items1 = [isInitialized, isLoading, selectedTeenId, hasActiveLinks];
  const effect = react.useEffect(() => {
    function refetch() {
      return obj(...arguments);
    }
    let obj = function _refetch() {
      obj = ref(function*(arg0, value) {
        let closure_1;
        let obj2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c3;
          try {
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp4;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj2.initialPageLoad({ showLoading: false }), done: false };
                obj2 = tmp(closure_2[6]);
                return obj5;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = closure_2;
                logger.error("Failed to refetch Family Center for a missing selected teen", closure_0);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp14) {
            closure_2 = tmp14;
            if (0 === c3) {
              c5 = 3;
              throw tmp14;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = hasActiveLinks;
    if (tmp) {
      const tmp3 = isInitialized;
      let current = !isInitialized;
      if (isInitialized) {
        const tmp4 = FamilyCenterStore;
        current = FamilyCenterStore.isLoading();
      }
      if (!current) {
        current = null != selectedTeenId;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        refetch();
      }
    } else {
      ref.current = false;
    }
  }, items1);
};
