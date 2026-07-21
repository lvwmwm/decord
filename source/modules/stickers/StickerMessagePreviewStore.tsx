// Module ID: 4795
// Function ID: 41687
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4795 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_6 = {};
let closure_7 = {};
let tmp2 = (Store) => {
  class StickerMessagePreviewStore {
    constructor() {
      self = this;
      tmp = StickerMessagePreviewStore(this, StickerMessagePreviewStore);
      obj = closure_3(StickerMessagePreviewStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = StickerMessagePreviewStore;
  callback2(StickerMessagePreviewStore, Store);
  const items = [
    {
      key: "getStickerPreview",
      value(arg0, arg1) {
        return arg1 === FirstThreadMessage.FirstThreadMessage ? closure_7 : closure_6[arg0];
      }
    }
  ];
  return callback(StickerMessagePreviewStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "StickerMessagePreviewStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  ADD_STICKER_PREVIEW: function handleAddStickerPreview(sticker) {
    const items = [sticker.sticker];
    sticker.draftType === DraftType.FirstThreadMessage ? closure_7 : closure_6[sticker.channelId] = items;
  },
  CLEAR_STICKER_PREVIEW: function handleClearStickerPreview(arg0) {
    if (null != arg0.draftType === DraftType.FirstThreadMessage ? closure_7 : closure_6[arg0.channelId]) {
      delete r0[r1];
    }
  },
  LOGOUT: function resetState() {
    let closure_6 = {};
    let closure_7 = {};
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default tmp2;
