// Module ID: 13877
// Function ID: 13878
// Name: getConjureAppSoundButton
// Dependencies: [1112, 4190, 7034, 10986, 10627, 2]
// Exports: default

// Module 13877 (getConjureAppSoundButton)
import _modDef4190 from "module_4190" /* 4190 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10627 */;
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
  const tmp3 = _modDef4190;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7034).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10986).VoiceXIcon;
  }
  return obj;
};
