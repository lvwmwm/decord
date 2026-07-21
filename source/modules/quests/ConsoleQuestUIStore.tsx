// Module ID: 6937
// Function ID: 55435
// Name: useConsoleQuestUIStore
// Dependencies: []

// Module 6937 (useConsoleQuestUIStore)
let closure_0 = [];
const _module = require(dependencyMap[0]);
const obj = _module.create((arg0, arg1) => {
  let closure_0 = arg0;
  const obj = {
    errorHintsByQuestId: new Map(),
    setErrorHints(questId, arg1) {
      questId((errorHintsByQuestId) => {
        if (0 === arg1.length) {
          errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
          if (!errorHintsByQuestId.has(errorHintsByQuestId)) {
            return errorHintsByQuestId;
          }
        }
        errorHintsByQuestId = new Map(errorHintsByQuestId.errorHintsByQuestId);
        if (0 === arg1.length) {
          errorHintsByQuestId.delete(errorHintsByQuestId);
        } else {
          const items = [];
          HermesBuiltin.arraySpread(arg1, 0);
          const result = errorHintsByQuestId.set(errorHintsByQuestId, items);
        }
        return { errorHintsByQuestId };
      });
    },
    getErrorHints(arg0) {
      const errorHintsByQuestId = arg1().errorHintsByQuestId;
      let value = errorHintsByQuestId.get(arg0);
      if (null == value) {
        value = arg0;
      }
      return value;
    },
    clearErrorHints(arg0) {
      arg0((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        if (errorHintsByQuestId.has(errorHintsByQuestId)) {
          const _Map = Map;
          const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
          map.delete(errorHintsByQuestId);
          const obj = { errorHintsByQuestId: map };
          return obj;
        } else {
          return errorHintsByQuestId;
        }
      });
    },
    clearErrorHintsByType(arg0, arg1) {
      arg0((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        const value = errorHintsByQuestId.get(errorHintsByQuestId);
        if (null == value) {
          return errorHintsByQuestId;
        } else {
          const found = value.filter((type) => type.type !== closure_1);
          if (found.length === value.length) {
            return errorHintsByQuestId;
          } else {
            const _Map = Map;
            const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
            if (0 === found.length) {
              map.delete(errorHintsByQuestId);
            } else {
              const result = map.set(errorHintsByQuestId, found);
            }
            const obj = { errorHintsByQuestId: map };
            return obj;
          }
        }
      });
    },
    reset() {
      const obj = { errorHintsByQuestId: new Map() };
      arg0(obj);
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;
