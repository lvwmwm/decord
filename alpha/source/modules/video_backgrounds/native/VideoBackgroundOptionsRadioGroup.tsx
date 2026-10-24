// Module ID: 11633
// Function ID: 11634
// Name: VideoBackgroundOptionsRadioGroup
// Dependencies: [19, 1087, 21, 558, 576, 9935, 5866, 11634, 5861, 5864, 1128, 6984, 6985, 2]

// Module 11633 (VideoBackgroundOptionsRadioGroup)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5861 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5864 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11634 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function VideoBackgroundOptionsRadioGroup(title) {
  let analyticsContext;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = analyticsContext(576);
  const cResult = obj.c(13);
  title = title.title;
  let obj2 = analyticsContext(9935);
  analyticsContext = obj2.useAnalyticsContext();
  let obj3 = analyticsContext(5866);
  const lastUsedVideoBackgroundOption = obj3.useLastUsedVideoBackgroundOption();
  let obj4 = analyticsContext(11634);
  const videoBackgroundRadioOptions = obj4.useVideoBackgroundRadioOptions();
  if (cResult[0] !== analyticsContext.location) {
    function handleChange(arg0) {
      const obj = VideoBackgroundOptions;
      const result = obj.fromVideoBackgroundRadioValue(arg0);
      const obj2 = applyBackgroundOption;
      const obj3 = { location: analyticsContext.location };
      const result1 = obj2.applyBackgroundOptionLive(result, obj3);
      result1.catch(NOOP);
      const obj4 = VideoBackgroundActionCreators;
      const result2 = obj4.saveLastUsedBackgroundOption(result);
      result2.catch(NOOP);
    }
    cResult[0] = analyticsContext.location;
    cResult[1] = handleChange;
    tmp6 = handleChange;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== lastUsedVideoBackgroundOption) {
    const tmpResult = analyticsContext(11634);
    let result = tmpResult.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
    cResult[2] = lastUsedVideoBackgroundOption;
    cResult[3] = result;
    tmp7 = result;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(analyticsContext(1128).t.lZTUPs);
    cResult[4] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== videoBackgroundRadioOptions) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(value) {
          return jsx(analyticsContext(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value);
        }
      }
      cResult[7] = R;
      tmp12 = R;
    } else {
      class R {
        constructor(value) {
          return jsx(analyticsContext(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value);
        }
      }
    }
    const mapped = videoBackgroundRadioOptions.map(tmp12);
    cResult[5] = videoBackgroundRadioOptions;
    cResult[6] = mapped;
  } else {
    class R {
      constructor(value) {
        return jsx(analyticsContext(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value);
      }
    }
  }
  if (cResult[8] === tmp6) {
    class R {
      constructor(value) {
        return jsx(analyticsContext(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value);
      }
    }
  }
  cResult[8] = tmp6;
  cResult[9] = tmp7;
  cResult[10] = tmp11;
  cResult[11] = title;
  cResult[12] = jsx(analyticsContext(6985).TableRadioGroup, { hasIcons: true, title, value: tmp7, onChange: tmp6, accessibilityLabel: tmp9, children: tmp11 });
  jsx(analyticsContext(6985).TableRadioGroup, { hasIcons: true, title, value: tmp7, onChange: tmp6, accessibilityLabel: tmp9, children: tmp11 });
}) : (function VideoBackgroundOptionsRadioGroup(title) {
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
  }} accessibilityLabel={intl.string(require("intl").t.lZTUPs)}>{videoBackgroundRadioOptions.map((value) => jsx(closure_0(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value))}</TableRadioGroup>;
});
let result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx");

export default tmp3;
