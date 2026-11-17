// Module ID: 15175
// Function ID: 15176
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4133, 7442, 11659, 11300, 2]
// Exports: default

// Module 15175 (getConjureAppSoundButton)
import _modDef4133 from "module_4133" /* 4133 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11300 */;
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
  const tmp3 = _modDef4133;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7442).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11659).VoiceXIcon;
  }
  return obj;
};
