// Module ID: 12726
// Function ID: 97648
// Name: openGuildLimitedAccessInfoModal
// Dependencies: []
// Exports: default

// Module 12726 (openGuildLimitedAccessInfoModal)
importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const arg1 = arg0;
  Keyboard.dismiss();
  let obj = arg1(dependencyMap[3]);
  const bestActiveInput = obj.getBestActiveInput();
  if (null != bestActiveInput) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return arg0(paths[6])(paths[5], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[4]).openLazy(obj);
};
