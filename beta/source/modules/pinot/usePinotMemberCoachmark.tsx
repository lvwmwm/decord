// Module ID: 11861
// Function ID: 11862
// Name: usePinotMemberCoachmark
// Dependencies: [32, 19, 11862, 11857, 9080, 4746, 11865, 4945, 2]
// Exports: useIsPinotMemberCoachmarkPending, usePinotMemberCoachmark

// Module 11861 (usePinotMemberCoachmark)
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import useIsPinotMemberCoachmarkEligible from "useIsPinotMemberCoachmarkEligible" /* 11862 */;
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11865 */;
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
  let obj = pinotPromotableChannelId(11862);
  const isPinotMemberCoachmarkEligible = obj.useIsPinotMemberCoachmarkEligible(channel, mobile_member_coachmark);
  const obj2 = pinotPromotableChannelId(11857);
  pinotPromotableChannelId = obj2.usePinotPromotableChannelId(channel, mobile_member_coachmark);
  const useSelectedDismissibleContent = pinotPromotableChannelId(9080).useSelectedDismissibleContent;
  pinotPromotableChannelId(9080);
  if (isPinotMemberCoachmarkEligible) {
    const items = [tmp(4746).DismissibleContent.PINOT_MEMBER_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp8;
  const items2 = [tmp6[1], pinotPromotableChannelId];
  const first = tmp6[0];
  const obj3 = { visible: first === pinotPromotableChannelId(4746).DismissibleContent.PINOT_MEMBER_COACHMARK, markAsDismissed: callback };
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
