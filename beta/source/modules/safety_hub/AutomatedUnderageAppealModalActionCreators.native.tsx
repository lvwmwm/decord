// Module ID: 11237
// Function ID: 11238
// Name: AutomatedUnderageAppealModalActionCreators
// Dependencies: [5, 7872, 7864, 21, 11235, 585, 4801, 11238, 1987, 7871, 7884, 7865, 7890, 7863, 5040, 7897, 8037, 2]

// Module 11237 (AutomatedUnderageAppealModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7864 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7872 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, dependencyMap, importDefault, paths;

let closure_4;
let hasOwnProperty;
let tmp;
const ModalActionCreatorsDefault = tmp(5040);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: hasOwnProperty } = SafetyHubConstants);
let closure_6 = AgeVerificationConstants.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
const jsx = Fragment.jsx;
let obj = {
  open(classificationId, onClose) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = { classificationId, onClose };
    obj2.openLazy(asyncRequire(11238, dependencyMap.paths), React3, obj3);
  },
  openV2(classificationId, onClose) {
    _require = classificationId;
    importDefault = onClose;
    const tmp2 = dependencyMap;
    let tmp = importDefault;
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    let tmp4 = _require;
    let obj2 = require("SafetyHubUtils");
    if (obj2.isCurrentUserSuspended()) {
      const tmp4Result = tmp4(7884);
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(7865).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        let tmp6 = globalThis;
        const _Math = Math;
        const _Date = Date;
        let num = 1000;
        dependencyMap = Math.floor(Date.now() / 1000);
        let tmp7 = _asyncToGenerator;
        let tmp8 = (async (arg0, value) => {
          let c2;
          let closure_1;
          let v3;
          if (c3 === 2) {
            c3 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              const tmp3 = paths;
              if (0 === paths) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onClose = tmp3;
                  classificationId = tmp3;
                  const obj5 = classificationId(paths[12]);
                  paths = 1;
                  c3 = 1;
                  const obj6 = { value: obj5.shouldShowManualReviewFallback(classificationId(paths[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                if (value) {
                  let obj3 = onClose(paths[13]);
                  const result = obj3.showManualReviewFallbackModal(classificationId(paths[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS, closure_129_1);
                } else {
                  obj = onClose(paths[14]);
                  const obj8 = { onClose: closure_129_1 };
                  obj.pushLazy(c3(async () => {
                    let c1;
                    let tmp;
                    await tmp(c2[8])(c2[15], c2.paths);
                    tmp = arg1.default;
                    return () => {
                      obj = {
                        entryPoint: closure_3_0(paths[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
                        onClose() {
                          let tmp;
                          if (closure_1_1 != null) {
                            tmp = closure_1_1();
                          }
                          return tmp;
                        },
                        onComplete() {
                          closure_0 = closure_1_2;
                          obj = closure_2_0(paths[4]);
                          obj.resetAgeCheckStatus();
                          const obj2 = closure_2_1(paths[5]);
                          obj2.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
                          const obj3 = closure_2_1(paths[5]);
                          obj3.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
                          const timerId = setTimeout(() => {
                            obj = closure_2_0(closure_2_2[4]);
                            return obj.checkSuspendedUserAgeVerificationV2(closure_0);
                          }, closure_2_5);
                        }
                      };
                      return closure_3_7(closure_1_0, obj);
                    };
                  }), obj8, closure_1_6);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp23) {
              c3 = 3;
              throw tmp23;
            }
          }
        })();
      }
    }
    let obj3 = { onClose };
    const tmpResult = ModalActionCreatorsDefault;
    tmpResult.pushLazy(_asyncToGenerator(async () => {
      let c1;
      let closure_0;
      let tmp;
      await tmp(c2[8])(c2[16], c2.paths);
      tmp = arg1.default;
      return () => <closure_1_0 classificationId={classificationId} entryPoint={classificationId(closure_2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS} isRetry={false} useEmbeddedMethods onComplete={function onComplete() {
        closure_2_8.success();
        obj = closure_2_8;
        const tmp = closure_1_1;
        if (closure_1_1 != null) {
          tmp();
        }
        const result = obj.start_verification_check();
      }} />;
    }), obj3, closure_6);
  },
  close() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => {
      obj = require("SafetyHubActionCreators");
      return obj.checkSuspendedUserAgeVerification();
    }, hasOwnProperty);
  }
};
let result = size.fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;
