// Module ID: 16115
// Function ID: 16116
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6504, 21, 9136, 15983, 2824, 9140, 8116, 5594, 1112, 2]
// Exports: default

// Module 16115 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2824 from "module_2824" /* 2824 */;
import Constants from "Constants" /* 6504 */;
import LayerActionCreators from "LayerActionCreators" /* 8116 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9140 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15983 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(9136);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2824.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2824.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
