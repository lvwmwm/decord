// Module ID: 8185
// Function ID: 64637
// Name: openForumExplicitMediaWarning
// Dependencies: [33, 4471, 8186, 1934, 2]
// Exports: default

// Module 8185 (openForumExplicitMediaWarning)
import { jsx } from "jsxProd";

const result = require("ForumExplicitMediaAlert").fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let obj = importDefault(4471);
  obj = {
    importer() {
      return callback(outer1_2[3])(outer1_2[2], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["channelId"] = outer2_0;
          obj["messageId"] = outer2_1;
          return outer3_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
