// Module ID: 12246
// Function ID: 12247
// Name: useGameOrganizationJoinOutcome
// Dependencies: [32, 19, 4784, 11896, 1112, 2639, 12235, 504, 6835, 2]
// Exports: default

// Module 12246 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 6835 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
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
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj22;
  let obj24;
  let obj25;
  let obj27;
  let obj7;
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
    let tmp21;
    let obj28;
    const obj3 = { guildJoinStatus: ALREADY_MEMBER };
    const merged = Object.assign(guildJoinStatus);
    let str;
    if (tmp3 != null) {
      str = tmp3.displayNoun;
    }
    if (str == null) {
      str = "other";
    }
    let str2;
    if (tmp3 != null) {
      str2 = tmp3.organization.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    let str3;
    if (tmp3 != null) {
      str3 = tmp3.linkedGuild.name;
    }
    if (str3 == null) {
      str3 = "";
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
      tmp21 = function handleGoToServer() {
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
      tmp21 = null;
    }
    ({ failureReason, guildJoinStatus } = obj3);
    if (obj3.joinStatus === constants2.JOINED) {
      let obj4 = { type: obj.CLOSE, text: intl8.string(tmp5(tmp2[4]).t.i4jeWR), action };
      intl8 = tmp5(tmp2[4]).intl;
      let tmp26 = obj4;
      const tmp25 = obj;
      if (null != tmp21) {
        const obj5 = { type: tmp25.GO_TO_SERVER, text: intl9.string(tmp(tmp2[5]).H1wMHV), action: tmp21 };
        intl9 = tmp5(tmp2[4]).intl;
        tmp26 = obj5;
      }
      const obj6 = { key: "organization", status: flag.SUCCESS, title: intl10.formatToPlainString(tmp(tmp2[5]).qJafqt, obj7), subtitle: formatToPlainStringResult };
      intl10 = tmp5(tmp2[4]).intl;
      formatToPlainStringResult = null;
      obj7 = { orgName: str2, displayNoun: str };
      if (null != name) {
        const intl11 = tmp5(tmp2[4]).intl;
        const obj8 = { characterName: name };
        formatToPlainStringResult = intl11.formatToPlainString(tmp(tmp2[5]).mvLVyz, obj8);
      }
      const obj9 = { title: intl12.string(tmp(tmp2[5]).i3axsB), rows: null, cta: null };
      intl12 = tmp5(tmp2[4]).intl;
      const items2 = [obj6, ];
      const intl13 = tmp5(tmp2[4]).intl;
      const obj10 = { guildName: str3 };
      const formatToPlainStringResult1 = intl13.formatToPlainString(tmp(tmp2[5]).YoJwLe, obj10);
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        let obj13;
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
            const obj11 = { key: "server", status: flag.PENDING, title: formatToPlainStringResult1, subtitle: intl15.string(tmp(tmp2[5]).MgcCQT) };
            intl15 = tmp5(tmp2[4]).intl;
            obj13 = obj11;
          } else if (constants3.APPLICATION === guildJoinStatus) {
            const obj12 = { key: "server", status: flag.PENDING, title: formatToPlainStringResult1, subtitle: intl14.string(tmp(tmp2[5])["mZ/VKS"]) };
            intl14 = tmp5(tmp2[4]).intl;
            obj13 = obj12;
          } else {
            const FAILED = tmp30.FAILED;
            obj13 = { key: "server", status: flag.ERROR, title: intl19.formatToPlainString(tmp(tmp2[5])["4XMetY"], obj14), subtitle: intl20.formatToPlainString(tmp(tmp2[5]).FQoZBu, obj15) };
            intl19 = tmp5(tmp2[4]).intl;
            obj14 = { guildName: str3 };
            intl20 = tmp5(tmp2[4]).intl;
            obj15 = { guildName: str3 };
          }
        }
        items2[1] = obj13;
        obj9.rows = items2;
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
          obj4 = tmp26;
        }
        obj9.cta = obj4;
        obj28 = obj9;
      }
      const obj16 = { key: "server", status: flag.SUCCESS, title: intl16.formatToPlainString(tmp(tmp2[5])["Y2DU/l"], obj17), subtitle: intl17.formatToPlainString(tmp(tmp2[5])["316Vsz"], obj18) };
      intl16 = tmp5(tmp2[4]).intl;
      obj17 = { guildName: str3 };
      intl17 = tmp5(tmp2[4]).intl;
      obj13 = obj16;
      obj18 = { displayNoun: str };
    } else {
      const obj19 = { type: obj.CLOSE, text: intl18.string(require("intl").t.cpT0Cq), action };
      intl18 = tmp5(tmp2[4]).intl;
      let tmp23 = obj19;
      const tmp34 = obj;
      if (null != tmp21) {
        const obj20 = { type: tmp34.GO_TO_SERVER, text: intl.string(tmp(tmp2[5]).H1wMHV), action: tmp21 };
        intl = tmp5(tmp2[4]).intl;
        tmp23 = obj20;
      }
      if (constants.ALREADY_JOINED === failureReason) {
        const obj21 = { title: intl7.formatToPlainString(tmp(tmp2[5])["1PMPYk"], obj22), cta: tmp23 };
        intl7 = tmp5(tmp2[4]).intl;
        obj28 = obj21;
        obj22 = { displayNoun: str };
      } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
        const obj23 = { title: intl5.formatToPlainString(tmp(tmp2[5]).vSlR1j, obj24), subtitle: intl6.formatToPlainString(tmp(tmp2[5]).kvDHqp, obj25), cta: obj19 };
        intl5 = tmp5(tmp2[4]).intl;
        obj24 = { displayNoun: str };
        intl6 = tmp5(tmp2[4]).intl;
        obj28 = obj23;
        obj25 = { displayNoun: str };
      } else if (constants.GUILD_FULL === failureReason) {
        const obj26 = { title: intl3.formatToPlainString(tmp(tmp2[5])["/7Gy4g"], obj27), subtitle: intl4.string(tmp(tmp2[5])["8TGo9L"]), cta: obj19 };
        intl3 = tmp5(tmp2[4]).intl;
        obj27 = { displayNoun: str };
        intl4 = tmp5(tmp2[4]).intl;
        obj28 = obj26;
      } else {
        const OTHER = tmp24.OTHER;
        obj28 = { title: intl2.string(tmp(tmp2[5]).sXbaMb), cta: obj19 };
        intl2 = tmp5(tmp2[4]).intl;
      }
    }
    const obj29 = { isWaitingForGuild: tmp12 };
    const merged1 = Object.assign(obj28);
    tmp16 = obj29;
  }
  return tmp16;
};
export { GameOrganizationJoinOutcomeCtaType };
export const GameOrganizationJoinOutcomeRowStatus = obj2;
