// Module ID: 15751
// Function ID: 120378
// Name: ReportProblem
// Dependencies: []
// Exports: default

// Module 15751 (ReportProblem)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { padding: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  ({ stream: closure_0, analyticsData: closure_1 } = arg0);
  importDefault(dependencyMap[6])(() => {
    let obj = lib(closure_2[7]);
    const streamerApplication = obj.getStreamerApplication(lib, closure_3);
    obj = { type: "Stream Issue Sheet", other_user_id: lib.ownerId };
    let id = null;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj.application_id = id;
    let name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj.application_name = name;
    let id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj.game_id = id1;
    callback(closure_2[8]).track(constants.OPEN_POPOUT, obj);
  });
  const tmp = callback();
  const mapped = importDefault(dependencyMap[12])({}).map((label) => {
    const value = label.value;
    return callback2(value(closure_2[13]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: value, stream: value, feedback: "" };
        const tmp = callback(closure_2[9]);
        obj.streamApplication = value(closure_2[7]).getStreamerApplication(value, closure_3);
        obj.analyticsData = callback;
        obj.location = "Stream";
        tmp(obj);
        const obj2 = value(closure_2[7]);
        callback(closure_2[10]).hideActionSheet();
        const obj3 = callback(closure_2[10]);
        value(closure_2[11]).presentFeedbackSent();
      }
    }, arg1);
  });
  let obj = { scrollable: true };
  obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj.title = intl.string(arg1(dependencyMap[16]).t.XuqqwI);
  obj.header = jsx(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.container, children: jsx(arg1(dependencyMap[13]).ActionSheetRow.Group, { hasIcons: false, children: mapped }) };
  obj.children = jsx(arg1(dependencyMap[17]).BottomSheetScrollView, obj);
  return jsx(arg1(dependencyMap[14]).ActionSheet, obj);
};
