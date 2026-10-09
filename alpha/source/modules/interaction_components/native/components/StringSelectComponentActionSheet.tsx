// Module ID: 11334
// Function ID: 11335
// Name: StringSelectComponentActionSheet
// Dependencies: [32, 19, 21, 5091, 587, 558, 576, 8240, 1998, 5055, 6816, 5087, 1126, 11335, 2]

// Module 11334 (StringSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1998 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import EmojiDefault from "Emoji" /* 6816 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, tmp5Result, tmp7;

let obj2;
let react = react_mod;
let jsx = Fragment.jsx;
let obj = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 }, emojiWrapper: obj2, textEmoji: { fontSize: 16, color: "#000000" }, fastImageEmoji: { width: 24, height: 24 } };
obj2 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function StringSelectComponentActionSheet(selectionActionComponent) {
  let channelId;
  let closure_2;
  let closure_4;
  let closure_5;
  let first;
  let labelComponent;
  let onSubmit;
  let tmp8;
  let tmp = dependencyMap;
  let obj = selectionActionComponent(576);
  const cResult = obj.c(36);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId, onSubmit } = selectionActionComponent);
  const allowEmpty = selectionActionComponent.allowEmpty;
  const containerId = selectionActionComponent.containerId;
  let tmp3 = closure_6();
  dependencyMap = tmp3;
  let obj2 = selectionActionComponent(8240);
  const useState = react.useState;
  set = new Set(obj2.getInitialStringSelectOptions(selectionActionComponent, containerId));
  let tmp5 = first(useState(set), 2);
  first = tmp5[0];
  react = tmp5[1];
  jsx = tmp7;
  if (cResult[0] !== onSubmit) {
    const fn = function c(values) {
      const obj = { type: Server.ComponentType.STRING_SELECT, values };
      onSubmit(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    };
    cResult[0] = onSubmit;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  closure_6 = tmp8;
  if (cResult[2] === first) {
    let tmp9;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === selectionActionComponent.maxValues > 1) {
      if (cResult[6] === first) {
        if (cResult[7] === selectionActionComponent.maxValues) {
          let tmp10;
          let tmp11;
          let tmp21;
          if (cResult[8] === tmp8) {
            tmp10 = cResult[9];
          }
          if (cResult[10] !== tmp3) {
            function renderIcon(emoji) {
              let tmp = null;
              if (null != emoji.emoji) {
                const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
                ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
                tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
              }
              return tmp;
            }
            class O {
              constructor(arg0, arg1) {
                closure_0 = arg1;
                tmp = closure_3;
                hasItem = closure_3.has(arg1.value);
                tmp3 = !hasItem;
                closure_1 = tmp3;
                tmp4 = closure_5;
                if (tmp4) {
                  if (!hasItem) {
                    tmp7 = selectionActionComponent;
                    tmp3 = tmp.size >= selectionActionComponent.maxValues;
                  }
                  if (!tmp3) {
                    tmp8 = closure_4;
                    tmp9 = closure_4((items) => {
                      set = new Set(items);
                      const tmp = closure_1;
                      if (tmp) {
                        set.add(closure_0.value);
                      } else {
                        set.delete(closure_0.value);
                      }
                      return set;
                    });
                  }
                } else {
                  tmp5 = closure_6;
                  if (hasItem) {
                    items = [];
                  } else {
                    items = [];
                    items[0] = arg1.value;
                  }
                  tmp5Result = tmp5(items);
                }
                return;
              }
            }
            cResult[11] = renderIcon;
            tmp11 = renderIcon;
          } else {
            tmp11 = cResult[11];
          }
          class O {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              tmp = closure_3;
              hasItem = closure_3.has(arg1.value);
              tmp3 = !hasItem;
              closure_1 = tmp3;
              tmp4 = closure_5;
              if (tmp4) {
                if (!hasItem) {
                  tmp7 = selectionActionComponent;
                  tmp3 = tmp.size >= selectionActionComponent.maxValues;
                }
                if (!tmp3) {
                  tmp8 = closure_4;
                  tmp9 = closure_4((items) => {
                    set = new Set(items);
                    const tmp = closure_1;
                    if (tmp) {
                      set.add(closure_0.value);
                    } else {
                      set.delete(closure_0.value);
                    }
                    return set;
                  });
                }
              } else {
                tmp5 = closure_6;
                if (hasItem) {
                  items = [];
                } else {
                  items = [];
                  items[0] = arg1.value;
                }
                tmp5Result = tmp5(items);
              }
              return;
            }
          }
          if (cResult[14] !== selectionActionComponent.options) {
            let tmp15;
            const _Symbol = Symbol;
            class O {
              constructor(arg0, arg1) {
                closure_0 = arg1;
                tmp = closure_3;
                hasItem = closure_3.has(arg1.value);
                tmp3 = !hasItem;
                closure_1 = tmp3;
                tmp4 = closure_5;
                if (tmp4) {
                  if (!hasItem) {
                    tmp7 = selectionActionComponent;
                    tmp3 = tmp.size >= selectionActionComponent.maxValues;
                  }
                  if (!tmp3) {
                    tmp8 = closure_4;
                    tmp9 = closure_4((items) => {
                      set = new Set(items);
                      const tmp = closure_1;
                      if (tmp) {
                        set.add(closure_0.value);
                      } else {
                        set.delete(closure_0.value);
                      }
                      return set;
                    });
                  }
                } else {
                  tmp5 = closure_6;
                  if (hasItem) {
                    items = [];
                  } else {
                    items = [];
                    items[0] = arg1.value;
                  }
                  tmp5Result = tmp5(items);
                }
                return;
              }
            }
            if (tmp14 === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor(description) {
                  return null != description.description;
                }
              }
              class O {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  tmp = closure_3;
                  hasItem = closure_3.has(arg1.value);
                  tmp3 = !hasItem;
                  closure_1 = tmp3;
                  tmp4 = closure_5;
                  if (tmp4) {
                    if (!hasItem) {
                      tmp7 = selectionActionComponent;
                      tmp3 = tmp.size >= selectionActionComponent.maxValues;
                    }
                    if (!tmp3) {
                      tmp8 = closure_4;
                      tmp9 = closure_4((items) => {
                        set = new Set(items);
                        const tmp = closure_1;
                        if (tmp) {
                          set.add(closure_0.value);
                        } else {
                          set.delete(closure_0.value);
                        }
                        return set;
                      });
                    }
                  } else {
                    tmp5 = closure_6;
                    if (hasItem) {
                      items = [];
                    } else {
                      items = [];
                      items[0] = arg1.value;
                    }
                    tmp5Result = tmp5(items);
                  }
                  return;
                }
              }
              tmp15 = W;
            } else {
              class W {
                constructor(description) {
                  return null != description.description;
                }
              }
            }
            const options = selectionActionComponent.options;
            cResult[14] = selectionActionComponent.options;
            cResult[15] = options.some(tmp15);
            const someResult = options.some(tmp15);
          } else {
            class W {
              constructor(description) {
                return null != description.description;
              }
            }
          }
          if (cResult[17] !== selectionActionComponent.options) {
            let tmp19;
            class W {
              constructor(description) {
                return null != description.description;
              }
            }
            class O {
              constructor(arg0, arg1) {
                closure_0 = arg1;
                tmp = closure_3;
                hasItem = closure_3.has(arg1.value);
                tmp3 = !hasItem;
                closure_1 = tmp3;
                tmp4 = closure_5;
                if (tmp4) {
                  if (!hasItem) {
                    tmp7 = selectionActionComponent;
                    tmp3 = tmp.size >= selectionActionComponent.maxValues;
                  }
                  if (!tmp3) {
                    tmp8 = closure_4;
                    tmp9 = closure_4((items) => {
                      set = new Set(items);
                      const tmp = closure_1;
                      if (tmp) {
                        set.add(closure_0.value);
                      } else {
                        set.delete(closure_0.value);
                      }
                      return set;
                    });
                  }
                } else {
                  tmp5 = closure_6;
                  if (hasItem) {
                    items = [];
                  } else {
                    items = [];
                    items[0] = arg1.value;
                  }
                  tmp5Result = tmp5(items);
                }
                return;
              }
            }
            if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(emoji) {
                  return null != emoji.emoji;
                }
              }
              class O {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  tmp = closure_3;
                  hasItem = closure_3.has(arg1.value);
                  tmp3 = !hasItem;
                  closure_1 = tmp3;
                  tmp4 = closure_5;
                  if (tmp4) {
                    if (!hasItem) {
                      tmp7 = selectionActionComponent;
                      tmp3 = tmp.size >= selectionActionComponent.maxValues;
                    }
                    if (!tmp3) {
                      tmp8 = closure_4;
                      tmp9 = closure_4((items) => {
                        set = new Set(items);
                        const tmp = closure_1;
                        if (tmp) {
                          set.add(closure_0.value);
                        } else {
                          set.delete(closure_0.value);
                        }
                        return set;
                      });
                    }
                  } else {
                    tmp5 = closure_6;
                    if (hasItem) {
                      items = [];
                    } else {
                      items = [];
                      items[0] = arg1.value;
                    }
                    tmp5Result = tmp5(items);
                  }
                  return;
                }
              }
              tmp19 = M;
            } else {
              class M {
                constructor(emoji) {
                  return null != emoji.emoji;
                }
              }
            }
            const options2 = selectionActionComponent.options;
            const someResult1 = options2.some(tmp19);
            cResult[17] = selectionActionComponent.options;
            cResult[18] = someResult1;
          } else {
            class M {
              constructor(emoji) {
                return null != emoji.emoji;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(emoji) {
                return null != emoji.emoji;
              }
            }
            class O {
              constructor(arg0, arg1) {
                closure_0 = arg1;
                tmp = closure_3;
                hasItem = closure_3.has(arg1.value);
                tmp3 = !hasItem;
                closure_1 = tmp3;
                tmp4 = closure_5;
                if (tmp4) {
                  if (!hasItem) {
                    tmp7 = selectionActionComponent;
                    tmp3 = tmp.size >= selectionActionComponent.maxValues;
                  }
                  if (!tmp3) {
                    tmp8 = closure_4;
                    tmp9 = closure_4((items) => {
                      set = new Set(items);
                      const tmp = closure_1;
                      if (tmp) {
                        set.add(closure_0.value);
                      } else {
                        set.delete(closure_0.value);
                      }
                      return set;
                    });
                  }
                } else {
                  tmp5 = closure_6;
                  if (hasItem) {
                    items = [];
                  } else {
                    items = [];
                    items[0] = arg1.value;
                  }
                  tmp5Result = tmp5(items);
                }
                return;
              }
            }
            tmp21 = tmp22;
          } else {
            class M {
              constructor(emoji) {
                return null != emoji.emoji;
              }
            }
          }
          if (tmp13) {
            class M {
              constructor(emoji) {
                return null != emoji.emoji;
              }
            }
          }
          if (cResult[21] !== first) {
            class Z {
              constructor(value) {
                return first.has(value.value);
              }
            }
            class O {
              constructor(arg0, arg1) {
                closure_0 = arg1;
                tmp = closure_3;
                hasItem = closure_3.has(arg1.value);
                tmp3 = !hasItem;
                closure_1 = tmp3;
                tmp4 = closure_5;
                if (tmp4) {
                  if (!hasItem) {
                    tmp7 = selectionActionComponent;
                    tmp3 = tmp.size >= selectionActionComponent.maxValues;
                  }
                  if (!tmp3) {
                    tmp8 = closure_4;
                    tmp9 = closure_4((items) => {
                      set = new Set(items);
                      const tmp = closure_1;
                      if (tmp) {
                        set.add(closure_0.value);
                      } else {
                        set.delete(closure_0.value);
                      }
                      return set;
                    });
                  }
                } else {
                  tmp5 = closure_6;
                  if (hasItem) {
                    items = [];
                  } else {
                    items = [];
                    items[0] = arg1.value;
                  }
                  tmp5Result = tmp5(items);
                }
                return;
              }
            }
            cResult[22] = Z;
          } else {
            class Z {
              constructor(value) {
                return first.has(value.value);
              }
            }
          }
          if (cResult[23] === allowEmpty) {
            class Z {
              constructor(value) {
                return first.has(value.value);
              }
            }
          }
          cResult[23] = allowEmpty;
          cResult[24] = channelId;
          cResult[25] = labelComponent;
          cResult[26] = tmp10;
          cResult[27] = tmp12;
          cResult[28] = tmp11;
          cResult[29] = first.size;
          cResult[30] = selectionActionComponent;
          cResult[31] = tmp9;
          cResult[32] = tmp13;
          cResult[33] = tmp24;
          cResult[34] = !tmp17;
          cResult[35] = jsx(onSubmit(11335), { onPressOptionItem: tmp10, renderIcon: tmp11, skipIcon: !tmp17, renderDescription: tmp12, selectionActionComponent, labelComponent, options: selectionActionComponent.options, itemStyle: tmp13, selectedCount: first.size, isSelected: tmp24, submitSelection: tmp9, itemAccessibilityLabel: tmp21, channelId, allowEmpty });
          const tmp28 = jsx(onSubmit(11335), { onPressOptionItem: tmp10, renderIcon: tmp11, skipIcon: !tmp17, renderDescription: tmp12, selectionActionComponent, labelComponent, options: selectionActionComponent.options, itemStyle: tmp13, selectedCount: first.size, isSelected: tmp24, submitSelection: tmp9, itemAccessibilityLabel: tmp21, channelId, allowEmpty });
        }
      }
    }
    class O {
      constructor(arg0, arg1) {
        closure_0 = arg1;
        tmp = closure_3;
        hasItem = closure_3.has(arg1.value);
        tmp3 = !hasItem;
        closure_1 = tmp3;
        tmp4 = closure_5;
        if (tmp4) {
          if (!hasItem) {
            tmp7 = selectionActionComponent;
            tmp3 = tmp.size >= selectionActionComponent.maxValues;
          }
          if (!tmp3) {
            tmp8 = closure_4;
            tmp9 = closure_4((items) => {
              set = new Set(items);
              const tmp = closure_1;
              if (tmp) {
                set.add(closure_0.value);
              } else {
                set.delete(closure_0.value);
              }
              return set;
            });
          }
        } else {
          tmp5 = closure_6;
          if (hasItem) {
            items = [];
          } else {
            items = [];
            items[0] = arg1.value;
          }
          tmp5Result = tmp5(items);
        }
        return;
      }
    }
    cResult[5] = selectionActionComponent.maxValues > 1;
    cResult[6] = first;
    cResult[7] = selectionActionComponent.maxValues;
    cResult[8] = tmp8;
    cResult[9] = O;
    tmp10 = O;
  }
  function submitSelectedSelections() {
    const items = [...first];
    return closure_6(items);
  }
  cResult[2] = first;
  cResult[3] = tmp8;
  cResult[4] = submitSelectedSelections;
  tmp9 = submitSelectedSelections;
}) : (function StringSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let closure_2;
  let closure_4;
  let containerId;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  let first;
  react = undefined;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(8240);
  const useState = react.useState;
  set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  let tmp3 = first(useState(set), 2);
  first = tmp3[0];
  react = tmp3[1];
  let items = [selectionActionComponent];
  const memo = react.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = react.useCallback((values) => {
    const obj = { type: Server.ComponentType.STRING_SELECT, values };
    onSubmit(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = react.useCallback((arg0, value) => {
    let closure_0 = value;
    let tmp = first;
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    let closure_1 = tmp3;
    const tmp4 = memo;
    if (tmp4) {
      if (!hasItem) {
        tmp3 = tmp.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        closure_4((items) => {
          set = new Set(items);
          const tmp = closure_1;
          if (tmp) {
            set.add(closure_0.value);
          } else {
            set.delete(closure_0.value);
          }
          return set;
        });
      }
    } else {
      let items;
      const tmp5 = callback;
      if (hasItem) {
        items = [];
      } else {
        items = [value.value];
      }
      tmp5(items);
    }
  }, items2);
  let selectionOptionItemWithDescription = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  let obj2 = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
        ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
        tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options,
    itemStyle: selectionOptionItemWithDescription,
    selectedCount: first.size,
    isSelected(value) {
      return first.has(value.value);
    },
    submitSelection: function submitSelectedSelections() {
      const items = [...first];
      return callback(items);
    },
    itemAccessibilityLabel: function accessibilityLabel(emoji) {
      const intl = selectionActionComponent(closure_2[12]).intl;
      const formatToPlainString = intl.formatToPlainString;
      emoji = emoji.emoji;
      let name;
      const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
      if (emoji != null) {
        name = emoji.name;
      }
      const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
      return formatToPlainString(ZbrH2f, obj);
    },
    channelId,
    allowEmpty
  };
  const tmp10 = onSubmit(11335);
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  return tmp9(tmp10, obj2);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default tmp2;
