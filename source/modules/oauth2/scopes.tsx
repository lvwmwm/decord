// Module ID: 8947
// Function ID: 70532
// Name: items
// Dependencies: []
// Exports: getScopeNames, getSecurityMessage, isSocialLayerUmbrellaScope

// Module 8947 (items)
const items = [
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.6xfSCq);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.ymSk0r);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.EnN7c5);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.4wMpBs);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.CncpnK);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.X9pGvJ);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.sGOSG4);
  },
  () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.JfibUq);
  }
];
const items1 = [require(dependencyMap[1]).OAuth2Scopes.BOT, require(dependencyMap[1]).OAuth2Scopes.OPENID, require(dependencyMap[1]).OAuth2Scopes.IDENTIFY, require(dependencyMap[1]).OAuth2Scopes.IDENTIFY_PREMIUM, require(dependencyMap[1]).OAuth2Scopes.EMAIL, require(dependencyMap[1]).OAuth2Scopes.CONNECTIONS, require(dependencyMap[1]).OAuth2Scopes.MESSAGES_READ, require(dependencyMap[1]).OAuth2Scopes.GUILDS, require(dependencyMap[1]).OAuth2Scopes.GUILDS_JOIN, require(dependencyMap[1]).OAuth2Scopes.GUILDS_MEMBERS_READ, require(dependencyMap[1]).OAuth2Scopes.GUILDS_CHANNELS_READ, require(dependencyMap[1]).OAuth2Scopes.GDM_JOIN, require(dependencyMap[1]).OAuth2Scopes.RPC, require(dependencyMap[1]).OAuth2Scopes.RPC_NOTIFICATIONS_READ, require(dependencyMap[1]).OAuth2Scopes.RPC_VOICE_READ, require(dependencyMap[1]).OAuth2Scopes.RPC_VOICE_WRITE, require(dependencyMap[1]).OAuth2Scopes.RPC_VIDEO_READ, require(dependencyMap[1]).OAuth2Scopes.RPC_VIDEO_WRITE, require(dependencyMap[1]).OAuth2Scopes.RPC_SCREENSHARE_READ, require(dependencyMap[1]).OAuth2Scopes.RPC_SCREENSHARE_WRITE, require(dependencyMap[1]).OAuth2Scopes.RPC_ACTIVITIES_WRITE, require(dependencyMap[1]).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE, require(dependencyMap[1]).OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_BUILDS_READ, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_STORE_UPDATE, require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_INVITES_WRITE, require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_READ, require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_WRITE, require(dependencyMap[1]).OAuth2Scopes.RELATIONSHIPS_READ, require(dependencyMap[1]).OAuth2Scopes.RELATIONSHIPS_WRITE, require(dependencyMap[1]).OAuth2Scopes.VOICE, require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_READ, require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, require(dependencyMap[1]).OAuth2Scopes.ROLE_CONNECTIONS_WRITE, require(dependencyMap[1]).OAuth2Scopes.PRESENCES_READ, require(dependencyMap[1]).OAuth2Scopes.PRESENCES_WRITE, require(dependencyMap[1]).OAuth2Scopes.GATEWAY_CONNECT, require(dependencyMap[1]).OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE, require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE, require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER];
const items2 = [require(dependencyMap[1]).OAuth2Scopes.WEBHOOK_INCOMING, require(dependencyMap[1]).OAuth2Scopes.BOT];
const combined = items1.concat(items2);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = [];
export const getScopeNames = function getScopeNames(value, accountScopes) {
  if (require(dependencyMap[1]).OAuth2Scopes.IDENTIFY === value) {
    const intl55 = require(dependencyMap[0]).intl;
    const items = [intl55.string(require(dependencyMap[0]).t.DD9KQh)];
    return items;
  } else if (require(dependencyMap[1]).OAuth2Scopes.IDENTIFY_PREMIUM === value) {
    const intl54 = require(dependencyMap[0]).intl;
    const items1 = [intl54.string(require(dependencyMap[0]).t.xhQsxx)];
    return items1;
  } else if (require(dependencyMap[1]).OAuth2Scopes.OPENID === value) {
    const intl53 = require(dependencyMap[0]).intl;
    const items2 = [intl53.string(require(dependencyMap[0]).t.R5IKv1)];
    return items2;
  } else if (require(dependencyMap[1]).OAuth2Scopes.EMAIL === value) {
    const intl52 = require(dependencyMap[0]).intl;
    const items3 = [intl52.string(require(dependencyMap[0]).t.rvFS2t)];
    return items3;
  } else if (require(dependencyMap[1]).OAuth2Scopes.BOT === value) {
    const intl51 = require(dependencyMap[0]).intl;
    const items4 = [intl51.string(require(dependencyMap[0]).t.pRpdox)];
    return items4;
  } else if (require(dependencyMap[1]).OAuth2Scopes.CONNECTIONS === value) {
    const intl50 = require(dependencyMap[0]).intl;
    const items5 = [intl50.string(require(dependencyMap[0]).t.1AwaU1)];
    return items5;
  } else if (require(dependencyMap[1]).OAuth2Scopes.MESSAGES_READ === value) {
    const intl49 = require(dependencyMap[0]).intl;
    const items6 = [intl49.string(require(dependencyMap[0]).t.jVXrHb)];
    return items6;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GUILDS === value) {
    const intl48 = require(dependencyMap[0]).intl;
    const items7 = [intl48.string(require(dependencyMap[0]).t.QKGJkC)];
    return items7;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GUILDS_JOIN === value) {
    const intl47 = require(dependencyMap[0]).intl;
    const items8 = [intl47.string(require(dependencyMap[0]).t.ETGDR9)];
    return items8;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GUILDS_MEMBERS_READ === value) {
    const hasItem = accountScopes.includes(require(dependencyMap[1]).OAuth2Scopes.VOICE);
    const intl46 = require(dependencyMap[0]).intl;
    const string = intl46.string;
    const t = require(dependencyMap[0]).t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      let items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GUILDS_CHANNELS_READ === value) {
    const intl45 = require(dependencyMap[0]).intl;
    const items11 = [intl45.string(require(dependencyMap[0]).t.BWGAgt)];
    return items11;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GDM_JOIN === value) {
    const intl44 = require(dependencyMap[0]).intl;
    const items12 = [intl44.string(require(dependencyMap[0]).t.55B4wA)];
    return items12;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC === value) {
    const intl43 = require(dependencyMap[0]).intl;
    const items13 = [intl43.string(require(dependencyMap[0]).t.EDBEeK)];
    return items13;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_NOTIFICATIONS_READ === value) {
    const intl42 = require(dependencyMap[0]).intl;
    const items14 = [intl42.string(require(dependencyMap[0]).t.6kDHWV)];
    return items14;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_VOICE_WRITE === value) {
    const intl41 = require(dependencyMap[0]).intl;
    const items15 = [intl41.string(require(dependencyMap[0]).t.531s7c)];
    return items15;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_VIDEO_READ === value) {
    const intl40 = require(dependencyMap[0]).intl;
    const items16 = [intl40.string(require(dependencyMap[0]).t.zbUSWO)];
    return items16;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_VIDEO_WRITE === value) {
    const intl39 = require(dependencyMap[0]).intl;
    const items17 = [intl39.string(require(dependencyMap[0]).t.y+MdAM)];
    return items17;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_SCREENSHARE_READ === value) {
    const intl38 = require(dependencyMap[0]).intl;
    const items18 = [intl38.string(require(dependencyMap[0]).t.b0i0CO)];
    return items18;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_SCREENSHARE_WRITE === value) {
    const intl37 = require(dependencyMap[0]).intl;
    const items19 = [intl37.string(require(dependencyMap[0]).t.9Rmxux)];
    return items19;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_VOICE_READ === value) {
    const intl36 = require(dependencyMap[0]).intl;
    const items20 = [intl36.string(require(dependencyMap[0]).t.rznmpz)];
    return items20;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RPC_ACTIVITIES_WRITE === value) {
    const intl35 = require(dependencyMap[0]).intl;
    const items21 = [intl35.string(require(dependencyMap[0]).t.KQwJDf)];
    return items21;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === value) {
    const intl34 = require(dependencyMap[0]).intl;
    const items22 = [intl34.string(require(dependencyMap[0]).t.Iwbtgk)];
    return items22;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_BUILDS_READ === value) {
    const intl33 = require(dependencyMap[0]).intl;
    const items23 = [intl33.string(require(dependencyMap[0]).t.ZkZCCW)];
    return items23;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS === value) {
    const intl32 = require(dependencyMap[0]).intl;
    const items24 = [intl32.string(require(dependencyMap[0]).t.H4q49X)];
    return items24;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === value) {
    const intl31 = require(dependencyMap[0]).intl;
    const items25 = [intl31.string(require(dependencyMap[0]).t.mxeq6u)];
    return items25;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === value) {
    const intl30 = require(dependencyMap[0]).intl;
    const items26 = [intl30.string(require(dependencyMap[0]).t.7SIoW7)];
    return items26;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_STORE_UPDATE === value) {
    const intl29 = require(dependencyMap[0]).intl;
    const items27 = [intl29.string(require(dependencyMap[0]).t.Rba/Xn)];
    return items27;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === value) {
    const intl28 = require(dependencyMap[0]).intl;
    const items28 = [intl28.string(require(dependencyMap[0]).t.xeNgGI)];
    return items28;
  } else if (require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_READ === value) {
    const intl27 = require(dependencyMap[0]).intl;
    const items29 = [intl27.string(require(dependencyMap[0]).t.4+tSce)];
    return items29;
  } else if (require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_WRITE === value) {
    const intl26 = require(dependencyMap[0]).intl;
    const items30 = [intl26.string(require(dependencyMap[0]).t.6OsWXX)];
    return items30;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RELATIONSHIPS_READ === value) {
    const intl25 = require(dependencyMap[0]).intl;
    const items31 = [intl25.string(require(dependencyMap[0]).t.521/7W)];
    return items31;
  } else if (require(dependencyMap[1]).OAuth2Scopes.RELATIONSHIPS_WRITE === value) {
    const intl24 = require(dependencyMap[0]).intl;
    const items32 = [intl24.string(require(dependencyMap[0]).t.qR/txQ)];
    return items32;
  } else if (require(dependencyMap[1]).OAuth2Scopes.VOICE === value) {
    const intl23 = require(dependencyMap[0]).intl;
    const items33 = [intl23.string(require(dependencyMap[0]).t.XK5zdO)];
    return items33;
  } else if (require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_READ === value) {
    const intl22 = require(dependencyMap[0]).intl;
    const items34 = [intl22.string(require(dependencyMap[0]).t.w8emlT)];
    return items34;
  } else if (require(dependencyMap[1]).OAuth2Scopes.ROLE_CONNECTIONS_WRITE === value) {
    const intl21 = require(dependencyMap[0]).intl;
    const items35 = [intl21.string(require(dependencyMap[0]).t.Bv0wZj)];
    return items35;
  } else if (require(dependencyMap[1]).OAuth2Scopes.PRESENCES_READ === value) {
    const intl20 = require(dependencyMap[0]).intl;
    const items36 = [intl20.string(require(dependencyMap[0]).t.JUWeyf)];
    return items36;
  } else if (require(dependencyMap[1]).OAuth2Scopes.PRESENCES_WRITE === value) {
    const intl19 = require(dependencyMap[0]).intl;
    const items37 = [intl19.string(require(dependencyMap[0]).t.apHLwv)];
    return items37;
  } else if (require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === value) {
    const intl18 = require(dependencyMap[0]).intl;
    const items38 = [intl18.string(require(dependencyMap[0]).t.FHeB8p)];
    return items38;
  } else if (require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === value) {
    const intl17 = require(dependencyMap[0]).intl;
    const items39 = [intl17.string(require(dependencyMap[0]).t.mdh+xY)];
    return items39;
  } else if (require(dependencyMap[1]).OAuth2Scopes.GATEWAY_CONNECT === value) {
    const intl16 = require(dependencyMap[0]).intl;
    const items40 = [intl16.string(require(dependencyMap[0]).t.uJd+85)];
    return items40;
  } else if (require(dependencyMap[1]).OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === value) {
    const intl15 = require(dependencyMap[0]).intl;
    const items41 = [intl15.string(require(dependencyMap[0]).t.hycwLK)];
    return items41;
  } else if (require(dependencyMap[1]).OAuth2Scopes.ACTIVITIES_INVITES_WRITE === value) {
    const intl14 = require(dependencyMap[0]).intl;
    const items42 = [intl14.string(require(dependencyMap[0]).t.IM4Cje)];
    return items42;
  } else if (require(dependencyMap[1]).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === value) {
    const intl13 = require(dependencyMap[0]).intl;
    const items43 = [intl13.string(require(dependencyMap[0]).t.1zioRF)];
    return items43;
  } else if (require(dependencyMap[1]).OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === value) {
    const intl12 = require(dependencyMap[0]).intl;
    const items44 = [intl12.string(require(dependencyMap[0]).t.4l1DWw)];
    return items44;
  } else if (require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === value) {
    const intl7 = require(dependencyMap[0]).intl;
    const items45 = [intl7.string(require(dependencyMap[0]).t.Pl1dTW), , , ];
    const intl8 = require(dependencyMap[0]).intl;
    items45[1] = intl8.string(require(dependencyMap[0]).t.mPRcyT);
    const intl9 = require(dependencyMap[0]).intl;
    items45[2] = intl9.string(require(dependencyMap[0]).t.F7J4NE);
    const intl10 = require(dependencyMap[0]).intl;
    items45[3] = intl10.string(require(dependencyMap[0]).t.syJLx9);
    if (!accountScopes.includes(require(dependencyMap[1]).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl11 = require(dependencyMap[0]).intl;
      items45.push(intl11.string(require(dependencyMap[0]).t.1zioRF));
    }
    return items45;
  } else if (require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER === value) {
    const intl = require(dependencyMap[0]).intl;
    const items46 = [intl.string(require(dependencyMap[0]).t.Pl1dTW), , , , ];
    const intl2 = require(dependencyMap[0]).intl;
    items46[1] = intl2.string(require(dependencyMap[0]).t.hc/+yg);
    const intl3 = require(dependencyMap[0]).intl;
    items46[2] = intl3.string(require(dependencyMap[0]).t.mPRcyT);
    const intl4 = require(dependencyMap[0]).intl;
    items46[3] = intl4.string(require(dependencyMap[0]).t.F7J4NE);
    const intl5 = require(dependencyMap[0]).intl;
    items46[4] = intl5.string(require(dependencyMap[0]).t.2wxXX9);
    if (!accountScopes.includes(require(dependencyMap[1]).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl6 = require(dependencyMap[0]).intl;
      items46.push(intl6.string(require(dependencyMap[0]).t.1zioRF));
    }
    return items46;
  } else {
    const items47 = [value];
    return items47;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(arg0) {
  let tmp = arg0 === require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE;
  if (!tmp) {
    tmp = arg0 === require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER;
  }
  return tmp;
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    if (!scopes.includes(require(dependencyMap[1]).OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      if (!scopes.includes(require(dependencyMap[1]).OAuth2Scopes.MESSAGES_READ)) {
        if (!scopes.includes(require(dependencyMap[1]).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ)) {
          const intl = require(dependencyMap[0]).intl;
          let formatResult = intl.format(require(dependencyMap[0]).t.TeL+Ct, {});
        }
      }
      const intl2 = require(dependencyMap[0]).intl;
      formatResult = intl2.format(require(dependencyMap[0]).t.Soy7jJ, {});
    }
    return formatResult;
  }
  const intl3 = require(dependencyMap[0]).intl;
  formatResult = intl3.format(require(dependencyMap[0]).t.o0GMBD, {});
};
