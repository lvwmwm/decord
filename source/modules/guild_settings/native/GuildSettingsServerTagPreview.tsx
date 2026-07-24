// Module ID: 12972
// Function ID: 100605
// Name: GuildSettingsServerTagPreview
// Dependencies: [5, 57, 31, 27, 1849, 7721, 33, 4130, 689, 566, 4319, 1392, 12973, 4126, 1212, 4541, 10327, 8620, 12974, 13018, 4543, 5167, 2]
// Exports: default

// Module 12972 (GuildSettingsServerTagPreview)
import items from "items";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.notice = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { flexDirection: "row", columnGap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "flex-start" };
_createForOfIteratorHelperLoose.message = obj2;
_createForOfIteratorHelperLoose.unfocused = { opacity: 0.5 };
let obj3 = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.avatar = obj3;
_createForOfIteratorHelperLoose.messageBody = { flex: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", columnGap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.usernameRow = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("result").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  let badge;
  let primaryColor;
  let secondaryColor;
  let tag;
  let variant;
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  let dependencyMap;
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentUser());
  let obj2 = onAdopted(4319);
  const name = obj2.useName(guildId, null, stateFromStores);
  let obj3 = onAdopted(1392);
  let avatarURL;
  if (null != stateFromStores) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = obj3.makeSource(avatarURL);
  if (null != stateFromStores) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (null != primaryGuild) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let isDirty = identityGuildId === guildId;
  if (isDirty) {
    let identityEnabled;
    if (null != stateFromStores) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (null != primaryGuild2) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    isDirty = true === identityEnabled;
  }
  const tmp8 = callback2(React.useState(false), 2);
  const first = tmp8[0];
  dependencyMap = tmp8[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [guildId, onAdopted];
  obj = {};
  callback = React.useCallback(callback(tmp), items1);
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp2.notice };
  const intl = guildId(1212).intl;
  const string = intl.string;
  const t = guildId(1212).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj.children = stringResult;
  const items2 = [callback3(guildId(4126).Text, obj), ];
  const obj1 = { spacing: onAdopted(689).space.PX_12 };
  obj2 = { style: items3 };
  items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp2);
  obj3 = { source: onAdopted(10327), style: tmp2.avatar, importantForAccessibility: "no" };
  const items4 = [callback3(closure_6, obj3), ];
  const obj4 = { style: tmp2.messageBody };
  const items5 = [callback3(guildId(4126).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj5 = { variant: "text-md/normal", color: "text-default" };
  const intl2 = guildId(1212).intl;
  obj5.children = intl2.string(guildId(1212).t.KZQ4mF);
  items5[1] = callback3(guildId(4126).Text, obj5);
  obj4.children = items5;
  items4[1] = callback4(closure_7, obj4);
  obj2.children = items4;
  const items6 = [callback4(closure_7, obj2), , , ];
  const obj6 = { style: tmp2.message };
  const items7 = [callback3(closure_6, { source, style: tmp2.avatar, importantForAccessibility: "no" }), ];
  const obj8 = { style: tmp2.messageBody };
  const obj9 = { style: tmp2.usernameRow };
  const obj10 = { variant: "text-md/semibold", color: "text-default", children: name };
  const items8 = [callback3(guildId(4126).Text, obj10), ];
  let tmp18Result = null != tag;
  if (tmp18Result) {
    tmp18Result = "" !== tag;
  }
  if (tmp18Result) {
    const obj11 = { guildTag: tag };
    let tmp22Result;
    if (null != badge) {
      const obj12 = { badge };
      let tmp25;
      if (null != primaryColor) {
        tmp25 = primaryColor;
      }
      obj12.primaryTintColor = tmp25;
      let tmp26;
      if (null != secondaryColor) {
        tmp26 = secondaryColor;
      }
      obj12.secondaryTintColor = tmp26;
      ({ SIZE_12: obj18.width, SIZE_12: obj18.height } = GuildTagBadgeSize);
      tmp22Result = callback3(guildId(12974).GuildBadge, obj12);
      const tmp22 = callback3;
    }
    obj11.guildBadge = tmp22Result;
    tmp18Result = callback3(guildId(8620).BaseGuildTagChiplet, obj11);
    const tmp18 = callback3;
  }
  items8[1] = tmp18Result;
  obj9.children = items8;
  const items9 = [callback4(closure_7, obj9), ];
  const obj13 = { variant: "text-md/normal", color: "text-default" };
  const intl3 = guildId(1212).intl;
  obj13.children = intl3.string(guildId(1212).t.LKsPRe);
  items9[1] = callback3(guildId(4126).Text, obj13);
  obj8.children = items9;
  items7[1] = callback4(closure_7, obj8);
  obj6.children = items7;
  items6[1] = callback4(closure_7, obj6);
  const obj14 = { style: items10 };
  items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp2);
  const items11 = [callback3(closure_6, { source: onAdopted(13018), style: tmp2.avatar, importantForAccessibility: "no" }), ];
  const obj16 = { style: tmp2.messageBody };
  const items12 = [callback3(guildId(4126).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj17 = { variant: "text-md/normal", color: "text-default" };
  const intl4 = guildId(1212).intl;
  obj17.children = intl4.string(guildId(1212).t.vtCg11);
  items12[1] = callback3(guildId(4126).Text, obj17);
  obj16.children = items12;
  items11[1] = callback4(closure_7, obj16);
  obj14.children = items11;
  items6[2] = callback4(closure_7, obj14);
  const obj18 = { variant: "primary" };
  const intl5 = guildId(1212).intl;
  obj18.text = intl5.string(guildId(1212).t.cQDYRu);
  obj18.loading = first;
  if (!isDirty) {
    isDirty = first;
  }
  if (!isDirty) {
    isDirty = guildId.isDirty;
  }
  if (!isDirty) {
    isDirty = null == tag;
  }
  if (!isDirty) {
    isDirty = "" === tag;
  }
  obj18.disabled = isDirty;
  obj18.onPress = callback;
  items6[3] = callback3(guildId(4543).Button, obj18);
  obj1.children = items6;
  items2[1] = callback4(guildId(4541).Stack, obj1);
  obj.children = items2;
  const tmp11Result = callback4(closure_12, obj);
  let tmp30 = tmp11Result;
  if ("plain" !== variant) {
    const obj19 = { variant: "secondary", radius: 16, style: tmp2.card, children: tmp11Result };
    tmp30 = callback3(guildId(5167).Card, obj19);
  }
  return tmp30;
};
