// Module ID: 7370
// Function ID: 59445
// Dependencies: []

// Module 7370
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
