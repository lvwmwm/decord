// Module ID: 9933
// Function ID: 9934
// Name: getDefaultBackgroundData
// Dependencies: [7265, 9934, 1119, 9935, 9936, 9937, 2]
// Exports: default

// Module 9933 (getDefaultBackgroundData)
import util from "util" /* 1119 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 7265 */;
import _modDef9934 from "module_9934" /* 9934 */;
import _modDef9935 from "module_9935" /* 9935 */;
import _modDef9936 from "module_9936" /* 9936 */;
import _modDef9937 from "module_9937" /* 9937 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  const obj = {};
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef9934, name: null };
  const intl = util.intl;
  obj2.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef9935, name: null };
  const intl2 = util.intl;
  obj3.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef9936, name: null };
  const intl3 = util.intl;
  obj4.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef9937, name: null };
  const intl4 = util.intl;
  obj5.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
