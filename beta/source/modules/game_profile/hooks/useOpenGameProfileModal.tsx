// Module ID: 10664
// Function ID: 10665
// Name: useOpenGameProfileModal
// Dependencies: [10461, 10281, 2]
// Exports: default

// Module 10664 (useOpenGameProfileModal)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10281 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  let closure_0;
  importDefault = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onOpened = obj.onOpened;
  const tmp = require("useShouldOpenGameProfileModal")(arg0);
  const gameProfileModalChecks = tmp;
  const gameId = tmp.gameId;
  let fn;
  if (tmp.shouldOpenGameProfile) {
    if (null != gameId) {
      fn = (stopPropagation) => {
        if (stopPropagation != null) {
          stopPropagation.stopPropagation();
        }
        if (stopPropagation != null) {
          stopPropagation.preventDefault();
        }
        const obj = { gameId, gameProfileModalChecks };
        const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
        GameProfileActionCreatorsDefault;
        const merged = Object.assign(closure_0);
        openGameProfileModal(obj);
        const tmp5 = gameId;
        if (onOpened != null) {
          onOpened(tmp5);
        }
      };
    }
  }
  return fn;
};
