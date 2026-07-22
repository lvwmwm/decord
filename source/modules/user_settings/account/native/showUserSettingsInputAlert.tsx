// Module ID: 13585
// Function ID: 102972
// Name: showUserSettingsInputAlert
// Dependencies: []
// Exports: default

// Module 13585 (showUserSettingsInputAlert)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  ({ onSubmit: closure_0, onSuccess: closure_1, onError: closure_2 } = arg0);
  let obj = { 0: "spring", 9223372036854775807: 0.4, 0: 1 };
  Object.setPrototypeOf(null);
  let closure_3 = Object.assign(arg0, obj);
  obj = {
    importer() {
      return callback(paths[4])(paths[3], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_3);
          const intl = callback(closure_2[5]).intl;
          obj["cancelText"] = intl.string(callback(closure_2[5]).t.ETE/oC);
          const intl2 = callback(closure_2[5]).intl;
          obj["confirmText"] = intl2.string(callback(closure_2[5]).t.BddRzS);
          if (null != closure_3.confirmColor) {
            let RED = closure_3.confirmColor;
          } else {
            RED = callback2(closure_2[6]).Colors.RED;
          }
          obj["confirmColor"] = RED;
          obj["onSubmit"] = callback;
          obj["onSuccess"] = callback2;
          obj["onError"] = closure_2;
          return closure_3(callback, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[2]).openLazy(obj);
};
