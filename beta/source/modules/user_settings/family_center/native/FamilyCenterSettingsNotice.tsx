// Module ID: 15093
// Function ID: 15094
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8670, 21, 8923, 14962, 2482, 7828, 4769, 2]
// Exports: default

// Module 15093 (FamilyCenterSettingsNotice)
import _modDef2482 from "module_2482" /* 2482 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import LayerActionCreators from "LayerActionCreators" /* 7828 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14962 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8670).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8923).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8923);
  obj2.label = _modDef2482.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
