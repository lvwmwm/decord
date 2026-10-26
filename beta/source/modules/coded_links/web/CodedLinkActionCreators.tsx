// Module ID: 11037
// Function ID: 11038
// Name: CodedLinkActionCreators
// Dependencies: [1094, 584, 2]

// Module 11037 (CodedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1094 */;
import size from "module_2" /* 2 */;

const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
let obj = {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    const obj = DispatcherDefault;
    const obj2 = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj2);
  },
  nativeModalOpenFailed(code) {
    const obj = DispatcherDefault;
    const obj2 = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default obj;
