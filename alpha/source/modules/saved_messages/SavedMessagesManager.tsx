// Module ID: 17947
// Function ID: 17948
// Name: SavedMessagesManager
// Dependencies: [5, 12662, 17948, 6797, 2]

// Module 17947 (SavedMessagesManager)
import SavedMessagesActions from "SavedMessagesActions" /* 12662 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let c1, c2;

let obj = function _refreshSavedMessages() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: obj3.fetchAndUpdateSavedMessages(), done: false };
            obj3 = SavedMessagesActions;
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = closure_128_0(closure_128_1[2]);
          const result = obj.showOverdueRemindersToast();
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
class SavedMessagesManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      }
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      function refreshSavedMessages() {
        return closure_1_3(...arguments);
      }
      !refreshSavedMessages();
    };
    return applyArgumentsResult;
  }
}
const savedMessagesManager = new SavedMessagesManager();
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default savedMessagesManager;
