// Module ID: 14271
// Function ID: 14272
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [19, 7924, 21, 7480, 14202, 2337, 7193, 4393, 2]
// Exports: default

// Module 14271 (FamilyCenterSettingsParentalControlsNotice)
import noopAll from "noop" /* 19 */;
import messagesProxyDefault from "messagesProxy" /* 2337 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14202 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 7924 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(7480);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = {
    label: messagesProxyDefault.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(closure_1_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      closure_1_1(closure_1_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: messagesProxyDefault.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(closure_1_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      closure_1_1(closure_1_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  });
};
