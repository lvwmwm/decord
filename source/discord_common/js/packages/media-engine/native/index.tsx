// Module ID: 4228
// Function ID: 36902
// Name: _isNativeReflectConstruct
// Dependencies: [153, 57, 5, 6, 7, 15, 17, 18, 4191, 4229, 4230, 4233, 4, 4227, 4234, 4179, 4235, 646, 4237, 4297, 2]

// Module 4228 (_isNativeReflectConstruct)
import "_readOnlyError";
import _slicedToArray from "_slicedToArray";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import assertInjected from "assertInjected";
import capitalize from "capitalize";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import DesktopSources from "DesktopSources";
import AudioSubsystems from "AudioSubsystems";
import tmp5 from "TypedEventEmitter";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function toVolumePercent(arg0) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_18;
  }
  return tmp / closure_18;
}
function toScaledValue(arg0, arg1, arg2) {
  return arg1 + (arg2 - arg1) * arg0 / 100;
}
function clipsBitratePercentToKbps(arg0) {
  if (null != arg0) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    return Math.round(6000 * Math.min(100, Math.max(10, arg0)) / 100);
  }
}
({ QUEUE_METRICS_INTERVAL_MS: closure_10, SIDECHAIN_COMPRESSION_MAX_RATIO: closure_11, SIDECHAIN_COMPRESSION_MAX_THRESHOLD: closure_12, SIDECHAIN_COMPRESSION_MIN_RATIO: closure_13, SIDECHAIN_COMPRESSION_MIN_THRESHOLD: closure_14, ProcessPriority: closure_15 } = DesktopSources);
({ AudioSubsystems: closure_16, ClipsRecordingEvent: closure_17, DEFAULT_VOLUME: closure_18, DeviceTypes: closure_19, DISABLED_DEVICE_ID: closure_20, Features: closure_21, MediaEngineContextTypes: closure_22, NativeFeatures: closure_23, WATCHDOG_TIMEOUT_MS: closure_24 } = AudioSubsystems);
let result = require("asyncGeneratorStep").fileFinishedImporting("../discord_common/js/packages/media-engine/native/index.tsx");

export default tmp5;
