// Module ID: 11799
// Function ID: 91618
// Name: presentResendToast
// Dependencies: [57, 5, 31, 27, 1838, 33, 4130, 3831, 11800, 11801, 10913, 22, 11793, 1212, 4029, 5737, 11788, 11802, 4126, 9300, 2]
// Exports: default

// Module 11799 (presentResendToast)
import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function presentResendToast(content) {
  let obj = importDefault(3831);
  obj = { key: "HUB_EMAIL_RESET", content, icon: importDefault(11800) };
  obj.open(obj);
}
({ View: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const result = require("result").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  let importDefault;
  let onClose;
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  let callback;
  function _handleCodeEntered(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleCodeEntered(tmp);
    return obj(...arguments);
  }
  const tmp = callback3();
  const items = [onClose];
  const effect = React.useEffect(() => {
    outer1_1(onClose[9]).initialize(() => {
      outer1_2(true);
      outer2_1(onClose[10])();
    });
    return () => {
      outer2_1(onClose[9]).terminate();
    };
  }, items);
  let obj = importDefault(tmp3);
  // CreateGeneratorClosureLongIndex (0x67)
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  callback = tmp5[1];
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { source: importDefault(onClose[17]) };
  const items1 = [callback2(closure_7, obj1), , , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = email(onClose[13]).intl;
  obj2.children = intl.string(email(onClose[13]).t.SJ3Lxc);
  items1[1] = callback2(email(onClose[18]).Text, obj2);
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = email(onClose[13]).intl;
  obj3.children = intl2.format(email(onClose[13]).t["b+W0oq"], { onClick: obj.throttle(_handleCodeEntered(onClose[11]), 1000), email });
  items1[2] = callback2(email(onClose[18]).Text, obj3);
  const obj4 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted" };
  const intl3 = email(onClose[13]).intl;
  obj4.children = intl3.string(email(onClose[13]).t.rpWT1s);
  items1[3] = callback2(email(onClose[18]).Text, obj4);
  const obj5 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      return _handleCodeEntered(...arguments);
    },
    codeType: email(onClose[19]).CodeType.ALPHANUMERIC
  };
  items1[4] = callback2(email(onClose[19]).CodeBlocks, obj5);
  let tmp9 = null != first;
  if (tmp9) {
    const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: first.getAnyErrorMessage() };
    tmp9 = callback2(email(onClose[18]).Text, obj6);
  }
  items1[5] = tmp9;
  obj.children = items1;
  obj.children = closure_10(closure_6, obj);
  return callback2(email(onClose[16]).HubEmailConnectionScreen, obj);
};
