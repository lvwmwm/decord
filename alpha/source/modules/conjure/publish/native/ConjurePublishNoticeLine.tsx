// Module ID: 12351
// Function ID: 12352
// Name: ConjurePublishNoticeLine
// Dependencies: [19, 21, 558, 576, 12345, 12352, 1128, 12278, 5232, 12353, 3830, 5208, 12354, 2]

// Module 12351 (ConjurePublishNoticeLine)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5208 */;
import Text_Text from "Text/Text" /* 5232 */;
import conjurePublishCard from "conjurePublishCard" /* 12278 */;
import useConjurePublishedAppNameDefault from "useConjurePublishedAppName" /* 12345 */;
import useConjurePublishedServerNameDefault from "useConjurePublishedServerName" /* 12352 */;
import useConjurePatchNotesLink from "useConjurePatchNotesLink" /* 12353 */;
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet" /* 12354 */;
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
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishNoticeLine(arg0) {
  let items;
  let notice;
  let projectId;
  let str;
  const obj = react2;
  const cResult = obj.c(10);
  ({ projectId, notice } = arg0);
  const tmp4 = useConjurePublishedAppNameDefault(projectId);
  const tmp5 = useConjurePublishedServerNameDefault(projectId);
  if (cResult[0] === tmp4) {
    if (cResult[1] === notice) {
      let tmp6;
      if (cResult[2] === tmp5) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === notice) {
        let tmp9;
        if (cResult[5] === projectId) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp14;
          if (cResult[8] === tmp9) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
        const obj2 = { variant: "text-md/normal", color: "text-default", children: items };
        items = [tmp6, tmp9];
        const tmp16 = React3(Text_Text.Text, obj2);
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      let tmp11 = null;
      if (notice.update) {
        tmp11 = null;
        if (null != notice.published_revision) {
          const obj3 = { projectId, notice };
          tmp11 = _false(closure_6, obj3);
        }
      }
      cResult[4] = notice;
      cResult[5] = projectId;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  const intl = tmp(1128).intl;
  const format = intl.format;
  const obj4 = { name: tmp4, server: str };
  str = tmp5;
  const tmpResult = conjurePublishCard;
  const publishNoticeMessageResult = tmpResult.publishNoticeMessage(notice, tmp5);
  if (tmp5 == null) {
    str = "";
  }
  const formatResult = format(publishNoticeMessageResult, obj4);
  cResult[0] = tmp4;
  cResult[1] = notice;
  cResult[2] = tmp5;
  cResult[3] = formatResult;
  tmp6 = formatResult;
}) : (function ConjurePublishNoticeLine(arg0) {
  let notice;
  let projectId;
  ({ projectId, notice } = arg0);
  const tmp = useConjurePublishedAppNameDefault(projectId);
  let str = useConjurePublishedServerNameDefault(projectId);
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  const format = intl.format;
  const obj2 = { name: tmp, server: str };
  const obj = conjurePublishCard;
  const publishNoticeMessageResult = obj.publishNoticeMessage(notice, str);
  const tmp2 = React3;
  if (str == null) {
    str = "";
  }
  const children = [format(publishNoticeMessageResult, obj2), ];
  let tmp4 = null;
  if (notice.update) {
    tmp4 = null;
    if (null != notice.published_revision) {
      const obj3 = { projectId, notice };
      tmp4 = _false(closure_6, obj3);
    }
  }
  children[1] = tmp4;
  return tmp2(Text, { variant: "text-md/normal", color: "text-default", children });
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
      const intl2 = tmp(1128).intl;
      let obj3 = {
        sentHook(children, arg1) {
              let sent;
              let obj = {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  const obj = projectId(dependencyMap[9]);
                  return obj.openConjureSentPatchNotes(sent.sent);
                },
                children
              };
              return _false(Text_Text.Text, obj, arg1);
            }
      };
      formatResult = intl2.format(tmp4(3830)["35VEu5"], obj3);
    } else {
      const intl = tmp(1128).intl;
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
      formatResult = intl.format(tmp4(3830)["6/zJpD"], obj4);
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
      const intl2 = projectId(1128).intl;
      let obj2 = {
        sentHook(children, arg1) {
              let sent;
              let obj = {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  const obj = projectId(dependencyMap[9]);
                  return obj.openConjureSentPatchNotes(sent.sent);
                },
                children
              };
              return _false(Text_Text.Text, obj, arg1);
            }
      };
      formatResult = intl2.format(tmp(3830)["35VEu5"], obj2);
    } else {
      let tmp7 = projectId;
      const intl = projectId(1128).intl;
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
      formatResult = intl.format(tmp(3830)["6/zJpD"], obj);
    }
    let obj3 = { children: items };
    items = [" ", formatResult];
    tmp5Result = tmp5(tmp6, obj3);
  }
  return tmp5Result;
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default tmp4;
