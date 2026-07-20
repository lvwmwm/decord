// Module ID: 7607
// Function ID: 60981
// Name: TextLineElement
// Dependencies: []
// Exports: default

// Module 7607 (TextLineElement)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, Linking: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: { "Bool(false)": "<string:16777479>", "Bool(false)": "<string:36295491>" }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" } };
obj = { TN: true, wrapperPageY: true, hasMembers: true, text_color: true, month: true, day: true, hour: true, minute: true, IN_PANEL: true, isCurrentGuildMemberByTimestamp: true, totalTokens: true, borderRadius: importDefault(dependencyMap[6]).radii.xs, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.smsNumberContainer = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.smsNumberContainerSuccess = { borderColor: importDefault(dependencyMap[6]).colors.STATUS_POSITIVE_BACKGROUND };
obj.startButtonContainer = { MN: "Cheerful Choco preens against window", MZ: "Affection", MR: "781323769960202280" };
let closure_11 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[6]).colors.STATUS_POSITIVE_BACKGROUND };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default function TextLineElement(element) {
  let body;
  let is_localized;
  let title;
  const data = element.element.data;
  const sms = data.sms;
  const arg1 = sms;
  const importDefault = data.sms_body;
  async function _handleOpenSms() {
    let str = "?";
    if (obj.isIOS()) {
      let str2 = "&";
      if (obj2.getSystemVersionMajor() < 8) {
        str2 = ";";
      }
      str = str2;
      const obj2 = callback(closure_3[10]);
    }
    let str3 = "";
    const combined = "sms:" + callback;
    if (null != callback2) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      str3 = "" + str + "body=" + encodeURIComponent(tmp2);
    }
    const sum = combined + str3;
    if (yield closure_8.canOpenURL(sum)) {
      callback2(closure_3[11]).openURL(sum);
      const obj3 = callback2(closure_3[11]);
    }
  }
  ({ title, body, is_localized } = data);
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  let closure_2 = tmp2[1];
  if (is_localized) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header, children: title };
    const items = [callback2(arg1(_handleOpenSms[12]).Text, obj), , ];
    obj = { style: tmp.description, variant: "text-md/medium", children: tmp4(body) };
    items[1] = callback2(arg1(_handleOpenSms[12]).Text, obj);
    const obj1 = { style: tmp.smsInfoContainer };
    const obj2 = {};
    const items1 = [tmp.smsNumberContainer, first ? tmp.smsNumberContainerSuccess : {}];
    obj2.style = items1;
    const obj3 = { INTEGRATION_CREATE: "r", ConstraintReasonCode: "timings", children: sms };
    const items2 = [callback2(arg1(_handleOpenSms[12]).Text, obj3), ];
    const obj4 = { style: tmp.trailingButtonContainer };
    const obj5 = {};
    const intl = arg1(_handleOpenSms[14]).intl;
    const string = intl.string;
    const t = arg1(_handleOpenSms[14]).t;
    if (first) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj5.text = stringResult;
    obj5.size = "sm";
    obj5.onPress = function handleCopyPress() {
      sms(_handleOpenSms[15]).copy(sms);
      const obj = sms(_handleOpenSms[15]);
      const result = sms(_handleOpenSms[16]).presentCopiedToClipboard();
      callback(true);
    };
    obj5.variant = "secondary";
    obj4.children = callback2(arg1(_handleOpenSms[13]).Button, obj5);
    items2[1] = callback2(closure_7, obj4);
    obj2.children = items2;
    const items3 = [closure_10(closure_7, obj2), ];
    const obj6 = { style: tmp.startButtonContainer };
    const obj7 = {};
    const intl2 = arg1(_handleOpenSms[14]).intl;
    obj7.text = intl2.string(arg1(_handleOpenSms[14]).t.BDYHSe);
    obj7.size = "md";
    obj7.onPress = function handleOpenSms() {
      return _handleOpenSms(...arguments);
    };
    obj6.children = callback2(arg1(_handleOpenSms[13]).Button, obj7);
    items3[1] = callback2(closure_7, obj6);
    obj1.children = items3;
    items[2] = closure_10(closure_7, obj1);
    obj.children = items;
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
};
