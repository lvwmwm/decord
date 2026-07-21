// Module ID: 10708
// Function ID: 83354
// Name: SoundboardVolume
// Dependencies: []
// Exports: default

// Module 10708 (SoundboardVolume)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  const arg1 = importDefault(dependencyMap[6])().analyticsLocations;
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.xbMc8r);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.label = intl2.string(arg1(dependencyMap[8]).t.kbFsAD);
  const obj1 = {};
  const items = [callback(View, { style: tmp.slider, children: callback(importDefault(dependencyMap[10]), obj3) }), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium" };
  const intl3 = arg1(dependencyMap[8]).intl;
  const obj5 = {};
  const obj2 = { style: tmp.slider, children: callback(importDefault(dependencyMap[10]), obj3) };
  obj5.helpCenterArticle = importDefault(dependencyMap[13]).getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4.children = intl3.format(arg1(dependencyMap[8]).t.BPbGq7, obj5);
  items[1] = callback(arg1(dependencyMap[12]).TextWithIOSLinkWorkaround, obj4);
  obj1.children = items;
  obj.subLabel = callback2(closure_6, obj1);
  obj.children = callback(arg1(dependencyMap[9]).TableRow, obj);
  return callback(arg1(dependencyMap[7]).UserSettingsTableRowGroup, obj);
};
