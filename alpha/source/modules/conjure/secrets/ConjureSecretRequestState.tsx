// Module ID: 12152
// Function ID: 12153
// Name: ConjureSecretRequestState
// Dependencies: [32, 19, 1128, 3820, 10992, 558, 576, 2]
// Exports: markMcpSecretRequestSaved, secretRequestStatuses, unmarkMcpSecretRequestSaved

// Module 12152 (ConjureSecretRequestState)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import conjureChatTurns from "conjureChatTurns" /* 10992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let map, set2;

function isSecretsSavedMessage(content) {
  const str = content.content;
  const trimmed = str.trim();
  const intl = intl3.intl;
  let tmp5 = trimmed === intl.string(_modDef3820.UGqnoV);
  if (!tmp5) {
    const intl2 = intl3.intl;
    tmp5 = trimmed === intl2.string(_modDef3820.sMQt5O);
  }
  return tmp5;
}
function isSavedMcpCard(secretRequest) {
  secretRequest = secretRequest.secretRequest;
  let over_mcp;
  if (secretRequest != null) {
    over_mcp = secretRequest.over_mcp;
  }
  let tmp2 = true === over_mcp;
  if (tmp2) {
    let tmp3 = true !== secretRequest.finished;
    if (!tmp3) {
      const hasItem = null != secretRequest.request_id && set.has(secretRequest.request_id);
      tmp3 = hasItem;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
let set = new Set();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecretRequestStatusChanged(cardId, arg1) {
  let flag;
  let tmp6;
  let tmp7;
  let tmp9;
  let closure_0 = cardId;
  let closure_1 = arg1;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === cardId) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    [tmp6, tmp7] = react.useState(tmp2);
    _slicedToArray(react.useState(tmp2), 2);
    if (tmp6.cardId === cardId) {
      if (null == tmp6.status) {
        return flag;
      }
      flag = null != tmp6.status && arg1 !== tmp6.status;
    }
    const obj2 = { cardId, status: tmp9 };
    tmp9 = null;
    if ("pending" !== arg1) {
      tmp9 = arg1;
    }
    tmp7(obj2);
    flag = false;
  }
  const fn = function l() {
    let tmp;
    const obj = { cardId, status: tmp };
    tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    return obj;
  };
  cResult[0] = cardId;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useSecretRequestStatusChanged(cardId, arg1) {
  let flag;
  let tmp2;
  let tmp3;
  let tmp5;
  let closure_0 = cardId;
  let closure_1 = arg1;
  let tmp = _slicedToArray(react.useState(() => {
    let tmp;
    const obj = { cardId, status: tmp };
    tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    return obj;
  }), 2);
  [tmp2, tmp3] = tmp;
  if (tmp2.cardId === cardId) {
    if (null == tmp2.status) {
      return flag;
    }
    flag = null != tmp2.status && arg1 !== tmp2.status;
  }
  let obj = { cardId, status: tmp5 };
  tmp5 = null;
  if ("pending" !== arg1) {
    tmp5 = arg1;
  }
  tmp3(obj);
  flag = false;
});
let result = size.fileFinishedImporting("modules/conjure/secrets/ConjureSecretRequestState.tsx");

export const markMcpSecretRequestSaved = function markMcpSecretRequestSaved(request_id) {
  if (null != request_id) {
    set.add(request_id);
  }
};
export const unmarkMcpSecretRequestSaved = function unmarkMcpSecretRequestSaved(request_id) {
  if (null != request_id) {
    set.delete(request_id);
  }
};
export const secretRequestStatuses = function secretRequestStatuses(memo, stateFromStores11) {
  let set1 = null;
  if (null != stateFromStores11) {
    const _Set = Set;
    const found = stateFromStores11.filter((set) => set.set);
    const self = this;
    const self2 = this;
    set1 = new Set(found.map((name) => name.name));
  }
  map = new Map();
  set2 = new Set();
  let diff = memo.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    do {
      let tmp4 = memo[diff];
      let flag3 = flag;
      let flag4 = flag2;
      if (null != tmp4) {
        if ("user" !== tmp4.role) {
          let secretRequest = tmp4.secretRequest;
          let fields;
          if (secretRequest != null) {
            fields = secretRequest.fields;
          }
          if (fields == null) {
            fields = [];
          }
          flag3 = flag;
          flag4 = flag2;
          if (0 !== fields.length) {
            let obj3 = conjureChatTurns;
            flag3 = flag;
            flag4 = flag2;
            if (obj3.turnSettled(tmp4)) {
              let tmp10 = flag;
              if (!tmp10) {
                tmp10 = isSavedMcpCard(tmp4);
              }
              if (tmp10) {
                if (null == set1) {
                  let result = map.set(tmp4.render_id, "pending");
                  let tmp17 = fields[Symbol.iterator]();
                  flag3 = false;
                  flag4 = true;
                  while (tmp17 !== undefined) {
                    let addResult = set2.add(tmp19.name);
                    continue;
                  }
                }
              }
              if (tmp10) {
                if (null != set1) {
                  if (fields.every((name) => set1.has(name.name))) {
                    let result1 = map.set(tmp4.render_id, "received");
                  }
                }
              }
              set = map.set;
              let render_id = tmp4.render_id;
              if (flag2) {
                let str = "inactive";
                if (fields.some((name) => set2.has(name.name))) {
                  str = "superseded";
                }
                let result2 = set(render_id, str);
              } else {
                let result3 = set(render_id, "open");
              }
            }
          }
        } else {
          let tmp8 = flag;
          if (!tmp8) {
            tmp8 = isSecretsSavedMessage(tmp4);
          }
          flag3 = tmp8;
          flag4 = flag2;
        }
      }
      diff = diff - 1;
      flag = flag3;
      flag2 = flag4;
    } while (0 <= diff);
  }
  return map;
};
export const useSecretRequestStatusChanged = tmp3;
