// Module ID: 11370
// Function ID: 11371
// Name: openIgnoreThermalStateAlert
// Dependencies: [5, 19, 21, 5907, 11371, 2002, 2]
// Exports: openIgnoreThermalStateAlert

// Module 11370 (openIgnoreThermalStateAlert)
import Fragment from "Fragment" /* 21 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5907 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
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
};
