// Module ID: 17225
// Function ID: 17226
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 6847, 21, 9550, 17093, 2685, 9554, 8460, 5951, 1113, 2]
// Exports: default

// Module 17225 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2685 from "module_2685" /* 2685 */;
import Constants from "Constants" /* 6847 */;
import LayerActionCreators from "LayerActionCreators" /* 8460 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9554 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17093 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(9550);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2685.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2685.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
};
