// Module ID: 11925
// Function ID: 11926
// Name: VideoBackgroundOptions
// Dependencies: [19, 5908, 21, 5009, 575, 5914, 1114, 6977, 9862, 11926, 5712, 2]
// Exports: fromVideoBackgroundRadioValue, parseVideoBackgroundRadioValue, toVideoBackgroundRadioValue, useVideoBackgroundRadioOptions

// Module 11925 (VideoBackgroundOptions)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 5908 */;
import getDefaultBackgroundDataDefault from "getDefaultBackgroundData" /* 5914 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let size;
const BLUR_BACKGROUND_OPTION = VideoBackgroundConstants.BLUR_BACKGROUND_OPTION;
const jsx = Fragment.jsx;
const none = "none";
let obj = { imageThumbnail: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.lg };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptions.tsx");

export const NONE_VALUE = "none";
export function toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption) {
  let tmp2;
  if (null == lastUsedVideoBackgroundOption) {
    tmp2 = none;
  } else {
    tmp2 = lastUsedVideoBackgroundOption;
    if (lastUsedVideoBackgroundOption !== BLUR_BACKGROUND_OPTION) {
      tmp2 = lastUsedVideoBackgroundOption;
      if (typeof lastUsedVideoBackgroundOption !== "number") {
        tmp2 = none;
      }
    }
  }
  return tmp2;
}
export function fromVideoBackgroundRadioValue(arg0) {
  let tmp = null;
  if (arg0 !== none) {
    tmp = arg0;
  }
  return tmp;
}
export function parseVideoBackgroundRadioValue(arg0) {
  let NumberResult = arg0;
  if (arg0 !== none) {
    NumberResult = arg0;
    if (arg0 !== BLUR_BACKGROUND_OPTION) {
      const _Number = Number;
      NumberResult = Number(arg0);
    }
  }
  return NumberResult;
}
export function useVideoBackgroundRadioOptions() {
  let imageThumbnail;
  let intl;
  let intl2;
  _require = closure_6();
  const values = Object.values(getDefaultBackgroundDataDefault());
  const found = values.filter((source) => "" !== source.source);
  const obj = { value: none, label: intl.string(require("intl").t.fUdMeO), icon: null };
  intl = require("intl").intl;
  const obj2 = { IconComponent: require("DenyIcon").DenyIcon };
  const TableRowIcon = require("TableRowIcon").TableRowIcon;
  const items = [obj, ];
  const obj3 = { value: BLUR_BACKGROUND_OPTION, label: intl2.string(require("intl").t.LhSyL8), icon: null };
  intl2 = require("intl").intl;
  ({ IconComponent: require("BlurBackgroundIcon").BlurBackgroundIcon });
  const TableRowIcon2 = require("TableRowIcon").TableRowIcon;
  items[1] = obj3;
  HermesBuiltin.arraySpread(items, found.map((uri) => ({ value: uri.id, label: uri.name, icon: null })), 2);
  return items;
}
