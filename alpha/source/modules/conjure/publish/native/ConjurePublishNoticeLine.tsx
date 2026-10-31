// Module ID: 12656
// Function ID: 12657
// Name: ConjurePublishNoticeLine
// Dependencies: [19, 21, 12650, 12657, 12658, 5624, 1113, 12576, 7522, 12659, 3868, 5258, 12660, 2]
// Exports: default

// Module 12656 (ConjurePublishNoticeLine)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import transitionToGuild from "transitionToGuild" /* 7522 */;
import useConjurePublishedAppNameDefault from "useConjurePublishedAppName" /* 12650 */;
import useConjurePublishedServerNameDefault from "useConjurePublishedServerName" /* 12657 */;
import useConjureAutomodSettingsLinkDefault from "useConjureAutomodSettingsLink" /* 12658 */;
import useConjurePatchNotesLink from "useConjurePatchNotesLink" /* 12659 */;
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet" /* 12660 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useConjurePatchNotesLinkDefault = useConjurePatchNotesLink;
const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;
let _require, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
function PatchNotesLink(projectId) {
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
      const intl2 = projectId(1113).intl;
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
      formatResult = intl2.format(tmp(3868)["35VEu5"], obj2);
    } else {
      let tmp7 = projectId;
      const intl = projectId(1113).intl;
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
      formatResult = intl.format(tmp(3868)["6/zJpD"], obj);
    }
    let obj3 = { children: items };
    items = [" ", formatResult];
    tmp5Result = tmp5(tmp6, obj3);
  }
  return tmp5Result;
}
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default function ConjurePublishNoticeLine(arg0) {
  let closure_0;
  let notice;
  let projectId;
  let str;
  let tmp10;
  ({ projectId, notice } = arg0);
  const tmp = dependencyMap;
  const tmp2 = useConjurePublishedAppNameDefault(projectId);
  const tmp3 = useConjurePublishedServerNameDefault(projectId);
  _require = tmp3;
  const tmp4 = useConjureAutomodSettingsLinkDefault(projectId);
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  const format = intl.format;
  let name;
  const publishNoticeMessage = require("conjurePublishCard").publishNoticeMessage;
  require("conjurePublishCard");
  const tmp5 = closure_4;
  const tmp6 = _require;
  if (tmp3 != null) {
    name = tmp3.name;
  }
  if (name == null) {
    name = null;
  }
  let obj = {
    name: tmp2,
    server: str,
    onOpenServer() {
      if (null != closure_0) {
        const obj = transitionToGuild;
        obj.transitionToGuild(tmp.guildId);
      }
    }
  };
  str = undefined;
  const publishNoticeMessageResult = publishNoticeMessage(notice, name, tmp4.automod);
  if (tmp3 != null) {
    str = tmp3.name;
  }
  if (str == null) {
    str = "";
  }
  const children = [format(publishNoticeMessageResult, obj), ];
  if (null != tmp4.guildId) {
    const obj2 = { guildId: tmp4.guildId, update: notice.update };
    tmp10 = closure_3(tmp6(12658).ConjureAutomodSettingsLink, obj2);
  } else {
    tmp10 = null;
    if (!tmp4.automod) {
      tmp10 = null;
      if (notice.update) {
        tmp10 = null;
        if (null != notice.published_revision) {
          const obj3 = { projectId, notice };
          tmp10 = closure_3(PatchNotesLink, obj3);
        }
      }
    }
  }
  children[1] = tmp10;
  return tmp5(Text, { variant: "text-md/normal", color: "text-default", children });
};
