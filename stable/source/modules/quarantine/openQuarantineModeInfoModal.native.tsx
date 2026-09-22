// Module ID: 5603
// Function ID: 5604
// Name: openQuarantineModeInfoModal
// Dependencies: [19, 17, 21, 4502, 4981, 5604, 1896, 2]
// Exports: default

// Module 5603 (openQuarantineModeInfoModal)
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  const bestActiveInput = ChatInputUtils.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return require("asyncRequireImpl")(paths[5], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    }
  });
};
