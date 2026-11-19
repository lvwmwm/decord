// Module ID: 14230
// Function ID: 14231
// Name: getGameOrganizationInviteCtaState
// Dependencies: [1113, 2557, 2]
// Exports: default

// Module 14230 (getGameOrganizationInviteCtaState)
import intl6 from "intl" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteCtaState.tsx");

export default function getGameOrganizationInviteCtaState(displayNoun) {
  let intl2;
  let intl4;
  let intl5;
  let obj;
  let obj5;
  let obj7;
  let str = displayNoun.displayNoun;
  if (displayNoun.accepted) {
    let obj3;
    if (displayNoun.canGoToGuild) {
      const obj2 = { kind: "go_to_server", label: intl5.string(_modDef2557.H1wMHV), actionable: true };
      intl5 = intl6.intl;
      obj3 = obj2;
    } else {
      obj3 = { kind: "joined", label: intl4.string(intl6.t.cEnaWx), actionable: false };
      intl4 = intl6.intl;
    }
    obj = obj3;
  } else if (tmp2) {
    const intl3 = intl6.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const rMimTG = _modDef2557.rMimTG;
    if (str == null) {
      str = "other";
    }
    const obj4 = { kind: "full", label: formatToPlainString2(rMimTG, obj5), actionable: false };
    obj = obj4;
    obj5 = { displayNoun: str };
  } else if (tmp) {
    const obj6 = { kind: "awaiting", label: intl2.string(_modDef2557.OkMPbI), actionable: false };
    intl2 = intl6.intl;
    obj = obj6;
  } else {
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    let str2 = str;
    const prop = _modDef2557["Cz/ZUM"];
    if (str == null) {
      str2 = "other";
    }
    obj = { kind: "join", label: formatToPlainString(prop, obj7), actionable: true };
    obj7 = { displayNoun: str2 };
  }
  return obj;
};
