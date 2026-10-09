// Module ID: 6122
// Function ID: 6123
// Name: MemberVerificationAlertCancelPending
// Dependencies: [109, 19, 21, 558, 576, 6123, 1126, 5376, 6119, 2]

// Module 6122 (MemberVerificationAlertCancelPending)
import MemberVerificationAlertDefault from "MemberVerificationAlert" /* 6119 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6123 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, tmpResult;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["guildId", "confirmText", "subtitleText", "onClose"];
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlertCancelPending(guildId) {
  let closure_0;
  let closure_1;
  let confirmText;
  let onClose;
  let subtitleText;
  let tmp4;
  let tmp7;
  let tmp8;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(27);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    ({ confirmText, subtitleText, onClose } = guildId);
    importDefault = onClose;
    const tmp11 = _objectWithoutProperties(guildId, closure_3);
    class P {
      constructor() {
        if (closure_1 != null) {
          tmpResult = tmp();
        }
        obj = closure_1(closure_2[5]);
        result = obj.removeGuildJoinRequest(closure_0);
        return;
      }
    }
    cResult[0] = guildId;
    cResult[1] = confirmText;
    cResult[2] = guildId;
    cResult[3] = onClose;
    cResult[4] = tmp11;
    cResult[5] = subtitleText;
    tmp8 = subtitleText;
    tmp7 = tmp11;
    tmp4 = confirmText;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    let tmp12;
    let tmp16;
    let tmp19;
    if (cResult[7] === tmp6) {
      tmp12 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      cResult[9] = intl.string(tmp(1126).t.KYiN1Q);
      const stringResult = intl.string(tmp(1126).t.KYiN1Q);
    }
    if (cResult[10] !== tmp8) {
      let stringResult1 = tmp8;
      if (tmp8 == null) {
        const intl2 = tmp(1126).intl;
        stringResult1 = intl2.string(tmp(1126).t.nQHxqm);
      }
      cResult[10] = tmp8;
      cResult[11] = stringResult1;
      tmp16 = stringResult1;
    } else {
      tmp16 = cResult[11];
    }
    if (cResult[12] !== tmp4) {
      let stringResult2 = tmp4;
      if (tmp4 == null) {
        const intl3 = tmp(1126).intl;
        stringResult2 = intl3.string(tmp(1126).t.OzHPde);
      }
      cResult[12] = tmp4;
      cResult[13] = stringResult2;
      tmp19 = stringResult2;
    } else {
      tmp19 = cResult[13];
    }
    if (cResult[14] === tmp12) {
      let tmp22;
      let tmp24;
      if (cResult[15] === tmp19) {
        tmp22 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(tmp(1126).t.bANR0R);
        cResult[17] = stringResult3;
        tmp24 = stringResult3;
      } else {
        tmp24 = cResult[17];
      }
      if (cResult[18] !== tmp6) {
        const obj2 = { text: tmp24, variant: "secondary", onPress: tmp6 };
        cResult[18] = tmp6;
        cResult[19] = closure_6(tmp(5376).Button, obj2);
        closure_6(tmp(5376).Button, obj2);
        class P {
          constructor() {
            if (closure_1 != null) {
              tmpResult = tmp();
            }
            obj = closure_1(closure_2[5]);
            result = obj.removeGuildJoinRequest(closure_0);
            return;
          }
        }
      }
      if (cResult[20] === tmp22) {
        let tmp29;
        if (cResult[21] === tmp26) {
          tmp29 = cResult[22];
        }
        if (cResult[23] === tmp7) {
          if (cResult[24] === tmp16) {
            let tmp34;
            if (cResult[25] === tmp29) {
              tmp34 = cResult[26];
            }
            return tmp34;
          }
        }
        const obj3 = { subtitle: tmp16, buttons: tmp29 };
        const tmp37 = MemberVerificationAlertDefault;
        const merged = Object.assign(tmp7);
        class P {
          constructor() {
            if (closure_1 != null) {
              tmpResult = tmp();
            }
            obj = closure_1(closure_2[5]);
            result = obj.removeGuildJoinRequest(closure_0);
            return;
          }
        }
        const tmp41 = closure_6(tmp37, obj3);
        cResult[23] = tmp7;
        cResult[24] = tmp16;
        cResult[25] = tmp29;
        cResult[26] = tmp41;
        tmp34 = tmp41;
      }
      const obj4 = { children: tmp32 };
      class P {
        constructor() {
          if (closure_1 != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[5]);
          result = obj.removeGuildJoinRequest(closure_0);
          return;
        }
      }
      tmp32[0] = tmp22;
      tmp32[1] = tmp26;
      const tmp33 = closure_8(closure_7, obj4);
      cResult[20] = tmp22;
      cResult[21] = tmp26;
      cResult[22] = tmp33;
      tmp29 = tmp33;
    }
    class P {
      constructor() {
        if (closure_1 != null) {
          tmpResult = tmp();
        }
        obj = closure_1(closure_2[5]);
        result = obj.removeGuildJoinRequest(closure_0);
        return;
      }
    }
    const obj5 = { variant: "destructive", text: tmp19, onPress: tmp12 };
    const tmp23 = closure_6(tmp(5376).Button, obj5);
    cResult[14] = tmp12;
    cResult[15] = tmp19;
    cResult[16] = tmp23;
    tmp22 = tmp23;
  }
  class P {
    constructor() {
      if (closure_1 != null) {
        tmpResult = tmp();
      }
      obj = closure_1(closure_2[5]);
      result = obj.removeGuildJoinRequest(closure_0);
      return;
    }
  }
  cResult[6] = tmp5;
  cResult[7] = tmp6;
  cResult[8] = P;
  tmp12 = P;
}) : (function MemberVerificationAlertCancelPending(guildId) {
  let confirmText;
  let intl;
  let intl4;
  let items1;
  let obj2;
  let onClose;
  let subtitleText;
  let tmp8;
  let tmp9;
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = GuildJoinRequestActionCreatorsDefault;
    const result = obj.removeGuildJoinRequest(guildId);
  }, items);
  let obj = { header: intl.string(guildId(1126).t.KYiN1Q), subtitle: subtitleText, buttons: tmp8(tmp9, obj2) };
  const tmp5 = onClose(6119);
  const merged1 = Object.assign(merged);
  intl = guildId(1126).intl;
  if (subtitleText == null) {
    const intl2 = tmp7(1126).intl;
    subtitleText = intl2.string(tmp7(1126).t.nQHxqm);
  }
  const Button = tmp7(5376).Button;
  tmp8 = closure_8;
  tmp9 = closure_7;
  if (confirmText == null) {
    const intl3 = tmp7(1126).intl;
    confirmText = intl3.string(tmp7(1126).t.OzHPde);
  }
  obj2 = { children: items1 };
  items1 = [closure_6(Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  const obj3 = { text: intl4.string(guildId(1126).t.bANR0R), variant: "secondary", onPress: onClose };
  const Button2 = tmp7(5376).Button;
  intl4 = tmp7(1126).intl;
  items1[1] = closure_6(Button2, obj3);
  return closure_6(tmp5, obj);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default tmp3;
