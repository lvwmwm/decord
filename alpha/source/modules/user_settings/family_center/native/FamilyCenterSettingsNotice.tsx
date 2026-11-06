// Module ID: 16976
// Function ID: 16977
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7577, 21, 8461, 16844, 2664, 10706, 7859, 5866, 1113, 2]
// Exports: default

// Module 16976 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Constants from "Constants" /* 7577 */;
import LayerActionCreators from "LayerActionCreators" /* 7859 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10706 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16844 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8461);
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
