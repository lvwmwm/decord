// Module ID: 19607
// Function ID: 19608
// Name: StreamReportProblemActionSheet
// Dependencies: [19, 5895, 1072, 21, 5141, 575, 5729, 8022, 1252, 19608, 5382, 5845, 19609, 7504, 7502, 7457, 1113, 5400, 2]
// Exports: default

// Module 19607 (StreamReportProblemActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import useMountEffectDefault from "useMountEffect" /* 5729 */;
import ToastUtils from "ToastUtils" /* 5845 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7457 */;
import ActionSheet2 from "ActionSheet" /* 7502 */;
import ActionSheetRow from "ActionSheetRow" /* 7504 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 8022 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 19608 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 19609 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5895 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  let analyticsData;
  let intl;
  let stream;
  ({ stream: require, analyticsData: importDefault } = arg0);
  let tmp = closure_6();
  const tmp2 = useMountEffectDefault(() => {
    let id;
    let id1;
    let name;
    const obj = StreamerApplicationSelectors;
    const streamerApplication = obj.getStreamerApplication(require, PresenceStore);
    const obj2 = { type: "Stream Issue Sheet", other_user_id: require.ownerId, application_id: id, application_name: name, game_id: id1 };
    id = null;
    const track = AnalyticsUtilsDefault.track;
    const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
    AnalyticsUtilsDefault;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    track(OPEN_POPOUT, obj2);
  });
  const arr = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false });
  const mapped = arr.map((label, index) => {
    const value = label.value;
    return jsx(ActionSheetRow.ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        let obj2;
        const obj = { problem: value, stream: require, feedback: "", streamApplication: obj2.getStreamerApplication(require, PresenceStore), analyticsData: importDefault, location: "Stream" };
        const tmp = trackStreamProblemDefault;
        obj2 = StreamerApplicationSelectors;
        tmp(obj);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = ToastUtils;
        obj4.presentFeedbackSent();
      }
    }, index);
  });
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(intl2.t.XuqqwI) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  let obj3 = { style: tmp.container, children: null };
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return <ActionSheet scrollable header={null}>{null}</ActionSheet>;
};
