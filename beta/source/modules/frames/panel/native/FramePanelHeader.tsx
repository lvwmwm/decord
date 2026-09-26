// Module ID: 17513
// Function ID: 17514
// Name: FramePanelHeader
// Dependencies: [32, 19, 17, 9345, 9346, 21, 7445, 17492, 17494, 17498, 17499, 17514, 504, 17509, 2]

// Module 17513 (FramePanelHeader)
import initialize from "initialize" /* 504 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7445 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 17492 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17494 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17498 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17499 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17509 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 17514 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9345 */;

require = fn;
function FramePanelHeaderContentInner(arg0) {
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  const baseActivityPanelHeaderContent = ActivityPanelHeader.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  const minimizeAndQuestButtonContainerStyles = ActivityPanelHeader.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = React5(InviteActivityButtonDefault, { applicationId: id });
  const obj3 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = prop;
  let tmp15;
  const tmp12 = View;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [React5(MinimizeActivityButtonDefault, { activityName: tmp15, setMode }), React5(QuestActivityButtonDefault, { applicationId: frame.applicationId }), ];
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj4.children = items2;
  const items3 = [React6(tmp12, obj4), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = React5(panel_LeaveActivityButtonDefault, { frame, setMode });
  obj3.children = items3;
  return React6(ActivityPanelHeader.BaseActivityPanelContent, obj3);
}
const View = fn(17).View;
const asLaunched = fn(9346).asLaunched;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_10 = noop.memo((arg0) => {
  const items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = React5(FramePanelHeaderContentInner, obj2);
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default noop.memo(() => {
  const obj = ActivityPanelHeader;
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader({ context: FramePanelStateContextDefault });
  const obj3 = { style: baseActivityPanelHeader.headerStyles, children: React5(closure_10, { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState }) };
  return React5(View, obj3);
});
