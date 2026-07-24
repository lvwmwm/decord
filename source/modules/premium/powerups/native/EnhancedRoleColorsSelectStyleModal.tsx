// Module ID: 16370
// Function ID: 127710
// Name: EnhancedRoleColorsSelectStyleModal
// Dependencies: [27, 16352, 16354, 16351, 482, 33, 4130, 689, 4066, 4571, 16371, 1212, 7710, 5187, 5186, 4098, 9329, 1913, 7739, 16372, 4126, 2230, 3994, 2]
// Exports: default

// Module 16370 (EnhancedRoleColorsSelectStyleModal)
import get_ActivityIndicator from "get ActivityIndicator";
import { RoleColorsStyle } from "_isNativeReflectConstruct";
import { HOLOGRAPHIC_ROLE_COLORS } from "HOLOGRAPHIC_ROLE_COLORS";
import { STYLE_CONFIGS } from "title";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_3;
let closure_4;
let closure_9;
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginHorizontal: importDefault(689).space.PX_12, marginBottom: importDefault(689).space.PX_32 };
  obj.container = obj;
  obj = { display: "flex", flexDirection: "row", gap: importDefault(689).space.PX_8 };
  obj.stylesContainer = obj;
  const obj1 = { borderRadius: importDefault(689).radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj.button = obj1;
  const obj2 = { width: 400, flex: 1, marginStart: importDefault(689).space.PX_8, marginVertical: importDefault(689).space.PX_8, alignSelf: "flex-start" };
  obj.message = obj2;
  const obj3 = { width: "100%", textAlign: "center" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = importDefault(689).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj3.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj3.paddingVertical = importDefault(689).space.PX_8;
  obj.text = obj3;
  const obj4 = {};
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = importDefault(689).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj4.backgroundColor = BACKGROUND_SURFACE_HIGH2;
  obj4.padding = importDefault(689).space.PX_8;
  obj4.marginTop = importDefault(689).space.PX_16;
  obj4.borderRadius = importDefault(689).radii.sm;
  obj.upsellContainer = obj4;
  obj.upsellText = { textAlign: "center" };
  obj.selected = { borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_BRAND };
  obj.disabled = { opacity: 0.5 };
  return obj;
});
let result = require("HOLOGRAPHIC_ROLE_COLORS").fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  let guildId;
  let importDefault;
  let require;
  let role;
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  ({ guildId, role } = arg0);
  let tmp = callback3(importDefault(4066)());
  const dependencyMap = tmp;
  let obj = require(4571) /* useHasEnhancedRoleColors */;
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  let obj1 = require(16371) /* useGuildSettingsRoleExampleMessage */;
  let intl = require(1212) /* getSystemLocale */.intl;
  let closure_4 = obj1.useGuildSettingsRoleExampleMessage(intl.string(require(1212) /* getSystemLocale */.t.Mi9Kbe));
  let tmp3 = importDefault(7710);
  tmp3 = new tmp3();
  const RoleColorsStyle = tmp3;
  obj = {};
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t["9wVJRB"]);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.container };
  let items = [
    callback(closure_4, {
      style: tmp.stylesContainer,
      children: STYLE_CONFIGS.map((id) => {
        let closure_0 = id;
        let tmp = !hasEnhancedRoleColorsForRole;
        if (tmp) {
          tmp = id.id !== tmp3.SOLID;
        }
        let obj = {};
        const items = [tmp.button, , ];
        let selected = closure_0 === id.id;
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
          outer1_1(id.id);
          outer2_1(4098).hideActionSheet();
        };
        obj = {
          style: tmp.message,
          pointerEvents: "none",
          message: closure_4,
          rowGenerator: tmp3,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = outer2_0(1913).extractColorStringsFromServerColors(id.colors);
            const obj = outer2_0(1913);
            message.message.roleColors = outer2_0(7739).processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = outer2_1(16372);
          }
        };
        const items1 = [outer1_9(outer1_1(tmp[16]), obj), ];
        obj = { style: tmp.text, variant: "text-sm/normal" };
        const intl = outer1_0(tmp[11]).intl;
        obj.children = intl.string(id.labelString);
        items1[1] = outer1_9(outer1_0(tmp[20]).Text, obj);
        obj.children = items1;
        return outer1_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8 = !hasEnhancedRoleColorsForRole;
  if (tmp8) {
    const obj3 = { style: tmp.upsellContainer };
    const obj4 = { style: tmp.upsellText, variant: "text-sm/semibold" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj5 = {};
    const obj6 = {};
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6.gradientColors = items1;
    obj6.variant = "text-sm/semibold";
    obj6.experimental_useNativeText = !require(3994) /* isFabric */.isFabric();
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl4.string(importDefault(2230)["+/IHLl"]);
    obj5.magical = callback(require(4126) /* Text */.Text, obj6);
    obj4.children = intl3.format(importDefault(2230).VpEDJc, obj5);
    const items2 = [callback(require(4126) /* Text */.Text, obj4), ];
    const obj7 = { style: tmp.upsellText, variant: "text-sm/normal" };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj7.children = intl5.string(importDefault(2230).FJZeZF);
    items2[1] = callback(require(4126) /* Text */.Text, obj7);
    obj3.children = items2;
    tmp8 = callback2(closure_4, obj3);
    const obj11 = require(3994) /* isFabric */;
  }
  items[1] = tmp8;
  obj1.children = items;
  obj.children = callback2(closure_4, obj1);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
