// Module ID: 5795
// Function ID: 5796
// Name: usePreviewDisabledGuild
// Dependencies: [19, 2067, 5791, 558, 568, 504, 5766, 2059, 2]

// Module 5795 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5766 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5791 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MemberVerificationFormStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    cResult[4] = arg0;
    cResult[5] = S;
    const tmp10 = S;
  } else {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (cResult[6] !== arg0) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    const items2 = [arg0];
    cResult[6] = arg0;
    cResult[7] = tmp14;
    cResult[8] = items2;
    let tmp13 = items2;
    const tmp12 = tmp14;
  } else {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    tmp13 = cResult[8];
  }
  const effect = noop.useEffect(tmp12, tmp13);
  if (cResult[9] === stateFromStores) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    return tmp17;
  }
  tmp17 = stateFromStores;
  if (stateFromStores == null) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    if (null != stateFromStores1) {
      class S {
        constructor() {
          value = closure_5.get(closure_0);
          guild = undefined;
          if (value != null) {
            guild = value.guild;
          }
          return guild;
        }
      }
      const result = obj4.fromVerificationGateGuild(stateFromStores1);
    }
    tmp17 = result;
  }
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp17;
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const tmp = _require;
  const items1 = [MemberVerificationFormStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    value = MemberVerificationFormStore.get(closure_0);
    guild = undefined;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(2059).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(2059);
    }
    stateFromStores = result;
  }
  return stateFromStores;
});
