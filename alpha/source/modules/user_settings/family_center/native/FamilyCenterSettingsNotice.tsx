// Module ID: 16148
// Function ID: 16149
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7707, 21, 8070, 16016, 2824, 9016, 6229, 5598, 1112, 2]
// Exports: default

// Module 16148 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2824 from "module_2824" /* 2824 */;
import LayerActionCreators from "LayerActionCreators" /* 6229 */;
import Constants from "Constants" /* 7707 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9016 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16016 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8070);
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
