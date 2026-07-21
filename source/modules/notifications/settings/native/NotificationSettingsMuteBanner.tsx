// Module ID: 10276
// Function ID: 79383
// Name: NotificationSettingsMuteBanner
// Dependencies: []
// Exports: NotificationSettingsMuteBanner, getMuteBannerSubtitleFromConfig

// Module 10276 (NotificationSettingsMuteBanner)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { alignSelf: true, paddingRight: true, paddingVertical: true, component: true, transitionAppear: true, borderRadius: importDefault(dependencyMap[4]).radii.lg + 8, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.card = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(children) {
  let obj = {};
  const items = [children.style, callback3().card];
  obj.style = items;
  obj = { style: { "Null": "P", "Null": 40 } };
  obj = { children: children.title };
  const items1 = [callback(arg1(dependencyMap[5]).Text, obj), callback(arg1(dependencyMap[5]).Text, { children: children.subtitle })];
  obj.children = items1;
  const items2 = [callback2(View, obj), ];
  const obj2 = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj2.text = intl.string(arg1(dependencyMap[7]).t.YqAjXy);
  obj2.onPress = children.onPressUnmute;
  obj2.variant = "primary-overlay";
  items2[1] = callback(arg1(dependencyMap[6]).Button, obj2);
  obj.children = items2;
  return callback2(View, obj);
};
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let end_time;
  if (null != config) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = arg1(dependencyMap[7]).intl;
    let stringResult = intl.string(arg1(dependencyMap[7]).t.tFqP/P);
  } else {
    const intl2 = arg1(dependencyMap[7]).intl;
    const obj = {};
    const _Date = Date;
    const date = new Date(config.end_time);
    obj.endTime = date.toLocaleString(arg1(dependencyMap[7]).intl.currentLocale, {});
    stringResult = intl2.formatToPlainString(arg1(dependencyMap[7]).t.C7m4oh, obj);
  }
  return stringResult;
};
