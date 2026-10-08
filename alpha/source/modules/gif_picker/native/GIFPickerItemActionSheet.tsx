// Module ID: 9702
// Function ID: 9703
// Name: GIFPickerItemActionSheet
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 9687, 9691, 1496, 5054, 4766, 1126, 9703, 6872, 4765, 5375, 6164, 5963, 6829, 2]

// Module 9702 (GIFPickerItemActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 9687 */;
import GifIcon from "GifIcon" /* 9703 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, addFavoriteGIFResult, hideActionSheetResult, obj1, open2Result, openResult, removeFavoriteGIFResult, tmp10, tmp11, tmp14, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp23, tmp24, tmp3, tmp6, tmp7, tmp9;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: obj2, gifContainer: { flexDirection: "column", alignItems: "center" }, gifImage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GIFPickerItemActionSheet(item) {
  let height;
  let items1;
  let tmp22;
  let tmp5;
  let width;
  let tmp = item;
  const tmp2 = G;
  let obj = item(G[6]);
  const cResult = obj.c(37);
  item = item.item;
  const tmp4 = closure_7();
  if (cResult[0] !== item.url) {
    const tmpResult = tmp(tmp2[7]);
    const gifUrlKeyResult = tmpResult.gifUrlKey(item.url);
    cResult[0] = item.url;
    cResult[1] = gifUrlKeyResult;
    tmp5 = gifUrlKeyResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult2 = tmp(tmp2[8]);
  const isFavoriteGIF = tmpResult2.useIsFavoriteGIF(tmp5);
  ({ width, height } = isFavoriteGIF(tmp2[9])());
  const tmp8 = isFavoriteGIF(tmp2[9])();
  const bound = Math.min((width - 2 * isFavoriteGIF(tmp2[4]).space.PX_16) / item.width, 0.5 * height / item.height);
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
      class G {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[5] = G;
      tmp13 = G;
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    G = tmp13;
    if (cResult[6] === isFavoriteGIF) {
      class G {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const react = tmp14;
      if (cResult[9] !== item.url) {
        class G {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        cResult[9] = item.url;
        class P {
          constructor() {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp = jsx;
            str = "primary";
            Button = closure_0(closure_2[16]).Button;
            tmp4 = closure_1;
            if (tmp4) {
              str = "destructive";
            }
            obj = { variant: str, onPress: closure_3, text: null, grow: true };
            intl = tmp2(tmp3[12]).intl;
            string = intl.string;
            t = tmp2(tmp3[12]).t;
            if (tmp4) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            obj.text = stringResult;
            return tmp(Button, obj);
          }
        }
      } else {
        class G {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[11] === tmp14) {
        class G {
          constructor() {
            obj = closure_1(closure_2[10]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        if (cResult[14] === tmp12) {
          class G {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          if (cResult[17] !== item.src) {
            class G {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
            tmp21[0] = item.src;
            cResult[17] = item.src;
            class P {
              constructor() {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = jsx;
                str = "primary";
                Button = closure_0(closure_2[16]).Button;
                tmp4 = closure_1;
                if (tmp4) {
                  str = "destructive";
                }
                obj = { variant: str, onPress: closure_3, text: null, grow: true };
                intl = tmp2(tmp3[12]).intl;
                string = intl.string;
                t = tmp2(tmp3[12]).t;
                if (tmp4) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                obj.text = stringResult;
                return tmp(Button, obj);
              }
            }
            cResult[18] = tmp21;
          } else {
            class G {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
          }
          if (cResult[19] === tmp19) {
            class G {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
            if (cResult[22] !== tmp17) {
              class G {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
              cResult[22] = tmp17;
              class P {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  Button = closure_0(closure_2[16]).Button;
                  tmp4 = closure_1;
                  if (tmp4) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(Button, obj);
                }
              }
            } else {
              class G {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
            }
            const _Symbol2 = Symbol;
            class P {
              constructor() {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = jsx;
                str = "primary";
                Button = closure_0(closure_2[16]).Button;
                tmp4 = closure_1;
                if (tmp4) {
                  str = "destructive";
                }
                obj = { variant: str, onPress: closure_3, text: null, grow: true };
                intl = tmp2(tmp3[12]).intl;
                string = intl.string;
                t = tmp2(tmp3[12]).t;
                if (tmp4) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                obj.text = stringResult;
                return tmp(Button, obj);
              }
            }
            if (cResult[25] !== tmp15) {
              class G {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
              let obj2 = { variant: "secondary", onPress: tmp15, text: tmp29, grow: true };
              class P {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  Button = closure_0(closure_2[16]).Button;
                  tmp4 = closure_1;
                  if (tmp4) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(Button, obj);
                }
              }
              cResult[25] = tmp15;
              class O {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[7]);
                  if (closure_1) {
                    tmp14 = item;
                    removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                    tmp16 = closure_1;
                    tmp17 = closure_2;
                    tmp18 = closure_1(closure_2[11]);
                    obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    open2 = tmp18.open;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                    tmp23 = closure_0;
                    tmp24 = closure_2;
                    obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                    open2Result = open2(obj1);
                  } else {
                    tmp2 = item;
                    addFavoriteGIFResult = obj.addFavoriteGIF(item);
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    tmp6 = closure_1(closure_2[11]);
                    obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    open = tmp6.open;
                    intl = closure_0(closure_2[12]).intl;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult = open(obj4);
                  }
                  return;
                }
              }
              cResult[26] = tmp31;
            } else {
              class G {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
            }
            if (cResult[27] === tmp26) {
              class G {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
              if (cResult[30] === tmp4.gifContainer) {
                class G {
                  constructor() {
                    obj = closure_1(closure_2[10]);
                    hideActionSheetResult = obj.hideActionSheet();
                    return;
                  }
                }
              }
              class P {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  Button = closure_0(closure_2[16]).Button;
                  tmp4 = closure_1;
                  if (tmp4) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(Button, obj);
                }
              }
              tmp37[0] = tmp18;
              const items = [, ];
              class O {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[7]);
                  if (closure_1) {
                    tmp14 = item;
                    removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                    tmp16 = closure_1;
                    tmp17 = closure_2;
                    tmp18 = closure_1(closure_2[11]);
                    obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    open2 = tmp18.open;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                    tmp23 = closure_0;
                    tmp24 = closure_2;
                    obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                    open2Result = open2(obj1);
                  } else {
                    tmp2 = item;
                    addFavoriteGIFResult = obj.addFavoriteGIF(item);
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    tmp6 = closure_1(closure_2[11]);
                    obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    open = tmp6.open;
                    intl = closure_0(closure_2[12]).intl;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult = open(obj4);
                  }
                  return;
                }
              }
              items[1] = tmp32;
              tmp37[1] = items;
              cResult[30] = tmp4.gifContainer;
              cResult[31] = tmp22;
              cResult[32] = tmp32;
              cResult[33] = closure_6(View, tmp37);
              const tmp38 = closure_6(View, tmp37);
            }
            class O {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[7]);
                if (closure_1) {
                  tmp14 = item;
                  removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                  tmp16 = closure_1;
                  tmp17 = closure_2;
                  tmp18 = closure_1(closure_2[11]);
                  obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  open2 = tmp18.open;
                  intl2 = closure_0(closure_2[12]).intl;
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                  open2Result = open2(obj1);
                } else {
                  tmp2 = item;
                  addFavoriteGIFResult = obj.addFavoriteGIF(item);
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  tmp6 = closure_1(closure_2[11]);
                  obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  open = tmp6.open;
                  intl = closure_0(closure_2[12]).intl;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
                  openResult = open(obj4);
                }
                return;
              }
            }
            let obj3 = { children: items1 };
            items1 = [tmp26, tmp30];
            cResult[27] = tmp26;
            cResult[28] = tmp30;
            cResult[29] = closure_6(tmp(tmp2[18]).ButtonGroup, obj3);
            const tmp33 = closure_6(tmp(tmp2[18]).ButtonGroup, obj3);
          }
          class P {
            constructor() {
              tmp2 = closure_0;
              tmp3 = closure_2;
              tmp = jsx;
              str = "primary";
              Button = closure_0(closure_2[16]).Button;
              tmp4 = closure_1;
              if (tmp4) {
                str = "destructive";
              }
              obj = { variant: str, onPress: closure_3, text: null, grow: true };
              intl = tmp2(tmp3[12]).intl;
              string = intl.string;
              t = tmp2(tmp3[12]).t;
              if (tmp4) {
                stringResult = string(t["5/NS74"]);
              } else {
                stringResult = string(t.nIH0v8);
              }
              obj.text = stringResult;
              return tmp(Button, obj);
            }
          }
          tmp24[0] = tmp19;
          tmp24[1] = tmp20;
          class O {
            constructor() {
              tmp = closure_2();
              obj = closure_0(closure_2[7]);
              if (closure_1) {
                tmp14 = item;
                removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                tmp16 = closure_1;
                tmp17 = closure_2;
                tmp18 = closure_1(closure_2[11]);
                obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                tmp19 = closure_0;
                tmp20 = closure_2;
                open2 = tmp18.open;
                intl2 = closure_0(closure_2[12]).intl;
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                tmp23 = closure_0;
                tmp24 = closure_2;
                obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                open2Result = open2(obj1);
              } else {
                tmp2 = item;
                addFavoriteGIFResult = obj.addFavoriteGIF(item);
                tmp4 = closure_1;
                tmp5 = closure_2;
                tmp6 = closure_1(closure_2[11]);
                obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                tmp7 = closure_0;
                tmp8 = closure_2;
                open = tmp6.open;
                intl = closure_0(closure_2[12]).intl;
                tmp9 = closure_0;
                tmp10 = closure_2;
                obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                tmp11 = closure_0;
                tmp12 = closure_2;
                obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
                openResult = open(obj4);
              }
              return;
            }
          }
          cResult[19] = tmp19;
          cResult[20] = tmp20;
          cResult[21] = tmp25;
          tmp22 = tmp25;
        }
        const items2 = [tmp4.gifImage, ];
        class P {
          constructor() {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp = jsx;
            str = "primary";
            Button = closure_0(closure_2[16]).Button;
            tmp4 = closure_1;
            if (tmp4) {
              str = "destructive";
            }
            obj = { variant: str, onPress: closure_3, text: null, grow: true };
            intl = tmp2(tmp3[12]).intl;
            string = intl.string;
            t = tmp2(tmp3[12]).t;
            if (tmp4) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            obj.text = stringResult;
            return tmp(Button, obj);
          }
        }
        cResult[14] = tmp12;
        class O {
          constructor() {
            tmp = closure_2();
            obj = closure_0(closure_2[7]);
            if (closure_1) {
              tmp14 = item;
              removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
              tmp16 = closure_1;
              tmp17 = closure_2;
              tmp18 = closure_1(closure_2[11]);
              obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
              tmp19 = closure_0;
              tmp20 = closure_2;
              open2 = tmp18.open;
              intl2 = closure_0(closure_2[12]).intl;
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
              tmp23 = closure_0;
              tmp24 = closure_2;
              obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
              open2Result = open2(obj1);
            } else {
              tmp2 = item;
              addFavoriteGIFResult = obj.addFavoriteGIF(item);
              tmp4 = closure_1;
              tmp5 = closure_2;
              tmp6 = closure_1(closure_2[11]);
              obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
              tmp7 = closure_0;
              tmp8 = closure_2;
              open = tmp6.open;
              intl = closure_0(closure_2[12]).intl;
              tmp9 = closure_0;
              tmp10 = closure_2;
              obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
              tmp11 = closure_0;
              tmp12 = closure_2;
              obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
              openResult = open(obj4);
            }
            return;
          }
        }
        cResult[15] = tmp4.gifImage;
        cResult[16] = items2;
      }
      class P {
        constructor() {
          tmp2 = closure_0;
          tmp3 = closure_2;
          tmp = jsx;
          str = "primary";
          Button = closure_0(closure_2[16]).Button;
          tmp4 = closure_1;
          if (tmp4) {
            str = "destructive";
          }
          obj = { variant: str, onPress: closure_3, text: null, grow: true };
          intl = tmp2(tmp3[12]).intl;
          string = intl.string;
          t = tmp2(tmp3[12]).t;
          if (tmp4) {
            stringResult = string(t["5/NS74"]);
          } else {
            stringResult = string(t.nIH0v8);
          }
          obj.text = stringResult;
          return tmp(Button, obj);
        }
      }
      cResult[11] = tmp14;
      class O {
        constructor() {
          tmp = closure_2();
          obj = closure_0(closure_2[7]);
          if (closure_1) {
            tmp14 = item;
            removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
            tmp16 = closure_1;
            tmp17 = closure_2;
            tmp18 = closure_1(closure_2[11]);
            obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
            tmp19 = closure_0;
            tmp20 = closure_2;
            open2 = tmp18.open;
            intl2 = closure_0(closure_2[12]).intl;
            tmp21 = closure_0;
            tmp22 = closure_2;
            obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
            tmp23 = closure_0;
            tmp24 = closure_2;
            obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
            open2Result = open2(obj1);
          } else {
            tmp2 = item;
            addFavoriteGIFResult = obj.addFavoriteGIF(item);
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_1(closure_2[11]);
            obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
            tmp7 = closure_0;
            tmp8 = closure_2;
            open = tmp6.open;
            intl = closure_0(closure_2[12]).intl;
            tmp9 = closure_0;
            tmp10 = closure_2;
            obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
            tmp11 = closure_0;
            tmp12 = closure_2;
            obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
            openResult = open(obj4);
          }
          return;
        }
      }
      cResult[12] = isFavoriteGIF;
      cResult[13] = P;
    }
    class O {
      constructor() {
        tmp = closure_2();
        obj = closure_0(closure_2[7]);
        if (closure_1) {
          tmp14 = item;
          removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
          tmp16 = closure_1;
          tmp17 = closure_2;
          tmp18 = closure_1(closure_2[11]);
          obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
          tmp19 = closure_0;
          tmp20 = closure_2;
          open2 = tmp18.open;
          intl2 = closure_0(closure_2[12]).intl;
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
          tmp23 = closure_0;
          tmp24 = closure_2;
          obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
          open2Result = open2(obj1);
        } else {
          tmp2 = item;
          addFavoriteGIFResult = obj.addFavoriteGIF(item);
          tmp4 = closure_1;
          tmp5 = closure_2;
          tmp6 = closure_1(closure_2[11]);
          obj4 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
          tmp7 = closure_0;
          tmp8 = closure_2;
          open = tmp6.open;
          intl = closure_0(closure_2[12]).intl;
          tmp9 = closure_0;
          tmp10 = closure_2;
          obj4.content = intl.string(closure_0(closure_2[12]).t.okQonm);
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj4.IconComponent = closure_0(closure_2[13]).GifIcon;
          openResult = open(obj4);
        }
        return;
      }
    }
    cResult[6] = isFavoriteGIF;
    cResult[7] = item;
    cResult[8] = O;
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
      const obj2 = { key: "REMOVED_FROM_FAVORITES", content: intl2.string(intl3.t.in1rga), IconComponent: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2(obj2);
    } else {
      obj.addFavoriteGIF(item);
      const obj3 = { key: "ADDED_TO_FAVORITES", content: intl.string(intl3.t.okQonm), IconComponent: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open(obj3);
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
