// Module ID: 9102
// Function ID: 71372
// Name: ActivityStatus
// Dependencies: [31, 27, 4217, 3767, 1849, 9103, 653, 33, 4130, 566, 9104, 9105, 9106, 9107, 9112, 9113, 9121, 9125, 9111, 2]
// Exports: default

// Module 9102 (ActivityStatus)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { DOT_UNICODE } from "TOOLTIP_DELAY_MS";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default function ActivityStatus(guildId) {
  let importDefault;
  let textStyle;
  const userId = guildId.userId;
  ({ iconStyle: importDefault, textStyle } = guildId);
  let num = guildId.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  const maxFontSizeMultiplier = guildId.maxFontSizeMultiplier;
  let flag = guildId.animate;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = guildId.hideEmoji;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let c4;
  let stateFromStores1;
  let closure_6;
  let voiceChannel;
  let closure_8;
  let closure_9;
  let tmp = callback2();
  c4 = tmp;
  let obj = userId(textStyle[9]);
  let items = [voiceChannel];
  const stateFromStores = obj.useStateFromStores(items, () => voiceChannel.getUser(userId));
  let obj1 = userId(textStyle[9]);
  let items1 = [stateFromStores1];
  stateFromStores1 = obj1.useStateFromStores(items1, () => stateFromStores1.getActivities(userId));
  closure_6 = importDefault(textStyle[10])(userId);
  voiceChannel = importDefault(textStyle[11])({ userId, guildId: guildId.guildId }).voiceChannel;
  let items2 = [stateFromStores1];
  const memo = maxFontSizeMultiplier.useMemo(() => {
    let found;
    if (null != stateFromStores1) {
      found = stateFromStores1.find((type) => type.type === constants.CUSTOM_STATUS);
    }
    if (null == found) {
      return null;
    } else {
      let trimmed;
      if (null != found.state) {
        trimmed = str.trim();
      }
      let tmp4 = null;
      if (null != trimmed) {
        tmp4 = trimmed;
      }
      let tmp5 = null;
      if ("" !== tmp4) {
        tmp5 = tmp4;
      }
      if (null != tmp5) {
        let tmp6 = found;
      } else {
        tmp6 = null;
      }
      return tmp6;
    }
  }, items2);
  let obj2 = userId(textStyle[12]);
  let state;
  if (null != memo) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  let obj3 = userId(textStyle[9]);
  const items3 = [closure_6];
  if (obj3.useStateFromStores(items3, () => blockedOrIgnored.isBlockedOrIgnored(userId))) {
    return null;
  } else {
    let bot;
    if (null != stateFromStores) {
      bot = stateFromStores.bot;
    }
    closure_8 = true === bot;
    let state1;
    if (null != memo) {
      state1 = memo.state;
    }
    closure_9 = null != state1;
    const tmp9 = (() => {
      if (null != closure_6) {
        let obj = {};
        let found;
        if (null != stateFromStores1) {
          found = stateFromStores1.find(outer1_1(textStyle[14]));
        }
        obj.game = found;
        const items = [_undefined.icon, closure_1];
        obj.iconStyle = items;
        obj.textStyle = textStyle;
        obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
        obj.hideIcon = closure_8;
        obj.hideText = closure_9;
        return outer1_10(outer1_1(textStyle[13]), obj);
      } else {
        let found1;
        if (null != stateFromStores1) {
          found1 = stateFromStores1.find((type) => {
            type = type.type;
            let tmp = type !== constants.CUSTOM_STATUS;
            if (tmp) {
              tmp = type !== constants.HANG_STATUS;
            }
            return tmp;
          });
        }
        if (null != found1) {
          obj = { activity: found1 };
          const items1 = [_undefined.icon, closure_1];
          obj.iconStyle = items1;
          obj.textStyle = textStyle;
          obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj.hideIcon = closure_8;
          obj.hideText = closure_9;
          let tmp13 = outer1_10(outer1_1(textStyle[15]), obj);
        } else {
          tmp13 = null;
          if (null != voiceChannel) {
            obj = { channel: voiceChannel };
            const items2 = [_undefined.icon, closure_1];
            obj.iconStyle = items2;
            obj.textStyle = textStyle;
            obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
            obj.hideIcon = closure_8;
            obj.hideText = closure_9;
            tmp13 = outer1_10(outer1_1(textStyle[16]), obj);
          }
        }
        return tmp13;
      }
    })();
    let tmp10 = null;
    if (null != memo) {
      let tmp12Result = null;
      if (null != memo) {
        obj = {};
        let tmp14 = null != memo.emoji;
        if (tmp14) {
          tmp14 = !flag2;
        }
        if (tmp14) {
          obj = { emoji: memo.emoji, size: num, animate: flag, style: tmp.emoji };
          tmp14 = callback(importDefault(textStyle[17]), obj);
        }
        const items4 = [tmp14, ];
        let tmp18 = null != memo.state;
        if (tmp18) {
          obj1 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp18 = callback(importDefault(textStyle[18]), obj1);
        }
        items4[1] = tmp18;
        obj.children = items4;
        tmp12Result = closure_12(closure_11, obj);
        const tmp12 = closure_12;
        let tmp13 = closure_11;
      }
      tmp10 = tmp12Result;
    }
    obj2 = { style: tmp.container };
    const items5 = [tmp9, , ];
    let tmp24 = null != tmp9;
    if (tmp24) {
      tmp24 = null != tmp10;
    }
    if (tmp24) {
      obj3 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8 };
      tmp24 = callback(importDefault(textStyle[18]), obj3);
    }
    items5[1] = tmp24;
    items5[2] = tmp10;
    obj2.children = items5;
    return closure_12(c4, obj2);
  }
};
