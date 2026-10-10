// Module ID: 7991
// Function ID: 7992
// Name: DoubleTapNitroAlert
// Dependencies: [19, 17, 7987, 1085, 7992, 21, 5092, 558, 576, 7093, 5301, 6289, 1126, 5305, 2]

// Module 7991 (DoubleTapNitroAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5305 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import DoubleTapToRaectConstants from "DoubleTapToRaectConstants" /* 7987 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function DoubleTapNitroAlert(emojiName) {
  let constants2;
  let first;
  let intl3;
  let intl4;
  let items;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp21;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(13);
  emojiName = emojiName.emojiName;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let obj3;
      const obj2 = { screen: constants.TEXT, params: obj3 };
      obj3 = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
      const obj = openUserSettings;
      obj.openUserSettings(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      let obj = openUserSettings;
      const obj2 = { screen: constants.PREMIUM };
      obj.openUserSettings(obj2, () => {
        const obj = closure_1_0(closure_1_1[10]);
        obj.dismissAlert(closure_1_4);
      });
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { size: "custom", style: { width: 40, height: 40 } };
    const tmp9 = metroImportDefault(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.icon) {
    let obj3 = { style: tmp4.icon, children: tmp7 };
    const tmp13 = metroImportDefault(View, obj3);
    cResult[3] = tmp4.icon;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl5.t.HRAWfC);
    cResult[5] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== emojiName) {
    const intl2 = tmp(1126).intl;
    const obj4 = { emojiName, onRenewNitro: tmp6 };
    const formatResult = intl2.format(intl5.t["3u/Je4"], obj4);
    cResult[6] = emojiName;
    cResult[7] = formatResult;
    tmp16 = formatResult;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { onPress: first, text: intl3.string(intl5.t.LIIHRy) };
    const AlertActionButton = tmp(5305).AlertActionButton;
    intl3 = tmp(1126).intl;
    const tmp20 = metroImportDefault(AlertActionButton, obj5, "confirm");
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { children: items };
    items = [tmp18, ];
    const obj7 = { variant: "secondary", text: intl4.string(intl5.t["Nr6v2+"]) };
    const AlertActionButton2 = tmp(5305).AlertActionButton;
    intl4 = tmp(1126).intl;
    items[1] = metroImportDefault(AlertActionButton2, obj7, "cancel");
    const tmp25 = React4(metroImportAll, obj6);
    cResult[9] = tmp25;
    tmp21 = tmp25;
  } else {
    tmp21 = cResult[9];
  }
  if (cResult[10] === tmp10) {
    let tmp26;
    if (cResult[11] === tmp16) {
      tmp26 = cResult[12];
    }
    return tmp26;
  }
  const tmp27 = metroImportDefault(AlertModal2.AlertModal, { header: tmp10, title: tmp14, content: tmp16, actions: tmp21 });
  cResult[10] = tmp10;
  cResult[11] = tmp16;
  cResult[12] = tmp27;
  tmp26 = tmp27;
}) : (function DoubleTapNitroAlert(emojiName) {
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
      const obj = closure_1_0(closure_1_1[10]);
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
});
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default tmp3;
