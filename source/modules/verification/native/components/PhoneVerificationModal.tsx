// Module ID: 9229
// Function ID: 72176
// Name: PhoneVerificationModal
// Dependencies: []
// Exports: default

// Module 9229 (PhoneVerificationModal)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const VerificationModalScenes = arg1(dependencyMap[2]).VerificationModalScenes;
let closure_5 = arg1(dependencyMap[3]).PHONE_VERIFICATION_MODAL_KEY;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  let obj = {};
  const arg1 = onClose;
  obj = {};
  obj = { headerTitle: arg1(dependencyMap[5]).getHeaderNoTitle() };
  const obj4 = arg1(dependencyMap[5]);
  obj.headerLeft = arg1(dependencyMap[5]).getHeaderCloseButton(onClose.onClose);
  obj.render = function render(reason) {
    const obj = {};
    const merged = Object.assign(reason);
    reason = undefined;
    if (null != reason) {
      reason = reason.reason;
    }
    if (null == reason) {
      reason = reason.reason;
    }
    obj["reason"] = reason;
    obj["onComplete"] = function onComplete(phone) {
      return arg1.push(constants.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {

        }
      });
    };
    let fn = null;
    if (reason.allowDeletePhone) {
      fn = () => {
        arg1.push(constants.VERIFY_PASSWORD, {
          hideUnverifiedBanner: true,
          onSubmit(password) {
            let reason;
            if (null != closure_0) {
              reason = closure_0.reason;
            }
            if (null == reason) {
              reason = closure_0.reason;
            }
            return callback(closure_2[7]).removePhone(password, reason);
          },
          onSuccess() {
            let arr = callback(closure_2[8]);
            arr = arr.pop();
          }
        });
      };
    }
    obj["onDeletePhone"] = fn;
    return closure_6(arg1(closure_2[6]), obj);
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  const obj1 = {};
  const obj5 = arg1(dependencyMap[5]);
  obj1.headerTitle = arg1(dependencyMap[5]).getHeaderNoTitle();
  obj1.impressionName = arg1(dependencyMap[9]).ImpressionNames.USER_VERIFY_PHONE;
  obj1.render = function render(arg0, arg1) {
    arg0 = arg1;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["disableKeyboardAvoidingView"] = true;
    obj["onVerified"] = function onVerified(arg0) {
      const arg1 = arg0;
      const obj = { hideUnverifiedBanner: true };
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_1 = callback(true);
      obj.onSubmit = function() {
        return callback(...arguments);
      };
      obj.onSuccess = function onSuccess() {
        callback(closure_2[8]).popWithKey(closure_5);
      };
      arg1.push(constants.VERIFY_PASSWORD, obj);
    };
    return callback2(callback(closure_2[10]), obj);
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  const obj2 = {};
  const obj7 = arg1(dependencyMap[5]);
  obj2.headerTitle = arg1(dependencyMap[5]).getHeaderNoTitle();
  obj2.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(closure_2[11]), {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj.screens = obj;
  obj.initialRouteName = VerificationModalScenes.ADD_PHONE;
  const intl = arg1(dependencyMap[13]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[13]).t.13/7kX);
  return jsx(arg1(dependencyMap[12]).Navigator, obj);
};
