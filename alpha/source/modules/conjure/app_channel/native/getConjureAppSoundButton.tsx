// Module ID: 14343
// Function ID: 14344
// Name: getConjureAppSoundButton
// Dependencies: [1114, 3865, 8665, 11911, 10903, 2]
// Exports: default

// Module 14343 (getConjureAppSoundButton)
import _modDef3865 from "module_3865" /* 3865 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
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
  const tmp3 = _modDef3865;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8665).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11911).VoiceXIcon;
  }
  return obj;
};
