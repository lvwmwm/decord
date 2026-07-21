// Module ID: 11962
// Function ID: 92464
// Name: _fetchNote
// Dependencies: []
// Exports: default

// Module 11962 (_fetchNote)
function _fetchNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchNote = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/hooks/useNote.tsx");

export default function useNote(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  let stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => note.getNote(arg0));
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      function fetchNote(arg0) {
        return callback(...arguments);
      }(arg0);
    }
  }, items1);
  if (null == stateFromStores) {
    stateFromStores = { "Null": 131122.52832032426, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 };
  }
  return stateFromStores;
};
