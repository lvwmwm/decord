// Module ID: 5047
// Function ID: 43694
// Name: openQuarantineModeInfoModal
// Dependencies: []
// Exports: default

// Module 5047 (openQuarantineModeInfoModal)
importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = arg1(dependencyMap[3]);
  const bestActiveInput = obj.getBestActiveInput();
  if (null != bestActiveInput) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return callback(closure_0, {});
        };
      });
    }
  };
  importDefault(dependencyMap[4]).openLazy(obj);
};
