// Module ID: 16107
// Function ID: 124876
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 7, 6, 11453, 653, 3, 664, 4337, 16108, 1934, 3982, 1207, 25, 11456, 1198, 3987, 3981, 3831, 1212, 16109, 16110, 2]

// Module 16107 (_isNativeReflectConstruct)
import validateMultiAccountTokens from "validateMultiAccountTokens";
import MobileHomeDrawerExperiment from "MobileHomeDrawerExperiment";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "timestamp";
import closure_7 from "ME";
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";
import ME from "ME";
import importDefaultResult1 from "_defineProperties";
import tmp8 from "_isNativeReflectConstruct";

let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ ComponentActions: closure_9, Routes: closure_10 } = ME);
importDefaultResult1 = new importDefaultResult1("MultiAccountManagerNative");
let closure_12 = 15 * require("set").Millis.SECOND;
let c13 = null;
class MultiAccountModalManagerImpl {
  constructor() {
    self = this;
    tmp = c7(this, MultiAccountModalManagerImpl);
    this.cancelled = false;
    this.push = () => {
      outer1_1(outer1_2[9]).pushLazy(self(outer1_2[11])(outer1_2[10], outer1_2.paths), {}, "switch-accounts-spinner-modal");
      if (self.cancelled) {
        outer1_1(outer1_2[9]).popWithKey("switch-accounts-spinner-modal");
        const obj2 = outer1_1(outer1_2[9]);
      }
    };
    this.enqueue = () => {
      self.cancelled = false;
      const rootNavigationRef = self(outer1_2[12]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          self.push();
        }
      }
      const ComponentDispatch = self(outer1_2[13]).ComponentDispatch;
      ComponentDispatch.subscribeOnce(outer1_9.NAVIGATOR_READY, () => {
        if (!outer1_0.cancelled) {
          outer1_0.push();
        }
      });
    };
    this.pop = () => {
      self.cancelled = true;
      outer1_1(outer1_2[9]).popWithKey("switch-accounts-spinner-modal");
    };
    return;
  }
}
const importDefaultResultResult = importDefaultResult(MultiAccountModalManagerImpl);
let closure_14 = new importDefaultResult(MultiAccountModalManagerImpl)();
tmp8 = new tmp8();
const tmp2Result = new importDefaultResult(MultiAccountModalManagerImpl)();
let result = require("_inherits").fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default tmp8;
