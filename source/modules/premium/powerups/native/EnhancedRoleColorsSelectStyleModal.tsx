// Module ID: 16206
// Function ID: 125213
// Name: EnhancedRoleColorsSelectStyleModal
// Dependencies: []
// Exports: default

// Module 16206 (EnhancedRoleColorsSelectStyleModal)
const _module = require(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = _module);
const RoleColorsStyle = require(dependencyMap[1]).RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = require(dependencyMap[2]).HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = require(dependencyMap[3]).STYLE_CONFIGS;
const ThemeTypes = require(dependencyMap[4]).ThemeTypes;
const _module1 = require(dependencyMap[5]);
({ jsx: closure_9, jsxs: closure_10 } = _module1);
const _module2 = require(dependencyMap[6]);
let closure_11 = _module2.createStyles((arg0) => {
  let obj = {};
  obj = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_12, marginBottom: importDefault(dependencyMap[7]).space.PX_32 };
  obj.container = obj;
  obj = { gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.stylesContainer = obj;
  const obj1 = { direction: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003126340338611401, align: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030586903747, paddingBottom: 0.000000000000000000000000000000000000000000000000000000000000000000000002405425299924593, marginHorizontal: 3292590306267134000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderTopLeftRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200454332393651, borderTopRightRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000682162769733561, flexDirection: true, justifyContent: 6, alignItems: 237, paddingVertical: null, borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
  obj.button = obj1;
  obj.message = { marginStart: importDefault(dependencyMap[7]).space.PX_8, marginVertical: importDefault(dependencyMap[7]).space.PX_8 };
  const obj3 = { <string:1365005216>: null, <string:1650568404>: null };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj3.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj3.paddingVertical = importDefault(dependencyMap[7]).space.PX_8;
  obj.text = obj3;
  const obj4 = {};
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj4.backgroundColor = BACKGROUND_SURFACE_HIGH2;
  obj4.padding = importDefault(dependencyMap[7]).space.PX_8;
  obj4.marginTop = importDefault(dependencyMap[7]).space.PX_16;
  obj4.borderRadius = importDefault(dependencyMap[7]).radii.sm;
  obj.upsellContainer = obj4;
  obj.upsellText = { textAlign: "center" };
  const obj2 = { marginStart: importDefault(dependencyMap[7]).space.PX_8, marginVertical: importDefault(dependencyMap[7]).space.PX_8 };
  obj.selected = { borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
  obj.disabled = { opacity: 0.5 };
  return obj;
});
const _module3 = require(dependencyMap[23]);
const result = _module3.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  let guildId;
  let role;
  ({ roleStyle: closure_0, onStyleChanged: closure_1 } = arg0);
  ({ guildId, role } = arg0);
  const tmp = callback3(importDefault(dependencyMap[8])());
  const dependencyMap = tmp;
  let obj = require(dependencyMap[9]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  let obj1 = require(dependencyMap[10]);
  const intl = require(dependencyMap[11]).intl;
  let closure_4 = obj1.useGuildSettingsRoleExampleMessage(intl.string(require(dependencyMap[11]).t.Mi9Kbe));
  let tmp3 = importDefault(dependencyMap[12]);
  tmp3 = new tmp3();
  const RoleColorsStyle = tmp3;
  obj = {};
  obj = {};
  const intl2 = require(dependencyMap[11]).intl;
  obj.title = intl2.string(require(dependencyMap[11]).t.9wVJRB);
  obj.header = callback(require(dependencyMap[14]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.container };
  const items = [
    callback(closure_4, {
      style: tmp.stylesContainer,
      children: STYLE_CONFIGS.map((id) => {
        let tmp = !hasEnhancedRoleColorsForRole;
        if (tmp) {
          tmp = id.id !== tmp3.SOLID;
        }
        let obj = {};
        const items = [tmp.button, , ];
        let selected = id === id.id;
        if (selected) {
          selected = tmp.selected;
        }
        items[1] = selected;
        let disabled = tmp;
        if (tmp) {
          disabled = tmp.disabled;
        }
        items[2] = disabled;
        obj.style = items;
        obj.disabled = tmp;
        obj.onPress = function onPress() {
          callback(arg0.id);
          callback(closure_2[15]).hideActionSheet();
        };
        obj = {
          style: tmp.message,
          pointerEvents: "none",
          message: closure_4,
          rowGenerator: tmp3,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = message(closure_2[17]).extractColorStringsFromServerColors(message.colors);
            const obj = message(closure_2[17]);
            message.message.roleColors = message(closure_2[18]).processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = callback(closure_2[19]);
          }
        };
        const items1 = [callback2(callback(tmp[16]), obj), ];
        obj = { style: tmp.text, variant: "text-sm/normal" };
        const intl = id(tmp[11]).intl;
        obj.children = intl.string(id.labelString);
        items1[1] = callback2(id(tmp[20]).Text, obj);
        obj.children = items1;
        return closure_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8 = !hasEnhancedRoleColorsForRole;
  if (tmp8) {
    const obj3 = { style: tmp.upsellContainer };
    const obj4 = { style: tmp.upsellText, variant: "text-sm/semibold" };
    const intl3 = require(dependencyMap[11]).intl;
    const obj5 = {};
    const obj6 = {};
    const items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6.gradientColors = items1;
    obj6.variant = "text-sm/semibold";
    obj6.experimental_useNativeText = !require(dependencyMap[22]).isFabric();
    const intl4 = require(dependencyMap[11]).intl;
    obj6.children = intl4.string(importDefault(dependencyMap[21]).+/IHLl);
    obj5.magical = callback(require(dependencyMap[20]).Text, obj6);
    obj4.children = intl3.format(importDefault(dependencyMap[21]).VpEDJc, obj5);
    const items2 = [callback(require(dependencyMap[20]).Text, obj4), ];
    const obj7 = { style: tmp.upsellText, variant: "text-sm/normal" };
    const intl5 = require(dependencyMap[11]).intl;
    obj7.children = intl5.string(importDefault(dependencyMap[21]).FJZeZF);
    items2[1] = callback(require(dependencyMap[20]).Text, obj7);
    obj3.children = items2;
    tmp8 = callback2(closure_4, obj3);
    const obj11 = require(dependencyMap[22]);
  }
  items[1] = tmp8;
  obj1.children = items;
  obj.children = callback2(closure_4, obj1);
  return callback(require(dependencyMap[13]).BottomSheet, obj);
};
