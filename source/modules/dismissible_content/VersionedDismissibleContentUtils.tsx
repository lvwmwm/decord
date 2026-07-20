// Module ID: 1346
// Function ID: 15822
// Name: getVersionedDismissibleContentCurrentVersion
// Dependencies: []
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 1346 (getVersionedDismissibleContentCurrentVersion)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).GAME_SHOP_ANNOUNCEMENT_MODAL_VERSION;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (arg1(dependencyMap[3]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = marketingBySurface.getMarketingBySurface(arg1(dependencyMap[4]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let version;
    if (null != marketingBySurface) {
      version = marketingBySurface.version;
    }
    let num9 = 0;
    if (null != version) {
      num9 = version;
    }
    return num9;
  } else if (arg1(dependencyMap[3]).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    let obj = { storeState: state.getState(), surface: arg1(dependencyMap[6]).EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return arg1(dependencyMap[5]).getNewestBadgeableVersion(obj);
  } else {
    if (arg1(dependencyMap[3]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (arg1(dependencyMap[3]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (arg1(dependencyMap[3]).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          return arg1(dependencyMap[7]).getWideBannerDismissibleContentVersion();
        } else if (arg1(dependencyMap[3]).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL === id) {
          return closure_4;
        } else {
          if (arg1(dependencyMap[3]).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
            if (arg1(dependencyMap[3]).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
              if (arg1(dependencyMap[3]).DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== id) {
                obj = arg1(dependencyMap[8]);
                obj = { andFail: false };
                obj.assertUnreachable(id, obj);
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
};
