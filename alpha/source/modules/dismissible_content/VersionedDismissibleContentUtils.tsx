// Module ID: 2042
// Function ID: 2043
// Name: VersionedDismissibleContentUtils
// Dependencies: [2043, 7191, 2029, 13736, 13737, 1979, 13738, 2056, 2]
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 2042 (VersionedDismissibleContentUtils)
import dismissible_content from "dismissible_content" /* 2029 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7191 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(tmp(13736).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (tmp(2029).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: tmp(1979).EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return tmp(13737).getNewestBadgeableVersion(obj);
  } else {
    if (tmp(2029).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (tmp(2029).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (tmp(2029).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          return tmp(13738).getWideBannerDismissibleContentVersion();
        } else {
          if (tmp(2029).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (tmp(2029).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (tmp(2029).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (tmp(2029).DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === id) {
                  return 0;
                } else {
                  tmp(2056).assertUnreachable(id, { andFail: false });
                  return 0;
                }
              }
            }
          }
          return 1;
        }
      }
    }
    return 0;
  }
};
