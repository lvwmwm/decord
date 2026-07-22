// Module ID: 13580
// Function ID: 102941
// Name: TwoFASetupSuccess
// Dependencies: []
// Exports: default

// Module 13580 (TwoFASetupSuccess)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: {}, flex: { flex: 1 }, image: { "Null": 76, "Null": 76 }, success: { marginTop: 33 } };
obj = { "Bool(false)": "external", "Bool(false)": "<string:4165009664>", "Bool(false)": "<string:285213921>", "Bool(false)": "<string:553217>", color: importDefault(dependencyMap[6]).colors.TEXT_STRONG };
obj.successBody = obj;
const obj1 = { borderRadius: null, marginEnd: "357b6ff4f5f31060d463e9e4858af437", paddingHorizontal: "family_center_chat_check_icon", backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_STRONG };
obj.divider = obj1;
obj.buttonWrapper = { 1927631340: true, 105999969: "/assets/design/components/Icon/native/redesign/generated/images", 995517444: 24 };
const obj2 = { "Bool(false)": 141308.4, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005149904728787514, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001452617606585215, "Bool(false)": 160, color: importDefault(dependencyMap[6]).colors.TEXT_STRONG };
obj.ctaDescription = obj2;
const obj3 = { "Bool(false)": 160, "Bool(false)": null, "Bool(false)": "\u{1F450}\u{1F3FE}", "Bool(false)": true, color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
obj.errorText = obj3;
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  let tmp5;
  const tmp = callback4();
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  [tmp5, closure_1] = callback2(React.useState(""), 2);
  callback = React.useCallback(() => {
    function _onRegisterSuccess() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _onRegisterSuccess = obj;
      return obj(...arguments);
    }
    callback("");
    let obj = callback(closure_2[10]);
    obj = {
      setRegistering: _onRegisterSuccess,
      setError: callback,
      onRegisterSuccess(arg0) {
        return _onRegisterSuccess(...arguments);
      }
    };
    obj.registerPasskey(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.flex };
  const items = [callback3(closure_6, obj), , , , , , , ];
  const tmp4 = callback2(React.useState(""), 2);
  items[1] = callback3(closure_7, { source: callback(dependencyMap[12]), style: tmp.image });
  const obj2 = { style: tmp.success };
  const intl = callback(dependencyMap[8]).intl;
  obj2.children = intl.string(callback(dependencyMap[8]).t.Awk3Gw);
  items[2] = callback3(callback(dependencyMap[13]).Text, obj2);
  const obj3 = { style: tmp.successBody };
  const intl2 = callback(dependencyMap[8]).intl;
  obj3.children = intl2.string(callback(dependencyMap[8]).t.0d1bXM);
  items[3] = callback3(callback(dependencyMap[14]).LegacyText, obj3);
  items[4] = callback3(closure_6, { style: tmp.divider });
  const obj5 = { style: tmp.ctaDescription };
  const intl3 = callback(dependencyMap[8]).intl;
  obj5.children = intl3.string(callback(dependencyMap[8]).t.okgGTu);
  items[5] = callback3(callback(dependencyMap[14]).LegacyText, obj5);
  const obj6 = { style: tmp.buttonWrapper };
  const obj7 = {};
  const intl4 = callback(dependencyMap[8]).intl;
  const string = intl4.string;
  const t = callback(dependencyMap[8]).t;
  if (first) {
    let stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  obj7.text = stringResult;
  obj7.onPress = callback;
  obj7.disabled = first;
  obj7.loading = first;
  obj7.grow = true;
  const items1 = [callback3(callback(dependencyMap[15]).Button, obj7), ];
  let tmp11 = "" !== tmp5;
  if (tmp11) {
    const obj8 = { style: tmp.errorText, children: tmp5 };
    tmp11 = callback3(callback(dependencyMap[14]).LegacyText, obj8);
  }
  items1[1] = tmp11;
  obj6.children = items1;
  items[6] = closure_9(closure_6, obj6);
  items[7] = callback3(closure_6, { style: tmp.flex });
  obj.children = items;
  obj.children = closure_9(closure_6, obj);
  return callback3(callback(dependencyMap[11]).TwoFASetupModalScreen, obj);
};
