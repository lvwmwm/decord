// Module ID: 14816
// Function ID: 14817
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: [19, 8399, 21, 8645, 14687, 2396, 7587, 4573, 2]
// Exports: default

// Module 14816 (FamilyCenterSettingsParentalControlsNotice)
import noopAll from "noop" /* 19 */;
import messagesProxyDefault from "messagesProxy" /* 2396 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14687 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 8399 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(8645);
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
