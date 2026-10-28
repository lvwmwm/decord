// Module ID: 12411
// Function ID: 12412
// Name: ConjureVoiceChannelPinCard
// Dependencies: [19, 17, 4878, 4946, 1389, 21, 5004, 587, 558, 576, 12412, 5270, 1125, 3863, 12226, 8539, 5246, 12243, 7023, 6939, 5640, 6947, 5280, 2]

// Module 12411 (ConjureVoiceChannelPinCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import Text_Text from "Text/Text" /* 5270 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12226 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12243 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 12412 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4878 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = "conjure-voice-channel-pin";
let createStyles = createStyles_mod;
let obj = { card: obj2, actions: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureVoiceChannelPinCard(projectId) {
  let first;
  let intl;
  let items;
  let items1;
  let outcome;
  let pinnedName;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(14);
  projectId = projectId.projectId;
  const tmp4 = closure_11();
  const obj2 = useConjureVoiceChannelPin;
  const conjureVoiceChannelPinOutcome = obj2.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(_modDef3863.UGAfl9) };
    const Text = tmp(5270).Text;
    intl = tmp(1125).intl;
    const tmp9 = metroImportDefault(Text, obj3);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (null != outcome) {
    let formatToPlainStringResult;
    if (cResult[1] === outcome.status) {
      let tmp18;
      let tmp22;
      if (cResult[2] === pinnedName) {
        tmp18 = cResult[3];
      }
      if (cResult[4] !== tmp18) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp18 };
        const tmp24 = metroImportDefault(Text_Text.Text, obj4);
        cResult[4] = tmp18;
        cResult[5] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[5];
      }
      if (cResult[6] === tmp4.card) {
        let tmp25;
        if (cResult[7] === tmp22) {
          tmp25 = cResult[8];
        }
        tmp14 = tmp25;
      }
      const obj5 = { style: tmp4.card, children: items };
      items = [first, tmp22];
      const tmp28 = metroImportAll(ConjureNativeCardSurfaceDefault, obj5);
      cResult[6] = tmp4.card;
      cResult[7] = tmp22;
      cResult[8] = tmp28;
      tmp25 = tmp28;
    }
    if ("pinned" === outcome.status) {
      const intl3 = tmp(1125).intl;
      const formatToPlainString = intl3.formatToPlainString;
      let str2 = pinnedName;
      const gKe6Lw = _modDef3863.gKe6Lw;
      if (pinnedName == null) {
        str2 = "";
      }
      const obj6 = { channelName: str2 };
      formatToPlainStringResult = formatToPlainString(gKe6Lw, obj6);
    } else {
      const intl2 = tmp(1125).intl;
      formatToPlainStringResult = intl2.string(_modDef3863["+kpQ3v"]);
    }
    cResult[1] = outcome.status;
    cResult[2] = pinnedName;
    cResult[3] = formatToPlainStringResult;
    tmp18 = formatToPlainStringResult;
  } else {
    let tmp10;
    if (cResult[9] !== projectId) {
      const obj7 = { projectId };
      const tmp13 = metroImportDefault(closure_12, obj7);
      cResult[9] = projectId;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[10];
    }
    if (cResult[11] === tmp4.card) {
      if (cResult[12] === tmp10) {
        tmp14 = cResult[13];
      }
    }
    const obj8 = { style: tmp4.card, children: items1 };
    items1 = [first, tmp10];
    const tmp17 = metroImportAll(ConjureNativeCardSurfaceDefault, obj8);
    cResult[11] = tmp4.card;
    cResult[12] = tmp10;
    cResult[13] = tmp17;
    tmp14 = tmp17;
  }
  return tmp14;
}) : (function ConjureVoiceChannelPinCard(projectId) {
  let intl;
  let items;
  let items1;
  let obj6;
  let outcome;
  let pinnedName;
  projectId = projectId.projectId;
  const tmp = closure_11();
  const obj = useConjureVoiceChannelPin;
  const conjureVoiceChannelPinOutcome = obj.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(_modDef3863.UGAfl9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  const tmp7 = metroImportDefault(Text, obj2);
  const tmp8 = metroImportAll;
  const tmp9 = ConjureNativeCardSurfaceDefault;
  if (null != outcome) {
    let formatToPlainStringResult;
    const obj3 = { style: tmp.card, children: items };
    items = [tmp7, ];
    const Text2 = tmp2(5270).Text;
    if ("pinned" === outcome.status) {
      const intl3 = tmp2(1125).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const gKe6Lw = tmp6(3863).gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      formatToPlainStringResult = formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl2 = tmp2(1125).intl;
      formatToPlainStringResult = intl2.string(tmp6(3863)["+kpQ3v"]);
    }
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: formatToPlainStringResult };
    items[1] = metroImportDefault(Text2, obj5);
    obj6 = obj3;
  } else {
    obj6 = { style: tmp.card, children: items1 };
    items1 = [tmp7, ];
    const obj7 = { projectId };
    items1[1] = metroImportDefault(closure_12, obj7);
  }
  return tmp8(tmp9, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureVoiceChannelPinForm(projectId) {
  let TableRow;
  let channels;
  let failed;
  let guild;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl6;
  let items;
  let items1;
  let key;
  let obj10;
  let pin;
  let pinning;
  let selected;
  let skip;
  let tmp21Result;
  const tmp = guild;
  let tmp2 = selected;
  let obj = guild(selected[9]);
  const cResult = obj.c(35);
  projectId = projectId.projectId;
  const tmp4 = closure_11();
  let obj2 = guild(selected[10]);
  const conjureVoiceChannelPinForm = obj2.useConjureVoiceChannelPinForm(projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  selected = conjureVoiceChannelPinForm.selected;
  const setPicked = conjureVoiceChannelPinForm.setPicked;
  ({ pinning, failed, pin, skip } = conjureVoiceChannelPinForm);
  if (cResult[0] === guildId) {
    let tmp7;
    if (cResult[1] === selected) {
      guild = cResult[2];
      tmp7 = cResult[3];
    }
    if (cResult[4] === channels) {
      if (cResult[5] === tmp6) {
        if (cResult[6] === selected) {
          let tmp11;
          let tmp13;
          let tmp21Result2;
          if (cResult[7] === setPicked) {
            tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = { variant: "text-sm/normal", color: "text-default", children: intl.string(channels(tmp2[13])["1vVBAw"]) };
            const Text = tmp(tmp2[11]).Text;
            intl = tmp(tmp2[12]).intl;
            const tmp16 = closure_7(Text, obj3);
            cResult[9] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[9];
          }
          if (cResult[10] === channels.length) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === pinning) {
                if (cResult[13] === selected) {
                  let tmp17;
                  let tmp28;
                  let tmp32;
                  if (cResult[14] === tmp7) {
                    tmp17 = cResult[15];
                  }
                  if (cResult[16] !== failed) {
                    let tmp29 = null;
                    if (failed) {
                      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl4.string(channels(tmp2[13]).d7EeAm) };
                      const Text3 = tmp(tmp2[11]).Text;
                      intl4 = tmp(tmp2[12]).intl;
                      tmp29 = closure_7(Text3, obj4);
                    }
                    cResult[16] = failed;
                    cResult[17] = tmp29;
                    tmp28 = tmp29;
                  } else {
                    tmp28 = cResult[17];
                  }
                  const _Symbol2 = Symbol;
                  const actions = tmp4.actions;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(tmp2[12]).intl;
                    const stringResult = intl5.string(channels(tmp2[13]).Iw0l8o);
                    cResult[18] = stringResult;
                    tmp32 = stringResult;
                  } else {
                    tmp32 = cResult[18];
                  }
                  if (cResult[19] === pinning) {
                    let tmp35;
                    if (cResult[20] === skip) {
                      tmp35 = cResult[21];
                    }
                    if (cResult[22] === channels.length) {
                      if (cResult[23] === pin) {
                        if (cResult[24] === pinning) {
                          let tmp38;
                          if (cResult[25] === selected) {
                            tmp38 = cResult[26];
                          }
                          if (cResult[27] === tmp4.actions) {
                            if (cResult[28] === tmp35) {
                              let tmp43;
                              if (cResult[29] === tmp38) {
                                tmp43 = cResult[30];
                              }
                              if (cResult[31] === tmp43) {
                                if (cResult[32] === tmp17) {
                                  let tmp47;
                                  if (cResult[33] === tmp28) {
                                    tmp47 = cResult[34];
                                  }
                                  return tmp47;
                                }
                              }
                              const obj5 = { children: items };
                              items = [tmp13, tmp17, tmp28, tmp43];
                              const tmp50 = closure_8(closure_9, obj5);
                              cResult[31] = tmp43;
                              cResult[32] = tmp17;
                              cResult[33] = tmp28;
                              cResult[34] = tmp50;
                              tmp47 = tmp50;
                            }
                          }
                          const obj6 = { style: actions, children: items1 };
                          items1 = [tmp35, tmp38];
                          const tmp46 = closure_8(setPicked, obj6);
                          cResult[27] = tmp4.actions;
                          cResult[28] = tmp35;
                          cResult[29] = tmp38;
                          cResult[30] = tmp46;
                          tmp43 = tmp46;
                        }
                      }
                    }
                    let tmp40 = null;
                    if (channels.length > 0) {
                      const obj7 = { variant: "primary", size: "sm", text: intl6.string(channels(tmp2[13]).FYI3qr), disabled: null == selected, loading: pinning, onPress: pin };
                      const Button = tmp(tmp2[22]).Button;
                      intl6 = tmp(tmp2[12]).intl;
                      tmp40 = closure_7(Button, obj7);
                    }
                    cResult[22] = channels.length;
                    cResult[23] = pin;
                    cResult[24] = pinning;
                    cResult[25] = selected;
                    cResult[26] = tmp40;
                    tmp38 = tmp40;
                  }
                  const obj8 = { variant: "secondary", size: "sm", text: tmp32, disabled: pinning, onPress: skip };
                  const tmp37 = closure_7(tmp(tmp2[22]).Button, obj8);
                  cResult[19] = pinning;
                  cResult[20] = skip;
                  cResult[21] = tmp37;
                  tmp35 = tmp37;
                }
              }
            }
          }
          if (channels.length > 0) {
            let stringResult1;
            const obj9 = { hasIcons: null != tmp7, children: closure_7(TableRow, obj10) };
            const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
            TableRow = tmp(tmp2[19]).TableRow;
            if (null == selected) {
              const intl3 = tmp(tmp2[12]).intl;
              stringResult1 = intl3.string(channels(tmp2[13])["9+dfPT"]);
            } else {
              const tmpResult = tmp(tmp2[20]);
              stringResult1 = tmpResult.computeChannelName(selected, UserStore, RelationshipStore);
            }
            obj10 = { label: stringResult1, icon: tmp21Result, arrow: true, disabled: pinning, onPress: tmp11 };
            tmp21Result = undefined;
            if (null != tmp7) {
              const obj11 = { source: tmp7 };
              tmp21Result = tmp21(tmp(tmp2[21]).TableRowIcon, obj11);
            }
            tmp21Result2 = tmp21(TableRowGroup, obj9);
          } else {
            const obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(channels(tmp2[13]).JVUsIY) };
            const Text2 = tmp(tmp2[11]).Text;
            intl2 = tmp(tmp2[12]).intl;
            tmp21Result2 = closure_7(Text2, obj12);
          }
          cResult[10] = channels.length;
          cResult[11] = tmp11;
          cResult[12] = pinning;
          cResult[13] = selected;
          cResult[14] = tmp7;
          cResult[15] = tmp21Result2;
          tmp17 = tmp21Result2;
        }
      }
    }
    function openPicker() {
      let intl;
      let obj2;
      let obj3;
      let tmp2;
      const obj = { content: metroImportDefault(tmp2, obj2), key, stackingBehavior: "stack" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      obj2 = {
        header: obj3,
        guild,
        channels,
        selectedChannel: selected,
        onSelect(id) {
          return setPicked(id.id);
        }
      };
      obj3 = { title: intl.string(_modDef3863.peOi1H) };
      ActionSheetActionCreators;
      tmp2 = ChannelPickerActionSheetDefault;
      intl = intl7.intl;
      showActionSheet(obj);
    }
    cResult[4] = channels;
    cResult[5] = tmp6;
    cResult[6] = selected;
    cResult[7] = setPicked;
    cResult[8] = openPicker;
    tmp11 = openPicker;
  }
  guild = undefined;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    const tmpResult2 = tmp(tmp2[15]);
    channelIconWithGuild = tmpResult2.getChannelIconWithGuild(selected, guild);
  }
  cResult[0] = guildId;
  cResult[1] = selected;
  cResult[2] = guild;
  cResult[3] = channelIconWithGuild;
  tmp7 = channelIconWithGuild;
}) : (function ConjureVoiceChannelPinForm(projectId) {
  let TableRow;
  let c2;
  let channels;
  let failed;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let key;
  let obj4;
  let pin;
  let pinning;
  let skip;
  let tmp10Result;
  let tmp10Result4;
  channels = undefined;
  dependencyMap = undefined;
  projectId = projectId.projectId;
  let tmp2 = channels;
  const tmp = closure_11();
  let obj = channels(12412);
  const conjureVoiceChannelPinForm = obj.useConjureVoiceChannelPinForm(projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  const selected = conjureVoiceChannelPinForm.selected;
  ({ setPicked: c2, pinning } = conjureVoiceChannelPinForm);
  let guild;
  ({ failed, pin, skip } = conjureVoiceChannelPinForm);
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    const tmp2Result = tmp2(8539);
    channelIconWithGuild = tmp2Result.getChannelIconWithGuild(selected, guild);
  }
  let obj2 = { variant: "text-sm/normal", color: "text-default", children: intl.string(selected(3863)["1vVBAw"]) };
  const Text = tmp2(5270).Text;
  intl = tmp2(1125).intl;
  const items = [closure_7(Text, obj2), , , ];
  const tmp9 = closure_9;
  if (channels.length > 0) {
    let stringResult;
    let obj3 = { hasIcons: null != channelIconWithGuild, children: closure_7(TableRow, obj4) };
    const TableRowGroup = tmp2(7023).TableRowGroup;
    TableRow = tmp2(6939).TableRow;
    if (null == selected) {
      const intl3 = tmp2(1125).intl;
      stringResult = intl3.string(tmp11(3863)["9+dfPT"]);
    } else {
      const tmp2Result2 = tmp2(5640);
      stringResult = tmp2Result2.computeChannelName(selected, UserStore, RelationshipStore);
    }
    obj4 = {
      label: stringResult,
      icon: tmp10Result,
      arrow: true,
      disabled: pinning,
      onPress: function openPicker() {
          let intl;
          let obj2;
          let obj3;
          let tmp2;
          const obj = { content: metroImportDefault(tmp2, obj2), key, stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj2 = {
            header: obj3,
            guild,
            channels,
            selectedChannel: selected,
            onSelect(id) {
              return closure_1_2(id.id);
            }
          };
          obj3 = { title: intl.string(_modDef3863.peOi1H) };
          ActionSheetActionCreators;
          tmp2 = ChannelPickerActionSheetDefault;
          intl = intl7.intl;
          showActionSheet(obj);
        }
    };
    tmp10Result = undefined;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = tmp10(tmp2(6947).TableRowIcon, obj5);
    }
    tmp10Result4 = tmp10(TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(selected(3863).JVUsIY) };
    const Text2 = tmp2(5270).Text;
    intl2 = tmp2(1125).intl;
    tmp10Result4 = tmp10(Text2, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl4.string(selected(3863).d7EeAm) };
    const Text3 = tmp2(5270).Text;
    intl4 = tmp2(1125).intl;
    tmp10Result5 = tmp10(Text3, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: items1 };
  const obj9 = { variant: "secondary", size: "sm", text: intl5.string(selected(3863).Iw0l8o), disabled: pinning, onPress: skip };
  const Button = tmp2(5280).Button;
  intl5 = tmp2(1125).intl;
  items1 = [closure_7(Button, obj9), ];
  let tmp10Result6 = null;
  const tmp18 = guild;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: intl6.string(selected(3863).FYI3qr), disabled: null == selected, loading: pinning, onPress: pin };
    const Button2 = tmp2(5280).Button;
    intl6 = tmp2(1125).intl;
    tmp10Result6 = tmp10(Button2, obj10);
  }
  const obj11 = { children: items };
  items1[1] = tmp10Result6;
  items[3] = closure_8(tmp18, obj8);
  return closure_8(tmp9, obj11);
});
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx");

export default tmp5;
