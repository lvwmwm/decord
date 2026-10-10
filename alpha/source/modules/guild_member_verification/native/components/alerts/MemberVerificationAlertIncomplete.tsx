// Module ID: 6780
// Function ID: 6781
// Name: MemberVerificationAlertIncomplete
// Dependencies: [109, 19, 4940, 21, 558, 576, 573, 6144, 6102, 1126, 5379, 6112, 6781, 2]

// Module 6780 (MemberVerificationAlertIncomplete)
import intl5 from "intl" /* 1126 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6102 */;
import MemberVerificationAlertDefault from "MemberVerificationAlert" /* 6112 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6144 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4940 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["guildId", "onClose"];
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlertIncomplete(guildId) {
  let closure_1;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp6;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(29);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    const onClose = guildId.onClose;
    importDefault = onClose;
    const tmp9 = _objectWithoutProperties(guildId, closure_3);
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = onClose;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    class I {
      constructor() {
        if (closure_1 != null) {
          tmp();
        }
        const obj = MemberVerificationModalActionCreators;
        const result = obj.openMemberVerificationModal(guildId);
      }
    }
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildJoinRequestStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn = function _() {
      return UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
    };
    const items1 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === tmp4) {
    let tmp15;
    if (cResult[9] === tmp5) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      let tmp16;
      let tmp17;
      let tmp21;
      let tmp23;
      let tmp26;
      let tmp28;
      if (cResult[12] === tmp5) {
        tmp16 = cResult[13];
      }
      if (cResult[14] !== stateFromStores) {
        let formatToPlainStringResult;
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (null != name) {
          let intl2 = tmp(1126).intl;
          const obj2 = { guildName: stateFromStores.name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.f5Jaw7, obj2);
        } else {
          let intl = tmp(1126).intl;
          formatToPlainStringResult = intl.string(tmp(1126).t["0sTyEb"]);
        }
        cResult[14] = stateFromStores;
        cResult[15] = formatToPlainStringResult;
        tmp17 = formatToPlainStringResult;
      } else {
        tmp17 = cResult[15];
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult = intl3.string(tmp(1126).t.h3aGmv);
        cResult[16] = stringResult;
        tmp21 = stringResult;
      } else {
        tmp21 = cResult[16];
      }
      if (cResult[17] !== tmp15) {
        const obj3 = { variant: "secondary", text: tmp21, onPress: tmp15 };
        const tmp25 = closure_7(tmp(5379).Button, obj3);
        cResult[17] = tmp15;
        cResult[18] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[18];
      }
      const _Symbol2 = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult1 = intl4.string(tmp(1126).t.OQFlFD);
        cResult[19] = stringResult1;
        tmp26 = stringResult1;
      } else {
        tmp26 = cResult[19];
      }
      if (cResult[20] !== tmp16) {
        const obj4 = { text: tmp26, variant: "destructive", onPress: tmp16 };
        const tmp30 = closure_7(tmp(5379).Button, obj4);
        cResult[20] = tmp16;
        cResult[21] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[21];
      }
      if (cResult[22] === tmp28) {
        let tmp31;
        if (cResult[23] === tmp23) {
          tmp31 = cResult[24];
        }
        if (cResult[25] === tmp17) {
          if (cResult[26] === tmp6) {
            let tmp35;
            if (cResult[27] === tmp31) {
              tmp35 = cResult[28];
            }
            return tmp35;
          }
        }
        const obj5 = { icon: tmp(6781).ListViewIcon, header: tmp17, buttons: tmp31 };
        const tmp38 = MemberVerificationAlertDefault;
        const merged = Object.assign(tmp6);
        const tmp42 = closure_7(tmp38, obj5);
        cResult[25] = tmp17;
        cResult[26] = tmp6;
        class I {
          constructor() {
            if (closure_1 != null) {
              tmp();
            }
            const obj = MemberVerificationModalActionCreators;
            const result = obj.openMemberVerificationModal(guildId);
          }
        }
        cResult[27] = tmp31;
        cResult[28] = tmp42;
        tmp35 = tmp42;
      }
      const items2 = [, ];
      const obj6 = { children: null };
      items2[0] = tmp23;
      items2[1] = tmp28;
      class I {
        constructor() {
          if (closure_1 != null) {
            tmp();
          }
          const obj = MemberVerificationModalActionCreators;
          const result = obj.openMemberVerificationModal(guildId);
        }
      }
      const tmp34 = closure_9(closure_8, obj6);
      cResult[22] = tmp28;
      cResult[23] = tmp23;
      cResult[24] = tmp34;
      tmp31 = tmp34;
    }
    const fn2 = function h() {
      let intl;
      let intl2;
      if (closure_1 != null) {
        tmp();
      }
      const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
      const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
      MemberVerificationAlertActionCreators;
      intl = intl5.intl;
      intl2 = intl5.intl;
      const result = openMemberVerificationCancelPendingAlert(obj);
    };
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = fn2;
    tmp16 = fn2;
  }
  class I {
    constructor() {
      if (closure_1 != null) {
        tmp();
      }
      const obj = MemberVerificationModalActionCreators;
      const result = obj.openMemberVerificationModal(guildId);
    }
  }
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = I;
  tmp15 = I;
}) : (function MemberVerificationAlertIncomplete(guildId) {
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let items4;
  let obj4;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  let obj = guildId(573);
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = MemberVerificationModalActionCreators;
    const result = obj.openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    if (onClose != null) {
      tmp();
    }
    const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
    const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
    MemberVerificationAlertActionCreators;
    intl = intl5.intl;
    intl2 = intl5.intl;
    const result = openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1126).intl;
    const obj2 = { guildName: stateFromStores.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.f5Jaw7, obj2);
  } else {
    let intl = tmp2(1126).intl;
    formatToPlainStringResult = intl.string(tmp2(1126).t["0sTyEb"]);
  }
  const obj3 = { icon: guildId(6781).ListViewIcon, header: formatToPlainStringResult, buttons: closure_9(closure_8, obj4) };
  const tmp9 = onClose(6112);
  const merged1 = Object.assign(merged);
  obj4 = { children: items4 };
  const obj5 = { variant: "secondary", text: intl3.string(guildId(1126).t.h3aGmv), onPress: callback };
  const Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  items4 = [closure_7(Button, obj5), ];
  const obj6 = { text: intl4.string(guildId(1126).t.OQFlFD), variant: "destructive", onPress: callback1 };
  const Button2 = tmp2(5379).Button;
  intl4 = tmp2(1126).intl;
  items4[1] = closure_7(Button2, obj6);
  return closure_7(tmp9, obj3);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default tmp3;
