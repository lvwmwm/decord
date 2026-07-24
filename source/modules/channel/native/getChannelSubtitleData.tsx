// Module ID: 15096
// Function ID: 114921
// Name: getChannelSubtitleData
// Dependencies: [1212, 2]
// Exports: getChannelSubtitleData

// Module 15096 (getChannelSubtitleData)
const result = require("set").fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          let obj = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.subtitle = intl.string(require(1212) /* getSystemLocale */.t.Pa817q);
          obj.type = subtitle.type;
          return obj;
        } else if ("voice" === type) {
          obj = {};
          ({ text: obj.subtitle, type: obj.type } = subtitle);
          return obj;
        }
      }
    }
    obj = {};
    ({ name: obj3.subtitle, type: obj3.type } = subtitle);
    return obj;
  }
};
