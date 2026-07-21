// Module ID: 1857
// Function ID: 20440
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1857 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ LOCAL_BOT_ID: closure_9, NON_USER_BOT_DISCRIMINATOR: closure_10, PREMIUM_TYPE_NONE: closure_11, UserFlags: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ SKU_ID_PURCHASED_FLAGS: closure_13, PremiumTypes: closure_14, PurchasedFlags: closure_15 } = arg1(dependencyMap[7]));
let tmp5 = (importDefaultResult) => {
  class UserRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, UserRecord);
      obj = closure_7(UserRecord);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      UserRecord = tmp2Result;
      tmp2Result.hasFlag = () => false;
      tmp2Result.isStaff = () => false;
      tmp2Result.isStaffPersonal = () => false;
      tmp2Result.hasAnyStaffLevel = () => false;
      premiumType = importDefaultResult.premium_type;
      if (null == premiumType) {
        premiumType = importDefaultResult.premiumType;
      }
      ({ id: tmp6.id, username } = importDefaultResult);
      str = "";
      if (null != username) {
        str = username;
      }
      tmp2Result.username = str;
      discriminator = importDefaultResult.discriminator;
      if (null == discriminator) {
        discriminator = closure_10;
      }
      tmp2Result.discriminator = discriminator;
      avatar = importDefaultResult.avatar;
      tmp7 = null;
      if (null != avatar) {
        tmp7 = avatar;
      }
      tmp2Result.avatar = tmp7;
      avatarDecorationData = importDefaultResult.avatar_decoration_data;
      if (null == avatarDecorationData) {
        avatarDecorationData = importDefaultResult.avatarDecorationData;
      }
      tmp2Result.avatarDecoration = avatarDecorationData;
      email = importDefaultResult.email;
      tmp8 = null;
      if (null != email) {
        tmp8 = email;
      }
      tmp2Result.email = tmp8;
      verified = importDefaultResult.verified;
      tmp2Result.verified = null != verified && verified;
      bot = importDefaultResult.bot;
      tmp2Result.bot = null != bot && bot;
      system = importDefaultResult.system;
      tmp2Result.system = null != system && system;
      mfaEnabled = importDefaultResult.mfa_enabled;
      if (null == mfaEnabled) {
        mfaEnabled = importDefaultResult.mfaEnabled;
      }
      tmp2Result.mfaEnabled = null != mfaEnabled && mfaEnabled;
      mobile = importDefaultResult.mobile;
      tmp2Result.mobile = null != mobile && mobile;
      desktop = importDefaultResult.desktop;
      tmp2Result.desktop = null != desktop && desktop;
      tmp9 = null;
      if (premiumType !== closure_11) {
        tmp9 = premiumType;
      }
      tmp2Result.premiumType = tmp9;
      flags = importDefaultResult.flags;
      num = 0;
      if (null != flags) {
        num = flags;
      }
      tmp2Result.flags = num;
      publicFlags = importDefaultResult.public_flags;
      if (null == publicFlags) {
        publicFlags = importDefaultResult.publicFlags;
      }
      num2 = 0;
      if (null != publicFlags) {
        num2 = publicFlags;
      }
      tmp2Result.publicFlags = num2;
      purchasedFlags = importDefaultResult.purchased_flags;
      if (null == purchasedFlags) {
        purchasedFlags = importDefaultResult.purchasedFlags;
      }
      num3 = 0;
      if (null != purchasedFlags) {
        num3 = purchasedFlags;
      }
      tmp2Result.purchasedFlags = num3;
      premiumUsageFlags = importDefaultResult.premium_usage_flags;
      if (null == premiumUsageFlags) {
        premiumUsageFlags = importDefaultResult.premiumUsageFlags;
      }
      num4 = 0;
      if (null != premiumUsageFlags) {
        num4 = premiumUsageFlags;
      }
      tmp2Result.premiumUsageFlags = num4;
      phone = importDefaultResult.phone;
      tmp10 = null;
      if (null != phone) {
        tmp10 = phone;
      }
      tmp2Result.phone = tmp10;
      nsfwAllowed = importDefaultResult.nsfw_allowed;
      if (null == nsfwAllowed) {
        nsfwAllowed = importDefaultResult.nsfwAllowed;
      }
      tmp2Result.nsfwAllowed = nsfwAllowed;
      ageVerificationStatus = importDefaultResult.age_verification_status;
      if (null == ageVerificationStatus) {
        ageVerificationStatus = importDefaultResult.ageVerificationStatus;
      }
      tmp2Result.ageVerificationStatus = ageVerificationStatus;
      guildMemberAvatars = importDefaultResult.guildMemberAvatars;
      if (null == guildMemberAvatars) {
        guildMemberAvatars = {};
      }
      tmp2Result.guildMemberAvatars = guildMemberAvatars;
      hasBouncedEmail = importDefaultResult.has_bounced_email;
      if (null == hasBouncedEmail) {
        hasBouncedEmail = importDefaultResult.hasBouncedEmail;
      }
      tmp2Result.hasBouncedEmail = null != hasBouncedEmail && hasBouncedEmail;
      personalConnectionId = importDefaultResult.personal_connection_id;
      if (null == personalConnectionId) {
        personalConnectionId = importDefaultResult.personalConnectionId;
      }
      tmp11 = null;
      if (null != personalConnectionId) {
        tmp11 = personalConnectionId;
      }
      tmp2Result.personalConnectionId = tmp11;
      globalName = importDefaultResult.global_name;
      if (null == globalName) {
        globalName = importDefaultResult.globalName;
      }
      tmp2Result.globalName = globalName;
      tmp2Result.banner = importDefaultResult.banner;
      obj3 = UserRecord(closure_3[8]);
      primaryGuild = importDefaultResult.primary_guild;
      if (null == primaryGuild) {
        primaryGuild = importDefaultResult.primaryGuild;
      }
      tmp12 = null;
      if (null != primaryGuild) {
        tmp12 = primaryGuild;
      }
      tmp2Result.primaryGuild = obj3.ensureUserPrimaryGuild(tmp12);
      ({ collectibles: tmp6.collectibles, displayNameStyles } = importDefaultResult);
      if (null == displayNameStyles) {
        tmp13 = UserRecord;
        tmp14 = closure_3;
        num5 = 9;
        obj4 = UserRecord(closure_3[9]);
        displayNameStyles = obj4.parseServerDisplayNameStyles(importDefaultResult.display_name_styles);
      }
      tmp2Result.displayNameStyles = displayNameStyles;
      premiumState = importDefaultResult.premiumState;
      if (null == premiumState) {
        tmp15 = UserRecord;
        tmp16 = closure_3;
        num6 = 10;
        obj5 = UserRecord(closure_3[10]);
        premiumState = obj5.parseServerPremiumState(importDefaultResult.premium_state);
      }
      tmp2Result.premiumState = premiumState;
      perks = importDefaultResult.perks;
      activePerksBitmask = undefined;
      if (null != perks) {
        activePerksBitmask = perks.activePerksBitmask;
      }
      if (null != activePerksBitmask) {
        perks2 = importDefaultResult.perks;
      } else {
        tmp18 = UserRecord;
        tmp19 = closure_3;
        num7 = 11;
        obj6 = UserRecord(closure_3[11]);
        perks2 = obj6.parseServerPerks(importDefaultResult.perks);
      }
      tmp2Result.perks = perks2;
      obj7 = UserRecord(closure_3[12]);
      restrictedSchedule = importDefaultResult.restricted_schedule;
      if (null == restrictedSchedule) {
        restrictedSchedule = importDefaultResult.restrictedSchedule;
      }
      tmp2Result.restrictedSchedule = obj7.ensureRestrictedScheduleRecord(restrictedSchedule);
      app_transaction_ids = importDefaultResult.appTransactionIds;
      if (null == app_transaction_ids) {
        app_transaction_ids = importDefaultResult.app_transaction_ids;
      }
      tmp20 = null;
      if (null != app_transaction_ids) {
        tmp20 = app_transaction_ids;
      }
      tmp2Result.appTransactionIds = tmp20;
      obj8 = UserRecord(closure_3[13]);
      storeCountry = importDefaultResult.store_country;
      if (null == storeCountry) {
        storeCountry = importDefaultResult.storeCountry;
      }
      tmp2Result.storeCountry = obj8.parseStoreCountry(storeCountry);
      obj = { "": true, "": false, channel: false };
      obj.value = function value(arg0) {
        if (arg0 <= 1073741824) {
          return ((tmp2Result.flags | tmp2Result.publicFlags) & arg0) === arg0;
        } else {
          const obj = callback(closure_3[14]);
          const deserializeResult = callback(closure_3[14]).deserialize(tmp2Result.flags);
          const obj2 = callback(closure_3[14]);
          const deserializeResult1 = callback(closure_3[14]).deserialize(tmp2Result.publicFlags);
          const obj3 = callback(closure_3[14]);
          const deserializeResult2 = callback(closure_3[14]).deserialize(arg0);
          const obj4 = callback(closure_3[14]);
          return obj4.has(callback(closure_3[14]).combine(deserializeResult, deserializeResult1), deserializeResult2);
        }
      };
      obj1 = { "": true, "": false, channel: false };
      obj1.value = function value() {
        return tmp2Result.hasFlag(constants.STAFF);
      };
      obj2 = { "": true, "": false, channel: false };
      obj2.value = function value() {
        let tmp = !tmp2Result.hasFlag(constants.STAFF);
        if (tmp) {
          tmp = null != tmp2Result.personalConnectionId;
        }
        return tmp;
      };
      obj3 = { "": true, "": false, channel: false };
      obj3.value = function value() {
        let hasFlagResult = tmp2Result.hasFlag(constants.STAFF);
        if (!hasFlagResult) {
          hasFlagResult = tmp2Result.hasFlag(constants.COLLABORATOR);
        }
        if (!hasFlagResult) {
          hasFlagResult = tmp2Result.hasFlag(constants.RESTRICTED_COLLABORATOR);
        }
        return hasFlagResult;
      };
      definePropertiesResult = Object.defineProperties(tmp2Result, { hasFlag: obj, isStaff: obj1, isStaffPersonal: obj2, hasAnyStaffLevel: obj3 });
      globalName = tmp2Result.globalName;
      length = undefined;
      if (null != globalName) {
        length = globalName.length;
      }
      if (0 === length) {
        tmp2Result.globalName = null;
      }
      return tmp2Result;
    }
  }
  const arg1 = UserRecord;
  callback2(UserRecord, importDefaultResult);
  let obj = {
    key: "createdAt",
    get() {
      const obj = callback(closure_3[15]);
      return new Date(callback(closure_3[15]).extractTimestamp(this.id));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasVerifiedEmailOrPhone",
    value() {
      let tmp = true === this.verified;
      if (!tmp) {
        tmp = null != this.phone;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAvatarURL",
    value(guildId, size, flag, SUPPORTS_WEBP) {
      const self = this;
      if (flag === undefined) {
        flag = false;
      }
      if (SUPPORTS_WEBP === undefined) {
        SUPPORTS_WEBP = UserRecord(closure_3[16]).SUPPORTS_WEBP;
      }
      let tmp3;
      if (null != guildId) {
        tmp3 = self.guildMemberAvatars[guildId];
      }
      if (null != tmp3) {
        if (null != guildId) {
          let obj = { guildId, avatar: tmp3, userId: self.id, canAnimate: flag, size, canWebP: SUPPORTS_WEBP };
          let guildMemberAvatarURLSimple = callback(closure_3[16]).getGuildMemberAvatarURLSimple(obj);
          const obj2 = callback(closure_3[16]);
        }
        return guildMemberAvatarURLSimple;
      }
      obj = callback(closure_3[16]);
      guildMemberAvatarURLSimple = obj.getUserAvatarURL(self, flag, size, null, SUPPORTS_WEBP);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addGuildAvatarHash",
    value(arg0, arg1) {
      const self = this;
      if (this.guildMemberAvatars[arg0] === arg1) {
        return self;
      } else {
        let obj = {};
        const merged = Object.assign(self.guildMemberAvatars);
        obj[arg0] = arg1;
        obj = {};
        obj.guildMemberAvatars = obj;
        return self.merge(obj);
      }
    }
  };
  items[4] = {
    key: "removeGuildAvatarHash",
    value(arg0) {
      const self = this;
      if (undefined === this.guildMemberAvatars[arg0]) {
        return self;
      } else {
        let obj = {};
        const merged = Object.assign(self.guildMemberAvatars);
        obj[arg0] = undefined;
        obj = {};
        obj.guildMemberAvatars = obj;
        return self.merge(obj);
      }
    }
  };
  items[5] = {
    key: "getAvatarSource",
    value(arg0, flag) {
      const UserRecord = this;
      if (flag === undefined) {
        flag = false;
      }
      let tmp;
      if (null != arg0) {
        tmp = this.guildMemberAvatars[arg0];
        if (null != tmp) {
          return arg0(tmp[16]).getAnimatableSourceWithFallback(flag, (canAnimate) => {
            let obj = canAnimate(tmp[16]);
            obj = { guildId: canAnimate, avatar: tmp, userId: self.id, canAnimate, size: arg2 };
            return obj.makeSource(canAnimate(tmp[16]).getGuildMemberAvatarURLSimple(obj));
          });
        }
      }
      return arg0(tmp[16]).getAnimatableSourceWithFallback(flag, (arg0) => arg0(tmp[16]).getUserAvatarSource(self, arg0, arg2));
    }
  };
  items[6] = {
    key: "isClaimed",
    value() {
      return null != this.email || null != this.phone;
    }
  };
  items[7] = {
    key: "isPhoneVerified",
    value() {
      return null != this.phone;
    }
  };
  items[8] = {
    key: "toString",
    value() {
      let str = "???";
      if ("" !== this.username) {
        str = this.username;
      }
      return str;
    }
  };
  items[9] = {
    key: "tag",
    get() {
      const combined = "" + this.discriminator;
      return "" + this.username + "#" + combined.padStart(4, "0");
    }
  };
  items[10] = {
    key: "hasPurchasedFlag",
    value(arg0) {
      return UserRecord(closure_3[17]).hasFlag(this.purchasedFlags, arg0);
    }
  };
  items[11] = {
    key: "hasPremiumUsageFlag",
    value(arg0) {
      return UserRecord(closure_3[17]).hasFlag(this.premiumUsageFlags, arg0);
    }
  };
  items[12] = {
    key: "hasHadSKU",
    value(arg0) {
      const self = this;
      return null != closure_13[arg0] && self.hasPurchasedFlag(closure_13[arg0]);
    }
  };
  items[13] = {
    key: "hasHadPremium",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const hasPurchasedFlagResult = self.hasPurchasedFlag(closure_15.PREMIUM_TIER_0);
      const hasPurchasedFlagResult1 = self.hasPurchasedFlag(closure_15.PREMIUM_TIER_1);
      const hasPurchasedFlagResult2 = self.hasPurchasedFlag(closure_15.PREMIUM_TIER_2);
      if (closure_14.TIER_0 === tmp) {
        return hasPurchasedFlagResult;
      } else if (closure_14.TIER_1 === tmp) {
        return hasPurchasedFlagResult1;
      } else if (closure_14.TIER_2 === tmp) {
        return hasPurchasedFlagResult2;
      } else {
        let tmp7 = hasPurchasedFlagResult;
        if (!hasPurchasedFlagResult) {
          tmp7 = hasPurchasedFlagResult1;
        }
        if (!tmp7) {
          tmp7 = hasPurchasedFlagResult2;
        }
        return tmp7;
      }
    }
  };
  items[14] = {
    key: "hadPremiumSubscription",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const obj = UserRecord(closure_3[18]);
      return !UserRecord(closure_3[18]).isPremium(self) && self.hasHadPremium(tmp);
    }
  };
  items[15] = {
    key: "hasFreePremium",
    value() {
      const self = this;
      let isStaffResult = this.isStaff();
      if (!isStaffResult) {
        isStaffResult = self.hasFlag(constants.PARTNER);
      }
      if (!isStaffResult) {
        isStaffResult = self.isStaffPersonal();
      }
      return isStaffResult;
    }
  };
  items[16] = {
    key: "isOnReverseTrial",
    value() {
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this);
      if (isPremiumResult) {
        const premiumState = this.premiumState;
        let premiumSource;
        if (null != premiumState) {
          premiumSource = premiumState.premiumSource;
        }
        isPremiumResult = premiumSource === UserRecord(closure_3[19]).PremiumSource.REVERSE_TRIAL;
      }
      return isPremiumResult;
    }
  };
  items[17] = {
    key: "isPremiumWithPremiumGroup",
    value() {
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this, closure_14.TIER_2);
      if (isPremiumResult) {
        const premiumState = this.premiumState;
        let premiumSource;
        if (null != premiumState) {
          premiumSource = premiumState.premiumSource;
        }
        isPremiumResult = premiumSource === UserRecord(closure_3[19]).PremiumSource.SUBSCRIPTION_GROUP;
      }
      return isPremiumResult;
    }
  };
  items[18] = {
    key: "hasPaidTier2Subscription",
    value() {
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this, closure_14.TIER_2);
      if (isPremiumResult) {
        const premiumState = this.premiumState;
        let prop;
        if (null != premiumState) {
          prop = premiumState.premiumSubscriptionType;
        }
        isPremiumResult = prop === UserRecord(closure_3[19]).PremiumSubscriptionType.TIER_2;
      }
      return isPremiumResult;
    }
  };
  items[19] = {
    key: "isPremiumWithFractionalPremiumOnly",
    value() {
      const self = this;
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this, closure_14.TIER_2);
      if (isPremiumResult) {
        const premiumState = self.premiumState;
        let prop;
        if (null != premiumState) {
          prop = premiumState.premiumSubscriptionType;
        }
        let tmp6 = prop === UserRecord(closure_3[19]).PremiumSubscriptionType.NONE_UNSPECIFIED;
        if (!tmp6) {
          const premiumState2 = self.premiumState;
          let prop1;
          if (null != premiumState2) {
            prop1 = premiumState2.premiumSubscriptionType;
          }
          tmp6 = prop1 === UserRecord(closure_3[19]).PremiumSubscriptionType.BOOST_ONLY;
        }
        isPremiumResult = tmp6;
      }
      if (isPremiumResult) {
        const premiumState3 = self.premiumState;
        let premiumSource;
        if (null != premiumState3) {
          premiumSource = premiumState3.premiumSource;
        }
        isPremiumResult = premiumSource === UserRecord(closure_3[19]).PremiumSource.FRACTIONAL_NITRO;
      }
      return isPremiumResult;
    }
  };
  items[20] = {
    key: "isFractionalPremiumWithNoStandardSub",
    value() {
      const self = this;
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this, closure_14.TIER_2);
      if (isPremiumResult) {
        const premiumState = self.premiumState;
        let premiumSource;
        if (null != premiumState) {
          premiumSource = premiumState.premiumSource;
        }
        isPremiumResult = premiumSource === UserRecord(closure_3[19]).PremiumSource.FRACTIONAL_NITRO;
      }
      if (isPremiumResult) {
        isPremiumResult = self.premiumState.premiumSubscriptionType !== UserRecord(closure_3[19]).PremiumSubscriptionType.TIER_2;
      }
      return isPremiumResult;
    }
  };
  items[21] = {
    key: "isFractionalPremium",
    value() {
      let isPremiumResult = UserRecord(closure_3[18]).isPremium(this, closure_14.TIER_2);
      if (isPremiumResult) {
        const premiumState = this.premiumState;
        let premiumSource;
        if (null != premiumState) {
          premiumSource = premiumState.premiumSource;
        }
        isPremiumResult = premiumSource === UserRecord(closure_3[19]).PremiumSource.FRACTIONAL_NITRO;
      }
      return isPremiumResult;
    }
  };
  items[22] = {
    key: "hasUrgentMessages",
    value() {
      return this.hasFlag(constants.HAS_UNREAD_URGENT_MESSAGES);
    }
  };
  items[23] = {
    key: "isNonUserBot",
    value() {
      const self = this;
      let isSystemUserResult = this.isSystemUser();
      if (!isSystemUserResult) {
        let bot = self.bot;
        if (bot) {
          bot = self.discriminator === closure_10;
        }
        isSystemUserResult = bot;
      }
      return isSystemUserResult;
    }
  };
  items[24] = {
    key: "isLocalBot",
    value() {
      let bot = this.bot;
      if (bot) {
        bot = this.id === closure_9;
      }
      return bot;
    }
  };
  items[25] = {
    key: "isVerifiedBot",
    value() {
      const self = this;
      let hasFlagResult = this.isSystemUser() || self.isLocalBot();
      if (!hasFlagResult) {
        hasFlagResult = self.hasFlag(constants.VERIFIED_BOT);
      }
      return hasFlagResult;
    }
  };
  items[26] = {
    key: "isSystemUser",
    value() {
      return true === this.system;
    }
  };
  items[27] = {
    key: "hasAvatarForGuild",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        const self = this;
        tmp = null != this.guildMemberAvatars[arg0];
      }
      return tmp;
    }
  };
  items[28] = {
    key: "hasUniqueUsername",
    value() {
      return "0" === this.discriminator;
    }
  };
  items[29] = {
    key: "isPremiumGroupMember",
    value() {
      let result = this.isPremiumWithPremiumGroup();
      if (result) {
        result = this.premiumGroupRole === UserRecord(closure_3[19]).PremiumSubscriptionGroupRole.MEMBER;
      }
      return result;
    }
  };
  items[30] = {
    key: "isPremiumGroupPrimary",
    value() {
      let result = this.isPremiumWithPremiumGroup();
      if (result) {
        result = this.premiumGroupRole === UserRecord(closure_3[19]).PremiumSubscriptionGroupRole.PRIMARY;
      }
      return result;
    }
  };
  items[31] = {
    key: "isProvisional",
    get() {
      return this.hasFlag(constants.PROVISIONAL_ACCOUNT);
    }
  };
  items[32] = {
    key: "avatarDecoration",
    get() {
      return this.avatarDecorationData;
    },
    set(avatarDecoration) {
      this.avatarDecorationData = UserRecord(closure_3[20]).parseAvatarDecorationData(avatarDecoration);
    }
  };
  items[33] = {
    key: "nameplate",
    get() {
      let nameplate;
      const collectibles = this.collectibles;
      if (null != collectibles) {
        nameplate = collectibles.nameplate;
      }
      return UserRecord(closure_3[21]).getNameplateData(nameplate);
    }
  };
  items[34] = {
    key: "premiumGroupRole",
    get() {
      const premiumState = this.premiumState;
      let prop;
      if (null != premiumState) {
        prop = premiumState.premiumSubscriptionGroupRole;
      }
      if (null == prop) {
        prop = UserRecord(closure_3[19]).PremiumSubscriptionGroupRole.UNSPECIFIED;
      }
      return prop;
    }
  };
  return callback(UserRecord, items);
}(importDefaultResult);
tmp5 = new tmp5({ id: "0" });
const obj = { id: "0" };
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("records/UserRecord.tsx");

export default tmp5;
export const PLACEHOLDER_USER_RECORD = tmp5;
