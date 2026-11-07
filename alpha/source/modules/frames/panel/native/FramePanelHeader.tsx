// Module ID: 19517
// Function ID: 19518
// Name: FramePanelHeader
// Dependencies: [32, 19, 17, 6901, 6902, 21, 7391, 19497, 19499, 19503, 19504, 19518, 504, 19513, 2]

// Module 19517 (FramePanelHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 6902 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7391 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 19497 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 19499 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 19503 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 19504 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19513 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 19518 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6901 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function FramePanelHeaderContentInner(arg0) {
  let frame;
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let items2;
  let items3;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  const obj = ActivityPanelHeader;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  const obj2 = ActivityPanelHeader;
  const minimizeAndQuestButtonContainerStyles = obj2.useMinimizeAndQuestButtonContainerStyles();
  let id;
  const tmp8 = InviteActivityButtonDefault;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = metroImportDefault(tmp8, { applicationId: id });
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  const obj3 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: items3 };
  const BaseActivityPanelContent = ActivityPanelHeader.BaseActivityPanelContent;
  const tmp12 = View;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  const obj4 = { style: items1, children: items2 };
  items1[1] = prop;
  let tmp15;
  const tmpResult = MinimizeActivityButtonDefault;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  items2 = [metroImportDefault(tmpResult, { activityName: tmp15, setMode }), , ];
  const obj5 = { applicationId: frame.applicationId };
  items2[1] = metroImportDefault(QuestActivityButtonDefault, obj5);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  items3 = [metroImportAll(tmp12, obj4), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = metroImportDefault(panel_LeaveActivityButtonDefault, { frame, setMode });
  return metroImportAll(BaseActivityPanelContent, obj3);
}
const View = react_native.View;
const asLaunched = FramesConstants.asLaunched;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_10 = react.memo(function FramePanelHeaderContent(arg0) {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = metroImportDefault(FramePanelHeaderContentInner, obj2);
  }
  return tmp2;
});
const memoResult = react.memo(function FramePanelHeader() {
  let obj4;
  const obj = ActivityPanelHeader;
  const obj2 = { context: FramePanelStateContextDefault };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj2);
  const obj3 = { style: baseActivityPanelHeader.headerStyles, children: metroImportDefault(closure_10, obj4) };
  obj4 = { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState };
  return metroImportDefault(View, obj3);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;
