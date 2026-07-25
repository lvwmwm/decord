// Module ID: 13781
// Function ID: 105690
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [31, 6659, 33, 6200, 13712, 2199, 5817, 4141, 2]
// Exports: default

// Module 13781 (FamilyCenterSettingsParentalControlsNotice)
import "result";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(6200);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = {
    label: importDefault(2199).i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(outer1_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      outer1_1(outer1_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  };
  return jsx(importDefault(13712), {
    label: importDefault(2199).i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(outer1_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      outer1_1(outer1_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  });
};
