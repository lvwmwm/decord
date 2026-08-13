// Module ID: 10374
// Function ID: 10375
// Dependencies: [683, 709, 2]

// Module 10374
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED";

const result = require("set").fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    let obj = importDefault(709);
    obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    let obj = importDefault(709);
    obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  }
};
