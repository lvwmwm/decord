// Module ID: 17041
// Function ID: 17042
// Name: StreamReportProblemActionSheet
// Dependencies: [19, 4876, 1074, 21, 4836, 576, 5298, 7157, 1241, 16321, 4800, 4527, 17042, 6620, 6618, 6570, 1115, 6045, 2]
// Exports: default

// Module 17041 (StreamReportProblemActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import ActionSheetRow from "ActionSheetRow" /* 6620 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7157 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 16321 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 17042 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import createStyles from "createStyles" /* 4836 */;
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
