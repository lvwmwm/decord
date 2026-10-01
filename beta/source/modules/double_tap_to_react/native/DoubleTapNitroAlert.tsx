// Module ID: 7416
// Function ID: 7417
// Name: DoubleTapNitroAlert
// Dependencies: [19, 17, 7411, 1074, 7417, 21, 4836, 6800, 5205, 5209, 6028, 1115, 2]
// Exports: default

// Module 7416 (DoubleTapNitroAlert)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import DoubleTapToRaectConstants from "DoubleTapToRaectConstants" /* 7411 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const NITRO_UPSELL_ALERT_KEY = DoubleTapToRaectConstants.NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = Constants.UserSettingsSections;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj3;
  emojiName = emojiName.emojiName;
  const tmp = closure_10();
  const callback = react.useCallback(() => {
    let obj3;
    const obj2 = { screen: constants.TEXT, params: obj3 };
    obj3 = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    const obj = openUserSettings;
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = react.useCallback(() => {
    let obj = openUserSettings;
    const obj2 = { screen: constants.PREMIUM };
    obj.openUserSettings(obj2, () => {
      const obj = closure_1_0(closure_1_1[8]);
      obj.dismissAlert(closure_1_4);
    });
  }, []);
  let obj = { header: metroImportDefault(View, obj2), title: intl.string(intl5.t.HRAWfC), content: intl2.format(intl5.t["3u/Je4"], { emojiName, onRenewNitro: callback1 }), actions: React4(metroImportAll, obj3) };
  obj2 = { style: tmp.icon, children: metroImportDefault(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj3 = { children: items };
  const obj4 = { onPress: callback, text: intl3.string(intl5.t.LIIHRy) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [metroImportDefault(AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: intl4.string(intl5.t["Nr6v2+"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = metroImportDefault(AlertActionButton2, obj5, "cancel");
  return metroImportDefault(AlertModal, obj);
};
