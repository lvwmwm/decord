// Module ID: 17380
// Function ID: 17381
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6908, 21, 9628, 17248, 2703, 9632, 8537, 6008, 1113, 2]
// Exports: default

// Module 17380 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2703 from "module_2703" /* 2703 */;
import Constants from "Constants" /* 6908 */;
import LayerActionCreators from "LayerActionCreators" /* 8537 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9632 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17248 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(9628);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2703.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2703.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
