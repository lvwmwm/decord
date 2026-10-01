// Module ID: 14350
// Function ID: 14351
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7847, 21, 8105, 14245, 2487, 7006, 4849, 2]
// Exports: default

// Module 14350 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import LayerActionCreators from "LayerActionCreators" /* 7006 */;
import Constants from "Constants" /* 7847 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14245 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8105);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  SafetySettingsNoticeDefault;
  return <tmp label={_modDef2487.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function labelHook() {
    const obj = LayerActionCreators;
    obj.popLayer();
    const obj2 = ChannelActionCreatorsDefault;
    const obj3 = { recipientIds: activeLinkUserIds };
    obj2.openPrivateChannel(obj3);
  }} count={activeLinkUserIds.length} />;
};
