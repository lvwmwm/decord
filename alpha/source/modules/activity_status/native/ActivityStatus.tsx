// Module ID: 10923
// Function ID: 10924
// Name: ActivityStatus
// Dependencies: [19, 17, 5895, 5083, 1385, 10924, 21, 5141, 504, 10925, 10926, 5896, 10927, 10928, 10933, 10934, 10942, 10944, 10932, 2]
// Exports: default

// Module 10923 (ActivityStatus)
import react_native from "react-native" /* 17 */;
import ActivityStatusConstants from "ActivityStatusConstants" /* 10924 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5895 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let type;

let c10;
let c9;
let unpackModuleId;
const View = react_native.View;
const DOT_UNICODE = ActivityStatusConstants.DOT_UNICODE;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default function ActivityStatus(userId) {
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
  const tmp = closure_12();
  let tmp3 = dependencyMap;
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [PresenceStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const tmp6 = stateFromStores1(10925)(userId);
  const voiceChannel = stateFromStores1(10926)({ userId, guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = react.useMemo(() => {
    let found;
    const arr = stateFromStores1;
    if (stateFromStores1 != null) {
      found = arr.find((type) => type.type === userId(closure_1_2[11]).ActivityTypes.CUSTOM_STATUS);
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
  const useGameMentionsAsPlainText = userId(10927).useGameMentionsAsPlainText;
  userId(10927);
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
      const tmp19 = closure_9;
      const tmp5Result = stateFromStores1(10928);
      if (stateFromStores1 != null) {
        found = stateFromStores1.find(tmp5(10933));
      }
      const obj3 = { game: found, iconStyle: items4, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
      items4 = [tmp.icon, iconStyle];
      tmp19Result = tmp19(tmp5Result, obj3);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          const tmp3 = type !== userId(dependencyMap[11]).ActivityTypes.CUSTOM_STATUS && type !== userId(dependencyMap[11]).ActivityTypes.HANG_STATUS;
          return tmp3;
        });
      }
      if (null != found1) {
        const obj4 = { activity: found1, iconStyle: items5, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
        items5 = [tmp.icon, iconStyle];
        tmp19Result = closure_9(tmp5(10934), obj4);
      } else {
        tmp19Result = null;
        if (null != voiceChannel) {
          const obj5 = { channel: voiceChannel, iconStyle: items6, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
          items6 = [tmp.icon, iconStyle];
          tmp19Result = closure_9(tmp5(10942), obj5);
        }
      }
    }
    let tmp22 = null;
    if (null != memo) {
      let tmp24Result = null;
      if (null != memo) {
        let tmp26 = null != memo.emoji;
        const tmp24 = closure_11;
        const tmp25 = closure_10;
        if (tmp26) {
          tmp26 = !flag;
        }
        if (tmp26) {
          const obj6 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp26 = closure_9(tmp5(10944), obj6);
        }
        const items7 = [tmp26, ];
        let tmp28 = null != memo.state;
        if (tmp28) {
          const obj7 = { variant: "body-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp28 = closure_9(tmp5(10932), obj7);
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
    const tmp30 = closure_11;
    const tmp31 = View;
    if (tmp32) {
      tmp32 = null != tmp22;
    }
    if (tmp32) {
      const obj10 = { variant: "body-xs/normal", style: textStyle, maxFontSizeMultiplier, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DOT_UNICODE };
      tmp32 = closure_9(tmp5(10932), obj10);
    }
    items8[1] = tmp32;
    items8[2] = tmp22;
    return tmp30(tmp31, obj9);
  }
};
