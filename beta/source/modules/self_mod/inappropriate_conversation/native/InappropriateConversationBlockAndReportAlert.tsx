// Module ID: 10932
// Function ID: 10933
// Name: InappropriateConversationBlockAndReportAlert
// Dependencies: [19, 21, 10912, 10933, 1115, 2]

// Module 10932 (InappropriateConversationBlockAndReportAlert)
import Fragment from "Fragment" /* 21 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class InappropriateConversationBlockAndReportAlert {
  constructor(channelId) {
    let intl;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const warningType = channelId.warningType;
    const senderId = channelId.senderId;
    const analyticsBlockContext = channelId.analyticsBlockContext;
    const analyticsBlockAndReportContext = channelId.analyticsBlockAndReportContext;
    const analyticsCancelContext = channelId.analyticsCancelContext;
    const onDismiss = channelId.onDismiss;
    const items = [channelId, warningId, senderId, warningType];
    const onClose = channelId.onClose;
    const callback = senderId.useCallback((cta) => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType, cta };
      obj.trackCtaEvent(obj2);
    }, items);
    const items1 = [callback, analyticsCancelContext];
    const items2 = [onDismiss, callback, analyticsBlockContext];
    const callback1 = senderId.useCallback(() => {
      callback(analyticsCancelContext);
    }, items1);
    const items3 = [onDismiss, callback, analyticsBlockAndReportContext];
    const callback2 = senderId.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      callback(analyticsBlockContext);
    }, items2);
    const callback3 = senderId.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      callback(analyticsBlockAndReportContext);
    }, items3);
    let obj = { userId: senderId, channelId, onClose, onCancel: callback1, onBlock: callback2, onBlockAndReport: callback3, blockButtonVariant: "primary", description: intl.string(channelId(warningType[4]).t["5NhTvu"]) };
    const tmp5 = warningId(warningType[3]);
    intl = channelId(warningType[4]).intl;
    return analyticsBlockContext(tmp5, obj);
  }
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx");

export default InappropriateConversationBlockAndReportAlert;
export { InappropriateConversationBlockAndReportAlert };
