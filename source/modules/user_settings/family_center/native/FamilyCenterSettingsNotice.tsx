// Module ID: 14128
// Function ID: 14129
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [19, 7824, 21, 7381, 14059, 2303, 7094, 4355, 2]
// Exports: default

// Module 14128 (FamilyCenterSettingsParentalControlsNotice)
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(7381);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { label: null, noticeType: null, labelHook: null, count: null };
  obj[0] = importDefault(2303).i284fU;
  obj[1] = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj[2] = function labelHook() {
    let obj = activeLinkUserIds(outer1_2[6]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    outer1_1(outer1_2[7]).openPrivateChannel(obj);
  };
  obj[3] = activeLinkUserIds.length;
  return jsx(importDefault(14059), { label: null, noticeType: null, labelHook: null, count: null });
};
