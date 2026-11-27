// Module ID: 20074
// Function ID: 20075
// Name: CommandPermissionSections
// Dependencies: [19, 4914, 21, 4980, 5043, 20075, 6144, 6115, 575, 7944, 5750, 1112, 19190, 20076, 5695, 6140, 6152, 5634, 20005, 504, 20078, 20080, 5257, 20081, 2120, 7941, 6145, 5747, 5641, 20086, 20082, 2]
// Exports: default

// Module 20074 (CommandPermissionSections)
import nativeDefault from "native" /* 575 */;
import intl12 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import PermissionUtils from "PermissionUtils" /* 4980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import useCommandPermissionListDefault from "useCommandPermissionList" /* 20075 */;
import useCommandPermissionEntryDisplay from "useCommandPermissionEntryDisplay" /* 20076 */;
import useAddCommandPermissions from "useAddCommandPermissions" /* 20082 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp2;
let tmp8;
const ChannelSettingsPermissionsOverrideCheckboxDefault = tmp8(19190);
const GuildSettingsModalIntegrationEmptyCardDefault = tmp2(20005);
function PermissionRow(display) {
  let Stack;
  let commandId;
  let guild;
  let hasAccessToMutatePermissions;
  let intl;
  let isUpdateRestricted;
  let label;
  let lockReason;
  let obj4;
  let permission;
  let subLabel;
  let tmp5;
  let tmp7;
  let tmpResult;
  display = display.display;
  ({ label, subLabel } = display);
  const overwrite = display.overwrite;
  ({ onChange: importDefault, onRemove: dependencyMap } = display);
  let tmp = overwrite;
  const tmp2 = dependencyMap;
  const icon = display.icon;
  ({ guild, commandId, hasAccessToMutatePermissions } = display);
  const obj = overwrite(20075);
  const obj2 = { overwrite, guildId: guild.id, commandId, hasAccessToMutatePermissions };
  const commandPermissionEntryRestrictions = obj.getCommandPermissionEntryRestrictions(obj2);
  ({ isUpdateRestricted, lockReason } = commandPermissionEntryRestrictions);
  const isRemovable = commandPermissionEntryRestrictions.isRemovable;
  const obj3 = { icon, label, subLabel: tmp5, trailing: tmp7(Stack, obj4) };
  tmp5 = subLabel;
  const TableRow = overwrite(6144).TableRow;
  if (isUpdateRestricted) {
    tmp5 = subLabel;
    if (null != lockReason) {
      tmp5 = lockReason;
    }
  }
  obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
  Stack = tmp(6115).Stack;
  let tmp4Result = null;
  tmp7 = closure_5;
  if (isRemovable) {
    const obj5 = {
      icon: closure_4(tmp(5750).TrashIcon, { size: "sm" }),
      size: "sm",
      accessibilityLabel: intl.string(tmp(1112).t.mT0CQM),
      variant: "icon-only",
      onPress() {
          return dependencyMap(overwrite);
        }
    };
    const IconButton = tmp(7944).IconButton;
    intl = tmp(1112).intl;
    tmp4Result = tmp4(IconButton, obj5);
  }
  items = [tmp4Result, ];
  const obj6 = {
    permissionTitle: label,
    value: permission ? tmpResult.ALLOW : tmpResult.DENY,
    states: items,
    disabled: isUpdateRestricted,
    onValueChange(arg0) {
      const tmp = arg0 === PermissionUtils.ALLOW;
      if (tmp !== overwrite.permission) {
        importDefault(tmp2, tmp);
      }
    }
  };
  permission = overwrite.permission;
  const tmp8Result = ChannelSettingsPermissionsOverrideCheckboxDefault;
  tmpResult = tmp(4980);
  items[1] = closure_4(tmp8Result, obj6);
  return closure_4(TableRow, obj3);
}
function ChannelRow(guild) {
  const obj = useCommandPermissionEntryDisplay;
  const channelEntryDisplay = obj.useChannelEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != channelEntryDisplay) {
    const obj2 = { display: channelEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React3(PermissionRow, obj2);
  }
  return tmp2;
}
function RoleRow(guild) {
  const obj = useCommandPermissionEntryDisplay;
  const roleEntryDisplay = obj.useRoleEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != roleEntryDisplay) {
    const obj2 = { display: roleEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React3(PermissionRow, obj2);
  }
  return tmp2;
}
function UserRow(guild) {
  const obj = useCommandPermissionEntryDisplay;
  const userEntryDisplay = obj.useUserEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != userEntryDisplay) {
    const obj2 = { display: userEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React3(PermissionRow, obj2);
  }
  return tmp2;
}
function EntryRow(overwrite) {
  const type = overwrite.overwrite.type;
  if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
    const obj2 = {};
    const merged = Object.assign(overwrite);
    return React3(ChannelRow, obj2);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
    const obj3 = {};
    const merged1 = Object.assign(overwrite);
    return React3(RoleRow, obj3);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
    const obj = {};
    const merged2 = Object.assign(overwrite);
    return React3(UserRow, obj);
  }
}
function Section(guild) {
  let Text;
  let addDisabledReason;
  let addText;
  let c3;
  let c4;
  let commandId;
  let editPermissions;
  let hasAccessToMutatePermissions;
  let items1;
  let noneSelectedText;
  let onAdd;
  let onChange;
  let onRemove;
  let overwrites;
  let sortedOverwrites;
  let str;
  let title;
  let tmp8Result;
  guild = guild.guild;
  ({ commandId: importDefault, addDisabledReason, hasAccessToMutatePermissions: dependencyMap } = guild);
  c3 = undefined;
  c4 = undefined;
  ({ title, noneSelectedText, addText, overwrites, editPermissions, onAdd } = guild);
  const tmp = closure_8();
  ({ sortedOverwrites, onRemove: c3, onChange: c4 } = useCommandPermissionListDefault(guild.id, overwrites, editPermissions));
  let obj = { spacing: nativeDefault.space.PX_8, children: items1 };
  useCommandPermissionListDefault(guild.id, overwrites, editPermissions);
  const Stack = guild(6115).Stack;
  const obj2 = { direction: "horizontal", align: "center", justify: "space-between", spacing: nativeDefault.space.PX_8, children: items };
  const Stack2 = guild(6115).Stack;
  items = [, ];
  const obj3 = { title, style: tmp.sectionTitle };
  items[0] = c4(guild(6140).TableRowGroupTitle, obj3);
  const obj4 = { accessibilityRole: "button", accessibilityState: { disabled: null != addDisabledReason }, disabled: null != addDisabledReason, onPress: onAdd, children: c4(Text, { variant: "body-sm/medium", color: str, children: addText }) };
  const PressableOpacity = guild(6152).PressableOpacity;
  str = "text-brand";
  Text = guild(5634).Text;
  if (null != addDisabledReason) {
    str = "text-muted";
  }
  items[1] = c4(PressableOpacity, obj4);
  items1 = [closure_5(Stack2, obj2), , ];
  if (sortedOverwrites.length > 0) {
    const obj5 = {
      hasIcons: true,
      children: sortedOverwrites.map((overwrite) => {
          const obj = { guild, commandId: importDefault, overwrite, hasAccessToMutatePermissions: dependencyMap, onChange, onRemove };
          return React3(EntryRow, obj, overwrite.id);
        })
    };
    const TableRowGroup = tmp7(6140).TableRowGroup;
    tmp8Result = tmp8(TableRowGroup, obj5);
  } else {
    const obj6 = { text: noneSelectedText };
    tmp8Result = tmp8(GuildSettingsModalIntegrationEmptyCardDefault, obj6);
  }
  items1[1] = tmp8Result;
  let tmp8Result2 = null;
  if (null != addDisabledReason) {
    const obj7 = { variant: "body-sm/normal", color: "text-muted", children: addDisabledReason };
    tmp8Result2 = tmp8(tmp7(5634).Text, obj7);
  }
  items1[2] = tmp8Result2;
  return closure_5(Stack, obj);
}
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let items = [PermissionUtils.DENY, PermissionUtils.ALLOW];
let closure_8 = createStyles.createStyles({ bannerText: { flexShrink: 1 }, sectionTitle: { flexShrink: 1, marginBottom: 0 } });
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/CommandPermissionSections.tsx");

export default function CommandPermissionSections(selectedPermissionCount) {
  let Stack;
  let addDisabledReason;
  let applicationId;
  let commandId;
  let defaultMemberPermissions;
  let editedTargetPermissions;
  let guildId;
  let hasAccessToMutatePermissions;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  let items3;
  let obj4;
  let obj6;
  let originalApplicationPermissions;
  let originalCommandPermissions;
  let overwritesOverLimit;
  let stringResult;
  let stringResult1;
  ({ commandId, guildId } = selectedPermissionCount);
  selectedPermissionCount = selectedPermissionCount.selectedPermissionCount;
  let channels;
  let membersAndRoles;
  defaultMemberPermissions = undefined;
  ({ applicationId, editedTargetPermissions, originalApplicationPermissions, originalCommandPermissions } = selectedPermissionCount);
  const tmp3 = channels;
  const tmp = closure_8();
  let obj = guildId(channels[19]);
  items = [membersAndRoles];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = { applicationId, commandId, guildId, editedTargetPermissions, originalApplicationPermissions, originalCommandPermissions, selectedPermissionCount, onLockout: selectedPermissionCount(channels[21]) };
  const tmp6 = selectedPermissionCount(channels[20]);
  const tmp6Result = tmp6(obj2);
  channels = tmp6Result.channels;
  membersAndRoles = tmp6Result.membersAndRoles;
  const editPermissions = tmp6Result.editPermissions;
  ({ hasAccessToMutatePermissions, overwritesOverLimit, addDisabledReason, defaultMemberPermissions } = tmp6Result);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp9 = null;
    const tmp17 = closure_6;
    if (overwritesOverLimit > 0) {
      const obj3 = { type: "warning", message: intl.format(guildId(tmp3[11]).t["B/dFBH"], obj4), role: "status" };
      const InlineNotice = tmp2(tmp3[25]).InlineNotice;
      intl = tmp2(tmp3[11]).intl;
      obj4 = { removeCount: overwritesOverLimit };
      tmp9 = editPermissions(InlineNotice, obj3);
    }
    const items2 = [tmp9, , , ];
    let tmp10 = null;
    if (null != defaultMemberPermissions) {
      const obj5 = { children: defaultMemberPermissions(Stack, obj6) };
      const Card = tmp2(tmp3[26]).Card;
      obj6 = { direction: "horizontal", align: "center", spacing: selectedPermissionCount(tmp3[8]).space.PX_12, children: items3 };
      Stack = tmp2(tmp3[7]).Stack;
      const obj7 = { size: "sm", color: selectedPermissionCount(tmp3[8]).colors.ICON_SUBTLE };
      const CircleInformationIcon = tmp2(tmp3[27]).CircleInformationIcon;
      items3 = [editPermissions(CircleInformationIcon, obj7), , ];
      const obj8 = { variant: "body-sm/normal", style: tmp.bannerText, children: intl2.format(guildId(tmp3[11]).t["2889Gq"], {}) };
      const Text = tmp2(tmp3[17]).Text;
      intl2 = tmp2(tmp3[11]).intl;
      items3[1] = editPermissions(Text, obj8);
      const obj9 = {
        size: "sm",
        variant: "secondary",
        text: intl3.string(guildId(tmp3[11]).t["HO/oXl"]),
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { defaultMemberPermissions, guildId };
              return obj.openLazy(asyncRequire(20086, dependencyMap.paths), "DefaultMemberPermissions", obj2);
            }
      };
      const Button = tmp2(tmp3[28]).Button;
      intl3 = tmp2(tmp3[11]).intl;
      items3[2] = editPermissions(Button, obj9);
      tmp10 = editPermissions(Card, obj5);
    }
    items2[1] = tmp10;
    const obj10 = {
      guild: stateFromStores,
      commandId,
      title: stringResult,
      noneSelectedText: intl6.string(guildId(tmp3[11]).t.C0rYfq),
      addText: intl7.string(guildId(tmp3[11]).t["56jRn8"]),
      addDisabledReason,
      overwrites: membersAndRoles,
      editPermissions,
      hasAccessToMutatePermissions,
      onAdd() {
          const intl = intl12.intl;
          const stringResult = intl.string(intl12.t["56jRn8"]);
          const useCommandPermissionMemberRoleSearch = useAddCommandPermissions.useCommandPermissionMemberRoleSearch;
          const intl2 = intl12.intl;
          const stringResult1 = intl2.string(intl12.t.wAfO5Y);
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj = { editPermissions, guildId, hasMemberSearch: true, title: stringResult, overwrittenKeys: Object.keys(membersAndRoles), search: useCommandPermissionMemberRoleSearch, searchPlaceholder: stringResult1, selectedPermissionCount };
          ActionSheetActionCreatorsDefault;
          const tmp4 = asyncRequire(20081, dependencyMap.paths);
          openLazy(tmp4, "AddCommandPermissions", obj);
        }
    };
    if (null == commandId) {
      const intl5 = tmp2(tmp3[11]).intl;
      stringResult = intl5.string(tmp2(tmp3[11]).t["vPWe++"]);
    } else {
      const intl4 = tmp2(tmp3[11]).intl;
      stringResult = intl4.string(tmp2(tmp3[11]).t["1jLVGB"]);
    }
    intl6 = tmp2(tmp3[11]).intl;
    intl7 = tmp2(tmp3[11]).intl;
    items2[2] = editPermissions(Section, obj10);
    const obj11 = {
      guild: stateFromStores,
      commandId,
      title: stringResult1,
      noneSelectedText: intl10.string(guildId(tmp3[11]).t["UBJhC/"]),
      addText: intl11.string(guildId(tmp3[11]).t["i1c+kV"]),
      addDisabledReason,
      overwrites: channels,
      editPermissions,
      hasAccessToMutatePermissions,
      onAdd() {
          const intl = intl12.intl;
          const stringResult = intl.string(intl12.t["i1c+kV"]);
          const useCommandPermissionChannelSearch = useAddCommandPermissions.useCommandPermissionChannelSearch;
          const intl2 = intl12.intl;
          const stringResult1 = intl2.string(intl12.t["TLQo/i"]);
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj = { editPermissions, guildId, hasMemberSearch: false, title: stringResult, overwrittenKeys: Object.keys(channels), search: useCommandPermissionChannelSearch, searchPlaceholder: stringResult1, selectedPermissionCount };
          ActionSheetActionCreatorsDefault;
          const tmp4 = asyncRequire(20081, dependencyMap.paths);
          openLazy(tmp4, "AddCommandPermissions", obj);
        }
    };
    if (null == commandId) {
      const intl9 = tmp2(tmp3[11]).intl;
      stringResult1 = intl9.string(tmp2(tmp3[11]).t.OGiMXJ);
    } else {
      const intl8 = tmp2(tmp3[11]).intl;
      stringResult1 = intl8.string(tmp2(tmp3[11]).t.Ujbaqm);
    }
    const obj12 = { children: items2 };
    intl10 = tmp2(tmp3[11]).intl;
    intl11 = tmp2(tmp3[11]).intl;
    items2[3] = editPermissions(Section, obj11);
    return defaultMemberPermissions(tmp17, obj12);
  }
};
