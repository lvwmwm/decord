// Module ID: 11762
// Function ID: 91331
// Name: presentResendToast
// Dependencies: []
// Exports: default

// Module 11762 (presentResendToast)
function presentResendToast(content) {
  let obj = importDefault(dependencyMap[7]);
  obj = { key: "HUB_EMAIL_RESET", content, icon: importDefault(dependencyMap[8]) };
  obj.open(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles({ container: { alignItems: "center" }, title: { value: null, on: null }, description: { memo: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, accessibilityRole: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005495969098605 }, label: { memo: "Group 13", accessibilityRole: 2 }, error: {} });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  let onClose;
  email = email.email;
  const arg1 = email;
  ({ guildId: closure_1, onClose } = email);
  const dependencyMap = onClose;
  let callback;
  function _handleCodeEntered(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleCodeEntered(tmp);
    const _handleCodeEntered = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  const items = [onClose];
  const effect = React.useEffect(() => {
    callback(onClose[9]).initialize(() => {
      callback2(true);
      callback(callback2[10])();
    });
    return () => {
      callback(closure_2[9]).terminate();
    };
  }, items);
  let obj = importDefault(tmp3);
  // CreateGeneratorClosureLongIndex (0x67)
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  callback = tmp5[1];
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { source: importDefault(dependencyMap[17]) };
  const items1 = [callback2(closure_7, obj1), , , , , ];
  const obj2 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = arg1(dependencyMap[13]).intl;
  obj2.children = intl.string(arg1(dependencyMap[13]).t.SJ3Lxc);
  items1[1] = callback2(arg1(dependencyMap[18]).Text, obj2);
  const obj3 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj3.children = intl2.format(arg1(dependencyMap[13]).t.b+W0oq, { onClick: obj.throttle(_handleCodeEntered(dependencyMap[11]), 1000), email });
  items1[2] = callback2(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj3);
  const obj4 = { "Null": false, "Null": false, alignItems: false, style: tmp.label };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[13]).t.rpWT1s);
  items1[3] = callback2(arg1(dependencyMap[18]).Text, obj4);
  const obj5 = {
    blurAmount: null,
    blurEffectName: 0,
    onCodeEntered: function handleCodeEntered(arg0) {
      return _handleCodeEntered(...arguments);
    },
    codeType: arg1(dependencyMap[20]).CodeType.ALPHANUMERIC
  };
  items1[4] = callback2(arg1(dependencyMap[20]).CodeBlocks, obj5);
  let tmp9 = null != first;
  if (tmp9) {
    const obj6 = { cachedAt: 1, edpbxy: "center", style: tmp.error, children: first.getAnyErrorMessage() };
    tmp9 = callback2(arg1(dependencyMap[18]).Text, obj6);
  }
  items1[5] = tmp9;
  obj.children = items1;
  obj.children = closure_10(closure_6, obj);
  return callback2(arg1(dependencyMap[16]).HubEmailConnectionScreen, obj);
};
