// Module ID: 10398
// Function ID: 10399
// Name: InappropriateConversationBlockAndReportAlert
// Dependencies: [19, 21, 558, 576, 10374, 1126, 10399, 2]

// Module 10398 (InappropriateConversationBlockAndReportAlert)
import Fragment from "Fragment" /* 21 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10374 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function InappropriateConversationBlockAndReportAlert(channelId) {
  let onClose;
  let onDismiss;
  let warningType;
  const tmp = channelId;
  let obj = channelId(warningType[3]);
  const cResult = obj.c(24);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  warningType = channelId.warningType;
  const senderId = channelId.senderId;
  const analyticsBlockContext = channelId.analyticsBlockContext;
  const analyticsBlockAndReportContext = channelId.analyticsBlockAndReportContext;
  const analyticsCancelContext = channelId.analyticsCancelContext;
  ({ onClose, onDismiss } = channelId);
  if (cResult[0] === channelId) {
    if (cResult[1] === senderId) {
      if (cResult[2] === warningId) {
        let tmp4;
        if (cResult[3] === warningType) {
          tmp4 = cResult[4];
        }
        let closure_8 = tmp4;
        if (cResult[5] === analyticsCancelContext) {
          let tmp5;
          if (cResult[6] === tmp4) {
            tmp5 = cResult[7];
          }
          if (cResult[8] === analyticsBlockContext) {
            if (cResult[9] === onDismiss) {
              let tmp6;
              if (cResult[10] === tmp4) {
                tmp6 = cResult[11];
              }
              if (cResult[12] === analyticsBlockAndReportContext) {
                if (cResult[13] === onDismiss) {
                  let tmp8;
                  let tmp10;
                  if (cResult[14] === tmp4) {
                    tmp8 = cResult[15];
                  }
                  class R {
                    constructor() {
                      if (onDismiss != null) {
                        tmp();
                      }
                      closure_8(analyticsBlockAndReportContext);
                    }
                  }
                  class B {
                    constructor() {
                      closure_8(analyticsCancelContext);
                    }
                  }
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const string = tmp(tmp2[5]).intl.string;
                    class R {
                      constructor() {
                        if (onDismiss != null) {
                          tmp();
                        }
                        closure_8(analyticsBlockAndReportContext);
                      }
                    }
                    class B {
                      constructor() {
                        closure_8(analyticsCancelContext);
                      }
                    }
                    cResult[16] = tmp11;
                    tmp10 = tmp11;
                  } else {
                    tmp10 = cResult[16];
                  }
                  if (cResult[17] === channelId) {
                    if (cResult[18] === tmp5) {
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === tmp6) {
                          if (cResult[21] === onClose) {
                            let tmp12;
                            if (cResult[22] === senderId) {
                              tmp12 = cResult[23];
                            }
                            return tmp12;
                          }
                        }
                      }
                    }
                  }
                  let obj2 = { userId: senderId, channelId, onClose, onCancel: tmp5, onBlock: tmp6, onBlockAndReport: tmp8, blockButtonVariant: "primary", description: tmp10 };
                  const tmp15 = analyticsBlockContext(warningId(warningType[6]), obj2);
                  cResult[17] = channelId;
                  cResult[18] = tmp5;
                  cResult[19] = tmp8;
                  cResult[20] = tmp6;
                  cResult[21] = onClose;
                  cResult[22] = senderId;
                  cResult[23] = tmp15;
                  tmp12 = tmp15;
                }
              }
              class R {
                constructor() {
                  if (onDismiss != null) {
                    tmp();
                  }
                  closure_8(analyticsBlockAndReportContext);
                }
              }
              class B {
                constructor() {
                  closure_8(analyticsCancelContext);
                }
              }
              cResult[12] = analyticsBlockAndReportContext;
              cResult[13] = onDismiss;
              cResult[14] = tmp4;
              cResult[15] = R;
              tmp8 = R;
            }
          }
          class B {
            constructor() {
              closure_8(analyticsCancelContext);
            }
          }
          cResult[8] = analyticsBlockContext;
          cResult[9] = onDismiss;
          cResult[10] = tmp4;
          cResult[11] = tmp7;
          tmp6 = tmp7;
        }
        class B {
          constructor() {
            closure_8(analyticsCancelContext);
          }
        }
        cResult[5] = analyticsCancelContext;
        cResult[6] = tmp4;
        cResult[7] = B;
        tmp5 = B;
      }
    }
  }
  const fn = function o(cta) {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType, cta };
    obj.trackCtaEvent(obj2);
  };
  cResult[0] = channelId;
  cResult[1] = senderId;
  cResult[2] = warningId;
  cResult[3] = warningType;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function InappropriateConversationBlockAndReportAlert(channelId) {
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
  let obj = { userId: senderId, channelId, onClose, onCancel: callback1, onBlock: callback2, onBlockAndReport: callback3, blockButtonVariant: "primary", description: intl.string(channelId(warningType[5]).t["5NhTvu"]) };
  const tmp5 = warningId(warningType[6]);
  intl = channelId(warningType[5]).intl;
  return analyticsBlockContext(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx");

export default tmp2;
export const InappropriateConversationBlockAndReportAlert = tmp2;
