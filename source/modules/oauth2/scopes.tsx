// Module ID: 8955
// Function ID: 70586
// Name: items
// Dependencies: [1212, 8310, 2]
// Exports: getScopeNames, getSecurityMessage, isSocialLayerUmbrellaScope

// Module 8955 (items)
let items = [
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6xfSCq"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ymSk0r);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.EnN7c5);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4wMpBs"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CncpnK);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.X9pGvJ);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sGOSG4);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JfibUq);
  }
];
let items1 = [require("set").OAuth2Scopes.BOT, require("set").OAuth2Scopes.OPENID, require("set").OAuth2Scopes.IDENTIFY, require("set").OAuth2Scopes.IDENTIFY_PREMIUM, require("set").OAuth2Scopes.EMAIL, require("set").OAuth2Scopes.CONNECTIONS, require("set").OAuth2Scopes.MESSAGES_READ, require("set").OAuth2Scopes.GUILDS, require("set").OAuth2Scopes.GUILDS_JOIN, require("set").OAuth2Scopes.GUILDS_MEMBERS_READ, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ, require("set").OAuth2Scopes.GDM_JOIN, require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_NOTIFICATIONS_READ, require("set").OAuth2Scopes.RPC_VOICE_READ, require("set").OAuth2Scopes.RPC_VOICE_WRITE, require("set").OAuth2Scopes.RPC_VIDEO_READ, require("set").OAuth2Scopes.RPC_VIDEO_WRITE, require("set").OAuth2Scopes.RPC_SCREENSHARE_READ, require("set").OAuth2Scopes.RPC_SCREENSHARE_WRITE, require("set").OAuth2Scopes.RPC_ACTIVITIES_WRITE, require("set").OAuth2Scopes.APPLICATION_IDENTITIES_WRITE, require("set").OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE, require("set").OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, require("set").OAuth2Scopes.APPLICATIONS_BUILDS_READ, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_STORE_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, require("set").OAuth2Scopes.ACTIVITIES_INVITES_WRITE, require("set").OAuth2Scopes.ACTIVITIES_READ, require("set").OAuth2Scopes.ACTIVITIES_WRITE, require("set").OAuth2Scopes.RELATIONSHIPS_READ, require("set").OAuth2Scopes.RELATIONSHIPS_WRITE, require("set").OAuth2Scopes.VOICE, require("set").OAuth2Scopes.DM_CHANNELS_READ, require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, require("set").OAuth2Scopes.ROLE_CONNECTIONS_WRITE, require("set").OAuth2Scopes.PRESENCES_READ, require("set").OAuth2Scopes.PRESENCES_WRITE, require("set").OAuth2Scopes.GATEWAY_CONNECT, require("set").OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE, require("set").OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE, require("set").OAuth2Scopes.SDK_SOCIAL_LAYER];
let items2 = [require("set").OAuth2Scopes.WEBHOOK_INCOMING, require("set").OAuth2Scopes.BOT];
const combined = items1.concat(items2);
const result = require("set").fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export const getScopeNames = function getScopeNames(value, closure_0) {
  if (require(8310) /* set */.OAuth2Scopes.IDENTIFY === value) {
    const intl55 = require(1212) /* getSystemLocale */.intl;
    const items = [intl55.string(require(1212) /* getSystemLocale */.t.DD9KQh)];
    return items;
  } else if (require(8310) /* set */.OAuth2Scopes.IDENTIFY_PREMIUM === value) {
    const intl54 = require(1212) /* getSystemLocale */.intl;
    const items1 = [intl54.string(require(1212) /* getSystemLocale */.t.xhQsxx)];
    return items1;
  } else if (require(8310) /* set */.OAuth2Scopes.OPENID === value) {
    const intl53 = require(1212) /* getSystemLocale */.intl;
    const items2 = [intl53.string(require(1212) /* getSystemLocale */.t.R5IKv1)];
    return items2;
  } else if (require(8310) /* set */.OAuth2Scopes.EMAIL === value) {
    const intl52 = require(1212) /* getSystemLocale */.intl;
    const items3 = [intl52.string(require(1212) /* getSystemLocale */.t.rvFS2t)];
    return items3;
  } else if (require(8310) /* set */.OAuth2Scopes.BOT === value) {
    const intl51 = require(1212) /* getSystemLocale */.intl;
    const items4 = [intl51.string(require(1212) /* getSystemLocale */.t.pRpdox)];
    return items4;
  } else if (require(8310) /* set */.OAuth2Scopes.CONNECTIONS === value) {
    const intl50 = require(1212) /* getSystemLocale */.intl;
    const items5 = [intl50.string(require(1212) /* getSystemLocale */.t["1AwaU1"])];
    return items5;
  } else if (require(8310) /* set */.OAuth2Scopes.MESSAGES_READ === value) {
    const intl49 = require(1212) /* getSystemLocale */.intl;
    const items6 = [intl49.string(require(1212) /* getSystemLocale */.t.jVXrHb)];
    return items6;
  } else if (require(8310) /* set */.OAuth2Scopes.GUILDS === value) {
    const intl48 = require(1212) /* getSystemLocale */.intl;
    const items7 = [intl48.string(require(1212) /* getSystemLocale */.t.QKGJkC)];
    return items7;
  } else if (require(8310) /* set */.OAuth2Scopes.GUILDS_JOIN === value) {
    const intl47 = require(1212) /* getSystemLocale */.intl;
    const items8 = [intl47.string(require(1212) /* getSystemLocale */.t.ETGDR9)];
    return items8;
  } else if (require(8310) /* set */.OAuth2Scopes.GUILDS_MEMBERS_READ === value) {
    const hasItem = closure_0.includes(require(8310) /* set */.OAuth2Scopes.VOICE);
    const intl46 = require(1212) /* getSystemLocale */.intl;
    const string = intl46.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      let items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (require(8310) /* set */.OAuth2Scopes.GUILDS_CHANNELS_READ === value) {
    const intl45 = require(1212) /* getSystemLocale */.intl;
    const items11 = [intl45.string(require(1212) /* getSystemLocale */.t.BWGAgt)];
    return items11;
  } else if (require(8310) /* set */.OAuth2Scopes.GDM_JOIN === value) {
    const intl44 = require(1212) /* getSystemLocale */.intl;
    const items12 = [intl44.string(require(1212) /* getSystemLocale */.t["55B4wA"])];
    return items12;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC === value) {
    const intl43 = require(1212) /* getSystemLocale */.intl;
    const items13 = [intl43.string(require(1212) /* getSystemLocale */.t.EDBEeK)];
    return items13;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_NOTIFICATIONS_READ === value) {
    const intl42 = require(1212) /* getSystemLocale */.intl;
    const items14 = [intl42.string(require(1212) /* getSystemLocale */.t["6kDHWV"])];
    return items14;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_VOICE_WRITE === value) {
    const intl41 = require(1212) /* getSystemLocale */.intl;
    const items15 = [intl41.string(require(1212) /* getSystemLocale */.t["531s7c"])];
    return items15;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_VIDEO_READ === value) {
    const intl40 = require(1212) /* getSystemLocale */.intl;
    const items16 = [intl40.string(require(1212) /* getSystemLocale */.t.zbUSWO)];
    return items16;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_VIDEO_WRITE === value) {
    const intl39 = require(1212) /* getSystemLocale */.intl;
    const items17 = [intl39.string(require(1212) /* getSystemLocale */.t["y+MdAM"])];
    return items17;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_SCREENSHARE_READ === value) {
    const intl38 = require(1212) /* getSystemLocale */.intl;
    const items18 = [intl38.string(require(1212) /* getSystemLocale */.t.b0i0CO)];
    return items18;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_SCREENSHARE_WRITE === value) {
    const intl37 = require(1212) /* getSystemLocale */.intl;
    const items19 = [intl37.string(require(1212) /* getSystemLocale */.t["9Rmxux"])];
    return items19;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_VOICE_READ === value) {
    const intl36 = require(1212) /* getSystemLocale */.intl;
    const items20 = [intl36.string(require(1212) /* getSystemLocale */.t.rznmpz)];
    return items20;
  } else if (require(8310) /* set */.OAuth2Scopes.RPC_ACTIVITIES_WRITE === value) {
    const intl35 = require(1212) /* getSystemLocale */.intl;
    const items21 = [intl35.string(require(1212) /* getSystemLocale */.t.KQwJDf)];
    return items21;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === value) {
    const intl34 = require(1212) /* getSystemLocale */.intl;
    const items22 = [intl34.string(require(1212) /* getSystemLocale */.t.Iwbtgk)];
    return items22;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_BUILDS_READ === value) {
    const intl33 = require(1212) /* getSystemLocale */.intl;
    const items23 = [intl33.string(require(1212) /* getSystemLocale */.t.ZkZCCW)];
    return items23;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_COMMANDS === value) {
    const intl32 = require(1212) /* getSystemLocale */.intl;
    const items24 = [intl32.string(require(1212) /* getSystemLocale */.t.H4q49X)];
    return items24;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === value) {
    const intl31 = require(1212) /* getSystemLocale */.intl;
    const items25 = [intl31.string(require(1212) /* getSystemLocale */.t.mxeq6u)];
    return items25;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === value) {
    const intl30 = require(1212) /* getSystemLocale */.intl;
    const items26 = [intl30.string(require(1212) /* getSystemLocale */.t["7SIoW7"])];
    return items26;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_STORE_UPDATE === value) {
    const intl29 = require(1212) /* getSystemLocale */.intl;
    const items27 = [intl29.string(require(1212) /* getSystemLocale */.t["Rba/Xn"])];
    return items27;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === value) {
    const intl28 = require(1212) /* getSystemLocale */.intl;
    const items28 = [intl28.string(require(1212) /* getSystemLocale */.t.xeNgGI)];
    return items28;
  } else if (require(8310) /* set */.OAuth2Scopes.ACTIVITIES_READ === value) {
    const intl27 = require(1212) /* getSystemLocale */.intl;
    const items29 = [intl27.string(require(1212) /* getSystemLocale */.t["4+tSce"])];
    return items29;
  } else if (require(8310) /* set */.OAuth2Scopes.ACTIVITIES_WRITE === value) {
    const intl26 = require(1212) /* getSystemLocale */.intl;
    const items30 = [intl26.string(require(1212) /* getSystemLocale */.t["6OsWXX"])];
    return items30;
  } else if (require(8310) /* set */.OAuth2Scopes.RELATIONSHIPS_READ === value) {
    const intl25 = require(1212) /* getSystemLocale */.intl;
    const items31 = [intl25.string(require(1212) /* getSystemLocale */.t["521/7W"])];
    return items31;
  } else if (require(8310) /* set */.OAuth2Scopes.RELATIONSHIPS_WRITE === value) {
    const intl24 = require(1212) /* getSystemLocale */.intl;
    const items32 = [intl24.string(require(1212) /* getSystemLocale */.t["qR/txQ"])];
    return items32;
  } else if (require(8310) /* set */.OAuth2Scopes.VOICE === value) {
    const intl23 = require(1212) /* getSystemLocale */.intl;
    const items33 = [intl23.string(require(1212) /* getSystemLocale */.t.XK5zdO)];
    return items33;
  } else if (require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_READ === value) {
    const intl22 = require(1212) /* getSystemLocale */.intl;
    const items34 = [intl22.string(require(1212) /* getSystemLocale */.t.w8emlT)];
    return items34;
  } else if (require(8310) /* set */.OAuth2Scopes.ROLE_CONNECTIONS_WRITE === value) {
    const intl21 = require(1212) /* getSystemLocale */.intl;
    const items35 = [intl21.string(require(1212) /* getSystemLocale */.t.Bv0wZj)];
    return items35;
  } else if (require(8310) /* set */.OAuth2Scopes.PRESENCES_READ === value) {
    const intl20 = require(1212) /* getSystemLocale */.intl;
    const items36 = [intl20.string(require(1212) /* getSystemLocale */.t.JUWeyf)];
    return items36;
  } else if (require(8310) /* set */.OAuth2Scopes.PRESENCES_WRITE === value) {
    const intl19 = require(1212) /* getSystemLocale */.intl;
    const items37 = [intl19.string(require(1212) /* getSystemLocale */.t.apHLwv)];
    return items37;
  } else if (require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === value) {
    const intl18 = require(1212) /* getSystemLocale */.intl;
    const items38 = [intl18.string(require(1212) /* getSystemLocale */.t.FHeB8p)];
    return items38;
  } else if (require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === value) {
    const intl17 = require(1212) /* getSystemLocale */.intl;
    const items39 = [intl17.string(require(1212) /* getSystemLocale */.t["mdh+xY"])];
    return items39;
  } else if (require(8310) /* set */.OAuth2Scopes.GATEWAY_CONNECT === value) {
    const intl16 = require(1212) /* getSystemLocale */.intl;
    const items40 = [intl16.string(require(1212) /* getSystemLocale */.t["uJd+85"])];
    return items40;
  } else if (require(8310) /* set */.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === value) {
    const intl15 = require(1212) /* getSystemLocale */.intl;
    const items41 = [intl15.string(require(1212) /* getSystemLocale */.t.hycwLK)];
    return items41;
  } else if (require(8310) /* set */.OAuth2Scopes.ACTIVITIES_INVITES_WRITE === value) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    const items42 = [intl14.string(require(1212) /* getSystemLocale */.t.IM4Cje)];
    return items42;
  } else if (require(8310) /* set */.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === value) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    const items43 = [intl13.string(require(1212) /* getSystemLocale */.t["1zioRF"])];
    return items43;
  } else if (require(8310) /* set */.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === value) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    const items44 = [intl12.string(require(1212) /* getSystemLocale */.t["4l1DWw"])];
    return items44;
  } else if (require(8310) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === value) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const items45 = [intl7.string(require(1212) /* getSystemLocale */.t.Pl1dTW), , , ];
    const intl8 = require(1212) /* getSystemLocale */.intl;
    items45[1] = intl8.string(require(1212) /* getSystemLocale */.t.mPRcyT);
    const intl9 = require(1212) /* getSystemLocale */.intl;
    items45[2] = intl9.string(require(1212) /* getSystemLocale */.t.F7J4NE);
    const intl10 = require(1212) /* getSystemLocale */.intl;
    items45[3] = intl10.string(require(1212) /* getSystemLocale */.t.syJLx9);
    if (!closure_0.includes(require(8310) /* set */.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl11 = require(1212) /* getSystemLocale */.intl;
      items45.push(intl11.string(require(1212) /* getSystemLocale */.t["1zioRF"]));
    }
    return items45;
  } else if (require(8310) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER === value) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items46 = [intl.string(require(1212) /* getSystemLocale */.t.Pl1dTW), , , , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items46[1] = intl2.string(require(1212) /* getSystemLocale */.t["hc/+yg"]);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items46[2] = intl3.string(require(1212) /* getSystemLocale */.t.mPRcyT);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    items46[3] = intl4.string(require(1212) /* getSystemLocale */.t.F7J4NE);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    items46[4] = intl5.string(require(1212) /* getSystemLocale */.t["2wxXX9"]);
    if (!closure_0.includes(require(8310) /* set */.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      items46.push(intl6.string(require(1212) /* getSystemLocale */.t["1zioRF"]));
    }
    return items46;
  } else {
    const items47 = [value];
    return items47;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(arg0) {
  let tmp = arg0 === require(8310) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE;
  if (!tmp) {
    tmp = arg0 === require(8310) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER;
  }
  return tmp;
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.MESSAGES_READ)) {
        if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ)) {
          const intl = require(1212) /* getSystemLocale */.intl;
          let formatResult = intl.format(require(1212) /* getSystemLocale */.t["TeL+Ct"], {});
        }
      }
      const intl2 = require(1212) /* getSystemLocale */.intl;
      formatResult = intl2.format(require(1212) /* getSystemLocale */.t.Soy7jJ, {});
    }
    return formatResult;
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  formatResult = intl3.format(require(1212) /* getSystemLocale */.t.o0GMBD, {});
};
