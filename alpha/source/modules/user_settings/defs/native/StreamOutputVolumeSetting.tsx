// Module ID: 16870
// Function ID: 16871
// Name: StreamOutputVolumeSetting
// Dependencies: [6813, 502, 2132, 9556, 504, 5868, 38, 5996, 10392, 11970, 1112, 2]

// Module 16870 (StreamOutputVolumeSetting)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5868 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10392 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.pEAl4b);
  },
  parent: MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let localVolume;
    const obj = get_initialized;
    let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
    return obj.useStateFromStores(items, () => {
      let obj;
      let obj2;
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
  },
  onValueChange: function onStreamValueSettingValueChange(arg0) {
    let obj;
    let obj2;
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
    const obj3 = AudioActionCreatorsDefault;
    obj3.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = MobileAudioOutputExperimentDefault;
    const audioOutputPresent = obj.useConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
    const obj2 = get_initialized;
    let items = [ApplicationStreamingStore, AuthenticationStore];
    const tmp = obj2.useStateFromStores(items, () => {
      let obj;
      let obj2;
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
    }) && audioOutputPresent;
    return tmp;
  },
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t["3182VD"]), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t["DGq/PR"]);
    return items;
  }
};
const volumeSlider = SettingBuilders.createVolumeSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default volumeSlider;
