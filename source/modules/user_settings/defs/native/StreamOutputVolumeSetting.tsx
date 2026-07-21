// Module ID: 14020
// Function ID: 106629
// Name: getActiveApplicationStream
// Dependencies: []

// Module 14020 (getActiveApplicationStream)
function getActiveApplicationStream() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_3, closure_4];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pEAl4b);
  },
  parent: arg1(dependencyMap[3]).MobileSetting.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    const items = [closure_3, closure_4, closure_5];
    return arg1(dependencyMap[4]).useStateFromStores(items, () => {
      const items = [closure_3, closure_4];
      const tmp = callback2(items);
      let num = 0;
      if (null != tmp) {
        num = localVolume.getLocalVolume(tmp.ownerId, callback(closure_2[5]).MediaEngineContextTypes.STREAM);
      }
      return num;
    });
  },
  onValueChange: function onStreamValueSettingValueChange(volume) {
    const tmp = getActiveApplicationStream();
    importDefault(dependencyMap[6])(null != tmp, "Can not set stream volume without active stream");
    importDefault(dependencyMap[7]).setLocalVolume(tmp.ownerId, volume, arg1(dependencyMap[5]).MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = importDefault(dependencyMap[8]);
    const items = [closure_3, closure_4];
    const obj2 = arg1(dependencyMap[4]);
    return arg1(dependencyMap[4]).useStateFromStores(items, () => {
      const items = [closure_3, closure_4];
      return null != callback(items);
    }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
  },
  useSearchTerms() {
    const intl = arg1(dependencyMap[10]).intl;
    const items = [intl.string(arg1(dependencyMap[10]).t.3182VD), ];
    const intl2 = arg1(dependencyMap[10]).intl;
    items[1] = intl2.string(arg1(dependencyMap[10]).t.DGq/PR);
    return items;
  }
};
const volumeSlider = obj.createVolumeSlider(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default volumeSlider;
