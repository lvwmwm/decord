// Module ID: 11459
// Function ID: 11460
// Name: getConjureAppSoundButton
// Dependencies: [1112, 4244, 7136, 10356, 9954, 2]
// Exports: default

// Module 11459 (getConjureAppSoundButton)
import _modDef4244 from "module_4244" /* 4244 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9954 */;
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
  const tmp3 = _modDef4244;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7136).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10356).VoiceXIcon;
  }
  return obj;
};
