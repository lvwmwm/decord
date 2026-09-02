// Module ID: 7771
// Function ID: 7772
// Name: dispatcher
// Dependencies: [706, 2]

// Module 7771 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = dispatcherDefault;
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};
