// Module ID: 10466
// Function ID: 80572
// Name: ChatOverlays
// Dependencies: [1347, 1348, 10464, 10256, 624, 3748, 10467, 2]
// Exports: default

// Module 10466 (ChatOverlays)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChatOverlays } from "ChatOverlays";
import { ActivityPanelModes } from "ActivityPanelModes";

const require = arg1;
let items = [, , ];
({ NEW_MESSAGES: arr[0], OPT_IN_CHANNEL: arr[1], SUMMARIES: arr[2] } = ChatOverlays);
let items1 = [, , ];
({ NEW_MESSAGES: arr2[0], OPT_IN_CHANNEL: arr2[1], SUMMARIES: arr2[2] } = ChatOverlays);
const items2 = [, , ];
({ NEW_MESSAGES: arr3[0], OPT_IN_CHANNEL: arr3[1], SUMMARIES: arr3[2] } = ChatOverlays);
const items3 = [, , ];
({ NEW_MESSAGES: arr4[0], OPT_IN_CHANNEL: arr4[1], SUMMARIES: arr4[2] } = ChatOverlays);
const items4 = [, , ];
({ NEW_MESSAGES: arr5[0], OPT_IN_CHANNEL: arr5[1], SUMMARIES: arr5[2] } = ChatOverlays);
let closure_5 = { ["no_text_activity"]: items, [ActivityPanelModes.DISCONNECTED]: items1, [ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE]: items2, [ActivityPanelModes.PANEL]: [], [ActivityPanelModes.PIP]: items3, [ActivityPanelModes.ACTIVITY_POPOUT_WINDOW]: items4 };
const result = require("ChatOverlays").fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_3.getCurrentEmbeddedActivity());
  const obj = require(624) /* defaultAreStatesEqual */;
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => outer1_3.getActivityPanelMode());
  require(3748) /* getEmbeddedActivityLocationChannelId */;
  if (null != stateFromStores) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    if (!importDefault(10467)(tmp4, _isNativeReflectConstruct)) {
      no_text_activity = no_text_activity[stateFromStores1];
    }
    return no_text_activity;
  }
  no_text_activity = no_text_activity.no_text_activity;
};
