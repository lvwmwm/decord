// Module ID: 11962
// Function ID: 11963
// Name: VideoBackgroundOptionsRadioGroup
// Dependencies: [19, 1072, 21, 10049, 5930, 11963, 7058, 5925, 5928, 1113, 7061, 2]
// Exports: default

// Module 11962 (VideoBackgroundOptionsRadioGroup)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5925 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5928 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11963 */;
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
  return <TableRadioGroup hasIcons title={title} value={obj5.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption)} onChange={function handleChange(arg0) {
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
