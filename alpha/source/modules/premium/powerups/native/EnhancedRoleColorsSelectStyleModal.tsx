// Module ID: 19948
// Function ID: 19949
// Name: EnhancedRoleColorsSelectStyleModal
// Dependencies: [17, 19928, 19930, 19927, 1083, 21, 5141, 575, 5376, 6160, 19949, 1113, 8501, 5395, 7441, 5381, 10016, 5050, 8543, 11324, 5747, 2699, 2]
// Exports: default

// Module 19948 (EnhancedRoleColorsSelectStyleModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl6 from "intl" /* 1113 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 5050 */;
import useThemeDefault from "useTheme" /* 5376 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5395 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 6160 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7441 */;
import RowGeneratorDefault from "RowGenerator" /* 8501 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8543 */;
import _modDef11324 from "module_11324" /* 11324 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 19927 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 19928 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 19930 */;
import useGuildSettingsRoleExampleMessage2 from "useGuildSettingsRoleExampleMessage" /* 19949 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let tmp;
let tmp4;
const _modDef2699 = tmp(2699);
const Text_Text = tmp4(5747);
({ Pressable: c3, View: closure_4 } = react_native);
const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = GuildSettingsRoleConstants.STYLE_CONFIGS;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let BACKGROUND_SURFACE_HIGH;
  let BACKGROUND_SURFACE_HIGH2;
  const obj = { container: { marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 }, stylesContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 }, button: size, message: { width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" }, text: { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 }, upsellContainer: { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm }, upsellText: { textAlign: "center" }, selected: { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, disabled: { opacity: 0.5 } };
  ({ marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 });
  ({ display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  size = { borderRadius: nativeDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  ({ width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" });
  const tmp3 = ThemeTypes;
  if (arg0 === ThemeTypes.LIGHT) {
    BACKGROUND_SURFACE_HIGH = tmp(575).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = tmp(575).colors.BACKGROUND_SURFACE_HIGH;
  }
  ({ width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 });
  if (arg0 === tmp3.LIGHT) {
    BACKGROUND_SURFACE_HIGH2 = tmp(575).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = tmp(575).colors.BACKGROUND_SURFACE_HIGH;
  }
  ({ backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  let BottomSheetTitleHeader;
  let Text2;
  let VpEDJc;
  let button;
  let format;
  let guildId;
  let intl2;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj4;
  let obj8;
  let obj9;
  let role;
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  const tmp = importDefault;
  ({ guildId, role } = arg0);
  let tmp3 = closure_11(useThemeDefault());
  dependencyMap = tmp3;
  let tmp4 = require;
  let obj = useHasEnhancedRoleColors;
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  let tmp6 = useGuildSettingsRoleExampleMessage2;
  const useGuildSettingsRoleExampleMessage = tmp6.useGuildSettingsRoleExampleMessage;
  let intl = intl6.intl;
  let message = useGuildSettingsRoleExampleMessage(intl.string(intl6.t.Mi9Kbe));
  const rowGenerator = new RowGeneratorDefault();
  let obj2 = { header: closure_9(BottomSheetTitleHeader, obj3), children: closure_10(message, obj4) };
  new RowGeneratorDefault();
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { title: intl2.string(intl6.t["9wVJRB"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl2 = intl6.intl;
  obj4 = { style: tmp3.container, children: items };
  items = [, ];
  const obj5 = {
    style: tmp3.stylesContainer,
    children: STYLE_CONFIGS.map((id) => {
      let intl;
      let items1;
      const items = [button.button, , ];
      let selected = id === id.id;
      const tmp3 = closure_1_10;
      const tmp4 = hasEnhancedRoleColorsForRole;
      if (selected) {
        selected = tmp5.selected;
      }
      items[1] = selected;
      let obj = {
        style: items,
        disabled: tmp,
        onPress() {
          importDefault(id.id);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
        children: items1
      };
      const tmp6 = !hasEnhancedRoleColorsForRole && id.id !== rowGenerator.SOLID && button.disabled;
      items[2] = tmp6;
      let obj2 = {
        style: tmp5.message,
        pointerEvents: "none",
        message,
        rowGenerator,
        modifyRow(message) {
          message.message.roleColor = undefined;
          const obj = EnhancedRoleColorUtils;
          const result = obj.extractColorStringsFromServerColors(id.colors);
          message = message.message;
          const obj2 = enhanced_role_colors_EnhancedRoleColorUtils;
          message.roleColors = obj2.processColorStrings(result);
          message.message.shouldShowRoleOnName = true;
          message.message.avatarURL = _modDef11324;
        }
      };
      items1 = [closure_1_9(require("ChatItem"), obj2), ];
      const obj3 = { style: button.text, variant: "text-sm/normal", children: intl.string(id.labelString) };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items1[1] = closure_1_9(Text, obj3);
      return tmp3(tmp4, obj, id.id);
    })
  };
  items[0] = closure_9(message, obj5);
  let tmp9Result = !hasEnhancedRoleColorsForRole;
  if (tmp9Result) {
    const obj6 = { style: tmp3.upsellContainer, children: items2 };
    const obj7 = { style: tmp3.upsellText, variant: "text-sm/semibold", children: format(VpEDJc, obj8) };
    let Text = Text_Text.Text;
    const intl3 = intl6.intl;
    format = intl3.format;
    obj8 = { magical: closure_9(Text2, obj9) };
    VpEDJc = _modDef2699.VpEDJc;
    obj9 = { gradientColors: items1, variant: "text-sm/semibold", children: intl4.string(_modDef2699["+/IHLl"]) };
    items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    Text2 = Text_Text.Text;
    intl4 = intl6.intl;
    items2 = [closure_9(Text, obj7), ];
    const obj10 = { style: tmp3.upsellText, variant: "text-sm/normal", children: intl5.string(_modDef2699.FJZeZF) };
    const Text3 = Text_Text.Text;
    intl5 = intl6.intl;
    items2[1] = closure_9(Text3, obj10);
    tmp9Result = tmp9(tmp10, obj6);
  }
  items[1] = tmp9Result;
  return closure_9(BottomSheet, obj2);
};
