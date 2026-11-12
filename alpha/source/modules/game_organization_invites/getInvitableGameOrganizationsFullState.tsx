// Module ID: 12442
// Function ID: 12443
// Name: getInvitableGameOrganizationsFullState
// Dependencies: [12443, 1113, 2549, 2]
// Exports: default, getGameOrganizationFullSubLabel, getInvitableGameOrganizationsFullSubLabel

// Module 12442 (getInvitableGameOrganizationsFullState)
import intl4 from "intl" /* 1113 */;
import _modDef2549 from "module_2549" /* 2549 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12443 */;
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
export function getGameOrganizationFullSubLabel(data) {
  let intl2;
  const name = data.name;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { orgName: name, noun: intl2.string(_modDef2549.xXXGsq) };
  const xuM052 = _modDef2549.xuM052;
  intl2 = intl4.intl;
  return formatToPlainString(xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  let intl3;
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      const name = kind.organization.name;
      const intl2 = intl4.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj = { orgName: name, noun: intl3.string(_modDef2549.xXXGsq) };
      const xuM052 = _modDef2549.xuM052;
      intl3 = intl4.intl;
      return formatToPlainString(xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = intl4.intl;
      return intl.string(_modDef2549.bY80Jh);
    }
  }
}
