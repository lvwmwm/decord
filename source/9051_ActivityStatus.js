// Module ID: 9051
// Function ID: 71080
// Name: ActivityStatus
// Dependencies: []
// Exports: default

// Module 9051 (ActivityStatus)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DOT_UNICODE = arg1(dependencyMap[5]).DOT_UNICODE;
const ActivityTypes = arg1(dependencyMap[6]).ActivityTypes;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_13 = arg1(dependencyMap[8]).createStyles({ container: {}, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default function ActivityStatus(guildId) {
  let textStyle;
  const userId = guildId.userId;
  const arg1 = userId;
  ({ iconStyle: closure_1, textStyle } = guildId);
  const dependencyMap = textStyle;
  let num = guildId.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  const maxFontSizeMultiplier = guildId.maxFontSizeMultiplier;
  const React = maxFontSizeMultiplier;
  let flag = guildId.animate;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = guildId.hideEmoji;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let View;
  let closure_5;
  let closure_6;
  let voiceChannel;
  let closure_8;
  let closure_9;
  const tmp = callback2();
  View = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [voiceChannel];
  const stateFromStores = obj.useStateFromStores(items, () => voiceChannel.getUser(userId));
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => stateFromStores1.getActivities(userId));
  closure_5 = stateFromStores1;
  closure_6 = importDefault(dependencyMap[10])(userId);
  voiceChannel = importDefault(dependencyMap[11])({ userId, guildId: guildId.guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = React.useMemo(() => {
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
  let obj2 = arg1(dependencyMap[12]);
  let state;
  if (null != memo) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  let obj3 = arg1(dependencyMap[9]);
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
    const tmp9 = () => {
      if (null != closure_6) {
        let obj = {};
        let found;
        if (null != stateFromStores1) {
          found = stateFromStores1.find(callback(textStyle[14]));
        }
        obj.game = found;
        const items = [tmp.icon, callback];
        obj.iconStyle = items;
        obj.textStyle = textStyle;
        obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
        obj.hideIcon = closure_8;
        obj.hideText = closure_9;
        return callback2(callback(textStyle[13]), obj);
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
          const items1 = [tmp.icon, callback];
          obj.iconStyle = items1;
          obj.textStyle = textStyle;
          obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj.hideIcon = closure_8;
          obj.hideText = closure_9;
          let tmp13 = callback2(callback(textStyle[15]), obj);
        } else {
          tmp13 = null;
          if (null != voiceChannel) {
            obj = { channel: voiceChannel };
            const items2 = [tmp.icon, callback];
            obj.iconStyle = items2;
            obj.textStyle = textStyle;
            obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
            obj.hideIcon = closure_8;
            obj.hideText = closure_9;
            tmp13 = callback2(callback(textStyle[16]), obj);
          }
        }
        return tmp13;
      }
    }();
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
          tmp14 = callback(importDefault(dependencyMap[17]), obj);
        }
        const items4 = [tmp14, ];
        let tmp18 = null != memo.state;
        if (tmp18) {
          obj1 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp18 = callback(importDefault(dependencyMap[18]), obj1);
        }
        items4[1] = tmp18;
        obj.children = items4;
        tmp12Result = closure_12(closure_11, obj);
        const tmp12 = closure_12;
        const tmp13 = closure_11;
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
      obj3 = { 0: true, 0: true, 9223372036854775807: true, 0: true, 9223372036854775807: true, style: textStyle, maxFontSizeMultiplier, children: closure_8 };
      tmp24 = callback(importDefault(dependencyMap[18]), obj3);
    }
    items5[1] = tmp24;
    items5[2] = tmp10;
    obj2.children = items5;
    return closure_12(View, obj2);
  }
};
