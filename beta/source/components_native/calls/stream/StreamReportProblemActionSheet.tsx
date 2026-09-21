// Module ID: 17640
// Function ID: 17641
// Name: StreamReportProblemActionSheet
// Dependencies: [19, 4798, 1078, 21, 4758, 580, 558, 568, 7985, 1245, 5203, 17009, 4725, 4457, 17641, 7445, 7396, 1119, 7449, 6863, 2]

// Module 17640 (StreamReportProblemActionSheet)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import BottomSheetModal from "BottomSheetModal" /* 6863 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheetRow from "ActionSheetRow" /* 7445 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7985 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 17009 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 17641 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4798 */;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((stream) => {
  const cResult = stream(568).c(11);
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  const tmp4 = closure_6();
  if (cResult[0] !== stream) {
    const fn = function c() {
      const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
      const obj3 = { type: "Stream Issue Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
      let id = null;
      if (null != streamerApplication) {
        id = streamerApplication.id;
      }
      obj3.application_id = id;
      let name = null;
      if (null != streamerApplication) {
        name = streamerApplication.name;
      }
      obj3.application_name = name;
      let id1 = null;
      if (null != streamerApplication) {
        id1 = streamerApplication.id;
      }
      obj3.game_id = id1;
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj3);
    };
    cResult[0] = stream;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  analyticsData(5203)(tmp5);
  if (cResult[2] === analyticsData) {
    if (cResult[3] === stream) {
      let tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { title: null };
      const intl = tmp(1119).intl;
      obj2.title = intl.string(tmp(1119).t.XuqqwI);
      const tmp13 = jsx(tmp(7396).BottomSheetTitleHeader, { title: null });
      cResult[5] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      let obj3 = { hasIcons: false, children: tmp8 };
      const tmp16 = jsx(tmp(7445).ActionSheetRow.Group, { hasIcons: false, children: tmp8 });
      cResult[6] = tmp8;
      cResult[7] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp4.container) {
      if (cResult[9] === tmp14) {
        let tmp17 = cResult[10];
      }
      return tmp17;
    }
    const obj4 = { scrollable: true, header: tmp11, children: null };
    const obj5 = { style: tmp4.container, children: tmp14 };
    obj4.children = jsx(tmp(6863).BottomSheetScrollView, { style: tmp4.container, children: tmp14 });
    const tmp19 = jsx(tmp(7449).ActionSheet, { scrollable: true, header: tmp11, children: null });
    cResult[8] = tmp4.container;
    cResult[9] = tmp14;
    cResult[10] = tmp19;
    tmp17 = tmp19;
  }
  let obj = stream(568);
  const mapped = analyticsData(17641)({ isStreamer: false, isEndStream: false }).map((label, index) => {
    stream = label.value;
    return jsx(stream(dependencyMap[15]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: value, stream, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = trackStreamProblemDefault;
        obj.streamApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
        obj.analyticsData = analyticsData;
        tmp(obj);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        ToastUtils.presentFeedbackSent();
      }
    }, index);
  });
  cResult[2] = analyticsData;
  cResult[3] = stream;
  cResult[4] = mapped;
  tmp8 = mapped;
}) : ((arg0) => {
  ({ stream: require, analyticsData: importDefault } = arg0);
  useMountEffectDefault(() => {
    const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
    const obj3 = { type: "Stream Issue Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj3.application_id = id;
    let name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj3.application_name = name;
    let id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj3.game_id = id1;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj3);
  });
  let tmp = closure_6();
  const mapped = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false }).map((label, index) => {
    value = label.value;
    return jsx(stream(dependencyMap[15]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: value, stream, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = trackStreamProblemDefault;
        obj.streamApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
        obj.analyticsData = analyticsData;
        tmp(obj);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        ToastUtils.presentFeedbackSent();
      }
    }, index);
  });
  let obj = { scrollable: true, header: null, children: null };
  let obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.XuqqwI);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const arr = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { style: tmp.container, children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(ActionSheet.ActionSheet, { scrollable: true, header: null, children: null });
});
