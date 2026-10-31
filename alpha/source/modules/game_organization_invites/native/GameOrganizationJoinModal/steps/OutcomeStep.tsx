// Module ID: 13197
// Function ID: 13198
// Name: OutcomeStep
// Dependencies: [32, 19, 4885, 11363, 13186, 21, 5014, 1113, 2404, 13188, 504, 7522, 13189, 7972, 7973, 6027, 575, 5624, 13193, 5634, 2]
// Exports: OutcomeStep

// Module 13197 (OutcomeStep)
import transitionToGuild from "transitionToGuild" /* 7522 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13186 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: metroImportAll } = GameOrganizationInviteConstants);
let closure_9 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export function OutcomeStep(code) {
  let characterName;
  let closure_2;
  let cta;
  let failureReason;
  let formatToPlainStringResult1;
  let guildJoinStatus;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items3;
  let items4;
  let joinStatus;
  let obj11;
  let obj16;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let obj29;
  let obj7;
  let obj9;
  let subtitle;
  let tmp18;
  ({ joinStatus, failureReason, guildJoinStatus, characterName } = code);
  let stateFromStores;
  dependencyMap = undefined;
  let flag;
  code = code.code;
  let tmp = closure_12();
  let tmp2 = stateFromStores;
  const tmp4 = stateFromStores(13188)(code);
  let guildId;
  if (tmp4 != null) {
    guildId = tmp4.guildId;
  }
  let obj = guildId(504);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
    return tmp2;
  });
  const tmp8 = flag(react.useState(false), 2);
  dependencyMap = tmp8[1];
  let tmp9 = !stateFromStores && !tmp8[0];
  if (tmp9) {
    flag = false;
    if (joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          flag = false;
        }
      }
      flag = true;
    }
    tmp9 = flag;
  }
  flag = tmp9;
  const items1 = [tmp9];
  const effect = obj2.useEffect(() => {
    let closure_0;
    if (flag) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [guildId, stateFromStores];
  const callback = obj2.useCallback(() => {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      closure_9();
      const obj = transitionToGuild;
      obj.transitionToGuild(tmp);
    }
  }, items2);
  let displayNoun;
  const tmp2Result = tmp2(13189);
  if (tmp4 != null) {
    displayNoun = tmp4.displayNoun;
  }
  if (displayNoun == null) {
    displayNoun = null;
  }
  const tmp2ResultResult = tmp2Result({ displayNoun, lowercase: true });
  let str;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp17 = closure_9;
  if (stateFromStores) {
    tmp18 = callback;
  } else {
    tmp18 = null;
  }
  const obj3 = { text: intl.string(guildId(1113).t.cpT0Cq), onPress: tmp17 };
  intl = tmp6(1113).intl;
  let tmp19 = obj3;
  if (null != tmp18) {
    const obj4 = { text: intl2.string(tmp2(2404).H1wMHV), onPress: tmp18 };
    intl2 = tmp6(1113).intl;
    tmp19 = obj4;
  }
  if (joinStatus === constants2.JOINED) {
    const intl9 = tmp6(1113).intl;
    const obj5 = { noun: tmp2ResultResult };
    const formatToPlainStringResult = intl9.formatToPlainString(tmp2(2404)["w/spGp"], obj5);
    if (constants3.NEW_MEMBER !== guildJoinStatus) {
      let obj10;
      if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
        if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
          const obj6 = { title: formatToPlainStringResult, subtitle: intl12.formatToPlainString(tmp2(2404)["9K7Jdt"], obj7), cta: tmp19 };
          intl12 = tmp6(1113).intl;
          obj10 = obj6;
          obj7 = { noun: tmp2ResultResult, orgName: str };
        } else if (constants3.APPLICATION === guildJoinStatus) {
          const obj8 = { title: formatToPlainStringResult, subtitle: intl11.formatToPlainString(tmp2(2404).ODHuua, obj9), cta: obj3 };
          intl11 = tmp6(1113).intl;
          obj10 = obj8;
          obj9 = { noun: tmp2ResultResult, orgName: str };
        } else {
          const FAILED = tmp21.FAILED;
          obj10 = { title: formatToPlainStringResult, subtitle: intl10.formatToPlainString(tmp2(2404).Qo94hd, obj11), cta: obj3 };
          intl10 = tmp6(1113).intl;
          obj11 = { noun: tmp2ResultResult, orgName: str };
        }
      }
      obj22 = obj10;
    }
    const obj12 = { title: formatToPlainStringResult, subtitle: formatToPlainStringResult1, cta: tmp19 };
    if (null != characterName) {
      const intl14 = tmp6(1113).intl;
      const obj13 = { noun: tmp2ResultResult, orgName: str, characterName };
      formatToPlainStringResult1 = intl14.formatToPlainString(tmp2(2404).PLA9Om, obj13);
    } else {
      const intl13 = tmp6(1113).intl;
      const obj14 = { noun: tmp2ResultResult, orgName: str };
      formatToPlainStringResult1 = intl13.formatToPlainString(tmp2(2404).WF9Qgb, obj14);
    }
    obj10 = obj12;
  } else if (constants.ALREADY_JOINED === failureReason) {
    const obj15 = { title: intl8.formatToPlainString(tmp2(2404)["1PMPYk"], obj16), cta: tmp19 };
    intl8 = tmp6(1113).intl;
    obj22 = obj15;
    obj16 = { noun: tmp2ResultResult };
  } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
    const obj17 = { title: intl6.formatToPlainString(tmp2(2404).vSlR1j, obj18), subtitle: intl7.formatToPlainString(tmp2(2404).kvDHqp, obj19), cta: obj3 };
    intl6 = tmp6(1113).intl;
    obj18 = { noun: tmp2ResultResult };
    intl7 = tmp6(1113).intl;
    obj22 = obj17;
    obj19 = { noun: tmp2ResultResult };
  } else if (constants.GUILD_FULL === failureReason) {
    const obj20 = { title: intl4.formatToPlainString(tmp2(2404)["/7Gy4g"], obj21), subtitle: intl5.string(tmp2(2404)["8TGo9L"]), cta: obj3 };
    intl4 = tmp6(1113).intl;
    obj21 = { noun: tmp2ResultResult };
    intl5 = tmp6(1113).intl;
    obj22 = obj20;
  } else {
    const OTHER = tmp26.OTHER;
    obj22 = { title: intl3.string(tmp2(2404).sXbaMb), cta: obj3 };
    intl3 = tmp6(1113).intl;
  }
  ({ subtitle, cta } = obj22);
  const title = obj22.title;
  const ModalScreen = tmp6(7972).ModalScreen;
  const ModalContent = tmp6(7973).ModalContent;
  const obj23 = { spacing: tmp2(575).space.PX_8, children: items3 };
  const Stack = tmp6(6027).Stack;
  items3 = [, ];
  const obj24 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: title };
  items3[0] = closure_10(guildId(5624).Text, obj24);
  let tmp24Result = null != subtitle;
  if (tmp24Result) {
    const obj25 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp24Result = tmp24(tmp6(5624).Text, obj25);
  }
  const obj26 = { children: items4 };
  items3[1] = tmp24Result;
  items4 = [, ];
  const obj27 = { children: closure_11(Stack, obj23) };
  items4[0] = closure_10(ModalContent, obj27);
  const obj28 = { children: closure_10(guildId(5634).Button, obj29) };
  const ModalFooter = tmp6(13193).ModalFooter;
  obj29 = { text: cta.text, size: "lg", onPress: cta.onPress, disabled: tmp9 };
  items4[1] = closure_10(ModalFooter, obj28);
  return closure_11(ModalScreen, obj26);
}
