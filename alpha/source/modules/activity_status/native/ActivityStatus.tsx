// Module ID: 10205
// Function ID: 10206
// Name: ActivityStatus
// Dependencies: [19, 17, 5107, 4719, 1390, 10206, 1085, 21, 5091, 558, 576, 504, 10207, 10208, 10209, 10210, 10215, 10216, 10225, 10227, 10214, 2]

// Module 10205 (ActivityStatus)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import ActivityStatusConstants from "ActivityStatusConstants" /* 10206 */;
import ApplicationStreamActivityStatusDefault from "ApplicationStreamActivityStatus" /* 10210 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10214 */;
import isGameActivityDefault from "isGameActivity" /* 10215 */;
import PresenceActivityStatusDefault from "PresenceActivityStatus" /* 10216 */;
import VoiceActivityStatusDefault from "VoiceActivityStatus" /* 10225 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 10227 */;
import react from "react" /* 19 */;
import PresenceStore_mod from "PresenceStore" /* 5107 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, type;

let c10;
let closure_12;
let unpackModuleId;
const View = react_native.View;
let PresenceStore = PresenceStore_mod;
const DOT_UNICODE = ActivityStatusConstants.DOT_UNICODE;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityStatus(userId) {
  let animate;
  let emojiSize;
  let first;
  let guildId;
  let hideEmoji;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let obj2;
  let textStyle;
  let tmp11;
  let tmp7;
  let tmp9;
  const tmp = userId;
  let tmp2 = textStyle;
  let obj = userId(textStyle[10]);
  const cResult = obj.c(47);
  userId = userId.userId;
  ({ guildId, iconStyle } = userId);
  textStyle = userId.textStyle;
  ({ emojiSize, maxFontSizeMultiplier } = userId);
  ({ animate, hideEmoji } = userId);
  let num = 14;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  PresenceStore = undefined === animate || animate;
  let closure_6 = undefined !== hideEmoji && hideEmoji;
  let tmp4 = hideIcon();
  let closure_7 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = closure_7;
    let items = [closure_7];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [PresenceStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== userId) {
    class G {
      constructor() {
        return PresenceStore.getActivities(userId);
      }
    }
    cResult[4] = userId;
    cResult[5] = G;
    tmp11 = G;
  } else {
    class G {
      constructor() {
        return PresenceStore.getActivities(userId);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  let tmp14 = iconStyle(tmp2[12])(userId);
  constants = tmp14;
  const tmp13 = iconStyle;
  if (cResult[6] === guildId) {
    let tmp26;
    let tmp27;
    class G {
      constructor() {
        return PresenceStore.getActivities(userId);
      }
    }
    const voiceChannel = tmp13(tmp2[13])(obj2).voiceChannel;
    if (cResult[9] !== stateFromStores1) {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
      if (stateFromStores1 != null) {
        class G {
          constructor() {
            return PresenceStore.getActivities(userId);
          }
        }
      }
      let tmp17 = null;
      if (null != undefined) {
        class G {
          constructor() {
            return PresenceStore.getActivities(userId);
          }
        }
        if (tmp18 != null) {
          class G {
            constructor() {
              return PresenceStore.getActivities(userId);
            }
          }
        }
        if (undefined == null) {
          class G {
            constructor() {
              return PresenceStore.getActivities(userId);
            }
          }
        }
        if ("" !== undefined) {
          class G {
            constructor() {
              return PresenceStore.getActivities(userId);
            }
          }
        }
        if (null != null) {
          class G {
            constructor() {
              return PresenceStore.getActivities(userId);
            }
          }
        } else {
          class G {
            constructor() {
              return PresenceStore.getActivities(userId);
            }
          }
        }
        tmp17 = tmp21;
      }
      cResult[9] = stateFromStores1;
      cResult[10] = tmp17;
    } else {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
    }
    let closure_11 = tmp15;
    const useGameMentionsAsPlainText = tmp(tmp2[14]).useGameMentionsAsPlainText;
    tmp(tmp2[14]);
    if (tmp15 != null) {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
    }
    const gameMentionsAsPlainText = useGameMentionsAsPlainText(tmp24);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
      let items2 = [closure_6];
      cResult[11] = items2;
      tmp26 = items2;
    } else {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
    }
    if (cResult[12] !== userId) {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
      cResult[12] = userId;
      cResult[13] = tmp28;
      tmp27 = tmp28;
    } else {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
    }
    const tmpResult6 = tmp(tmp2[11]);
    if (tmpResult6.useStateFromStores(tmp26, tmp27)) {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
    } else {
      class G {
        constructor() {
          return PresenceStore.getActivities(userId);
        }
      }
      if (stateFromStores != null) {
        class G {
          constructor() {
            return PresenceStore.getActivities(userId);
          }
        }
      }
      hideIcon = tmp30;
      if (tmp15 != null) {
        class G {
          constructor() {
            return PresenceStore.getActivities(userId);
          }
        }
      }
      const hideText = tmp32;
      if (cResult[14] === stateFromStores1) {
        class G {
          constructor() {
            return PresenceStore.getActivities(userId);
          }
        }
      }
      function renderActivity() {
        let items;
        let items1;
        let items2;
        if (null != constants) {
          let found;
          const arr3 = stateFromStores1;
          const tmp22 = authStore;
          const tmp25 = ApplicationStreamActivityStatusDefault;
          if (stateFromStores1 != null) {
            found = arr3.find(isGameActivityDefault);
          }
          const obj2 = { game: found, iconStyle: items, textStyle, maxFontSizeMultiplier, hideIcon, hideText };
          items = [closure_7.icon, iconStyle];
          return tmp22(tmp25, obj2);
        } else {
          let tmp3;
          let found1;
          const arr5 = stateFromStores1;
          if (stateFromStores1 != null) {
            found1 = arr5.find((type) => {
              type = type.type;
              return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
            });
          }
          if (null != found1) {
            const obj3 = { activity: found1, iconStyle: items1, textStyle, maxFontSizeMultiplier, hideIcon, hideText };
            items1 = [closure_7.icon, iconStyle];
            tmp3 = authStore(PresenceActivityStatusDefault, obj3);
          } else {
            tmp3 = null;
            if (null != voiceChannel) {
              const obj = { channel: tmp2, iconStyle: items2, textStyle, maxFontSizeMultiplier, hideIcon, hideText };
              items2 = [closure_7.icon, iconStyle];
              tmp3 = authStore(VoiceActivityStatusDefault, obj);
            }
          }
          return tmp3;
        }
      }
      cResult[14] = stateFromStores1;
      cResult[15] = true === tmp29;
      cResult[16] = null != undefined;
      cResult[17] = iconStyle;
      cResult[18] = maxFontSizeMultiplier;
      cResult[19] = tmp14;
      cResult[20] = tmp4.icon;
      cResult[21] = textStyle;
      cResult[22] = voiceChannel;
      cResult[23] = renderActivity;
    }
  }
  obj2 = { userId, guildId };
  cResult[6] = guildId;
  cResult[7] = userId;
  cResult[8] = obj2;
}) : (function ActivityStatus(userId) {
  let animate;
  let emojiSize;
  let iconStyle;
  let items4;
  let items5;
  let items6;
  let items8;
  let maxFontSizeMultiplier;
  let textStyle;
  userId = userId.userId;
  ({ iconStyle, textStyle, emojiSize } = userId);
  const guildId = userId.guildId;
  if (emojiSize === undefined) {
    emojiSize = 14;
  }
  ({ maxFontSizeMultiplier, animate } = userId);
  if (animate === undefined) {
    animate = true;
  }
  let flag = userId.hideEmoji;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_13();
  let tmp3 = dependencyMap;
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [PresenceStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const tmp6 = stateFromStores1(10207)(userId);
  const voiceChannel = stateFromStores1(10208)({ userId, guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = react.useMemo(() => {
    let found;
    const arr = stateFromStores1;
    if (stateFromStores1 != null) {
      found = arr.find((type) => type.type === constants.CUSTOM_STATUS);
    }
    if (null == found) {
      return null;
    } else {
      let tmp4;
      let trimmed;
      if (found.state != null) {
        trimmed = str.trim();
      }
      if (trimmed == null) {
        trimmed = null;
      }
      let tmp3 = null;
      if ("" !== trimmed) {
        tmp3 = trimmed;
      }
      if (null != tmp3) {
        tmp4 = found;
      } else {
        tmp4 = null;
      }
      return tmp4;
    }
  }, items2);
  let state;
  const useGameMentionsAsPlainText = userId(10209).useGameMentionsAsPlainText;
  userId(10209);
  const tmp2 = userId;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state);
  const items3 = [RelationshipStore];
  const tmp2Result = tmp2(504);
  if (tmp2Result.useStateFromStores(items3, () => RelationshipStore.isBlockedOrIgnored(userId))) {
    return null;
  } else {
    let tmp19Result;
    let bot;
    if (stateFromStores != null) {
      bot = stateFromStores.bot;
    }
    let state1;
    if (memo != null) {
      state1 = memo.state;
    }
    if (null != tmp6) {
      let found;
      const tmp19 = closure_10;
      const tmp5Result = stateFromStores1(10210);
      if (stateFromStores1 != null) {
        found = stateFromStores1.find(tmp5(10215));
      }
      const obj3 = { game: found, iconStyle: items4, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
      items4 = [tmp.icon, iconStyle];
      tmp19Result = tmp19(tmp5Result, obj3);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        const obj4 = { activity: found1, iconStyle: items5, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
        items5 = [tmp.icon, iconStyle];
        tmp19Result = closure_10(tmp5(10216), obj4);
      } else {
        tmp19Result = null;
        if (null != voiceChannel) {
          const obj5 = { channel: voiceChannel, iconStyle: items6, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
          items6 = [tmp.icon, iconStyle];
          tmp19Result = closure_10(tmp5(10225), obj5);
        }
      }
    }
    let tmp22 = null;
    if (null != memo) {
      let tmp24Result = null;
      if (null != memo) {
        let tmp26 = null != memo.emoji;
        const tmp24 = closure_12;
        const tmp25 = closure_11;
        if (tmp26) {
          tmp26 = !flag;
        }
        if (tmp26) {
          const obj6 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp26 = closure_10(tmp5(10227), obj6);
        }
        const items7 = [tmp26, ];
        let tmp28 = null != memo.state;
        if (tmp28) {
          const obj7 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp28 = closure_10(tmp5(10214), obj7);
        }
        const obj8 = { children: items7 };
        items7[1] = tmp28;
        tmp24Result = tmp24(tmp25, obj8);
      }
      tmp22 = tmp24Result;
    }
    const obj9 = { style: tmp.container, children: items8 };
    items8 = [tmp19Result, , ];
    let tmp32 = null != tmp19Result;
    const tmp30 = closure_12;
    const tmp31 = View;
    if (tmp32) {
      tmp32 = null != tmp22;
    }
    if (tmp32) {
      const obj10 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DOT_UNICODE };
      tmp32 = closure_10(tmp5(10214), obj10);
    }
    items8[1] = tmp32;
    items8[2] = tmp22;
    return tmp30(tmp31, obj9);
  }
});
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default tmp3;
