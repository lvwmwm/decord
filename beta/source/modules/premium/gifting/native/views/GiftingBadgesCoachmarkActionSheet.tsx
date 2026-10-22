// Module ID: 18094
// Function ID: 18095
// Name: GiftingBadgesCoachmarkActionSheet
// Dependencies: [19, 17, 8590, 2065, 21, 5191, 587, 558, 576, 10406, 5155, 5073, 10409, 1128, 2685, 5187, 5479, 7118, 10350, 7155, 18095, 5128, 12668, 8582, 504, 2]

// Module 18094 (GiftingBadgesCoachmarkActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2065 */;
import _modDef2685 from "module_2685" /* 2685 */;
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import FastImageDefault from "FastImage" /* 5128 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7155 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10350 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10409 */;
import _modDef18095 from "module_18095" /* 18095 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8590 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, hideActionSheetResult, navigateResult, tmp2;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let tmp;
const get_initialized = tmp(504);
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, graphicContainer: size, newBadgeImage: { width: "100%", height: "100%", resizeMode: "contain" }, textContainer: obj3, text: { textAlign: "center" }, footer: { width: "100%" } };
obj2 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function HasBadgeCoachmark(markAsDismissed) {
  let currentTier;
  let giftCount;
  let items;
  let text;
  let textContainer;
  let tmp5;
  let variant;
  let obj = markAsDismissed(576);
  const cResult = obj.c(40);
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount, variant } = markAsDismissed);
  const tmp4 = closure_9();
  if (cResult[0] !== currentTier) {
    const tmpResult = markAsDismissed(10406);
    const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(currentTier);
    cResult[0] = currentTier;
    cResult[1] = giftingBadgeTierIconUrl;
    tmp5 = giftingBadgeTierIconUrl;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== markAsDismissed) {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[4] !== markAsDismissed) {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    cResult[4] = markAsDismissed;
    cResult[5] = tmp9;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[6] !== tmp5) {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    let tmp11 = null != tmp5;
    if (tmp11) {
      class S {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          obj2 = closure_0(closure_2[11]);
          rootNavigationRef = obj2.getRootNavigationRef();
          if (rootNavigationRef != null) {
            str = "you";
            navigateResult = rootNavigationRef.navigate("you");
          }
          return;
        }
      }
      let obj2 = { icon: tmp5, size: 120 };
      tmp11 = closure_7(GiftingBadgeIconDefault, obj2);
    }
    cResult[6] = tmp5;
    cResult[7] = tmp11;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[8] === tmp4.graphicContainer) {
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_0(closure_2[11]);
        rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    ({ textContainer, text } = tmp4);
    if (cResult[11] !== currentTier.name) {
      class S {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          obj2 = closure_0(closure_2[11]);
          rootNavigationRef = obj2.getRootNavigationRef();
          if (rootNavigationRef != null) {
            str = "you";
            navigateResult = rootNavigationRef.navigate("you");
          }
          return;
        }
      }
      const format = tmp15.format;
      const name = currentTier.name;
      const prop = _modDef2685["a+jfuy"];
      if (name == null) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            obj2 = closure_0(closure_2[11]);
            rootNavigationRef = obj2.getRootNavigationRef();
            if (rootNavigationRef != null) {
              str = "you";
              navigateResult = rootNavigationRef.navigate("you");
            }
            return;
          }
        }
      }
      const obj3 = { tierName: name };
      cResult[11] = currentTier.name;
      cResult[12] = format(prop, obj3);
      const formatResult = format(prop, obj3);
    } else {
      class S {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          obj2 = closure_0(closure_2[11]);
          rootNavigationRef = obj2.getRootNavigationRef();
          if (rootNavigationRef != null) {
            str = "you";
            navigateResult = rootNavigationRef.navigate("you");
          }
          return;
        }
      }
    }
    if (cResult[13] === tmp4.text) {
      let stringResult;
      class S {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          obj2 = closure_0(closure_2[11]);
          rootNavigationRef = obj2.getRootNavigationRef();
          if (rootNavigationRef != null) {
            str = "you";
            navigateResult = rootNavigationRef.navigate("you");
          }
          return;
        }
      }
      if (cResult[16] === giftCount) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            obj2 = closure_0(closure_2[11]);
            rootNavigationRef = obj2.getRootNavigationRef();
            if (rootNavigationRef != null) {
              str = "you";
              navigateResult = rootNavigationRef.navigate("you");
            }
            return;
          }
        }
        if (cResult[19] === tmp4.text) {
          class S {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
          if (cResult[22] === tmp4.textContainer) {
            class S {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                obj2 = closure_0(closure_2[11]);
                rootNavigationRef = obj2.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "you";
                  navigateResult = rootNavigationRef.navigate("you");
                }
                return;
              }
            }
          }
          const obj4 = { style: textContainer, children: items };
          items = [tmp20, tmp30];
          cResult[22] = tmp4.textContainer;
          cResult[23] = tmp20;
          cResult[24] = tmp30;
          cResult[25] = closure_8(View, obj4);
          const tmp36 = closure_8(View, obj4);
        }
        const obj5 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp23 };
        cResult[19] = tmp4.text;
        cResult[20] = tmp23;
        cResult[21] = closure_7(markAsDismissed(5187).Text, obj5);
        const tmp32 = closure_7(markAsDismissed(5187).Text, obj5);
      }
      if ("noCount" === variant) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            obj2 = closure_0(closure_2[11]);
            rootNavigationRef = obj2.getRootNavigationRef();
            if (rootNavigationRef != null) {
              str = "you";
              navigateResult = rootNavigationRef.navigate("you");
            }
            return;
          }
        }
        stringResult = obj8.string(_modDef2685["0N8fCf"]);
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            obj2 = closure_0(closure_2[11]);
            rootNavigationRef = obj2.getRootNavigationRef();
            if (rootNavigationRef != null) {
              str = "you";
              navigateResult = rootNavigationRef.navigate("you");
            }
            return;
          }
        }
        const formatToPlainString = tmp24.formatToPlainString;
        const QxRA6w = _modDef2685.QxRA6w;
        const tmp27 = giftCount;
        if (giftCount == null) {
          class S {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
        }
        const obj6 = { giftCount: tmp27 };
        stringResult = formatToPlainString(QxRA6w, obj6);
      }
      cResult[16] = giftCount;
      cResult[17] = variant;
      cResult[18] = stringResult;
    }
    const obj7 = { style: text, variant: "heading-xl/bold", color: "text-strong", children: tmp14 };
    cResult[13] = tmp4.text;
    cResult[14] = tmp14;
    cResult[15] = closure_7(markAsDismissed(5187).Text, obj7);
    const tmp22 = closure_7(markAsDismissed(5187).Text, obj7);
  }
  const obj9 = { style: tmp4.graphicContainer, children: tmp10 };
  cResult[8] = tmp4.graphicContainer;
  cResult[9] = tmp10;
  cResult[10] = closure_7(View, obj9);
  closure_7(View, obj9);
}) : (function HasBadgeCoachmark(markAsDismissed) {
  let Button;
  let currentTier;
  let format;
  let giftCount;
  let intl4;
  let items2;
  let items3;
  let obj11;
  let obj3;
  let prop;
  let str;
  let stringResult;
  let tmp7Result;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const variant = markAsDismissed.variant;
  const tmp = closure_9();
  let obj = markAsDismissed(10406);
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(currentTier);
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj2 = RootNavigationRef;
    const rootNavigationRef = obj2.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj2 = { startExpanded: true, onDismiss: callback1, children: closure_8(View, obj3) };
  const obj4 = { style: tmp.graphicContainer, children: tmp7Result };
  tmp7Result = null != giftingBadgeTierIconUrl;
  obj3 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(7118).BottomSheet;
  if (tmp7Result) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp7Result = tmp7(GiftingBadgeIconDefault, obj5);
  }
  items2 = [closure_7(View, obj4), , ];
  const obj6 = { style: tmp.textContainer, children: items3 };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: format(prop, { tierName: str }) };
  const Text = tmp2(5187).Text;
  const intl = tmp2(1128).intl;
  format = intl.format;
  str = currentTier.name;
  prop = _modDef2685["a+jfuy"];
  if (str == null) {
    str = "";
  }
  items3 = [closure_7(Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text2 = tmp2(5187).Text;
  if ("noCount" === variant) {
    const intl3 = tmp2(1128).intl;
    stringResult = intl3.string(tmp12(2685)["0N8fCf"]);
  } else {
    const intl2 = tmp2(1128).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const QxRA6w = tmp12(2685).QxRA6w;
    if (giftCount == null) {
      giftCount = 0;
    }
    const obj9 = { giftCount };
    stringResult = formatToPlainString(QxRA6w, obj9);
  }
  items3[1] = closure_7(Text2, obj8);
  items2[1] = closure_8(View, obj6);
  const obj10 = { style: tmp.footer, children: closure_7(Button, obj11) };
  obj11 = { grow: true, text: intl4.string(markAsDismissed(1128).t.RzWDqY), onPress: callback };
  Button = tmp2(5479).Button;
  intl4 = tmp2(1128).intl;
  items2[2] = closure_7(View, obj10);
  return closure_7(BottomSheet, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewBadgeCoachmark(markAsDismissed) {
  let items;
  let text;
  let textContainer;
  let tmp7;
  let obj = markAsDismissed(576);
  const cResult = obj.c(35);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  if (cResult[0] !== markAsDismissed) {
    const fn = function o() {
      let items;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj2 = { analyticsLocations: items };
      const openGiftModal = utils_openGiftModal.openGiftModal;
      items = [];
      utils_openGiftModal;
      items[0] = AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK;
      openGiftModal(obj2);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
  }
  if (cResult[2] !== markAsDismissed) {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = C;
  } else {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp8[0] = _modDef18095;
    cResult[4] = tmp8;
    tmp7 = tmp8;
  } else {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[5] !== tmp4.newBadgeImage) {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    let obj2 = { source: tmp7, style: tmp4.newBadgeImage };
    cResult[5] = tmp4.newBadgeImage;
    cResult[6] = closure_7(FastImageDefault, obj2);
    const tmp12 = closure_7(FastImageDefault, obj2);
  } else {
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[7] === tmp4.graphicContainer) {
    let tmp14;
    let tmp19;
    class C {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const _Symbol = Symbol;
    ({ textContainer, text } = tmp4);
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult = obj4.string(_modDef2685.Q2RQka);
      cResult[10] = stringResult;
      tmp14 = stringResult;
    } else {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[11] !== tmp4.text) {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj3 = { style: text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp14 };
      cResult[11] = tmp4.text;
      cResult[12] = closure_7(markAsDismissed(5187).Text, obj3);
      const tmp18 = closure_7(markAsDismissed(5187).Text, obj3);
    } else {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol2 = Symbol;
    const text2 = tmp4.text;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult1 = obj6.string(_modDef2685["3EQnkg"]);
      cResult[13] = stringResult1;
      tmp19 = stringResult1;
    } else {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[14] !== tmp4.text) {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj5 = { style: text2, variant: "text-sm/medium", color: "text-muted", children: tmp19 };
      cResult[14] = tmp4.text;
      cResult[15] = closure_7(markAsDismissed(5187).Text, obj5);
      const tmp23 = closure_7(markAsDismissed(5187).Text, obj5);
    } else {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[16] === tmp4.textContainer) {
      class C {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const obj7 = { style: textContainer, children: items };
    items = [tmp17, tmp22];
    cResult[16] = tmp4.textContainer;
    cResult[17] = tmp17;
    cResult[18] = tmp22;
    cResult[19] = closure_8(View, obj7);
    const tmp27 = closure_8(View, obj7);
  }
  const obj8 = { style: tmp4.graphicContainer, children: tmp10 };
  cResult[7] = tmp4.graphicContainer;
  cResult[8] = tmp10;
  cResult[9] = closure_7(View, obj8);
  closure_7(View, obj8);
}) : (function NewBadgeCoachmark(markAsDismissed) {
  let Button;
  let GiftIcon;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj10;
  let obj11;
  let obj2;
  let obj4;
  let obj5;
  let tmp4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    let items;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj2 = { analyticsLocations: items };
    const openGiftModal = utils_openGiftModal.openGiftModal;
    items = [];
    utils_openGiftModal;
    items[0] = AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK;
    openGiftModal(obj2);
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: closure_8(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.graphicContainer, children: closure_7(tmp4, obj4) };
  BottomSheet = markAsDismissed(7118).BottomSheet;
  obj4 = { source: obj5, style: tmp.newBadgeImage };
  obj5 = { uri: _modDef18095 };
  tmp4 = FastImageDefault;
  items2 = [closure_7(View, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: items3 };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(_modDef2685.Q2RQka) };
  const Text = markAsDismissed(5187).Text;
  intl = markAsDismissed(1128).intl;
  items3 = [closure_7(Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: intl2.string(_modDef2685["3EQnkg"]) };
  const Text2 = markAsDismissed(5187).Text;
  intl2 = markAsDismissed(1128).intl;
  items3[1] = closure_7(Text2, obj8);
  items2[1] = closure_8(View, obj6);
  const obj9 = { style: tmp.footer, children: closure_7(Button, obj10) };
  obj10 = { grow: true, text: intl3.string(_modDef2685.DZnomS), icon: closure_7(GiftIcon, obj11), onPress: callback };
  Button = markAsDismissed(5479).Button;
  intl3 = markAsDismissed(1128).intl;
  obj11 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = markAsDismissed(12668).GiftIcon;
  items2[2] = closure_7(View, obj9);
  return closure_7(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgesCoachmarkActionSheet(arg0) {
  let currentTier;
  let giftCount;
  let markAsDismissed;
  let tmp4;
  let tmp5;
  let tmp8;
  let variant;
  let obj = react2;
  const cResult = obj.c(9);
  ({ markAsDismissed, variant } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BadgeDirectoryStore];
    const fn = function s() {
      let current;
      const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING), giftCount: current };
      const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(require("BadgeId").BadgeId.GIFTING);
      current = undefined;
      if (singleRequirementProgress != null) {
        current = singleRequirementProgress.current;
      }
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ currentTier, giftCount } = stateFromStoresObject);
  if (null != currentTier) {
    if (cResult[2] === currentTier) {
      if (cResult[3] === giftCount) {
        if (cResult[4] === markAsDismissed) {
          let tmp12;
          if (cResult[5] === variant) {
            tmp12 = cResult[6];
          }
          tmp8 = tmp12;
        }
      }
    }
    const obj2 = { markAsDismissed, currentTier, giftCount, variant };
    const tmp15 = metroImportDefault(closure_10, obj2);
    cResult[2] = currentTier;
    cResult[3] = giftCount;
    cResult[4] = markAsDismissed;
    cResult[5] = variant;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  } else if (cResult[7] !== markAsDismissed) {
    const obj3 = { markAsDismissed };
    const tmp11 = metroImportDefault(closure_11, obj3);
    cResult[7] = markAsDismissed;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[8];
  }
  return tmp8;
}) : (function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  let tmp5;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const variant = markAsDismissed.variant;
  let obj = get_initialized;
  const items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let current;
    const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING), giftCount: current };
    const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(require("BadgeId").BadgeId.GIFTING);
    current = undefined;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2, variant };
    tmp5 = metroImportDefault(closure_10, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = metroImportDefault(closure_11, obj3);
  }
  return tmp5;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default tmp4;
