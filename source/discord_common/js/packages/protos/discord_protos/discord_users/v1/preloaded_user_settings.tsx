// Module ID: 1282
// Function ID: 14494
// Name: _callSuper
// Dependencies: []

// Module 1282 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MENTIONS: 1, [1]: "MENTIONS", UNREADS: 2, [2]: "UNREADS", TODOS: 3, [3]: "TODOS", FOR_YOU: 4, [4]: "FOR_YOU", GAME_INVITES: 5, [5]: "GAME_INVITES", BOOKMARKS: 6, [6]: "BOOKMARKS", SCHEDULED: 7, [7]: "SCHEDULED" };
obj = { UNSET_EXPLICIT_CONTENT_REDACTION: 0, [0]: "UNSET_EXPLICIT_CONTENT_REDACTION", SHOW: 1, [1]: "SHOW", BLUR: 2, [2]: "BLUR", BLOCK: 3, [3]: "BLOCK" };
obj = { DEFAULT_UNSET: 0, [0]: "DEFAULT_UNSET", DISABLED: 1, [1]: "DISABLED", NON_FRIENDS: 2, [2]: "NON_FRIENDS", FRIENDS_AND_NON_FRIENDS: 3, [3]: "FRIENDS_AND_NON_FRIENDS" };
const obj1 = { NOTIFICATIONS_ENABLED: 0, [0]: "NOTIFICATIONS_ENABLED", ONLY_DMS: 1, [1]: "ONLY_DMS", NOTIFICATIONS_DISABLED: 2, [2]: "NOTIFICATIONS_DISABLED" };
const obj2 = { ACTIVITY_NOTIFICATIONS_UNSET: 0, [0]: "ACTIVITY_NOTIFICATIONS_UNSET", ACTIVITY_NOTIFICATIONS_DISABLED: 1, [1]: "ACTIVITY_NOTIFICATIONS_DISABLED", ACTIVITY_NOTIFICATIONS_ENABLED: 2, [2]: "ACTIVITY_NOTIFICATIONS_ENABLED", ONLY_GAMES_PLAYED: 3, [3]: "ONLY_GAMES_PLAYED" };
const obj3 = { STATUS_PUSH_UNSET: 0, [0]: "STATUS_PUSH_UNSET", STATUS_PUSH_ENABLED: 1, [1]: "STATUS_PUSH_ENABLED", STATUS_PUSH_DISABLED: 2, [2]: "STATUS_PUSH_DISABLED" };
const obj4 = { UNSET: 0, [0]: "UNSET", GOOGLE: 1, [1]: "GOOGLE", BING: 2, [2]: "BING", DUCKDUCKGO: 3, [3]: "DUCKDUCKGO", CUSTOM: 4, [4]: "CUSTOM" };
const obj5 = { OFF: 0, [0]: "OFF", ON_FOR_LARGE_GUILDS: 1, [1]: "ON_FOR_LARGE_GUILDS", ON: 2, [2]: "ON" };
const obj6 = { ACTIVITY_STATUS_UNSET: 0, [0]: "ACTIVITY_STATUS_UNSET", ACTIVITY_STATUS_OFF: 1, [1]: "ACTIVITY_STATUS_OFF", ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS: 2, [2]: "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS", ACTIVITY_STATUS_ON: 3, [3]: "ACTIVITY_STATUS_ON" };
const obj7 = { OFF_FOR_NEW_GUILDS: 0, [0]: "OFF_FOR_NEW_GUILDS", ON_FOR_NEW_GUILDS: 1, [1]: "ON_FOR_NEW_GUILDS" };
const obj8 = { SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET: 0, [0]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET", SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL: 1, [1]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL", SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME: 2, [2]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME", SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE: 3, [3]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE" };
const obj9 = { UNSET: 0, [0]: "UNSET", FRIENDS_ONLY: 1, [1]: "FRIENDS_ONLY", FRIENDS_AND_SMALL_GUILDS: 2, [2]: "FRIENDS_AND_SMALL_GUILDS", FRIENDS_AND_ALL_GUILDS: 3, [3]: "FRIENDS_AND_ALL_GUILDS" };
const obj10 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PERSONAL: 1, [1]: "PERSONAL", GUILD: 2, [2]: "GUILD" };
const obj11 = { UNSET_UI_DENSITY: 0, [0]: "UNSET_UI_DENSITY", COMPACT: 1, [1]: "COMPACT", COZY: 2, [2]: "COZY", RESPONSIVE: 3, [3]: "RESPONSIVE", DEFAULT: 4, [4]: "DEFAULT" };
const obj12 = { UNSET: 0, [0]: "UNSET", DARK: 1, [1]: "DARK", LIGHT: 2, [2]: "LIGHT", DARKER: 3, [3]: "DARKER", MIDNIGHT: 4, [4]: "MIDNIGHT" };
const obj13 = { AUTO: 0, [0]: "AUTO", H12: 1, [1]: "H12", H23: 2, [2]: "H23" };
const obj14 = { LAUNCH_PAD_DISABLED: 0, [0]: "LAUNCH_PAD_DISABLED", LAUNCH_PAD_GESTURE_FULL_SCREEN: 1, [1]: "LAUNCH_PAD_GESTURE_FULL_SCREEN", LAUNCH_PAD_GESTURE_RIGHT_EDGE: 2, [2]: "LAUNCH_PAD_GESTURE_RIGHT_EDGE", LAUNCH_PAD_PULL_TAB: 3, [3]: "LAUNCH_PAD_PULL_TAB" };
const obj15 = { SWIPE_RIGHT_TO_LEFT_UNSET: 0, [0]: "SWIPE_RIGHT_TO_LEFT_UNSET", SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS: 1, [1]: "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS", SWIPE_RIGHT_TO_LEFT_REPLY: 2, [2]: "SWIPE_RIGHT_TO_LEFT_REPLY" };
const obj16 = { UNSET_FAVORITE_CHANNEL_TYPE: 0, [0]: "UNSET_FAVORITE_CHANNEL_TYPE", REFERENCE_ORIGINAL: 1, [1]: "REFERENCE_ORIGINAL", CATEGORY: 2, [2]: "CATEGORY" };
const obj17 = { UNSET_SAFETY_SETTINGS_PRESET: 0, [0]: "UNSET_SAFETY_SETTINGS_PRESET", BALANCED: 1, [1]: "BALANCED", STRICT: 2, [2]: "STRICT", RELAXED: 3, [3]: "RELAXED", CUSTOM: 4, [4]: "CUSTOM" };
const obj18 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ALL: 1, [1]: "ALL", BOOKMARKS: 2, [2]: "BOOKMARKS", REMINDERS: 3, [3]: "REMINDERS" };
let tmp2 = (MessageType) => {
  class PreloadedUserSettings$Type {
    constructor() {
      tmp = closure_3(this, PreloadedUserSettings$Type);
      obj = { -111020099: "Array", 1351895378: "isArray", 1456955659: "constructor" };
      obj.T = function T() {
        return callback(closure_1[6]).Versions;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { -111020099: 9, 1351895378: "debug", 1456955659: "message" };
      obj.T = function T() {
        return closure_29;
      };
      items[1] = obj;
      obj1 = { -111020099: false, 1351895378: "username", 1456955659: "default" };
      obj1.T = function T() {
        return closure_30;
      };
      items[2] = obj1;
      obj2 = { -111020099: "message", 1351895378: "600", 1456955659: 15 };
      obj2.T = function T() {
        return closure_37;
      };
      items[3] = obj2;
      items[4] = {
        T() {
              return closure_40;
            }
      };
      items[5] = {
        T() {
              return closure_45;
            }
      };
      obj3 = { -111020099: 188587186057130600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1351895378: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021492227979646304, 1456955659: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000252042710855685 };
      obj3.T = function T() {
        return closure_46;
      };
      items[6] = obj3;
      obj4 = { -111020099: "text-sm/medium", 1351895378: "text-muted", 1456955659: null };
      obj4.T = function T() {
        return closure_47;
      };
      items[7] = obj4;
      items[8] = {
        T() {
              return closure_48;
            }
      };
      obj5 = { -111020099: "\u7E41\u9AD4\u4E2D\u6587", 1351895378: "Traditional Chinese", 1456955659: "zh-TW" };
      obj5.T = function T() {
        return closure_49;
      };
      items[9] = obj5;
      obj6 = { -111020099: "r", 1351895378: "createChildSpanJSON", 1456955659: "DISCOVERY_GAME_LANDING_PAGE" };
      obj6.T = function T() {
        return closure_50;
      };
      items[10] = obj6;
      obj7 = { -111020099: "valueCallback", 1351895378: "<string:2856141056>", 1456955659: "<string:24182788>" };
      obj7.T = function T() {
        return closure_52;
      };
      items[11] = obj7;
      items[12] = {
        T() {
              return closure_54;
            }
      };
      items[13] = {
        T() {
              return closure_57;
            }
      };
      items[14] = {
        T() {
              return closure_59;
            }
      };
      items[15] = {
        T() {
              return closure_62;
            }
      };
      obj8 = { -111020099: -1552630678, 1351895378: 28991, 1456955659: 271646720 };
      obj8.T = function T() {
        return closure_63;
      };
      items[16] = obj8;
      obj9 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj9.T = function T() {
        return closure_66;
      };
      items[17] = obj9;
      items[18] = {
        T() {
              return closure_67;
            }
      };
      items[19] = {
        T() {
              return closure_71;
            }
      };
      items[20] = {
        T() {
              return closure_70;
            }
      };
      obj10 = { -111020099: false, 1351895378: 0, 1456955659: 0 };
      obj10.T = function T() {
        return closure_72;
      };
      items[21] = obj10;
      items[22] = {
        T() {
              return closure_73;
            }
      };
      obj11 = { -111020099: "OPACITY_YELLOW_12", 1351895378: 0.12156862745098039, 1456955659: "RED_NEW_46" };
      obj11.T = function T() {
        return closure_77;
      };
      items[23] = obj11;
      obj12 = { -111020099: "FrameEffect_02-3_Out", 1351895378: 0, 1456955659: -25.244 };
      obj12.T = function T() {
        return closure_80;
      };
      items[24] = obj12;
      obj13 = { -111020099: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004446967372419506, 1351895378: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017351895277609737, 1456955659: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042187375955047815 };
      obj13.T = function T() {
        return closure_81;
      };
      items[25] = obj13;
      items1 = [true];
      items1[1] = items;
      return closure_82(this, PreloadedUserSettings$Type, items1);
    }
  }
  const arg1 = PreloadedUserSettings$Type;
  callback3(PreloadedUserSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PreloadedUserSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PreloadedUserSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PreloadedUserSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.appVersionSettings = closure_81.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.appVersionSettings);
        while (true) {
          do {
            let tmp3 = tmp9;
            let tmp4 = tmp10;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(versions, tag, writeUnknownFields) {
      if (versions.versions) {
        let joined25 = PreloadedUserSettings$Type;
        const Versions = PreloadedUserSettings$Type(closure_1[6]).Versions;
        const tagResult = tag.tag(1, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = Versions.internalBinaryWrite(versions.versions, tag.tag(1, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Versions.internalBinaryWrite(versions.versions, tag.tag(1, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.inbox) {
        const tagResult1 = tag.tag(2, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_29.internalBinaryWrite(versions.inbox, tag.tag(2, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_29.internalBinaryWrite(versions.inbox, tag.tag(2, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guilds) {
        const tagResult2 = tag.tag(3, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = closure_30.internalBinaryWrite(versions.guilds, tag.tag(3, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = closure_30.internalBinaryWrite(versions.guilds, tag.tag(3, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.userContent) {
        const tagResult3 = tag.tag(4, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = closure_37.internalBinaryWrite(versions.userContent, tag.tag(4, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_37.internalBinaryWrite(versions.userContent, tag.tag(4, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.voiceAndVideo) {
        const tagResult4 = tag.tag(5, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = closure_40.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_40.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.textAndImages) {
        const tagResult5 = tag.tag(6, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = closure_45.internalBinaryWrite(versions.textAndImages, tag.tag(6, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = closure_45.internalBinaryWrite(versions.textAndImages, tag.tag(6, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.notifications) {
        const tagResult6 = tag.tag(7, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = closure_46.internalBinaryWrite(versions.notifications, tag.tag(7, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_46.internalBinaryWrite(versions.notifications, tag.tag(7, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.privacy) {
        const tagResult7 = tag.tag(8, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = closure_47.internalBinaryWrite(versions.privacy, tag.tag(8, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = closure_47.internalBinaryWrite(versions.privacy, tag.tag(8, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.debug) {
        const tagResult8 = tag.tag(9, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined8 = closure_48.internalBinaryWrite(versions.debug, tag.tag(9, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = closure_48.internalBinaryWrite(versions.debug, tag.tag(9, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.gameLibrary) {
        const tagResult9 = tag.tag(10, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined9 = closure_49.internalBinaryWrite(versions.gameLibrary, tag.tag(10, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = closure_49.internalBinaryWrite(versions.gameLibrary, tag.tag(10, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.status) {
        const tagResult10 = tag.tag(11, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined10 = closure_50.internalBinaryWrite(versions.status, tag.tag(11, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = closure_50.internalBinaryWrite(versions.status, tag.tag(11, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.localization) {
        const tagResult11 = tag.tag(12, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined11 = closure_52.internalBinaryWrite(versions.localization, tag.tag(12, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = closure_52.internalBinaryWrite(versions.localization, tag.tag(12, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.appearance) {
        const tagResult12 = tag.tag(13, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined12 = closure_54.internalBinaryWrite(versions.appearance, tag.tag(13, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = closure_54.internalBinaryWrite(versions.appearance, tag.tag(13, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guildFolders) {
        const tagResult13 = tag.tag(14, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined13 = closure_57.internalBinaryWrite(versions.guildFolders, tag.tag(14, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = closure_57.internalBinaryWrite(versions.guildFolders, tag.tag(14, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favorites) {
        const tagResult14 = tag.tag(15, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined14 = closure_59.internalBinaryWrite(versions.favorites, tag.tag(15, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = closure_59.internalBinaryWrite(versions.favorites, tag.tag(15, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.audioContextSettings) {
        const tagResult15 = tag.tag(16, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined15 = closure_62.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = closure_62.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.communities) {
        const tagResult16 = tag.tag(17, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined16 = closure_63.internalBinaryWrite(versions.communities, tag.tag(17, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = closure_63.internalBinaryWrite(versions.communities, tag.tag(17, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.broadcast) {
        const tagResult17 = tag.tag(18, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined17 = closure_66.internalBinaryWrite(versions.broadcast, tag.tag(18, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = closure_66.internalBinaryWrite(versions.broadcast, tag.tag(18, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.clips) {
        const tagResult18 = tag.tag(19, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined18 = closure_67.internalBinaryWrite(versions.clips, tag.tag(19, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = closure_67.internalBinaryWrite(versions.clips, tag.tag(19, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.forLater) {
        const tagResult19 = tag.tag(20, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined19 = closure_71.internalBinaryWrite(versions.forLater, tag.tag(20, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = closure_71.internalBinaryWrite(versions.forLater, tag.tag(20, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.safetySettings) {
        const tagResult20 = tag.tag(21, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined20 = closure_70.internalBinaryWrite(versions.safetySettings, tag.tag(21, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult20 = closure_70.internalBinaryWrite(versions.safetySettings, tag.tag(21, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.icymiSettings) {
        const tagResult21 = tag.tag(22, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined21 = closure_72.internalBinaryWrite(versions.icymiSettings, tag.tag(22, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult21 = closure_72.internalBinaryWrite(versions.icymiSettings, tag.tag(22, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applications) {
        const tagResult22 = tag.tag(23, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined22 = closure_73.internalBinaryWrite(versions.applications, tag.tag(23, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult22 = closure_73.internalBinaryWrite(versions.applications, tag.tag(23, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.ads) {
        const tagResult23 = tag.tag(24, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined23 = closure_77.internalBinaryWrite(versions.ads, tag.tag(24, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult23 = closure_77.internalBinaryWrite(versions.ads, tag.tag(24, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.inAppFeedbackSettings) {
        const tagResult24 = tag.tag(25, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined24 = closure_80.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult24 = closure_80.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.appVersionSettings) {
        joined25 = closure_81;
        joined25 = PreloadedUserSettings$Type;
        joined25 = closure_1;
        const tagResult25 = tag.tag(26, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined25 = closure_81.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult25 = closure_81.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, PreloadedUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined25 = PreloadedUserSettings$Type;
          joined25 = closure_1;
          onWrite = PreloadedUserSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined25 = onWrite(this.typeName, versions, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PreloadedUserSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class InboxSettings$Type {
    constructor() {
      tmp = closure_3(this, InboxSettings$Type);
      obj = {
        T() {
              const items = ["isArray", closure_8, "INBOX_TAB_"];
              return items;
            }
      };
      items = [, ];
      items[0] = obj;
      items[1] = {};
      items1 = [131133.53967475894];
      items1[1] = items;
      return closure_82(this, InboxSettings$Type, items1);
    }
  }
  const arg1 = InboxSettings$Type;
  callback3(InboxSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { <string:2822476956>: "absolute", <string:2822744130>: -1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InboxSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InboxSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InboxSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.currentTab = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.viewedTutorial = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = InboxSettings$Type;
                let tmp13 = closure_1;
                onRead = InboxSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(currentTab, tag, writeUnknownFields) {
      if (0 !== currentTab.currentTab) {
        tag.tag(1, InboxSettings$Type(closure_1[7]).WireType.Varint).int32(currentTab.currentTab);
        const tagResult = tag.tag(1, InboxSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== currentTab.viewedTutorial) {
        tag.tag(2, InboxSettings$Type(closure_1[7]).WireType.Varint).bool(currentTab.viewedTutorial);
        const tagResult1 = tag.tag(2, InboxSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InboxSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, currentTab, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(InboxSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class AllGuildSettings$Type {
    constructor() {
      tmp = closure_3(this, AllGuildSettings$Type);
      obj = {
        kind: "message",
        T() {
              return closure_32;
            }
      };
      items = [];
      items[0] = { V: obj };
      items1 = ["isArray"];
      items1[1] = items;
      return closure_82(this, AllGuildSettings$Type, items1);
    }
  }
  const arg1 = AllGuildSettings$Type;
  callback3(AllGuildSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guilds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AllGuildSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AllGuildSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AllGuildSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.guilds, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AllGuildSettings$Type;
                let tmp13 = closure_1;
                onRead = AllGuildSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_32;
            internalBinaryReadResult = closure_32.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_32.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(guilds, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(guilds.guilds);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_32;
          let internalBinaryWriteResult = closure_32.internalBinaryWrite(guilds.guilds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AllGuildSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guilds, tag);
      }
      return tag;
    }
  };
  return callback(AllGuildSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class GuildDismissibleContentState$Type {
    constructor() {
      tmp = closure_3(this, GuildDismissibleContentState$Type);
      items = [, , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items[4] = {};
      items1 = ["<string:2305704192>"];
      items1[1] = items;
      return closure_82(this, GuildDismissibleContentState$Type, items1);
    }
  }
  const arg1 = GuildDismissibleContentState$Type;
  callback3(GuildDismissibleContentState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildDismissibleContentState$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildDismissibleContentState$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildDismissibleContentState$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.dismissed = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.lastDismissedVersion = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let str5 = pos.uint64();
          obj.lastDismissedAtMs = str5.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str4 = pos.uint64();
          obj.lastDismissedObjectId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.numTimesDismissed = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = GuildDismissibleContentState$Type;
                let tmp13 = closure_1;
                onRead = GuildDismissibleContentState$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(dismissed, tag, writeUnknownFields) {
      if (false !== dismissed.dismissed) {
        tag.tag(1, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint).bool(dismissed.dismissed);
        const tagResult = tag.tag(1, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== dismissed.lastDismissedVersion) {
        tag.tag(2, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint32(dismissed.lastDismissedVersion);
        const tagResult1 = tag.tag(2, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if ("0" !== dismissed.lastDismissedAtMs) {
        tag.tag(3, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint64(dismissed.lastDismissedAtMs);
        const tagResult2 = tag.tag(3, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if ("0" !== dismissed.lastDismissedObjectId) {
        tag.tag(4, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint64(dismissed.lastDismissedObjectId);
        const tagResult3 = tag.tag(4, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== dismissed.numTimesDismissed) {
        tag.tag(5, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint32(dismissed.numTimesDismissed);
        const tagResult4 = tag.tag(5, GuildDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildDismissibleContentState$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, dismissed, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildDismissibleContentState$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class GuildSettings$Type {
    constructor() {
      tmp = closure_3(this, GuildSettings$Type);
      obj = { -111020099: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008272010752127167, 1351895378: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007302929699221, 1456955659: 0.0010376001852883676, -1801654842: 190352962056943100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj = {
        kind: "message",
        T() {
              return closure_34;
            }
      };
      obj.V = obj;
      items = [, , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {};
      items[3] = {
        T() {
              return callback(closure_1[8]).Timestamp;
            }
      };
      items[4] = {};
      items[5] = {
        T() {
              return closure_65;
            }
      };
      obj1 = { -111020099: false, 1351895378: false, 1456955659: false };
      obj1.T = function T() {
        return closure_53;
      };
      items[6] = obj1;
      items[7] = {};
      items[8] = {};
      obj2 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj2.T = function T() {
        return closure_35;
      };
      items[9] = obj2;
      items[10] = {};
      obj3 = {
        kind: "message",
        T() {
              return closure_31;
            }
      };
      items[11] = { V: obj3 };
      obj4 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj4.T = function T() {
        const items = [null, closure_20, "GUILD_THEME_SOURCE_PREFERENCE_"];
        return items;
      };
      items[12] = obj4;
      items1 = [null];
      items1[1] = items;
      return closure_82(this, GuildSettings$Type, items1);
    }
  }
  const arg1 = GuildSettings$Type;
  callback3(GuildSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { channels: {} };
      const uint8Array = new Uint8Array(0);
      obj.dismissedGuildContent = uint8Array;
      obj.guildDismissibleContentStates = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.guildThemeSourcePreference = pos.int32();
        while (true) {
          do {
            let tmp3 = tmp5;
            let tmp4 = tmp6;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_34;
            internalBinaryReadResult = closure_34.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_34.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "binaryReadMap12",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_31;
            internalBinaryReadResult = closure_31.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = int32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_31.create();
      }
      arg0[num] = obj;
    }
  };
  items[4] = {
    key: "internalBinaryWrite",
    value(channels, tag, writeUnknownFields) {
      let length;
      let length2;
      const keys = Object.keys(channels.channels);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_34;
          let internalBinaryWriteResult = closure_34.internalBinaryWrite(channels.channels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (0 !== channels.hubProgress) {
        tag.tag(2, GuildSettings$Type(closure_1[7]).WireType.Varint).uint32(channels.hubProgress);
        const tagResult3 = tag.tag(2, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== channels.guildOnboardingProgress) {
        tag.tag(3, GuildSettings$Type(closure_1[7]).WireType.Varint).uint32(channels.guildOnboardingProgress);
        const tagResult4 = tag.tag(3, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (channels.guildRecentsDismissedAt) {
        const Timestamp = GuildSettings$Type(closure_1[8]).Timestamp;
        const tagResult5 = tag.tag(4, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (channels.dismissedGuildContent.length) {
        tag.tag(5, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).bytes(channels.dismissedGuildContent);
        const tagResult6 = tag.tag(5, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (channels.joinSound) {
        const tagResult7 = tag.tag(6, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = closure_65.internalBinaryWrite(channels.joinSound, tag.tag(6, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = closure_65.internalBinaryWrite(channels.joinSound, tag.tag(6, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (channels.mobileRedesignChannelListSettings) {
        const tagResult8 = tag.tag(7, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = closure_53.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_53.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== channels.disableRaidAlertPush) {
        tag.tag(8, GuildSettings$Type(closure_1[7]).WireType.Varint).bool(channels.disableRaidAlertPush);
        const tagResult9 = tag.tag(8, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== channels.disableRaidAlertNag) {
        tag.tag(9, GuildSettings$Type(closure_1[7]).WireType.Varint).bool(channels.disableRaidAlertNag);
        const tagResult10 = tag.tag(9, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (channels.customNotificationSoundConfig) {
        const tagResult11 = tag.tag(10, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = closure_35.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_35.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, GuildSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== channels.leaderboardsDisabled) {
        tag.tag(11, GuildSettings$Type(closure_1[7]).WireType.Varint).bool(channels.leaderboardsDisabled);
        const tagResult12 = tag.tag(11, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      const keys1 = Object.keys(channels.guildDismissibleContentStates);
      let num11 = 0;
      if (0 < keys1.length) {
        do {
          let tmp42 = keys1[num11];
          let tmp43 = closure_0;
          let tmp44 = closure_1;
          let tagResult13 = tag.tag(12, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult2 = tagResult13.fork();
          let tagResult14 = forkResult2.tag(1, closure_0(closure_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult14.int32(parseInt(tmp42));
          let tagResult15 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult3 = tagResult15.fork();
          let tmp47 = closure_31;
          let internalBinaryWriteResult5 = closure_31.internalBinaryWrite(channels.guildDismissibleContentStates[tmp42], tag, writeUnknownFields);
          let joined6 = tag.join();
          let joined7 = joined6.join();
          num11 = num11 + 1;
          length2 = keys1.length;
        } while (num11 < length2);
      }
      if (0 !== channels.guildThemeSourcePreference) {
        tag.tag(13, GuildSettings$Type(closure_1[7]).WireType.Varint).int32(channels.guildThemeSourcePreference);
        const tagResult16 = tag.tag(13, GuildSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, channels, tag);
      }
      return tag;
    }
  };
  return callback(GuildSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class ChannelIconEmoji$Type {
    constructor() {
      tmp = closure_3(this, ChannelIconEmoji$Type);
      obj = { -111020099: 190352962056943100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1351895378: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061520689772086, 1456955659: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001450729866106606 };
      obj.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items = [, , ];
      items[0] = obj;
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[1] = obj;
      obj1 = { -111020099: "<string:124846081>", 1351895378: "<string:1090519040>", 1456955659: "stream_notifications_enabled" };
      obj1.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items[2] = obj1;
      items1 = [true];
      items1[1] = items;
      return closure_82(this, ChannelIconEmoji$Type, items1);
    }
  }
  const arg1 = ChannelIconEmoji$Type;
  callback3(ChannelIconEmoji$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelIconEmoji$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelIconEmoji$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelIconEmoji$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = ChannelIconEmoji$Type;
          let tmp37 = closure_1;
          let UInt64Value2 = ChannelIconEmoji$Type(closure_1[9]).UInt64Value;
          let tmp38 = UInt64Value2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.id = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = ChannelIconEmoji$Type;
          let tmp32 = closure_1;
          let StringValue = ChannelIconEmoji$Type(closure_1[9]).StringValue;
          let tmp33 = StringValue;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = ChannelIconEmoji$Type;
          let tmp27 = closure_1;
          let UInt64Value = ChannelIconEmoji$Type(closure_1[9]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.color = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.color);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ChannelIconEmoji$Type;
                let tmp13 = closure_1;
                onRead = ChannelIconEmoji$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if (id.id) {
        const UInt64Value = ChannelIconEmoji$Type(closure_1[9]).UInt64Value;
        const tagResult = tag.tag(1, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.name) {
        const StringValue = ChannelIconEmoji$Type(closure_1[9]).StringValue;
        const tagResult1 = tag.tag(2, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.color) {
        const UInt64Value2 = ChannelIconEmoji$Type(closure_1[9]).UInt64Value;
        const tagResult2 = tag.tag(3, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, ChannelIconEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelIconEmoji$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelIconEmoji$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp12 = new tmp12();
let tmp14 = (MessageType) => {
  class ChannelSettings$Type {
    constructor() {
      tmp = closure_3(this, ChannelSettings$Type);
      items = [, , ];
      items[0] = {};
      obj = { -111020099: -24.994, 1351895378: 3, 1456955659: "emoji_name" };
      obj.T = function T() {
        return closure_33;
      };
      items[1] = obj;
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return closure_35;
      };
      items[2] = obj;
      items1 = ["<string:3481485568>"];
      items1[1] = items;
      return closure_82(this, ChannelSettings$Type, items1);
    }
  }
  const arg1 = ChannelSettings$Type;
  callback3(ChannelSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { collapsedInInbox: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.collapsedInInbox = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp30 = closure_33;
          let tmp31 = closure_33;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.iconEmoji = closure_33.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iconEmoji);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = closure_35;
          let tmp27 = closure_35;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.customNotificationSoundConfig = closure_35.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customNotificationSoundConfig);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ChannelSettings$Type;
                let tmp13 = closure_1;
                onRead = ChannelSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(collapsedInInbox, tag, writeUnknownFields) {
      if (false !== collapsedInInbox.collapsedInInbox) {
        tag.tag(1, ChannelSettings$Type(closure_1[7]).WireType.Varint).bool(collapsedInInbox.collapsedInInbox);
        const tagResult = tag.tag(1, ChannelSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (collapsedInInbox.iconEmoji) {
        const tagResult1 = tag.tag(2, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_33.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_33.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (collapsedInInbox.customNotificationSoundConfig) {
        const tagResult2 = tag.tag(3, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_35.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_35.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, ChannelSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, collapsedInInbox, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp14 = new tmp14();
let tmp16 = (MessageType) => {
  class CustomNotificationSoundConfig$Type {
    constructor() {
      tmp = closure_3(this, CustomNotificationSoundConfig$Type);
      obj = { -111020099: 0.9, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009222130166875485, 1456955659: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023536507375595065 };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items = [];
      items[0] = obj;
      items1 = ["<string:2019574016>"];
      items1[1] = items;
      return closure_82(this, CustomNotificationSoundConfig$Type, items1);
    }
  }
  const arg1 = CustomNotificationSoundConfig$Type;
  callback3(CustomNotificationSoundConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomNotificationSoundConfig$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomNotificationSoundConfig$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomNotificationSoundConfig$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = CustomNotificationSoundConfig$Type;
          let tmp27 = closure_1;
          let StringValue = CustomNotificationSoundConfig$Type(closure_1[9]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.notificationSoundPackId = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.notificationSoundPackId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = CustomNotificationSoundConfig$Type;
                let tmp13 = closure_1;
                onRead = CustomNotificationSoundConfig$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(notificationSoundPackId, tag, writeUnknownFields) {
      if (notificationSoundPackId.notificationSoundPackId) {
        const StringValue = CustomNotificationSoundConfig$Type(closure_1[9]).StringValue;
        const tagResult = tag.tag(1, CustomNotificationSoundConfig$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, CustomNotificationSoundConfig$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, CustomNotificationSoundConfig$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomNotificationSoundConfig$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, notificationSoundPackId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomNotificationSoundConfig$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp16 = new tmp16();
let tmp18 = (MessageType) => {
  class RecurringDismissibleContentState$Type {
    constructor() {
      tmp = closure_3(this, RecurringDismissibleContentState$Type);
      items = [, , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items1 = [1413545985];
      items1[1] = items;
      return closure_82(this, RecurringDismissibleContentState$Type, items1);
    }
  }
  const arg1 = RecurringDismissibleContentState$Type;
  callback3(RecurringDismissibleContentState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RecurringDismissibleContentState$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RecurringDismissibleContentState$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = RecurringDismissibleContentState$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.lastDismissedVersion = pos.uint32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let str5 = pos.uint64();
          obj.lastDismissedAtMs = str5.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let str4 = pos.uint64();
          obj.lastDismissedObjectId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.numTimesDismissed = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = RecurringDismissibleContentState$Type;
                let tmp13 = closure_1;
                onRead = RecurringDismissibleContentState$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(lastDismissedVersion, tag, writeUnknownFields) {
      if (0 !== lastDismissedVersion.lastDismissedVersion) {
        tag.tag(1, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint32(lastDismissedVersion.lastDismissedVersion);
        const tagResult = tag.tag(1, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if ("0" !== lastDismissedVersion.lastDismissedAtMs) {
        tag.tag(2, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint64(lastDismissedVersion.lastDismissedAtMs);
        const tagResult1 = tag.tag(2, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if ("0" !== lastDismissedVersion.lastDismissedObjectId) {
        tag.tag(3, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint64(lastDismissedVersion.lastDismissedObjectId);
        const tagResult2 = tag.tag(3, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== lastDismissedVersion.numTimesDismissed) {
        tag.tag(4, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint).uint32(lastDismissedVersion.numTimesDismissed);
        const tagResult3 = tag.tag(4, RecurringDismissibleContentState$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RecurringDismissibleContentState$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lastDismissedVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RecurringDismissibleContentState$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp18 = new tmp18();
let tmp20 = (MessageType) => {
  class UserContentSettings$Type {
    constructor() {
      tmp = closure_3(this, UserContentSettings$Type);
      items = [, , , , , , , ];
      items[0] = {};
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[1] = obj;
      obj = { -111020099: "r", 1351895378: "isArray", 1456955659: "body" };
      obj.T = function T() {
        return callback(closure_1[8]).Timestamp;
      };
      items[2] = obj;
      obj1 = { -111020099: "PLUM_13", 1351895378: 1, 1456955659: "stickers" };
      obj1.T = function T() {
        return callback(closure_1[8]).Timestamp;
      };
      items[3] = obj1;
      obj2 = { -111020099: 60, 1351895378: "center", 1456955659: 2 };
      obj2.T = function T() {
        return callback(closure_1[8]).Timestamp;
      };
      items[4] = obj2;
      items[5] = {};
      obj3 = { -111020099: 0.5215686274509804, 1351895378: "RED_NEW_18", 1456955659: 1, -1801654842: "disclaimer_text" };
      obj3.V = {
        kind: "message",
        T() {
              return closure_36;
            }
      };
      items[6] = obj3;
      items[7] = {};
      items1 = [-1780989696];
      items1[1] = items;
      return closure_82(this, UserContentSettings$Type, items1);
    }
  }
  const arg1 = UserContentSettings$Type;
  callback3(UserContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const uint8Array = new Uint8Array(0);
      obj.dismissedContents = uint8Array;
      obj.lastReceivedChangelogId = "0";
      obj.recurringDismissibleContentStates = {};
      obj.lastGiftIntentDismissedAtMs = "0";
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserContentSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserContentSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserContentSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.dismissedContents = pos.bytes();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp42 = UserContentSettings$Type;
          let tmp43 = closure_1;
          let StringValue = UserContentSettings$Type(closure_1[9]).StringValue;
          let tmp44 = StringValue;
          let tmp45 = pos;
          let tmp46 = readUnknownField;
          obj.lastDismissedOutboundPromotionStartDate = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastDismissedOutboundPromotionStartDate);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp37 = UserContentSettings$Type;
          let tmp38 = closure_1;
          let Timestamp3 = UserContentSettings$Type(closure_1[8]).Timestamp;
          let tmp39 = Timestamp3;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.premiumTier0ModalDismissedAt = Timestamp3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.premiumTier0ModalDismissedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp32 = UserContentSettings$Type;
          let tmp33 = closure_1;
          let Timestamp2 = UserContentSettings$Type(closure_1[8]).Timestamp;
          let tmp34 = Timestamp2;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.guildOnboardingUpsellDismissedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.guildOnboardingUpsellDismissedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp27 = UserContentSettings$Type;
          let tmp28 = closure_1;
          let Timestamp = UserContentSettings$Type(closure_1[8]).Timestamp;
          let tmp29 = Timestamp;
          let tmp30 = pos;
          let tmp31 = readUnknownField;
          obj.safetyUserSentimentNoticeDismissedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.safetyUserSentimentNoticeDismissedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let str5 = pos.fixed64();
          obj.lastReceivedChangelogId = str5.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let binaryReadMap7Result = self.binaryReadMap7(obj.recurringDismissibleContentStates, pos, readUnknownField);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let str4 = pos.fixed64();
          obj.lastGiftIntentDismissedAtMs = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = UserContentSettings$Type;
                let tmp13 = closure_1;
                onRead = UserContentSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap7",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_36;
            internalBinaryReadResult = closure_36.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = int32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_36.create();
      }
      arg0[num] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(dismissedContents, tag, writeUnknownFields) {
      let length;
      if (dismissedContents.dismissedContents.length) {
        tag.tag(1, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).bytes(dismissedContents.dismissedContents);
        const tagResult = tag.tag(1, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (dismissedContents.lastDismissedOutboundPromotionStartDate) {
        const StringValue = UserContentSettings$Type(closure_1[9]).StringValue;
        const tagResult1 = tag.tag(2, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.premiumTier0ModalDismissedAt) {
        const Timestamp = UserContentSettings$Type(closure_1[8]).Timestamp;
        const tagResult2 = tag.tag(3, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.guildOnboardingUpsellDismissedAt) {
        const Timestamp2 = UserContentSettings$Type(closure_1[8]).Timestamp;
        const tagResult3 = tag.tag(4, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.safetyUserSentimentNoticeDismissedAt) {
        const Timestamp3 = UserContentSettings$Type(closure_1[8]).Timestamp;
        const tagResult4 = tag.tag(5, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, UserContentSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== dismissedContents.lastReceivedChangelogId) {
        tag.tag(6, UserContentSettings$Type(closure_1[7]).WireType.Bit64).fixed64(dismissedContents.lastReceivedChangelogId);
        const tagResult5 = tag.tag(6, UserContentSettings$Type(closure_1[7]).WireType.Bit64);
      }
      const keys = Object.keys(dismissedContents.recurringDismissibleContentStates);
      let num17 = 0;
      if (0 < keys.length) {
        do {
          let tmp19 = keys[num17];
          let tmp20 = closure_0;
          let tmp21 = closure_1;
          let tagResult6 = tag.tag(7, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult6.fork();
          let tagResult7 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult7.int32(parseInt(tmp19));
          let tagResult8 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult8.fork();
          let tmp24 = closure_36;
          let internalBinaryWriteResult4 = closure_36.internalBinaryWrite(dismissedContents.recurringDismissibleContentStates[tmp19], tag, writeUnknownFields);
          let joined4 = tag.join();
          let joined5 = joined4.join();
          num17 = num17 + 1;
          length = keys.length;
        } while (num17 < length);
      }
      if ("0" !== dismissedContents.lastGiftIntentDismissedAtMs) {
        tag.tag(8, UserContentSettings$Type(closure_1[7]).WireType.Bit64).fixed64(dismissedContents.lastGiftIntentDismissedAtMs);
        const tagResult9 = tag.tag(8, UserContentSettings$Type(closure_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserContentSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, dismissedContents, tag);
      }
      return tag;
    }
  };
  return callback(UserContentSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp20 = new tmp20();
let tmp22 = (MessageType) => {
  class VideoFilterAsset$Type {
    constructor() {
      tmp = closure_3(this, VideoFilterAsset$Type);
      items = [, ];
      items[0] = {};
      items[1] = {};
      items1 = [true];
      items1[1] = items;
      return closure_82(this, VideoFilterAsset$Type, items1);
    }
  }
  const arg1 = VideoFilterAsset$Type;
  callback3(VideoFilterAsset$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { borderRadius: "Array", width: "isArray" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VideoFilterAsset$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VideoFilterAsset$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VideoFilterAsset$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let str4 = pos.fixed64();
          obj.id = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.assetHash = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = VideoFilterAsset$Type;
                let tmp13 = closure_1;
                onRead = VideoFilterAsset$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if ("0" !== id.id) {
        tag.tag(1, VideoFilterAsset$Type(closure_1[7]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, VideoFilterAsset$Type(closure_1[7]).WireType.Bit64);
      }
      if ("" !== id.assetHash) {
        tag.tag(2, VideoFilterAsset$Type(closure_1[7]).WireType.LengthDelimited).string(id.assetHash);
        const tagResult1 = tag.tag(2, VideoFilterAsset$Type(closure_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VideoFilterAsset$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VideoFilterAsset$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp22 = new tmp22();
let tmp24 = (MessageType) => {
  class VideoFilterBackgroundBlur$Type {
    constructor() {
      tmp = closure_3(this, VideoFilterBackgroundBlur$Type);
      items = [];
      items[0] = {};
      items1 = [null];
      items1[1] = items;
      return closure_82(this, VideoFilterBackgroundBlur$Type, items1);
    }
  }
  const arg1 = VideoFilterBackgroundBlur$Type;
  callback3(VideoFilterBackgroundBlur$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { useBlur: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VideoFilterBackgroundBlur$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VideoFilterBackgroundBlur$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VideoFilterBackgroundBlur$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.useBlur = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = VideoFilterBackgroundBlur$Type;
                let tmp13 = closure_1;
                onRead = VideoFilterBackgroundBlur$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(useBlur, tag, writeUnknownFields) {
      if (false !== useBlur.useBlur) {
        tag.tag(1, VideoFilterBackgroundBlur$Type(closure_1[7]).WireType.Varint).bool(useBlur.useBlur);
        const tagResult = tag.tag(1, VideoFilterBackgroundBlur$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VideoFilterBackgroundBlur$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, useBlur, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VideoFilterBackgroundBlur$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp24 = new tmp24();
let tmp26 = (MessageType) => {
  class VoiceAndVideoSettings$Type {
    constructor() {
      tmp = closure_3(this, VoiceAndVideoSettings$Type);
      obj = { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008629002247043727, "Bool(false)": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002587289237047369, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005964208837436053, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010178887999955602 };
      obj.T = function T() {
        return closure_39;
      };
      items = [, , , , , , , , , ];
      items[0] = obj;
      items[1] = { "Bool(false)": "p\u00F6yt\u00E4tennis", "Bool(false)": "<string:2017525760>", "Bool(false)": "<string:1358954871>", "Bool(false)": "<string:3460367423>", "Bool(false)": "<string:1895825902>" };
      obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
      obj.T = function T() {
        return closure_38;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[4] = {
        T() {
              return callback(closure_1[9]).UInt32Value;
            }
      };
      items[5] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[6] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[7] = {
        T() {
              return closure_64;
            }
      };
      obj1 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj1.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[8] = obj1;
      items[9] = {
        T() {
              return callback(closure_1[9]).FloatValue;
            }
      };
      items1 = [-1623130111];
      items1[1] = items;
      return closure_82(this, VoiceAndVideoSettings$Type, items1);
    }
  }
  const arg1 = VoiceAndVideoSettings$Type;
  callback3(VoiceAndVideoSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { videoBackgroundFilterDesktop: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VoiceAndVideoSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VoiceAndVideoSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VoiceAndVideoSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        const FloatValue = VoiceAndVideoSettings$Type(closure_1[9]).FloatValue;
        obj.soundmojiVolume = FloatValue.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.soundmojiVolume);
        while (true) {
          do {
            let tmp3 = tmp10;
            let tmp4 = tmp11;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(videoBackgroundFilterDesktop, tag, writeUnknownFields) {
      if ("blur" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
        const tagResult = tag.tag(1, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_39.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_39.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("presetOption" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
        tag.tag(2, VoiceAndVideoSettings$Type(closure_1[7]).WireType.Varint).uint32(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.presetOption);
        const tagResult1 = tag.tag(2, VoiceAndVideoSettings$Type(closure_1[7]).WireType.Varint);
      }
      if ("customAsset" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
        const tagResult2 = tag.tag(3, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_38.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_38.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.alwaysPreviewVideo) {
        const BoolValue = VoiceAndVideoSettings$Type(closure_1[9]).BoolValue;
        const tagResult3 = tag.tag(5, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.afkTimeout) {
        const UInt32Value = VoiceAndVideoSettings$Type(closure_1[9]).UInt32Value;
        const tagResult4 = tag.tag(6, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.streamNotificationsEnabled) {
        const BoolValue2 = VoiceAndVideoSettings$Type(closure_1[9]).BoolValue;
        const tagResult5 = tag.tag(7, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled) {
        const BoolValue3 = VoiceAndVideoSettings$Type(closure_1[9]).BoolValue;
        const tagResult6 = tag.tag(8, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.soundboardSettings) {
        const tagResult7 = tag.tag(9, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = closure_64.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_64.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.disableStreamPreviews) {
        const BoolValue4 = VoiceAndVideoSettings$Type(closure_1[9]).BoolValue;
        const tagResult8 = tag.tag(10, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.soundmojiVolume) {
        const FloatValue = VoiceAndVideoSettings$Type(closure_1[9]).FloatValue;
        const tagResult9 = tag.tag(11, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, VoiceAndVideoSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VoiceAndVideoSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, videoBackgroundFilterDesktop, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VoiceAndVideoSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp26 = new tmp26();
let tmp28 = (MessageType) => {
  class ExplicitContentSettings$Type {
    constructor() {
      tmp = closure_3(this, ExplicitContentSettings$Type);
      obj = {
        T() {
              const items = [false, closure_9];
              return items;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              const items = [false, closure_9];
              return items;
            }
      };
      obj = { -111020099: 39.427, 1351895378: 3, 1456955659: "use_thread_sidebar" };
      obj.T = function T() {
        const items = [false, closure_9];
        return items;
      };
      items[2] = obj;
      items1 = [1916862465];
      items1[1] = items;
      return closure_82(this, ExplicitContentSettings$Type, items1);
    }
  }
  const arg1 = ExplicitContentSettings$Type;
  callback3(ExplicitContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { MAX_GROUP_DM_STAFF_PARTICIPANTS: "spring", MULTI_ACCOUNT_TOOLTIP: 0.4, getImageSourcesFromImageProps: 1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ExplicitContentSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ExplicitContentSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ExplicitContentSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.explicitContentGuilds = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.explicitContentFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.explicitContentNonFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ExplicitContentSettings$Type;
                let tmp13 = closure_1;
                onRead = ExplicitContentSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(explicitContentGuilds, tag, writeUnknownFields) {
      if (0 !== explicitContentGuilds.explicitContentGuilds) {
        tag.tag(1, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentGuilds);
        const tagResult = tag.tag(1, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== explicitContentGuilds.explicitContentFriendDm) {
        tag.tag(2, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentFriendDm);
        const tagResult1 = tag.tag(2, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== explicitContentGuilds.explicitContentNonFriendDm) {
        tag.tag(3, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentNonFriendDm);
        const tagResult2 = tag.tag(3, ExplicitContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ExplicitContentSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, explicitContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ExplicitContentSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp28 = new tmp28();
let tmp30 = (MessageType) => {
  class GoreContentSettings$Type {
    constructor() {
      tmp = closure_3(this, GoreContentSettings$Type);
      obj = {
        T() {
              const items = [false, closure_9];
              return items;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              const items = [false, closure_9];
              return items;
            }
      };
      obj = { -111020099: "isArray", 1351895378: "body", 1456955659: "message" };
      obj.T = function T() {
        const items = [false, closure_9];
        return items;
      };
      items[2] = obj;
      items1 = [false];
      items1[1] = items;
      return closure_82(this, GoreContentSettings$Type, items1);
    }
  }
  const arg1 = GoreContentSettings$Type;
  callback3(GoreContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GoreContentSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GoreContentSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GoreContentSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.goreContentGuilds = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.goreContentFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.goreContentNonFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = GoreContentSettings$Type;
                let tmp13 = closure_1;
                onRead = GoreContentSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(goreContentGuilds, tag, writeUnknownFields) {
      if (0 !== goreContentGuilds.goreContentGuilds) {
        tag.tag(1, GoreContentSettings$Type(closure_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentGuilds);
        const tagResult = tag.tag(1, GoreContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== goreContentGuilds.goreContentFriendDm) {
        tag.tag(2, GoreContentSettings$Type(closure_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentFriendDm);
        const tagResult1 = tag.tag(2, GoreContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== goreContentGuilds.goreContentNonFriendDm) {
        tag.tag(3, GoreContentSettings$Type(closure_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentNonFriendDm);
        const tagResult2 = tag.tag(3, GoreContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GoreContentSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, goreContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GoreContentSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp30 = new tmp30();
let tmp32 = (MessageType) => {
  class SelfHarmContentSettings$Type {
    constructor() {
      tmp = closure_3(this, SelfHarmContentSettings$Type);
      obj = { -111020099: 10, 1351895378: 100, 1456955659: true };
      obj.T = function T() {
        const items = [false, closure_9];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        const items = [false, closure_9];
        return items;
      };
      items[1] = obj;
      items[2] = {
        T() {
              const items = [false, closure_9];
              return items;
            }
      };
      items1 = ["isArray"];
      items1[1] = items;
      return closure_82(this, SelfHarmContentSettings$Type, items1);
    }
  }
  const arg1 = SelfHarmContentSettings$Type;
  callback3(SelfHarmContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { typingIndicatorLayout: "spring", changedStores: 0.4, ctaOnHover: 1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SelfHarmContentSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SelfHarmContentSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SelfHarmContentSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.selfHarmContentGuilds = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.selfHarmContentFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.selfHarmContentNonFriendDm = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = SelfHarmContentSettings$Type;
                let tmp13 = closure_1;
                onRead = SelfHarmContentSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(selfHarmContentGuilds, tag, writeUnknownFields) {
      if (0 !== selfHarmContentGuilds.selfHarmContentGuilds) {
        tag.tag(1, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentGuilds);
        const tagResult = tag.tag(1, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== selfHarmContentGuilds.selfHarmContentFriendDm) {
        tag.tag(2, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentFriendDm);
        const tagResult1 = tag.tag(2, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== selfHarmContentGuilds.selfHarmContentNonFriendDm) {
        tag.tag(3, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentNonFriendDm);
        const tagResult2 = tag.tag(3, SelfHarmContentSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SelfHarmContentSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, selfHarmContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SelfHarmContentSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp32 = new tmp32();
let tmp34 = (MessageType) => {
  class KeywordFilterSettings$Type {
    constructor() {
      tmp = closure_3(this, KeywordFilterSettings$Type);
      obj = { -111020099: 24199092, 1351895378: 1090519040, 1456955659: 297764 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj = { -111020099: "body", 1351895378: "message", 1456955659: "construct" };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[2] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_82(this, KeywordFilterSettings$Type, items1);
    }
  }
  const arg1 = KeywordFilterSettings$Type;
  callback3(KeywordFilterSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, KeywordFilterSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = KeywordFilterSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = KeywordFilterSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = KeywordFilterSettings$Type;
          let tmp37 = closure_1;
          let BoolValue3 = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
          let tmp38 = BoolValue3;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.profanity = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.profanity);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = KeywordFilterSettings$Type;
          let tmp32 = closure_1;
          let BoolValue2 = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.sexualContent = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.sexualContent);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = KeywordFilterSettings$Type;
          let tmp27 = closure_1;
          let BoolValue = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.slurs = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.slurs);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = KeywordFilterSettings$Type;
                let tmp13 = closure_1;
                onRead = KeywordFilterSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(profanity, tag, writeUnknownFields) {
      if (profanity.profanity) {
        const BoolValue = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (profanity.sexualContent) {
        const BoolValue2 = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (profanity.slurs) {
        const BoolValue3 = KeywordFilterSettings$Type(closure_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, KeywordFilterSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = KeywordFilterSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, profanity, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(KeywordFilterSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp34 = new tmp34();
let tmp36 = (MessageType) => {
  class TextAndImagesSettings$Type {
    constructor() {
      tmp = closure_3(this, TextAndImagesSettings$Type);
      obj = { -111020099: 0.16, 1351895378: "PLUM_11", 1456955659: 0.12 };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { -111020099: "<string:1908039936>", 1351895378: "max", 1456955659: "<string:34193217>" };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[1] = obj;
      obj1 = { -111020099: "<string:28991744>", 1351895378: "<string:80993345>", 1456955659: "<string:2586906880>" };
      obj1.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[2] = obj1;
      obj2 = { -111020099: "container", 1351895378: "LIGHT", 1456955659: "guild_id" };
      obj2.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[3] = obj2;
      items[4] = {};
      items[5] = {};
      obj3 = { -111020099: -100951520295231700000000000000000000000000000000000000000000000000000000, 1351895378: -52797945420446120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1456955659: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023534381978647772 };
      obj3.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[6] = obj3;
      obj4 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj4.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[7] = obj4;
      obj5 = { -111020099: "OPACITY_20", 1351895378: 0.2, 1456955659: 10 };
      obj5.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[8] = obj5;
      obj6 = { -111020099: 11377, 1351895378: 1156272384, 1456955659: 24188481 };
      obj6.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[9] = obj6;
      obj7 = { -111020099: "include_stickers_in_autocomplete", 1351895378: "message", 1456955659: 29 };
      obj7.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[10] = obj7;
      obj8 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj8.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[11] = obj8;
      items[12] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj9 = { -111020099: "absolute", 1351895378: 0, 1456955659: 0 };
      obj9.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[13] = obj9;
      items[14] = {
        T() {
              return callback(closure_1[9]).UInt32Value;
            }
      };
      items[15] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj10 = { -111020099: false, 1351895378: false, 1456955659: false };
      obj10.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[16] = obj10;
      items[17] = {
        T() {
              return callback(closure_1[9]).UInt32Value;
            }
      };
      items[18] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[19] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[20] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[21] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[22] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[23] = { 0: false, 0: false, 0: false, 0: false, -9223372036854775808: false };
      obj11 = { -111020099: 1032132224412246400000000, 1351895378: 131072.01779416887, 1456955659: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025575412232871304 };
      obj11.T = function T() {
        return callback(closure_1[9]).UInt32Value;
      };
      items[24] = obj11;
      obj12 = { -111020099: "search_provider", 1351895378: "enum", 1456955659: null };
      obj12.T = function T() {
        const items = [null, closure_10];
        return items;
      };
      items[25] = obj12;
      obj13 = { -111020099: "Array", 1351895378: "isArray", 1456955659: "body" };
      obj13.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[26] = obj13;
      obj14 = { -111020099: "center", 1351895378: "center", 1456955659: 32 };
      obj14.T = function T() {
        return closure_41;
      };
      items[27] = obj14;
      items[28] = {
        T() {
              return closure_44;
            }
      };
      items[29] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[30] = {
        T() {
              return closure_42;
            }
      };
      items[31] = {
        T() {
              return closure_79;
            }
      };
      obj15 = { -111020099: -0.000030517578125, 1351895378: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000093633631737465, 1456955659: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000219881742647816 };
      obj15.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[32] = obj15;
      items[33] = {
        T() {
              return closure_43;
            }
      };
      items[34] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj16 = { -111020099: "he", 1351895378: "<string:2510110976>", 1456955659: "<string:3126919170>" };
      obj16.T = function T() {
        const items = ["Array", closure_14, "SEARCH_PROVIDER_"];
        return items;
      };
      items[35] = obj16;
      obj17 = { -111020099: 6, 1351895378: null, 1456955659: 2 };
      obj17.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[36] = obj17;
      obj18 = { -111020099: "getApplicationInstallURL", 1351895378: "MemberSafetyPagePermissions", 1456955659: "call" };
      obj18.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[37] = obj18;
      items1 = [null];
      items1[1] = items;
      return closure_82(this, TextAndImagesSettings$Type, items1);
    }
  }
  const arg1 = TextAndImagesSettings$Type;
  callback3(TextAndImagesSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojiPickerCollapsedSections: [], stickerPickerCollapsedSections: [], soundboardPickerCollapsedSections: [], dmSpamFilterV2: 0, searchProvider: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TextAndImagesSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TextAndImagesSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = TextAndImagesSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      if (pos.pos < pos.pos + arg1) {
        [r10026, r10027] = callback(pos.tag(), 2);
        const tmp3 = callback(pos.tag(), 2);
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(diversitySurrogate, tag, writeUnknownFields) {
      let length;
      let length2;
      let length3;
      if (diversitySurrogate.diversitySurrogate) {
        let joined27 = TextAndImagesSettings$Type;
        const StringValue = TextAndImagesSettings$Type(closure_1[9]).StringValue;
        const tagResult = tag.tag(1, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useRichChatInput) {
        const BoolValue = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useThreadSidebar) {
        const BoolValue2 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderSpoilers) {
        const StringValue2 = TextAndImagesSettings$Type(closure_1[9]).StringValue;
        const tagResult3 = tag.tag(4, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let num13 = 0;
      if (0 < diversitySurrogate.emojiPickerCollapsedSections.length) {
        do {
          let tmp13 = closure_0;
          let tmp14 = closure_1;
          let tagResult4 = tag.tag(5, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult4.string(diversitySurrogate.emojiPickerCollapsedSections[num13]);
          num13 = num13 + 1;
          length = diversitySurrogate.emojiPickerCollapsedSections.length;
        } while (num13 < length);
      }
      let num14 = 0;
      if (0 < diversitySurrogate.stickerPickerCollapsedSections.length) {
        do {
          let tmp16 = closure_0;
          let tmp17 = closure_1;
          let tagResult5 = tag.tag(6, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult1 = tagResult5.string(diversitySurrogate.stickerPickerCollapsedSections[num14]);
          num14 = num14 + 1;
          length2 = diversitySurrogate.stickerPickerCollapsedSections.length;
        } while (num14 < length2);
      }
      if (diversitySurrogate.viewImageDescriptions) {
        const BoolValue3 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult6 = tag.tag(7, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.showCommandSuggestions) {
        const BoolValue4 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult7 = tag.tag(8, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.inlineAttachmentMedia) {
        const BoolValue5 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult8 = tag.tag(9, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.inlineEmbedMedia) {
        const BoolValue6 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult9 = tag.tag(10, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.gifAutoPlay) {
        const BoolValue7 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult10 = tag.tag(11, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderEmbeds) {
        const BoolValue8 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult11 = tag.tag(12, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderReactions) {
        const BoolValue9 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult12 = tag.tag(13, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.animateEmoji) {
        const BoolValue10 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult13 = tag.tag(14, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.animateStickers) {
        const UInt32Value = TextAndImagesSettings$Type(closure_1[9]).UInt32Value;
        const tagResult14 = tag.tag(15, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.enableTtsCommand) {
        const BoolValue11 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult15 = tag.tag(16, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.messageDisplayCompact) {
        const BoolValue12 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult16 = tag.tag(17, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.explicitContentFilter) {
        const UInt32Value2 = TextAndImagesSettings$Type(closure_1[9]).UInt32Value;
        const tagResult17 = tag.tag(19, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.viewNsfwGuilds) {
        const BoolValue13 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult18 = tag.tag(20, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.convertEmoticons) {
        const BoolValue14 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult19 = tag.tag(21, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.expressionSuggestionsEnabled) {
        const BoolValue15 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult20 = tag.tag(22, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.viewNsfwCommands) {
        const BoolValue16 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult21 = tag.tag(23, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useLegacyChatInput) {
        const BoolValue17 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult22 = tag.tag(24, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let num47 = 0;
      if (0 < diversitySurrogate.soundboardPickerCollapsedSections.length) {
        do {
          let tmp70 = closure_0;
          let tmp71 = closure_1;
          let tagResult23 = tag.tag(25, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult2 = tagResult23.string(diversitySurrogate.soundboardPickerCollapsedSections[num47]);
          num47 = num47 + 1;
          length3 = diversitySurrogate.soundboardPickerCollapsedSections.length;
        } while (num47 < length3);
      }
      if (diversitySurrogate.dmSpamFilter) {
        const UInt32Value3 = TextAndImagesSettings$Type(closure_1[9]).UInt32Value;
        const tagResult24 = tag.tag(26, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== diversitySurrogate.dmSpamFilterV2) {
        tag.tag(27, TextAndImagesSettings$Type(closure_1[7]).WireType.Varint).int32(diversitySurrogate.dmSpamFilterV2);
        const tagResult25 = tag.tag(27, TextAndImagesSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (diversitySurrogate.includeStickersInAutocomplete) {
        const BoolValue18 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult26 = tag.tag(28, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.explicitContentSettings) {
        const tagResult27 = tag.tag(29, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined23 = closure_41.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult23 = closure_41.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.keywordFilterSettings) {
        const tagResult28 = tag.tag(30, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined24 = closure_44.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult24 = closure_44.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.includeSoundmojiInAutocomplete) {
        const BoolValue19 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult29 = tag.tag(31, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.goreContentSettings) {
        const tagResult30 = tag.tag(32, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined26 = closure_42.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult26 = closure_42.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.defaultReactionEmoji) {
        const tagResult31 = tag.tag(33, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = closure_79.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult27 = closure_79.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.showMentionSuggestions) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        const BoolValue20 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult32 = tag.tag(34, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult28 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.selfHarmContentSettings) {
        joined27 = closure_43;
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        const tagResult33 = tag.tag(35, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = closure_43.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult29 = closure_43.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.isCrossDmSearchEnabled) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        const BoolValue21 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult34 = tag.tag(36, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult30 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== diversitySurrogate.searchProvider) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        joined27 = tag.tag(37, TextAndImagesSettings$Type(closure_1[7]).WireType.Varint).int32(diversitySurrogate.searchProvider);
        const tagResult35 = tag.tag(37, TextAndImagesSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (diversitySurrogate.customSearchUrl) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        const StringValue3 = TextAndImagesSettings$Type(closure_1[9]).StringValue;
        const tagResult36 = tag.tag(38, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult31 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.includeGameMentionsInAutocomplete) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = closure_1;
        const BoolValue22 = TextAndImagesSettings$Type(closure_1[9]).BoolValue;
        const tagResult37 = tag.tag(39, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult32 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, TextAndImagesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined27 = TextAndImagesSettings$Type;
          joined27 = closure_1;
          onWrite = TextAndImagesSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined27 = onWrite(this.typeName, diversitySurrogate, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TextAndImagesSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp36 = new tmp36();
let tmp38 = (MessageType) => {
  class NotificationSettings$Type {
    constructor() {
      tmp = closure_3(this, NotificationSettings$Type);
      obj = { -111020099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010061167375701895, 1351895378: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001039122233947381, 1456955659: 19991592254253774000000000000000000000 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[2] = {};
      obj = { -111020099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009914609880986467, 1351895378: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005071676452183335, 1456955659: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002353437368277195 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[3] = obj;
      items[4] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[5] = {};
      obj1 = { -111020099: "message", 1351895378: null, 1456955659: "\u{1F617}" };
      obj1.T = function T() {
        const items = [, closure_11];
        return items;
      };
      items[6] = obj1;
      obj2 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj2.T = function T() {
        const items = [, closure_12];
        return items;
      };
      items[7] = obj2;
      obj3 = { -111020099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000533995068880054, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000476266043845, 1456955659: 687089562914010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj3.T = function T() {
        const items = [, closure_13];
        return items;
      };
      items[8] = obj3;
      items[9] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj4 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj4.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[10] = obj4;
      obj5 = { -111020099: "w", 1351895378: "Array", 1456955659: "isArray" };
      obj5.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[11] = obj5;
      obj6 = { -111020099: 1921633215, 1351895378: 1, 1456955659: null };
      obj6.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[12] = obj6;
      items[13] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[14] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[15] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[16] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj7 = { -111020099: "<string:1358955029>", 1351895378: "external", 1456955659: "<string:748503296>" };
      obj7.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[17] = obj7;
      obj8 = { -111020099: "favorite_soundboard_sounds", 1351895378: "message", 1456955659: null };
      obj8.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[18] = obj8;
      obj9 = { -111020099: null, 1351895378: "\u{1F9B5}\u{1F3FB}", 1456955659: true };
      obj9.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[19] = obj9;
      items[20] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj10 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj10.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[21] = obj10;
      items[22] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[23] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[24] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, NotificationSettings$Type, items1);
    }
  }
  const arg1 = NotificationSettings$Type;
  callback3(NotificationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, NotificationSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = NotificationSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = NotificationSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        const BoolValue = NotificationSettings$Type(closure_1[9]).BoolValue;
        obj.notifyFriendsOnComeOnline = BoolValue.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.notifyFriendsOnComeOnline);
        while (true) {
          do {
            let tmp3 = tmp10;
            let tmp4 = tmp11;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(showInAppNotifications, tag, writeUnknownFields) {
      if (showInAppNotifications.showInAppNotifications) {
        const BoolValue = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnGoLive) {
        const BoolValue2 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== showInAppNotifications.notificationCenterAckedBeforeId) {
        tag.tag(3, NotificationSettings$Type(closure_1[7]).WireType.Bit64).fixed64(showInAppNotifications.notificationCenterAckedBeforeId);
        const tagResult2 = tag.tag(3, NotificationSettings$Type(closure_1[7]).WireType.Bit64);
      }
      if (showInAppNotifications.enableBurstReactionNotifications) {
        const BoolValue3 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.quietMode) {
        const BoolValue4 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult4 = tag.tag(5, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== showInAppNotifications.focusModeExpiresAtMs) {
        tag.tag(6, NotificationSettings$Type(closure_1[7]).WireType.Bit64).fixed64(showInAppNotifications.focusModeExpiresAtMs);
        const tagResult5 = tag.tag(6, NotificationSettings$Type(closure_1[7]).WireType.Bit64);
      }
      if (0 !== showInAppNotifications.reactionNotifications) {
        tag.tag(7, NotificationSettings$Type(closure_1[7]).WireType.Varint).int32(showInAppNotifications.reactionNotifications);
        const tagResult6 = tag.tag(7, NotificationSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== showInAppNotifications.gameActivityNotifications) {
        tag.tag(8, NotificationSettings$Type(closure_1[7]).WireType.Varint).int32(showInAppNotifications.gameActivityNotifications);
        const tagResult7 = tag.tag(8, NotificationSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== showInAppNotifications.customStatusPushNotifications) {
        tag.tag(9, NotificationSettings$Type(closure_1[7]).WireType.Varint).int32(showInAppNotifications.customStatusPushNotifications);
        const tagResult8 = tag.tag(9, NotificationSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (showInAppNotifications.gameActivityExcludeSteamNotifications) {
        const BoolValue5 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult9 = tag.tag(10, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableVoiceActivityNotifications) {
        const BoolValue6 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult10 = tag.tag(11, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendOnlineNotifications) {
        const BoolValue7 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult11 = tag.tag(12, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableUserResurrectionNotifications) {
        const BoolValue8 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult12 = tag.tag(13, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendAnniversaryNotifications) {
        const BoolValue9 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult13 = tag.tag(14, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableGameUpdateNotifications) {
        const BoolValue10 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult14 = tag.tag(15, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableProfileUpdatesNotifications) {
        const BoolValue11 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult15 = tag.tag(16, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableServerTrendingNotifications) {
        const BoolValue12 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult16 = tag.tag(17, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableDmReplyNudgeReminders) {
        const BoolValue13 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult17 = tag.tag(18, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableSummaryReminderNotifications) {
        const BoolValue14 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult18 = tag.tag(19, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableGdmAllReactionNotifications) {
        const BoolValue15 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult19 = tag.tag(20, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendGamingActivityNotifications) {
        const BoolValue16 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult20 = tag.tag(21, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableUpcomingServerEventNotifications) {
        const BoolValue17 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult21 = tag.tag(22, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableScreenDowntimeScheduleNotifications) {
        const BoolValue18 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult22 = tag.tag(23, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnProfileUpdate) {
        const BoolValue19 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult23 = tag.tag(24, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnComeOnline) {
        const BoolValue20 = NotificationSettings$Type(closure_1[9]).BoolValue;
        const tagResult24 = tag.tag(25, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, NotificationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = NotificationSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, showInAppNotifications, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(NotificationSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp38 = new tmp38();
let tmp40 = (MessageType) => {
  class PrivacySettings$Type {
    constructor() {
      tmp = closure_3(this, PrivacySettings$Type);
      obj = { -111020099: "Array", 1351895378: "isArray", 1456955659: "clearAll" };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { -111020099: -258010712320963400000000000000000000000000000000000000000000000000000000000000000000, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029821900287866674, 1456955659: 1758525889201822700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[1] = obj;
      items[2] = {};
      items[3] = {};
      items[4] = {};
      obj1 = { -111020099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005997767603028026, 1351895378: 0.00000000000024511731152435373, 1456955659: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008629002247043727 };
      obj1.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[5] = obj1;
      items[6] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[7] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[8] = {
        T() {
              return callback(closure_1[9]).UInt32Value;
            }
      };
      obj2 = { -111020099: "isArray", 1351895378: "body", 1456955659: "message" };
      obj2.T = function T() {
        return callback(closure_1[9]).UInt32Value;
      };
      items[9] = obj2;
      items[10] = { 0: true, 0: true, 0: true, 0: true, -9223372036854775808: true };
      obj3 = { -111020099: "message", 1351895378: null, 1456955659: 10 };
      obj3.T = function T() {
        const items = [, closure_15];
        return items;
      };
      items[11] = obj3;
      items[12] = { 0: null, 0: null, 0: null, 0: null, -9223372036854775808: null };
      items[13] = { 0: false, 0: false, 0: false, 0: false, -9223372036854775808: false };
      obj4 = { -111020099: 32, 1351895378: "profile_visibility", 1456955659: "enum" };
      obj4.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[14] = obj4;
      obj5 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj5.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[15] = obj5;
      obj6 = { -111020099: "row", 1351895378: "center", 1456955659: 2 };
      obj6.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[16] = obj6;
      items[17] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj7 = { -111020099: 0, 1351895378: -39.573, 1456955659: 3 };
      obj7.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[18] = obj7;
      obj8 = { -111020099: "p\u016Fl \u010Dtvrt\u00E9", 1351895378: "<string:826343424>", 1456955659: "<string:1627390278>" };
      obj8.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[19] = obj8;
      obj9 = { -111020099: "message", 1351895378: "text-md/semibold", 1456955659: "text-default" };
      obj9.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[20] = obj9;
      obj10 = { -111020099: -195022827104780130000000000000000000000000000000000000000000000000000000000000000, 1351895378: -4230758200257680000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1456955659: 0.00000000000000000000000000000000000000000000000000000000000004667256320606376 };
      obj10.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[21] = obj10;
      items[22] = {
        T() {
              const items = [, closure_17];
              return items;
            }
      };
      items[23] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj11 = { -111020099: 0, 1351895378: -805306363, 1456955659: 1090519042 };
      obj11.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[24] = obj11;
      items[25] = {
        T() {
              const items = [, closure_18];
              return items;
            }
      };
      items[26] = {
        T() {
              const items = [, closure_16];
              return items;
            }
      };
      obj12 = { "Bool(false)": "<string:141658571>", "Bool(false)": "<string:1090519040>", "Bool(false)": "body_localized", "Bool(false)": "<string:2319563361>" };
      obj12.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[27] = obj12;
      obj13 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj13.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[28] = obj13;
      obj14 = { -111020099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015829757569387429, 1351895378: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021360709041669133, 1456955659: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003914391401053745 };
      obj14.T = function T() {
        const items = [, closure_19, "PROFILE_VISIBILITY_"];
        return items;
      };
      items[29] = obj14;
      items[30] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, PrivacySettings$Type, items1);
    }
  }
  const arg1 = PrivacySettings$Type;
  callback3(PrivacySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 140686073: "HTTP", -73316248: "Date", -1080173920: "HTTP", 1409835272: "jsxs", 63019592: "rejectWithError", restrictedGuildIds: [], activityRestrictedGuildIds: [], activityJoiningRestrictedGuildIds: [], messageRequestRestrictedGuildIds: [], guildsLeaderboardOptOutDefault: 0, slayerSdkReceiveDmsInGame: 0, defaultGuildsActivityRestrictedV2: 0, profileVisibility: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PrivacySettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PrivacySettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PrivacySettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        const BoolValue = PrivacySettings$Type(closure_1[9]).BoolValue;
        obj.hideFriendRequestNotes = BoolValue.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.hideFriendRequestNotes);
        while (true) {
          do {
            let tmp3 = tmp14;
            let tmp4 = tmp15;
            let tmp5 = tmp16;
            let tmp6 = tmp17;
            let tmp7 = tmp18;
            let tmp8 = tmp19;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowActivityPartyPrivacyFriends, tag, writeUnknownFields) {
      let length;
      let length2;
      let length3;
      let length4;
      if (allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends) {
        let joined23 = PrivacySettings$Type;
        const BoolValue = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel) {
        const BoolValue2 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
        tag.tag(3, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num9 = 0;
        if (0 < allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
          do {
            let fixed64Result = tag.fixed64(allowActivityPartyPrivacyFriends.restrictedGuildIds[num9]);
            num9 = num9 + 1;
            length = allowActivityPartyPrivacyFriends.restrictedGuildIds.length;
          } while (num9 < length);
        }
        const joined2 = tag.join();
        const tagResult2 = tag.tag(3, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (false !== allowActivityPartyPrivacyFriends.defaultGuildsRestricted) {
        tag.tag(4, PrivacySettings$Type(closure_1[7]).WireType.Varint).bool(allowActivityPartyPrivacyFriends.defaultGuildsRestricted);
        const tagResult3 = tag.tag(4, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== allowActivityPartyPrivacyFriends.allowAccessibilityDetection) {
        tag.tag(7, PrivacySettings$Type(closure_1[7]).WireType.Varint).bool(allowActivityPartyPrivacyFriends.allowAccessibilityDetection);
        const tagResult4 = tag.tag(7, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.detectPlatformAccounts) {
        const BoolValue3 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult5 = tag.tag(8, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.passwordless) {
        const BoolValue4 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult6 = tag.tag(9, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.contactSyncEnabled) {
        const BoolValue5 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult7 = tag.tag(10, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.friendSourceFlags) {
        const UInt32Value = PrivacySettings$Type(closure_1[9]).UInt32Value;
        const tagResult8 = tag.tag(11, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.friendDiscoveryFlags) {
        const UInt32Value2 = PrivacySettings$Type(closure_1[9]).UInt32Value;
        const tagResult9 = tag.tag(12, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
        tag.tag(13, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num29 = 0;
        if (0 < allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
          do {
            let fixed64Result1 = tag.fixed64(allowActivityPartyPrivacyFriends.activityRestrictedGuildIds[num29]);
            num29 = num29 + 1;
            length2 = allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length;
          } while (num29 < length2);
        }
        const joined8 = tag.join();
        const tagResult10 = tag.tag(13, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted) {
        tag.tag(14, PrivacySettings$Type(closure_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted);
        const tagResult11 = tag.tag(14, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
        tag.tag(15, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num34 = 0;
        if (0 < allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
          do {
            let fixed64Result2 = tag.fixed64(allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds[num34]);
            num34 = num34 + 1;
            length3 = allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length;
          } while (num34 < length3);
        }
        const joined9 = tag.join();
        const tagResult12 = tag.tag(15, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
        tag.tag(16, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num37 = 0;
        if (0 < allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
          do {
            let fixed64Result3 = tag.fixed64(allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds[num37]);
            num37 = num37 + 1;
            length4 = allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length;
          } while (num37 < length4);
        }
        const joined10 = tag.join();
        const tagResult13 = tag.tag(16, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted) {
        const BoolValue6 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult14 = tag.tag(17, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.dropsOptedOut) {
        const BoolValue7 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult15 = tag.tag(18, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined12 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn) {
        const BoolValue8 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult16 = tag.tag(19, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.familyCenterEnabled) {
        const BoolValue9 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult17 = tag.tag(20, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.familyCenterEnabledV2) {
        const BoolValue10 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult18 = tag.tag(21, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined15 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.hideLegacyUsername) {
        const BoolValue11 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult19 = tag.tag(22, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.inappropriateConversationWarnings) {
        const BoolValue12 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult20 = tag.tag(23, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.recentGamesEnabled) {
        const BoolValue13 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult21 = tag.tag(24, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault) {
        tag.tag(25, PrivacySettings$Type(closure_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault);
        const tagResult22 = tag.tag(25, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord) {
        const BoolValue14 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult23 = tag.tag(26, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2) {
        const BoolValue15 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult24 = tag.tag(27, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined20 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame) {
        tag.tag(28, PrivacySettings$Type(closure_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame);
        const tagResult25 = tag.tag(28, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2) {
        tag.tag(29, PrivacySettings$Type(closure_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2);
        const tagResult26 = tag.tag(29, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.quests3PDataOptedOut) {
        const BoolValue16 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult27 = tag.tag(30, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined21 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.showLocalTime) {
        const BoolValue17 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult28 = tag.tag(31, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined22 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.profileVisibility) {
        tag.tag(32, PrivacySettings$Type(closure_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.profileVisibility);
        const tagResult29 = tag.tag(32, PrivacySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.hideFriendRequestNotes) {
        joined23 = closure_1;
        const BoolValue18 = PrivacySettings$Type(closure_1[9]).BoolValue;
        const tagResult30 = tag.tag(33, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited);
        joined23 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, PrivacySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined23 = PrivacySettings$Type;
          joined23 = closure_1;
          onWrite = PrivacySettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined23 = onWrite(this.typeName, allowActivityPartyPrivacyFriends, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PrivacySettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp40 = new tmp40();
let tmp42 = (MessageType) => {
  class DebugSettings$Type {
    constructor() {
      tmp = closure_3(this, DebugSettings$Type);
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, DebugSettings$Type, items1);
    }
  }
  const arg1 = DebugSettings$Type;
  callback3(DebugSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DebugSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DebugSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = DebugSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = DebugSettings$Type;
          let tmp27 = closure_1;
          let BoolValue = DebugSettings$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.rtcPanelShowVoiceStates = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.rtcPanelShowVoiceStates);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = DebugSettings$Type;
                let tmp13 = closure_1;
                onRead = DebugSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(rtcPanelShowVoiceStates, tag, writeUnknownFields) {
      if (rtcPanelShowVoiceStates.rtcPanelShowVoiceStates) {
        const BoolValue = DebugSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, DebugSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, DebugSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, DebugSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DebugSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, rtcPanelShowVoiceStates, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DebugSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp42 = new tmp42();
let tmp44 = (MessageType) => {
  class GameLibrarySettings$Type {
    constructor() {
      tmp = closure_3(this, GameLibrarySettings$Type);
      obj = { -111020099: "PLUM_11", 1351895378: 0.2, 1456955659: 1 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      obj = { -111020099: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013262474093524, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006498508433974393, 1456955659: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002812307629604123 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[2] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, GameLibrarySettings$Type, items1);
    }
  }
  const arg1 = GameLibrarySettings$Type;
  callback3(GameLibrarySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GameLibrarySettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GameLibrarySettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GameLibrarySettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = GameLibrarySettings$Type;
          let tmp37 = closure_1;
          let BoolValue3 = GameLibrarySettings$Type(closure_1[9]).BoolValue;
          let tmp38 = BoolValue3;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.installShortcutDesktop = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutDesktop);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = GameLibrarySettings$Type;
          let tmp32 = closure_1;
          let BoolValue2 = GameLibrarySettings$Type(closure_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.installShortcutStartMenu = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutStartMenu);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = GameLibrarySettings$Type;
          let tmp27 = closure_1;
          let BoolValue = GameLibrarySettings$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.disableGamesTab = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableGamesTab);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = GameLibrarySettings$Type;
                let tmp13 = closure_1;
                onRead = GameLibrarySettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(installShortcutDesktop, tag, writeUnknownFields) {
      if (installShortcutDesktop.installShortcutDesktop) {
        const BoolValue = GameLibrarySettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (installShortcutDesktop.installShortcutStartMenu) {
        const BoolValue2 = GameLibrarySettings$Type(closure_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (installShortcutDesktop.disableGamesTab) {
        const BoolValue3 = GameLibrarySettings$Type(closure_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, GameLibrarySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GameLibrarySettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, installShortcutDesktop, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GameLibrarySettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp44 = new tmp44();
let tmp46 = (MessageType) => {
  class StatusSettings$Type {
    constructor() {
      tmp = closure_3(this, StatusSettings$Type);
      obj = {
        T() {
              return callback(closure_1[9]).StringValue;
            }
      };
      items = [, , , , ];
      items[0] = obj;
      items[1] = {
        T() {
              return closure_51;
            }
      };
      obj = { -111020099: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000444696450543367, 1351895378: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036368515340995, 1456955659: 203702216403333100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[2] = obj;
      items[3] = {};
      obj1 = { -111020099: "Array", 1351895378: "isArray", 1456955659: "clearAll" };
      obj1.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items[4] = obj1;
      items1 = [];
      items1[1] = items;
      return closure_82(this, StatusSettings$Type, items1);
    }
  }
  const arg1 = StatusSettings$Type;
  callback3(StatusSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { statusExpiresAtMs: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StatusSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StatusSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = StatusSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp40 = StatusSettings$Type;
          let tmp41 = closure_1;
          let StringValue = StatusSettings$Type(closure_1[9]).StringValue;
          let tmp42 = StringValue;
          let tmp43 = pos;
          let tmp44 = readUnknownField;
          obj.status = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.status);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = closure_51;
          let tmp37 = closure_51;
          let tmp38 = pos;
          let tmp39 = readUnknownField;
          obj.customStatus = closure_51.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customStatus);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = StatusSettings$Type;
          let tmp32 = closure_1;
          let BoolValue = StatusSettings$Type(closure_1[9]).BoolValue;
          let tmp33 = BoolValue;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.showCurrentGame = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.showCurrentGame);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str4 = pos.fixed64();
          obj.statusExpiresAtMs = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = StatusSettings$Type;
          let tmp27 = closure_1;
          let UInt64Value = StatusSettings$Type(closure_1[9]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.statusCreatedAtMs = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.statusCreatedAtMs);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = StatusSettings$Type;
                let tmp13 = closure_1;
                onRead = StatusSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(status, tag, writeUnknownFields) {
      if (status.status) {
        const StringValue = StatusSettings$Type(closure_1[9]).StringValue;
        const tagResult = tag.tag(1, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(status.status, tag.tag(1, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(status.status, tag.tag(1, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (status.customStatus) {
        const tagResult1 = tag.tag(2, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_51.internalBinaryWrite(status.customStatus, tag.tag(2, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_51.internalBinaryWrite(status.customStatus, tag.tag(2, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (status.showCurrentGame) {
        const BoolValue = StatusSettings$Type(closure_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== status.statusExpiresAtMs) {
        tag.tag(4, StatusSettings$Type(closure_1[7]).WireType.Bit64).fixed64(status.statusExpiresAtMs);
        const tagResult3 = tag.tag(4, StatusSettings$Type(closure_1[7]).WireType.Bit64);
      }
      if (status.statusCreatedAtMs) {
        const UInt64Value = StatusSettings$Type(closure_1[9]).UInt64Value;
        const tagResult4 = tag.tag(5, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, StatusSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StatusSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, status, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(StatusSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp46 = new tmp46();
let tmp48 = (MessageType) => {
  class CustomStatus$Type {
    constructor() {
      tmp = closure_3(this, CustomStatus$Type);
      items = [, , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items[4] = {};
      obj = { -111020099: "enable_friend_anniversary_notifications", 1351895378: "message", 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[5] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, CustomStatus$Type, items1);
    }
  }
  const arg1 = CustomStatus$Type;
  callback3(CustomStatus$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomStatus$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomStatus$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomStatus$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.text = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let str6 = pos.fixed64();
          obj.emojiId = str6.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.emojiName = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str5 = pos.fixed64();
          obj.expiresAtMs = str5.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let str4 = pos.fixed64();
          obj.createdAtMs = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = CustomStatus$Type;
          let tmp27 = closure_1;
          let StringValue = CustomStatus$Type(closure_1[9]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.label = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.label);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = CustomStatus$Type;
                let tmp13 = closure_1;
                onRead = CustomStatus$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(text, tag, writeUnknownFields) {
      if ("" !== text.text) {
        tag.tag(1, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited).string(text.text);
        const tagResult = tag.tag(1, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if ("0" !== text.emojiId) {
        tag.tag(2, CustomStatus$Type(closure_1[7]).WireType.Bit64).fixed64(text.emojiId);
        const tagResult1 = tag.tag(2, CustomStatus$Type(closure_1[7]).WireType.Bit64);
      }
      if ("" !== text.emojiName) {
        tag.tag(3, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited).string(text.emojiName);
        const tagResult2 = tag.tag(3, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if ("0" !== text.expiresAtMs) {
        tag.tag(4, CustomStatus$Type(closure_1[7]).WireType.Bit64).fixed64(text.expiresAtMs);
        const tagResult3 = tag.tag(4, CustomStatus$Type(closure_1[7]).WireType.Bit64);
      }
      if ("0" !== text.createdAtMs) {
        tag.tag(5, CustomStatus$Type(closure_1[7]).WireType.Bit64).fixed64(text.createdAtMs);
        const tagResult4 = tag.tag(5, CustomStatus$Type(closure_1[7]).WireType.Bit64);
      }
      if (text.label) {
        const StringValue = CustomStatus$Type(closure_1[9]).StringValue;
        const tagResult5 = tag.tag(6, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(text.label, tag.tag(6, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(text.label, tag.tag(6, CustomStatus$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomStatus$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, text, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomStatus$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp48 = new tmp48();
let tmp50 = (MessageType) => {
  class LocalizationSettings$Type {
    constructor() {
      tmp = closure_3(this, LocalizationSettings$Type);
      obj = { -111020099: "prevMessages", 1351895378: -867922343710407300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1456955659: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003213986547311207 };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).Int32Value;
            }
      };
      items[2] = {
        T() {
              return callback(closure_1[9]).StringValue;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, LocalizationSettings$Type, items1);
    }
  }
  const arg1 = LocalizationSettings$Type;
  callback3(LocalizationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LocalizationSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LocalizationSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = LocalizationSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = LocalizationSettings$Type;
          let tmp37 = closure_1;
          let StringValue2 = LocalizationSettings$Type(closure_1[9]).StringValue;
          let tmp38 = StringValue2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.locale = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.locale);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = LocalizationSettings$Type;
          let tmp32 = closure_1;
          let Int32Value = LocalizationSettings$Type(closure_1[9]).Int32Value;
          let tmp33 = Int32Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.timezoneOffset = Int32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.timezoneOffset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = LocalizationSettings$Type;
          let tmp27 = closure_1;
          let StringValue = LocalizationSettings$Type(closure_1[9]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.timezoneName = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.timezoneName);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = LocalizationSettings$Type;
                let tmp13 = closure_1;
                onRead = LocalizationSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(locale, tag, writeUnknownFields) {
      if (locale.locale) {
        const StringValue = LocalizationSettings$Type(closure_1[9]).StringValue;
        const tagResult = tag.tag(1, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (locale.timezoneOffset) {
        const Int32Value = LocalizationSettings$Type(closure_1[9]).Int32Value;
        const tagResult1 = tag.tag(2, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (locale.timezoneName) {
        const StringValue2 = LocalizationSettings$Type(closure_1[9]).StringValue;
        const tagResult2 = tag.tag(3, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, LocalizationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LocalizationSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locale, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(LocalizationSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp50 = new tmp50();
let tmp52 = (MessageType) => {
  class ChannelListSettings$Type {
    constructor() {
      tmp = closure_3(this, ChannelListSettings$Type);
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items = [, ];
      items[0] = obj;
      obj = { -111020099: -16, 1351895378: 1, 1456955659: "stretch" };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[1] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, ChannelListSettings$Type, items1);
    }
  }
  const arg1 = ChannelListSettings$Type;
  callback3(ChannelListSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelListSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelListSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelListSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp31 = ChannelListSettings$Type;
          let tmp32 = closure_1;
          let StringValue2 = ChannelListSettings$Type(closure_1[9]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.layout = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.layout);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = ChannelListSettings$Type;
          let tmp27 = closure_1;
          let StringValue = ChannelListSettings$Type(closure_1[9]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.messagePreviews = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.messagePreviews);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ChannelListSettings$Type;
                let tmp13 = closure_1;
                onRead = ChannelListSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(layout, tag, writeUnknownFields) {
      if (layout.layout) {
        const StringValue = ChannelListSettings$Type(closure_1[9]).StringValue;
        const tagResult = tag.tag(1, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (layout.messagePreviews) {
        const StringValue2 = ChannelListSettings$Type(closure_1[9]).StringValue;
        const tagResult1 = tag.tag(2, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, ChannelListSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelListSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, layout, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelListSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp52 = new tmp52();
let tmp54 = (MessageType) => {
  class AppearanceSettings$Type {
    constructor() {
      tmp = closure_3(this, AppearanceSettings$Type);
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        const items = [, closure_22];
        return items;
      };
      items = [, , , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {
        T() {
              return closure_56;
            }
      };
      items[3] = {};
      obj = { -111020099: "<string:1378942980>", 1351895378: "<string:3951369912>", 1456955659: "<string:1094707281>" };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[4] = obj;
      items[5] = {
        T() {
              return callback(closure_1[9]).StringValue;
            }
      };
      obj1 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj1.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[6] = obj1;
      obj2 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj2.T = function T() {
        const items = [, closure_23];
        return items;
      };
      items[7] = obj2;
      obj3 = { -111020099: "id", 1351895378: "message", 1456955659: 0.425 };
      obj3.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items[8] = obj3;
      obj4 = { -111020099: "<string:956401975>", 1351895378: "p\u011Bkn\u011B pros\u00EDm", 1456955659: "<string:3210870784>" };
      obj4.T = function T() {
        const items = [, closure_24];
        return items;
      };
      items[9] = obj4;
      obj5 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj5.T = function T() {
        const items = [, closure_21];
        return items;
      };
      items[10] = obj5;
      items[11] = {
        T() {
              const items = [, closure_25];
              return items;
            }
      };
      obj6 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj6.T = function T() {
        const items = [null, closure_20, "GUILD_THEME_SOURCE_PREFERENCE_"];
        return items;
      };
      items[12] = obj6;
      items[13] = {};
      items1 = [];
      items1[1] = items;
      return closure_82(this, AppearanceSettings$Type, items1);
    }
  }
  const arg1 = AppearanceSettings$Type;
  callback3(AppearanceSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 1246867297: 1900216319, 1386373449: 1895825964, -1504642867: 1090519596, 1783809377: 121618, 1676372971: -393981679, 1384964995: 23995713, -321034647: 28928, 760543585: 1361117184, 1203853117: -1639847804 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AppearanceSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AppearanceSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AppearanceSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.darkSidebar = pos.bool();
        while (true) {
          do {
            let tmp3 = tmp5;
            let tmp4 = tmp6;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(theme, tag, writeUnknownFields) {
      if (0 !== theme.theme) {
        tag.tag(1, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.theme);
        const tagResult = tag.tag(1, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== theme.developerMode) {
        tag.tag(2, AppearanceSettings$Type(closure_1[7]).WireType.Varint).bool(theme.developerMode);
        const tagResult1 = tag.tag(2, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (theme.clientThemeSettings) {
        const tagResult2 = tag.tag(3, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_56.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_56.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== theme.mobileRedesignDisabled) {
        tag.tag(4, AppearanceSettings$Type(closure_1[7]).WireType.Varint).bool(theme.mobileRedesignDisabled);
        const tagResult3 = tag.tag(4, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (theme.channelListLayout) {
        const StringValue = AppearanceSettings$Type(closure_1[9]).StringValue;
        const tagResult4 = tag.tag(6, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (theme.messagePreviews) {
        const StringValue2 = AppearanceSettings$Type(closure_1[9]).StringValue;
        const tagResult5 = tag.tag(7, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (theme.searchResultExactCountEnabled) {
        const BoolValue = AppearanceSettings$Type(closure_1[9]).BoolValue;
        const tagResult6 = tag.tag(8, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== theme.timestampHourCycle) {
        tag.tag(9, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.timestampHourCycle);
        const tagResult7 = tag.tag(9, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (theme.happeningNowCardsDisabled) {
        const BoolValue2 = AppearanceSettings$Type(closure_1[9]).BoolValue;
        const tagResult8 = tag.tag(10, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, AppearanceSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== theme.launchPadMode) {
        tag.tag(11, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.launchPadMode);
        const tagResult9 = tag.tag(11, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== theme.uiDensity) {
        tag.tag(12, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.uiDensity);
        const tagResult10 = tag.tag(12, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== theme.swipeRightToLeftMode) {
        tag.tag(13, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.swipeRightToLeftMode);
        const tagResult11 = tag.tag(13, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== theme.defaultGuildThemePreference) {
        tag.tag(14, AppearanceSettings$Type(closure_1[7]).WireType.Varint).int32(theme.defaultGuildThemePreference);
        const tagResult12 = tag.tag(14, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== theme.darkSidebar) {
        tag.tag(15, AppearanceSettings$Type(closure_1[7]).WireType.Varint).bool(theme.darkSidebar);
        const tagResult13 = tag.tag(15, AppearanceSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AppearanceSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, theme, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AppearanceSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp54 = new tmp54();
let tmp56 = (MessageType) => {
  class CustomUserThemeSettings$Type {
    constructor() {
      tmp = closure_3(this, CustomUserThemeSettings$Type);
      items = [, , , ];
      items[0] = {};
      items[1] = { 0: false, 0: false, 0: false, 0: false, -9223372036854775808: false };
      items[2] = {};
      items[3] = {};
      items1 = [];
      items1[1] = items;
      return closure_82(this, CustomUserThemeSettings$Type, items1);
    }
  }
  const arg1 = CustomUserThemeSettings$Type;
  callback3(CustomUserThemeSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { colors: [], gradientColorStops: [], gradientAngle: 0, baseMix: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomUserThemeSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomUserThemeSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomUserThemeSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let colors = obj.colors;
          let arr = colors.push(pos.string());
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = CustomUserThemeSettings$Type;
          let tmp29 = closure_1;
          if (tmp9 === CustomUserThemeSettings$Type(closure_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let gradientColorStops = obj.gradientColorStops;
                arr = gradientColorStops.push(pos.float());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let gradientColorStops1 = obj.gradientColorStops;
            let arr1 = gradientColorStops1.push(pos.float());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (3 === tmp8) {
          obj.gradientAngle = pos.int32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          obj.baseMix = pos.int32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = CustomUserThemeSettings$Type;
                let tmp15 = closure_1;
                onRead = CustomUserThemeSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(colors, tag, writeUnknownFields) {
      let length;
      let length2;
      let num = 0;
      if (0 < colors.colors.length) {
        do {
          let tmp = closure_0;
          let tmp2 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult.string(colors.colors[num]);
          num = num + 1;
          length = colors.colors.length;
        } while (num < length);
      }
      if (colors.gradientColorStops.length) {
        tag.tag(2, CustomUserThemeSettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < colors.gradientColorStops.length) {
          do {
            let floatResult = tag.float(colors.gradientColorStops[num3]);
            num3 = num3 + 1;
            length2 = colors.gradientColorStops.length;
          } while (num3 < length2);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, CustomUserThemeSettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (0 !== colors.gradientAngle) {
        tag.tag(3, CustomUserThemeSettings$Type(closure_1[7]).WireType.Varint).int32(colors.gradientAngle);
        const tagResult2 = tag.tag(3, CustomUserThemeSettings$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== colors.baseMix) {
        tag.tag(4, CustomUserThemeSettings$Type(closure_1[7]).WireType.Varint).int32(colors.baseMix);
        const tagResult3 = tag.tag(4, CustomUserThemeSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomUserThemeSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, colors, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomUserThemeSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp56 = new tmp56();
let tmp58 = (MessageType) => {
  class ClientThemeSettings$Type {
    constructor() {
      tmp = closure_3(this, ClientThemeSettings$Type);
      obj = {
        T() {
              return callback(closure_1[9]).UInt32Value;
            }
      };
      items = [, ];
      items[0] = obj;
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        return closure_55;
      };
      items[1] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, ClientThemeSettings$Type, items1);
    }
  }
  const arg1 = ClientThemeSettings$Type;
  callback3(ClientThemeSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientThemeSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientThemeSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientThemeSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (2 === tmp7) {
          let tmp30 = ClientThemeSettings$Type;
          let tmp31 = closure_1;
          let UInt32Value = ClientThemeSettings$Type(closure_1[9]).UInt32Value;
          let tmp32 = UInt32Value;
          let tmp33 = pos;
          let tmp34 = readUnknownField;
          obj.backgroundGradientPresetId = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.backgroundGradientPresetId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = closure_55;
          let tmp27 = closure_55;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.customUserThemeSettings = closure_55.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customUserThemeSettings);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ClientThemeSettings$Type;
                let tmp13 = closure_1;
                onRead = ClientThemeSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(backgroundGradientPresetId, tag, writeUnknownFields) {
      if (backgroundGradientPresetId.backgroundGradientPresetId) {
        const UInt32Value = ClientThemeSettings$Type(closure_1[9]).UInt32Value;
        const tagResult = tag.tag(2, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (backgroundGradientPresetId.customUserThemeSettings) {
        const tagResult1 = tag.tag(4, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_55.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_55.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, ClientThemeSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientThemeSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, backgroundGradientPresetId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientThemeSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp58 = new tmp58();
let tmp60 = (MessageType) => {
  class GuildFolders$Type {
    constructor() {
      tmp = closure_3(this, GuildFolders$Type);
      obj = { 0: "message", 0: "accessibilityRole", 0: "httpServerLocation", 0: "count" };
      obj.T = function T() {
        return closure_58;
      };
      items = [, ];
      items[0] = obj;
      items[1] = {};
      items1 = [];
      items1[1] = items;
      return closure_82(this, GuildFolders$Type, items1);
    }
  }
  const arg1 = GuildFolders$Type;
  callback3(GuildFolders$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { folders: [], guildPositions: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildFolders$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildFolders$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildFolders$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let folders = obj.folders;
          let tmp33 = closure_58;
          let arr = folders.push(closure_58.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = GuildFolders$Type;
          let tmp29 = closure_1;
          if (tmp9 === GuildFolders$Type(closure_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let guildPositions = obj.guildPositions;
                let str5 = pos.fixed64();
                arr = guildPositions.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildPositions1 = obj.guildPositions;
            let str4 = pos.fixed64();
            let arr1 = guildPositions1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = GuildFolders$Type;
                let tmp15 = closure_1;
                onRead = GuildFolders$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(folders, tag, writeUnknownFields) {
      let length;
      let length2;
      let num = 0;
      if (0 < folders.folders.length) {
        do {
          let tmp = closure_58;
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_58.internalBinaryWrite(folders.folders[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = folders.folders.length;
        } while (num < length);
      }
      if (folders.guildPositions.length) {
        tag.tag(2, GuildFolders$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < folders.guildPositions.length) {
          do {
            let fixed64Result = tag.fixed64(folders.guildPositions[num3]);
            num3 = num3 + 1;
            length2 = folders.guildPositions.length;
          } while (num3 < length2);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, GuildFolders$Type(closure_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildFolders$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, folders, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildFolders$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp60 = new tmp60();
let tmp62 = (MessageType) => {
  class GuildFolder$Type {
    constructor() {
      tmp = closure_3(this, GuildFolder$Type);
      items = [, , , ];
      items[0] = {};
      items[1] = {
        T() {
              return callback(closure_1[9]).Int64Value;
            }
      };
      obj = { -111020099: false, 1351895378: false, 1456955659: false };
      obj.T = function T() {
        return callback(closure_1[9]).StringValue;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return callback(closure_1[9]).UInt64Value;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, GuildFolder$Type, items1);
    }
  }
  const arg1 = GuildFolder$Type;
  callback3(GuildFolder$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildFolder$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildFolder$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildFolder$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp43 = GuildFolder$Type;
          let tmp44 = closure_1;
          if (tmp9 === GuildFolder$Type(closure_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let guildIds = obj.guildIds;
                let str5 = pos.fixed64();
                let arr = guildIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildIds1 = obj.guildIds;
            let str4 = pos.fixed64();
            arr = guildIds1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (2 === tmp8) {
          let tmp38 = GuildFolder$Type;
          let tmp39 = closure_1;
          let Int64Value = GuildFolder$Type(closure_1[9]).Int64Value;
          let tmp40 = Int64Value;
          let tmp41 = pos;
          let tmp42 = readUnknownField;
          obj.id = Int64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          let tmp33 = GuildFolder$Type;
          let tmp34 = closure_1;
          let StringValue = GuildFolder$Type(closure_1[9]).StringValue;
          let tmp35 = StringValue;
          let tmp36 = pos;
          let tmp37 = readUnknownField;
          obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          let tmp28 = GuildFolder$Type;
          let tmp29 = closure_1;
          let UInt64Value = GuildFolder$Type(closure_1[9]).UInt64Value;
          let tmp30 = UInt64Value;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.color = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.color);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = GuildFolder$Type;
                let tmp15 = closure_1;
                onRead = GuildFolder$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(guildIds, tag, writeUnknownFields) {
      let length;
      if (guildIds.guildIds.length) {
        tag.tag(1, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < guildIds.guildIds.length) {
          do {
            let fixed64Result = tag.fixed64(guildIds.guildIds[num3]);
            num3 = num3 + 1;
            length = guildIds.guildIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (guildIds.id) {
        const Int64Value = GuildFolder$Type(closure_1[9]).Int64Value;
        const tagResult1 = tag.tag(2, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (guildIds.name) {
        const StringValue = GuildFolder$Type(closure_1[9]).StringValue;
        const tagResult2 = tag.tag(3, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (guildIds.color) {
        const UInt64Value = GuildFolder$Type(closure_1[9]).UInt64Value;
        const tagResult3 = tag.tag(4, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, GuildFolder$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildFolder$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildFolder$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp62 = new tmp62();
let tmp64 = (MessageType) => {
  class Favorites$Type {
    constructor() {
      tmp = closure_3(this, Favorites$Type);
      obj = { -111020099: "swipe_right_to_left_mode", 1351895378: "enum", 1456955659: "WHITE", -1801654842: 0.03 };
      obj = {
        kind: "message",
        T() {
              return closure_60;
            }
      };
      obj.V = obj;
      items = [, , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items1 = ["balanceHook"];
      items1[1] = items;
      return closure_82(this, Favorites$Type, items1);
    }
  }
  const arg1 = Favorites$Type;
  callback3(Favorites$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { favoriteChannels: {}, muted: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Favorites$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Favorites$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = Favorites$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.favoriteChannels, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.muted = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = Favorites$Type;
          let tmp27 = closure_1;
          let BoolValue = Favorites$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.guildVisible = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.guildVisible);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = Favorites$Type;
                let tmp13 = closure_1;
                onRead = Favorites$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_60;
            internalBinaryReadResult = closure_60.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_60.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(favoriteChannels, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(favoriteChannels.favoriteChannels);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_60;
          let internalBinaryWriteResult = closure_60.internalBinaryWrite(favoriteChannels.favoriteChannels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (false !== favoriteChannels.muted) {
        tag.tag(2, Favorites$Type(closure_1[7]).WireType.Varint).bool(favoriteChannels.muted);
        const tagResult3 = tag.tag(2, Favorites$Type(closure_1[7]).WireType.Varint);
      }
      if (favoriteChannels.guildVisible) {
        const BoolValue = Favorites$Type(closure_1[9]).BoolValue;
        const tagResult4 = tag.tag(3, Favorites$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, Favorites$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, Favorites$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Favorites$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, favoriteChannels, tag);
      }
      return tag;
    }
  };
  return callback(Favorites$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp64 = new tmp64();
let tmp66 = (MessageType) => {
  class FavoriteChannel$Type {
    constructor() {
      tmp = closure_3(this, FavoriteChannel$Type);
      items = [, , , , , ];
      items[0] = {};
      items[1] = {
        T() {
              const items = [null, closure_26];
              return items;
            }
      };
      items[2] = {};
      items[3] = {};
      obj = { -111020099: 16, 1351895378: 8, 1456955659: "absolute" };
      obj.T = function T() {
        return callback(closure_1[9]).UInt32Value;
      };
      items[4] = obj;
      items[5] = {};
      items1 = [2522846989381425200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
      items1[1] = items;
      return closure_82(this, FavoriteChannel$Type, items1);
    }
  }
  const arg1 = FavoriteChannel$Type;
  callback3(FavoriteChannel$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteChannel$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteChannel$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteChannel$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.nickname = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.type = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.position = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str4 = pos.fixed64();
          obj.parentId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = FavoriteChannel$Type;
          let tmp27 = closure_1;
          let UInt32Value = FavoriteChannel$Type(closure_1[9]).UInt32Value;
          let tmp28 = UInt32Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.channelType = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.channelType);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.collapsed = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = FavoriteChannel$Type;
                let tmp13 = closure_1;
                onRead = FavoriteChannel$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(nickname, tag, writeUnknownFields) {
      if ("" !== nickname.nickname) {
        tag.tag(1, FavoriteChannel$Type(closure_1[7]).WireType.LengthDelimited).string(nickname.nickname);
        const tagResult = tag.tag(1, FavoriteChannel$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (0 !== nickname.type) {
        tag.tag(2, FavoriteChannel$Type(closure_1[7]).WireType.Varint).int32(nickname.type);
        const tagResult1 = tag.tag(2, FavoriteChannel$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== nickname.position) {
        tag.tag(3, FavoriteChannel$Type(closure_1[7]).WireType.Varint).uint32(nickname.position);
        const tagResult2 = tag.tag(3, FavoriteChannel$Type(closure_1[7]).WireType.Varint);
      }
      if ("0" !== nickname.parentId) {
        tag.tag(4, FavoriteChannel$Type(closure_1[7]).WireType.Bit64).fixed64(nickname.parentId);
        const tagResult3 = tag.tag(4, FavoriteChannel$Type(closure_1[7]).WireType.Bit64);
      }
      if (nickname.channelType) {
        const UInt32Value = FavoriteChannel$Type(closure_1[9]).UInt32Value;
        const tagResult4 = tag.tag(5, FavoriteChannel$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, FavoriteChannel$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, FavoriteChannel$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== nickname.collapsed) {
        tag.tag(6, FavoriteChannel$Type(closure_1[7]).WireType.Varint).bool(nickname.collapsed);
        const tagResult5 = tag.tag(6, FavoriteChannel$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteChannel$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, nickname, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteChannel$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp66 = new tmp66();
let tmp68 = (MessageType) => {
  class AudioContextSetting$Type {
    constructor() {
      tmp = closure_3(this, AudioContextSetting$Type);
      items = [, , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items1 = [];
      items1[1] = items;
      return closure_82(this, AudioContextSetting$Type, items1);
    }
  }
  const arg1 = AudioContextSetting$Type;
  callback3(AudioContextSetting$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AudioContextSetting$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AudioContextSetting$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AudioContextSetting$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.muted = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.volume = pos.float();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let str4 = pos.fixed64();
          obj.modifiedAt = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.soundboardMuted = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AudioContextSetting$Type;
                let tmp13 = closure_1;
                onRead = AudioContextSetting$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(muted, tag, writeUnknownFields) {
      if (false !== muted.muted) {
        tag.tag(1, AudioContextSetting$Type(closure_1[7]).WireType.Varint).bool(muted.muted);
        const tagResult = tag.tag(1, AudioContextSetting$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== muted.volume) {
        tag.tag(2, AudioContextSetting$Type(closure_1[7]).WireType.Bit32).float(muted.volume);
        const tagResult1 = tag.tag(2, AudioContextSetting$Type(closure_1[7]).WireType.Bit32);
      }
      if ("0" !== muted.modifiedAt) {
        tag.tag(3, AudioContextSetting$Type(closure_1[7]).WireType.Bit64).fixed64(muted.modifiedAt);
        const tagResult2 = tag.tag(3, AudioContextSetting$Type(closure_1[7]).WireType.Bit64);
      }
      if (false !== muted.soundboardMuted) {
        tag.tag(4, AudioContextSetting$Type(closure_1[7]).WireType.Varint).bool(muted.soundboardMuted);
        const tagResult3 = tag.tag(4, AudioContextSetting$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AudioContextSetting$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, muted, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AudioContextSetting$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp68 = new tmp68();
let tmp70 = (MessageType) => {
  class AudioSettings$Type {
    constructor() {
      tmp = closure_3(this, AudioSettings$Type);
      obj = {
        kind: "message",
        T() {
              return closure_61;
            }
      };
      items = [, ];
      items[0] = { V: obj };
      obj = {
        kind: "message",
        T() {
              return closure_61;
            }
      };
      items[1] = { V: obj };
      items1 = [-127336447];
      items1[1] = items;
      return closure_82(this, AudioSettings$Type, items1);
    }
  }
  const arg1 = AudioSettings$Type;
  callback3(AudioSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { user: {}, stream: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AudioSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AudioSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AudioSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.user, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.stream, pos, readUnknownField);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AudioSettings$Type;
                let tmp13 = closure_1;
                onRead = AudioSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_61;
            internalBinaryReadResult = closure_61.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_61.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "binaryReadMap2",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_61;
            internalBinaryReadResult = closure_61.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_61.create();
      }
      arg0[str3] = obj;
    }
  };
  items[4] = {
    key: "internalBinaryWrite",
    value(user, tag, writeUnknownFields) {
      let length;
      let length2;
      const keys = Object.keys(user.user);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_61;
          let internalBinaryWriteResult = closure_61.internalBinaryWrite(user.user[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      const keys1 = Object.keys(user.stream);
      let num2 = 0;
      if (0 < keys1.length) {
        do {
          let tmp9 = keys1[num2];
          let tmp10 = closure_0;
          let tmp11 = closure_1;
          let tagResult3 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tagResult4 = forkResult2.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result1 = tagResult4.fixed64(tmp9);
          let tagResult5 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult3 = tagResult5.fork();
          let tmp14 = closure_61;
          let internalBinaryWriteResult1 = closure_61.internalBinaryWrite(user.stream[tmp9], tag, writeUnknownFields);
          let joined2 = tag.join();
          let joined3 = joined2.join();
          num2 = num2 + 1;
          length2 = keys1.length;
        } while (num2 < length2);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AudioSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, user, tag);
      }
      return tag;
    }
  };
  return callback(AudioSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp70 = new tmp70();
let tmp72 = (MessageType) => {
  class CommunitiesSettings$Type {
    constructor() {
      tmp = closure_3(this, CommunitiesSettings$Type);
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = [53957120];
      items1[1] = items;
      return closure_82(this, CommunitiesSettings$Type, items1);
    }
  }
  const arg1 = CommunitiesSettings$Type;
  callback3(CommunitiesSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CommunitiesSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CommunitiesSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CommunitiesSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = CommunitiesSettings$Type;
          let tmp27 = closure_1;
          let BoolValue = CommunitiesSettings$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.disableHomeAutoNav = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableHomeAutoNav);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = CommunitiesSettings$Type;
                let tmp13 = closure_1;
                onRead = CommunitiesSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(disableHomeAutoNav, tag, writeUnknownFields) {
      if (disableHomeAutoNav.disableHomeAutoNav) {
        const BoolValue = CommunitiesSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, CommunitiesSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, CommunitiesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, CommunitiesSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CommunitiesSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disableHomeAutoNav, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CommunitiesSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp72 = new tmp72();
let tmp74 = (MessageType) => {
  class SoundboardSettings$Type {
    constructor() {
      tmp = closure_3(this, SoundboardSettings$Type);
      items = [];
      items[0] = {};
      items1 = [null];
      items1[1] = items;
      return closure_82(this, SoundboardSettings$Type, items1);
    }
  }
  const arg1 = SoundboardSettings$Type;
  callback3(SoundboardSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { volume: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SoundboardSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SoundboardSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SoundboardSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.volume = pos.float();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = SoundboardSettings$Type;
                let tmp13 = closure_1;
                onRead = SoundboardSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(volume, tag, writeUnknownFields) {
      if (0 !== volume.volume) {
        tag.tag(1, SoundboardSettings$Type(closure_1[7]).WireType.Bit32).float(volume.volume);
        const tagResult = tag.tag(1, SoundboardSettings$Type(closure_1[7]).WireType.Bit32);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SoundboardSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, volume, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SoundboardSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp74 = new tmp74();
let tmp76 = (MessageType) => {
  class CustomCallSound$Type {
    constructor() {
      tmp = closure_3(this, CustomCallSound$Type);
      items = [, ];
      items[0] = {};
      items[1] = {};
      items1 = [true];
      items1[1] = items;
      return closure_82(this, CustomCallSound$Type, items1);
    }
  }
  const arg1 = CustomCallSound$Type;
  callback3(CustomCallSound$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(false)": null, "Bool(false)": null };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomCallSound$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomCallSound$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomCallSound$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let str5 = pos.fixed64();
          obj.soundId = str5.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let str4 = pos.fixed64();
          obj.guildId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = CustomCallSound$Type;
                let tmp13 = closure_1;
                onRead = CustomCallSound$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(soundId, tag, writeUnknownFields) {
      if ("0" !== soundId.soundId) {
        tag.tag(1, CustomCallSound$Type(closure_1[7]).WireType.Bit64).fixed64(soundId.soundId);
        const tagResult = tag.tag(1, CustomCallSound$Type(closure_1[7]).WireType.Bit64);
      }
      if ("0" !== soundId.guildId) {
        tag.tag(2, CustomCallSound$Type(closure_1[7]).WireType.Bit64).fixed64(soundId.guildId);
        const tagResult1 = tag.tag(2, CustomCallSound$Type(closure_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomCallSound$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, soundId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomCallSound$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp76 = new tmp76();
let tmp78 = (MessageType) => {
  class BroadcastSettings$Type {
    constructor() {
      tmp = closure_3(this, BroadcastSettings$Type);
      obj = { -111020099: 1, 1351895378: "one_time_purchase_limit", 1456955659: "message" };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [, , , ];
      items[0] = obj;
      items[1] = { 0: 2, 0: "app_sharing_settings", 0: "message", 0: null, -9223372036854775808: "text-xs/semibold" };
      items[2] = {};
      items[3] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items1 = [null];
      items1[1] = items;
      return closure_82(this, BroadcastSettings$Type, items1);
    }
  }
  const arg1 = BroadcastSettings$Type;
  callback3(BroadcastSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { allowedGuildIds: [], allowedUserIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BroadcastSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BroadcastSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = BroadcastSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp10;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp7 = callback;
        let tmp8 = callback(pos.tag(), 2);
        [tmp9, tmp10] = tmp8;
        if (1 === tmp9) {
          let tmp45 = BroadcastSettings$Type;
          let tmp46 = closure_1;
          let BoolValue2 = BroadcastSettings$Type(closure_1[9]).BoolValue;
          let tmp47 = BoolValue2;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj.allowFriends = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.allowFriends);
          let tmp12 = tmp3;
          let tmp13 = tmp4;
          let tmp14 = tmp5;
          let tmp15 = tmp6;
        } else if (2 === tmp9) {
          let tmp40 = BroadcastSettings$Type;
          let tmp41 = closure_1;
          if (tmp10 === BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = sum1;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
            if (pos.pos < sum1) {
              do {
                let allowedGuildIds = obj.allowedGuildIds;
                let str7 = pos.fixed64();
                let arr = allowedGuildIds.push(str7.toString());
                tmp13 = tmp4;
                tmp14 = tmp5;
                tmp15 = tmp6;
                tmp12 = sum1;
                let pos2 = pos.pos;
              } while (pos2 < sum1);
            }
          } else {
            let allowedGuildIds1 = obj.allowedGuildIds;
            let str6 = pos.fixed64();
            arr = allowedGuildIds1.push(str6.toString());
            tmp12 = tmp3;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
          }
        } else if (3 === tmp9) {
          let tmp35 = BroadcastSettings$Type;
          let tmp36 = closure_1;
          if (tmp10 === BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited) {
            let sum2 = pos.int32() + pos.pos;
            tmp12 = tmp3;
            tmp13 = sum2;
            tmp14 = tmp5;
            tmp15 = tmp6;
            if (pos.pos < sum2) {
              do {
                let allowedUserIds = obj.allowedUserIds;
                let str5 = pos.fixed64();
                let arr1 = allowedUserIds.push(str5.toString());
                tmp12 = tmp3;
                tmp14 = tmp5;
                tmp15 = tmp6;
                tmp13 = sum2;
                pos = pos.pos;
              } while (pos < sum2);
            }
          } else {
            let allowedUserIds1 = obj.allowedUserIds;
            let str4 = pos.fixed64();
            let arr2 = allowedUserIds1.push(str4.toString());
            tmp12 = tmp3;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
          }
        } else if (4 === tmp9) {
          let tmp30 = BroadcastSettings$Type;
          let tmp31 = closure_1;
          let BoolValue = BroadcastSettings$Type(closure_1[9]).BoolValue;
          let tmp32 = BoolValue;
          let tmp33 = pos;
          let tmp34 = readUnknownField;
          obj.autoBroadcast = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.autoBroadcast);
          tmp12 = tmp3;
          tmp13 = tmp4;
          tmp14 = tmp5;
          tmp15 = tmp6;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp23 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp24 = tmp9;
            let tmp25 = tmp10;
            let prototype = _Error.prototype;
            let tmp26 = new.target;
            let tmp27 = new.target;
            _Error = new _Error("Unknown field " + tmp9 + " (wire type " + tmp10 + ") for " + self.typeName);
            let tmp29 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp10);
            tmp12 = tmp3;
            tmp13 = tmp4;
            tmp14 = readUnknownField;
            tmp15 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp16 = BroadcastSettings$Type;
                let tmp17 = closure_1;
                onRead = BroadcastSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp18 = obj;
              let tmp19 = tmp9;
              let tmp20 = tmp10;
              let tmp21 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp9, tmp10, skipResult);
              tmp12 = tmp3;
              tmp13 = tmp4;
              tmp14 = readUnknownField;
              tmp15 = skipResult;
            }
          }
        }
        let tmp3 = tmp12;
        let tmp4 = tmp13;
        let tmp5 = tmp14;
        let tmp6 = tmp15;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowFriends, tag, writeUnknownFields) {
      let length;
      let length2;
      if (allowFriends.allowFriends) {
        const BoolValue = BroadcastSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowFriends.allowedGuildIds.length) {
        tag.tag(2, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num6 = 0;
        if (0 < allowFriends.allowedGuildIds.length) {
          do {
            let fixed64Result = tag.fixed64(allowFriends.allowedGuildIds[num6]);
            num6 = num6 + 1;
            length = allowFriends.allowedGuildIds.length;
          } while (num6 < length);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (allowFriends.allowedUserIds.length) {
        tag.tag(3, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num9 = 0;
        if (0 < allowFriends.allowedUserIds.length) {
          do {
            let fixed64Result1 = tag.fixed64(allowFriends.allowedUserIds[num9]);
            num9 = num9 + 1;
            length2 = allowFriends.allowedUserIds.length;
          } while (num9 < length2);
        }
        const joined2 = tag.join();
        const tagResult2 = tag.tag(3, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (allowFriends.autoBroadcast) {
        const BoolValue2 = BroadcastSettings$Type(closure_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, BroadcastSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BroadcastSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowFriends, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BroadcastSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp78 = new tmp78();
let tmp80 = (MessageType) => {
  class ClipsSettings$Type {
    constructor() {
      tmp = closure_3(this, ClipsSettings$Type);
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_82(this, ClipsSettings$Type, items1);
    }
  }
  const arg1 = ClipsSettings$Type;
  callback3(ClipsSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClipsSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClipsSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClipsSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = ClipsSettings$Type;
          let tmp27 = closure_1;
          let BoolValue = ClipsSettings$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.allowVoiceRecording = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.allowVoiceRecording);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ClipsSettings$Type;
                let tmp13 = closure_1;
                onRead = ClipsSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowVoiceRecording, tag, writeUnknownFields) {
      if (allowVoiceRecording.allowVoiceRecording) {
        const BoolValue = ClipsSettings$Type(closure_1[9]).BoolValue;
        const tagResult = tag.tag(1, ClipsSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, ClipsSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, ClipsSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClipsSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowVoiceRecording, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClipsSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp80 = new tmp80();
let tmp82 = (MessageType) => {
  class SpendingLimit$Type {
    constructor() {
      tmp = closure_3(this, SpendingLimit$Type);
      items = [, ];
      items[0] = {};
      items[1] = {};
      items1 = [];
      items1[1] = items;
      return closure_82(this, SpendingLimit$Type, items1);
    }
  }
  const arg1 = SpendingLimit$Type;
  callback3(SpendingLimit$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 0: "Array", 0: "isArray" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SpendingLimit$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SpendingLimit$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SpendingLimit$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let str4 = pos.uint64();
          obj.amount = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.currency = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = SpendingLimit$Type;
                let tmp13 = closure_1;
                onRead = SpendingLimit$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(amount, tag, writeUnknownFields) {
      if ("0" !== amount.amount) {
        tag.tag(1, SpendingLimit$Type(closure_1[7]).WireType.Varint).uint64(amount.amount);
        const tagResult = tag.tag(1, SpendingLimit$Type(closure_1[7]).WireType.Varint);
      }
      if ("" !== amount.currency) {
        tag.tag(2, SpendingLimit$Type(closure_1[7]).WireType.LengthDelimited).string(amount.currency);
        const tagResult1 = tag.tag(2, SpendingLimit$Type(closure_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SpendingLimit$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, amount, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SpendingLimit$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp82 = new tmp82();
let tmp84 = (MessageType) => {
  class SpendingLimitSettings$Type {
    constructor() {
      tmp = closure_3(this, SpendingLimitSettings$Type);
      obj = { -111020099: "map", 1351895378: 6, 1456955659: "acknowledged_badge_label_localized" };
      obj.T = function T() {
        return closure_68;
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, SpendingLimitSettings$Type, items1);
    }
  }
  const arg1 = SpendingLimitSettings$Type;
  callback3(SpendingLimitSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SpendingLimitSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SpendingLimitSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SpendingLimitSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = closure_68;
          let tmp27 = closure_68;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.oneTimePurchaseLimit = closure_68.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.oneTimePurchaseLimit);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = SpendingLimitSettings$Type;
                let tmp13 = closure_1;
                onRead = SpendingLimitSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(oneTimePurchaseLimit, tag, writeUnknownFields) {
      if (oneTimePurchaseLimit.oneTimePurchaseLimit) {
        const tagResult = tag.tag(1, SpendingLimitSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_68.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, SpendingLimitSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_68.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, SpendingLimitSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SpendingLimitSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, oneTimePurchaseLimit, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SpendingLimitSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp84 = new tmp84();
let tmp86 = (MessageType) => {
  class SafetySettings$Type {
    constructor() {
      tmp = closure_3(this, SafetySettings$Type);
      obj = { -111020099: false, 1351895378: false, 1456955659: false };
      obj.T = function T() {
        const items = [true, closure_27];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {
        T() {
              return closure_69;
            }
      };
      items1 = [1];
      items1[1] = items;
      return closure_82(this, SafetySettings$Type, items1);
    }
  }
  const arg1 = SafetySettings$Type;
  callback3(SafetySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { <string:2993012137>: "absolute", <string:3834376604>: -1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetySettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetySettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetySettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.safetySettingsPreset = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.ignoreProfileSpeedbumpDisabled = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = closure_69;
          let tmp27 = closure_69;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.spendingLimitSettings = closure_69.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.spendingLimitSettings);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = SafetySettings$Type;
                let tmp13 = closure_1;
                onRead = SafetySettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(safetySettingsPreset, tag, writeUnknownFields) {
      if (0 !== safetySettingsPreset.safetySettingsPreset) {
        tag.tag(1, SafetySettings$Type(closure_1[7]).WireType.Varint).int32(safetySettingsPreset.safetySettingsPreset);
        const tagResult = tag.tag(1, SafetySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (false !== safetySettingsPreset.ignoreProfileSpeedbumpDisabled) {
        tag.tag(2, SafetySettings$Type(closure_1[7]).WireType.Varint).bool(safetySettingsPreset.ignoreProfileSpeedbumpDisabled);
        const tagResult1 = tag.tag(2, SafetySettings$Type(closure_1[7]).WireType.Varint);
      }
      if (safetySettingsPreset.spendingLimitSettings) {
        const tagResult2 = tag.tag(3, SafetySettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_69.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, SafetySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_69.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, SafetySettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetySettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, safetySettingsPreset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetySettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp86 = new tmp86();
let tmp88 = (MessageType) => {
  class ForLaterSettings$Type {
    constructor() {
      tmp = closure_3(this, ForLaterSettings$Type);
      obj = {
        T() {
              const items = ["<string:975568899>", closure_28, "FOR_LATER_TAB_"];
              return items;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_82(this, ForLaterSettings$Type, items1);
    }
  }
  const arg1 = ForLaterSettings$Type;
  callback3(ForLaterSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { currentTab: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ForLaterSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ForLaterSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ForLaterSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.currentTab = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ForLaterSettings$Type;
                let tmp13 = closure_1;
                onRead = ForLaterSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(currentTab, tag, writeUnknownFields) {
      if (0 !== currentTab.currentTab) {
        tag.tag(1, ForLaterSettings$Type(closure_1[7]).WireType.Varint).int32(currentTab.currentTab);
        const tagResult = tag.tag(1, ForLaterSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ForLaterSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, currentTab, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ForLaterSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp88 = new tmp88();
let tmp90 = (MessageType) => {
  class ICYMISettings$Type {
    constructor() {
      tmp = closure_3(this, ICYMISettings$Type);
      items = [];
      items[0] = {};
      items1 = [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020863704001413557];
      items1[1] = items;
      return closure_82(this, ICYMISettings$Type, items1);
    }
  }
  const arg1 = ICYMISettings$Type;
  callback3(ICYMISettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { feedGeneratedAt: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ICYMISettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ICYMISettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ICYMISettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let str4 = pos.fixed64();
          obj.feedGeneratedAt = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ICYMISettings$Type;
                let tmp13 = closure_1;
                onRead = ICYMISettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(feedGeneratedAt, tag, writeUnknownFields) {
      if ("0" !== feedGeneratedAt.feedGeneratedAt) {
        tag.tag(1, ICYMISettings$Type(closure_1[7]).WireType.Bit64).fixed64(feedGeneratedAt.feedGeneratedAt);
        const tagResult = tag.tag(1, ICYMISettings$Type(closure_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ICYMISettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, feedGeneratedAt, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ICYMISettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp90 = new tmp90();
let tmp92 = (MessageType) => {
  class AllApplicationSettings$Type {
    constructor() {
      tmp = closure_3(this, AllApplicationSettings$Type);
      obj = { -111020099: "value", 1351895378: "scalar", 1456955659: 1, -1801654842: "14 days" };
      obj = {
        kind: "message",
        T() {
              return closure_74;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_82(this, AllApplicationSettings$Type, items1);
    }
  }
  const arg1 = AllApplicationSettings$Type;
  callback3(AllApplicationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { appSettings: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AllApplicationSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AllApplicationSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AllApplicationSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.appSettings, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AllApplicationSettings$Type;
                let tmp13 = closure_1;
                onRead = AllApplicationSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_74;
            internalBinaryReadResult = closure_74.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_74.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(appSettings, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(appSettings.appSettings);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_74;
          let internalBinaryWriteResult = closure_74.internalBinaryWrite(appSettings.appSettings[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AllApplicationSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, appSettings, tag);
      }
      return tag;
    }
  };
  return callback(AllApplicationSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp92 = new tmp92();
let tmp94 = (MessageType) => {
  class ApplicationSettings$Type {
    constructor() {
      tmp = closure_3(this, ApplicationSettings$Type);
      obj = {
        T() {
              return closure_75;
            }
      };
      items = [, ];
      items[0] = obj;
      items[1] = {
        T() {
              return closure_76;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, ApplicationSettings$Type, items1);
    }
  }
  const arg1 = ApplicationSettings$Type;
  callback3(ApplicationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp30 = closure_75;
          let tmp31 = closure_75;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.appDmSettings = closure_75.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appDmSettings);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = closure_76;
          let tmp27 = closure_76;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.appSharingSettings = closure_76.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appSharingSettings);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ApplicationSettings$Type;
                let tmp13 = closure_1;
                onRead = ApplicationSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(appDmSettings, tag, writeUnknownFields) {
      if (appDmSettings.appDmSettings) {
        const tagResult = tag.tag(1, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = closure_75.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_75.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (appDmSettings.appSharingSettings) {
        const tagResult1 = tag.tag(2, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_76.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_76.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, ApplicationSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, appDmSettings, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp94 = new tmp94();
let tmp96 = (MessageType) => {
  class ApplicationDMSettings$Type {
    constructor() {
      tmp = closure_3(this, ApplicationDMSettings$Type);
      items = [];
      items[0] = {};
      items1 = [1822162947];
      items1[1] = items;
      return closure_82(this, ApplicationDMSettings$Type, items1);
    }
  }
  const arg1 = ApplicationDMSettings$Type;
  callback3(ApplicationDMSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { allowMobilePush: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationDMSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationDMSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationDMSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (2 === tmp7) {
          obj.allowMobilePush = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ApplicationDMSettings$Type;
                let tmp13 = closure_1;
                onRead = ApplicationDMSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowMobilePush, tag, writeUnknownFields) {
      if (false !== allowMobilePush.allowMobilePush) {
        tag.tag(2, ApplicationDMSettings$Type(closure_1[7]).WireType.Varint).bool(allowMobilePush.allowMobilePush);
        const tagResult = tag.tag(2, ApplicationDMSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationDMSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowMobilePush, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationDMSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp96 = new tmp96();
let tmp98 = (MessageType) => {
  class ApplicationSharingSettings$Type {
    constructor() {
      tmp = closure_3(this, ApplicationSharingSettings$Type);
      items = [];
      items[0] = {};
      items1 = ["a"];
      items1[1] = items;
      return closure_82(this, ApplicationSharingSettings$Type, items1);
    }
  }
  const arg1 = ApplicationSharingSettings$Type;
  callback3(ApplicationSharingSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { disableApplicationActivitySharing: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationSharingSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationSharingSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationSharingSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.disableApplicationActivitySharing = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = ApplicationSharingSettings$Type;
                let tmp13 = closure_1;
                onRead = ApplicationSharingSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(disableApplicationActivitySharing, tag, writeUnknownFields) {
      if (false !== disableApplicationActivitySharing.disableApplicationActivitySharing) {
        tag.tag(1, ApplicationSharingSettings$Type(closure_1[7]).WireType.Varint).bool(disableApplicationActivitySharing.disableApplicationActivitySharing);
        const tagResult = tag.tag(1, ApplicationSharingSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationSharingSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disableApplicationActivitySharing, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationSharingSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp98 = new tmp98();
let definePropertyResult = (MessageType) => {
  class AdsSettings$Type {
    constructor() {
      tmp = closure_3(this, AdsSettings$Type);
      items = [];
      items[0] = {};
      items1 = [null];
      items1[1] = items;
      return closure_82(this, AdsSettings$Type, items1);
    }
  }
  const arg1 = AdsSettings$Type;
  callback3(AdsSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { alwaysDeliver: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AdsSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AdsSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AdsSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.alwaysDeliver = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AdsSettings$Type;
                let tmp13 = closure_1;
                onRead = AdsSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(alwaysDeliver, tag, writeUnknownFields) {
      if (false !== alwaysDeliver.alwaysDeliver) {
        tag.tag(1, AdsSettings$Type(closure_1[7]).WireType.Varint).bool(alwaysDeliver.alwaysDeliver);
        const tagResult = tag.tag(1, AdsSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AdsSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, alwaysDeliver, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AdsSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = (MessageType) => {
  class InAppFeedbackState$Type {
    constructor() {
      tmp = closure_3(this, InAppFeedbackState$Type);
      obj = { -111020099: "status_created_at_ms", 1351895378: "message", 1456955659: "WHITE" };
      obj.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items = [, ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).UInt64Value;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_82(this, InAppFeedbackState$Type, items1);
    }
  }
  const arg1 = InAppFeedbackState$Type;
  callback3(InAppFeedbackState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InAppFeedbackState$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InAppFeedbackState$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InAppFeedbackState$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp31 = InAppFeedbackState$Type;
          let tmp32 = closure_1;
          let UInt64Value2 = InAppFeedbackState$Type(closure_1[9]).UInt64Value;
          let tmp33 = UInt64Value2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.lastImpressionTime = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastImpressionTime);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = InAppFeedbackState$Type;
          let tmp27 = closure_1;
          let UInt64Value = InAppFeedbackState$Type(closure_1[9]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.optOutExpiryTime = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.optOutExpiryTime);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = InAppFeedbackState$Type;
                let tmp13 = closure_1;
                onRead = InAppFeedbackState$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(lastImpressionTime, tag, writeUnknownFields) {
      if (lastImpressionTime.lastImpressionTime) {
        const UInt64Value = InAppFeedbackState$Type(closure_1[9]).UInt64Value;
        const tagResult = tag.tag(1, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (lastImpressionTime.optOutExpiryTime) {
        const UInt64Value2 = InAppFeedbackState$Type(closure_1[9]).UInt64Value;
        const tagResult1 = tag.tag(2, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, InAppFeedbackState$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InAppFeedbackState$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lastImpressionTime, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(InAppFeedbackState$Type, items);
}(arg1(dependencyMap[7]).MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = (MessageType) => {
  class DefaultReactionEmoji$Type {
    constructor() {
      tmp = closure_3(this, DefaultReactionEmoji$Type);
      obj = { -111020099: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002131383109317, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000491307150247943, 1456955659: 1313987696698525500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items = [, , , ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[9]).StringValue;
            }
      };
      items[2] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items[3] = {
        T() {
              return callback(closure_1[9]).BoolValue;
            }
      };
      items1 = [true];
      items1[1] = items;
      return closure_82(this, DefaultReactionEmoji$Type, items1);
    }
  }
  const arg1 = DefaultReactionEmoji$Type;
  callback3(DefaultReactionEmoji$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DefaultReactionEmoji$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DefaultReactionEmoji$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = DefaultReactionEmoji$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp41 = DefaultReactionEmoji$Type;
          let tmp42 = closure_1;
          let UInt64Value = DefaultReactionEmoji$Type(closure_1[9]).UInt64Value;
          let tmp43 = UInt64Value;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.emojiId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = DefaultReactionEmoji$Type;
          let tmp37 = closure_1;
          let StringValue = DefaultReactionEmoji$Type(closure_1[9]).StringValue;
          let tmp38 = StringValue;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.emojiName = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiName);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = DefaultReactionEmoji$Type;
          let tmp32 = closure_1;
          let BoolValue2 = DefaultReactionEmoji$Type(closure_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.animated = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.animated);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = DefaultReactionEmoji$Type;
          let tmp27 = closure_1;
          let BoolValue = DefaultReactionEmoji$Type(closure_1[9]).BoolValue;
          let tmp28 = BoolValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.disableDoubleTap = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableDoubleTap);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = DefaultReactionEmoji$Type;
                let tmp13 = closure_1;
                onRead = DefaultReactionEmoji$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(emojiId, tag, writeUnknownFields) {
      if (emojiId.emojiId) {
        const UInt64Value = DefaultReactionEmoji$Type(closure_1[9]).UInt64Value;
        const tagResult = tag.tag(1, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.emojiName) {
        const StringValue = DefaultReactionEmoji$Type(closure_1[9]).StringValue;
        const tagResult1 = tag.tag(2, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.animated) {
        const BoolValue = DefaultReactionEmoji$Type(closure_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.disableDoubleTap) {
        const BoolValue2 = DefaultReactionEmoji$Type(closure_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, DefaultReactionEmoji$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DefaultReactionEmoji$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojiId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DefaultReactionEmoji$Type, items);
}(arg1(dependencyMap[7]).MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = (MessageType) => {
  class InAppFeedbackSettings$Type {
    constructor() {
      tmp = closure_3(this, InAppFeedbackSettings$Type);
      obj = {
        kind: "message",
        T() {
              return closure_78;
            }
      };
      items = [];
      items[0] = { V: obj };
      items1 = [true];
      items1[1] = items;
      return closure_82(this, InAppFeedbackSettings$Type, items1);
    }
  }
  const arg1 = InAppFeedbackSettings$Type;
  callback3(InAppFeedbackSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { inAppFeedbackStates: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InAppFeedbackSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InAppFeedbackSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InAppFeedbackSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.inAppFeedbackStates, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = InAppFeedbackSettings$Type;
                let tmp13 = closure_1;
                onRead = InAppFeedbackSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_78;
            internalBinaryReadResult = closure_78.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = int32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_78.create();
      }
      arg0[num] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(inAppFeedbackStates, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(inAppFeedbackStates.inAppFeedbackStates);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult1.int32(parseInt(tmp));
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_78;
          let internalBinaryWriteResult = closure_78.internalBinaryWrite(inAppFeedbackStates.inAppFeedbackStates[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InAppFeedbackSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, inAppFeedbackStates, tag);
      }
      return tag;
    }
  };
  return callback(InAppFeedbackSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = (MessageType) => {
  class AppVersionSettings$Type {
    constructor() {
      tmp = closure_3(this, AppVersionSettings$Type);
      items = [];
      items[0] = {};
      items1 = [null];
      items1[1] = items;
      return closure_82(this, AppVersionSettings$Type, items1);
    }
  }
  const arg1 = AppVersionSettings$Type;
  callback3(AppVersionSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { isUsingOutdatedMobileVersion: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AppVersionSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AppVersionSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AppVersionSettings$Type(closure_1[7]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.isUsingOutdatedMobileVersion = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = AppVersionSettings$Type;
                let tmp13 = closure_1;
                onRead = AppVersionSettings$Type(closure_1[7]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(isUsingOutdatedMobileVersion, tag, writeUnknownFields) {
      if (false !== isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion) {
        tag.tag(1, AppVersionSettings$Type(closure_1[7]).WireType.Varint).bool(isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion);
        const tagResult = tag.tag(1, AppVersionSettings$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AppVersionSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, isUsingOutdatedMobileVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AppVersionSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx");

export const InboxTab = obj;
export const HubProgressStep = { NO_PROGRESS: 0, [0]: "NO_PROGRESS", JOIN_GUILD: 1, [1]: "JOIN_GUILD", INVITE_USER: 2, [2]: "INVITE_USER", CONTACT_SYNC: 4, [4]: "CONTACT_SYNC" };
export const GuildOnboardingProgress = { NO_GUILD_ONBOARDING: 0, [0]: "NO_GUILD_ONBOARDING", GUILD_NOTICE_SHOWN: 1, [1]: "GUILD_NOTICE_SHOWN", GUILD_NOTICE_CLEARED: 2, [2]: "GUILD_NOTICE_CLEARED" };
export const ExplicitContentRedaction = obj;
export const DmSpamFilterV2 = obj;
export const ReactionNotificationType = obj1;
export const GameActivityNotificationType = obj2;
export const CustomStatusPushNotificationType = obj3;
export const SearchProvider = obj4;
export const GuildActivityStatusRestrictionDefault = obj5;
export const GuildActivityStatusRestrictionDefaultV2 = obj6;
export const GuildsLeaderboardOptOutDefault = obj7;
export const SlayerSDKReceiveInGameDMs = obj8;
export const ProfileVisibility = obj9;
export const GuildThemeSourcePreference = obj10;
export const UIDensity = obj11;
export const Theme = obj12;
export const BackgroundGradientPresetId = { MINT_APPLE: 0, [0]: "MINT_APPLE", CITRUS_SHERBERT: 1, [1]: "CITRUS_SHERBERT", RETRO_RAINCLOUD: 2, [2]: "RETRO_RAINCLOUD", HANAMI: 3, [3]: "HANAMI", SUNRISE: 4, [4]: "SUNRISE", COTTON_CANDY: 5, [5]: "COTTON_CANDY", LOFI_VIBES: 6, [6]: "LOFI_VIBES", DESERT_KHAKI: 7, [7]: "DESERT_KHAKI", SUNSET: 8, [8]: "SUNSET", CHROMA_GLOW: 9, [9]: "CHROMA_GLOW", FOREST: 10, [10]: "FOREST", CRIMSON_MOON: 11, [11]: "CRIMSON_MOON", MIDNIGHT_BLURPLE: 12, [12]: "MIDNIGHT_BLURPLE", MARS: 13, [13]: "MARS", DUSK: 14, [14]: "DUSK", UNDER_THE_SEA: 15, [15]: "UNDER_THE_SEA", EASTER_EGG: 16, [16]: "EASTER_EGG", RETRO_STORM: 17, [17]: "RETRO_STORM", NEON_NIGHTS: 18, [18]: "NEON_NIGHTS", SEPIA: 19, [19]: "SEPIA", STRAWBERRY_LEMONADE: 20, [20]: "STRAWBERRY_LEMONADE", AURORA: 21, [21]: "AURORA", BLURPLE_TWILIGHT: 22, [22]: "BLURPLE_TWILIGHT" };
export const TimestampHourCycle = obj13;
export const LaunchPadMode = obj14;
export const SwipeRightToLeftMode = obj15;
export const FavoriteChannelType = obj16;
export const SafetySettingsPresetType = obj17;
export const ForLaterTab = obj18;
export const InAppFeedbackType = { VOICE: 0, [0]: "VOICE", STREAM: 1, [1]: "STREAM", VIDEO_BACKGROUND: 2, [2]: "VIDEO_BACKGROUND", ACTIVITY: 3, [3]: "ACTIVITY", IN_APP_REPORTS: 4, [4]: "IN_APP_REPORTS", SEARCH_RESULTS: 8, [8]: "SEARCH_RESULTS" };
export const PreloadedUserSettings = tmp2;
export const InboxSettings = tmp4;
export const AllGuildSettings = tmp6;
export const GuildDismissibleContentState = tmp8;
export const GuildSettings = tmp10;
export const ChannelIconEmoji = tmp12;
export const ChannelSettings = tmp14;
export const CustomNotificationSoundConfig = tmp16;
export const RecurringDismissibleContentState = tmp18;
export const UserContentSettings = tmp20;
export const VideoFilterAsset = tmp22;
export const VideoFilterBackgroundBlur = tmp24;
export const VoiceAndVideoSettings = tmp26;
export const ExplicitContentSettings = tmp28;
export const GoreContentSettings = tmp30;
export const SelfHarmContentSettings = tmp32;
export const KeywordFilterSettings = tmp34;
export const TextAndImagesSettings = tmp36;
export const NotificationSettings = tmp38;
export const PrivacySettings = tmp40;
export const DebugSettings = tmp42;
export const GameLibrarySettings = tmp44;
export const StatusSettings = tmp46;
export const CustomStatus = tmp48;
export const LocalizationSettings = tmp50;
export const ChannelListSettings = tmp52;
export const AppearanceSettings = tmp54;
export const CustomUserThemeSettings = tmp56;
export const ClientThemeSettings = tmp58;
export const GuildFolders = tmp60;
export const GuildFolder = tmp62;
export const Favorites = tmp64;
export const FavoriteChannel = tmp66;
export const AudioContextSetting = tmp68;
export const AudioSettings = tmp70;
export const CommunitiesSettings = tmp72;
export const SoundboardSettings = tmp74;
export const CustomCallSound = tmp76;
export const BroadcastSettings = tmp78;
export const ClipsSettings = tmp80;
export const SpendingLimit = tmp82;
export const SpendingLimitSettings = tmp84;
export const SafetySettings = tmp86;
export const ForLaterSettings = tmp88;
export const ICYMISettings = tmp90;
export const AllApplicationSettings = tmp92;
export const ApplicationSettings = tmp94;
export const ApplicationDMSettings = tmp96;
export const ApplicationSharingSettings = tmp98;
export const AdsSettings = definePropertyResult;
export const InAppFeedbackState = definePropertyResult;
export const DefaultReactionEmoji = definePropertyResult;
export const InAppFeedbackSettings = definePropertyResult;
export const AppVersionSettings = definePropertyResult;
