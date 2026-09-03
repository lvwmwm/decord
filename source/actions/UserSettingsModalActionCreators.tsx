// Module ID: 7774
// Function ID: 7775
// Name: dispatcher
// Dependencies: [706, 2]

// Module 7774 (dispatcher)
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
