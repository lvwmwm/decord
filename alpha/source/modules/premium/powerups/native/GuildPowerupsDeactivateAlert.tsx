// Module ID: 12293
// Function ID: 12294
// Name: GuildPowerupsDeactivateAlert
// Dependencies: [17, 21, 5090, 587, 558, 576, 12294, 12295, 12296, 5000, 1126, 2597, 5086, 5303, 5303, 2]

// Module 12293 (GuildPowerupsDeactivateAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef2597 from "module_2597" /* 2597 */;
import Text_Text from "Text/Text" /* 5086 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 12294 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 12295 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerContainer: size, extraContentContainer: obj2, warningText: { textAlign: "center" } };
size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsDeactivateAlert(arg0) {
  let first;
  let guildId;
  let intl4;
  let items;
  let onDeactivate;
  let powerup;
  let tmp11;
  let tmp15;
  let tmp17;
  let warningText;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(34);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_6();
  _require = tmp4;
  const tmp6 = onDeactivate(12294)(guildId, powerup);
  onDeactivate = tmp6.onDeactivate;
  const error = tmp6.error;
  const arr = onDeactivate(12295)(guildId, powerup);
  const obj2 = require("GuildPowerupAnalytics");
  const logPowerupModalOpened = obj2.useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: onDeactivate(587).colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
    const CircleErrorIcon = tmp(5000).CircleErrorIcon;
    const tmp10 = closure_4(CircleErrorIcon, obj3);
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerContainer) {
    const obj4 = { style: tmp4.headerContainer, children: first };
    const tmp14 = closure_4(View, obj4);
    cResult[1] = tmp4.headerContainer;
    cResult[2] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== powerup.title) {
    const intl = tmp(1126).intl;
    const obj5 = { perk: powerup.title };
    const formatToPlainStringResult = intl.formatToPlainString(onDeactivate(2597).iEBw1M, obj5);
    cResult[3] = powerup.title;
    cResult[4] = formatToPlainStringResult;
    tmp15 = formatToPlainStringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== powerup.title) {
    const intl2 = tmp(1126).intl;
    const obj6 = { perk: powerup.title };
    const formatToPlainStringResult1 = intl2.formatToPlainString(onDeactivate(2597)["7o0K+2"], obj6);
    cResult[5] = powerup.title;
    cResult[6] = formatToPlainStringResult1;
    tmp17 = formatToPlainStringResult1;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === error) {
    let tmp19;
    let tmp22;
    let tmp23;
    let tmp25;
    let tmp28;
    let tmp29;
    if (cResult[8] === tmp4.warningText) {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== onDeactivate) {
      const fn = function p(stopPropagation) {
        stopPropagation.stopPropagation();
        return onDeactivate();
      };
      cResult[10] = onDeactivate;
      cResult[11] = fn;
      tmp22 = fn;
    } else {
      tmp22 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(onDeactivate(2597).PYPdl4);
      cResult[12] = stringResult;
      tmp23 = stringResult;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp22) {
      let str = "deactivate";
      const obj7 = { variant: "destructive", onPress: tmp22, text: tmp23 };
      const tmp27 = closure_4(tmp(5303).AlertActionButton, obj7, "deactivate");
      cResult[13] = tmp22;
      cResult[14] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v() {

      };
      cResult[15] = fn2;
      tmp28 = fn2;
    } else {
      tmp28 = cResult[15];
    }
    const _Symbol3 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { onPress: tmp28, variant: "secondary", text: intl4.string(tmp(1126).t["ETE/oC"]) };
      const AlertActionButton = tmp(5303).AlertActionButton;
      intl4 = tmp(1126).intl;
      let str2 = "cancel";
      const tmp31 = closure_4(AlertActionButton, obj8, "cancel");
      cResult[16] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[16];
    }
    if (cResult[17] === tmp19) {
      let tmp32;
      let tmp37;
      if (cResult[18] === tmp25) {
        tmp32 = cResult[19];
      }
      if (cResult[20] === tmp4.warningText) {
        let tmp36;
        if (cResult[21] === arr) {
          tmp36 = cResult[22];
        }
        if (cResult[25] === tmp4.extraContentContainer) {
          let tmp39;
          if (cResult[26] === tmp36) {
            tmp39 = cResult[27];
          }
          if (cResult[28] === tmp32) {
            if (cResult[29] === tmp39) {
              if (cResult[30] === tmp11) {
                if (cResult[31] === tmp15) {
                  let tmp43;
                  if (cResult[32] === tmp17) {
                    tmp43 = cResult[33];
                  }
                  return tmp43;
                }
              }
            }
          }
          const obj9 = { header: tmp11, title: tmp15, content: tmp17, actions: tmp32, extraContent: tmp39 };
          const tmp45 = closure_4(tmp(5303).AlertModal, obj9);
          cResult[28] = tmp32;
          cResult[29] = tmp39;
          cResult[30] = tmp11;
          cResult[31] = tmp15;
          cResult[32] = tmp17;
          cResult[33] = tmp45;
          tmp43 = tmp45;
        }
        const obj10 = { style: tmp35, children: tmp36 };
        const tmp42 = closure_4(View, obj10);
        cResult[25] = tmp4.extraContentContainer;
        cResult[26] = tmp36;
        cResult[27] = tmp42;
        tmp39 = tmp42;
      }
      if (cResult[23] !== tmp4.warningText) {
        const fn3 = function k(critical, arg1) {
          let str;
          let str2;
          const obj = { style: warningText.warningText, variant: str, color: str2, children: critical.text };
          str = "text-sm/medium";
          const Text = Text_Text.Text;
          const tmp = React3;
          if (critical.critical) {
            str = "text-sm/semibold";
          }
          str2 = undefined;
          if (critical.critical) {
            str2 = "text-feedback-critical";
          }
          return tmp(Text, obj, arg1);
        };
        cResult[23] = tmp4.warningText;
        cResult[24] = fn3;
        tmp37 = fn3;
      } else {
        tmp37 = cResult[24];
      }
      const mapped = arr.map(tmp37);
      cResult[20] = tmp4.warningText;
      cResult[21] = arr;
      cResult[22] = mapped;
      tmp36 = mapped;
    }
    const obj11 = { children: items };
    items = [tmp19, tmp25, tmp29];
    const tmp34 = closure_5(tmp(5303).AlertActions, obj11);
    cResult[17] = tmp19;
    cResult[18] = tmp25;
    cResult[19] = tmp34;
    tmp32 = tmp34;
  }
  let tmp20 = null != error;
  if (tmp20) {
    const obj12 = { style: tmp4.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp20 = closure_4(tmp(5086).Text, obj12);
  }
  cResult[7] = error;
  cResult[8] = tmp4.warningText;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : (function GuildPowerupsDeactivateAlert(arg0) {
  let AlertActions;
  let CircleErrorIcon;
  let _undefined;
  let c1;
  let error;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj11;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let powerup;
  let tmp8;
  let tmp9;
  let warningText;
  ({ guildId, powerup } = arg0);
  importDefault = undefined;
  let tmp = closure_6();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
  useGuildPowerupOnDeactivateDefault(guildId, powerup);
  const arr = useDeactivateWarningTextDefault(guildId, powerup);
  let obj = require("GuildPowerupAnalytics");
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  const obj2 = { header: closure_4(View, obj3), title: intl.formatToPlainString(_modDef2597.iEBw1M, obj5), content: intl2.formatToPlainString(_modDef2597["7o0K+2"], obj6), actions: tmp9(AlertActions, obj8), extraContent: closure_4(tmp8, obj11) };
  obj3 = { style: tmp.headerContainer, children: closure_4(CircleErrorIcon, obj4) };
  const AlertModal = require("AlertModal").AlertModal;
  obj4 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  CircleErrorIcon = require("CircleErrorIcon").CircleErrorIcon;
  intl = require("intl").intl;
  obj5 = { perk: powerup.title };
  intl2 = require("intl").intl;
  let tmp7Result = null != error;
  obj6 = { perk: powerup.title };
  AlertActions = require("AlertModal").AlertActions;
  tmp8 = View;
  tmp9 = closure_5;
  if (tmp7Result) {
    const obj7 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp7Result = tmp7(tmp5(5086).Text, obj7);
  }
  obj8 = { children: items };
  items = [tmp7Result, , ];
  const obj9 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined();
    },
    text: intl3.string(_modDef2597.PYPdl4)
  };
  const AlertActionButton = tmp5(5303).AlertActionButton;
  intl3 = tmp5(1126).intl;
  items[1] = closure_4(AlertActionButton, obj9, "deactivate");
  const obj10 = {
    onPress() {

    },
    variant: "secondary",
    text: intl4.string(require("intl").t["ETE/oC"])
  };
  const AlertActionButton2 = tmp5(5303).AlertActionButton;
  intl4 = tmp5(1126).intl;
  items[2] = closure_4(AlertActionButton2, obj10, "cancel");
  obj11 = {
    style: tmp.extraContentContainer,
    children: arr.map((critical, index) => {
      let str;
      let str2;
      const obj = { style: warningText.warningText, variant: str, color: str2, children: critical.text };
      str = "text-sm/medium";
      const Text = Text_Text.Text;
      const tmp = React3;
      if (critical.critical) {
        str = "text-sm/semibold";
      }
      str2 = undefined;
      if (critical.critical) {
        str2 = "text-feedback-critical";
      }
      return tmp(Text, obj, index);
    })
  };
  return closure_4(AlertModal, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default tmp4;
