// Module ID: 14099
// Function ID: 14100
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [19, 17, 21, 4622, 5109, 14100, 1980, 2]
// Exports: default

// Module 14099 (openGuildLimitedAccessInfoModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  _require = arg0;
  Keyboard.dismiss();
  const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  let obj = require("ChatInputUtils");
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(14100, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
