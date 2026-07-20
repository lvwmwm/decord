// Module ID: 8573
// Function ID: 68103
// Name: styles
// Dependencies: [31, 5466, 6853, 2, 44, 4096, 8583, 1934, 686, 2, 57, 31, 27, 8584, 33, 4126, 689, 4535, 1212, 7176, 8585, 3825, 8588, 6853]
// Exports: default

// Module 8573 (styles)
import module_31 from "module_31";
import { View } from "useGetOrFetchApplications";
import importDefaultResult1 from "importDefaultResult1";
import keys from "keys";
import invariant from "invariant";
import { getBadgeTooltip } from "showActionSheet";
import GetButton from "GetButton";
import maybeLoadBundle from "maybeLoadBundle";

({ jsx: closure_9, jsxs: closure_10 } = GetButton);
maybeLoadBundle = { header: { 0: 759239012, 0: 1912603216, 0: 24, 0: 24, 9223372036854775807: 1081688577 } };
maybeLoadBundle = { backgroundColor: require("dispatcher").colors.BACKGROUND_BASE_LOW };
maybeLoadBundle.avatarBackground = maybeLoadBundle;
maybeLoadBundle.members = {};
maybeLoadBundle.memberCount = {};
const obj1 = { backgroundColor: require("dispatcher").colors.TEXT_STATUS_OFFLINE, accessibilityRole: 24, -45001119: null };
maybeLoadBundle.dot = obj1;
const obj2 = { backgroundColor: require("dispatcher").colors.TEXT_STATUS_ONLINE, accessibilityRole: 24, -45001119: null };
maybeLoadBundle.dotOnline = obj2;
maybeLoadBundle.established = { display: "flex" };
maybeLoadBundle.nameRow = {};
maybeLoadBundle.guildName = { flexShrink: 1 };
maybeLoadBundle.guildIcon = {};
maybeLoadBundle = maybeLoadBundle.createStyles(maybeLoadBundle);
const result = require("importDefaultResult1").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default function GuildProfileHeader(icon) {
  const profile = icon.profile;
  const arg1 = profile;
  const tmp = maybeLoadBundle();
  let obj = arg1(dependencyMap[9]);
  const items = [importDefaultResult1];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = arg1(dependencyMap[10]);
  let obj2 = importDefault(dependencyMap[11]);
  const establishedDate = obj1.getEstablishedDate(obj2.extractTimestamp(profile.id), stateFromStores);
  let obj3 = arg1(dependencyMap[12]);
  const items1 = [profile];
  const id = profile.id;
  const importDefault = id;
  const callback = React.useCallback(() => {
    let tooltipSubtitle;
    let tooltipTitle;
    let obj = profile(stateFromStores1[12]);
    const fromGuildProfileResult = obj.fromGuildProfile(profile);
    const guildTraits = profile(stateFromStores1[13]).getGuildTraits(fromGuildProfileResult);
    const obj2 = profile(stateFromStores1[13]);
    const obj3 = profile(stateFromStores1[14]);
    ({ tooltipTitle, tooltipSubtitle } = callback(profile(stateFromStores1[14]).getBadgeCategory(guildTraits), guildTraits.visibility));
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
  let obj4 = arg1(dependencyMap[9]);
  const items2 = [invariant, keys];
  const items3 = [id];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const member = member.getMember(id, id.getId());
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items3);
  const dependencyMap = stateFromStores1;
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
  const fromGuildProfileResult = obj3.fromGuildProfile(profile);
  const tmp10 = callback;
  obj1.size = arg1(dependencyMap[18]).GuildIconSizes.XXLARGE;
  obj1.animate = true;
  obj1.value = profile.name;
  obj1.selected = false;
  obj.children = callback(importDefault(dependencyMap[18]), obj1);
  const items5 = [callback(View, obj), , , ];
  obj2 = { style: tmp.nameRow };
  obj3 = {};
  let tmp12;
  if (stateFromStores1) {
    tmp12 = callback1;
  }
  obj3.onPress = tmp12;
  obj3.style = tmp.guildName;
  obj3.children = profile.name;
  const items6 = [tmp10(arg1(dependencyMap[19]).Text, obj3), ];
  obj4 = { onPress: callback, children: callback(importDefault(dependencyMap[21]), { guild: fromGuildProfileResult, style: tmp.guildIcon }) };
  items6[1] = callback(arg1(dependencyMap[20]).PressableHighlight, obj4);
  obj2.children = items6;
  items5[1] = callback2(View, obj2);
  const obj6 = { style: tmp.members };
  const obj7 = { style: tmp.memberCount };
  const items7 = [callback(View, { style: tmp.dotOnline }), ];
  const obj9 = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj9.children = intl.format(arg1(dependencyMap[22]).t.LC+S+m, { membersOnline: profile.onlineCount });
  items7[1] = callback(arg1(dependencyMap[19]).Text, obj9);
  obj7.children = items7;
  const items8 = [callback2(View, obj7), ];
  const obj11 = { style: tmp.memberCount };
  const items9 = [callback(View, { style: tmp.dot }), ];
  const obj13 = {};
  const intl2 = arg1(dependencyMap[22]).intl;
  obj13.children = intl2.format(arg1(dependencyMap[22]).t.zRl6XR, { count: profile.memberCount });
  items9[1] = callback(arg1(dependencyMap[19]).Text, obj13);
  obj11.children = items9;
  items8[1] = callback2(View, obj11);
  obj6.children = items8;
  items5[2] = callback2(View, obj6);
  const obj15 = { style: tmp.established };
  const obj16 = {};
  const intl3 = arg1(dependencyMap[22]).intl;
  obj16.children = intl3.format(arg1(dependencyMap[22]).t.zb2Q56, { createdAtDate: establishedDate });
  obj15.children = callback(arg1(dependencyMap[19]).Text, obj16);
  items5[3] = callback(View, obj15);
  obj.children = items5;
  return callback2(View, obj);
};
export const useStyles = maybeLoadBundle;
