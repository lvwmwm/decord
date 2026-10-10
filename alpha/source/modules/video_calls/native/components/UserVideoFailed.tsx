// Module ID: 17815
// Function ID: 17816
// Name: UserVideoFailed
// Dependencies: [109, 17, 1085, 21, 5092, 587, 558, 576, 5289, 10897, 5137, 5243, 1126, 5088, 5379, 2]

// Module 17815 (UserVideoFailed)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5137 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5243 */;
import AVError from "AVError" /* 5289 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 10897 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["userId", "style", "avError", "removeRetryButton"];
const View = react_native.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, text: { textAlign: "center" }, button: { marginTop: 16, alignSelf: "center" } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserVideoFailed(userId) {
  let avError;
  let closure_0;
  let flag;
  let intl3;
  let items;
  let removeRetryButton;
  let str;
  let str2;
  let style;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(51);
  if (cResult[0] !== userId) {
    userId = userId.userId;
    _require = userId;
    ({ style, avError, removeRetryButton } = userId);
    const tmp11 = _objectWithoutProperties(userId, closure_3);
    cResult[0] = userId;
    cResult[1] = avError;
    cResult[2] = tmp11;
    cResult[3] = removeRetryButton;
    cResult[4] = style;
    cResult[5] = userId;
    tmp7 = style;
    tmp6 = removeRetryButton;
    tmp5 = tmp11;
    tmp4 = avError;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    _require = cResult[5];
  }
  const tmp12 = closure_9();
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp12.container) {
          if (cResult[10] === tmp12.text) {
            if (cResult[11] === tmp8) {
              tmp13 = cResult[12];
              tmp14 = cResult[13];
              tmp15 = cResult[14];
              str = cResult[15];
              str2 = cResult[16];
              tmp16 = cResult[17];
              flag = cResult[18];
              tmp17 = cResult[19];
              tmp18 = cResult[20];
              tmp19 = cResult[21];
              tmp20 = cResult[22];
            }
            if (cResult[31] === tmp13) {
              if (cResult[32] === str) {
                if (cResult[33] === str2) {
                  if (cResult[34] === tmp16) {
                    if (cResult[35] === flag) {
                      let tmp31;
                      if (cResult[36] === tmp17) {
                        tmp31 = cResult[37];
                      }
                      if (cResult[38] === tmp15) {
                        let tmp34;
                        if (cResult[39] === tmp6) {
                          tmp34 = cResult[40];
                        }
                        if (cResult[41] === tmp12.button) {
                          let tmp37;
                          if (cResult[42] === tmp34) {
                            tmp37 = cResult[43];
                          }
                          if (cResult[44] === tmp14) {
                            if (cResult[45] === tmp37) {
                              if (cResult[46] === tmp18) {
                                if (cResult[47] === tmp19) {
                                  if (cResult[48] === tmp20) {
                                    let tmp41;
                                    if (cResult[49] === tmp31) {
                                      tmp41 = cResult[50];
                                    }
                                    return tmp41;
                                  }
                                }
                              }
                            }
                          }
                          let obj2 = { style: tmp19, children: items };
                          const merged = Object.assign(tmp18);
                          items = [tmp20, tmp31, tmp37];
                          const tmp46 = closure_8(tmp14, obj2);
                          cResult[44] = tmp14;
                          cResult[45] = tmp37;
                          cResult[46] = tmp18;
                          cResult[47] = tmp19;
                          cResult[48] = tmp20;
                          cResult[49] = tmp31;
                          cResult[50] = tmp46;
                          tmp41 = tmp46;
                        }
                        const obj3 = { style: tmp12.button, children: tmp34 };
                        const tmp40 = closure_7(View, obj3);
                        cResult[41] = tmp12.button;
                        cResult[42] = tmp34;
                        cResult[43] = tmp40;
                        tmp37 = tmp40;
                      }
                      let tmp35 = !tmp6;
                      if (tmp35) {
                        const obj4 = { variant: "secondary", size: "md", text: intl3.string(require("intl").t["hxmQ/e"]), onPress: tmp15 };
                        const Button = tmp(5379).Button;
                        intl3 = tmp(1126).intl;
                        tmp35 = closure_7(Button, obj4);
                      }
                      cResult[38] = tmp15;
                      cResult[39] = tmp6;
                      cResult[40] = tmp35;
                      tmp34 = tmp35;
                    }
                  }
                }
              }
            }
            const obj5 = { variant: str, color: str2, style: tmp16, selectable: flag, children: tmp17 };
            const tmp33 = closure_7(tmp13, obj5);
            cResult[31] = tmp13;
            cResult[32] = str;
            cResult[33] = str2;
            cResult[34] = tmp16;
            cResult[35] = flag;
            cResult[36] = tmp17;
            cResult[37] = tmp33;
            tmp31 = tmp33;
          }
        }
      }
    }
  }
  const tmpResult = require("AVError");
  const errorCode = tmpResult.getErrorInfo(tmp4).errorCode;
  if (cResult[23] !== tmp8) {
    function handleRetry() {
      let obj = VideoStreamReadyActionCreators;
      const result = obj.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, closure_0);
      const obj2 = AudioActionCreatorsDefault;
      obj2.setDisableLocalVideo(closure_0, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        const obj = AudioActionCreatorsDefault;
        obj.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, closure_0(dependencyMap[10]).MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    }
    cResult[23] = tmp8;
    cResult[24] = handleRetry;
    tmp21 = handleRetry;
  } else {
    tmp21 = cResult[24];
  }
  if (cResult[25] === tmp7) {
    let tmp23;
    let tmp25;
    let tmp27;
    if (cResult[26] === tmp12.container) {
      tmp23 = cResult[27];
    }
    const _Symbol = Symbol;
    const text = tmp12.text;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(require("intl").t["z+mxvo"]);
      cResult[28] = stringResult;
      tmp25 = stringResult;
    } else {
      tmp25 = cResult[28];
    }
    if (cResult[29] !== tmp12.text) {
      const obj6 = { variant: "text-md/semibold", color: "text-strong", style: text, children: tmp25 };
      const tmp29 = closure_7(require("Text/Text").Text, obj6);
      cResult[29] = tmp12.text;
      cResult[30] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[30];
    }
    const Text = tmp(5088).Text;
    const text2 = tmp12.text;
    const intl2 = tmp(1126).intl;
    const obj7 = { errorCode };
    const formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.ejOT95, obj7);
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = tmp7;
    cResult[9] = tmp12.container;
    cResult[10] = tmp12.text;
    cResult[11] = tmp8;
    cResult[12] = Text;
    cResult[13] = View;
    cResult[14] = tmp21;
    cResult[15] = "text-sm/semibold";
    cResult[16] = "text-muted";
    cResult[17] = text2;
    cResult[18] = true;
    cResult[19] = formatToPlainStringResult;
    cResult[20] = tmp5;
    cResult[21] = tmp23;
    cResult[22] = tmp27;
    tmp20 = tmp27;
    tmp19 = tmp23;
    tmp18 = tmp5;
    tmp17 = formatToPlainStringResult;
    flag = true;
    tmp16 = text2;
    str2 = "text-muted";
    str = "text-sm/semibold";
    tmp15 = tmp21;
    tmp14 = tmp22;
    tmp13 = Text;
  }
  const items1 = [tmp12.container, tmp7];
  cResult[25] = tmp7;
  cResult[26] = tmp12.container;
  cResult[27] = items1;
  tmp23 = items1;
}) : (function UserVideoFailed(arg0) {
  let avError;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let removeRetryButton;
  let require;
  let style;
  let tmp8Result;
  ({ userId: require, removeRetryButton } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0 }));
  const tmp2 = closure_9();
  let obj = AVError;
  let obj2 = { style: items, children: items1 };
  const errorCode = obj.getErrorInfo(avError).errorCode;
  const merged1 = Object.assign(merged);
  items = [tmp2.container, style];
  const obj3 = { variant: "text-md/semibold", color: "text-strong", style: tmp2.text, children: intl.string(intl4.t["z+mxvo"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [closure_7(Text, obj3), , ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", style: tmp2.text, selectable: true, children: intl2.formatToPlainString(intl4.t.ejOT95, { errorCode }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = closure_7(Text2, obj4);
  const obj5 = { style: tmp2.button, children: tmp8Result };
  tmp8Result = !removeRetryButton;
  const tmp5 = closure_8;
  if (tmp8Result) {
    const obj6 = {
      variant: "secondary",
      size: "md",
      text: intl3.string(intl4.t["hxmQ/e"]),
      onPress: function handleRetry() {
          let obj = VideoStreamReadyActionCreators;
          const result = obj.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, _require);
          const obj2 = AudioActionCreatorsDefault;
          obj2.setDisableLocalVideo(_require, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
          const timerId = setTimeout(() => {
            const obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, require("BaseConnectionEvent").MediaEngineContextTypes.DEFAULT, false);
          }, 1000);
        }
    };
    const Button = tmp3(5379).Button;
    intl3 = tmp3(1126).intl;
    tmp8Result = tmp8(Button, obj6);
  }
  items1[2] = closure_7(View, obj5);
  return tmp5(View, obj2);
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default tmp3;
