// Module ID: 14644
// Function ID: 110431
// Name: VerifyPhone
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14644 (VerifyPhone)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import { doesRegistrationHaveIdentityType as closure_6 } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { Links } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ authStateToRegisterTransitionStep: closure_7, RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let description;
  let onBail;
  let sourceState;
  let title;
  let tmp3;
  let tmp5;
  phone = phone.phone;
  const arg1 = phone;
  const onPhoneTokenReceived = phone.onPhoneTokenReceived;
  const importDefault = onPhoneTokenReceived;
  ({ onClose: closure_2, onBail } = phone);
  let closure_3 = onBail;
  ({ title, description, sourceState } = phone);
  const tmp = callback(React.useState(false), 2);
  let callback = tmp[1];
  [tmp3, closure_5] = callback(React.useState(null), 2);
  const tmp2 = callback(React.useState(null), 2);
  [tmp5, closure_6] = callback(React.useState(false), 2);
  const callback2 = React.useRef(false);
  const context = React.useContext(arg1(dependencyMap[7]).TrackRegistrationContext);
  const tmp4 = callback(React.useState(false), 2);
  importDefault(dependencyMap[8])(callback2(sourceState));
  const items = [context];
  const effect = React.useEffect(() => {
    if (callback()) {
      const obj = { step: context.PHONE_VERIFICATION, actionType: callback.VIEWED };
      context(obj);
    }
  }, items);
  importDefault(dependencyMap[9])(() => () => {
    let tmp;
    if (null != callback) {
      tmp = callback(ref.current);
    }
    return tmp;
  });
  const items1 = [phone, onPhoneTokenReceived, context];
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onBail(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [callback];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onBail(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  importDefault(dependencyMap[12])(callback1);
  const items3 = [onBail];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (null != onBail) {
      const obj = { onBail };
      tmp = callback2(onPhoneTokenReceived(closure_2[13]), obj);
    }
    return tmp;
  }, items3);
  const obj = { title, description, error: tmp3, onCodeEntered: callback };
  const tmp7 = importDefault(dependencyMap[8]);
  obj.codeType = arg1(dependencyMap[14]).CodeType.NUMERIC;
  obj.footer = memo;
  obj.disabled = tmp5;
  obj.loading = tmp[0];
  obj.disableKeyboardAvoidingView = true;
  return jsx(importDefault(dependencyMap[14]), obj);
};
