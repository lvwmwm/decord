// Module ID: 11795
// Function ID: 11796
// Name: useIsPinotMemberCoachmarkEligible
// Dependencies: [11790, 7653, 11796, 11793, 2]
// Exports: useIsPinotMemberCoachmarkEligible

// Module 11795 (useIsPinotMemberCoachmarkEligible)
import PinotExperiment from "PinotExperiment" /* 7653 */;
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11790 */;
import useCanMessageInPinotChannel from "useCanMessageInPinotChannel" /* 11793 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 11796 */;
import size from "module_2" /* 2 */;

let c2 = true;
const result = size.fileFinishedImporting("modules/pinot/useIsPinotMemberCoachmarkEligible.tsx");

export const PINOT_MEMBER_COACHMARK_SHOWS_FOR_OPTED_OUT = true;
export function useIsPinotMemberCoachmarkEligible(guild_id, mobile_member_coachmark) {
  let locked;
  let optedOut;
  const obj = useIsChannelPinotPromotable;
  const pinotPromotableChannelId = obj.usePinotPromotableChannelId(guild_id, mobile_member_coachmark);
  let tmp5 = null;
  const useIsPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled;
  PinotExperiment;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp5 = guild_id;
  }
  const isPinotMemberNoticeEnabled = useIsPinotMemberNoticeEnabled(tmp5, mobile_member_coachmark);
  const tmpResult = PinotExperiment;
  const isPinotMemberEnabledWithoutExposure = tmpResult.useIsPinotMemberEnabledWithoutExposure(mobile_member_coachmark);
  const tmpResult3 = PinotMemberSettingState;
  const pinotMemberSettingState = tmpResult3.usePinotMemberSettingState();
  ({ optedOut, locked } = pinotMemberSettingState);
  const tmpResult4 = useCanMessageInPinotChannel;
  const tmp10 = null != pinotPromotableChannelId && tmpResult4.useCanMessageInPinotChannel(guild_id) && isPinotMemberNoticeEnabled && isPinotMemberEnabledWithoutExposure && !locked && c2;
  return tmp10;
}
