// Module ID: 14797
// Function ID: 14798
// Name: StreamOutputVolumeSetting
// Dependencies: [4858, 502, 1993, 7417, 504, 4891, 38, 9104, 9437, 11006, 1115, 2]

// Module 14797 (StreamOutputVolumeSetting)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1115 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4891 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9437 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
    const audioOutputPresent = obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
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
