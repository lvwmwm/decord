// Module ID: 17343
// Function ID: 17344
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6910, 21, 9616, 17211, 2701, 9620, 8526, 6014, 1113, 2]
// Exports: default

// Module 17343 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2701 from "module_2701" /* 2701 */;
import Constants from "Constants" /* 6910 */;
import LayerActionCreators from "LayerActionCreators" /* 8526 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9620 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17211 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(9616);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2701.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2701.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
