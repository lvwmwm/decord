// Module ID: 9702
// Function ID: 9703
// Name: useCanShowFavoritesGuildOnboarding
// Dependencies: [4521, 2099, 504, 4692, 2]
// Exports: default

// Module 9702 (useCanShowFavoritesGuildOnboarding)
import get_initialized from "get initialized" /* 504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import ActionSheetStore from "ActionSheetStore" /* 4521 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default function useCanShowFavoritesGuildOnboarding() {
  let open;
  let voiceChannelId;
  const items = [SelectedChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [ActionSheetStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const obj3 = NavigationRouteUtils;
  const isModalOpen = obj3.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};
