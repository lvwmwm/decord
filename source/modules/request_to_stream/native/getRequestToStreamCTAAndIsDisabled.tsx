// Module ID: 12201
// Function ID: 93762
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: []
// Exports: default

// Module 12201 (getRequestToStreamCTAAndIsDisabled)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  let obj = arg1(dependencyMap[2]);
  const tmp = callback(obj.canFulfillStreamRequest(id, true), 2);
  id = id.getId();
  const obj2 = importDefault(dependencyMap[3]);
  const sum = importDefault(dependencyMap[3]).extractTimestamp(id.id) + arg1(dependencyMap[4]).EMBED_LIFETIME;
  const extractTimestampResult = importDefault(dependencyMap[3]).extractTimestamp(id.id);
  const intl = arg1(dependencyMap[5]).intl;
  const stringResult = intl.string(importDefault(dependencyMap[6]).5+172e);
  if (tmp6) {
    const intl6 = arg1(dependencyMap[5]).intl;
    let stringResult1 = intl6.string(importDefault(dependencyMap[6]).u4QmWl);
    let flag = true;
  } else if (id.author.id === id) {
    const intl5 = arg1(dependencyMap[5]).intl;
    stringResult1 = intl5.string(importDefault(dependencyMap[6]).8HU1M2);
    flag = true;
  } else {
    stringResult1 = stringResult;
    flag = false;
    if (!tmp[0]) {
      if (arg1(dependencyMap[2]).StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp2) {
        const intl4 = arg1(dependencyMap[5]).intl;
        stringResult1 = intl4.string(importDefault(dependencyMap[6]).P0wwmM);
        flag = true;
      } else if (arg1(dependencyMap[2]).StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp2) {
        const intl3 = arg1(dependencyMap[5]).intl;
        stringResult1 = intl3.string(importDefault(dependencyMap[6]).43zohO);
        flag = true;
      } else if (arg1(dependencyMap[2]).StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp2) {
        const intl2 = arg1(dependencyMap[5]).intl;
        stringResult1 = intl2.string(importDefault(dependencyMap[6]).qRXats);
        flag = true;
      } else {
        stringResult1 = stringResult;
        flag = false;
        if (arg1(dependencyMap[2]).StreamRequestUnfulfillableReason.NO_PERMISSION === tmp2) {
          const intl7 = arg1(dependencyMap[5]).intl;
          stringResult1 = intl7.string(importDefault(dependencyMap[6]).fac+eE);
          flag = true;
        }
      }
    }
  }
  obj = { text: stringResult1, isDisabled: flag };
  return obj;
};
