// Module ID: 10967
// Function ID: 10968
// Name: useAllowedChatOverlays
// Dependencies: [2044, 2045, 10965, 8502, 563, 4458, 8803, 2]
// Exports: default

// Module 10967 (useAllowedChatOverlays)
import useStateFromStores from "useStateFromStores" /* 563 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8803 */;
import ChatOverlayConstants from "ChatOverlayConstants" /* 10965 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

let items;
const ChatOverlays = ChatOverlayConstants.ChatOverlays;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const no_text_activity = "no_text_activity";
let obj = { no_text_activity: items };
items = [, , ];
({ NEW_MESSAGES: arr[0], OPT_IN_CHANNEL: arr[1], SUMMARIES: arr[2] } = ChatOverlays);
let items1 = [, , ];
({ NEW_MESSAGES: arr2[0], OPT_IN_CHANNEL: arr2[1], SUMMARIES: arr2[2] } = ChatOverlays);
obj[ActivityPanelModes.DISCONNECTED] = items1;
const items2 = [, , ];
({ NEW_MESSAGES: arr3[0], OPT_IN_CHANNEL: arr3[1], SUMMARIES: arr3[2] } = ChatOverlays);
obj[ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE] = items2;
obj[ActivityPanelModes.PANEL] = [];
const items3 = [, , ];
({ NEW_MESSAGES: arr4[0], OPT_IN_CHANNEL: arr4[1], SUMMARIES: arr4[2] } = ChatOverlays);
obj[ActivityPanelModes.PIP] = items3;
const items4 = [, , ];
({ NEW_MESSAGES: arr5[0], OPT_IN_CHANNEL: arr5[1], SUMMARIES: arr5[2] } = ChatOverlays);
obj[ActivityPanelModes.ACTIVITY_POPOUT_WINDOW] = items4;
const result = size.fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  obj = useStateFromStores;
  const items = [EmbeddedActivitiesStore];
  const stateFromStores = obj.useStateFromStores(items, () => EmbeddedActivitiesStore.getCurrentEmbeddedActivity());
  const items1 = [EmbeddedActivitiesStore];
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => EmbeddedActivitiesStore.getActivityPanelMode());
  embeddedActivityLocationUtils;
  if (stateFromStores != null) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    let tmp9;
    if (!isVoiceEmbeddedActivityDefault(tmp5, ChannelStore)) {
      tmp9 = obj[stateFromStores1];
    }
    return tmp9;
  }
  tmp9 = obj[no_text_activity];
};
