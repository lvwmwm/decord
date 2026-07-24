// Module ID: 4308
// Function ID: 37700
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 99, 100, 5, 27, 4149, 1348, 1906, 653, 4155, 3, 4015, 3803, 686, 507, 4194, 4309, 4179, 44, 4323, 1450, 10718, 10667, 1212, 4530, 2]

// Module 4308 (_isNativeReflectConstruct)
import _classPrivateFieldKey from "_classPrivateFieldKey";
import asyncGeneratorStep from "asyncGeneratorStep";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import closure_9 from "_classPrivateFieldBase";
import { Linking } from "getSystemLocale";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import ME from "ME";
import { getAppIntentScheme } from "items3";
import importDefaultResult2 from "_getPrototypeOf";
import tmp8 from "LifecycleManager";
import importDefaultResult from "_classPrivateFieldKey";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleThumbnailUpload() {
  return _handleThumbnailUpload(...arguments);
}
async function _handleThumbnailUpload(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const DisableStreamPreviews = outer2_0(outer2_2[16]).DisableStreamPreviews;
  if (!DisableStreamPreviews.getSetting()) {
    outer2_20.stop();
    const _HermesInternal = HermesInternal;
    const combined = "" + outer2_14 + arg1;
    let obj = outer2_1(outer2_2[17]);
    obj = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: arg0, previewURL: combined };
    obj.dispatch(obj);
    const HTTP = outer2_0(outer2_2[18]).HTTP;
    obj = { url: outer2_15.STREAM_PREVIEW(arg0) };
    const obj1 = { thumbnail: combined };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    yield HTTP.post(obj);
  }
}
({ Base64JPEGPrefix: closure_14, Endpoints: closure_15, NOOP_NULL: closure_16, IOS_BUNDLE_ID: closure_17 } = ME);
importDefaultResult2 = new importDefaultResult2("VoiceEngineStreamingManager");
importDefaultResult2.enableNativeLogger(true);
const timeout = new require("_createForOfIteratorHelperLoose").Timeout();
const timeout1 = new require("_createForOfIteratorHelperLoose").Timeout();
let closure_22 = [];
const voiceChannelId = importDefaultResult1.getVoiceChannelId();
let closure_25 = require("_classPrivateFieldKey")("handleVoiceChannelSelect");
tmp8 = new tmp8();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default tmp8;
