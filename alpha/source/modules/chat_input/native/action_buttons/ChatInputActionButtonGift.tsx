// Module ID: 13791
// Function ID: 13792
// Name: ChatInputActionButtonGift
// Dependencies: [32, 19, 17, 5015, 9626, 12806, 4860, 21, 5014, 575, 504, 10609, 2026, 13792, 7569, 4847, 13793, 13350, 1113, 5587, 12802, 4848, 13794, 2]

// Module 13791 (ChatInputActionButtonGift)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4848 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ChatInputConstants from "ChatInputConstants" /* 12806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let unpackModuleId;
const View = react_native.View;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = { gradientContainerRefresh: rect, transparentBackground: { backgroundColor: "transparent" } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
  return obj;
});
const memoResult = react.memo(function ChatInputActionButtonGift(arg0) {
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
  const tmp2Result = tmp2(tmp3[12]);
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  const tmp2Result3 = tmp2(tmp3[12]);
  let tmp32Result = !tmp2Result3.isNullOrEmpty(trinketAnimationUrl) && !tmp12;
  tmp2Result3.isNullOrEmpty(trinketAnimationUrl);
  const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = tmp2(tmp3[13]).GiftingPromoMobileButtonAnimationDismissHoldoutExperiment;
  inHoldout = GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.useConfig({ location: "ChatInputActionButtonGift" }).inHoldout;
  [tmp17, c6] = stateFromStores1(obj.useState(false), 2);
  stateFromStores1(obj.useState(false), 2);
  const useSelectedSnowflakeBoundDismissibleContent = tmp2(tmp3[14]).useSelectedSnowflakeBoundDismissibleContent;
  tmp2(tmp3[14]);
  const tmp15 = stateFromStores1;
  if (!isNullOrEmptyResult) {
    prop = null;
    if (!tmp17) {
      prop = tmp2(tmp3[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp15Result = tmp15(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  closure_7 = tmp21;
  const tmp22 = tmp15Result[0] === tmp2(tmp3[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
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
      IconComponent: tmp2(tmp3[17]).GiftIcon,
      accessible,
      accessibilityLabel: intl2.string(tmp2(tmp3[18]).t.Z1RnTk)
    };
    const PremiumAnimatedGiftButton = tmp2(tmp3[16]).PremiumAnimatedGiftButton;
    intl2 = tmp2(tmp3[18]).intl;
    tmp26Result = callback(PremiumAnimatedGiftButton, obj6);
    tmp32 = callback;
  } else {
    let tmp29Result = transparentBackground;
    if (tmp29Result) {
      const obj7 = { style: tmp5.gradientContainerRefresh, useAngle: true, angle: num2, angleCenter: { x: 0.5, y: 0.5 }, colors: gradient.colors };
      num2 = gradient.angle;
      const tmp29 = callback;
      const tmp31 = ref(tmp3[19]);
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
      accessibilityLabel: intl.string(tmp2(tmp3[18]).t.Z1RnTk),
      active: false,
      IconComponent: tmp2(tmp3[17]).GiftIcon,
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
    const tmp34 = ref(tmp3[20]);
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    const obj9 = { children: items6 };
    items7[1] = transparentBackground;
    intl = tmp2(tmp3[18]).intl;
    items6[1] = tmp32(tmp34, obj8);
    tmp26Result = tmp26(tmp27, obj9);
  }
  items8 = [tmp26Result, ];
  if (tmp32Result) {
    const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp32Result = tmp32(tmp2(tmp3[22]).GiftIconTrinketsAnimation, obj10);
  }
  items8[1] = tmp32Result;
  return closure_11(inHoldout, obj5);
});
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;
