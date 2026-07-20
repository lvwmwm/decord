// Module ID: 14915
// Function ID: 112331
// Name: getChannelSubtitleData
// Dependencies: []
// Exports: getChannelSubtitleData

// Module 14915 (getChannelSubtitleData)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          let obj = {};
          const intl = require(dependencyMap[0]).intl;
          obj.subtitle = intl.string(require(dependencyMap[0]).t.Pa817q);
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
