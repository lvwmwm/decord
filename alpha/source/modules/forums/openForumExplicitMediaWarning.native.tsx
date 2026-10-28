// Module ID: 14291
// Function ID: 14292
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 5945, 14292, 1999, 2]
// Exports: default

// Module 14291 (openForumExplicitMediaWarning)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5945 */;
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
      const promise = asyncRequire(14292, dependencyMap.paths);
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
