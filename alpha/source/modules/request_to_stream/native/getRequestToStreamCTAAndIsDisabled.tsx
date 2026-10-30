// Module ID: 15105
// Function ID: 15106
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [32, 502, 13141, 11, 11643, 1114, 3027, 2]
// Exports: default

// Module 15105 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1114 */;
import _modDef3027 from "module_3027" /* 3027 */;
import isInviteActive from "isInviteActive" /* 11643 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 13141 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id, arg1) {
  let isDisabled;
  let stringResult;
  let text;
  const obj = useCanFulfillStreamRequest;
  const tmp3 = _slicedToArray(obj.canFulfillStreamRequest(id, true), 2);
  const first = tmp3[0];
  id = AuthenticationStore.getId();
  const obj2 = SnowflakeUtilsDefault;
  const extractTimestampResult = obj2.extractTimestamp(id.id);
  const sum = extractTimestampResult + isInviteActive.EMBED_LIFETIME;
  const tmp10 = sum < Date.now();
  const intl = intl8.intl;
  const string = intl.string;
  const tmp11 = _modDef3027;
  const tmp12 = arg1;
  if (tmp12) {
    stringResult = string(tmp11.K0spYL);
  } else {
    stringResult = string(tmp11["5+172e"]);
  }
  if (tmp10) {
    const intl6 = tmp(1114).intl;
    text = intl6.string(tmp7(3027).u4QmWl);
    isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1114).intl;
    text = intl5.string(tmp7(3027)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!first) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp3[1]) {
        const intl4 = tmp(1114).intl;
        text = intl4.string(tmp7(3027).P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp3[1]) {
        const intl3 = tmp(1114).intl;
        text = intl3.string(tmp7(3027)["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp3[1]) {
        const intl2 = tmp(1114).intl;
        text = intl2.string(tmp7(3027).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp3[1]) {
          const intl7 = tmp(1114).intl;
          text = intl7.string(tmp7(3027)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};
