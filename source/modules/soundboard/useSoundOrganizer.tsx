// Module ID: 15614
// Function ID: 119251
// Name: sortSoundsOldestToNewestCreationDate
// Dependencies: []
// Exports: useSoundOrganizer

// Module 15614 (sortSoundsOldestToNewestCreationDate)
function sortSoundsOldestToNewestCreationDate(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [...arg0];
  const sorted = items.sort((soundId, soundId2) => callback(closure_1[0]).compare(soundId.soundId, soundId2.soundId));
  let tmp2 = sorted;
  if (flag) {
    tmp2 = function _positionUnavailableSoundsAtEnd(sorted) {
      const items = [...sorted];
      return items.sort((available, available2) => {
        if (!available.available) {
          let num2 = 0;
          if (!available.available) {
            num2 = 0;
            if (available2.available) {
              num2 = 1;
            }
          }
          let num = num2;
        } else {
          num = -1;
        }
        return num;
      });
    }(sorted);
  }
  return tmp2;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/soundboard/useSoundOrganizer.tsx");

export { sortSoundsOldestToNewestCreationDate };
export function useSoundOrganizer() {
  return sortSoundsOldestToNewestCreationDate;
}
