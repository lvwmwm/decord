// Module ID: 17758
// Function ID: 17759
// Name: getChannelSubtitleData
// Dependencies: [1112, 2]
// Exports: getChannelSubtitleData

// Module 17758 (getChannelSubtitleData)
import intl2 from "intl" /* 1112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export function getChannelSubtitleData(subtitle) {
  let intl;
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          const obj2 = { subtitle: intl.string(intl2.t.Pa817q), type: subtitle.type };
          intl = intl2.intl;
          return obj2;
        } else if ("voice" === type) {
          const obj = { subtitle: null, type: null };
          ({ text: obj.subtitle, type: obj.type } = subtitle);
          return obj;
        }
      }
    }
    const obj5 = { subtitle: null, type: null };
    ({ name: obj3.subtitle, type: obj3.type } = subtitle);
    return obj5;
  }
}
