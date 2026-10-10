// Module ID: 16841
// Function ID: 16842
// Name: ForLaterOpenActionButton
// Dependencies: [19, 17, 9680, 21, 9016, 13000, 5092, 587, 558, 576, 5031, 4818, 5385, 9681, 5051, 12654, 504, 12643, 1126, 7573, 2]

// Module 16841 (ForLaterOpenActionButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4818 */;
import useThemeDefault from "useTheme" /* 5031 */;
import ButtonHooks from "ButtonHooks" /* 5385 */;
import ClipView from "ClipView" /* 9016 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9681 */;
import showForLaterModal from "showForLaterModal" /* 12643 */;
import getIconSize from "getIconSize" /* 13000 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
let size1;
let tmp4;
const ClipViewDefault = tmp4(9016);
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const point = { shape: ClipView.CutoutShape.Circle, x: getIconSize.ICON_SIZE.sm - 7, y: getIconSize.ICON_SIZE.sm - 8, size: 10 };
let createStyles = createStyles_mod;
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: size, dot: size1 };
size = { width: getIconSize.ICON_SIZE.sm, height: getIconSize.ICON_SIZE.sm, position: "relative" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function BadgedIcon(arg0) {
  let BookmarkIcon;
  let items;
  let items1;
  let obj7;
  let showRedDot;
  let type;
  const obj = react2;
  const cResult = obj.c(12);
  ({ showRedDot, type } = arg0);
  const tmp5 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp5);
  const tmp7 = closure_9();
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    BookmarkIcon = tmp(5051).ClockIcon;
  } else {
    BookmarkIcon = tmp(12654).BookmarkIcon;
  }
  if (cResult[0] === iconSizeStyles) {
    let tmp9;
    let tmp12;
    if (cResult[1] === tmp7.container) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === BookmarkIcon) {
      if (cResult[4] === showRedDot) {
        if (cResult[5] === tmp7.dot) {
          if (cResult[6] === tmp7.iconAnchor) {
            let tmp10;
            if (cResult[7] === token) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              let tmp18;
              if (cResult[10] === tmp10) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
            const obj4 = { style: tmp9, children: tmp10 };
            const tmp21 = metroRequire(View, obj4);
            cResult[9] = tmp9;
            cResult[10] = tmp10;
            cResult[11] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
    }
    if (showRedDot) {
      const obj5 = { style: tmp7.iconAnchor, children: items1 };
      const obj6 = { cutouts: items, children: metroRequire(BookmarkIcon, obj7) };
      items = [point];
      obj7 = { size: "sm", color: token };
      const tmp4Result = ClipViewDefault;
      items1 = [metroRequire(tmp4Result, obj6), ];
      const obj8 = { style: tmp7.dot };
      items1[1] = metroRequire(View, obj8);
      tmp12 = metroImportDefault(View, obj5);
    } else {
      const obj9 = { size: "sm", color: token };
      tmp12 = metroRequire(BookmarkIcon, obj9);
    }
    cResult[3] = BookmarkIcon;
    cResult[4] = showRedDot;
    cResult[5] = tmp7.dot;
    cResult[6] = tmp7.iconAnchor;
    cResult[7] = token;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const items2 = [tmp7.container, iconSizeStyles];
  cResult[0] = iconSizeStyles;
  cResult[1] = tmp7.container;
  cResult[2] = items2;
  tmp9 = items2;
}) : (function BadgedIcon(arg0) {
  let BookmarkIcon;
  let items;
  let items1;
  let items2;
  let obj6;
  let showRedDot;
  let tmp8Result;
  let type;
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const obj2 = ButtonHooks;
  const iconSizeStyles = obj2.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    BookmarkIcon = tmp4(5051).ClockIcon;
  } else {
    BookmarkIcon = tmp4(12654).BookmarkIcon;
  }
  const obj3 = { style: items, children: tmp8Result };
  items = [tmp6.container, iconSizeStyles];
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: items2 };
    const obj5 = { cutouts: items1, children: metroRequire(BookmarkIcon, obj6) };
    items1 = [point];
    obj6 = { size: "sm", color: token };
    const tmpResult = ClipViewDefault;
    items2 = [metroRequire(tmpResult, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = metroRequire(View, obj7);
    tmp8Result = metroImportDefault(tmp9, obj4);
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = tmp8(BookmarkIcon, obj8);
  }
  return metroRequire(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterActionButton(type) {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = type(576);
  const cResult = obj.c(18);
  type = type.type;
  const onOpen = type.onOpen;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function l() {
      return SavedMessagesStore.hasOverdueReminder();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  type(504);
  if (cResult[3] === onOpen) {
    let tmp10;
    if (cResult[4] === type) {
      tmp10 = cResult[5];
    }
    const tmp11 = type === type(9681).SavedMessageSortTypes.REMINDER && tmp9;
    if (cResult[6] === tmp11) {
      let tmp12;
      let tmp16;
      if (cResult[7] === type) {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== type) {
        let aUXxzT;
        const intl = tmp(1126).intl;
        const string = intl.string;
        if (type === type(9681).SavedMessageSortTypes.REMINDER) {
          aUXxzT = tmp(1126).t.aUXxzT;
        } else {
          aUXxzT = tmp(1126).t["2pAkDA"];
        }
        const stringResult = string(aUXxzT);
        cResult[9] = type;
        cResult[10] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp10) {
        if (cResult[12] === tmp12) {
          let tmp19;
          if (cResult[13] === tmp16) {
            tmp19 = cResult[14];
          }
          if (cResult[15] === type.ref) {
            let tmp22;
            if (cResult[16] === tmp19) {
              tmp22 = cResult[17];
            }
            return tmp22;
          }
          const obj2 = { ref: type.ref, children: tmp19 };
          const tmp25 = closure_6(View, obj2);
          cResult[15] = type.ref;
          cResult[16] = tmp19;
          cResult[17] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj3 = { variant: "tertiary", size: "sm", icon: tmp12, onPress: tmp10, accessibilityLabel: tmp16, maxFontSizeMultiplier: 2 };
      const tmp21 = closure_6(type(7573).IconButton, obj3);
      cResult[11] = tmp10;
      cResult[12] = tmp12;
      cResult[13] = tmp16;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    }
    const obj4 = { type, showRedDot: tmp11 };
    const tmp15 = closure_6(closure_10, obj4);
    cResult[6] = tmp11;
    cResult[7] = type;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  class E {
    constructor() {
      onOpen();
      const obj = showForLaterModal;
      obj.showForLaterModal(type);
    }
  }
  cResult[3] = onOpen;
  cResult[4] = type;
  cResult[5] = E;
  tmp10 = E;
}) : (function ForLaterActionButton(type) {
  let IconButton;
  let aUXxzT;
  let obj4;
  let string;
  let tmp8;
  type = type.type;
  const onOpen = type.onOpen;
  const ref = type.ref;
  let obj = type(504);
  const items = [SavedMessagesStore];
  const items1 = [onOpen, type];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const obj2 = { ref, children: closure_6(IconButton, obj4) };
  const callback = react.useCallback(() => {
    onOpen();
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  }, items1);
  const obj3 = { type, showRedDot: tmp8 };
  IconButton = type(7573).IconButton;
  tmp8 = type === type(9681).SavedMessageSortTypes.REMINDER && stateFromStores;
  obj4 = { variant: "tertiary", size: "sm", icon: closure_6(closure_10, obj3), onPress: callback, accessibilityLabel: string(aUXxzT), maxFontSizeMultiplier: 2 };
  const intl = tmp(1126).intl;
  string = intl.string;
  const tmp6 = View;
  if (type === type(9681).SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp(1126).t.aUXxzT;
  } else {
    aUXxzT = tmp(1126).t["2pAkDA"];
  }
  return closure_6(tmp6, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default tmp4;
