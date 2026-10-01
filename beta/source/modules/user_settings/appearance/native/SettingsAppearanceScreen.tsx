// Module ID: 14809
// Function ID: 14810
// Name: SettingsAppearanceScreen
// Dependencies: [19, 4653, 1183, 1182, 14810, 7417, 1074, 21, 1485, 1364, 7288, 1115, 9579, 1248, 3361, 2111, 5298, 14811, 563, 11006, 14247, 2]

// Module 14809 (SettingsAppearanceScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import FontScaleStore from "FontScaleStore" /* 14810 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, gradientPreset;

let metroImportAll;
let metroImportDefault;
({ DEFAULT_FONT_SCALE_STORE_STATE: metroImportDefault, useFontScaleStore: metroImportAll } = FontScaleStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const memoResult = react.memo(() => {
  let closure_0;
  let constants2;
  let gradientPresetId;
  let nativeStackNavigation;
  let theme;
  const tmp = nativeStackNavigation(5298)(() => {
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
          nativeStackNavigation.setOptions({ headerRight: "Path" });
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
      intl = tmp(1115).intl;
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
    let items9;
    let obj8;
    let obj9;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(closure_0(dependencyMap[11]).t.Ksh3ik), settings: items };
    const createList = closure_0(dependencyMap[19]).createList;
    closure_0(dependencyMap[19]);
    intl = closure_0(dependencyMap[11]).intl;
    items = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr[0], APPEARANCE_THEME_PICKER: arr[1], LIGHT_MODE_THEME_PICKER: arr[2], DARK_MODE_THEME_PICKER: arr[3], SYNC_THEME: arr[4] } = constants);
    items1 = [obj2, , , , , , , , ];
    const obj3 = { settings: items2 };
    items2 = [constants.DEFAULT_GUILD_THEME_PREFERENCE];
    items1[1] = obj3;
    const obj4 = { label: intl2.string(closure_0(dependencyMap[11]).t.i19n5L), settings: items3 };
    intl2 = closure_0(dependencyMap[11]).intl;
    items3 = [, ];
    ({ ANDROID_FONT_SCALE: arr4[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr4[1] } = constants);
    items1[2] = obj4;
    const obj5 = { settings: items4 };
    items4 = [constants.DMS_MESSAGE_PREVIEWS];
    items1[3] = obj5;
    const obj6 = { settings: items5 };
    items5 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    items1[4] = obj6;
    const obj7 = { settings: items6, subLabel: format(GR2KOG, obj8) };
    items6 = [constants.FAVORITES_GUILD_TOGGLE];
    const intl3 = closure_0(dependencyMap[11]).intl;
    format = intl3.format;
    obj8 = { helpCenterLink: obj9.getArticleURL(constants2.FAVORITES_GUILD) };
    GR2KOG = nativeStackNavigation(dependencyMap[14]).GR2KOG;
    items1[5] = obj7;
    obj9 = nativeStackNavigation(dependencyMap[15]);
    const obj10 = { label: intl4.string(closure_0(dependencyMap[11]).t.lEde7i), settings: items7 };
    intl4 = closure_0(dependencyMap[11]).intl;
    items7 = [constants.DMS_HAPPENING_NOW_CARDS];
    items1[6] = obj10;
    const obj11 = { label: intl5.string(closure_0(dependencyMap[11]).t["5h0QOP"]), settings: items8 };
    intl5 = closure_0(dependencyMap[11]).intl;
    items8 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    items1[7] = obj11;
    const obj12 = { settings: items9 };
    items9 = [constants.TIMESTAMP_HOUR_CYCLE];
    items1[8] = obj12;
    return createList(obj);
  }, []);
  nativeStackNavigation(14247);
  return <tmp8 key={"" + theme + "-" + gradientPresetId} node={node} />;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;
