// Module ID: 9743
// Function ID: 9744
// Name: scopes
// Dependencies: [1113, 8910, 2]
// Exports: getScopeNames, getSecurityMessage, isSocialLayerUmbrellaScope

// Module 9743 (scopes)
import intl66 from "intl" /* 1113 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8910 */;
import size from "module_2" /* 2 */;

let items = [
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t["6xfSCq"]);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.ymSk0r);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.EnN7c5);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t["4wMpBs"]);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.CncpnK);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.X9pGvJ);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.sGOSG4);
  },
  () => {
    const intl = intl66.intl;
    return intl.string(intl66.t.JfibUq);
  }
];
let items1 = [OAuth2Scopes.OAuth2Scopes.BOT, OAuth2Scopes.OAuth2Scopes.OPENID, OAuth2Scopes.OAuth2Scopes.IDENTIFY, OAuth2Scopes.OAuth2Scopes.IDENTIFY_PREMIUM, OAuth2Scopes.OAuth2Scopes.EMAIL, OAuth2Scopes.OAuth2Scopes.CONNECTIONS, OAuth2Scopes.OAuth2Scopes.MESSAGES_READ, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_JOIN, OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.GDM_JOIN, OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE, OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ, OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_WRITE, OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ, OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_WRITE, OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE, OAuth2Scopes.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_READ, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE, OAuth2Scopes.OAuth2Scopes.ACTIVITIES_READ, OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.ORBS_ARCADE_PLAY, OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ, OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_WRITE, OAuth2Scopes.OAuth2Scopes.VOICE, OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, OAuth2Scopes.OAuth2Scopes.PERSONAL_RELATIONSHIPS_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_MESSAGES_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.PERSONAL_MENTIONS_READ, OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_MESSAGES_SEARCH, OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_SEARCH, OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE, OAuth2Scopes.OAuth2Scopes.PRESENCES_READ, OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE, OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT, OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
const concat = items1.concat;
let items2 = [OAuth2Scopes.OAuth2Scopes.WEBHOOK_INCOMING, OAuth2Scopes.OAuth2Scopes.BOT];
const combined = concat(items2);
const result = size.fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export function getScopeNames(nextResult, c2) {
  if (OAuth2Scopes.OAuth2Scopes.IDENTIFY === nextResult) {
    const intl65 = intl66.intl;
    const items = [intl65.string(intl66.t.DD9KQh)];
    return items;
  } else if (OAuth2Scopes.OAuth2Scopes.IDENTIFY_PREMIUM === nextResult) {
    const intl64 = intl66.intl;
    const items1 = [intl64.string(intl66.t.xhQsxx)];
    return items1;
  } else if (OAuth2Scopes.OAuth2Scopes.OPENID === nextResult) {
    const intl63 = intl66.intl;
    const items2 = [intl63.string(intl66.t.R5IKv1)];
    return items2;
  } else if (OAuth2Scopes.OAuth2Scopes.EMAIL === nextResult) {
    const intl62 = intl66.intl;
    const items3 = [intl62.string(intl66.t.rvFS2t)];
    return items3;
  } else if (OAuth2Scopes.OAuth2Scopes.BOT === nextResult) {
    const intl61 = intl66.intl;
    const items4 = [intl61.string(intl66.t.pRpdox)];
    return items4;
  } else if (OAuth2Scopes.OAuth2Scopes.CONNECTIONS === nextResult) {
    const intl60 = intl66.intl;
    const items5 = [intl60.string(intl66.t["1AwaU1"])];
    return items5;
  } else if (OAuth2Scopes.OAuth2Scopes.MESSAGES_READ === nextResult) {
    const intl59 = intl66.intl;
    const items6 = [intl59.string(intl66.t.jVXrHb)];
    return items6;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS === nextResult) {
    const intl58 = intl66.intl;
    const items7 = [intl58.string(intl66.t.QKGJkC)];
    return items7;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_JOIN === nextResult) {
    const intl57 = intl66.intl;
    const items8 = [intl57.string(intl66.t.ETGDR9)];
    return items8;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ === nextResult) {
    let items10;
    const hasItem = c2.includes(OAuth2Scopes.OAuth2Scopes.VOICE);
    const intl56 = intl66.intl;
    const string = intl56.string;
    const t = intl66.t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ === nextResult) {
    const intl55 = intl66.intl;
    const items11 = [intl55.string(intl66.t.BWGAgt)];
    return items11;
  } else if (OAuth2Scopes.OAuth2Scopes.GDM_JOIN === nextResult) {
    const intl54 = intl66.intl;
    const items12 = [intl54.string(intl66.t["55B4wA"])];
    return items12;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC === nextResult) {
    const intl53 = intl66.intl;
    const items13 = [intl53.string(intl66.t.EDBEeK)];
    return items13;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ === nextResult) {
    const intl52 = intl66.intl;
    const items14 = [intl52.string(intl66.t["6kDHWV"])];
    return items14;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE === nextResult) {
    const intl51 = intl66.intl;
    const items15 = [intl51.string(intl66.t["531s7c"])];
    return items15;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ === nextResult) {
    const intl50 = intl66.intl;
    const items16 = [intl50.string(intl66.t.zbUSWO)];
    return items16;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_WRITE === nextResult) {
    const intl49 = intl66.intl;
    const items17 = [intl49.string(intl66.t["y+MdAM"])];
    return items17;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ === nextResult) {
    const intl48 = intl66.intl;
    const items18 = [intl48.string(intl66.t.b0i0CO)];
    return items18;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_WRITE === nextResult) {
    const intl47 = intl66.intl;
    const items19 = [intl47.string(intl66.t["9Rmxux"])];
    return items19;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ === nextResult) {
    const intl46 = intl66.intl;
    const items20 = [intl46.string(intl66.t.rznmpz)];
    return items20;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE === nextResult) {
    const intl45 = intl66.intl;
    const items21 = [intl45.string(intl66.t.KQwJDf)];
    return items21;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === nextResult) {
    const intl44 = intl66.intl;
    const items22 = [intl44.string(intl66.t.Iwbtgk)];
    return items22;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_READ === nextResult) {
    const intl43 = intl66.intl;
    const items23 = [intl43.string(intl66.t.ZkZCCW)];
    return items23;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS === nextResult) {
    const intl42 = intl66.intl;
    const items24 = [intl42.string(intl66.t.H4q49X)];
    return items24;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === nextResult) {
    const intl41 = intl66.intl;
    const items25 = [intl41.string(intl66.t.mxeq6u)];
    return items25;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === nextResult) {
    const intl40 = intl66.intl;
    const items26 = [intl40.string(intl66.t["7SIoW7"])];
    return items26;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_STORE_UPDATE === nextResult) {
    const intl39 = intl66.intl;
    const items27 = [intl39.string(intl66.t["Rba/Xn"])];
    return items27;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === nextResult) {
    const intl38 = intl66.intl;
    const items28 = [intl38.string(intl66.t.xeNgGI)];
    return items28;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_READ === nextResult) {
    const intl37 = intl66.intl;
    const items29 = [intl37.string(intl66.t["4+tSce"])];
    return items29;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE === nextResult) {
    const intl36 = intl66.intl;
    const items30 = [intl36.string(intl66.t["6OsWXX"])];
    return items30;
  } else if (OAuth2Scopes.OAuth2Scopes.ORBS_ARCADE_PLAY === nextResult) {
    const intl35 = intl66.intl;
    const items31 = [intl35.string(intl66.t.pIam91)];
    return items31;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ === nextResult) {
    const intl34 = intl66.intl;
    const items32 = [intl34.string(intl66.t["521/7W"])];
    return items32;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_WRITE === nextResult) {
    const intl33 = intl66.intl;
    const items33 = [intl33.string(intl66.t["qR/txQ"])];
    return items33;
  } else if (OAuth2Scopes.OAuth2Scopes.VOICE === nextResult) {
    const intl32 = intl66.intl;
    const items34 = [intl32.string(intl66.t.XK5zdO)];
    return items34;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ === nextResult) {
    const intl31 = intl66.intl;
    const items35 = [intl31.string(intl66.t.w8emlT)];
    return items35;
  } else if (OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE === nextResult) {
    const intl30 = intl66.intl;
    const items36 = [intl30.string(intl66.t.Bv0wZj)];
    return items36;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_READ === nextResult) {
    const intl29 = intl66.intl;
    const items37 = [intl29.string(intl66.t.JUWeyf)];
    return items37;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE === nextResult) {
    const intl28 = intl66.intl;
    const items38 = [intl28.string(intl66.t.apHLwv)];
    return items38;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl27 = intl66.intl;
    const items39 = [intl27.string(intl66.t.FHeB8p)];
    return items39;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === nextResult) {
    const intl26 = intl66.intl;
    const items40 = [intl26.string(intl66.t["mdh+xY"])];
    return items40;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_RELATIONSHIPS_READ === nextResult) {
    const intl25 = intl66.intl;
    const items41 = [intl25.string(intl66.t["521/7W"])];
    return items41;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_READ === nextResult) {
    const intl24 = intl66.intl;
    const items42 = [intl24.string(intl66.t.w8emlT)];
    return items42;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl23 = intl66.intl;
    const items43 = [intl23.string(intl66.t.FHeB8p)];
    return items43;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_SEARCH === nextResult) {
    const intl22 = intl66.intl;
    const items44 = [intl22.string(intl66.t.UVkUVk)];
    return items44;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_READ === nextResult) {
    const intl21 = intl66.intl;
    const items45 = [intl21.string(intl66.t.BWGAgt)];
    return items45;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_MESSAGES_READ === nextResult) {
    const intl20 = intl66.intl;
    const items46 = [intl20.string(intl66.t["+7+Hvl"])];
    return items46;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_MESSAGES_SEARCH === nextResult) {
    const intl19 = intl66.intl;
    const items47 = [intl19.string(intl66.t.N1P8Wp)];
    return items47;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_MENTIONS_READ === nextResult) {
    const intl18 = intl66.intl;
    const items48 = [intl18.string(intl66.t.Alcf2G)];
    return items48;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_ACTIVITIES_WRITE === nextResult) {
    const intl17 = intl66.intl;
    const items49 = [intl17.string(intl66.t["6OsWXX"])];
    return items49;
  } else if (OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT === nextResult) {
    const intl16 = intl66.intl;
    const items50 = [intl16.string(intl66.t["uJd+85"])];
    return items50;
  } else if (OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === nextResult) {
    const intl15 = intl66.intl;
    const items51 = [intl15.string(intl66.t.hycwLK)];
    return items51;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE === nextResult) {
    const intl14 = intl66.intl;
    const items52 = [intl14.string(intl66.t.IM4Cje)];
    return items52;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl13 = intl66.intl;
    const items53 = [intl13.string(intl66.t["1zioRF"])];
    return items53;
  } else if (OAuth2Scopes.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl12 = intl66.intl;
    const items54 = [intl12.string(intl66.t["4l1DWw"])];
    return items54;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === nextResult) {
    const intl7 = intl66.intl;
    const items55 = [intl7.string(intl66.t.Pl1dTW), , , ];
    const intl8 = intl66.intl;
    items55[1] = intl8.string(intl66.t.mPRcyT);
    const intl9 = intl66.intl;
    items55[2] = intl9.string(intl66.t.F7J4NE);
    const intl10 = intl66.intl;
    items55[3] = intl10.string(intl66.t.syJLx9);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const push2 = items55.push;
      const intl11 = intl66.intl;
      push2(intl11.string(intl66.t["1zioRF"]));
    }
    return items55;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER === nextResult) {
    const intl = intl66.intl;
    const items56 = [intl.string(intl66.t.Pl1dTW), , , , ];
    const intl2 = intl66.intl;
    items56[1] = intl2.string(intl66.t["hc/+yg"]);
    const intl3 = intl66.intl;
    items56[2] = intl3.string(intl66.t.mPRcyT);
    const intl4 = intl66.intl;
    items56[3] = intl4.string(intl66.t.F7J4NE);
    const intl5 = intl66.intl;
    items56[4] = intl5.string(intl66.t["2wxXX9"]);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const push = items56.push;
      const intl6 = intl66.intl;
      push(intl6.string(intl66.t["1zioRF"]));
    }
    return items56;
  } else {
    const items57 = [nextResult];
    return items57;
  }
}
export function isSocialLayerUmbrellaScope(item) {
  const tmp3 = item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE || item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER;
  return tmp3;
}
export function getSecurityMessage(scopes) {
  if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    let formatResult;
    if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      const someResult = scopes.some((item) => {
        const SCOPES_CAN_READ_MESSAGES = OAuth2Scopes.OAuth2ScopesSets.SCOPES_CAN_READ_MESSAGES;
        return SCOPES_CAN_READ_MESSAGES.has(item);
      });
      const intl = tmp(1113).intl;
      const format = intl.format;
      const t = tmp(1113).t;
      if (someResult) {
        formatResult = format(t.Soy7jJ, {});
      } else {
        formatResult = format(t["TeL+Ct"], {});
      }
    }
    return formatResult;
  }
  const intl2 = tmp(1113).intl;
  formatResult = intl2.format(tmp(1113).t.o0GMBD, {});
}
