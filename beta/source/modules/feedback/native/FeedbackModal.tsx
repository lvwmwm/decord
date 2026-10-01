// Module ID: 11143
// Function ID: 11144
// Name: FeedbackModal
// Dependencies: [32, 19, 17, 21, 4836, 8053, 1115, 4832, 2111, 5281, 5039, 6421, 5936, 2]
// Exports: default

// Module 11143 (FeedbackModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _require, importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function FeedbackForm(result) {
  let Button;
  let descriptionLabel;
  let first;
  let format;
  let hideHelpdeskLink;
  let intl4;
  let items2;
  let obj10;
  let obj6;
  let obj7;
  let titleLabel;
  let tmp4;
  let value;
  let ybi2tD;
  result = result.result;
  const require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  value = undefined;
  const tmp = closure_9();
  const reason = result.reason;
  [value, tmp4] = react.useState("");
  const FormSection = require("Form").FormSection;
  let label;
  const FormInput = require("Form").FormInput;
  const tmp6 = closure_6;
  if (reason != null) {
    label = reason.label;
  }
  let obj = { value: label, title: titleLabel, disabled: true };
  if (titleLabel == null) {
    const intl = tmp7(tmp8[6]).intl;
    titleLabel = intl.string(tmp7(tmp8[6]).t.vcqwCj);
  }
  const items = [closure_7(FormInput, obj, "channel-input"), closure_7(require("Form").FormDivider, {}), ];
  const obj2 = { value, title: descriptionLabel, onChange: tmp4, multiline: true, numberOfLines: 4, autoCorrect: true };
  const FormInput2 = tmp7(tmp8[5]).FormInput;
  if (descriptionLabel == null) {
    const intl2 = tmp7(tmp8[6]).intl;
    descriptionLabel = intl2.string(tmp7(tmp8[6]).t.h95hcn);
  }
  const obj3 = { children: items };
  items[2] = closure_7(FormInput2, obj2);
  const items1 = [closure_8(FormSection, obj3), ];
  let tmp9Result = !hideHelpdeskLink;
  const obj4 = { style: tmp.bottomContainer, children: items2 };
  if (tmp9Result) {
    const obj5 = { style: tmp.helpDeskLabel, variant: "text-xs/medium", color: "text-muted", children: format(ybi2tD, obj6) };
    const Text = tmp7(tmp8[7]).Text;
    const intl3 = tmp7(tmp8[6]).intl;
    format = intl3.format;
    obj6 = { helpdeskURL: obj7.getSubmitRequestURL() };
    ybi2tD = tmp7(tmp8[6]).t.ybi2tD;
    obj7 = require("HelpdeskUtils");
    tmp9Result = tmp9(Text, obj5);
  }
  items2 = [tmp9Result, ];
  let tmp14 = null == value;
  const obj8 = { style: tmp.submitButton, children: closure_7(Button, obj10) };
  Button = tmp7(tmp8[9]).Button;
  if (!tmp14) {
    tmp14 = "" === value;
  }
  const obj9 = { keyboardShouldPersistTaps: "handled", children: items1 };
  obj10 = {
    disabled: tmp14,
    text: intl4.string(require("intl").t.geKm7t),
    onPress() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      const obj = { feedback };
      const merged = Object.assign(require);
      importDefault(obj);
    }
  };
  intl4 = tmp7(tmp8[6]).intl;
  items2[1] = closure_7(closure_5, obj8);
  items1[1] = closure_8(closure_5, obj4);
  return closure_8(tmp6, obj9);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ helpDeskLabel: { lineHeight: 16, marginTop: 8 }, bottomContainer: { paddingHorizontal: 16 }, submitButton: { marginTop: 24, marginBottom: 24 } });
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  let intl;
  let obj2;
  let obj3;
  let obj4;
  _require = result;
  result = result.result;
  importDefault = result;
  const trackReport = result.trackReport;
  const ref = react.useRef({ result, trackReport });
  const effect = react.useEffect(() => {
    const obj = { result: importDefault, trackReport };
    ref.current = obj;
  });
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  let obj = { initialRouteName: "Feedback", screens: obj2 };
  obj2 = { Feedback: obj3 };
  obj3 = {
    title: intl.string(require("intl").t["dBx+Cn"]),
    headerLeft: obj4.getHeaderCloseButton(callback),
    render() {
      const obj = {};
      const merged = Object.assign(_require);
      return metroImportDefault(FeedbackForm, obj);
    }
  };
  const Navigator = require("Navigator").Navigator;
  intl = require("intl").intl;
  obj4 = require("NavigatorHeader");
  return closure_7(Navigator, obj);
};
