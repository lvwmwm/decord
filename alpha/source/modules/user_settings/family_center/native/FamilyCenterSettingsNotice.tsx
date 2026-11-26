// Module ID: 16320
// Function ID: 16321
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7840, 21, 8211, 16188, 2847, 9157, 6355, 5724, 1112, 2]
// Exports: default

// Module 16320 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2847 from "module_2847" /* 2847 */;
import LayerActionCreators from "LayerActionCreators" /* 6355 */;
import Constants from "Constants" /* 7840 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9157 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16188 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8211);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2847.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2847.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
