// Module ID: 10301
// Function ID: 79512
// Name: handleClose
// Dependencies: []
// Exports: default

// Module 10301 (handleClose)
function handleClose() {
  state.setState({ isReportOpen: false });
  let arr = importDefault(dependencyMap[11]);
  arr = arr.pop();
}
class BugCreateScreen {
  constructor(arg0) {
    screenshotUri = global.screenshotUri;
    arg1 = screenshotUri;
    screenshot = global.screenshot;
    importDefault = screenshot;
    closure_7 = undefined;
    closure_8 = undefined;
    useRef = undefined;
    _handleAttachmentSelect = function _handleAttachmentSelect() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = first(tmp);
      const _handleAttachmentSelect = obj;
      return obj(...arguments);
    };
    tmp = freeze();
    dependencyMap = tmp;
    tmp2 = defineProperty(importAll.useState(""), 2);
    first = tmp2[0];
    closure_3 = first;
    tmp4 = defineProperty(importAll.useState(""), 2);
    first1 = tmp4[0];
    defineProperty = first1;
    tmp6 = defineProperty(importAll.useState(null), 2);
    first2 = tmp6[0];
    importAll = first2;
    tmp8 = defineProperty(importAll.useState(""), 2);
    first3 = tmp8[0];
    View = first3;
    tmp10 = defineProperty(importAll.useState([]), 2);
    first4 = tmp10[0];
    closure_7 = first4;
    closure_8 = tmp10[1];
    closure_9 = importAll.useRef(false);
    tmp11 = defineProperty(importAll.useState(false), 2);
    first5 = tmp11[0];
    closure_10 = first5;
    jsxs = tmp11[1];
    callback = importAll.useCallback((current) => {
      closure_9.current = current;
      callback(current);
    }, []);
    Fragment = callback;
    tmp14 = defineProperty(importAll.useState(false), 2);
    first6 = tmp14[0];
    closure_13 = first6;
    freeze = tmp14[1];
    tmp16 = defineProperty(importAll.useState(false), 2);
    first7 = tmp16[0];
    SECOND = first7;
    SECOND = tmp16[1];
    tmp18 = defineProperty(importAll.useState(null), 2);
    first8 = tmp18[0];
    SECOND = first8;
    MINUTE = tmp18[1];
    tmp20 = defineProperty(importAll.useState(null), 2);
    first9 = tmp20[0];
    handleClose = first9;
    BugCreateScreen = tmp20[1];
    obj = arg1(dependencyMap[12]);
    navigation = obj.useNavigation();
    closure_21 = navigation;
    ref = importAll.useRef(null);
    closure_22 = ref;
    useRef = require("module_0");
    obj2 = arg1(dependencyMap[13]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => {
      const currentUser = currentUser.getCurrentUser();
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
    effect = importAll.useEffect(() => {
      const obj = {};
      const intl = screenshotUri(tmp[14]).intl;
      obj.title = intl.string(screenshotUri(tmp[14]).t.mCCdwi);
      obj.headerLeft = screenshotUri(tmp[15]).getHeaderCloseButton(first9);
      navigation.setOptions(obj);
    }, items1);
    items2 = [, ];
    items2[0] = screenshotUri;
    items2[1] = screenshot;
    effect1 = importAll.useEffect(() => {
      if (null != screenshotUri) {
        const obj = {};
        const merged = Object.assign(screenshot);
        obj["uri"] = screenshotUri;
        obj["originalUri"] = screenshotUri;
        obj["platform"] = screenshotUri(screenshot[16]).UploadPlatform.REACT_NATIVE;
        let tmp8 = screenshot(tmp[16]);
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj);
        const screenshotUri = tmp8;
        currentUser((arg0) => {
          const items = [...arg0, tmp8];
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
    effect2 = importAll.useEffect(() => {
      function handleSubmit() {
        return _handleSubmit(...arguments);
      }
      function _handleSubmit() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _handleSubmit = obj;
        return obj(...arguments);
      }
      navigation.setOptions({
        headerRight() {
          const obj = {};
          if (closure_13) {
            const intl2 = handleSubmit(closure_2[14]).intl;
            let stringResult = intl2.string(handleSubmit(closure_2[14]).t.tUu8V+);
          } else {
            const intl = handleSubmit(closure_2[14]).intl;
            const string = intl.string;
            const t = handleSubmit(closure_2[14]).t;
            if (closure_10) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          obj.text = stringResult;
          obj.textStyle = { maxWidth: null };
          obj.onPress = handleSubmit;
          let tmp8 = null == closure_3;
          if (!tmp8) {
            tmp8 = "" === closure_3;
          }
          if (!tmp8) {
            tmp8 = null == closure_5;
          }
          if (!tmp8) {
            tmp8 = null == closure_4;
          }
          if (!tmp8) {
            tmp8 = "" === closure_4;
          }
          if (!tmp8) {
            let tmp13 = closure_10;
            if (closure_10) {
              tmp13 = !closure_13;
            }
            tmp8 = tmp13;
          }
          obj.disabled = tmp8;
          return closure_10(handleSubmit(closure_2[23]).HeaderActionButton, obj);
        }
      });
    }, items3);
    items4 = [];
    items4[0] = stateFromStores;
    effect3 = importAll.useEffect(() => {
      function _fetchConfig() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _fetchConfig = obj;
        return obj(...arguments);
      }
      if (stateFromStores) {
        function fetchConfig() {
          return _fetchConfig(...arguments);
        }();
      }
    }, items4);
    items5 = [];
    items5[0] = first4;
    effect4 = importAll.useEffect(() => {
      if (first4.length > ref.current) {
        const current = ref.current;
        if (null != current) {
          current.scrollToEnd();
        }
      }
    }, items5);
    tmp30 = jsxs;
    obj = {};
    obj1 = {};
    tmp31 = Fragment;
    tmp32 = closure_10;
    tmp33 = closure_7;
    obj2 = { spacing: 24, style: tmp.container };
    obj3 = { spacing: 8 };
    obj4 = {};
    intl = arg1(dependencyMap[14]).intl;
    obj4.children = intl.string(arg1(dependencyMap[14]).t.tM969v);
    items6 = [, ];
    items6[0] = closure_10(arg1(dependencyMap[29]).Text, obj4);
    obj5 = {};
    obj6 = { horizontal: true, ref, contentContainerStyle: tmp.attachmentCarousel };
    obj6.children = first4.map((item) => {
      let obj = { style: tmp.attachmentContainer };
      obj = { uri: item.item.uri, isImage: item.isImage, isVideo: item.isVideo, height: 280, width: 134 };
      const items = [first5(screenshot(tmp[31]), obj), ];
      obj = {
        onPress: () => {
          callback((arr) => arr.filter((arg0) => arg0 !== closure_0));
        },
        style: tmp.closeContainer
      };
      const screenshotUri = item;
      const obj1 = { source: screenshot(tmp[18]), size: screenshotUri(tmp[33]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(tmp[8]).unsafe_rawColors.WHITE };
      obj.children = first5(screenshotUri(tmp[33]).Icon, obj1);
      items[1] = first5(screenshotUri(tmp[32]).PressableOpacity, obj);
      obj.children = items;
      return callback(first3, obj, item.id);
    });
    items7 = [, ];
    items7[0] = closure_10(closure_7, obj6);
    obj7 = {};
    intl2 = arg1(dependencyMap[14]).intl;
    obj7.text = intl2.string(arg1(dependencyMap[14]).t.HVxmOD);
    obj7.onPress = function handleAttachmentSelect() {
      return _handleAttachmentSelect(...arguments);
    };
    items7[1] = closure_10(arg1(dependencyMap[34]).Button, obj7);
    obj5.children = items7;
    items6[1] = jsxs(arg1(dependencyMap[30]).Card, obj5);
    obj3.children = items6;
    items8 = [, , , , , , ];
    items8[0] = jsxs(arg1(dependencyMap[28]).Stack, obj3);
    obj8 = {};
    intl3 = arg1(dependencyMap[14]).intl;
    obj8.label = intl3.string(arg1(dependencyMap[14]).t.OZRgjw);
    intl4 = arg1(dependencyMap[14]).intl;
    obj8.placeholder = intl4.string(arg1(dependencyMap[14]).t.6mpW05);
    obj8.onChange = tmp2[1];
    obj8.isClearable = true;
    obj8.autoCapitalize = "sentences";
    items8[1] = closure_10(arg1(dependencyMap[35]).TextInput, obj8);
    if (!stateFromStores) {
      items8[2] = stateFromStores;
      tmp42 = arg1;
      tmp43 = dependencyMap;
      num3 = 41;
      tmp41 = closure_10;
      obj9 = {};
      intl7 = arg1(dependencyMap[14]).intl;
      obj9.title = intl7.string(arg1(dependencyMap[14]).t.xMXLda);
      num4 = -1;
      if (null != first2) {
        num4 = first2;
      }
      obj9.defaultValue = num4;
      obj9.onChange = tmp6[1];
      obj9.hasIcons = true;
      tmp44 = arg1;
      tmp45 = dependencyMap;
      num5 = 21;
      obj15 = arg1(dependencyMap[21]);
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
        const tmp = screenshot(tmp[25]);
        const obj1 = { "Null": 1441791, "Null": 1430323200, "Null": 1627390528, id: emoji };
        obj.uri = screenshotUri(tmp[26]).getEmojiURL(obj1);
        obj.source = obj;
        obj.resizeMode = "contain";
        obj.icon = first5(tmp, obj);
        return first5(screenshotUri(tmp[24]).TableRadioRow, obj, value);
      });
      items8[3] = tmp41(arg1(dependencyMap[41]).TableRadioGroup, obj9);
      tmp46 = closure_10;
      num6 = 42;
      obj10 = {};
      intl8 = arg1(dependencyMap[14]).intl;
      obj10.label = intl8.string(arg1(dependencyMap[14]).t.1SplH2);
      intl9 = arg1(dependencyMap[14]).intl;
      obj10.placeholder = intl9.string(arg1(dependencyMap[14]).t.CQmAZd);
      obj10.onChange = tmp4[1];
      obj10.autoCorrect = true;
      obj10.autoCapitalize = "sentences";
      items8[4] = closure_10(arg1(dependencyMap[42]).TextArea, obj10);
      tmp47 = closure_10;
      obj11 = {};
      intl10 = arg1(dependencyMap[14]).intl;
      obj11.label = intl10.string(arg1(dependencyMap[14]).t.7p5pqh);
      intl11 = arg1(dependencyMap[14]).intl;
      obj11.placeholder = intl11.string(arg1(dependencyMap[14]).t.HewMzo);
      obj11.onChange = tmp8[1];
      obj11.isClearable = true;
      items8[5] = closure_10(arg1(dependencyMap[35]).TextInput, obj11);
      tmp48 = closure_10;
      tmp49 = View;
      obj12 = {};
      obj12.style = tmp.offButton;
      tmp50 = closure_10;
      obj13 = {};
      intl12 = arg1(dependencyMap[14]).intl;
      obj13.text = intl12.string(arg1(dependencyMap[14]).t.636e+U);
      obj13.onPress = function onPress() {
        let obj = screenshotUri(tmp[43]);
        const result = obj.setDeveloperOptionSettings({ bugReporterEnabled: false });
        screenshot(tmp[44]).terminate(true);
        first9();
        const obj2 = screenshot(tmp[44]);
        obj = { key: "BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", icon: screenshot(tmp[22]) };
        const intl = screenshotUri(tmp[14]).intl;
        obj.content = intl.string(screenshotUri(tmp[14]).t.J3/feu);
        screenshot(tmp[17]).open(obj);
      };
      obj12.children = closure_10(arg1(dependencyMap[34]).Button, obj13);
      items8[6] = closure_10(View, obj12);
      obj2.children = items8;
      obj1.children = tmp30(arg1(dependencyMap[28]).Stack, obj2);
      items9 = [, ];
      items9[0] = tmp32(tmp33, obj1);
      tmp51 = null;
      if (first5) {
        tmp52 = closure_10;
        tmp51 = closure_10(function Submitting() {
          const tmp = callback2();
          let obj = { style: tmp.submittingOverlay };
          obj = { 122814468: true, 1637360015: true, 1943622539: true, sticker: first6 };
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
      tmp35 = arg1;
      tmp36 = dependencyMap;
      num = 36;
      tmp34 = closure_10;
      obj14 = {};
      intl5 = arg1(dependencyMap[14]).intl;
      obj14.title = intl5.string(arg1(dependencyMap[14]).t.77VVd8);
      obj14.hasIcons = false;
      num2 = 37;
      tmp37 = closure_10;
      obj15 = {};
      obj15.disabled = null == first8;
      obj15.onPress = function onPress() {
        let obj = screenshot(tmp[38]);
        obj = {};
        const tmp = screenshotUri(tmp[40])(tmp[39], tmp.paths);
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
        tmp38 = arg1;
        tmp39 = dependencyMap;
        intl6 = arg1(dependencyMap[14]).intl;
        name = intl6.string(arg1(dependencyMap[14]).t.77VVd8);
      }
      obj15.label = name;
      obj15.arrow = true;
      obj15 = tmp37(arg1(dependencyMap[37]).TableRow, obj15);
      obj14.children = obj15;
      tmp34Result = tmp34(arg1(dependencyMap[36]).TableRowGroup, obj14);
    }
    return;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let closure_13 = Object.freeze({ style: 24, variant: 24, color: null });
let obj = arg1(dependencyMap[7]);
obj = { container: { padding: 16 }, attachmentCarousel: { blurTheme: false, pressed: false }, attachmentContainer: { <string:80596992>: "space-between", <string:80602112>: null } };
obj = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const tmp3 = arg1(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[9]);
const importDefaultResultResult = importDefault(dependencyMap[9])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK);
obj.backgroundColor = importDefault(dependencyMap[9])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK).alpha(0.5).css();
obj.closeContainer = obj;
obj.priorityIcon = { aze: false, azj: false };
obj.offButton = { marginBottom: 24 };
const alphaResult = importDefault(dependencyMap[9])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK).alpha(0.5);
obj.submittingOverlay = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SCRIM };
obj.submittingText = { marginTop: 8 };
let closure_14 = obj.createStyles(obj);
let closure_15 = 5 * importDefault(dependencyMap[10]).Millis.SECOND;
let closure_16 = 10 * importDefault(dependencyMap[10]).Millis.SECOND;
let closure_17 = 5 * importDefault(dependencyMap[10]).Millis.SECOND;
const MINUTE = importDefault(dependencyMap[10]).Millis.MINUTE;
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SCRIM };
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const arg1 = screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const importDefault = screenshot;
  const items = [screenshotUri, screenshot];
  const screens = React.useMemo(() => function getScreens(initialParams) {
    let obj = {};
    obj = {};
    const intl = callback(closure_2[14]).intl;
    obj.title = intl.string(callback(closure_2[14]).t.mCCdwi);
    obj.initialParams = initialParams;
    obj.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback(closure_20, {});
    };
    obj.BUG_REPORT_CREATE = obj;
    return obj;
  }({ screenshotUri, screenshot }), items);
  return callback2(arg1(dependencyMap[46]).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
};
export { BugCreateScreen };
