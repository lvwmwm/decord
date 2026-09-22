// Module ID: 8961
// Function ID: 8962
// Name: LimitedTimeBadge
// Dependencies: [19, 17, 2025, 1181, 21, 4636, 576, 1114, 504, 4488, 7542, 4632, 2]
// Exports: default

// Module 8961 (LimitedTimeBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4488 */;
import useCountdownDefault from "useCountdown" /* 7542 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ThemeStore from "ThemeStore" /* 1181 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
      const intl6 = tmp2(1114).intl;
      const obj3 = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1114).t.DkxLY0, obj3);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = tmp2(1114).intl;
          const obj4 = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(1114).t.WJieZ2, obj4);
        }
      }
      const intl4 = tmp2(1114).intl;
      formatToPlainStringResult = intl4.formatToPlainString(tmp2(1114).t.WJieZ2, { hours: 0 });
    }
  } else {
    const intl = tmp2(1114).intl;
    let sum = days + intl.string(tmp2(1114).t.QJyuxY);
    const intl2 = tmp2(1114).intl;
    let sum1 = hours + intl2.string(tmp2(1114).t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = tmp2(1114).intl;
        sum1 = `0${tmp9(tmp2(1114).t["1LyF1h"])}`;
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
    const intl7 = tmp2(1114).intl;
    const obj7 = { daysLeft: days };
    obj6.accessibilityLabel = intl7.formatToPlainString(tmp2(1114).t.TlZULM, obj7);
    obj6.children = sum;
    obj5.children = jsx(tmp2(4632).Text, { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
};
