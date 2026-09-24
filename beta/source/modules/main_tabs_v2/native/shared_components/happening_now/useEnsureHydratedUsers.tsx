// Module ID: 16435
// Function ID: 16436
// Name: useEnsureHydratedUsers
// Dependencies: [19, 5677, 1376, 558, 568, 7587, 2]

// Module 16435 (useEnsureHydratedUsers)
import noop from "module_19" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5677 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(8);
  if (0 !== arg1.length) {
    if (cResult[1] === arg0) {
    }
    const obj2 = {};
    obj2[arg0] = arg1;
    cResult[1] = arg0;
    cResult[2] = arg1;
    cResult[3] = obj2;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {};
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
    if (cResult[4] === arg0) {
      if (cResult[5] === arg1) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      const subscribeGuildMembers = require("subscribeGuildMembers").useSubscribeGuildMembers(first, "useEnsureHydratedUsers");
    }
    const fn = function _() {
      const item = closure_1.forEach((item) => {
        if (null == user.getUser(item)) {
          const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
        }
      });
    };
    const items = [arg0, arg1];
    cResult[4] = arg0;
    cResult[5] = arg1;
    cResult[6] = fn;
    cResult[7] = items;
    tmp9 = items;
    tmp8 = fn;
  }
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [arg0, arg1];
  const items1 = [arg0, arg1];
  const memo = noop.useMemo(() => {
    if (0 === closure_1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const item = closure_1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
      }
    });
  }, items1);
  const subscribeGuildMembers = require("subscribeGuildMembers").useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
});
