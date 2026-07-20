// Module ID: 8184
// Function ID: 64730
// Dependencies: []

// Module 8184
const CONFERENCE_MODE_ENABLED = require(dependencyMap[0]).CONFERENCE_MODE_ENABLED;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  }
};
