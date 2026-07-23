// Module ID: 16481
// Function ID: 128410
// Name: GuildRoleSubscriptionRolePreview
// Dependencies: [31, 27, 1849, 33, 4130, 689, 1212, 624, 4319, 5085, 4126, 665, 1273, 5490, 2]
// Exports: GuildRoleSubscriptionRolePreview

// Module 16481 (GuildRoleSubscriptionRolePreview)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { width: 40, height: 40, borderRadius: 20 };
_createForOfIteratorHelperLoose.content = { marginStart: 16 };
_createForOfIteratorHelperLoose.contextRow = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export const GuildRoleSubscriptionRolePreview = function GuildRoleSubscriptionRolePreview(content) {
  let guildId;
  let roleColor;
  let roleName;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    content = intl.string(require(1212) /* getSystemLocale */.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj1 = importDefault(4319);
  obj = { style: items1 };
  items1 = [tmp3.container, style];
  const name = obj1.useName(guildId, null, stateFromStores);
  obj = { style: tmp3.avatar, source: { uri: roleImage } };
  const items2 = [callback(importDefault(5085), obj), ];
  obj1 = { style: tmp3.content };
  const obj2 = { style: tmp3.contextRow };
  const obj3 = { variant: "text-md/semibold", color: "interactive-text-active" };
  const obj4 = { color: importAll(665).int2hex(roleColor) };
  obj3.style = obj4;
  obj3.children = name;
  const items3 = [callback(require(4126) /* Text */.Text, obj3), callback(require(1273) /* Button */.Spacer, { size: 4 }), callback(importDefault(5490), { name: roleName, source: { uri: roleImage }, size: 16 }), callback(require(1273) /* Button */.Spacer, { size: 8 }), callback(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" })];
  obj2.children = items3;
  const items4 = [callback2(View, obj2), ];
  const obj5 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
  items4[1] = callback(require(4126) /* Text */.Text, obj5);
  obj1.children = items4;
  items2[1] = callback2(View, obj1);
  obj.children = items2;
  return callback2(View, obj);
};
