// Module ID: 15400
// Function ID: 15401
// Name: useFavoritesGuildHideOnLeave
// Dependencies: [19, 4124, 1375, 1894, 9711, 9710, 2]
// Exports: default

// Module 15400 (useFavoritesGuildHideOnLeave)
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideOnLeave.tsx");

export default function useFavoritesGuildHideOnLeave() {
  const effect = React.useEffect(() => () => {
    if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = tmp(tmp2[4]);
      const favoritesAccess = tmpResult.getFavoritesAccess();
      if (tmp4) {
        let hasStoredFavoritesResult = initializeFromUserSettings.hasStoredFavorites();
        if (!hasStoredFavoritesResult) {
          hasStoredFavoritesResult = null != tmp5.favoriteGuildVisibleSetting;
        }
        if (!hasStoredFavoritesResult) {
          tmpResult = tmp(tmp2[5]);
          const result = tmpResult.setFavoritesGuildVisibility(false, "auto");
        }
        tmp5 = initializeFromUserSettings;
      }
      tmp4 = favoritesAccess.hasAccess && favoritesAccess.isFreemium;
    }
  }, []);
};
