// Module ID: 16269
// Function ID: 16270
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7806, 21, 8169, 16137, 2846, 9115, 6324, 5693, 1112, 2]
// Exports: default

// Module 16269 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2846 from "module_2846" /* 2846 */;
import LayerActionCreators from "LayerActionCreators" /* 6324 */;
import Constants from "Constants" /* 7806 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9115 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16137 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8169);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2846.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2846.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
