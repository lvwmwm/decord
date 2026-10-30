// Module ID: 11300
// Function ID: 11301
// Name: usePinotMemberNotice
// Dependencies: [19, 11301, 11295, 11296, 504, 11302, 2]
// Exports: usePinotMemberNotice

// Module 11300 (usePinotMemberNotice)
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11302 */;
import react from "react" /* 19 */;
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore" /* 11301 */;
import size from "module_2" /* 2 */;

let closure_4 = { visible: false };
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberNotice.tsx");

export function usePinotMemberNotice(channel, mobile_channel_header) {
  let dismiss;
  let pinotPromotableChannelId;
  let stateFromStores;
  let tmp = pinotPromotableChannelId;
  let obj = pinotPromotableChannelId(stateFromStores[2]);
  pinotPromotableChannelId = obj.usePinotPromotableChannelId(channel, mobile_channel_header);
  let tmp5 = null;
  const useIsPinotMemberNoticeEnabled = pinotPromotableChannelId(stateFromStores[3]).useIsPinotMemberNoticeEnabled;
  pinotPromotableChannelId(stateFromStores[3]);
  const tmp2 = stateFromStores;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp5 = guild_id;
  }
  let tmp7 = null;
  if (useIsPinotMemberNoticeEnabled(tmp5, mobile_channel_header)) {
    tmp7 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp7;
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp7];
  const tmpResult = tmp(tmp2[4]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    const isAckedResult = null != pinotPromotableChannelId && PinotMemberNoticeAckStore.isAcked(tmp);
    return isAckedResult;
  }, items1);
  const items2 = [tmp7];
  dismiss = dismiss.useCallback(() => {
    if (null != pinotPromotableChannelId) {
      const obj = PinotMemberNoticeActionCreators;
      obj.ackPinotMemberNotice(tmp);
    }
  }, items2);
  const items3 = [tmp7, stateFromStores, dismiss];
  return dismiss.useMemo(() => {
    if (null != pinotPromotableChannelId) {
      let obj;
      const tmp = stateFromStores;
      if (!tmp) {
        obj = { visible: true, dismiss };
      }
      return obj;
    }
    obj = closure_4;
  }, items3);
}
