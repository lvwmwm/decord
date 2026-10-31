// Module ID: 9531
// Function ID: 9532
// Name: LimitedTimeBadge
// Dependencies: [19, 17, 2062, 1192, 21, 5014, 575, 1113, 504, 5021, 7624, 5624, 2]
// Exports: default

// Module 9531 (LimitedTimeBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1113 */;
import shared from "shared" /* 5021 */;
import useCountdownDefault from "useCountdown" /* 7624 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { root: obj2, backgroundDarkMode: obj3, backgroundLightMode: obj4 };
obj2 = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  let days;
  let hours;
  let intl7;
  let locale;
  let sum;
  let theme;
  unpublishedAt = unpublishedAt.unpublishedAt;
  const style = unpublishedAt.style;
  const tmp = closure_7();
  let obj = get_initialized;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = shared;
    return obj.isThemeDark(theme.theme);
  });
  const items1 = [LocaleStore];
  const items2 = ["en-US", "en-GB"];
  const obj2 = get_initialized;
  const hasItem = items2.includes(obj2.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdownDefault(unpublishedAt, 1000, undefined, true));
  useCountdownDefault(unpublishedAt, 1000, undefined, true);
  if (hasItem) {
    let formatToPlainStringResult;
    if (days > 1) {
      const intl6 = tmp2(1113).intl;
      const obj3 = { days };
      formatToPlainStringResult = intl6.formatToPlainString(tmp2(1113).t.DkxLY0, obj3);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = tmp2(1113).intl;
          const obj4 = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(1113).t.WJieZ2, obj4);
        }
      }
      const intl4 = tmp2(1113).intl;
      formatToPlainStringResult = intl4.formatToPlainString(tmp2(1113).t.WJieZ2, { hours: 0 });
    }
    sum = formatToPlainStringResult;
  } else {
    const intl = tmp2(1113).intl;
    sum = days + intl.string(tmp2(1113).t.QJyuxY);
    const intl2 = tmp2(1113).intl;
    let sum1 = hours + intl2.string(tmp2(1113).t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = tmp2(1113).intl;
        const string = intl3.string;
        sum1 = `0${string(tmp2(1113).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
  }
  const items3 = [tmp.root, , ];
  items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
  items3[2] = style;
  let str2 = "text-overlay-light";
  const Text = tmp2(5624).Text;
  if (stateFromStores) {
    str2 = "text-overlay-dark";
  }
  ({ color: str2, variant: "text-xs/bold", accessibilityLabel: intl7.formatToPlainString(intl8.t.TlZULM, { daysLeft: days }), allowFontScaling: false, children: sum });
  intl7 = tmp2(1113).intl;
  return <tmp11 style={items3}>{null}</tmp11>;
};
