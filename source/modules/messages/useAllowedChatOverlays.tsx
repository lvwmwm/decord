// Module ID: 10426
// Function ID: 80306
// Name: ChatOverlays
// Dependencies: []
// Exports: default

// Module 10426 (ChatOverlays)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ChatOverlays = arg1(dependencyMap[2]).ChatOverlays;
const ActivityPanelModes = arg1(dependencyMap[3]).ActivityPanelModes;
const items = [, , ];
({ NEW_MESSAGES: arr[0], OPT_IN_CHANNEL: arr[1], SUMMARIES: arr[2] } = ChatOverlays);
const items1 = [, , ];
({ NEW_MESSAGES: arr2[0], OPT_IN_CHANNEL: arr2[1], SUMMARIES: arr2[2] } = ChatOverlays);
const items2 = [, , ];
({ NEW_MESSAGES: arr3[0], OPT_IN_CHANNEL: arr3[1], SUMMARIES: arr3[2] } = ChatOverlays);
const items3 = [, , ];
({ NEW_MESSAGES: arr4[0], OPT_IN_CHANNEL: arr4[1], SUMMARIES: arr4[2] } = ChatOverlays);
const items4 = [, , ];
({ NEW_MESSAGES: arr5[0], OPT_IN_CHANNEL: arr5[1], SUMMARIES: arr5[2] } = ChatOverlays);
let closure_5 = { ["no_text_activity"]: items, [ActivityPanelModes.DISCONNECTED]: items1, [ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE]: items2, [ActivityPanelModes.PANEL]: [], [ActivityPanelModes.PIP]: items3, [ActivityPanelModes.ACTIVITY_POPOUT_WINDOW]: items4 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => store.getCurrentEmbeddedActivity());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => store.getActivityPanelMode());
  arg1(dependencyMap[5]);
  if (null != stateFromStores) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    if (!importDefault(dependencyMap[6])(tmp4, closure_4)) {
      let no_text_activity = no_text_activity[stateFromStores1];
    }
    return no_text_activity;
  }
  no_text_activity = no_text_activity.no_text_activity;
};
