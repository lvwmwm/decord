// Module ID: 12133
// Function ID: 12134
// Name: CheckpointCharacterImage
// Dependencies: [5, 17, 6496, 9721, 1378, 5990, 12134, 7802, 5594, 5860, 1112, 9723, 5662, 9718, 2]
// Exports: saveCheckpointCharacterImage, shareCheckpointCharacterImage

// Module 12133 (CheckpointCharacterImage)
import react_native from "react-native" /* 17 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 5990 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6496 */;
import react_nativeDefault from "react-native" /* 7802 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 9721 */;
import showSharePreparingModal from "showSharePreparingModal" /* 9723 */;
import react_nativeDefault2 from "react-native" /* 12134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let c1, c2, isCancelled, url;

function writeCharacterImage() {
  return obj(...arguments);
}
let obj = function _writeCharacterImage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj3 = checkpoint_CheckpointMessageComponentUtils;
            const fullSizeCharacterLayerUrls = obj3.getFullSizeCharacterLayerUrls(closure_0);
            c2 = 1;
            c1 = 1;
            const obj6 = { value: obj4.writeCharacterImage(fullSizeCharacterLayerUrls, checkpoint_CheckpointMessageComponentUtils.MAX_CHARACTER_LAYER_PIXEL_SIZE), done: false };
            obj4 = react_nativeDefault2;
            return obj6;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _saveCheckpointCharacterImage() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let intl;
    let intl2;
    let obj3;
    let obj9;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = undefined;
            c3 = 1;
            const tmp44 = PlatformUtils;
            if (tmp44) {
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj9.requestExternalStorageAuthorization(), done: false };
              obj9 = react_nativeDefault;
              return obj5;
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj6 = { title: intl.string(closure_130_0(closure_130_2[10]).t.cV3alD), body: intl2.string(closure_130_0(closure_130_2[10]).t.r4Zjzv), isDismissable: true };
            const show = closure_130_1(closure_130_2[9]).show;
            const tmp19 = closure_130_1(closure_130_2[9]);
            intl = closure_130_0(closure_130_2[10]).intl;
            intl2 = closure_130_0(closure_130_2[10]).intl;
            show(obj6);
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (value !== closure_130_4.AUTHORIZED) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Storage permission denied");
              throw error;
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_1 = value;
              c4 = 4;
              c5 = 1;
              const obj10 = { value: obj3.saveImage(closure_1), done: false };
              obj3 = closure_130_1(closure_130_2[6]);
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            obj = closure_130_0(closure_130_2[8]);
            obj.presentImageSaved();
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
        c4 = 3;
        c5 = 1;
        const obj12 = { value: closure_130_7(closure_0), done: false };
        return obj12;
      } catch (tmp35) {
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _shareCheckpointCharacterImage() {
  obj = _asyncToGenerator(async (url) => {
    let closure_2;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let intl;
      let intl2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              url = undefined;
              isCancelled = { isCancelled: false };
              const obj6 = {
                onCancel() {
                          closure_1.isCancelled = true;
                        }
              };
              const obj11 = showSharePreparingModal;
              tmp = obj11.showSharePreparingModal(obj6);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj7 = { value: writeCharacterImage(url), done: false };
              return obj7;
            }
          } else {
            let obj4;
            if (1 === c4) {
              c3 = 0;
              url = null;
              tmp();
              if (!isCancelled.isCancelled) {
                if (null != url) {
                  const obj3 = closure_130_0(closure_130_2[4]);
                  if (obj3.isAndroid()) {
                    obj4 = closure_130_0(closure_130_2[12]);
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: obj4.sleep(closure_130_5), done: false };
                    return obj8;
                  }
                } else {
                  obj4 = closure_130_1(closure_130_2[9]);
                  const show = obj4.show;
                  const obj9 = { title: intl.string(closure_130_0(closure_130_2[10]).t.iufib1), body: intl2.string(closure_130_0(closure_130_2[10]).t.fEptJP), isDismissable: true };
                  intl = closure_130_0(closure_130_2[10]).intl;
                  intl2 = closure_130_0(closure_130_2[10]).intl;
                  show(obj9);
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                return { value, done: true };
              } else {
                url = value;
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            }
            obj4 = closure_130_0(closure_130_2[13]);
            const obj12 = { url };
            obj4.showShareActionSheet(obj12, "checkpoint_character_image");
          }
        } catch (tmp26) {
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
let closure_5 = SharePreparingModalConstants.SHARE_SHEET_PRESENT_DELAY_MS;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  PlatformUtils = Platform.constants.Version <= 28;
}
const result = size.fileFinishedImporting("modules/checkpoint/native/CheckpointCharacterImage.tsx");

export function saveCheckpointCharacterImage() {
  return obj(...arguments);
}
export function shareCheckpointCharacterImage() {
  return obj(...arguments);
}
