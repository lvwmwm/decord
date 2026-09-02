// Module ID: 15691
// Function ID: 15692
// Name: toggle
// Dependencies: [7893, 4166, 11288, 1233, 2]

// Module 15691 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CzWUK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jTNPHM);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: explicitContentFromProto.DisableStreamPreviews.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CzWUK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jTNPHM);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: explicitContentFromProto.DisableStreamPreviews.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
