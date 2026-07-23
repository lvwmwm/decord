// Module ID: 16490
// Function ID: 128516
// Name: findOptionLabel
// Dependencies: [31, 27, 3767, 1849, 33, 4130, 4593, 4320, 16491, 8485, 16492, 4098, 16493, 1934, 16494, 1212, 5515, 5170, 4541, 689, 5503, 5165, 5504, 1360, 7476, 2]
// Exports: default

// Module 16490 (findOptionLabel)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function findOptionLabel(arr) {
  let closure_0 = arg1;
  const found = arr.find((value) => value.value === closure_0);
  let label;
  if (null != found) {
    label = found.label;
  }
  return label;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flexGrow: 1 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_invite/native/AdvancedInstantInvite.tsx");

export default function AdvancedInstantInvite(maxAge) {
  let canCreateApplicationBypassInvites;
  let channel;
  let closure_7;
  let flags;
  let guild;
  let isManualApprovalGuild;
  let onChangeTemporary;
  let roleIds;
  let style;
  let temporary;
  ({ channel, guild } = maxAge);
  maxAge = maxAge.maxAge;
  const onChangeMaxAge = maxAge.onChangeMaxAge;
  const maxUsesOptions = maxAge.maxUsesOptions;
  const maxUses = maxAge.maxUses;
  const onChangeMaxUses = maxAge.onChangeMaxUses;
  ({ onChangeTemporary, flags } = maxAge);
  ({ onChangeFlags: closure_7, roleIds } = maxAge);
  const onChangeRoleIds = maxAge.onChangeRoleIds;
  let maxAgeOptions;
  let c11;
  ({ style, temporary } = maxAge);
  if (null != channel) {
    let obj = guild(onChangeMaxAge[6]);
    const channelIconComponent = obj.getChannelIconComponent(channel);
  }
  let str = " ";
  if (null != channel) {
    let obj1 = guild(onChangeMaxAge[7]);
    str = obj1.computeChannelName(channel, flags, onChangeMaxUses, true);
  }
  let obj2 = guild(onChangeMaxAge[8]);
  const inviteApplicationBypassInfo = obj2.useInviteApplicationBypassInfo(guild);
  ({ canCreateApplicationBypassInvites, isManualApprovalGuild } = inviteApplicationBypassInfo);
  let obj3 = guild(onChangeMaxAge[9]);
  obj = {};
  let id;
  if (null != guild) {
    id = guild.id;
  }
  obj.guildId = id;
  obj.location = "AdvancedInstantInvite";
  maxAgeOptions = obj3.useMaxAgeOptions(obj);
  let tmp15 = null;
  let tmp = onChangeRoleIds();
  if (null != guild) {
    tmp15 = guild;
  }
  const tmp14Result = maxAge(onChangeMaxAge[10])(tmp15);
  c11 = tmp14Result;
  const items = [guild, tmp14Result, roleIds, onChangeRoleIds];
  const items1 = [maxAge, maxAgeOptions, onChangeMaxAge];
  const callback = maxUsesOptions.useCallback(() => {
    let tmp = null != guild;
    if (tmp) {
      tmp = null != onChangeRoleIds;
    }
    if (tmp) {
      let obj = maxAge(onChangeMaxAge[11]);
      obj = { assignableRoles: c11, selectedRoleIds: roleIds, onSave: onChangeRoleIds };
      obj.openLazy(guild(onChangeMaxAge[13])(onChangeMaxAge[12], onChangeMaxAge.paths), "SelectInviteRolesActionSheet", obj, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxAge) {
      let obj = maxAge(onChangeMaxAge[11]);
      const tmp4 = guild(onChangeMaxAge[13])(onChangeMaxAge[14], onChangeMaxAge.paths);
      obj = {};
      const intl = guild(onChangeMaxAge[15]).intl;
      obj.title = intl.string(guild(onChangeMaxAge[15]).t.gKmKP0);
      obj.options = maxAgeOptions;
      obj.value = maxAge;
      obj.onChange = onChangeMaxAge;
      obj.openLazy(tmp4, "InviteMaxAgeActionSheet", obj, "stack");
    }
  }, items1);
  const items3 = [tmp14Result, roleIds];
  const callback2 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxUses) {
      let obj = maxAge(onChangeMaxAge[11]);
      const tmp4 = guild(onChangeMaxAge[13])(onChangeMaxAge[14], onChangeMaxAge.paths);
      obj = {};
      const intl = guild(onChangeMaxAge[15]).intl;
      obj.title = intl.string(guild(onChangeMaxAge[15]).t["+3vH1h"]);
      obj.options = maxUsesOptions;
      obj.value = maxUses;
      obj.onChange = onChangeMaxUses;
      obj.openLazy(tmp4, "InviteMaxUsesActionSheet", obj, "stack");
    }
  }, items2);
  const memo = maxUsesOptions.useMemo(() => {
    const set = new Set(_undefined.map((id) => id.id));
    return roleIds.filter((arg0) => set.has(arg0)).length;
  }, items3);
  if (0 !== memo) {
    let intl = guild(onChangeMaxAge[15]).intl;
    obj = { count: memo };
    const formatToPlainStringResult = intl.formatToPlainString(guild(onChangeMaxAge[15]).t["eXU3/V"], obj);
  }
  const tmp24 = maxAgeOptions(maxAgeOptions, maxAge);
  const tmp25 = maxAgeOptions(maxUsesOptions, maxUses);
  if (null != guild) {
    obj1 = { guild, size: guild(onChangeMaxAge[16]).GuildIconSizes.SMALL_32 };
    let tmp26 = callback(maxAge(onChangeMaxAge[16]), obj1);
    const tmp33 = maxAge(onChangeMaxAge[16]);
  } else if (null != channelIconComponent) {
    obj2 = { IconComponent: channelIconComponent };
    tmp26 = callback(guild(onChangeMaxAge[17]).TableRowIcon, obj2);
  }
  obj3 = { style: items4 };
  items4 = [tmp.container, style];
  const obj4 = { spacing: maxAge(onChangeMaxAge[19]).space.PX_24 };
  const obj5 = {};
  const intl2 = guild(onChangeMaxAge[15]).intl;
  obj5.title = intl2.string(guild(onChangeMaxAge[15]).t.LUo0Q8);
  obj5.hasIcons = null != tmp26;
  const obj6 = { icon: tmp26, label: str };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj6.subLabel = name;
  obj5.children = callback(guild(onChangeMaxAge[21]).TableRow, obj6);
  const items5 = [callback(guild(onChangeMaxAge[20]).TableRowGroup, obj5), , , , ];
  const obj7 = {};
  const intl3 = guild(onChangeMaxAge[15]).intl;
  obj7.title = intl3.string(guild(onChangeMaxAge[15]).t["4QuV7G"]);
  obj7.hasIcons = false;
  const obj8 = {};
  const intl4 = guild(onChangeMaxAge[15]).intl;
  obj8.label = intl4.string(guild(onChangeMaxAge[15]).t.gKmKP0);
  let tmp41;
  if (null != tmp24) {
    const obj9 = { text: tmp24 };
    tmp41 = callback(guild(onChangeMaxAge[21]).TableRow.TrailingText, obj9);
  }
  obj8.trailing = tmp41;
  obj8.arrow = true;
  obj8.onPress = callback1;
  obj8.disabled = null == onChangeMaxAge;
  const items6 = [callback(guild(onChangeMaxAge[21]).TableRow, obj8), ];
  const obj10 = {};
  const intl5 = guild(onChangeMaxAge[15]).intl;
  obj10.label = intl5.string(guild(onChangeMaxAge[15]).t["+3vH1h"]);
  let tmp46;
  if (null != tmp25) {
    const obj11 = { text: tmp25 };
    tmp46 = callback(guild(onChangeMaxAge[21]).TableRow.TrailingText, obj11);
  }
  obj10.trailing = tmp46;
  obj10.arrow = true;
  obj10.onPress = callback2;
  obj10.disabled = null == onChangeMaxUses;
  items6[1] = callback(guild(onChangeMaxAge[21]).TableRow, obj10);
  obj7.children = items6;
  items5[1] = roleIds(guild(onChangeMaxAge[20]).TableRowGroup, obj7);
  let tmp50 = null;
  if (tmp16) {
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl6 = guild(onChangeMaxAge[15]).intl;
    obj13.label = intl6.string(guild(onChangeMaxAge[15]).t.rPYJxL);
    obj13.arrow = true;
    obj13.subLabel = formatToPlainStringResult;
    obj13.onPress = callback;
    obj12.children = callback(guild(onChangeMaxAge[21]).TableRow, obj13);
    tmp50 = callback(guild(onChangeMaxAge[20]).TableRowGroup, obj12);
  }
  items5[2] = tmp50;
  let tmp54 = !isManualApprovalGuild && null != onChangeTemporary;
  if (tmp54) {
    const obj14 = { hasIcons: false };
    const intl7 = guild(onChangeMaxAge[15]).intl;
    obj14.helperText = intl7.string(guild(onChangeMaxAge[15]).t.A53l87);
    const obj15 = {};
    const intl8 = guild(onChangeMaxAge[15]).intl;
    obj15.label = intl8.string(guild(onChangeMaxAge[15]).t.dy1ico);
    obj15.value = temporary;
    obj15.onValueChange = onChangeTemporary;
    obj14.children = callback(guild(onChangeMaxAge[22]).TableSwitchRow, obj15);
    tmp54 = callback(guild(onChangeMaxAge[20]).TableRowGroup, obj14);
  }
  items5[3] = tmp54;
  let tmp58 = null;
  if (canCreateApplicationBypassInvites) {
    const obj16 = { hasIcons: false };
    const intl9 = guild(onChangeMaxAge[15]).intl;
    obj16.helperText = intl9.string(guild(onChangeMaxAge[15]).t["jvd/LF"]);
    const obj17 = {};
    const intl10 = guild(onChangeMaxAge[15]).intl;
    obj17.label = intl10.string(guild(onChangeMaxAge[15]).t["1i1bUl"]);
    obj17.value = guild(onChangeMaxAge[23]).hasFlag(flags, guild(onChangeMaxAge[24]).GuildInviteFlags.IS_APPLICATION_BYPASS);
    obj17.onValueChange = function onValueChange(arg0) {
      return callback(guild(onChangeMaxAge[23]).setFlag(flags, guild(onChangeMaxAge[24]).GuildInviteFlags.IS_APPLICATION_BYPASS, arg0));
    };
    obj16.children = callback(guild(onChangeMaxAge[22]).TableSwitchRow, obj17);
    tmp58 = callback(guild(onChangeMaxAge[20]).TableRowGroup, obj16);
    const obj24 = guild(onChangeMaxAge[23]);
  }
  items5[4] = tmp58;
  obj4.children = items5;
  obj3.children = roleIds(guild(onChangeMaxAge[18]).Stack, obj4);
  return callback(maxUses, obj3);
};
