// Module ID: 6505
// Function ID: 6506
// Name: dispatcher
// Dependencies: [709, 2]

// Module 6505 (dispatcher)
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
