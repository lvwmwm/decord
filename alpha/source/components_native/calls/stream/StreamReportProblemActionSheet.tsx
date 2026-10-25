// Module ID: 18649
// Function ID: 18650
// Name: StreamReportProblemActionSheet
// Dependencies: [19, 5712, 1087, 21, 4971, 587, 558, 576, 7811, 1267, 5263, 18650, 5210, 5662, 18651, 7294, 7248, 1128, 7298, 5269, 2]

// Module 18649 (StreamReportProblemActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import BottomSheetModal from "BottomSheetModal" /* 5269 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheetRow from "ActionSheetRow" /* 7294 */;
import ActionSheet2 from "ActionSheet" /* 7298 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7811 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 18650 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 18651 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5712 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReportProblem(stream) {
  let tmp5;
  let tmp = stream;
  let obj = stream(576);
  const cResult = obj.c(11);
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  const tmp4 = closure_6();
  if (cResult[0] !== stream) {
    const fn = function c() {
      let id;
      let id1;
      let name;
      const obj = StreamerApplicationSelectors;
      const streamerApplication = obj.getStreamerApplication(stream, PresenceStore);
      const obj2 = { type: "Stream Issue Sheet", other_user_id: stream.ownerId, application_id: id, application_name: name, game_id: id1 };
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
    };
    cResult[0] = stream;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  analyticsData(5263)(tmp5);
  const tmp6 = analyticsData;
  if (cResult[2] === analyticsData) {
    let tmp8;
    let tmp11;
    let tmp14;
    if (cResult[3] === stream) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
      const intl = tmp(1128).intl;
      const tmp13 = <BottomSheetTitleHeader title={intl.string(tmp(1128).t.XuqqwI)} />;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      const tmp16 = jsx(tmp(7294).ActionSheetRow.Group, { hasIcons: false, children: tmp8 });
      cResult[6] = tmp8;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp4.container) {
      let tmp17;
      if (cResult[9] === tmp14) {
        tmp17 = cResult[10];
      }
      return tmp17;
    }
    const ActionSheet = tmp(7298).ActionSheet;
    const tmp19 = <ActionSheet scrollable header={tmp11}>{null}</ActionSheet>;
    cResult[8] = tmp4.container;
    cResult[9] = tmp14;
    cResult[10] = tmp19;
    tmp17 = tmp19;
  }
  const arr = tmp6(18651)({ isStreamer: false, isEndStream: false });
  const mapped = arr.map((label, index) => {
    let value;
    stream = label.value;
    return jsx(stream(dependencyMap[15]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        let obj2;
        const obj = { problem: stream, stream, feedback: "", streamApplication: obj2.getStreamerApplication(stream, PresenceStore), analyticsData, location: "Stream" };
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
  cResult[2] = analyticsData;
  cResult[3] = stream;
  cResult[4] = mapped;
  tmp8 = mapped;
}) : (function ReportProblem(arg0) {
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
});
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default tmp3;
