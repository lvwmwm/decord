// Module ID: 8699
// Function ID: 68869
// Name: LimitedTimeBadge
// Dependencies: []
// Exports: default

// Module 8699 (LimitedTimeBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": 24, "Null": 24, "Null": null, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.root = obj;
obj.backgroundDarkMode = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
obj.backgroundLightMode = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG };
let closure_7 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  let days;
  let hours;
  const tmp = callback();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => callback(closure_2[9]).isThemeDark(theme.theme));
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_4];
  const items2 = [0.599, 0.853];
  const hasItem = items2.includes(obj1.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = importDefault(dependencyMap[10])(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = arg1(dependencyMap[7]).intl;
      obj = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(arg1(dependencyMap[7]).t.DkxLY0, obj);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = arg1(dependencyMap[7]).intl;
          obj = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(arg1(dependencyMap[7]).t.WJieZ2, obj);
        }
      }
      const intl4 = arg1(dependencyMap[7]).intl;
      obj1 = { hours: 0 };
      formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[7]).t.WJieZ2, obj1);
    }
  } else {
    const intl = arg1(dependencyMap[7]).intl;
    let sum = days + intl.string(arg1(dependencyMap[7]).t.QJyuxY);
    const intl2 = arg1(dependencyMap[7]).intl;
    let sum1 = hours + intl2.string(arg1(dependencyMap[7]).t.1LyF1h);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = arg1(dependencyMap[7]).intl;
        sum1 = `0${tmp11(closure_0(closure_2[7]).t.1LyF1h)}`;
      }
      sum = sum1;
    }
    const obj2 = {};
    const items3 = [tmp.root, stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode, unpublishedAt.style];
    obj2.style = items3;
    const obj3 = {};
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    obj3.color = str2;
    obj3.variant = "text-xs/bold";
    const intl7 = arg1(dependencyMap[7]).intl;
    const obj4 = { daysLeft: days };
    obj3.accessibilityLabel = intl7.formatToPlainString(arg1(dependencyMap[7]).t.TlZULM, obj4);
    obj3.allowFontScaling = false;
    obj3.children = sum;
    obj2.children = jsx(arg1(dependencyMap[11]).Text, obj3);
    return <View {...obj2} />;
  }
};
