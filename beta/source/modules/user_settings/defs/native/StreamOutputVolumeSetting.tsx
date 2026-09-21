// Module ID: 15511
// Function ID: 15512
// Name: StreamOutputVolumeSetting
// Dependencies: [4780, 502, 1996, 8238, 558, 568, 4813, 504, 38, 9889, 10236, 11594, 1119, 2]

// Module 15511 (StreamOutputVolumeSetting)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4813 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9889 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10236 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
    const fn = function l() {
      const items = [ApplicationStreamingStore, AuthenticationStore];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      let num = 0;
      if (null != tmp2) {
        num = localVolume.getLocalVolume(tmp2.ownerId, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
      }
      return num;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
  return initialize.useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    let num = 0;
    if (null != tmp2) {
      num = localVolume.getLocalVolume(tmp2.ownerId, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
    }
    return num;
  });
});
const SettingBuilders = fn(11594);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const config = MobileAudioOutputExperimentDefault.getConfig({ location: "StreamOutputVolumeSetting" });
    cResult[0] = config;
    let first = config;
  } else {
    first = cResult[0];
  }
  let items = [ApplicationStreamingStore, AuthenticationStore];
  const tmpResult = initialize;
  return initialize.useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return null != tmp2;
  }) && first.audioOutputPresent;
}) : (() => {
  const obj = MobileAudioOutputExperimentDefault;
  let items = [ApplicationStreamingStore, AuthenticationStore];
  return initialize.useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return null != tmp2;
  }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
});
const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.pEAl4b);
  },
  parent: fn(8238).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: tmp2,
  onValueChange: function onStreamValueSettingValueChange(arg0) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    _modDef38(null != tmp2, "Can not set stream volume without active stream");
    AudioActionCreatorsDefault.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const config = MobileAudioOutputExperimentDefault.getConfig({ location: "StreamOutputVolumeSetting" });
      cResult[0] = config;
      let first = config;
    } else {
      first = cResult[0];
    }
    let items = [ApplicationStreamingStore, AuthenticationStore];
    const tmpResult = initialize;
    return initialize.useStateFromStores(items, () => {
      const items = [ApplicationStreamingStore, AuthenticationStore];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return null != tmp2;
    }) && first.audioOutputPresent;
  }) : (() => {
    const obj = MobileAudioOutputExperimentDefault;
    let items = [ApplicationStreamingStore, AuthenticationStore];
    return initialize.useStateFromStores(items, () => {
      const items = [ApplicationStreamingStore, AuthenticationStore];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return null != tmp2;
    }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
  }),
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3182VD"]), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default volumeSlider;
