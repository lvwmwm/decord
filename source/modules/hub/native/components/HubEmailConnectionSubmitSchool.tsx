// Module ID: 11770
// Function ID: 91356
// Name: HubEmailConnectionSubmitSchool
// Dependencies: [5, 57, 31, 27, 11753, 653, 33, 4130, 689, 1456, 5160, 11766, 4029, 11761, 1273, 1212, 4126, 9000, 4543, 2]
// Exports: default

// Module 11770 (HubEmailConnectionSubmitSchool)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16 } };
_createForOfIteratorHelperLoose = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: 24 };
_createForOfIteratorHelperLoose.scrollViewContainer = { flexGrow: 2 };
_createForOfIteratorHelperLoose.input = { marginBottom: 8 };
_createForOfIteratorHelperLoose.redesignTextInput = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.redesignGrowSpacing = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
const obj2 = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.redesignSubmit = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  let c4;
  let importDefault;
  let obj2;
  let require;
  ({ onClose: require, email: importDefault } = arg0);
  let dependencyMap;
  let ME;
  let callback;
  let first;
  function _submitWaitlist() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(1456) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  const tmp2 = callback(ref.useState(false), 2);
  ME = tmp2[1];
  [obj2, c4] = callback(ref.useState(null), 2);
  ref = ref.useRef(null);
  const tmp5 = callback(ref.useState(""), 2);
  first = tmp5[0];
  obj = {};
  obj = { ref };
  const items = [tmp.scrollViewContainer, ];
  const obj1 = { paddingBottom: importDefault(5160)().insets.bottom + importDefault(689).space.PX_16 };
  items[1] = obj1;
  obj.contentContainerStyle = items;
  obj2 = { style: tmp.container };
  const obj3 = { style: tmp.title, accessibilityRole: "header" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t["2FNWBG"]);
  const items1 = [callback2(require(1273) /* Button */.LegacyText, obj3), , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t["/4y6ox"]);
  items1[1] = callback2(require(4126) /* Text */.Text, obj4);
  const obj5 = {};
  const tmp10 = first;
  const tmp3 = callback(ref.useState(null), 2);
  const tmp9 = _submitWaitlist;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl3.string(require(1212) /* getSystemLocale */.t["L+AfJr"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.placeholder = intl4.string(require(1212) /* getSystemLocale */.t.Y1btJd);
  obj5.value = first;
  obj5.onChangeText = tmp5[1];
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  obj5.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj5.error = anyErrorMessage;
  obj5.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = outer1_5.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj5.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = outer1_5.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[2] = callback2(importDefault(9000), obj5);
  obj2.children = items1;
  const items2 = [closure_10(tmp10, obj2), callback2(first, { style: tmp.redesignGrowSpacing }), ];
  const obj7 = { style: tmp.redesignSubmit };
  const obj8 = { size: "lg", loading: tmp2[0] };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj8.text = intl5.string(require(1212) /* getSystemLocale */.t.PDsYAo);
  obj8.onPress = function submitWaitlist() {
    return _submitWaitlist(...arguments);
  };
  obj7.children = callback2(require(4543) /* Button */.Button, obj8);
  items2[2] = callback2(first, obj7);
  obj.children = items2;
  obj.children = closure_10(tmp9, obj);
  return callback2(require(11761) /* getScreens */.HubEmailConnectionScreen, obj);
};
