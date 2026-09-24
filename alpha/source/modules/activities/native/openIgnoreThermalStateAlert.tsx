// Module ID: 9757
// Function ID: 9758
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 5196, 9758, 1980, 2]
// Exports: openIgnoreThermalStateAlert

// Module 9757 (openIgnoreThermalStateAlert)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(9758, dependencyMap.paths).then((IgnoreThermalStateAlert) => {
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
