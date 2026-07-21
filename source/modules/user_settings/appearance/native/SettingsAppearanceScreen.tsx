// Module ID: 14030
// Function ID: 106690
// Dependencies: []

// Module 14030
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ DEFAULT_FONT_SCALE_STORE_STATE: closure_7, useFontScaleStore: closure_8 } = arg1(dependencyMap[4]));
const MobileSetting = arg1(dependencyMap[5]).MobileSetting;
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(() => {
  let gradientPresetId;
  let theme;
  importDefault(dependencyMap[13])(() => {
    if (closure_5.shouldSync("appearance")) {
      const userCustomThemes = callback(closure_2[14]).fetchUserCustomThemes();
      const obj = callback(closure_2[14]);
    }
  });
  const items = [closure_6, closure_4];
  const stateFromStoresObject = arg1(dependencyMap[15]).useStateFromStoresObject(items, () => {
    const obj = { theme: theme.theme };
    const gradientPreset = gradientPreset.gradientPreset;
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
  function useFontScalingData() {
    const tmp = callback2();
    const nativeStackNavigation = tmp(closure_2[7]).useNativeStackNavigation();
    const items = [nativeStackNavigation, , , , ];
    ({ fontScale: arr[1], isClassicChatFontScaleEnabled: arr[2], persistedFontScale: arr[3], persistedIsClassicChatFontScaleEnabled: arr[4] } = tmp);
    const effect = React.useEffect(() => {
      let obj = tmp(closure_2[8]);
      if (obj.isAndroid()) {
        if (tmp.persistedFontScale === tmp.fontScale) {
          if (tmp.persistedIsClassicChatFontScaleEnabled === tmp.isClassicChatFontScaleEnabled) {
            obj = { headerRight: undefined };
            nativeStackNavigation.setOptions(obj);
          }
        }
        obj = {};
        const intl = tmp(closure_2[10]).intl;
        obj.headerRight = tmp(closure_2[9]).getRenderHeaderTextButton(intl.string(tmp(closure_2[10]).t.R3BPH+), () => callback(closure_2[11]).setCustomFontScale(closure_0.fontScale, closure_0.isClassicChatFontScaleEnabled));
        nativeStackNavigation.setOptions(obj);
        const obj4 = tmp(closure_2[9]);
      }
    }, items);
    const effect1 = React.useEffect(() => () => {
      callback(closure_2[12]).batchUpdates(() => state.setState(closure_7));
    }, []);
  }();
  const node = importAllResult.useMemo(() => {
    let obj = callback(closure_2[16]);
    obj = {};
    const items = [constants.MOBILE_VISUAL_REFRESH];
    const items1 = [{ settings: items }, , , , , , , ];
    obj = {};
    const intl = callback(closure_2[10]).intl;
    obj.label = intl.string(callback(closure_2[10]).t.Ksh3ik);
    const items2 = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr3[0], APPEARANCE_THEME_PICKER: arr3[1], LIGHT_MODE_THEME_PICKER: arr3[2], DARK_MODE_THEME_PICKER: arr3[3], SYNC_THEME: arr3[4] } = constants);
    obj.settings = items2;
    items1[1] = obj;
    const items3 = [constants.DEFAULT_GUILD_THEME_PREFERENCE];
    items1[2] = { settings: items3 };
    const obj1 = {};
    const intl2 = callback(closure_2[10]).intl;
    obj1.label = intl2.string(callback(closure_2[10]).t.i19n5L);
    const items4 = [, ];
    ({ ANDROID_FONT_SCALE: arr5[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr5[1] } = constants);
    obj1.settings = items4;
    items1[3] = obj1;
    const items5 = [constants.DMS_MESSAGE_PREVIEWS];
    items1[4] = { settings: items5 };
    const obj2 = {};
    const intl3 = callback(closure_2[10]).intl;
    obj2.label = intl3.string(callback(closure_2[10]).t.lEde7i);
    const items6 = [constants.DMS_HAPPENING_NOW_CARDS];
    obj2.settings = items6;
    items1[5] = obj2;
    const obj3 = {};
    const intl4 = callback(closure_2[10]).intl;
    obj3.label = intl4.string(callback(closure_2[10]).t.5h0QOP);
    const items7 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    obj3.settings = items7;
    items1[6] = obj3;
    const items8 = [constants.TIMESTAMP_HOUR_CYCLE];
    items1[7] = { settings: items8 };
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  const obj = arg1(dependencyMap[15]);
  return jsx(importDefault(dependencyMap[17]), { node }, "" + theme + "-" + gradientPresetId);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;
