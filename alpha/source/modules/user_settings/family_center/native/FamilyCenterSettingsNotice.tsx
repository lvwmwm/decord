// Module ID: 16144
// Function ID: 16145
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7418, 21, 558, 576, 8123, 10460, 7691, 5663, 1125, 2535, 16014, 2]

// Module 16144 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2535 from "module_2535" /* 2535 */;
import Constants from "Constants" /* 7418 */;
import LayerActionCreators from "LayerActionCreators" /* 7691 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10460 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16014 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let tmp3;
  let tmp = dependencyMap;
  let obj = activeLinkUserIds(576);
  const cResult = obj.c(5);
  const obj2 = activeLinkUserIds(8123);
  activeLinkUserIds = obj2.useActiveLinkUserIds();
  if (cResult[0] !== activeLinkUserIds) {
    function handleMessageParentClick() {
      let length;
      const tmp = openLinkedUsersChannelDefault;
      tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
        const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
        activeLinkUserIds(dependencyMap[8]);
        const intl = activeLinkUserIds(dependencyMap[9]).intl;
        const obj = { count: length.length };
        return presentFailedToast(intl.formatToPlainString(_modDef2535.D1BwNC, obj));
      });
    }
    cResult[0] = activeLinkUserIds;
    cResult[1] = handleMessageParentClick;
    tmp3 = handleMessageParentClick;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    let tmp4;
    if (cResult[3] === activeLinkUserIds.length) {
      tmp4 = cResult[4];
    }
    return tmp4;
  }
  SafetySettingsNoticeDefault;
  const tmp6 = <tmp5 label={_modDef2535.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={tmp3} count={activeLinkUserIds.length} />;
  cResult[2] = tmp3;
  cResult[3] = activeLinkUserIds.length;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : (function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8123);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let tmp = SafetySettingsNoticeDefault;
  return <tmp label={_modDef2535.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    let length;
    const tmp = openLinkedUsersChannelDefault;
    tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const presentFailedToast = activeLinkUserIds(dependencyMap[8]).presentFailedToast;
      activeLinkUserIds(dependencyMap[8]);
      const intl = activeLinkUserIds(dependencyMap[9]).intl;
      const obj = { count: length.length };
      return presentFailedToast(intl.formatToPlainString(_modDef2535.D1BwNC, obj));
    });
  }} count={activeLinkUserIds.length} />;
});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default tmp3;
