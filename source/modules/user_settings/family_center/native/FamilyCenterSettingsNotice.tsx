// Module ID: 13842
// Function ID: 13843
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [19, 6713, 21, 6252, 13773, 2223, 5843, 4199, 2]
// Exports: default

// Module 13842 (FamilyCenterSettingsParentalControlsNotice)
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(6252);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { label: null, noticeType: null, labelHook: null, count: null };
  obj[0] = importDefault(2223).i284fU;
  obj[1] = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj[2] = function labelHook() {
    let obj = activeLinkUserIds(outer1_2[6]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    outer1_1(outer1_2[7]).openPrivateChannel(obj);
  };
  obj[3] = activeLinkUserIds.length;
  return jsx(importDefault(13773), { label: null, noticeType: null, labelHook: null, count: null });
};
