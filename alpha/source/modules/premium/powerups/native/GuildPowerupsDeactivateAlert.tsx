// Module ID: 14064
// Function ID: 14065
// Name: GuildPowerupsDeactivateAlert
// Dependencies: [17, 21, 5009, 575, 14065, 14066, 14067, 5959, 7080, 1114, 2569, 5959, 5619, 2]
// Exports: default

// Module 14064 (GuildPowerupsDeactivateAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2569 from "module_2569" /* 2569 */;
import Text_Text from "Text/Text" /* 5619 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 14065 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 14066 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
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
  const obj2 = { header: closure_4(View, obj3), title: intl.formatToPlainString(_modDef2569.iEBw1M, obj5), content: intl2.formatToPlainString(_modDef2569["7o0K+2"], obj6), actions: tmp9(AlertActions, obj8), extraContent: closure_4(tmp8, obj11) };
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
    tmp7Result = tmp7(tmp5(5619).Text, obj7);
  }
  obj8 = { children: items };
  items = [tmp7Result, , ];
  const obj9 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined();
    },
    text: intl3.string(_modDef2569.PYPdl4)
  };
  const AlertActionButton = tmp5(5959).AlertActionButton;
  intl3 = tmp5(1114).intl;
  items[1] = closure_4(AlertActionButton, obj9, "deactivate");
  const obj10 = {
    onPress() {

    },
    variant: "secondary",
    text: intl4.string(require("intl").t["ETE/oC"])
  };
  const AlertActionButton2 = tmp5(5959).AlertActionButton;
  intl4 = tmp5(1114).intl;
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
};
