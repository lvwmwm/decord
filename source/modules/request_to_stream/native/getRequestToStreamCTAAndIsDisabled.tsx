// Module ID: 12342
// Function ID: 96153
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [57, 1194, 10945, 21, 10933, 1212, 2652, 2]
// Exports: default

// Module 12342 (getRequestToStreamCTAAndIsDisabled)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("canFulfillStreamRequest").fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  let obj = require(10945) /* canFulfillStreamRequest */;
  const tmp = callback(obj.canFulfillStreamRequest(id, true), 2);
  id = id.getId();
  const obj2 = importDefault(21);
  const sum = importDefault(21).extractTimestamp(id.id) + require(10933) /* result */.EMBED_LIFETIME;
  const extractTimestampResult = importDefault(21).extractTimestamp(id.id);
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2652)["5+172e"]);
  if (tmp6) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let stringResult1 = intl6.string(importDefault(2652).u4QmWl);
    let flag = true;
  } else if (id.author.id === id) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl5.string(importDefault(2652)["8HU1M2"]);
    flag = true;
  } else {
    stringResult1 = stringResult;
    flag = false;
    if (!tmp[0]) {
      if (require(10945) /* canFulfillStreamRequest */.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp2) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl4.string(importDefault(2652).P0wwmM);
        flag = true;
      } else if (require(10945) /* canFulfillStreamRequest */.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp2) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl3.string(importDefault(2652)["43zohO"]);
        flag = true;
      } else if (require(10945) /* canFulfillStreamRequest */.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp2) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl2.string(importDefault(2652).qRXats);
        flag = true;
      } else {
        stringResult1 = stringResult;
        flag = false;
        if (require(10945) /* canFulfillStreamRequest */.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp2) {
          const intl7 = require(1212) /* getSystemLocale */.intl;
          stringResult1 = intl7.string(importDefault(2652)["fac+eE"]);
          flag = true;
        }
      }
    }
  }
  obj = { text: stringResult1, isDisabled: flag };
  return obj;
};
