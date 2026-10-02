// Module ID: 10843
// Function ID: 10844
// Name: CodedLinkActionCreators
// Dependencies: [1093, 585, 2]

// Module 10843 (CodedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1093 */;
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
