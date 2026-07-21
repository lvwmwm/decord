// Module ID: 15898
// Function ID: 121818
// Name: UploadLogsActionSheet
// Dependencies: []
// Exports: default

// Module 15898 (UploadLogsActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticEvents: closure_4, DebugLogCategory: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.body = { textAlign: "center", marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
const obj1 = { textAlign: "center", marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.buttonSpacer = { height: importDefault(dependencyMap[5]).space.PX_8 };
let closure_8 = obj.createStyles(obj);
const obj2 = { height: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  ({ mediaSessionId: closure_0, rtcConnectionId: closure_1 } = arg0);
  const tmp = callback3();
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.KTjjrG);
  obj.header = callback(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.container };
  const obj1 = { style: tmp.body };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[8]).t.ZvRR/t);
  const items = [callback(arg1(dependencyMap[9]).Text, obj1), , , ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[8]).t.EbwFfR);
  obj2.onPress = function onPress() {
    let obj = callback(closure_2[11]);
    obj.uploadDebugLogFiles(constants2.RTC);
    obj = {};
    let tmp2 = null;
    if (null != callback) {
      tmp2 = callback;
    }
    obj.media_session_id = tmp2;
    let tmp3 = null;
    if (null != callback2) {
      tmp3 = callback2;
    }
    obj.rtc_connection_id = tmp3;
    callback2(closure_2[12]).track(constants.DEBUG_LOG_UPLOADED, obj);
    const obj2 = callback2(closure_2[12]);
    callback2(closure_2[13]).hideActionSheet();
  };
  items[1] = callback(arg1(dependencyMap[10]).Button, obj2);
  items[2] = callback(View, { style: tmp.buttonSpacer });
  const obj4 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[8]).t.ETE/oC);
  obj4.variant = "secondary";
  obj4.onPress = function onPress() {
    return callback2(closure_2[13]).hideActionSheet();
  };
  items[3] = callback(arg1(dependencyMap[10]).Button, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[6]).BottomSheet, obj);
};
