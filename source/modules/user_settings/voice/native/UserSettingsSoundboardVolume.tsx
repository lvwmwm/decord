// Module ID: 10719
// Function ID: 83427
// Name: SoundboardVolume
// Dependencies: [31, 27, 653, 33, 4130, 5739, 5464, 10709, 1212, 5165, 10716, 5733, 5459, 1920, 2]
// Exports: default

// Module 10719 (SoundboardVolume)
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
  let obj = analyticsLocations(5739);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = importDefault(5464)().analyticsLocations;
  obj = {};
  const intl = analyticsLocations(1212).intl;
  obj.title = intl.string(analyticsLocations(1212).t.xbMc8r);
  obj.hasIcons = false;
  obj = {};
  const intl2 = analyticsLocations(1212).intl;
  obj.label = intl2.string(analyticsLocations(1212).t.kbFsAD);
  const obj1 = {};
  const items = [callback(View, { style: tmp.slider, children: callback(importDefault(10716), obj3) }), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium" };
  const intl3 = analyticsLocations(1212).intl;
  const obj5 = {};
  const obj2 = { style: tmp.slider, children: callback(importDefault(10716), obj3) };
  obj5.helpCenterArticle = importDefault(1920).getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4.children = intl3.format(analyticsLocations(1212).t.BPbGq7, obj5);
  items[1] = callback(analyticsLocations(5459).TextWithIOSLinkWorkaround, obj4);
  obj1.children = items;
  obj.subLabel = callback2(closure_6, obj1);
  obj.children = callback(analyticsLocations(5165).TableRow, obj);
  return callback(analyticsLocations(10709).UserSettingsTableRowGroup, obj);
};
