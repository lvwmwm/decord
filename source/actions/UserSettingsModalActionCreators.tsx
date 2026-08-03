// Module ID: 7502
// Function ID: 7503
// Name: dispatcher
// Dependencies: [709, 2]

// Module 7502 (dispatcher)
const result = require("set").fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    importDefault(709).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = importDefault(709);
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};
