// Module ID: 5856
// Function ID: 5857
// Name: MemberVerificationAlertRejected
// Dependencies: [5, 19, 2108, 1372, 4656, 21, 5857, 504, 5858, 5853, 5881, 1115, 5849, 5992, 5281, 2]
// Exports: default

// Module 5856 (MemberVerificationAlertRejected)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let currentUser;

let c10;
let c9;
let metroImportAll;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx");

export default function MemberVerificationAlertRejected(guildId) {
  let canReapply;
  let formatToPlainStringResult;
  let intl4;
  let isLoading;
  let items6;
  let obj6;
  let tmp17Result;
  let tmp20;
  let tmp21;
  guildId = guildId.guildId;
  let onClose = guildId.onClose;
  const secondaryButton = guildId.secondaryButton;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, secondaryButton: 0, onClose: 0 }));
  let stateFromStores;
  let stateFromStores2;
  const tmp2 = guildId;
  const tmp3 = stateFromStores;
  let obj = guildId(stateFromStores[6]);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (currentUserGuildJoinRequest != null) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  const items = [UserStore];
  const tmp2Result = tmp2(tmp3[7]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp2Result4 = tmp2(tmp3[8]);
  const canReapplyToRejectedMemberVerificationApplication = tmp2Result4.useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const items1 = [UserGuildJoinRequestStore];
  const items2 = [guildId];
  const tmp2Result5 = tmp2(tmp3[7]);
  const stateFromStores1 = tmp2Result5.useStateFromStores(items1, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items2);
  const items3 = [GuildMemberStore];
  const items4 = [stateFromStores, guildId];
  const tmp2Result6 = tmp2(tmp3[7]);
  stateFromStores2 = tmp2Result6.useStateFromStores(items3, () => {
    let member = null;
    if (null != stateFromStores) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  }, items4);
  const items5 = [, , ];
  const useCallback = react.useCallback;
  items5[0] = guildId;
  let isPending;
  const tmp11 = stateFromStores2(function*(arg0, value) {
    let c2;
    let closure_0;
    let v1;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        stateFromStores = 2;
        if (0 === onClose) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            guildId = tmp3;
            let isPending;
            if (stateFromStores2 != null) {
              isPending = stateFromStores2.isPending;
            }
            const obj4 = onClose(stateFromStores[9]);
            if (isPending) {
              onClose = 2;
              stateFromStores = 1;
              const obj6 = { value: obj4.removeGuildJoinRequest(guildId), done: false };
              return obj6;
            } else {
              onClose = 1;
              stateFromStores = 1;
              const obj7 = { value: obj4.resetGuildJoinRequest(guildId), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === onClose) {
            if (arg0 === 1) {
              stateFromStores = 3;
              throw value;
            } else if (arg0 === 2) {
              stateFromStores = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_128_1 != null) {
            tmp5();
          }
          const obj2 = guildId(stateFromStores[10]);
          const result = obj2.openMemberVerificationModal(closure_128_0);
          stateFromStores = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        stateFromStores = 3;
        throw tmp18;
      }
    }
  });
  if (stateFromStores2 != null) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  const callback = useCallback(tmp11, items5);
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = tmp2(tmp3[11]).intl;
    let obj2 = { guildName: stateFromStores1.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[11]).t["P+/gzA"], obj2);
  } else {
    const intl = tmp2(tmp3[11]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[11]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = tmp2(tmp3[11]).intl;
      let obj3 = { rejectionReason };
      formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(tmp3[11]).t.fU5PPM, obj3);
    }
  }
  let obj4 = { icon: tmp2(tmp3[13]).XSmallIcon, header: formatToPlainStringResult, subtitle: formatToPlainStringResult1, buttons: tmp20(tmp21, obj6) };
  const tmp18 = onClose(tmp3[12]);
  const merged1 = Object.assign(merged);
  tmp20 = closure_10;
  tmp21 = closure_9;
  if (canReapply) {
    let obj5 = { loading: isLoading, disabled: isLoading, variant: "secondary", text: intl4.string(tmp2(tmp3[11]).t.rpFCLs), onPress: callback };
    const Button = tmp2(tmp3[14]).Button;
    intl4 = tmp2(tmp3[11]).intl;
    tmp17Result = tmp17(Button, obj5);
  } else {
    tmp17Result = null;
  }
  obj6 = { children: items6 };
  items6 = [tmp17Result, secondaryButton];
  return closure_8(tmp18, obj4);
};
