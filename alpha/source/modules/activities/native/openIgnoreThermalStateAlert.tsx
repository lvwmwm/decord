// Module ID: 10002
// Function ID: 10003
// Name: openIgnoreThermalStateAlert
// Dependencies: [5, 19, 21, 6016, 10003, 2119, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10002 (openIgnoreThermalStateAlert)
import Fragment from "Fragment" /* 21 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6016 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export function openIgnoreThermalStateAlert(arg0) {
  let closure_1;
  let paths;
  let closure_0 = arg0;
  const tmp = actions_AlertActionCreatorsDefault;
  const obj = {
    importer() {
      return closure_1(...arguments);
    },
    isDismissable: false
  };
  const openLazy = tmp.openLazy;
  importDefault = _asyncToGenerator(async () => {
    let c1;
    await tmp(c2[5])(c2[4], c2.paths);
    const IgnoreThermalStateAlert = arg1.IgnoreThermalStateAlert;
    return (arg0) => {
      const merged = Object.assign(arg0);
      return <closure_1_0 onConfirm={onConfirm} />;
    };
  });
  openLazy(obj);
}
