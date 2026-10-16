// Module ID: 15780
// Function ID: 15781
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 7241, 21, 558, 576, 7958, 7525, 7236, 15650, 2571, 2]

// Module 15780 (FamilyCenterSettingsNotice)
import Fragment from "Fragment" /* 21 */;
import _modDef2571 from "module_2571" /* 2571 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7236 */;
import Constants from "Constants" /* 7241 */;
import LayerActionCreators from "LayerActionCreators" /* 7525 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15650 */;
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
  let obj2 = activeLinkUserIds(7958);
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
  const tmp6 = <tmp5 label={_modDef2571.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={tmp3} count={activeLinkUserIds.length} />;
  cResult[2] = tmp3;
  cResult[3] = activeLinkUserIds.length;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : (function FamilyCenterSettingsParentalControlsNotice() {
  let activeLinkUserIds;
  let obj = activeLinkUserIds(7958);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  SafetySettingsNoticeDefault;
  return <tmp label={_modDef2571.i284fU} noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE} labelHook={function handleMessageParentClick() {
    const obj = LayerActionCreators;
    obj.popLayer();
    const obj2 = ChannelActionCreatorsDefault;
    const obj3 = { recipientIds: activeLinkUserIds };
    obj2.openPrivateChannel(obj3);
  }} count={activeLinkUserIds.length} />;
});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default tmp3;
