// Module ID: 11494
// Function ID: 11495
// Name: usePinotMemberNotice
// Dependencies: [19, 11495, 11493, 9168, 11496, 11497, 504, 11501, 2]
// Exports: usePinotMemberNotice

// Module 11494 (usePinotMemberNotice)
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11501 */;
import react from "react" /* 19 */;
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore" /* 11495 */;
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
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp5 = guild_id;
  }
  const isPinotMemberNoticeEnabled = useIsPinotMemberNoticeEnabled(tmp5, mobile_channel_header);
  const tmpResult = tmp(stateFromStores[4]);
  const canMessageInPinotChannel = tmpResult.useCanMessageInPinotChannel(channel);
  tmp(stateFromStores[5]);
  let tmp11 = null;
  if (isPinotMemberNoticeEnabled) {
    tmp11 = null;
    if (canMessageInPinotChannel) {
      tmp11 = null;
      if (!tmp10) {
        tmp11 = pinotPromotableChannelId;
      }
    }
  }
  pinotPromotableChannelId = tmp11;
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp11];
  const tmpResult4 = tmp(stateFromStores[6]);
  stateFromStores = tmpResult4.useStateFromStores(items, () => {
    const isHiddenResult = null != pinotPromotableChannelId && PinotMemberNoticeAckStore.isHidden(tmp);
    return isHiddenResult;
  }, items1);
  const items2 = [tmp11];
  dismiss = dismiss.useCallback(() => {
    if (null != pinotPromotableChannelId) {
      const obj = PinotMemberNoticeActionCreators;
      obj.ackPinotMemberNotice(tmp);
    }
  }, items2);
  const items3 = [tmp11, stateFromStores, dismiss];
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
