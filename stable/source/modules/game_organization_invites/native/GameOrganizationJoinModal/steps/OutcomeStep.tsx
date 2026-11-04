// Module ID: 12763
// Function ID: 12764
// Name: OutcomeStep
// Dependencies: [19, 11061, 12755, 21, 5003, 1128, 2406, 558, 576, 12757, 12758, 5266, 7933, 6009, 587, 12760, 5276, 7932, 2]

// Module 12763 (OutcomeStep)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl14 from "intl" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import Text_Text from "Text/Text" /* 5266 */;
import components_Button_Button from "components/Button/Button" /* 5276 */;
import Stack_Stack from "Stack/Stack" /* 6009 */;
import ModalScreen2 from "ModalScreen" /* 7932 */;
import ModalContent2 from "ModalContent" /* 7933 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12755 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12757 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12758 */;
import react from "react" /* 19 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function getOutcomeContent(arg0, arg1, arg2, noun, arg4) {
  let accountName;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let noun2;
  let obj11;
  let obj15;
  let obj18;
  let obj5;
  let obj7;
  let obj9;
  let onClose;
  let onGoToServer;
  let orgName;
  noun = noun.noun;
  const obj = { text: intl.string(_modDef2406.H1wMHV), onPress: onGoToServer };
  ({ onClose, onGoToServer } = arg4);
  intl = intl14.intl;
  const obj2 = { text: intl2.string(intl14.t.cpT0Cq), onPress: onClose };
  intl2 = intl14.intl;
  if (arg0 === constants2.JOINED) {
    ({ noun: noun2, orgName, accountName } = noun);
    const intl9 = tmp(1128).intl;
    const obj3 = { noun: noun2 };
    const formatToPlainStringResult = intl9.formatToPlainString(_modDef2406["w/spGp"], obj3);
    if (hasOwnProperty.NEW_MEMBER !== arg2) {
      let obj8;
      if (hasOwnProperty.ALREADY_MEMBER !== arg2) {
        if (hasOwnProperty.PENDING_VERIFICATION === arg2) {
          const obj4 = { title: formatToPlainStringResult, subtitle: intl12.formatToPlainString(_modDef2406["9K7Jdt"], obj5), cta: obj };
          intl12 = tmp(1128).intl;
          obj8 = obj4;
          obj5 = { noun: noun2, orgName };
        } else if (hasOwnProperty.APPLICATION === arg2) {
          const obj6 = { title: formatToPlainStringResult, subtitle: intl11.formatToPlainString(_modDef2406.ODHuua, obj7), cta: obj2 };
          intl11 = tmp(1128).intl;
          obj8 = obj6;
          obj7 = { noun: noun2, orgName };
        } else {
          const FAILED = tmp6.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: intl10.formatToPlainString(_modDef2406.Qo94hd, obj9), cta: obj2 };
          intl10 = tmp(1128).intl;
          obj9 = { noun: noun2, orgName };
        }
      }
      return obj8;
    }
    const obj10 = { title: formatToPlainStringResult, subtitle: intl13.formatToPlainString(_modDef2406.WF9Qgb, obj11), cta: obj };
    intl13 = tmp(1128).intl;
    obj8 = obj10;
    obj11 = { noun: noun2, orgName, accountName };
  } else if (constants.ALREADY_JOINED === arg1) {
    const obj12 = { title: intl8.formatToPlainString(_modDef2406["1PMPYk"], obj13), cta: obj };
    intl8 = tmp(1128).intl;
    return obj12;
  } else if (constants.IN_ANOTHER_ORGANIZATION === arg1) {
    const obj14 = { title: intl6.formatToPlainString(_modDef2406.vSlR1j, obj15), subtitle: intl7.formatToPlainString(_modDef2406.kvDHqp, obj16), cta: obj2 };
    intl6 = tmp(1128).intl;
    obj15 = { noun };
    intl7 = tmp(1128).intl;
    return obj14;
  } else if (constants.GUILD_FULL === arg1) {
    const obj17 = { title: intl4.formatToPlainString(_modDef2406["/7Gy4g"], obj18), subtitle: intl5.string(_modDef2406["8TGo9L"]), cta: obj2 };
    intl4 = tmp(1128).intl;
    obj18 = { noun };
    intl5 = tmp(1128).intl;
    return obj17;
  } else {
    const OTHER = tmp8.OTHER;
    const obj19 = { title: intl3.string(_modDef2406.sXbaMb), cta: obj2 };
    intl3 = tmp(1128).intl;
    return obj19;
  }
}
({ GameOrganizationInviteAcceptFailureReason: c3, GameOrganizationInviteAcceptStatus: closure_4, GameOrganizationLinkedGuildJoinStatus: hasOwnProperty } = GameOrganizationInviteConstants);
let closure_6 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutcomeStep(code) {
  let Stack;
  let cta;
  let failureReason;
  let guildJoinStatus;
  let items;
  let items1;
  let joinStatus;
  let obj4;
  let obj6;
  let str;
  let subtitle;
  let title;
  const obj = react2;
  const cResult = obj.c(21);
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  code = code.code;
  const tmp4 = closure_9();
  const tmp6 = useResolvedGameOrganizationInviteDefault(code);
  if (cResult[0] === failureReason) {
    if (cResult[1] === guildJoinStatus) {
      let displayNoun;
      const tmp7 = cResult[2];
      if (tmp6 != null) {
        displayNoun = tmp6.displayNoun;
      }
      if (tmp7 === displayNoun) {
        let organization;
        const tmp10 = cResult[3];
        if (tmp6 != null) {
          organization = tmp6.organization;
        }
        if (tmp10 === organization) {
          let tmp12;
          if (cResult[4] === joinStatus) {
            tmp12 = cResult[5];
          }
          ({ title, subtitle, cta } = tmp12);
          if (cResult[6] === tmp4.text) {
            let tmp19;
            if (cResult[7] === title) {
              tmp19 = cResult[8];
            }
            if (cResult[9] === tmp4.text) {
              let tmp22;
              if (cResult[10] === subtitle) {
                tmp22 = cResult[11];
              }
              if (cResult[12] === tmp19) {
                let tmp26;
                if (cResult[13] === tmp22) {
                  tmp26 = cResult[14];
                }
                if (cResult[15] === cta.onPress) {
                  let tmp30;
                  if (cResult[16] === cta.text) {
                    tmp30 = cResult[17];
                  }
                  if (cResult[18] === tmp26) {
                    let tmp33;
                    if (cResult[19] === tmp30) {
                      tmp33 = cResult[20];
                    }
                    return tmp33;
                  }
                  const obj2 = { children: items };
                  items = [tmp26, tmp30];
                  const tmp35 = metroImportAll(ModalScreen2.ModalScreen, obj2);
                  cResult[18] = tmp26;
                  cResult[19] = tmp30;
                  cResult[20] = tmp35;
                  tmp33 = tmp35;
                }
                const obj3 = { children: metroImportDefault(components_Button_Button.Button, obj4) };
                const ModalFooter = tmp(12760).ModalFooter;
                obj4 = { text: null, size: "lg", onPress: null };
                ({ text: obj9.text, onPress: obj9.onPress } = cta);
                const tmp32 = metroImportDefault(ModalFooter, obj3);
                cResult[15] = cta.onPress;
                cResult[16] = cta.text;
                cResult[17] = tmp32;
                tmp30 = tmp32;
              }
              const obj5 = { children: metroImportAll(Stack, obj6) };
              const ModalContent = tmp(7933).ModalContent;
              obj6 = { spacing: nativeDefault.space.PX_8, children: items1 };
              Stack = tmp(6009).Stack;
              items1 = [tmp19, tmp22];
              const tmp29 = metroImportDefault(ModalContent, obj5);
              cResult[12] = tmp19;
              cResult[13] = tmp22;
              cResult[14] = tmp29;
              tmp26 = tmp29;
            }
            let tmp24 = null != subtitle;
            if (tmp24) {
              const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp4.text, children: subtitle };
              tmp24 = metroImportDefault(tmp(5266).Text, obj7);
            }
            cResult[9] = tmp4.text;
            cResult[10] = subtitle;
            cResult[11] = tmp24;
            tmp22 = tmp24;
          }
          const obj8 = { variant: "heading-xl/semibold", style: tmp4.text, accessibilityRole: "header", children: title };
          const tmp21 = metroImportDefault(Text_Text.Text, obj8);
          cResult[6] = tmp4.text;
          cResult[7] = title;
          cResult[8] = tmp21;
          tmp19 = tmp21;
        }
      }
    }
  }
  let displayNoun1;
  const tmp13 = getOutcomeContent;
  const tmp5Result = getGameOrganizationDisplayNounDefault;
  if (tmp6 != null) {
    displayNoun1 = tmp6.displayNoun;
  }
  if (displayNoun1 == null) {
    displayNoun1 = null;
  }
  const obj10 = { noun: tmp5Result({ displayNoun: displayNoun1, lowercase: true }), orgName: str, accountName: "[Account/Username]" };
  str = undefined;
  if (tmp6 != null) {
    str = tmp6.organization.name;
  }
  if (str == null) {
    str = "";
  }
  const obj19 = { onClose: onGoToServer, onGoToServer };
  const tmp13Result = tmp13(joinStatus, failureReason, guildJoinStatus, obj10, obj19);
  cResult[0] = failureReason;
  cResult[1] = guildJoinStatus;
  let displayNoun2;
  if (tmp6 != null) {
    displayNoun2 = tmp6.displayNoun;
  }
  cResult[2] = displayNoun2;
  let organization1;
  if (tmp6 != null) {
    organization1 = tmp6.organization;
  }
  cResult[3] = organization1;
  cResult[4] = joinStatus;
  cResult[5] = tmp13Result;
  tmp12 = tmp13Result;
}) : (function OutcomeStep(code) {
  let cta;
  let failureReason;
  let guildJoinStatus;
  let items;
  let items1;
  let joinStatus;
  let obj9;
  let str;
  let subtitle;
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  code = code.code;
  const tmp = closure_9();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  let displayNoun;
  const tmp5 = getOutcomeContent;
  const tmp6 = getGameOrganizationDisplayNounDefault;
  if (tmp4 != null) {
    displayNoun = tmp4.displayNoun;
  }
  if (displayNoun == null) {
    displayNoun = null;
  }
  const obj = { noun: tmp6({ displayNoun, lowercase: true }), orgName: str, accountName: "[Account/Username]" };
  str = undefined;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { onClose: onGoToServer, onGoToServer };
  const tmp5Result = tmp5(joinStatus, failureReason, guildJoinStatus, obj, obj2);
  ({ subtitle, cta } = tmp5Result);
  const title = tmp5Result.title;
  const ModalScreen = ModalScreen2.ModalScreen;
  const ModalContent = ModalContent2.ModalContent;
  const obj3 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: title };
  items[0] = metroImportDefault(Text_Text.Text, obj4);
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp11Result = tmp11(tmp10(5266).Text, obj5);
  }
  const obj6 = { children: items1 };
  items[1] = tmp11Result;
  items1 = [, ];
  const obj7 = { children: metroImportAll(Stack, obj3) };
  items1[0] = metroImportDefault(ModalContent, obj7);
  const obj8 = { children: metroImportDefault(components_Button_Button.Button, obj9) };
  const ModalFooter = tmp10(12760).ModalFooter;
  obj9 = { text: cta.text, size: "lg", onPress: cta.onPress };
  items1[1] = metroImportDefault(ModalFooter, obj8);
  return metroImportAll(ModalScreen, obj6);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export const OutcomeStep = tmp5;
