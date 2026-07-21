// Module ID: 1317
// Function ID: 15384
// Name: _callSuper
// Dependencies: []

// Module 1317 (_callSuper)
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
const obj = { NONE: 0, [0]: "NONE", IMAGE: 1, [1]: "IMAGE", VIDEO: 2, [2]: "VIDEO" };
let tmp2 = (MessageType) => {
  class FrecencyUserSettings$Type {
    constructor() {
      tmp = closure_3(this, FrecencyUserSettings$Type);
      obj = {
        T() {
              return callback(closure_1[6]).Versions;
            }
      };
      items = [, , , , , , , , , , , , ];
      items[0] = obj;
      items[1] = {
        T() {
              return closure_9;
            }
      };
      obj = { 9223372036854775807: "_persisted", 9223372036854775807: "premiumFeatures", 0: "include_google_sku_ids" };
      obj.T = function T() {
        return closure_11;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return closure_12;
            }
      };
      obj1 = { 9223372036854775807: 1137, 9223372036854775807: 1369465088, 0: 225544604 };
      obj1.T = function T() {
        return closure_13;
      };
      items[4] = obj1;
      items[5] = {
        T() {
              return closure_14;
            }
      };
      obj2 = { 9223372036854775807: 13, 9223372036854775807: "hash_key", 0: "scalar" };
      obj2.T = function T() {
        return closure_15;
      };
      items[6] = obj2;
      items[7] = {
        T() {
              return closure_17;
            }
      };
      obj3 = { 9223372036854775807: "absolute", 9223372036854775807: "100%", 0: "100%" };
      obj3.T = function T() {
        return closure_20;
      };
      items[8] = obj3;
      items[9] = {
        T() {
              return closure_18;
            }
      };
      obj4 = { 9223372036854775807: 1627390241, 9223372036854775807: 827146743, 0: 860946433 };
      obj4.T = function T() {
        return closure_19;
      };
      items[10] = obj4;
      obj5 = { 9223372036854775807: "no-hide-descendants", 9223372036854775807: true, 0: "/assets/images/group_dms" };
      obj5.T = function T() {
        return closure_21;
      };
      items[11] = obj5;
      obj6 = { 9223372036854775807: "heading-xxl/bold", 9223372036854775807: 2, 0: "gore_content_friend_dm" };
      obj6.T = function T() {
        return closure_14;
      };
      items[12] = obj6;
      items1 = [];
      items1[1] = items;
      return closure_22(this, FrecencyUserSettings$Type, items1);
    }
  }
  const arg1 = FrecencyUserSettings$Type;
  callback3(FrecencyUserSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FrecencyUserSettings$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FrecencyUserSettings$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FrecencyUserSettings$Type(closure_1[7]);
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
        obj.emojiReactionFrecency = closure_14.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.emojiReactionFrecency);
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
        const Versions = FrecencyUserSettings$Type(closure_1[6]).Versions;
        const tagResult = tag.tag(1, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = Versions.internalBinaryWrite(versions.versions, tag.tag(1, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Versions.internalBinaryWrite(versions.versions, tag.tag(1, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteGifs) {
        const tagResult1 = tag.tag(2, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = closure_9.internalBinaryWrite(versions.favoriteGifs, tag.tag(2, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_9.internalBinaryWrite(versions.favoriteGifs, tag.tag(2, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteStickers) {
        const tagResult2 = tag.tag(3, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined2 = closure_11.internalBinaryWrite(versions.favoriteStickers, tag.tag(3, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = closure_11.internalBinaryWrite(versions.favoriteStickers, tag.tag(3, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.stickerFrecency) {
        const tagResult3 = tag.tag(4, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined3 = closure_12.internalBinaryWrite(versions.stickerFrecency, tag.tag(4, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_12.internalBinaryWrite(versions.stickerFrecency, tag.tag(4, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteEmojis) {
        const tagResult4 = tag.tag(5, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined4 = closure_13.internalBinaryWrite(versions.favoriteEmojis, tag.tag(5, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_13.internalBinaryWrite(versions.favoriteEmojis, tag.tag(5, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.emojiFrecency) {
        const tagResult5 = tag.tag(6, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined5 = closure_14.internalBinaryWrite(versions.emojiFrecency, tag.tag(6, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = closure_14.internalBinaryWrite(versions.emojiFrecency, tag.tag(6, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applicationCommandFrecency) {
        const tagResult6 = tag.tag(7, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined6 = closure_15.internalBinaryWrite(versions.applicationCommandFrecency, tag.tag(7, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_15.internalBinaryWrite(versions.applicationCommandFrecency, tag.tag(7, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.favoriteSoundboardSounds) {
        const tagResult7 = tag.tag(8, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined7 = closure_17.internalBinaryWrite(versions.favoriteSoundboardSounds, tag.tag(8, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = closure_17.internalBinaryWrite(versions.favoriteSoundboardSounds, tag.tag(8, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.applicationFrecency) {
        const tagResult8 = tag.tag(9, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined8 = closure_20.internalBinaryWrite(versions.applicationFrecency, tag.tag(9, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = closure_20.internalBinaryWrite(versions.applicationFrecency, tag.tag(9, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.heardSoundFrecency) {
        const tagResult9 = tag.tag(10, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined9 = closure_18.internalBinaryWrite(versions.heardSoundFrecency, tag.tag(10, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = closure_18.internalBinaryWrite(versions.heardSoundFrecency, tag.tag(10, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.playedSoundFrecency) {
        const tagResult10 = tag.tag(11, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined10 = closure_19.internalBinaryWrite(versions.playedSoundFrecency, tag.tag(11, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = closure_19.internalBinaryWrite(versions.playedSoundFrecency, tag.tag(11, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.guildAndChannelFrecency) {
        const tagResult11 = tag.tag(12, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined11 = closure_21.internalBinaryWrite(versions.guildAndChannelFrecency, tag.tag(12, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = closure_21.internalBinaryWrite(versions.guildAndChannelFrecency, tag.tag(12, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (versions.emojiReactionFrecency) {
        const tagResult12 = tag.tag(13, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited);
        const joined12 = closure_14.internalBinaryWrite(versions.emojiReactionFrecency, tag.tag(13, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = closure_14.internalBinaryWrite(versions.emojiReactionFrecency, tag.tag(13, FrecencyUserSettings$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FrecencyUserSettings$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, versions, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FrecencyUserSettings$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class FavoriteGIFs$Type {
    constructor() {
      tmp = closure_3(this, FavoriteGIFs$Type);
      obj = { 9223372036854775807: true, 9223372036854775807: true, 0: true, 0: true };
      obj = {
        kind: "message",
        T() {
              return closure_10;
            }
      };
      obj.V = obj;
      items = [, ];
      items[0] = obj;
      items[1] = { 1347510942: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001498995355582405, 1678385745: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005562684646915585, 1364379111: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004450147718050534, 140698458: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000729112203313717 };
      items1 = [32];
      items1[1] = items;
      return closure_22(this, FavoriteGIFs$Type, items1);
    }
  }
  const arg1 = FavoriteGIFs$Type;
  callback3(FavoriteGIFs$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { gifs: {}, hideTooltip: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteGIFs$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteGIFs$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteGIFs$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = FavoriteGIFs$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_10;
            internalBinaryReadResult = closure_10.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_10.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_10;
          let internalBinaryWriteResult = closure_10.internalBinaryWrite(gifs.gifs[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if (false !== gifs.hideTooltip) {
        tag.tag(2, FavoriteGIFs$Type(closure_1[7]).WireType.Varint).bool(gifs.hideTooltip);
        const tagResult3 = tag.tag(2, FavoriteGIFs$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteGIFs$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, gifs, tag);
      }
      return tag;
    }
  };
  return callback(FavoriteGIFs$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class FavoriteGIF$Type {
    constructor() {
      tmp = closure_3(this, FavoriteGIF$Type);
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        const items = [false, closure_8];
        return items;
      };
      items = [, , , , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {};
      items[3] = { 1347510942: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032398192295414106, 1678385745: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001491668148695694, 1364379111: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000321722687194318, 140698458: 469709187263222850000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      items[4] = { 1347510942: 86400000, 1678385745: "RED_430", 1364379111: 0.2, 140698458: "gradient.bottom" };
      items1 = [false];
      items1[1] = items;
      return closure_22(this, FavoriteGIF$Type, items1);
    }
  }
  const arg1 = FavoriteGIF$Type;
  callback3(FavoriteGIF$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteGIF$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteGIF$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteGIF$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = FavoriteGIF$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(format, tag, writeUnknownFields) {
      if (0 !== format.format) {
        tag.tag(1, FavoriteGIF$Type(closure_1[7]).WireType.Varint).int32(format.format);
        const tagResult = tag.tag(1, FavoriteGIF$Type(closure_1[7]).WireType.Varint);
      }
      if ("" !== format.src) {
        tag.tag(2, FavoriteGIF$Type(closure_1[7]).WireType.LengthDelimited).string(format.src);
        const tagResult1 = tag.tag(2, FavoriteGIF$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (0 !== format.width) {
        tag.tag(3, FavoriteGIF$Type(closure_1[7]).WireType.Varint).uint32(format.width);
        const tagResult2 = tag.tag(3, FavoriteGIF$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== format.height) {
        tag.tag(4, FavoriteGIF$Type(closure_1[7]).WireType.Varint).uint32(format.height);
        const tagResult3 = tag.tag(4, FavoriteGIF$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== format.order) {
        tag.tag(5, FavoriteGIF$Type(closure_1[7]).WireType.Varint).uint32(format.order);
        const tagResult4 = tag.tag(5, FavoriteGIF$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteGIF$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, format, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteGIF$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class FavoriteStickers$Type {
    constructor() {
      tmp = closure_3(this, FavoriteStickers$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_22(this, FavoriteStickers$Type, items1);
    }
  }
  const arg1 = FavoriteStickers$Type;
  callback3(FavoriteStickers$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { stickerIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteStickers$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteStickers$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteStickers$Type(closure_1[7]);
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
          let tmp28 = FavoriteStickers$Type;
          let tmp29 = closure_1;
          if (tmp9 === FavoriteStickers$Type(closure_1[7]).WireType.LengthDelimited) {
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
                let tmp15 = closure_1;
                onRead = FavoriteStickers$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(stickerIds, tag, writeUnknownFields) {
      let length;
      if (stickerIds.stickerIds.length) {
        tag.tag(1, FavoriteStickers$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < stickerIds.stickerIds.length) {
          do {
            let fixed64Result = tag.fixed64(stickerIds.stickerIds[num3]);
            num3 = num3 + 1;
            length = stickerIds.stickerIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, FavoriteStickers$Type(closure_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteStickers$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, stickerIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteStickers$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class StickerFrecency$Type {
    constructor() {
      tmp = closure_3(this, StickerFrecency$Type);
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      items = [];
      items[0] = { V: obj };
      items1 = [];
      items1[1] = items;
      return closure_22(this, StickerFrecency$Type, items1);
    }
  }
  const arg1 = StickerFrecency$Type;
  callback3(StickerFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { stickers: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StickerFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StickerFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = StickerFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = StickerFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(stickers.stickers[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StickerFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, stickers, tag);
      }
      return tag;
    }
  };
  return callback(StickerFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class FavoriteEmojis$Type {
    constructor() {
      tmp = closure_3(this, FavoriteEmojis$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_22(this, FavoriteEmojis$Type, items1);
    }
  }
  const arg1 = FavoriteEmojis$Type;
  callback3(FavoriteEmojis$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojis: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteEmojis$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteEmojis$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteEmojis$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = FavoriteEmojis$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(emojis, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < emojis.emojis.length) {
        do {
          let tmp = closure_0;
          let tmp2 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult.string(emojis.emojis[num]);
          num = num + 1;
          length = emojis.emojis.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteEmojis$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojis, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteEmojis$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp12 = new tmp12();
let tmp14 = (MessageType) => {
  class EmojiFrecency$Type {
    constructor() {
      tmp = closure_3(this, EmojiFrecency$Type);
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      items = [];
      items[0] = { V: obj };
      items1 = [];
      items1[1] = items;
      return closure_22(this, EmojiFrecency$Type, items1);
    }
  }
  const arg1 = EmojiFrecency$Type;
  callback3(EmojiFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { emojis: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, EmojiFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = EmojiFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = EmojiFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = EmojiFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(emojis.emojis[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = EmojiFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, emojis, tag);
      }
      return tag;
    }
  };
  return callback(EmojiFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp14 = new tmp14();
let tmp16 = (MessageType) => {
  class ApplicationCommandFrecency$Type {
    constructor() {
      tmp = closure_3(this, ApplicationCommandFrecency$Type);
      obj = { 9223372036854775807: "<string:3309371394>", 9223372036854775807: "<string:822084777>", 0: "<string:2492765333>", 0: "<string:1070896276>" };
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_22(this, ApplicationCommandFrecency$Type, items1);
    }
  }
  const arg1 = ApplicationCommandFrecency$Type;
  callback3(ApplicationCommandFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applicationCommands: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationCommandFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationCommandFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationCommandFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = ApplicationCommandFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(applicationCommands.applicationCommands[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationCommandFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, applicationCommands, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationCommandFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp16 = new tmp16();
let tmp18 = (MessageType) => {
  class FrecencyItem$Type {
    constructor() {
      tmp = closure_3(this, FrecencyItem$Type);
      items = [, , , ];
      items[0] = { 1347510942: true, 1678385745: true, 1364379111: true, 140698458: true };
      items[1] = {};
      items[2] = {};
      items[3] = { 1347510942: false, 1678385745: false, 1364379111: false, 140698458: false };
      items1 = [];
      items1[1] = items;
      return closure_22(this, FrecencyItem$Type, items1);
    }
  }
  const arg1 = FrecencyItem$Type;
  callback3(FrecencyItem$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { position: 180, bottom: null, justifyContent: 1, EMPTY_MEDIA_RESULTS: 0.5, recentUses: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FrecencyItem$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FrecencyItem$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FrecencyItem$Type(closure_1[7]);
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
          obj.totalUses = pos.uint32();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = FrecencyItem$Type;
          let tmp29 = closure_1;
          if (tmp9 === FrecencyItem$Type(closure_1[7]).WireType.LengthDelimited) {
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
                let tmp15 = closure_1;
                onRead = FrecencyItem$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(totalUses, tag, writeUnknownFields) {
      let length;
      if (0 !== totalUses.totalUses) {
        tag.tag(1, FrecencyItem$Type(closure_1[7]).WireType.Varint).uint32(totalUses.totalUses);
        const tagResult = tag.tag(1, FrecencyItem$Type(closure_1[7]).WireType.Varint);
      }
      if (totalUses.recentUses.length) {
        tag.tag(2, FrecencyItem$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num5 = 0;
        if (0 < totalUses.recentUses.length) {
          do {
            let uint64Result = tag.uint64(totalUses.recentUses[num5]);
            num5 = num5 + 1;
            length = totalUses.recentUses.length;
          } while (num5 < length);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, FrecencyItem$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (0 !== totalUses.frecency) {
        tag.tag(3, FrecencyItem$Type(closure_1[7]).WireType.Varint).int32(totalUses.frecency);
        const tagResult2 = tag.tag(3, FrecencyItem$Type(closure_1[7]).WireType.Varint);
      }
      if (0 !== totalUses.score) {
        tag.tag(4, FrecencyItem$Type(closure_1[7]).WireType.Varint).int32(totalUses.score);
        const tagResult3 = tag.tag(4, FrecencyItem$Type(closure_1[7]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FrecencyItem$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, totalUses, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FrecencyItem$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp18 = new tmp18();
let tmp20 = (MessageType) => {
  class FavoriteSoundboardSounds$Type {
    constructor() {
      tmp = closure_3(this, FavoriteSoundboardSounds$Type);
      items = [];
      items[0] = {};
      items1 = ["<string:1655635970>"];
      items1[1] = items;
      return closure_22(this, FavoriteSoundboardSounds$Type, items1);
    }
  }
  const arg1 = FavoriteSoundboardSounds$Type;
  callback3(FavoriteSoundboardSounds$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { soundIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FavoriteSoundboardSounds$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FavoriteSoundboardSounds$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = FavoriteSoundboardSounds$Type(closure_1[7]);
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
          let tmp28 = FavoriteSoundboardSounds$Type;
          let tmp29 = closure_1;
          if (tmp9 === FavoriteSoundboardSounds$Type(closure_1[7]).WireType.LengthDelimited) {
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
                let tmp15 = closure_1;
                onRead = FavoriteSoundboardSounds$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(soundIds, tag, writeUnknownFields) {
      let length;
      if (soundIds.soundIds.length) {
        tag.tag(1, FavoriteSoundboardSounds$Type(closure_1[7]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < soundIds.soundIds.length) {
          do {
            let fixed64Result = tag.fixed64(soundIds.soundIds[num3]);
            num3 = num3 + 1;
            length = soundIds.soundIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, FavoriteSoundboardSounds$Type(closure_1[7]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FavoriteSoundboardSounds$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, soundIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FavoriteSoundboardSounds$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp20 = new tmp20();
let tmp22 = (MessageType) => {
  class HeardSoundFrecency$Type {
    constructor() {
      tmp = closure_3(this, HeardSoundFrecency$Type);
      obj = { 9223372036854775807: 0.1, 9223372036854775807: "BLACK_500", 0: 0.3, 0: "PLUM_11" };
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_22(this, HeardSoundFrecency$Type, items1);
    }
  }
  const arg1 = HeardSoundFrecency$Type;
  callback3(HeardSoundFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { heardSounds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, HeardSoundFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = HeardSoundFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = HeardSoundFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = HeardSoundFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(heardSounds.heardSounds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = HeardSoundFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, heardSounds, tag);
      }
      return tag;
    }
  };
  return callback(HeardSoundFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp22 = new tmp22();
let tmp24 = (MessageType) => {
  class PlayedSoundFrecency$Type {
    constructor() {
      tmp = closure_3(this, PlayedSoundFrecency$Type);
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      items = [];
      items[0] = { V: obj };
      items1 = [];
      items1[1] = items;
      return closure_22(this, PlayedSoundFrecency$Type, items1);
    }
  }
  const arg1 = PlayedSoundFrecency$Type;
  callback3(PlayedSoundFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { playedSounds: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlayedSoundFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlayedSoundFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlayedSoundFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = PlayedSoundFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(playedSounds.playedSounds[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlayedSoundFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, playedSounds, tag);
      }
      return tag;
    }
  };
  return callback(PlayedSoundFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp24 = new tmp24();
let tmp26 = (MessageType) => {
  class ApplicationFrecency$Type {
    constructor() {
      tmp = closure_3(this, ApplicationFrecency$Type);
      obj = { 9223372036854775807: "<string:289362018>", 9223372036854775807: "<string:38369345>", 0: "<string:1547895040>", 0: "<string:1526727256>" };
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["Array"];
      items1[1] = items;
      return closure_22(this, ApplicationFrecency$Type, items1);
    }
  }
  const arg1 = ApplicationFrecency$Type;
  callback3(ApplicationFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applications: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = ApplicationFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let stringResult = pos.string();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(applications.applications[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, applications, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp26 = new tmp26();
let tmp28 = (MessageType) => {
  class GuildAndChannelFrecency$Type {
    constructor() {
      tmp = closure_3(this, GuildAndChannelFrecency$Type);
      obj = { 9223372036854775807: "channelId", 9223372036854775807: "channelId", 0: "channelId", 0: "channelId" };
      obj = {
        kind: "message",
        T() {
              return closure_16;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["r"];
      items1[1] = items;
      return closure_22(this, GuildAndChannelFrecency$Type, items1);
    }
  }
  const arg1 = GuildAndChannelFrecency$Type;
  callback3(GuildAndChannelFrecency$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildAndChannels: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildAndChannelFrecency$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildAndChannelFrecency$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildAndChannelFrecency$Type(closure_1[7]);
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
                let tmp13 = closure_1;
                onRead = GuildAndChannelFrecency$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
            let tmp14 = closure_16;
            internalBinaryReadResult = closure_16.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
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
        obj = closure_16.create();
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[7]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[7]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_16;
          let internalBinaryWriteResult = closure_16.internalBinaryWrite(guildAndChannels.guildAndChannels[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildAndChannelFrecency$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildAndChannels, tag);
      }
      return tag;
    }
  };
  return callback(GuildAndChannelFrecency$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp28 = new tmp28();
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx");

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
