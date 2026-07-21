// Module ID: 8580
// Function ID: 68134
// Name: useOpenGameProfileModal
// Dependencies: []
// Exports: default

// Module 8580 (useOpenGameProfileModal)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  let obj = arg1;
  const importDefault = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  const dependencyMap = obj.onOpened;
  let tmp;
  let gameId;
  tmp = importDefault(dependencyMap[0])(arg0);
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
        let obj = stopPropagation(onOpened[1]);
        obj = {};
        const merged = Object.assign(stopPropagation);
        obj["gameId"] = gameId;
        obj["gameProfileModalChecks"] = tmp;
        obj.openGameProfileModal(obj);
        if (null != onOpened) {
          onOpened();
        }
      };
    }
  }
  return fn;
};
