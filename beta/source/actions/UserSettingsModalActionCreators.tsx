// Module ID: 7236
// Function ID: 7237
// Name: UserSettingsModalActionCreators
// Dependencies: [577, 2]

// Module 7236 (UserSettingsModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section });
  }
};
