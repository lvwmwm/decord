// Module ID: 1346
// Function ID: 15828
// Name: getVersionedDismissibleContentCurrentVersion
// Dependencies: [1347, 6820, 1334, 12993, 12994, 1881, 12995, 1361, 2]
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 1346 (getVersionedDismissibleContentCurrentVersion)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(closure_0) {
  if (require(1334) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === closure_0) {
    marketingBySurface = marketingBySurface.getMarketingBySurface(require(12993) /* CollectiblesMarketingSurface */.CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let version;
    if (null != marketingBySurface) {
      version = marketingBySurface.version;
    }
    let num10 = 0;
    if (null != version) {
      num10 = version;
    }
    return num10;
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === closure_0) {
    let obj = { storeState: state.getState(), surface: require(1881) /* PermissionOverwriteType */.EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return require(12994) /* getNewestBadgeableVersion */.getNewestBadgeableVersion(obj);
  } else {
    if (require(1334) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== closure_0) {
      if (require(1334) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== closure_0) {
        if (require(1334) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === closure_0) {
          return require(12995) /* getWideBannerDismissibleContentVersion */.getWideBannerDismissibleContentVersion();
        } else {
          if (require(1334) /* DismissibleContent */.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== closure_0) {
            if (require(1334) /* DismissibleContent */.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== closure_0) {
              if (require(1334) /* DismissibleContent */.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== closure_0) {
                if (require(1334) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== closure_0) {
                  if (require(1334) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === closure_0) {
                    return 0;
                  } else {
                    obj = require(1361) /* exact */;
                    obj = { andFail: false };
                    obj.assertUnreachable(closure_0, obj);
                    return 0;
                  }
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
