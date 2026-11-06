// Module ID: 18896
// Function ID: 18897
// Name: VisibleChannelScreenStore
// Dependencies: [560, 2]
// Exports: setVisibleChannelScreen

// Module 18896 (VisibleChannelScreenStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const obj = module_560.create(() => ({ channelId: null }));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx");

export default obj;
export function setVisibleChannelScreen(channelId) {
  if (obj.getState().channelId !== channelId) {
    const obj2 = { channelId };
    obj.setState(obj2);
  }
}
