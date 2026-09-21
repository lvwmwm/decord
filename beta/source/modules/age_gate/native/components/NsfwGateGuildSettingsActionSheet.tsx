// Module ID: 14177
// Function ID: 14178
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 14178, 7442, 7394, 7444, 1115, 4723, 7364, 14179, 2]
// Exports: default

// Module 14177 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7364 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 14179 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(14178).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7394).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1115).intl;
  obj5.label = intl.string(guild(1115).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [closure_3(guild(7444).ActionSheetRow, obj5), closure_3(guild(14179).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1115).intl;
  obj6.label = intl2.string(guild(1115).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7444).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7444).ActionSheetRow.Group, obj4);
  return closure_3(guild(7442).ActionSheet, obj2);
};
