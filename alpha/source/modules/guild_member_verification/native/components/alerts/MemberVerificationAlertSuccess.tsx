// Module ID: 6110
// Function ID: 6111
// Name: MemberVerificationAlertSuccess
// Dependencies: [109, 19, 17, 5080, 2086, 21, 5091, 558, 576, 504, 1126, 6111, 6112, 5087, 5395, 2]

// Module 6110 (MemberVerificationAlertSuccess)
import react_native from "react-native" /* 17 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import GuildStore from "GuildStore" /* 2086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c9;
let metroImportAll;
let closure_3 = ["guildId", "handleConfirmAndAck"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlertSuccess(guildId) {
  let _alert;
  let closure_0;
  let closure_1;
  let illustrationContainer;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp5;
  let useReducedMotion;
  const obj = require("react");
  const cResult = obj.c(36);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    const handleConfirmAndAck = guildId.handleConfirmAndAck;
    importDefault = handleConfirmAndAck;
    const tmp9 = _objectWithoutProperties(guildId, closure_3);
    dependencyMap = tmp9;
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = handleConfirmAndAck;
    cResult[3] = tmp9;
    tmp5 = handleConfirmAndAck;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
  }
  const tmp10 = closure_10();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[4] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn = function b() {
      return GuildStore.getGuild(closure_0);
    };
    const items1 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[8] = items2;
    cResult[9] = M;
  }
  require("get initialized");
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[10] === tmp5) {
      let tmp23;
      const _Symbol = Symbol;
      class M {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      const _Symbol2 = Symbol;
      ({ alert: _alert, illustrationContainer } = tmp10);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[14] = require("module_6111");
        require("module_6111");
        class M {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
      } else {
        tmp23 = cResult[14];
      }
      if (cResult[15] === tmp10.illustration) {
        let tmp26;
        if (cResult[16] === !tmp20) {
          tmp26 = cResult[17];
        }
        if (cResult[18] === tmp10.illustrationContainer) {
          let tmp33;
          const header = tmp10.header;
          if (cResult[21] !== stateFromStores.name) {
            const intl = tmp(1126).intl;
            const format = intl.format;
            const obj2 = { guildName: null };
            class M {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            const formatResult = format(require("intl").t["7hhNEn"], obj2);
            cResult[21] = stateFromStores.name;
            cResult[22] = formatResult;
            tmp33 = formatResult;
          } else {
            tmp33 = cResult[22];
          }
          class M {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const obj3 = { style: header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp33 };
          cResult[23] = tmp10.header;
          cResult[24] = tmp33;
          cResult[25] = closure_8(require("Text/Text").Heading, obj3);
          const tmp37 = closure_8(require("Text/Text").Heading, obj3);
        }
        class M {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        const obj4 = { style: illustrationContainer, children: tmp26 };
        cResult[18] = tmp10.illustrationContainer;
        cResult[19] = tmp26;
        cResult[20] = closure_8(View, obj4);
        const tmp32 = closure_8(View, obj4);
      }
      const obj5 = { source: tmp23, autoPlay: !tmp20, style: tmp10.illustration };
      const tmp29 = closure_8(LottieAnimationViewDefault, obj5);
      cResult[15] = tmp10.illustration;
      cResult[16] = !tmp20;
      cResult[17] = tmp29;
      tmp26 = tmp29;
    }
    function onConfirm() {
      closure_1();
      onClose = onClose.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[11] = tmp6;
    cResult[12] = onConfirm;
  }
}) : (function MemberVerificationAlertSuccess(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj4;
  let obj6;
  let tmp16;
  let useReducedMotion;
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, handleConfirmAndAck: 0 }));
  const tmp2 = closure_10();
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = guildId(merged[9]);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  guildId(merged[9]);
  [][0] = AccessibilityStore;
  if (null == stateFromStores) {
    return null;
  } else {
    function onConfirm() {
      handleConfirmAndAck();
      const onClose = merged.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    const obj2 = { confirmText: intl.string(guildId(merged[10]).t.NuzmOA), style: tmp2.alert, onCancel: onConfirm, onConfirm, children: items2 };
    const tmp10 = handleConfirmAndAck(merged[14]);
    const merged1 = Object.assign(merged);
    intl = tmp3(tmp4[10]).intl;
    const obj3 = { style: tmp2.illustrationContainer, children: closure_8(tmp16, obj4) };
    obj4 = { source: guildId(merged[11]), autoPlay: !tmp7, style: tmp2.illustration };
    tmp16 = handleConfirmAndAck(merged[12]);
    items2 = [closure_8(View, obj3), , ];
    const obj5 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl2.format(guildId(merged[10]).t["7hhNEn"], obj6) };
    const Heading = tmp3(tmp4[13]).Heading;
    intl2 = tmp3(tmp4[10]).intl;
    obj6 = { guildName: stateFromStores.name };
    items2[1] = closure_8(Heading, obj5);
    const obj7 = { style: tmp2.text, variant: "text-sm/medium", color: "text-default", children: intl3.string(guildId(merged[10]).t.nwpqyc) };
    const Text = tmp3(tmp4[13]).Text;
    intl3 = tmp3(tmp4[10]).intl;
    items2[2] = closure_8(Text, obj7);
    return closure_9(tmp10, obj2);
  }
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default tmp4;
