// Module ID: 11963
// Function ID: 92472
// Name: _isNativeReflectConstruct
// Dependencies: [2382364718, 1895825415, 1828716590, 1124073518, 1442840608, 3539992597, 2130706466]

// Module 11963 (_isNativeReflectConstruct)
let TypeTag;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
({ TypeTag, constructInPlace: closure_5 } = arg1(dependencyMap[5]));
let tmp3 = (LibdiscoreStore) => {
  class NoteStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = NoteStore(this, NoteStore);
      items1 = [...items];
      obj = closure_3(NoteStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.database = tmp2Result.addKVDatabase("notes");
      return tmp2Result;
    }
  }
  let closure_0 = NoteStore;
  callback2(NoteStore, LibdiscoreStore);
  let obj = {
    key: "getNote",
    value(arg0) {
      const database = this.database;
      return database.get(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "stateWrapper",
    value() {
      return this.database;
    }
  };
  items[1] = obj;
  return callback(NoteStore, items);
}(arg1(dependencyMap[6]).LibdiscoreStore);
tmp3.displayName = "NoteStore";
const LibdiscoreBatchStoreRefactorExperiment = arg1(dependencyMap[7]).LibdiscoreBatchStoreRefactorExperiment;
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
    const result = set.set(userId.userId, callback3("Note", { "Null": 131122.52832032426, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 }));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const obj = {
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
    const result = set.set(userId.userId, callback3("Note", { "Null": 131122.52832032426, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 }));
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_profile/notes/NoteStore.tsx");

export default tmp3;
export const NoteRecordTypeTag = "Note";
