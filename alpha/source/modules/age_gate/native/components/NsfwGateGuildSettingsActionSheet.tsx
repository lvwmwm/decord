// Module ID: 15691
// Function ID: 15692
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 15692, 7360, 7315, 7362, 1114, 5253, 7282, 15693, 2]
// Exports: default

// Module 15691 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 15693 */;
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
  let obj = guild(15692);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  let obj2 = { header: closure_3(guild(7315).BottomSheetTitleHeader, obj3), children: closure_4(Group, obj4) };
  const ActionSheet = guild(7360).ActionSheet;
  obj3 = { title: guild.name };
  obj4 = { hasIcons: false, children: items };
  Group = guild(7362).ActionSheetRow.Group;
  const obj5 = {
    label: intl.string(guild(1114).t.h850Ss),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const ActionSheetRow = guild(7362).ActionSheetRow;
  intl = guild(1114).intl;
  items = [closure_3(ActionSheetRow, obj5), closure_3(guild(15693).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = {
    variant: "danger",
    label: intl2.string(guild(1114).t.J2TBi3),
    onPress() {
      const obj = GuildActionSheetActions;
      return obj.handleLeaveServer(guild);
    }
  };
  const ActionSheetRow2 = guild(7362).ActionSheetRow;
  intl2 = guild(1114).intl;
  items[3] = closure_3(ActionSheetRow2, obj6);
  return closure_3(ActionSheet, obj2);
};
