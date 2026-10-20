// Module ID: 14365
// Function ID: 14366
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [32, 502, 12538, 11, 11222, 1128, 3014, 2]
// Exports: default

// Module 14365 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1128 */;
import _modDef3014 from "module_3014" /* 3014 */;
import isInviteActive from "isInviteActive" /* 11222 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 12538 */;
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
  const tmp11 = _modDef3014;
  const tmp12 = arg1;
  if (tmp12) {
    stringResult = string(tmp11.K0spYL);
  } else {
    stringResult = string(tmp11["5+172e"]);
  }
  if (tmp10) {
    const intl6 = tmp(1128).intl;
    text = intl6.string(tmp7(3014).u4QmWl);
    isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1128).intl;
    text = intl5.string(tmp7(3014)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!first) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp3[1]) {
        const intl4 = tmp(1128).intl;
        text = intl4.string(tmp7(3014).P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp3[1]) {
        const intl3 = tmp(1128).intl;
        text = intl3.string(tmp7(3014)["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp3[1]) {
        const intl2 = tmp(1128).intl;
        text = intl2.string(tmp7(3014).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp3[1]) {
          const intl7 = tmp(1128).intl;
          text = intl7.string(tmp7(3014)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};
