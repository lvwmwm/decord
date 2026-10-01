// Module ID: 9609
// Function ID: 9610
// Name: NotificationSettingsMuteBanner
// Dependencies: [19, 17, 21, 4836, 576, 4832, 5281, 1115, 2]
// Exports: NotificationSettingsMuteBanner, getMuteBannerSubtitleFromConfig

// Module 9609 (NotificationSettingsMuteBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { card: obj2 };
obj2 = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(children) {
  let intl;
  let items;
  let items1;
  let items2;
  const obj = { style: items, children: items2 };
  items = [children.style, closure_5().card];
  const obj2 = { style: { flex: 1, marginRight: 8 }, children: items1 };
  items1 = [, ];
  const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: children.title };
  items1[0] = _false(Text_Text.Text, obj3);
  const obj4 = { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle };
  items1[1] = _false(Text_Text.Text, obj4);
  items2 = [React3(View, obj2), ];
  const obj5 = { text: intl.string(intl3.t.YqAjXy), onPress: children.onPressUnmute, variant: "primary-overlay" };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items2[1] = _false(Button, obj5);
  return React3(View, obj);
};
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let date;
  let stringResult;
  let end_time;
  if (config != null) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t["tFqP/P"]);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj = { endTime: date.toLocaleString(intl3.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
    const C7m4oh = intl3.t.C7m4oh;
    date = new Date(config.end_time);
    stringResult = formatToPlainString(C7m4oh, obj);
  }
  return stringResult;
};
