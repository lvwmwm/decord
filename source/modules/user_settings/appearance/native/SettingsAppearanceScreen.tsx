// Module ID: 14151
// Function ID: 108886
// Dependencies: [31, 3942, 1279, 1278, 14152, 7662, 33, 1456, 477, 9122, 1212, 9890, 682, 4559, 14153, 624, 10095, 13550, 2]

// Module 14151
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import customFontScale from "customFontScale";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ DEFAULT_FONT_SCALE_STORE_STATE: closure_7, useFontScaleStore: closure_8 } = customFontScale);
const memoResult = importAllResult.memo(() => {
  let gradientPresetId;
  let theme;
  importDefault(4559)(() => {
    if (outer1_5.shouldSync("appearance")) {
      const userCustomThemes = outer1_0(outer1_2[14]).fetchUserCustomThemes();
      const obj = outer1_0(outer1_2[14]);
    }
  });
  let items = [closure_6, _isNativeReflectConstruct];
  const stateFromStoresObject = require(624) /* defaultAreStatesEqual */.useStateFromStoresObject(items, () => {
    const obj = { theme: outer1_6.theme };
    const gradientPreset = outer1_4.gradientPreset;
    let id;
    if (null != gradientPreset) {
      id = gradientPreset.id;
    }
    let str = "";
    if (null != id) {
      str = id;
    }
    obj.gradientPresetId = str;
    return obj;
  });
  ({ theme, gradientPresetId } = stateFromStoresObject);
  (function useFontScalingData() {
    const tmp = outer1_8();
    let closure_0 = tmp;
    const nativeStackNavigation = outer1_0(outer1_2[7]).useNativeStackNavigation();
    const items = [nativeStackNavigation, , , , ];
    ({ fontScale: arr[1], isClassicChatFontScaleEnabled: arr[2], persistedFontScale: arr[3], persistedIsClassicChatFontScaleEnabled: arr[4] } = tmp);
    const effect = outer1_3.useEffect(() => {
      let obj = outer2_0(outer2_2[8]);
      if (obj.isAndroid()) {
        if (tmp.persistedFontScale === tmp.fontScale) {
          if (tmp.persistedIsClassicChatFontScaleEnabled === tmp.isClassicChatFontScaleEnabled) {
            obj = { headerRight: undefined };
            nativeStackNavigation.setOptions(obj);
          }
        }
        obj = {};
        const intl = outer2_0(outer2_2[10]).intl;
        obj.headerRight = outer2_0(outer2_2[9]).getRenderHeaderTextButton(intl.string(outer2_0(outer2_2[10]).t["R3BPH+"]), () => outer3_1(outer3_2[11]).setCustomFontScale(outer1_0.fontScale, outer1_0.isClassicChatFontScaleEnabled));
        nativeStackNavigation.setOptions(obj);
        const obj4 = outer2_0(outer2_2[9]);
      }
    }, items);
    const effect1 = outer1_3.useEffect(() => () => {
      outer3_0(outer3_2[12]).batchUpdates(() => outer4_8.setState(outer4_7));
    }, []);
  })();
  const node = importAllResult.useMemo(() => {
    let obj = outer1_0(outer1_2[16]);
    obj = {};
    const items = [outer1_9.MOBILE_VISUAL_REFRESH];
    const items1 = [{ settings: items }, , , , , , , , ];
    obj = {};
    const intl = outer1_0(outer1_2[10]).intl;
    obj.label = intl.string(outer1_0(outer1_2[10]).t.Ksh3ik);
    const items2 = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr3[0], APPEARANCE_THEME_PICKER: arr3[1], LIGHT_MODE_THEME_PICKER: arr3[2], DARK_MODE_THEME_PICKER: arr3[3], SYNC_THEME: arr3[4] } = outer1_9);
    obj.settings = items2;
    items1[1] = obj;
    const items3 = [outer1_9.DEFAULT_GUILD_THEME_PREFERENCE];
    items1[2] = { settings: items3 };
    const obj1 = {};
    const intl2 = outer1_0(outer1_2[10]).intl;
    obj1.label = intl2.string(outer1_0(outer1_2[10]).t.i19n5L);
    const items4 = [, ];
    ({ ANDROID_FONT_SCALE: arr5[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr5[1] } = outer1_9);
    obj1.settings = items4;
    items1[3] = obj1;
    const items5 = [outer1_9.DMS_MESSAGE_PREVIEWS];
    items1[4] = { settings: items5 };
    const items6 = [outer1_9.GAME_MENTIONS_AUTOCOMPLETE];
    items1[5] = { settings: items6 };
    const obj2 = {};
    const intl3 = outer1_0(outer1_2[10]).intl;
    obj2.label = intl3.string(outer1_0(outer1_2[10]).t.lEde7i);
    const items7 = [outer1_9.DMS_HAPPENING_NOW_CARDS];
    obj2.settings = items7;
    items1[6] = obj2;
    const obj3 = {};
    const intl4 = outer1_0(outer1_2[10]).intl;
    obj3.label = intl4.string(outer1_0(outer1_2[10]).t["5h0QOP"]);
    const items8 = [outer1_9.EXACT_SEARCH_RESULT_COUNTS];
    obj3.settings = items8;
    items1[7] = obj3;
    const items9 = [outer1_9.TIMESTAMP_HOUR_CYCLE];
    items1[8] = { settings: items9 };
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  let obj = require(624) /* defaultAreStatesEqual */;
  return jsx(importDefault(13550), { node }, "" + theme + "-" + gradientPresetId);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;
