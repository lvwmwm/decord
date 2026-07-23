// Module ID: 11354
// Function ID: 88259
// Dependencies: [57, 31, 27, 4122, 7130, 11105, 1345, 33, 4130, 689, 566, 1324, 7453, 1832, 5802, 1334, 11355, 8773, 1212, 4554, 11345, 1336, 11356, 2]

// Module 11354
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ChatInputActionType } from "TextAreaCta";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { position: "absolute", top: 0, left: importDefault(689).space.PX_4, right: importDefault(689).space.PX_4, bottom: 0, borderRadius: importDefault(689).radii.round };
  obj.gradientContainer = obj;
  obj = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: importDefault(689).radii.sm };
  obj.gradientContainerRefresh = obj;
  obj.transparentBackground = { backgroundColor: "transparent" };
  return obj;
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGift(arg0) {
  let accessible;
  let c5;
  let channel;
  let disabled;
  let require;
  let style;
  let styleButton;
  let tmp12;
  ({ accessible, disabled, onPress: require } = arg0);
  c5 = undefined;
  let _isNativeReflectConstruct;
  let c7;
  let c8;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  let obj = require(stateFromStores[10]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  let obj1 = require(stateFromStores[11]);
  const tmp3 = callback2();
  let obj2 = require(stateFromStores[10]);
  const items1 = [c7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(outer1_0(stateFromStores[12]).MarketingComponentType.GIFT_ICON);
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  let obj3 = require(stateFromStores[10]);
  const items2 = [c7];
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const giftPromotion = _undefined2.getGiftPromotion();
    let id;
    if (null != giftPromotion) {
      id = giftPromotion.id;
    }
    let str = "";
    if (null != id) {
      str = id;
    }
    return str;
  });
  let boxAnimationUrl;
  if (null != stateFromStores1) {
    boxAnimationUrl = stateFromStores1.boxAnimationUrl;
  }
  let trinketAnimationUrl;
  if (null != stateFromStores1) {
    trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
  }
  let gradient;
  if (null != stateFromStores1) {
    gradient = stateFromStores1.gradient;
  }
  let obj4 = require(stateFromStores[13]);
  let tmp9 = !obj4.isNullOrEmpty(boxAnimationUrl);
  let tmp10 = !require(stateFromStores[13]).isNullOrEmpty(trinketAnimationUrl) && !tmp9;
  const obj6 = require(stateFromStores[13]);
  [tmp12, c5] = stateFromStores1(stateFromStores2.useState(false), 2);
  const callback = stateFromStores2.useCallback((arg0) => {
    if (!arg0) {
      _undefined(true);
    }
  }, []);
  const tmp11 = stateFromStores1(stateFromStores2.useState(false), 2);
  if (tmp9) {
    let prop = null;
    if (!tmp12) {
      prop = require(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp17 = stateFromStores1(require(stateFromStores[14]).useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  _isNativeReflectConstruct = tmp17[1];
  const tmp18 = tmp17[0] === require(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
  if (tmp9) {
    tmp9 = tmp18;
  }
  c7 = tmp9;
  if (tmp10) {
    tmp10 = tmp18;
  }
  c8 = tmp10;
  let transparentBackground = null != gradient && gradient.colors.length > 0 && tmp10;
  const items3 = [tmp9, tmp18, tmp10, stateFromStores];
  const effect = stateFromStores2.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = c7;
    }
    if (!tmp) {
      tmp = c8;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer1_5(true);
      }, 7000);
    }
  }, items3);
  obj = { style };
  if (tmp9) {
    obj = {
      channelId: channel.id,
      animationDataUrl: boxAnimationUrl,
      disabled,
      active: false,
      loop: false,
      onPress(arg0) {
          lib(outer1_9.TAKE_ACTION);
          callback(arg0, _undefined3.NITRO_GIFT, ref);
        },
      onAnimationFinished: callback,
      IconComponent: require(stateFromStores[17]).GiftIcon,
      accessible
    };
    const intl2 = require(stateFromStores[18]).intl;
    obj.accessibilityLabel = intl2.string(require(stateFromStores[18]).t.Z1RnTk);
    let tmp22Result = callback(require(stateFromStores[16]).PremiumAnimatedGiftButton, obj);
  } else {
    obj1 = {};
    let tmp25Result = transparentBackground;
    if (transparentBackground) {
      obj2 = { style: obj1.useMobileVisualRefreshConfig({ location: "ChatInputActionButtonGift" }).enabled ? tmp3.gradientContainerRefresh : tmp3.gradientContainer, useAngle: true };
      const angle = gradient.angle;
      let num3 = 180;
      if (null != angle) {
        num3 = angle;
      }
      obj2.angle = num3;
      obj2.angleCenter = { x: 0.5, y: 0.5 };
      obj2.colors = gradient.colors;
      tmp25Result = callback(ref(stateFromStores[19]), obj2);
      const tmp25 = callback;
      const tmp28 = ref(stateFromStores[19]);
    }
    const items4 = [tmp25Result, ];
    obj3 = { ref };
    const items5 = [styleButton, ];
    if (transparentBackground) {
      transparentBackground = tmp3.transparentBackground;
    }
    items5[1] = transparentBackground;
    obj3.style = items5;
    obj3.disabled = disabled;
    obj3.accessible = accessible;
    const intl = require(stateFromStores[18]).intl;
    obj3.accessibilityLabel = intl.string(require(stateFromStores[18]).t.Z1RnTk);
    obj3.active = false;
    obj3.IconComponent = require(stateFromStores[17]).GiftIcon;
    obj3.onPress = function onPress(arg0) {
      if (null != stateFromStores1) {
        let obj = outer1_0(stateFromStores[21]);
        obj = { dismissAction: outer1_9.TAKE_ACTION };
        const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(outer1_0(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj);
      }
      callback(arg0, _undefined3.NITRO_GIFT, ref);
    };
    items4[1] = callback(ref(stateFromStores[20]), obj3);
    obj1.children = items4;
    tmp22Result = closure_11(c5, obj1);
    const tmp22 = closure_11;
    const tmp23 = c5;
    const tmp29 = callback;
    const tmp32 = ref(stateFromStores[20]);
  }
  const items6 = [tmp22Result, ];
  if (tmp10) {
    obj4 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp10 = callback(require(stateFromStores[22]).GiftIconTrinketsAnimation, obj4);
  }
  items6[1] = tmp10;
  obj.children = items6;
  return closure_11(c5, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;
