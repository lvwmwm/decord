// Module ID: 17080
// Function ID: 17081
// Name: QuestThemePicker
// Dependencies: [19, 17, 1194, 1193, 1241, 1083, 21, 5009, 575, 7320, 7345, 5245, 504, 1242, 5591, 2028, 16940, 5619, 12518, 1114, 2]

// Module 17080 (QuestThemePicker)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1241 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 16940 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, theme;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
class QuestThemePicker {
  constructor() {
    let allMobileThemes;
    let analyticsLocations;
    let intl;
    let items7;
    let items8;
    let memo;
    let obj8;
    let token;
    let token2;
    let tmp = closure_12();
    _require = tmp;
    let tmp2 = analyticsLocations(allMobileThemes[9]);
    analyticsLocations = tmp2(analyticsLocations(allMobileThemes[10]).USER_SETTINGS).analyticsLocations;
    let obj = require("MobileThemesUtils");
    allMobileThemes = obj.useAllMobileThemes();
    let obj2 = require("get initialized");
    let items = [token];
    const stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    let items1 = [memo];
    const obj3 = require("get initialized");
    const isSynced = obj3.useStateFromStoresObject(items1, () => {
      const obj = { isSynced: memo.shouldSync("appearance") };
      return obj;
    }).isSynced;
    const ref = stateFromStores.useRef(null);
    const items2 = [stateFromStores];
    const effect = stateFromStores.useEffect(() => {
      if (null == ref.current) {
        tmp.current = stateFromStores;
      }
    }, items2);
    const items3 = [allMobileThemes];
    memo = stateFromStores.useMemo(() => {
      const items = [, , ];
      ({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2] } = ThemeTypes);
      return allMobileThemes.filter((type) => {
        const hasItem = type.type === closure_2_0(allMobileThemes[13]).ClientThemeType.STANDARD_BACKGROUND_THEME && items.includes(type.theme) && "system" !== type.theme;
        return hasItem;
      });
    }, items3);
    const obj4 = require("useToken");
    token = obj4.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.LIGHT);
    const obj5 = require("useToken");
    const token1 = obj5.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.DARK);
    const obj6 = require("useToken");
    token2 = obj6.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.ONYX);
    const items4 = [memo, token, token1, token2];
    const memo1 = stateFromStores.useMemo(() => {
      let obj = { [closure_2_9.LIGHT]: token, [closure_2_9.DARK]: token1, [closure_2_9.ONYX]: token2 };
      return memo.map((theme) => {
        theme = theme.theme;
        obj = closure_2_0(allMobileThemes[15]);
        let str = "#000000";
        const tmp = obj;
        if (!obj.isNullOrEmpty(obj[theme])) {
          str = tmp[theme];
        }
        const obj2 = { theme: theme.theme, name: theme.getName(), color: str };
        return obj2;
      });
    }, items4);
    const items5 = [analyticsLocations, isSynced];
    const callback = stateFromStores.useCallback((arg0) => {
      closure_0 = arg0;
      const found = token1.find((theme) => theme.theme === closure_0);
      if (null != found) {
        const obj = UserSettingsAppearanceThemeUtils;
        obj.handleSaveTheme(found, analyticsLocations, isSynced);
      }
    }, items5);
    const items6 = [callback];
    const obj7 = { style: tmp.themeSection, children: closure_11(isSynced, obj8) };
    obj8 = { style: tmp.themeSelector, children: items7 };
    const callback1 = stateFromStores.useCallback(() => {
      if (null != ref.current) {
        callback(tmp.current);
      }
    }, items6);
    items7 = [
      memo1.map((backgroundColor) => {
        let items1;
        const items = [backgroundColor.themeCircle, { backgroundColor: backgroundColor.color }, ];
        let themeCircleSelected = stateFromStores === backgroundColor.theme;
        const obj = {
          style: backgroundColor.themeOption,
          onPress() {
            return callback(backgroundColor.theme);
          },
          children: items1
        };
        const tmp = closure_1_11;
        const tmp2 = ref;
        const tmp5 = isSynced;
        if (themeCircleSelected) {
          themeCircleSelected = tmp3.themeCircleSelected;
        }
        items[2] = themeCircleSelected;
        items1 = [callback(tmp5, { style: items }), ];
        const obj2 = { variant: "text-xs/medium", color: "text-muted", style: backgroundColor.themeLabel, children: backgroundColor.name };
        items1[1] = callback(backgroundColor(allMobileThemes[17]).Text, obj2);
        return tmp(tmp2, obj, backgroundColor.theme);
      }),

    ];
    const obj9 = { style: tmp.resetButton, onPress: callback1, children: items8 };
    items8 = [, ];
    const obj10 = { style: tmp.resetIcon, children: callback(require("RefreshIcon").RefreshIcon, { size: "sm" }) };
    items8[0] = callback(isSynced, obj10);
    const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: intl.string(require("intl").t.yBZMsQ) };
    const Text = require("Text/Text").Text;
    intl = require("intl").intl;
    items8[1] = callback(Text, obj11);
    items7[1] = closure_11(ref, obj9);
    return callback(isSynced, obj7);
  }
}
({ View: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
let closure_8 = ClientThemesConstants.LEGACY_STANDARD_BACKGROUND_THEMES;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { themeSection: obj2, themeSelector: obj3, themeOption: obj4, themeCircle: size, themeCircleSelected: obj5, themeLabel: { fontSize: 11 }, resetButton: obj6, resetIcon: size1 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
const authStore2 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };
