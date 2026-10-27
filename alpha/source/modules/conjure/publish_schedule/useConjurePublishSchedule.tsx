// Module ID: 12212
// Function ID: 12213
// Name: useConjurePublishSchedule
// Dependencies: [5, 32, 19, 10701, 504, 10809, 1125, 3831, 10810, 2]
// Exports: default

// Module 12212 (useConjurePublishSchedule)
import intl3 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureConnectionStore2 from "ConjureConnectionStore" /* 10701 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureConnectionStore = ConjureConnectionStore2;
let _require, c4, c5;

const ensureConnection = ConjureConnectionStore2.ensureConnection;
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishSchedule.tsx");

export default function useConjurePublishSchedule(arg0, arg1) {
  let closure_0;
  let closure_10;
  let closure_3;
  let closure_4;
  let closure_6;
  let closure_8;
  let closure_9;
  let first;
  let first1;
  let first2;
  let first3;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp16;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [closure_6];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => "open" === ConjureConnectionStore.getConnState(closure_0), items1);
  const items2 = [arg0, arg1];
  const effect = first2.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      ensureConnection(closure_0);
    }
  }, items2);
  [first, _asyncToGenerator] = first2.useState(null);
  [first1, _slicedToArray] = first2.useState(true);
  [first2, closure_6] = first2.useState(false);
  [tmp10, ensureConnection] = _slicedToArray(first2.useState(false), 2);
  const tmp9 = _slicedToArray(first2.useState(false), 2);
  [tmp12, closure_8] = _slicedToArray(first2.useState(null), 2);
  const tmp11 = _slicedToArray(first2.useState(null), 2);
  [first3, closure_9] = first2.useState(null);
  [tmp16, closure_10] = _slicedToArray(first2.useState(0), 2);
  const tmp15 = _slicedToArray(first2.useState(0), 2);
  let closure_11 = first2.useRef(false);
  const ref = first2.useRef({ value: 0 });
  const items3 = [arg0, arg1, stateFromStores, tmp16];
  const effect1 = first2.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const tmp2 = stateFromStores;
      if (tmp2) {
        const iter = ref.current;
        const sum = iter.value + 1;
        iter.value = sum;
        closure_1 = sum;
        const obj = closure_0(stateFromStores[5]);
        const publishSchedule = obj.fetchPublishSchedule(iter);
        const nextPromise = publishSchedule.then((result) => {
          if (ref.current.value === closure_1) {
            closure_3(result);
            closure_6(true);
            closure_4(false);
          }
        });
        nextPromise.catch(() => {
          if (ref.current.value === closure_1) {
            const intl = intl3.intl;
            closure_8(intl.string(_modDef3831.n25haz));
            closure_4(false);
          }
        });
        return () => {
          iter.value = iter.value + 1;
        };
      }
    }
  }, items3);
  const callback = first2.useCallback(() => {
    closure_4(true);
    closure_8(null);
    closure_10((arg0) => arg0 + 1);
  }, []);
  const items4 = [arg1, first2, arg0];
  let obj2 = {
    saved: first,
    loading: first1,
    loaded: first2,
    deleting: tmp10,
    error: tmp12,
    status: first3,
    retry: callback,
    remove: first2.useCallback(_asyncToGenerator(async (arg0, value) => {
      let message;
      let result;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let c0;
          let tmp;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c0 = undefined;
              tmp = undefined;
              const tmp91 = tmp;
              if (tmp91) {
                const tmp58 = first2;
                if (tmp58) {
                  if (!ref.current) {
                    ref.current = true;
                    const sum = iter.value + 1;
                    ref2.current.value = sum;
                    c0 = sum;
                    ensureConnection(true);
                    closure_8(null);
                    closure_9(null);
                    c3 = 2;
                    const obj2 = result(message[5]);
                    result = obj2.deletePublishSchedule(closure_0);
                    c4 = 3;
                    c5 = 1;
                    const obj5 = { value: result, done: false };
                    return obj5;
                  }
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_11.current = false;
            result = c0;
            const tmp52 = message;
            if (closure_129_12.current.value === c0) {
              result = closure_129_7(false);
            }
            throw tmp52;
          } else {
            if (2 === c4) {
              c3 = 1;
              result = closure_129_12.current.value;
              if (result === c0) {
                result = closure_129_8;
                if (message instanceof tmp(message[8])) {
                  message = message.message;
                } else {
                  const intl2 = result(message[6]).intl;
                  message = intl2.string(tmp(message[7]).i5Xp1l);
                }
                result(message);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_11.current = false;
              if (closure_129_12.current.value === c0) {
                closure_129_7(false);
              }
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              tmp = value;
              result = closure_129_12.current.value;
              if (result !== c0) {
                c3 = 0;
                closure_129_11.current = false;
                if (closure_129_12.current.value === c0) {
                  closure_129_7(false);
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                closure_129_3(tmp);
                result = closure_129_9;
                const intl = result(message[6]).intl;
                closure_129_9(intl.string(tmp(message[7]).lwN30C));
                c3 = 1;
              }
            }
            c3 = 0;
            closure_129_11.current = false;
            result = closure_129_12.current.value;
            if (result === c0) {
              closure_129_7(false);
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp72) {
          message = tmp72;
          if (0 === c3) {
            c5 = 3;
            throw tmp72;
          } else if (1 === tmp74) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items4)
  };
  return obj2;
};
