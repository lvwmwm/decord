// Module ID: 12626
// Function ID: 12627
// Name: useNote
// Dependencies: [5, 19, 12627, 1074, 504, 573, 1271, 2]
// Exports: default

// Module 12626 (useNote)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import NoteStore from "NoteStore" /* 12627 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6;

let obj = function _fetchNote() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let body;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            body = undefined;
            const obj5 = { type: "USER_NOTE_LOAD_START", userId: id };
            const obj9 = DispatcherDefault;
            obj9.dispatch(obj5);
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj6 = { url: Endpoints.NOTE(id), oldFormErrors: true, rejectWithError: true };
            const get = HTTP.get;
            c5 = 2;
            c6 = 1;
            const obj7 = { value: get(obj6), done: false };
            return obj7;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "USER_NOTE_UPDATE", id };
            const obj4 = closure_130_1(closure_130_2[5]);
            obj4.dispatch(obj8);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body = value.body;
            if (body.note_user_id !== id) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Invalid response from server");
              throw error;
            } else {
              const obj11 = { type: "USER_NOTE_UPDATE", id, note: body.note };
              obj = closure_130_1(closure_130_2[5]);
              obj.dispatch(obj11);
              c4 = 0;
            }
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        let closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useNote.tsx");

export default function useNote(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NoteStore];
  obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => NoteStore.getNote(closure_0));
  const items1 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    function fetchNote() {
      return closure_1_7(...arguments);
    }
    if (null == stateFromStores) {
      fetchNote(closure_0);
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = { loading: true, note: null };
  }
  return stateFromStores;
};
