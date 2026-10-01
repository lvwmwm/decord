// Module ID: 16869
// Function ID: 16870
// Name: FramePanelHeader
// Dependencies: [32, 19, 17, 8499, 8500, 21, 6589, 16848, 16850, 16854, 16855, 16870, 504, 16865, 2]

// Module 16869 (FramePanelHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 16848 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 16850 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 16854 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 16855 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16865 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 16870 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;
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
let closure_10 = react.memo((arg0) => {
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
const memoResult = react.memo(() => {
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
