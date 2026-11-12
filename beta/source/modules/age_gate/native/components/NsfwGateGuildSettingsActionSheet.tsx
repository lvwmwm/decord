// Module ID: 16076
// Function ID: 16077
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 16077, 7459, 7415, 7461, 1113, 5406, 7384, 16078, 2]
// Exports: default

// Module 16076 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7384 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 16078 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  let Group;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  guild = guild.guild;
  let obj = guild(16077);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  let obj2 = { header: closure_3(guild(7415).BottomSheetTitleHeader, obj3), children: closure_4(Group, obj4) };
  const ActionSheet = guild(7459).ActionSheet;
  obj3 = { title: guild.name };
  obj4 = { hasIcons: false, children: items };
  Group = guild(7461).ActionSheetRow.Group;
  const obj5 = {
    label: intl.string(guild(1113).t.h850Ss),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const ActionSheetRow = guild(7461).ActionSheetRow;
  intl = guild(1113).intl;
  items = [closure_3(ActionSheetRow, obj5), closure_3(guild(16078).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = {
    variant: "danger",
    label: intl2.string(guild(1113).t.J2TBi3),
    onPress() {
      const obj = GuildActionSheetActions;
      return obj.handleLeaveServer(guild);
    }
  };
  const ActionSheetRow2 = guild(7461).ActionSheetRow;
  intl2 = guild(1113).intl;
  items[3] = closure_3(ActionSheetRow2, obj6);
  return closure_3(ActionSheet, obj2);
};
