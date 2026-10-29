// Module ID: 13242
// Function ID: 13243
// Name: CheckpointShareCardStats
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 8129, 5707, 13241, 5271, 1898, 1415, 11740, 8601, 9712, 9413, 9682, 2]

// Module 13242 (CheckpointShareCardStats)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import react_nativeDefault from "react-native" /* 1898 */;
import FastImageDefault from "FastImage" /* 5707 */;
import ChatIcon from "ChatIcon" /* 8601 */;
import ReactionIcon from "ReactionIcon" /* 9413 */;
import GameControllerIcon from "GameControllerIcon" /* 9682 */;
import ServerIcon from "ServerIcon" /* 9712 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11740 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const Text_Text = tmp(5271);
const UnknownGameIcon = tmp(8129);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { statRow: obj2, statText: obj3, statImage: obj4, guildAcronym: obj5, unicodeEmoji: { fontSize: 9, lineHeight: 11 } };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, color: nativeDefault.colors.BLACK };
obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatIcon(arg0) {
  let Icon;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  ({ Icon, size } = arg0);
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp3 = size1;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Icon) {
    let tmp4;
    if (cResult[3] === tmp3) {
      tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj2 = { size: "custom", color: nativeDefault.colors.BLACK, style: tmp3 };
  const tmp5 = hasOwnProperty(Icon, obj2);
  cResult[2] = Icon;
  cResult[3] = tmp3;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : (function StatIcon(size) {
  size = size.size;
  const obj = { size: "custom", color: nativeDefault.colors.BLACK, style: { width: size, height: size } };
  return hasOwnProperty(size.Icon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatImage(arg0) {
  let tmp8;
  let uri;
  const obj = react2;
  const cResult = obj.c(12);
  ({ uri, size } = arg0);
  const tmp4 = closure_7();
  if (null == uri) {
    let tmp12;
    if (cResult[0] !== size) {
      const obj2 = { Icon: UnknownGameIcon.UnknownGameIcon, size };
      const tmp15 = hasOwnProperty(closure_8, obj2);
      cResult[0] = size;
      cResult[1] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[1];
    }
    tmp8 = tmp12;
  } else {
    let tmp5;
    let tmp6;
    if (cResult[2] !== uri) {
      const obj3 = { uri };
      cResult[2] = uri;
      cResult[3] = obj3;
      tmp5 = obj3;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] !== size) {
      const size1 = { width: size, height: size };
      cResult[4] = size;
      cResult[5] = size1;
      tmp6 = size1;
    } else {
      tmp6 = cResult[5];
    }
    if (cResult[6] === tmp4.statImage) {
      let tmp7;
      if (cResult[7] === tmp6) {
        tmp7 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp7) {
          tmp8 = cResult[11];
        }
      }
      const obj4 = { source: tmp5, style: tmp7 };
      const tmp11 = hasOwnProperty(FastImageDefault, obj4);
      cResult[9] = tmp5;
      cResult[10] = tmp7;
      cResult[11] = tmp11;
      tmp8 = tmp11;
    }
    const items = [tmp4.statImage, tmp6];
    cResult[6] = tmp4.statImage;
    cResult[7] = tmp6;
    cResult[8] = items;
    tmp7 = items;
  }
  return tmp8;
}) : (function StatImage(arg0) {
  let items;
  let obj3;
  let tmp5;
  let uri;
  ({ uri, size } = arg0);
  if (null == uri) {
    const obj2 = { Icon: UnknownGameIcon.UnknownGameIcon, size };
    tmp5 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj = { source: obj3, style: items };
    items = [tmp.statImage, ];
    const size1 = { width: size, height: size };
    obj3 = { uri };
    items[1] = size1;
    tmp5 = hasOwnProperty(FastImageDefault, obj);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatRow(arg0) {
  let icon;
  let items;
  let layout;
  let rowStyle;
  let stat;
  const obj = react2;
  const cResult = obj.c(14);
  ({ icon, stat, layout, rowStyle } = arg0);
  const tmp4 = closure_7();
  const tertiaryBackgroundColor = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).tertiaryBackgroundColor;
  let tmp5 = null;
  if (null != stat) {
    let tmp6;
    if (cResult[0] !== tertiaryBackgroundColor) {
      const obj2 = { backgroundColor: tertiaryBackgroundColor };
      cResult[0] = tertiaryBackgroundColor;
      cResult[1] = obj2;
      tmp6 = obj2;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === rowStyle) {
      if (cResult[3] === tmp4.statRow) {
        let tmp7;
        if (cResult[4] === tmp6) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === layout.textVariant) {
          if (cResult[7] === stat.text) {
            let tmp8;
            if (cResult[8] === tmp4.statText) {
              tmp8 = cResult[9];
            }
            if (cResult[10] === icon) {
              if (cResult[11] === tmp7) {
                let tmp11;
                if (cResult[12] === tmp8) {
                  tmp11 = cResult[13];
                }
                tmp5 = tmp11;
              }
            }
            const obj3 = { style: tmp7, children: items };
            items = [icon, tmp8];
            const tmp14 = metroRequire(View, obj3);
            cResult[10] = icon;
            cResult[11] = tmp7;
            cResult[12] = tmp8;
            cResult[13] = tmp14;
            tmp11 = tmp14;
          }
        }
        const obj4 = { variant: layout.textVariant, style: tmp4.statText, lineClamp: 1, allowFontScaling: false, children: stat.text };
        const tmp10 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[6] = layout.textVariant;
        cResult[7] = stat.text;
        cResult[8] = tmp4.statText;
        cResult[9] = tmp10;
        tmp8 = tmp10;
      }
    }
    const items1 = [tmp4.statRow, rowStyle, tmp6];
    cResult[2] = rowStyle;
    cResult[3] = tmp4.statRow;
    cResult[4] = tmp6;
    cResult[5] = items1;
    tmp7 = items1;
  }
  return tmp5;
}) : (function StatRow(stat) {
  let icon;
  let items;
  let items1;
  let layout;
  let rowStyle;
  stat = stat.stat;
  ({ icon, layout, rowStyle } = stat);
  const tmp = closure_7();
  let tmp5 = null;
  if (null != stat) {
    const obj = { style: items, children: items1 };
    items = [tmp.statRow, rowStyle, ];
    const obj2 = { backgroundColor: tmp4 };
    items[2] = obj2;
    items1 = [icon, ];
    const obj3 = { variant: layout.textVariant, style: tmp.statText, lineClamp: 1, allowFontScaling: false, children: stat.text };
    items1[1] = hasOwnProperty(Text_Text.Text, obj3);
    tmp5 = metroRequire(View, obj);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardStats(arg0) {
  let items;
  let items1;
  let layout;
  let obj24;
  let obj27;
  let rowStyle;
  let stats;
  let style;
  let tmp16;
  let tmp16Result4;
  let tmp17;
  let tmp8Result4;
  let topEmoji;
  let topGame;
  let topGuild;
  const obj = react2;
  const cResult = obj.c(77);
  ({ stats, layout, style, rowStyle } = arg0);
  const tmp4 = closure_7();
  const iconSize = layout.iconSize;
  if (cResult[0] === iconSize) {
    if (cResult[1] === stats) {
      let tmp5;
      let tmp6;
      let tmp7;
      if (cResult[2] === tmp4) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
        tmp7 = cResult[5];
      }
      if (cResult[19] === layout) {
        let tmp31;
        let tmp32;
        if (cResult[20] === rowStyle) {
          tmp31 = cResult[21];
        }
        if (cResult[22] !== iconSize) {
          const obj2 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
          const tmp35 = hasOwnProperty(closure_8, obj2);
          cResult[22] = iconSize;
          cResult[23] = tmp35;
          tmp32 = tmp35;
        } else {
          tmp32 = cResult[23];
        }
        if (cResult[24] === tmp31) {
          if (cResult[25] === stats.voice) {
            let tmp36;
            let tmp43;
            if (cResult[26] === tmp32) {
              tmp36 = cResult[27];
            }
            if (cResult[28] !== iconSize) {
              const obj4 = { Icon: ChatIcon.ChatIcon, size: iconSize };
              const tmp46 = hasOwnProperty(closure_8, obj4);
              cResult[28] = iconSize;
              cResult[29] = tmp46;
              tmp43 = tmp46;
            } else {
              tmp43 = cResult[29];
            }
            if (cResult[30] === tmp31) {
              if (cResult[31] === stats.messages) {
                let tmp47;
                let tmp54;
                if (cResult[32] === tmp43) {
                  tmp47 = cResult[33];
                }
                if (cResult[34] !== iconSize) {
                  const obj6 = { Icon: ServerIcon.ServerIcon, size: iconSize };
                  const tmp57 = hasOwnProperty(closure_8, obj6);
                  cResult[34] = iconSize;
                  cResult[35] = tmp57;
                  tmp54 = tmp57;
                } else {
                  tmp54 = cResult[35];
                }
                if (cResult[36] === tmp31) {
                  if (cResult[37] === stats.topGuildDaysInteracted) {
                    let tmp58;
                    if (cResult[38] === tmp54) {
                      tmp58 = cResult[39];
                    }
                    if (cResult[40] === tmp7) {
                      if (cResult[41] === tmp31) {
                        let tmp65;
                        let tmp72;
                        if (cResult[42] === stats.topGuildName) {
                          tmp65 = cResult[43];
                        }
                        if (cResult[44] !== iconSize) {
                          const obj7 = { Icon: ReactionIcon.ReactionIcon, size: iconSize };
                          const tmp75 = hasOwnProperty(closure_8, obj7);
                          cResult[44] = iconSize;
                          cResult[45] = tmp75;
                          tmp72 = tmp75;
                        } else {
                          tmp72 = cResult[45];
                        }
                        if (cResult[46] === tmp31) {
                          if (cResult[47] === stats.reactions) {
                            let tmp76;
                            if (cResult[48] === tmp72) {
                              tmp76 = cResult[49];
                            }
                            if (cResult[50] === tmp5) {
                              if (cResult[51] === tmp31) {
                                let tmp83;
                                let tmp90;
                                if (cResult[52] === stats.topEmojiName) {
                                  tmp83 = cResult[53];
                                }
                                if (cResult[54] !== iconSize) {
                                  const obj8 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
                                  const tmp93 = hasOwnProperty(closure_8, obj8);
                                  cResult[54] = iconSize;
                                  cResult[55] = tmp93;
                                  tmp90 = tmp93;
                                } else {
                                  tmp90 = cResult[55];
                                }
                                if (cResult[56] === tmp31) {
                                  if (cResult[57] === stats.daysPlayed) {
                                    let tmp94;
                                    if (cResult[58] === tmp90) {
                                      tmp94 = cResult[59];
                                    }
                                    if (cResult[60] === tmp6) {
                                      let tmp101;
                                      if (cResult[61] === iconSize) {
                                        tmp101 = cResult[62];
                                      }
                                      if (cResult[63] === tmp31) {
                                        if (cResult[64] === stats.topGameName) {
                                          let tmp105;
                                          if (cResult[65] === tmp101) {
                                            tmp105 = cResult[66];
                                          }
                                          if (cResult[67] === style) {
                                            if (cResult[68] === tmp76) {
                                              if (cResult[69] === tmp83) {
                                                if (cResult[70] === tmp94) {
                                                  if (cResult[71] === tmp105) {
                                                    if (cResult[72] === tmp36) {
                                                      if (cResult[73] === tmp47) {
                                                        if (cResult[74] === tmp58) {
                                                          let tmp112;
                                                          if (cResult[75] === tmp65) {
                                                            tmp112 = cResult[76];
                                                          }
                                                          return tmp112;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj9 = { style, children: items };
                                          items = [tmp36, tmp47, tmp58, tmp65, tmp76, tmp83, tmp94, tmp105];
                                          const tmp115 = metroRequire(View, obj9);
                                          cResult[67] = style;
                                          cResult[68] = tmp76;
                                          cResult[69] = tmp83;
                                          cResult[70] = tmp94;
                                          cResult[71] = tmp105;
                                          cResult[72] = tmp36;
                                          cResult[73] = tmp47;
                                          cResult[74] = tmp58;
                                          cResult[75] = tmp65;
                                          cResult[76] = tmp115;
                                          tmp112 = tmp115;
                                        }
                                      }
                                      const obj10 = { icon: tmp101, stat: stats.topGameName };
                                      const merged = Object.assign(tmp31);
                                      const tmp111 = hasOwnProperty(closure_10, obj10);
                                      cResult[63] = tmp31;
                                      cResult[64] = stats.topGameName;
                                      cResult[65] = tmp101;
                                      cResult[66] = tmp111;
                                      tmp105 = tmp111;
                                    }
                                    const obj11 = { uri: tmp6, size: iconSize };
                                    const tmp104 = hasOwnProperty(closure_9, obj11);
                                    cResult[60] = tmp6;
                                    cResult[61] = iconSize;
                                    cResult[62] = tmp104;
                                    tmp101 = tmp104;
                                  }
                                }
                                const obj12 = { icon: tmp90, stat: stats.daysPlayed };
                                const merged1 = Object.assign(tmp31);
                                const tmp100 = hasOwnProperty(closure_10, obj12);
                                cResult[56] = tmp31;
                                cResult[57] = stats.daysPlayed;
                                cResult[58] = tmp90;
                                cResult[59] = tmp100;
                                tmp94 = tmp100;
                              }
                            }
                            const obj13 = { icon: tmp5, stat: stats.topEmojiName };
                            const merged2 = Object.assign(tmp31);
                            const tmp89 = hasOwnProperty(closure_10, obj13);
                            cResult[50] = tmp5;
                            cResult[51] = tmp31;
                            cResult[52] = stats.topEmojiName;
                            cResult[53] = tmp89;
                            tmp83 = tmp89;
                          }
                        }
                        const obj14 = { icon: tmp72, stat: stats.reactions };
                        const merged3 = Object.assign(tmp31);
                        const tmp82 = hasOwnProperty(closure_10, obj14);
                        cResult[46] = tmp31;
                        cResult[47] = stats.reactions;
                        cResult[48] = tmp72;
                        cResult[49] = tmp82;
                        tmp76 = tmp82;
                      }
                    }
                    const obj15 = { icon: tmp7, stat: stats.topGuildName };
                    const merged4 = Object.assign(tmp31);
                    const tmp71 = hasOwnProperty(closure_10, obj15);
                    cResult[40] = tmp7;
                    cResult[41] = tmp31;
                    cResult[42] = stats.topGuildName;
                    cResult[43] = tmp71;
                    tmp65 = tmp71;
                  }
                }
                const obj16 = { icon: tmp54, stat: stats.topGuildDaysInteracted };
                const merged5 = Object.assign(tmp31);
                const tmp64 = hasOwnProperty(closure_10, obj16);
                cResult[36] = tmp31;
                cResult[37] = stats.topGuildDaysInteracted;
                cResult[38] = tmp54;
                cResult[39] = tmp64;
                tmp58 = tmp64;
              }
            }
            const obj17 = { icon: tmp43, stat: stats.messages };
            const merged6 = Object.assign(tmp31);
            const tmp53 = hasOwnProperty(closure_10, obj17);
            cResult[30] = tmp31;
            cResult[31] = stats.messages;
            cResult[32] = tmp43;
            cResult[33] = tmp53;
            tmp47 = tmp53;
          }
        }
        const obj18 = { icon: tmp32, stat: stats.voice };
        const merged7 = Object.assign(tmp31);
        const tmp42 = hasOwnProperty(closure_10, obj18);
        cResult[24] = tmp31;
        cResult[25] = stats.voice;
        cResult[26] = tmp32;
        cResult[27] = tmp42;
        tmp36 = tmp42;
      }
      const obj19 = { layout, rowStyle };
      cResult[19] = layout;
      cResult[20] = rowStyle;
      cResult[21] = obj19;
      tmp31 = obj19;
    }
  }
  const rounded = Math.round(iconSize * react_nativeDefault());
  ({ topGuild, topEmoji, topGame } = stats);
  let guildIcon;
  const topGuildAcronymCharacter = stats.topGuildAcronymCharacter;
  if (topGuild != null) {
    guildIcon = topGuild.guildIcon;
  }
  let guildIconURL;
  if (null != guildIcon) {
    const obj20 = { id: null, icon: null, size: rounded };
    ({ guildId: obj3.id, guildIcon: obj3.icon } = topGuild);
    const tmp8Result = AvatarUtilsDefault;
    guildIconURL = tmp8Result.getGuildIconURL(obj20);
  }
  let applicationImageId;
  if (topGame != null) {
    applicationImageId = topGame.applicationImageId;
  }
  let applicationIconURL;
  if (null != applicationImageId) {
    const obj21 = { id: null, icon: null, size: rounded };
    ({ applicationId: obj5.id, applicationImageId: obj5.icon } = topGame);
    const tmp8Result3 = AvatarUtilsDefault;
    applicationIconURL = tmp8Result3.getApplicationIconURL(obj21);
  }
  if (null != guildIconURL) {
    const obj22 = { uri: guildIconURL, size: iconSize };
    tmp17 = hasOwnProperty(closure_9, obj22);
    tmp16 = hasOwnProperty;
  } else {
    const obj23 = { style: items1, children: hasOwnProperty(Text_Text.Text, obj24) };
    items1 = [, , ];
    ({ statImage: arr[0], guildAcronym: arr[1] } = tmp4);
    size = { width: iconSize, height: iconSize };
    items1[2] = size;
    tmp16 = hasOwnProperty;
    obj24 = { variant: "text-xxs/normal", color: "text-overlay-dark", allowFontScaling: false, children: topGuildAcronymCharacter };
    tmp17 = hasOwnProperty(View, obj23);
  }
  if (null == topEmoji) {
    let tmp28;
    if (cResult[6] !== iconSize) {
      const obj25 = { Icon: UnknownGameIcon.UnknownGameIcon, size: iconSize };
      const tmp16Result = tmp16(closure_8, obj25);
      cResult[6] = iconSize;
      cResult[7] = tmp16Result;
      tmp28 = tmp16Result;
    } else {
      tmp28 = cResult[7];
    }
    tmp16Result4 = tmp28;
  } else if (null != topEmoji.emojiId) {
    const obj26 = { uri: tmp8Result4.getEmojiURL(obj27), size: iconSize };
    obj27 = { id: topEmoji.emojiId, animated: false, size: rounded };
    tmp8Result4 = AvatarUtilsDefault;
    tmp16Result4 = tmp16(closure_9, obj26);
  } else {
    let tmp20;
    if (cResult[8] !== iconSize) {
      const size1 = { width: iconSize, height: iconSize };
      cResult[8] = iconSize;
      cResult[9] = size1;
      tmp20 = size1;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp4.statImage) {
      let tmp21;
      if (cResult[11] === tmp20) {
        tmp21 = cResult[12];
      }
      if (cResult[13] === tmp4.unicodeEmoji) {
        let tmp22;
        if (cResult[14] === topEmoji.emojiName) {
          tmp22 = cResult[15];
        }
        if (cResult[16] === tmp21) {
          if (cResult[17] === tmp22) {
            tmp16Result4 = cResult[18];
          }
        }
        const obj28 = { style: tmp21, children: tmp22 };
        const tmp16Result5 = tmp16(View, obj28);
        cResult[16] = tmp21;
        cResult[17] = tmp22;
        cResult[18] = tmp16Result5;
        tmp16Result4 = tmp16Result5;
      }
      const obj29 = { variant: "text-xs/semibold", style: tmp4.unicodeEmoji, allowFontScaling: false, children: topEmoji.emojiName };
      const tmp16Result6 = tmp16(Text_Text.Text, obj29);
      cResult[13] = tmp4.unicodeEmoji;
      cResult[14] = topEmoji.emojiName;
      cResult[15] = tmp16Result6;
      tmp22 = tmp16Result6;
    }
    const items2 = [tmp4.statImage, tmp20];
    cResult[10] = tmp4.statImage;
    cResult[11] = tmp20;
    cResult[12] = items2;
    tmp21 = items2;
  }
  cResult[0] = iconSize;
  cResult[1] = stats;
  cResult[2] = tmp4;
  cResult[3] = tmp16Result4;
  cResult[4] = applicationIconURL;
  cResult[5] = tmp17;
  tmp5 = tmp16Result4;
  tmp7 = tmp17;
  tmp6 = applicationIconURL;
}) : (function CheckpointShareCardStats(arg0) {
  let items;
  let items1;
  let items2;
  let layout;
  let obj10;
  let obj12;
  let obj16;
  let obj18;
  let obj20;
  let obj23;
  let obj26;
  let obj7;
  let rowStyle;
  let stats;
  let style;
  let tmp11;
  let tmp12;
  let tmp12Result;
  let tmp2Result4;
  let topEmoji;
  let topGame;
  let topGuild;
  ({ stats, layout } = arg0);
  ({ style, rowStyle } = arg0);
  const tmp = closure_7();
  const iconSize = layout.iconSize;
  const rounded = Math.round(iconSize * react_nativeDefault());
  ({ topGuild, topEmoji, topGame } = stats);
  let guildIcon;
  const topGuildAcronymCharacter = stats.topGuildAcronymCharacter;
  if (topGuild != null) {
    guildIcon = topGuild.guildIcon;
  }
  let guildIconURL;
  if (null != guildIcon) {
    const obj = { id: null, icon: null, size: rounded };
    ({ guildId: obj2.id, guildIcon: obj2.icon } = topGuild);
    const tmp2Result = AvatarUtilsDefault;
    guildIconURL = tmp2Result.getGuildIconURL(obj);
  }
  let applicationImageId;
  if (topGame != null) {
    applicationImageId = topGame.applicationImageId;
  }
  let applicationIconURL;
  if (null != applicationImageId) {
    const obj3 = { id: null, icon: null, size: rounded };
    ({ applicationId: obj4.id, applicationImageId: obj4.icon } = topGame);
    const tmp2Result3 = AvatarUtilsDefault;
    applicationIconURL = tmp2Result3.getApplicationIconURL(obj3);
  }
  if (null != guildIconURL) {
    const obj5 = { uri: guildIconURL, size: iconSize };
    tmp11 = hasOwnProperty(closure_9, obj5);
    tmp12 = hasOwnProperty;
  } else {
    const obj6 = { style: items, children: hasOwnProperty(Text_Text.Text, obj7) };
    items = [, , ];
    ({ statImage: arr3[0], guildAcronym: arr3[1] } = tmp);
    size = { width: iconSize, height: iconSize };
    items[2] = size;
    obj7 = { variant: "text-xxs/normal", color: "text-overlay-dark", allowFontScaling: false, children: topGuildAcronymCharacter };
    tmp11 = hasOwnProperty(View, obj6);
    tmp12 = hasOwnProperty;
  }
  if (null == topEmoji) {
    const obj8 = { Icon: UnknownGameIcon.UnknownGameIcon, size: iconSize };
    tmp12Result = tmp12(closure_8, obj8);
  } else if (null != topEmoji.emojiId) {
    const obj9 = { uri: tmp2Result4.getEmojiURL(obj10), size: iconSize };
    obj10 = { id: topEmoji.emojiId, animated: false, size: rounded };
    tmp2Result4 = AvatarUtilsDefault;
    tmp12Result = tmp12(closure_9, obj9);
  } else {
    const obj11 = { style: items1, children: tmp12(Text_Text.Text, obj12) };
    items1 = [tmp.statImage, ];
    const size1 = { width: iconSize, height: iconSize };
    items1[1] = size1;
    obj12 = { variant: "text-xs/semibold", style: tmp.unicodeEmoji, allowFontScaling: false, children: topEmoji.emojiName };
    tmp12Result = tmp12(View, obj11);
  }
  const obj13 = { layout, rowStyle };
  const obj14 = { style, children: items2 };
  const obj15 = { icon: tmp12(closure_8, obj16), stat: stats.voice };
  obj16 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
  const merged = Object.assign(obj13);
  items2 = [tmp12(closure_10, obj15), , , , , , , ];
  const obj17 = { icon: tmp12(closure_8, obj18), stat: stats.messages };
  obj18 = { Icon: ChatIcon.ChatIcon, size: iconSize };
  const merged1 = Object.assign(obj13);
  items2[1] = tmp12(closure_10, obj17);
  const obj19 = { icon: tmp12(closure_8, obj20), stat: stats.topGuildDaysInteracted };
  obj20 = { Icon: ServerIcon.ServerIcon, size: iconSize };
  const merged2 = Object.assign(obj13);
  items2[2] = tmp12(closure_10, obj19);
  const obj21 = { icon: tmp11, stat: stats.topGuildName };
  const merged3 = Object.assign(obj13);
  items2[3] = tmp12(closure_10, obj21);
  const obj22 = { icon: tmp12(closure_8, obj23), stat: stats.reactions };
  obj23 = { Icon: ReactionIcon.ReactionIcon, size: iconSize };
  const merged4 = Object.assign(obj13);
  items2[4] = tmp12(closure_10, obj22);
  const obj24 = { icon: tmp12Result, stat: stats.topEmojiName };
  const merged5 = Object.assign(obj13);
  items2[5] = tmp12(closure_10, obj24);
  const obj25 = { icon: tmp12(closure_8, obj26), stat: stats.daysPlayed };
  obj26 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
  const merged6 = Object.assign(obj13);
  items2[6] = tmp12(closure_10, obj25);
  const obj27 = { icon: tmp12(closure_9, { uri: applicationIconURL, size: iconSize }), stat: stats.topGameName };
  const merged7 = Object.assign(obj13);
  items2[7] = tmp12(closure_10, obj27);
  return metroRequire(View, obj14);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardStats.tsx");

export default tmp4;
