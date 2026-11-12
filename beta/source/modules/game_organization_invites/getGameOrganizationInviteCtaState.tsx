// Module ID: 15441
// Function ID: 15442
// Name: getGameOrganizationInviteCtaState
// Dependencies: [1113, 2530, 2]
// Exports: default

// Module 15441 (getGameOrganizationInviteCtaState)
import intl6 from "intl" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteCtaState.tsx");

export default function getGameOrganizationInviteCtaState(noun) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj;
  let obj5;
  let obj7;
  noun = noun.noun;
  if (noun.accepted) {
    let obj3;
    if (noun.canGoToGuild) {
      const obj2 = { kind: "go_to_server", label: intl5.string(_modDef2530.H1wMHV), actionable: true };
      intl5 = intl6.intl;
      obj3 = obj2;
    } else {
      obj3 = { kind: "joined", label: intl4.string(intl6.t.cEnaWx), actionable: false };
      intl4 = intl6.intl;
    }
    obj = obj3;
  } else if (tmp2) {
    const obj4 = { kind: "full", label: intl3.formatToPlainString(_modDef2530.rMimTG, obj5), actionable: false };
    intl3 = intl6.intl;
    obj = obj4;
    obj5 = { noun };
  } else if (tmp) {
    const obj6 = { kind: "awaiting", label: intl2.string(_modDef2530.OkMPbI), actionable: false };
    intl2 = intl6.intl;
    obj = obj6;
  } else {
    obj = { kind: "join", label: intl.formatToPlainString(_modDef2530["Cz/ZUM"], obj7), actionable: true };
    intl = intl6.intl;
    obj7 = { noun };
  }
  return obj;
};
