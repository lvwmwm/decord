// Module ID: 7369
// Function ID: 59422
// Dependencies: []

// Module 7369
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    importDefault(dependencyMap[0]).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};
