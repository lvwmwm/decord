// Module ID: 16705
// Function ID: 16706
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7490, 21, 8369, 16573, 2538, 10570, 7760, 5711, 1113, 2]
// Exports: default

// Module 16705 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2538 from "module_2538" /* 2538 */;
import Constants from "Constants" /* 7490 */;
import LayerActionCreators from "LayerActionCreators" /* 7760 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10570 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16573 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8369);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2538.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2538.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
