// Module ID: 7880
// Function ID: 62738
// Name: _getStringFieldDefault
// Dependencies: []

// Module 7880 (_getStringFieldDefault)
function _getStringFieldDefault(arg0, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    tmp = arg0;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
const tmp2 = () => {
  class DisplayProfile {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_3(this, DisplayProfile);
      this.userId = arg0.userId;
      guildId = undefined;
      if (null != arg1) {
        guildId = arg1.guildId;
      }
      self.guildId = guildId;
      banner = undefined;
      if (null != arg1) {
        banner = arg1.banner;
      }
      if (null == banner) {
        banner = arg0.banner;
      }
      self.banner = banner;
      bio = undefined;
      tmp4 = closure_6;
      if (null != arg1) {
        bio = arg1.bio;
      }
      self.bio = tmp4(arg0.bio, bio);
      pronouns = undefined;
      tmp6 = closure_6;
      if (null != arg1) {
        pronouns = arg1.pronouns;
      }
      self.pronouns = tmp6(arg0.pronouns, pronouns);
      self.accentColor = arg0.accentColor;
      themeColors = undefined;
      if (null != arg1) {
        themeColors = arg1.themeColors;
      }
      if (null == themeColors) {
        themeColors = arg0.themeColors;
      }
      self.themeColors = themeColors;
      profileEffect = undefined;
      if (null != arg1) {
        profileEffect = arg1.profileEffect;
      }
      if (null == profileEffect) {
        profileEffect = arg0.profileEffect;
      }
      self.profileEffect = profileEffect;
      profileFrame = undefined;
      if (null != arg1) {
        profileFrame = arg1.profileFrame;
      }
      if (null == profileFrame) {
        profileFrame = arg0.profileFrame;
      }
      self.profileFrame = profileFrame;
      prop = undefined;
      if (null != arg1) {
        prop = arg1.popoutAnimationParticleType;
      }
      if (null == prop) {
        prop = arg0.popoutAnimationParticleType;
      }
      self.popoutAnimationParticleType = prop;
      ({ fetchStartedAt: self.fetchStartedAt, fetchEndedAt: self.fetchEndedAt } = arg0);
      self._userProfile = arg0;
      self._guildMemberProfile = arg1;
      return;
    }
  }
  const arg1 = DisplayProfile;
  let obj = {
    key: "premiumSince",
    get() {
      return this._userProfile.premiumSince;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "premiumGuildSince",
    get() {
      return this._userProfile.premiumGuildSince;
    }
  };
  items[1] = obj;
  obj = {
    key: "premiumType",
    get() {
      return this._userProfile.premiumType;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "private",
    get() {
      return this._userProfile.private;
    }
  };
  items[4] = {
    key: "widgets",
    get() {
      return this._userProfile.widgets;
    }
  };
  items[5] = {
    key: "gameWidgets",
    get() {
      const widgets = this._userProfile.widgets;
      let found;
      if (null != widgets) {
        found = widgets.filter(DisplayProfile(closure_2[3]).isGameWidget);
      }
      return found;
    }
  };
  items[6] = {
    key: "primaryColor",
    get() {
      const themeColors = this.themeColors;
      let first;
      if (null != themeColors) {
        first = themeColors[0];
      }
      if (null == first) {
        first = this.accentColor;
      }
      return first;
    }
  };
  items[7] = {
    key: "canUsePremiumProfileCustomization",
    get() {
      return callback(closure_2[4]).isPremiumAtLeast(this.premiumType, TIER_2.TIER_2);
    }
  };
  items[8] = {
    key: "canEditThemes",
    get() {
      return this.canUsePremiumProfileCustomization;
    }
  };
  items[9] = {
    key: "application",
    get() {
      return this._userProfile.application;
    }
  };
  items[10] = {
    key: "isLoaded",
    get() {
      const self = this;
      let tmp = undefined !== this._userProfile;
      if (tmp) {
        tmp = null == self.guildId || undefined !== self._guildMemberProfile;
        const tmp3 = null == self.guildId || undefined !== self._guildMemberProfile;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "hasThemeColors",
    value() {
      const themeColors = this.themeColors;
      let first;
      if (null != themeColors) {
        first = themeColors[0];
      }
      let tmp2 = null != first;
      if (!tmp2) {
        const themeColors2 = this.themeColors;
        let tmp3;
        if (null != themeColors2) {
          tmp3 = themeColors2[1];
        }
        tmp2 = null != tmp3;
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "hasPremiumCustomization",
    value() {
      const self = this;
      let hasThemeColorsResult = this.isUsingGuildMemberBanner() || self.isUsingGuildMemberBio();
      if (!hasThemeColorsResult) {
        hasThemeColorsResult = null != self.banner;
      }
      if (!hasThemeColorsResult) {
        hasThemeColorsResult = self.hasThemeColors();
      }
      if (!hasThemeColorsResult) {
        hasThemeColorsResult = null != self.popoutAnimationParticleType;
      }
      return hasThemeColorsResult;
    }
  };
  items[13] = {
    key: "isUsingGuildMemberBanner",
    value() {
      const _guildMemberProfile = this._guildMemberProfile;
      let banner;
      if (null != _guildMemberProfile) {
        banner = _guildMemberProfile.banner;
      }
      return null != banner;
    }
  };
  items[14] = {
    key: "isUsingGuildMemberBio",
    value() {
      const _guildMemberProfile = this._guildMemberProfile;
      let bio;
      if (null != _guildMemberProfile) {
        bio = _guildMemberProfile.bio;
      }
      let tmp2 = null != bio;
      if (tmp2) {
        const _guildMemberProfile2 = this._guildMemberProfile;
        let bio1;
        if (null != _guildMemberProfile2) {
          bio1 = _guildMemberProfile2.bio;
        }
        tmp2 = "" !== bio1;
      }
      return tmp2;
    }
  };
  items[15] = {
    key: "isUsingGuildMemberPronouns",
    value() {
      const _guildMemberProfile = this._guildMemberProfile;
      let pronouns;
      if (null != _guildMemberProfile) {
        pronouns = _guildMemberProfile.pronouns;
      }
      let tmp2 = null != pronouns;
      if (tmp2) {
        const _guildMemberProfile2 = this._guildMemberProfile;
        let pronouns1;
        if (null != _guildMemberProfile2) {
          pronouns1 = _guildMemberProfile2.pronouns;
        }
        tmp2 = "" !== pronouns1;
      }
      return tmp2;
    }
  };
  items[16] = {
    key: "getBannerURL",
    value(arg0) {
      let canAnimate;
      let size;
      const self = this;
      ({ canAnimate, size } = arg0);
      if (null != this.guildId) {
        if (self.isUsingGuildMemberBanner()) {
          let obj = {};
          ({ userId: obj4.id, guildId: obj4.guildId, banner: obj4.banner } = self);
          obj.canAnimate = canAnimate;
          obj.size = size;
          let guildMemberBannerURL = DisplayProfile(closure_2[5]).getGuildMemberBannerURL(obj);
          const obj3 = DisplayProfile(closure_2[5]);
        }
        return guildMemberBannerURL;
      }
      obj = DisplayProfile(closure_2[5]);
      obj = { id: self.userId, banner: self.banner, canAnimate, size };
      guildMemberBannerURL = obj.getUserBannerURL(obj);
    }
  };
  items[17] = {
    key: "getPreviewBanner",
    value(arg0, canAnimate) {
      let num = arg2;
      let self = this;
      if (arg2 === undefined) {
        num = 480;
      }
      if (null != arg0) {
        return arg0;
      } else if (null === arg0) {
        let userBannerURL = null;
        if (self.isUsingGuildMemberBanner()) {
          let obj = DisplayProfile(closure_2[5]);
          obj = { id: self.userId };
          self = self._userProfile.banner;
          obj.banner = self;
          obj.canAnimate = canAnimate;
          obj.size = num;
          userBannerURL = obj.getUserBannerURL(obj);
        }
        let bannerURL = userBannerURL;
      } else {
        obj = { canAnimate, size: num };
        bannerURL = self.getBannerURL(obj);
      }
    }
  };
  items[18] = {
    key: "getPreviewBio",
    value(pendingValue) {
      let bio;
      let obj = DisplayProfile(closure_2[6]);
      obj = { pendingValue, userValue: this._userProfile.bio };
      const _guildMemberProfile = this._guildMemberProfile;
      if (null != _guildMemberProfile) {
        bio = _guildMemberProfile.bio;
      }
      obj.guildValue = bio;
      obj.guildId = this.guildId;
      return obj.getProfilePreviewValue(obj);
    }
  };
  items[19] = {
    key: "getPreviewPronouns",
    value(pendingValue) {
      let pronouns;
      let obj = DisplayProfile(closure_2[6]);
      obj = { pendingValue, userValue: this._userProfile.pronouns };
      const _guildMemberProfile = this._guildMemberProfile;
      if (null != _guildMemberProfile) {
        pronouns = _guildMemberProfile.pronouns;
      }
      obj.guildValue = pronouns;
      obj.guildId = this.guildId;
      return obj.getProfilePreviewValue(obj);
    }
  };
  items[20] = {
    key: "getPreviewThemeColors",
    value(arg0) {
      let _userProfile;
      let themeColors;
      _userProfile = this;
      let first;
      if (null != arg0) {
        first = arg0[0];
      }
      if (null != first) {
        let tmp2;
        if (null != arg0) {
          tmp2 = arg0[1];
        }
        if (null != tmp2) {
          return arg0;
        }
      }
      if (undefined !== arg0) {
        ({ _userProfile, themeColors } = _userProfile);
      } else {
        themeColors = _userProfile.themeColors;
      }
    }
  };
  items[21] = {
    key: "getBadges",
    value() {
      let badges = this._userProfile.badges;
      if (null == badges) {
        badges = [];
      }
      const items = [...badges];
      const _guildMemberProfile = this._guildMemberProfile;
      let badges1;
      if (null != _guildMemberProfile) {
        badges1 = _guildMemberProfile.badges;
      }
      if (null == badges1) {
        badges1 = [];
      }
      HermesBuiltin.arraySpread(badges1, tmp);
      return items;
    }
  };
  items[22] = {
    key: "getLegacyUsername",
    value() {
      return this._userProfile.legacyUsername;
    }
  };
  return callback(DisplayProfile, items);
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/DisplayProfile.tsx");

export default tmp2;
