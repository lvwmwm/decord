// Module ID: 4798
// Function ID: 41714
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4468, 566, 686, 2]

// Module 4798 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DraftType } from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = {};
let closure_7 = {};
let tmp2 = ((Store) => {
  class StickerMessagePreviewStore {
    constructor() {
      self = this;
      tmp = StickerMessagePreviewStore(this, StickerMessagePreviewStore);
      obj = outer1_3(StickerMessagePreviewStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StickerMessagePreviewStore, Store);
  const items = [
    {
      key: "getStickerPreview",
      value(arg0, arg1) {
        return arg1 === outer1_5.FirstThreadMessage ? outer1_7 : outer1_6[arg0];
      }
    }
  ];
  return callback(StickerMessagePreviewStore, items);
})(require("initialize").Store);
tmp2.displayName = "StickerMessagePreviewStore";
tmp2 = new tmp2(require("dispatcher"), {
  ADD_STICKER_PREVIEW: function handleAddStickerPreview(sticker) {
    const items = [sticker.sticker];
    sticker.draftType === DraftType.FirstThreadMessage ? closure_7 : closure_6[sticker.channelId] = items;
  },
  CLEAR_STICKER_PREVIEW: function handleClearStickerPreview(arg0) {
    if (null != arg0.draftType === DraftType.FirstThreadMessage ? closure_7 : closure_6[arg0.channelId]) {
      delete tmp[tmp2];
    }
  },
  LOGOUT: function resetState() {
    let closure_6 = {};
    let closure_7 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default tmp2;
