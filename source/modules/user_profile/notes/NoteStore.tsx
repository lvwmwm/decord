// Module ID: 11976
// Function ID: 92539
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1388, 1839, 1841, 2]

// Module 11976 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import constructInPlace from "constructInPlace";
import { LibdiscoreBatchStoreRefactorExperiment } from "_callSuper";

let TypeTag;
let closure_5;
function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
({ TypeTag, constructInPlace: closure_5 } = constructInPlace);
let tmp3 = ((LibdiscoreStore) => {
  class NoteStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = NoteStore(this, NoteStore);
      items1 = [...items];
      obj = outer1_3(NoteStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKVDatabase("notes");
      return tmp2Result;
    }
  }
  callback2(NoteStore, LibdiscoreStore);
  let obj = {
    key: "getNote",
    value(arg0) {
      const database = this.database;
      return database.get(arg0);
    }
  };
  let items = [obj, ];
  obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  items[1] = obj;
  return callback(NoteStore, items);
})(require("_isNativeReflectConstruct").LibdiscoreStore);
tmp3.displayName = "NoteStore";
tmp3 = new tmp3({
  LOGOUT(arg0, clear) {
    return clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    return clear.clear();
  },
  CONNECTION_OPEN(arg0, clear) {
    return clear.clear();
  },
  OVERLAY_INITIALIZE(arg0, clear) {
    return clear.clear();
  },
  USER_NOTE_UPDATE(note, set) {
    const result = set.set(note.id, callback3("Note", { loading: false, note: note.note }));
  },
  USER_NOTE_LOAD_START(userId, set) {
    const result = set.set(userId.userId, callback3("Note", { loading: true, note: null }));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_profile/notes/NoteStore.tsx");

export default tmp3;
export const NoteRecordTypeTag = "Note";
