// Module ID: 12001
// Function ID: 92767
// Name: _fetchNote
// Dependencies: [5, 31, 12002, 653, 566, 686, 507, 2]
// Exports: default

// Module 12001 (_fetchNote)
import dispatcher from "dispatcher";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _fetchNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useNote.tsx");

export default function useNote(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getNote(closure_0));
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      (function fetchNote(closure_0) {
        return outer2_7(...arguments);
      })(closure_0);
    }
  }, items1);
  if (null == stateFromStores) {
    stateFromStores = { loading: true, note: null };
  }
  return stateFromStores;
};
