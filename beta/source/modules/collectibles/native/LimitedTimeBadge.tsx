// Module ID: 9115
// Function ID: 9116
// Name: LimitedTimeBadge
// Dependencies: [19, 17, 2109, 1182, 21, 4756, 576, 1115, 504, 4607, 7681, 4752, 2]
// Exports: default

// Module 9115 (LimitedTimeBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4607 */;
import useCountdownDefault from "useCountdown" /* 7681 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { root: { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 }, backgroundDarkMode: null, backgroundLightMode: null };
let obj3 = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
obj2.backgroundDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.backgroundLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  const tmp = closure_7();
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => shared.isThemeDark(theme.theme));
  const items1 = [LocaleStore];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(initialize.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = tmp2(1115).intl;
      const obj3 = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1115).t.DkxLY0, obj3);
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
  } else {
    const intl = tmp2(1115).intl;
    let sum = days + intl.string(tmp2(1115).t.QJyuxY);
    const intl2 = tmp2(1115).intl;
    let sum1 = hours + intl2.string(tmp2(1115).t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = tmp2(1115).intl;
        sum1 = `0${tmp9(tmp2(1115).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    const items3 = [tmp.root, , ];
    const obj5 = { style: null, children: null };
    items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
    items3[2] = unpublishedAt.style;
    obj5.style = items3;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj6 = { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null };
    const intl7 = tmp2(1115).intl;
    const obj7 = { daysLeft: days };
    obj6.accessibilityLabel = intl7.formatToPlainString(tmp2(1115).t.TlZULM, obj7);
    obj6.children = sum;
    obj5.children = jsx(tmp2(4752).Text, { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
};
