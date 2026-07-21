// Module ID: 15666
// Function ID: 119695
// Name: getChannelInfoSubtitle
// Dependencies: []
// Exports: default

// Module 15666 (getChannelInfoSubtitle)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === length) {
    return importDefault(dependencyMap[0]).getName(arg0, arg1, arg2[0]);
  } else if (2 === length) {
    const intl = require(dependencyMap[1]).intl;
    let obj = { user1: importDefault(dependencyMap[0]).getName(arg0, arg1, arg2[0]) };
    const obj2 = importDefault(dependencyMap[0]);
    obj.user2 = importDefault(dependencyMap[0]).getName(arg0, arg1, arg2[1]);
    return intl.formatToPlainString(require(dependencyMap[1]).t.lRD/ru, obj);
  } else {
    const intl2 = require(dependencyMap[1]).intl;
    obj = { user1: importDefault(dependencyMap[0]).getName(arg0, arg1, arg2[0]) };
    const obj6 = importDefault(dependencyMap[0]);
    obj.user2 = importDefault(dependencyMap[0]).getName(arg0, arg1, arg2[1]);
    obj.numPeople = arg2.length - 2 + num;
    return intl2.formatToPlainString(require(dependencyMap[1]).t.RFCI3S, obj);
  }
};
