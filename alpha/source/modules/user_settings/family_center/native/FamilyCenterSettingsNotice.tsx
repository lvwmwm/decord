// Module ID: 16028
// Function ID: 16029
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6383, 21, 9016, 15896, 2723, 9020, 7997, 5473, 1113, 2]
// Exports: default

// Module 16028 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2723 from "module_2723" /* 2723 */;
import Constants from "Constants" /* 6383 */;
import LayerActionCreators from "LayerActionCreators" /* 7997 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9020 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15896 */;
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
  return <tmp label={_modDef2723.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2723.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
