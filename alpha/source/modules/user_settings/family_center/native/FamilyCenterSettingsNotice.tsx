// Module ID: 16861
// Function ID: 16862
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7614, 21, 8493, 16729, 2667, 10700, 7884, 5831, 1113, 2]
// Exports: default

// Module 16861 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2667 from "module_2667" /* 2667 */;
import Constants from "Constants" /* 7614 */;
import LayerActionCreators from "LayerActionCreators" /* 7884 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10700 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16729 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8493);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2667.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2667.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
