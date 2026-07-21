// Module ID: 13947
// Function ID: 105981
// Name: QuestThemePicker
// Dependencies: []

// Module 13947 (QuestThemePicker)
class QuestThemePicker {
  constructor() {
    tmp = closure_12();
    arg1 = tmp;
    tmp2 = importDefault(dependencyMap[9]);
    analyticsLocations = tmp2(importDefault(dependencyMap[10]).USER_SETTINGS).analyticsLocations;
    importDefault = analyticsLocations;
    obj = arg1(dependencyMap[11]);
    allMobileThemes = obj.useAllMobileThemes();
    dependencyMap = allMobileThemes;
    obj2 = arg1(dependencyMap[12]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    f105983 = stateFromStores;
    obj3 = arg1(dependencyMap[12]);
    items1 = [];
    items1[0] = closure_6;
    isSynced = obj3.useStateFromStoresObject(items1, () => ({ isSynced: memo.shouldSync("appearance") })).isSynced;
    View = isSynced;
    closure_5 = f105983.useRef(null);
    items2 = [];
    items2[0] = stateFromStores;
    effect = f105983.useEffect(() => {
      if (null == ref.current) {
        ref.current = stateFromStores;
      }
    }, items2);
    items3 = [];
    items3[0] = allMobileThemes;
    memo = f105983.useMemo(() => {
      const items = [token2.LIGHT, token2.DARKER, token2.MIDNIGHT];
      return allMobileThemes.filter((type) => {
        let hasItem = type.type === items(closure_2[13]).ClientThemeType.STANDARD_BACKGROUND_THEME;
        if (hasItem) {
          hasItem = items.includes(type.theme);
        }
        if (hasItem) {
          hasItem = "system" !== type.theme;
        }
        return hasItem;
      });
    }, items3);
    closure_6 = memo;
    obj4 = arg1(dependencyMap[14]);
    token = obj4.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.LIGHT);
    closure_7 = token;
    obj5 = arg1(dependencyMap[14]);
    token1 = obj5.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.DARKER);
    closure_8 = token1;
    obj6 = arg1(dependencyMap[14]);
    token2 = obj6.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.MIDNIGHT);
    ThemeTypes = token2;
    items4 = [, , , ];
    items4[0] = memo;
    items4[1] = token;
    items4[2] = token1;
    items4[3] = token2;
    memo1 = f105983.useMemo(() => memo.map((theme) => {
      theme = theme.theme;
      let obj = obj(closure_2[15]);
      let str = "#000000";
      if (!obj.isNullOrEmpty(obj[theme])) {
        str = obj[theme];
      }
      obj = { theme: theme.theme, name: theme.getName(), color: str };
      return obj;
    }), items4);
    items5 = [, ];
    items5[0] = analyticsLocations;
    items5[1] = isSynced;
    callback = f105983.useCallback((arg0) => {
      const found = token1.find((theme) => theme.theme === theme);
      if (null != found) {
        tmp(allMobileThemes[16]).handleSaveTheme(found, analyticsLocations, isSynced);
        const obj = tmp(allMobileThemes[16]);
      }
    }, items5);
    f105990 = callback;
    items6 = [];
    items6[0] = callback;
    obj = { style: tmp.themeSection };
    obj1 = { style: tmp.themeSelector };
    callback1 = f105983.useCallback(() => {
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
          return callback(arg0.theme);
        }
      };
      obj = {};
      const items = [tmp.themeCircle, { backgroundColor: backgroundColor.color }, ];
      let themeCircleSelected = stateFromStores === backgroundColor.theme;
      tmp = closure_11;
      if (themeCircleSelected) {
        themeCircleSelected = tmp.themeCircleSelected;
      }
      items[2] = themeCircleSelected;
      obj.style = items;
      const items1 = [callback(isSynced, obj), ];
      obj = { style: tmp.themeLabel, children: backgroundColor.name };
      items1[1] = callback(tmp(allMobileThemes[17]).Text, obj);
      obj.children = items1;
      return tmp(closure_5, obj, backgroundColor.theme);
    });
    obj2 = { style: tmp.resetButton, onPress: callback1 };
    obj3 = { style: tmp.resetIcon, children: f105990(arg1(dependencyMap[18]).RefreshIcon, { size: "sm" }) };
    items8 = [, ];
    items8[0] = f105990(View, obj3);
    obj4 = { style: tmp.themeLabel };
    intl = arg1(dependencyMap[19]).intl;
    obj4.children = intl.string(arg1(dependencyMap[19]).t.yBZMsQ);
    items8[1] = f105990(arg1(dependencyMap[17]).Text, obj4);
    obj2.children = items8;
    items7[1] = jsxs(closure_5, obj2);
    obj1.children = items7;
    obj.children = jsxs(View, obj1);
    return f105990(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, TouchableOpacity: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).LEGACY_STANDARD_BACKGROUND_THEMES;
const ThemeTypes = arg1(dependencyMap[5]).ThemeTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[8]).space.PX_8 };
obj.themeSection = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.themeSelector = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12 };
const obj1 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12 };
obj.themeOption = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_4 };
const obj2 = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_4 };
obj.themeCircle = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const obj3 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.themeCircleSelected = { borderColor: importDefault(dependencyMap[8]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj.themeLabel = { fontSize: 11 };
const obj4 = { borderColor: importDefault(dependencyMap[8]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj.resetButton = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_4 };
const obj6 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.resetIcon = obj6;
let closure_12 = obj.createStyles(obj);
const obj5 = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_4 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };
