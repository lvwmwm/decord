// Module ID: 11562
// Function ID: 89948
// Name: GuildPowerupsDeactivateAlert
// Dependencies: []
// Exports: default

// Module 11562 (GuildPowerupsDeactivateAlert)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { "Bool(false)": 122, "Bool(false)": null, "Bool(false)": 1, "Bool(false)": 224, "Bool(false)": null, "Bool(false)": 1, "Bool(false)": 293, borderRadius: importDefault(dependencyMap[3]).radii.round, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_SUBTLE };
obj.headerContainer = obj;
obj.extraContentContainer = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_12 };
obj.warningText = { textAlign: "center" };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[13]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  let error;
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = callback2();
  const require = tmp;
  ({ onDeactivate: closure_1, error } = importDefault(dependencyMap[4])(guildId, powerup));
  const tmp2 = importDefault(dependencyMap[4])(guildId, powerup);
  let obj = require(dependencyMap[6]);
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require(dependencyMap[6]).ModalType.DEACTIVATE);
  obj = {};
  obj = { style: tmp.headerContainer };
  const obj1 = { color: importDefault(dependencyMap[3]).colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: {} };
  obj.children = callback(require(dependencyMap[8]).CircleErrorIcon, obj1);
  obj.header = callback(View, obj);
  const intl = require(dependencyMap[9]).intl;
  obj.title = intl.formatToPlainString(importDefault(dependencyMap[10]).iEBw1M, { perk: powerup.title });
  const intl2 = require(dependencyMap[9]).intl;
  obj.content = intl2.formatToPlainString(importDefault(dependencyMap[10]).7o0K+2, { perk: powerup.title });
  const obj4 = {};
  let tmp6 = null != error;
  if (tmp6) {
    const obj5 = { "Null": 240, "Null": 130, "Null": null, style: tmp.warningText, children: error };
    tmp6 = callback(require(dependencyMap[12]).Text, obj5);
  }
  const items = [tmp6, , ];
  const obj6 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return callback();
    }
  };
  const intl3 = require(dependencyMap[9]).intl;
  obj6.text = intl3.string(importDefault(dependencyMap[10]).PYPdl4);
  items[1] = callback(require(dependencyMap[11]).AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary"
  };
  const intl4 = require(dependencyMap[9]).intl;
  obj7.text = intl4.string(require(dependencyMap[9]).t.ETE/oC);
  items[2] = callback(require(dependencyMap[11]).AlertActionButton, obj7, "cancel");
  obj4.children = items;
  obj.actions = closure_5(require(dependencyMap[11]).AlertActions, obj4);
  const arr = importDefault(dependencyMap[5])(guildId, powerup);
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  const tmp4 = callback;
  const tmp5 = closure_5;
  obj.extraContent = callback(View, {
    style: tmp.extraContentContainer,
    children: importDefault(dependencyMap[5])(guildId, powerup).map((critical) => {
      const obj = { style: closure_4.warningText };
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
      return closure_4(closure_4(closure_2[12]).Text, obj, arg1);
    })
  });
  return tmp4(require(dependencyMap[7]).AlertModal, obj);
};
