// Module ID: 10751
// Function ID: 83432
// Name: SoundboardVolume
// Dependencies: [31, 27, 653, 33, 4165, 10752, 5497, 10741, 1212, 5198, 10748, 8024, 4161, 1921, 2]
// Exports: default

// Module 10751 (SoundboardVolume)
import "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = callback3();
  let obj = analyticsLocations(10752);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = importDefault(5497)().analyticsLocations;
  obj = {};
  const intl = analyticsLocations(1212).intl;
  obj.title = intl.string(analyticsLocations(1212).t.xbMc8r);
  obj.hasIcons = false;
  obj = {};
  const intl2 = analyticsLocations(1212).intl;
  obj.label = intl2.string(analyticsLocations(1212).t.kbFsAD);
  const obj1 = {};
  const items = [callback(View, { style: tmp.slider, children: callback(importDefault(10748), obj3) }), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium" };
  const intl3 = analyticsLocations(1212).intl;
  const obj5 = {};
  const obj2 = { style: tmp.slider, children: callback(importDefault(10748), obj3) };
  obj5.helpCenterArticle = importDefault(1921).getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4.children = intl3.format(analyticsLocations(1212).t.BPbGq7, obj5);
  items[1] = callback(analyticsLocations(4161).Text, obj4);
  obj1.children = items;
  obj.subLabel = callback2(closure_6, obj1);
  obj.children = callback(analyticsLocations(5198).TableRow, obj);
  return callback(analyticsLocations(10741).UserSettingsTableRowGroup, obj);
};
