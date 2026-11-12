// Module ID: 12828
// Function ID: 12829
// Name: getStageSpeakInviteBlockedUsersText
// Dependencies: [1113, 2]
// Exports: default

// Module 12828 (getStageSpeakInviteBlockedUsersText)
import intl4 from "intl" /* 1113 */;
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
