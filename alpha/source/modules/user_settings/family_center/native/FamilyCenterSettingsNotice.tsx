// Module ID: 16663
// Function ID: 16664
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7484, 21, 8361, 16531, 2537, 10550, 7753, 5706, 1114, 2]
// Exports: default

// Module 16663 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Constants from "Constants" /* 7484 */;
import LayerActionCreators from "LayerActionCreators" /* 7753 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10550 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16531 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8361);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2537.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2537.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
