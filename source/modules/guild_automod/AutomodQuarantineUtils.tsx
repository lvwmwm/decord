// Module ID: 11005
// Function ID: 85635
// Name: useCurrentUserHasAutomodQuarantinedProfile
// Dependencies: []
// Exports: useCurrentUserHasAutomodQuarantinedProfile, useGuildAutomodProfileQuarantineErrors, useOpenFixQuarantinedProfileModal

// Module 11005 (useCurrentUserHasAutomodQuarantinedProfile)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ Permissions: closure_9, UserSettingsSections: closure_10 } = arg1(dependencyMap[7]));
const GuildMemberFlags = arg1(dependencyMap[8]).GuildMemberFlags;
let closure_12 = arg1(dependencyMap[9]).ProfileCustomizationSubsection;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_5];
  const items1 = [arg0];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    if (null == arg0) {
      return false;
    } else {
      const id = id.getId();
      return arg0(closure_1[11]).hasAutomodQuarantinedProfile(member.getMember(arg0, id));
    }
  }, items1);
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  const arg1 = id;
  const items = [closure_4, closure_5, closure_8, closure_6];
  const items1 = [id];
  return arg1(dependencyMap[10]).useStateFromStoresObject(items, () => {
    let obj = { nick: undefined, bio: undefined };
    let guildId = guildId.getGuildId();
    let str = null;
    if (null != arg0) {
      guildId = arg0;
    }
    let name = guild.getGuild(guildId);
    if (str != name) {
      if (str != guildId) {
        const member = member.getMember(guildId, id.getId());
        let flags;
        if (str != member) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = arg0(closure_1[11]).getAutomodQuarantinedProfileFlags(flags);
        if (0 === automodQuarantinedProfileFlags.size) {
          return obj;
        } else if (!automodQuarantinedProfileFlags.has(constants.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
          if (automodQuarantinedProfileFlags.has(constants.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = arg0(closure_1[12]).intl;
            const items = [intl3.string(arg0(closure_1[12]).t.dZh1vz)];
            obj.bio = items;
          }
          return obj;
        } else {
          if (str == arg0) {
            const intl2 = arg0(closure_1[12]).intl;
            obj = {};
            name = name.name;
            str = "";
            if (tmp8) {
              str = name;
            }
            obj.guildName = str;
            const items1 = [intl2.formatToPlainString(arg0(closure_1[12]).t.WBUh3O, obj)];
            let items2 = items1;
            const tmp8 = str != name;
          } else {
            const intl = arg0(closure_1[12]).intl;
            items2 = [intl.string(arg0(closure_1[12]).t.EPZCrM)];
          }
          obj.nick = items2;
        }
        const obj4 = arg0(closure_1[11]);
      }
    }
    return obj;
  }, items1);
};
export const useOpenFixQuarantinedProfileModal = function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const scrollPosition = guildId.scrollPosition;
  const dependencyMap = scrollPosition;
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => guild.getGuild(guildId), items1);
  const React = stateFromStores;
  const obj = arg1(dependencyMap[10]);
  const items2 = [closure_7];
  const items3 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_7.can(constants.CHANGE_NICKNAME, stateFromStores);
    }
    return canResult;
  }, items3);
  let closure_3 = stateFromStores1;
  const obj2 = arg1(dependencyMap[10]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, arg1(dependencyMap[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    React.useCallback(() => {
      if (null != stateFromStores) {
        let openUserSettings = constants3.GUILD;
        if (stateFromStores1) {
          let obj = guildId(scrollPosition[14]);
          const guildIdentitySettings = obj.initGuildIdentitySettings(stateFromStores.id);
          let USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = constants3.USER_PROFILE;
        }
        openUserSettings = guildId(scrollPosition[15]).openUserSettings;
        obj = { subsection: USER_PROFILE, scrollPosition };
        stateFromStores1.setState(obj);
        obj = { screen: constants2.PROFILE_CUSTOMIZATION };
        openUserSettings(obj);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
};
