// Module ID: 11203
// Function ID: 87272
// Name: useHeroMediaDimensions
// Dependencies: [31, 4122, 1455, 5188, 33, 4130, 10885, 10614, 566, 5470, 11178, 8302, 1212, 2]
// Exports: default

// Module 11203 (useHeroMediaDimensions)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function useHeroMediaDimensions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let width = obj.width;
  let defaultAppLauncherWidth = require(10885) /* useDefaultAppLauncherWidth */.useDefaultAppLauncherWidth();
  if (null != width) {
    defaultAppLauncherWidth = width;
  }
  if (null == width) {
    const _Math = Math;
    width = Math.min(defaultAppLauncherWidth, ACTION_SHEET_MAX_WIDTH);
  }
  const diff = width - 2 * DEFAULT_CONTENT_PADDING;
  obj = { width: diff, height: Math.floor(9 * diff / 16) };
  return obj;
}
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ mediaBackground: { backgroundColor: "black" } });
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(width) {
  let applicationId;
  let containerHeight;
  ({ applicationId, containerHeight } = width);
  const tmp = callback();
  const size = useHeroMediaDimensions({ width: width.width });
  let obj = { applicationId, size: size.width, names: ["embedded_cover"] };
  const tmp2 = importDefault(10614)(obj);
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_3.useReducedMotion, []);
  let obj2 = require(5470) /* useGetOrFetchApplications */;
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  let prop;
  if (null != getOrFetchApplication) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (null != prop) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp7 = null;
  if (null != prop1) {
    tmp7 = importDefault(11178)(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp16Result = null;
  if (null != tmp7) {
    let str = "";
    tmp16Result = null;
    if ("" !== tmp7) {
      obj = { muted: true, paused: stateFromStores };
      if (null != tmp7) {
        if (`` !== tmp7) {
          obj = { videoURI: tmp7 };
          let obj5 = obj;
        }
        obj.src = obj5;
        ({ height: obj10.height, width: obj10.width } = size);
        obj.poster = tmp2.url;
        obj.resizeMode = "cover";
        const intl = require(1212) /* getSystemLocale */.intl;
        obj1 = {};
        let name;
        if (null != getOrFetchApplication) {
          name = getOrFetchApplication.name;
        }
        if (null != name) {
          str = name;
        }
        obj1.applicationName = str;
        obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["Af+EQD"], obj1);
        const items1 = [tmp.mediaBackground, , ];
        obj2 = { maxHeight: size.height };
        items1[1] = obj2;
        let tmp15 = null != containerHeight;
        if (tmp15) {
          const obj3 = {};
          const obj4 = { translateY: (containerHeight - size.height) / 2 };
          const items2 = [obj4];
          obj3.transform = items2;
          tmp15 = obj3;
        }
        items1[2] = tmp15;
        obj.style = items1;
        obj.videoStyle = tmp.mediaBackground;
        obj.postponeRender = false;
        tmp16Result = tmp16(tmp19, obj);
      }
      obj5 = {};
      const url = tmp2.url;
      let tmp11 = str;
      if (null != url) {
        tmp11 = url;
      }
      obj5.uri = tmp11;
      tmp16 = jsx;
    }
  }
  return tmp16Result;
};
export { useHeroMediaDimensions };
