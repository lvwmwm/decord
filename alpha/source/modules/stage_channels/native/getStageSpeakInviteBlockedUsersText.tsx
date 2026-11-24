// Module ID: 10141
// Function ID: 10142
// Name: getStageSpeakInviteBlockedUsersText
// Dependencies: [1112, 2]
// Exports: default

// Module 10141 (getStageSpeakInviteBlockedUsersText)
import intl4 from "intl" /* 1112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/native/getStageSpeakInviteBlockedUsersText.tsx");

export default function getStageSpeakInviteBlockedUsersText(number, number2) {
  let formatResult;
  if (number > 0) {
    if (number2 > 0) {
      const intl3 = intl4.intl;
      const obj2 = { number: number + number2 };
      formatResult = intl3.format(intl4.t["cXaoI+"], obj2);
    }
    return formatResult;
  }
  if (number2 > 0) {
    const intl2 = intl4.intl;
    const obj3 = { number: number2 };
    formatResult = intl2.format(intl4.t["0bU4FO"], obj3);
  } else {
    const intl = intl4.intl;
    const obj = { number };
    formatResult = intl.format(intl4.t.sFzx0G, obj);
  }
};
