// Module ID: 4148
// Function ID: 35040
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4148 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[6]);
const createExecutable = arg1(dependencyMap[6]).createExecutable;
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class GameRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, GameRecord);
      obj = closure_6(GameRecord);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name, description: tmp6.description, aliases } = importDefaultResult);
      if (null == aliases) {
        aliases = [];
      }
      tmp2Result.aliases = aliases;
      executables = importDefaultResult.executables;
      if (null == executables) {
        executables = [];
      }
      tmp2Result.executables = executables.map(closure_9);
      overlay = importDefaultResult.overlay;
      tmp2Result.overlay = null != overlay && overlay;
      overlay_warn = importDefaultResult.overlay_warn;
      tmp2Result.overlayWarn = null != overlay_warn && overlay_warn;
      overlay_compatibility_hook = importDefaultResult.overlay_compatibility_hook;
      tmp2Result.overlayCompatibilityHook = null != overlay_compatibility_hook && overlay_compatibility_hook;
      hook = importDefaultResult.hook;
      tmp2Result.hook = null == hook || hook;
      tmp2Result.supportsOutOfProcessOverlay = closure_8.supportsOutOfProcessOverlay(importDefaultResult.overlay_methods);
      third_party_skus = importDefaultResult.third_party_skus;
      if (null == third_party_skus) {
        third_party_skus = [];
      }
      tmp2Result.thirdPartySkus = third_party_skus;
      themes = importDefaultResult.themes;
      if (null == themes) {
        themes = [];
      }
      tmp2Result.themes = themes;
      ({ linked_applications: tmp6.linkedApplications, genres } = importDefaultResult);
      if (null == genres) {
        genres = [];
      }
      tmp2Result.genres = genres;
      platforms = importDefaultResult.platforms;
      if (null == platforms) {
        platforms = [];
      }
      tmp2Result.platforms = platforms;
      websites = importDefaultResult.websites;
      if (null == websites) {
        websites = [];
      }
      tmp2Result.websites = websites;
      ({ companies: tmp6.companies, screenshot_hashes: tmp6.screenshotHashes, screenshot_urls: tmp6.screenshotUrls, trailers: tmp6.trailers, l30_rank: tmp6.l30Rank, summary_localized: tmp6.summaryLocalized, media: tmp6.media, first_release_date: tmp6.firstReleaseDate, shop_collection_ids: tmp6.shopCollectionIds, steam_release_status: tmp6.steamReleaseStatus, reviews } = importDefaultResult);
      steam = undefined;
      if (null != reviews) {
        steam = reviews.steam;
      }
      if (null != steam) {
        obj = {};
        tmp10 = undefined;
        if (null != reviews.steam) {
          obj1 = {};
          obj1.rating = reviews.steam.rating;
          obj1.ratingCount = reviews.steam.rating_count;
          obj1.recentRating = reviews.steam.recent_rating;
          obj1.recentRatingCount = reviews.steam.recent_rating_count;
          obj1.localizedRating = reviews.steam.localized_rating;
          obj1.localizedRatingCount = reviews.steam.localized_rating_count;
          tmp10 = obj1;
        }
        obj.steam = tmp10;
        tmp11 = undefined;
        if (null != reviews.opencritic) {
          obj2 = {};
          obj2.topCriticRating = reviews.opencritic.top_critic_rating;
          obj2.topCriticRatingCount = reviews.opencritic.top_critic_rating_count;
          obj2.tier = reviews.opencritic.tier;
          tmp11 = obj2;
        }
        obj.opencritic = tmp11;
        tmp9 = obj;
      } else {
        opencritic = undefined;
        if (null != reviews) {
          opencritic = reviews.opencritic;
        }
      }
      tmp2Result.reviews = tmp9;
      ({ opencritic_url: tmp6.opencriticUrl, game_flags } = importDefaultResult);
      num = 0;
      if (null != game_flags) {
        num = game_flags;
      }
      tmp2Result.gameFlags = num;
      tmp2Result.contentClassification = importDefaultResult.content_classification;
      return tmp2Result;
    }
  }
  const arg1 = GameRecord;
  callback2(GameRecord, importDefaultResult);
  let obj = {
    key: "applicationId",
    get() {
      return this.id;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getOfficialApplicationId",
    value() {
      const linkedApplications = this.linkedApplications;
      let id;
      if (null != linkedApplications) {
        const found = linkedApplications.find((type) => type.type === callback(closure_2[7]).GameLinkTypes.OFFICIAL);
        if (null != found) {
          id = found.id;
        }
      }
      return id;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIconURL",
    value(size, format) {
      const media = this.media;
      let icon;
      if (null != media) {
        icon = media.icon;
      }
      return callback(closure_2[8])(this.id, icon, { size, format });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getBannerURL",
    value(size) {
      const media = this.media;
      let banner;
      if (null != media) {
        banner = media.banner;
      }
      return callback(closure_2[8])(this.id, banner, { keepAspectRatio: true, size });
    }
  };
  items[4] = {
    key: "getCoverURL",
    value(size) {
      const media = this.media;
      let cover;
      if (null != media) {
        cover = media.cover;
      }
      const obj = { keepAspectRatio: true };
      let str = "png";
      if (GameRecord(closure_2[9]).SUPPORTS_WEBP) {
        str = "webp";
      }
      obj.format = str;
      obj.size = size;
      return callback(closure_2[8])(this.id, cover, obj);
    }
  };
  items[5] = {
    key: "getArtworkURLs",
    value() {
      const GameRecord = this;
      const media = this.media;
      let artwork;
      if (null != media) {
        artwork = media.artwork;
      }
      if (null == artwork) {
        artwork = [];
      }
      const mapped = artwork.map((arg0) => callback(closure_2[8])(self.id, arg0, { keepAspectRatio: true }));
      return mapped.filter(GameRecord(closure_2[10]).isNotNullish);
    }
  };
  items[6] = {
    key: "getCompanyByRole",
    value(arg0) {
      const GameRecord = arg0;
      const companies = this.companies;
      let found;
      if (null != companies) {
        found = companies.filter((roles) => {
          roles = roles.roles;
          return roles.includes(roles);
        });
      }
      if (null == found) {
        found = [];
      }
      return found;
    }
  };
  return callback(GameRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/games/GameRecord.tsx");

export default tmp3;
