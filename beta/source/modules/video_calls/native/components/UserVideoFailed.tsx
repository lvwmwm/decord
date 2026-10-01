// Module ID: 16965
// Function ID: 16966
// Name: UserVideoFailed
// Dependencies: [17, 1074, 21, 4836, 576, 8875, 4832, 1115, 5281, 8888, 4891, 9104, 2]
// Exports: default

// Module 16965 (UserVideoFailed)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4891 */;
import AVError from "AVError" /* 8875 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 8888 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, text: { textAlign: "center" }, button: { marginTop: 16, alignSelf: "center" } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  let avError;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let removeRetryButton;
  let style;
  let tmp8Result;
  ({ userId: require, removeRetryButton } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0 }));
  const tmp2 = closure_7();
  let obj = AVError;
  let obj2 = { style: items, children: items1 };
  const errorCode = obj.getErrorInfo(avError).errorCode;
  const merged1 = Object.assign(merged);
  items = [tmp2.container, style];
  const obj3 = { variant: "text-md/semibold", color: "text-strong", style: tmp2.text, children: intl.string(intl4.t["z+mxvo"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [closure_5(Text, obj3), , ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", style: tmp2.text, selectable: true, children: intl2.formatToPlainString(intl4.t.ejOT95, { errorCode }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = closure_5(Text2, obj4);
  const obj5 = { style: tmp2.button, children: tmp8Result };
  tmp8Result = !removeRetryButton;
  const tmp5 = closure_6;
  if (tmp8Result) {
    const obj6 = {
      variant: "secondary",
      size: "md",
      text: intl3.string(intl4.t["hxmQ/e"]),
      onPress() {
          let obj = VideoStreamReadyActionCreators;
          const result = obj.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, require);
          const obj2 = AudioActionCreatorsDefault;
          obj2.setDisableLocalVideo(require, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
          const timerId = setTimeout(() => {
            const obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
          }, 1000);
        }
    };
    const Button = tmp3(5281).Button;
    intl3 = tmp3(1115).intl;
    tmp8Result = tmp8(Button, obj6);
  }
  items1[2] = closure_5(View, obj5);
  return tmp5(View, obj2);
};
