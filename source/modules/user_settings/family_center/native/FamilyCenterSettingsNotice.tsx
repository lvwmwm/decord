// Module ID: 13826
// Function ID: 105868
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [31, 6695, 33, 6235, 13757, 2199, 5827, 4175, 2]
// Exports: default

// Module 13826 (FamilyCenterSettingsParentalControlsNotice)
import "result";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(6235);
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
  return jsx(importDefault(13757), {
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
