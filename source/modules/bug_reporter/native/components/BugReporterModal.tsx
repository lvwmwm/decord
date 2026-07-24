// Module ID: 10350
// Function ID: 79820
// Name: handleClose
// Dependencies: [5, 57, 31, 27, 1849, 10349, 33, 4130, 689, 666, 664, 4337, 1456, 566, 1212, 5087, 4665, 3831, 7696, 10351, 561, 10352, 10361, 5788, 7653, 5085, 1392, 4686, 4541, 4126, 5167, 9868, 4660, 1273, 4543, 7574, 5501, 5165, 4098, 10362, 1934, 7654, 7645, 685, 10363, 9651, 5517, 2]
// Exports: default

// Module 10350 (handleClose)
import zustandStore from "zustandStore";
import _slicedToArray from "_slicedToArray";
import AttachmentIcon from "AttachmentIcon";
import get_ActivityIndicator from "launchImageLibrary";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "zustandStore";
import jsxProd from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
function handleClose() {
  state.setState({ isReportOpen: false });
  let arr = importDefault(4337);
  arr = arr.pop();
}
class BugCreateScreen {
  constructor(arg0) {
    screenshotUri = global.screenshotUri;
    screenshot = global.screenshot;
    c7 = undefined;
    useState = undefined;
    useRef = undefined;
    _handleAttachmentSelect = function _handleAttachmentSelect() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = first(tmp);
      return obj(...arguments);
    };
    tmp = useState();
    closure_2 = tmp;
    tmp2 = defineProperty(AttachmentIcon.useState(""), 2);
    first = tmp2[0];
    zustandStore = first;
    tmp4 = defineProperty(AttachmentIcon.useState(""), 2);
    first1 = tmp4[0];
    defineProperty = first1;
    tmp6 = defineProperty(AttachmentIcon.useState(null), 2);
    first2 = tmp6[0];
    AttachmentIcon = first2;
    tmp8 = defineProperty(AttachmentIcon.useState(""), 2);
    first3 = tmp8[0];
    View = first3;
    tmp10 = defineProperty(AttachmentIcon.useState([]), 2);
    first4 = tmp10[0];
    c7 = first4;
    useState = tmp10[1];
    useRef = AttachmentIcon.useRef(false);
    tmp11 = defineProperty(AttachmentIcon.useState(false), 2);
    first5 = tmp11[0];
    c10 = first5;
    useState = tmp11[1];
    callback = AttachmentIcon.useCallback((current) => {
      closure_9.current = current;
      callback(current);
    }, []);
    useState = callback;
    tmp14 = defineProperty(AttachmentIcon.useState(false), 2);
    first6 = tmp14[0];
    closure_13 = first6;
    useState = tmp14[1];
    tmp16 = defineProperty(AttachmentIcon.useState(false), 2);
    first7 = tmp16[0];
    useCallback = first7;
    useState = tmp16[1];
    tmp18 = defineProperty(AttachmentIcon.useState(null), 2);
    first8 = tmp18[0];
    SECOND = first8;
    useState = tmp18[1];
    tmp20 = defineProperty(AttachmentIcon.useState(null), 2);
    first9 = tmp20[0];
    handleClose = first9;
    useState = tmp20[1];
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    closure_21 = navigation;
    ref = AttachmentIcon.useRef(null);
    closure_22 = ref;
    useRef = require("asyncGeneratorStep");
    obj2 = require("initialize");
    items = [];
    items[0] = useState;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let isStaffPersonalResult;
        if (null != currentUser) {
          isStaffPersonalResult = currentUser.isStaffPersonal();
        }
        isStaffResult = isStaffPersonalResult;
      }
      return isStaffResult;
    });
    useStateFromStores = stateFromStores;
    items1 = [];
    items1[0] = navigation;
    effect = AttachmentIcon.useEffect(() => {
      const obj = {};
      const intl = screenshotUri(tmp[14]).intl;
      obj.title = intl.string(screenshotUri(tmp[14]).t.mCCdwi);
      obj.headerLeft = screenshotUri(tmp[15]).getHeaderCloseButton(first9);
      navigation.setOptions(obj);
    }, items1);
    items2 = [, ];
    items2[0] = screenshotUri;
    items2[1] = screenshot;
    effect1 = AttachmentIcon.useEffect(() => {
      if (null != screenshotUri) {
        const obj = {};
        const merged = Object.assign(screenshot);
        obj["uri"] = screenshotUri;
        obj["originalUri"] = screenshotUri;
        obj["platform"] = screenshotUri(screenshot[16]).UploadPlatform.REACT_NATIVE;
        let tmp8 = screenshot(tmp[16]);
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj);
        screenshotUri = tmp8;
        currentUser((arg0) => {
          const items = [...arg0, closure_0];
          return items;
        });
      }
    }, items2);
    items3 = [, , , , , , , , , , ];
    items3[0] = first1;
    items3[1] = first9;
    items3[2] = first;
    items3[3] = navigation;
    items3[4] = first2;
    items3[5] = first3;
    items3[6] = first4;
    items3[7] = first5;
    items3[8] = first6;
    items3[9] = first7;
    items3[10] = callback;
    effect2 = AttachmentIcon.useEffect(() => {
      function handleSubmit() {
        return _handleSubmit(...arguments);
      }
      function _handleSubmit() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = first(tmp);
        return obj(...arguments);
      }
      navigation.setOptions({
        headerRight() {
          const obj = {};
          if (outer1_13) {
            const intl2 = screenshotUri(1212).intl;
            let stringResult = intl2.string(screenshotUri(1212).t["tUu8V+"]);
          } else {
            const intl = screenshotUri(1212).intl;
            const string = intl.string;
            const t = screenshotUri(1212).t;
            if (outer1_10) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          obj.text = stringResult;
          obj.textStyle = { maxWidth: null };
          obj.onPress = handleSubmit;
          let tmp8 = null == outer1_3;
          if (!tmp8) {
            tmp8 = "" === outer1_3;
          }
          if (!tmp8) {
            tmp8 = null == outer1_5;
          }
          if (!tmp8) {
            tmp8 = null == outer1_4;
          }
          if (!tmp8) {
            tmp8 = "" === outer1_4;
          }
          if (!tmp8) {
            let tmp13 = outer1_10;
            if (outer1_10) {
              tmp13 = !outer1_13;
            }
            tmp8 = tmp13;
          }
          obj.disabled = tmp8;
          return first5(screenshotUri(5788).HeaderActionButton, obj);
        }
      });
    }, items3);
    items4 = [];
    items4[0] = stateFromStores;
    effect3 = AttachmentIcon.useEffect(() => {
      function _fetchConfig() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = first(tmp);
        return obj(...arguments);
      }
      if (stateFromStores) {
        (function fetchConfig() {
          return _fetchConfig(...arguments);
        })();
      }
    }, items4);
    items5 = [];
    items5[0] = first4;
    effect4 = AttachmentIcon.useEffect(() => {
      if (first4.length > ref.current) {
        const current = ref.current;
        if (null != current) {
          current.scrollToEnd();
        }
      }
    }, items5);
    tmp30 = useState;
    obj = {};
    obj1 = {};
    tmp31 = useState;
    tmp32 = c10;
    tmp33 = c7;
    obj2 = { spacing: 24, style: tmp.container };
    obj3 = { spacing: 8 };
    obj4 = { variant: "text-sm/semibold", color: "text-subtle" };
    intl = require("getSystemLocale").intl;
    obj4.children = intl.string(require("getSystemLocale").t.tM969v);
    items6 = [, ];
    items6[0] = c10(require("Text").Text, obj4);
    obj5 = {};
    obj6 = { horizontal: true, ref, contentContainerStyle: tmp.attachmentCarousel };
    obj6.children = first4.map((item) => {
      let obj = { style: tmp.attachmentContainer };
      obj = { uri: item.item.uri, isImage: item.isImage, isVideo: item.isVideo, height: 280, width: 134 };
      const items = [first5(screenshot(tmp[31]), obj), ];
      obj = {
        onPress: () => {
          outer1_8((arr) => arr.filter((arg0) => arg0 !== outer2_0));
        },
        style: tmp.closeContainer
      };
      let closure_0 = item;
      const obj1 = { source: screenshot(tmp[18]), size: screenshotUri(tmp[33]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(tmp[8]).unsafe_rawColors.WHITE };
      obj.children = first5(screenshotUri(tmp[33]).Icon, obj1);
      items[1] = first5(screenshotUri(tmp[32]).PressableOpacity, obj);
      obj.children = items;
      return callback(first3, obj, item.id);
    });
    items7 = [, ];
    items7[0] = c10(c7, obj6);
    obj7 = {};
    intl2 = require("getSystemLocale").intl;
    obj7.text = intl2.string(require("getSystemLocale").t.HVxmOD);
    obj7.onPress = function handleAttachmentSelect() {
      return _handleAttachmentSelect(...arguments);
    };
    items7[1] = c10(require("Button").Button, obj7);
    obj5.children = items7;
    items6[1] = useState(require("getCardBackgroundToken").Card, obj5);
    obj3.children = items6;
    items8 = [, , , , , , ];
    items8[0] = useState(require("Stack").Stack, obj3);
    obj8 = {};
    intl3 = require("getSystemLocale").intl;
    obj8.label = intl3.string(require("getSystemLocale").t.OZRgjw);
    intl4 = require("getSystemLocale").intl;
    obj8.placeholder = intl4.string(require("getSystemLocale").t["6mpW05"]);
    obj8.onChange = tmp2[1];
    obj8.isClearable = true;
    obj8.autoCapitalize = "sentences";
    items8[1] = c10(require("TextInput").TextInput, obj8);
    if (!stateFromStores) {
      items8[2] = stateFromStores;
      tmp42 = screenshotUri;
      tmp43 = closure_2;
      num3 = 41;
      tmp41 = c10;
      obj9 = {};
      intl7 = require("getSystemLocale").intl;
      obj9.title = intl7.string(require("getSystemLocale").t.xMXLda);
      num4 = -1;
      if (null != first2) {
        num4 = first2;
      }
      obj9.defaultValue = num4;
      obj9.onChange = tmp6[1];
      obj9.hasIcons = true;
      tmp44 = screenshotUri;
      tmp45 = closure_2;
      num5 = 21;
      obj15 = require("_fetchBugReportConfig");
      priorities = obj15.getPriorities();
      obj9.children = priorities.map((value) => {
        let description;
        let emoji;
        let title;
        value = value.value;
        ({ title, description, emoji } = value);
        let obj = { value, label: title, subLabel: description };
        obj = { style: tmp.priorityIcon };
        obj = {};
        tmp = screenshot(tmp[25]);
        const obj1 = { id: emoji, animated: true, size: 48 };
        obj.uri = screenshotUri(tmp[26]).getEmojiURL(obj1);
        obj.source = obj;
        obj.resizeMode = "contain";
        obj.icon = first5(tmp, obj);
        return first5(screenshotUri(tmp[24]).TableRadioRow, obj, value);
      });
      items8[3] = tmp41(require("context").TableRadioGroup, obj9);
      tmp46 = c10;
      num6 = 42;
      obj10 = {};
      intl8 = require("getSystemLocale").intl;
      obj10.label = intl8.string(require("getSystemLocale").t["1SplH2"]);
      intl9 = require("getSystemLocale").intl;
      obj10.placeholder = intl9.string(require("getSystemLocale").t.CQmAZd);
      obj10.onChange = tmp4[1];
      obj10.autoCorrect = true;
      obj10.autoCapitalize = "sentences";
      items8[4] = c10(require("TextArea").TextArea, obj10);
      tmp47 = c10;
      obj11 = {};
      intl10 = require("getSystemLocale").intl;
      obj11.label = intl10.string(require("getSystemLocale").t["7p5pqh"]);
      intl11 = require("getSystemLocale").intl;
      obj11.placeholder = intl11.string(require("getSystemLocale").t.HewMzo);
      obj11.onChange = tmp8[1];
      obj11.isClearable = true;
      items8[5] = c10(require("TextInput").TextInput, obj11);
      tmp48 = c10;
      tmp49 = View;
      obj12 = {};
      obj12.style = tmp.offButton;
      tmp50 = c10;
      obj13 = { text: null, size: "sm", variant: "secondary" };
      intl12 = require("getSystemLocale").intl;
      obj13.text = intl12.string(require("getSystemLocale").t["636e+U"]);
      obj13.onPress = function onPress() {
        let obj = screenshotUri(tmp[43]);
        const result = obj.setDeveloperOptionSettings({ bugReporterEnabled: false });
        screenshot(tmp[44]).terminate(true);
        first9();
        const obj2 = screenshot(tmp[44]);
        obj = { key: "BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", icon: screenshot(tmp[22]) };
        const intl = screenshotUri(tmp[14]).intl;
        obj.content = intl.string(screenshotUri(tmp[14]).t["J3/feu"]);
        screenshot(tmp[17]).open(obj);
      };
      obj12.children = c10(require("Button").Button, obj13);
      items8[6] = c10(View, obj12);
      obj2.children = items8;
      obj1.children = tmp30(require("Stack").Stack, obj2);
      items9 = [, ];
      items9[0] = tmp32(tmp33, obj1);
      tmp51 = null;
      if (first5) {
        tmp52 = c10;
        tmp51 = c10(function Submitting() {
          const tmp = callback2();
          let obj = { style: tmp.submittingOverlay };
          obj = { sticker: first6, animated: true, size: 148 };
          const items = [first5(screenshot(tmp[45]), obj), ];
          obj = { style: tmp.submittingText, variant: "heading-md/medium" };
          const intl = screenshotUri(tmp[14]).intl;
          obj.children = intl.string(screenshotUri(tmp[14]).t.Uuqbcm);
          items[1] = first5(screenshotUri(tmp[29]).Text, obj);
          obj.children = items;
          return callback(first3, obj);
        }, {});
      }
      items9[1] = tmp51;
      obj.children = items9;
      return tmp30(tmp31, obj);
    } else {
      tmp35 = screenshotUri;
      tmp36 = closure_2;
      num = 36;
      tmp34 = c10;
      obj14 = {};
      intl5 = require("getSystemLocale").intl;
      obj14.title = intl5.string(require("getSystemLocale").t["77VVd8"]);
      obj14.hasIcons = false;
      num2 = 37;
      tmp37 = c10;
      obj15 = {};
      obj15.disabled = null == first8;
      obj15.onPress = function onPress() {
        let obj = screenshot(tmp[38]);
        obj = {};
        tmp = screenshotUri(tmp[40])(tmp[39], tmp.paths);
        if (null != first8) {
          let features = first8.features;
        } else {
          features = [];
        }
        obj.features = features;
        obj.feature = first9;
        obj.setFeature = closure_20;
        return obj.openLazy(tmp, "BugReporterFeatureActionSheet", obj);
      };
      if (null != first9) {
        name = first9.name;
      } else {
        tmp38 = screenshotUri;
        tmp39 = closure_2;
        intl6 = require("getSystemLocale").intl;
        name = intl6.string(require("getSystemLocale").t["77VVd8"]);
      }
      obj15.label = name;
      obj15.arrow = true;
      obj15 = tmp37(require("TableRowInner").TableRow, obj15);
      obj14.children = obj15;
      tmp34Result = tmp34(require("TableRowGroupTitle").TableRowGroup, obj14);
    }
    return;
  }
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = Object.freeze({ id: "749049128012742676", format_type: 3, name: "Wumpus zipping by on a monowheel" });
_createForOfIteratorHelperLoose = { container: { padding: 16 }, attachmentCarousel: { justifyContent: "center", minWidth: "100%" }, attachmentContainer: { marginHorizontal: 4, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 6, right: 10, height: 20, width: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK);
_createForOfIteratorHelperLoose.backgroundColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5).css();
_createForOfIteratorHelperLoose.closeContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.priorityIcon = { width: 24, height: 24 };
_createForOfIteratorHelperLoose.offButton = { marginBottom: 24 };
let obj1 = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
_createForOfIteratorHelperLoose.submittingOverlay = obj1;
_createForOfIteratorHelperLoose.submittingText = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = 5 * require("set").Millis.SECOND;
let closure_16 = 10 * require("set").Millis.SECOND;
let closure_17 = 5 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5);
let result = require("result").fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const items = [screenshotUri, screenshot];
  const screens = React.useMemo(() => (function getScreens(initialParams) {
    let obj = {};
    obj = {};
    const intl = screenshotUri(outer2_2[14]).intl;
    obj.title = intl.string(screenshotUri(outer2_2[14]).t.mCCdwi);
    obj.initialParams = initialParams;
    obj.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return outer3_10(outer3_20, {});
    };
    obj.BUG_REPORT_CREATE = obj;
    return obj;
  })({ screenshotUri, screenshot }), items);
  return callback(screenshotUri(5517).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
};
export { BugCreateScreen };
