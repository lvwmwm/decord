// Module ID: 13733
// Function ID: 13734
// Name: useConjureClarificationLinks
// Dependencies: [5, 32, 19, 7017, 13572, 13243, 504, 7018, 13251, 2]
// Exports: default

// Module 13733 (useConjureClarificationLinks)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, closure_0, closure_1, dependencyMap, set;

const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureClarificationLinks.tsx");

export default function useConjureClarificationLinks(arg0, arg1, arg2) {
  let first;
  let items4;
  let items5;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  let items = [arg1, arg2, arg0];
  const memo = first.useMemo(() => {
    const questions = closure_1.questions;
    return Object.fromEntries(questions.flatMap((id) => {
      let items1;
      let items = closure_1_2[id.id];
      const linkedPair = closure_0(closure_1[4]).linkedPair;
      closure_0(closure_1[4]);
      const tmp2 = closure_1_0;
      if (items == null) {
        items = [];
      }
      const linkedPairResult = linkedPair(tmp2, id, items);
      if (null == linkedPairResult) {
        items1 = [];
      } else {
        const items2 = [id.id, linkedPairResult];
        items1 = [items2];
      }
      return items1;
    }));
  }, items);
  let tmp2 = memo(first.useState({}), 2);
  first = tmp2[0];
  let closure_5 = tmp2[1];
  let tmp4 = memo(first.useState({}), 2);
  const first1 = tmp4[0];
  let closure_7 = tmp4[1];
  const useRef = first.useRef;
  set = new Set();
  const ref = useRef(set);
  let items1 = [memo];
  const effect = first.useEffect(() => {
    let obj = function _readStart() {
      obj = _asyncToGenerator(async (arg0, value, arg2) => {
        let obj2;
        let v0;
        closure_0 = arg0;
        closure_1 = value;
        closure_2 = arg2;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c5;
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_4 = tmp;
                let closure_3 = tmp4;
                closure_0 = closure_2;
                closure_1 = undefined;
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: obj2.fetchLinkedAppStart(closure_0, closure_1), done: false };
                obj2 = closure_2_0(closure_2_1[5]);
                return obj5;
              }
            } else {
              if (1 === c6) {
                c5 = 0;
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = value;
                c5((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1_0] = closure_1_1;
                  return obj;
                });
                c5 = 0;
              }
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp14) {
            if (0 === c5) {
              c7 = 3;
              throw tmp14;
            } else {
              c6 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    function readStart(target, caller, key) {
      return obj(...arguments);
    }
    const values = Object.values(memo);
    for (const item10012 of values) {
      let tmp2 = item10012;
      let current = ref.current;
      let tmp3 = ref;
      if (!current.has(item10012.key)) {
        let current2 = tmp3.current;
        let tmp4 = item10012;
        let addResult = current2.add(tmp2.key);
        let start = readStart(tmp2.target, tmp2.caller, tmp2.key);
      }
      continue;
    }
  }, items1);
  let obj = require("get initialized");
  let items2 = [closure_5];
  const items3 = [memo];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => {
    const values = Object.values(memo);
    return fromEntries(values.flatMap((item) => {
      let project;
      let items = [, ];
      ({ target: arr[0], caller: arr[1] } = item);
      return items.map((item) => {
        const items = [item, project.getProject(item)];
        return items;
      });
    }));
  }, items3);
  let obj2 = {
    builds: first.useMemo(() => {
      const entries = Object.entries(memo);
      return fromEntries(entries.flatMap((item) => {
        let items;
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        if (null == first1[tmp2.key]) {
          items = [];
        } else {
          const items1 = [tmp, first1[tmp2.key]];
          items = [items1];
        }
        return items;
      }));
    }, items4),
    linkFor: first.useCallback((arg0) => {
      let link_flow;
      let link_purpose;
      let linkedAppPurpose;
      let name;
      let name2;
      let obj4;
      let obj5;
      let tmp17;
      let usesPreviewAppResult;
      closure_0 = arg0;
      closure_1 = tmp;
      let tmp2 = null;
      if (null != memo[arg0]) {
        tmp2 = first[tmp.key];
      }
      if (closure_2[arg0] != null) {
        first = tmp4[0];
        if (first != null) {
          name = first.name;
        }
      }
      if (stateFromStoresObject[closure_0] != null) {
        name2 = tmp8.name;
      }
      if (null != memo[arg0]) {
        if (null != tmp2) {
          if (null != name) {
            if (null != name2) {
              let tmp16 = tmp6[tmp.caller];
              let tmp9 = name;
              if (memo[arg0].caller === closure_0) {
                tmp9 = name2;
              }
              let obj = { caller: tmp9, target: name2, targetLive: null, targetHasPreview: null, callerHasPreview: usesPreviewAppResult, callerLiveOnVibeyard: false };
              if (memo[arg0].caller === closure_0) {
                name2 = name;
              }
              ({ live: obj.targetLive, hasPreview: obj.targetHasPreview } = tmp2);
              usesPreviewAppResult = null == tmp16;
              if (!usesPreviewAppResult) {
                const obj2 = closure_0(closure_1[7]);
                usesPreviewAppResult = obj2.usesPreviewApp(tmp16);
              }
              let build = first1[tmp.key];
              if (build == null) {
                build = tmp2.build;
              }
              const questions = closure_1.questions;
              const found = questions.find((id) => id.id === closure_0);
              const obj3 = {
                sides: obj,
                callerProject: tmp16,
                targetProject: tmp17,
                flow: link_flow,
                purpose: linkedAppPurpose(link_purpose),
                data: obj4.linkedAppChatData(obj, build),
                value: build,
                aria: obj5.linkedAppChatAria(obj),
                onChange(arg0) {
                          let key;
                          closure_0 = arg0;
                          return closure_1_7((arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj[key.key] = closure_0;
                            return obj;
                          });
                        }
              };
              if (tmp16 == null) {
                tmp16 = null;
              }
              tmp17 = tmp6[tmp.target];
              if (tmp17 == null) {
                tmp17 = null;
              }
              link_flow = undefined;
              if (found != null) {
                link_flow = found.link_flow;
              }
              if (link_flow == null) {
                link_flow = tmp2.flow;
              }
              link_purpose = undefined;
              linkedAppPurpose = closure_0(closure_1[8]).linkedAppPurpose;
              closure_0(closure_1[8]);
              if (found != null) {
                link_purpose = found.link_purpose;
              }
              if (link_purpose == null) {
                link_purpose = tmp2.purpose;
              }
              obj4 = closure_0(closure_1[8]);
              obj5 = closure_0(closure_1[8]);
              return obj3;
            }
          }
        }
      }
      return null;
    }, items5)
  };
  items4 = [first1, memo];
  items5 = [first1, arg1, arg2, memo, arg0, stateFromStoresObject, first];
  return obj2;
};
