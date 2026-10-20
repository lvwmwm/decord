// Module ID: 15908
// Function ID: 15909
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7365, 21, 558, 576, 8072, 7639, 7360, 15778, 2526, 2]

// Module 15908 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2526 from "module_2526" /* 2526 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7360 */;
import Constants from "Constants" /* 7365 */;
import LayerActionCreators from "LayerActionCreators" /* 7639 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15778 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let tmp3;
  let obj = activeLinkUserIds(576);
  const cResult = obj.c(5);
  let obj2 = activeLinkUserIds(8072);
  activeLinkUserIds = obj2.useActiveLinkUserIds();
  if (cResult[0] !== activeLinkUserIds) {
    function handleMessageParentClick() {
      const obj = LayerActionCreators;
      obj.popLayer();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: activeLinkUserIds };
      obj2.openPrivateChannel(obj3);
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
  const tmp6 = <tmp5 label={_modDef2526.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={tmp3} count={activeLinkUserIds.length} />;
  cResult[2] = tmp3;
  cResult[3] = activeLinkUserIds.length;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : (function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(8072);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  SafetySettingsNoticeDefault;
  return <tmp label={_modDef2526.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    const obj = LayerActionCreators;
    obj.popLayer();
    const obj2 = ChannelActionCreatorsDefault;
    const obj3 = { recipientIds: activeLinkUserIds };
    obj2.openPrivateChannel(obj3);
  }} count={activeLinkUserIds.length} />;
});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default tmp3;
