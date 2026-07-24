// Module ID: 14186
// Function ID: 109119
// Name: KrispLogo
// Dependencies: [31, 27, 4177, 7751, 653, 33, 1920, 4130, 4066, 3976, 10757, 10758, 1212, 5217, 10756, 4126, 10753, 10127, 13601, 2]
// Exports: default

// Module 14186 (KrispLogo)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "wrapURL";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
function KrispLogo() {
  const tmp = callback3();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  if (obj.isThemeLight(tmp2)) {
    let tmp3Result = tmp3(10757);
  } else {
    tmp3Result = tmp3(10758);
  }
  obj = { style: tmp.krisp };
  obj = { style: tmp.logo, source: tmp3Result };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.vFiCSx);
  const items = [callback(closure_5, obj), ];
  const obj1 = { accessibilityRole: "link" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj1.onPress = require(10756) /* handleKrispLinkPressed */.handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl3.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj1.children = callback(require(4126) /* Text */.Text, obj2);
  items[1] = callback(require(5217) /* Directions */.Pressable, obj1);
  obj.children = items;
  return callback2(closure_4, obj);
}
function SystemProcessingSubLabel() {
  let obj = require(10753) /* getNoiseCancellationDeferredToSystem */;
  let tmp = null;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    obj = { variant: "text-sm/medium" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {
      onSettingsClick() {
          const mediaEngine = outer1_6.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    obj.children = intl.format(require(1212) /* getSystemLocale */.t.EUNgko, obj);
    tmp = callback(require(4126) /* Text */.Text, obj);
  }
  return tmp;
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = "" + require("wrapURL").getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default function SettingsVoiceScreen() {
  const node = React.useMemo(() => {
    let obj = outer1_0(outer1_2[17]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[12]).intl;
    obj.label = intl.string(outer1_0(outer1_2[12]).t.LKCupB);
    const items = [, , ];
    ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = outer1_7);
    obj.settings = items;
    const items1 = [obj, , , , , , , ];
    const obj1 = {};
    const intl2 = outer1_0(outer1_2[12]).intl;
    obj1.label = intl2.string(outer1_0(outer1_2[12]).t.UXxPGB);
    const items2 = [, ];
    ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = outer1_7);
    obj1.settings = items2;
    const intl3 = outer1_0(outer1_2[12]).intl;
    obj1.subLabel = intl3.format(outer1_0(outer1_2[12]).t["V+B3FH"], { guideURL: outer1_12 });
    items1[1] = obj1;
    const obj3 = {};
    const intl4 = outer1_0(outer1_2[12]).intl;
    obj3.label = intl4.string(outer1_0(outer1_2[12]).t.xbMc8r);
    const items3 = [outer1_7.SOUNDBOARD_VOLUME];
    obj3.settings = items3;
    const intl5 = outer1_0(outer1_2[12]).intl;
    const obj4 = {};
    let obj7 = outer1_1(outer1_2[6]);
    obj4.helpCenterArticle = obj7.getArticleURL(outer1_8.SOUNDBOARD);
    obj3.subLabel = intl5.format(outer1_0(outer1_2[12]).t.BPbGq7, obj4);
    items1[2] = obj3;
    const obj5 = {};
    const intl6 = outer1_0(outer1_2[12]).intl;
    obj5.label = intl6.string(outer1_0(outer1_2[12]).t.bNqkD9);
    const items4 = [outer1_7.ANDROID_MOBILE_OVERLAY];
    obj5.settings = items4;
    items1[3] = obj5;
    const obj6 = { settings: items5 };
    items5 = [outer1_7.NOISE_SUPPRESSION_KRISP];
    obj7 = {};
    const items6 = [outer1_9(outer1_15, {}), outer1_9(outer1_14, {})];
    obj7.children = items6;
    obj6.subLabel = outer1_10(outer1_11, obj7);
    items1[4] = obj6;
    const obj8 = {};
    const intl7 = outer1_0(outer1_2[12]).intl;
    obj8.label = intl7.string(outer1_0(outer1_2[12]).t.t8Qhib);
    const items7 = [outer1_7.NOISE_SUPPRESSION];
    obj8.settings = items7;
    items1[5] = obj8;
    const obj9 = {};
    const intl8 = outer1_0(outer1_2[12]).intl;
    obj9.label = intl8.string(outer1_0(outer1_2[12]).t["6I6GUv"]);
    const items8 = [, , , ];
    ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = outer1_7);
    obj9.settings = items8;
    items1[6] = obj9;
    const obj10 = {};
    const intl9 = outer1_0(outer1_2[12]).intl;
    obj10.label = intl9.string(outer1_0(outer1_2[12]).t.OBwCXF);
    const items9 = [outer1_7.DISABLE_STREAM_PREVIEWS];
    obj10.settings = items9;
    items1[7] = obj10;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return callback(importDefault(13601), { node });
};
