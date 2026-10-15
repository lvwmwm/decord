// Module ID: 6119
// Function ID: 6120
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [19, 17, 21, 5041, 5360, 6120, 2000, 2]
// Exports: default

// Module 6119 (openGuildLimitedAccessInfoModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5360 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const Keyboard = react_native.Keyboard;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  _require = arg0;
  Keyboard.dismiss();
  const obj = require("ChatInputUtils");
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  const obj2 = {
    importer() {
      let guildId;
      const promise = asyncRequire(6120, dependencyMap.paths);
      return promise.then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} />;
        };
      });
    },
    isDismissable: false
  };
  const obj3 = actions_AlertActionCreatorsDefault;
  obj3.openLazy(obj2);
};
