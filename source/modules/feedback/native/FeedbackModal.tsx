// Module ID: 9522
// Function ID: 74111
// Name: FeedbackForm
// Dependencies: [57, 31, 27, 33, 4130, 7495, 1212, 5459, 1920, 4543, 4337, 5519, 5087, 2]
// Exports: default

// Module 9522 (FeedbackForm)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function FeedbackForm(result) {
  let descriptionLabel;
  let importDefault;
  let titleLabel;
  result = result.result;
  const require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel } = result);
  const tmp = callback3();
  const reason = result.reason;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let obj = { keyboardShouldPersistTaps: "handled" };
  obj = {};
  obj = {};
  let label;
  if (null != reason) {
    label = reason.label;
  }
  obj.value = label;
  if (null == titleLabel) {
    const intl = require(first[6]).intl;
    titleLabel = intl.string(require(first[6]).t.vcqwCj);
  }
  obj.title = titleLabel;
  obj.disabled = true;
  const items = [callback2(require(first[5]).FormInput, obj, "channel-input"), callback2(require(first[5]).FormDivider, {}), ];
  const obj1 = { value: first, title: null, onChange: null, multiline: true, numberOfLines: 4, autoCorrect: true };
  if (null == descriptionLabel) {
    const intl2 = require(first[6]).intl;
    descriptionLabel = intl2.string(require(first[6]).t.h95hcn);
  }
  obj1.title = descriptionLabel;
  obj1.onChange = tmp2[1];
  items[2] = callback2(require(first[5]).FormInput, obj1);
  obj.children = items;
  const items1 = [closure_8(require(first[5]).FormSection, obj), ];
  const obj2 = { style: tmp.bottomContainer };
  let tmp16 = !result.hideHelpdeskLink;
  if (tmp16) {
    const obj3 = { style: tmp.helpDeskLabel, variant: "text-xs/medium", color: "text-muted" };
    const intl3 = require(first[6]).intl;
    const obj4 = { helpdeskURL: importDefault(first[8]).getSubmitRequestURL() };
    obj3.children = intl3.format(require(first[6]).t.ybi2tD, obj4);
    tmp16 = callback2(require(first[7]).TextWithIOSLinkWorkaround, obj3);
    const obj8 = importDefault(first[8]);
  }
  const items2 = [tmp16, ];
  const obj5 = { style: tmp.submitButton };
  const obj6 = {};
  let tmp24 = null == first;
  if (!tmp24) {
    tmp24 = "" === first;
  }
  obj6.disabled = tmp24;
  const intl4 = require(first[6]).intl;
  obj6.text = intl4.string(require(first[6]).t.geKm7t);
  obj6.onPress = function onPress() {
    let arr = outer1_1(first[10]);
    arr = arr.pop();
    const obj = {};
    const merged = Object.assign(closure_0);
    obj["feedback"] = first;
    callback(obj);
  };
  obj5.children = callback2(require(first[9]).Button, obj6);
  items2[1] = callback2(closure_5, obj5);
  obj2.children = items2;
  items1[1] = closure_8(closure_5, obj2);
  obj.children = items1;
  return closure_8(closure_6, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ helpDeskLabel: { lineHeight: 16, marginTop: 8 }, bottomContainer: { paddingHorizontal: 16 }, submitButton: { marginTop: 24, marginBottom: 24 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  const _require = result;
  result = result.result;
  const importDefault = result;
  const trackReport = result.trackReport;
  let _slicedToArray = React.useRef({ result, trackReport });
  const effect = React.useEffect(() => {
    _slicedToArray.current = { result: closure_1, trackReport };
  });
  const callback = React.useCallback(() => {
    let arr = result(trackReport[10]);
    arr = arr.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  let obj = { initialRouteName: "Feedback" };
  obj = {};
  obj = {};
  const intl = _require(trackReport[6]).intl;
  obj.title = intl.string(_require(trackReport[6]).t["dBx+Cn"]);
  obj.headerLeft = _require(trackReport[12]).getHeaderCloseButton(callback);
  obj.render = function render() {
    const merged = Object.assign(closure_0);
    return outer1_7(outer1_10, {});
  };
  obj.Feedback = obj;
  obj.screens = obj;
  return callback2(_require(trackReport[11]).Navigator, obj);
};
