// Module ID: 9750
// Function ID: 9751
// Name: GIFPickerItemActionSheet
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 9735, 9739, 1497, 5056, 4809, 1126, 9751, 6885, 4808, 5379, 6156, 5958, 6839, 2]

// Module 9750 (GIFPickerItemActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 9735 */;
import GifIcon from "GifIcon" /* 9751 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, onPress;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: obj2, gifContainer: { flexDirection: "column", alignItems: "center" }, gifImage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GIFPickerItemActionSheet(item) {
  let closure_2;
  let height;
  let items1;
  let tmp18;
  let tmp21;
  let tmp5;
  let width;
  let tmp = item;
  const tmp2 = dependencyMap;
  let obj = item(576);
  const cResult = obj.c(37);
  item = item.item;
  const tmp4 = closure_7();
  if (cResult[0] !== item.url) {
    const tmpResult = tmp(9735);
    const gifUrlKeyResult = tmpResult.gifUrlKey(item.url);
    cResult[0] = item.url;
    cResult[1] = gifUrlKeyResult;
    tmp5 = gifUrlKeyResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult2 = tmp(9739);
  const isFavoriteGIF = tmpResult2.useIsFavoriteGIF(tmp5);
  ({ width, height } = isFavoriteGIF(1497)());
  const tmp8 = isFavoriteGIF(1497)();
  const bound = Math.min((width - 2 * isFavoriteGIF(587).space.PX_16) / item.width, 0.5 * height / item.height);
  const result = item.width * bound;
  const result1 = item.height * bound;
  if (cResult[2] === result) {
    let tmp12;
    let tmp13;
    if (cResult[3] === result1) {
      tmp12 = cResult[4];
    }
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w() {
        const obj = isFavoriteGIF(closure_2[10]);
        obj.hideActionSheet();
      };
      cResult[5] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[5];
    }
    dependencyMap = tmp13;
    if (cResult[6] === isFavoriteGIF) {
      let tmp14;
      if (cResult[7] === item) {
        tmp14 = cResult[8];
      }
      onPress = tmp14;
      if (cResult[9] !== item.url) {
        class R {
          constructor() {
            closure_2();
            const obj = ClipboardUtils;
            obj.copy(item.url, ToastUtils.presentLinkCopied);
          }
        }
        cResult[9] = item.url;
        class P {
          constructor() {
            let stringResult;
            let str = "primary";
            const Button = components_Button_Button.Button;
            const tmp = hasOwnProperty;
            if (isFavoriteGIF) {
              str = "destructive";
            }
            const obj = { variant: str, onPress, text: stringResult, grow: true };
            const intl = tmp2(1126).intl;
            const string = intl.string;
            const t = tmp2(1126).t;
            if (isFavoriteGIF) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            return tmp(Button, obj);
          }
        }
      } else {
        class R {
          constructor() {
            closure_2();
            const obj = ClipboardUtils;
            obj.copy(item.url, ToastUtils.presentLinkCopied);
          }
        }
      }
      if (cResult[11] === tmp14) {
        class R {
          constructor() {
            closure_2();
            const obj = ClipboardUtils;
            obj.copy(item.url, ToastUtils.presentLinkCopied);
          }
        }
        if (cResult[14] === tmp12) {
          class R {
            constructor() {
              closure_2();
              const obj = ClipboardUtils;
              obj.copy(item.url, ToastUtils.presentLinkCopied);
            }
          }
          if (cResult[17] !== item.src) {
            class R {
              constructor() {
                closure_2();
                const obj = ClipboardUtils;
                obj.copy(item.url, ToastUtils.presentLinkCopied);
              }
            }
            tmp20[0] = item.src;
            cResult[17] = item.src;
            class P {
              constructor() {
                let stringResult;
                let str = "primary";
                const Button = components_Button_Button.Button;
                const tmp = hasOwnProperty;
                if (isFavoriteGIF) {
                  str = "destructive";
                }
                const obj = { variant: str, onPress, text: stringResult, grow: true };
                const intl = tmp2(1126).intl;
                const string = intl.string;
                const t = tmp2(1126).t;
                if (isFavoriteGIF) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                return tmp(Button, obj);
              }
            }
            cResult[18] = tmp20;
          } else {
            class R {
              constructor() {
                closure_2();
                const obj = ClipboardUtils;
                obj.copy(item.url, ToastUtils.presentLinkCopied);
              }
            }
          }
          if (cResult[19] === tmp18) {
            class R {
              constructor() {
                closure_2();
                const obj = ClipboardUtils;
                obj.copy(item.url, ToastUtils.presentLinkCopied);
              }
            }
            if (cResult[22] !== tmp16) {
              class R {
                constructor() {
                  closure_2();
                  const obj = ClipboardUtils;
                  obj.copy(item.url, ToastUtils.presentLinkCopied);
                }
              }
              cResult[22] = tmp16;
              class P {
                constructor() {
                  let stringResult;
                  let str = "primary";
                  const Button = components_Button_Button.Button;
                  const tmp = hasOwnProperty;
                  if (isFavoriteGIF) {
                    str = "destructive";
                  }
                  const obj = { variant: str, onPress, text: stringResult, grow: true };
                  const intl = tmp2(1126).intl;
                  const string = intl.string;
                  const t = tmp2(1126).t;
                  if (isFavoriteGIF) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  return tmp(Button, obj);
                }
              }
            } else {
              class R {
                constructor() {
                  closure_2();
                  const obj = ClipboardUtils;
                  obj.copy(item.url, ToastUtils.presentLinkCopied);
                }
              }
            }
            const _Symbol2 = Symbol;
            class P {
              constructor() {
                let stringResult;
                let str = "primary";
                const Button = components_Button_Button.Button;
                const tmp = hasOwnProperty;
                if (isFavoriteGIF) {
                  str = "destructive";
                }
                const obj = { variant: str, onPress, text: stringResult, grow: true };
                const intl = tmp2(1126).intl;
                const string = intl.string;
                const t = tmp2(1126).t;
                if (isFavoriteGIF) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                return tmp(Button, obj);
              }
            }
            if (cResult[25] !== tmp15) {
              class R {
                constructor() {
                  closure_2();
                  const obj = ClipboardUtils;
                  obj.copy(item.url, ToastUtils.presentLinkCopied);
                }
              }
              let obj2 = { variant: "secondary", onPress: tmp15, text: tmp28, grow: true };
              class P {
                constructor() {
                  let stringResult;
                  let str = "primary";
                  const Button = components_Button_Button.Button;
                  const tmp = hasOwnProperty;
                  if (isFavoriteGIF) {
                    str = "destructive";
                  }
                  const obj = { variant: str, onPress, text: stringResult, grow: true };
                  const intl = tmp2(1126).intl;
                  const string = intl.string;
                  const t = tmp2(1126).t;
                  if (isFavoriteGIF) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  return tmp(Button, obj);
                }
              }
              cResult[25] = tmp15;
              class C {
                constructor() {
                  let intl;
                  let intl2;
                  closure_2();
                  const obj = GIFPickerActionCreators;
                  if (isFavoriteGIF) {
                    obj.removeFavoriteGIF(item.url);
                    const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
                    const open2 = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl2 = intl3.intl;
                    open2("REMOVED_FROM_FAVORITES", obj2);
                  } else {
                    obj.addFavoriteGIF(item);
                    const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open("ADDED_TO_FAVORITES", obj3);
                  }
                }
              }
              cResult[26] = tmp30;
            } else {
              class R {
                constructor() {
                  closure_2();
                  const obj = ClipboardUtils;
                  obj.copy(item.url, ToastUtils.presentLinkCopied);
                }
              }
            }
            if (cResult[27] === tmp25) {
              class R {
                constructor() {
                  closure_2();
                  const obj = ClipboardUtils;
                  obj.copy(item.url, ToastUtils.presentLinkCopied);
                }
              }
              if (cResult[30] === tmp4.gifContainer) {
                class R {
                  constructor() {
                    closure_2();
                    const obj = ClipboardUtils;
                    obj.copy(item.url, ToastUtils.presentLinkCopied);
                  }
                }
              }
              class P {
                constructor() {
                  let stringResult;
                  let str = "primary";
                  const Button = components_Button_Button.Button;
                  const tmp = hasOwnProperty;
                  if (isFavoriteGIF) {
                    str = "destructive";
                  }
                  const obj = { variant: str, onPress, text: stringResult, grow: true };
                  const intl = tmp2(1126).intl;
                  const string = intl.string;
                  const t = tmp2(1126).t;
                  if (isFavoriteGIF) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  return tmp(Button, obj);
                }
              }
              tmp36[0] = tmp17;
              const items = [, ];
              class C {
                constructor() {
                  let intl;
                  let intl2;
                  closure_2();
                  const obj = GIFPickerActionCreators;
                  if (isFavoriteGIF) {
                    obj.removeFavoriteGIF(item.url);
                    const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
                    const open2 = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl2 = intl3.intl;
                    open2("REMOVED_FROM_FAVORITES", obj2);
                  } else {
                    obj.addFavoriteGIF(item);
                    const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open("ADDED_TO_FAVORITES", obj3);
                  }
                }
              }
              items[1] = tmp31;
              tmp36[1] = items;
              cResult[30] = tmp4.gifContainer;
              cResult[31] = tmp21;
              cResult[32] = tmp31;
              cResult[33] = closure_6(View, tmp36);
              const tmp37 = closure_6(View, tmp36);
            }
            class C {
              constructor() {
                let intl;
                let intl2;
                closure_2();
                const obj = GIFPickerActionCreators;
                if (isFavoriteGIF) {
                  obj.removeFavoriteGIF(item.url);
                  const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
                  const open2 = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl2 = intl3.intl;
                  open2("REMOVED_FROM_FAVORITES", obj2);
                } else {
                  obj.addFavoriteGIF(item);
                  const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl = intl3.intl;
                  open("ADDED_TO_FAVORITES", obj3);
                }
              }
            }
            let obj3 = { children: items1 };
            items1 = [tmp25, tmp29];
            cResult[27] = tmp25;
            cResult[28] = tmp29;
            cResult[29] = closure_6(tmp(5958).ButtonGroup, obj3);
            const tmp32 = closure_6(tmp(5958).ButtonGroup, obj3);
          }
          class P {
            constructor() {
              let stringResult;
              let str = "primary";
              const Button = components_Button_Button.Button;
              const tmp = hasOwnProperty;
              if (isFavoriteGIF) {
                str = "destructive";
              }
              const obj = { variant: str, onPress, text: stringResult, grow: true };
              const intl = tmp2(1126).intl;
              const string = intl.string;
              const t = tmp2(1126).t;
              if (isFavoriteGIF) {
                stringResult = string(t["5/NS74"]);
              } else {
                stringResult = string(t.nIH0v8);
              }
              return tmp(Button, obj);
            }
          }
          tmp23[0] = tmp18;
          tmp23[1] = tmp19;
          class C {
            constructor() {
              let intl;
              let intl2;
              closure_2();
              const obj = GIFPickerActionCreators;
              if (isFavoriteGIF) {
                obj.removeFavoriteGIF(item.url);
                const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
                const open2 = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl2 = intl3.intl;
                open2("REMOVED_FROM_FAVORITES", obj2);
              } else {
                obj.addFavoriteGIF(item);
                const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl3.intl;
                open("ADDED_TO_FAVORITES", obj3);
              }
            }
          }
          cResult[19] = tmp18;
          cResult[20] = tmp19;
          cResult[21] = tmp24;
          tmp21 = tmp24;
        }
        const items2 = [tmp4.gifImage, ];
        class P {
          constructor() {
            let stringResult;
            let str = "primary";
            const Button = components_Button_Button.Button;
            const tmp = hasOwnProperty;
            if (isFavoriteGIF) {
              str = "destructive";
            }
            const obj = { variant: str, onPress, text: stringResult, grow: true };
            const intl = tmp2(1126).intl;
            const string = intl.string;
            const t = tmp2(1126).t;
            if (isFavoriteGIF) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            return tmp(Button, obj);
          }
        }
        cResult[14] = tmp12;
        class C {
          constructor() {
            let intl;
            let intl2;
            closure_2();
            const obj = GIFPickerActionCreators;
            if (isFavoriteGIF) {
              obj.removeFavoriteGIF(item.url);
              const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
              const open2 = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl2 = intl3.intl;
              open2("REMOVED_FROM_FAVORITES", obj2);
            } else {
              obj.addFavoriteGIF(item);
              const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl3.intl;
              open("ADDED_TO_FAVORITES", obj3);
            }
          }
        }
        cResult[15] = tmp4.gifImage;
        cResult[16] = items2;
        tmp18 = items2;
      }
      class P {
        constructor() {
          let stringResult;
          let str = "primary";
          const Button = components_Button_Button.Button;
          const tmp = hasOwnProperty;
          if (isFavoriteGIF) {
            str = "destructive";
          }
          const obj = { variant: str, onPress, text: stringResult, grow: true };
          const intl = tmp2(1126).intl;
          const string = intl.string;
          const t = tmp2(1126).t;
          if (isFavoriteGIF) {
            stringResult = string(t["5/NS74"]);
          } else {
            stringResult = string(t.nIH0v8);
          }
          return tmp(Button, obj);
        }
      }
      cResult[11] = tmp14;
      class C {
        constructor() {
          let intl;
          let intl2;
          closure_2();
          const obj = GIFPickerActionCreators;
          if (isFavoriteGIF) {
            obj.removeFavoriteGIF(item.url);
            const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
            const open2 = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl2 = intl3.intl;
            open2("REMOVED_FROM_FAVORITES", obj2);
          } else {
            obj.addFavoriteGIF(item);
            const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl3.intl;
            open("ADDED_TO_FAVORITES", obj3);
          }
        }
      }
      cResult[12] = isFavoriteGIF;
      cResult[13] = P;
    }
    class C {
      constructor() {
        let intl;
        let intl2;
        closure_2();
        const obj = GIFPickerActionCreators;
        if (isFavoriteGIF) {
          obj.removeFavoriteGIF(item.url);
          const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
          const open2 = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl2 = intl3.intl;
          open2("REMOVED_FROM_FAVORITES", obj2);
        } else {
          obj.addFavoriteGIF(item);
          const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open("ADDED_TO_FAVORITES", obj3);
        }
      }
    }
    cResult[6] = isFavoriteGIF;
    cResult[7] = item;
    cResult[8] = C;
    tmp14 = C;
  }
  size = { width: result, height: result1 };
  cResult[2] = result;
  cResult[3] = result1;
  cResult[4] = size;
  tmp12 = size;
}) : (function GIFPickerItemActionSheet(item) {
  let intl;
  let items4;
  let items5;
  let items6;
  let obj3;
  let obj4;
  item = item.item;
  let width;
  let tmp = closure_7();
  const tmp2 = item(width[8]);
  const useIsFavoriteGIF = tmp2.useIsFavoriteGIF;
  let obj = item(width[7]);
  const isFavoriteGIF = useIsFavoriteGIF(obj.gifUrlKey(item.url));
  size = isFavoriteGIF(width[9])();
  width = size.width;
  const height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, 0.5 * height / item.height);
    size = { width: item.width * bound, height: item.height * bound };
    return size;
  }, items);
  const callback = height.useCallback(() => {
    const obj = isFavoriteGIF(width[10]);
    obj.hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = height.useCallback(() => {
    let intl;
    let intl2;
    callback();
    const obj = GIFPickerActionCreators;
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2("REMOVED_FROM_FAVORITES", obj2);
    } else {
      obj.addFavoriteGIF(item);
      const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open("ADDED_TO_FAVORITES", obj3);
    }
  }, items1);
  const items2 = [callback, item.url];
  const items3 = [callback1, isFavoriteGIF];
  const callback2 = height.useCallback(() => {
    callback();
    const obj = ClipboardUtils;
    obj.copy(item.url, ToastUtils.presentLinkCopied);
  }, items2);
  const callback3 = height.useCallback(() => {
    let stringResult;
    let str = "primary";
    const Button = components_Button_Button.Button;
    const tmp = hasOwnProperty;
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: stringResult, grow: true };
    const intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (isFavoriteGIF) {
      stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    return tmp(Button, obj);
  }, items3);
  let obj2 = { startExpanded: true, children: callback1(callback, obj3) };
  obj3 = { style: tmp.contentWrapper, children: closure_6(callback, obj4) };
  obj4 = { style: tmp.gifContainer, children: items5 };
  BottomSheet = item(width[19]).BottomSheet;
  const obj5 = { style: items4, source: { uri: item.src } };
  items4 = [tmp.gifImage, memo];
  items5 = [callback1(isFavoriteGIF(width[17]), obj5), ];
  const obj6 = { children: items6 };
  const ButtonGroup = item(width[18]).ButtonGroup;
  items6 = [callback3(), ];
  const obj7 = { variant: "secondary", onPress: callback2, text: intl.string(item(width[12]).t.WqhZss), grow: true };
  let Button = item(width[16]).Button;
  intl = item(width[12]).intl;
  items6[1] = callback1(Button, obj7);
  items5[1] = closure_6(ButtonGroup, obj6);
  return callback1(BottomSheet, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default tmp4;
