// Module ID: 14965
// Function ID: 14966
// Name: NoteStore
// Dependencies: [4907, 4915, 4918, 2]

// Module 14965 (NoteStore)
import LibdiscoreStore2 from "LibdiscoreStore" /* 4915 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 4918 */;
import PlainRecord from "PlainRecord" /* 4907 */;
import size from "module_2" /* 2 */;

let TypeTag;
let _window;
({ TypeTag, constructInPlace: _window } = PlainRecord);
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
const Note = "Note";
class NoteStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKVDatabase("notes");
    return applyArgumentsResult;
  }
  getNote(arg0) {
    const database = this.database;
    return database.get(arg0);
  }
  stateWrapper() {
    return this.database;
  }
}
const prototype = NoteStore.prototype;
NoteStore.displayName = "NoteStore";
let obj = {
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
    const obj = { loading: false, note: note.note };
    const result = set.set(note.id, React(Note, obj));
  },
  USER_NOTE_LOAD_START(userId, set) {
    const result = set.set(userId.userId, React(Note, { loading: true, note: null }));
  }
};
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const noteStore = new NoteStore(obj, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = size.fileFinishedImporting("modules/user_profile/notes/NoteStore.tsx");

export default noteStore;
export const NoteRecordTypeTag = "Note";
