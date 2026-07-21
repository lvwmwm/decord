// Module ID: 7654
// Function ID: 61208
// Name: DoubleTapNitroAlert
// Dependencies: []
// Exports: default

// Module 7654 (DoubleTapNitroAlert)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const NITRO_UPSELL_ALERT_KEY = arg1(dependencyMap[2]).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const MobileSetting = arg1(dependencyMap[4]).MobileSetting;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ icon: {} });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = React.useCallback(() => {
    let obj = callback(closure_1[7]);
    obj = { screen: constants.TEXT, params: obj };
    obj = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = callback(closure_1[7]);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj, () => {
      callback(closure_1[8]).dismissAlert(closure_4);
    });
  }, []);
  let obj = {};
  obj = { style: callback3().icon, children: callback(arg1(dependencyMap[10]).CircleErrorIcon, { size: "custom", style: {} }) };
  obj.header = callback(View, obj);
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.HRAWfC);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.content = intl2.format(arg1(dependencyMap[11]).t.3u/Je4, { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  obj = {};
  const obj1 = { onPress: callback };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[11]).t.LIIHRy);
  const items = [callback(arg1(dependencyMap[9]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[11]).t.Nr6v2+);
  items[1] = callback(arg1(dependencyMap[9]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(closure_8, obj);
  return callback(arg1(dependencyMap[9]).AlertModal, obj);
};
