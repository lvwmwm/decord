// Module ID: 7837
// Function ID: 62478
// Name: setPendingChanges
// Dependencies: []
// Exports: setPendingChanges

// Module 7837 (setPendingChanges)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/UserProfileSettingsActionCreators.tsx");

export const setPendingChanges = function setPendingChanges(guildId) {
  let bannerOriginalMd5;
  guildId = guildId.guildId;
  let obj = Object.create(null);
  obj.guildId = 0;
  const merged = Object.assign(guildId, obj);
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    let userProfile = authStore.getUserProfile(currentUser.id);
    if (null != guildId) {
      userProfile = authStore.getGuildMemberProfile(currentUser.id, guildId);
    }
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, currentUser.id);
    }
    obj = {};
    if ("globalName" in merged) {
      if (merged.globalName === currentUser.globalName) {
        obj.pendingGlobalName = undefined;
      } else {
        obj.pendingGlobalName = merged.globalName;
      }
    }
    if ("nickname" in merged) {
      let nick;
      if (null != member) {
        nick = member.nick;
      }
      if (merged.nickname === nick) {
        obj.pendingNickname = undefined;
      } else {
        if ("" === merged.nickname) {
          let nick1;
          if (null != member) {
            nick1 = member.nick;
          }
        }
        obj.pendingNickname = merged.nickname;
      }
    }
    if ("displayNameStyles" in merged) {
      let displayNameStyles = merged.displayNameStyles;
      if (null != guildId) {
        displayNameStyles = undefined;
        if (null != member) {
          displayNameStyles = member.displayNameStyles;
        }
        let displayNameStyles2 = displayNameStyles;
      } else {
        displayNameStyles2 = currentUser.displayNameStyles;
      }
      let tmp14 = null;
      if (null != displayNameStyles) {
        tmp14 = displayNameStyles;
      }
      let tmp15 = null;
      if (null != displayNameStyles2) {
        tmp15 = displayNameStyles2;
      }
      obj.pendingDisplayNameStyles = importDefault(dependencyMap[3])(tmp14, tmp15) ? undefined : displayNameStyles;
      const tmp13 = importDefault(dependencyMap[3]);
    }
    if ("pronouns" in merged) {
      let pronouns;
      if (null != userProfile) {
        pronouns = userProfile.pronouns;
      }
      if (merged.pronouns === pronouns) {
        obj.pendingPronouns = undefined;
      } else {
        obj.pendingPronouns = merged.pronouns;
      }
    }
    if ("avatar" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const avatar2 = merged.avatar;
          let imageUri;
          if (null != avatar2) {
            imageUri = avatar2.imageUri;
          }
        }
        obj.pendingAvatar = merged.avatar;
      } else {
        let avatar = merged.avatar;
        let imageUri1;
        if (null != avatar) {
          imageUri1 = avatar.imageUri;
        }
        avatar = undefined;
        if (null != member) {
          avatar = member.avatar;
        }
      }
      obj.pendingAvatar = undefined;
    }
    if ("avatarDecoration" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const avatarDecoration3 = merged.avatarDecoration;
          let skuId;
          if (null != avatarDecoration3) {
            skuId = avatarDecoration3.skuId;
          }
          const avatarDecoration4 = currentUser.avatarDecoration;
          let skuId1;
          if (null != avatarDecoration4) {
            skuId1 = avatarDecoration4.skuId;
          }
        }
        obj.pendingAvatarDecoration = merged.avatarDecoration;
      } else {
        const avatarDecoration = merged.avatarDecoration;
        let skuId2;
        if (null != avatarDecoration) {
          skuId2 = avatarDecoration.skuId;
        }
        let skuId3;
        if (null != member) {
          const avatarDecoration2 = member.avatarDecoration;
          if (null != avatarDecoration2) {
            skuId3 = avatarDecoration2.skuId;
          }
        }
      }
      obj.pendingAvatarDecoration = undefined;
    }
    if ("nameplate" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const nameplate3 = merged.nameplate;
          let skuId4;
          if (null != nameplate3) {
            skuId4 = nameplate3.skuId;
          }
          const collectibles2 = currentUser.collectibles;
          let skuId5;
          if (null != collectibles2) {
            const nameplate4 = collectibles2.nameplate;
            if (null != nameplate4) {
              skuId5 = nameplate4.skuId;
            }
          }
        }
        obj.pendingNameplate = merged.nameplate;
      } else {
        const nameplate = merged.nameplate;
        let skuId6;
        if (null != nameplate) {
          skuId6 = nameplate.skuId;
        }
        let skuId7;
        if (null != member) {
          const collectibles = member.collectibles;
          if (null != collectibles) {
            const nameplate2 = collectibles.nameplate;
            if (null != nameplate2) {
              skuId7 = nameplate2.skuId;
            }
          }
        }
      }
      obj.pendingNameplate = undefined;
    }
    if ("profileEffect" in merged) {
      const profileEffect = merged.profileEffect;
      let skuId8;
      if (null != profileEffect) {
        skuId8 = profileEffect.skuId;
      }
      let skuId9;
      if (null != userProfile) {
        const profileEffect2 = userProfile.profileEffect;
        if (null != profileEffect2) {
          skuId9 = profileEffect2.skuId;
        }
      }
      if (skuId8 === skuId9) {
        obj.pendingProfileEffect = undefined;
      } else {
        obj.pendingProfileEffect = merged.profileEffect;
      }
    }
    if ("profileFrame" in merged) {
      const profileFrame = merged.profileFrame;
      let skuId10;
      if (null != profileFrame) {
        skuId10 = profileFrame.skuId;
      }
      let skuId11;
      if (null != userProfile) {
        const profileFrame2 = userProfile.profileFrame;
        if (null != profileFrame2) {
          skuId11 = profileFrame2.skuId;
        }
      }
      if (skuId10 === skuId11) {
        obj.pendingProfileFrame = undefined;
      } else {
        obj.pendingProfileFrame = merged.profileFrame;
      }
    }
    if ("banner" in merged) {
      let banner = merged.banner;
      let tmp32 = null;
      if (null != banner) {
        tmp32 = banner;
      }
      if (null != guildId) {
        banner = undefined;
        if (null != userProfile) {
          banner = userProfile.banner;
        }
        let tmp35 = null;
        if (null != banner) {
          tmp35 = banner;
        }
        let tmp33 = tmp35;
      } else {
        const banner2 = currentUser.banner;
        tmp33 = null;
        if (null != banner2) {
          tmp33 = banner2;
        }
      }
      if (tmp32 === tmp33) {
        obj.pendingBanner = undefined;
        obj.pendingBannerOriginalMd5 = undefined;
      } else {
        ({ banner: obj.pendingBanner, bannerOriginalMd5 } = merged);
        let tmp36 = null;
        if (null != bannerOriginalMd5) {
          tmp36 = bannerOriginalMd5;
        }
        obj.pendingBannerOriginalMd5 = tmp36;
      }
    }
    if ("accentColor" in merged) {
      let accentColor = merged.accentColor;
      let tmp37 = null;
      if (null != accentColor) {
        tmp37 = accentColor;
      }
      accentColor = undefined;
      if (null != userProfile) {
        accentColor = userProfile.accentColor;
      }
      let tmp39 = null;
      if (null != accentColor) {
        tmp39 = accentColor;
      }
      let tmp40;
      if (tmp37 !== tmp39) {
        tmp40 = tmp37;
      }
      obj.pendingAccentColor = tmp40;
    }
    if ("themeColors" in merged) {
      if (null != guildId) {
        if (null != merged.themeColors) {
          if (null == merged.themeColors[0]) {
            let tmp41 = null;
          }
          let themeColors;
          if (null != userProfile) {
            themeColors = userProfile.themeColors;
          }
          let tmp44 = null;
          if (null != themeColors) {
            tmp44 = themeColors;
          }
          if (importDefault(dependencyMap[3])(tmp41, tmp44)) {
            obj.pendingThemeColors = undefined;
          } else {
            obj.pendingThemeColors = merged.themeColors;
          }
        }
      }
      themeColors = merged.themeColors;
      let tmp42 = null;
      if (null != themeColors) {
        tmp42 = themeColors;
      }
      tmp41 = tmp42;
    }
    if ("bio" in merged) {
      let bio;
      if (null != userProfile) {
        bio = userProfile.bio;
      }
      if (merged.bio === bio) {
        obj.pendingBio = undefined;
      } else {
        obj.pendingBio = merged.bio;
      }
    }
    if ("primaryGuildId" in merged) {
      const guildId2 = arg1(dependencyMap[4]).getUserPrimaryGuild(currentUser.primaryGuild).guildId;
      let tmp50 = null;
      if (null != guildId2) {
        tmp50 = guildId2;
      }
      if (merged.primaryGuildId === tmp50) {
        obj.pendingPrimaryGuildId = undefined;
      } else {
        obj.pendingPrimaryGuildId = merged.primaryGuildId;
      }
      const obj2 = arg1(dependencyMap[4]);
    }
    if ("legacyUsernameDisabled" in merged) {
      obj.pendingLegacyUsernameDisabled = merged.legacyUsernameDisabled;
    }
    obj = { type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId };
    const merged1 = Object.assign(obj);
    importDefault(dependencyMap[5]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[5]);
  }
};
