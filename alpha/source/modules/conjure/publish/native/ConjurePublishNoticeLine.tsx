// Module ID: 12416
// Function ID: 12417
// Name: ConjurePublishNoticeLine
// Dependencies: [19, 21, 558, 576, 12408, 12329, 12417, 1125, 12338, 5270, 12418, 3863, 5246, 12419, 2]

// Module 12416 (ConjurePublishNoticeLine)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import Text_Text from "Text/Text" /* 5270 */;
import useConjurePublishedServerNameDefault from "useConjurePublishedServerName" /* 12329 */;
import conjurePublishCard from "conjurePublishCard" /* 12338 */;
import useConjurePublishedAppNameDefault from "useConjurePublishedAppName" /* 12408 */;
import useConjureAutomodSettingsLinkDefault from "useConjureAutomodSettingsLink" /* 12417 */;
import useConjurePatchNotesLink from "useConjurePatchNotesLink" /* 12418 */;
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet" /* 12419 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useConjurePatchNotesLinkDefault = useConjurePatchNotesLink;
const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;
let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let tmp5;
const useConjureAutomodSettingsLink = tmp5(12417);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishNoticeLine(arg0) {
  let items;
  let notice;
  let projectId;
  let str;
  const obj = react2;
  const cResult = obj.c(13);
  ({ projectId, notice } = arg0);
  const tmp4 = useConjurePublishedAppNameDefault(projectId);
  const tmp5 = useConjurePublishedServerNameDefault(projectId);
  const tmp6 = useConjureAutomodSettingsLinkDefault(projectId);
  if (cResult[0] === tmp6.automod) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === notice) {
        let tmp7;
        let tmp12;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp6.automod) {
          if (cResult[6] === tmp6.guildId) {
            if (cResult[7] === notice) {
              let tmp10;
              if (cResult[8] === projectId) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === tmp7) {
                let tmp16;
                if (cResult[11] === tmp10) {
                  tmp16 = cResult[12];
                }
                return tmp16;
              }
              const obj2 = { variant: "text-md/normal", color: "text-default", children: items };
              items = [tmp7, tmp10];
              const tmp18 = React3(Text_Text.Text, obj2);
              cResult[10] = tmp7;
              cResult[11] = tmp10;
              cResult[12] = tmp18;
              tmp16 = tmp18;
            }
          }
        }
        if (null != tmp6.guildId) {
          const obj3 = { guildId: tmp6.guildId, update: notice.update };
          tmp12 = _false(tmp(12417).ConjureAutomodSettingsLink, obj3);
        } else {
          tmp12 = null;
          if (!tmp6.automod) {
            tmp12 = null;
            if (notice.update) {
              tmp12 = null;
              if (null != notice.published_revision) {
                const obj4 = { projectId, notice };
                tmp12 = _false(closure_6, obj4);
              }
            }
          }
        }
        cResult[5] = tmp6.automod;
        cResult[6] = tmp6.guildId;
        cResult[7] = notice;
        cResult[8] = projectId;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
    }
  }
  const intl = tmp(1125).intl;
  const format = intl.format;
  const obj5 = { name: tmp4, server: str };
  str = tmp5;
  const tmpResult = conjurePublishCard;
  const publishNoticeMessageResult = tmpResult.publishNoticeMessage(notice, tmp5, tmp6.automod);
  if (tmp5 == null) {
    str = "";
  }
  const formatResult = format(publishNoticeMessageResult, obj5);
  cResult[0] = tmp6.automod;
  cResult[1] = tmp4;
  cResult[2] = notice;
  cResult[3] = tmp5;
  cResult[4] = formatResult;
  tmp7 = formatResult;
}) : (function ConjurePublishNoticeLine(arg0) {
  let notice;
  let projectId;
  let tmp7;
  ({ projectId, notice } = arg0);
  const tmp2 = useConjurePublishedAppNameDefault(projectId);
  let str = useConjurePublishedServerNameDefault(projectId);
  const tmp3 = useConjureAutomodSettingsLinkDefault(projectId);
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  const format = intl.format;
  const obj2 = { name: tmp2, server: str };
  const obj = conjurePublishCard;
  const publishNoticeMessageResult = obj.publishNoticeMessage(notice, str, tmp3.automod);
  const tmp4 = React3;
  if (str == null) {
    str = "";
  }
  const children = [format(publishNoticeMessageResult, obj2), ];
  if (null != tmp3.guildId) {
    const obj3 = { guildId: tmp3.guildId, update: notice.update };
    tmp7 = _false(useConjureAutomodSettingsLink.ConjureAutomodSettingsLink, obj3);
  } else {
    tmp7 = null;
    if (!tmp3.automod) {
      tmp7 = null;
      if (notice.update) {
        tmp7 = null;
        if (null != notice.published_revision) {
          const obj4 = { projectId, notice };
          tmp7 = _false(closure_6, obj4);
        }
      }
    }
  }
  children[1] = tmp7;
  return tmp4(Text, { variant: "text-md/normal", color: "text-default", children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PatchNotesLink(projectId) {
  let closure_1;
  let items;
  let obj = projectId(576);
  const cResult = obj.c(5);
  projectId = projectId.projectId;
  const tmp5 = useConjurePatchNotesLinkDefault(projectId, projectId.notice);
  importDefault = tmp5;
  let tmp6 = null;
  if (null != tmp5) {
    let formatResult;
    if (cResult[0] === tmp5) {
      let tmp7;
      let tmp9;
      if (cResult[1] === projectId) {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp7) {
        let obj2 = { children: items };
        items = [" ", tmp7];
        const tmp12 = closure_4(closure_5, obj2);
        cResult[3] = tmp7;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      tmp6 = tmp9;
    }
    if ("sent" === tmp5.state) {
      const intl2 = tmp(1125).intl;
      let obj3 = {
        sentHook(children, arg1) {
              let sent;
              let obj = {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  const obj = projectId(dependencyMap[10]);
                  return obj.openConjureSentPatchNotes(sent.sent);
                },
                children
              };
              return _false(Text_Text.Text, obj, arg1);
            }
      };
      formatResult = intl2.format(tmp4(3863)["35VEu5"], obj3);
    } else {
      const intl = tmp(1125).intl;
      const obj4 = {
        onSend() {
              let obj3;
              let tmp7;
              const obj = useConjurePatchNotesLink;
              const result = obj.conjurePatchNotesEditorProps(projectId, closure_1);
              if (null != result) {
                const obj2 = { content: _false(tmp7, obj3), key: ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY };
                const showActionSheet = ActionSheetActionCreators.showActionSheet;
                obj3 = {};
                ActionSheetActionCreators;
                tmp7 = ConjurePublishNotesSheetDefault;
                const merged = Object.assign(result);
                showActionSheet(obj2);
              }
            }
      };
      formatResult = intl.format(tmp4(3863)["6/zJpD"], obj4);
    }
    cResult[0] = tmp5;
    cResult[1] = projectId;
    cResult[2] = formatResult;
    tmp7 = formatResult;
  }
  return tmp6;
}) : (function PatchNotesLink(projectId) {
  let closure_1;
  let items;
  projectId = projectId.projectId;
  const tmp3 = useConjurePatchNotesLinkDefault(projectId, projectId.notice);
  importDefault = tmp3;
  let tmp5Result = null;
  if (null != tmp3) {
    let formatResult;
    const tmp5 = closure_4;
    const tmp6 = closure_5;
    if ("sent" === tmp3.state) {
      const intl2 = projectId(1125).intl;
      let obj2 = {
        sentHook(children, arg1) {
              let sent;
              let obj = {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  const obj = projectId(dependencyMap[10]);
                  return obj.openConjureSentPatchNotes(sent.sent);
                },
                children
              };
              return _false(Text_Text.Text, obj, arg1);
            }
      };
      formatResult = intl2.format(tmp(3863)["35VEu5"], obj2);
    } else {
      let tmp7 = projectId;
      const intl = projectId(1125).intl;
      let obj = {
        onSend() {
              let obj3;
              let tmp7;
              const obj = useConjurePatchNotesLink;
              const result = obj.conjurePatchNotesEditorProps(projectId, closure_1);
              if (null != result) {
                const obj2 = { content: _false(tmp7, obj3), key: ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY };
                const showActionSheet = ActionSheetActionCreators.showActionSheet;
                obj3 = {};
                ActionSheetActionCreators;
                tmp7 = ConjurePublishNotesSheetDefault;
                const merged = Object.assign(result);
                showActionSheet(obj2);
              }
            }
      };
      formatResult = intl.format(tmp(3863)["6/zJpD"], obj);
    }
    let obj3 = { children: items };
    items = [" ", formatResult];
    tmp5Result = tmp5(tmp6, obj3);
  }
  return tmp5Result;
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default tmp4;
