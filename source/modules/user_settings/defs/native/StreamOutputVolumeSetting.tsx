// Module ID: 14191
// Function ID: 109148
// Name: getActiveApplicationStream
// Dependencies: [4149, 1194, 4177, 7751, 566, 4227, 44, 8882, 10741, 10127, 1212, 2]

// Module 14191 (getActiveApplicationStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function getActiveApplicationStream() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct, closure_4];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const lastActiveStream = obj.getLastActiveStream();
  let tmp5 = null;
  if (null != lastActiveStream) {
    tmp5 = null;
    if (lastActiveStream.ownerId !== obj2.getId()) {
      tmp5 = lastActiveStream;
    }
  }
  return tmp5;
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pEAl4b);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let items = [_isNativeReflectConstruct, closure_4, closure_5];
    return require(566) /* initialize */.useStateFromStores(items, () => {
      const items = [outer1_3, outer1_4];
      const tmp = outer1_6(items);
      let num = 0;
      if (null != tmp) {
        num = outer1_5.getLocalVolume(tmp.ownerId, outer1_0(outer1_2[5]).MediaEngineContextTypes.STREAM);
      }
      return num;
    });
  },
  onValueChange: function onStreamValueSettingValueChange(volume) {
    const tmp = getActiveApplicationStream();
    importDefault(44)(null != tmp, "Can not set stream volume without active stream");
    importDefault(8882).setLocalVolume(tmp.ownerId, volume, require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = importDefault(10741);
    let items = [_isNativeReflectConstruct, closure_4];
    const obj2 = require(566) /* initialize */;
    return require(566) /* initialize */.useStateFromStores(items, () => {
      const items = [outer1_3, outer1_4];
      return null != outer1_6(items);
    }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["3182VD"]), ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t["DGq/PR"]);
    return items;
  }
};
createToggle = createToggle.createVolumeSlider(createToggle);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default createToggle;
