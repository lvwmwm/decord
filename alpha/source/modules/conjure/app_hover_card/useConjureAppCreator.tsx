// Module ID: 13770
// Function ID: 13771
// Name: useConjureAppCreator
// Dependencies: [19, 1392, 558, 576, 13771, 12274, 504, 13772, 2]

// Module 13770 (useConjureAppCreator)
import conjureMessageAuthors from "conjureMessageAuthors" /* 12274 */;
import react_native from "react-native" /* 13772 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
  let closure_0;
  let closure_2;
  let owner_user_id;
  let project;
  let remixProject;
  _require = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(19);
  conjureProjectId = undefined;
  const tmp4 = owner_user_id(13771);
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
  if (cResult[0] === owner_user_id) {
    let tmp8;
    let tmp9;
    let tmp12;
    let tmp15;
    let tmp14;
    if (cResult[1] === arg2) {
      tmp8 = cResult[2];
      tmp9 = cResult[3];
    }
    const effect = react.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    const obj2 = react;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      cResult[4] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== owner_user_id) {
      const fn2 = function j() {
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
      tmp15 = items1;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[6];
      tmp15 = cResult[7];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp14, tmp15);
    if (cResult[8] === stateFromStores) {
      let tmp16;
      if (cResult[9] === arg1) {
        tmp16 = cResult[10];
      }
      dependencyMap = tmp16;
      if (cResult[11] === tmp16) {
        let tmp18;
        let tmp19;
        if (cResult[12] === arg2) {
          tmp18 = cResult[13];
          tmp19 = cResult[14];
        }
        const effect1 = obj2.useEffect(tmp18, tmp19);
        class E {
          constructor() {
            const tmp = closure_0 && null != closure_2;
            if (tmp) {
              const obj = react_native;
              obj.preloadImage(closure_2);
            }
          }
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === remixProject) {
            let tmp22;
            if (cResult[17] === (null != conjureProjectId && isSettled)) {
              tmp22 = cResult[18];
            }
            return tmp22;
          }
        }
        const obj3 = { creator: stateFromStores, remixProject, isSettled: null != conjureProjectId && isSettled };
        cResult[15] = stateFromStores;
        cResult[16] = remixProject;
        cResult[17] = null != conjureProjectId && isSettled;
        cResult[18] = obj3;
        tmp22 = obj3;
      }
      class E {
        constructor() {
          const tmp = closure_0 && null != closure_2;
          if (tmp) {
            const obj = react_native;
            obj.preloadImage(closure_2);
          }
        }
      }
      const items2 = [arg2, tmp16];
      cResult[11] = tmp16;
      cResult[12] = arg2;
      cResult[13] = E;
      cResult[14] = items2;
      tmp19 = items2;
      tmp18 = E;
    }
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(arg1, 32);
    }
    cResult[8] = stateFromStores;
    cResult[9] = arg1;
    cResult[10] = avatarURL;
    tmp16 = avatarURL;
  }
  const fn = function s() {
    const tmp = closure_0;
    if (tmp) {
      const obj = conjureMessageAuthors;
      const messageAuthor = obj.requestMessageAuthor(owner_user_id);
    }
  };
  const items3 = [arg2, owner_user_id];
  cResult[0] = owner_user_id;
  cResult[1] = arg2;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp9 = items3;
  tmp8 = fn;
}) : (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
  let closure_1;
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
  let obj = isSettled;
  const items = [arg2, owner_user_id];
  const effect = isSettled.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj = conjureMessageAuthors;
      const messageAuthor = obj.requestMessageAuthor(owner_user_id);
    }
  }, items);
  const items1 = [owner_user_id];
  const items2 = [owner_user_id];
  const obj2 = require("get initialized");
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
  const items4 = [stateFromStores, remixProject, conjureProjectId, isSettled, owner_user_id];
  return obj.useMemo(() => {
    let tmp2;
    const obj = { creator: stateFromStores, remixProject, isSettled: tmp2 };
    tmp2 = null != conjureProjectId;
    if (tmp2) {
      tmp2 = isSettled;
    }
    if (tmp2) {
      tmp2 = null == owner_user_id || null != tmp;
    }
    return obj;
  }, items4);
});
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default tmp2;
