// Module ID: 17035
// Function ID: 17036
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7554, 21, 8440, 16903, 2664, 10689, 7836, 5836, 1113, 2]
// Exports: default

// Module 17035 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Constants from "Constants" /* 7554 */;
import LayerActionCreators from "LayerActionCreators" /* 7836 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10689 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16903 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8440);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2664.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2664.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
