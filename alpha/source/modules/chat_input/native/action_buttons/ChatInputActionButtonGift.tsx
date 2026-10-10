// Module ID: 11945
// Function ID: 11946
// Name: ChatInputActionButtonGift
// Dependencies: [32, 19, 17, 5081, 9121, 11634, 2062, 21, 5092, 587, 558, 576, 504, 10094, 2031, 11946, 7099, 2049, 11947, 11536, 1126, 5391, 11935, 2050, 11948, 2]

// Module 11945 (ChatInputActionButtonGift)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2050 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import ChatInputConstants from "ChatInputConstants" /* 11634 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import PromotionsStore_mod from "PromotionsStore" /* 9121 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let unpackModuleId;
const View = react_native.View;
let PromotionsStore = PromotionsStore_mod;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = { gradientContainerRefresh: rect, transparentBackground: { backgroundColor: "transparent" } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputActionButtonGift(arg0) {
  let accessible;
  let channel;
  let closure_7;
  let disabled;
  let onPress;
  let stateFromStores;
  let stateFromStores2;
  let style;
  let styleButton;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp21;
  let tmp31;
  let tmp5;
  let tmp6;
  let tmp = onPress;
  let tmp2 = stateFromStores;
  let obj = onPress(stateFromStores[11]);
  const cResult = obj.c(45);
  ({ accessible, disabled, channel, onPress } = arg0);
  ({ style, styleButton } = arg0);
  let obj2 = stateFromStores2;
  const ref = stateFromStores2.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class T {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp5 = items;
    tmp6 = T;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  closure_12();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    class T {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp13;
    tmp11 = tmp13;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[12]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PromotionsStore];
    class B {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    cResult[4] = items2;
    cResult[5] = B;
    tmp16 = B;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult7 = tmp(tmp2[12]);
  stateFromStores2 = tmpResult7.useStateFromStores(tmp15, tmp16);
  let boxAnimationUrl;
  if (stateFromStores1 != null) {
    boxAnimationUrl = stateFromStores1.boxAnimationUrl;
  }
  let trinketAnimationUrl;
  if (stateFromStores1 != null) {
    trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
  }
  if (stateFromStores1 != null) {
    const gradient = stateFromStores1.gradient;
  }
  if (cResult[6] !== boxAnimationUrl) {
    const tmpResult8 = tmp(tmp2[14]);
    const isNullOrEmptyResult = tmpResult8.isNullOrEmpty(boxAnimationUrl);
    class B {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    cResult[7] = isNullOrEmptyResult;
    tmp21 = isNullOrEmptyResult;
  } else {
    tmp21 = cResult[7];
  }
  let tmp23 = !tmp21;
  if (cResult[8] === tmp23) {
    let tmp24;
    let prop;
    if (cResult[9] === trinketAnimationUrl) {
      tmp24 = cResult[10];
    }
    const _Symbol = Symbol;
    class B {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = tmp(tmp2[15]).GiftingPromoMobileButtonAnimationDismissHoldoutExperiment;
    const inHoldout = GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.useConfig(tmp28).inHoldout;
    [tmp31, AccessibilityStore] = stateFromStores1(obj2.useState(false), 2);
    stateFromStores1(obj2.useState(false), 2);
    const useSelectedSnowflakeBoundDismissibleContent = tmp(tmp2[16]).useSelectedSnowflakeBoundDismissibleContent;
    const tmp29 = stateFromStores1;
    const tmpResult9 = tmp(tmp2[16]);
    if (!tmp21) {
      prop = null;
      if (!tmp31) {
        prop = tmp(tmp2[17]).DismissibleContent.GIFTING_PROMOTION_ICON;
      }
    } else {
      prop = null;
    }
    const tmp29Result = tmp29(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
    PromotionsStore = tmp38;
    const tmp39 = tmp29Result[0] === tmp(tmp2[17]).DismissibleContent.GIFTING_PROMOTION_ICON;
    if (!tmp21) {
      tmp23 = tmp39;
    }
    let closure_8 = tmp23;
    if (tmp24) {
      tmp24 = tmp39;
    }
    let closure_9 = tmp24;
    if (cResult[12] === inHoldout) {
      let tmp41;
      if (cResult[13] === tmp29Result[1]) {
        tmp41 = cResult[14];
      }
      let closure_10 = tmp41;
      if (cResult[15] !== tmp41) {
        function ie(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_10();
          }
        }
        cResult[15] = tmp41;
        class B {
          constructor() {
            const giftPromotion = closure_7.getGiftPromotion();
            let str;
            if (giftPromotion != null) {
              str = giftPromotion.id;
            }
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        cResult[16] = ie;
      }
      class B {
        constructor() {
          const giftPromotion = closure_7.getGiftPromotion();
          let str;
          if (giftPromotion != null) {
            str = giftPromotion.id;
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
      function se() {
        const timeout = setTimeout(closure_10, 7000);
        return () => clearTimeout(closure_0);
      }
      const items3 = [tmp23, tmp24, stateFromStores, tmp41];
      cResult[17] = tmp41;
      cResult[18] = tmp23;
      cResult[19] = tmp24;
      cResult[20] = stateFromStores;
      cResult[21] = se;
      cResult[22] = items3;
    }
    class Z {
      constructor() {
        AccessibilityStore(true);
        const tmp2 = inHoldout;
        if (!tmp2) {
          closure_7(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }
    cResult[12] = inHoldout;
    cResult[13] = tmp29Result[1];
    cResult[14] = Z;
    tmp41 = Z;
  }
  const tmpResult10 = tmp(tmp2[14]);
  const tmp26 = !tmpResult10.isNullOrEmpty(trinketAnimationUrl) && !tmp23;
  cResult[8] = tmp23;
  cResult[9] = trinketAnimationUrl;
  cResult[10] = tmp26;
  tmp24 = tmp26;
}) : (function ChatInputActionButtonGift(arg0) {
  let _undefined;
  let accessible;
  let c6;
  let channel;
  let disabled;
  let intl;
  let intl2;
  let items7;
  let items8;
  let num2;
  let prop;
  let style;
  let styleButton;
  let tmp17;
  let tmp26Result;
  let tmp32;
  ({ accessible, disabled, onPress: require } = arg0);
  let stateFromStores;
  let stateFromStores2;
  let inHoldout;
  c6 = undefined;
  let closure_7;
  let closure_8;
  let closure_9;
  let callback;
  let obj = stateFromStores2;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  let tmp2 = require;
  const tmp3 = stateFromStores;
  let obj2 = require("get initialized");
  const items = [c6];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined.useReducedMotion);
  const tmp5 = closure_12();
  const items1 = [closure_7];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const marketingComponentByType = closure_7.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_ICON);
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  const items2 = [closure_7];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const giftPromotion = closure_7.getGiftPromotion();
    let str;
    if (giftPromotion != null) {
      str = giftPromotion.id;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  let boxAnimationUrl;
  if (stateFromStores1 != null) {
    boxAnimationUrl = stateFromStores1.boxAnimationUrl;
  }
  let trinketAnimationUrl;
  if (stateFromStores1 != null) {
    trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
  }
  let gradient;
  if (stateFromStores1 != null) {
    gradient = stateFromStores1.gradient;
  }
  const tmp2Result = tmp2(tmp3[14]);
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  const tmp2Result3 = tmp2(tmp3[14]);
  let tmp32Result = !tmp2Result3.isNullOrEmpty(trinketAnimationUrl) && !tmp12;
  tmp2Result3.isNullOrEmpty(trinketAnimationUrl);
  const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = tmp2(tmp3[15]).GiftingPromoMobileButtonAnimationDismissHoldoutExperiment;
  inHoldout = GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.useConfig({ location: "ChatInputActionButtonGift" }).inHoldout;
  [tmp17, c6] = stateFromStores1(obj.useState(false), 2);
  stateFromStores1(obj.useState(false), 2);
  const useSelectedSnowflakeBoundDismissibleContent = tmp2(tmp3[16]).useSelectedSnowflakeBoundDismissibleContent;
  tmp2(tmp3[16]);
  const tmp15 = stateFromStores1;
  if (!isNullOrEmptyResult) {
    prop = null;
    if (!tmp17) {
      prop = tmp2(tmp3[17]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp15Result = tmp15(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  closure_7 = tmp21;
  const tmp22 = tmp15Result[0] === tmp2(tmp3[17]).DismissibleContent.GIFTING_PROMOTION_ICON;
  if (!isNullOrEmptyResult) {
    tmp12 = tmp22;
  }
  closure_8 = tmp12;
  if (tmp32Result) {
    tmp32Result = tmp22;
  }
  closure_9 = tmp32Result;
  let transparentBackground = null != gradient && gradient.colors.length > 0 && tmp32Result;
  const items3 = [inHoldout, tmp15Result[1]];
  callback = obj.useCallback(() => {
    _undefined(true);
    const tmp2 = inHoldout;
    if (!tmp2) {
      closure_7(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items3);
  const items4 = [callback];
  const items5 = [tmp12, tmp32Result, stateFromStores, callback];
  const callback1 = obj.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      callback();
    }
  }, items4);
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(callback, 7000);
    return () => clearTimeout(closure_0);
  }, items5);
  const obj5 = { style, children: items8 };
  if (tmp12) {
    const obj6 = {
      channelId: channel.id,
      animationDataUrl: boxAnimationUrl,
      disabled,
      active: false,
      loop: false,
      onPress(arg0) {
          closure_7(ContentDismissActionType.TAKE_ACTION);
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        },
      onAnimationFinished: callback1,
      IconComponent: tmp2(tmp3[19]).GiftIcon,
      accessible,
      accessibilityLabel: intl2.string(tmp2(tmp3[20]).t.Z1RnTk)
    };
    const PremiumAnimatedGiftButton = tmp2(tmp3[18]).PremiumAnimatedGiftButton;
    intl2 = tmp2(tmp3[20]).intl;
    tmp26Result = callback(PremiumAnimatedGiftButton, obj6);
    tmp32 = callback;
  } else {
    let tmp29Result = transparentBackground;
    if (tmp29Result) {
      const obj7 = { style: tmp5.gradientContainerRefresh, useAngle: true, angle: num2, angleCenter: { x: 0.5, y: 0.5 }, colors: gradient.colors };
      num2 = gradient.angle;
      const tmp29 = callback;
      const tmp31 = ref(tmp3[21]);
      if (num2 == null) {
        num2 = 180;
      }
      tmp29Result = tmp29(tmp31, obj7);
    }
    const items6 = [tmp29Result, ];
    tmp32 = callback;
    const obj8 = {
      ref,
      style: items7,
      disabled,
      accessible,
      accessibilityLabel: intl.string(tmp2(tmp3[20]).t.Z1RnTk),
      active: false,
      IconComponent: tmp2(tmp3[19]).GiftIcon,
      onPress(arg0) {
          if (null != stateFromStores1) {
            const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
            const obj = DismissibleContentUtils;
            const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj2);
          }
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        }
    };
    items7 = [styleButton, ];
    const tmp34 = ref(tmp3[22]);
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    const obj9 = { children: items6 };
    items7[1] = transparentBackground;
    intl = tmp2(tmp3[20]).intl;
    items6[1] = tmp32(tmp34, obj8);
    tmp26Result = tmp26(tmp27, obj9);
  }
  items8 = [tmp26Result, ];
  if (tmp32Result) {
    const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp32Result = tmp32(tmp2(tmp3[24]).GiftIconTrinketsAnimation, obj10);
  }
  items8[1] = tmp32Result;
  return closure_11(inHoldout, obj5);
}));
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;
