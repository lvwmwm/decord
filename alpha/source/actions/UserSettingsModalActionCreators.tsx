// Module ID: 7155
// Function ID: 7156
// Name: UserSettingsModalActionCreators
// Dependencies: [572, 2]

// Module 7155 (UserSettingsModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  close() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    const obj = DispatcherDefault;
    const obj2 = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default obj;
