// Module ID: 14558
// Function ID: 14559
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 5954, 14559, 1995, 2]
// Exports: default

// Module 14558 (openForumExplicitMediaWarning)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
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
      const promise = asyncRequire(14559, dependencyMap.paths);
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
