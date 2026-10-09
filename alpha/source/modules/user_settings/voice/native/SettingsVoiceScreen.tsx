// Module ID: 15455
// Function ID: 15456
// Name: SettingsVoiceScreen
// Dependencies: [19, 17, 2012, 7974, 1085, 21, 2127, 5091, 558, 576, 4992, 4930, 11053, 11054, 1126, 6163, 6333, 11052, 5087, 11049, 10629, 14883, 2]

// Module 15455 (SettingsVoiceScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import FastImageDefault from "FastImage" /* 6163 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 11049 */;
import KrispLogo2 from "KrispLogo" /* 11052 */;
import SettingLayoutDefault from "SettingLayout" /* 14883 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2127 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let mediaEngine;

let c10;
let c9;
let metroImportAll;
function getVoiceSettings() {
  let BPbGq7;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj5;
  let obj6;
  let obj9;
  const obj = { label: intl.string(intl10.t.LKCupB), settings: items };
  intl = intl10.intl;
  items = [, , ];
  ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = MobileUserSettings);
  const items1 = [obj, , , , , , , , ];
  const obj2 = { label: intl2.string(intl10.t.UXxPGB), settings: items2, subLabel: intl3.format(intl10.t["V+B3FH"], obj3) };
  intl2 = intl10.intl;
  items2 = [, ];
  ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = MobileUserSettings);
  intl3 = intl10.intl;
  obj3 = { guideURL };
  items1[1] = obj2;
  const obj4 = { label: intl4.string(intl10.t.xbMc8r), settings: items3, subLabel: format(BPbGq7, obj5) };
  intl4 = intl10.intl;
  items3 = [MobileUserSettings.SOUNDBOARD_VOLUME];
  const intl5 = intl10.intl;
  format = intl5.format;
  obj5 = { helpCenterArticle: obj6.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
  BPbGq7 = intl10.t.BPbGq7;
  items1[2] = obj4;
  obj6 = HelpdeskUtils;
  const obj7 = { label: intl6.string(intl10.t.bNqkD9), settings: items4 };
  intl6 = intl10.intl;
  items4 = [MobileUserSettings.ANDROID_MOBILE_OVERLAY];
  items1[3] = obj7;
  const obj8 = { settings: items5, subLabel: React4(authStore, obj9) };
  items5 = [MobileUserSettings.NOISE_SUPPRESSION_KRISP];
  obj9 = { children: items6 };
  items6 = [metroImportAll(closure_14, {}), metroImportAll(closure_13, {})];
  items1[4] = obj8;
  const obj10 = { label: intl7.string(intl10.t.t8Qhib), settings: items7 };
  intl7 = intl10.intl;
  items7 = [MobileUserSettings.NOISE_SUPPRESSION];
  items1[5] = obj10;
  const obj11 = { label: intl8.string(intl10.t["6I6GUv"]), settings: items8 };
  intl8 = intl10.intl;
  items8 = [, , , ];
  ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = MobileUserSettings);
  items1[6] = obj11;
  const obj12 = { label: intl9.string(intl10.t.OBwCXF), settings: items9 };
  intl9 = intl10.intl;
  items9 = [MobileUserSettings.DISABLE_STREAM_PREVIEWS];
  items1[7] = obj12;
  const obj13 = { settings: items10 };
  items10 = [MobileUserSettings.VIDEO_BACKGROUND];
  items1[8] = obj13;
  return items1;
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const guideURL = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
let closure_12 = createStyles.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function KrispLogo() {
  let Text;
  let first;
  let intl3;
  let items;
  let krisp;
  let logo;
  let obj4;
  let tmp5Result;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_12();
  const tmp6 = useThemeDefault();
  const obj2 = shared;
  if (obj2.isThemeLight(tmp6)) {
    tmp5Result = tmp5(11053);
  } else {
    tmp5Result = tmp5(11054);
  }
  ({ krisp, logo } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl10.t.vFiCSx);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp5Result) {
    let tmp10;
    let tmp12;
    let tmp14;
    if (cResult[2] === tmp4.logo) {
      tmp10 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(intl10.t.hvVgAZ);
      cResult[4] = stringResult1;
      tmp12 = stringResult1;
    } else {
      tmp12 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { accessibilityRole: "link", accessibilityLabel: tmp12, onPress: KrispLogo2.handleKrispLinkPressed, children: metroImportAll(Text, obj4) };
      const LegacyPressable = tmp(6333).LegacyPressable;
      obj4 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl10.t.hvVgAZ) };
      Text = tmp(5087).Text;
      intl3 = tmp(1126).intl;
      const tmp16 = metroImportAll(LegacyPressable, obj3);
      cResult[5] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.krisp) {
      let tmp17;
      if (cResult[7] === tmp10) {
        tmp17 = cResult[8];
      }
      return tmp17;
    }
    const obj5 = { style: krisp, children: items };
    items = [tmp10, tmp14];
    const tmp20 = React4(View, obj5);
    cResult[6] = tmp4.krisp;
    cResult[7] = tmp10;
    cResult[8] = tmp20;
    tmp17 = tmp20;
  }
  const tmp11 = metroImportAll(FastImageDefault, { style: logo, source: tmp5Result, accessibilityLabel: first });
  cResult[1] = tmp5Result;
  cResult[2] = tmp4.logo;
  cResult[3] = tmp11;
  tmp10 = tmp11;
}) : (function KrispLogo() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  let tmp2Result;
  const tmp = closure_12();
  const tmp4 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp4)) {
    tmp2Result = tmp2(11053);
  } else {
    tmp2Result = tmp2(11054);
  }
  const obj2 = { style: tmp.krisp, children: items };
  const obj3 = { style: tmp.logo, source: tmp2Result, accessibilityLabel: intl.string(intl10.t.vFiCSx) };
  const tmp2Result2 = FastImageDefault;
  intl = tmp5(1126).intl;
  items = [metroImportAll(tmp2Result2, obj3), ];
  const obj4 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl10.t.hvVgAZ), onPress: KrispLogo2.handleKrispLinkPressed, children: metroImportAll(Text, obj5) };
  const LegacyPressable = tmp5(6333).LegacyPressable;
  intl2 = tmp5(1126).intl;
  obj5 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl10.t.hvVgAZ) };
  Text = tmp5(5087).Text;
  intl3 = tmp5(1126).intl;
  items[1] = metroImportAll(LegacyPressable, obj4);
  return React4(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SystemProcessingSubLabel() {
  let intl;
  let obj4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = NoiseCancellationUtils;
  const noiseCancellationDeferredToSystem = obj2.useNoiseCancellationDeferredToSystem();
  if (cResult[0] !== noiseCancellationDeferredToSystem) {
    let tmp6 = null;
    if (noiseCancellationDeferredToSystem) {
      const obj3 = { variant: "text-sm/medium", children: intl.format(intl10.t.EUNgko, obj4) };
      const Text = tmp(5087).Text;
      intl = tmp(1126).intl;
      obj4 = {
        onSettingsClick() {
              mediaEngine = mediaEngine.getMediaEngine();
              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
            }
      };
      tmp6 = metroImportAll(Text, obj3);
    }
    cResult[0] = noiseCancellationDeferredToSystem;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function SystemProcessingSubLabel() {
  let intl;
  let obj3;
  let tmp3 = null;
  const obj = NoiseCancellationUtils;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    const obj2 = { variant: "text-sm/medium", children: intl.format(intl10.t.EUNgko, obj3) };
    const Text = tmp(5087).Text;
    intl = tmp(1126).intl;
    obj3 = {
      onSettingsClick() {
          mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    tmp3 = metroImportAll(Text, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsVoiceScreen() {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getVoiceSettings() };
    const createList = tmp(10629).createList;
    SettingBuilders;
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp11 = metroImportAll(SettingLayoutDefault, obj3);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  return tmp8;
}) : (function SettingsVoiceScreen() {
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: getVoiceSettings() };
    return obj.createList(obj2);
  }, []);
  return metroImportAll(SettingLayoutDefault, { node });
});
let result = size.fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default tmp3;
