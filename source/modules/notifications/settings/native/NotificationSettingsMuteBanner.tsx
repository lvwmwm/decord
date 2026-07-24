// Module ID: 10319
// Function ID: 79671
// Name: NotificationSettingsMuteBanner
// Dependencies: [31, 27, 33, 4130, 689, 4126, 4543, 1212, 2]
// Exports: NotificationSettingsMuteBanner, getMuteBannerSubtitleFromConfig

// Module 10319 (NotificationSettingsMuteBanner)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg + 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(style) {
  let obj = {};
  const items = [style.style, _createForOfIteratorHelperLoose().card];
  obj.style = items;
  obj = { style: { flex: 1, marginRight: 8 } };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: style.title };
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-overlay-light", children: style.subtitle };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  const items2 = [callback2(View, obj), ];
  const obj2 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl.string(require(1212) /* getSystemLocale */.t.YqAjXy);
  obj2.onPress = style.onPressUnmute;
  obj2.variant = "primary-overlay";
  items2[1] = callback(require(4543) /* Button */.Button, obj2);
  obj.children = items2;
  return callback2(View, obj);
};
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let end_time;
  if (null != config) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t["tFqP/P"]);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const _Date = Date;
    const date = new Date(config.end_time);
    obj.endTime = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    stringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.C7m4oh, obj);
  }
  return stringResult;
};
