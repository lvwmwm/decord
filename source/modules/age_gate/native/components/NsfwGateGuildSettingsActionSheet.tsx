// Module ID: 13023
// Function ID: 100845
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [31, 33, 13024, 5533, 5220, 5535, 1212, 4133, 5113, 13025, 2]
// Exports: default

// Module 13023 (NsfwGateGuildSettingsActionSheet)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("MessageRequestRestrictedGuildPrivacyOption").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(13024);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  obj = {};
  obj = { title: guild.name };
  obj.header = callback(guild(5220).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl = guild(1212).intl;
  obj2.label = intl.string(guild(1212).t.h850Ss);
  obj2.onPress = function onPress() {
    outer1_1(outer1_2[7]).hideActionSheet();
    const obj = outer1_1(outer1_2[7]);
    outer1_1(outer1_2[8]).open(guild.id);
  };
  const items = [callback(guild(5535).ActionSheetRow, obj2), callback(guild(13025).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj3 = { variant: "danger" };
  const intl2 = guild(1212).intl;
  obj3.label = intl2.string(guild(1212).t.J2TBi3);
  obj3.onPress = function onPress() {
    return guild(outer1_2[9]).handleLeaveServer(guild);
  };
  items[3] = callback(guild(5535).ActionSheetRow, obj3);
  obj1.children = items;
  obj.children = callback2(guild(5535).ActionSheetRow.Group, obj1);
  return callback(guild(5533).ActionSheet, obj);
};
