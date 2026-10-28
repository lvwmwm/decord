// Module ID: 12239
// Function ID: 12240
// Name: openConjureNativeImages
// Dependencies: [5, 17, 12236, 8788, 2]
// Exports: openConjureNativeImages

// Module 12239 (openConjureNativeImages)
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size_mod from "module_2" /* 2 */;

let closure_3, mediaIndex, uri;

function measure(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    closure_0 = arg0;
    size = Image.getSize(closure_0, (width, height) => {
      if (width > 0) {
        let tmp3;
        if (height > 0) {
          size = { width, height };
          tmp3 = size;
        }
        return tmp(tmp3);
      }
      tmp3 = closure_2_4;
    }, () => closure_0(closure_2_4));
  });
  return promise;
}
let obj = function _openConjureNativeImages() {
  obj = _asyncToGenerator(async (arg0, arg1, initialSources) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          const tmp4 = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              closure_1 = initialSources;
              initialSources = undefined;
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj4 = {
                value: Promise.all(closure_1.map((() => {
                          closure_0 = closure_1_2((arg0, description) => {
                            closure_0 = arg0;
                            c5 = 0;
                            c6 = 0;
                            const iter = (function*(arg0, value) {
                              let c0;
                              let c1;
                              let obj6;
                              if (c6 === 2) {
                                c6 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  return { value, done: true };
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                try {
                                  c6 = 2;
                                  if (0 === c5) {
                                    if (arg0 === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c6 = 3;
                                      return { value, done: true };
                                    } else {
                                      closure_4 = tmp4;
                                      c0 = undefined;
                                      description = undefined;
                                      ({ id: c0, alt: c1 } = closure_0);
                                      mediaIndex = closure_1;
                                      uri = undefined;
                                      c5 = 1;
                                      c6 = 1;
                                      return { value: "Reflect", done: true };
                                    }
                                  } else if (1 === c5) {
                                    if (arg0 === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c6 = 3;
                                      return { value, done: true };
                                    } else {
                                      c5 = 2;
                                      c6 = 1;
                                      const obj5 = { value: obj6.getAttachmentUrl(closure_0, c0), done: false };
                                      obj6 = closure_0(closure_2_1[2]);
                                      return obj5;
                                    }
                                  } else {
                                    let obj8;
                                    if (2 === c5) {
                                      if (arg0 === 1) {
                                        c6 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c6 = 3;
                                        return { value, done: true };
                                      } else {
                                        uri = value;
                                        obj8 = { uri, mediaIndex };
                                        c5 = 3;
                                        c6 = 1;
                                        const obj9 = { value: closure_2_5(uri), done: false };
                                        return obj9;
                                      }
                                    } else if (arg0 === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c6 = 3;
                                      return { value, done: true };
                                    } else {
                                      const merged = Object.assign(value);
                                      obj8.accessoryType = "embed";
                                      obj8.description = description;
                                      obj8.disableDownload = true;
                                      c6 = 3;
                                      return { value: obj8, done: true };
                                    }
                                  }
                                } catch (tmp26) {
                                  c6 = 3;
                                  throw tmp26;
                                }
                              }
                            })();
                            iter.next();
                            return iter;
                          });
                          return function() {
                            return closure_0(...arguments);
                          };
                        })())),
                done: false
              };
              return obj4;
            }
          } else if (1 === tmp4) {
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            initialSources = value;
            c5 = 0;
            obj = { initialSources, initialIndex: Math.max(0, closure_1), analyticsSource: "ConjureChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
            const _Math = Math;
            const openMediaModal = closure_132_0(closure_132_1[3]).openMediaModal;
            closure_132_0(closure_132_1[3]);
            openMediaModal(obj);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          if (0 === c5) {
            c7 = 3;
            throw tmp16;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Image = react_native.Image;
let closure_4 = { width: 1280, height: 800 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/openConjureNativeImages.tsx");

export const openConjureNativeImages = function openConjureNativeImages() {
  return obj(...arguments);
};
