// Module ID: 13471
// Function ID: 13472
// Name: withGameOrganizationJoinFlowPending
// Dependencies: [5, 572, 2]
// Exports: default

// Module 13471 (withGameOrganizationJoinFlowPending)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_4;

let obj = function _withGameOrganizationJoinFlowPending() {
  obj = _asyncToGenerator(async (code, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              const obj5 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code, pending: true };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj6 = { value: closure_1(), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj8 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code, pending: false };
            const obj7 = closure_131_0(closure_131_1[1]);
            obj7.dispatch(obj8);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj10 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code, pending: false };
            const obj4 = closure_131_0(closure_131_1[1]);
            obj4.dispatch(obj10);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            const obj12 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code, pending: false };
            obj = closure_131_0(closure_131_1[1]);
            obj.dispatch(obj12);
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp30) {
          closure_4 = tmp30;
          if (0 === c5) {
            c7 = 3;
            throw tmp30;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/game_organization_invites/withGameOrganizationJoinFlowPending.tsx");

export default function withGameOrganizationJoinFlowPending() {
  return obj(...arguments);
};
