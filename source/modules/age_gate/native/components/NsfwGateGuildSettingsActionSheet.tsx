// Module ID: 13918
// Function ID: 13919
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 13919, 7138, 7089, 7140, 1233, 4448, 7059, 13920, 2]
// Exports: default

// Module 13918 (NsfwGateGuildSettingsActionSheet)
import noopAll from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(13919);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  obj = { header: callback(guild(7089).BottomSheetTitleHeader, obj), children: null };
  obj = { title: guild.name };
  obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = guild(1233).intl;
  obj2[0] = intl.string(guild(1233).t.h850Ss);
  obj2[1] = function onPress() {
    closure_1_1(closure_1_2[7]).hideActionSheet();
    const obj = closure_1_1(closure_1_2[7]);
    closure_1_1(closure_1_2[8]).open(guild.id);
  };
  const items = [callback(guild(7140).ActionSheetRow, obj2), callback(guild(13920).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj3 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1233).intl;
  obj3[1] = intl2.string(guild(1233).t.J2TBi3);
  obj3[2] = function onPress() {
    return guild(closure_1_2[9]).handleLeaveServer(guild);
  };
  items[3] = callback(guild(7140).ActionSheetRow, obj3);
  obj1[1] = items;
  obj[1] = callback2(guild(7140).ActionSheetRow.Group, obj1);
  return callback(guild(7138).ActionSheet, obj);
};
