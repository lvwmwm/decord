// Module ID: 10391
// Function ID: 80135
// Name: ChatInputReplyBarNoAuthor
// Dependencies: [31, 27, 4122, 1849, 653, 33, 1273, 4130, 689, 1324, 3834, 4126, 1212, 4660, 9042, 566, 3848, 4361, 8561, 7739, 3994, 10392, 3941, 3991, 4131, 9580, 675, 9578, 1198, 4360, 10393, 2]

// Module 10391 (ChatInputReplyBarNoAuthor)
import importAllResult from "set";
import get_ActivityIndicator from "getContextBarCancelReason";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function ChatInputReplyBarNoAuthor(onCancelReplying) {
  onCancelReplying = onCancelReplying.onCancelReplying;
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const tmp = callback4();
  let obj1 = require(3834) /* map */;
  const token = obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = require(3834) /* map */;
  const bound = Math.max(0, (token - obj2.useToken(importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating) {
    obj = { style: tmp.contextBarRow };
    obj = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.children = intl3.string(require(1212) /* getSystemLocale */.t["5IEsGx"]);
    const items = [callback(require(4126) /* Text */.Text, obj), ];
    obj1 = { style: tmp.floatingRightActions };
    obj2 = { activeOpacity: 0.5, accessibilityRole: "button" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.accessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.jSnJGT);
    let tmp20;
    if (bound > 0) {
      tmp20 = bound;
    }
    obj2.hitSlop = tmp20;
    obj2.onPress = onCancelReplying;
    const obj3 = { source: importDefault(9042), size: require(1273) /* Button */.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
    obj2.children = callback(require(1273) /* Button */.Icon, obj3);
    obj1.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj2);
    items[1] = callback(closure_5, obj1);
    obj.children = items;
    let tmp4Result = tmp4(closure_5, obj);
    const tmp13 = closure_5;
    const tmp17 = callback;
    const tmp18 = closure_5;
    const tmp19 = callback;
  } else {
    const obj4 = { activeOpacity: 0.5, accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.jSnJGT);
    obj4.onPress = onCancelReplying;
    obj4.style = tmp.contextBarRow;
    const obj5 = { style: tmp.contextCancelIconWrapper };
    const obj6 = { source: importDefault(9042), size: require(1273) /* Button */.Icon.Sizes.SMALL_20 };
    obj5.children = callback(require(1273) /* Button */.Icon, obj6);
    const items1 = [callback(closure_5, obj5), ];
    const obj7 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", style: tmp.contextButtonText };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj7.children = intl2.string(require(1212) /* getSystemLocale */.t["5IEsGx"]);
    items1[1] = callback(require(4126) /* Text */.Text, obj7);
    obj4.children = items1;
    tmp4Result = tmp4(require(4660) /* PressableBase */.PressableOpacity, obj4);
  }
  return tmp4Result;
}
class ChatInputReplyBar {
  constructor(arg0) {
    pendingReply = global.pendingReply;
    ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = global);
    c1 = undefined;
    colorString = undefined;
    colorStrings = undefined;
    nick = undefined;
    guildId = undefined;
    f80141 = undefined;
    c7 = undefined;
    useDisplayNameStylesFont = undefined;
    author = undefined;
    replyText = function replyText(arg0) {
      let c0 = "text-sm/semibold";
      const intl = pendingReply(colorString[12]).intl;
      return intl.format(pendingReply(colorString[12]).t["8E4GxS"], {
        userHook(arg0, arg1) {
          if ("dot" === outer1_1) {
            if (null != outer1_2) {
              let obj = {};
              obj = { color: outer1_2, colors: outer1_3, guildId: outer1_5, size: "small" };
              const items = [outer2_10(pendingReply(colorString[6]).RoleDot, obj), ];
              let obj1 = { variant: message };
              let tmp19;
              if (null != outer1_7) {
                const obj2 = { fontFamily: outer1_7 };
                tmp19 = obj2;
              }
              obj1.style = tmp19;
              obj1.children = outer1_4;
              items[1] = outer2_10(pendingReply(colorString[11]).Text, obj1, arg1);
              obj.children = items;
              let tmp3Result = outer2_11(outer2_12, obj);
              const tmp16 = outer2_10;
              const tmp8 = outer2_11;
              const tmp9 = outer2_12;
            }
            return tmp3Result;
          }
          obj = { variant: message };
          obj1 = pendingReply(colorString[20]);
          obj.experimental_useNativeText = !obj1.isFabric();
          const items1 = [outer1_6, ];
          let tmp4 = null != outer1_7;
          if (tmp4) {
            const obj3 = { fontFamily: outer1_7 };
            tmp4 = obj3;
          }
          items1[1] = tmp4;
          obj.style = items1;
          let tmp6;
          if (outer1_9) {
            tmp6 = outer1_8;
          }
          obj.gradientColors = tmp6;
          obj.children = outer1_4;
          tmp3Result = outer2_10(pendingReply(colorString[11]).Text, obj, "" + arg1 + "-" + message.message.author.id);
        }
      });
    };
    ({ onToggleReplyMention, chatInputFloatingOverride } = global);
    obj = require("useIsMobileVisualRefreshExperimentEnabled");
    tmp = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating || chatInputFloatingOverride;
    tmp2 = f80144();
    obj2 = require("map");
    token = obj2.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    obj3 = require("map");
    bound = require("result");
    obj4 = require("initialize");
    items = [];
    items[0] = f80141;
    stateFromStores = obj4.useStateFromStores(items, () => roleStyle.roleStyle);
    c1 = stateFromStores;
    obj5 = require("useCheckboxA11yNative");
    obj = { checked: pendingReply.shouldMention };
    checkboxA11yNative = obj5.useCheckboxA11yNative(obj);
    colorString = pendingReplyAuthor.colorString;
    colorStrings = pendingReplyAuthor.colorStrings;
    nick = pendingReplyAuthor.nick;
    guildId = pendingReplyAuthor.guildId;
    items1 = [, ];
    items1[0] = colorString;
    items1[1] = stateFromStores;
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    f80141 = colorStrings.useMemo(() => {
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
    tmp7 = require("useDisplayNameStyles")(obj1);
    obj8 = require("DISPLAY_NAME_STYLES_FONT_FAMILY_MAP");
    c7 = obj8.useDisplayNameStylesFont({ displayNameStyles: tmp7 });
    obj9 = require("processColorStringsInternal");
    processColorStringsArray = obj9.useProcessColorStringsArray(colorStrings);
    useDisplayNameStylesFont = processColorStringsArray;
    obj10 = require("processColorStringsInternal");
    author = obj10.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
    if (null == onTapContextBarReply) {
      tmp14 = pendingReply;
      tmp15 = colorString;
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
      tmp13Result = tmp13(require("Text").Text, obj2);
    } else {
      tmp58 = pendingReply;
      tmp59 = colorString;
      num17 = 13;
      tmp57 = jsx;
      obj3 = {};
      obj3.style = tmp ? tmp2.floatingReplyTextWrapper : tmp2.contextButtonText;
      str = "link";
      obj3.accessibilityRole = "link";
      tmp9 = pendingReply;
      tmp10 = colorString;
      num = 12;
      intl = require("getSystemLocale").intl;
      obj4 = {};
      obj4.username = nick;
      obj3.accessibilityLabel = intl.formatToPlainString(require("getSystemLocale").t.EpJL4E, obj4);
      intl2 = require("getSystemLocale").intl;
      obj3.accessibilityHint = intl2.string(require("getSystemLocale").t["0CfCVW"]);
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
      obj3.children = tmp11(require("Text").Text, obj5);
      tmp13Result = tmp57(require("PressableBase").PressableOpacity, obj3);
    }
    tmp17Result = null;
    if (null != onCancelReplying) {
      tmp18 = pendingReply;
      tmp19 = colorString;
      num7 = 13;
      tmp17 = jsx;
      obj6 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5 };
      num8 = 12;
      intl3 = require("getSystemLocale").intl;
      obj6.accessibilityLabel = intl3.string(require("getSystemLocale").t.jSnJGT);
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
      tmp23 = pendingReply;
      tmp24 = colorString;
      num9 = 6;
      tmp22 = jsx;
      obj7 = {};
      tmp25 = c1;
      num10 = 14;
      obj7.source = require("registerAsset");
      tmp26 = pendingReply;
      tmp27 = colorString;
      Sizes = require("Button").Icon.Sizes;
      obj7.size = tmp ? Sizes.CUSTOM : Sizes.SMALL_20;
      floatingCloseIcon = undefined;
      if (tmp) {
        floatingCloseIcon = tmp2.floatingCloseIcon;
      }
      obj7.style = floatingCloseIcon;
      obj6.children = tmp22(require("Button").Icon, obj7);
      tmp17Result = tmp17(require("PressableBase").PressableOpacity, obj6);
    }
    tmp29 = null;
    if (null != pendingReply) {
      tmp29 = null;
      if (pendingReply.showMentionToggle) {
        tmp31 = pendingReply;
        tmp32 = colorString;
        num11 = 13;
        tmp30 = jsxs;
        obj8 = {};
        obj8.accessibilityRole = accessibilityRole;
        obj8.accessibilityState = accessibilityState;
        num12 = 12;
        intl4 = require("getSystemLocale").intl;
        obj8.accessibilityLabel = intl4.string(require("getSystemLocale").t.P8tvKG);
        tmp33 = pendingReply;
        tmp34 = colorString;
        intl5 = require("getSystemLocale").intl;
        string = intl5.string;
        t = require("getSystemLocale").t;
        if (pendingReply.shouldMention) {
          stringResult = string(t.PBgTSF);
        } else {
          stringResult = string(t["+LXBxU"]);
        }
        obj8.accessibilityHint = stringResult;
        num13 = 0.5;
        obj8.activeOpacity = 0.5;
        obj8.onPress = onToggleReplyMention;
        obj8.style = tmp ? tmp2.floatingMentionGroup : tmp2.replyMentionButton;
        tmp37 = pendingReply;
        tmp38 = colorString;
        num14 = 6;
        tmp36 = jsx;
        obj9 = {};
        tmp39 = c1;
        num15 = 21;
        obj9.source = require("registerAsset");
        obj9.size = require("Button").Icon.Sizes.CUSTOM;
        items2 = [, ];
        items2[0] = tmp2.replyMentionIcon;
        items2[1] = pendingReply.shouldMention && tmp2.replyMentionIconActive;
        obj9.style = items2;
        items3 = [, ];
        items3[0] = tmp36(require("Button").Icon, obj9);
        tmp41 = pendingReply;
        tmp42 = colorString;
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
        tmp44 = pendingReply;
        tmp45 = colorString;
        intl6 = require("getSystemLocale").intl;
        string2 = intl6.string;
        p9jC2r = require("getSystemLocale").t;
        if (pendingReply.shouldMention) {
          p9jC2r = p9jC2r.p9jC2r;
          string2Result = string2(p9jC2r);
        } else {
          string2Result = string2(p9jC2r.U7f3bK);
        }
        obj10.children = string2Result;
        obj10 = tmp40(require("Text").Text, obj10);
        items3[1] = obj10;
        obj8.children = items3;
        tmp30Result = tmp30(require("PressableBase").PressableOpacity, obj8);
      }
    }
    tmp48 = null;
    if (null != pendingReply) {
      tmp48 = null;
      if (pendingReply.showMentionToggle) {
        tmp48 = null;
        if (null != tmp17Result) {
          tmp49 = jsx;
          tmp50 = guildId;
          obj11 = {};
          obj11.style = tmp2.floatingDivider;
          tmp48 = jsx(guildId, obj11);
        }
      }
    }
    obj12 = { style: tmp2.contextBarRow };
    tmp53 = !tmp;
    tmp51 = jsxs;
    tmp52 = guildId;
    if (tmp53) {
      tmp53 = tmp17Result;
    }
    items4 = [, , ];
    items4[0] = tmp53;
    items4[1] = tmp13Result;
    tmp54 = tmp29;
    if (tmp) {
      tmp55 = jsxs;
      tmp56 = guildId;
      obj13 = {};
      obj13.style = tmp2.floatingRightActions;
      items5 = [, , ];
      items5[0] = tmp29;
      items5[1] = tmp48;
      items5[2] = tmp17Result;
      obj13.children = items5;
      tmp54 = jsxs(guildId, obj13);
    }
    items4[2] = tmp54;
    obj12.children = items4;
    return tmp51(tmp52, obj12);
  }
}
function ChatInputEditBar(onCancelEditing) {
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const tmp = callback4();
  let obj1 = require(3834) /* map */;
  const token = obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = require(3834) /* map */;
  const bound = Math.max(0, (token - obj2.useToken(importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
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
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.rtNXxN);
  const tmp4Result = callback(require(4126) /* Text */.Text, obj);
  obj = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.qv9j1K);
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
  obj1 = { source: importDefault(9042) };
  const Sizes = require(1273) /* Button */.Icon.Sizes;
  obj1.size = chatInputFloating ? Sizes.CUSTOM : Sizes.SMALL_20;
  let floatingCloseIcon;
  if (chatInputFloating) {
    floatingCloseIcon = tmp.floatingCloseIcon;
  }
  obj1.style = floatingCloseIcon;
  obj.children = callback(require(1273) /* Button */.Icon, obj1);
  const tmp6Result = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
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
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, Routes: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = { duration: 250, easing: require("Button").STANDARD_EASING };
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  let obj = {};
  obj = {};
  if (null == arg0) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  obj.backgroundColor = MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  obj.contextBar = obj;
  return obj;
});
let closure_15 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: importDefault(689).modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: importDefault(689).modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP };
  obj.contextBarRow = obj;
  obj.floatingReplyTextWrapper = { flexShrink: 1, minWidth: 0 };
  obj.contextCancelIconWrapper = { paddingHorizontal: 12, paddingVertical: 10 };
  obj.contextButtonText = { flexGrow: 1, flexShrink: 1, justifyContent: "center", alignSelf: "stretch", paddingRight: 12, paddingVertical: 10 };
  obj = { borderBottomWidth: closure_4.hairlineWidth, borderBottomColor: importDefault(689).colors.BORDER_MUTED, overflow: "hidden" };
  obj.floatingContextBar = obj;
  obj.replyMentionButton = { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 10 };
  obj.replyMentionButtonActive = { color: importDefault(689).colors.CONTROL_BRAND_FOREGROUND };
  const obj1 = { color: importDefault(689).colors.CONTROL_BRAND_FOREGROUND };
  obj.replyMentionIcon = { width: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(689).colors.TEXT_MUTED, marginRight: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  const obj2 = { width: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(689).colors.TEXT_MUTED, marginRight: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  obj.replyMentionIconActive = { tintColor: importDefault(689).colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingRightActions = { flexGrow: 1, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 };
  obj.floatingMentionGroup = { flexDirection: "row", alignItems: "center", gap: 2 };
  const obj3 = { tintColor: importDefault(689).colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingDivider = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  const obj4 = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.floatingCloseIcon = { width: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: importDefault(689).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: importDefault(689).colors.INTERACTIVE_ICON_DEFAULT };
  return obj;
});
let closure_16 = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,chatInputFloating,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...(chatInputFloating?{maxHeight:heightSv.get()}:{height:heightSv.get()})};}" };
let closure_17 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
let closure_18 = importAllResult.forwardRef((children) => {
  let num;
  let sharedValue;
  let ref;
  let closure_5;
  let obj = floatingContextBar(num[22]);
  const gradientValue = obj.useGradientValue(floatingContextBar(num[22]).GradientPercentage.END);
  floatingContextBar = floatingContextBar(num[9]).useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const backgroundColor = callback3(gradientValue).contextBar.backgroundColor;
  num = 40;
  const obj2 = floatingContextBar(num[9]);
  if (floatingContextBar) {
    num = 60;
  }
  let tmp2 = callback4();
  sharedValue = floatingContextBar(num[23]).useSharedValue(0);
  const obj3 = floatingContextBar(num[23]);
  let fn = function o() {
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
  const animatedStyle = floatingContextBar(num[23]).useAnimatedStyle(fn);
  ref = sharedValue.useRef(null);
  const items = [ref];
  closure_5 = sharedValue.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
  }, items);
  const imperativeHandle = sharedValue.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      const result = outer1_3.set(floatingContextBar(num[24]).withTiming(outer1_2, outer2_13));
    },
    componentDidEnter() {
      const result = outer1_3.set(floatingContextBar(num[24]).withTiming(outer1_2, outer2_13));
    },
    componentWillLeave(current) {
      outer1_4.current = current;
      let obj = floatingContextBar(num[24]);
      const fn = function n(arg0) {
        if (arg0) {
          floatingContextBar(23[23]).runOnJS(outer2_5)();
          const obj = floatingContextBar(23[23]);
        }
      };
      obj = { runOnJS: floatingContextBar(num[23]).runOnJS, handleTransitionFinished: outer1_5 };
      fn.__closure = obj;
      fn.__workletHash = 10908592279914;
      fn.__initData = outer2_17;
      const result = outer1_3.set(obj.withTiming(0, outer2_13, "respect-motion-settings", fn));
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
  return closure_10(backgroundColor(num[23]).View, obj);
});
const memoResult = importAllResult.memo(function ChatInputContextBar(channel) {
  let onCancelEditing;
  let onTapContextBarReply;
  let onToggleReplyMention;
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  const items = [channel, chatInputRef, pendingReply];
  const memo = importAllResult.useMemo(() => ({
    onCancelEditing() {
      const current = outer1_1.current;
      if (null != current) {
        current.handleCancelEditing();
      }
    },
    onCancelReplying() {
      if (null != outer1_2) {
        channel(pendingReply[25]).deletePendingReply(outer1_0.id);
        const obj2 = channel(pendingReply[25]);
        let obj = {};
        let id;
        if (null != outer1_2) {
          id = outer1_2.message.id;
        }
        obj.message_id = id;
        ({ id: obj4.channel_id, guild_id: obj4.guild_id } = outer1_0);
        obj.context_action = "reply";
        obj = channel(pendingReply[27]);
        obj.reason = obj.getContextBarCancelReason("reply", "cancel");
        const currentUser = outer2_7.getCurrentUser();
        let id1;
        if (null != currentUser) {
          id1 = currentUser.id;
        }
        let id2;
        if (null != outer1_2) {
          id2 = outer1_2.message.author.id;
        }
        obj.is_own_message = id1 === id2;
        chatInputRef(pendingReply[26]).track(outer2_8.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        const obj3 = chatInputRef(pendingReply[26]);
      }
    },
    onTapContextBarReply() {
      if (null != outer1_2) {
        const channel = outer1_2.channel;
        channel(pendingReply[28]).transitionTo(outer2_9.CHANNEL(channel.getGuildId(), outer1_2.channel.id, outer1_2.message.id));
        const obj = channel(pendingReply[28]);
      }
    },
    onToggleReplyMention() {
      if (null != outer1_2) {
        const result = channel(pendingReply[25]).setPendingReplyShouldMention(outer1_2.channel.id, !outer1_2.shouldMention);
        const obj = channel(pendingReply[25]);
      }
    }
  }), items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let obj = channel(pendingReply[29]);
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
    let obj2 = {};
    let obj3 = { onCancelReplying };
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
  return closure_11(channel(pendingReply[30]).TransitionGroup, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export { ChatInputReplyBar };
