// Module ID: 15095
// Function ID: 15096
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8702, 21, 8955, 14990, 2482, 7860, 4801, 2]
// Exports: default

// Module 15095 (FamilyCenterSettingsNotice)
import _modDef2482 from "module_2482" /* 2482 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4801 */;
import LayerActionCreators from "LayerActionCreators" /* 7860 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14990 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8702).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8955).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8955);
  obj2.label = _modDef2482.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
