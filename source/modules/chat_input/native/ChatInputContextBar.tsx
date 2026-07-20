// Module ID: 10345
// Function ID: 79846
// Name: ChatInputReplyBarNoAuthor
// Dependencies: []

// Module 10345 (ChatInputReplyBarNoAuthor)
function ChatInputReplyBarNoAuthor(onCancelReplying) {
  onCancelReplying = onCancelReplying.onCancelReplying;
  let obj = arg1(dependencyMap[9]);
  const tmp = callback4();
  let obj1 = arg1(dependencyMap[10]);
  const token = obj1.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = arg1(dependencyMap[10]);
  const bound = Math.max(0, (token - obj2.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating) {
    obj = { style: tmp.contextBarRow };
    obj = { style: tmp.floatingReplyTextWrapper };
    const intl3 = arg1(dependencyMap[12]).intl;
    obj.children = intl3.string(arg1(dependencyMap[12]).t.5IEsGx);
    const items = [callback(arg1(dependencyMap[11]).Text, obj), ];
    obj1 = { style: tmp.floatingRightActions };
    obj2 = { "Null": "PRIMARY_460", "Null": 1 };
    const intl4 = arg1(dependencyMap[12]).intl;
    obj2.accessibilityLabel = intl4.string(arg1(dependencyMap[12]).t.jSnJGT);
    let tmp20;
    if (bound > 0) {
      tmp20 = bound;
    }
    obj2.hitSlop = tmp20;
    obj2.onPress = onCancelReplying;
    const obj3 = { source: importDefault(dependencyMap[14]), size: arg1(dependencyMap[6]).Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
    obj2.children = callback(arg1(dependencyMap[6]).Icon, obj3);
    obj1.children = callback(arg1(dependencyMap[13]).PressableOpacity, obj2);
    items[1] = callback(closure_5, obj1);
    obj.children = items;
    let tmp4Result = tmp4(closure_5, obj);
    const tmp13 = closure_5;
    const tmp17 = callback;
    const tmp18 = closure_5;
    const tmp19 = callback;
  } else {
    const obj4 = { "Null": "PRIMARY_460", "Null": 1 };
    const intl = arg1(dependencyMap[12]).intl;
    obj4.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.jSnJGT);
    obj4.onPress = onCancelReplying;
    obj4.style = tmp.contextBarRow;
    const obj5 = { style: tmp.contextCancelIconWrapper };
    const obj6 = { source: importDefault(dependencyMap[14]), size: arg1(dependencyMap[6]).Icon.Sizes.SMALL_20 };
    obj5.children = callback(arg1(dependencyMap[6]).Icon, obj6);
    const items1 = [callback(closure_5, obj5), ];
    const obj7 = { CHANNEL_HIGHLIGHT: true, guild_template_description: 15.1, borderWidth: 242, style: tmp.contextButtonText };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj7.children = intl2.string(arg1(dependencyMap[12]).t.5IEsGx);
    items1[1] = callback(arg1(dependencyMap[11]).Text, obj7);
    obj4.children = items1;
    tmp4Result = tmp4(arg1(dependencyMap[13]).PressableOpacity, obj4);
  }
  return tmp4Result;
}
class ChatInputReplyBar {
  constructor(arg0) {
    pendingReply = global.pendingReply;
    arg1 = pendingReply;
    ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = global);
    closure_1 = undefined;
    dependencyMap = undefined;
    defineProperty = undefined;
    StyleSheet = undefined;
    View = undefined;
    f79852 = undefined;
    closure_7 = undefined;
    AnalyticEvents = undefined;
    Routes = undefined;
    replyText = function replyText(arg0) {
      const pendingReply = "text-sm/semibold";
      const intl = pendingReply(colorString[12]).intl;
      return intl.format(pendingReply(colorString[12]).t.8E4GxS, {
        userHook(arg0, arg1) {
          if ("dot" === closure_1) {
            if (null != closure_2) {
              let obj = {};
              obj = { color: closure_2, colors: closure_3, guildId: closure_5, size: "small" };
              const items = [callback(textsmsemibold(closure_2[6]).RoleDot, obj), ];
              let obj1 = { variant: textsmsemibold };
              let tmp19;
              if (null != closure_7) {
                const obj2 = { fontFamily: closure_7 };
                tmp19 = obj2;
              }
              obj1.style = tmp19;
              obj1.children = closure_4;
              items[1] = callback(textsmsemibold(closure_2[11]).Text, obj1, arg1);
              obj.children = items;
              let tmp3Result = closure_11(closure_12, obj);
              const tmp16 = callback;
              const tmp8 = closure_11;
              const tmp9 = closure_12;
            }
            return tmp3Result;
          }
          obj = { variant: textsmsemibold };
          obj1 = textsmsemibold(closure_2[20]);
          obj.experimental_useNativeText = !obj1.isFabric();
          const items1 = [closure_6, ];
          let tmp4 = null != closure_7;
          if (tmp4) {
            const obj3 = { fontFamily: closure_7 };
            tmp4 = obj3;
          }
          items1[1] = tmp4;
          obj.style = items1;
          let tmp6;
          if (closure_9) {
            tmp6 = closure_8;
          }
          obj.gradientColors = tmp6;
          obj.children = closure_4;
          tmp3Result = callback(textsmsemibold(closure_2[11]).Text, obj, "" + arg1 + "-" + textsmsemibold.message.author.id);
        }
      });
    };
    ({ onToggleReplyMention, chatInputFloatingOverride } = global);
    obj = arg1(dependencyMap[9]);
    tmp = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating || chatInputFloatingOverride;
    tmp2 = f79855();
    obj2 = arg1(dependencyMap[10]);
    token = obj2.useToken(closure_1(dependencyMap[8]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    obj3 = arg1(dependencyMap[10]);
    bound = require("module_0");
    obj4 = arg1(dependencyMap[15]);
    items = [];
    items[0] = f79852;
    stateFromStores = obj4.useStateFromStores(items, () => roleStyle.roleStyle);
    closure_1 = stateFromStores;
    obj5 = arg1(dependencyMap[16]);
    obj = { checked: pendingReply.shouldMention };
    checkboxA11yNative = obj5.useCheckboxA11yNative(obj);
    colorString = pendingReplyAuthor.colorString;
    dependencyMap = colorString;
    colorStrings = pendingReplyAuthor.colorStrings;
    defineProperty = colorStrings;
    nick = pendingReplyAuthor.nick;
    StyleSheet = nick;
    guildId = pendingReplyAuthor.guildId;
    View = guildId;
    items1 = [, ];
    items1[0] = colorString;
    items1[1] = stateFromStores;
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    f79852 = defineProperty.useMemo(() => {
      let tmp;
      if ("hidden" !== stateFromStores) {
        if (null != colorString) {
          const obj = { color: colorString };
          const items = [obj];
          tmp = items;
        }
      }
      return tmp;
    }, items1);
    obj1 = { userId: pendingReply.message.author.id, guildId };
    tmp7 = closure_1(dependencyMap[17])(obj1);
    obj8 = arg1(dependencyMap[18]);
    closure_7 = obj8.useDisplayNameStylesFont({ displayNameStyles: tmp7 });
    obj9 = arg1(dependencyMap[19]);
    processColorStringsArray = obj9.useProcessColorStringsArray(colorStrings);
    AnalyticEvents = processColorStringsArray;
    obj10 = arg1(dependencyMap[19]);
    Routes = obj10.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
    if (null == onTapContextBarReply) {
      tmp14 = arg1;
      tmp15 = dependencyMap;
      num5 = 11;
      tmp13 = jsx;
      obj2 = {};
      num6 = 1;
      obj2.lineClamp = 1;
      str5 = "text-sm/medium";
      if (tmp) {
        str5 = "text-sm/normal";
      }
      obj2.variant = str5;
      str6 = "text-default";
      if (tmp) {
        str6 = "text-strong";
      }
      obj2.color = str6;
      str7 = "text-sm/semibold";
      obj2.children = replyText("text-sm/semibold");
      tmp13Result = tmp13(arg1(dependencyMap[11]).Text, obj2);
    } else {
      tmp58 = arg1;
      tmp59 = dependencyMap;
      num17 = 13;
      tmp57 = jsx;
      obj3 = {};
      obj3.style = tmp ? tmp2.floatingReplyTextWrapper : tmp2.contextButtonText;
      str = "link";
      obj3.accessibilityRole = "link";
      tmp9 = arg1;
      tmp10 = dependencyMap;
      num = 12;
      intl = arg1(dependencyMap[12]).intl;
      obj4 = {};
      obj4.username = nick;
      obj3.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[12]).t.EpJL4E, obj4);
      intl2 = arg1(dependencyMap[12]).intl;
      obj3.accessibilityHint = intl2.string(arg1(dependencyMap[12]).t.0CfCVW);
      num2 = 0.5;
      obj3.activeOpacity = 0.5;
      obj3.onPress = onTapContextBarReply;
      num3 = 11;
      tmp11 = jsx;
      obj5 = {};
      num4 = 1;
      obj5.lineClamp = 1;
      str2 = "text-sm/medium";
      if (tmp) {
        str2 = "text-sm/normal";
      }
      obj5.variant = str2;
      str3 = "text-default";
      if (tmp) {
        str3 = "text-strong";
      }
      obj5.color = str3;
      str4 = "text-sm/semibold";
      obj5.children = replyText("text-sm/semibold");
      obj3.children = tmp11(arg1(dependencyMap[11]).Text, obj5);
      tmp13Result = tmp57(arg1(dependencyMap[13]).PressableOpacity, obj3);
    }
    tmp17Result = null;
    if (null != onCancelReplying) {
      tmp18 = arg1;
      tmp19 = dependencyMap;
      num7 = 13;
      tmp17 = jsx;
      obj6 = {};
      num8 = 12;
      intl3 = arg1(dependencyMap[12]).intl;
      obj6.accessibilityLabel = intl3.string(arg1(dependencyMap[12]).t.jSnJGT);
      tmp20 = undefined;
      if (tmp) {
        if (bound > 0) {
          tmp20 = bound;
        }
      }
      obj6.hitSlop = tmp20;
      prop = undefined;
      if (!tmp) {
        prop = tmp2.contextCancelIconWrapper;
      }
      obj6.style = prop;
      obj6.onPress = onCancelReplying;
      tmp23 = arg1;
      tmp24 = dependencyMap;
      num9 = 6;
      tmp22 = jsx;
      obj7 = {};
      tmp25 = closure_1;
      num10 = 14;
      obj7.source = closure_1(dependencyMap[14]);
      tmp26 = arg1;
      tmp27 = dependencyMap;
      Sizes = arg1(dependencyMap[6]).Icon.Sizes;
      obj7.size = tmp ? Sizes.CUSTOM : Sizes.SMALL_20;
      floatingCloseIcon = undefined;
      if (tmp) {
        floatingCloseIcon = tmp2.floatingCloseIcon;
      }
      obj7.style = floatingCloseIcon;
      obj6.children = tmp22(arg1(dependencyMap[6]).Icon, obj7);
      tmp17Result = tmp17(arg1(dependencyMap[13]).PressableOpacity, obj6);
    }
    tmp29 = null;
    if (null != pendingReply) {
      tmp29 = null;
      if (pendingReply.showMentionToggle) {
        tmp31 = arg1;
        tmp32 = dependencyMap;
        num11 = 13;
        tmp30 = jsxs;
        obj8 = {};
        obj8.accessibilityRole = accessibilityRole;
        obj8.accessibilityState = accessibilityState;
        num12 = 12;
        intl4 = arg1(dependencyMap[12]).intl;
        obj8.accessibilityLabel = intl4.string(arg1(dependencyMap[12]).t.P8tvKG);
        tmp33 = arg1;
        tmp34 = dependencyMap;
        intl5 = arg1(dependencyMap[12]).intl;
        string = intl5.string;
        t = arg1(dependencyMap[12]).t;
        if (pendingReply.shouldMention) {
          stringResult = string(t.PBgTSF);
        } else {
          stringResult = string(t.+LXBxU);
        }
        obj8.accessibilityHint = stringResult;
        num13 = 0.5;
        obj8.activeOpacity = 0.5;
        obj8.onPress = onToggleReplyMention;
        obj8.style = tmp ? tmp2.floatingMentionGroup : tmp2.replyMentionButton;
        tmp37 = arg1;
        tmp38 = dependencyMap;
        num14 = 6;
        tmp36 = jsx;
        obj9 = {};
        tmp39 = closure_1;
        num15 = 21;
        obj9.source = closure_1(dependencyMap[21]);
        obj9.size = arg1(dependencyMap[6]).Icon.Sizes.CUSTOM;
        items2 = [, ];
        items2[0] = tmp2.replyMentionIcon;
        items2[1] = pendingReply.shouldMention && tmp2.replyMentionIconActive;
        obj9.style = items2;
        items3 = [, ];
        items3[0] = tmp36(arg1(dependencyMap[6]).Icon, obj9);
        tmp41 = arg1;
        tmp42 = dependencyMap;
        num16 = 11;
        tmp40 = jsx;
        obj10 = {};
        str8 = "text-sm/bold";
        if (tmp) {
          str8 = "text-sm/semibold";
        }
        obj10.variant = str8;
        str9 = "text-muted";
        obj10.color = "text-muted";
        prop1 = undefined;
        if (pendingReply.shouldMention) {
          prop1 = tmp2.replyMentionButtonActive;
        }
        obj10.style = prop1;
        tmp44 = arg1;
        tmp45 = dependencyMap;
        intl6 = arg1(dependencyMap[12]).intl;
        string2 = intl6.string;
        p9jC2r = arg1(dependencyMap[12]).t;
        if (pendingReply.shouldMention) {
          p9jC2r = p9jC2r.p9jC2r;
          string2Result = string2(p9jC2r);
        } else {
          string2Result = string2(p9jC2r.U7f3bK);
        }
        obj10.children = string2Result;
        obj10 = tmp40(arg1(dependencyMap[11]).Text, obj10);
        items3[1] = obj10;
        obj8.children = items3;
        tmp30Result = tmp30(arg1(dependencyMap[13]).PressableOpacity, obj8);
      }
    }
    tmp48 = null;
    if (null != pendingReply) {
      tmp48 = null;
      if (pendingReply.showMentionToggle) {
        tmp48 = null;
        if (null != tmp17Result) {
          tmp49 = jsx;
          tmp50 = View;
          obj11 = {};
          obj11.style = tmp2.floatingDivider;
          tmp48 = jsx(View, obj11);
        }
      }
    }
    obj12 = { style: tmp2.contextBarRow };
    tmp53 = !tmp;
    tmp51 = jsxs;
    tmp52 = View;
    if (tmp53) {
      tmp53 = tmp17Result;
    }
    items4 = [, , ];
    items4[0] = tmp53;
    items4[1] = tmp13Result;
    tmp54 = tmp29;
    if (tmp) {
      tmp55 = jsxs;
      tmp56 = View;
      obj13 = {};
      obj13.style = tmp2.floatingRightActions;
      items5 = [, , ];
      items5[0] = tmp29;
      items5[1] = tmp48;
      items5[2] = tmp17Result;
      obj13.children = items5;
      tmp54 = jsxs(View, obj13);
    }
    items4[2] = tmp54;
    obj12.children = items4;
    return tmp51(tmp52, obj12);
  }
}
function ChatInputEditBar(onCancelEditing) {
  let obj = arg1(dependencyMap[9]);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const tmp = callback4();
  let obj1 = arg1(dependencyMap[10]);
  const token = obj1.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = arg1(dependencyMap[10]);
  const bound = Math.max(0, (token - obj2.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  obj = { lineClamp: 1 };
  let str = "text-sm/medium";
  if (chatInputFloating) {
    str = "text-sm/normal";
  }
  obj.variant = str;
  let str2 = "text-default";
  if (chatInputFloating) {
    str2 = "text-strong";
  }
  obj.color = str2;
  obj.style = chatInputFloating ? tmp.floatingReplyTextWrapper : tmp.contextButtonText;
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.rtNXxN);
  const tmp4Result = callback(arg1(dependencyMap[11]).Text, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl2.string(arg1(dependencyMap[12]).t.qv9j1K);
  let tmp7;
  if (chatInputFloating) {
    if (bound > 0) {
      tmp7 = bound;
    }
  }
  obj.hitSlop = tmp7;
  let prop;
  if (!chatInputFloating) {
    prop = tmp.contextCancelIconWrapper;
  }
  obj.style = prop;
  obj.onPress = onCancelEditing.onCancelEditing;
  obj1 = { source: importDefault(dependencyMap[14]) };
  const Sizes = arg1(dependencyMap[6]).Icon.Sizes;
  obj1.size = chatInputFloating ? Sizes.CUSTOM : Sizes.SMALL_20;
  let floatingCloseIcon;
  if (chatInputFloating) {
    floatingCloseIcon = tmp.floatingCloseIcon;
  }
  obj1.style = floatingCloseIcon;
  obj.children = callback(arg1(dependencyMap[6]).Icon, obj1);
  const tmp6Result = callback(arg1(dependencyMap[13]).PressableOpacity, obj);
  obj2 = { style: tmp.contextBarRow };
  const obj3 = {};
  const items = [, ];
  if (chatInputFloating) {
    items[0] = tmp4Result;
    const obj4 = { style: tmp.floatingRightActions, children: tmp6Result };
    items[1] = callback(closure_5, obj4);
    obj3.children = items;
    let tmp16 = obj3;
  } else {
    items[0] = tmp6Result;
    items[1] = tmp4Result;
    obj3.children = items;
    tmp16 = obj3;
  }
  obj2.children = closure_11(closure_12, tmp16);
  return callback(closure_5, obj2);
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_8, Routes: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
const obj = { duration: 250, easing: arg1(dependencyMap[6]).STANDARD_EASING };
const tmp4 = arg1(dependencyMap[5]);
let closure_14 = arg1(dependencyMap[7]).createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  let obj = {};
  obj = {};
  if (null == arg0) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = importDefault(dependencyMap[8]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  obj.backgroundColor = MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  obj.contextBar = obj;
  return obj;
});
const obj3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[7]).createStyles(() => {
  let obj = {};
  obj = { display: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006693633811139321, alignItems: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014927302692811424, flexDirection: 869553810591452500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, paddingHorizontal: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP };
  obj.contextBarRow = obj;
  obj.floatingReplyTextWrapper = { bannerTextContainer: null, ignoreNotificationSetting: null };
  obj.contextCancelIconWrapper = {};
  obj.contextButtonText = { -202119967: "<string:17605953>", -1169061023: "<string:273764608>", 1493721778: "<string:146358545>", 1397730129: "<string:410124290>", -1855466338: "<string:2013265921>", -731780292: "<string:16777216>" };
  obj = { borderBottomWidth: closure_4.hairlineWidth, borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, overflow: "hidden" };
  obj.floatingContextBar = obj;
  obj.replyMentionButton = {};
  obj.replyMentionButtonActive = { color: importDefault(dependencyMap[8]).colors.CONTROL_BRAND_FOREGROUND };
  const obj1 = { color: importDefault(dependencyMap[8]).colors.CONTROL_BRAND_FOREGROUND };
  obj.replyMentionIcon = { width: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(dependencyMap[8]).colors.TEXT_MUTED, marginRight: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  const obj2 = { width: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(dependencyMap[8]).colors.TEXT_MUTED, marginRight: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  obj.replyMentionIconActive = { tintColor: importDefault(dependencyMap[8]).colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingRightActions = { position: "key", bottom: "Text", right: "message", alignItems: "type", justifyContent: null, textAlign: null };
  obj.floatingMentionGroup = { 9223372036854775807: false, 0: false, 9223372036854775807: false };
  const obj3 = { tintColor: importDefault(dependencyMap[8]).colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingDivider = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
  const obj4 = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
  obj.floatingCloseIcon = { width: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_ICON_DEFAULT };
  return obj;
});
let closure_16 = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,chatInputFloating,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...(chatInputFloating?{maxHeight:heightSv.get()}:{height:heightSv.get()})};}" };
let closure_17 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
let closure_18 = importAllResult.forwardRef((children) => {
  let dependencyMap;
  let importAllResult;
  let ref;
  let closure_5;
  let obj = arg1(dependencyMap[22]);
  const gradientValue = obj.useGradientValue(arg1(dependencyMap[22]).GradientPercentage.END);
  let floatingContextBar = arg1(dependencyMap[9]).useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const arg1 = floatingContextBar;
  const backgroundColor = callback3(gradientValue).contextBar.backgroundColor;
  const importDefault = backgroundColor;
  let num = 40;
  const obj2 = arg1(dependencyMap[9]);
  if (floatingContextBar) {
    num = 60;
  }
  dependencyMap = num;
  const tmp2 = callback4();
  const sharedValue = arg1(dependencyMap[23]).useSharedValue(0);
  importAllResult = sharedValue;
  const obj3 = arg1(dependencyMap[23]);
  const fn = function o() {
    let obj = { backgroundColor };
    obj = {};
    const value = sharedValue.get();
    if (floatingContextBar) {
      obj.maxHeight = value;
      let tmp2 = obj;
    } else {
      obj.height = value;
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    return obj;
  };
  obj = { stylesBackgroundColor: backgroundColor, chatInputFloating: floatingContextBar, heightSv: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 3976432455712;
  fn.__initData = closure_16;
  const animatedStyle = arg1(dependencyMap[23]).useAnimatedStyle(fn);
  ref = importAllResult.useRef(null);
  const items = [ref];
  closure_5 = importAllResult.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      const result = store.set(callback(closure_2[24]).withTiming(closure_2, closure_13));
    },
    componentDidEnter() {
      const result = store.set(callback(closure_2[24]).withTiming(closure_2, closure_13));
    },
    componentWillLeave(current) {
      closure_4.current = current;
      let obj = callback(closure_2[24]);
      const fn = function n(arg0) {
        if (arg0) {
          callback(closure_2[23]).runOnJS(closure_5)();
          const obj = callback(closure_2[23]);
        }
      };
      obj = { runOnJS: callback(closure_2[23]).runOnJS, handleTransitionFinished: closure_5 };
      fn.__closure = obj;
      fn.__workletHash = 10908592279914;
      fn.__initData = closure_17;
      const result = store.set(obj.withTiming(0, closure_13, "respect-motion-settings", fn));
    }
  }));
  obj = {};
  const items1 = [animatedStyle, ];
  if (floatingContextBar) {
    floatingContextBar = tmp2.floatingContextBar;
  }
  items1[1] = floatingContextBar;
  obj.style = items1;
  obj.children = children.children;
  return closure_10(importDefault(dependencyMap[23]).View, obj);
});
const obj4 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function ChatInputContextBar(channel) {
  let onCancelEditing;
  let onTapContextBarReply;
  let onToggleReplyMention;
  channel = channel.channel;
  const arg1 = channel;
  const chatInputRef = channel.chatInputRef;
  const importDefault = chatInputRef;
  const pendingReply = channel.pendingReply;
  const dependencyMap = pendingReply;
  const items = [channel, chatInputRef, pendingReply];
  const memo = importAllResult.useMemo(() => ({
    onCancelEditing() {
      const current = ref.current;
      if (null != current) {
        current.handleCancelEditing();
      }
    },
    onCancelReplying() {
      if (null != closure_2) {
        lib(closure_2[25]).deletePendingReply(lib.id);
        const obj2 = lib(closure_2[25]);
        let obj = {};
        let id;
        if (null != closure_2) {
          id = closure_2.message.id;
        }
        obj.message_id = id;
        ({ id: obj4.channel_id, guild_id: obj4.guild_id } = lib);
        obj.context_action = "reply";
        obj = lib(closure_2[27]);
        obj.reason = obj.getContextBarCancelReason("reply", "cancel");
        const currentUser = currentUser.getCurrentUser();
        let id1;
        if (null != currentUser) {
          id1 = currentUser.id;
        }
        let id2;
        if (null != closure_2) {
          id2 = closure_2.message.author.id;
        }
        obj.is_own_message = id1 === id2;
        ref(closure_2[26]).track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        const obj3 = ref(closure_2[26]);
      }
    },
    onTapContextBarReply() {
      if (null != closure_2) {
        const channel = closure_2.channel;
        lib(closure_2[28]).transitionTo(closure_9.CHANNEL(channel.getGuildId(), closure_2.channel.id, closure_2.message.id));
        const obj = lib(closure_2[28]);
      }
    },
    onToggleReplyMention() {
      if (null != closure_2) {
        const result = lib(closure_2[25]).setPendingReplyShouldMention(closure_2.channel.id, !closure_2.shouldMention);
        const obj = lib(closure_2[25]);
      }
    }
  }), items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let obj = arg1(dependencyMap[29]);
  let message;
  if (null != pendingReply) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  obj = { component: closure_5 };
  let tmp5 = null != pendingReply;
  if (tmp5) {
    tmp5 = null != nullableMessageAuthor;
  }
  if (tmp5) {
    obj = {};
    const obj1 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
    obj.children = callback(ChatInputReplyBar, obj1);
    tmp5 = callback(closure_18, obj);
  }
  const items1 = [tmp5, , ];
  let tmp9 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp9) {
    const obj2 = {};
    const obj3 = { onCancelReplying };
    obj2.children = callback(ChatInputReplyBarNoAuthor, obj3);
    tmp9 = callback(closure_18, obj2);
  }
  items1[1] = tmp9;
  let tmp13 = null != channel.pendingEdit;
  if (tmp13) {
    const obj4 = {};
    const obj5 = { onCancelEditing };
    obj4.children = callback(ChatInputEditBar, obj5);
    tmp13 = callback(closure_18, obj4);
  }
  items1[2] = tmp13;
  obj.children = items1;
  return closure_11(arg1(dependencyMap[30]).TransitionGroup, obj);
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export { ChatInputReplyBar };
