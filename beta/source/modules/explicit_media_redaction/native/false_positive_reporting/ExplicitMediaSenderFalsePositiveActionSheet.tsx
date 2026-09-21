// Module ID: 9508
// Function ID: 9509
// Name: ExplicitMediaSenderFalsePositiveActionSheet
// Dependencies: [19, 7537, 7848, 21, 558, 568, 565, 9509, 9507, 7851, 9512, 4725, 7847, 2]

// Module 9508 (ExplicitMediaSenderFalsePositiveActionSheet)
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators" /* 7851 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 9507 */;
import ExplicitMediaFalsePositiveActionSheet from "ExplicitMediaFalsePositiveActionSheet" /* 9509 */;
import noop from "module_19" /* 19 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7537 */;

require = fn;
let closure_5 = fn(7848).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(28);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExplicitMediaStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== messageId) {
    const fn = function l() {
      return ExplicitMediaStore.getFpMessageInfo(messageId);
    };
    cResult[1] = messageId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = channelId(568);
  const stateFromStores = channelId(565).useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores.attachments) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function p(id) {
        return id.id;
      };
      cResult[5] = fn2;
      let tmp9 = fn2;
    } else {
      tmp9 = cResult[5];
    }
    const attachments = stateFromStores.attachments;
    const mapped = attachments.map(tmp9);
    cResult[3] = stateFromStores.attachments;
    cResult[4] = mapped;
  } else {
    dependencyMap = tmp8;
    if (cResult[6] !== stateFromStores.attachments) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return channelId.filename;
          }
        }
        cResult[8] = F;
        const tmp13 = F;
      } else {
        class F {
          constructor(arg0) {
            return channelId.filename;
          }
        }
      }
      const attachments1 = stateFromStores.attachments;
      const mapped1 = attachments1.map(tmp13);
      cResult[6] = stateFromStores.attachments;
      cResult[7] = mapped1;
    } else {
      class F {
        constructor(arg0) {
          return channelId.filename;
        }
      }
      noop = tmp12;
      if (cResult[9] === channelId) {
        class F {
          constructor(arg0) {
            return channelId.filename;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              return channelId.filename;
            }
          }
          cResult[12] = tmp18;
        } else {
          class F {
            constructor(arg0) {
              return channelId.filename;
            }
          }
        }
        if (cResult[13] === tmp12) {
          class F {
            constructor(arg0) {
              return channelId.filename;
            }
          }
        }
        class A {
          constructor() {
            obj = closure_0(closure_2[9]);
            return obj.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
          }
        }
        cResult[13] = tmp12;
        cResult[14] = tmp8;
        cResult[15] = channelId;
        cResult[16] = messageId;
        cResult[17] = A;
      }
      const fn3 = function u() {
        ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
        const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
      };
      cResult[10] = messageId;
      cResult[11] = fn3;
    }
  }
}) : ((channelId) => {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let reportFalsePositive;
  const items = [reportFalsePositive];
  const stateFromStores = channelId(565).useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  noop = attachments1.map((filename) => filename.filename);
  let obj = channelId(565);
  const explicitMediaActions = channelId(9512).useExplicitMediaActions({
    onSuccess() {
      ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
      const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[7]).handleError();
    },
    report() {
      return ExplicitMediaRedactionActionCreators.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
    }
  });
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4725).hideActionSheet();
    const obj4 = messageId(4725);
  }
  const items1 = [reportFalsePositive];
  const callback = noop.useCallback(() => {
    reportFalsePositive();
  }, items1);
  const obj2 = channelId(9512);
  const obj3 = {
    onSuccess() {
      ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
      const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[7]).handleError();
    },
    report() {
      return ExplicitMediaRedactionActionCreators.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
    }
  };
  return jsx(channelId(9509).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: channelId(7847).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
});
