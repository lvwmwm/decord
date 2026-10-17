// Module ID: 5361
// Function ID: 5362
// Name: getDefaultBackgroundData
// Dependencies: [5355, 5362, 1128, 5363, 5364, 5365, 2]
// Exports: default

// Module 5361 (getDefaultBackgroundData)
import intl5 from "intl" /* 1128 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 5355 */;
import _modDef5362 from "module_5362" /* 5362 */;
import _modDef5363 from "module_5363" /* 5363 */;
import _modDef5364 from "module_5364" /* 5364 */;
import _modDef5365 from "module_5365" /* 5365 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = {};
  const OPTION_1 = DefaultVideoBackground.OPTION_1;
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef5362, name: intl.string(intl5.t.SHUTBj) };
  intl = intl5.intl;
  obj[OPTION_1] = obj2;
  const OPTION_2 = DefaultVideoBackground.OPTION_2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef5363, name: intl2.string(intl5.t.UxTcIq) };
  intl2 = intl5.intl;
  obj[OPTION_2] = obj3;
  const OPTION_3 = DefaultVideoBackground.OPTION_3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef5364, name: intl3.string(intl5.t.HFBsc8) };
  intl3 = intl5.intl;
  obj[OPTION_3] = obj4;
  const OPTION_4 = DefaultVideoBackground.OPTION_4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef5365, name: intl4.string(intl5.t["/Dl3+Z"]) };
  intl4 = intl5.intl;
  obj[OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
