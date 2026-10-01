// Module ID: 8297
// Function ID: 8298
// Name: LimitedTimeBadge
// Dependencies: [19, 17, 2112, 1182, 21, 4836, 576, 1115, 504, 4685, 6859, 4832, 2]
// Exports: default

// Module 8297 (LimitedTimeBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useCountdownDefault from "useCountdown" /* 6859 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
      const intl6 = tmp2(1115).intl;
      const obj3 = { days };
      formatToPlainStringResult = intl6.formatToPlainString(tmp2(1115).t.DkxLY0, obj3);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = tmp2(1115).intl;
          const obj4 = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(1115).t.WJieZ2, obj4);
        }
      }
      const intl4 = tmp2(1115).intl;
      formatToPlainStringResult = intl4.formatToPlainString(tmp2(1115).t.WJieZ2, { hours: 0 });
    }
    sum = formatToPlainStringResult;
  } else {
    const intl = tmp2(1115).intl;
    sum = days + intl.string(tmp2(1115).t.QJyuxY);
    const intl2 = tmp2(1115).intl;
    let sum1 = hours + intl2.string(tmp2(1115).t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = tmp2(1115).intl;
        const string = intl3.string;
        sum1 = `0${string(tmp2(1115).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
  }
  const items3 = [tmp.root, , ];
  items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
  items3[2] = style;
  let str2 = "text-overlay-light";
  const Text = tmp2(4832).Text;
  if (stateFromStores) {
    str2 = "text-overlay-dark";
  }
  ({ color: str2, variant: "text-xs/bold", accessibilityLabel: intl7.formatToPlainString(intl8.t.TlZULM, { daysLeft: days }), allowFontScaling: false, children: sum });
  intl7 = tmp2(1115).intl;
  return <tmp11 style={items3}>{null}</tmp11>;
};
