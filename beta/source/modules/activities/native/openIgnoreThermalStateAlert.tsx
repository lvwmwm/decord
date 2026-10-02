// Module ID: 8858
// Function ID: 8859
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 5205, 8859, 1987, 2]
// Exports: openIgnoreThermalStateAlert

// Module 8858 (openIgnoreThermalStateAlert)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5205 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let IgnoreThermalStateAlert;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let onConfirm;
      const promise = asyncRequire(8859, dependencyMap.paths);
      return promise.then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <IgnoreThermalStateAlert onConfirm={onConfirm} />;
        };
      });
    },
    isDismissable: false
  };
  obj.openLazy(obj2);
};
