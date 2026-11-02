// Module ID: 14396
// Function ID: 14397
// Name: getConjureAppSoundButton
// Dependencies: [1113, 3868, 8673, 11950, 10927, 2]
// Exports: default

// Module 14396 (getConjureAppSoundButton)
import _modDef3868 from "module_3868" /* 3868 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10927 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/getConjureAppSoundButton.tsx");

export default function getConjureAppSoundButton(arg0, arg1) {
  let VoiceXIcon;
  let closure_0;
  let closure_1;
  _require = arg0;
  importDefault = arg1;
  const intl = require("intl").intl;
  const string = intl.string;
  const tmp3 = _modDef3868;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8673).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11950).VoiceXIcon;
  }
  return obj;
};
