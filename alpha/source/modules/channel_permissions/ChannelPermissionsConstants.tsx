// Module ID: 7841
// Function ID: 7842
// Name: ChannelPermissionsConstants
// Dependencies: [1074, 1115, 7842, 2110, 7843, 2]
// Exports: getChannelPermissionSpecMap

// Module 7841 (ChannelPermissionsConstants)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import ForumPlatformUtilsDefault from "ForumPlatformUtils" /* 7842 */;
import GuildTiVPlatformUtilsDefault from "GuildTiVPlatformUtils" /* 7843 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ChannelTypes: c3, ChannelTypesSets: closure_4, HelpdeskArticles: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsConstants.tsx");

export const RowType = { EMPTY_STATE: 0, [0]: "EMPTY_STATE", ADMINISTRATOR: 1, [1]: "ADMINISTRATOR", ROLE: 2, [2]: "ROLE", OWNER: 3, [3]: "OWNER", MEMBER: 4, [4]: "MEMBER", USER: 5, [5]: "USER", GUILD: 6, [6]: "GUILD", APP_CHANNEL_APP: 7, [7]: "APP_CHANNEL_APP" };
export const AudienceSelectorSections = { ROLES: 0, [0]: "ROLES", MEMBERS: 1, [1]: "MEMBERS", USERS: 2, [2]: "USERS", GUILDS: 3, [3]: "GUILDS" };
export const MEMBER_REQUEST_COUNT = 20;
export const ADVANCED_MODE_ON_KEY = "channelPermissionSettingsAdvancedModeOn";
export const TrackExposureLocations = { SETTINGS_PAGE: "settings-page", MEMBERS_LIST: "members-list", EMPTY_STATE: "empty-state", CREATE_CHANNEL: "create-channel" };
export const SettingMode = { BASIC: "basic", ADVANCED: "advanced" };
export const getChannelPermissionSpecMap = function getChannelPermissionSpecMap(type, arg1, createPostsDisabled) {
  type = type.type;
  const tmp = constants4;
  const tmp3 = constants;
  if (type === constants.GUILD_CATEGORY) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.uV83yi);
    let tmp8 = require;
    let tmp10 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["W/A4Qp"]);
    tmp8 = require;
    tmp10 = require;
  }
  const obj = { title: stringResult, description: null, flag: null };
  const GUILD_CATEGORY = tmp3.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY === type) {
      let M2iEy3 = tmp8(1115).t["o/vBzj"];
    } else {
      if (tmp3.GUILD_VOICE !== type) {
        if (tmp3.GUILD_STAGE_VOICE !== type) {
          M2iEy3 = tmp8(1115).t["3jG0Bo"];
        }
      }
      M2iEy3 = tmp8(1115).t.ejL1Wo;
    }
  } else if (type === GUILD_CATEGORY) {
    M2iEy3 = tmp8(1115).t.SzosGs;
  } else {
    M2iEy3 = tmp8(1115).t.M2iEy3;
  }
  const obj2 = { [constants4.VIEW_CHANNEL.toString()]: obj };
  obj.description = M2iEy3;
  ({ VIEW_CHANNEL: obj.flag, MANAGE_CHANNELS } = tmp);
  const str1 = constants4.VIEW_CHANNEL.toString();
  if (type === tmp3.GUILD_CATEGORY) {
    const intl4 = tmp10(1115).intl;
    let stringResult1 = intl4.string(tmp10(1115).t["9qLtWs"]);
  } else {
    const intl3 = tmp10(1115).intl;
    stringResult1 = intl3.string(tmp10(1115).t.nAw15L);
  }
  const obj3 = { title: stringResult1, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let ydL28i = tmp8(1115).t.KJ2JnG;
  } else if (tmp3.GUILD_VOICE === type) {
    ydL28i = tmp8(1115).t["+gl2ne"];
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    ydL28i = tmp8(1115).t.SDX669;
  } else {
    ydL28i = tmp8(1115).t.ydL28i;
  }
  obj3.description = ydL28i;
  obj3.flag = tmp.MANAGE_CHANNELS;
  obj2[MANAGE_CHANNELS.toString()] = obj3;
  const obj4 = { title: null, description: null, flag: null };
  const str41 = MANAGE_CHANNELS.toString();
  const intl5 = tmp10(1115).intl;
  obj4.title = intl5.string(tmp10(1115).t.ICb6am);
  if (tmp3.GUILD_CATEGORY === type) {
    let hOMXOv = tmp8(1115).t.TyyCMD;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    hOMXOv = tmp8(1115).t.hcw4mx;
  } else {
    hOMXOv = tmp8(1115).t.hOMXOv;
  }
  obj4.description = hOMXOv;
  obj4.flag = tmp.MANAGE_ROLES;
  obj2[tmp.MANAGE_ROLES.toString()] = obj4;
  const obj5 = { title: null, description: null, flag: null };
  const str42 = tmp.MANAGE_ROLES.toString();
  const intl6 = tmp10(1115).intl;
  obj5.title = intl6.string(tmp10(1115).t["/ADKmM"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let CYBZry = tmp10(1115).t["K5+ZZ7"];
  } else {
    CYBZry = tmp10(1115).t.CYBZry;
  }
  obj5.description = CYBZry;
  obj5.flag = tmp.MANAGE_WEBHOOKS;
  obj2[tmp.MANAGE_WEBHOOKS.toString()] = obj5;
  const obj6 = { title: null, description: null, flag: null };
  const str43 = tmp.MANAGE_WEBHOOKS.toString();
  const intl7 = tmp10(1115).intl;
  obj6.title = intl7.string(tmp10(1115).t.zJrgTG);
  if (tmp3.GUILD_CATEGORY === type) {
    let lUCs1n = tmp8(1115).t["3YFAAX"];
  } else {
    if (tmp3.GUILD_VOICE !== type) {
      if (tmp3.GUILD_STAGE_VOICE !== type) {
        lUCs1n = tmp8(1115).t.q4g2aI;
      }
    }
    lUCs1n = tmp8(1115).t.lUCs1n;
  }
  obj6.description = lUCs1n;
  obj6.flag = tmp.CREATE_INSTANT_INVITE;
  obj2[tmp.CREATE_INSTANT_INVITE.toString()] = obj6;
  const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
  const str44 = tmp.CREATE_INSTANT_INVITE.toString();
  if (GUILD_THREADS_ONLY.has(type)) {
    const intl10 = tmp10(1115).intl;
    let stringResult2 = intl10.string(tmp10(1115).t.nJwAHX);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl9 = tmp10(1115).intl;
    stringResult2 = intl9.string(tmp10(1115).t.S1VOwd);
  } else {
    const intl8 = tmp10(1115).intl;
    stringResult2 = intl8.string(tmp10(1115).t.T32rkC);
  }
  const obj7 = { title: stringResult2, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let WQ6zpT = tmp8(1115).t.IjeLuu;
  } else if (tmp3.GUILD_FORUM === type) {
    createPostsDisabled = undefined;
    if (createPostsDisabled != null) {
      createPostsDisabled = createPostsDisabled.createPostsDisabled;
    }
    if (createPostsDisabled) {
      if (!type.isMediaChannel()) {
        let LG9VAi = ForumPlatformUtilsDefault.getForumChannelPermissionText();
      }
      WQ6zpT = LG9VAi;
    }
    LG9VAi = tmp8(1115).t.LG9VAi;
  } else if (tmp3.GUILD_MEDIA === type) {
    WQ6zpT = tmp8(1115).t.LG9VAi;
  } else if (tmp3.GUILD_ANNOUNCEMENT === type) {
    const intl11 = tmp8(1115).intl;
    const obj9 = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS) };
    WQ6zpT = intl11.format(tmp8(1115).t.WFwfSD, obj9);
  } else if (tmp3.GUILD_VOICE === type) {
    let sendMessagesDisabled;
    if (createPostsDisabled != null) {
      sendMessagesDisabled = createPostsDisabled.sendMessagesDisabled;
    }
    WQ6zpT = GuildTiVPlatformUtilsDefault.getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled);
  } else {
    WQ6zpT = tmp8(1115).t.WQ6zpT;
  }
  obj7.description = WQ6zpT;
  obj7.flag = tmp.SEND_MESSAGES;
  obj2[tmp.SEND_MESSAGES.toString()] = obj7;
  const obj12 = { title: null, description: null, flag: null };
  const str45 = tmp.SEND_MESSAGES.toString();
  const intl12 = tmp10(1115).intl;
  obj12.title = intl12.string(tmp10(1115).t["969dEL"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let XFFhA0 = tmp10(1115).t["7zlUay"];
  } else {
    XFFhA0 = tmp10(1115).t.XFFhA0;
  }
  obj12.description = XFFhA0;
  obj12.flag = tmp.EMBED_LINKS;
  obj2[tmp.EMBED_LINKS.toString()] = obj12;
  const obj13 = { title: null, description: null, flag: null };
  const str46 = tmp.EMBED_LINKS.toString();
  const intl13 = tmp10(1115).intl;
  obj13.title = intl13.string(tmp10(1115).t["3AS4UM"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let WK9r7F = tmp10(1115).t.XREf9l;
  } else {
    WK9r7F = tmp10(1115).t.WK9r7F;
  }
  obj13.description = WK9r7F;
  obj13.flag = tmp.ATTACH_FILES;
  obj2[tmp.ATTACH_FILES.toString()] = obj13;
  const obj14 = { title: null, description: null, flag: null };
  const str47 = tmp.ATTACH_FILES.toString();
  const intl14 = tmp10(1115).intl;
  obj14.title = intl14.string(tmp10(1115).t.yEoJAr);
  if (tmp3.GUILD_CATEGORY === type) {
    let PVjR1Y = tmp8(1115).t.pZT2Zh;
  } else if (tmp3.GUILD_VOICE === type) {
    PVjR1Y = tmp8(1115).t.xSSbIs;
  } else {
    PVjR1Y = tmp8(1115).t.PVjR1Y;
  }
  obj14.description = PVjR1Y;
  obj14.flag = tmp.ADD_REACTIONS;
  obj2[tmp.ADD_REACTIONS.toString()] = obj14;
  const obj15 = { title: null, description: null, flag: null };
  const str48 = tmp.ADD_REACTIONS.toString();
  const intl15 = tmp10(1115).intl;
  obj15.title = intl15.string(tmp10(1115).t["+bxf3H"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let Qc5vOr = tmp10(1115).t.mWAbK4;
  } else {
    Qc5vOr = tmp10(1115).t.Qc5vOr;
  }
  obj15.description = Qc5vOr;
  obj15.flag = tmp.USE_EXTERNAL_EMOJIS;
  obj2[tmp.USE_EXTERNAL_EMOJIS.toString()] = obj15;
  const obj16 = { title: null, description: null, flag: null };
  const str49 = tmp.USE_EXTERNAL_EMOJIS.toString();
  const intl16 = tmp10(1115).intl;
  obj16.title = intl16.string(tmp10(1115).t.ERNhYf);
  if (type === tmp3.GUILD_CATEGORY) {
    let VF4fZZ = tmp10(1115).t["39whJ4"];
  } else {
    VF4fZZ = tmp10(1115).t.VF4fZZ;
  }
  obj16.description = VF4fZZ;
  obj16.flag = tmp.USE_EXTERNAL_STICKERS;
  obj2[tmp.USE_EXTERNAL_STICKERS.toString()] = obj16;
  const str50 = tmp.USE_EXTERNAL_STICKERS.toString();
  if (type === tmp3.GUILD_STAGE_VOICE) {
    const intl18 = tmp10(1115).intl;
    let stringResult3 = intl18.string(tmp10(1115).t.VDUAHO);
  } else {
    const intl17 = tmp10(1115).intl;
    stringResult3 = intl17.string(tmp10(1115).t.Y78KGC);
  }
  const obj17 = { title: stringResult3, description: null, flag: null };
  if (type === tmp3.GUILD_CATEGORY) {
    let prop = tmp10(1115).t["HOhg/B"];
  } else if (type === tmp3.GUILD_STAGE_VOICE) {
    prop = tmp10(1115).t.rZn1oO;
  } else {
    prop = tmp10(1115).t["6IUSdt"];
  }
  obj17.description = prop;
  obj17.flag = tmp.MENTION_EVERYONE;
  obj2[tmp.MENTION_EVERYONE.toString()] = obj17;
  const obj18 = { title: null, description: null, flag: null };
  const str51 = tmp.MENTION_EVERYONE.toString();
  const intl19 = tmp10(1115).intl;
  obj18.title = intl19.string(tmp10(1115).t["6lU9xM"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let v5R9nYh = tmp8(1115).t["5R9nYh"];
  } else if (tmp3.GUILD_ANNOUNCEMENT === type) {
    const intl20 = tmp8(1115).intl;
    const obj19 = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS) };
    v5R9nYh = intl20.format(tmp8(1115).t.XRxOo0, obj19);
  } else {
    v5R9nYh = tmp8(1115).t["SeA+G9"];
  }
  obj18.description = v5R9nYh;
  obj18.flag = tmp.MANAGE_MESSAGES;
  obj2[tmp.MANAGE_MESSAGES.toString()] = obj18;
  const obj21 = { title: null, description: null, flag: null };
  const str52 = tmp.MANAGE_MESSAGES.toString();
  const intl21 = tmp10(1115).intl;
  obj21.title = intl21.string(tmp10(1115).t.Y5BI39);
  if (type === tmp3.GUILD_CATEGORY) {
    let gmbD87 = tmp10(1115).t.gmbD87;
  } else {
    gmbD87 = tmp10(1115).t["0l2EjL"];
  }
  obj21.description = gmbD87;
  obj21.flag = tmp.PIN_MESSAGES;
  obj2[tmp.PIN_MESSAGES.toString()] = obj21;
  const obj22 = { title: null, description: null, flag: null };
  const str53 = tmp.PIN_MESSAGES.toString();
  const intl22 = tmp10(1115).intl;
  obj22.title = intl22.string(tmp10(1115).t.kqcjeV);
  if (type === tmp3.GUILD_CATEGORY) {
    let Ha1xbw = tmp10(1115).t.C4t1Xu;
  } else {
    Ha1xbw = tmp10(1115).t.Ha1xbw;
  }
  obj22.description = Ha1xbw;
  obj22.flag = tmp.BYPASS_SLOWMODE;
  obj2[tmp.BYPASS_SLOWMODE.toString()] = obj22;
  const obj23 = { title: null, description: null, flag: null };
  const str54 = tmp.BYPASS_SLOWMODE.toString();
  const intl23 = tmp10(1115).intl;
  obj23.title = intl23.string(tmp10(1115).t.Aj9ruN);
  if (type === tmp3.GUILD_CATEGORY) {
    let qEbw4W = tmp10(1115).t["Pf0e/Q"];
  } else {
    qEbw4W = tmp10(1115).t.qEbw4W;
  }
  obj23.description = qEbw4W;
  obj23.flag = tmp.MANAGE_OFFICIAL_MESSAGES;
  obj2[tmp.MANAGE_OFFICIAL_MESSAGES.toString()] = obj23;
  const GUILD_THREADS_ONLY2 = tmp19.GUILD_THREADS_ONLY;
  const str55 = tmp.MANAGE_OFFICIAL_MESSAGES.toString();
  const hasItem = GUILD_THREADS_ONLY2.has(type);
  const intl24 = tmp10(1115).intl;
  const string = intl24.string;
  const t = tmp10(1115).t;
  if (hasItem) {
    let stringResult4 = string(t["0RQwtn"]);
  } else {
    stringResult4 = string(t.l9ufaR);
  }
  const obj24 = { title: stringResult4, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let RqCc7i = tmp8(1115).t["cJRv/g"];
  } else if (tmp3.GUILD_VOICE === type) {
    let prop1;
    if (createPostsDisabled != null) {
      prop1 = createPostsDisabled.readMessageHistoryDisabled;
    }
    RqCc7i = GuildTiVPlatformUtilsDefault.getTextInVoiceReadMessageHistoryChannelPermissionText(prop1);
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        RqCc7i = tmp8(1115).t.cuMfH0;
      }
    }
    RqCc7i = tmp8(1115).t.RqCc7i;
  }
  obj24.description = RqCc7i;
  obj24.flag = tmp.READ_MESSAGE_HISTORY;
  obj2[tmp.READ_MESSAGE_HISTORY.toString()] = obj24;
  const obj26 = { title: null, description: null, flag: null };
  const str56 = tmp.READ_MESSAGE_HISTORY.toString();
  const intl25 = tmp10(1115).intl;
  obj26.title = intl25.string(tmp10(1115).t.mMbwh7);
  if (type === tmp3.GUILD_CATEGORY) {
    let CpakGz = tmp10(1115).t.b7pc9U;
  } else {
    CpakGz = tmp10(1115).t.CpakGz;
  }
  obj26.description = CpakGz;
  obj26.flag = tmp.SEND_TTS_MESSAGES;
  obj2[tmp.SEND_TTS_MESSAGES.toString()] = obj26;
  const obj27 = { title: null, description: null, flag: null };
  const str57 = tmp.SEND_TTS_MESSAGES.toString();
  const intl26 = tmp10(1115).intl;
  obj27.title = intl26.string(tmp10(1115).t.nkoPOt);
  if (type === tmp3.GUILD_CATEGORY) {
    let ReG3gG = tmp10(1115).t["D+qW0J"];
  } else {
    ReG3gG = tmp10(1115).t.ReG3gG;
  }
  obj27.description = ReG3gG;
  obj27.flag = tmp.USE_APPLICATION_COMMANDS;
  obj2[tmp.USE_APPLICATION_COMMANDS.toString()] = obj27;
  const obj28 = { title: null, description: null, flag: null };
  const str58 = tmp.USE_APPLICATION_COMMANDS.toString();
  const intl27 = tmp10(1115).intl;
  obj28.title = intl27.string(tmp10(1115).t.WlWSBT);
  if (type === tmp3.GUILD_CATEGORY) {
    let BhEo9V = tmp10(1115).t.gavGfv;
  } else {
    BhEo9V = tmp10(1115).t.BhEo9V;
  }
  obj28.description = BhEo9V;
  obj28.flag = tmp.SEND_VOICE_MESSAGES;
  obj2[tmp.SEND_VOICE_MESSAGES.toString()] = obj28;
  const obj29 = { title: null, description: null, flag: null };
  const str59 = tmp.SEND_VOICE_MESSAGES.toString();
  const intl28 = tmp10(1115).intl;
  obj29.title = intl28.string(tmp10(1115).t.UMQ7Ww);
  if (type === tmp3.GUILD_CATEGORY) {
    let ckKKIO = tmp10(1115).t["18Ya7L"];
  } else {
    ckKKIO = tmp10(1115).t.ckKKIO;
  }
  obj29.description = ckKKIO;
  obj29.flag = tmp.SEND_POLLS;
  obj2[tmp.SEND_POLLS.toString()] = obj29;
  const obj30 = { title: null, description: null, flag: null };
  const str60 = tmp.SEND_POLLS.toString();
  const intl29 = tmp10(1115).intl;
  obj30.title = intl29.string(tmp10(1115).t.S0W8Z5);
  const GUILD_CATEGORY2 = tmp3.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY2 === type) {
      let XcrieN = tmp8(1115).t.XcrieN;
    } else if (tmp3.GUILD_STAGE_VOICE === type) {
      XcrieN = tmp8(1115).t.SOFNhP;
    } else {
      if (tmp3.GUILD_TEXT !== type) {
        if (tmp3.GUILD_FORUM !== type) {
          if (tmp3.GUILD_MEDIA !== type) {
            XcrieN = tmp8(1115).t.j4AyO8;
          }
        }
      }
      XcrieN = tmp8(1115).t.LsS8xT;
    }
  } else if (GUILD_CATEGORY2 === type) {
    XcrieN = tmp8(1115).t.stA0Hl;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    XcrieN = tmp8(1115).t["G9+Qie"];
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          XcrieN = tmp8(1115).t.HvG8uR;
        }
      }
    }
    XcrieN = tmp8(1115).t["QU/Rw8"];
  }
  obj30.description = XcrieN;
  obj30.flag = tmp.CONNECT;
  obj2[tmp.CONNECT.toString()] = obj30;
  const obj31 = { title: null, description: null, flag: null };
  const str61 = tmp.CONNECT.toString();
  const intl30 = tmp10(1115).intl;
  obj31.title = intl30.string(tmp10(1115).t["8w1tIR"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let iXhS6R = tmp8(1115).t.iXhS6R;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    iXhS6R = tmp8(1115).t.a8n741;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          iXhS6R = tmp8(1115).t["568E6d"];
        }
      }
    }
    iXhS6R = tmp8(1115).t["+VXsJI"];
  }
  obj31.description = iXhS6R;
  obj31.flag = tmp.SPEAK;
  obj2[tmp.SPEAK.toString()] = obj31;
  const obj32 = { title: null, description: null, flag: null };
  const str62 = tmp.SPEAK.toString();
  const intl31 = tmp10(1115).intl;
  obj32.title = intl31.string(tmp10(1115).t.FlNoSV);
  if (tmp3.GUILD_CATEGORY === type) {
    let AuEQEC = tmp8(1115).t["ryG0/J"];
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          if (tmp3.GUILD_STAGE_VOICE === type) {
            AuEQEC = tmp8(1115).t.swJcN6;
          } else {
            AuEQEC = tmp8(1115).t.RY8rIc;
          }
        }
      }
    }
    AuEQEC = tmp8(1115).t.AuEQEC;
  }
  obj32.description = AuEQEC;
  obj32.flag = tmp.STREAM;
  obj2[tmp.STREAM.toString()] = obj32;
  const obj33 = { title: null, description: null, flag: null };
  const str63 = tmp.STREAM.toString();
  const intl32 = tmp10(1115).intl;
  obj33.title = intl32.string(tmp10(1115).t.rLSGeh);
  if (tmp3.GUILD_CATEGORY === type) {
    let RyEwla = tmp8(1115).t.maNzCO;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        RyEwla = tmp8(1115).t.qinvMU;
      }
    }
    RyEwla = tmp8(1115).t.RyEwla;
  }
  obj33.description = RyEwla;
  obj33.flag = tmp.USE_EMBEDDED_ACTIVITIES;
  obj2[tmp.USE_EMBEDDED_ACTIVITIES.toString()] = obj33;
  const obj34 = { title: null, description: null, flag: null };
  const str64 = tmp.USE_EMBEDDED_ACTIVITIES.toString();
  const intl33 = tmp10(1115).intl;
  obj34.title = intl33.string(tmp10(1115).t["3TzAk0"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let qPUPip = tmp8(1115).t.bgIY3H;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        qPUPip = tmp8(1115).t.czqMLp;
      }
    }
    qPUPip = tmp8(1115).t.qPUPip;
  }
  obj34.description = qPUPip;
  obj34.flag = tmp.USE_EXTERNAL_APPS;
  obj2[tmp.USE_EXTERNAL_APPS.toString()] = obj34;
  const obj35 = { title: null, description: null, flag: null };
  const str65 = tmp.USE_EXTERNAL_APPS.toString();
  const intl34 = tmp10(1115).intl;
  obj35.title = intl34.string(tmp10(1115).t.Bco7NG);
  if (tmp3.GUILD_CATEGORY === type) {
    const intl37 = tmp8(1115).intl;
    const obj36 = { helpCenterArticle: HelpdeskUtilsDefault.getArticleURL(constants3.SOUNDBOARD) };
    let formatResult = intl37.format(tmp8(1115).t["0kBp/0"], obj36);
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          const intl35 = tmp8(1115).intl;
          const obj38 = { helpCenterArticle: HelpdeskUtilsDefault.getArticleURL(constants3.SOUNDBOARD) };
          formatResult = intl35.format(tmp8(1115).t.GEi6Ym, obj38);
        }
      }
    }
    const intl36 = tmp8(1115).intl;
    const obj40 = { helpCenterArticle: HelpdeskUtilsDefault.getArticleURL(constants3.SOUNDBOARD) };
    formatResult = intl36.format(tmp8(1115).t["6eYqU1"], obj40);
  }
  obj35.description = formatResult;
  obj35.flag = tmp.USE_SOUNDBOARD;
  obj2[tmp.USE_SOUNDBOARD.toString()] = obj35;
  const obj42 = { title: null, description: null, flag: null };
  const str66 = tmp.USE_SOUNDBOARD.toString();
  const intl38 = tmp10(1115).intl;
  obj42.title = intl38.string(tmp10(1115).t.pwaVJ6);
  obj42.description = tmp10(1115).t.qDpPtX;
  obj42.flag = tmp.USE_EXTERNAL_SOUNDS;
  obj2[tmp.USE_EXTERNAL_SOUNDS.toString()] = obj42;
  const obj43 = { title: null, description: null, flag: null };
  const str67 = tmp.USE_EXTERNAL_SOUNDS.toString();
  const intl39 = tmp10(1115).intl;
  obj43.title = intl39.string(tmp10(1115).t["08zAV7"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let fUYPly = tmp8(1115).t.fUYPly;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    fUYPly = tmp8(1115).t.BJKqsW;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          fUYPly = tmp8(1115).t.s2eihY;
        }
      }
    }
    fUYPly = tmp8(1115).t["3GJwsc"];
  }
  obj43.description = fUYPly;
  obj43.flag = tmp.USE_VAD;
  obj2[tmp.USE_VAD.toString()] = obj43;
  const obj44 = { title: null, description: null, flag: null };
  const str68 = tmp.USE_VAD.toString();
  const intl40 = tmp10(1115).intl;
  obj44.title = intl40.string(tmp10(1115).t.BVK71i);
  if (tmp3.GUILD_CATEGORY === type) {
    const intl45 = tmp8(1115).intl;
    const obj45 = { keybind: null };
    const intl46 = tmp8(1115).intl;
    obj45.keybind = intl46.string(tmp8(1115).t.DkSwJ2);
    let formatResult1 = intl45.format(tmp8(1115).t.g5MzON, obj45);
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          const intl41 = tmp8(1115).intl;
          const obj46 = { keybind: null };
          const intl42 = tmp8(1115).intl;
          obj46.keybind = intl42.string(tmp8(1115).t.DkSwJ2);
          formatResult1 = intl41.format(tmp8(1115).t.Ij0yKX, obj46);
        }
      }
    }
    const intl43 = tmp8(1115).intl;
    const obj47 = { keybind: null };
    const intl44 = tmp8(1115).intl;
    obj47.keybind = intl44.string(tmp8(1115).t.DkSwJ2);
    formatResult1 = intl43.format(tmp8(1115).t["4nbjL0"], obj47);
  }
  obj44.description = formatResult1;
  obj44.flag = tmp.PRIORITY_SPEAKER;
  obj2[tmp.PRIORITY_SPEAKER.toString()] = obj44;
  const obj48 = { title: null, description: null, flag: null };
  const str69 = tmp.PRIORITY_SPEAKER.toString();
  const intl47 = tmp10(1115).intl;
  obj48.title = intl47.string(tmp10(1115).t["8EI30/"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let KYDG2K = tmp8(1115).t.bcuobK;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    KYDG2K = tmp8(1115).t.EbvdH9;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          KYDG2K = tmp8(1115).t.LW5C9P;
        }
      }
    }
    KYDG2K = tmp8(1115).t.KYDG2K;
  }
  obj48.description = KYDG2K;
  obj48.flag = tmp.MUTE_MEMBERS;
  obj2[tmp.MUTE_MEMBERS.toString()] = obj48;
  const obj49 = { title: null, description: null, flag: null };
  const str70 = tmp.MUTE_MEMBERS.toString();
  const intl48 = tmp10(1115).intl;
  obj49.title = intl48.string(tmp10(1115).t["9L47Fr"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let amZ5vn = tmp8(1115).t.amZ5vn;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          amZ5vn = tmp8(1115).t.UAdIxo;
        }
      }
    }
    amZ5vn = tmp8(1115).t["d+i1nX"];
  }
  obj49.description = amZ5vn;
  obj49.flag = tmp.DEAFEN_MEMBERS;
  obj2[tmp.DEAFEN_MEMBERS.toString()] = obj49;
  const obj50 = { title: null, description: null, flag: null };
  const str71 = tmp.DEAFEN_MEMBERS.toString();
  const intl49 = tmp10(1115).intl;
  obj50.title = intl49.string(tmp10(1115).t.YtjJPQ);
  if (tmp3.GUILD_CATEGORY === type) {
    let cbdQy2 = tmp8(1115).t.XmoyRD;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    cbdQy2 = tmp8(1115).t.bizKz6;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          cbdQy2 = tmp8(1115).t.nSD1ah;
        }
      }
    }
    cbdQy2 = tmp8(1115).t.cbdQy2;
  }
  obj50.description = cbdQy2;
  obj50.flag = tmp.MOVE_MEMBERS;
  obj2[tmp.MOVE_MEMBERS.toString()] = obj50;
  const obj51 = { title: null, description: null, flag: null };
  const str72 = tmp.MOVE_MEMBERS.toString();
  const intl50 = tmp10(1115).intl;
  obj51.title = intl50.string(tmp10(1115).t["5kicT2"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let uzlYFE = tmp10(1115).t.T1lMSl;
  } else {
    uzlYFE = tmp10(1115).t.uzlYFE;
  }
  obj51.description = uzlYFE;
  obj51.flag = tmp.REQUEST_TO_SPEAK;
  obj2[tmp.REQUEST_TO_SPEAK.toString()] = obj51;
  const GUILD_THREADS_ONLY3 = tmp19.GUILD_THREADS_ONLY;
  const str73 = tmp.REQUEST_TO_SPEAK.toString();
  if (GUILD_THREADS_ONLY3.has(type)) {
    const intl53 = tmp10(1115).intl;
    let stringResult5 = intl53.string(tmp10(1115).t.ossiZD);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl52 = tmp10(1115).intl;
    stringResult5 = intl52.string(tmp10(1115).t.QKe7Q3);
  } else {
    const intl51 = tmp10(1115).intl;
    stringResult5 = intl51.string(tmp10(1115).t.kEqgr7);
  }
  const obj52 = { title: stringResult5, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let S31soU = tmp8(1115).t.S31soU;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        S31soU = tmp8(1115).t.yvan0j;
      }
    }
    S31soU = tmp8(1115).t["XLi/jG"];
  }
  obj52.description = S31soU;
  obj52.flag = tmp.MANAGE_THREADS;
  obj2[tmp.MANAGE_THREADS.toString()] = obj52;
  const obj53 = { title: null, description: null, flag: null };
  const str74 = tmp.MANAGE_THREADS.toString();
  const intl54 = tmp10(1115).intl;
  obj53.title = intl54.string(tmp10(1115).t["25rKnX"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let prop2 = tmp10(1115).t["+M1yLj"];
  } else {
    prop2 = tmp10(1115).t["5SDtGB"];
  }
  obj53.description = prop2;
  obj53.flag = tmp.CREATE_PUBLIC_THREADS;
  obj2[tmp.CREATE_PUBLIC_THREADS.toString()] = obj53;
  const obj54 = { title: null, description: null, flag: null };
  const str75 = tmp.CREATE_PUBLIC_THREADS.toString();
  const intl55 = tmp10(1115).intl;
  obj54.title = intl55.string(tmp10(1115).t.QwbTSa);
  if (type === tmp3.GUILD_CATEGORY) {
    let Chg2zd = tmp10(1115).t["hBS/zn"];
  } else {
    Chg2zd = tmp10(1115).t.Chg2zd;
  }
  obj54.description = Chg2zd;
  obj54.flag = tmp.CREATE_PRIVATE_THREADS;
  obj2[tmp.CREATE_PRIVATE_THREADS.toString()] = obj54;
  const GUILD_THREADS_ONLY4 = tmp19.GUILD_THREADS_ONLY;
  const str76 = tmp.CREATE_PRIVATE_THREADS.toString();
  if (GUILD_THREADS_ONLY4.has(type)) {
    const intl58 = tmp10(1115).intl;
    let stringResult6 = intl58.string(tmp10(1115).t.fqhqWm);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl57 = tmp10(1115).intl;
    stringResult6 = intl57.string(tmp10(1115).t["5QlVGy"]);
  } else {
    const intl56 = tmp10(1115).intl;
    stringResult6 = intl56.string(tmp10(1115).t.fTE74g);
  }
  const obj55 = { title: stringResult6, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let XTnrPH = tmp8(1115).t.DlIVcN;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        XTnrPH = tmp8(1115).t.xHO6Me;
      }
    }
    XTnrPH = tmp8(1115).t.XTnrPH;
  }
  obj55.description = XTnrPH;
  obj55.flag = tmp.SEND_MESSAGES_IN_THREADS;
  obj2[tmp.SEND_MESSAGES_IN_THREADS.toString()] = obj55;
  const obj56 = { title: null, description: null, flag: null };
  const str77 = tmp.SEND_MESSAGES_IN_THREADS.toString();
  const intl59 = tmp10(1115).intl;
  obj56.title = intl59.string(tmp10(1115).t.HIgA5a);
  if (type === tmp3.GUILD_CATEGORY) {
    let CP2sz4 = tmp10(1115).t.CP2sz4;
  } else {
    CP2sz4 = tmp10(1115).t["4pO/TY"];
  }
  obj56.description = CP2sz4;
  obj56.flag = tmp.MANAGE_EVENTS;
  obj2[tmp.MANAGE_EVENTS.toString()] = obj56;
  const obj57 = { title: null, description: null, flag: null };
  const str78 = tmp.MANAGE_EVENTS.toString();
  const intl60 = tmp10(1115).intl;
  obj57.title = intl60.string(tmp10(1115).t.qyjZua);
  if (type === tmp3.GUILD_CATEGORY) {
    let sPoBLa = tmp10(1115).t.XpibmC;
  } else {
    sPoBLa = tmp10(1115).t.sPoBLa;
  }
  obj57.description = sPoBLa;
  obj57.flag = tmp.CREATE_EVENTS;
  obj2[tmp.CREATE_EVENTS.toString()] = obj57;
  const obj58 = { title: null, description: null, flag: null };
  const str79 = tmp.CREATE_EVENTS.toString();
  const intl61 = tmp10(1115).intl;
  obj58.title = intl61.string(tmp10(1115).t.VBwkUf);
  let enableHangoutWindow;
  if (createPostsDisabled != null) {
    enableHangoutWindow = createPostsDisabled.enableHangoutWindow;
  }
  const t2 = tmp10(1115).t;
  obj58.description = enableHangoutWindow ? t2.CYcJ6H : t2.C6BzXx;
  obj58.flag = tmp.SET_VOICE_CHANNEL_STATUS;
  obj2[tmp.SET_VOICE_CHANNEL_STATUS.toString()] = obj58;
  return obj2;
};
