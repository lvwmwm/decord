// Module ID: 10539
// Function ID: 82348
// Name: openIgnoreThermalStateAlert
// Dependencies: []
// Exports: openIgnoreThermalStateAlert

// Module 10539 (openIgnoreThermalStateAlert)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  const arg1 = arg0;
  let obj = importDefault(dependencyMap[2]);
  obj = {
    importer() {
      return arg0(paths[4])(paths[3], paths.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onConfirm"] = IgnoreThermalStateAlert;
          return callback(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
