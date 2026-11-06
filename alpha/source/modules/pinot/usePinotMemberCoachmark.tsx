// Module ID: 11483
// Function ID: 11484
// Name: usePinotMemberCoachmark
// Dependencies: [32, 19, 11484, 11479, 7664, 5003, 11487, 5200, 2]
// Exports: useIsPinotMemberCoachmarkPending, usePinotMemberCoachmark

// Module 11483 (usePinotMemberCoachmark)
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5200 */;
import useIsPinotMemberCoachmarkEligible from "useIsPinotMemberCoachmarkEligible" /* 11484 */;
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11487 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const result = size.fileFinishedImporting("modules/pinot/usePinotMemberCoachmark.tsx");

export function usePinotMemberCoachmark(channel, mobile_member_coachmark) {
  let callback;
  let closure_1;
  let items1;
  let pinotPromotableChannelId;
  const tmp2 = dependencyMap;
  let obj = pinotPromotableChannelId(11484);
  const isPinotMemberCoachmarkEligible = obj.useIsPinotMemberCoachmarkEligible(channel, mobile_member_coachmark);
  const obj2 = pinotPromotableChannelId(11479);
  pinotPromotableChannelId = obj2.usePinotPromotableChannelId(channel, mobile_member_coachmark);
  const useSelectedDismissibleContent = pinotPromotableChannelId(7664).useSelectedDismissibleContent;
  pinotPromotableChannelId(7664);
  if (isPinotMemberCoachmarkEligible) {
    const items = [tmp(5003).DismissibleContent.PINOT_MEMBER_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp8;
  const items2 = [tmp6[1], pinotPromotableChannelId];
  const first = tmp6[0];
  const obj3 = { visible: first === pinotPromotableChannelId(5003).DismissibleContent.PINOT_MEMBER_COACHMARK, markAsDismissed: callback };
  callback = react.useCallback((arg0) => {
    closure_1(arg0);
    if (null != pinotPromotableChannelId) {
      const obj = PinotMemberNoticeActionCreators;
      obj.ackPinotMemberNotice(tmp2);
    }
  }, items2);
  return obj3;
}
export function useIsPinotMemberCoachmarkPending(guild_id, mobile_member_coachmark) {
  const obj = useIsPinotMemberCoachmarkEligible;
  let isPinotMemberCoachmarkEligible = obj.useIsPinotMemberCoachmarkEligible(guild_id, mobile_member_coachmark);
  const useIsDismissibleContentDismissed_UNSAFE = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE;
  DismissibleContentUnsafeUtils;
  if (isPinotMemberCoachmarkEligible) {
    isPinotMemberCoachmarkEligible = !useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PINOT_MEMBER_COACHMARK);
  }
  return isPinotMemberCoachmarkEligible;
}
