// Module ID: 11730
// Function ID: 11731
// Name: ChatInputActionButtonGift
// Dependencies: [32, 19, 17, 4825, 10128, 11444, 2042, 21, 4836, 576, 504, 10203, 2011, 6806, 2029, 11731, 10496, 1115, 5293, 11721, 2031, 11732, 2]

// Module 11730 (ChatInputActionButtonGift)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let _undefined2;
  let accessible;
  let c5;
  let c6;
  let channel;
  let disabled;
  let intl;
  let intl2;
  let items5;
  let items6;
  let num2;
  let prop;
  let style;
  let styleButton;
  let tmp17;
  let tmp22;
  let tmp25Result;
  let tmp31;
  ({ accessible, disabled, onPress: require } = arg0);
  let stateFromStores;
  let stateFromStores2;
  c5 = undefined;
  c6 = undefined;
  let closure_7;
  let closure_8;
  let obj = stateFromStores2;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  let obj2 = require("get initialized");
  const items = [c6];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.useReducedMotion);
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
  const tmp2Result = require("StringUtils");
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  const tmp2Result3 = require("StringUtils");
  let tmp31Result = !tmp2Result3.isNullOrEmpty(trinketAnimationUrl) && !tmp12;
  tmp2Result3.isNullOrEmpty(trinketAnimationUrl);
  [tmp17, c5] = stateFromStores1(obj.useState(false), 2);
  stateFromStores1(obj.useState(false), 2);
  const callback = obj.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      _undefined(true);
    }
  }, []);
  const useSelectedSnowflakeBoundDismissibleContent = tmp2(tmp3[13]).useSelectedSnowflakeBoundDismissibleContent;
  require("useSelectedDismissibleContent");
  if (!isNullOrEmptyResult) {
    prop = null;
    if (!tmp17) {
      prop = tmp2(tmp3[14]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  [tmp22, c6] = stateFromStores1(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  stateFromStores1(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  const tmp23 = tmp22 === require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
  if (!isNullOrEmptyResult) {
    tmp12 = tmp23;
  }
  closure_7 = tmp12;
  if (tmp31Result) {
    tmp31Result = tmp23;
  }
  closure_8 = tmp31Result;
  let transparentBackground = null != gradient;
  if (transparentBackground) {
    transparentBackground = gradient.colors.length > 0;
  }
  if (transparentBackground) {
    transparentBackground = tmp31Result;
  }
  const items3 = [tmp12, tmp23, tmp31Result, stateFromStores];
  const effect = obj.useEffect(() => {
    const tmp = stateFromStores && closure_7 || closure_8;
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        _undefined(true);
      }, 7000);
    }
  }, items3);
  const obj5 = { style, children: items6 };
  if (tmp12) {
    const obj6 = {
      channelId: channel.id,
      animationDataUrl: boxAnimationUrl,
      disabled,
      active: false,
      loop: false,
      onPress(arg0) {
          _undefined2(ContentDismissActionType.TAKE_ACTION);
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        },
      onAnimationFinished: callback,
      IconComponent: require("GiftIcon").GiftIcon,
      accessible,
      accessibilityLabel: intl2.string(require("intl").t.Z1RnTk)
    };
    const PremiumAnimatedGiftButton = tmp2(tmp3[15]).PremiumAnimatedGiftButton;
    intl2 = tmp2(tmp3[17]).intl;
    tmp25Result = closure_10(PremiumAnimatedGiftButton, obj6);
    tmp31 = closure_10;
  } else {
    let tmp28Result = transparentBackground;
    if (tmp28Result) {
      const obj7 = { style: tmp5.gradientContainerRefresh, useAngle: true, angle: num2, angleCenter: { x: 0.5, y: 0.5 }, colors: gradient.colors };
      num2 = gradient.angle;
      const tmp28 = closure_10;
      const tmp30 = ref(stateFromStores[18]);
      if (num2 == null) {
        num2 = 180;
      }
      tmp28Result = tmp28(tmp30, obj7);
    }
    const items4 = [tmp28Result, ];
    tmp31 = closure_10;
    const obj8 = {
      ref,
      style: items5,
      disabled,
      accessible,
      accessibilityLabel: intl.string(require("intl").t.Z1RnTk),
      active: false,
      IconComponent: require("GiftIcon").GiftIcon,
      onPress(arg0) {
          if (null != stateFromStores1) {
            const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
            const obj = DismissibleContentUtils;
            const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj2);
          }
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        }
    };
    items5 = [styleButton, ];
    const tmp33 = ref(stateFromStores[19]);
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    const obj9 = { children: items4 };
    items5[1] = transparentBackground;
    intl = tmp2(tmp3[17]).intl;
    items4[1] = tmp31(tmp33, obj8);
    tmp25Result = tmp25(tmp26, obj9);
  }
  items6 = [tmp25Result, ];
  if (tmp31Result) {
    const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp31Result = tmp31(tmp2(tmp3[21]).GiftIconTrinketsAnimation, obj10);
  }
  items6[1] = tmp31Result;
  return closure_11(c5, obj5);
});
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;
