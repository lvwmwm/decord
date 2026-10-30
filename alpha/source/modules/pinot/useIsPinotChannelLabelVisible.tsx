// Module ID: 11294
// Function ID: 11295
// Name: useIsPinotChannelLabelVisible
// Dependencies: [11295, 11296, 2]
// Exports: useIsPinotChannelLabelVisible

// Module 11294 (useIsPinotChannelLabelVisible)
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11295 */;
import PinotExperiment from "PinotExperiment" /* 11296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(stateFromStores, mobile_channel_header_label) {
  const obj = useIsChannelPinotPromotable;
  const pinotPromotableChannelId = obj.usePinotPromotableChannelId(stateFromStores, mobile_channel_header_label);
  let tmp3 = null;
  const useIsPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled;
  PinotExperiment;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    tmp3 = guild_id;
  }
  const tmp5 = null != pinotPromotableChannelId && useIsPinotMemberNoticeEnabled(tmp3, mobile_channel_header_label);
  return tmp5;
}
