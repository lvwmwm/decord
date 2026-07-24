// Module ID: 11600
// Function ID: 90260
// Name: GuildPowerupsDeactivateAlert
// Dependencies: [27, 33, 4130, 689, 11601, 11602, 11603, 4475, 7577, 1212, 2230, 4475, 4126, 2]
// Exports: default

// Module 11600 (GuildPowerupsDeactivateAlert)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj.headerContainer = obj;
obj.extraContentContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.warningText = { textAlign: "center" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  let error;
  let guildId;
  let importDefault;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = callback2();
  const require = tmp;
  ({ onDeactivate: importDefault, error } = importDefault(11601)(guildId, powerup));
  const tmp2 = importDefault(11601)(guildId, powerup);
  let obj = require(11603) /* ModalType */;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require(11603) /* ModalType */.ModalType.DEACTIVATE);
  obj = {};
  obj = { style: tmp.headerContainer };
  const obj1 = { color: importDefault(689).colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  obj.children = callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, obj1);
  obj.header = callback(View, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.formatToPlainString(importDefault(2230).iEBw1M, { perk: powerup.title });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.formatToPlainString(importDefault(2230)["7o0K+2"], { perk: powerup.title });
  const obj4 = {};
  let tmp6 = null != error;
  if (tmp6) {
    const obj5 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp6 = callback(require(4126) /* Text */.Text, obj5);
  }
  const items = [tmp6, , ];
  const obj6 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return callback();
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl3.string(importDefault(2230).PYPdl4);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary"
  };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  items[2] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj7, "cancel");
  obj4.children = items;
  obj.actions = closure_5(require(4475) /* getAlertModalItemKey */.AlertActions, obj4);
  const arr = importDefault(11602)(guildId, powerup);
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  const tmp4 = callback;
  const tmp5 = closure_5;
  obj.extraContent = callback(View, {
    style: tmp.extraContentContainer,
    children: importDefault(11602)(guildId, powerup).map((critical) => {
      const obj = { style: outer1_4.warningText };
      let str = "text-sm/medium";
      if (critical.critical) {
        str = "text-sm/semibold";
      }
      obj.variant = str;
      let str2;
      if (critical.critical) {
        str2 = "text-feedback-critical";
      }
      obj.color = str2;
      obj.children = critical.text;
      return outer1_4(outer1_4(outer1_2[12]).Text, obj, arg1);
    })
  });
  return tmp4(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
