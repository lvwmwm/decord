// Module ID: 9670
// Function ID: 9671
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 5111, 9671, 1984, 2]
// Exports: openIgnoreThermalStateAlert

// Module 9670 (openIgnoreThermalStateAlert)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5111 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(9671, dependencyMap.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = onConfirm;
          return <IgnoreThermalStateAlert />;
        };
      });
    },
    isDismissable: false
  });
};
