// Module ID: 15794
// Function ID: 121950
// Name: getChannelInfoSubtitle
// Dependencies: [4319, 1212, 2]
// Exports: default

// Module 15794 (getChannelInfoSubtitle)
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === length) {
    return importDefault(4319).getName(arg0, arg1, arg2[0]);
  } else if (2 === length) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { user1: importDefault(4319).getName(arg0, arg1, arg2[0]) };
    const obj2 = importDefault(4319);
    obj.user2 = importDefault(4319).getName(arg0, arg1, arg2[1]);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["lRD/ru"], obj);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { user1: importDefault(4319).getName(arg0, arg1, arg2[0]) };
    const obj6 = importDefault(4319);
    obj.user2 = importDefault(4319).getName(arg0, arg1, arg2[1]);
    obj.numPeople = arg2.length - 2 + num;
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.RFCI3S, obj);
  }
};
