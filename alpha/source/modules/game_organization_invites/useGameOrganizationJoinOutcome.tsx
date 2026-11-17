// Module ID: 12907
// Function ID: 12908
// Name: useGameOrganizationJoinOutcome
// Dependencies: [32, 19, 5181, 12573, 1113, 2565, 12896, 504, 12734, 7239, 2]
// Exports: default

// Module 12907 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 7239 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5181 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: metroImportAll } = GameOrganizationInviteConstants);
const GameOrganizationJoinOutcomeCtaType = { GO_TO_SERVER: "GO_TO_SERVER", CLOSE: "CLOSE" };
const obj2 = { SUCCESS: "SUCCESS", PENDING: "PENDING", ERROR: "ERROR" };
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationJoinOutcome.tsx");

export default function useGameOrganizationJoinOutcome(arg0, guildJoinStatus, action) {
  let closure_3;
  let failureReason;
  let first;
  let flag;
  let formatToPlainStringResult;
  let guildId;
  let intl;
  let intl10;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj15;
  let obj16;
  let obj18;
  let obj19;
  let obj23;
  let obj25;
  let obj26;
  let obj28;
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
  let guildJoinStatus1;
  if (guildJoinStatus != null) {
    guildJoinStatus1 = guildJoinStatus.guildJoinStatus;
  }
  if (guildJoinStatus1 == null) {
    guildJoinStatus1 = null;
  }
  let ALREADY_MEMBER = guildJoinStatus1;
  if (stateFromStores) {
    if (null == guildJoinStatus1) {
      ALREADY_MEMBER = constants3.ALREADY_MEMBER;
    } else {
      ALREADY_MEMBER = guildJoinStatus1;
    }
  }
  let tmp12 = null != guildJoinStatus && !stateFromStores && !first;
  if (tmp12) {
    flag = false;
    if (guildJoinStatus.joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== ALREADY_MEMBER) {
        if (constants3.ALREADY_MEMBER !== ALREADY_MEMBER) {
          flag = false;
        }
      }
      flag = true;
    }
    tmp12 = flag;
  }
  flag = tmp12;
  const items1 = [tmp12];
  const effect = obj2.useEffect(() => {
    let closure_0;
    if (flag) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_3(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let tmp16 = null;
  if (null != guildJoinStatus) {
    let tmp24;
    let obj29;
    const obj3 = { guildJoinStatus: ALREADY_MEMBER };
    const merged = Object.assign(guildJoinStatus);
    let displayNoun;
    const tmpResult = tmp(tmp2[8]);
    if (tmp3 != null) {
      displayNoun = tmp3.displayNoun;
    }
    if (displayNoun == null) {
      displayNoun = null;
    }
    const obj4 = { displayNoun, lowercase: true };
    const tmpResultResult = tmpResult(obj4);
    let str;
    if (tmp3 != null) {
      str = tmp3.organization.name;
    }
    if (str == null) {
      str = "";
    }
    let str2;
    if (tmp3 != null) {
      str2 = tmp3.linkedGuild.name;
    }
    if (str2 == null) {
      str2 = "";
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
      tmp24 = function handleGoToServer() {
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
      tmp24 = null;
    }
    ({ failureReason, guildJoinStatus } = obj3);
    if (obj3.joinStatus === constants2.JOINED) {
      let obj5 = { type: obj.CLOSE, text: intl8.string(tmp5(tmp2[4]).t.i4jeWR), action };
      intl8 = tmp5(tmp2[4]).intl;
      let tmp29 = obj5;
      const tmp28 = obj;
      if (null != tmp24) {
        const obj6 = { type: tmp28.GO_TO_SERVER, text: intl9.string(tmp(tmp2[5]).H1wMHV), action: tmp24 };
        intl9 = tmp5(tmp2[4]).intl;
        tmp29 = obj6;
      }
      const obj7 = { key: "organization", status: flag.SUCCESS, title: intl10.formatToPlainString(tmp(tmp2[5]).qJafqt, obj8), subtitle: formatToPlainStringResult };
      intl10 = tmp5(tmp2[4]).intl;
      formatToPlainStringResult = null;
      obj8 = { orgName: str, noun: tmpResultResult };
      if (null != name) {
        const intl11 = tmp5(tmp2[4]).intl;
        const obj9 = { characterName: name };
        formatToPlainStringResult = intl11.formatToPlainString(tmp(tmp2[5]).mvLVyz, obj9);
      }
      const obj10 = { title: intl12.string(tmp(tmp2[5]).i3axsB), rows: null, cta: null };
      intl12 = tmp5(tmp2[4]).intl;
      const items2 = [obj7, ];
      const intl13 = tmp5(tmp2[4]).intl;
      const obj11 = { guildName: str2 };
      const formatToPlainStringResult1 = intl13.formatToPlainString(tmp(tmp2[5]).YoJwLe, obj11);
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        let obj14;
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
            const obj12 = { key: "server", status: flag.PENDING, title: formatToPlainStringResult1, subtitle: intl15.string(tmp(tmp2[5]).MgcCQT) };
            intl15 = tmp5(tmp2[4]).intl;
            obj14 = obj12;
          } else if (constants3.APPLICATION === guildJoinStatus) {
            const obj13 = { key: "server", status: flag.PENDING, title: formatToPlainStringResult1, subtitle: intl14.string(tmp(tmp2[5])["mZ/VKS"]) };
            intl14 = tmp5(tmp2[4]).intl;
            obj14 = obj13;
          } else {
            const FAILED = tmp33.FAILED;
            obj14 = { key: "server", status: flag.ERROR, title: intl19.formatToPlainString(tmp(tmp2[5])["4XMetY"], obj15), subtitle: intl20.formatToPlainString(tmp(tmp2[5]).FQoZBu, obj16) };
            intl19 = tmp5(tmp2[4]).intl;
            obj15 = { guildName: str2 };
            intl20 = tmp5(tmp2[4]).intl;
            obj16 = { guildName: str2 };
          }
        }
        items2[1] = obj14;
        obj10.rows = items2;
        let flag2 = false;
        if (constants2.JOINED === constants2.JOINED) {
          if (constants3.NEW_MEMBER !== guildJoinStatus) {
            if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
              flag2 = false;
            }
          }
          flag2 = true;
        }
        if (flag2) {
          obj5 = tmp29;
        }
        obj10.cta = obj5;
        obj29 = obj10;
      }
      const obj17 = { key: "server", status: flag.SUCCESS, title: intl16.formatToPlainString(tmp(tmp2[5])["Y2DU/l"], obj18), subtitle: intl17.formatToPlainString(tmp(tmp2[5])["316Vsz"], obj19) };
      intl16 = tmp5(tmp2[4]).intl;
      obj18 = { guildName: str2 };
      intl17 = tmp5(tmp2[4]).intl;
      obj14 = obj17;
      obj19 = { noun: tmpResultResult };
    } else {
      const obj20 = { type: obj.CLOSE, text: intl18.string(require("intl").t.cpT0Cq), action };
      intl18 = tmp5(tmp2[4]).intl;
      let tmp26 = obj20;
      const tmp37 = obj;
      if (null != tmp24) {
        const obj21 = { type: tmp37.GO_TO_SERVER, text: intl.string(tmp(tmp2[5]).H1wMHV), action: tmp24 };
        intl = tmp5(tmp2[4]).intl;
        tmp26 = obj21;
      }
      if (constants.ALREADY_JOINED === failureReason) {
        const obj22 = { title: intl7.formatToPlainString(tmp(tmp2[5])["1PMPYk"], obj23), cta: tmp26 };
        intl7 = tmp5(tmp2[4]).intl;
        obj29 = obj22;
        obj23 = { noun: tmpResultResult };
      } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
        const obj24 = { title: intl5.formatToPlainString(tmp(tmp2[5]).vSlR1j, obj25), subtitle: intl6.formatToPlainString(tmp(tmp2[5]).kvDHqp, obj26), cta: obj20 };
        intl5 = tmp5(tmp2[4]).intl;
        obj25 = { noun: tmpResultResult };
        intl6 = tmp5(tmp2[4]).intl;
        obj29 = obj24;
        obj26 = { noun: tmpResultResult };
      } else if (constants.GUILD_FULL === failureReason) {
        const obj27 = { title: intl3.formatToPlainString(tmp(tmp2[5])["/7Gy4g"], obj28), subtitle: intl4.string(tmp(tmp2[5])["8TGo9L"]), cta: obj20 };
        intl3 = tmp5(tmp2[4]).intl;
        obj28 = { noun: tmpResultResult };
        intl4 = tmp5(tmp2[4]).intl;
        obj29 = obj27;
      } else {
        const OTHER = tmp27.OTHER;
        obj29 = { title: intl2.string(tmp(tmp2[5]).sXbaMb), cta: obj20 };
        intl2 = tmp5(tmp2[4]).intl;
      }
    }
    const obj30 = { isWaitingForGuild: tmp12 };
    const merged1 = Object.assign(obj29);
    tmp16 = obj30;
  }
  return tmp16;
};
export { GameOrganizationJoinOutcomeCtaType };
export const GameOrganizationJoinOutcomeRowStatus = obj2;
