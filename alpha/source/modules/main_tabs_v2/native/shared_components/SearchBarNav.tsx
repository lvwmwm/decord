// Module ID: 7087
// Function ID: 7088
// Name: SearchBarNav
// Dependencies: [109, 19, 17, 21, 5092, 6258, 587, 558, 576, 1126, 1382, 6204, 5088, 6184, 6738, 2]

// Module 7087 (SearchBarNav)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Pressables from "Pressables" /* 6184 */;
import NavigatorConstants from "NavigatorConstants" /* 6258 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let closure_2 = ["onClose", "ref"];
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cancelText: obj3, cancelIcon: obj4, flex: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { marginRight: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchBarNav(arg0) {
  let SearchField;
  let intl2;
  let items;
  let obj5;
  let onClose;
  let ref;
  let tmp11;
  let tmp13;
  let tmp15Result;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(27);
  if (cResult[0] !== arg0) {
    ({ onClose, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onClose;
    cResult[2] = tmp9;
    cResult[3] = ref;
    tmp6 = ref;
    tmp5 = tmp9;
    tmp4 = onClose;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_7();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t["ETE/oC"]);
    cResult[4] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 8, right: 8, bottom: 8, left: 8 };
    cResult[5] = rect;
    tmp13 = rect;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp10.cancelIcon) {
    let tmp14;
    if (cResult[7] === tmp10.cancelText) {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      let tmp17;
      let tmp20;
      if (cResult[10] === tmp14) {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp17) {
        let tmp21 = null;
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          tmp21 = tmp17;
        }
        cResult[12] = tmp17;
        cResult[13] = tmp21;
        tmp20 = tmp21;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        let tmp22;
        if (cResult[15] === tmp6) {
          tmp22 = cResult[16];
        }
        if (cResult[17] === tmp10.flex) {
          let tmp29;
          let tmp33;
          if (cResult[18] === tmp22) {
            tmp29 = cResult[19];
          }
          if (cResult[20] !== tmp17) {
            let tmp34 = null;
            const tmpResult3 = PlatformUtils;
            if (!tmpResult3.isAndroid()) {
              tmp34 = tmp17;
            }
            cResult[20] = tmp17;
            cResult[21] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[21];
          }
          if (cResult[22] === tmp10.container) {
            if (cResult[23] === tmp20) {
              if (cResult[24] === tmp29) {
                let tmp35;
                if (cResult[25] === tmp33) {
                  tmp35 = cResult[26];
                }
                return tmp35;
              }
            }
          }
          const obj2 = { style: tmp10.container, children: items };
          items = [tmp20, tmp29, tmp33];
          const tmp38 = metroRequire(React3, obj2);
          cResult[22] = tmp10.container;
          cResult[23] = tmp20;
          cResult[24] = tmp29;
          cResult[25] = tmp33;
          cResult[26] = tmp38;
          tmp35 = tmp38;
        }
        const obj3 = { style: tmp10.flex, children: tmp22 };
        const tmp32 = hasOwnProperty(React3, obj3);
        cResult[17] = tmp10.flex;
        cResult[18] = tmp22;
        cResult[19] = tmp32;
        tmp29 = tmp32;
      }
      const obj4 = { children: hasOwnProperty(SearchField, obj5) };
      obj5 = { size: "md", round: true, ref: tmp6 };
      SearchField = tmp(6738).SearchField;
      const merged = Object.assign(tmp5);
      const tmp28 = hasOwnProperty(React3, obj4);
      cResult[14] = tmp5;
      cResult[15] = tmp6;
      cResult[16] = tmp28;
      tmp22 = tmp28;
    }
    const obj6 = { accessibilityRole: "button", accessibilityLabel: tmp11, onPress: tmp4, hitSlop: tmp13, children: tmp14 };
    const tmp19 = hasOwnProperty(Pressables.PressableOpacity, obj6);
    cResult[9] = tmp4;
    cResult[10] = tmp14;
    cResult[11] = tmp19;
    tmp17 = tmp19;
  }
  const tmpResult4 = PlatformUtils;
  if (tmpResult4.isAndroid()) {
    const obj7 = { style: tmp10.cancelIcon };
    tmp15Result = tmp15(tmp(6204).ArrowLargeLeftIcon, obj7);
  } else {
    const obj8 = { style: tmp10.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t["ETE/oC"]) };
    const Text = tmp(5088).Text;
    intl2 = tmp(1126).intl;
    tmp15Result = tmp15(Text, obj8);
  }
  cResult[6] = tmp10.cancelIcon;
  cResult[7] = tmp10.cancelText;
  cResult[8] = tmp15Result;
  tmp14 = tmp15Result;
}) : (function SearchBarNav(arg0) {
  let SearchField;
  let intl;
  let intl2;
  let items;
  let obj7;
  let obj8;
  let onClose;
  let ref;
  let tmp3Result;
  ({ onClose, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onClose: 0, ref: 0 }));
  const tmp2 = closure_7();
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t["ETE/oC"]), onPress: onClose, hitSlop: { top: 8, right: 8, bottom: 8, left: 8 }, children: tmp3Result };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl3.intl;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const obj3 = { style: tmp2.cancelIcon };
    tmp3Result = tmp3(tmp4(6204).ArrowLargeLeftIcon, obj3);
  } else {
    const obj4 = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t["ETE/oC"]) };
    const Text = tmp4(5088).Text;
    intl2 = tmp4(1126).intl;
    tmp3Result = tmp3(Text, obj4);
  }
  const tmp3Result2 = hasOwnProperty(PressableOpacity, obj);
  let tmp10 = null;
  const obj5 = { style: tmp2.container, children: items };
  const tmp4Result = PlatformUtils;
  const tmp8 = metroRequire;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result2;
  }
  items = [tmp10, , ];
  const obj6 = { style: tmp2.flex, children: hasOwnProperty(React3, obj7) };
  obj7 = { children: hasOwnProperty(SearchField, obj8) };
  obj8 = { size: "md", round: true, ref };
  SearchField = tmp4(6738).SearchField;
  const merged1 = Object.assign(merged);
  items[1] = hasOwnProperty(React3, obj6);
  let tmp12 = null;
  const tmp4Result2 = PlatformUtils;
  if (!tmp4Result2.isAndroid()) {
    tmp12 = tmp3Result2;
  }
  items[2] = tmp12;
  return tmp8(React3, obj5);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default tmp6;
