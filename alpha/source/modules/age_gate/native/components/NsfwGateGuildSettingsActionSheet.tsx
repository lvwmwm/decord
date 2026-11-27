// Module ID: 15322
// Function ID: 15323
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 15323, 7546, 7507, 7548, 1112, 5257, 7476, 15324, 2]
// Exports: default

// Module 15322 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7476 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 15324 */;
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
  let obj = guild(15323);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  let obj2 = { header: closure_3(guild(7507).BottomSheetTitleHeader, obj3), children: closure_4(Group, obj4) };
  const ActionSheet = guild(7546).ActionSheet;
  obj3 = { title: guild.name };
  obj4 = { hasIcons: false, children: items };
  Group = guild(7548).ActionSheetRow.Group;
  const obj5 = {
    label: intl.string(guild(1112).t.h850Ss),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const ActionSheetRow = guild(7548).ActionSheetRow;
  intl = guild(1112).intl;
  items = [closure_3(ActionSheetRow, obj5), closure_3(guild(15324).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = {
    variant: "danger",
    label: intl2.string(guild(1112).t.J2TBi3),
    onPress() {
      const obj = GuildActionSheetActions;
      return obj.handleLeaveServer(guild);
    }
  };
  const ActionSheetRow2 = guild(7548).ActionSheetRow;
  intl2 = guild(1112).intl;
  items[3] = closure_3(ActionSheetRow2, obj6);
  return closure_3(ActionSheet, obj2);
};
