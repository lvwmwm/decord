// Module ID: 7973
// Function ID: 63538
// Dependencies: [660, 686, 2]

// Module 7973
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED";

const result = require("set").fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    let obj = importDefault(686);
    obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    let obj = importDefault(686);
    obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  }
};
