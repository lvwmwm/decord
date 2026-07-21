// Module ID: 11192
// Function ID: 87197
// Name: useHeroMediaDimensions
// Dependencies: []
// Exports: default

// Module 11192 (useHeroMediaDimensions)
function useHeroMediaDimensions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let width = obj.width;
  let defaultAppLauncherWidth = arg1(dependencyMap[6]).useDefaultAppLauncherWidth();
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
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const DEFAULT_CONTENT_PADDING = arg1(dependencyMap[2]).DEFAULT_CONTENT_PADDING;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[3]).ACTION_SHEET_MAX_WIDTH;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_7 = arg1(dependencyMap[5]).createStyles({ mediaBackground: { backgroundColor: "black" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(width) {
  let applicationId;
  let containerHeight;
  ({ applicationId, containerHeight } = width);
  const tmp = callback();
  const size = useHeroMediaDimensions({ width: width.width });
  let obj = { applicationId, size: size.width, names: ["SENTRY_BAGGAGE_KEY_PREFIX"] };
  const tmp2 = importDefault(dependencyMap[7])(obj);
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  let obj2 = arg1(dependencyMap[9]);
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
    tmp7 = importDefault(dependencyMap[10])(applicationId, prop.activity_preview_video_asset_id);
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
        const intl = arg1(dependencyMap[12]).intl;
        obj1 = {};
        let name;
        if (null != getOrFetchApplication) {
          name = getOrFetchApplication.name;
        }
        if (null != name) {
          str = name;
        }
        obj1.applicationName = str;
        obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[12]).t.Af+EQD, obj1);
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
      const tmp16 = jsx;
    }
  }
  return tmp16Result;
};
export { useHeroMediaDimensions };
