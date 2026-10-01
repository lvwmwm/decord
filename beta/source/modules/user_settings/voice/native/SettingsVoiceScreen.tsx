// Module ID: 14792
// Function ID: 14793
// Name: SettingsVoiceScreen
// Dependencies: [19, 17, 1993, 7417, 1074, 21, 2111, 4836, 4767, 4685, 9454, 9455, 1115, 6073, 9453, 4832, 9450, 11006, 14247, 2]
// Exports: default

// Module 14792 (SettingsVoiceScreen)
import Constants from "Constants" /* 1074 */;
import intl10 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9450 */;
import KrispLogo2 from "KrispLogo" /* 9453 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2111 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let mediaEngine;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
function KrispLogo() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  let tmp2Result;
  const tmp = closure_13();
  const tmp4 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp4)) {
    tmp2Result = tmp2(9454);
  } else {
    tmp2Result = tmp2(9455);
  }
  const obj2 = { style: tmp.krisp, children: items };
  const obj3 = { style: tmp.logo, source: tmp2Result, accessibilityLabel: intl.string(intl10.t.vFiCSx) };
  intl = tmp5(1115).intl;
  items = [React4(hasOwnProperty, obj3), ];
  const obj4 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl10.t.hvVgAZ), onPress: KrispLogo2.handleKrispLinkPressed, children: React4(Text, obj5) };
  const LegacyPressable = tmp5(6073).LegacyPressable;
  intl2 = tmp5(1115).intl;
  obj5 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl10.t.hvVgAZ) };
  Text = tmp5(4832).Text;
  intl3 = tmp5(1115).intl;
  items[1] = React4(LegacyPressable, obj4);
  return authStore(React3, obj2);
}
function SystemProcessingSubLabel() {
  let intl;
  let obj3;
  let tmp3 = null;
  const obj = NoiseCancellationUtils;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    const obj2 = { variant: "text-sm/medium", children: intl.format(intl10.t.EUNgko, obj3) };
    const Text = tmp(4832).Text;
    intl = tmp(1115).intl;
    obj3 = {
      onSettingsClick() {
          mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    tmp3 = React4(Text, obj2);
  }
  return tmp3;
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
let closure_13 = createStyles.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
let result = size.fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default function SettingsVoiceScreen() {
  let constants2;
  let guideURL;
  const node = react.useMemo(() => {
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
    let items1;
    let items10;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    let obj10;
    let obj4;
    let obj6;
    let obj7;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(intl10.t.LKCupB), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl10.intl;
    items = [, , ];
    ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = constants);
    items1 = [obj2, , , , , , , , ];
    const obj3 = { label: intl2.string(intl10.t.UXxPGB), settings: items2, subLabel: intl3.format(intl10.t["V+B3FH"], obj4) };
    intl2 = intl10.intl;
    items2 = [, ];
    ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = constants);
    intl3 = intl10.intl;
    obj4 = { guideURL };
    items1[1] = obj3;
    const obj5 = { label: intl4.string(intl10.t.xbMc8r), settings: items3, subLabel: format(BPbGq7, obj6) };
    intl4 = intl10.intl;
    items3 = [constants.SOUNDBOARD_VOLUME];
    const intl5 = intl10.intl;
    format = intl5.format;
    obj6 = { helpCenterArticle: obj7.getArticleURL(constants2.SOUNDBOARD) };
    BPbGq7 = intl10.t.BPbGq7;
    items1[2] = obj5;
    obj7 = HelpdeskUtils;
    const obj8 = { label: intl6.string(intl10.t.bNqkD9), settings: items4 };
    intl6 = intl10.intl;
    items4 = [constants.ANDROID_MOBILE_OVERLAY];
    items1[3] = obj8;
    const obj9 = { settings: items5, subLabel: closure_1_10(closure_1_11, obj10) };
    items5 = [constants.NOISE_SUPPRESSION_KRISP];
    obj10 = { children: items6 };
    items6 = [closure_1_9(SystemProcessingSubLabel, {}), closure_1_9(KrispLogo, {})];
    items1[4] = obj9;
    const obj11 = { label: intl7.string(intl10.t.t8Qhib), settings: items7 };
    intl7 = intl10.intl;
    items7 = [constants.NOISE_SUPPRESSION];
    items1[5] = obj11;
    const obj12 = { label: intl8.string(intl10.t["6I6GUv"]), settings: items8 };
    intl8 = intl10.intl;
    items8 = [, , , ];
    ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = constants);
    items1[6] = obj12;
    const obj13 = { label: intl9.string(intl10.t.OBwCXF), settings: items9 };
    intl9 = intl10.intl;
    items9 = [constants.DISABLE_STREAM_PREVIEWS];
    items1[7] = obj13;
    const obj14 = { settings: items10 };
    items10 = [constants.VIDEO_BACKGROUND];
    items1[8] = obj14;
    return createList(obj);
  }, []);
  return React4(SettingLayoutDefault, { node });
};
