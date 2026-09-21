// Module ID: 15082
// Function ID: 15083
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8675, 21, 558, 568, 8921, 7833, 4771, 14951, 2486, 2]

// Module 15082 (FamilyCenterSettingsNotice)
import _modDef2486 from "module_2486" /* 2486 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4771 */;
import LayerActionCreators from "LayerActionCreators" /* 7833 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14951 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8675).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = activeLinkUserIds(568).c(5);
  let obj = activeLinkUserIds(568);
  activeLinkUserIds = activeLinkUserIds(8921).useActiveLinkUserIds();
  if (cResult[0] !== activeLinkUserIds) {
    const fn = function o() {
      LayerActionCreators.popLayer();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
    };
    cResult[0] = activeLinkUserIds;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === activeLinkUserIds.length) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj2 = activeLinkUserIds(8921);
  obj3.label = _modDef2486.i284fU;
  obj3.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj3.labelHook = tmp3;
  obj3.count = activeLinkUserIds.length;
  const tmp6 = jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
  cResult[2] = tmp3;
  cResult[3] = activeLinkUserIds.length;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : (() => {
  activeLinkUserIds = activeLinkUserIds(8921).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8921);
  obj2.label = _modDef2486.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
});
