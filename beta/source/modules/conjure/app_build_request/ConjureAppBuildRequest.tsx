// Module ID: 12319
// Function ID: 12320
// Name: ConjureAppBuildRequest
// Dependencies: [32, 19, 6773, 1128, 3830, 558, 576, 12320, 11758, 10203, 12321, 2]
// Exports: appBuildRequestSentToast

// Module 12319 (ConjureAppBuildRequest)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import createNonce from "createNonce" /* 10203 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11758 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12320 */;
import conjureSendToProject from "conjureSendToProject" /* 12321 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set;

function sentMessage(arr) {
  let _prompt;
  let target;
  map = new Map();
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ target, prompt: _prompt } = nextResult);
    set = map.set;
    let items1 = map.get(_prompt);
    if (items1 == null) {
      items1 = [];
    }
    let items = [];
    items[HermesBuiltin.arraySpread(items, items1, 0)] = target;
    let result = set(_prompt, items);
    continue;
  }
  arr = Array.from(map, (arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const mapped = arr.map((name) => {
      const intl = closure_1_0(closure_1_2[3]).intl;
      const obj = { name: name.name, projectId: name.projectId };
      return intl.formatToPlainString(closure_1_1(closure_1_2[4]).tcDZw9, obj);
    });
    const targets = mapped.join(", ");
    let intl = require("intl").intl;
    return "" + intl.formatToPlainString(_modDef3830.jZlNst, { targets }) + "\n\n" + tmp;
  });
  return arr.join("\n\n");
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppBuildRequestForm(arg0, prompt, arg2, arg3, arg4) {
  let closure_1;
  let closure_17;
  let closure_2;
  let closure_8;
  let first;
  let first1;
  let tmp12;
  let tmp15;
  let tmp30;
  let tmp4;
  _require = arg0;
  importDefault = arg3;
  dependencyMap = arg4;
  let obj = require("react");
  const cResult = obj.c(47);
  let arr = useConjureProjectPickerOptionsDefault(arg0);
  let obj2 = first1;
  let tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(first1.useState(null), 2);
  [tmp4, _slicedToArray] = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp2Result = tmp2(obj2.useState(first), 2);
  first1 = tmp2Result[0];
  let project = tmp2Result[1];
  const first2 = tmp2(obj2.useState(prompt.prompt), 2)[0];
  tmp2(obj2.useState(prompt.prompt), 2);
  const tmp2Result5 = tmp2(obj2.useState(false), 2);
  let closure_6 = tmp2Result5[0];
  let closure_7 = tmp2Result5[1];
  [r10054, closure_8] = tmp2(obj2.useState(false), 2);
  tmp2(obj2.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    cResult[1] = map;
    tmp12 = map;
  } else {
    tmp12 = cResult[1];
  }
  let closure_9 = obj2.useRef(tmp12);
  let closure_10 = obj2.useRef(false);
  const ref = obj2.useRef(false);
  if (cResult[2] === first1) {
    let arr3;
    let tmp17;
    let tmp19;
    let tmp21;
    if (cResult[3] === arr) {
      arr3 = cResult[4];
    }
    if (cResult[7] !== prompt) {
      let project_ids;
      if (null != prompt.project_ids) {
        project_ids = prompt.project_ids;
      } else if (null != prompt.project_id) {
        const items1 = [prompt.project_id];
        project_ids = items1;
      } else {
        project_ids = [];
      }
      cResult[7] = prompt;
      cResult[8] = project_ids;
      tmp17 = project_ids;
    } else {
      tmp17 = cResult[8];
    }
    if (tmp4 == null) {
      tmp4 = tmp17;
    }
    let closure_12 = tmp4;
    if (cResult[9] === tmp4) {
      let tmp18;
      let tmp23;
      if (cResult[10] === arr3) {
        tmp18 = cResult[11];
      }
      let closure_13 = tmp18;
      if (cResult[15] === arr3) {
        let arr7;
        if (cResult[16] === tmp18) {
          arr7 = cResult[17];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
          cResult[20] = W;
        } else {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
        }
        if (cResult[21] !== first2) {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
          cResult[21] = first2;
          cResult[22] = tmp27;
        } else {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
        }
        let tmp28 = arg2;
        let closure_15 = tmp26;
        if (arg2) {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
        }
        if (tmp28) {
          let tmp29;
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
          if (arr7.length > 0) {
            class W {
              constructor(arr) {
                _slicedToArray(arr.slice(0, 10));
              }
            }
            tmp29 = "" !== tmp26;
          } else {
            class W {
              constructor(arr) {
                _slicedToArray(arr.slice(0, 10));
              }
            }
          }
          tmp28 = tmp29;
        }
        let closure_16 = tmp28;
        if (cResult[23] === arg4) {
          class W {
            constructor(arr) {
              _slicedToArray(arr.slice(0, 10));
            }
          }
          if (cResult[26] === tmp28) {
            class W {
              constructor(arr) {
                _slicedToArray(arr.slice(0, 10));
              }
            }
          }
          function ae() {
            let args;
            let content;
            let ref2;
            let tmp = closure_16;
            if (tmp) {
              let arr = arr7;
              if (0 !== arr7.length) {
                closure_7(true);
                closure_8(false);
                project = project.getProject(content);
                let name;
                const tmp10 = closure_15;
                if (project != null) {
                  name = project.name;
                }
                if (name == null) {
                  name = tmp9;
                }
                const intl = content(closure_2[3]).intl;
                let obj = { name, projectId: tmp9 };
                const _HermesInternal = HermesInternal;
                content = "" + tmp10 + "\n\n" + intl.formatToPlainString(closure_1(closure_2[4]).ScoZLp, obj);
                const allSettledResult = Promise.allSettled(arr.map((projectId) => {
                  let obj2;
                  const current = ref.current;
                  let value = current.get(projectId.projectId);
                  content = undefined;
                  const tmp = ref;
                  if (value != null) {
                    content = value.content;
                  }
                  if (content !== content) {
                    const obj = { content, nonce: obj2.createNonce() };
                    const current2 = tmp.current;
                    obj2 = createNonce;
                    const result = current2.set(projectId.projectId, obj);
                    value = obj;
                  }
                  const obj3 = conjureSendToProject;
                  return obj3.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
                }));
                allSettledResult.then((result) => {
                  let _prompt;
                  closure_0 = result;
                  const found = closure_14.filter((item, index) => "fulfilled" === content[index].status);
                  const items = [...closure_4, ...found.map((target) => ({ target, prompt: _prompt }))];
                  const arr = closure_14;
                  if (found.length !== closure_14.length) {
                    if (!ref2.current) {
                      closure_5(items);
                      const found1 = arr.filter((item) => !found.includes(item));
                      closure_3(found1.map((projectId) => projectId.projectId));
                      closure_7(false);
                      closure_8(true);
                    }
                  }
                  if (items.length > 0) {
                    closure_17(items);
                  }
                });
              } else {
                tmp30(first1);
              }
            }
          }
          cResult[26] = tmp28;
          cResult[27] = tmp30;
          cResult[28] = first1;
          cResult[29] = arg0;
          cResult[30] = arr7;
          cResult[31] = tmp26;
          cResult[32] = ae;
        }
        function re(arr) {
          if (!ref.current) {
            tmp.current = true;
            closure_7(true);
            if (null != closure_2) {
              tmp5(arr.map((target) => target.target));
            } else {
              const obj = conjureAttachmentDrafts;
              obj.sendConjureCardReply(closure_0, sentMessage(arr));
            }
          }
        }
        cResult[23] = arg4;
        cResult[24] = arg0;
        cResult[25] = re;
        tmp30 = re;
      }
      if (cResult[18] !== tmp18) {
        class W {
          constructor(arr) {
            _slicedToArray(arr.slice(0, 10));
          }
        }
        cResult[18] = tmp18;
        cResult[19] = Q;
        tmp23 = Q;
      } else {
        class W {
          constructor(arr) {
            _slicedToArray(arr.slice(0, 10));
          }
        }
      }
      let found = arr3.filter(tmp23);
      cResult[15] = arr3;
      cResult[16] = tmp18;
      cResult[17] = found;
      arr7 = found;
    }
    if (cResult[12] !== tmp4) {
      class W {
        constructor(arr) {
          _slicedToArray(arr.slice(0, 10));
        }
      }
      cResult[12] = tmp4;
      cResult[13] = tmp20;
      tmp19 = tmp20;
    } else {
      class W {
        constructor(arr) {
          _slicedToArray(arr.slice(0, 10));
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor(arr) {
          _slicedToArray(arr.slice(0, 10));
        }
      }
      cResult[14] = H;
      tmp21 = H;
    } else {
      class W {
        constructor(arr) {
          _slicedToArray(arr.slice(0, 10));
        }
      }
    }
    let found1 = arr3.filter(tmp19);
    const mapped = found1.map(tmp21);
    cResult[9] = tmp4;
    cResult[10] = arr3;
    cResult[11] = mapped;
    tmp18 = mapped;
  }
  if (cResult[5] !== first1) {
    class W {
      constructor(arr) {
        _slicedToArray(arr.slice(0, 10));
      }
    }
    cResult[5] = first1;
    cResult[6] = U;
    tmp15 = U;
  } else {
    class W {
      constructor(arr) {
        _slicedToArray(arr.slice(0, 10));
      }
    }
  }
  const found2 = arr.filter(tmp15);
  cResult[2] = first1;
  cResult[3] = arr;
  cResult[4] = found2;
  arr3 = found2;
}) : (function useConjureAppBuildRequestForm(arg0, prompt, arg2, arg3, arg4) {
  let _prompt;
  let closure_10;
  let closure_11;
  let closure_2;
  let closure_3;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let first3;
  let str;
  let tmp7;
  let closure_0 = arg0;
  importDefault = prompt;
  let tmp = arg2;
  dependencyMap = arg3;
  _slicedToArray = arg4;
  let tmp2 = useConjureProjectPickerOptionsDefault(arg0);
  react = tmp2;
  let obj = react;
  [first, closure_6] = react.useState(null);
  [first1, closure_8] = react.useState([]);
  [str, tmp7] = react.useState(prompt.prompt);
  [first2, closure_10] = react.useState(false);
  [first3, closure_11] = react.useState(false);
  const useRef = react.useRef;
  map = new Map();
  let closure_12 = useRef(map);
  let closure_13 = react.useRef(false);
  const ref = react.useRef(false);
  let items = [tmp2, first1];
  const memo = react.useMemo(() => closure_4.filter((item) => {
    closure_0 = item;
    return !first1.some((target) => target.target.projectId === projectId.projectId);
  }), items);
  const items1 = [prompt];
  const memo1 = react.useMemo(() => {
    let project_ids;
    if (null != _prompt.project_ids) {
      project_ids = tmp.project_ids;
    } else if (null != _prompt.project_id) {
      const items = [_prompt.project_id];
      project_ids = items;
    } else {
      project_ids = [];
    }
    return project_ids;
  }, items1);
  const items2 = [first, memo1, memo];
  const memo2 = react.useMemo(() => {
    const found = memo.filter((projectId) => {
      let obj = first;
      if (first == null) {
        obj = memo1;
      }
      return obj.includes(projectId.projectId);
    });
    return found.map((projectId) => projectId.projectId);
  }, items2);
  const items3 = [memo, memo2];
  const memo3 = react.useMemo(() => memo.filter((projectId) => memo2.includes(projectId.projectId)), items3);
  const callback = react.useCallback((arr) => {
    closure_6(arr.slice(0, 10));
  }, []);
  const trimmed = str.trim();
  if (arg2) {
    tmp = !first2;
  }
  if (tmp) {
    let tmp18;
    if (memo3.length > 0) {
      tmp18 = "" !== trimmed;
    } else {
      tmp18 = first1.length > 0;
    }
    tmp = tmp18;
  }
  let closure_20 = tmp;
  const items4 = [arg4, arg0];
  const callback1 = obj.useCallback((arr) => {
    if (!ref.current) {
      tmp.current = true;
      closure_10(true);
      if (null != closure_3) {
        tmp5(arr.map((target) => target.target));
      } else {
        const obj = conjureAttachmentDrafts;
        obj.sendConjureCardReply(closure_0, sentMessage(arr));
      }
    }
  }, items4);
  const items5 = [tmp, callback1, first1, arg0, memo3, trimmed];
  const items6 = [callback1, first1, arg3, first2];
  const callback2 = obj.useCallback(() => {
    let args;
    let content;
    let ref2;
    let tmp = closure_20;
    if (tmp) {
      let arr = memo3;
      if (0 !== memo3.length) {
        closure_10(true);
        closure_11(false);
        const project = first.getProject(content);
        let name;
        const tmp10 = trimmed;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = tmp9;
        }
        const intl = content(closure_2[3]).intl;
        let obj = { name, projectId: tmp9 };
        const _HermesInternal = HermesInternal;
        content = "" + tmp10 + "\n\n" + intl.formatToPlainString(_prompt(closure_2[4]).ScoZLp, obj);
        const allSettledResult = Promise.allSettled(arr.map((projectId) => {
          let obj2;
          const current = ref.current;
          let value = current.get(projectId.projectId);
          content = undefined;
          const tmp = ref;
          if (value != null) {
            content = value.content;
          }
          if (content !== content) {
            const obj = { content, nonce: obj2.createNonce() };
            const current2 = tmp.current;
            obj2 = createNonce;
            const result = current2.set(projectId.projectId, obj);
            value = obj;
          }
          const obj3 = conjureSendToProject;
          return obj3.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
        }));
        allSettledResult.then((result) => {
          closure_0 = result;
          const found = closure_18.filter((item, index) => "fulfilled" === content[index].status);
          const items = [...closure_7, ...found.map((target) => ({ target, prompt: _prompt }))];
          const arr = closure_18;
          if (found.length !== closure_18.length) {
            if (!ref2.current) {
              closure_8(items);
              const found1 = arr.filter((item) => !found.includes(item));
              closure_6(found1.map((projectId) => projectId.projectId));
              closure_10(false);
              closure_11(true);
            }
          }
          if (items.length > 0) {
            closure_21(items);
          }
        });
      } else {
        callback1(first1);
      }
    }
  }, items5);
  let obj2 = {
    projects: memo,
    targetIds: memo2,
    setTargetIds: callback,
    prompt: str,
    setPrompt: tmp7,
    sending: first2,
    failed: first3,
    canSubmit: tmp,
    submit: callback2,
    dismiss: obj.useCallback(() => {
      closure_13.current = true;
      let tmp2 = first1.length > 0;
      const tmp = first1;
      if (tmp2) {
        tmp2 = !first2;
      }
      if (tmp2) {
        callback1(tmp);
      }
      closure_2();
    }, items6)
  };
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const CONJURE_APP_BUILD_MAX_TARGETS = 10;
export const appBuildRequestSentToast = function appBuildRequestSentToast(arr) {
  let mapped;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { names: mapped.join(", ") };
  const RZO35O = _modDef3830.RZO35O;
  mapped = arr.map((name) => name.name);
  return formatToPlainString(RZO35O, obj);
};
export const useConjureAppBuildRequestForm = tmp2;
