// Module ID: 7365
// Function ID: 59411
// Dependencies: []

// Module 7365
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
