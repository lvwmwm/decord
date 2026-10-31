// Module ID: 14596
// Function ID: 14597
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 5959, 14597, 1994, 2]
// Exports: default

// Module 14596 (openForumExplicitMediaWarning)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let channelId;
      let messageId;
      const promise = asyncRequire(14597, dependencyMap.paths);
      return promise.then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 channelId={channelId} messageId={messageId} />;
        };
      });
    },
    isDismissable: false
  };
  obj.openLazy(obj2);
};
