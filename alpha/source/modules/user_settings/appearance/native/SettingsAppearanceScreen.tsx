// Module ID: 16703
// Function ID: 16704
// Name: SettingsAppearanceScreen
// Dependencies: [19, 4941, 1192, 1191, 16704, 9414, 1071, 21, 1500, 1378, 8863, 1112, 5999, 1262, 3804, 2187, 5478, 16705, 563, 11815, 16018, 2]

// Module 16703 (SettingsAppearanceScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl6 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import HeaderShared from "HeaderShared" /* 8863 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4941 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1192 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import FontScaleStore from "FontScaleStore" /* 16704 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, gradientPreset;

let metroImportAll;
let metroImportDefault;
({ DEFAULT_FONT_SCALE_STORE_STATE: metroImportDefault, useFontScaleStore: metroImportAll } = FontScaleStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const memoResult = react.memo(function SettingsAppearanceScreen() {
  let closure_0;
  let constants2;
  let gradientPresetId;
  let nativeStackNavigation;
  let theme;
  const tmp = nativeStackNavigation(5478)(() => {
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const obj = closure_0(dependencyMap[17]);
      const userCustomThemes = obj.fetchUserCustomThemes();
    }
  });
  let obj = require("useStateFromStores");
  let items = [ThemeStore, ClientThemesBackgroundStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let str;
    gradientPreset = gradientPreset.gradientPreset;
    const obj = { theme: theme.theme, gradientPresetId: str };
    str = undefined;
    if (gradientPreset != null) {
      str = gradientPreset.id;
    }
    if (str == null) {
      str = "";
    }
    return obj;
  });
  ({ theme, gradientPresetId } = stateFromStoresObject);
  const tmp3 = closure_8();
  _require = tmp3;
  let obj2 = require("useNavigation");
  nativeStackNavigation = obj2.useNativeStackNavigation();
  let items1 = [nativeStackNavigation, , , , ];
  ({ fontScale: arr2[1], isClassicChatFontScaleEnabled: arr2[2], persistedFontScale: arr2[3], persistedIsClassicChatFontScaleEnabled: arr2[4] } = tmp3);
  const effect = react.useEffect(() => {
    let getRenderHeaderTextButton;
    let intl;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "Array" });
        }
      }
      const setOptions = nativeStackNavigation.setOptions;
      const obj2 = {
        headerRight: getRenderHeaderTextButton(intl.string(intl6.t["R3BPH+"]), () => {
            const obj = nativeStackNavigation(dependencyMap[12]);
            return obj.setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled);
          })
      };
      getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      HeaderShared;
      intl = tmp(1112).intl;
      setOptions(obj2);
    }
  }, items1);
  const effect1 = react.useEffect(() => () => {
    let state;
    const obj = closure_1_0(closure_1_2[13]);
    obj.batchUpdates(() => state.setState(closure_1_7));
  }, []);
  const node = react.useMemo(() => {
    let GR2KOG;
    let format;
    let intl;
    let intl2;
    let intl4;
    let intl5;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let obj7;
    let obj8;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(closure_0(dependencyMap[11]).t.Ksh3ik), settings: items };
    const createList = closure_0(dependencyMap[19]).createList;
    closure_0(dependencyMap[19]);
    intl = closure_0(dependencyMap[11]).intl;
    items = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr[0], APPEARANCE_THEME_PICKER: arr[1], LIGHT_MODE_THEME_PICKER: arr[2], DARK_MODE_THEME_PICKER: arr[3], SYNC_THEME: arr[4] } = constants);
    items1 = [obj2, , , , , , , ];
    const obj3 = { label: intl2.string(closure_0(dependencyMap[11]).t.i19n5L), settings: items2 };
    intl2 = closure_0(dependencyMap[11]).intl;
    items2 = [, ];
    ({ ANDROID_FONT_SCALE: arr3[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr3[1] } = constants);
    items1[1] = obj3;
    const obj4 = { settings: items3 };
    items3 = [constants.DMS_MESSAGE_PREVIEWS];
    items1[2] = obj4;
    const obj5 = { settings: items4 };
    items4 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    items1[3] = obj5;
    const obj6 = { settings: items5, subLabel: format(GR2KOG, obj7) };
    items5 = [constants.FAVORITES_GUILD_TOGGLE];
    const intl3 = closure_0(dependencyMap[11]).intl;
    format = intl3.format;
    obj7 = { helpCenterLink: obj8.getArticleURL(constants2.FAVORITES_GUILD) };
    GR2KOG = nativeStackNavigation(dependencyMap[14]).GR2KOG;
    items1[4] = obj6;
    obj8 = nativeStackNavigation(dependencyMap[15]);
    const obj9 = { label: intl4.string(closure_0(dependencyMap[11]).t.lEde7i), settings: items6 };
    intl4 = closure_0(dependencyMap[11]).intl;
    items6 = [constants.DMS_HAPPENING_NOW_CARDS];
    items1[5] = obj9;
    const obj10 = { label: intl5.string(closure_0(dependencyMap[11]).t["5h0QOP"]), settings: items7 };
    intl5 = closure_0(dependencyMap[11]).intl;
    items7 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    items1[6] = obj10;
    const obj11 = { settings: items8 };
    items8 = [constants.TIMESTAMP_HOUR_CYCLE];
    items1[7] = obj11;
    return createList(obj);
  }, []);
  nativeStackNavigation(16018);
  return <tmp8 key={"" + theme + "-" + gradientPresetId} node={node} />;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;
