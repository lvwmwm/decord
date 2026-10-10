// Module ID: 18360
// Function ID: 18361
// Name: GuildSettingsRoleItem
// Dependencies: [5, 19, 17, 1085, 21, 5092, 587, 5088, 558, 576, 5408, 6882, 5300, 1126, 10728, 6097, 5398, 5049, 7573, 6901, 6899, 5391, 1388, 1103, 8621, 8216, 1200, 9466, 8222, 6179, 2]

// Module 18360 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 5088 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ View: hasOwnProperty, StyleSheet } = react_native);
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "text-md/semibold";
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: obj2, label: obj3, sparkleIcon: obj4, dragHandlePressable: { alignSelf: "stretch", justifyContent: "center" }, container: size, gradient: obj5, image: { tintColor: "white" } };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
createStyles = createStyles.createStyles;
let prop = Text_Text.TextStyleSheet["text-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
obj3 = { lineHeight: num + 1 };
obj4 = { tintColor: nativeDefault.colors.ICON_MUTED };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleItem(guildId) {
  let found;
  let intl5;
  let isEveryoneRole;
  let isFirstRole;
  let isLastRole;
  let items4;
  let locked;
  let numMembers;
  let obj8;
  let onLongPress;
  let onMoveUp;
  let onPress;
  let role;
  let sortHandlers;
  let sorting;
  let tmp = role;
  let obj = role(onMoveUp[9]);
  const cResult = obj.c(82);
  const tmp4 = onPress;
  const tmp5 = onPress(onMoveUp[10])(guildId.guildId, null);
  const tmp6 = closure_10();
  role = guildId.role;
  ({ sorting, locked, onPress } = guildId);
  ({ onLongPress, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ numMembers, isLastRole, isFirstRole } = guildId);
  if (cResult[0] === guildId) {
    let tmp7;
    if (cResult[1] === role.id) {
      tmp7 = cResult[2];
    }
    const tmpResult = tmp(onMoveUp[11]);
    const roleIconProps = tmpResult.useRoleIconProps(tmp7);
    const tags = role.tags;
    let guild_connections;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    let closure_5 = tmp10;
    if (cResult[3] === guildId) {
      if (cResult[4] === null === guild_connections) {
        if (cResult[5] === role.id) {
          let tmp11;
          if (cResult[6] === role.name) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[11] === onMoveDown) {
              let tmp14;
              if (cResult[12] === onMoveUp) {
                tmp14 = cResult[13];
              }
              if (cResult[16] === onMoveDown) {
                let tmp23;
                let flag2;
                if (cResult[17] === onMoveUp) {
                  tmp23 = cResult[18];
                }
                if (sorting) {
                  let tmp48;
                  let obj13;
                  if (!locked) {
                    let tmp24;
                    let tmp28;
                    if (cResult[19] !== role.name) {
                      let intl3 = tmp(tmp2[13]).intl;
                      const formatToPlainString = intl3.formatToPlainString;
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      tmp25[0] = role.name;
                      const formatToPlainStringResult = formatToPlainString(tmp(onMoveUp[13]).t.Zazao2, tmp25);
                      cResult[19] = role.name;
                      cResult[20] = formatToPlainStringResult;
                      tmp24 = formatToPlainStringResult;
                    } else {
                      tmp24 = cResult[20];
                    }
                    class D {
                      constructor(nativeEvent) {
                        const actionName = nativeEvent.nativeEvent.actionName;
                        if ("moveup" === actionName) {
                          if (onMoveUp != null) {
                            tmp4();
                          }
                        } else if ("movedown" === actionName) {
                          if (onMoveDown != null) {
                            tmp();
                          }
                        }
                      }
                    }
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const string = tmp(tmp2[13]).intl.string;
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      cResult[21] = tmp29;
                      tmp28 = tmp29;
                    } else {
                      tmp28 = cResult[21];
                    }
                    let style;
                    if (sortHandlers != null) {
                      style = sortHandlers.style;
                    }
                    if (cResult[22] === tmp6.dragHandlePressable) {
                      let tmp31;
                      if (cResult[23] === style) {
                        tmp31 = cResult[24];
                      }
                      if (cResult[25] === tmp14) {
                        if (cResult[26] === tmp23) {
                          if (cResult[27] === sortHandlers) {
                            if (cResult[28] === tmp24) {
                              if (!role.managed) {
                                let tmp41;
                                const _Symbol3 = Symbol;
                                class D {
                                  constructor(nativeEvent) {
                                    const actionName = nativeEvent.nativeEvent.actionName;
                                    if ("moveup" === actionName) {
                                      if (onMoveUp != null) {
                                        tmp4();
                                      }
                                    } else if ("movedown" === actionName) {
                                      if (onMoveDown != null) {
                                        tmp();
                                      }
                                    }
                                  }
                                }
                                if (cResult[32] !== role.name) {
                                  let intl4 = tmp(tmp2[13]).intl;
                                  const formatToPlainString2 = intl4.formatToPlainString;
                                  class D {
                                    constructor(nativeEvent) {
                                      const actionName = nativeEvent.nativeEvent.actionName;
                                      if ("moveup" === actionName) {
                                        if (onMoveUp != null) {
                                          tmp4();
                                        }
                                      } else if ("movedown" === actionName) {
                                        if (onMoveDown != null) {
                                          tmp();
                                        }
                                      }
                                    }
                                  }
                                  tmp42[0] = role.name;
                                  const formatToPlainString2Result = formatToPlainString2(tmp(onMoveUp[13]).t.FiMFTZ, tmp42);
                                  cResult[32] = role.name;
                                  cResult[33] = formatToPlainString2Result;
                                  tmp41 = formatToPlainString2Result;
                                } else {
                                  tmp41 = cResult[33];
                                }
                                if (cResult[34] === tmp11) {
                                  class D {
                                    constructor(nativeEvent) {
                                      const actionName = nativeEvent.nativeEvent.actionName;
                                      if ("moveup" === actionName) {
                                        if (onMoveUp != null) {
                                          tmp4();
                                        }
                                      } else if ("movedown" === actionName) {
                                        if (onMoveDown != null) {
                                          tmp();
                                        }
                                      }
                                    }
                                  }
                                }
                                let obj2 = { icon: tmp40, accessibilityLabel: tmp41, size: "sm", variant: "destructive", onPress: tmp11 };
                                const tmp46 = closure_7(tmp(onMoveUp[18]).IconButton, obj2);
                                cResult[34] = tmp11;
                                cResult[35] = tmp41;
                                cResult[36] = tmp46;
                              } else {
                                flag2 = true;
                                class D {
                                  constructor(nativeEvent) {
                                    const actionName = nativeEvent.nativeEvent.actionName;
                                    if ("moveup" === actionName) {
                                      if (onMoveUp != null) {
                                        tmp4();
                                      }
                                    } else if ("movedown" === actionName) {
                                      if (onMoveDown != null) {
                                        tmp();
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      tmp33[1] = tmp24;
                      tmp33[2] = tmp28;
                      tmp33[3] = tmp14;
                      tmp33[4] = tmp23;
                      tmp33[7] = tmp4(onMoveUp[6]).space.PX_4;
                      const merged = Object.assign(sortHandlers);
                      tmp33.style = tmp31;
                      cResult[25] = tmp14;
                      cResult[26] = tmp23;
                      cResult[27] = sortHandlers;
                      cResult[28] = tmp24;
                      cResult[29] = tmp31;
                      cResult[30] = tmp33;
                    }
                    const items = [tmp6.dragHandlePressable, style];
                    cResult[22] = tmp6.dragHandlePressable;
                    cResult[23] = style;
                    cResult[24] = items;
                    tmp31 = items;
                  }
                  if (null != roleIconProps) {
                    let tmp61;
                    if (cResult[37] !== roleIconProps) {
                      let obj3 = {};
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      const tmp4Result = tmp4(onMoveUp[19]);
                      const merged1 = Object.assign(roleIconProps);
                      const tmp66 = closure_7(tmp4Result, obj3);
                      cResult[37] = roleIconProps;
                      cResult[38] = tmp66;
                      tmp61 = tmp66;
                    } else {
                      tmp61 = cResult[38];
                    }
                    tmp48 = tmp61;
                  } else {
                    const tags5 = role.tags;
                    class D {
                      constructor(nativeEvent) {
                        const actionName = nativeEvent.nativeEvent.actionName;
                        if ("moveup" === actionName) {
                          if (onMoveUp != null) {
                            tmp4();
                          }
                        } else if ("movedown" === actionName) {
                          if (onMoveDown != null) {
                            tmp();
                          }
                        }
                      }
                    }
                    if (null === undefined) {
                      if (cResult[39] === guildId) {
                        let tmp57;
                        if (cResult[40] === role) {
                          tmp57 = cResult[41];
                        }
                        tmp48 = tmp57;
                      }
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      tmp59[1] = guildId;
                      tmp59[2] = role;
                      const tmp60 = closure_7(tmp4(onMoveUp[20]), tmp59);
                      cResult[39] = guildId;
                      cResult[40] = role;
                      cResult[41] = tmp60;
                      tmp57 = tmp60;
                    } else {
                      if (cResult[42] === tmp5) {
                        if (cResult[43] === role.colorString) {
                          if (cResult[44] === role.colors) {
                            if (cResult[45] === tmp6.container) {
                              if (cResult[46] === tmp6.gradient) {
                                if (cResult[47] === tmp6.image) {
                                  tmp48 = cResult[48];
                                }
                              }
                            }
                          }
                        }
                      }
                      if (tmp5) {
                        if (null != role.colors) {
                          let tmp49Result;
                          if (null != role.colors.secondary_color) {
                            class D {
                              constructor(nativeEvent) {
                                const actionName = nativeEvent.nativeEvent.actionName;
                                if ("moveup" === actionName) {
                                  if (onMoveUp != null) {
                                    tmp4();
                                  }
                                } else if ("movedown" === actionName) {
                                  if (onMoveDown != null) {
                                    tmp();
                                  }
                                }
                              }
                            }
                            tmp54[0] = tmp6.container;
                            let obj4 = {
                              colors: found.map((item) => {
                                                          const obj = role(onMoveUp[23]);
                                                          return obj.int2hex(item);
                                                        }),
                              start: { x: 0, y: 0 },
                              end: { x: 1, y: 0 },
                              style: tmp6.gradient
                            };
                            const items1 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
                            const tmp4Result2 = tmp4(onMoveUp[21]);
                            found = items1.filter(tmp(tmp2[22]).isNotNullish);
                            const items2 = [closure_7(tmp4Result2, obj4), ];
                            let obj5 = { size: "md", style: tmp6.image };
                            items2[1] = closure_7(tmp(onMoveUp[24]).ShieldUserIcon, obj5);
                            tmp54[1] = items2;
                            tmp49Result = closure_8(closure_5, tmp54);
                          }
                          class D {
                            constructor(nativeEvent) {
                              const actionName = nativeEvent.nativeEvent.actionName;
                              if ("moveup" === actionName) {
                                if (onMoveUp != null) {
                                  tmp4();
                                }
                              } else if ("movedown" === actionName) {
                                if (onMoveDown != null) {
                                  tmp();
                                }
                              }
                            }
                          }
                          cResult[43] = role.colorString;
                          cResult[44] = role.colors;
                          cResult[45] = tmp6.container;
                          cResult[46] = tmp6.gradient;
                          cResult[47] = tmp6.image;
                          cResult[48] = tmp49Result;
                          tmp48 = tmp49Result;
                        }
                      }
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      const items3 = [tmp6.container, ];
                      let obj6 = { style: items3, children: tmp49(tmp(tmp2[24]).ShieldUserIcon, obj8) };
                      const obj7 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
                      items3[1] = obj7;
                      obj8 = { size: "md", style: tmp6.image };
                      tmp49Result = tmp49(closure_5, obj6);
                    }
                  }
                  class D {
                    constructor(nativeEvent) {
                      const actionName = nativeEvent.nativeEvent.actionName;
                      if ("moveup" === actionName) {
                        if (onMoveUp != null) {
                          tmp4();
                        }
                      } else if ("movedown" === actionName) {
                        if (onMoveDown != null) {
                          tmp();
                        }
                      }
                    }
                  }
                  if (sorting) {
                    sorting = !flag2;
                  }
                  if (cResult[49] === isEveryoneRole) {
                    if (cResult[50] === tmp48) {
                      if (cResult[53] === role.name) {
                        let tmp72;
                        let subscription_listing_id;
                        if (cResult[54] === tmp6.label) {
                          tmp72 = cResult[55];
                        }
                        const tags2 = role.tags;
                        class D {
                          constructor(nativeEvent) {
                            const actionName = nativeEvent.nativeEvent.actionName;
                            if ("moveup" === actionName) {
                              if (onMoveUp != null) {
                                tmp4();
                              }
                            } else if ("movedown" === actionName) {
                              if (onMoveDown != null) {
                                tmp();
                              }
                            }
                          }
                        }
                        const tmp75 = cResult[56];
                        if (tags2 != null) {
                          subscription_listing_id = tags2.subscription_listing_id;
                        }
                        if (tmp75 === subscription_listing_id) {
                          let tmp76;
                          let tmp82;
                          if (cResult[57] === tmp6.sparkleIcon) {
                            tmp76 = cResult[58];
                          }
                          if (cResult[59] !== locked) {
                            let tmp83 = null;
                            if (locked) {
                              tmp83 = closure_7(tmp(tmp2[28]).LockIcon, { size: "xxs", color: "icon-subtle" });
                            }
                            class D {
                              constructor(nativeEvent) {
                                const actionName = nativeEvent.nativeEvent.actionName;
                                if ("moveup" === actionName) {
                                  if (onMoveUp != null) {
                                    tmp4();
                                  }
                                } else if ("movedown" === actionName) {
                                  if (onMoveDown != null) {
                                    tmp();
                                  }
                                }
                              }
                            }
                            cResult[59] = locked;
                            cResult[60] = tmp83;
                            tmp82 = tmp83;
                          } else {
                            tmp82 = cResult[60];
                          }
                          class D {
                            constructor(nativeEvent) {
                              const actionName = nativeEvent.nativeEvent.actionName;
                              if ("moveup" === actionName) {
                                if (onMoveUp != null) {
                                  tmp4();
                                }
                              } else if ("movedown" === actionName) {
                                if (onMoveDown != null) {
                                  tmp();
                                }
                              }
                            }
                          }
                          const obj9 = { style: tmp6.row, children: items4 };
                          items4 = [tmp72, tmp76, tmp82];
                          cResult[61] = tmp6.row;
                          cResult[62] = tmp72;
                          cResult[63] = tmp76;
                          cResult[64] = tmp82;
                          cResult[65] = closure_8(closure_5, obj9);
                          const tmp88 = closure_8(closure_5, obj9);
                        }
                        const tags3 = role.tags;
                        let prop;
                        if (tags3 != null) {
                          prop = tags3.subscription_listing_id;
                        }
                        let tmp78 = null;
                        if (null != prop) {
                          const obj10 = { size: tmp(onMoveUp[26]).Icon.Sizes.REFRESH_SMALL_16, source: tmp4(onMoveUp[27]), "aria-label": intl5.string(tmp(onMoveUp[13]).t.a2Ak8b), style: tmp6.sparkleIcon };
                          class D {
                            constructor(nativeEvent) {
                              const actionName = nativeEvent.nativeEvent.actionName;
                              if ("moveup" === actionName) {
                                if (onMoveUp != null) {
                                  tmp4();
                                }
                              } else if ("movedown" === actionName) {
                                if (onMoveDown != null) {
                                  tmp();
                                }
                              }
                            }
                          }
                          intl5 = tmp(tmp2[13]).intl;
                          tmp78 = closure_7(tmp80, obj10);
                        }
                        const tags4 = role.tags;
                        let prop1;
                        if (tags4 != null) {
                          prop1 = tags4.subscription_listing_id;
                        }
                        cResult[56] = prop1;
                        cResult[57] = tmp6.sparkleIcon;
                        cResult[58] = tmp78;
                        tmp76 = tmp78;
                      }
                      class D {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            if (onMoveUp != null) {
                              tmp4();
                            }
                          } else if ("movedown" === actionName) {
                            if (onMoveDown != null) {
                              tmp();
                            }
                          }
                        }
                      }
                      const obj11 = { lineClamp: 1, style: tmp6.label, variant, color: "interactive-text-active", children: role.name };
                      const tmp74 = closure_7(tmp(onMoveUp[7]).Text, obj11);
                      cResult[53] = role.name;
                      cResult[54] = tmp6.label;
                      cResult[55] = tmp74;
                      tmp72 = tmp74;
                    }
                  }
                  const tmp69 = closure_7;
                  const tmp70 = closure_5;
                  if (isEveryoneRole) {
                    const obj12 = { style: tmp6.everyone, children: null };
                    class D {
                      constructor(nativeEvent) {
                        const actionName = nativeEvent.nativeEvent.actionName;
                        if ("moveup" === actionName) {
                          if (onMoveUp != null) {
                            tmp4();
                          }
                        } else if ("movedown" === actionName) {
                          if (onMoveDown != null) {
                            tmp();
                          }
                        }
                      }
                    }
                    obj13 = obj12;
                  } else {
                    obj13 = { children: tmp48 };
                  }
                  cResult[49] = isEveryoneRole;
                  cResult[50] = tmp48;
                  cResult[51] = tmp6.everyone;
                  cResult[52] = tmp69(tmp70, obj13);
                  const tmp69Result = tmp69(tmp70, obj13);
                }
                class D {
                  constructor(nativeEvent) {
                    const actionName = nativeEvent.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      if (onMoveUp != null) {
                        tmp4();
                      }
                    } else if ("movedown" === actionName) {
                      if (onMoveDown != null) {
                        tmp();
                      }
                    }
                  }
                }
                flag2 = false;
                if (!sorting) {
                  flag2 = false;
                  class D {
                    constructor(nativeEvent) {
                      const actionName = nativeEvent.nativeEvent.actionName;
                      if ("moveup" === actionName) {
                        if (onMoveUp != null) {
                          tmp4();
                        }
                      } else if ("movedown" === actionName) {
                        if (onMoveDown != null) {
                          tmp();
                        }
                      }
                    }
                  }
                }
              }
              class D {
                constructor(nativeEvent) {
                  const actionName = nativeEvent.nativeEvent.actionName;
                  if ("moveup" === actionName) {
                    if (onMoveUp != null) {
                      tmp4();
                    }
                  } else if ("movedown" === actionName) {
                    if (onMoveDown != null) {
                      tmp();
                    }
                  }
                }
              }
              cResult[16] = onMoveDown;
              cResult[17] = onMoveUp;
              cResult[18] = D;
              tmp23 = D;
            }
            if (null != onMoveUp) {
              let tmp16;
              const tmp15 = globalThis;
              const _Symbol = Symbol;
              class D {
                constructor(nativeEvent) {
                  const actionName = nativeEvent.nativeEvent.actionName;
                  if ("moveup" === actionName) {
                    if (onMoveUp != null) {
                      tmp4();
                    }
                  } else if ("movedown" === actionName) {
                    if (onMoveDown != null) {
                      tmp();
                    }
                  }
                }
              }
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj14 = { name: "moveup", label: tmp17(tmp(onMoveUp[13]).t.Yl8E4h) };
                let intl = tmp(tmp2[13]).intl;
                class D {
                  constructor(nativeEvent) {
                    const actionName = nativeEvent.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      if (onMoveUp != null) {
                        tmp4();
                      }
                    } else if ("movedown" === actionName) {
                      if (onMoveDown != null) {
                        tmp();
                      }
                    }
                  }
                }
                cResult[14] = obj14;
                tmp16 = obj14;
              } else {
                tmp16 = cResult[14];
              }
              arr.push(tmp16);
            }
            if (null != onMoveDown) {
              let tmp20;
              let tmp19 = globalThis;
              const _Symbol2 = Symbol;
              class D {
                constructor(nativeEvent) {
                  const actionName = nativeEvent.nativeEvent.actionName;
                  if ("moveup" === actionName) {
                    if (onMoveUp != null) {
                      tmp4();
                    }
                  } else if ("movedown" === actionName) {
                    if (onMoveDown != null) {
                      tmp();
                    }
                  }
                }
              }
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj15 = { name: "movedown", label: tmp21(tmp(onMoveUp[13]).t["5PbXSy"]) };
                let intl2 = tmp(tmp2[13]).intl;
                class D {
                  constructor(nativeEvent) {
                    const actionName = nativeEvent.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      if (onMoveUp != null) {
                        tmp4();
                      }
                    } else if ("movedown" === actionName) {
                      if (onMoveDown != null) {
                        tmp();
                      }
                    }
                  }
                }
                cResult[15] = obj15;
                tmp20 = obj15;
              } else {
                tmp20 = cResult[15];
              }
              arr.push(tmp20);
            }
            cResult[11] = onMoveDown;
            cResult[12] = onMoveUp;
            cResult[13] = arr;
            tmp14 = arr;
          }
          cResult[8] = onPress;
          cResult[9] = role;
          cResult[10] = tmp13;
        }
      }
    }
    function handleDeleteRow() {
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      const tmp = onPress(onMoveUp[12]);
      let obj = {
        title: intl.formatToPlainString(role(onMoveUp[13]).t.FiMFTZ, obj2),
        body: intl2.string(role(onMoveUp[13]).t.qALKny),
        cancelText: intl3.string(role(onMoveUp[13]).t.gm1Vej),
        confirmText: intl4.string(role(onMoveUp[13]).t.p89ACt),
        onConfirm() {
          return closure_0(...arguments);
        },
        confirmColor: onPress(onMoveUp[16]).Colors.RED
      };
      const show = tmp.show;
      intl = role(onMoveUp[13]).intl;
      obj2 = { name: role.name };
      intl2 = role(onMoveUp[13]).intl;
      intl3 = role(onMoveUp[13]).intl;
      intl4 = role(onMoveUp[13]).intl;
      role = onMoveDown(function*(arg0, value) {
        let obj3;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const tmp19 = closure_1_5;
                if (tmp19) {
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: obj3.putRoleConnectionsConfigurations(guildId, tmp.id, []), done: false };
                  obj3 = tmp(onMoveUp[14]);
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj2 = onPress(onMoveUp[15]);
            obj2.deleteRole(guildId, tmp.id);
            c2 = 3;
            return { value: "IconComponent", done: "+51" };
          } catch (tmp15) {
            c2 = 3;
            throw tmp15;
          }
        }
      });
      show(obj);
    }
    cResult[3] = guildId;
    cResult[4] = null === guild_connections;
    cResult[5] = role.id;
    cResult[6] = role.name;
    cResult[7] = handleDeleteRow;
    tmp11 = handleDeleteRow;
  }
  const obj16 = { guildId, roleId: role.id, size: 32 };
  cResult[0] = guildId;
  cResult[1] = role.id;
  cResult[2] = obj16;
  tmp7 = obj16;
}) : (function GuildSettingsRoleItem(guildId) {
  let TrashIcon;
  let flag;
  let flag2;
  let found;
  let handlePress;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isEveryoneRole;
  let isFirstRole;
  let isLastRole;
  let items2;
  let items4;
  let items6;
  let locked;
  let numMembers;
  let obj17;
  let obj20;
  let obj21;
  let obj6;
  let obj8;
  let obj9;
  let onLongPress;
  let onMoveUp;
  let sortHandlers;
  let sorting;
  let stringResult;
  let tmp36;
  let tmp = importDefault;
  const tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
  const tmp4 = closure_10();
  let role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  let obj = role(onMoveUp[11]);
  let obj2 = { guildId, roleId: role.id, size: 32 };
  const roleIconProps = obj.useRoleIconProps(obj2);
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  let closure_5 = tmp8;
  const items = [];
  if (null != onMoveUp) {
    let obj3 = { name: "moveup", label: intl.string(tmp5(tmp2[13]).t.Yl8E4h) };
    const push = items.push;
    intl = tmp5(tmp2[13]).intl;
    push(obj3);
  }
  if (null != onMoveDown) {
    let obj4 = { name: "movedown", label: intl2.string(tmp5(tmp2[13]).t["5PbXSy"]) };
    const push2 = items.push;
    intl2 = tmp5(tmp2[13]).intl;
    push2(obj4);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    let tmp17;
    let tmp18;
    let tmp21Result;
    let tmp24;
    if (!locked) {
      let obj5 = { accessibilityRole: "button", accessibilityLabel: intl3.formatToPlainString(tmp5(tmp2[13]).t.Zazao2, obj6), accessibilityHint: intl4.string(tmp5(tmp2[13]).t.BGMUFB), accessibilityActions: items, onAccessibilityAction: tmp11, delayLongPress: 100, activeOpacity: 0.8, hitSlop: tmp(tmp2[6]).space.PX_4, style: items2 };
      intl3 = tmp5(tmp2[13]).intl;
      obj6 = { name: role.name };
      intl4 = tmp5(tmp2[13]).intl;
      const merged = Object.assign(sortHandlers);
      items2 = [tmp4.dragHandlePressable, ];
      let style;
      if (sortHandlers != null) {
        style = sortHandlers.style;
      }
      items2[1] = style;
      flag = false;
      flag2 = true;
      tmp17 = obj5;
      const tmp16 = role.managed && null !== guild_connections;
      if (!tmp16) {
        let tmp19 = closure_7;
        const obj7 = {
          icon: closure_7(TrashIcon, obj8),
          accessibilityLabel: intl5.formatToPlainString(role(onMoveUp[13]).t.FiMFTZ, obj9),
          size: "sm",
          variant: "destructive",
          onPress: function handleDeleteRow() {
                  let closure_0;
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  let obj2;
                  const tmp = require("actions/AlertActionCreators");
                  let obj = {
                    title: intl.formatToPlainString(role(onMoveUp[13]).t.FiMFTZ, obj2),
                    body: intl2.string(role(onMoveUp[13]).t.qALKny),
                    cancelText: intl3.string(role(onMoveUp[13]).t.gm1Vej),
                    confirmText: intl4.string(role(onMoveUp[13]).t.p89ACt),
                    onConfirm() {
                      return closure_0(...arguments);
                    },
                    confirmColor: require("Alert").Colors.RED
                  };
                  const show = tmp.show;
                  intl = role(onMoveUp[13]).intl;
                  obj2 = { name: role.name };
                  intl2 = role(onMoveUp[13]).intl;
                  intl3 = role(onMoveUp[13]).intl;
                  intl4 = role(onMoveUp[13]).intl;
                  role = onMoveDown(function*(arg0, value) {
                    let obj3;
                    if (c2 === 2) {
                      c2 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        return { value: "IconComponent", done: "+51" };
                      }
                    } else {
                      try {
                        c2 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c2 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c2 = 3;
                            const obj5 = { value, done: true };
                            return obj5;
                          } else {
                            const tmp19 = closure_1_5;
                            if (tmp19) {
                              c1 = 1;
                              c2 = 1;
                              const obj6 = { value: obj3.putRoleConnectionsConfigurations(guildId, tmp.id, []), done: false };
                              obj3 = tmp(onMoveUp[14]);
                              return obj6;
                            }
                          }
                        } else if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        const obj2 = require("GuildActionCreators");
                        obj2.deleteRole(guildId, tmp.id);
                        c2 = 3;
                        return { value: "IconComponent", done: "+51" };
                      } catch (tmp15) {
                        c2 = 3;
                        throw tmp15;
                      }
                    }
                  });
                  show(obj);
                }
        };
        const IconButton = tmp5(tmp2[18]).IconButton;
        obj8 = { size: "xs", color: tmp(onMoveUp[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        TrashIcon = tmp5(tmp2[17]).TrashIcon;
        intl5 = tmp5(tmp2[13]).intl;
        obj9 = { name: role.name };
        flag = false;
        flag2 = true;
        tmp17 = obj5;
        tmp18 = closure_7(IconButton, obj7);
      }
    }
    if (null != roleIconProps) {
      const obj10 = {};
      const tmpResult = tmp(onMoveUp[19]);
      const merged1 = Object.assign(roleIconProps);
      tmp21Result = closure_7(tmpResult, obj10);
      tmp24 = closure_7;
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj11 = { size: 32, guildId, role };
        tmp21Result = closure_7(tmp(tmp2[20]), obj11);
        tmp24 = closure_7;
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj12 = { style: tmp4.container, children: items4 };
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const obj13 = {
                colors: found.map((item) => {
                              const obj = role(onMoveUp[23]);
                              return obj.int2hex(item);
                            }),
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                style: tmp4.gradient
              };
              const tmpResult2 = tmp(onMoveUp[21]);
              found = items3.filter(tmp5(tmp2[22]).isNotNullish);
              items4 = [closure_7(tmpResult2, obj13), ];
              const obj14 = { size: "md", style: tmp4.image };
              items4[1] = closure_7(role(onMoveUp[24]).ShieldUserIcon, obj14);
              tmp21Result = closure_8(closure_5, obj12);
              tmp24 = closure_7;
            }
          }
        }
        const items5 = [tmp4.container, ];
        const obj16 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items5[1] = obj16;
        const obj15 = { style: items5, children: closure_7(role(onMoveUp[24]).ShieldUserIcon, obj17) };
        obj17 = { size: "md", style: tmp4.image };
        tmp21Result = tmp21(closure_5, obj15);
        tmp24 = tmp21;
      }
    }
    const obj18 = { onLongPress, onPress: handlePress, disabled: sorting, draggable: flag2, dragHandlePressableProps: tmp17, trailing: tmp18, arrow: flag, icon: tmp24(closure_5, obj20), label: tmp36(closure_5, obj21), subLabel: stringResult, start: isFirstRole, end: isLastRole };
    handlePress = undefined;
    const TableRow = tmp5(tmp2[29]).TableRow;
    if (!sorting) {
      handlePress = function handlePress() {
        if (importDefault != null) {
          tmp(role);
        }
      };
    }
    if (sorting) {
      sorting = !flag2;
    }
    if (isEveryoneRole) {
      obj20 = { style: tmp4.everyone, children: tmp24(role(onMoveUp[25]).GroupIcon, {}) };
      const obj19 = { style: tmp4.everyone, children: tmp24(role(onMoveUp[25]).GroupIcon, {}) };
    } else {
      obj20 = { children: tmp21Result };
    }
    obj21 = { style: tmp4.row, children: items6 };
    const obj22 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
    items6 = [tmp24(tmp5(tmp2[7]).Text, obj22), , ];
    const tags2 = role.tags;
    let prop;
    tmp36 = closure_8;
    if (tags2 != null) {
      prop = tags2.subscription_listing_id;
    }
    let tmp24Result = null;
    if (null != prop) {
      const obj23 = { size: role(onMoveUp[26]).Icon.Sizes.REFRESH_SMALL_16, source: tmp(onMoveUp[27]), "aria-label": intl6.string(role(onMoveUp[13]).t.a2Ak8b), style: tmp4.sparkleIcon };
      const Icon = tmp5(tmp2[26]).Icon;
      intl6 = tmp5(tmp2[13]).intl;
      tmp24Result = tmp24(Icon, obj23);
    }
    items6[1] = tmp24Result;
    let tmp24Result2 = null;
    if (locked) {
      tmp24Result2 = tmp24(tmp5(tmp2[28]).LockIcon, { size: "xxs", color: "icon-subtle" });
    }
    items6[2] = tmp24Result2;
    const intl7 = tmp5(tmp2[13]).intl;
    if (isEveryoneRole) {
      stringResult = intl7.string(tmp5(tmp2[13]).t["72gF3G"]);
    } else {
      const formatToPlainString = intl7.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj24 = { count: "" + numMembers };
      const AWmdd9 = tmp5(tmp2[13]).t.AWmdd9;
      stringResult = formatToPlainString(AWmdd9, obj24);
    }
    return tmp24(TableRow, obj18);
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default memoResult;
