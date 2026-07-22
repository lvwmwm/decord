// Module ID: 15401
// Function ID: 117481
// Name: filterExperimental
// Dependencies: [0, 0, 0, 0]
// Exports: generateChannelAppsSection, generateChannelEventsSection, generateChannelGeneralSection, generateChannelMembershipSection, generateChannelStageSection, generateChannelStageVoiceSection, generateChannelTextSection, generateChannelVoiceChatSection, generateChannelVoiceSection, generateGuildPermissionSpec, renderDescription

// Module 15401 (filterExperimental)
import { Permissions } from "__exportStarResult1";

function filterExperimental(permissions, showExperimental) {
  let flag = showExperimental;
  if (showExperimental === undefined) {
    flag = false;
  }
  if (!flag) {
    permissions = permissions.permissions;
    permissions.permissions = permissions.filter((isExperimental) => !isExperimental.isExperimental);
  }
  return permissions;
}
function getPermissionsSpecList(items, arg1) {
  const require = arg1;
  return items.map((arg0) => arg1[arg0.toString(arg0)]);
}
function getGuildPermissionSpec(permissionOptions) {
  let obj = {};
  let str = Permissions.VIEW_CHANNEL;
  obj = {};
  str = str.toString();
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.uV83yi);
  obj.description = require(dependencyMap[1]).t.ybTHLk;
  obj.flag = Permissions.VIEW_CHANNEL;
  obj[str] = obj;
  let str2 = Permissions.MANAGE_CHANNELS;
  obj = {};
  const intl2 = require(dependencyMap[1]).intl;
  obj.title = intl2.string(require(dependencyMap[1]).t.9qLtWs);
  obj.description = require(dependencyMap[1]).t.qfJnug;
  obj.flag = Permissions.MANAGE_CHANNELS;
  obj[str2.toString()] = obj;
  let str3 = Permissions.MANAGE_ROLES;
  const obj1 = {};
  str2 = str3.toString();
  const intl3 = require(dependencyMap[1]).intl;
  obj1.title = intl3.string(require(dependencyMap[1]).t.C8d+oG);
  obj1.description = require(dependencyMap[1]).t.buo9uw;
  obj1.flag = Permissions.MANAGE_ROLES;
  obj[str2] = obj1;
  let str4 = Permissions.MANAGE_GUILD_EXPRESSIONS;
  const obj2 = {};
  str3 = str4.toString();
  const intl4 = require(dependencyMap[1]).intl;
  obj2.title = intl4.string(require(dependencyMap[1]).t.bbuXIn);
  obj2.description = require(dependencyMap[1]).t.4vb3/6;
  obj2.flag = Permissions.MANAGE_GUILD_EXPRESSIONS;
  obj[str3] = obj2;
  let str5 = Permissions.CREATE_GUILD_EXPRESSIONS;
  const obj3 = {};
  str4 = str5.toString();
  const intl5 = require(dependencyMap[1]).intl;
  obj3.title = intl5.string(require(dependencyMap[1]).t.HarVuP);
  obj3.description = require(dependencyMap[1]).t.gkdHvH;
  obj3.flag = Permissions.CREATE_GUILD_EXPRESSIONS;
  obj[str4] = obj3;
  let str6 = Permissions.VIEW_AUDIT_LOG;
  const obj4 = {};
  str5 = str6.toString();
  const intl6 = require(dependencyMap[1]).intl;
  obj4.title = intl6.string(require(dependencyMap[1]).t.fZgLpA);
  obj4.description = require(dependencyMap[1]).t.0hx75i;
  obj4.flag = Permissions.VIEW_AUDIT_LOG;
  obj[str5] = obj4;
  let str7 = Permissions.VIEW_GUILD_ANALYTICS;
  const obj5 = {};
  str6 = str7.toString();
  const intl7 = require(dependencyMap[1]).intl;
  obj5.title = intl7.string(require(dependencyMap[1]).t.rQJBE/);
  obj5.description = require(dependencyMap[1]).t.whVKhX;
  obj5.flag = Permissions.VIEW_GUILD_ANALYTICS;
  obj[str6] = obj5;
  let str8 = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  const obj6 = {};
  str7 = str8.toString();
  const intl8 = require(dependencyMap[1]).intl;
  obj6.title = intl8.string(require(dependencyMap[1]).t.0lTLTv);
  obj6.description = require(dependencyMap[1]).t.mut6NV;
  obj6.flag = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  obj[str7] = obj6;
  let str9 = Permissions.MANAGE_WEBHOOKS;
  const obj7 = {};
  str8 = str9.toString();
  const intl9 = require(dependencyMap[1]).intl;
  obj7.title = intl9.string(require(dependencyMap[1]).t./ADKmM);
  obj7.description = require(dependencyMap[1]).t.LczYqC;
  obj7.flag = Permissions.MANAGE_WEBHOOKS;
  obj[str8] = obj7;
  let str10 = Permissions.MANAGE_GUILD;
  const obj8 = {};
  str9 = str10.toString();
  const intl10 = require(dependencyMap[1]).intl;
  obj8.title = intl10.string(require(dependencyMap[1]).t.QZRcfO);
  obj8.description = require(dependencyMap[1]).t.KoQe/G;
  obj8.flag = Permissions.MANAGE_GUILD;
  obj[str9] = obj8;
  let str11 = Permissions.CREATE_INSTANT_INVITE;
  const obj9 = {};
  str10 = str11.toString();
  const intl11 = require(dependencyMap[1]).intl;
  obj9.title = intl11.string(require(dependencyMap[1]).t.zJrgTG);
  obj9.description = require(dependencyMap[1]).t.PCFOZa;
  obj9.flag = Permissions.CREATE_INSTANT_INVITE;
  obj[str10] = obj9;
  let str12 = Permissions.CHANGE_NICKNAME;
  const obj10 = {};
  str11 = str12.toString();
  const intl12 = require(dependencyMap[1]).intl;
  obj10.title = intl12.string(require(dependencyMap[1]).t.dilOF6);
  obj10.description = require(dependencyMap[1]).t.b8B++j;
  obj10.flag = Permissions.CHANGE_NICKNAME;
  obj[str11] = obj10;
  let str13 = Permissions.MANAGE_NICKNAMES;
  const obj11 = {};
  str12 = str13.toString();
  const intl13 = require(dependencyMap[1]).intl;
  obj11.title = intl13.string(require(dependencyMap[1]).t.t+Ct5x);
  obj11.description = require(dependencyMap[1]).t.hTnlMb;
  obj11.flag = Permissions.MANAGE_NICKNAMES;
  obj[str12] = obj11;
  let str14 = Permissions.KICK_MEMBERS;
  const obj12 = {};
  str13 = str14.toString();
  const intl14 = require(dependencyMap[1]).intl;
  const string = intl14.string;
  const t = require(dependencyMap[1]).t;
  if (permissionOptions.showMembershipManualApprovalPermissions) {
    let stringResult = string(t.9TxXwb);
  } else {
    stringResult = string(t.pBNv6i);
  }
  obj12.title = stringResult;
  const t2 = require(dependencyMap[1]).t;
  obj12.description = permissionOptions.showMembershipManualApprovalPermissions ? t2.hGBAnw : t2.rwdPaE;
  obj12.flag = Permissions.KICK_MEMBERS;
  obj[str13] = obj12;
  let str15 = Permissions.BAN_MEMBERS;
  const obj13 = {};
  str14 = str15.toString();
  const intl15 = require(dependencyMap[1]).intl;
  obj13.title = intl15.string(require(dependencyMap[1]).t.oTBA7N);
  obj13.description = require(dependencyMap[1]).t.OqNY0/;
  obj13.flag = Permissions.BAN_MEMBERS;
  obj[str14] = obj13;
  let str16 = Permissions.MODERATE_MEMBERS;
  const obj14 = {};
  str15 = str16.toString();
  const intl16 = require(dependencyMap[1]).intl;
  obj14.title = intl16.string(require(dependencyMap[1]).t.+RL6pz);
  obj14.description = require(dependencyMap[1]).t.T6bZsX;
  obj14.flag = Permissions.MODERATE_MEMBERS;
  obj[str15] = obj14;
  let str17 = Permissions.SEND_MESSAGES;
  const obj15 = {};
  str16 = str17.toString();
  const intl17 = require(dependencyMap[1]).intl;
  obj15.title = intl17.string(require(dependencyMap[1]).t.S1VOwd);
  obj15.description = require(dependencyMap[1]).t.prvWKm;
  obj15.flag = Permissions.SEND_MESSAGES;
  obj[str16] = obj15;
  let str18 = Permissions.EMBED_LINKS;
  const obj16 = {};
  str17 = str18.toString();
  const intl18 = require(dependencyMap[1]).intl;
  obj16.title = intl18.string(require(dependencyMap[1]).t.969dEL);
  obj16.description = require(dependencyMap[1]).t.ChoIiy;
  obj16.flag = Permissions.EMBED_LINKS;
  obj[str17] = obj16;
  let str19 = Permissions.ATTACH_FILES;
  const obj17 = {};
  str18 = str19.toString();
  const intl19 = require(dependencyMap[1]).intl;
  obj17.title = intl19.string(require(dependencyMap[1]).t.3AS4UM);
  obj17.description = require(dependencyMap[1]).t./87mYH;
  obj17.flag = Permissions.ATTACH_FILES;
  obj[str18] = obj17;
  let str20 = Permissions.ADD_REACTIONS;
  const obj18 = {};
  str19 = str20.toString();
  const intl20 = require(dependencyMap[1]).intl;
  obj18.title = intl20.string(require(dependencyMap[1]).t.yEoJAr);
  obj18.description = require(dependencyMap[1]).t.FEYwX7;
  obj18.flag = Permissions.ADD_REACTIONS;
  obj[str19] = obj18;
  let str21 = Permissions.USE_EXTERNAL_EMOJIS;
  const obj19 = {};
  str20 = str21.toString();
  const intl21 = require(dependencyMap[1]).intl;
  obj19.title = intl21.string(require(dependencyMap[1]).t.+bxf3H);
  obj19.description = require(dependencyMap[1]).t.POeVIu;
  obj19.flag = Permissions.USE_EXTERNAL_EMOJIS;
  obj[str20] = obj19;
  let str22 = Permissions.USE_EXTERNAL_STICKERS;
  const obj20 = {};
  str21 = str22.toString();
  const intl22 = require(dependencyMap[1]).intl;
  obj20.title = intl22.string(require(dependencyMap[1]).t.ERNhYf);
  obj20.description = require(dependencyMap[1]).t.AdXVhI;
  obj20.flag = Permissions.USE_EXTERNAL_STICKERS;
  obj[str21] = obj20;
  let str23 = Permissions.MENTION_EVERYONE;
  const obj21 = {};
  str22 = str23.toString();
  const intl23 = require(dependencyMap[1]).intl;
  obj21.title = intl23.string(require(dependencyMap[1]).t.Y78KGC);
  const intl24 = require(dependencyMap[1]).intl;
  obj21.description = intl24.string(require(dependencyMap[1]).t.ryj6N5);
  obj21.flag = Permissions.MENTION_EVERYONE;
  obj[str22] = obj21;
  let str24 = Permissions.MANAGE_MESSAGES;
  const obj22 = {};
  str23 = str24.toString();
  const intl25 = require(dependencyMap[1]).intl;
  obj22.title = intl25.string(require(dependencyMap[1]).t.6lU9xM);
  obj22.description = require(dependencyMap[1]).t.RXMG/+;
  obj22.flag = Permissions.MANAGE_MESSAGES;
  obj[str23] = obj22;
  let str25 = Permissions.PIN_MESSAGES;
  const obj23 = {};
  str24 = str25.toString();
  const intl26 = require(dependencyMap[1]).intl;
  obj23.title = intl26.string(require(dependencyMap[1]).t.Y5BI39);
  obj23.description = require(dependencyMap[1]).t.LN/K3x;
  obj23.flag = Permissions.PIN_MESSAGES;
  obj[str24] = obj23;
  let str26 = Permissions.BYPASS_SLOWMODE;
  const obj24 = {};
  str25 = str26.toString();
  const intl27 = require(dependencyMap[1]).intl;
  obj24.title = intl27.string(require(dependencyMap[1]).t.kqcjeV);
  obj24.description = require(dependencyMap[1]).t.S2ZE5c;
  obj24.flag = Permissions.BYPASS_SLOWMODE;
  obj[str25] = obj24;
  let str27 = Permissions.MANAGE_OFFICIAL_MESSAGES;
  const obj25 = {};
  str26 = str27.toString();
  const intl28 = require(dependencyMap[1]).intl;
  obj25.title = intl28.string(require(dependencyMap[1]).t.Aj9ruN);
  obj25.description = require(dependencyMap[1]).t.pfEgBm;
  obj25.flag = Permissions.MANAGE_OFFICIAL_MESSAGES;
  obj[str26] = obj25;
  let str28 = Permissions.READ_MESSAGE_HISTORY;
  const obj26 = {};
  str27 = str28.toString();
  const intl29 = require(dependencyMap[1]).intl;
  obj26.title = intl29.string(require(dependencyMap[1]).t.l9ufaR);
  obj26.description = require(dependencyMap[1]).t.rmHPFR;
  obj26.flag = Permissions.READ_MESSAGE_HISTORY;
  obj[str27] = obj26;
  let str29 = Permissions.SEND_TTS_MESSAGES;
  const obj27 = {};
  str28 = str29.toString();
  const intl30 = require(dependencyMap[1]).intl;
  obj27.title = intl30.string(require(dependencyMap[1]).t.mMbwh7);
  obj27.description = require(dependencyMap[1]).t.D6x8Nr;
  obj27.flag = Permissions.SEND_TTS_MESSAGES;
  obj[str28] = obj27;
  let str30 = Permissions.USE_APPLICATION_COMMANDS;
  const obj28 = {};
  str29 = str30.toString();
  const intl31 = require(dependencyMap[1]).intl;
  obj28.title = intl31.string(require(dependencyMap[1]).t.nkoPOt);
  obj28.description = require(dependencyMap[1]).t.pJrJ35;
  obj28.flag = Permissions.USE_APPLICATION_COMMANDS;
  obj[str29] = obj28;
  let str31 = Permissions.USE_EXTERNAL_APPS;
  const obj29 = {};
  str30 = str31.toString();
  const intl32 = require(dependencyMap[1]).intl;
  obj29.title = intl32.string(require(dependencyMap[1]).t.TtA5rK);
  obj29.description = require(dependencyMap[1]).t.mzLoDY;
  obj29.flag = Permissions.USE_EXTERNAL_APPS;
  obj[str30] = obj29;
  let str32 = Permissions.SEND_VOICE_MESSAGES;
  const obj30 = {};
  str31 = str32.toString();
  const intl33 = require(dependencyMap[1]).intl;
  obj30.title = intl33.string(require(dependencyMap[1]).t.WlWSBT);
  obj30.description = require(dependencyMap[1]).t.pDuyi0;
  obj30.flag = Permissions.SEND_VOICE_MESSAGES;
  obj[str31] = obj30;
  let str33 = Permissions.SEND_POLLS;
  const obj31 = {};
  str32 = str33.toString();
  const intl34 = require(dependencyMap[1]).intl;
  obj31.title = intl34.string(require(dependencyMap[1]).t.UMQ7Ww);
  obj31.description = require(dependencyMap[1]).t.Xl6W+F;
  obj31.flag = Permissions.SEND_POLLS;
  obj[str32] = obj31;
  let str34 = Permissions.CONNECT;
  const obj32 = {};
  str33 = str34.toString();
  const intl35 = require(dependencyMap[1]).intl;
  obj32.title = intl35.string(require(dependencyMap[1]).t.S0W8Z5);
  obj32.description = require(dependencyMap[1]).t.3GCm/f;
  obj32.flag = Permissions.CONNECT;
  obj[str33] = obj32;
  let str35 = Permissions.SPEAK;
  const obj33 = {};
  str34 = str35.toString();
  const intl36 = require(dependencyMap[1]).intl;
  obj33.title = intl36.string(require(dependencyMap[1]).t.8w1tIR);
  obj33.description = require(dependencyMap[1]).t.y4MncF;
  obj33.flag = Permissions.SPEAK;
  obj[str34] = obj33;
  let str36 = Permissions.STREAM;
  const obj34 = {};
  str35 = str36.toString();
  const intl37 = require(dependencyMap[1]).intl;
  obj34.title = intl37.string(require(dependencyMap[1]).t.FlNoSV);
  obj34.description = require(dependencyMap[1]).t.6Z0j9v;
  obj34.flag = Permissions.STREAM;
  obj[str35] = obj34;
  let str37 = Permissions.USE_EMBEDDED_ACTIVITIES;
  const obj35 = {};
  str36 = str37.toString();
  const intl38 = require(dependencyMap[1]).intl;
  obj35.title = intl38.string(require(dependencyMap[1]).t.rLSGeh);
  obj35.description = require(dependencyMap[1]).t.BEqU5H;
  obj35.flag = Permissions.USE_EMBEDDED_ACTIVITIES;
  obj[str36] = obj35;
  let str38 = Permissions.USE_SOUNDBOARD;
  const obj36 = {};
  str37 = str38.toString();
  const intl39 = require(dependencyMap[1]).intl;
  obj36.title = intl39.string(require(dependencyMap[1]).t.Bco7NG);
  let prop;
  if (null != permissionOptions) {
    prop = permissionOptions.SOUNDBOARD_DESCRIPTION;
  }
  if (null == prop) {
    prop = require(dependencyMap[1]).t.+8p+fc;
  }
  obj36.description = prop;
  obj36.flag = Permissions.USE_SOUNDBOARD;
  obj[str37] = obj36;
  let str39 = Permissions.USE_EXTERNAL_SOUNDS;
  const obj37 = {};
  str38 = str39.toString();
  const intl40 = require(dependencyMap[1]).intl;
  obj37.title = intl40.string(require(dependencyMap[1]).t.pwaVJ6);
  obj37.description = require(dependencyMap[1]).t.qDpPtX;
  obj37.flag = Permissions.USE_EXTERNAL_SOUNDS;
  obj[str38] = obj37;
  let str40 = Permissions.USE_VAD;
  const obj38 = {};
  str39 = str40.toString();
  const intl41 = require(dependencyMap[1]).intl;
  obj38.title = intl41.string(require(dependencyMap[1]).t.08zAV7);
  obj38.description = require(dependencyMap[1]).t.7CHjmc;
  obj38.flag = Permissions.USE_VAD;
  obj[str39] = obj38;
  let str41 = Permissions.PRIORITY_SPEAKER;
  const obj39 = {};
  str40 = str41.toString();
  const intl42 = require(dependencyMap[1]).intl;
  obj39.title = intl42.string(require(dependencyMap[1]).t.BVK71i);
  let prop1;
  if (null != permissionOptions) {
    prop1 = permissionOptions.PRIORITY_SPEAKER_DESCRIPTION;
  }
  if (null == prop1) {
    prop1 = require(dependencyMap[1]).t.OJkrro;
  }
  obj39.description = prop1;
  obj39.flag = Permissions.PRIORITY_SPEAKER;
  obj[str40] = obj39;
  let str42 = Permissions.MUTE_MEMBERS;
  const obj40 = {};
  str41 = str42.toString();
  const intl43 = require(dependencyMap[1]).intl;
  obj40.title = intl43.string(require(dependencyMap[1]).t.8EI30/);
  obj40.description = require(dependencyMap[1]).t.PIhGA1;
  obj40.flag = Permissions.MUTE_MEMBERS;
  obj[str41] = obj40;
  let str43 = Permissions.DEAFEN_MEMBERS;
  const obj41 = {};
  str42 = str43.toString();
  const intl44 = require(dependencyMap[1]).intl;
  obj41.title = intl44.string(require(dependencyMap[1]).t.9L47Fr);
  obj41.description = require(dependencyMap[1]).t.FQr3+t;
  obj41.flag = Permissions.DEAFEN_MEMBERS;
  obj[str42] = obj41;
  let str44 = Permissions.MOVE_MEMBERS;
  const obj42 = {};
  str43 = str44.toString();
  const intl45 = require(dependencyMap[1]).intl;
  obj42.title = intl45.string(require(dependencyMap[1]).t.YtjJPQ);
  obj42.description = require(dependencyMap[1]).t.SEe0Gp;
  obj42.flag = Permissions.MOVE_MEMBERS;
  obj[str43] = obj42;
  let str45 = Permissions.REQUEST_TO_SPEAK;
  const obj43 = {};
  str44 = str45.toString();
  const intl46 = require(dependencyMap[1]).intl;
  obj43.title = intl46.string(require(dependencyMap[1]).t.5kicT2);
  obj43.description = require(dependencyMap[1]).t.yNE+Q5;
  obj43.flag = Permissions.REQUEST_TO_SPEAK;
  obj43.isExperimental = true;
  obj[str44] = obj43;
  let str46 = Permissions.ADMINISTRATOR;
  const obj44 = {};
  str45 = str46.toString();
  const intl47 = require(dependencyMap[1]).intl;
  obj44.title = intl47.string(require(dependencyMap[1]).t.PGvZqX);
  if ("string" === typeof require(dependencyMap[1]).t.UJxMrK) {
    let UJxMrK = require(dependencyMap[1]).t.UJxMrK;
  } else {
    const intl48 = require(dependencyMap[1]).intl;
    UJxMrK = intl48.format(require(dependencyMap[1]).t.UJxMrK, {});
  }
  obj44.description = UJxMrK;
  obj44.flag = Permissions.ADMINISTRATOR;
  obj[str45] = obj44;
  let str47 = Permissions.MANAGE_EVENTS;
  const obj45 = {};
  str46 = str47.toString();
  const intl49 = require(dependencyMap[1]).intl;
  obj45.title = intl49.string(require(dependencyMap[1]).t.HIgA5a);
  obj45.description = require(dependencyMap[1]).t.SL+qgG;
  obj45.flag = Permissions.MANAGE_EVENTS;
  obj[str46] = obj45;
  let str48 = Permissions.CREATE_EVENTS;
  const obj46 = {};
  str47 = str48.toString();
  const intl50 = require(dependencyMap[1]).intl;
  obj46.title = intl50.string(require(dependencyMap[1]).t.qyjZua);
  obj46.description = require(dependencyMap[1]).t.bQEFJZ;
  obj46.flag = Permissions.CREATE_EVENTS;
  obj[str47] = obj46;
  let str49 = Permissions.MANAGE_THREADS;
  const obj47 = {};
  str48 = str49.toString();
  const intl51 = require(dependencyMap[1]).intl;
  obj47.title = intl51.string(require(dependencyMap[1]).t.QKe7Q3);
  obj47.description = require(dependencyMap[1]).t.QAxIIt;
  obj47.flag = Permissions.MANAGE_THREADS;
  obj[str48] = obj47;
  let str50 = Permissions.CREATE_PUBLIC_THREADS;
  const obj48 = {};
  str49 = str50.toString();
  const intl52 = require(dependencyMap[1]).intl;
  obj48.title = intl52.string(require(dependencyMap[1]).t.25rKnX);
  obj48.description = require(dependencyMap[1]).t.ODCYj8;
  obj48.flag = Permissions.CREATE_PUBLIC_THREADS;
  obj[str49] = obj48;
  let str51 = Permissions.CREATE_PRIVATE_THREADS;
  const obj49 = {};
  str50 = str51.toString();
  const intl53 = require(dependencyMap[1]).intl;
  obj49.title = intl53.string(require(dependencyMap[1]).t.QwbTSa);
  obj49.description = require(dependencyMap[1]).t.G/cc3l;
  obj49.flag = Permissions.CREATE_PRIVATE_THREADS;
  obj[str50] = obj49;
  let str52 = Permissions.SEND_MESSAGES_IN_THREADS;
  const obj50 = {};
  str51 = str52.toString();
  const intl54 = require(dependencyMap[1]).intl;
  obj50.title = intl54.string(require(dependencyMap[1]).t.5QlVGy);
  obj50.description = require(dependencyMap[1]).t.C2ZPE3;
  obj50.flag = Permissions.SEND_MESSAGES_IN_THREADS;
  obj[str51] = obj50;
  const obj51 = {};
  str52 = Permissions.SET_VOICE_CHANNEL_STATUS.toString();
  const intl55 = require(dependencyMap[1]).intl;
  obj51.title = intl55.string(require(dependencyMap[1]).t.VBwkUf);
  const t3 = require(dependencyMap[1]).t;
  obj51.description = permissionOptions.enableHangoutWindow ? t3.CYcJ6H : t3.C6BzXx;
  obj51.flag = Permissions.SET_VOICE_CHANNEL_STATUS;
  obj[str52] = obj51;
  return obj;
}
function generateGuildGeneralSection(arg0, showCreatorMonetizationAnalyticsPermission) {
  const items = [Permissions.VIEW_CHANNEL, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.VIEW_AUDIT_LOG, Permissions.VIEW_GUILD_ANALYTICS];
  if (showCreatorMonetizationAnalyticsPermission.showCreatorMonetizationAnalyticsPermission) {
    items.push(Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }
  items.push(Permissions.MANAGE_WEBHOOKS);
  items.push(Permissions.MANAGE_GUILD);
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.mYck+B);
  obj.permissions = getPermissionsSpecList(items, arg0);
  filterExperimental(obj);
  return obj;
}
function generateGuildMembershipSection(arg0) {
  const items = [Permissions.CREATE_INSTANT_INVITE, Permissions.CHANGE_NICKNAME, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MODERATE_MEMBERS];
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.Ny49TN);
  obj.permissions = getPermissionsSpecList(items, arg0);
  filterExperimental(obj);
  return obj;
}
function generateGuildTextSection(arg0, inSoundmojiExperiment) {
  const items = [Permissions.SEND_MESSAGES, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.MENTION_EVERYONE, Permissions.MANAGE_MESSAGES, Permissions.PIN_MESSAGES, Permissions.MANAGE_OFFICIAL_MESSAGES, Permissions.BYPASS_SLOWMODE, Permissions.MANAGE_THREADS, Permissions.READ_MESSAGE_HISTORY, Permissions.SEND_TTS_MESSAGES, Permissions.SEND_VOICE_MESSAGES, Permissions.SEND_POLLS];
  let found = items;
  if (!inSoundmojiExperiment.inSoundmojiExperiment) {
    found = items.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.cKobO5);
  obj.permissions = getPermissionsSpecList(found, arg0);
  filterExperimental(obj);
  return obj;
}
function generateGuildVoiceSection(arg0) {
  const items = [Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_SOUNDBOARD, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_VAD, Permissions.PRIORITY_SPEAKER, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.SET_VOICE_CHANNEL_STATUS];
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.46Ra1b);
  obj.permissions = getPermissionsSpecList(items, arg0);
  filterExperimental(obj);
  return obj;
}
function generateGuildAppsSection(arg0) {
  const items = [Permissions.USE_APPLICATION_COMMANDS, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_EXTERNAL_APPS];
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.rrh/W6);
  obj.permissions = getPermissionsSpecList(items, arg0);
  filterExperimental(obj);
  return obj;
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/permissions/PermissionUtils.tsx");

