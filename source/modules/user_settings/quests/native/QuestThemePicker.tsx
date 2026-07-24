// Module ID: 14121
// Function ID: 108532
// Name: QuestThemePicker
// Dependencies: [31, 27, 1279, 1278, 3943, 482, 33, 4130, 689, 5462, 5482, 4063, 566, 3944, 3834, 1832, 14122, 4126, 13562, 1212, 2]

// Module 14121 (QuestThemePicker)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { LEGACY_STANDARD_BACKGROUND_THEMES as closure_8 } from "items1";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let require = arg1;
class QuestThemePicker {
  constructor() {
    tmp = c12();
    closure_0 = tmp;
    tmp2 = require("mergeLocations");
    analyticsLocations = tmp2(require("QUICK_SWITCHER").USER_SETTINGS).analyticsLocations;
    obj = require("getCustomThemesName");
    allMobileThemes = obj.useAllMobileThemes();
    closure_2 = allMobileThemes;
    obj2 = require("initialize");
    items = [];
    items[0] = useToken;
    stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    f108534 = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = c6;
    isSynced = obj3.useStateFromStoresObject(items1, () => ({ isSynced: memo.shouldSync("appearance") })).isSynced;
    c5 = f108534.useRef(null);
    items2 = [];
    items2[0] = stateFromStores;
    effect = f108534.useEffect(() => {
      if (null == ref.current) {
        ref.current = stateFromStores;
      }
    }, items2);
    items3 = [];
    items3[0] = allMobileThemes;
    memo = f108534.useMemo(() => {
      const items = [token2.LIGHT, token2.DARKER, token2.MIDNIGHT];
      return allMobileThemes.filter((type) => {
        let hasItem = type.type === items(allMobileThemes[13]).ClientThemeType.STANDARD_BACKGROUND_THEME;
        if (hasItem) {
          hasItem = items.includes(type.theme);
        }
        if (hasItem) {
          hasItem = "system" !== type.theme;
        }
        return hasItem;
      });
    }, items3);
    c6 = memo;
    obj4 = require("map");
    token = obj4.useToken(require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, MIDNIGHT.LIGHT);
    useToken = token;
    obj5 = require("map");
    token1 = obj5.useToken(require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, MIDNIGHT.DARKER);
    BACKGROUND_BASE_LOW = token1;
    obj6 = require("map");
    token2 = obj6.useToken(require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, MIDNIGHT.MIDNIGHT);
    MIDNIGHT = token2;
    items4 = [, , , ];
    items4[0] = memo;
    items4[1] = token;
    items4[2] = token1;
    items4[3] = token2;
    memo1 = f108534.useMemo(() => {
      let obj = { [outer1_9.LIGHT]: token, [outer1_9.DARKER]: token1, [outer1_9.MIDNIGHT]: token2 };
      return memo.map((theme) => {
        theme = theme.theme;
        obj = obj(allMobileThemes[15]);
        let str = "#000000";
        if (!obj.isNullOrEmpty(obj[theme])) {
          str = obj[theme];
        }
        obj = { theme: theme.theme, name: theme.getName(), color: str };
        return obj;
      });
    }, items4);
    items5 = [, ];
    items5[0] = analyticsLocations;
    items5[1] = isSynced;
    callback = f108534.useCallback((arg0) => {
      const found = token1.find((theme) => theme.theme === closure_0);
      if (null != found) {
        tmp(allMobileThemes[16]).handleSaveTheme(found, analyticsLocations, isSynced);
        const obj = tmp(allMobileThemes[16]);
      }
    }, items5);
    f108541 = callback;
    items6 = [];
    items6[0] = callback;
    obj = { style: tmp.themeSection };
    obj1 = { style: tmp.themeSelector };
    callback1 = f108534.useCallback(() => {
      if (null != ref.current) {
        callback(ref.current);
      }
    }, items6);
    items7 = [, ];
    items7[0] = memo1.map((backgroundColor) => {
      let tmp = backgroundColor;
      let obj = {
        style: tmp.themeOption,
        onPress() {
          return outer1_10(backgroundColor.theme);
        }
      };
      obj = {};
      const items = [tmp.themeCircle, { backgroundColor: backgroundColor.color }, ];
      let themeCircleSelected = stateFromStores === backgroundColor.theme;
      tmp = outer1_11;
      if (themeCircleSelected) {
        themeCircleSelected = tmp.themeCircleSelected;
      }
      items[2] = themeCircleSelected;
      obj.style = items;
      const items1 = [callback(isSynced, obj), ];
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: backgroundColor.name };
      items1[1] = callback(tmp(allMobileThemes[17]).Text, obj);
      obj.children = items1;
      return tmp(closure_5, obj, backgroundColor.theme);
    });
    obj2 = { style: tmp.resetButton, onPress: callback1 };
    obj3 = { style: tmp.resetIcon, children: f108541(require("RefreshIcon").RefreshIcon, { size: "sm" }) };
    items8 = [, ];
    items8[0] = f108541(isSynced, obj3);
    obj4 = { variant: "text-xs/medium", color: "text-muted" };
    obj4.style = tmp.themeLabel;
    intl = require("getSystemLocale").intl;
    obj4.children = intl.string(require("getSystemLocale").t.yBZMsQ);
    items8[1] = f108541(require("Text").Text, obj4);
    obj2.children = items8;
    items7[1] = jsxs(c5, obj2);
    obj1.children = items7;
    obj.children = jsxs(isSynced, obj1);
    return f108541(isSynced, obj);
  }
}
({ View: closure_4, TouchableOpacity: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.themeSection = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.themeSelector = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj1 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.themeOption = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 2, borderColor: "transparent" };
_createForOfIteratorHelperLoose.themeCircle = obj3;
let obj2 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.themeCircleSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.themeLabel = { fontSize: 11 };
const obj4 = { borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.resetButton = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj6 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.resetIcon = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };
