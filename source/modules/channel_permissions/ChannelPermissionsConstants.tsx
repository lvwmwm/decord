// Module ID: 7480
// Function ID: 60048
// Name: RowType
// Dependencies: []
// Exports: getChannelPermissionSpecMap

// Module 7480 (RowType)
const _module = require(dependencyMap[0]);
({ ChannelTypes: closure_3, ChannelTypesSets: closure_4, HelpdeskArticles: closure_5, Permissions: closure_6 } = _module);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsConstants.tsx");

export const RowType = { EMPTY_STATE: 0, [0]: "EMPTY_STATE", ADMINISTRATOR: 1, [1]: "ADMINISTRATOR", ROLE: 2, [2]: "ROLE", OWNER: 3, [3]: "OWNER", MEMBER: 4, [4]: "MEMBER", USER: 5, [5]: "USER", GUILD: 6, [6]: "GUILD" };
export const AudienceSelectorSections = { ROLES: 0, [0]: "ROLES", MEMBERS: 1, [1]: "MEMBERS", USERS: 2, [2]: "USERS", GUILDS: 3, [3]: "GUILDS" };
export const MEMBER_REQUEST_COUNT = 20;
export const ADVANCED_MODE_ON_KEY = "channelPermissionSettingsAdvancedModeOn";
export const TrackExposureLocations = { SETTINGS_PAGE: "settings-page", MEMBERS_LIST: "members-list", EMPTY_STATE: "empty-state", CREATE_CHANNEL: "create-channel" };
export const SettingMode = { BASIC: "basic", ADVANCED: "advanced" };
export const getChannelPermissionSpecMap = function getChannelPermissionSpecMap(type, arg1, createPostsDisabled) {
  type = type.type;
  let obj = {};
  let str = constants4.VIEW_CHANNEL;
  obj = {};
  str = str.toString();
  if (type === constants.GUILD_CATEGORY) {
    const intl2 = require(dependencyMap[1]).intl;
    let stringResult = intl2.string(require(dependencyMap[1]).t.uV83yi);
  } else {
    const intl = require(dependencyMap[1]).intl;
    stringResult = intl.string(require(dependencyMap[1]).t.W/A4Qp);
  }
  obj.title = stringResult;
  const GUILD_CATEGORY = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY === type) {
      let M2iEy3 = require(dependencyMap[1]).t.o/vBzj;
    } else {
      if (constants.GUILD_VOICE !== type) {
        if (constants.GUILD_STAGE_VOICE !== type) {
          M2iEy3 = require(dependencyMap[1]).t.3jG0Bo;
        }
      }
      M2iEy3 = require(dependencyMap[1]).t.ejL1Wo;
    }
  } else if (type === GUILD_CATEGORY) {
    M2iEy3 = require(dependencyMap[1]).t.SzosGs;
  } else {
    M2iEy3 = require(dependencyMap[1]).t.M2iEy3;
  }
  obj.description = M2iEy3;
  obj.flag = constants4.VIEW_CHANNEL;
  obj[str] = obj;
  let str2 = constants4.MANAGE_CHANNELS;
  obj = {};
  if (type === constants.GUILD_CATEGORY) {
    const intl4 = require(dependencyMap[1]).intl;
    let stringResult1 = intl4.string(require(dependencyMap[1]).t.9qLtWs);
  } else {
    const intl3 = require(dependencyMap[1]).intl;
    stringResult1 = intl3.string(require(dependencyMap[1]).t.nAw15L);
  }
  obj.title = stringResult1;
  if (constants.GUILD_CATEGORY === type) {
    let ydL28i = require(dependencyMap[1]).t.KJ2JnG;
  } else {
    str = constants;
    if (constants.GUILD_VOICE === type) {
      ydL28i = require(dependencyMap[1]).t.+gl2ne;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      ydL28i = require(dependencyMap[1]).t.SDX669;
    } else {
      ydL28i = require(dependencyMap[1]).t.ydL28i;
    }
  }
  obj.description = ydL28i;
  obj.flag = constants4.MANAGE_CHANNELS;
  obj[str2.toString()] = obj;
  let str3 = constants4.MANAGE_ROLES;
  const obj1 = {};
  str2 = str3.toString();
  const intl5 = require(dependencyMap[1]).intl;
  obj1.title = intl5.string(require(dependencyMap[1]).t.ICb6am);
  if (constants.GUILD_CATEGORY === type) {
    let hOMXOv = require(dependencyMap[1]).t.TyyCMD;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    hOMXOv = require(dependencyMap[1]).t.hcw4mx;
  } else {
    hOMXOv = require(dependencyMap[1]).t.hOMXOv;
  }
  obj1.description = hOMXOv;
  obj1.flag = constants4.MANAGE_ROLES;
  obj[str2] = obj1;
  let str4 = tmp34.MANAGE_WEBHOOKS;
  const obj2 = {};
  str3 = str4.toString();
  const intl6 = tmp36(tmp37[1]).intl;
  obj2.title = intl6.string(require(dependencyMap[1]).t./ADKmM);
  if (type === constants.GUILD_CATEGORY) {
    let CYBZry = require(dependencyMap[1]).t.K5+ZZ7;
  } else {
    CYBZry = require(dependencyMap[1]).t.CYBZry;
  }
  obj2.description = CYBZry;
  obj2.flag = constants4.MANAGE_WEBHOOKS;
  obj[str3] = obj2;
  let str5 = constants4.CREATE_INSTANT_INVITE;
  const obj3 = {};
  str4 = str5.toString();
  const intl7 = require(dependencyMap[1]).intl;
  obj3.title = intl7.string(require(dependencyMap[1]).t.zJrgTG);
  if (constants.GUILD_CATEGORY === type) {
    let lUCs1n = require(dependencyMap[1]).t.3YFAAX;
  } else {
    if (constants.GUILD_VOICE !== type) {
      if (constants.GUILD_STAGE_VOICE !== type) {
        lUCs1n = require(dependencyMap[1]).t.q4g2aI;
      }
    }
    lUCs1n = require(dependencyMap[1]).t.lUCs1n;
  }
  obj3.description = lUCs1n;
  obj3.flag = constants4.CREATE_INSTANT_INVITE;
  obj[str4] = obj3;
  let str6 = tmp50.SEND_MESSAGES;
  const obj4 = {};
  const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
  str5 = str6.toString();
  if (GUILD_THREADS_ONLY.has(type)) {
    const intl10 = require(dependencyMap[1]).intl;
    let stringResult2 = intl10.string(require(dependencyMap[1]).t.nJwAHX);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl9 = require(dependencyMap[1]).intl;
    stringResult2 = intl9.string(require(dependencyMap[1]).t.S1VOwd);
  } else {
    const intl8 = require(dependencyMap[1]).intl;
    stringResult2 = intl8.string(require(dependencyMap[1]).t.T32rkC);
  }
  obj4.title = stringResult2;
  if (constants.GUILD_CATEGORY === type) {
    let WQ6zpT = require(dependencyMap[1]).t.IjeLuu;
  } else {
    str = constants;
    if (constants.GUILD_FORUM === type) {
      if (null != createPostsDisabled) {
        if (createPostsDisabled.createPostsDisabled) {
          if (!type.isMediaChannel()) {
            let obj10 = importDefault(dependencyMap[2]);
            let LG9VAi = obj10.getForumChannelPermissionText();
          }
          WQ6zpT = LG9VAi;
        }
      }
      LG9VAi = require(dependencyMap[1]).t.LG9VAi;
    } else {
      str = constants;
      if (constants.GUILD_MEDIA === type) {
        WQ6zpT = require(dependencyMap[1]).t.LG9VAi;
      } else {
        str = constants;
        if (constants.GUILD_ANNOUNCEMENT === type) {
          const intl11 = require(dependencyMap[1]).intl;
          const obj5 = {};
          let obj9 = importDefault(dependencyMap[3]);
          obj5.articleURL = obj9.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
          WQ6zpT = intl11.format(require(dependencyMap[1]).t.WFwfSD, obj5);
        } else if (constants.GUILD_VOICE === type) {
          let obj7 = importDefault(dependencyMap[4]);
          let sendMessagesDisabled;
          if (null != createPostsDisabled) {
            sendMessagesDisabled = createPostsDisabled.sendMessagesDisabled;
          }
          WQ6zpT = obj7.getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled);
        } else {
          WQ6zpT = require(dependencyMap[1]).t.WQ6zpT;
        }
      }
    }
  }
  obj4.description = WQ6zpT;
  obj4.flag = constants4.SEND_MESSAGES;
  obj[str5] = obj4;
  let str7 = constants4.EMBED_LINKS;
  const obj6 = {};
  str6 = str7.toString();
  const intl12 = require(dependencyMap[1]).intl;
  obj6.title = intl12.string(require(dependencyMap[1]).t.969dEL);
  if (type === constants.GUILD_CATEGORY) {
    let XFFhA0 = require(dependencyMap[1]).t.7zlUay;
  } else {
    XFFhA0 = require(dependencyMap[1]).t.XFFhA0;
  }
  obj6.description = XFFhA0;
  obj6.flag = constants4.EMBED_LINKS;
  obj[str6] = obj6;
  obj7 = {};
  str7 = constants4.ATTACH_FILES.toString();
  const intl13 = require(dependencyMap[1]).intl;
  obj7.title = intl13.string(require(dependencyMap[1]).t.3AS4UM);
  if (type === constants.GUILD_CATEGORY) {
    let WK9r7F = require(dependencyMap[1]).t.XREf9l;
  } else {
    WK9r7F = require(dependencyMap[1]).t.WK9r7F;
  }
  obj7.description = WK9r7F;
  obj7.flag = constants4.ATTACH_FILES;
  obj[str7] = obj7;
  const obj8 = {};
  str = require;
  str = dependencyMap;
  str = constants4.ADD_REACTIONS.toString();
  const intl14 = require(dependencyMap[1]).intl;
  obj8.title = intl14.string(require(dependencyMap[1]).t.yEoJAr);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let PVjR1Y = require(dependencyMap[1]).t.pZT2Zh;
  } else {
    str = constants;
    if (constants.GUILD_VOICE === type) {
      str = require;
      str = dependencyMap;
      PVjR1Y = require(dependencyMap[1]).t.xSSbIs;
    } else {
      str = require;
      str = dependencyMap;
      PVjR1Y = require(dependencyMap[1]).t.PVjR1Y;
    }
  }
  obj8.description = PVjR1Y;
  obj8.flag = constants4.ADD_REACTIONS;
  obj[str] = obj8;
  obj9 = {};
  str = constants4.USE_EXTERNAL_EMOJIS.toString();
  const intl15 = str(str[1]).intl;
  obj9.title = intl15.string(str(str[1]).t.+bxf3H);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let Qc5vOr = require(dependencyMap[1]).t.mWAbK4;
  } else {
    str = require;
    str = dependencyMap;
    Qc5vOr = require(dependencyMap[1]).t.Qc5vOr;
  }
  obj9.description = Qc5vOr;
  obj9.flag = constants4.USE_EXTERNAL_EMOJIS;
  obj[str] = obj9;
  obj10 = {};
  str = constants4.USE_EXTERNAL_STICKERS.toString();
  const intl16 = require(dependencyMap[1]).intl;
  obj10.title = intl16.string(require(dependencyMap[1]).t.ERNhYf);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let VF4fZZ = require(dependencyMap[1]).t.39whJ4;
  } else {
    str = require;
    str = dependencyMap;
    VF4fZZ = require(dependencyMap[1]).t.VF4fZZ;
  }
  obj10.description = VF4fZZ;
  obj10.flag = constants4.USE_EXTERNAL_STICKERS;
  obj[str] = obj10;
  const obj11 = {};
  str = constants4.MENTION_EVERYONE.toString();
  if (type === constants.GUILD_STAGE_VOICE) {
    str = require;
    str = dependencyMap;
    const intl18 = require(dependencyMap[1]).intl;
    str = intl18.string(require(dependencyMap[1]).t.VDUAHO);
  } else {
    str = require;
    str = dependencyMap;
    const intl17 = require(dependencyMap[1]).intl;
    str = intl17.string(require(dependencyMap[1]).t.Y78KGC);
  }
  obj11.title = str;
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
  } else {
    str = constants;
    if (type === constants.GUILD_STAGE_VOICE) {
      str = require;
      str = dependencyMap;
    } else {
      str = require;
      str = dependencyMap;
    }
  }
  obj11.description = _6IUSdt;
  str = constants4;
  obj11.flag = constants4.MENTION_EVERYONE;
  obj[str] = obj11;
  const obj12 = {};
  str = require;
  str = dependencyMap;
  str = constants4.MANAGE_MESSAGES.toString();
  const intl19 = require(dependencyMap[1]).intl;
  obj12.title = intl19.string(require(dependencyMap[1]).t.6lU9xM);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    SeA+G9 = require(dependencyMap[1]).t.5R9nYh;
  } else {
    str = constants;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      str = require;
      str = dependencyMap;
      const intl20 = require(dependencyMap[1]).intl;
      const obj13 = {};
      str = importDefault;
      let obj19 = importDefault(dependencyMap[3]);
      str = constants3;
      obj13.articleURL = obj19.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
      SeA+G9 = intl20.format(require(dependencyMap[1]).t.XRxOo0, obj13);
    } else {
      str = require;
      str = dependencyMap;
      SeA+G9 = require(dependencyMap[1]).t.SeA+G9;
    }
  }
  obj12.description = SeA_G9;
  obj12.flag = str.MANAGE_MESSAGES;
  obj[str] = obj12;
  const obj14 = {};
  str = str.PIN_MESSAGES.toString();
  const intl21 = str(str[1]).intl;
  obj14.title = intl21.string(str(str[1]).t.Y5BI39);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
  } else {
    str = require;
    str = dependencyMap;
  }
  obj14.description = _0l2EjL;
  obj14.flag = constants4.PIN_MESSAGES;
  obj[str] = obj14;
  const obj15 = {};
  str = constants4.BYPASS_SLOWMODE.toString();
  const intl22 = require(dependencyMap[1]).intl;
  obj15.title = intl22.string(require(dependencyMap[1]).t.kqcjeV);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let Ha1xbw = require(dependencyMap[1]).t.C4t1Xu;
  } else {
    str = require;
    str = dependencyMap;
    Ha1xbw = require(dependencyMap[1]).t.Ha1xbw;
  }
  obj15.description = Ha1xbw;
  obj15.flag = constants4.BYPASS_SLOWMODE;
  obj[str] = obj15;
  const obj16 = {};
  str = constants4.MANAGE_OFFICIAL_MESSAGES.toString();
  const intl23 = require(dependencyMap[1]).intl;
  obj16.title = intl23.string(require(dependencyMap[1]).t.Aj9ruN);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let qEbw4W = require(dependencyMap[1]).t.Pf0e/Q;
  } else {
    str = require;
    str = dependencyMap;
    qEbw4W = require(dependencyMap[1]).t.qEbw4W;
  }
  obj16.description = qEbw4W;
  obj16.flag = constants4.MANAGE_OFFICIAL_MESSAGES;
  obj[str] = obj16;
  const obj17 = {};
  const GUILD_THREADS_ONLY2 = constants2.GUILD_THREADS_ONLY;
  str = constants4.READ_MESSAGE_HISTORY.toString();
  str = GUILD_THREADS_ONLY2.has(type);
  const intl24 = require(dependencyMap[1]).intl;
  const string = intl24.string;
  const t = require(dependencyMap[1]).t;
  if (str) {
    str = string(t.0RQwtn);
  } else {
    str = string(t.l9ufaR);
  }
  obj17.title = str;
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let RqCc7i = require(dependencyMap[1]).t.cJRv/g;
  } else {
    str = constants;
    if (constants.GUILD_VOICE === type) {
      str = importDefault;
      str = dependencyMap;
      let obj24 = importDefault(dependencyMap[4]);
      str = null;
      str = undefined;
      if (null != createPostsDisabled) {
        str = createPostsDisabled.readMessageHistoryDisabled;
      }
      RqCc7i = obj24.getTextInVoiceReadMessageHistoryChannelPermissionText(str);
    } else {
      str = constants;
      if (constants.GUILD_FORUM !== type) {
        str = constants;
        if (constants.GUILD_MEDIA !== type) {
          str = require;
          str = dependencyMap;
          RqCc7i = require(dependencyMap[1]).t.cuMfH0;
        }
      }
      str = require;
      str = dependencyMap;
      RqCc7i = require(dependencyMap[1]).t.RqCc7i;
    }
  }
  obj17.description = RqCc7i;
  obj17.flag = constants4.READ_MESSAGE_HISTORY;
  obj[str] = obj17;
  const obj18 = {};
  str = constants4.SEND_TTS_MESSAGES.toString();
  const intl25 = require(dependencyMap[1]).intl;
  obj18.title = intl25.string(require(dependencyMap[1]).t.mMbwh7);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let CpakGz = require(dependencyMap[1]).t.b7pc9U;
  } else {
    str = require;
    str = dependencyMap;
    CpakGz = require(dependencyMap[1]).t.CpakGz;
  }
  obj18.description = CpakGz;
  obj18.flag = constants4.SEND_TTS_MESSAGES;
  obj[str] = obj18;
  obj19 = {};
  str = constants4.USE_APPLICATION_COMMANDS.toString();
  const intl26 = require(dependencyMap[1]).intl;
  obj19.title = intl26.string(require(dependencyMap[1]).t.nkoPOt);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let ReG3gG = require(dependencyMap[1]).t.D+qW0J;
  } else {
    str = require;
    str = dependencyMap;
    ReG3gG = require(dependencyMap[1]).t.ReG3gG;
  }
  obj19.description = ReG3gG;
  obj19.flag = constants4.USE_APPLICATION_COMMANDS;
  obj[str] = obj19;
  const obj20 = {};
  str = constants4.SEND_VOICE_MESSAGES.toString();
  const intl27 = require(dependencyMap[1]).intl;
  obj20.title = intl27.string(require(dependencyMap[1]).t.WlWSBT);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let BhEo9V = require(dependencyMap[1]).t.gavGfv;
  } else {
    str = require;
    str = dependencyMap;
    BhEo9V = require(dependencyMap[1]).t.BhEo9V;
  }
  obj20.description = BhEo9V;
  obj20.flag = constants4.SEND_VOICE_MESSAGES;
  obj[str] = obj20;
  const obj21 = {};
  str = constants4.SEND_POLLS.toString();
  const intl28 = require(dependencyMap[1]).intl;
  obj21.title = intl28.string(require(dependencyMap[1]).t.UMQ7Ww);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let ckKKIO = require(dependencyMap[1]).t.18Ya7L;
  } else {
    str = require;
    str = dependencyMap;
    ckKKIO = require(dependencyMap[1]).t.ckKKIO;
  }
  obj21.description = ckKKIO;
  str = constants4;
  obj21.flag = constants4.SEND_POLLS;
  obj[str] = obj21;
  const obj22 = {};
  str = require;
  str = dependencyMap;
  str = constants4.CONNECT.toString();
  const intl29 = require(dependencyMap[1]).intl;
  obj22.title = intl29.string(require(dependencyMap[1]).t.S0W8Z5);
  const GUILD_CATEGORY2 = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY2 === type) {
      str = require;
      str = dependencyMap;
      QU/Rw8 = require(dependencyMap[1]).t.XcrieN;
    } else {
      str = constants;
      if (constants.GUILD_STAGE_VOICE === type) {
        str = require;
        str = dependencyMap;
        QU/Rw8 = require(dependencyMap[1]).t.SOFNhP;
      } else {
        str = constants;
        if (constants.GUILD_TEXT !== type) {
          str = constants;
          if (constants.GUILD_FORUM !== type) {
            str = constants;
            if (constants.GUILD_MEDIA !== type) {
              str = require;
              str = dependencyMap;
              QU/Rw8 = require(dependencyMap[1]).t.j4AyO8;
            }
          }
        }
        str = require;
        str = dependencyMap;
        QU/Rw8 = require(dependencyMap[1]).t.LsS8xT;
      }
    }
  } else if (GUILD_CATEGORY2 === type) {
    str = require;
    str = dependencyMap;
    QU/Rw8 = require(dependencyMap[1]).t.stA0Hl;
  } else {
    str = constants;
    if (constants.GUILD_STAGE_VOICE === type) {
      str = require;
      str = dependencyMap;
      QU/Rw8 = require(dependencyMap[1]).t.G9+Qie;
    } else {
      str = constants;
      if (constants.GUILD_TEXT !== type) {
        str = constants;
        if (constants.GUILD_FORUM !== type) {
          str = constants;
          if (constants.GUILD_MEDIA !== type) {
            str = require;
            str = dependencyMap;
            QU/Rw8 = require(dependencyMap[1]).t.HvG8uR;
          }
        }
      }
      str = require;
      str = dependencyMap;
      QU/Rw8 = require(dependencyMap[1]).t.QU/Rw8;
    }
  }
  obj22.description = QU_Rw8;
  obj22.flag = str.CONNECT;
  obj[str] = obj22;
  const obj23 = {};
  str = str.SPEAK.toString();
  const intl30 = str(str[1]).intl;
  obj23.title = intl30.string(str(str[1]).t.8w1tIR);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    +VXsJI = require(dependencyMap[1]).t.iXhS6R;
  } else {
    str = constants;
    if (constants.GUILD_STAGE_VOICE === type) {
      str = require;
      str = dependencyMap;
      +VXsJI = require(dependencyMap[1]).t.a8n741;
    } else {
      str = constants;
      if (constants.GUILD_TEXT !== type) {
        str = constants;
        if (constants.GUILD_FORUM !== type) {
          str = constants;
          if (constants.GUILD_MEDIA !== type) {
            str = require;
            str = dependencyMap;
            +VXsJI = require(dependencyMap[1]).t.568E6d;
          }
        }
      }
      str = require;
      str = dependencyMap;
      +VXsJI = require(dependencyMap[1]).t.+VXsJI;
    }
  }
  obj23.description = _VXsJI;
  obj23.flag = str.SPEAK;
  obj[str] = obj23;
  obj24 = {};
  str = str.STREAM.toString();
  const intl31 = str(str[1]).intl;
  obj24.title = intl31.string(str(str[1]).t.FlNoSV);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let AuEQEC = require(dependencyMap[1]).t.ryG0/J;
  } else {
    str = constants;
    if (constants.GUILD_TEXT !== type) {
      str = constants;
      if (constants.GUILD_FORUM !== type) {
        str = constants;
        if (constants.GUILD_MEDIA !== type) {
          str = constants;
          if (constants.GUILD_STAGE_VOICE === type) {
            str = require;
            str = dependencyMap;
            AuEQEC = require(dependencyMap[1]).t.swJcN6;
          } else {
            str = require;
            str = dependencyMap;
            AuEQEC = require(dependencyMap[1]).t.RY8rIc;
          }
        }
      }
    }
    str = require;
    str = dependencyMap;
    AuEQEC = require(dependencyMap[1]).t.AuEQEC;
  }
  obj24.description = AuEQEC;
  obj24.flag = str.STREAM;
  obj[str] = obj24;
  const obj25 = {};
  str = str.USE_EMBEDDED_ACTIVITIES.toString();
  const intl32 = str(str[1]).intl;
  obj25.title = intl32.string(str(str[1]).t.rLSGeh);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let RyEwla = require(dependencyMap[1]).t.maNzCO;
  } else {
    str = constants;
    if (constants.GUILD_FORUM !== type) {
      str = constants;
      if (constants.GUILD_MEDIA !== type) {
        str = require;
        str = dependencyMap;
        RyEwla = require(dependencyMap[1]).t.qinvMU;
      }
    }
    str = require;
    str = dependencyMap;
    RyEwla = require(dependencyMap[1]).t.RyEwla;
  }
  obj25.description = RyEwla;
  obj25.flag = str.USE_EMBEDDED_ACTIVITIES;
  obj[str] = obj25;
  const obj26 = {};
  str = str.USE_EXTERNAL_APPS.toString();
  const intl33 = str(str[1]).intl;
  obj26.title = intl33.string(str(str[1]).t.3TzAk0);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let qPUPip = require(dependencyMap[1]).t.bgIY3H;
  } else {
    str = constants;
    if (constants.GUILD_FORUM !== type) {
      str = constants;
      if (constants.GUILD_MEDIA !== type) {
        str = require;
        str = dependencyMap;
        qPUPip = require(dependencyMap[1]).t.czqMLp;
      }
    }
    str = require;
    str = dependencyMap;
    qPUPip = require(dependencyMap[1]).t.qPUPip;
  }
  obj26.description = qPUPip;
  obj26.flag = str.USE_EXTERNAL_APPS;
  obj[str] = obj26;
  const obj27 = {};
  str = str.USE_SOUNDBOARD.toString();
  const intl34 = str(str[1]).intl;
  obj27.title = intl34.string(str(str[1]).t.Bco7NG);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    const intl37 = require(dependencyMap[1]).intl;
    const obj28 = {};
    str = importDefault;
    let obj40 = importDefault(dependencyMap[3]);
    str = constants3;
    obj28.helpCenterArticle = obj40.getArticleURL(constants3.SOUNDBOARD);
    str = intl37.format(require(dependencyMap[1]).t.0kBp/0, obj28);
  } else {
    str = constants;
    if (constants.GUILD_TEXT !== type) {
      str = constants;
      if (constants.GUILD_FORUM !== type) {
        str = constants;
        if (constants.GUILD_MEDIA !== type) {
          str = require;
          str = dependencyMap;
          const intl35 = require(dependencyMap[1]).intl;
          const obj29 = {};
          str = importDefault;
          let obj36 = importDefault(dependencyMap[3]);
          str = constants3;
          obj29.helpCenterArticle = obj36.getArticleURL(constants3.SOUNDBOARD);
          str = intl35.format(require(dependencyMap[1]).t.GEi6Ym, obj29);
        }
      }
    }
    str = require;
    str = dependencyMap;
    const intl36 = require(dependencyMap[1]).intl;
    const obj30 = {};
    str = importDefault;
    let obj38 = importDefault(dependencyMap[3]);
    str = constants3;
    obj30.helpCenterArticle = obj38.getArticleURL(constants3.SOUNDBOARD);
    str = intl36.format(require(dependencyMap[1]).t.6eYqU1, obj30);
  }
  obj27.description = str;
  obj27.flag = str.USE_SOUNDBOARD;
  obj[str] = obj27;
  const obj31 = {};
  str = str.USE_EXTERNAL_SOUNDS.toString();
  const intl38 = str(str[1]).intl;
  obj31.title = intl38.string(str(str[1]).t.pwaVJ6);
  obj31.description = str(str[1]).t.qDpPtX;
  obj31.flag = str.USE_EXTERNAL_SOUNDS;
  obj[str] = obj31;
  const obj32 = {};
  str = str.USE_VAD.toString();
  const intl39 = str(str[1]).intl;
  obj32.title = intl39.string(str(str[1]).t.08zAV7);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
  } else {
    str = constants;
    if (constants.GUILD_STAGE_VOICE === type) {
      str = require;
      str = dependencyMap;
    } else {
      str = constants;
      if (constants.GUILD_TEXT !== type) {
        str = constants;
        if (constants.GUILD_FORUM !== type) {
          str = constants;
          if (constants.GUILD_MEDIA !== type) {
            str = require;
            str = dependencyMap;
          }
        }
      }
      str = require;
      str = dependencyMap;
    }
  }
  obj32.description = _3GJwsc;
  obj32.flag = str.USE_VAD;
  obj[str] = obj32;
  const obj33 = {};
  str = str.PRIORITY_SPEAKER.toString();
  const intl40 = str(str[1]).intl;
  obj33.title = intl40.string(str(str[1]).t.BVK71i);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    const intl45 = require(dependencyMap[1]).intl;
    const obj34 = {};
    const intl46 = require(dependencyMap[1]).intl;
    obj34.keybind = intl46.string(require(dependencyMap[1]).t.DkSwJ2);
    str = intl45.format(require(dependencyMap[1]).t.g5MzON, obj34);
  } else {
    str = constants;
    if (constants.GUILD_TEXT !== type) {
      str = constants;
      if (constants.GUILD_FORUM !== type) {
        str = constants;
        if (constants.GUILD_MEDIA !== type) {
          str = require;
          str = dependencyMap;
          const intl41 = require(dependencyMap[1]).intl;
          const obj35 = {};
          const intl42 = require(dependencyMap[1]).intl;
          obj35.keybind = intl42.string(require(dependencyMap[1]).t.DkSwJ2);
          str = intl41.format(require(dependencyMap[1]).t.Ij0yKX, obj35);
        }
      }
    }
    str = require;
    str = dependencyMap;
    const intl43 = require(dependencyMap[1]).intl;
    obj36 = {};
    const intl44 = require(dependencyMap[1]).intl;
    obj36.keybind = intl44.string(require(dependencyMap[1]).t.DkSwJ2);
    str = intl43.format(require(dependencyMap[1]).t.4nbjL0, obj36);
  }
  obj33.description = str;
  obj33.flag = str.PRIORITY_SPEAKER;
  obj[str] = obj33;
  const obj37 = {};
  str = str.MUTE_MEMBERS.toString();
  const intl47 = str(str[1]).intl;
  obj37.title = intl47.string(str(str[1]).t.8EI30/);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let KYDG2K = require(dependencyMap[1]).t.bcuobK;
  } else {
    str = constants;
    if (constants.GUILD_STAGE_VOICE === type) {
      str = require;
      str = dependencyMap;
      KYDG2K = require(dependencyMap[1]).t.EbvdH9;
    } else {
      str = constants;
      if (constants.GUILD_TEXT !== type) {
        str = constants;
        if (constants.GUILD_FORUM !== type) {
          str = constants;
          if (constants.GUILD_MEDIA !== type) {
            str = require;
            str = dependencyMap;
            KYDG2K = require(dependencyMap[1]).t.LW5C9P;
          }
        }
      }
      str = require;
      str = dependencyMap;
      KYDG2K = require(dependencyMap[1]).t.KYDG2K;
    }
  }
  obj37.description = KYDG2K;
  obj37.flag = str.MUTE_MEMBERS;
  obj[str] = obj37;
  obj38 = {};
  str = str.DEAFEN_MEMBERS.toString();
  const intl48 = str(str[1]).intl;
  obj38.title = intl48.string(str(str[1]).t.9L47Fr);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    d+i1nX = require(dependencyMap[1]).t.amZ5vn;
  } else {
    str = constants;
    if (constants.GUILD_TEXT !== type) {
      str = constants;
      if (constants.GUILD_FORUM !== type) {
        str = constants;
        if (constants.GUILD_MEDIA !== type) {
          str = require;
          str = dependencyMap;
          d+i1nX = require(dependencyMap[1]).t.UAdIxo;
        }
      }
    }
    str = require;
    str = dependencyMap;
    d+i1nX = require(dependencyMap[1]).t.d+i1nX;
  }
  obj38.description = d_i1nX;
  obj38.flag = str.DEAFEN_MEMBERS;
  obj[str] = obj38;
  const obj39 = {};
  str = str.MOVE_MEMBERS.toString();
  const intl49 = str(str[1]).intl;
  obj39.title = intl49.string(str(str[1]).t.YtjJPQ);
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let cbdQy2 = require(dependencyMap[1]).t.XmoyRD;
  } else {
    str = constants;
    if (constants.GUILD_STAGE_VOICE === type) {
      str = require;
      str = dependencyMap;
      cbdQy2 = require(dependencyMap[1]).t.bizKz6;
    } else {
      str = constants;
      if (constants.GUILD_TEXT !== type) {
        str = constants;
        if (constants.GUILD_FORUM !== type) {
          str = constants;
          if (constants.GUILD_MEDIA !== type) {
            str = require;
            str = dependencyMap;
            cbdQy2 = require(dependencyMap[1]).t.nSD1ah;
          }
        }
      }
      str = require;
      str = dependencyMap;
      cbdQy2 = require(dependencyMap[1]).t.cbdQy2;
    }
  }
  obj39.description = cbdQy2;
  obj39.flag = str.MOVE_MEMBERS;
  obj[str] = obj39;
  obj40 = {};
  str = str.REQUEST_TO_SPEAK.toString();
  const intl50 = str(str[1]).intl;
  obj40.title = intl50.string(str(str[1]).t.5kicT2);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let uzlYFE = require(dependencyMap[1]).t.T1lMSl;
  } else {
    str = require;
    str = dependencyMap;
    uzlYFE = require(dependencyMap[1]).t.uzlYFE;
  }
  obj40.description = uzlYFE;
  obj40.flag = constants4.REQUEST_TO_SPEAK;
  obj[str] = obj40;
  const obj41 = {};
  const GUILD_THREADS_ONLY3 = constants2.GUILD_THREADS_ONLY;
  str = constants4.MANAGE_THREADS.toString();
  if (GUILD_THREADS_ONLY3.has(type)) {
    str = require;
    str = dependencyMap;
    const intl53 = require(dependencyMap[1]).intl;
    str = intl53.string(require(dependencyMap[1]).t.ossiZD);
  } else {
    str = constants;
    if (type === constants.GUILD_CATEGORY) {
      str = require;
      str = dependencyMap;
      const intl52 = require(dependencyMap[1]).intl;
      str = intl52.string(require(dependencyMap[1]).t.QKe7Q3);
    } else {
      str = require;
      str = dependencyMap;
      const intl51 = require(dependencyMap[1]).intl;
      str = intl51.string(require(dependencyMap[1]).t.kEqgr7);
    }
  }
  obj41.title = str;
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    XLi/jG = require(dependencyMap[1]).t.S31soU;
  } else {
    str = constants;
    if (constants.GUILD_FORUM !== type) {
      str = constants;
      if (constants.GUILD_MEDIA !== type) {
        str = require;
        str = dependencyMap;
        XLi/jG = require(dependencyMap[1]).t.yvan0j;
      }
    }
    str = require;
    str = dependencyMap;
    XLi/jG = require(dependencyMap[1]).t.XLi/jG;
  }
  obj41.description = XLi_jG;
  obj41.flag = constants4.MANAGE_THREADS;
  obj[str] = obj41;
  const obj42 = {};
  str = constants4.CREATE_PUBLIC_THREADS.toString();
  const intl54 = require(dependencyMap[1]).intl;
  obj42.title = intl54.string(require(dependencyMap[1]).t.25rKnX);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
  } else {
    str = require;
    str = dependencyMap;
  }
  obj42.description = _5SDtGB;
  obj42.flag = constants4.CREATE_PUBLIC_THREADS;
  obj[str] = obj42;
  const obj43 = {};
  str = constants4.CREATE_PRIVATE_THREADS.toString();
  const intl55 = require(dependencyMap[1]).intl;
  obj43.title = intl55.string(require(dependencyMap[1]).t.QwbTSa);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let Chg2zd = require(dependencyMap[1]).t.hBS/zn;
  } else {
    str = require;
    str = dependencyMap;
    Chg2zd = require(dependencyMap[1]).t.Chg2zd;
  }
  obj43.description = Chg2zd;
  obj43.flag = constants4.CREATE_PRIVATE_THREADS;
  obj[str] = obj43;
  const obj44 = {};
  const GUILD_THREADS_ONLY4 = constants2.GUILD_THREADS_ONLY;
  str = constants4.SEND_MESSAGES_IN_THREADS.toString();
  if (GUILD_THREADS_ONLY4.has(type)) {
    str = require;
    str = dependencyMap;
    const intl58 = require(dependencyMap[1]).intl;
    str = intl58.string(require(dependencyMap[1]).t.fqhqWm);
  } else {
    str = constants;
    if (type === constants.GUILD_CATEGORY) {
      str = require;
      str = dependencyMap;
      const intl57 = require(dependencyMap[1]).intl;
      str = intl57.string(require(dependencyMap[1]).t.5QlVGy);
    } else {
      str = require;
      str = dependencyMap;
      const intl56 = require(dependencyMap[1]).intl;
      str = intl56.string(require(dependencyMap[1]).t.fTE74g);
    }
  }
  obj44.title = str;
  if (constants.GUILD_CATEGORY === type) {
    str = require;
    str = dependencyMap;
    let XTnrPH = require(dependencyMap[1]).t.DlIVcN;
  } else {
    str = constants;
    if (constants.GUILD_FORUM !== type) {
      str = constants;
      if (constants.GUILD_MEDIA !== type) {
        str = require;
        str = dependencyMap;
        XTnrPH = require(dependencyMap[1]).t.xHO6Me;
      }
    }
    str = require;
    str = dependencyMap;
    XTnrPH = require(dependencyMap[1]).t.XTnrPH;
  }
  obj44.description = XTnrPH;
  obj44.flag = constants4.SEND_MESSAGES_IN_THREADS;
  obj[str] = obj44;
  const obj45 = {};
  str = constants4.MANAGE_EVENTS.toString();
  const intl59 = require(dependencyMap[1]).intl;
  obj45.title = intl59.string(require(dependencyMap[1]).t.HIgA5a);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
  } else {
    str = require;
    str = dependencyMap;
  }
  obj45.description = _4pO_TY;
  obj45.flag = constants4.MANAGE_EVENTS;
  obj[str] = obj45;
  const obj46 = {};
  str = constants4.CREATE_EVENTS.toString();
  const intl60 = require(dependencyMap[1]).intl;
  obj46.title = intl60.string(require(dependencyMap[1]).t.qyjZua);
  if (type === constants.GUILD_CATEGORY) {
    str = require;
    str = dependencyMap;
    let sPoBLa = require(dependencyMap[1]).t.XpibmC;
  } else {
    str = require;
    str = dependencyMap;
    sPoBLa = require(dependencyMap[1]).t.sPoBLa;
  }
  obj46.description = sPoBLa;
  obj46.flag = constants4.CREATE_EVENTS;
  obj[str] = obj46;
  const obj47 = {};
  str = constants4.SET_VOICE_CHANNEL_STATUS.toString();
  const intl61 = require(dependencyMap[1]).intl;
  obj47.title = intl61.string(require(dependencyMap[1]).t.VBwkUf);
  if (null != createPostsDisabled) {
    if (createPostsDisabled.enableHangoutWindow) {
      str = require;
      str = dependencyMap;
      let C6BzXx = require(dependencyMap[1]).t.CYcJ6H;
    }
    obj47.description = C6BzXx;
    str = constants4;
    obj47.flag = constants4.SET_VOICE_CHANNEL_STATUS;
    obj[str] = obj47;
    return obj;
  }
  C6BzXx = require(dependencyMap[1]).t.C6BzXx;
};
