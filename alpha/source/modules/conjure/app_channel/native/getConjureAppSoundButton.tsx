// Module ID: 14080
// Function ID: 14081
// Name: getConjureAppSoundButton
// Dependencies: [1125, 3863, 8609, 11664, 10804, 2]
// Exports: default

// Module 14080 (getConjureAppSoundButton)
import _modDef3863 from "module_3863" /* 3863 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
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
  const tmp3 = _modDef3863;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8609).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11664).VoiceXIcon;
  }
  return obj;
};
