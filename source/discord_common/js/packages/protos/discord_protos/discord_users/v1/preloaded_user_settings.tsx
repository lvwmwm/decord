// Module ID: 1282
// Function ID: 14496
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1283, 1284, 1312, 1313, 2]

// Module 1282 (_callSuper)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_1284 from "module_1284";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MENTIONS: 1, [1]: "MENTIONS", UNREADS: 2, [2]: "UNREADS", TODOS: 3, [3]: "TODOS", FOR_YOU: 4, [4]: "FOR_YOU", GAME_INVITES: 5, [5]: "GAME_INVITES", BOOKMARKS: 6, [6]: "BOOKMARKS", SCHEDULED: 7, [7]: "SCHEDULED", REMINDERS: 8, [8]: "REMINDERS" };
obj = { UNSET_EXPLICIT_CONTENT_REDACTION: 0, [0]: "UNSET_EXPLICIT_CONTENT_REDACTION", SHOW: 1, [1]: "SHOW", BLUR: 2, [2]: "BLUR", BLOCK: 3, [3]: "BLOCK" };
obj = { DEFAULT_UNSET: 0, [0]: "DEFAULT_UNSET", DISABLED: 1, [1]: "DISABLED", NON_FRIENDS: 2, [2]: "NON_FRIENDS", FRIENDS_AND_NON_FRIENDS: 3, [3]: "FRIENDS_AND_NON_FRIENDS" };
let obj1 = { NOTIFICATIONS_ENABLED: 0, [0]: "NOTIFICATIONS_ENABLED", ONLY_DMS: 1, [1]: "ONLY_DMS", NOTIFICATIONS_DISABLED: 2, [2]: "NOTIFICATIONS_DISABLED" };
let obj2 = { ACTIVITY_NOTIFICATIONS_UNSET: 0, [0]: "ACTIVITY_NOTIFICATIONS_UNSET", ACTIVITY_NOTIFICATIONS_DISABLED: 1, [1]: "ACTIVITY_NOTIFICATIONS_DISABLED", ACTIVITY_NOTIFICATIONS_ENABLED: 2, [2]: "ACTIVITY_NOTIFICATIONS_ENABLED", ONLY_GAMES_PLAYED: 3, [3]: "ONLY_GAMES_PLAYED" };
let obj3 = { STATUS_PUSH_UNSET: 0, [0]: "STATUS_PUSH_UNSET", STATUS_PUSH_ENABLED: 1, [1]: "STATUS_PUSH_ENABLED", STATUS_PUSH_DISABLED: 2, [2]: "STATUS_PUSH_DISABLED" };
let obj4 = { UNSET: 0, [0]: "UNSET", GOOGLE: 1, [1]: "GOOGLE", BING: 2, [2]: "BING", DUCKDUCKGO: 3, [3]: "DUCKDUCKGO", CUSTOM: 4, [4]: "CUSTOM" };
let obj5 = { OFF: 0, [0]: "OFF", ON_FOR_LARGE_GUILDS: 1, [1]: "ON_FOR_LARGE_GUILDS", ON: 2, [2]: "ON" };
let obj6 = { ACTIVITY_STATUS_UNSET: 0, [0]: "ACTIVITY_STATUS_UNSET", ACTIVITY_STATUS_OFF: 1, [1]: "ACTIVITY_STATUS_OFF", ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS: 2, [2]: "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS", ACTIVITY_STATUS_ON: 3, [3]: "ACTIVITY_STATUS_ON" };
let obj7 = { OFF_FOR_NEW_GUILDS: 0, [0]: "OFF_FOR_NEW_GUILDS", ON_FOR_NEW_GUILDS: 1, [1]: "ON_FOR_NEW_GUILDS" };
let obj8 = { SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET: 0, [0]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET", SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL: 1, [1]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL", SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME: 2, [2]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME", SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE: 3, [3]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE" };
let obj9 = { UNSET: 0, [0]: "UNSET", FRIENDS_ONLY: 1, [1]: "FRIENDS_ONLY", FRIENDS_AND_SMALL_GUILDS: 2, [2]: "FRIENDS_AND_SMALL_GUILDS", FRIENDS_AND_ALL_GUILDS: 3, [3]: "FRIENDS_AND_ALL_GUILDS" };
let obj10 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PERSONAL: 1, [1]: "PERSONAL", GUILD: 2, [2]: "GUILD" };
let obj11 = { UNSET_UI_DENSITY: 0, [0]: "UNSET_UI_DENSITY", COMPACT: 1, [1]: "COMPACT", COZY: 2, [2]: "COZY", RESPONSIVE: 3, [3]: "RESPONSIVE", DEFAULT: 4, [4]: "DEFAULT" };
let obj12 = { UNSET: 0, [0]: "UNSET", DARK: 1, [1]: "DARK", LIGHT: 2, [2]: "LIGHT", DARKER: 3, [3]: "DARKER", MIDNIGHT: 4, [4]: "MIDNIGHT" };
let obj13 = { AUTO: 0, [0]: "AUTO", H12: 1, [1]: "H12", H23: 2, [2]: "H23" };
let obj14 = { LAUNCH_PAD_DISABLED: 0, [0]: "LAUNCH_PAD_DISABLED", LAUNCH_PAD_GESTURE_FULL_SCREEN: 1, [1]: "LAUNCH_PAD_GESTURE_FULL_SCREEN", LAUNCH_PAD_GESTURE_RIGHT_EDGE: 2, [2]: "LAUNCH_PAD_GESTURE_RIGHT_EDGE", LAUNCH_PAD_PULL_TAB: 3, [3]: "LAUNCH_PAD_PULL_TAB" };
let obj15 = { SWIPE_RIGHT_TO_LEFT_UNSET: 0, [0]: "SWIPE_RIGHT_TO_LEFT_UNSET", SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS: 1, [1]: "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS", SWIPE_RIGHT_TO_LEFT_REPLY: 2, [2]: "SWIPE_RIGHT_TO_LEFT_REPLY" };
let obj16 = { UNSET_FAVORITE_CHANNEL_TYPE: 0, [0]: "UNSET_FAVORITE_CHANNEL_TYPE", REFERENCE_ORIGINAL: 1, [1]: "REFERENCE_ORIGINAL", CATEGORY: 2, [2]: "CATEGORY" };
let obj17 = { UNSET_SAFETY_SETTINGS_PRESET: 0, [0]: "UNSET_SAFETY_SETTINGS_PRESET", BALANCED: 1, [1]: "BALANCED", STRICT: 2, [2]: "STRICT", RELAXED: 3, [3]: "RELAXED", CUSTOM: 4, [4]: "CUSTOM" };
let obj18 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ALL: 1, [1]: "ALL", BOOKMARKS: 2, [2]: "BOOKMARKS", REMINDERS: 3, [3]: "REMINDERS" };
let tmp2 = ((MessageType) => {
  class PreloadedUserSettings$Type {
    constructor() {
      tmp = outer1_3(this, PreloadedUserSettings$Type);
      obj = { no: 1, name: "versions", kind: "message" };
      obj.T = function T() {
        return PreloadedUserSettings$Type(outer2_1[6]).Versions;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "inbox", kind: "message" };
      obj.T = function T() {
        return outer2_29;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "guilds", kind: "message" };
      obj1.T = function T() {
        return outer2_30;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "user_content", kind: "message" };
      obj2.T = function T() {
        return outer2_37;
      };
      items[3] = obj2;
      obj3 = { no: 5, name: "voice_and_video", kind: "message" };
      obj3.T = function T() {
        return outer2_40;
      };
      items[4] = obj3;
      obj4 = { no: 6, name: "text_and_images", kind: "message" };
      obj4.T = function T() {
        return outer2_45;
      };
      items[5] = obj4;
      obj5 = { no: 7, name: "notifications", kind: "message" };
      obj5.T = function T() {
        return outer2_46;
      };
      items[6] = obj5;
      obj6 = { no: 8, name: "privacy", kind: "message" };
      obj6.T = function T() {
        return outer2_47;
      };
      items[7] = obj6;
      obj7 = { no: 9, name: "debug", kind: "message" };
      obj7.T = function T() {
        return outer2_48;
      };
      items[8] = obj7;
      obj8 = { no: 10, name: "game_library", kind: "message" };
      obj8.T = function T() {
        return outer2_49;
      };
      items[9] = obj8;
      obj9 = { no: 11, name: "status", kind: "message" };
      obj9.T = function T() {
        return outer2_50;
      };
      items[10] = obj9;
      obj10 = { no: 12, name: "localization", kind: "message" };
      obj10.T = function T() {
        return outer2_52;
      };
      items[11] = obj10;
      obj11 = { no: 13, name: "appearance", kind: "message" };
      obj11.T = function T() {
        return outer2_54;
      };
      items[12] = obj11;
      obj12 = { no: 14, name: "guild_folders", kind: "message" };
      obj12.T = function T() {
        return outer2_57;
      };
      items[13] = obj12;
      obj13 = { no: 15, name: "favorites", kind: "message" };
      obj13.T = function T() {
        return outer2_59;
      };
      items[14] = obj13;
      obj14 = { no: 16, name: "audio_context_settings", kind: "message" };
      obj14.T = function T() {
        return outer2_62;
      };
      items[15] = obj14;
      obj15 = { no: 17, name: "communities", kind: "message" };
      obj15.T = function T() {
        return outer2_63;
      };
      items[16] = obj15;
      obj16 = { no: 18, name: "broadcast", kind: "message" };
      obj16.T = function T() {
        return outer2_66;
      };
      items[17] = obj16;
      obj17 = { no: 19, name: "clips", kind: "message" };
      obj17.T = function T() {
        return outer2_67;
      };
      items[18] = obj17;
      obj18 = { no: 20, name: "for_later", kind: "message" };
      obj18.T = function T() {
        return outer2_71;
      };
      items[19] = obj18;
      obj19 = { no: 21, name: "safety_settings", kind: "message" };
      obj19.T = function T() {
        return outer2_70;
      };
      items[20] = obj19;
      obj20 = { no: 22, name: "icymi_settings", kind: "message" };
      obj20.T = function T() {
        return outer2_72;
      };
      items[21] = obj20;
      obj21 = { no: 23, name: "applications", kind: "message" };
      obj21.T = function T() {
        return outer2_73;
      };
      items[22] = obj21;
      obj22 = { no: 24, name: "ads", kind: "message" };
      obj22.T = function T() {
        return outer2_77;
      };
      items[23] = obj22;
      obj23 = { no: 25, name: "in_app_feedback_settings", kind: "message" };
      obj23.T = function T() {
        return outer2_80;
      };
      items[24] = obj23;
      obj24 = { no: 26, name: "app_version_settings", kind: "message" };
      obj24.T = function T() {
        return outer2_81;
      };
      items[25] = obj24;
      items1 = ["discord_protos.discord_users.v1.PreloadedUserSettings"];
      items1[1] = items;
      return outer1_82(this, PreloadedUserSettings$Type, items1);
    }
  }
  callback3(PreloadedUserSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PreloadedUserSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PreloadedUserSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PreloadedUserSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        obj.appVersionSettings = outer1_81.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.appVersionSettings);
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
        const Versions = PreloadedUserSettings$Type(outer1_1[6]).Versions;
        const tagResult = tag.tag(1, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = Versions.internalBinaryWrite(versions.versions, tag.tag(1, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Versions.internalBinaryWrite(versions.versions, tag.tag(1, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.inbox) {
        const tagResult1 = tag.tag(2, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_29.internalBinaryWrite(versions.inbox, tag.tag(2, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_29.internalBinaryWrite(versions.inbox, tag.tag(2, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guilds) {
        const tagResult2 = tag.tag(3, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = outer1_30.internalBinaryWrite(versions.guilds, tag.tag(3, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_30.internalBinaryWrite(versions.guilds, tag.tag(3, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.userContent) {
        const tagResult3 = tag.tag(4, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = outer1_37.internalBinaryWrite(versions.userContent, tag.tag(4, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_37.internalBinaryWrite(versions.userContent, tag.tag(4, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.voiceAndVideo) {
        const tagResult4 = tag.tag(5, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = outer1_40.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_40.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.textAndImages) {
        const tagResult5 = tag.tag(6, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = outer1_45.internalBinaryWrite(versions.textAndImages, tag.tag(6, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = outer1_45.internalBinaryWrite(versions.textAndImages, tag.tag(6, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.notifications) {
        const tagResult6 = tag.tag(7, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = outer1_46.internalBinaryWrite(versions.notifications, tag.tag(7, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_46.internalBinaryWrite(versions.notifications, tag.tag(7, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.privacy) {
        const tagResult7 = tag.tag(8, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = outer1_47.internalBinaryWrite(versions.privacy, tag.tag(8, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = outer1_47.internalBinaryWrite(versions.privacy, tag.tag(8, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.debug) {
        const tagResult8 = tag.tag(9, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined8 = outer1_48.internalBinaryWrite(versions.debug, tag.tag(9, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = outer1_48.internalBinaryWrite(versions.debug, tag.tag(9, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.gameLibrary) {
        const tagResult9 = tag.tag(10, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined9 = outer1_49.internalBinaryWrite(versions.gameLibrary, tag.tag(10, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = outer1_49.internalBinaryWrite(versions.gameLibrary, tag.tag(10, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.status) {
        const tagResult10 = tag.tag(11, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined10 = outer1_50.internalBinaryWrite(versions.status, tag.tag(11, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = outer1_50.internalBinaryWrite(versions.status, tag.tag(11, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.localization) {
        const tagResult11 = tag.tag(12, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined11 = outer1_52.internalBinaryWrite(versions.localization, tag.tag(12, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = outer1_52.internalBinaryWrite(versions.localization, tag.tag(12, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.appearance) {
        const tagResult12 = tag.tag(13, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined12 = outer1_54.internalBinaryWrite(versions.appearance, tag.tag(13, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = outer1_54.internalBinaryWrite(versions.appearance, tag.tag(13, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guildFolders) {
        const tagResult13 = tag.tag(14, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined13 = outer1_57.internalBinaryWrite(versions.guildFolders, tag.tag(14, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = outer1_57.internalBinaryWrite(versions.guildFolders, tag.tag(14, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favorites) {
        const tagResult14 = tag.tag(15, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined14 = outer1_59.internalBinaryWrite(versions.favorites, tag.tag(15, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = outer1_59.internalBinaryWrite(versions.favorites, tag.tag(15, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.audioContextSettings) {
        const tagResult15 = tag.tag(16, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined15 = outer1_62.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = outer1_62.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.communities) {
        const tagResult16 = tag.tag(17, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined16 = outer1_63.internalBinaryWrite(versions.communities, tag.tag(17, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = outer1_63.internalBinaryWrite(versions.communities, tag.tag(17, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.broadcast) {
        const tagResult17 = tag.tag(18, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined17 = outer1_66.internalBinaryWrite(versions.broadcast, tag.tag(18, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = outer1_66.internalBinaryWrite(versions.broadcast, tag.tag(18, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.clips) {
        const tagResult18 = tag.tag(19, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined18 = outer1_67.internalBinaryWrite(versions.clips, tag.tag(19, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = outer1_67.internalBinaryWrite(versions.clips, tag.tag(19, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.forLater) {
        const tagResult19 = tag.tag(20, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined19 = outer1_71.internalBinaryWrite(versions.forLater, tag.tag(20, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = outer1_71.internalBinaryWrite(versions.forLater, tag.tag(20, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.safetySettings) {
        const tagResult20 = tag.tag(21, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined20 = outer1_70.internalBinaryWrite(versions.safetySettings, tag.tag(21, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult20 = outer1_70.internalBinaryWrite(versions.safetySettings, tag.tag(21, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.icymiSettings) {
        const tagResult21 = tag.tag(22, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined21 = outer1_72.internalBinaryWrite(versions.icymiSettings, tag.tag(22, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult21 = outer1_72.internalBinaryWrite(versions.icymiSettings, tag.tag(22, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applications) {
        const tagResult22 = tag.tag(23, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined22 = outer1_73.internalBinaryWrite(versions.applications, tag.tag(23, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult22 = outer1_73.internalBinaryWrite(versions.applications, tag.tag(23, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.ads) {
        const tagResult23 = tag.tag(24, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined23 = outer1_77.internalBinaryWrite(versions.ads, tag.tag(24, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult23 = outer1_77.internalBinaryWrite(versions.ads, tag.tag(24, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.inAppFeedbackSettings) {
        const tagResult24 = tag.tag(25, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined24 = outer1_80.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult24 = outer1_80.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.appVersionSettings) {
        joined25 = outer1_81;
        joined25 = PreloadedUserSettings$Type;
        joined25 = outer1_1;
        const tagResult25 = tag.tag(26, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined25 = outer1_81.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult25 = outer1_81.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, PreloadedUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined25 = PreloadedUserSettings$Type;
          joined25 = outer1_1;
          onWrite = PreloadedUserSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined25 = onWrite(this.typeName, versions, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PreloadedUserSettings$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let tmp4 = ((MessageType) => {
  class InboxSettings$Type {
    constructor() {
      tmp = outer1_3(this, InboxSettings$Type);
      obj = { no: 1, name: "current_tab", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.InboxTab", outer2_8, "INBOX_TAB_"];
        return items;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.InboxSettings"];
      items1[1] = items;
      return outer1_82(this, InboxSettings$Type, items1);
    }
  }
  callback3(InboxSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { currentTab: 0, viewedTutorial: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InboxSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InboxSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InboxSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = InboxSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(currentTab, tag, writeUnknownFields) {
      if (0 !== currentTab.currentTab) {
        tag.tag(1, InboxSettings$Type(outer1_1[7]).WireType.Varint).int32(currentTab.currentTab);
        const tagResult = tag.tag(1, InboxSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== currentTab.viewedTutorial) {
        tag.tag(2, InboxSettings$Type(outer1_1[7]).WireType.Varint).bool(currentTab.viewedTutorial);
        const tagResult1 = tag.tag(2, InboxSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InboxSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, currentTab, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(InboxSettings$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_29 = tmp4;
let tmp6 = ((MessageType) => {
  class AllGuildSettings$Type {
    constructor() {
      tmp = outer1_3(this, AllGuildSettings$Type);
      obj = { no: 1, name: "guilds", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_32;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.AllGuildSettings"];
      items1[1] = items;
      return outer1_82(this, AllGuildSettings$Type, items1);
    }
  }
  callback3(AllGuildSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guilds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AllGuildSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AllGuildSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AllGuildSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AllGuildSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_32;
            internalBinaryReadResult = outer1_32.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_32.create();
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
          let tmp2 = AllGuildSettings$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, AllGuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, AllGuildSettings$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, AllGuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_32;
          let internalBinaryWriteResult = outer1_32.internalBinaryWrite(guilds.guilds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AllGuildSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guilds, tag);
      }
      return tag;
    }
  };
  return callback(AllGuildSettings$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let closure_30 = tmp6;
let tmp8 = ((MessageType) => {
  class GuildDismissibleContentState$Type {
    constructor() {
      tmp = outer1_3(this, GuildDismissibleContentState$Type);
      items = [, , , , ];
      items[0] = { no: 1, name: "dismissed", kind: "scalar", T: 8 };
      items[1] = { no: 2, name: "last_dismissed_version", kind: "scalar", T: 13 };
      items[2] = { no: 3, name: "last_dismissed_at_ms", kind: "scalar", T: 4 };
      items[3] = { no: 4, name: "last_dismissed_object_id", kind: "scalar", T: 4 };
      items[4] = { no: 5, name: "num_times_dismissed", kind: "scalar", T: 13 };
      items1 = ["discord_protos.discord_users.v1.GuildDismissibleContentState"];
      items1[1] = items;
      return outer1_82(this, GuildDismissibleContentState$Type, items1);
    }
  }
  callback3(GuildDismissibleContentState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildDismissibleContentState$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildDismissibleContentState$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildDismissibleContentState$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = GuildDismissibleContentState$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(dismissed, tag, writeUnknownFields) {
      if (false !== dismissed.dismissed) {
        tag.tag(1, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint).bool(dismissed.dismissed);
        const tagResult = tag.tag(1, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== dismissed.lastDismissedVersion) {
        tag.tag(2, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint32(dismissed.lastDismissedVersion);
        const tagResult1 = tag.tag(2, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if ("0" !== dismissed.lastDismissedAtMs) {
        tag.tag(3, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint64(dismissed.lastDismissedAtMs);
        const tagResult2 = tag.tag(3, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if ("0" !== dismissed.lastDismissedObjectId) {
        tag.tag(4, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint64(dismissed.lastDismissedObjectId);
        const tagResult3 = tag.tag(4, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== dismissed.numTimesDismissed) {
        tag.tag(5, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint32(dismissed.numTimesDismissed);
        const tagResult4 = tag.tag(5, GuildDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildDismissibleContentState$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, dismissed, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildDismissibleContentState$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_31 = tmp8;
let tmp10 = ((MessageType) => {
  class GuildSettings$Type {
    constructor() {
      tmp = outer1_3(this, GuildSettings$Type);
      obj = { no: 1, name: "channels", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_34;
            }
      };
      obj.V = obj;
      items = [, , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "hub_progress", kind: "scalar", T: 13 };
      items[2] = { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 };
      obj1 = { no: 4, name: "guild_recents_dismissed_at", kind: "message" };
      obj1.T = function T() {
        return GuildSettings$Type(outer2_1[8]).Timestamp;
      };
      items[3] = obj1;
      items[4] = { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 };
      obj2 = { no: 6, name: "join_sound", kind: "message" };
      obj2.T = function T() {
        return outer2_65;
      };
      items[5] = obj2;
      obj3 = { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message" };
      obj3.T = function T() {
        return outer2_53;
      };
      items[6] = obj3;
      items[7] = { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 };
      items[8] = { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 };
      obj4 = { no: 10, name: "custom_notification_sound_config", kind: "message" };
      obj4.T = function T() {
        return outer2_35;
      };
      items[9] = obj4;
      items[10] = { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 };
      obj5 = { no: 12, name: "guild_dismissible_content_states", kind: "map", K: 5 };
      obj5.V = {
        kind: "message",
        T() {
              return outer2_31;
            }
      };
      items[11] = obj5;
      obj6 = { no: 13, name: "guild_theme_source_preference", kind: "enum" };
      obj6.T = function T() {
        const items = ["discord_protos.discord_users.v1.GuildThemeSourcePreference", outer2_20, "GUILD_THEME_SOURCE_PREFERENCE_"];
        return items;
      };
      items[12] = obj6;
      items1 = ["discord_protos.discord_users.v1.GuildSettings"];
      items1[1] = items;
      return outer1_82(this, GuildSettings$Type, items1);
    }
  }
  callback3(GuildSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { channels: {}, hubProgress: 0, guildOnboardingProgress: 0, dismissedGuildContent: null, disableRaidAlertPush: false, disableRaidAlertNag: false, leaderboardsDisabled: false, guildDismissibleContentStates: null, guildThemeSourcePreference: 0 };
      const uint8Array = new Uint8Array(0);
      obj.dismissedGuildContent = uint8Array;
      obj.guildDismissibleContentStates = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , , ];
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_34;
            internalBinaryReadResult = outer1_34.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_34.create();
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_31;
            internalBinaryReadResult = outer1_31.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_31.create();
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
          let tmp2 = GuildSettings$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, GuildSettings$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_34;
          let internalBinaryWriteResult = outer1_34.internalBinaryWrite(channels.channels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (0 !== channels.hubProgress) {
        tag.tag(2, GuildSettings$Type(outer1_1[7]).WireType.Varint).uint32(channels.hubProgress);
        const tagResult3 = tag.tag(2, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== channels.guildOnboardingProgress) {
        tag.tag(3, GuildSettings$Type(outer1_1[7]).WireType.Varint).uint32(channels.guildOnboardingProgress);
        const tagResult4 = tag.tag(3, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (channels.guildRecentsDismissedAt) {
        const Timestamp = GuildSettings$Type(outer1_1[8]).Timestamp;
        const tagResult5 = tag.tag(4, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (channels.dismissedGuildContent.length) {
        tag.tag(5, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).bytes(channels.dismissedGuildContent);
        const tagResult6 = tag.tag(5, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (channels.joinSound) {
        const tagResult7 = tag.tag(6, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = outer1_65.internalBinaryWrite(channels.joinSound, tag.tag(6, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_65.internalBinaryWrite(channels.joinSound, tag.tag(6, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (channels.mobileRedesignChannelListSettings) {
        const tagResult8 = tag.tag(7, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = outer1_53.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_53.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== channels.disableRaidAlertPush) {
        tag.tag(8, GuildSettings$Type(outer1_1[7]).WireType.Varint).bool(channels.disableRaidAlertPush);
        const tagResult9 = tag.tag(8, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== channels.disableRaidAlertNag) {
        tag.tag(9, GuildSettings$Type(outer1_1[7]).WireType.Varint).bool(channels.disableRaidAlertNag);
        const tagResult10 = tag.tag(9, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (channels.customNotificationSoundConfig) {
        const tagResult11 = tag.tag(10, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = outer1_35.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_35.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== channels.leaderboardsDisabled) {
        tag.tag(11, GuildSettings$Type(outer1_1[7]).WireType.Varint).bool(channels.leaderboardsDisabled);
        const tagResult12 = tag.tag(11, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      const keys1 = Object.keys(channels.guildDismissibleContentStates);
      let num11 = 0;
      if (0 < keys1.length) {
        do {
          let tmp42 = keys1[num11];
          let tmp43 = GuildSettings$Type;
          let tmp44 = outer1_1;
          let tagResult13 = tag.tag(12, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult2 = tagResult13.fork();
          let tagResult14 = forkResult2.tag(1, GuildSettings$Type(outer1_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult14.int32(parseInt(tmp42));
          let tagResult15 = tag.tag(2, GuildSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult3 = tagResult15.fork();
          let tmp47 = outer1_31;
          let internalBinaryWriteResult5 = outer1_31.internalBinaryWrite(channels.guildDismissibleContentStates[tmp42], tag, writeUnknownFields);
          let joined6 = tag.join();
          let joined7 = joined6.join();
          num11 = num11 + 1;
          length2 = keys1.length;
        } while (num11 < length2);
      }
      if (0 !== channels.guildThemeSourcePreference) {
        tag.tag(13, GuildSettings$Type(outer1_1[7]).WireType.Varint).int32(channels.guildThemeSourcePreference);
        const tagResult16 = tag.tag(13, GuildSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, channels, tag);
      }
      return tag;
    }
  };
  return callback(GuildSettings$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_32 = tmp10;
let tmp12 = ((MessageType) => {
  class ChannelIconEmoji$Type {
    constructor() {
      tmp = outer1_3(this, ChannelIconEmoji$Type);
      obj = { no: 1, name: "id", kind: "message" };
      obj.T = function T() {
        return ChannelIconEmoji$Type(outer2_1[9]).UInt64Value;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "name", kind: "message" };
      obj.T = function T() {
        return ChannelIconEmoji$Type(outer2_1[9]).StringValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "color", kind: "message" };
      obj1.T = function T() {
        return ChannelIconEmoji$Type(outer2_1[9]).UInt64Value;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.ChannelIconEmoji"];
      items1[1] = items;
      return outer1_82(this, ChannelIconEmoji$Type, items1);
    }
  }
  callback3(ChannelIconEmoji$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelIconEmoji$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelIconEmoji$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelIconEmoji$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = ChannelIconEmoji$Type;
          let tmp37 = outer1_1;
          let UInt64Value2 = ChannelIconEmoji$Type(outer1_1[9]).UInt64Value;
          let tmp38 = UInt64Value2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.id = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = ChannelIconEmoji$Type;
          let tmp32 = outer1_1;
          let StringValue = ChannelIconEmoji$Type(outer1_1[9]).StringValue;
          let tmp33 = StringValue;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = ChannelIconEmoji$Type;
          let tmp27 = outer1_1;
          let UInt64Value = ChannelIconEmoji$Type(outer1_1[9]).UInt64Value;
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
                let tmp13 = outer1_1;
                onRead = ChannelIconEmoji$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if (id.id) {
        const UInt64Value = ChannelIconEmoji$Type(outer1_1[9]).UInt64Value;
        const tagResult = tag.tag(1, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.name) {
        const StringValue = ChannelIconEmoji$Type(outer1_1[9]).StringValue;
        const tagResult1 = tag.tag(2, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.color) {
        const UInt64Value2 = ChannelIconEmoji$Type(outer1_1[9]).UInt64Value;
        const tagResult2 = tag.tag(3, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, ChannelIconEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelIconEmoji$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelIconEmoji$Type, items);
})(require("module_1284").MessageType);
tmp12 = new tmp12();
let closure_33 = tmp12;
let tmp14 = ((MessageType) => {
  class ChannelSettings$Type {
    constructor() {
      tmp = outer1_3(this, ChannelSettings$Type);
      items = [, , ];
      items[0] = { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 };
      obj = { no: 2, name: "icon_emoji", kind: "message" };
      obj.T = function T() {
        return outer2_33;
      };
      items[1] = obj;
      obj = { no: 3, name: "custom_notification_sound_config", kind: "message" };
      obj.T = function T() {
        return outer2_35;
      };
      items[2] = obj;
      items1 = ["discord_protos.discord_users.v1.ChannelSettings"];
      items1[1] = items;
      return outer1_82(this, ChannelSettings$Type, items1);
    }
  }
  callback3(ChannelSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { collapsedInInbox: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.collapsedInInbox = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp30 = outer1_33;
          let tmp31 = outer1_33;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.iconEmoji = outer1_33.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iconEmoji);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = outer1_35;
          let tmp27 = outer1_35;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.customNotificationSoundConfig = outer1_35.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customNotificationSoundConfig);
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
                let tmp13 = outer1_1;
                onRead = ChannelSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(collapsedInInbox, tag, writeUnknownFields) {
      if (false !== collapsedInInbox.collapsedInInbox) {
        tag.tag(1, ChannelSettings$Type(outer1_1[7]).WireType.Varint).bool(collapsedInInbox.collapsedInInbox);
        const tagResult = tag.tag(1, ChannelSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (collapsedInInbox.iconEmoji) {
        const tagResult1 = tag.tag(2, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_33.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_33.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (collapsedInInbox.customNotificationSoundConfig) {
        const tagResult2 = tag.tag(3, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_35.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_35.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, ChannelSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, collapsedInInbox, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelSettings$Type, items);
})(require("module_1284").MessageType);
tmp14 = new tmp14();
let closure_34 = tmp14;
let tmp16 = ((MessageType) => {
  class CustomNotificationSoundConfig$Type {
    constructor() {
      tmp = outer1_3(this, CustomNotificationSoundConfig$Type);
      obj = { no: 1, name: "notification_sound_pack_id", kind: "message" };
      obj.T = function T() {
        return CustomNotificationSoundConfig$Type(outer2_1[9]).StringValue;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.CustomNotificationSoundConfig"];
      items1[1] = items;
      return outer1_82(this, CustomNotificationSoundConfig$Type, items1);
    }
  }
  callback3(CustomNotificationSoundConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomNotificationSoundConfig$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomNotificationSoundConfig$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomNotificationSoundConfig$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = CustomNotificationSoundConfig$Type;
          let tmp27 = outer1_1;
          let StringValue = CustomNotificationSoundConfig$Type(outer1_1[9]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = CustomNotificationSoundConfig$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(notificationSoundPackId, tag, writeUnknownFields) {
      if (notificationSoundPackId.notificationSoundPackId) {
        const StringValue = CustomNotificationSoundConfig$Type(outer1_1[9]).StringValue;
        const tagResult = tag.tag(1, CustomNotificationSoundConfig$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, CustomNotificationSoundConfig$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, CustomNotificationSoundConfig$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomNotificationSoundConfig$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, notificationSoundPackId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomNotificationSoundConfig$Type, items);
})(require("module_1284").MessageType);
tmp16 = new tmp16();
let closure_35 = tmp16;
let tmp18 = ((MessageType) => {
  class RecurringDismissibleContentState$Type {
    constructor() {
      tmp = outer1_3(this, RecurringDismissibleContentState$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "last_dismissed_version", kind: "scalar", T: 13 };
      items[1] = { no: 2, name: "last_dismissed_at_ms", kind: "scalar", T: 4 };
      items[2] = { no: 3, name: "last_dismissed_object_id", kind: "scalar", T: 4 };
      items[3] = { no: 4, name: "num_times_dismissed", kind: "scalar", T: 13 };
      items1 = ["discord_protos.discord_users.v1.RecurringDismissibleContentState"];
      items1[1] = items;
      return outer1_82(this, RecurringDismissibleContentState$Type, items1);
    }
  }
  callback3(RecurringDismissibleContentState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RecurringDismissibleContentState$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RecurringDismissibleContentState$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = RecurringDismissibleContentState$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = RecurringDismissibleContentState$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(lastDismissedVersion, tag, writeUnknownFields) {
      if (0 !== lastDismissedVersion.lastDismissedVersion) {
        tag.tag(1, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint32(lastDismissedVersion.lastDismissedVersion);
        const tagResult = tag.tag(1, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if ("0" !== lastDismissedVersion.lastDismissedAtMs) {
        tag.tag(2, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint64(lastDismissedVersion.lastDismissedAtMs);
        const tagResult1 = tag.tag(2, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if ("0" !== lastDismissedVersion.lastDismissedObjectId) {
        tag.tag(3, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint64(lastDismissedVersion.lastDismissedObjectId);
        const tagResult2 = tag.tag(3, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== lastDismissedVersion.numTimesDismissed) {
        tag.tag(4, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint).uint32(lastDismissedVersion.numTimesDismissed);
        const tagResult3 = tag.tag(4, RecurringDismissibleContentState$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RecurringDismissibleContentState$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lastDismissedVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RecurringDismissibleContentState$Type, items);
})(require("module_1284").MessageType);
tmp18 = new tmp18();
let closure_36 = tmp18;
let tmp20 = ((MessageType) => {
  class UserContentSettings$Type {
    constructor() {
      tmp = outer1_3(this, UserContentSettings$Type);
      items = [, , , , , , , ];
      items[0] = { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 };
      obj = { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message" };
      obj.T = function T() {
        return UserContentSettings$Type(outer2_1[9]).StringValue;
      };
      items[1] = obj;
      obj = { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message" };
      obj.T = function T() {
        return UserContentSettings$Type(outer2_1[8]).Timestamp;
      };
      items[2] = obj;
      obj1 = { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message" };
      obj1.T = function T() {
        return UserContentSettings$Type(outer2_1[8]).Timestamp;
      };
      items[3] = obj1;
      obj2 = { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message" };
      obj2.T = function T() {
        return UserContentSettings$Type(outer2_1[8]).Timestamp;
      };
      items[4] = obj2;
      items[5] = { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 };
      obj3 = { no: 7, name: "recurring_dismissible_content_states", kind: "map", K: 5 };
      obj3.V = {
        kind: "message",
        T() {
              return outer2_36;
            }
      };
      items[6] = obj3;
      items[7] = { no: 8, name: "last_gift_intent_dismissed_at_ms", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_users.v1.UserContentSettings"];
      items1[1] = items;
      return outer1_82(this, UserContentSettings$Type, items1);
    }
  }
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
      _Object.defineProperty(obj, UserContentSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserContentSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserContentSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.dismissedContents = pos.bytes();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp42 = UserContentSettings$Type;
          let tmp43 = outer1_1;
          let StringValue = UserContentSettings$Type(outer1_1[9]).StringValue;
          let tmp44 = StringValue;
          let tmp45 = pos;
          let tmp46 = readUnknownField;
          obj.lastDismissedOutboundPromotionStartDate = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastDismissedOutboundPromotionStartDate);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp37 = UserContentSettings$Type;
          let tmp38 = outer1_1;
          let Timestamp3 = UserContentSettings$Type(outer1_1[8]).Timestamp;
          let tmp39 = Timestamp3;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.premiumTier0ModalDismissedAt = Timestamp3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.premiumTier0ModalDismissedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp32 = UserContentSettings$Type;
          let tmp33 = outer1_1;
          let Timestamp2 = UserContentSettings$Type(outer1_1[8]).Timestamp;
          let tmp34 = Timestamp2;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.guildOnboardingUpsellDismissedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.guildOnboardingUpsellDismissedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp27 = UserContentSettings$Type;
          let tmp28 = outer1_1;
          let Timestamp = UserContentSettings$Type(outer1_1[8]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = UserContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_36;
            internalBinaryReadResult = outer1_36.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_36.create();
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
        tag.tag(1, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).bytes(dismissedContents.dismissedContents);
        const tagResult = tag.tag(1, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (dismissedContents.lastDismissedOutboundPromotionStartDate) {
        const StringValue = UserContentSettings$Type(outer1_1[9]).StringValue;
        const tagResult1 = tag.tag(2, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.premiumTier0ModalDismissedAt) {
        const Timestamp = UserContentSettings$Type(outer1_1[8]).Timestamp;
        const tagResult2 = tag.tag(3, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.guildOnboardingUpsellDismissedAt) {
        const Timestamp2 = UserContentSettings$Type(outer1_1[8]).Timestamp;
        const tagResult3 = tag.tag(4, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (dismissedContents.safetyUserSentimentNoticeDismissedAt) {
        const Timestamp3 = UserContentSettings$Type(outer1_1[8]).Timestamp;
        const tagResult4 = tag.tag(5, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== dismissedContents.lastReceivedChangelogId) {
        tag.tag(6, UserContentSettings$Type(outer1_1[7]).WireType.Bit64).fixed64(dismissedContents.lastReceivedChangelogId);
        const tagResult5 = tag.tag(6, UserContentSettings$Type(outer1_1[7]).WireType.Bit64);
      }
      const keys = Object.keys(dismissedContents.recurringDismissibleContentStates);
      let num17 = 0;
      if (0 < keys.length) {
        do {
          let tmp19 = keys[num17];
          let tmp20 = UserContentSettings$Type;
          let tmp21 = outer1_1;
          let tagResult6 = tag.tag(7, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult6.fork();
          let tagResult7 = forkResult.tag(1, UserContentSettings$Type(outer1_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult7.int32(parseInt(tmp19));
          let tagResult8 = tag.tag(2, UserContentSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult8.fork();
          let tmp24 = outer1_36;
          let internalBinaryWriteResult4 = outer1_36.internalBinaryWrite(dismissedContents.recurringDismissibleContentStates[tmp19], tag, writeUnknownFields);
          let joined4 = tag.join();
          let joined5 = joined4.join();
          num17 = num17 + 1;
          length = keys.length;
        } while (num17 < length);
      }
      if ("0" !== dismissedContents.lastGiftIntentDismissedAtMs) {
        tag.tag(8, UserContentSettings$Type(outer1_1[7]).WireType.Bit64).fixed64(dismissedContents.lastGiftIntentDismissedAtMs);
        const tagResult9 = tag.tag(8, UserContentSettings$Type(outer1_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, dismissedContents, tag);
      }
      return tag;
    }
  };
  return callback(UserContentSettings$Type, items);
})(require("module_1284").MessageType);
tmp20 = new tmp20();
let closure_37 = tmp20;
let tmp22 = ((MessageType) => {
  class VideoFilterAsset$Type {
    constructor() {
      tmp = outer1_3(this, VideoFilterAsset$Type);
      items = [, ];
      items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
      items[1] = { no: 2, name: "asset_hash", kind: "scalar", T: 9 };
      items1 = ["discord_protos.discord_users.v1.VideoFilterAsset"];
      items1[1] = items;
      return outer1_82(this, VideoFilterAsset$Type, items1);
    }
  }
  callback3(VideoFilterAsset$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { id: "0", assetHash: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VideoFilterAsset$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VideoFilterAsset$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VideoFilterAsset$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = VideoFilterAsset$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if ("0" !== id.id) {
        tag.tag(1, VideoFilterAsset$Type(outer1_1[7]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, VideoFilterAsset$Type(outer1_1[7]).WireType.Bit64);
      }
      if ("" !== id.assetHash) {
        tag.tag(2, VideoFilterAsset$Type(outer1_1[7]).WireType.LengthDelimited).string(id.assetHash);
        const tagResult1 = tag.tag(2, VideoFilterAsset$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VideoFilterAsset$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VideoFilterAsset$Type, items);
})(require("module_1284").MessageType);
tmp22 = new tmp22();
let closure_38 = tmp22;
let tmp24 = ((MessageType) => {
  class VideoFilterBackgroundBlur$Type {
    constructor() {
      tmp = outer1_3(this, VideoFilterBackgroundBlur$Type);
      items = [];
      items[0] = { no: 1, name: "use_blur", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.VideoFilterBackgroundBlur"];
      items1[1] = items;
      return outer1_82(this, VideoFilterBackgroundBlur$Type, items1);
    }
  }
  callback3(VideoFilterBackgroundBlur$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { useBlur: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VideoFilterBackgroundBlur$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VideoFilterBackgroundBlur$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VideoFilterBackgroundBlur$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = VideoFilterBackgroundBlur$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(useBlur, tag, writeUnknownFields) {
      if (false !== useBlur.useBlur) {
        tag.tag(1, VideoFilterBackgroundBlur$Type(outer1_1[7]).WireType.Varint).bool(useBlur.useBlur);
        const tagResult = tag.tag(1, VideoFilterBackgroundBlur$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VideoFilterBackgroundBlur$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, useBlur, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VideoFilterBackgroundBlur$Type, items);
})(require("module_1284").MessageType);
tmp24 = new tmp24();
let closure_39 = tmp24;
let tmp26 = ((MessageType) => {
  class VoiceAndVideoSettings$Type {
    constructor() {
      tmp = outer1_3(this, VoiceAndVideoSettings$Type);
      obj = { no: 1, name: "blur", kind: "message", oneof: "videoBackgroundFilterDesktop" };
      obj.T = function T() {
        return outer2_39;
      };
      items = [, , , , , , , , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 };
      obj = { no: 3, name: "custom_asset", kind: "message", oneof: "videoBackgroundFilterDesktop" };
      obj.T = function T() {
        return outer2_38;
      };
      items[2] = obj;
      obj1 = { no: 5, name: "always_preview_video", kind: "message" };
      obj1.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).BoolValue;
      };
      items[3] = obj1;
      obj2 = { no: 6, name: "afk_timeout", kind: "message" };
      obj2.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).UInt32Value;
      };
      items[4] = obj2;
      obj3 = { no: 7, name: "stream_notifications_enabled", kind: "message" };
      obj3.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).BoolValue;
      };
      items[5] = obj3;
      obj4 = { no: 8, name: "native_phone_integration_enabled", kind: "message" };
      obj4.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).BoolValue;
      };
      items[6] = obj4;
      obj5 = { no: 9, name: "soundboard_settings", kind: "message" };
      obj5.T = function T() {
        return outer2_64;
      };
      items[7] = obj5;
      obj6 = { no: 10, name: "disable_stream_previews", kind: "message" };
      obj6.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).BoolValue;
      };
      items[8] = obj6;
      obj7 = { no: 11, name: "soundmoji_volume", kind: "message" };
      obj7.T = function T() {
        return VoiceAndVideoSettings$Type(outer2_1[9]).FloatValue;
      };
      items[9] = obj7;
      items1 = ["discord_protos.discord_users.v1.VoiceAndVideoSettings"];
      items1[1] = items;
      return outer1_82(this, VoiceAndVideoSettings$Type, items1);
    }
  }
  callback3(VoiceAndVideoSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { videoBackgroundFilterDesktop: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, VoiceAndVideoSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = VoiceAndVideoSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = VoiceAndVideoSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        const FloatValue = VoiceAndVideoSettings$Type(outer1_1[9]).FloatValue;
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
        const tagResult = tag.tag(1, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_39.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_39.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("presetOption" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
        tag.tag(2, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.Varint).uint32(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.presetOption);
        const tagResult1 = tag.tag(2, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if ("customAsset" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
        const tagResult2 = tag.tag(3, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_38.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_38.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.alwaysPreviewVideo) {
        const BoolValue = VoiceAndVideoSettings$Type(outer1_1[9]).BoolValue;
        const tagResult3 = tag.tag(5, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.afkTimeout) {
        const UInt32Value = VoiceAndVideoSettings$Type(outer1_1[9]).UInt32Value;
        const tagResult4 = tag.tag(6, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.streamNotificationsEnabled) {
        const BoolValue2 = VoiceAndVideoSettings$Type(outer1_1[9]).BoolValue;
        const tagResult5 = tag.tag(7, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled) {
        const BoolValue3 = VoiceAndVideoSettings$Type(outer1_1[9]).BoolValue;
        const tagResult6 = tag.tag(8, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.soundboardSettings) {
        const tagResult7 = tag.tag(9, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = outer1_64.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_64.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.disableStreamPreviews) {
        const BoolValue4 = VoiceAndVideoSettings$Type(outer1_1[9]).BoolValue;
        const tagResult8 = tag.tag(10, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (videoBackgroundFilterDesktop.soundmojiVolume) {
        const FloatValue = VoiceAndVideoSettings$Type(outer1_1[9]).FloatValue;
        const tagResult9 = tag.tag(11, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, VoiceAndVideoSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = VoiceAndVideoSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, videoBackgroundFilterDesktop, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(VoiceAndVideoSettings$Type, items);
})(require("module_1284").MessageType);
tmp26 = new tmp26();
let closure_40 = tmp26;
let tmp28 = ((MessageType) => {
  class ExplicitContentSettings$Type {
    constructor() {
      tmp = outer1_3(this, ExplicitContentSettings$Type);
      obj = { no: 1, name: "explicit_content_guilds", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "explicit_content_friend_dm", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "explicit_content_non_friend_dm", kind: "enum" };
      obj1.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.ExplicitContentSettings"];
      items1[1] = items;
      return outer1_82(this, ExplicitContentSettings$Type, items1);
    }
  }
  callback3(ExplicitContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { explicitContentGuilds: 0, explicitContentFriendDm: 0, explicitContentNonFriendDm: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ExplicitContentSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ExplicitContentSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ExplicitContentSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = ExplicitContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(explicitContentGuilds, tag, writeUnknownFields) {
      if (0 !== explicitContentGuilds.explicitContentGuilds) {
        tag.tag(1, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentGuilds);
        const tagResult = tag.tag(1, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== explicitContentGuilds.explicitContentFriendDm) {
        tag.tag(2, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentFriendDm);
        const tagResult1 = tag.tag(2, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== explicitContentGuilds.explicitContentNonFriendDm) {
        tag.tag(3, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint).int32(explicitContentGuilds.explicitContentNonFriendDm);
        const tagResult2 = tag.tag(3, ExplicitContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ExplicitContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, explicitContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ExplicitContentSettings$Type, items);
})(require("module_1284").MessageType);
tmp28 = new tmp28();
let closure_41 = tmp28;
let tmp30 = ((MessageType) => {
  class GoreContentSettings$Type {
    constructor() {
      tmp = outer1_3(this, GoreContentSettings$Type);
      obj = { no: 1, name: "gore_content_guilds", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "gore_content_friend_dm", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "gore_content_non_friend_dm", kind: "enum" };
      obj1.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.GoreContentSettings"];
      items1[1] = items;
      return outer1_82(this, GoreContentSettings$Type, items1);
    }
  }
  callback3(GoreContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { goreContentGuilds: 0, goreContentFriendDm: 0, goreContentNonFriendDm: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GoreContentSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GoreContentSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GoreContentSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = GoreContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(goreContentGuilds, tag, writeUnknownFields) {
      if (0 !== goreContentGuilds.goreContentGuilds) {
        tag.tag(1, GoreContentSettings$Type(outer1_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentGuilds);
        const tagResult = tag.tag(1, GoreContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== goreContentGuilds.goreContentFriendDm) {
        tag.tag(2, GoreContentSettings$Type(outer1_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentFriendDm);
        const tagResult1 = tag.tag(2, GoreContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== goreContentGuilds.goreContentNonFriendDm) {
        tag.tag(3, GoreContentSettings$Type(outer1_1[7]).WireType.Varint).int32(goreContentGuilds.goreContentNonFriendDm);
        const tagResult2 = tag.tag(3, GoreContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GoreContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, goreContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GoreContentSettings$Type, items);
})(require("module_1284").MessageType);
tmp30 = new tmp30();
let closure_42 = tmp30;
let tmp32 = ((MessageType) => {
  class SelfHarmContentSettings$Type {
    constructor() {
      tmp = outer1_3(this, SelfHarmContentSettings$Type);
      obj = { no: 1, name: "self_harm_content_guilds", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "self_harm_content_friend_dm", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "self_harm_content_non_friend_dm", kind: "enum" };
      obj1.T = function T() {
        const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", outer2_9];
        return items;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.SelfHarmContentSettings"];
      items1[1] = items;
      return outer1_82(this, SelfHarmContentSettings$Type, items1);
    }
  }
  callback3(SelfHarmContentSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { selfHarmContentGuilds: 0, selfHarmContentFriendDm: 0, selfHarmContentNonFriendDm: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SelfHarmContentSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SelfHarmContentSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SelfHarmContentSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = SelfHarmContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(selfHarmContentGuilds, tag, writeUnknownFields) {
      if (0 !== selfHarmContentGuilds.selfHarmContentGuilds) {
        tag.tag(1, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentGuilds);
        const tagResult = tag.tag(1, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== selfHarmContentGuilds.selfHarmContentFriendDm) {
        tag.tag(2, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentFriendDm);
        const tagResult1 = tag.tag(2, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== selfHarmContentGuilds.selfHarmContentNonFriendDm) {
        tag.tag(3, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentNonFriendDm);
        const tagResult2 = tag.tag(3, SelfHarmContentSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SelfHarmContentSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, selfHarmContentGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SelfHarmContentSettings$Type, items);
})(require("module_1284").MessageType);
tmp32 = new tmp32();
let closure_43 = tmp32;
let tmp34 = ((MessageType) => {
  class KeywordFilterSettings$Type {
    constructor() {
      tmp = outer1_3(this, KeywordFilterSettings$Type);
      obj = { no: 1, name: "profanity", kind: "message" };
      obj.T = function T() {
        return KeywordFilterSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "sexual_content", kind: "message" };
      obj.T = function T() {
        return KeywordFilterSettings$Type(outer2_1[9]).BoolValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "slurs", kind: "message" };
      obj1.T = function T() {
        return KeywordFilterSettings$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.KeywordFilterSettings"];
      items1[1] = items;
      return outer1_82(this, KeywordFilterSettings$Type, items1);
    }
  }
  callback3(KeywordFilterSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, KeywordFilterSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = KeywordFilterSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = KeywordFilterSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = KeywordFilterSettings$Type;
          let tmp37 = outer1_1;
          let BoolValue3 = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
          let tmp38 = BoolValue3;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.profanity = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.profanity);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = KeywordFilterSettings$Type;
          let tmp32 = outer1_1;
          let BoolValue2 = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.sexualContent = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.sexualContent);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = KeywordFilterSettings$Type;
          let tmp27 = outer1_1;
          let BoolValue = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = KeywordFilterSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(profanity, tag, writeUnknownFields) {
      if (profanity.profanity) {
        const BoolValue = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (profanity.sexualContent) {
        const BoolValue2 = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (profanity.slurs) {
        const BoolValue3 = KeywordFilterSettings$Type(outer1_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, KeywordFilterSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = KeywordFilterSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, profanity, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(KeywordFilterSettings$Type, items);
})(require("module_1284").MessageType);
tmp34 = new tmp34();
let closure_44 = tmp34;
let tmp36 = ((MessageType) => {
  class TextAndImagesSettings$Type {
    constructor() {
      tmp = outer1_3(this, TextAndImagesSettings$Type);
      obj = { no: 1, name: "diversity_surrogate", kind: "message" };
      obj.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).StringValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "use_rich_chat_input", kind: "message" };
      obj.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "use_thread_sidebar", kind: "message" };
      obj1.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "render_spoilers", kind: "message" };
      obj2.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).StringValue;
      };
      items[3] = obj2;
      items[4] = { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
      items[5] = { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
      obj3 = { no: 7, name: "view_image_descriptions", kind: "message" };
      obj3.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[6] = obj3;
      obj4 = { no: 8, name: "show_command_suggestions", kind: "message" };
      obj4.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[7] = obj4;
      obj5 = { no: 9, name: "inline_attachment_media", kind: "message" };
      obj5.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[8] = obj5;
      obj6 = { no: 10, name: "inline_embed_media", kind: "message" };
      obj6.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[9] = obj6;
      obj7 = { no: 11, name: "gif_auto_play", kind: "message" };
      obj7.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[10] = obj7;
      obj8 = { no: 12, name: "render_embeds", kind: "message" };
      obj8.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[11] = obj8;
      obj9 = { no: 13, name: "render_reactions", kind: "message" };
      obj9.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[12] = obj9;
      obj10 = { no: 14, name: "animate_emoji", kind: "message" };
      obj10.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[13] = obj10;
      obj11 = { no: 15, name: "animate_stickers", kind: "message" };
      obj11.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).UInt32Value;
      };
      items[14] = obj11;
      obj12 = { no: 16, name: "enable_tts_command", kind: "message" };
      obj12.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[15] = obj12;
      obj13 = { no: 17, name: "message_display_compact", kind: "message" };
      obj13.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[16] = obj13;
      obj14 = { no: 19, name: "explicit_content_filter", kind: "message" };
      obj14.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).UInt32Value;
      };
      items[17] = obj14;
      obj15 = { no: 20, name: "view_nsfw_guilds", kind: "message" };
      obj15.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[18] = obj15;
      obj16 = { no: 21, name: "convert_emoticons", kind: "message" };
      obj16.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[19] = obj16;
      obj17 = { no: 22, name: "expression_suggestions_enabled", kind: "message" };
      obj17.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[20] = obj17;
      obj18 = { no: 23, name: "view_nsfw_commands", kind: "message" };
      obj18.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[21] = obj18;
      obj19 = { no: 24, name: "use_legacy_chat_input", kind: "message" };
      obj19.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[22] = obj19;
      items[23] = { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
      obj20 = { no: 26, name: "dm_spam_filter", kind: "message" };
      obj20.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).UInt32Value;
      };
      items[24] = obj20;
      obj21 = { no: 27, name: "dm_spam_filter_v2", kind: "enum" };
      obj21.T = function T() {
        const items = ["discord_protos.discord_users.v1.DmSpamFilterV2", outer2_10];
        return items;
      };
      items[25] = obj21;
      obj22 = { no: 28, name: "include_stickers_in_autocomplete", kind: "message" };
      obj22.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[26] = obj22;
      obj23 = { no: 29, name: "explicit_content_settings", kind: "message" };
      obj23.T = function T() {
        return outer2_41;
      };
      items[27] = obj23;
      obj24 = { no: 30, name: "keyword_filter_settings", kind: "message" };
      obj24.T = function T() {
        return outer2_44;
      };
      items[28] = obj24;
      obj25 = { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message" };
      obj25.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[29] = obj25;
      obj26 = { no: 32, name: "gore_content_settings", kind: "message" };
      obj26.T = function T() {
        return outer2_42;
      };
      items[30] = obj26;
      obj27 = { no: 33, name: "default_reaction_emoji", kind: "message" };
      obj27.T = function T() {
        return outer2_79;
      };
      items[31] = obj27;
      obj28 = { no: 34, name: "show_mention_suggestions", kind: "message" };
      obj28.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[32] = obj28;
      obj29 = { no: 35, name: "self_harm_content_settings", kind: "message" };
      obj29.T = function T() {
        return outer2_43;
      };
      items[33] = obj29;
      obj30 = { no: 36, name: "is_cross_dm_search_enabled", kind: "message" };
      obj30.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[34] = obj30;
      obj31 = { no: 37, name: "search_provider", kind: "enum" };
      obj31.T = function T() {
        const items = ["discord_protos.discord_users.v1.SearchProvider", outer2_14, "SEARCH_PROVIDER_"];
        return items;
      };
      items[35] = obj31;
      obj32 = { no: 38, name: "custom_search_url", kind: "message" };
      obj32.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).StringValue;
      };
      items[36] = obj32;
      obj33 = { no: 39, name: "include_game_mentions_in_autocomplete", kind: "message" };
      obj33.T = function T() {
        return TextAndImagesSettings$Type(outer2_1[9]).BoolValue;
      };
      items[37] = obj33;
      items1 = ["discord_protos.discord_users.v1.TextAndImagesSettings"];
      items1[1] = items;
      return outer1_82(this, TextAndImagesSettings$Type, items1);
    }
  }
  callback3(TextAndImagesSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojiPickerCollapsedSections: [], stickerPickerCollapsedSections: [], soundboardPickerCollapsedSections: [], dmSpamFilterV2: 0, searchProvider: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TextAndImagesSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TextAndImagesSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = TextAndImagesSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      if (pos.pos < pos.pos + arg1) {
        [r10026, r10027] = outer1_2(pos.tag(), 2);
        const tmp3 = outer1_2(pos.tag(), 2);
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
        const StringValue = TextAndImagesSettings$Type(outer1_1[9]).StringValue;
        const tagResult = tag.tag(1, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useRichChatInput) {
        const BoolValue = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useThreadSidebar) {
        const BoolValue2 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderSpoilers) {
        const StringValue2 = TextAndImagesSettings$Type(outer1_1[9]).StringValue;
        const tagResult3 = tag.tag(4, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let num13 = 0;
      if (0 < diversitySurrogate.emojiPickerCollapsedSections.length) {
        do {
          let tmp13 = TextAndImagesSettings$Type;
          let tmp14 = outer1_1;
          let tagResult4 = tag.tag(5, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult4.string(diversitySurrogate.emojiPickerCollapsedSections[num13]);
          num13 = num13 + 1;
          length = diversitySurrogate.emojiPickerCollapsedSections.length;
        } while (num13 < length);
      }
      let num14 = 0;
      if (0 < diversitySurrogate.stickerPickerCollapsedSections.length) {
        do {
          let tmp16 = TextAndImagesSettings$Type;
          let tmp17 = outer1_1;
          let tagResult5 = tag.tag(6, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult1 = tagResult5.string(diversitySurrogate.stickerPickerCollapsedSections[num14]);
          num14 = num14 + 1;
          length2 = diversitySurrogate.stickerPickerCollapsedSections.length;
        } while (num14 < length2);
      }
      if (diversitySurrogate.viewImageDescriptions) {
        const BoolValue3 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult6 = tag.tag(7, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.showCommandSuggestions) {
        const BoolValue4 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult7 = tag.tag(8, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.inlineAttachmentMedia) {
        const BoolValue5 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult8 = tag.tag(9, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.inlineEmbedMedia) {
        const BoolValue6 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult9 = tag.tag(10, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.gifAutoPlay) {
        const BoolValue7 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult10 = tag.tag(11, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderEmbeds) {
        const BoolValue8 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult11 = tag.tag(12, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.renderReactions) {
        const BoolValue9 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult12 = tag.tag(13, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.animateEmoji) {
        const BoolValue10 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult13 = tag.tag(14, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.animateStickers) {
        const UInt32Value = TextAndImagesSettings$Type(outer1_1[9]).UInt32Value;
        const tagResult14 = tag.tag(15, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.enableTtsCommand) {
        const BoolValue11 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult15 = tag.tag(16, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.messageDisplayCompact) {
        const BoolValue12 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult16 = tag.tag(17, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.explicitContentFilter) {
        const UInt32Value2 = TextAndImagesSettings$Type(outer1_1[9]).UInt32Value;
        const tagResult17 = tag.tag(19, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.viewNsfwGuilds) {
        const BoolValue13 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult18 = tag.tag(20, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.convertEmoticons) {
        const BoolValue14 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult19 = tag.tag(21, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.expressionSuggestionsEnabled) {
        const BoolValue15 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult20 = tag.tag(22, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.viewNsfwCommands) {
        const BoolValue16 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult21 = tag.tag(23, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.useLegacyChatInput) {
        const BoolValue17 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult22 = tag.tag(24, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let num47 = 0;
      if (0 < diversitySurrogate.soundboardPickerCollapsedSections.length) {
        do {
          let tmp70 = TextAndImagesSettings$Type;
          let tmp71 = outer1_1;
          let tagResult23 = tag.tag(25, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult2 = tagResult23.string(diversitySurrogate.soundboardPickerCollapsedSections[num47]);
          num47 = num47 + 1;
          length3 = diversitySurrogate.soundboardPickerCollapsedSections.length;
        } while (num47 < length3);
      }
      if (diversitySurrogate.dmSpamFilter) {
        const UInt32Value3 = TextAndImagesSettings$Type(outer1_1[9]).UInt32Value;
        const tagResult24 = tag.tag(26, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== diversitySurrogate.dmSpamFilterV2) {
        tag.tag(27, TextAndImagesSettings$Type(outer1_1[7]).WireType.Varint).int32(diversitySurrogate.dmSpamFilterV2);
        const tagResult25 = tag.tag(27, TextAndImagesSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (diversitySurrogate.includeStickersInAutocomplete) {
        const BoolValue18 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult26 = tag.tag(28, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.explicitContentSettings) {
        const tagResult27 = tag.tag(29, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined23 = outer1_41.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult23 = outer1_41.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.keywordFilterSettings) {
        const tagResult28 = tag.tag(30, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined24 = outer1_44.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult24 = outer1_44.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.includeSoundmojiInAutocomplete) {
        const BoolValue19 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult29 = tag.tag(31, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.goreContentSettings) {
        const tagResult30 = tag.tag(32, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined26 = outer1_42.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult26 = outer1_42.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.defaultReactionEmoji) {
        const tagResult31 = tag.tag(33, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = outer1_79.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult27 = outer1_79.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.showMentionSuggestions) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        const BoolValue20 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult32 = tag.tag(34, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult28 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.selfHarmContentSettings) {
        joined27 = outer1_43;
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        const tagResult33 = tag.tag(35, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = outer1_43.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult29 = outer1_43.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.isCrossDmSearchEnabled) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        const BoolValue21 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult34 = tag.tag(36, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult30 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== diversitySurrogate.searchProvider) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        joined27 = tag.tag(37, TextAndImagesSettings$Type(outer1_1[7]).WireType.Varint).int32(diversitySurrogate.searchProvider);
        const tagResult35 = tag.tag(37, TextAndImagesSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (diversitySurrogate.customSearchUrl) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        const StringValue3 = TextAndImagesSettings$Type(outer1_1[9]).StringValue;
        const tagResult36 = tag.tag(38, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult31 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (diversitySurrogate.includeGameMentionsInAutocomplete) {
        joined27 = TextAndImagesSettings$Type;
        joined27 = outer1_1;
        const BoolValue22 = TextAndImagesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult37 = tag.tag(39, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined27 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult32 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, TextAndImagesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined27 = TextAndImagesSettings$Type;
          joined27 = outer1_1;
          onWrite = TextAndImagesSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined27 = onWrite(this.typeName, diversitySurrogate, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TextAndImagesSettings$Type, items);
})(require("module_1284").MessageType);
tmp36 = new tmp36();
let closure_45 = tmp36;
let tmp38 = ((MessageType) => {
  class NotificationSettings$Type {
    constructor() {
      tmp = outer1_3(this, NotificationSettings$Type);
      obj = { no: 1, name: "show_in_app_notifications", kind: "message" };
      obj.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "notify_friends_on_go_live", kind: "message" };
      obj.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 };
      obj1 = { no: 4, name: "enable_burst_reaction_notifications", kind: "message" };
      obj1.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[3] = obj1;
      obj2 = { no: 5, name: "quiet_mode", kind: "message" };
      obj2.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[4] = obj2;
      items[5] = { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 };
      obj3 = { no: 7, name: "reaction_notifications", kind: "enum" };
      obj3.T = function T() {
        const items = ["discord_protos.discord_users.v1.ReactionNotificationType", outer2_11];
        return items;
      };
      items[6] = obj3;
      obj4 = { no: 8, name: "game_activity_notifications", kind: "enum" };
      obj4.T = function T() {
        const items = ["discord_protos.discord_users.v1.GameActivityNotificationType", outer2_12];
        return items;
      };
      items[7] = obj4;
      obj5 = { no: 9, name: "custom_status_push_notifications", kind: "enum" };
      obj5.T = function T() {
        const items = ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", outer2_13];
        return items;
      };
      items[8] = obj5;
      obj6 = { no: 10, name: "game_activity_exclude_steam_notifications", kind: "message" };
      obj6.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[9] = obj6;
      obj7 = { no: 11, name: "enable_voice_activity_notifications", kind: "message" };
      obj7.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[10] = obj7;
      obj8 = { no: 12, name: "enable_friend_online_notifications", kind: "message" };
      obj8.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[11] = obj8;
      obj9 = { no: 13, name: "enable_user_resurrection_notifications", kind: "message" };
      obj9.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[12] = obj9;
      obj10 = { no: 14, name: "enable_friend_anniversary_notifications", kind: "message" };
      obj10.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[13] = obj10;
      obj11 = { no: 15, name: "enable_game_update_notifications", kind: "message" };
      obj11.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[14] = obj11;
      obj12 = { no: 16, name: "enable_profile_updates_notifications", kind: "message" };
      obj12.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[15] = obj12;
      obj13 = { no: 17, name: "enable_server_trending_notifications", kind: "message" };
      obj13.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[16] = obj13;
      obj14 = { no: 18, name: "enable_dm_reply_nudge_reminders", kind: "message" };
      obj14.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[17] = obj14;
      obj15 = { no: 19, name: "enable_summary_reminder_notifications", kind: "message" };
      obj15.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[18] = obj15;
      obj16 = { no: 20, name: "enable_gdm_all_reaction_notifications", kind: "message" };
      obj16.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[19] = obj16;
      obj17 = { no: 21, name: "enable_friend_gaming_activity_notifications", kind: "message" };
      obj17.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[20] = obj17;
      obj18 = { no: 22, name: "enable_upcoming_server_event_notifications", kind: "message" };
      obj18.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[21] = obj18;
      obj19 = { no: 23, name: "enable_screen_downtime_schedule_notifications", kind: "message" };
      obj19.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[22] = obj19;
      obj20 = { no: 24, name: "notify_friends_on_profile_update", kind: "message" };
      obj20.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[23] = obj20;
      obj21 = { no: 25, name: "notify_friends_on_come_online", kind: "message" };
      obj21.T = function T() {
        return NotificationSettings$Type(outer2_1[9]).BoolValue;
      };
      items[24] = obj21;
      items1 = ["discord_protos.discord_users.v1.NotificationSettings"];
      items1[1] = items;
      return outer1_82(this, NotificationSettings$Type, items1);
    }
  }
  callback3(NotificationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { notificationCenterAckedBeforeId: "0", focusModeExpiresAtMs: "0", reactionNotifications: 0, gameActivityNotifications: 0, customStatusPushNotifications: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, NotificationSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = NotificationSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = NotificationSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        const BoolValue = NotificationSettings$Type(outer1_1[9]).BoolValue;
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
        const BoolValue = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnGoLive) {
        const BoolValue2 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== showInAppNotifications.notificationCenterAckedBeforeId) {
        tag.tag(3, NotificationSettings$Type(outer1_1[7]).WireType.Bit64).fixed64(showInAppNotifications.notificationCenterAckedBeforeId);
        const tagResult2 = tag.tag(3, NotificationSettings$Type(outer1_1[7]).WireType.Bit64);
      }
      if (showInAppNotifications.enableBurstReactionNotifications) {
        const BoolValue3 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.quietMode) {
        const BoolValue4 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult4 = tag.tag(5, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== showInAppNotifications.focusModeExpiresAtMs) {
        tag.tag(6, NotificationSettings$Type(outer1_1[7]).WireType.Bit64).fixed64(showInAppNotifications.focusModeExpiresAtMs);
        const tagResult5 = tag.tag(6, NotificationSettings$Type(outer1_1[7]).WireType.Bit64);
      }
      if (0 !== showInAppNotifications.reactionNotifications) {
        tag.tag(7, NotificationSettings$Type(outer1_1[7]).WireType.Varint).int32(showInAppNotifications.reactionNotifications);
        const tagResult6 = tag.tag(7, NotificationSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== showInAppNotifications.gameActivityNotifications) {
        tag.tag(8, NotificationSettings$Type(outer1_1[7]).WireType.Varint).int32(showInAppNotifications.gameActivityNotifications);
        const tagResult7 = tag.tag(8, NotificationSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== showInAppNotifications.customStatusPushNotifications) {
        tag.tag(9, NotificationSettings$Type(outer1_1[7]).WireType.Varint).int32(showInAppNotifications.customStatusPushNotifications);
        const tagResult8 = tag.tag(9, NotificationSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (showInAppNotifications.gameActivityExcludeSteamNotifications) {
        const BoolValue5 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult9 = tag.tag(10, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableVoiceActivityNotifications) {
        const BoolValue6 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult10 = tag.tag(11, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendOnlineNotifications) {
        const BoolValue7 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult11 = tag.tag(12, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableUserResurrectionNotifications) {
        const BoolValue8 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult12 = tag.tag(13, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendAnniversaryNotifications) {
        const BoolValue9 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult13 = tag.tag(14, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableGameUpdateNotifications) {
        const BoolValue10 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult14 = tag.tag(15, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableProfileUpdatesNotifications) {
        const BoolValue11 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult15 = tag.tag(16, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableServerTrendingNotifications) {
        const BoolValue12 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult16 = tag.tag(17, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableDmReplyNudgeReminders) {
        const BoolValue13 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult17 = tag.tag(18, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableSummaryReminderNotifications) {
        const BoolValue14 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult18 = tag.tag(19, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableGdmAllReactionNotifications) {
        const BoolValue15 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult19 = tag.tag(20, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableFriendGamingActivityNotifications) {
        const BoolValue16 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult20 = tag.tag(21, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableUpcomingServerEventNotifications) {
        const BoolValue17 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult21 = tag.tag(22, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.enableScreenDowntimeScheduleNotifications) {
        const BoolValue18 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult22 = tag.tag(23, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnProfileUpdate) {
        const BoolValue19 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult23 = tag.tag(24, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (showInAppNotifications.notifyFriendsOnComeOnline) {
        const BoolValue20 = NotificationSettings$Type(outer1_1[9]).BoolValue;
        const tagResult24 = tag.tag(25, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, NotificationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = NotificationSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, showInAppNotifications, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(NotificationSettings$Type, items);
})(require("module_1284").MessageType);
tmp38 = new tmp38();
let closure_46 = tmp38;
let tmp40 = ((MessageType) => {
  class PrivacySettings$Type {
    constructor() {
      tmp = outer1_3(this, PrivacySettings$Type);
      obj = { no: 1, name: "allow_activity_party_privacy_friends", kind: "message" };
      obj.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message" };
      obj.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
      items[3] = { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 };
      items[4] = { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 };
      obj1 = { no: 8, name: "detect_platform_accounts", kind: "message" };
      obj1.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[5] = obj1;
      obj2 = { no: 9, name: "passwordless", kind: "message" };
      obj2.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[6] = obj2;
      obj3 = { no: 10, name: "contact_sync_enabled", kind: "message" };
      obj3.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[7] = obj3;
      obj4 = { no: 11, name: "friend_source_flags", kind: "message" };
      obj4.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).UInt32Value;
      };
      items[8] = obj4;
      obj5 = { no: 12, name: "friend_discovery_flags", kind: "message" };
      obj5.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).UInt32Value;
      };
      items[9] = obj5;
      items[10] = { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
      obj6 = { no: 14, name: "default_guilds_activity_restricted", kind: "enum" };
      obj6.T = function T() {
        const items = ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", outer2_15];
        return items;
      };
      items[11] = obj6;
      items[12] = { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
      items[13] = { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
      obj7 = { no: 17, name: "default_message_request_restricted", kind: "message" };
      obj7.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[14] = obj7;
      obj8 = { no: 18, name: "drops_opted_out", kind: "message" };
      obj8.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[15] = obj8;
      obj9 = { no: 19, name: "non_spam_retraining_opt_in", kind: "message" };
      obj9.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[16] = obj9;
      obj10 = { no: 20, name: "family_center_enabled", kind: "message" };
      obj10.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[17] = obj10;
      obj11 = { no: 21, name: "family_center_enabled_v2", kind: "message" };
      obj11.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[18] = obj11;
      obj12 = { no: 22, name: "hide_legacy_username", kind: "message" };
      obj12.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[19] = obj12;
      obj13 = { no: 23, name: "inappropriate_conversation_warnings", kind: "message" };
      obj13.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[20] = obj13;
      obj14 = { no: 24, name: "recent_games_enabled", kind: "message" };
      obj14.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[21] = obj14;
      obj15 = { no: 25, name: "guilds_leaderboard_opt_out_default", kind: "enum" };
      obj15.T = function T() {
        const items = ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", outer2_17];
        return items;
      };
      items[22] = obj15;
      obj16 = { no: 26, name: "allow_game_friend_dms_in_discord", kind: "message" };
      obj16.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[23] = obj16;
      obj17 = { no: 27, name: "default_guilds_restricted_v2", kind: "message" };
      obj17.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[24] = obj17;
      obj18 = { no: 28, name: "slayer_sdk_receive_dms_in_game", kind: "enum" };
      obj18.T = function T() {
        const items = ["discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs", outer2_18];
        return items;
      };
      items[25] = obj18;
      obj19 = { no: 29, name: "default_guilds_activity_restricted_v2", kind: "enum" };
      obj19.T = function T() {
        const items = ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", outer2_16];
        return items;
      };
      items[26] = obj19;
      obj20 = { no: 30, name: "quests_3p_data_opted_out", kind: "message", jsonName: "quests3pDataOptedOut" };
      obj20.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[27] = obj20;
      obj21 = { no: 31, name: "show_local_time", kind: "message" };
      obj21.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[28] = obj21;
      obj22 = { no: 32, name: "profile_visibility", kind: "enum" };
      obj22.T = function T() {
        const items = ["discord_protos.discord_users.v1.ProfileVisibility", outer2_19, "PROFILE_VISIBILITY_"];
        return items;
      };
      items[29] = obj22;
      obj23 = { no: 33, name: "hide_friend_request_notes", kind: "message" };
      obj23.T = function T() {
        return PrivacySettings$Type(outer2_1[9]).BoolValue;
      };
      items[30] = obj23;
      items1 = ["discord_protos.discord_users.v1.PrivacySettings"];
      items1[1] = items;
      return outer1_82(this, PrivacySettings$Type, items1);
    }
  }
  callback3(PrivacySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { restrictedGuildIds: [], defaultGuildsRestricted: false, allowAccessibilityDetection: false, activityRestrictedGuildIds: [], defaultGuildsActivityRestricted: 0, activityJoiningRestrictedGuildIds: [], messageRequestRestrictedGuildIds: [], guildsLeaderboardOptOutDefault: 0, slayerSdkReceiveDmsInGame: 0, defaultGuildsActivityRestrictedV2: 0, profileVisibility: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PrivacySettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PrivacySettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PrivacySettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        const BoolValue = PrivacySettings$Type(outer1_1[9]).BoolValue;
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
        const BoolValue = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel) {
        const BoolValue2 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
        tag.tag(3, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num9 = 0;
        if (0 < allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
          do {
            let fixed64Result = tag.fixed64(allowActivityPartyPrivacyFriends.restrictedGuildIds[num9]);
            num9 = num9 + 1;
            length = allowActivityPartyPrivacyFriends.restrictedGuildIds.length;
          } while (num9 < length);
        }
        const joined2 = tag.join();
        const tagResult2 = tag.tag(3, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (false !== allowActivityPartyPrivacyFriends.defaultGuildsRestricted) {
        tag.tag(4, PrivacySettings$Type(outer1_1[7]).WireType.Varint).bool(allowActivityPartyPrivacyFriends.defaultGuildsRestricted);
        const tagResult3 = tag.tag(4, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== allowActivityPartyPrivacyFriends.allowAccessibilityDetection) {
        tag.tag(7, PrivacySettings$Type(outer1_1[7]).WireType.Varint).bool(allowActivityPartyPrivacyFriends.allowAccessibilityDetection);
        const tagResult4 = tag.tag(7, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.detectPlatformAccounts) {
        const BoolValue3 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult5 = tag.tag(8, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.passwordless) {
        const BoolValue4 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult6 = tag.tag(9, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.contactSyncEnabled) {
        const BoolValue5 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult7 = tag.tag(10, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.friendSourceFlags) {
        const UInt32Value = PrivacySettings$Type(outer1_1[9]).UInt32Value;
        const tagResult8 = tag.tag(11, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.friendDiscoveryFlags) {
        const UInt32Value2 = PrivacySettings$Type(outer1_1[9]).UInt32Value;
        const tagResult9 = tag.tag(12, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
        tag.tag(13, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num29 = 0;
        if (0 < allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
          do {
            let fixed64Result1 = tag.fixed64(allowActivityPartyPrivacyFriends.activityRestrictedGuildIds[num29]);
            num29 = num29 + 1;
            length2 = allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length;
          } while (num29 < length2);
        }
        const joined8 = tag.join();
        const tagResult10 = tag.tag(13, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted) {
        tag.tag(14, PrivacySettings$Type(outer1_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted);
        const tagResult11 = tag.tag(14, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
        tag.tag(15, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num34 = 0;
        if (0 < allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
          do {
            let fixed64Result2 = tag.fixed64(allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds[num34]);
            num34 = num34 + 1;
            length3 = allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length;
          } while (num34 < length3);
        }
        const joined9 = tag.join();
        const tagResult12 = tag.tag(15, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
        tag.tag(16, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num37 = 0;
        if (0 < allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
          do {
            let fixed64Result3 = tag.fixed64(allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds[num37]);
            num37 = num37 + 1;
            length4 = allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length;
          } while (num37 < length4);
        }
        const joined10 = tag.join();
        const tagResult13 = tag.tag(16, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted) {
        const BoolValue6 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult14 = tag.tag(17, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined11 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.dropsOptedOut) {
        const BoolValue7 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult15 = tag.tag(18, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined12 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn) {
        const BoolValue8 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult16 = tag.tag(19, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined13 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.familyCenterEnabled) {
        const BoolValue9 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult17 = tag.tag(20, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined14 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.familyCenterEnabledV2) {
        const BoolValue10 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult18 = tag.tag(21, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined15 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.hideLegacyUsername) {
        const BoolValue11 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult19 = tag.tag(22, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined16 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.inappropriateConversationWarnings) {
        const BoolValue12 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult20 = tag.tag(23, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined17 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.recentGamesEnabled) {
        const BoolValue13 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult21 = tag.tag(24, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined18 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault) {
        tag.tag(25, PrivacySettings$Type(outer1_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault);
        const tagResult22 = tag.tag(25, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord) {
        const BoolValue14 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult23 = tag.tag(26, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined19 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2) {
        const BoolValue15 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult24 = tag.tag(27, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined20 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame) {
        tag.tag(28, PrivacySettings$Type(outer1_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame);
        const tagResult25 = tag.tag(28, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2) {
        tag.tag(29, PrivacySettings$Type(outer1_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2);
        const tagResult26 = tag.tag(29, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.quests3PDataOptedOut) {
        const BoolValue16 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult27 = tag.tag(30, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined21 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowActivityPartyPrivacyFriends.showLocalTime) {
        const BoolValue17 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult28 = tag.tag(31, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined22 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== allowActivityPartyPrivacyFriends.profileVisibility) {
        tag.tag(32, PrivacySettings$Type(outer1_1[7]).WireType.Varint).int32(allowActivityPartyPrivacyFriends.profileVisibility);
        const tagResult29 = tag.tag(32, PrivacySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (allowActivityPartyPrivacyFriends.hideFriendRequestNotes) {
        joined23 = outer1_1;
        const BoolValue18 = PrivacySettings$Type(outer1_1[9]).BoolValue;
        const tagResult30 = tag.tag(33, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        joined23 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, PrivacySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined23 = PrivacySettings$Type;
          joined23 = outer1_1;
          onWrite = PrivacySettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined23 = onWrite(this.typeName, allowActivityPartyPrivacyFriends, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PrivacySettings$Type, items);
})(require("module_1284").MessageType);
tmp40 = new tmp40();
let closure_47 = tmp40;
let tmp42 = ((MessageType) => {
  class DebugSettings$Type {
    constructor() {
      tmp = outer1_3(this, DebugSettings$Type);
      obj = { no: 1, name: "rtc_panel_show_voice_states", kind: "message" };
      obj.T = function T() {
        return DebugSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.DebugSettings"];
      items1[1] = items;
      return outer1_82(this, DebugSettings$Type, items1);
    }
  }
  callback3(DebugSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DebugSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DebugSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = DebugSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = DebugSettings$Type;
          let tmp27 = outer1_1;
          let BoolValue = DebugSettings$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = DebugSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(rtcPanelShowVoiceStates, tag, writeUnknownFields) {
      if (rtcPanelShowVoiceStates.rtcPanelShowVoiceStates) {
        const BoolValue = DebugSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, DebugSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, DebugSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, DebugSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DebugSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, rtcPanelShowVoiceStates, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DebugSettings$Type, items);
})(require("module_1284").MessageType);
tmp42 = new tmp42();
let closure_48 = tmp42;
let tmp44 = ((MessageType) => {
  class GameLibrarySettings$Type {
    constructor() {
      tmp = outer1_3(this, GameLibrarySettings$Type);
      obj = { no: 1, name: "install_shortcut_desktop", kind: "message" };
      obj.T = function T() {
        return GameLibrarySettings$Type(outer2_1[9]).BoolValue;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "install_shortcut_start_menu", kind: "message" };
      obj.T = function T() {
        return GameLibrarySettings$Type(outer2_1[9]).BoolValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "disable_games_tab", kind: "message" };
      obj1.T = function T() {
        return GameLibrarySettings$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.GameLibrarySettings"];
      items1[1] = items;
      return outer1_82(this, GameLibrarySettings$Type, items1);
    }
  }
  callback3(GameLibrarySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GameLibrarySettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GameLibrarySettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GameLibrarySettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = GameLibrarySettings$Type;
          let tmp37 = outer1_1;
          let BoolValue3 = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
          let tmp38 = BoolValue3;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.installShortcutDesktop = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutDesktop);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = GameLibrarySettings$Type;
          let tmp32 = outer1_1;
          let BoolValue2 = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.installShortcutStartMenu = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutStartMenu);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = GameLibrarySettings$Type;
          let tmp27 = outer1_1;
          let BoolValue = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = GameLibrarySettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(installShortcutDesktop, tag, writeUnknownFields) {
      if (installShortcutDesktop.installShortcutDesktop) {
        const BoolValue = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (installShortcutDesktop.installShortcutStartMenu) {
        const BoolValue2 = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
        const tagResult1 = tag.tag(2, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (installShortcutDesktop.disableGamesTab) {
        const BoolValue3 = GameLibrarySettings$Type(outer1_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, GameLibrarySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GameLibrarySettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, installShortcutDesktop, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GameLibrarySettings$Type, items);
})(require("module_1284").MessageType);
tmp44 = new tmp44();
let closure_49 = tmp44;
let tmp46 = ((MessageType) => {
  class StatusSettings$Type {
    constructor() {
      tmp = outer1_3(this, StatusSettings$Type);
      obj = { no: 1, name: "status", kind: "message" };
      obj.T = function T() {
        return StatusSettings$Type(outer2_1[9]).StringValue;
      };
      items = [, , , , ];
      items[0] = obj;
      obj = { no: 2, name: "custom_status", kind: "message" };
      obj.T = function T() {
        return outer2_51;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "show_current_game", kind: "message" };
      obj1.T = function T() {
        return StatusSettings$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      items[3] = { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 };
      obj2 = { no: 5, name: "status_created_at_ms", kind: "message" };
      obj2.T = function T() {
        return StatusSettings$Type(outer2_1[9]).UInt64Value;
      };
      items[4] = obj2;
      items1 = ["discord_protos.discord_users.v1.StatusSettings"];
      items1[1] = items;
      return outer1_82(this, StatusSettings$Type, items1);
    }
  }
  callback3(StatusSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { statusExpiresAtMs: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StatusSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StatusSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = StatusSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp40 = StatusSettings$Type;
          let tmp41 = outer1_1;
          let StringValue = StatusSettings$Type(outer1_1[9]).StringValue;
          let tmp42 = StringValue;
          let tmp43 = pos;
          let tmp44 = readUnknownField;
          obj.status = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.status);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = outer1_51;
          let tmp37 = outer1_51;
          let tmp38 = pos;
          let tmp39 = readUnknownField;
          obj.customStatus = outer1_51.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customStatus);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = StatusSettings$Type;
          let tmp32 = outer1_1;
          let BoolValue = StatusSettings$Type(outer1_1[9]).BoolValue;
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
          let tmp27 = outer1_1;
          let UInt64Value = StatusSettings$Type(outer1_1[9]).UInt64Value;
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
                let tmp13 = outer1_1;
                onRead = StatusSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(status, tag, writeUnknownFields) {
      if (status.status) {
        const StringValue = StatusSettings$Type(outer1_1[9]).StringValue;
        const tagResult = tag.tag(1, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(status.status, tag.tag(1, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(status.status, tag.tag(1, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (status.customStatus) {
        const tagResult1 = tag.tag(2, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_51.internalBinaryWrite(status.customStatus, tag.tag(2, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_51.internalBinaryWrite(status.customStatus, tag.tag(2, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (status.showCurrentGame) {
        const BoolValue = StatusSettings$Type(outer1_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== status.statusExpiresAtMs) {
        tag.tag(4, StatusSettings$Type(outer1_1[7]).WireType.Bit64).fixed64(status.statusExpiresAtMs);
        const tagResult3 = tag.tag(4, StatusSettings$Type(outer1_1[7]).WireType.Bit64);
      }
      if (status.statusCreatedAtMs) {
        const UInt64Value = StatusSettings$Type(outer1_1[9]).UInt64Value;
        const tagResult4 = tag.tag(5, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, StatusSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StatusSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, status, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(StatusSettings$Type, items);
})(require("module_1284").MessageType);
tmp46 = new tmp46();
let closure_50 = tmp46;
let tmp48 = ((MessageType) => {
  class CustomStatus$Type {
    constructor() {
      tmp = outer1_3(this, CustomStatus$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "text", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "emoji_id", kind: "scalar", T: 6 };
      items[2] = { no: 3, name: "emoji_name", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 };
      items[4] = { no: 5, name: "created_at_ms", kind: "scalar", T: 6 };
      obj = { no: 6, name: "label", kind: "message" };
      obj.T = function T() {
        return CustomStatus$Type(outer2_1[9]).StringValue;
      };
      items[5] = obj;
      items1 = ["discord_protos.discord_users.v1.CustomStatus"];
      items1[1] = items;
      return outer1_82(this, CustomStatus$Type, items1);
    }
  }
  callback3(CustomStatus$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomStatus$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomStatus$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomStatus$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp27 = outer1_1;
          let StringValue = CustomStatus$Type(outer1_1[9]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = CustomStatus$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(text, tag, writeUnknownFields) {
      if ("" !== text.text) {
        tag.tag(1, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited).string(text.text);
        const tagResult = tag.tag(1, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if ("0" !== text.emojiId) {
        tag.tag(2, CustomStatus$Type(outer1_1[7]).WireType.Bit64).fixed64(text.emojiId);
        const tagResult1 = tag.tag(2, CustomStatus$Type(outer1_1[7]).WireType.Bit64);
      }
      if ("" !== text.emojiName) {
        tag.tag(3, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited).string(text.emojiName);
        const tagResult2 = tag.tag(3, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if ("0" !== text.expiresAtMs) {
        tag.tag(4, CustomStatus$Type(outer1_1[7]).WireType.Bit64).fixed64(text.expiresAtMs);
        const tagResult3 = tag.tag(4, CustomStatus$Type(outer1_1[7]).WireType.Bit64);
      }
      if ("0" !== text.createdAtMs) {
        tag.tag(5, CustomStatus$Type(outer1_1[7]).WireType.Bit64).fixed64(text.createdAtMs);
        const tagResult4 = tag.tag(5, CustomStatus$Type(outer1_1[7]).WireType.Bit64);
      }
      if (text.label) {
        const StringValue = CustomStatus$Type(outer1_1[9]).StringValue;
        const tagResult5 = tag.tag(6, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(text.label, tag.tag(6, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(text.label, tag.tag(6, CustomStatus$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomStatus$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, text, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomStatus$Type, items);
})(require("module_1284").MessageType);
tmp48 = new tmp48();
let closure_51 = tmp48;
let tmp50 = ((MessageType) => {
  class LocalizationSettings$Type {
    constructor() {
      tmp = outer1_3(this, LocalizationSettings$Type);
      obj = { no: 1, name: "locale", kind: "message" };
      obj.T = function T() {
        return LocalizationSettings$Type(outer2_1[9]).StringValue;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "timezone_offset", kind: "message" };
      obj.T = function T() {
        return LocalizationSettings$Type(outer2_1[9]).Int32Value;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "timezone_name", kind: "message" };
      obj1.T = function T() {
        return LocalizationSettings$Type(outer2_1[9]).StringValue;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.LocalizationSettings"];
      items1[1] = items;
      return outer1_82(this, LocalizationSettings$Type, items1);
    }
  }
  callback3(LocalizationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LocalizationSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LocalizationSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = LocalizationSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp36 = LocalizationSettings$Type;
          let tmp37 = outer1_1;
          let StringValue2 = LocalizationSettings$Type(outer1_1[9]).StringValue;
          let tmp38 = StringValue2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.locale = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.locale);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = LocalizationSettings$Type;
          let tmp32 = outer1_1;
          let Int32Value = LocalizationSettings$Type(outer1_1[9]).Int32Value;
          let tmp33 = Int32Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.timezoneOffset = Int32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.timezoneOffset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = LocalizationSettings$Type;
          let tmp27 = outer1_1;
          let StringValue = LocalizationSettings$Type(outer1_1[9]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = LocalizationSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(locale, tag, writeUnknownFields) {
      if (locale.locale) {
        const StringValue = LocalizationSettings$Type(outer1_1[9]).StringValue;
        const tagResult = tag.tag(1, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (locale.timezoneOffset) {
        const Int32Value = LocalizationSettings$Type(outer1_1[9]).Int32Value;
        const tagResult1 = tag.tag(2, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (locale.timezoneName) {
        const StringValue2 = LocalizationSettings$Type(outer1_1[9]).StringValue;
        const tagResult2 = tag.tag(3, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, LocalizationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LocalizationSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locale, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(LocalizationSettings$Type, items);
})(require("module_1284").MessageType);
tmp50 = new tmp50();
let closure_52 = tmp50;
let tmp52 = ((MessageType) => {
  class ChannelListSettings$Type {
    constructor() {
      tmp = outer1_3(this, ChannelListSettings$Type);
      obj = { no: 1, name: "layout", kind: "message" };
      obj.T = function T() {
        return ChannelListSettings$Type(outer2_1[9]).StringValue;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "message_previews", kind: "message" };
      obj.T = function T() {
        return ChannelListSettings$Type(outer2_1[9]).StringValue;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_users.v1.ChannelListSettings"];
      items1[1] = items;
      return outer1_82(this, ChannelListSettings$Type, items1);
    }
  }
  callback3(ChannelListSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ChannelListSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ChannelListSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ChannelListSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp31 = ChannelListSettings$Type;
          let tmp32 = outer1_1;
          let StringValue2 = ChannelListSettings$Type(outer1_1[9]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.layout = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.layout);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = ChannelListSettings$Type;
          let tmp27 = outer1_1;
          let StringValue = ChannelListSettings$Type(outer1_1[9]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = ChannelListSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(layout, tag, writeUnknownFields) {
      if (layout.layout) {
        const StringValue = ChannelListSettings$Type(outer1_1[9]).StringValue;
        const tagResult = tag.tag(1, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (layout.messagePreviews) {
        const StringValue2 = ChannelListSettings$Type(outer1_1[9]).StringValue;
        const tagResult1 = tag.tag(2, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, ChannelListSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ChannelListSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, layout, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ChannelListSettings$Type, items);
})(require("module_1284").MessageType);
tmp52 = new tmp52();
let closure_53 = tmp52;
let tmp54 = ((MessageType) => {
  class AppearanceSettings$Type {
    constructor() {
      tmp = outer1_3(this, AppearanceSettings$Type);
      obj = { no: 1, name: "theme", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.Theme", outer2_22];
        return items;
      };
      items = [, , , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "developer_mode", kind: "scalar", T: 8 };
      obj = { no: 3, name: "client_theme_settings", kind: "message" };
      obj.T = function T() {
        return outer2_56;
      };
      items[2] = obj;
      items[3] = { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 };
      obj1 = { no: 6, name: "channel_list_layout", kind: "message" };
      obj1.T = function T() {
        return AppearanceSettings$Type(outer2_1[9]).StringValue;
      };
      items[4] = obj1;
      obj2 = { no: 7, name: "message_previews", kind: "message" };
      obj2.T = function T() {
        return AppearanceSettings$Type(outer2_1[9]).StringValue;
      };
      items[5] = obj2;
      obj3 = { no: 8, name: "search_result_exact_count_enabled", kind: "message" };
      obj3.T = function T() {
        return AppearanceSettings$Type(outer2_1[9]).BoolValue;
      };
      items[6] = obj3;
      obj4 = { no: 9, name: "timestamp_hour_cycle", kind: "enum" };
      obj4.T = function T() {
        const items = ["discord_protos.discord_users.v1.TimestampHourCycle", outer2_23];
        return items;
      };
      items[7] = obj4;
      obj5 = { no: 10, name: "happening_now_cards_disabled", kind: "message" };
      obj5.T = function T() {
        return AppearanceSettings$Type(outer2_1[9]).BoolValue;
      };
      items[8] = obj5;
      obj6 = { no: 11, name: "launch_pad_mode", kind: "enum" };
      obj6.T = function T() {
        const items = ["discord_protos.discord_users.v1.LaunchPadMode", outer2_24];
        return items;
      };
      items[9] = obj6;
      obj7 = { no: 12, name: "ui_density", kind: "enum" };
      obj7.T = function T() {
        const items = ["discord_protos.discord_users.v1.UIDensity", outer2_21];
        return items;
      };
      items[10] = obj7;
      obj8 = { no: 13, name: "swipe_right_to_left_mode", kind: "enum" };
      obj8.T = function T() {
        const items = ["discord_protos.discord_users.v1.SwipeRightToLeftMode", outer2_25];
        return items;
      };
      items[11] = obj8;
      obj9 = { no: 14, name: "default_guild_theme_preference", kind: "enum" };
      obj9.T = function T() {
        const items = ["discord_protos.discord_users.v1.GuildThemeSourcePreference", outer2_20, "GUILD_THEME_SOURCE_PREFERENCE_"];
        return items;
      };
      items[12] = obj9;
      items[13] = { no: 15, name: "dark_sidebar", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.AppearanceSettings"];
      items1[1] = items;
      return outer1_82(this, AppearanceSettings$Type, items1);
    }
  }
  callback3(AppearanceSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { theme: 0, developerMode: false, mobileRedesignDisabled: false, timestampHourCycle: 0, launchPadMode: 0, uiDensity: 0, swipeRightToLeftMode: 0, defaultGuildThemePreference: 0, darkSidebar: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AppearanceSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AppearanceSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AppearanceSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        tag.tag(1, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.theme);
        const tagResult = tag.tag(1, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== theme.developerMode) {
        tag.tag(2, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).bool(theme.developerMode);
        const tagResult1 = tag.tag(2, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (theme.clientThemeSettings) {
        const tagResult2 = tag.tag(3, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_56.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_56.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== theme.mobileRedesignDisabled) {
        tag.tag(4, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).bool(theme.mobileRedesignDisabled);
        const tagResult3 = tag.tag(4, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (theme.channelListLayout) {
        const StringValue = AppearanceSettings$Type(outer1_1[9]).StringValue;
        const tagResult4 = tag.tag(6, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (theme.messagePreviews) {
        const StringValue2 = AppearanceSettings$Type(outer1_1[9]).StringValue;
        const tagResult5 = tag.tag(7, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (theme.searchResultExactCountEnabled) {
        const BoolValue = AppearanceSettings$Type(outer1_1[9]).BoolValue;
        const tagResult6 = tag.tag(8, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== theme.timestampHourCycle) {
        tag.tag(9, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.timestampHourCycle);
        const tagResult7 = tag.tag(9, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (theme.happeningNowCardsDisabled) {
        const BoolValue2 = AppearanceSettings$Type(outer1_1[9]).BoolValue;
        const tagResult8 = tag.tag(10, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, AppearanceSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== theme.launchPadMode) {
        tag.tag(11, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.launchPadMode);
        const tagResult9 = tag.tag(11, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== theme.uiDensity) {
        tag.tag(12, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.uiDensity);
        const tagResult10 = tag.tag(12, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== theme.swipeRightToLeftMode) {
        tag.tag(13, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.swipeRightToLeftMode);
        const tagResult11 = tag.tag(13, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== theme.defaultGuildThemePreference) {
        tag.tag(14, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).int32(theme.defaultGuildThemePreference);
        const tagResult12 = tag.tag(14, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== theme.darkSidebar) {
        tag.tag(15, AppearanceSettings$Type(outer1_1[7]).WireType.Varint).bool(theme.darkSidebar);
        const tagResult13 = tag.tag(15, AppearanceSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AppearanceSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, theme, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AppearanceSettings$Type, items);
})(require("module_1284").MessageType);
tmp54 = new tmp54();
let closure_54 = tmp54;
let tmp56 = ((MessageType) => {
  class CustomUserThemeSettings$Type {
    constructor() {
      tmp = outer1_3(this, CustomUserThemeSettings$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 };
      items[1] = { no: 2, name: "gradient_color_stops", kind: "scalar", repeat: 1, T: 2 };
      items[2] = { no: 3, name: "gradient_angle", kind: "scalar", T: 5 };
      items[3] = { no: 4, name: "base_mix", kind: "scalar", T: 5 };
      items1 = ["discord_protos.discord_users.v1.CustomUserThemeSettings"];
      items1[1] = items;
      return outer1_82(this, CustomUserThemeSettings$Type, items1);
    }
  }
  callback3(CustomUserThemeSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { colors: [], gradientColorStops: [], gradientAngle: 0, baseMix: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomUserThemeSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomUserThemeSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomUserThemeSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let colors = obj.colors;
          let arr = colors.push(pos.string());
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = CustomUserThemeSettings$Type;
          let tmp29 = outer1_1;
          if (tmp9 === CustomUserThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited) {
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
                let tmp15 = outer1_1;
                onRead = CustomUserThemeSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
          let tmp = CustomUserThemeSettings$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, CustomUserThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult.string(colors.colors[num]);
          num = num + 1;
          length = colors.colors.length;
        } while (num < length);
      }
      if (colors.gradientColorStops.length) {
        tag.tag(2, CustomUserThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < colors.gradientColorStops.length) {
          do {
            let floatResult = tag.float(colors.gradientColorStops[num3]);
            num3 = num3 + 1;
            length2 = colors.gradientColorStops.length;
          } while (num3 < length2);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, CustomUserThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (0 !== colors.gradientAngle) {
        tag.tag(3, CustomUserThemeSettings$Type(outer1_1[7]).WireType.Varint).int32(colors.gradientAngle);
        const tagResult2 = tag.tag(3, CustomUserThemeSettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== colors.baseMix) {
        tag.tag(4, CustomUserThemeSettings$Type(outer1_1[7]).WireType.Varint).int32(colors.baseMix);
        const tagResult3 = tag.tag(4, CustomUserThemeSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomUserThemeSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, colors, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomUserThemeSettings$Type, items);
})(require("module_1284").MessageType);
tmp56 = new tmp56();
let closure_55 = tmp56;
let tmp58 = ((MessageType) => {
  class ClientThemeSettings$Type {
    constructor() {
      tmp = outer1_3(this, ClientThemeSettings$Type);
      obj = { no: 2, name: "background_gradient_preset_id", kind: "message" };
      obj.T = function T() {
        return ClientThemeSettings$Type(outer2_1[9]).UInt32Value;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 4, name: "custom_user_theme_settings", kind: "message" };
      obj.T = function T() {
        return outer2_55;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_users.v1.ClientThemeSettings"];
      items1[1] = items;
      return outer1_82(this, ClientThemeSettings$Type, items1);
    }
  }
  callback3(ClientThemeSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientThemeSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientThemeSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientThemeSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (2 === tmp7) {
          let tmp30 = ClientThemeSettings$Type;
          let tmp31 = outer1_1;
          let UInt32Value = ClientThemeSettings$Type(outer1_1[9]).UInt32Value;
          let tmp32 = UInt32Value;
          let tmp33 = pos;
          let tmp34 = readUnknownField;
          obj.backgroundGradientPresetId = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.backgroundGradientPresetId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = outer1_55;
          let tmp27 = outer1_55;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.customUserThemeSettings = outer1_55.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customUserThemeSettings);
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
                let tmp13 = outer1_1;
                onRead = ClientThemeSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(backgroundGradientPresetId, tag, writeUnknownFields) {
      if (backgroundGradientPresetId.backgroundGradientPresetId) {
        const UInt32Value = ClientThemeSettings$Type(outer1_1[9]).UInt32Value;
        const tagResult = tag.tag(2, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (backgroundGradientPresetId.customUserThemeSettings) {
        const tagResult1 = tag.tag(4, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_55.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_55.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, ClientThemeSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientThemeSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, backgroundGradientPresetId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientThemeSettings$Type, items);
})(require("module_1284").MessageType);
tmp58 = new tmp58();
let closure_56 = tmp58;
let tmp60 = ((MessageType) => {
  class GuildFolders$Type {
    constructor() {
      tmp = outer1_3(this, GuildFolders$Type);
      obj = { no: 1, name: "folders", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_58;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_users.v1.GuildFolders"];
      items1[1] = items;
      return outer1_82(this, GuildFolders$Type, items1);
    }
  }
  callback3(GuildFolders$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { folders: [], guildPositions: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildFolders$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildFolders$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildFolders$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let folders = obj.folders;
          let tmp33 = outer1_58;
          let arr = folders.push(outer1_58.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = GuildFolders$Type;
          let tmp29 = outer1_1;
          if (tmp9 === GuildFolders$Type(outer1_1[7]).WireType.LengthDelimited) {
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
                let tmp15 = outer1_1;
                onRead = GuildFolders$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
          let tmp = outer1_58;
          let tmp2 = GuildFolders$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, GuildFolders$Type(outer1_1[7]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_58.internalBinaryWrite(folders.folders[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = folders.folders.length;
        } while (num < length);
      }
      if (folders.guildPositions.length) {
        tag.tag(2, GuildFolders$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < folders.guildPositions.length) {
          do {
            let fixed64Result = tag.fixed64(folders.guildPositions[num3]);
            num3 = num3 + 1;
            length2 = folders.guildPositions.length;
          } while (num3 < length2);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, GuildFolders$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildFolders$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, folders, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildFolders$Type, items);
})(require("module_1284").MessageType);
tmp60 = new tmp60();
let closure_57 = tmp60;
let tmp62 = ((MessageType) => {
  class GuildFolder$Type {
    constructor() {
      tmp = outer1_3(this, GuildFolder$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
      obj = { no: 2, name: "id", kind: "message" };
      obj.T = function T() {
        return GuildFolder$Type(outer2_1[9]).Int64Value;
      };
      items[1] = obj;
      obj = { no: 3, name: "name", kind: "message" };
      obj.T = function T() {
        return GuildFolder$Type(outer2_1[9]).StringValue;
      };
      items[2] = obj;
      obj1 = { no: 4, name: "color", kind: "message" };
      obj1.T = function T() {
        return GuildFolder$Type(outer2_1[9]).UInt64Value;
      };
      items[3] = obj1;
      items1 = ["discord_protos.discord_users.v1.GuildFolder"];
      items1[1] = items;
      return outer1_82(this, GuildFolder$Type, items1);
    }
  }
  callback3(GuildFolder$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildFolder$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildFolder$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildFolder$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp43 = GuildFolder$Type;
          let tmp44 = outer1_1;
          if (tmp9 === GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited) {
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
          let tmp39 = outer1_1;
          let Int64Value = GuildFolder$Type(outer1_1[9]).Int64Value;
          let tmp40 = Int64Value;
          let tmp41 = pos;
          let tmp42 = readUnknownField;
          obj.id = Int64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          let tmp33 = GuildFolder$Type;
          let tmp34 = outer1_1;
          let StringValue = GuildFolder$Type(outer1_1[9]).StringValue;
          let tmp35 = StringValue;
          let tmp36 = pos;
          let tmp37 = readUnknownField;
          obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          let tmp28 = GuildFolder$Type;
          let tmp29 = outer1_1;
          let UInt64Value = GuildFolder$Type(outer1_1[9]).UInt64Value;
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
                let tmp15 = outer1_1;
                onRead = GuildFolder$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
        tag.tag(1, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < guildIds.guildIds.length) {
          do {
            let fixed64Result = tag.fixed64(guildIds.guildIds[num3]);
            num3 = num3 + 1;
            length = guildIds.guildIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (guildIds.id) {
        const Int64Value = GuildFolder$Type(outer1_1[9]).Int64Value;
        const tagResult1 = tag.tag(2, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (guildIds.name) {
        const StringValue = GuildFolder$Type(outer1_1[9]).StringValue;
        const tagResult2 = tag.tag(3, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (guildIds.color) {
        const UInt64Value = GuildFolder$Type(outer1_1[9]).UInt64Value;
        const tagResult3 = tag.tag(4, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, GuildFolder$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildFolder$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildFolder$Type, items);
})(require("module_1284").MessageType);
tmp62 = new tmp62();
let closure_58 = tmp62;
let tmp64 = ((MessageType) => {
  class Favorites$Type {
    constructor() {
      tmp = outer1_3(this, Favorites$Type);
      obj = { no: 1, name: "favorite_channels", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_60;
            }
      };
      obj.V = obj;
      items = [, , ];
      items[0] = obj;
      items[1] = { no: 2, name: "muted", kind: "scalar", T: 8 };
      obj1 = { no: 3, name: "guild_visible", kind: "message" };
      obj1.T = function T() {
        return Favorites$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      items1 = ["discord_protos.discord_users.v1.Favorites"];
      items1[1] = items;
      return outer1_82(this, Favorites$Type, items1);
    }
  }
  callback3(Favorites$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { favoriteChannels: {}, muted: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Favorites$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Favorites$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = Favorites$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp27 = outer1_1;
          let BoolValue = Favorites$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = Favorites$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_60;
            internalBinaryReadResult = outer1_60.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_60.create();
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
          let tmp2 = Favorites$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, Favorites$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, Favorites$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, Favorites$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_60;
          let internalBinaryWriteResult = outer1_60.internalBinaryWrite(favoriteChannels.favoriteChannels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (false !== favoriteChannels.muted) {
        tag.tag(2, Favorites$Type(outer1_1[7]).WireType.Varint).bool(favoriteChannels.muted);
        const tagResult3 = tag.tag(2, Favorites$Type(outer1_1[7]).WireType.Varint);
      }
      if (favoriteChannels.guildVisible) {
        const BoolValue = Favorites$Type(outer1_1[9]).BoolValue;
        const tagResult4 = tag.tag(3, Favorites$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, Favorites$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, Favorites$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Favorites$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, favoriteChannels, tag);
      }
      return tag;
    }
  };
  return callback(Favorites$Type, items);
})(require("module_1284").MessageType);
tmp64 = new tmp64();
let closure_59 = tmp64;
let tmp66 = ((MessageType) => {
  class FavoriteChannel$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteChannel$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "nickname", kind: "scalar", T: 9 };
      obj = { no: 2, name: "type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.FavoriteChannelType", outer2_26];
        return items;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "position", kind: "scalar", T: 13 };
      items[3] = { no: 4, name: "parent_id", kind: "scalar", T: 6 };
      obj = { no: 5, name: "channel_type", kind: "message" };
      obj.T = function T() {
        return FavoriteChannel$Type(outer2_1[9]).UInt32Value;
      };
      items[4] = obj;
      items[5] = { no: 6, name: "collapsed", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.FavoriteChannel"];
      items1[1] = items;
      return outer1_82(this, FavoriteChannel$Type, items1);
    }
  }
  callback3(FavoriteChannel$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { nickname: "", type: 0, position: 0, parentId: "0", collapsed: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteChannel$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteChannel$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteChannel$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp27 = outer1_1;
          let UInt32Value = FavoriteChannel$Type(outer1_1[9]).UInt32Value;
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
                let tmp13 = outer1_1;
                onRead = FavoriteChannel$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(nickname, tag, writeUnknownFields) {
      if ("" !== nickname.nickname) {
        tag.tag(1, FavoriteChannel$Type(outer1_1[7]).WireType.LengthDelimited).string(nickname.nickname);
        const tagResult = tag.tag(1, FavoriteChannel$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (0 !== nickname.type) {
        tag.tag(2, FavoriteChannel$Type(outer1_1[7]).WireType.Varint).int32(nickname.type);
        const tagResult1 = tag.tag(2, FavoriteChannel$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== nickname.position) {
        tag.tag(3, FavoriteChannel$Type(outer1_1[7]).WireType.Varint).uint32(nickname.position);
        const tagResult2 = tag.tag(3, FavoriteChannel$Type(outer1_1[7]).WireType.Varint);
      }
      if ("0" !== nickname.parentId) {
        tag.tag(4, FavoriteChannel$Type(outer1_1[7]).WireType.Bit64).fixed64(nickname.parentId);
        const tagResult3 = tag.tag(4, FavoriteChannel$Type(outer1_1[7]).WireType.Bit64);
      }
      if (nickname.channelType) {
        const UInt32Value = FavoriteChannel$Type(outer1_1[9]).UInt32Value;
        const tagResult4 = tag.tag(5, FavoriteChannel$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, FavoriteChannel$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, FavoriteChannel$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== nickname.collapsed) {
        tag.tag(6, FavoriteChannel$Type(outer1_1[7]).WireType.Varint).bool(nickname.collapsed);
        const tagResult5 = tag.tag(6, FavoriteChannel$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteChannel$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, nickname, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteChannel$Type, items);
})(require("module_1284").MessageType);
tmp66 = new tmp66();
let closure_60 = tmp66;
let tmp68 = ((MessageType) => {
  class AudioContextSetting$Type {
    constructor() {
      tmp = outer1_3(this, AudioContextSetting$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "muted", kind: "scalar", T: 8 };
      items[1] = { no: 2, name: "volume", kind: "scalar", T: 2 };
      items[2] = { no: 3, name: "modified_at", kind: "scalar", T: 6 };
      items[3] = { no: 4, name: "soundboard_muted", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.AudioContextSetting"];
      items1[1] = items;
      return outer1_82(this, AudioContextSetting$Type, items1);
    }
  }
  callback3(AudioContextSetting$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { muted: false, volume: 0, modifiedAt: "0", soundboardMuted: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AudioContextSetting$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AudioContextSetting$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AudioContextSetting$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AudioContextSetting$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(muted, tag, writeUnknownFields) {
      if (false !== muted.muted) {
        tag.tag(1, AudioContextSetting$Type(outer1_1[7]).WireType.Varint).bool(muted.muted);
        const tagResult = tag.tag(1, AudioContextSetting$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== muted.volume) {
        tag.tag(2, AudioContextSetting$Type(outer1_1[7]).WireType.Bit32).float(muted.volume);
        const tagResult1 = tag.tag(2, AudioContextSetting$Type(outer1_1[7]).WireType.Bit32);
      }
      if ("0" !== muted.modifiedAt) {
        tag.tag(3, AudioContextSetting$Type(outer1_1[7]).WireType.Bit64).fixed64(muted.modifiedAt);
        const tagResult2 = tag.tag(3, AudioContextSetting$Type(outer1_1[7]).WireType.Bit64);
      }
      if (false !== muted.soundboardMuted) {
        tag.tag(4, AudioContextSetting$Type(outer1_1[7]).WireType.Varint).bool(muted.soundboardMuted);
        const tagResult3 = tag.tag(4, AudioContextSetting$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AudioContextSetting$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, muted, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AudioContextSetting$Type, items);
})(require("module_1284").MessageType);
tmp68 = new tmp68();
let closure_61 = tmp68;
let tmp70 = ((MessageType) => {
  class AudioSettings$Type {
    constructor() {
      tmp = outer1_3(this, AudioSettings$Type);
      obj = { no: 1, name: "user", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_61;
            }
      };
      obj.V = obj;
      items = [, ];
      items[0] = obj;
      obj1 = { no: 2, name: "stream", kind: "map", K: 6 };
      obj1.V = {
        kind: "message",
        T() {
              return outer2_61;
            }
      };
      items[1] = obj1;
      items1 = ["discord_protos.discord_users.v1.AudioSettings"];
      items1[1] = items;
      return outer1_82(this, AudioSettings$Type, items1);
    }
  }
  callback3(AudioSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { user: {}, stream: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AudioSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AudioSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AudioSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AudioSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_61;
            internalBinaryReadResult = outer1_61.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_61.create();
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_61;
            internalBinaryReadResult = outer1_61.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_61.create();
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
          let tmp2 = AudioSettings$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, AudioSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, AudioSettings$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, AudioSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_61;
          let internalBinaryWriteResult = outer1_61.internalBinaryWrite(user.user[tmp], tag, writeUnknownFields);
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
          let tmp10 = AudioSettings$Type;
          let tmp11 = outer1_1;
          let tagResult3 = tag.tag(2, AudioSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tagResult4 = forkResult2.tag(1, AudioSettings$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result1 = tagResult4.fixed64(tmp9);
          let tagResult5 = tag.tag(2, AudioSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult3 = tagResult5.fork();
          let tmp14 = outer1_61;
          let internalBinaryWriteResult1 = outer1_61.internalBinaryWrite(user.stream[tmp9], tag, writeUnknownFields);
          let joined2 = tag.join();
          let joined3 = joined2.join();
          num2 = num2 + 1;
          length2 = keys1.length;
        } while (num2 < length2);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AudioSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, user, tag);
      }
      return tag;
    }
  };
  return callback(AudioSettings$Type, items);
})(require("module_1284").MessageType);
tmp70 = new tmp70();
let closure_62 = tmp70;
let tmp72 = ((MessageType) => {
  class CommunitiesSettings$Type {
    constructor() {
      tmp = outer1_3(this, CommunitiesSettings$Type);
      obj = { no: 1, name: "disable_home_auto_nav", kind: "message" };
      obj.T = function T() {
        return CommunitiesSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.CommunitiesSettings"];
      items1[1] = items;
      return outer1_82(this, CommunitiesSettings$Type, items1);
    }
  }
  callback3(CommunitiesSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CommunitiesSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CommunitiesSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CommunitiesSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = CommunitiesSettings$Type;
          let tmp27 = outer1_1;
          let BoolValue = CommunitiesSettings$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = CommunitiesSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(disableHomeAutoNav, tag, writeUnknownFields) {
      if (disableHomeAutoNav.disableHomeAutoNav) {
        const BoolValue = CommunitiesSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, CommunitiesSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, CommunitiesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, CommunitiesSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CommunitiesSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disableHomeAutoNav, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CommunitiesSettings$Type, items);
})(require("module_1284").MessageType);
tmp72 = new tmp72();
let closure_63 = tmp72;
let tmp74 = ((MessageType) => {
  class SoundboardSettings$Type {
    constructor() {
      tmp = outer1_3(this, SoundboardSettings$Type);
      items = [];
      items[0] = { no: 1, name: "volume", kind: "scalar", T: 2 };
      items1 = ["discord_protos.discord_users.v1.SoundboardSettings"];
      items1[1] = items;
      return outer1_82(this, SoundboardSettings$Type, items1);
    }
  }
  callback3(SoundboardSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { volume: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SoundboardSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SoundboardSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SoundboardSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = SoundboardSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(volume, tag, writeUnknownFields) {
      if (0 !== volume.volume) {
        tag.tag(1, SoundboardSettings$Type(outer1_1[7]).WireType.Bit32).float(volume.volume);
        const tagResult = tag.tag(1, SoundboardSettings$Type(outer1_1[7]).WireType.Bit32);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SoundboardSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, volume, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SoundboardSettings$Type, items);
})(require("module_1284").MessageType);
tmp74 = new tmp74();
let closure_64 = tmp74;
let tmp76 = ((MessageType) => {
  class CustomCallSound$Type {
    constructor() {
      tmp = outer1_3(this, CustomCallSound$Type);
      items = [, ];
      items[0] = { no: 1, name: "sound_id", kind: "scalar", T: 6 };
      items[1] = { no: 2, name: "guild_id", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_users.v1.CustomCallSound"];
      items1[1] = items;
      return outer1_82(this, CustomCallSound$Type, items1);
    }
  }
  callback3(CustomCallSound$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { soundId: "0", guildId: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CustomCallSound$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CustomCallSound$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = CustomCallSound$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = CustomCallSound$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(soundId, tag, writeUnknownFields) {
      if ("0" !== soundId.soundId) {
        tag.tag(1, CustomCallSound$Type(outer1_1[7]).WireType.Bit64).fixed64(soundId.soundId);
        const tagResult = tag.tag(1, CustomCallSound$Type(outer1_1[7]).WireType.Bit64);
      }
      if ("0" !== soundId.guildId) {
        tag.tag(2, CustomCallSound$Type(outer1_1[7]).WireType.Bit64).fixed64(soundId.guildId);
        const tagResult1 = tag.tag(2, CustomCallSound$Type(outer1_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CustomCallSound$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, soundId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CustomCallSound$Type, items);
})(require("module_1284").MessageType);
tmp76 = new tmp76();
let closure_65 = tmp76;
let tmp78 = ((MessageType) => {
  class BroadcastSettings$Type {
    constructor() {
      tmp = outer1_3(this, BroadcastSettings$Type);
      obj = { no: 1, name: "allow_friends", kind: "message" };
      obj.T = function T() {
        return BroadcastSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [, , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 };
      items[2] = { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 };
      obj = { no: 4, name: "auto_broadcast", kind: "message" };
      obj.T = function T() {
        return BroadcastSettings$Type(outer2_1[9]).BoolValue;
      };
      items[3] = obj;
      items1 = ["discord_protos.discord_users.v1.BroadcastSettings"];
      items1[1] = items;
      return outer1_82(this, BroadcastSettings$Type, items1);
    }
  }
  callback3(BroadcastSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { allowedGuildIds: [], allowedUserIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BroadcastSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BroadcastSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = BroadcastSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp7 = outer1_2;
        let tmp8 = outer1_2(pos.tag(), 2);
        [tmp9, tmp10] = tmp8;
        if (1 === tmp9) {
          let tmp45 = BroadcastSettings$Type;
          let tmp46 = outer1_1;
          let BoolValue2 = BroadcastSettings$Type(outer1_1[9]).BoolValue;
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
          let tmp41 = outer1_1;
          if (tmp10 === BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited) {
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
                pos2 = pos.pos;
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
          let tmp36 = outer1_1;
          if (tmp10 === BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited) {
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
          let tmp31 = outer1_1;
          let BoolValue = BroadcastSettings$Type(outer1_1[9]).BoolValue;
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
                let tmp17 = outer1_1;
                onRead = BroadcastSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp12;
        tmp4 = tmp13;
        tmp5 = tmp14;
        tmp6 = tmp15;
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
        const BoolValue = BroadcastSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (allowFriends.allowedGuildIds.length) {
        tag.tag(2, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num6 = 0;
        if (0 < allowFriends.allowedGuildIds.length) {
          do {
            let fixed64Result = tag.fixed64(allowFriends.allowedGuildIds[num6]);
            num6 = num6 + 1;
            length = allowFriends.allowedGuildIds.length;
          } while (num6 < length);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (allowFriends.allowedUserIds.length) {
        tag.tag(3, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num9 = 0;
        if (0 < allowFriends.allowedUserIds.length) {
          do {
            let fixed64Result1 = tag.fixed64(allowFriends.allowedUserIds[num9]);
            num9 = num9 + 1;
            length2 = allowFriends.allowedUserIds.length;
          } while (num9 < length2);
        }
        const joined2 = tag.join();
        const tagResult2 = tag.tag(3, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (allowFriends.autoBroadcast) {
        const BoolValue2 = BroadcastSettings$Type(outer1_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, BroadcastSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BroadcastSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowFriends, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BroadcastSettings$Type, items);
})(require("module_1284").MessageType);
tmp78 = new tmp78();
let closure_66 = tmp78;
let tmp80 = ((MessageType) => {
  class ClipsSettings$Type {
    constructor() {
      tmp = outer1_3(this, ClipsSettings$Type);
      obj = { no: 1, name: "allow_voice_recording", kind: "message" };
      obj.T = function T() {
        return ClipsSettings$Type(outer2_1[9]).BoolValue;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.ClipsSettings"];
      items1[1] = items;
      return outer1_82(this, ClipsSettings$Type, items1);
    }
  }
  callback3(ClipsSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClipsSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClipsSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClipsSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = ClipsSettings$Type;
          let tmp27 = outer1_1;
          let BoolValue = ClipsSettings$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = ClipsSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowVoiceRecording, tag, writeUnknownFields) {
      if (allowVoiceRecording.allowVoiceRecording) {
        const BoolValue = ClipsSettings$Type(outer1_1[9]).BoolValue;
        const tagResult = tag.tag(1, ClipsSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, ClipsSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, ClipsSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClipsSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowVoiceRecording, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClipsSettings$Type, items);
})(require("module_1284").MessageType);
tmp80 = new tmp80();
let closure_67 = tmp80;
let tmp82 = ((MessageType) => {
  class SpendingLimit$Type {
    constructor() {
      tmp = outer1_3(this, SpendingLimit$Type);
      items = [, ];
      items[0] = { no: 1, name: "amount", kind: "scalar", T: 4 };
      items[1] = { no: 2, name: "currency", kind: "scalar", T: 9 };
      items1 = ["discord_protos.discord_users.v1.SpendingLimit"];
      items1[1] = items;
      return outer1_82(this, SpendingLimit$Type, items1);
    }
  }
  callback3(SpendingLimit$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { amount: "0", currency: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SpendingLimit$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SpendingLimit$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SpendingLimit$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = SpendingLimit$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(amount, tag, writeUnknownFields) {
      if ("0" !== amount.amount) {
        tag.tag(1, SpendingLimit$Type(outer1_1[7]).WireType.Varint).uint64(amount.amount);
        const tagResult = tag.tag(1, SpendingLimit$Type(outer1_1[7]).WireType.Varint);
      }
      if ("" !== amount.currency) {
        tag.tag(2, SpendingLimit$Type(outer1_1[7]).WireType.LengthDelimited).string(amount.currency);
        const tagResult1 = tag.tag(2, SpendingLimit$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SpendingLimit$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, amount, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SpendingLimit$Type, items);
})(require("module_1284").MessageType);
tmp82 = new tmp82();
let closure_68 = tmp82;
let tmp84 = ((MessageType) => {
  class SpendingLimitSettings$Type {
    constructor() {
      tmp = outer1_3(this, SpendingLimitSettings$Type);
      obj = { no: 1, name: "one_time_purchase_limit", kind: "message" };
      obj.T = function T() {
        return outer2_68;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.SpendingLimitSettings"];
      items1[1] = items;
      return outer1_82(this, SpendingLimitSettings$Type, items1);
    }
  }
  callback3(SpendingLimitSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SpendingLimitSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SpendingLimitSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SpendingLimitSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = outer1_68;
          let tmp27 = outer1_68;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.oneTimePurchaseLimit = outer1_68.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.oneTimePurchaseLimit);
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
                let tmp13 = outer1_1;
                onRead = SpendingLimitSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(oneTimePurchaseLimit, tag, writeUnknownFields) {
      if (oneTimePurchaseLimit.oneTimePurchaseLimit) {
        const tagResult = tag.tag(1, SpendingLimitSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_68.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, SpendingLimitSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_68.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, SpendingLimitSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SpendingLimitSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, oneTimePurchaseLimit, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SpendingLimitSettings$Type, items);
})(require("module_1284").MessageType);
tmp84 = new tmp84();
let closure_69 = tmp84;
let tmp86 = ((MessageType) => {
  class SafetySettings$Type {
    constructor() {
      tmp = outer1_3(this, SafetySettings$Type);
      obj = { no: 1, name: "safety_settings_preset", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.SafetySettingsPresetType", outer2_27];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 };
      obj = { no: 3, name: "spending_limit_settings", kind: "message" };
      obj.T = function T() {
        return outer2_69;
      };
      items[2] = obj;
      items1 = ["discord_protos.discord_users.v1.SafetySettings"];
      items1[1] = items;
      return outer1_82(this, SafetySettings$Type, items1);
    }
  }
  callback3(SafetySettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetySettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetySettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetySettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp26 = outer1_69;
          let tmp27 = outer1_69;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.spendingLimitSettings = outer1_69.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.spendingLimitSettings);
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
                let tmp13 = outer1_1;
                onRead = SafetySettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(safetySettingsPreset, tag, writeUnknownFields) {
      if (0 !== safetySettingsPreset.safetySettingsPreset) {
        tag.tag(1, SafetySettings$Type(outer1_1[7]).WireType.Varint).int32(safetySettingsPreset.safetySettingsPreset);
        const tagResult = tag.tag(1, SafetySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (false !== safetySettingsPreset.ignoreProfileSpeedbumpDisabled) {
        tag.tag(2, SafetySettings$Type(outer1_1[7]).WireType.Varint).bool(safetySettingsPreset.ignoreProfileSpeedbumpDisabled);
        const tagResult1 = tag.tag(2, SafetySettings$Type(outer1_1[7]).WireType.Varint);
      }
      if (safetySettingsPreset.spendingLimitSettings) {
        const tagResult2 = tag.tag(3, SafetySettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_69.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, SafetySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_69.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, SafetySettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetySettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, safetySettingsPreset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetySettings$Type, items);
})(require("module_1284").MessageType);
tmp86 = new tmp86();
let closure_70 = tmp86;
let tmp88 = ((MessageType) => {
  class ForLaterSettings$Type {
    constructor() {
      tmp = outer1_3(this, ForLaterSettings$Type);
      obj = { no: 1, name: "current_tab", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.ForLaterTab", outer2_28, "FOR_LATER_TAB_"];
        return items;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.ForLaterSettings"];
      items1[1] = items;
      return outer1_82(this, ForLaterSettings$Type, items1);
    }
  }
  callback3(ForLaterSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { currentTab: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ForLaterSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ForLaterSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ForLaterSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = ForLaterSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(currentTab, tag, writeUnknownFields) {
      if (0 !== currentTab.currentTab) {
        tag.tag(1, ForLaterSettings$Type(outer1_1[7]).WireType.Varint).int32(currentTab.currentTab);
        const tagResult = tag.tag(1, ForLaterSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ForLaterSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, currentTab, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ForLaterSettings$Type, items);
})(require("module_1284").MessageType);
tmp88 = new tmp88();
let closure_71 = tmp88;
let tmp90 = ((MessageType) => {
  class ICYMISettings$Type {
    constructor() {
      tmp = outer1_3(this, ICYMISettings$Type);
      items = [];
      items[0] = { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_users.v1.ICYMISettings"];
      items1[1] = items;
      return outer1_82(this, ICYMISettings$Type, items1);
    }
  }
  callback3(ICYMISettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { feedGeneratedAt: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ICYMISettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ICYMISettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ICYMISettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = ICYMISettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(feedGeneratedAt, tag, writeUnknownFields) {
      if ("0" !== feedGeneratedAt.feedGeneratedAt) {
        tag.tag(1, ICYMISettings$Type(outer1_1[7]).WireType.Bit64).fixed64(feedGeneratedAt.feedGeneratedAt);
        const tagResult = tag.tag(1, ICYMISettings$Type(outer1_1[7]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ICYMISettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, feedGeneratedAt, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ICYMISettings$Type, items);
})(require("module_1284").MessageType);
tmp90 = new tmp90();
let closure_72 = tmp90;
let tmp92 = ((MessageType) => {
  class AllApplicationSettings$Type {
    constructor() {
      tmp = outer1_3(this, AllApplicationSettings$Type);
      obj = { no: 1, name: "app_settings", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_74;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.AllApplicationSettings"];
      items1[1] = items;
      return outer1_82(this, AllApplicationSettings$Type, items1);
    }
  }
  callback3(AllApplicationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { appSettings: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AllApplicationSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AllApplicationSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AllApplicationSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AllApplicationSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_74;
            internalBinaryReadResult = outer1_74.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_74.create();
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
          let tmp2 = AllApplicationSettings$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, AllApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, AllApplicationSettings$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, AllApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_74;
          let internalBinaryWriteResult = outer1_74.internalBinaryWrite(appSettings.appSettings[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AllApplicationSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, appSettings, tag);
      }
      return tag;
    }
  };
  return callback(AllApplicationSettings$Type, items);
})(require("module_1284").MessageType);
tmp92 = new tmp92();
let closure_73 = tmp92;
let tmp94 = ((MessageType) => {
  class ApplicationSettings$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationSettings$Type);
      obj = { no: 1, name: "app_dm_settings", kind: "message" };
      obj.T = function T() {
        return outer2_75;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "app_sharing_settings", kind: "message" };
      obj.T = function T() {
        return outer2_76;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_users.v1.ApplicationSettings"];
      items1[1] = items;
      return outer1_82(this, ApplicationSettings$Type, items1);
    }
  }
  callback3(ApplicationSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp30 = outer1_75;
          let tmp31 = outer1_75;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.appDmSettings = outer1_75.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appDmSettings);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = outer1_76;
          let tmp27 = outer1_76;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.appSharingSettings = outer1_76.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appSharingSettings);
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
                let tmp13 = outer1_1;
                onRead = ApplicationSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(appDmSettings, tag, writeUnknownFields) {
      if (appDmSettings.appDmSettings) {
        const tagResult = tag.tag(1, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = outer1_75.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_75.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (appDmSettings.appSharingSettings) {
        const tagResult1 = tag.tag(2, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_76.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_76.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, ApplicationSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, appDmSettings, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationSettings$Type, items);
})(require("module_1284").MessageType);
tmp94 = new tmp94();
let closure_74 = tmp94;
let tmp96 = ((MessageType) => {
  class ApplicationDMSettings$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationDMSettings$Type);
      items = [];
      items[0] = { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.ApplicationDMSettings"];
      items1[1] = items;
      return outer1_82(this, ApplicationDMSettings$Type, items1);
    }
  }
  callback3(ApplicationDMSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { allowMobilePush: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationDMSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationDMSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationDMSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = ApplicationDMSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(allowMobilePush, tag, writeUnknownFields) {
      if (false !== allowMobilePush.allowMobilePush) {
        tag.tag(2, ApplicationDMSettings$Type(outer1_1[7]).WireType.Varint).bool(allowMobilePush.allowMobilePush);
        const tagResult = tag.tag(2, ApplicationDMSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationDMSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, allowMobilePush, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationDMSettings$Type, items);
})(require("module_1284").MessageType);
tmp96 = new tmp96();
let closure_75 = tmp96;
let tmp98 = ((MessageType) => {
  class ApplicationSharingSettings$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationSharingSettings$Type);
      items = [];
      items[0] = { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.ApplicationSharingSettings"];
      items1[1] = items;
      return outer1_82(this, ApplicationSharingSettings$Type, items1);
    }
  }
  callback3(ApplicationSharingSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { disableApplicationActivitySharing: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationSharingSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationSharingSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationSharingSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = ApplicationSharingSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(disableApplicationActivitySharing, tag, writeUnknownFields) {
      if (false !== disableApplicationActivitySharing.disableApplicationActivitySharing) {
        tag.tag(1, ApplicationSharingSettings$Type(outer1_1[7]).WireType.Varint).bool(disableApplicationActivitySharing.disableApplicationActivitySharing);
        const tagResult = tag.tag(1, ApplicationSharingSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationSharingSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disableApplicationActivitySharing, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ApplicationSharingSettings$Type, items);
})(require("module_1284").MessageType);
tmp98 = new tmp98();
let closure_76 = tmp98;
let definePropertyResult = ((MessageType) => {
  class AdsSettings$Type {
    constructor() {
      tmp = outer1_3(this, AdsSettings$Type);
      items = [];
      items[0] = { no: 1, name: "always_deliver", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.AdsSettings"];
      items1[1] = items;
      return outer1_82(this, AdsSettings$Type, items1);
    }
  }
  callback3(AdsSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { alwaysDeliver: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AdsSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AdsSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AdsSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AdsSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(alwaysDeliver, tag, writeUnknownFields) {
      if (false !== alwaysDeliver.alwaysDeliver) {
        tag.tag(1, AdsSettings$Type(outer1_1[7]).WireType.Varint).bool(alwaysDeliver.alwaysDeliver);
        const tagResult = tag.tag(1, AdsSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AdsSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, alwaysDeliver, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AdsSettings$Type, items);
})(require("module_1284").MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = ((MessageType) => {
  class InAppFeedbackState$Type {
    constructor() {
      tmp = outer1_3(this, InAppFeedbackState$Type);
      obj = { no: 1, name: "last_impression_time", kind: "message" };
      obj.T = function T() {
        return InAppFeedbackState$Type(outer2_1[9]).UInt64Value;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "opt_out_expiry_time", kind: "message" };
      obj.T = function T() {
        return InAppFeedbackState$Type(outer2_1[9]).UInt64Value;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_users.v1.InAppFeedbackState"];
      items1[1] = items;
      return outer1_82(this, InAppFeedbackState$Type, items1);
    }
  }
  callback3(InAppFeedbackState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InAppFeedbackState$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InAppFeedbackState$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InAppFeedbackState$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp31 = InAppFeedbackState$Type;
          let tmp32 = outer1_1;
          let UInt64Value2 = InAppFeedbackState$Type(outer1_1[9]).UInt64Value;
          let tmp33 = UInt64Value2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.lastImpressionTime = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastImpressionTime);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = InAppFeedbackState$Type;
          let tmp27 = outer1_1;
          let UInt64Value = InAppFeedbackState$Type(outer1_1[9]).UInt64Value;
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
                let tmp13 = outer1_1;
                onRead = InAppFeedbackState$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(lastImpressionTime, tag, writeUnknownFields) {
      if (lastImpressionTime.lastImpressionTime) {
        const UInt64Value = InAppFeedbackState$Type(outer1_1[9]).UInt64Value;
        const tagResult = tag.tag(1, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (lastImpressionTime.optOutExpiryTime) {
        const UInt64Value2 = InAppFeedbackState$Type(outer1_1[9]).UInt64Value;
        const tagResult1 = tag.tag(2, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, InAppFeedbackState$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InAppFeedbackState$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lastImpressionTime, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(InAppFeedbackState$Type, items);
})(require("module_1284").MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = ((MessageType) => {
  class DefaultReactionEmoji$Type {
    constructor() {
      tmp = outer1_3(this, DefaultReactionEmoji$Type);
      obj = { no: 1, name: "emoji_id", kind: "message" };
      obj.T = function T() {
        return DefaultReactionEmoji$Type(outer2_1[9]).UInt64Value;
      };
      items = [, , , ];
      items[0] = obj;
      obj = { no: 2, name: "emoji_name", kind: "message" };
      obj.T = function T() {
        return DefaultReactionEmoji$Type(outer2_1[9]).StringValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "animated", kind: "message" };
      obj1.T = function T() {
        return DefaultReactionEmoji$Type(outer2_1[9]).BoolValue;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "disable_double_tap", kind: "message" };
      obj2.T = function T() {
        return DefaultReactionEmoji$Type(outer2_1[9]).BoolValue;
      };
      items[3] = obj2;
      items1 = ["discord_protos.discord_users.v1.DefaultReactionEmoji"];
      items1[1] = items;
      return outer1_82(this, DefaultReactionEmoji$Type, items1);
    }
  }
  callback3(DefaultReactionEmoji$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DefaultReactionEmoji$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DefaultReactionEmoji$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = DefaultReactionEmoji$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp41 = DefaultReactionEmoji$Type;
          let tmp42 = outer1_1;
          let UInt64Value = DefaultReactionEmoji$Type(outer1_1[9]).UInt64Value;
          let tmp43 = UInt64Value;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.emojiId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = DefaultReactionEmoji$Type;
          let tmp37 = outer1_1;
          let StringValue = DefaultReactionEmoji$Type(outer1_1[9]).StringValue;
          let tmp38 = StringValue;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.emojiName = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiName);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = DefaultReactionEmoji$Type;
          let tmp32 = outer1_1;
          let BoolValue2 = DefaultReactionEmoji$Type(outer1_1[9]).BoolValue;
          let tmp33 = BoolValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.animated = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.animated);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = DefaultReactionEmoji$Type;
          let tmp27 = outer1_1;
          let BoolValue = DefaultReactionEmoji$Type(outer1_1[9]).BoolValue;
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
                let tmp13 = outer1_1;
                onRead = DefaultReactionEmoji$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(emojiId, tag, writeUnknownFields) {
      if (emojiId.emojiId) {
        const UInt64Value = DefaultReactionEmoji$Type(outer1_1[9]).UInt64Value;
        const tagResult = tag.tag(1, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.emojiName) {
        const StringValue = DefaultReactionEmoji$Type(outer1_1[9]).StringValue;
        const tagResult1 = tag.tag(2, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.animated) {
        const BoolValue = DefaultReactionEmoji$Type(outer1_1[9]).BoolValue;
        const tagResult2 = tag.tag(3, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (emojiId.disableDoubleTap) {
        const BoolValue2 = DefaultReactionEmoji$Type(outer1_1[9]).BoolValue;
        const tagResult3 = tag.tag(4, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, DefaultReactionEmoji$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DefaultReactionEmoji$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojiId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DefaultReactionEmoji$Type, items);
})(require("module_1284").MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = ((MessageType) => {
  class InAppFeedbackSettings$Type {
    constructor() {
      tmp = outer1_3(this, InAppFeedbackSettings$Type);
      obj = { no: 1, name: "in_app_feedback_states", kind: "map", K: 5 };
      obj = {
        kind: "message",
        T() {
              return outer2_78;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.InAppFeedbackSettings"];
      items1[1] = items;
      return outer1_82(this, InAppFeedbackSettings$Type, items1);
    }
  }
  callback3(InAppFeedbackSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { inAppFeedbackStates: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InAppFeedbackSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InAppFeedbackSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = InAppFeedbackSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = InAppFeedbackSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let int32Result = pos.int32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_78;
            internalBinaryReadResult = outer1_78.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_78.create();
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
          let tmp2 = InAppFeedbackSettings$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, InAppFeedbackSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, InAppFeedbackSettings$Type(outer1_1[7]).WireType.Varint);
          let _parseInt = parseInt;
          let int32Result = tagResult1.int32(parseInt(tmp));
          let tagResult2 = tag.tag(2, InAppFeedbackSettings$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_78;
          let internalBinaryWriteResult = outer1_78.internalBinaryWrite(inAppFeedbackStates.inAppFeedbackStates[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InAppFeedbackSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, inAppFeedbackStates, tag);
      }
      return tag;
    }
  };
  return callback(InAppFeedbackSettings$Type, items);
})(require("module_1284").MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = ((MessageType) => {
  class AppVersionSettings$Type {
    constructor() {
      tmp = outer1_3(this, AppVersionSettings$Type);
      items = [];
      items[0] = { no: 1, name: "is_using_outdated_mobile_version", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.AppVersionSettings"];
      items1[1] = items;
      return outer1_82(this, AppVersionSettings$Type, items1);
    }
  }
  callback3(AppVersionSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { isUsingOutdatedMobileVersion: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AppVersionSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AppVersionSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = AppVersionSettings$Type(outer1_1[7]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = AppVersionSettings$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(isUsingOutdatedMobileVersion, tag, writeUnknownFields) {
      if (false !== isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion) {
        tag.tag(1, AppVersionSettings$Type(outer1_1[7]).WireType.Varint).bool(isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion);
        const tagResult = tag.tag(1, AppVersionSettings$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AppVersionSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, isUsingOutdatedMobileVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AppVersionSettings$Type, items);
})(require("module_1284").MessageType);
definePropertyResult = new definePropertyResult();
definePropertyResult = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx");

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
