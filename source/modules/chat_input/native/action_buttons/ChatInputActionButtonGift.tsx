// Module ID: 11343
// Function ID: 88196
// Dependencies: []

// Module 11343
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ChatInputActionType = arg1(dependencyMap[5]).ChatInputActionType;
const ContentDismissActionType = arg1(dependencyMap[6]).ContentDismissActionType;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles(() => {
  let obj = {};
  obj = { backgroundColor: 24182785, opacity: 16777216, borderRadius: importDefault(dependencyMap[9]).radii.round, 0: 7668224, 0: 2013265920, left: importDefault(dependencyMap[9]).space.PX_4, right: importDefault(dependencyMap[9]).space.PX_4 };
  obj.gradientContainer = obj;
  obj = { backgroundColor: "<string:408361903>", opacity: "<string:2920093709>", borderRadius: importDefault(dependencyMap[9]).radii.sm, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 };
  obj.gradientContainerRefresh = obj;
  obj.transparentBackground = { backgroundColor: "transparent" };
  return obj;
});
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function ChatInputActionButtonGift(arg0) {
  let accessible;
  let channel;
  let disabled;
  let style;
  let styleButton;
  let tmp12;
  ({ accessible, disabled, onPress: closure_0 } = arg0);
  let closure_5;
  let closure_6;
  let closure_7;
  let ChatInputActionType;
  ({ channel, style, styleButton } = arg0);
  const ref = importAllResult.useRef(null);
  const importDefault = ref;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const tmp3 = callback3();
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const marketingComponentByType = tmp9.getMarketingComponentByType(callback(stateFromStores[12]).MarketingComponentType.GIFT_ICON);
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  let callback = stateFromStores1;
  let obj3 = arg1(dependencyMap[10]);
  const items2 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const giftPromotion = tmp9.getGiftPromotion();
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
  let obj4 = arg1(dependencyMap[13]);
  let tmp9 = !obj4.isNullOrEmpty(boxAnimationUrl);
  let tmp10 = !arg1(dependencyMap[13]).isNullOrEmpty(trinketAnimationUrl) && !tmp9;
  const obj6 = arg1(dependencyMap[13]);
  [tmp12, closure_5] = callback(stateFromStores2.useState(false), 2);
  callback = importAllResult.useCallback((arg0) => {
    if (!arg0) {
      _undefined(true);
    }
  }, []);
  const tmp11 = callback(stateFromStores2.useState(false), 2);
  if (tmp9) {
    let prop = null;
    if (!tmp12) {
      prop = arg1(dependencyMap[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp17 = callback(arg1(dependencyMap[14]).useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  closure_6 = tmp17[1];
  const tmp18 = tmp17[0] === arg1(dependencyMap[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
  if (tmp9) {
    tmp9 = tmp18;
  }
  closure_7 = tmp9;
  if (tmp10) {
    tmp10 = tmp18;
  }
  ChatInputActionType = tmp10;
  let transparentBackground = null != gradient && gradient.colors.length > 0 && tmp10;
  const items3 = [tmp9, tmp18, tmp10, stateFromStores];
  const effect = importAllResult.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = tmp9;
    }
    if (!tmp) {
      tmp = tmp10;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(true);
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
          lib(constants.TAKE_ACTION);
          callback(arg0, tmp10.NITRO_GIFT, ref);
        },
      onAnimationFinished: callback,
      IconComponent: arg1(dependencyMap[17]).GiftIcon,
      accessible
    };
    const intl2 = arg1(dependencyMap[18]).intl;
    obj.accessibilityLabel = intl2.string(arg1(dependencyMap[18]).t.Z1RnTk);
    let tmp22Result = callback2(arg1(dependencyMap[16]).PremiumAnimatedGiftButton, obj);
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
      obj2.angleCenter = {};
      obj2.colors = gradient.colors;
      tmp25Result = callback2(importDefault(dependencyMap[19]), obj2);
      const tmp25 = callback2;
      const tmp28 = importDefault(dependencyMap[19]);
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
    const intl = arg1(dependencyMap[18]).intl;
    obj3.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.Z1RnTk);
    obj3.active = false;
    obj3.IconComponent = arg1(dependencyMap[17]).GiftIcon;
    obj3.onPress = function onPress(arg0) {
      if (null != stateFromStores1) {
        let obj = callback(stateFromStores[21]);
        obj = { dismissAction: constants.TAKE_ACTION };
        const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(callback(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj);
      }
      callback(arg0, tmp10.NITRO_GIFT, ref);
    };
    items4[1] = callback2(importDefault(dependencyMap[20]), obj3);
    obj1.children = items4;
    tmp22Result = closure_11(closure_5, obj1);
    const tmp22 = closure_11;
    const tmp23 = closure_5;
    const tmp29 = callback2;
    const tmp32 = importDefault(dependencyMap[20]);
  }
  const items6 = [tmp22Result, ];
  if (tmp10) {
    obj4 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp10 = callback2(arg1(dependencyMap[22]).GiftIconTrinketsAnimation, obj4);
  }
  items6[1] = tmp10;
  obj.children = items6;
  return closure_11(closure_5, obj);
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;
