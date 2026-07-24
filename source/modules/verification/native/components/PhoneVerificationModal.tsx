// Module ID: 9272
// Function ID: 72426
// Name: PhoneVerificationModal
// Dependencies: [5, 31, 653, 9273, 33, 5087, 9274, 9275, 4337, 480, 9298, 9269, 5517, 1212, 2]
// Exports: default

// Module 9272 (PhoneVerificationModal)
import HeaderBackImage from "HeaderBackImage";
import "result";
import { VerificationModalScenes } from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  let obj = {};
  const _require = onClose;
  obj = {};
  obj = { headerTitle: _require(5087).getHeaderNoTitle() };
  const obj4 = _require(5087);
  obj.headerLeft = _require(5087).getHeaderCloseButton(onClose.onClose);
  obj.render = function render(reason) {
    const onClose = reason;
    let closure_1 = arg1;
    const obj = {};
    const merged = Object.assign(reason);
    reason = undefined;
    if (null != reason) {
      reason = reason.reason;
    }
    if (null == reason) {
      reason = onClose.reason;
    }
    obj["reason"] = reason;
    obj["onComplete"] = function onComplete(phone) {
      return arr.push(outer2_4.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {
          let closure_0 = arg0;
          outer1_1.push(outer3_4.VERIFY_PASSWORD, {
            hideUnverifiedBanner: true,
            onSubmit(password) {
              let reason;
              if (null != outer2_0) {
                reason = outer2_0.reason;
              }
              if (null == reason) {
                reason = reason.reason;
              }
              return outer4_1(outer4_2[7]).addPhone(reason, password, reason);
            },
            onSuccess() {
              outer4_1(outer4_2[8]).popWithKey(outer4_5);
            }
          });
        }
      });
    };
    let fn = null;
    if (onClose.allowDeletePhone) {
      fn = () => {

      };
    }
    obj["onDeletePhone"] = fn;
    return outer1_6(outer1_1(outer1_2[6]), obj);
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  const obj1 = {};
  const obj5 = _require(5087);
  obj1.headerTitle = _require(5087).getHeaderNoTitle();
  obj1.impressionName = _require(480).ImpressionNames.USER_VERIFY_PHONE;
  obj1.render = function render(arg0, arg1) {
    let closure_0 = arg1;
    let obj = {};
    const merged = Object.assign(arg0);
    obj["disableKeyboardAvoidingView"] = true;
    obj["onVerified"] = function onVerified(arg0) {
      let arr = arg0;
      const obj = { hideUnverifiedBanner: true };
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_1 = outer2_3(true);
      obj.onSubmit = function() {
        return callback(...arguments);
      };
      obj.onSuccess = function onSuccess() {
        outer3_1(outer3_2[8]).popWithKey(outer3_5);
      };
      arr = arr.push(outer2_4.VERIFY_PASSWORD, obj);
    };
    return outer1_6(outer1_1(outer1_2[10]), obj);
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  const obj2 = {};
  const obj7 = _require(5087);
  obj2.headerTitle = _require(5087).getHeaderNoTitle();
  obj2.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_6(outer1_1(outer1_2[11]), {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj.screens = obj;
  obj.initialRouteName = VerificationModalScenes.ADD_PHONE;
  const intl = _require(1212).intl;
  obj.headerBackTitle = intl.string(_require(1212).t["13/7kX"]);
  return jsx(_require(5517).Navigator, { headerTitle: _require(5087).getHeaderNoTitle() });
};
