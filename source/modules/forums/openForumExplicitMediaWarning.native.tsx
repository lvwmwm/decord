// Module ID: 8134
// Function ID: 64360
// Name: openForumExplicitMediaWarning
// Dependencies: []
// Exports: default

// Module 8134 (openForumExplicitMediaWarning)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  const require = arg0;
  const importDefault = arg1;
  let obj = importDefault(dependencyMap[1]);
  obj = {
    importer() {
      return arg0(paths[3])(paths[2], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["channelId"] = closure_0;
          obj["messageId"] = closure_1;
          return callback(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
