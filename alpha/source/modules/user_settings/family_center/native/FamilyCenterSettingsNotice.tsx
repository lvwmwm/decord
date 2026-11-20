// Module ID: 15992
// Function ID: 15993
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6385, 21, 9016, 15860, 2725, 9020, 7996, 5475, 1112, 2]
// Exports: default

// Module 15992 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2725 from "module_2725" /* 2725 */;
import Constants from "Constants" /* 6385 */;
import LayerActionCreators from "LayerActionCreators" /* 7996 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9020 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15860 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(9016);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2725.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2725.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
