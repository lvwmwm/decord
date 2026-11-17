// Module ID: 11188
// Function ID: 11189
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 6267, 11189, 2121, 2]
// Exports: default

// Module 11188 (openForumExplicitMediaWarning)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6267 */;
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
      const promise = asyncRequire(11189, dependencyMap.paths);
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
