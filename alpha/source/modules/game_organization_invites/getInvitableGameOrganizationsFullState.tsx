// Module ID: 11995
// Function ID: 11996
// Name: getInvitableGameOrganizationsFullState
// Dependencies: [32, 11996, 1113, 2557, 2]
// Exports: default, getGameOrganizationFullSubLabel, getInvitableGameOrganizationsFullSubLabel

// Module 11995 (getInvitableGameOrganizationsFullState)
import intl3 from "intl" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 11996 */;
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
  let str = stateFromStores;
  const name = data.name;
  if (stateFromStores === undefined) {
    str = null;
  }
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { orgName: name, displayNoun: str };
  const xuM052 = _modDef2557.xuM052;
  if (str == null) {
    str = "other";
  }
  return formatToPlainString(xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      let str2 = kind.displayNoun;
      const name = kind.organization.name;
      if (str2 === undefined) {
        str2 = null;
      }
      const intl2 = intl3.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj = { orgName: name, displayNoun: str2 };
      const xuM052 = _modDef2557.xuM052;
      if (str2 == null) {
        str2 = "other";
      }
      return formatToPlainString(xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = intl3.intl;
      return intl.string(_modDef2557.bY80Jh);
    }
  }
}
