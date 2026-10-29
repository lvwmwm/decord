// Module ID: 11076
// Function ID: 11077
// Name: PinotMemberNoticeActionCreators
// Dependencies: [584, 2]
// Exports: ackPinotMemberNotice

// Module 11076 (PinotMemberNoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeActionCreators.tsx");

export function ackPinotMemberNotice(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PINOT_MEMBER_NOTICE_ACK", channelId };
  obj.dispatch(obj2);
}
