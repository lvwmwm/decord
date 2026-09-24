// Module ID: 10587
// Function ID: 10588
// Name: useCanShowFavoritesGuildOnboarding
// Dependencies: [4516, 2098, 504, 4686, 2]
// Exports: default

// Module 10587 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4686 */;
import ActionSheetStore from "ActionSheetStore" /* 4516 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default function useCanShowFavoritesGuildOnboarding() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [ActionSheetStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};
