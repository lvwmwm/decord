// Module ID: 4856
// Function ID: 4857
// Name: VersionedDismissibleContentUtils
// Dependencies: [4857, 5679, 4842, 5680, 5681, 1993, 5682, 4870, 2]
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 4856 (VersionedDismissibleContentUtils)
import Server from "Server" /* 1993 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import TypeUtils from "TypeUtils" /* 4870 */;
import AppLauncherBadgeUtils from "AppLauncherBadgeUtils" /* 5681 */;
import WideBannerDismissibleContentVersion from "WideBannerDismissibleContentVersion" /* 5682 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 5679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING !== id) {
    if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING_COACHMARK !== id) {
      if (dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
        const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: Server.EmbeddedActivitySurfaces.VOICE_LAUNCHER };
        const getNewestBadgeableVersion = AppLauncherBadgeUtils.getNewestBadgeableVersion;
        AppLauncherBadgeUtils;
        return getNewestBadgeableVersion(obj);
      } else {
        if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
          if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
            if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
              const tmpResult3 = WideBannerDismissibleContentVersion;
              return tmpResult3.getWideBannerDismissibleContentVersion();
            } else {
              if (dismissible_content.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
                if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
                  if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                    if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER !== id) {
                      if (dismissible_content.DismissibleContent.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED !== id) {
                        const tmpResult4 = TypeUtils;
                        tmpResult4.assertUnreachable(id, { andFail: false });
                        return 0;
                      }
                    }
                    return 0;
                  }
                }
              }
              return 1;
            }
          }
        }
        return 0;
      }
    }
  }
  const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(tmp(5680).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
  let num5;
  if (marketingBySurface != null) {
    num5 = marketingBySurface.version;
  }
  if (num5 == null) {
    num5 = 0;
  }
  return num5;
}
