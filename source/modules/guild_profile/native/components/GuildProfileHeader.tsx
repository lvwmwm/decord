// Module ID: 8585
// Function ID: 68178
// Name: styles
// Dependencies: [31, 27, 1921, 1194, 1917, 8586, 33, 4130, 689, 566, 6980, 21, 1387, 5704, 5703, 3831, 4098, 5737, 5515, 4126, 4660, 5701, 1212, 2]
// Exports: default

// Module 8585 (styles)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { getBadgeTooltip } from "getBadgeTooltip";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 } };
_createForOfIteratorHelperLoose = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.avatarBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.members = { display: "flex", flexDirection: "row", gap: 8 };
_createForOfIteratorHelperLoose.memberCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
let obj1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_OFFLINE };
_createForOfIteratorHelperLoose.dot = obj1;
let obj2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_ONLINE };
_createForOfIteratorHelperLoose.dotOnline = obj2;
_createForOfIteratorHelperLoose.established = { display: "flex" };
_createForOfIteratorHelperLoose.nameRow = { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.guildName = { flexShrink: 1 };
_createForOfIteratorHelperLoose.guildIcon = { marginLeft: 8, height: 24, width: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default function GuildProfileHeader(icon) {
  const profile = icon.profile;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = profile(stateFromStores1[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.locale);
  let obj1 = profile(stateFromStores1[10]);
  let obj2 = id(stateFromStores1[11]);
  const establishedDate = obj1.getEstablishedDate(obj2.extractTimestamp(profile.id), stateFromStores);
  let obj3 = profile(stateFromStores1[12]);
  const items1 = [profile];
  id = profile.id;
  const callback = React.useCallback(() => {
    let tooltipSubtitle;
    let tooltipTitle;
    let obj = profile(stateFromStores1[12]);
    const fromGuildProfileResult = obj.fromGuildProfile(profile);
    const guildTraits = profile(stateFromStores1[13]).getGuildTraits(fromGuildProfileResult);
    const obj2 = profile(stateFromStores1[13]);
    const obj3 = profile(stateFromStores1[14]);
    ({ tooltipTitle, tooltipSubtitle } = outer1_8(profile(stateFromStores1[14]).getBadgeCategory(guildTraits), guildTraits.visibility));
    if (!tmp4) {
      obj = { key: "guild-badge-tooltip" };
      if (null != tooltipSubtitle) {
        tooltipTitle = tooltipSubtitle;
      }
      obj.content = tooltipTitle;
      id(stateFromStores1[15]).open(obj);
      const obj4 = id(stateFromStores1[15]);
    }
  }, items1);
  let obj4 = profile(stateFromStores1[9]);
  const items2 = [closure_7, closure_6];
  const items3 = [id];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const member = outer1_7.getMember(id, outer1_6.getId());
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items3);
  const items4 = [id, stateFromStores1];
  obj = { style: tmp.header };
  obj = { style: tmp.avatarBackground };
  const callback1 = React.useCallback(() => {
    if (stateFromStores1) {
      const _HermesInternal = HermesInternal;
      id(stateFromStores1[16]).hideActionSheet("GuildProfileActionSheet:" + id);
      const obj = id(stateFromStores1[16]);
      profile(stateFromStores1[17]).transitionToGuild(id);
      const obj2 = profile(stateFromStores1[17]);
    }
  }, items4);
  obj1 = { icon: icon.guildIconSource };
  let fromGuildProfileResult = obj3.fromGuildProfile(profile);
  const tmp10 = callback;
  obj1.size = profile(stateFromStores1[18]).GuildIconSizes.XXLARGE;
  obj1.animate = true;
  obj1.value = profile.name;
  obj1.selected = false;
  obj.children = callback(id(stateFromStores1[18]), obj1);
  const items5 = [callback(View, obj), , , ];
  obj2 = { style: tmp.nameRow };
  obj3 = { onPress: null, style: null, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
  let tmp12;
  if (stateFromStores1) {
    tmp12 = callback1;
  }
  obj3.onPress = tmp12;
  obj3.style = tmp.guildName;
  obj3.children = profile.name;
  const items6 = [tmp10(profile(stateFromStores1[19]).Text, obj3), ];
  obj4 = { onPress: callback, children: callback(id(stateFromStores1[21]), { guild: fromGuildProfileResult, style: tmp.guildIcon }) };
  items6[1] = callback(profile(stateFromStores1[20]).PressableHighlight, obj4);
  obj2.children = items6;
  items5[1] = callback2(View, obj2);
  const obj6 = { style: tmp.members };
  const obj7 = { style: tmp.memberCount };
  const items7 = [callback(View, { style: tmp.dotOnline }), ];
  const obj9 = { variant: "text-md/medium", color: "text-default" };
  const intl = profile(stateFromStores1[22]).intl;
  obj9.children = intl.format(profile(stateFromStores1[22]).t["LC+S+m"], { membersOnline: profile.onlineCount });
  items7[1] = callback(profile(stateFromStores1[19]).Text, obj9);
  obj7.children = items7;
  const items8 = [callback2(View, obj7), ];
  const obj11 = { style: tmp.memberCount };
  const items9 = [callback(View, { style: tmp.dot }), ];
  const obj13 = { variant: "text-md/medium", color: "text-default" };
  const intl2 = profile(stateFromStores1[22]).intl;
  obj13.children = intl2.format(profile(stateFromStores1[22]).t.zRl6XR, { count: profile.memberCount });
  items9[1] = callback(profile(stateFromStores1[19]).Text, obj13);
  obj11.children = items9;
  items8[1] = callback2(View, obj11);
  obj6.children = items8;
  items5[2] = callback2(View, obj6);
  const obj15 = { style: tmp.established };
  const obj16 = { variant: "text-md/medium", color: "text-muted" };
  const intl3 = profile(stateFromStores1[22]).intl;
  obj16.children = intl3.format(profile(stateFromStores1[22]).t.zb2Q56, { createdAtDate: establishedDate });
  obj15.children = callback(profile(stateFromStores1[19]).Text, obj16);
  items5[3] = callback(View, obj15);
  obj.children = items5;
  return callback2(View, obj);
};
export const useStyles = _createForOfIteratorHelperLoose;
