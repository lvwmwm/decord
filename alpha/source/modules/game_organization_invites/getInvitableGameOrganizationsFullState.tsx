// Module ID: 12537
// Function ID: 12538
// Name: getInvitableGameOrganizationsFullState
// Dependencies: [12538, 1113, 2565, 12539, 2]
// Exports: default, getGameOrganizationFullSubLabel, getInvitableGameOrganizationsFullSubLabel

// Module 12537 (getInvitableGameOrganizationsFullState)
import intl3 from "intl" /* 1113 */;
import _modDef2565 from "module_2565" /* 2565 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12538 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12539 */;
import size from "module_2" /* 2 */;

let closure_3 = { kind: "available" };
let closure_4 = { kind: "all_full" };
const result = size.fileFinishedImporting("modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx");

export default function getInvitableGameOrganizationsFullState(arr) {
  if (null != arr) {
    let tmp;
    if (0 !== arr.length) {
      if (arr.every((organization) => isGameOrganizationFullDefault(organization.organization))) {
        let tmp2;
        if (1 === arr.length) {
          tmp2 = { kind: "single_full", organization: arr[0].organization };
          const obj = { kind: "single_full", organization: arr[0].organization };
        } else {
          tmp2 = closure_4;
        }
        tmp = tmp2;
      } else {
        tmp = closure_3;
      }
    }
    return tmp;
  }
  tmp = closure_3;
};
export function getGameOrganizationFullSubLabel(data, stateFromStores) {
  let tmp = stateFromStores;
  const name = data.name;
  if (stateFromStores === undefined) {
    tmp = null;
  }
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { orgName: name, noun: getGameOrganizationDisplayNounDefault({ displayNoun: tmp, lowercase: true }) };
  const xuM052 = _modDef2565.xuM052;
  return formatToPlainString(xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  let obj2;
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      const name = kind.organization.name;
      const intl2 = intl3.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj = { orgName: name, noun: getGameOrganizationDisplayNounDefault(obj2) };
      const xuM052 = _modDef2565.xuM052;
      obj2 = { displayNoun: null, lowercase: true };
      return formatToPlainString(xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = intl3.intl;
      return intl.string(_modDef2565.bY80Jh);
    }
  }
}
