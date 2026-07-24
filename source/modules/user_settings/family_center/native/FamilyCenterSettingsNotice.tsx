// Module ID: 13770
// Function ID: 105563
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [31, 7563, 33, 7122, 13701, 2198, 6821, 4140, 2]
// Exports: default

// Module 13770 (FamilyCenterSettingsParentalControlsNotice)
import "result";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(7122);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = {
    label: importDefault(2198).i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(outer1_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      outer1_1(outer1_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  };
  return jsx(importDefault(13701), {
    label: importDefault(2198).i284fU,
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
