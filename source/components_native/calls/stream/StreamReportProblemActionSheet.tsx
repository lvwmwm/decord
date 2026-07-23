// Module ID: 15892
// Function ID: 122783
// Name: ReportProblem
// Dependencies: [31, 4217, 653, 33, 4130, 689, 4559, 6981, 675, 15893, 4098, 3830, 15894, 5502, 5500, 5186, 1212, 5189, 2]
// Exports: default

// Module 15892 (ReportProblem)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  let importDefault;
  let require;
  ({ stream: require, analyticsData: importDefault } = arg0);
  importDefault(4559)(() => {
    let obj = outer1_0(outer1_2[7]);
    const streamerApplication = obj.getStreamerApplication(ownerId, outer1_3);
    obj = { type: "Stream Issue Sheet", other_user_id: ownerId.ownerId };
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
    outer1_1(outer1_2[8]).track(outer1_4.OPEN_POPOUT, obj);
  });
  let tmp = _createForOfIteratorHelperLoose();
  const mapped = importDefault(15894)({ isStreamer: false, isEndStream: false }).map((label) => {
    const value = label.value;
    return outer1_5(outer1_0(outer1_2[13]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: closure_0, stream: value, feedback: "" };
        const tmp = outer2_1(outer2_2[9]);
        obj.streamApplication = outer2_0(outer2_2[7]).getStreamerApplication(value, outer2_3);
        obj.analyticsData = outer1_1;
        obj.location = "Stream";
        tmp(obj);
        const obj2 = outer2_0(outer2_2[7]);
        outer2_1(outer2_2[10]).hideActionSheet();
        const obj3 = outer2_1(outer2_2[10]);
        outer2_0(outer2_2[11]).presentFeedbackSent();
      }
    }, arg1);
  });
  let obj = { scrollable: true };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.XuqqwI);
  obj.header = jsx(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, {});
  obj = { style: tmp.container, children: jsx(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: false, children: mapped }) };
  obj.children = jsx(require(5189) /* BottomSheetModal */.BottomSheetScrollView, { style: tmp.container, children: jsx(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(require(5500) /* ActionSheet */.ActionSheet, { style: tmp.container, children: jsx(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
};
