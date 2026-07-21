// Module ID: 7881
// Function ID: 62727
// Name: maybeFetchUserProfile
// Dependencies: []
// Exports: default

// Module 7881 (maybeFetchUserProfile)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/maybeFetchUserProfile.tsx");

export default function maybeFetchUserProfile(id, guildIconURL, guildMember) {
  let type;
  let withMutualGuilds;
  let obj = guildMember;
  guildIconURL = id;
  if (guildMember === undefined) {
    obj = {};
  }
  ({ withMutualGuilds, type } = obj);
  if (withMutualGuilds === undefined) {
    withMutualGuilds = false;
  }
  let flag = obj.withMutualFriendsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.withMutualFriends;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = obj.dispatchWait;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.waitForRefetch;
  if (flag4 === undefined) {
    flag4 = true;
  }
  const guildId = obj.guildId;
  let importDefault;
  if ("" === id) {
    return Promise.resolve();
  } else if (authStore.isFetchingProfile(id, guildId)) {
    return Promise.resolve();
  } else {
    const userProfile = authStore.getUserProfile(id);
    const guildMemberProfile = authStore.getGuildMemberProfile(id, guildId);
    let tmp8 = userProfile;
    if (null != guildId) {
      tmp8 = guildMemberProfile;
    }
    const _Date = Date;
    let fetchEndedAt;
    const timestamp = Date.now();
    if (null != tmp8) {
      fetchEndedAt = tmp8.fetchEndedAt;
    }
    let num = 0;
    if (null != fetchEndedAt) {
      num = fetchEndedAt;
    }
    let tmp12 = timestamp - num >= 60000;
    let status;
    if (null != tmp8) {
      const fetchError = tmp8.fetchError;
      if (null != fetchError) {
        status = fetchError.status;
      }
    }
    if (404 === status) {
      if (!tmp12) {
        return Promise.resolve();
      }
    } else {
      let status1;
      if (null != tmp8) {
        const fetchError2 = tmp8.fetchError;
        if (null != fetchError2) {
          status1 = fetchError2.status;
        }
      }
    }
    const mutualGuilds = authStore.getMutualGuilds(id);
    const mutualFriends = authStore.getMutualFriends(id);
    const tmp19 = null == guildId ? null == userProfile : null == guildMemberProfile;
    let tmp20 = !tmp19;
    if (!tmp19) {
      if (!tmp12) {
        tmp12 = null == mutualGuilds && withMutualGuilds;
        const tmp21 = null == mutualGuilds && withMutualGuilds;
      }
      if (!tmp12) {
        tmp12 = null == mutualFriends && flag2;
        const tmp22 = null == mutualFriends && flag2;
      }
      if (!tmp12) {
        tmp12 = null == tmp18 && flag;
        const tmp23 = null == tmp18 && flag;
      }
      tmp20 = tmp12;
    }
    if (!tmp19) {
      if (!tmp20) {
        return Promise.resolve();
      }
    }
    if (null != guildId) {
      let profileEffect;
      if (null != guildMemberProfile) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    } else if (null != userProfile) {
      profileEffect = userProfile.profileEffect;
    }
    if (null != profileEffect) {
      const result = guildIconURL(dependencyMap[3]).maybeFetchCollectiblesProduct(profileEffect.skuId);
      const obj2 = guildIconURL(dependencyMap[3]);
    }
    if (null != guildId) {
      let profileFrame;
      if (null != guildMemberProfile) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    } else if (null != userProfile) {
      profileFrame = userProfile.profileFrame;
    }
    if (null != profileFrame) {
      const result1 = guildIconURL(dependencyMap[3]).maybeFetchCollectiblesProduct(profileFrame.skuId);
      const obj3 = guildIconURL(dependencyMap[3]);
    }
    if (null != guildIconURL) {
      guildIconURL(dependencyMap[4]).maybeFetchColors(guildIconURL);
      const obj4 = guildIconURL(dependencyMap[4]);
    }
    obj = { type, withMutualGuilds, withMutualFriends: flag2, withMutualFriendsCount: flag, guildId, joinRequestId: tmp2, abortSignal: tmp3 };
    id = undefined;
    if (null != guildId) {
      obj = { guildMember: member.getMember(guildId, id), channel: channel.getChannel(tmp) };
      const visibleConnectionsRole = guildIconURL(dependencyMap[5]).getVisibleConnectionsRole(obj);
      if (null != visibleConnectionsRole) {
        id = visibleConnectionsRole.id;
      }
      const obj6 = guildIconURL(dependencyMap[5]);
    }
    obj.connectionsRoleId = id;
    importDefault = obj;
    if (flag3) {
      importDefault(dependencyMap[6]).wait(() => {
        const obj = arg0(closure_2[7]);
        return obj.fetchProfile(arg0, obj, obj(closure_2[8]));
      });
      return Promise.resolve();
    } else {
      const profile = guildIconURL(dependencyMap[7]).fetchProfile(id, obj, importDefault(dependencyMap[8]));
      let resolved = profile;
      if (tmp20) {
        resolved = profile;
        if (!flag4) {
          resolved = Promise.resolve();
        }
      }
      return resolved;
    }
  }
};
