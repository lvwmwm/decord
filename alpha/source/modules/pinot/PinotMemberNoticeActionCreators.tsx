// Module ID: 11798
// Function ID: 11799
// Name: PinotMemberNoticeActionCreators
// Dependencies: [572, 2]
// Exports: ackPinotMemberNotice

// Module 11798 (PinotMemberNoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeActionCreators.tsx");

export function ackPinotMemberNotice(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PINOT_MEMBER_NOTICE_ACK", channelId };
  obj.dispatch(obj2);
}
