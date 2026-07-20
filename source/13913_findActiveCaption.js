// Module ID: 13913
// Function ID: 105784
// Name: findActiveCaption
// Dependencies: []
// Exports: findActiveCaption

// Module 13913 (findActiveCaption)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx");

export const findActiveCaption = function findActiveCaption(captions, currentTime) {
  let tmp3;
  let diff = captions.length - 1;
  let num = 0;
  if (0 <= diff) {
    while (true) {
      let _Math = Math;
      let rounded = Math.floor((num + diff) / 2);
      tmp3 = captions[rounded];
      if (currentTime >= tmp3.start) {
        if (currentTime <= tmp3.end) {
          break;
        }
      }
      if (currentTime < tmp3.start) {
        diff = rounded - 1;
        let sum = num;
      } else {
        sum = rounded + 1;
      }
      num = sum;
    }
    return tmp3;
  }
  return null;
};
