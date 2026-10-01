// Module ID: 11566
// Function ID: 11567
// Name: HeroMedia
// Dependencies: [19, 4825, 1484, 21, 4836, 10786, 8933, 504, 6589, 11540, 7755, 1115, 2]
// Exports: default, useHeroMediaDimensions

// Module 11566 (HeroMedia)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10786 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let tmp6;
const getPreviewVideoAssetUrlDefault = tmp6(11540);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ mediaBackground: { backgroundColor: "black" } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(arg0) {
  let applicationId;
  let containerHeight;
  let contentWidth;
  let contentWidth2;
  let items2;
  let useReducedMotion;
  let width;
  let width2;
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = closure_6();
  ({ width: width2, contentWidth: contentWidth2 } = { width, contentWidth });
  const obj = useDefaultAppLauncherWidth;
  if (contentWidth2 == null) {
    if (width2 == null) {
      width2 = obj.useDefaultAppLauncherWidth();
    }
    contentWidth2 = width2 - 2 * DEFAULT_CONTENT_PADDING;
  }
  const rounded = Math.floor(9 * contentWidth2 / 16);
  const tmp7 = useEmbeddedActivityBackgroundDefault({ applicationId, size: contentWidth2, names: ["embedded_cover"] });
  const items = [AccessibilityStore];
  const tmp2Result = get_initialized;
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const tmp2Result2 = useGetOrFetchApplications;
  const getOrFetchApplication = tmp2Result2.useGetOrFetchApplication(applicationId);
  let prop;
  if (getOrFetchApplication != null) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp12 = null;
  if (null != prop1) {
    tmp12 = getPreviewVideoAssetUrlDefault(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp16Result = null;
  if (null != tmp12) {
    tmp16Result = null;
    if ("" !== tmp12) {
      size = { muted: true, paused: stateFromStores, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      const tmp16 = jsx;
      if (null != tmp12) {
        let obj7;
        if ("" !== tmp12) {
          obj7 = { videoURI: tmp12 };
          const obj2 = { videoURI: tmp12 };
        }
        size.src = obj7;
        size.height = rounded;
        size.width = contentWidth2;
        size.poster = tmp7.url;
        const intl = tmp2(1115).intl;
        const formatToPlainString = intl.formatToPlainString;
        let str3;
        const prop2 = tmp2(1115).t["Af+EQD"];
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        const obj3 = { applicationName: str3 };
        size.accessibilityLabel = formatToPlainString(prop2, obj3);
        const items1 = [tmp.mediaBackground, , ];
        const obj4 = { maxHeight: rounded };
        items1[1] = obj4;
        let tmp15 = null != containerHeight;
        if (tmp15) {
          const obj5 = { transform: items2 };
          items2 = [{ translateY: (containerHeight - rounded) / 2 }];
          tmp15 = obj5;
          const obj6 = { translateY: (containerHeight - rounded) / 2 };
        }
        items1[2] = tmp15;
        size.style = items1;
        size.videoStyle = tmp.mediaBackground;
        tmp16Result = tmp16(tmp17, size);
      }
      let str2 = tmp7.url;
      if (str2 == null) {
        str2 = "";
      }
      obj7 = { uri: str2 };
    }
  }
  return tmp16Result;
};
export const useHeroMediaDimensions = function useHeroMediaDimensions(arg0) {
  let contentWidth;
  let width;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ width, contentWidth } = obj);
  const obj2 = useDefaultAppLauncherWidth;
  if (contentWidth == null) {
    if (width == null) {
      width = obj2.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  size = { width: contentWidth, height: Math.floor(9 * contentWidth / 16) };
  return size;
};
