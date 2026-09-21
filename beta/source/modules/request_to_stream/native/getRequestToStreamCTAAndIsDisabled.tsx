// Module ID: 13544
// Function ID: 13545
// Name: getRequestToStreamCTAAndIsDisabled
// Dependencies: [32, 502, 12019, 11, 12007, 1115, 2968, 2]
// Exports: default

// Module 13544 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import _modDef2968 from "module_2968" /* 2968 */;
import isInviteActive from "isInviteActive" /* 12007 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 12019 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  const tmp3 = _slicedToArray(useCanFulfillStreamRequest.canFulfillStreamRequest(id, true), 2);
  id = AuthenticationStore.getId();
  const sum = SnowflakeUtilsDefault.extractTimestamp(id.id) + isInviteActive.EMBED_LIFETIME;
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
  const intl = util.intl;
  const stringResult = intl.string(_modDef2968["5+172e"]);
  if (tmp9) {
    const intl6 = tmp(1115).intl;
    let text = intl6.string(tmp6(2968).u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1115).intl;
    text = intl5.string(tmp6(2968)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (tmp(12019).StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = tmp(1115).intl;
        text = intl4.string(tmp6(2968).P0wwmM);
        isDisabled = true;
      } else if (tmp(12019).StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = tmp(1115).intl;
        text = intl3.string(tmp6(2968)["43zohO"]);
        isDisabled = true;
      } else if (tmp(12019).StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = tmp(1115).intl;
        text = intl2.string(tmp6(2968).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (tmp(12019).StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = tmp(1115).intl;
          text = intl7.string(tmp6(2968)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};
