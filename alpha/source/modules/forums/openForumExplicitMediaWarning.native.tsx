// Module ID: 14821
// Function ID: 14822
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 6094, 14822, 2123, 2]
// Exports: default

// Module 14821 (openForumExplicitMediaWarning)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6094 */;
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
      const promise = asyncRequire(14822, dependencyMap.paths);
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
