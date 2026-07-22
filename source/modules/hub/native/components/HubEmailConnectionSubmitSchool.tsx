// Module ID: 11760
// Function ID: 91307
// Name: HubEmailConnectionSubmitSchool
// Dependencies: []
// Exports: default

// Module 11760 (HubEmailConnectionSubmitSchool)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const HubEmailConnectionSteps = arg1(dependencyMap[4]).HubEmailConnectionSteps;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { paddingHorizontal: 16 } };
obj = { 1936959572: "Array", -823869256: "handleActivityItemSelected", -1717677639: "dotSeparator", 1884411745: "mic", 1390895600: "handleReduceTransparencyChanged", fontFamily: arg1(dependencyMap[5]).Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
obj.description = { memo: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, accessibilityRole: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005495969098605 };
obj.scrollViewContainer = { flexGrow: 2 };
obj.input = { marginBottom: 8 };
const tmp3 = arg1(dependencyMap[6]);
obj.redesignTextInput = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.redesignGrowSpacing = { flexGrow: 2, minHeight: importDefault(dependencyMap[8]).space.PX_24 };
const obj2 = { flexGrow: 2, minHeight: importDefault(dependencyMap[8]).space.PX_24 };
obj.redesignSubmit = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj3 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  let obj2;
  ({ onClose: closure_0, email: closure_1 } = arg0);
  let closure_2;
  let closure_3;
  let callback;
  let first;
  function _submitWaitlist() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _submitWaitlist = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = arg1(closure_2[9]);
  closure_2 = obj.useNavigation();
  const tmp2 = callback(React.useState(false), 2);
  closure_3 = tmp2[1];
  [obj2, closure_4] = callback(React.useState(null), 2);
  const ref = React.useRef(null);
  const React = ref;
  const tmp5 = callback(React.useState(""), 2);
  first = tmp5[0];
  obj = {};
  obj = { ref };
  const items = [tmp.scrollViewContainer, ];
  const obj1 = { paddingBottom: importDefault(closure_2[10])().insets.bottom + importDefault(closure_2[8]).space.PX_16 };
  items[1] = obj1;
  obj.contentContainerStyle = items;
  obj2 = { style: tmp.container };
  const obj3 = { style: tmp.title, accessibilityRole: "header" };
  const intl = arg1(closure_2[15]).intl;
  obj3.children = intl.string(arg1(closure_2[15]).t.2FNWBG);
  const items1 = [callback2(arg1(closure_2[14]).LegacyText, obj3), , ];
  const obj4 = { style: tmp.description };
  const intl2 = arg1(closure_2[15]).intl;
  obj4.children = intl2.string(arg1(closure_2[15]).t./4y6ox);
  items1[1] = callback2(arg1(closure_2[16]).Text, obj4);
  const obj5 = {};
  const tmp10 = first;
  const tmp3 = callback(React.useState(null), 2);
  const tmp9 = _submitWaitlist;
  const intl3 = arg1(closure_2[15]).intl;
  obj5.label = intl3.string(arg1(closure_2[15]).t.L+AfJr);
  const intl4 = arg1(closure_2[15]).intl;
  obj5.placeholder = intl4.string(arg1(closure_2[15]).t.Y1btJd);
  obj5.value = first;
  obj5.onChangeText = tmp5[1];
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  obj5.clearButtonVisibility = arg1(closure_2[14]).ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj5.error = anyErrorMessage;
  obj5.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj5.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[2] = callback2(importDefault(closure_2[17]), obj5);
  obj2.children = items1;
  const items2 = [closure_10(tmp10, obj2), callback2(first, { style: tmp.redesignGrowSpacing }), ];
  const obj7 = { style: tmp.redesignSubmit };
  const obj8 = { size: "lg", loading: tmp2[0] };
  const intl5 = arg1(closure_2[15]).intl;
  obj8.text = intl5.string(arg1(closure_2[15]).t.PDsYAo);
  obj8.onPress = function submitWaitlist() {
    return _submitWaitlist(...arguments);
  };
  obj7.children = callback2(arg1(closure_2[18]).Button, obj8);
  items2[2] = callback2(first, obj7);
  obj.children = items2;
  obj.children = closure_10(tmp9, obj);
  return callback2(arg1(closure_2[13]).HubEmailConnectionScreen, obj);
};
