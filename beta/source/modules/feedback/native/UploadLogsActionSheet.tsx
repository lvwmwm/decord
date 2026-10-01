// Module ID: 16323
// Function ID: 16324
// Name: UploadLogsActionSheet
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6571, 6570, 1115, 4832, 5281, 9648, 1241, 4800, 2]
// Exports: default

// Module 16323 (UploadLogsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import DebugUploadManager from "DebugUploadManager" /* 9648 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp3;
const ActionSheetActionCreatorsDefault = tmp3(4800);
const View = react_native.View;
({ AnalyticEvents: closure_4, DebugLogCategory: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: obj3, buttonSpacer: obj4 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = { height: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj3;
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  const tmp = closure_8();
  let obj = { header: closure_6(BottomSheetTitleHeader, obj2), children: closure_7(View, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: intl.string(intl5.t.KTjjrG) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  obj3 = { style: tmp.container, children: items };
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body, children: intl2.string(intl5.t["ZvRR/t"]) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items = [closure_6(Text, obj4), , , ];
  const obj5 = {
    text: intl3.string(intl5.t.EbwFfR),
    onPress() {
      let tmp6;
      const obj = DebugUploadManager;
      obj.uploadDebugLogFiles(hasOwnProperty.RTC);
      let tmp5 = require;
      const track = AnalyticsUtilsDefault.track;
      const DEBUG_LOG_UPLOADED = constants.DEBUG_LOG_UPLOADED;
      AnalyticsUtilsDefault;
      if (require == null) {
        tmp5 = null;
      }
      const obj2 = { media_session_id: tmp5, rtc_connection_id: tmp6 };
      tmp6 = importDefault;
      if (importDefault == null) {
        tmp6 = null;
      }
      track(DEBUG_LOG_UPLOADED, obj2);
      const tmp3Result = ActionSheetActionCreatorsDefault;
      tmp3Result.hideActionSheet();
    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[1] = closure_6(Button, obj5);
  const obj6 = { style: tmp.buttonSpacer };
  items[2] = closure_6(View, obj6);
  const obj7 = {
    text: intl4.string(intl5.t["ETE/oC"]),
    variant: "secondary",
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[3] = closure_6(Button2, obj7);
  return closure_6(BottomSheet, obj);
};
