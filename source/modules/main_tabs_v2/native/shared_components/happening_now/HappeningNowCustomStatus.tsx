// Module ID: 14939
// Function ID: 113891
// Name: HAPPENING_NOW_CONTENT_HEIGHT
// Dependencies: [5, 57, 31, 27, 4217, 14183, 482, 33, 4130, 689, 624, 4361, 8516, 14940, 14941, 9067, 8450, 14184, 477, 9087, 1273, 4126, 2]
// Exports: CustomStatusActivityCard

// Module 14939 (HAPPENING_NOW_CONTENT_HEIGHT)
import closure_3 from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { StatusTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, Image: closure_7 } = get_ActivityIndicator);
const HAPPENING_NOW_CONTENT_HEIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = HAPPENING_NOW_PANELS_CONTAINER_PADDING.STATUS_CUTOUT_SMALL;
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let obj = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: items };
items = [{ rotate: "24deg" }];
let items1 = [obj, , , , , ];
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items2 };
items2 = [{ rotate: "-12deg" }];
items1[1] = obj;
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items3 };
items3 = [{ rotate: "12deg" }];
items1[2] = obj;
let items4 = [{ rotate: "-24deg" }];
items1[3] = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, transform: items4 };
let items5 = [{ rotate: "12deg" }];
items1[4] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items5 };
let items6 = [{ rotate: "-12deg" }];
items1[5] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items6 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { customStatusContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center" }, customStatusContextContainer: { flexShrink: 1, flexDirection: "column", marginLeft: 12, gap: 2 }, statusAvatar: { marginBottom: 2 }, largeEmoji: { width: 32, height: 32, borderRadius: 2, overflow: "hidden" }, smallEmoji: { position: "absolute", width: 16, height: 16, borderRadius: 2, opacity: 0.6 } };
  obj = { justifyContent: "center" };
  let num;
  if (arg0) {
    num = 12;
  }
  obj.paddingLeft = num;
  obj.cardContainer = obj;
  obj = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, justifyContent: "center", alignItems: "center", borderRadius: importDefault(689).radii.sm, overflow: "hidden" };
  obj.emojisContainer = obj;
  return obj;
});
const result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx");

export const CustomStatusActivityCard = function CustomStatusActivityCard(user) {
  let activity;
  let c3;
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
  ({ guildId, activity } = user);
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let dependencyMap;
  c3 = undefined;
  let first;
  let React;
  const tmp = callback3(null == activity.emoji);
  dependencyMap = tmp;
  [tmp3, c3] = first(React.useState(undefined), 2);
  const tmp4 = first(React.useState(undefined), 2);
  first = tmp4[0];
  React = tmp4[1];
  let obj = user(624);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const status = outer1_8.getStatus(user.id);
    const obj = {};
    let tmp2 = null;
    if (status !== outer1_11.OFFLINE) {
      tmp2 = status;
    }
    obj.status = tmp2;
    obj.isMobileOnline = outer1_8.isMobileOnline(user.id);
    obj.isVROnline = outer1_8.isVROnline(user.id);
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { userId: user.id, guildId };
  let tmp2 = first(React.useState(undefined), 2);
  let obj2 = user(8516);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: activity(4361)(obj) });
  let items1 = [activity.emoji];
  const effect = React.useEffect(() => {
    function _loadEmoji() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    !(function loadEmoji() {
      return _loadEmoji(...arguments);
    })();
  }, items1);
  let num = 2;
  if (null != activity.emoji) {
    num = 1;
  }
  let obj3 = user(9067);
  const gameMentionsAsPlainText = obj3.useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, , ];
  let obj4 = user(8450);
  items2[1] = obj4.getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  obj = { onPress };
  let str = "stretchy";
  const tmp12 = callback;
  const tmp7 = activity(4361)(obj);
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
    let obj10 = user(477);
    if (obj10.isAndroid()) {
      let tmp25 = null != first;
      if (tmp25) {
        const obj5 = { source: first, style: tmp.largeEmoji };
        tmp25 = callback(closure_7, obj5);
      }
      let tmp24 = tmp25;
    } else {
      const obj6 = { emoji: activity.emoji, size: 32, style: tmp.largeEmoji, animate: false };
      tmp24 = callback(activity(9087), obj6);
    }
    const items4 = [
      tmp24,
      items1.map((arg0, arg1) => {
          let obj = user(_undefined[18]);
          if (obj.isAndroid()) {
            let tmp9 = null != first;
            if (tmp9) {
              obj = { source: first };
              const items = [_undefined.smallEmoji, arg0];
              obj.style = items;
              tmp9 = outer1_12(outer1_7, obj, arg1);
            }
            let tmp6 = tmp9;
          } else {
            obj = { emoji: activity.emoji, size: 16 };
            const items1 = [_undefined.smallEmoji, arg0];
            obj.style = items1;
            obj.animate = false;
            tmp6 = outer1_12(activity(_undefined[19]), obj, arg1);
          }
          return tmp6;
        })
    ];
    obj3.children = items4;
    const items5 = [callback2(closure_6, obj3), ];
    const obj7 = { style: tmp.customStatusContextContainer };
    const obj8 = { user, avatarDecoration: user.avatarDecoration, size: user(1273).AvatarSizes.XSMALL, guildId, status, isMobileOnline, isVROnline, style: tmp.statusAvatar, autoStatusCutout: STATUS_CUTOUT_SMALL };
    const items6 = [callback(user(1273).Avatar, obj8), , ];
    const obj9 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items6[1] = callback(user(14184).HappeningNowCardHeader, obj9);
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
      obj10 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: num, maxFontSizeMultiplier: 2, children: gameMentionsAsPlainText };
      tmp36 = callback(user(4126).Text, obj10);
    }
    items6[2] = tmp36;
    obj7.children = items6;
    items5[1] = callback2(closure_6, obj7);
    obj2.children = items5;
    let tmp16Result = tmp16(closure_14, obj2);
    const tmp17 = closure_14;
    const tmp18 = closure_6;
    const tmp29 = callback2;
    const tmp30 = closure_6;
  } else {
    const obj11 = {};
    const obj12 = { user, avatarDecoration: user.avatarDecoration, size: user(1273).AvatarSizes.LARGE, guildId, status, isMobileOnline, isVROnline, autoStatusCutout: true };
    const items7 = [callback(user(1273).Avatar, obj12), ];
    const obj13 = { style: tmp.customStatusContextContainer };
    const obj14 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    const items8 = [callback(user(14184).HappeningNowCardHeader, obj14), ];
    const obj15 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: num, maxFontSizeMultiplier: 2, children: gameMentionsAsPlainText };
    items8[1] = callback(user(4126).Text, obj15);
    obj13.children = items8;
    items7[1] = callback2(closure_6, obj13);
    obj11.children = items7;
    tmp16Result = callback2(closure_14, obj11);
  }
  obj1.children = tmp16Result;
  obj.children = callback(closure_6, obj1);
  return tmp12(activity(14184), obj);
};
