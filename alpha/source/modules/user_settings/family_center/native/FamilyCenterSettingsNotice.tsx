// Module ID: 15151
// Function ID: 15152
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8745, 21, 8999, 15046, 2484, 7914, 4840, 2]
// Exports: default

// Module 15151 (FamilyCenterSettingsNotice)
import _modDef2484 from "module_2484" /* 2484 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4840 */;
import LayerActionCreators from "LayerActionCreators" /* 7914 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15046 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8745).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8999).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8999);
  obj2.label = _modDef2484.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
