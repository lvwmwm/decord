// Module ID: 10129
// Function ID: 78405
// Name: InappropriateConversationBlockAndReportAlert
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 10129 (InappropriateConversationBlockAndReportAlert)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";

class InappropriateConversationBlockAndReportAlert {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    warningId = global.warningId;
    importDefault = warningId;
    warningType = global.warningType;
    dependencyMap = warningType;
    senderId = global.senderId;
    importAll = senderId;
    analyticsBlockContext = global.analyticsBlockContext;
    jsx = analyticsBlockContext;
    analyticsBlockAndReportContext = global.analyticsBlockAndReportContext;
    closure_5 = analyticsBlockAndReportContext;
    analyticsCancelContext = global.analyticsCancelContext;
    onDismiss = global.onDismiss;
    items = [, , , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    items[3] = warningType;
    callback = importAll.useCallback((cta) => {
      let obj = channelId(warningType[2]);
      obj = { channelId, warningId, senderId, warningType, cta };
      obj.trackCtaEvent(obj);
    }, items);
    closure_8 = callback;
    items1 = [, ];
    items1[0] = callback;
    items1[1] = analyticsCancelContext;
    items2 = [, , ];
    items2[0] = onDismiss;
    items2[1] = callback;
    items2[2] = analyticsBlockContext;
    callback1 = importAll.useCallback(() => {
      callback(analyticsCancelContext);
    }, items1);
    items3 = [, , ];
    items3[0] = onDismiss;
    items3[1] = callback;
    items3[2] = analyticsBlockAndReportContext;
    callback2 = importAll.useCallback(() => {
      if (null != onDismiss) {
        onDismiss();
      }
      callback(analyticsBlockContext);
    }, items2);
    callback3 = importAll.useCallback(() => {
      if (null != onDismiss) {
        onDismiss();
      }
      callback(analyticsBlockAndReportContext);
    }, items3);
    obj = { userId: senderId, channelId, onClose: global.onClose, onCancel: callback1, onBlock: callback2, onBlockAndReport: callback3, blockButtonVariant: "primary" };
    tmp5 = require("result");
    intl = require("result").intl;
    obj.description = intl.string(require("result").t.5NhTvu);
    return jsx(tmp5, obj);
  }
}
result = result.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx");

export default InappropriateConversationBlockAndReportAlert;
export { InappropriateConversationBlockAndReportAlert };
