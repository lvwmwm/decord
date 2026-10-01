// Module ID: 15374
// Function ID: 15375
// Name: UserSettingsDesignSystemAlertModal
// Dependencies: [5, 19, 17, 21, 5209, 5205, 4836, 5281, 2]
// Exports: default

// Module 15374 (UserSettingsDesignSystemAlertModal)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c0, c1;

let closure_4;
let hasOwnProperty;
function DemoModal() {
  const callback = react.useCallback(_asyncToGenerator(async function(arg0, value) {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0) => setTimeout(arg0, 2000));
            c1 = 1;
            c0 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  }), []);
  const AlertModal = AlertModal2.AlertModal;
  const items = [jsx(AlertModal2.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"), jsx(AlertModal2.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel")];
  return <AlertModal title="Are you sure?" content="This will clear 3 incoming friend requests. The users who sent them won’t be informed." actions={items} />;
}
function openDemoModal() {
  const obj = useAlertStore;
  obj.openAlert("demo-1", <DemoModal />);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  ({ style: closure_9().container, children: null });
  return <hasOwnProperty>{null}</hasOwnProperty>;
};
