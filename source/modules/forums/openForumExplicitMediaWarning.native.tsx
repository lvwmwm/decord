// Module ID: 9323
// Function ID: 9324
// Name: openForumExplicitMediaWarning
// Dependencies: [21, 4866, 9324, 2008, 2]
// Exports: default

// Module 9323 (openForumExplicitMediaWarning)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import _modDef4866 from "module_4866" /* 4866 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = _modDef4866;
  obj = {
    importer() {
      return callback(closure_1_2[3])(closure_1_2[2], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.channelId = closure_0;
          obj.messageId = closure_1_1;
          return closure_2_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
