// Module ID: 5321
// Function ID: 5322
// Name: getDefaultBackgroundData
// Dependencies: [5315, 5322, 1126, 5323, 5324, 5325, 2]
// Exports: default

// Module 5321 (getDefaultBackgroundData)
import intl5 from "intl" /* 1126 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 5315 */;
import _modDef5322 from "module_5322" /* 5322 */;
import _modDef5323 from "module_5323" /* 5323 */;
import _modDef5324 from "module_5324" /* 5324 */;
import _modDef5325 from "module_5325" /* 5325 */;
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
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef5322, name: intl.string(intl5.t.SHUTBj) };
  intl = intl5.intl;
  obj[OPTION_1] = obj2;
  const OPTION_2 = DefaultVideoBackground.OPTION_2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef5323, name: intl2.string(intl5.t.UxTcIq) };
  intl2 = intl5.intl;
  obj[OPTION_2] = obj3;
  const OPTION_3 = DefaultVideoBackground.OPTION_3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef5324, name: intl3.string(intl5.t.HFBsc8) };
  intl3 = intl5.intl;
  obj[OPTION_3] = obj4;
  const OPTION_4 = DefaultVideoBackground.OPTION_4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef5325, name: intl4.string(intl5.t["/Dl3+Z"]) };
  intl4 = intl5.intl;
  obj[OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
