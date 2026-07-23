// Module ID: 1317
// Function ID: 15385
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1283, 1284, 2]

// Module 1317 (_callSuper)
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
let obj = { NONE: 0, [0]: "NONE", IMAGE: 1, [1]: "IMAGE", VIDEO: 2, [2]: "VIDEO" };
let tmp2 = ((MessageType) => {
  class FrecencyUserSettings$Type {
    constructor() {
      tmp = outer1_3(this, FrecencyUserSettings$Type);
      obj = { no: 1, name: "versions", kind: "message" };
      obj.T = function T() {
        return FrecencyUserSettings$Type(outer2_1[6]).Versions;
      };
      items = [, , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "favorite_gifs", kind: "message" };
      obj.T = function T() {
        return outer2_9;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "favorite_stickers", kind: "message" };
      obj1.T = function T() {
        return outer2_11;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "sticker_frecency", kind: "message" };
      obj2.T = function T() {
        return outer2_12;
      };
      items[3] = obj2;
      obj3 = { no: 5, name: "favorite_emojis", kind: "message" };
      obj3.T = function T() {
        return outer2_13;
      };
      items[4] = obj3;
      obj4 = { no: 6, name: "emoji_frecency", kind: "message" };
      obj4.T = function T() {
        return outer2_14;
      };
      items[5] = obj4;
      obj5 = { no: 7, name: "application_command_frecency", kind: "message" };
      obj5.T = function T() {
        return outer2_15;
      };
      items[6] = obj5;
      obj6 = { no: 8, name: "favorite_soundboard_sounds", kind: "message" };
      obj6.T = function T() {
        return outer2_17;
      };
      items[7] = obj6;
      obj7 = { no: 9, name: "application_frecency", kind: "message" };
      obj7.T = function T() {
        return outer2_20;
      };
      items[8] = obj7;
      obj8 = { no: 10, name: "heard_sound_frecency", kind: "message" };
      obj8.T = function T() {
        return outer2_18;
      };
      items[9] = obj8;
      obj9 = { no: 11, name: "played_sound_frecency", kind: "message" };
      obj9.T = function T() {
        return outer2_19;
      };
      items[10] = obj9;
      obj10 = { no: 12, name: "guild_and_channel_frecency", kind: "message" };
      obj10.T = function T() {
        return outer2_21;
      };
      items[11] = obj10;
      obj11 = { no: 13, name: "emoji_reaction_frecency", kind: "message" };
      obj11.T = function T() {
        return outer2_14;
      };
      items[12] = obj11;
      items1 = ["discord_protos.discord_users.v1.FrecencyUserSettings"];
      items1[1] = items;
      return outer1_22(this, FrecencyUserSettings$Type, items1);
    }
  }
  callback3(FrecencyUserSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FrecencyUserSettings$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FrecencyUserSettings$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FrecencyUserSettings$Type(outer1_1[7]);
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
        obj.emojiReactionFrecency = outer1_14.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.emojiReactionFrecency);
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
        const Versions = FrecencyUserSettings$Type(outer1_1[6]).Versions;
        const tagResult = tag.tag(1, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = Versions.internalBinaryWrite(versions.versions, tag.tag(1, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Versions.internalBinaryWrite(versions.versions, tag.tag(1, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteGifs) {
        const tagResult1 = tag.tag(2, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined1 = outer1_9.internalBinaryWrite(versions.favoriteGifs, tag.tag(2, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_9.internalBinaryWrite(versions.favoriteGifs, tag.tag(2, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteStickers) {
        const tagResult2 = tag.tag(3, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined2 = outer1_11.internalBinaryWrite(versions.favoriteStickers, tag.tag(3, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_11.internalBinaryWrite(versions.favoriteStickers, tag.tag(3, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.stickerFrecency) {
        const tagResult3 = tag.tag(4, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined3 = outer1_12.internalBinaryWrite(versions.stickerFrecency, tag.tag(4, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_12.internalBinaryWrite(versions.stickerFrecency, tag.tag(4, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteEmojis) {
        const tagResult4 = tag.tag(5, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined4 = outer1_13.internalBinaryWrite(versions.favoriteEmojis, tag.tag(5, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_13.internalBinaryWrite(versions.favoriteEmojis, tag.tag(5, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.emojiFrecency) {
        const tagResult5 = tag.tag(6, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined5 = outer1_14.internalBinaryWrite(versions.emojiFrecency, tag.tag(6, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = outer1_14.internalBinaryWrite(versions.emojiFrecency, tag.tag(6, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applicationCommandFrecency) {
        const tagResult6 = tag.tag(7, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined6 = outer1_15.internalBinaryWrite(versions.applicationCommandFrecency, tag.tag(7, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_15.internalBinaryWrite(versions.applicationCommandFrecency, tag.tag(7, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteSoundboardSounds) {
        const tagResult7 = tag.tag(8, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined7 = outer1_17.internalBinaryWrite(versions.favoriteSoundboardSounds, tag.tag(8, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = outer1_17.internalBinaryWrite(versions.favoriteSoundboardSounds, tag.tag(8, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applicationFrecency) {
        const tagResult8 = tag.tag(9, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined8 = outer1_20.internalBinaryWrite(versions.applicationFrecency, tag.tag(9, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = outer1_20.internalBinaryWrite(versions.applicationFrecency, tag.tag(9, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.heardSoundFrecency) {
        const tagResult9 = tag.tag(10, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined9 = outer1_18.internalBinaryWrite(versions.heardSoundFrecency, tag.tag(10, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = outer1_18.internalBinaryWrite(versions.heardSoundFrecency, tag.tag(10, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.playedSoundFrecency) {
        const tagResult10 = tag.tag(11, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined10 = outer1_19.internalBinaryWrite(versions.playedSoundFrecency, tag.tag(11, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = outer1_19.internalBinaryWrite(versions.playedSoundFrecency, tag.tag(11, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guildAndChannelFrecency) {
        const tagResult11 = tag.tag(12, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined11 = outer1_21.internalBinaryWrite(versions.guildAndChannelFrecency, tag.tag(12, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = outer1_21.internalBinaryWrite(versions.guildAndChannelFrecency, tag.tag(12, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.emojiReactionFrecency) {
        const tagResult12 = tag.tag(13, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined12 = outer1_14.internalBinaryWrite(versions.emojiReactionFrecency, tag.tag(13, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = outer1_14.internalBinaryWrite(versions.emojiReactionFrecency, tag.tag(13, FrecencyUserSettings$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FrecencyUserSettings$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, versions, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FrecencyUserSettings$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let tmp4 = ((MessageType) => {
  class FavoriteGIFs$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteGIFs$Type);
      obj = { no: 1, name: "gifs", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_10;
            }
      };
      obj.V = obj;
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_users.v1.FavoriteGIFs"];
      items1[1] = items;
      return outer1_22(this, FavoriteGIFs$Type, items1);
    }
  }
  callback3(FavoriteGIFs$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { gifs: {}, hideTooltip: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteGIFs$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteGIFs$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteGIFs$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.gifs, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.hideTooltip = pos.bool();
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
                let tmp12 = FavoriteGIFs$Type;
                let tmp13 = outer1_1;
                onRead = FavoriteGIFs$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_10;
            internalBinaryReadResult = outer1_10.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_10.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(gifs, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(gifs.gifs);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = FavoriteGIFs$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, FavoriteGIFs$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, FavoriteGIFs$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, FavoriteGIFs$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_10;
          let internalBinaryWriteResult = outer1_10.internalBinaryWrite(gifs.gifs[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (false !== gifs.hideTooltip) {
        tag.tag(2, FavoriteGIFs$Type(outer1_1[7]).WireType.Varint).bool(gifs.hideTooltip);
        const tagResult3 = tag.tag(2, FavoriteGIFs$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteGIFs$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, gifs, tag);
      }
      return tag;
    }
  };
  return callback(FavoriteGIFs$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_9 = tmp4;
let tmp6 = ((MessageType) => {
  class FavoriteGIF$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteGIF$Type);
      obj = { no: 1, name: "format", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.GIFType", outer2_8];
        return items;
      };
      items = [, , , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "src", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "width", kind: "scalar", T: 13 };
      items[3] = { no: 4, name: "height", kind: "scalar", T: 13 };
      items[4] = { no: 5, name: "order", kind: "scalar", T: 13 };
      items1 = ["discord_protos.discord_users.v1.FavoriteGIF"];
      items1[1] = items;
      return outer1_22(this, FavoriteGIF$Type, items1);
    }
  }
  callback3(FavoriteGIF$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { format: 0, src: "", width: 0, height: 0, order: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteGIF$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteGIF$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteGIF$Type(outer1_1[7]);
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
          obj.format = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.src = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.width = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.height = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.order = pos.uint32();
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
                let tmp12 = FavoriteGIF$Type;
                let tmp13 = outer1_1;
                onRead = FavoriteGIF$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(format, tag, writeUnknownFields) {
      if (0 !== format.format) {
        tag.tag(1, FavoriteGIF$Type(outer1_1[7]).WireType.Varint).int32(format.format);
        const tagResult = tag.tag(1, FavoriteGIF$Type(outer1_1[7]).WireType.Varint);
      }
      if ("" !== format.src) {
        tag.tag(2, FavoriteGIF$Type(outer1_1[7]).WireType.LengthDelimited).string(format.src);
        const tagResult1 = tag.tag(2, FavoriteGIF$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (0 !== format.width) {
        tag.tag(3, FavoriteGIF$Type(outer1_1[7]).WireType.Varint).uint32(format.width);
        const tagResult2 = tag.tag(3, FavoriteGIF$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== format.height) {
        tag.tag(4, FavoriteGIF$Type(outer1_1[7]).WireType.Varint).uint32(format.height);
        const tagResult3 = tag.tag(4, FavoriteGIF$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== format.order) {
        tag.tag(5, FavoriteGIF$Type(outer1_1[7]).WireType.Varint).uint32(format.order);
        const tagResult4 = tag.tag(5, FavoriteGIF$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteGIF$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, format, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteGIF$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let closure_10 = tmp6;
let tmp8 = ((MessageType) => {
  class FavoriteStickers$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteStickers$Type);
      items = [];
      items[0] = { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_users.v1.FavoriteStickers"];
      items1[1] = items;
      return outer1_22(this, FavoriteStickers$Type, items1);
    }
  }
  callback3(FavoriteStickers$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { stickerIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteStickers$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteStickers$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteStickers$Type(outer1_1[7]);
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
          let tmp28 = FavoriteStickers$Type;
          let tmp29 = outer1_1;
          if (tmp9 === FavoriteStickers$Type(outer1_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let stickerIds = obj.stickerIds;
                let str5 = pos.fixed64();
                let arr = stickerIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let stickerIds1 = obj.stickerIds;
            let str4 = pos.fixed64();
            arr = stickerIds1.push(str4.toString());
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
                let tmp14 = FavoriteStickers$Type;
                let tmp15 = outer1_1;
                onRead = FavoriteStickers$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(stickerIds, tag, writeUnknownFields) {
      let length;
      if (stickerIds.stickerIds.length) {
        tag.tag(1, FavoriteStickers$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < stickerIds.stickerIds.length) {
          do {
            let fixed64Result = tag.fixed64(stickerIds.stickerIds[num3]);
            num3 = num3 + 1;
            length = stickerIds.stickerIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, FavoriteStickers$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteStickers$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, stickerIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteStickers$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_11 = tmp8;
let tmp10 = ((MessageType) => {
  class StickerFrecency$Type {
    constructor() {
      tmp = outer1_3(this, StickerFrecency$Type);
      obj = { no: 1, name: "stickers", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.StickerFrecency"];
      items1[1] = items;
      return outer1_22(this, StickerFrecency$Type, items1);
    }
  }
  callback3(StickerFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { stickers: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StickerFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StickerFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = StickerFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.stickers, pos, readUnknownField);
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
                let tmp12 = StickerFrecency$Type;
                let tmp13 = outer1_1;
                onRead = StickerFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(stickers, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(stickers.stickers);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = StickerFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, StickerFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, StickerFrecency$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, StickerFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(stickers.stickers[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StickerFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, stickers, tag);
      }
      return tag;
    }
  };
  return callback(StickerFrecency$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_12 = tmp10;
let tmp12 = ((MessageType) => {
  class FavoriteEmojis$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteEmojis$Type);
      items = [];
      items[0] = { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_users.v1.FavoriteEmojis"];
      items1[1] = items;
      return outer1_22(this, FavoriteEmojis$Type, items1);
    }
  }
  callback3(FavoriteEmojis$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojis: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteEmojis$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteEmojis$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteEmojis$Type(outer1_1[7]);
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
          let emojis = obj.emojis;
          let arr = emojis.push(pos.string());
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
                let tmp12 = FavoriteEmojis$Type;
                let tmp13 = outer1_1;
                onRead = FavoriteEmojis$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(emojis, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < emojis.emojis.length) {
        do {
          let tmp = FavoriteEmojis$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, FavoriteEmojis$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult.string(emojis.emojis[num]);
          num = num + 1;
          length = emojis.emojis.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteEmojis$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojis, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteEmojis$Type, items);
})(require("module_1284").MessageType);
tmp12 = new tmp12();
let closure_13 = tmp12;
let tmp14 = ((MessageType) => {
  class EmojiFrecency$Type {
    constructor() {
      tmp = outer1_3(this, EmojiFrecency$Type);
      obj = { no: 1, name: "emojis", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.EmojiFrecency"];
      items1[1] = items;
      return outer1_22(this, EmojiFrecency$Type, items1);
    }
  }
  callback3(EmojiFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojis: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, EmojiFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = EmojiFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = EmojiFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.emojis, pos, readUnknownField);
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
                let tmp12 = EmojiFrecency$Type;
                let tmp13 = outer1_1;
                onRead = EmojiFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(emojis, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(emojis.emojis);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = EmojiFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, EmojiFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, EmojiFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, EmojiFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(emojis.emojis[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = EmojiFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojis, tag);
      }
      return tag;
    }
  };
  return callback(EmojiFrecency$Type, items);
})(require("module_1284").MessageType);
tmp14 = new tmp14();
let closure_14 = tmp14;
let tmp16 = ((MessageType) => {
  class ApplicationCommandFrecency$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationCommandFrecency$Type);
      obj = { no: 1, name: "application_commands", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.ApplicationCommandFrecency"];
      items1[1] = items;
      return outer1_22(this, ApplicationCommandFrecency$Type, items1);
    }
  }
  callback3(ApplicationCommandFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applicationCommands: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationCommandFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationCommandFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationCommandFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.applicationCommands, pos, readUnknownField);
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
                let tmp12 = ApplicationCommandFrecency$Type;
                let tmp13 = outer1_1;
                onRead = ApplicationCommandFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(applicationCommands, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(applicationCommands.applicationCommands);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = ApplicationCommandFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, ApplicationCommandFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, ApplicationCommandFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, ApplicationCommandFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(applicationCommands.applicationCommands[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationCommandFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, applicationCommands, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationCommandFrecency$Type, items);
})(require("module_1284").MessageType);
tmp16 = new tmp16();
let closure_15 = tmp16;
let tmp18 = ((MessageType) => {
  class FrecencyItem$Type {
    constructor() {
      tmp = outer1_3(this, FrecencyItem$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "total_uses", kind: "scalar", T: 13 };
      items[1] = { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 };
      items[2] = { no: 3, name: "frecency", kind: "scalar", T: 5 };
      items[3] = { no: 4, name: "score", kind: "scalar", T: 5 };
      items1 = ["discord_protos.discord_users.v1.FrecencyItem"];
      items1[1] = items;
      return outer1_22(this, FrecencyItem$Type, items1);
    }
  }
  callback3(FrecencyItem$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { totalUses: 0, recentUses: [], frecency: 0, score: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FrecencyItem$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FrecencyItem$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FrecencyItem$Type(outer1_1[7]);
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
          obj.totalUses = pos.uint32();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = FrecencyItem$Type;
          let tmp29 = outer1_1;
          if (tmp9 === FrecencyItem$Type(outer1_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let recentUses = obj.recentUses;
                let str5 = pos.uint64();
                let arr = recentUses.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let recentUses1 = obj.recentUses;
            let str4 = pos.uint64();
            arr = recentUses1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (3 === tmp8) {
          obj.frecency = pos.int32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          obj.score = pos.int32();
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
                let tmp14 = FrecencyItem$Type;
                let tmp15 = outer1_1;
                onRead = FrecencyItem$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(totalUses, tag, writeUnknownFields) {
      let length;
      if (0 !== totalUses.totalUses) {
        tag.tag(1, FrecencyItem$Type(outer1_1[7]).WireType.Varint).uint32(totalUses.totalUses);
        const tagResult = tag.tag(1, FrecencyItem$Type(outer1_1[7]).WireType.Varint);
      }
      if (totalUses.recentUses.length) {
        tag.tag(2, FrecencyItem$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num5 = 0;
        if (0 < totalUses.recentUses.length) {
          do {
            let uint64Result = tag.uint64(totalUses.recentUses[num5]);
            num5 = num5 + 1;
            length = totalUses.recentUses.length;
          } while (num5 < length);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, FrecencyItem$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (0 !== totalUses.frecency) {
        tag.tag(3, FrecencyItem$Type(outer1_1[7]).WireType.Varint).int32(totalUses.frecency);
        const tagResult2 = tag.tag(3, FrecencyItem$Type(outer1_1[7]).WireType.Varint);
      }
      if (0 !== totalUses.score) {
        tag.tag(4, FrecencyItem$Type(outer1_1[7]).WireType.Varint).int32(totalUses.score);
        const tagResult3 = tag.tag(4, FrecencyItem$Type(outer1_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FrecencyItem$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, totalUses, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FrecencyItem$Type, items);
})(require("module_1284").MessageType);
tmp18 = new tmp18();
let closure_16 = tmp18;
let tmp20 = ((MessageType) => {
  class FavoriteSoundboardSounds$Type {
    constructor() {
      tmp = outer1_3(this, FavoriteSoundboardSounds$Type);
      items = [];
      items[0] = { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_users.v1.FavoriteSoundboardSounds"];
      items1[1] = items;
      return outer1_22(this, FavoriteSoundboardSounds$Type, items1);
    }
  }
  callback3(FavoriteSoundboardSounds$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { soundIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteSoundboardSounds$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteSoundboardSounds$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteSoundboardSounds$Type(outer1_1[7]);
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
          let tmp28 = FavoriteSoundboardSounds$Type;
          let tmp29 = outer1_1;
          if (tmp9 === FavoriteSoundboardSounds$Type(outer1_1[7]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let soundIds = obj.soundIds;
                let str5 = pos.fixed64();
                let arr = soundIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let soundIds1 = obj.soundIds;
            let str4 = pos.fixed64();
            arr = soundIds1.push(str4.toString());
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
                let tmp14 = FavoriteSoundboardSounds$Type;
                let tmp15 = outer1_1;
                onRead = FavoriteSoundboardSounds$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(soundIds, tag, writeUnknownFields) {
      let length;
      if (soundIds.soundIds.length) {
        tag.tag(1, FavoriteSoundboardSounds$Type(outer1_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < soundIds.soundIds.length) {
          do {
            let fixed64Result = tag.fixed64(soundIds.soundIds[num3]);
            num3 = num3 + 1;
            length = soundIds.soundIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, FavoriteSoundboardSounds$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteSoundboardSounds$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, soundIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteSoundboardSounds$Type, items);
})(require("module_1284").MessageType);
tmp20 = new tmp20();
let closure_17 = tmp20;
let tmp22 = ((MessageType) => {
  class HeardSoundFrecency$Type {
    constructor() {
      tmp = outer1_3(this, HeardSoundFrecency$Type);
      obj = { no: 1, name: "heard_sounds", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.HeardSoundFrecency"];
      items1[1] = items;
      return outer1_22(this, HeardSoundFrecency$Type, items1);
    }
  }
  callback3(HeardSoundFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { heardSounds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, HeardSoundFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = HeardSoundFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = HeardSoundFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.heardSounds, pos, readUnknownField);
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
                let tmp12 = HeardSoundFrecency$Type;
                let tmp13 = outer1_1;
                onRead = HeardSoundFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(heardSounds, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(heardSounds.heardSounds);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = HeardSoundFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, HeardSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, HeardSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, HeardSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(heardSounds.heardSounds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = HeardSoundFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, heardSounds, tag);
      }
      return tag;
    }
  };
  return callback(HeardSoundFrecency$Type, items);
})(require("module_1284").MessageType);
tmp22 = new tmp22();
let closure_18 = tmp22;
let tmp24 = ((MessageType) => {
  class PlayedSoundFrecency$Type {
    constructor() {
      tmp = outer1_3(this, PlayedSoundFrecency$Type);
      obj = { no: 1, name: "played_sounds", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.PlayedSoundFrecency"];
      items1[1] = items;
      return outer1_22(this, PlayedSoundFrecency$Type, items1);
    }
  }
  callback3(PlayedSoundFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { playedSounds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlayedSoundFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlayedSoundFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlayedSoundFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.playedSounds, pos, readUnknownField);
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
                let tmp12 = PlayedSoundFrecency$Type;
                let tmp13 = outer1_1;
                onRead = PlayedSoundFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(playedSounds, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(playedSounds.playedSounds);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = PlayedSoundFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, PlayedSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, PlayedSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, PlayedSoundFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(playedSounds.playedSounds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlayedSoundFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, playedSounds, tag);
      }
      return tag;
    }
  };
  return callback(PlayedSoundFrecency$Type, items);
})(require("module_1284").MessageType);
tmp24 = new tmp24();
let closure_19 = tmp24;
let tmp26 = ((MessageType) => {
  class ApplicationFrecency$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationFrecency$Type);
      obj = { no: 1, name: "applications", kind: "map", K: 9 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.ApplicationFrecency"];
      items1[1] = items;
      return outer1_22(this, ApplicationFrecency$Type, items1);
    }
  }
  callback3(ApplicationFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applications: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.applications, pos, readUnknownField);
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
                let tmp12 = ApplicationFrecency$Type;
                let tmp13 = outer1_1;
                onRead = ApplicationFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = stringResult;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str2] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(applications, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(applications.applications);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = ApplicationFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, ApplicationFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, ApplicationFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, ApplicationFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(applications.applications[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, applications, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationFrecency$Type, items);
})(require("module_1284").MessageType);
tmp26 = new tmp26();
let closure_20 = tmp26;
let tmp28 = ((MessageType) => {
  class GuildAndChannelFrecency$Type {
    constructor() {
      tmp = outer1_3(this, GuildAndChannelFrecency$Type);
      obj = { no: 1, name: "guild_and_channels", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_users.v1.GuildAndChannelFrecency"];
      items1[1] = items;
      return outer1_22(this, GuildAndChannelFrecency$Type, items1);
    }
  }
  callback3(GuildAndChannelFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildAndChannels: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildAndChannelFrecency$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildAndChannelFrecency$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildAndChannelFrecency$Type(outer1_1[7]);
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.guildAndChannels, pos, readUnknownField);
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
                let tmp12 = GuildAndChannelFrecency$Type;
                let tmp13 = outer1_1;
                onRead = GuildAndChannelFrecency$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
            let tmp14 = outer1_16;
            internalBinaryReadResult = outer1_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels";
        _Error = new _Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = outer1_16.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(guildAndChannels, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(guildAndChannels.guildAndChannels);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = GuildAndChannelFrecency$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, GuildAndChannelFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, GuildAndChannelFrecency$Type(outer1_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, GuildAndChannelFrecency$Type(outer1_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_16;
          let internalBinaryWriteResult = outer1_16.internalBinaryWrite(guildAndChannels.guildAndChannels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildAndChannelFrecency$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildAndChannels, tag);
      }
      return tag;
    }
  };
  return callback(GuildAndChannelFrecency$Type, items);
})(require("module_1284").MessageType);
tmp28 = new tmp28();
let closure_21 = tmp28;
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx");

export const GIFType = obj;
export const FrecencyUserSettings = tmp2;
export const FavoriteGIFs = tmp4;
export const FavoriteGIF = tmp6;
export const FavoriteStickers = tmp8;
export const StickerFrecency = tmp10;
export const FavoriteEmojis = tmp12;
export const EmojiFrecency = tmp14;
export const ApplicationCommandFrecency = tmp16;
export const FrecencyItem = tmp18;
export const FavoriteSoundboardSounds = tmp20;
export const HeardSoundFrecency = tmp22;
export const PlayedSoundFrecency = tmp24;
export const ApplicationFrecency = tmp26;
export const GuildAndChannelFrecency = tmp28;
