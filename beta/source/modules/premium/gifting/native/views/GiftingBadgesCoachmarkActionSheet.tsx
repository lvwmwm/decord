// Module ID: 17408
// Function ID: 17409
// Name: GiftingBadgesCoachmarkActionSheet
// Dependencies: [19, 17, 8466, 2042, 21, 4758, 580, 558, 568, 11041, 4725, 4617, 11046, 1119, 2582, 4754, 5188, 7397, 10959, 7429, 17409, 11330, 8458, 504, 2]

// Module 17408 (GiftingBadgesCoachmarkActionSheet)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef2582 from "module_2582" /* 2582 */;
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import BadgeId from "BadgeId" /* 8458 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10959 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 11046 */;
import _modDef17409 from "module_17409" /* 17409 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 }, graphicContainer: null, newBadgeImage: null, textContainer: null, text: null, footer: null };
let size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj2.graphicContainer = size;
obj2.newBadgeImage = { width: "100%", height: "100%", objectFit: "contain" };
let obj3 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
obj2.footer = { width: "100%" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(568).c(40);
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp4 = closure_10();
  let obj = markAsDismissed(568);
  const isGiftingBadgeComplexArtEnabled = markAsDismissed(11041).useIsGiftingBadgeComplexArtEnabled("GiftingBadgesCoachmarkActionSheet");
  if (cResult[0] === currentTier) {
    if (cResult[1] === isGiftingBadgeComplexArtEnabled) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== markAsDismissed) {
      const fn = function y() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      };
      cResult[3] = markAsDismissed;
      cResult[4] = fn;
    }
    if (cResult[5] !== markAsDismissed) {
      class A {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[5] = markAsDismissed;
      cResult[6] = A;
    } else {
      class A {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const container = tmp4.container;
    if (cResult[7] !== tmp6) {
      class A {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      let tmp11 = null != tmp6;
      if (tmp11) {
        class A {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj3 = { icon: tmp6, size: 120 };
        tmp11 = closure_8(GiftingBadgeIconDefault, obj3);
      }
      cResult[7] = tmp6;
      cResult[8] = tmp11;
    } else {
      class A {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[9] === tmp4.graphicContainer) {
      class A {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      ({ textContainer, text } = tmp4);
      if (cResult[12] !== currentTier.name) {
        class A {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const name = currentTier.name;
        if (name == null) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        const obj4 = { tierName: name };
        const formatResult = obj6.format(_modDef2582["a+jfuy"], obj4);
        cResult[12] = currentTier.name;
        cResult[13] = formatResult;
      } else {
        class A {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[14] === tmp4.text) {
        class A {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        if (cResult[17] !== giftCount) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (giftCount == null) {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const obj5 = { giftCount };
          const formatToPlainStringResult = obj9.formatToPlainString(_modDef2582.QxRA6w, obj5);
          cResult[17] = giftCount;
          cResult[18] = formatToPlainStringResult;
        } else {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[19] === tmp4.text) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (cResult[22] === tmp4.textContainer) {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const obj7 = { style: textContainer, children: null };
          const items = [tmp21, tmp29];
          obj7.children = items;
          const tmp35 = closure_9(closure_5, obj7);
          cResult[22] = tmp4.textContainer;
          cResult[23] = tmp21;
          cResult[24] = tmp29;
          cResult[25] = tmp35;
        }
        const obj8 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp24 };
        const tmp31 = closure_8(tmp(4754).Text, obj8);
        cResult[19] = tmp4.text;
        cResult[20] = tmp24;
        cResult[21] = tmp31;
      }
      const obj10 = { style: text, variant: "heading-xl/bold", color: "text-strong", children: tmp17 };
      const tmp23 = closure_8(tmp(4754).Text, obj10);
      cResult[14] = tmp4.text;
      cResult[15] = tmp17;
      cResult[16] = tmp23;
    }
    const obj11 = { style: tmp4.graphicContainer, children: tmp10 };
    const tmp16 = closure_8(closure_5, obj11);
    cResult[9] = tmp4.graphicContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp16;
  }
  const obj2 = markAsDismissed(11041);
  const giftingBadgeTierIconUrl = markAsDismissed(11041).getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  cResult[0] = currentTier;
  cResult[1] = isGiftingBadgeComplexArtEnabled;
  cResult[2] = giftingBadgeTierIconUrl;
  tmp6 = giftingBadgeTierIconUrl;
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = closure_10();
  const isGiftingBadgeComplexArtEnabled = markAsDismissed(11041).useIsGiftingBadgeComplexArtEnabled("GiftingBadgesCoachmarkActionSheet");
  let obj = markAsDismissed(11041);
  const giftingBadgeTierIconUrl = markAsDismissed(11041).getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const obj3 = { startExpanded: true, onDismiss: callback1, children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.graphicContainer, children: null };
  let tmp8Result = null != giftingBadgeTierIconUrl;
  if (tmp8Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp8Result = tmp8(GiftingBadgeIconDefault, obj6);
  }
  obj5.children = tmp8Result;
  const items2 = [closure_8(closure_5, obj5), , ];
  const obj7 = { style: tmp.textContainer, children: null };
  const obj8 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp2(1119).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj8.children = intl.format(_modDef2582["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4754).Text, obj8), ];
  const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1119).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj9.children = intl2.formatToPlainString(_modDef2582.QxRA6w, { giftCount });
  items3[1] = closure_8(markAsDismissed(4754).Text, obj9);
  obj7.children = items3;
  items2[1] = closure_9(closure_5, obj7);
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { grow: true, text: null, onPress: null };
  const intl3 = tmp2(1119).intl;
  obj11.text = intl3.string(markAsDismissed(1119).t.RzWDqY);
  obj11.onPress = callback;
  obj10.children = closure_8(markAsDismissed(5188).Button, obj11);
  items2[2] = closure_8(closure_5, obj10);
  obj4.children = items2;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(markAsDismissed(7397).BottomSheet, obj3);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(568).c(35);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_10();
  if (cResult[0] !== markAsDismissed) {
    const fn = function n() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj3 = { analyticsLocations: null };
      const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
      obj3.analyticsLocations = items;
      utils_openGiftModal.openGiftModal(obj3);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
  }
  if (cResult[2] !== markAsDismissed) {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp8[0] = _modDef17409;
    cResult[4] = tmp8;
    const tmp7 = tmp8;
  } else {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[5] !== tmp4.newBadgeImage) {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const obj2 = { source: tmp7, style: tmp4.newBadgeImage };
    const tmp12 = closure_8(closure_4, obj2);
    cResult[5] = tmp4.newBadgeImage;
    cResult[6] = tmp12;
  } else {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[7] === tmp4.graphicContainer) {
    class I {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const _Symbol = Symbol;
    ({ textContainer, text } = tmp4);
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const stringResult = obj4.string(_modDef2582.Q2RQka);
      cResult[10] = stringResult;
      const tmp14 = stringResult;
    } else {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[11] !== tmp4.text) {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      let obj3 = { style: text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp14 };
      const tmp18 = closure_8(tmp(4754).Text, obj3);
      cResult[11] = tmp4.text;
      cResult[12] = tmp18;
    } else {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const stringResult1 = obj6.string(_modDef2582["3EQnkg"]);
      cResult[13] = stringResult1;
      const tmp19 = stringResult1;
    } else {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[14] !== tmp4.text) {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const obj5 = { style: tmp4.text, variant: "text-sm/medium", color: "text-muted", children: tmp19 };
      const tmp23 = closure_8(tmp(4754).Text, obj5);
      cResult[14] = tmp4.text;
      cResult[15] = tmp23;
    } else {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[16] === tmp4.textContainer) {
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const obj7 = { style: textContainer, children: null };
    let items = [tmp17, tmp22];
    obj7.children = items;
    const tmp27 = closure_9(closure_5, obj7);
    cResult[16] = tmp4.textContainer;
    cResult[17] = tmp17;
    cResult[18] = tmp22;
    cResult[19] = tmp27;
  }
  let obj = markAsDismissed(568);
  const obj8 = { style: tmp4.graphicContainer, children: tmp10 };
  cResult[7] = tmp4.graphicContainer;
  cResult[8] = tmp10;
  cResult[9] = closure_8(closure_5, { style: tmp4.graphicContainer, children: tmp10 });
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj3 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
    obj3.analyticsLocations = items;
    utils_openGiftModal.openGiftModal(obj3);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { style: tmp.graphicContainer, children: null };
  const obj4 = { source: { uri: _modDef17409 }, style: tmp.newBadgeImage };
  obj3.children = closure_8(closure_4, obj4);
  const items2 = [closure_8(closure_5, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1119).intl;
  obj7.children = intl.string(_modDef2582.Q2RQka);
  const items3 = [closure_8(markAsDismissed(4754).Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1119).intl;
  obj8.children = intl2.string(_modDef2582["3EQnkg"]);
  items3[1] = closure_8(markAsDismissed(4754).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1119).intl;
  obj10.text = intl3.string(_modDef2582.DZnomS);
  const obj5 = { uri: _modDef17409 };
  obj10.icon = closure_8(markAsDismissed(11330).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj10.onPress = callback;
  obj9.children = closure_8(markAsDismissed(5188).Button, obj10);
  items2[2] = closure_8(closure_5, obj9);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(markAsDismissed(7397).BottomSheet, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = c.c(8);
  markAsDismissed = markAsDismissed.markAsDismissed;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BadgeDirectoryStore];
    const fn = function o() {
      const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(BadgeId.BadgeId.GIFTING), giftCount: null };
      const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(BadgeId.BadgeId.GIFTING);
      let current;
      if (singleRequirementProgress != null) {
        current = singleRequirementProgress.current;
      }
      obj.giftCount = current;
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  ({ currentTier, giftCount } = stateFromStoresObject);
  if (null != currentTier) {
    if (cResult[2] === currentTier) {
      if (cResult[3] === giftCount) {
      }
    }
    const obj2 = { markAsDismissed, currentTier, giftCount };
    const tmp15 = closure_1_8(closure_11, obj2);
    cResult[2] = currentTier;
    cResult[3] = giftCount;
    cResult[4] = markAsDismissed;
    cResult[5] = tmp15;
  } else {
    if (cResult[6] !== markAsDismissed) {
      const obj3 = { markAsDismissed };
      const tmp11 = closure_1_8(closure_12, obj3);
      cResult[6] = markAsDismissed;
      cResult[7] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[7];
    }
    return tmp8;
  }
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [BadgeDirectoryStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(BadgeId.BadgeId.GIFTING), giftCount: null };
    const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(BadgeId.BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj.giftCount = current;
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = closure_1_8(closure_11, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = closure_1_8(closure_12, obj3);
  }
  return tmp5;
});
