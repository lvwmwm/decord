// Module ID: 6484
// Function ID: 57991
// Name: dispatcher
// Dependencies: [686, 2]

// Module 6484 (dispatcher)
const result = require("set").fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    importDefault(686).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = importDefault(686);
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};
