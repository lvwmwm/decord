// Module ID: 12017
// Function ID: 12018
// Name: getInvitableGameOrganizationsFullState
// Dependencies: [32, 12018, 1113, 2555, 12019, 2]
// Exports: default, getGameOrganizationFullSubLabel, getInvitableGameOrganizationsFullSubLabel

// Module 12017 (getInvitableGameOrganizationsFullState)
import intl3 from "intl" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12018 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12019 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_4 = { kind: "available" };
let closure_5 = { kind: "all_full" };
const result = size.fileFinishedImporting("modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx");

export default function getInvitableGameOrganizationsFullState(arr) {
  if (null != arr) {
    if (0 !== arr.length) {
      if (arr.every((organization) => isGameOrganizationFullDefault(organization.organization))) {
        if (1 === arr.length) {
          const obj = { kind: "single_full", organization: null, displayNoun: null };
          ({ organization: obj.organization, displayNoun: obj.displayNoun } = _slicedToArray(arr, 1)[0]);
          return obj;
        } else {
          return closure_5;
        }
      } else {
        return closure_4;
      }
    }
  }
  return closure_4;
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
  const xuM052 = _modDef2555.xuM052;
  return formatToPlainString(xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  let obj2;
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      let displayNoun = kind.displayNoun;
      const name = kind.organization.name;
      if (displayNoun === undefined) {
        displayNoun = null;
      }
      const intl2 = intl3.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj = { orgName: name, noun: getGameOrganizationDisplayNounDefault(obj2) };
      const xuM052 = _modDef2555.xuM052;
      obj2 = { displayNoun, lowercase: true };
      return formatToPlainString(xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = intl3.intl;
      return intl.string(_modDef2555.bY80Jh);
    }
  }
}
