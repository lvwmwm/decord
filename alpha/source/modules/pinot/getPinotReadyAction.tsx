// Module ID: 15794
// Function ID: 15795
// Name: getPinotReadyAction
// Dependencies: [11465, 2]
// Exports: getPinotReadyAction

// Module 15794 (getPinotReadyAction)
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 11465 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/getPinotReadyAction.tsx");

export function getPinotReadyAction(swp_message_promotion_locked) {
  let prop;
  let flag = swp_message_promotion_locked.swp_message_promotion_locked;
  if (flag == null) {
    flag = true;
  }
  const obj = { type: "PINOT_MEMBER_SETTING_STATE", locked: flag, defaultOptedOut: prop };
  prop = swp_message_promotion_locked.swp_message_promotion_default_opted_out;
  if (prop == null) {
    prop = null;
  }
  return obj;
}
