// Module ID: 15603
// Function ID: 15604
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [32, 502, 14044, 11, 12688, 1113, 3221, 2]
// Exports: default

// Module 15603 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1113 */;
import _modDef3221 from "module_3221" /* 3221 */;
import isInviteActive from "isInviteActive" /* 12688 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 14044 */;
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
  const tmp11 = _modDef3221;
  const tmp12 = arg1;
  if (tmp12) {
    stringResult = string(tmp11.K0spYL);
  } else {
    stringResult = string(tmp11["5+172e"]);
  }
  if (tmp10) {
    const intl6 = tmp(1113).intl;
    text = intl6.string(tmp7(3221).u4QmWl);
    isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1113).intl;
    text = intl5.string(tmp7(3221)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!first) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp3[1]) {
        const intl4 = tmp(1113).intl;
        text = intl4.string(tmp7(3221).P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp3[1]) {
        const intl3 = tmp(1113).intl;
        text = intl3.string(tmp7(3221)["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp3[1]) {
        const intl2 = tmp(1113).intl;
        text = intl2.string(tmp7(3221).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp3[1]) {
          const intl7 = tmp(1113).intl;
          text = intl7.string(tmp7(3221)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};
