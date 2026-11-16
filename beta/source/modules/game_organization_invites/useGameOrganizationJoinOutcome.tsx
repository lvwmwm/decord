// Module ID: 14083
// Function ID: 14084
// Name: useGameOrganizationJoinOutcome
// Dependencies: [32, 19, 5177, 12369, 1113, 2565, 14072, 504, 12539, 7231, 2]
// Exports: default

// Module 14083 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 7231 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: metroImportAll } = GameOrganizationInviteConstants);
const GameOrganizationJoinOutcomeCtaType = { GO_TO_SERVER: "GO_TO_SERVER", CLOSE: "CLOSE" };
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationJoinOutcome.tsx");

export default function useGameOrganizationJoinOutcome(arg0, guildJoinStatus, action) {
  let closure_3;
  let failureReason;
  let first;
  let flag;
  let formatToPlainStringResult1;
  let guildId;
  let guildJoinStatus2;
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
  let obj10;
  let obj12;
  let obj17;
  let obj19;
  let obj20;
  let obj22;
  let obj8;
  let stateFromStores;
  _require = action;
  let tmp = guildId;
  let tmp2 = stateFromStores;
  const tmp3 = guildId(stateFromStores[6])(arg0);
  guildId = undefined;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
    return tmp2;
  });
  [first, _slicedToArray] = flag.useState(false);
  let tmp9 = null != guildJoinStatus;
  const obj2 = flag;
  if (tmp9) {
    tmp9 = !stateFromStores;
  }
  if (tmp9) {
    tmp9 = !first;
  }
  if (tmp9) {
    guildJoinStatus = guildJoinStatus.guildJoinStatus;
    flag = false;
    if (guildJoinStatus.joinStatus === constants2.JOINED) {
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
      const timeout = setTimeout(() => closure_1_3(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let tmp13 = null;
  if (null != guildJoinStatus) {
    let tmp18;
    let obj23;
    let displayNoun;
    const tmpResult = tmp(tmp2[8]);
    if (tmp3 != null) {
      displayNoun = tmp3.displayNoun;
    }
    if (displayNoun == null) {
      displayNoun = null;
    }
    const obj3 = { displayNoun, lowercase: true };
    const tmpResultResult = tmpResult(obj3);
    let str;
    if (tmp3 != null) {
      str = tmp3.organization.name;
    }
    if (str == null) {
      str = "";
    }
    const character = guildJoinStatus.character;
    let name;
    if (character != null) {
      name = character.name;
    }
    if (name == null) {
      name = null;
    }
    if (stateFromStores) {
      tmp18 = function handleGoToServer() {
        let tmp2 = null != guildId;
        const tmp = guildId;
        if (tmp2) {
          tmp2 = stateFromStores;
        }
        if (tmp2) {
          action();
          const obj = transitionToGuild;
          obj.transitionToGuild(tmp);
        }
      };
    } else {
      tmp18 = null;
    }
    ({ failureReason, guildJoinStatus: guildJoinStatus2 } = guildJoinStatus);
    const obj4 = { type: obj.CLOSE, text: intl.string(require("intl").t.cpT0Cq), action };
    const joinStatus = guildJoinStatus.joinStatus;
    intl = tmp5(tmp2[4]).intl;
    let tmp20 = obj4;
    const tmp19 = obj;
    if (null != tmp18) {
      const obj5 = { type: tmp19.GO_TO_SERVER, text: intl2.string(tmp(tmp2[5]).H1wMHV), action: tmp18 };
      intl2 = tmp5(tmp2[4]).intl;
      tmp20 = obj5;
    }
    if (joinStatus === constants2.JOINED) {
      const intl9 = tmp5(tmp2[4]).intl;
      const obj6 = { noun: tmpResultResult };
      const formatToPlainStringResult = intl9.formatToPlainString(tmp(tmp2[5])["w/spGp"], obj6);
      if (constants3.NEW_MEMBER !== guildJoinStatus2) {
        let obj11;
        if (constants3.ALREADY_MEMBER !== guildJoinStatus2) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus2) {
            const obj7 = { title: formatToPlainStringResult, subtitle: intl12.formatToPlainString(tmp(tmp2[5])["9K7Jdt"], obj8), cta: tmp20 };
            intl12 = tmp5(tmp2[4]).intl;
            obj11 = obj7;
            obj8 = { noun: tmpResultResult, orgName: str };
          } else if (constants3.APPLICATION === guildJoinStatus2) {
            const obj9 = { title: formatToPlainStringResult, subtitle: intl11.formatToPlainString(tmp(tmp2[5]).ODHuua, obj10), cta: obj4 };
            intl11 = tmp5(tmp2[4]).intl;
            obj11 = obj9;
            obj10 = { noun: tmpResultResult, orgName: str };
          } else {
            const FAILED = tmp23.FAILED;
            obj11 = { title: formatToPlainStringResult, subtitle: intl10.formatToPlainString(tmp(tmp2[5]).Qo94hd, obj12), cta: obj4 };
            intl10 = tmp5(tmp2[4]).intl;
            obj12 = { noun: tmpResultResult, orgName: str };
          }
        }
        obj23 = obj11;
      }
      const obj13 = { title: formatToPlainStringResult, subtitle: formatToPlainStringResult1, cta: tmp20 };
      if (null != name) {
        const intl14 = tmp5(tmp2[4]).intl;
        const obj14 = { noun: tmpResultResult, orgName: str, characterName: name };
        formatToPlainStringResult1 = intl14.formatToPlainString(tmp(tmp2[5]).PLA9Om, obj14);
      } else {
        const intl13 = tmp5(tmp2[4]).intl;
        const obj15 = { noun: tmpResultResult, orgName: str };
        formatToPlainStringResult1 = intl13.formatToPlainString(tmp(tmp2[5]).WF9Qgb, obj15);
      }
      obj11 = obj13;
    } else if (constants.ALREADY_JOINED === failureReason) {
      const obj16 = { title: intl8.formatToPlainString(tmp(tmp2[5])["1PMPYk"], obj17), cta: tmp20 };
      intl8 = tmp5(tmp2[4]).intl;
      obj23 = obj16;
      obj17 = { noun: tmpResultResult };
    } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
      const obj18 = { title: intl6.formatToPlainString(tmp(tmp2[5]).vSlR1j, obj19), subtitle: intl7.formatToPlainString(tmp(tmp2[5]).kvDHqp, obj20), cta: obj4 };
      intl6 = tmp5(tmp2[4]).intl;
      obj19 = { noun: tmpResultResult };
      intl7 = tmp5(tmp2[4]).intl;
      obj23 = obj18;
      obj20 = { noun: tmpResultResult };
    } else if (constants.GUILD_FULL === failureReason) {
      const obj21 = { title: intl4.formatToPlainString(tmp(tmp2[5])["/7Gy4g"], obj22), subtitle: intl5.string(tmp(tmp2[5])["8TGo9L"]), cta: obj4 };
      intl4 = tmp5(tmp2[4]).intl;
      obj22 = { noun: tmpResultResult };
      intl5 = tmp5(tmp2[4]).intl;
      obj23 = obj21;
    } else {
      const OTHER = tmp28.OTHER;
      obj23 = { title: intl3.string(tmp(tmp2[5]).sXbaMb), cta: obj4 };
      intl3 = tmp5(tmp2[4]).intl;
    }
    const obj24 = { isWaitingForGuild: tmp9 };
    const merged = Object.assign(obj23);
    tmp13 = obj24;
  }
  return tmp13;
};
export { GameOrganizationJoinOutcomeCtaType };
