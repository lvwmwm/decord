// Module ID: 14005
// Function ID: 106545
// Name: KrispLogo
// Dependencies: []
// Exports: default

// Module 14005 (KrispLogo)
function KrispLogo() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  if (obj.isThemeLight(tmp2)) {
    let tmp3Result = tmp3(tmp4[10]);
  } else {
    tmp3Result = tmp3(tmp4[11]);
  }
  obj = { style: tmp.krisp };
  obj = { style: tmp.logo, source: tmp3Result };
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.vFiCSx);
  const items = [callback(closure_5, obj), ];
  const obj1 = { accessibilityRole: "link" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[12]).t.hvVgAZ);
  obj1.onPress = arg1(dependencyMap[14]).handleKrispLinkPressed;
  const obj2 = {};
  const intl3 = arg1(dependencyMap[12]).intl;
  obj2.children = intl3.string(arg1(dependencyMap[12]).t.hvVgAZ);
  obj1.children = callback(arg1(dependencyMap[15]).Text, obj2);
  items[1] = callback(arg1(dependencyMap[13]).Pressable, obj1);
  obj.children = items;
  return callback2(closure_4, obj);
}
function SystemProcessingSubLabel() {
  let obj = arg1(dependencyMap[16]);
  let tmp = null;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    obj = { variant: "text-sm/medium" };
    const intl = arg1(dependencyMap[12]).intl;
    obj = {
      onSettingsClick() {
          const mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    obj.children = intl.format(arg1(dependencyMap[12]).t.EUNgko, obj);
    tmp = callback(arg1(dependencyMap[15]).Text, obj);
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const MobileSetting = arg1(dependencyMap[3]).MobileSetting;
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = "" + importDefault(dependencyMap[6]).getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ krisp: { width: false, height: false, borderRadius: false }, logo: {} });
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default function SettingsVoiceScreen() {
  const node = React.useMemo(() => {
    let obj = callback(closure_2[17]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[12]).intl;
    obj.label = intl.string(callback(closure_2[12]).t.LKCupB);
    const items = [, , ];
    ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = constants);
    obj.settings = items;
    const items1 = [obj, , , , , , , ];
    const obj1 = {};
    const intl2 = callback(closure_2[12]).intl;
    obj1.label = intl2.string(callback(closure_2[12]).t.UXxPGB);
    const items2 = [, ];
    ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = constants);
    obj1.settings = items2;
    const intl3 = callback(closure_2[12]).intl;
    obj1.subLabel = intl3.format(callback(closure_2[12]).t.V+B3FH, { guideURL: closure_12 });
    items1[1] = obj1;
    const obj3 = {};
    const intl4 = callback(closure_2[12]).intl;
    obj3.label = intl4.string(callback(closure_2[12]).t.xbMc8r);
    const items3 = [constants.SOUNDBOARD_VOLUME];
    obj3.settings = items3;
    const intl5 = callback(closure_2[12]).intl;
    const obj4 = {};
    let obj7 = callback2(closure_2[6]);
    obj4.helpCenterArticle = obj7.getArticleURL(constants2.SOUNDBOARD);
    obj3.subLabel = intl5.format(callback(closure_2[12]).t.BPbGq7, obj4);
    items1[2] = obj3;
    const obj5 = {};
    const intl6 = callback(closure_2[12]).intl;
    obj5.label = intl6.string(callback(closure_2[12]).t.bNqkD9);
    const items4 = [constants.ANDROID_MOBILE_OVERLAY];
    obj5.settings = items4;
    items1[3] = obj5;
    const obj6 = { settings: items5 };
    const items5 = [constants.NOISE_SUPPRESSION_KRISP];
    obj7 = {};
    const items6 = [callback3(closure_15, {}), callback3(closure_14, {})];
    obj7.children = items6;
    obj6.subLabel = callback4(closure_11, obj7);
    items1[4] = obj6;
    const obj8 = {};
    const intl7 = callback(closure_2[12]).intl;
    obj8.label = intl7.string(callback(closure_2[12]).t.t8Qhib);
    const items7 = [constants.NOISE_SUPPRESSION];
    obj8.settings = items7;
    items1[5] = obj8;
    const obj9 = {};
    const intl8 = callback(closure_2[12]).intl;
    obj9.label = intl8.string(callback(closure_2[12]).t.6I6GUv);
    const items8 = [, , , ];
    ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = constants);
    obj9.settings = items8;
    items1[6] = obj9;
    const obj10 = {};
    const intl9 = callback(closure_2[12]).intl;
    obj10.label = intl9.string(callback(closure_2[12]).t.OBwCXF);
    const items9 = [constants.DISABLE_STREAM_PREVIEWS];
    obj10.settings = items9;
    items1[7] = obj10;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return callback(importDefault(dependencyMap[18]), { node });
};
