// Module ID: 8631
// Function ID: 68420
// Name: useOpenGameProfileModal
// Dependencies: [8632, 8636, 2]
// Exports: default

// Module 8631 (useOpenGameProfileModal)
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  let obj = arg1;
  const importDefault = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  const onOpened = obj.onOpened;
  let c2;
  let gameId;
  const tmp = importDefault(onOpened[0])(arg0);
  c2 = tmp;
  gameId = tmp.gameId;
  let fn;
  if (tmp.shouldOpenGameProfile) {
    if (null != gameId) {
      fn = (stopPropagation) => {
        if (null != stopPropagation) {
          stopPropagation.stopPropagation();
        }
        if (null != stopPropagation) {
          stopPropagation.preventDefault();
        }
        let obj = callback(onOpened[1]);
        obj = {};
        const merged = Object.assign(callback);
        obj["gameId"] = gameId;
        obj["gameProfileModalChecks"] = c2;
        obj.openGameProfileModal(obj);
        if (null != onOpened) {
          onOpened();
        }
      };
    }
  }
  return fn;
};
