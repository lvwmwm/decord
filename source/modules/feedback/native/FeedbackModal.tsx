// Module ID: 9514
// Function ID: 74057
// Name: FeedbackForm
// Dependencies: []
// Exports: default

// Module 9514 (FeedbackForm)
function FeedbackForm(result) {
  let descriptionLabel;
  let titleLabel;
  result = result.result;
  const arg1 = result;
  ({ trackReport: closure_1, titleLabel, descriptionLabel } = result);
  const tmp = callback3();
  const reason = result.reason;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let obj = { keyboardShouldPersistTaps: "handled" };
  obj = {};
  obj = {};
  let label;
  if (null != reason) {
    label = reason.label;
  }
  obj.value = label;
  if (null == titleLabel) {
    const intl = arg1(dependencyMap[6]).intl;
    titleLabel = intl.string(arg1(dependencyMap[6]).t.vcqwCj);
  }
  obj.title = titleLabel;
  obj.disabled = true;
  const items = [callback2(arg1(dependencyMap[5]).FormInput, obj, "channel-input"), callback2(arg1(dependencyMap[5]).FormDivider, {}), ];
  const obj1 = { value: first };
  if (null == descriptionLabel) {
    const intl2 = arg1(dependencyMap[6]).intl;
    descriptionLabel = intl2.string(arg1(dependencyMap[6]).t.h95hcn);
  }
  obj1.title = descriptionLabel;
  obj1.onChange = tmp2[1];
  items[2] = callback2(arg1(dependencyMap[5]).FormInput, obj1);
  obj.children = items;
  const items1 = [closure_8(arg1(dependencyMap[5]).FormSection, obj), ];
  const obj2 = { style: tmp.bottomContainer };
  let tmp16 = !result.hideHelpdeskLink;
  if (tmp16) {
    const obj3 = { style: tmp.helpDeskLabel };
    const intl3 = arg1(dependencyMap[6]).intl;
    const obj4 = { helpdeskURL: importDefault(dependencyMap[8]).getSubmitRequestURL() };
    obj3.children = intl3.format(arg1(dependencyMap[6]).t.ybi2tD, obj4);
    tmp16 = callback2(arg1(dependencyMap[7]).TextWithIOSLinkWorkaround, obj3);
    const obj8 = importDefault(dependencyMap[8]);
  }
  const items2 = [tmp16, ];
  const obj5 = { style: tmp.submitButton };
  const obj6 = {};
  let tmp24 = null == first;
  if (!tmp24) {
    tmp24 = "" === first;
  }
  obj6.disabled = tmp24;
  const intl4 = arg1(dependencyMap[6]).intl;
  obj6.text = intl4.string(arg1(dependencyMap[6]).t.geKm7t);
  obj6.onPress = function onPress() {
    let arr = callback(first[10]);
    arr = arr.pop();
    const obj = {};
    const merged = Object.assign(result);
    obj["feedback"] = first;
    callback(obj);
  };
  obj5.children = callback2(arg1(dependencyMap[9]).Button, obj6);
  items2[1] = callback2(closure_5, obj5);
  obj2.children = items2;
  items1[1] = closure_8(closure_5, obj2);
  obj.children = items1;
  return closure_8(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ helpDeskLabel: {}, bottomContainer: { paddingHorizontal: 16 }, submitButton: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  const arg1 = result;
  result = result.result;
  const importDefault = result;
  const trackReport = result.trackReport;
  const dependencyMap = trackReport;
  let closure_3 = React.useRef({ result, trackReport });
  const effect = React.useEffect(() => {
    closure_3.current = { result, trackReport };
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
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.dBx+Cn);
  obj.headerLeft = arg1(dependencyMap[12]).getHeaderCloseButton(callback);
  obj.render = function render() {
    const merged = Object.assign(arg0);
    return callback(closure_10, {});
  };
  obj.Feedback = obj;
  obj.screens = obj;
  return callback2(arg1(dependencyMap[11]).Navigator, obj);
};
