// Module ID: 11922
// Function ID: 11923
// Dependencies: [5, 5260, 11905, 2007, 2]

// Module 11922
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
const result = require("HubEmailConnectionModal").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default {
  open(closure_0) {
    closure_0 = arg1;
    importDefault(5260).pushLazy(callback(function*() {
      let closure_1 = tmp5;
      let closure_0 = tmp2;
      yield outer1_0(paths[3])(paths[2], paths.paths);
      closure_0 = arg1.default;
      if (null != closure_0) {
        const obj = { animation: null };
        obj[0] = closure_0;
        closure_0.modalConfig = obj;
      }
      return closure_0;
    }), closure_0, HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};
