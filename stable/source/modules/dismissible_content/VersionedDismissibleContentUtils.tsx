// Module ID: 2039
// Function ID: 2040
// Name: VersionedDismissibleContentUtils
// Dependencies: [2040, 7858, 2027, 14286, 14287, 1978, 14288, 2053, 2]
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 2039 (VersionedDismissibleContentUtils)
import dismissible_content from "dismissible_content" /* 2027 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7858 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(tmp(14286).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (tmp(2027).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: tmp(1978).EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return tmp(14287).getNewestBadgeableVersion(obj);
  } else {
    if (tmp(2027).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (tmp(2027).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (tmp(2027).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          return tmp(14288).getWideBannerDismissibleContentVersion();
        } else {
          if (tmp(2027).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (tmp(2027).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (tmp(2027).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (tmp(2027).DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === id) {
                  return 0;
                } else {
                  tmp(2053).assertUnreachable(id, { andFail: false });
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
