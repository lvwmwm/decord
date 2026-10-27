// Module ID: 15797
// Function ID: 15798
// Name: userProfile
// Dependencies: [5, 5212, 1389, 8668, 8670, 2]
// Exports: isAnyUserProfileOpen, openUserProfile

// Module 15797 (userProfile)
import showUserProfileActionSheet from "showUserProfileActionSheet" /* 8668 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 5212 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

let c1, c3, key;

const result = size.fileFinishedImporting("modules/rpc/helpers/userProfile.native.tsx");

export const isAnyUserProfileOpen = function isAnyUserProfileOpen() {
  const stack = ActionSheetStore.getStack();
  return stack.some((key) => {
    key = key.key;
    return key.startsWith(showUserProfileActionSheet.USER_PROFILE_ACTION_SHEET_KEY_PREFIX);
  });
};
export const openUserProfile = function openUserProfile(arg0) {
  function open() {
    return obj(...arguments);
  }
  ({ userId: require, onOpen: importDefault, onClose: dependencyMap } = arg0);
  let obj = function _open() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj6;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              if (null == authStore.getUser(require)) {
                c1 = 3;
                c3 = 1;
                const obj4 = { value: obj6.getUser(require), done: false };
                obj6 = tmp(c2[4]);
                return obj4;
              }
            }
          } else {
            if (1 === c1) {
              c2 = 0;
              closure_128_2();
            } else if (2 === c1) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_128_1();
                c2 = 0;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c3 = 3;
              obj = { value, done: true };
              return obj;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
          if (null == authStore.getUser(closure_128_0)) {
            closure_128_2();
            c2 = 0;
            c3 = 3;
            const obj7 = { value: undefined, done: true };
            return obj7;
          } else {
            const obj8 = { userId: closure_128_0, onClose: closure_128_2 };
            c1 = 2;
            c3 = 1;
            const obj9 = { value: c1(c2[3])(obj8), done: false };
            return obj9;
          }
        } catch (tmp25) {
          if (0 === c2) {
            c3 = 3;
            throw tmp25;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = open();
  return true;
};
