// Module ID: 9456
// Function ID: 9457
// Name: VideoBackgroundOptionsRadioGroup
// Dependencies: [19, 1074, 21, 8895, 9114, 9457, 5997, 9110, 9112, 1115, 6000, 2]
// Exports: default

// Module 9456 (VideoBackgroundOptionsRadioGroup)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import applyBackgroundOption from "applyBackgroundOption" /* 9110 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9112 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 9457 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx");

export default function VideoBackgroundOptionsRadioGroup(title) {
  let closure_0;
  _require = undefined;
  title = title.title;
  let obj = require("analytics");
  _require = obj.useAnalyticsContext();
  let obj2 = require("LastUsedVideoBackgroundOption");
  const lastUsedVideoBackgroundOption = obj2.useLastUsedVideoBackgroundOption();
  let obj3 = require("VideoBackgroundOptions");
  const videoBackgroundRadioOptions = obj3.useVideoBackgroundRadioOptions();
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const obj5 = require("VideoBackgroundOptions");
  const intl = require("intl").intl;
  return <TableRadioGroup hasIcons title={title} value={obj5.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption)} onChange={function onChange(arg0) {
    const obj = VideoBackgroundOptions;
    const result = obj.fromVideoBackgroundRadioValue(arg0);
    const obj2 = applyBackgroundOption;
    const obj3 = { location: closure_0.location };
    const result1 = obj2.applyBackgroundOptionLive(result, obj3);
    result1.catch(NOOP);
    const obj4 = VideoBackgroundActionCreators;
    const result2 = obj4.saveLastUsedBackgroundOption(result);
    result2.catch(NOOP);
  }} accessibilityLabel={intl.string(require("intl").t.lZTUPs)}>{videoBackgroundRadioOptions.map((value) => jsx(closure_0(dependencyMap[10]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value))}</TableRadioGroup>;
};