export { getGuildPermissionSpec };
export const generateGuildPermissionSpec = function generateGuildPermissionSpec(showStageChannelPermissions) {
  const tmp = getGuildPermissionSpec(showStageChannelPermissions);
  const items = [generateGuildGeneralSection(tmp, showStageChannelPermissions), generateGuildMembershipSection(tmp), generateGuildTextSection(tmp, showStageChannelPermissions), generateGuildVoiceSection(tmp), generateGuildAppsSection(tmp)];
  if (showStageChannelPermissions.showStageChannelPermissions) {
    let obj = {};
    const intl = require(dependencyMap[1]).intl;
    obj.title = intl.string(require(dependencyMap[1]).t.yniauk);
    const items1 = [Permissions.REQUEST_TO_SPEAK];
    obj.permissions = getPermissionsSpecList(items1, tmp);
    filterExperimental(obj, showStageChannelPermissions.showExperimental);
    items.push(obj);
  }
  obj = {};
  const intl2 = require(dependencyMap[1]).intl;
  obj.title = intl2.string(require(dependencyMap[1]).t.b8lplT);
  const items2 = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
  obj.permissions = getPermissionsSpecList(items2, tmp);
  filterExperimental(obj, showStageChannelPermissions.showExperimental);
  items.push(obj);
  obj = {};
  const intl3 = require(dependencyMap[1]).intl;
  obj.title = intl3.string(require(dependencyMap[1]).t.3uI5CX);
  const items3 = [Permissions.ADMINISTRATOR];
  obj.permissions = getPermissionsSpecList(items3, tmp);
  filterExperimental(obj);
  items.push(obj);
  return items;
};
export const generateChannelGeneralSection = function generateChannelGeneralSection(arg0, intl14, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    let obj = { showManageWebhooks: true };
    tmp = obj;
  }
  obj = { title: intl14 };
  if (null != tmp) {
    if (tmp.showManageWebhooks) {
      const items = [Permissions.VIEW_CHANNEL, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES, Permissions.MANAGE_WEBHOOKS];
      let items1 = items;
    }
    obj.permissions = tmp2(items1, arg0);
    return obj;
  }
  items1 = [Permissions.VIEW_CHANNEL, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES];
};
export const generateChannelMembershipSection = function generateChannelMembershipSection(arg0, intl15) {
  const items = [Permissions.CREATE_INSTANT_INVITE];
  return { title: intl15, permissions: getPermissionsSpecList(items, arg0) };
};
export const generateChannelTextSection = function generateChannelTextSection(arg0, intl23, description) {
  const items = [Permissions.SEND_MESSAGES, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.MENTION_EVERYONE, Permissions.MANAGE_MESSAGES, Permissions.PIN_MESSAGES, Permissions.MANAGE_OFFICIAL_MESSAGES, Permissions.BYPASS_SLOWMODE, Permissions.MANAGE_THREADS, Permissions.READ_MESSAGE_HISTORY, Permissions.SEND_TTS_MESSAGES, Permissions.SEND_VOICE_MESSAGES, Permissions.SEND_POLLS];
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  let found1 = found;
  if (!tmp) {
    found1 = found.filter((arg0) => arg0 !== constants.CREATE_PRIVATE_THREADS);
  }
  let found2 = found1;
  if (!description.showCreateThreads) {
    found2 = found1.filter((arg0) => arg0 !== constants.CREATE_PUBLIC_THREADS);
  }
  const obj = { title: intl23, description: description.sectionDescription, permissions: getPermissionsSpecList(found2, arg0) };
  return obj;
};
export const generateChannelVoiceSection = function generateChannelVoiceSection(arg0, intl) {
  const items = [Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_SOUNDBOARD, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_VAD, Permissions.PRIORITY_SPEAKER, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.SET_VOICE_CHANNEL_STATUS];
  return { title: intl, permissions: getPermissionsSpecList(items, arg0) };
};
export const generateChannelVoiceChatSection = function generateChannelVoiceChatSection(arg0, stringResult, description) {
  const items = [Permissions.SEND_MESSAGES, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.MENTION_EVERYONE, Permissions.MANAGE_MESSAGES, Permissions.BYPASS_SLOWMODE, Permissions.READ_MESSAGE_HISTORY, Permissions.SEND_TTS_MESSAGES, Permissions.SEND_VOICE_MESSAGES, Permissions.SEND_POLLS];
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  const obj = { title: stringResult, description: description.sectionDescription, permissions: getPermissionsSpecList(found, arg0) };
  return obj;
};
export const generateChannelAppsSection = function generateChannelAppsSection(arg0, intl13, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    let obj = { showActivities: true };
    tmp = obj;
  }
  obj = { title: intl13 };
  const items = [Permissions.USE_APPLICATION_COMMANDS, , ];
  let prop = null;
  if (tmp.showActivities) {
    prop = Permissions.USE_EMBEDDED_ACTIVITIES;
  }
  items[1] = prop;
  items[2] = Permissions.USE_EXTERNAL_APPS;
  obj.permissions = getPermissionsSpecList(items.filter(require(dependencyMap[2]).isNotNullish), arg0);
  return obj;
};
export const generateChannelStageVoiceSection = function generateChannelStageVoiceSection(arg0, intl8, isStageVideoEnabledResult) {
  const obj = { title: intl8 };
  const CONNECT = Permissions.CONNECT;
  if (isStageVideoEnabledResult) {
    const items = [CONNECT, Permissions.STREAM, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS];
    let items1 = items;
  } else {
    items1 = [CONNECT, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS];
  }
  obj.permissions = getPermissionsSpecList(items1, arg0);
  return obj;
};
export const generateChannelStageSection = function generateChannelStageSection(arg0, intl) {
  const items = [Permissions.REQUEST_TO_SPEAK, Permissions.MENTION_EVERYONE];
  return { title: intl, permissions: getPermissionsSpecList(items, arg0) };
};
export const generateChannelEventsSection = function generateChannelEventsSection(arg0, intl10) {
  const items = [Permissions.CREATE_EVENTS, Permissions.MANAGE_EVENTS];
  return { title: intl10, permissions: getPermissionsSpecList(items, arg0) };
};
export const renderDescription = function renderDescription(str) {
  if (null == str) {
    return str;
  } else if ("string" === typeof str) {
    let trimmed = str.trim();
  } else {
    trimmed = str;
    if ("function" === tmp) {
      const intl = require(dependencyMap[1]).intl;
      trimmed = intl.format(str, {});
    }
  }
};
