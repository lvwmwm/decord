// Module ID: 13899
// Function ID: 13900
// Name: useConjureAppCreator
// Dependencies: [5, 32, 19, 1392, 558, 576, 13900, 12389, 504, 13901, 2]

// Module 13899 (useConjureAppCreator)
import react_native from "react-native" /* 13901 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
  let owner_user_id;
  let project;
  let remixProject;
  _require = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(19);
  conjureProjectId = undefined;
  let tmp4 = owner_user_id(13900);
  if (conjureProjectId != null) {
    conjureProjectId = conjureProjectId.conjureProjectId;
  }
  if (conjureProjectId == null) {
    conjureProjectId = null;
  }
  const tmp4Result = tmp4(conjureProjectId, arg1, arg2);
  ({ project, remixProject } = tmp4Result);
  owner_user_id = undefined;
  const isSettled = tmp4Result.isSettled;
  if (project != null) {
    owner_user_id = project.owner_user_id;
  }
  if (owner_user_id == null) {
    owner_user_id = null;
  }
  let obj2 = react;
  [, dependencyMap] = react.useState(null);
  if (cResult[0] === owner_user_id) {
    let tmp10;
    let tmp11;
    let tmp14;
    let tmp17;
    let tmp16;
    if (cResult[1] === arg2) {
      tmp10 = cResult[2];
      tmp11 = cResult[3];
    }
    const effect = obj2.useEffect(tmp10, tmp11);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      cResult[4] = items;
      tmp14 = items;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== owner_user_id) {
      const fn2 = function _() {
        let tmp2 = null;
        if (null != owner_user_id) {
          let user = UserStore.getUser(tmp);
          if (user == null) {
            user = null;
          }
          tmp2 = user;
        }
        return tmp2;
      };
      const items1 = [owner_user_id];
      cResult[5] = owner_user_id;
      cResult[6] = fn2;
      cResult[7] = items1;
      tmp17 = items1;
      tmp16 = fn2;
    } else {
      tmp16 = cResult[6];
      tmp17 = cResult[7];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp16, tmp17);
    if (cResult[8] === stateFromStores) {
      let tmp18;
      if (cResult[9] === arg1) {
        tmp18 = cResult[10];
      }
      let closure_3 = tmp18;
      if (cResult[11] === tmp18) {
        let tmp20;
        let tmp21;
        if (cResult[12] === arg2) {
          tmp20 = cResult[13];
          tmp21 = cResult[14];
        }
        const effect1 = obj2.useEffect(tmp20, tmp21);
        let tmp23 = null != conjureProjectId && isSettled;
        if (tmp23) {
          tmp23 = null == owner_user_id || null != stateFromStores || tmp9 === owner_user_id;
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === remixProject) {
            let tmp25;
            if (cResult[17] === tmp23) {
              tmp25 = cResult[18];
            }
            return tmp25;
          }
        }
        let obj3 = { creator: stateFromStores, remixProject, isSettled: tmp23 };
        cResult[15] = stateFromStores;
        cResult[16] = remixProject;
        cResult[17] = tmp23;
        cResult[18] = obj3;
        tmp25 = obj3;
      }
      const fn3 = function b() {
        const tmp = closure_0 && null != closure_3;
        if (tmp) {
          const obj = react_native;
          obj.preloadImage(closure_3);
        }
      };
      const items2 = [arg2, tmp18];
      cResult[11] = tmp18;
      cResult[12] = arg2;
      cResult[13] = fn3;
      cResult[14] = items2;
      tmp21 = items2;
      tmp20 = fn3;
    }
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(arg1, 32);
    }
    cResult[8] = stateFromStores;
    cResult[9] = arg1;
    cResult[10] = avatarURL;
    tmp18 = avatarURL;
  }
  const fn = function f() {
    let user;
    function requestCreator() {
      return closure_0(...arguments);
    }
    const tmp = c0;
    if (tmp) {
      const tmp3 = null;
      if (null != owner_user_id) {
        c0 = true;
        const tmp4 = closure_3;
        closure_0 = closure_3(function*(arg0, value) {
          let obj2;
          closure_0 = arg0;
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
              return { value: "IconComponent", done: null };
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
                  closure_2 = tmp4;
                  let closure_1 = tmp;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj2.requestMessageAuthor(closure_0), done: false };
                  obj2 = c0(closure_3_2[7]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const tmp6 = closure_0 && null == user.getUser(closure_0);
                if (tmp6) {
                  closure_2_2(closure_0);
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c4 = 3;
              throw tmp19;
            }
          }
        });
        requestCreator(tmp2);
        return () => {
          c0 = false;
        };
      }
    }
  };
  const items3 = [arg2, owner_user_id];
  cResult[0] = owner_user_id;
  cResult[1] = arg2;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp11 = items3;
  tmp10 = fn;
}) : (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
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
    let obj = function _requestCreator2() {
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
            return { value: "IconComponent", done: null };
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
                obj2 = _false(remixProject[7]);
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
              return { value: "IconComponent", done: null };
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
});
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default tmp2;
