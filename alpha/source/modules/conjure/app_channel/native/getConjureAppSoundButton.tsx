// Module ID: 11360
// Function ID: 11361
// Name: getConjureAppSoundButton
// Dependencies: [1112, 4192, 7041, 10257, 9855, 2]
// Exports: default

// Module 11360 (getConjureAppSoundButton)
import _modDef4192 from "module_4192" /* 4192 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9855 */;
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
  const tmp3 = _modDef4192;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7041).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10257).VoiceXIcon;
  }
  return obj;
};
