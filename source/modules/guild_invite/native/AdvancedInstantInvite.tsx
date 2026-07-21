// Module ID: 16357
// Function ID: 126239
// Name: findOptionLabel
// Dependencies: []
// Exports: default

// Module 16357 (findOptionLabel)
function findOptionLabel(maxAgeOptions, maxAge) {
  const found = maxAgeOptions.find((value) => value.value === arg1);
  let label;
  if (null != found) {
    label = found.label;
  }
  return label;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { flexGrow: 1 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_invite/native/AdvancedInstantInvite.tsx");

export default function AdvancedInstantInvite(maxAge) {
  let canCreateApplicationBypassInvites;
  let channel;
  let flags;
  let guild;
  let isManualApprovalGuild;
  let onChangeTemporary;
  let roleIds;
  let style;
  let temporary;
  ({ channel, guild } = maxAge);
  const arg1 = guild;
  maxAge = maxAge.maxAge;
  const importDefault = maxAge;
  const onChangeMaxAge = maxAge.onChangeMaxAge;
  const dependencyMap = onChangeMaxAge;
  const maxUsesOptions = maxAge.maxUsesOptions;
  const React = maxUsesOptions;
  const maxUses = maxAge.maxUses;
  const View = maxUses;
  const onChangeMaxUses = maxAge.onChangeMaxUses;
  let closure_5 = onChangeMaxUses;
  ({ onChangeTemporary, flags } = maxAge);
  let closure_6 = flags;
  ({ onChangeFlags: closure_7, roleIds } = maxAge);
  const onChangeRoleIds = maxAge.onChangeRoleIds;
  let callback2 = onChangeRoleIds;
  let findOptionLabel;
  let tmp14Result;
  ({ style, temporary } = maxAge);
  if (null != channel) {
    let obj = arg1(dependencyMap[6]);
    const channelIconComponent = obj.getChannelIconComponent(channel);
  }
  let str = " ";
  if (null != channel) {
    let obj1 = arg1(dependencyMap[7]);
    str = obj1.computeChannelName(channel, closure_6, closure_5, true);
  }
  let obj2 = arg1(dependencyMap[8]);
  const inviteApplicationBypassInfo = obj2.useInviteApplicationBypassInfo(guild);
  ({ canCreateApplicationBypassInvites, isManualApprovalGuild } = inviteApplicationBypassInfo);
  let obj3 = arg1(dependencyMap[9]);
  obj = {};
  let id;
  if (null != guild) {
    id = guild.id;
  }
  obj.guildId = id;
  obj.location = "AdvancedInstantInvite";
  const maxAgeOptions = obj3.useMaxAgeOptions(obj);
  findOptionLabel = maxAgeOptions;
  let tmp15 = null;
  const tmp = callback2();
  if (null != guild) {
    tmp15 = guild;
  }
  tmp14Result = importDefault(dependencyMap[10])(tmp15);
  const items = [guild, tmp14Result, roleIds, onChangeRoleIds];
  const items1 = [maxAge, maxAgeOptions, onChangeMaxAge];
  const callback = React.useCallback(() => {
    let tmp = null != guild;
    if (tmp) {
      tmp = null != onChangeRoleIds;
    }
    if (tmp) {
      let obj = maxAge(onChangeMaxAge[11]);
      obj = { assignableRoles: tmp14Result, selectedRoleIds: roleIds, onSave: onChangeRoleIds };
      obj.openLazy(guild(onChangeMaxAge[13])(onChangeMaxAge[12], onChangeMaxAge.paths), "SelectInviteRolesActionSheet", obj, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = React.useCallback(() => {
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
  callback2 = React.useCallback(() => {
    if (null != onChangeMaxUses) {
      let obj = maxAge(onChangeMaxAge[11]);
      const tmp4 = guild(onChangeMaxAge[13])(onChangeMaxAge[14], onChangeMaxAge.paths);
      obj = {};
      const intl = guild(onChangeMaxAge[15]).intl;
      obj.title = intl.string(guild(onChangeMaxAge[15]).t.+3vH1h);
      obj.options = maxUsesOptions;
      obj.value = maxUses;
      obj.onChange = onChangeMaxUses;
      obj.openLazy(tmp4, "InviteMaxUsesActionSheet", obj, "stack");
    }
  }, items2);
  const memo = React.useMemo(() => {
    const guild = new Set(tmp14Result.map((id) => id.id));
    return roleIds.filter((arg0) => set.has(arg0)).length;
  }, items3);
  if (0 !== memo) {
    const intl = arg1(dependencyMap[15]).intl;
    obj = { count: memo };
    const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[15]).t.eXU3/V, obj);
  }
  const tmp24 = findOptionLabel(maxAgeOptions, maxAge);
  const tmp25 = findOptionLabel(maxUsesOptions, maxUses);
  if (null != guild) {
    obj1 = { guild, size: arg1(dependencyMap[16]).GuildIconSizes.SMALL_32 };
    let tmp26 = callback(importDefault(dependencyMap[16]), obj1);
    const tmp33 = importDefault(dependencyMap[16]);
  } else if (null != channelIconComponent) {
    obj2 = { IconComponent: channelIconComponent };
    tmp26 = callback(arg1(dependencyMap[17]).TableRowIcon, obj2);
  }
  obj3 = { style: items4 };
  const items4 = [tmp.container, style];
  const obj4 = { spacing: importDefault(dependencyMap[19]).space.PX_24 };
  const obj5 = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj5.title = intl2.string(arg1(dependencyMap[15]).t.LUo0Q8);
  obj5.hasIcons = null != tmp26;
  const obj6 = { icon: tmp26, label: str };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj6.subLabel = name;
  obj5.children = callback(arg1(dependencyMap[21]).TableRow, obj6);
  const items5 = [callback(arg1(dependencyMap[20]).TableRowGroup, obj5), , , , ];
  const obj7 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj7.title = intl3.string(arg1(dependencyMap[15]).t.4QuV7G);
  obj7.hasIcons = false;
  const obj8 = {};
  const intl4 = arg1(dependencyMap[15]).intl;
  obj8.label = intl4.string(arg1(dependencyMap[15]).t.gKmKP0);
  let tmp41;
  if (null != tmp24) {
    const obj9 = { text: tmp24 };
    tmp41 = callback(arg1(dependencyMap[21]).TableRow.TrailingText, obj9);
  }
  obj8.trailing = tmp41;
  obj8.arrow = true;
  obj8.onPress = callback1;
  obj8.disabled = null == onChangeMaxAge;
  const items6 = [callback(arg1(dependencyMap[21]).TableRow, obj8), ];
  const obj10 = {};
  const intl5 = arg1(dependencyMap[15]).intl;
  obj10.label = intl5.string(arg1(dependencyMap[15]).t.+3vH1h);
  let tmp46;
  if (null != tmp25) {
    const obj11 = { text: tmp25 };
    tmp46 = callback(arg1(dependencyMap[21]).TableRow.TrailingText, obj11);
  }
  obj10.trailing = tmp46;
  obj10.arrow = true;
  obj10.onPress = callback2;
  obj10.disabled = null == onChangeMaxUses;
  items6[1] = callback(arg1(dependencyMap[21]).TableRow, obj10);
  obj7.children = items6;
  items5[1] = roleIds(arg1(dependencyMap[20]).TableRowGroup, obj7);
  let tmp50 = null;
  if (tmp16) {
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl6 = arg1(dependencyMap[15]).intl;
    obj13.label = intl6.string(arg1(dependencyMap[15]).t.rPYJxL);
    obj13.arrow = true;
    obj13.subLabel = formatToPlainStringResult;
    obj13.onPress = callback;
    obj12.children = callback(arg1(dependencyMap[21]).TableRow, obj13);
    tmp50 = callback(arg1(dependencyMap[20]).TableRowGroup, obj12);
  }
  items5[2] = tmp50;
  let tmp54 = !isManualApprovalGuild && null != onChangeTemporary;
  if (tmp54) {
    const obj14 = { hasIcons: false };
    const intl7 = arg1(dependencyMap[15]).intl;
    obj14.helperText = intl7.string(arg1(dependencyMap[15]).t.A53l87);
    const obj15 = {};
    const intl8 = arg1(dependencyMap[15]).intl;
    obj15.label = intl8.string(arg1(dependencyMap[15]).t.dy1ico);
    obj15.value = temporary;
    obj15.onValueChange = onChangeTemporary;
    obj14.children = callback(arg1(dependencyMap[22]).TableSwitchRow, obj15);
    tmp54 = callback(arg1(dependencyMap[20]).TableRowGroup, obj14);
  }
  items5[3] = tmp54;
  let tmp58 = null;
  if (canCreateApplicationBypassInvites) {
    const obj16 = { hasIcons: false };
    const intl9 = arg1(dependencyMap[15]).intl;
    obj16.helperText = intl9.string(arg1(dependencyMap[15]).t.jvd/LF);
    const obj17 = {};
    const intl10 = arg1(dependencyMap[15]).intl;
    obj17.label = intl10.string(arg1(dependencyMap[15]).t.1i1bUl);
    obj17.value = arg1(dependencyMap[23]).hasFlag(flags, arg1(dependencyMap[24]).GuildInviteFlags.IS_APPLICATION_BYPASS);
    obj17.onValueChange = function onValueChange(arg0) {
      return callback(guild(onChangeMaxAge[23]).setFlag(flags, guild(onChangeMaxAge[24]).GuildInviteFlags.IS_APPLICATION_BYPASS, arg0));
    };
    obj16.children = callback(arg1(dependencyMap[22]).TableSwitchRow, obj17);
    tmp58 = callback(arg1(dependencyMap[20]).TableRowGroup, obj16);
    const obj24 = arg1(dependencyMap[23]);
  }
  items5[4] = tmp58;
  obj4.children = items5;
  obj3.children = roleIds(arg1(dependencyMap[18]).Stack, obj4);
  return callback(View, obj3);
};
