// Module ID: 10259
// Function ID: 10260
// Name: UserSettingsSoundboardVolume
// Dependencies: [19, 17, 1071, 21, 4917, 10260, 6253, 10247, 1112, 6018, 10256, 10262, 5508, 2187, 2]
// Exports: default

// Module 10259 (UserSettingsSoundboardVolume)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6253 */;
import VolumeSliderDefault from "VolumeSlider" /* 10256 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10262 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  let BPbGq7;
  let TableRow;
  let analyticsLocations;
  let format;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let tmp3;
  const tmp = closure_8();
  let obj = analyticsLocations(10260);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const obj2 = { title: intl.string(analyticsLocations(1112).t.xbMc8r), hasIcons: false, children: closure_5(TableRow, obj3) };
  const UserSettingsTableRowGroup = analyticsLocations(10247).UserSettingsTableRowGroup;
  intl = analyticsLocations(1112).intl;
  obj3 = { label: intl2.string(analyticsLocations(1112).t.kbFsAD), subLabel: closure_7(closure_6, obj4) };
  TableRow = analyticsLocations(6018).TableRow;
  intl2 = analyticsLocations(1112).intl;
  obj4 = { children: items };
  const obj5 = { style: tmp.slider, children: closure_5(tmp3, obj6) };
  obj6 = {
    value: amplitudinalSoundboardVolume,
    maxVolume: 100,
    onValueChange(volume) {
      const obj = SoundboardActionCreators;
      return obj.updateUserSoundboardVolume(volume, analyticsLocations);
    },
    accessibilityLabel: intl3.string(analyticsLocations(1112).t.kbFsAD)
  };
  tmp3 = VolumeSliderDefault;
  intl3 = analyticsLocations(1112).intl;
  items = [closure_5(View, obj5), ];
  const obj7 = { style: tmp.text, variant: "body-sm/medium", children: format(BPbGq7, obj8) };
  const Text = analyticsLocations(5508).Text;
  const intl4 = analyticsLocations(1112).intl;
  format = intl4.format;
  obj8 = { helpCenterArticle: obj9.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
  BPbGq7 = analyticsLocations(1112).t.BPbGq7;
  obj9 = HelpdeskUtilsDefault;
  items[1] = closure_5(Text, obj7);
  return closure_5(UserSettingsTableRowGroup, obj2);
};
