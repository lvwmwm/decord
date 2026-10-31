// Module ID: 14402
// Function ID: 14403
// Name: useConjureAppCreator
// Dependencies: [5, 32, 19, 1383, 14403, 12633, 504, 14404, 2]
// Exports: default

// Module 14402 (useConjureAppCreator)
import react_native from "react-native" /* 14404 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, closure_1, importDefault;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default function useConjureAppCreator(conjureProjectId, arg1, arg2) {
  let first;
  let project;
  let remixProject;
  _require = conjureProjectId;
  importDefault = arg2;
  let tmp = remixProject;
  conjureProjectId = undefined;
  let tmp2 = require("useConjureAppProject");
  if (conjureProjectId != null) {
    conjureProjectId = conjureProjectId.conjureProjectId;
  }
  if (conjureProjectId == null) {
    conjureProjectId = null;
  }
  const tmp2Result = tmp2(conjureProjectId, arg1, arg2);
  ({ project, remixProject } = tmp2Result);
  const isSettled = tmp2Result.isSettled;
  let owner_user_id;
  if (project != null) {
    owner_user_id = project.owner_user_id;
  }
  if (owner_user_id == null) {
    owner_user_id = null;
  }
  let obj = first;
  let tmp6 = owner_user_id(first.useState(null), 2);
  first = tmp6[0];
  let closure_6 = tmp6[1];
  const items = [arg2, owner_user_id];
  const effect = first.useEffect(() => {
    let _false;
    function requestCreator(arg0) {
      return obj(...arguments);
    }
    let obj = function _requestCreator() {
      let user;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
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
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_2 = tmp4;
                closure_1 = tmp;
                c3 = 1;
                c4 = 1;
                const obj5 = { value: obj2.requestMessageAuthor(closure_0), done: false };
                obj2 = _false(remixProject[5]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const tmp6 = closure_130_0 && null == user.getUser(closure_0);
              if (tmp6) {
                user(closure_0);
              }
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp19) {
            c4 = 3;
            throw tmp19;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = obj;
    if (tmp) {
      const tmp3 = null;
      if (null != owner_user_id) {
        let c0 = true;
        const tmp4 = requestCreator(tmp2);
        return () => {
          let c0 = false;
        };
      }
    }
  }, items);
  let obj2 = require("get initialized");
  const items1 = [closure_6];
  const items2 = [owner_user_id];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != owner_user_id) {
      let user = UserStore.getUser(tmp);
      if (user == null) {
        user = null;
      }
      tmp2 = user;
    }
    return tmp2;
  }, items2);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(arg1, 32);
  }
  const items3 = [arg2, avatarURL];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_1 && null != avatarURL;
    if (tmp) {
      const obj = react_native;
      obj.preloadImage(avatarURL);
    }
  }, items3);
  const items4 = [stateFromStores, remixProject, conjureProjectId, isSettled, owner_user_id, first];
  return obj.useMemo(() => {
    let tmp2;
    const obj = { creator: stateFromStores, remixProject, isSettled: tmp2 };
    tmp2 = null != conjureProjectId;
    const tmp = stateFromStores;
    if (tmp2) {
      tmp2 = isSettled;
    }
    if (tmp2) {
      let tmp4 = null == owner_user_id;
      const tmp3 = owner_user_id;
      if (!tmp4) {
        tmp4 = null != tmp;
      }
      if (!tmp4) {
        tmp4 = first === tmp3;
      }
      tmp2 = tmp4;
    }
    return obj;
  }, items4);
};
