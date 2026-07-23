// Module ID: 14127
// Function ID: 108743
// Name: GuildRoleSubscriptionMemberPreview
// Dependencies: [31, 27, 1849, 33, 4130, 689, 1212, 566, 4319, 1392, 5489, 5085, 4126, 665, 1273, 5490, 2]
// Exports: GuildRoleSubscriptionMemberPreview

// Module 14127 (GuildRoleSubscriptionMemberPreview)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { width: 40, height: 40, borderRadius: 20 };
_createForOfIteratorHelperLoose.content = { marginStart: 16 };
_createForOfIteratorHelperLoose.contextRow = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  let guildId;
  let role;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    content = intl.string(require(1212) /* getSystemLocale */.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  importDefault(4319);
  if (null == role) {
    return null;
  } else {
    let avatarURL;
    if (null != stateFromStores) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (null == avatarURL) {
      let obj2 = importDefault(1392);
      avatarURL = obj2.getDefaultAvatarURL(undefined, undefined);
    }
    const source = importDefault(1392).makeSource(avatarURL);
    let obj3 = require(5489) /* getRoleIconSource */;
    const roleIconData = obj3.getRoleIconData(role, 16);
    obj = {};
    const items1 = [tmp3.container, style];
    obj.style = items1;
    obj = { style: tmp3.avatar, source };
    const items2 = [callback(importDefault(5085), obj), ];
    const obj1 = { style: tmp3.content };
    obj2 = { style: tmp3.contextRow };
    obj3 = { variant: "text-md/semibold", color: "interactive-text-active" };
    const obj4 = {};
    let obj10 = importAll(665);
    obj4.color = obj10.int2hex(role.color);
    obj3.style = obj4;
    obj3.children = tmp5;
    const items3 = [callback(require(4126) /* Text */.Text, obj3), , , ];
    let tmp19Result = null;
    if (null != roleIconData) {
      const obj5 = {};
      const obj6 = { size: 4 };
      const items4 = [callback(require(1273) /* Button */.Spacer, obj6), ];
      const obj7 = { name: role.name };
      let tmp26;
      if (null != roleIconData.customIconSrc) {
        const obj8 = { uri: roleIconData.customIconSrc };
        tmp26 = obj8;
      }
      obj7.source = tmp26;
      obj7.unicodeEmoji = roleIconData.unicodeEmoji;
      obj7.size = 16;
      items4[1] = callback(importDefault(5490), obj7);
      obj5.children = items4;
      tmp19Result = closure_8(closure_7, obj5);
      const tmp19 = closure_8;
      const tmp20 = closure_7;
      const tmp21 = callback;
      const tmp25 = importDefault(5490);
    }
    items3[1] = tmp19Result;
    const obj9 = { size: 8 };
    items3[2] = callback(require(1273) /* Button */.Spacer, obj9);
    items3[3] = callback(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    obj2.children = items3;
    const items5 = [closure_8(View, obj2), ];
    obj10 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
    items5[1] = callback(require(4126) /* Text */.Text, obj10);
    obj1.children = items5;
    items2[1] = closure_8(View, obj1);
    obj.children = items2;
    return closure_8(View, obj);
  }
};
