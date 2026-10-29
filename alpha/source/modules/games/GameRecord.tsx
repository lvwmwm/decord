// Module ID: 2021
// Function ID: 2022
// Name: GameRecord
// Dependencies: [1404, 2022, 1998, 2030, 1415, 1385, 2]

// Module 2021 (GameRecord)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import Server from "Server" /* 1998 */;
import ApplicationRecord2 from "ApplicationRecord" /* 2022 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2030 */;
import Record from "Record" /* 1404 */;
import size_mod from "module_2" /* 2 */;

const ApplicationRecord = ApplicationRecord2;
let roles;

const createExecutable = ApplicationRecord2.createExecutable;
let size = size_mod;
const result = size.fileFinishedImporting("modules/games/GameRecord.tsx");
class GameRecord extends Record {
  constructor(item10012) {
    let aliases;
    let game_flags;
    let genres;
    let obj2;
    let rating_count;
    let rating_count2;
    let reviews;
    let tmp14;
    let tmp15;
    let tmp16;
    const tmp7 = new GameRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    ({ id: tmp7.id, name: tmp7.name, description: tmp7.description, aliases } = item10012);
    if (aliases == null) {
      aliases = [];
    }
    tmp7.aliases = aliases;
    let executables = item10012.executables;
    if (executables == null) {
      executables = [];
    }
    tmp7.executables = executables.map(createExecutable);
    let flag = item10012.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp7.overlay = flag;
    let flag2 = item10012.overlay_warn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp7.overlayWarn = flag2;
    let flag3 = item10012.overlay_compatibility_hook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp7.overlayCompatibilityHook = flag3;
    let flag4 = item10012.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp7.hook = flag4;
    tmp7.supportsOutOfProcessOverlay = ApplicationRecord.supportsOutOfProcessOverlay(item10012.overlay_methods);
    let third_party_skus = item10012.third_party_skus;
    if (third_party_skus == null) {
      third_party_skus = [];
    }
    tmp7.thirdPartySkus = third_party_skus;
    let themes = item10012.themes;
    if (themes == null) {
      themes = [];
    }
    tmp7.themes = themes;
    ({ linked_applications: tmp7.linkedApplications, genres } = item10012);
    if (genres == null) {
      genres = [];
    }
    tmp7.genres = genres;
    let platforms = item10012.platforms;
    if (platforms == null) {
      platforms = [];
    }
    tmp7.platforms = platforms;
    let prop = item10012.platform_availability;
    if (prop == null) {
      prop = [];
    }
    tmp7.platformAvailability = prop;
    let websites = item10012.websites;
    if (websites == null) {
      websites = [];
    }
    tmp7.websites = websites;
    ({ companies: tmp7.companies, screenshot_hashes: tmp7.screenshotHashes, screenshot_urls: tmp7.screenshotUrls, trailers: tmp7.trailers, l30_rank: tmp7.l30Rank, summary_localized: tmp7.summaryLocalized, media: tmp7.media, first_release_date: tmp7.firstReleaseDate, shop_collection_ids: tmp7.shopCollectionIds, community_guild_ids: tmp7.communityGuildIds, steam_release_status: tmp7.steamReleaseStatus, reviews } = item10012);
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    if (null == steam) {
      let app_store1;
      if (reviews != null) {
        app_store1 = reviews.app_store;
      }
      if (null == app_store1) {
        let google_play1;
        if (reviews != null) {
          google_play1 = reviews.google_play;
        }
        if (null == google_play1) {
          let opencritic;
          if (reviews != null) {
            opencritic = reviews.opencritic;
          }
        }
        tmp7.reviews = obj2;
        ({ opencritic_url: tmp7.opencriticUrl, game_flags } = item10012);
        if (game_flags == null) {
          game_flags = 0;
        }
        tmp7.gameFlags = game_flags;
        tmp7.contentClassification = item10012.content_classification;
        return tmp7;
      }
    }
    let tmp13;
    if (null != reviews.steam) {
      tmp13 = { rating: reviews.steam.rating, ratingCount: reviews.steam.rating_count, recentRating: reviews.steam.recent_rating, recentRatingCount: reviews.steam.recent_rating_count, localizedRating: reviews.steam.localized_rating, localizedRatingCount: reviews.steam.localized_rating_count };
      const obj = { rating: reviews.steam.rating, ratingCount: reviews.steam.rating_count, recentRating: reviews.steam.recent_rating, recentRatingCount: reviews.steam.recent_rating_count, localizedRating: reviews.steam.localized_rating, localizedRatingCount: reviews.steam.localized_rating_count };
    }
    const app_store = reviews.app_store;
    obj2 = { steam: tmp13, appStore: tmp14, googlePlay: tmp15, opencritic: tmp16 };
    tmp14 = undefined;
    if (null != app_store) {
      const obj5 = { rating: null, ratingCount: rating_count };
      ({ rating: obj3.rating, rating_count } = app_store);
      if (rating_count == null) {
        rating_count = app_store.global_rating_count;
      }
      tmp14 = obj5;
    }
    const google_play = reviews.google_play;
    tmp15 = undefined;
    if (null != google_play) {
      const obj9 = { rating: null, ratingCount: rating_count2 };
      ({ rating: obj4.rating, rating_count: rating_count2 } = google_play);
      if (rating_count2 == null) {
        rating_count2 = google_play.global_rating_count;
      }
      tmp15 = obj9;
    }
    tmp16 = undefined;
    if (null != reviews.opencritic) {
      tmp16 = { topCriticRating: reviews.opencritic.top_critic_rating, topCriticRatingCount: reviews.opencritic.top_critic_rating_count, tier: reviews.opencritic.tier };
      const obj10 = { topCriticRating: reviews.opencritic.top_critic_rating, topCriticRatingCount: reviews.opencritic.top_critic_rating_count, tier: reviews.opencritic.tier };
    }
  }
  getOfficialApplicationId() {
    const linkedApplications = this.linkedApplications;
    let id;
    if (linkedApplications != null) {
      const found = linkedApplications.find((type) => type.type === Server.GameLinkTypes.OFFICIAL);
      if (found != null) {
        id = found.id;
      }
    }
    return id;
  }
  getIconURL(size, format) {
    const media = this.media;
    let icon;
    const id = this.id;
    const tmp = getGameMediaRefURLDefault;
    if (media != null) {
      icon = media.icon;
    }
    const obj = { size, format };
    return tmp(id, icon, obj);
  }
  getBannerURL(size) {
    const media = this.media;
    let banner;
    const id = this.id;
    const tmp = getGameMediaRefURLDefault;
    if (media != null) {
      banner = media.banner;
    }
    const obj = { keepAspectRatio: true, size };
    return tmp(id, banner, obj);
  }
  getCoverURL(rounded) {
    const media = this.media;
    let cover;
    const id = this.id;
    const tmp2 = getGameMediaRefURLDefault;
    if (media != null) {
      cover = media.cover;
    }
    let str = "png";
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    const obj = { keepAspectRatio: true, format: str, size: rounded };
    return tmp2(id, cover, obj);
  }
  getArtworkURLs(size) {
    let str;
    const self = this;
    const tmp = str;
    str = null;
    const tmp2 = self;
    if (str(self[4]).SUPPORTS_WEBP) {
      str = "webp";
    }
    const media = this.media;
    let artwork;
    if (media != null) {
      artwork = media.artwork;
    }
    if (artwork == null) {
      artwork = [];
    }
    const mapped = artwork.map((item) => {
      const obj = { size, format: str, keepAspectRatio: true };
      return getGameMediaRefURLDefault(self.id, item, obj);
    });
    return mapped.filter(tmp(tmp2[5]).isNotNullish);
  }
  getScreenshotURL(index, size) {
    let str;
    const screenshotUrls = this.screenshotUrls;
    let tmp;
    if (screenshotUrls != null) {
      tmp = screenshotUrls[index];
    }
    let tmp7Result = null;
    if (null != tmp) {
      const id = this.id;
      const obj2 = { size, format: str, keepAspectRatio: true };
      str = null;
      const obj = { type: "url", value: tmp };
      const tmp7 = getGameMediaRefURLDefault;
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      tmp7Result = tmp7(id, obj, obj2);
    }
    return tmp7Result;
  }
  getScreenshotURLs(arg0) {
    const self = this;
    let closure_0 = arg0;
    let screenshotUrls = this.screenshotUrls;
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    const mapped = screenshotUrls.map((item, index) => self.getScreenshotURL(index, closure_0));
    return mapped.filter(GlobalUtils.isNotNullish);
  }
  getCompanyByRole(DEVELOPER) {
    let closure_0 = DEVELOPER;
    const companies = this.companies;
    let found;
    if (companies != null) {
      found = companies.filter((roles) => {
        roles = roles.roles;
        return roles.includes(DEVELOPER);
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
}
const prototype = GameRecord.prototype;

export default GameRecord;
