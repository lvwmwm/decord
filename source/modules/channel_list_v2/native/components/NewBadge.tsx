// Module ID: 11384
// Function ID: 88503
// Name: NewBadge
// Dependencies: []
// Exports: default

// Module 11384 (NewBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let num = 0;
  if (obj3.isIOS()) {
    num = 1;
  }
  obj.marginTop = num;
  obj.text = obj;
  obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, borderRadius: importDefault(dependencyMap[5]).radii.round };
  const obj3 = arg1(dependencyMap[4]);
  if (obj5.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND;
    }
    obj.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj.base = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = importDefault(dependencyMap[5]).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp = importDefault(dependencyMap[7])();
  const tmp2 = importDefault(dependencyMap[8])();
  const tmp3 = callback(tmp, tmp2);
  let obj = { style: tmp3.base };
  obj = { variant: "text-xxs/bold", style: tmp3.text };
  if (obj3.isThemeLight(tmp2)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj.color = str;
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.y2b7CA);
  obj.children = jsx(arg1(dependencyMap[9]).Text, obj);
  return <View {...obj} />;
};
