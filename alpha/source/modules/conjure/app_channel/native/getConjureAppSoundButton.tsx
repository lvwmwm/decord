// Module ID: 14607
// Function ID: 14608
// Name: getConjureAppSoundButton
// Dependencies: [1113, 3995, 8814, 12146, 11114, 2]
// Exports: default

// Module 14607 (getConjureAppSoundButton)
import _modDef3995 from "module_3995" /* 3995 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11114 */;
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
  const tmp3 = _modDef3995;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8814).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12146).VoiceXIcon;
  }
  return obj;
};
