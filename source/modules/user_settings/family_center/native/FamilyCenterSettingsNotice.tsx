// Module ID: 14422
// Function ID: 14423
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [19, 8670, 21, 8772, 14338, 2369, 7332, 4491, 2]
// Exports: default

// Module 14422 (FamilyCenterSettingsParentalControlsNotice)
import noopAll from "noop" /* 19 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14338 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 8670 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(8772);
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
