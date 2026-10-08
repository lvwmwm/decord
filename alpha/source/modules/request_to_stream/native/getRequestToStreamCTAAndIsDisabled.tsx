// Module ID: 13378
// Function ID: 13379
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [32, 502, 11394, 11, 11382, 1126, 3051, 2]
// Exports: default

// Module 13378 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1126 */;
import _modDef3051 from "module_3051" /* 3051 */;
import isInviteActive from "isInviteActive" /* 11382 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 11394 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  let isDisabled;
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
  const stringResult = intl.string(_modDef3051["5+172e"]);
  if (tmp10) {
    const intl6 = tmp(1126).intl;
    text = intl6.string(tmp7(3051).u4QmWl);
    isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1126).intl;
    text = intl5.string(tmp7(3051)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!first) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp3[1]) {
        const intl4 = tmp(1126).intl;
        text = intl4.string(tmp7(3051).P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp3[1]) {
        const intl3 = tmp(1126).intl;
        text = intl3.string(tmp7(3051)["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp3[1]) {
        const intl2 = tmp(1126).intl;
        text = intl2.string(tmp7(3051).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp3[1]) {
          const intl7 = tmp(1126).intl;
          text = intl7.string(tmp7(3051)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};
