// Module ID: 14805
// Function ID: 111622
// Name: HAPPENING_NOW_CONTENT_HEIGHT
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: CustomStatusActivityCard

// Module 14805 (HAPPENING_NOW_CONTENT_HEIGHT)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import closure_8 from "result";
import result from "result";
import { StatusTypes } from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_6, Image: closure_7 } = result);
const HAPPENING_NOW_CONTENT_HEIGHT = result.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = result.STATUS_CUTOUT_SMALL;
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = result);
let obj = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: items };
const items = [{ rotate: "24deg" }];
const items1 = [obj, , , , , ];
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items2 };
const items2 = [{ rotate: "-12deg" }];
items1[1] = obj;
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items3 };
const items3 = [{ rotate: "12deg" }];
items1[2] = obj;
const items4 = [{ rotate: "-24deg" }];
items1[3] = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, transform: items4 };
const items5 = [{ rotate: "12deg" }];
items1[4] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items5 };
const items6 = [{ rotate: "-12deg" }];
items1[5] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items6 };
let closure_16 = result.createStyles((arg0) => {
  let obj = { customStatusContainer: { 9223372036854775807: null, 0: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", -9223372036854775808: true }, customStatusContextContainer: { "Null": "<string:812729690>", "Null": "<string:822083584>", "Null": "<string:1649267442>", "Null": "<string:1080352784>" }, statusAvatar: { marginBottom: 2 }, largeEmoji: {}, smallEmoji: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
  obj = { justifyContent: "center" };
  let num;
  if (arg0) {
    num = 12;
  }
  obj.paddingLeft = num;
  obj.cardContainer = obj;
  obj = { useButtonComponent: 1581322596, useEventsButton: 1912603109, position: 90, width: HAPPENING_NOW_CONTENT_HEIGHT, aspectRatio: 1199981057, overflow: -137887742, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[9]).radii.sm };
  obj.emojisContainer = obj;
  return obj;
});
result = result.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx");

export const CustomStatusActivityCard = function CustomStatusActivityCard(user) {
  let activity;
  let fullwidth;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let panelVariant;
  let status;
  let tmp3;
  let userTitle;
  user = user.user;
  const arg1 = user;
  ({ guildId, activity } = user);
  const importDefault = activity;
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let dependencyMap;
  let closure_3;
  let callback;
  let React;
  const tmp = callback4(null == activity.emoji);
  dependencyMap = tmp;
  [tmp3, closure_3] = callback(React.useState(undefined), 2);
  const tmp4 = callback(React.useState(undefined), 2);
  const first = tmp4[0];
  callback = first;
  React = tmp4[1];
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const status = closure_8.getStatus(user.id);
    const obj = {};
    let tmp2 = null;
    if (status !== constants.OFFLINE) {
      tmp2 = status;
    }
    obj.status = tmp2;
    obj.isMobileOnline = closure_8.isMobileOnline(user.id);
    obj.isVROnline = closure_8.isVROnline(user.id);
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { userId: user.id, guildId };
  const tmp2 = callback(React.useState(undefined), 2);
  let obj2 = arg1(dependencyMap[12]);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[11])(obj) });
  const items1 = [activity.emoji];
  const effect = React.useEffect(() => {
    function _loadEmoji() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _loadEmoji = obj;
      return obj(...arguments);
    }
    !function loadEmoji() {
      return _loadEmoji(...arguments);
    }();
  }, items1);
  let num = 2;
  if (null != activity.emoji) {
    num = 1;
  }
  let obj3 = arg1(dependencyMap[15]);
  const gameMentionsAsPlainText = obj3.useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, , ];
  let obj4 = arg1(dependencyMap[16]);
  items2[1] = obj4.getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  obj = { onPress };
  let str = "stretchy";
  const tmp12 = callback2;
  const tmp7 = importDefault(dependencyMap[11])(obj);
  if (fullwidth) {
    str = "full";
  }
  obj.width = str;
  obj.style = tmp.cardContainer;
  obj.accessibilityLabel = joined;
  obj.panelVariant = panelVariant;
  const obj1 = { style: tmp.customStatusContainer };
  if (null != activity.emoji) {
    obj2 = {};
    obj3 = {};
    const items3 = [tmp.emojisContainer, ];
    obj4 = { backgroundColor: tmp3 };
    items3[1] = obj4;
    obj3.style = items3;
    let obj10 = arg1(dependencyMap[18]);
    if (obj10.isAndroid()) {
      let tmp25 = null != first;
      if (tmp25) {
        const obj5 = { source: first, style: tmp.largeEmoji };
        tmp25 = callback2(closure_7, obj5);
      }
      let tmp24 = tmp25;
    } else {
      const obj6 = { emoji: activity.emoji, size: 32, style: tmp.largeEmoji, animate: false };
      tmp24 = callback2(importDefault(dependencyMap[19]), obj6);
    }
    const items4 = [
      tmp24,
      items1.map((arg0, arg1) => {
          let obj = user(tmp[18]);
          if (obj.isAndroid()) {
            let tmp9 = null != first;
            if (tmp9) {
              obj = { source: first };
              const items = [tmp.smallEmoji, arg0];
              obj.style = items;
              tmp9 = callback(closure_7, obj, arg1);
            }
            let tmp6 = tmp9;
          } else {
            obj = { emoji: activity.emoji, size: 16 };
            const items1 = [callback.smallEmoji, arg0];
            obj.style = items1;
            obj.animate = false;
            tmp6 = callback(activity(tmp[19]), obj, arg1);
          }
          return tmp6;
        })
    ];
    obj3.children = items4;
    const items5 = [callback3(closure_6, obj3), ];
    const obj7 = { style: tmp.customStatusContextContainer };
    const obj8 = { user, avatarDecoration: user.avatarDecoration, size: arg1(dependencyMap[20]).AvatarSizes.XSMALL, guildId, status, isMobileOnline, isVROnline, style: tmp.statusAvatar, autoStatusCutout: STATUS_CUTOUT_SMALL };
    const items6 = [callback2(arg1(dependencyMap[20]).Avatar, obj8), , ];
    const obj9 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items6[1] = callback2(arg1(dependencyMap[17]).HappeningNowCardHeader, obj9);
    const state = activity.state;
    let length;
    if (null != state) {
      length = state.length;
    }
    let num6 = 0;
    if (null != length) {
      num6 = length;
    }
    let tmp36 = num6 > 0;
    if (tmp36) {
      obj10 = { lineClamp: num, children: gameMentionsAsPlainText };
      tmp36 = callback2(arg1(dependencyMap[21]).Text, obj10);
    }
    items6[2] = tmp36;
    obj7.children = items6;
    items5[1] = callback3(closure_6, obj7);
    obj2.children = items5;
    let tmp16Result = tmp16(closure_14, obj2);
    const tmp17 = closure_14;
    const tmp18 = closure_6;
    const tmp29 = callback3;
    const tmp30 = closure_6;
  } else {
    const obj11 = {};
    const obj12 = { user, avatarDecoration: user.avatarDecoration, size: arg1(dependencyMap[20]).AvatarSizes.LARGE, guildId, status, isMobileOnline, isVROnline, autoStatusCutout: true };
    const items7 = [callback2(arg1(dependencyMap[20]).Avatar, obj12), ];
    const obj13 = { style: tmp.customStatusContextContainer };
    const obj14 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    const items8 = [callback2(arg1(dependencyMap[17]).HappeningNowCardHeader, obj14), ];
    const obj15 = { lineClamp: num, children: gameMentionsAsPlainText };
    items8[1] = callback2(arg1(dependencyMap[21]).Text, obj15);
    obj13.children = items8;
    items7[1] = callback3(closure_6, obj13);
    obj11.children = items7;
    tmp16Result = callback3(closure_14, obj11);
  }
  obj1.children = tmp16Result;
  obj.children = callback2(closure_6, obj1);
  return tmp12(importDefault(dependencyMap[17]), obj);
};
