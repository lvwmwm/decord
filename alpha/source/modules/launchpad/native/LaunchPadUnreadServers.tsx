// Module ID: 17701
// Function ID: 17702
// Name: LaunchPadUnreadServers
// Dependencies: [19, 17, 2063, 6040, 1389, 1085, 21, 5090, 587, 558, 576, 7043, 17702, 504, 1200, 10261, 13021, 6164, 7001, 5101, 9236, 16331, 1496, 17707, 1126, 6752, 2]

// Module 17701 (LaunchPadUnreadServers)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import transitionToChannel from "transitionToChannel" /* 5101 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import isGuildSelectableDefault from "isGuildSelectable" /* 17707 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onGuildSelect;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
let unpackModuleId;
function renderHistorySection() {
  return authStore(closure_15, {});
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: obj2, privateChannelWrapper: { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" }, privateChannelIcon: { width: 48, height: 48, borderRadius: 24, overflow: "hidden" }, badgeWrapper: { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 }, guildWrapper: { paddingVertical: 2, justifyContent: "center", alignItems: "center" }, guildHistorySeparatorWrapper: { flex: 1, justifyContent: "center", alignItems: "center" }, guildHistorySeparator: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { width: 2, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildItemInner(guildId) {
  let selected;
  let obj = guildId(576);
  const cResult = obj.c(14);
  guildId = guildId.guildId;
  ({ selected, onGuildSelect } = guildId);
  const tmp3 = closure_12();
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp5;
    if (cResult[1] === onGuildSelect) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== guildId) {
      const fn2 = function p() {
        const obj = transitionToGuild;
        obj.transitionToGuild(guildId);
      };
      cResult[3] = guildId;
      cResult[4] = fn2;
      tmp5 = fn2;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === guildId) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === selected) {
            let tmp6;
            if (cResult[9] === tmp3.maskStrokeStyle.backgroundColor) {
              tmp6 = cResult[10];
            }
            if (cResult[11] === tmp3.guildWrapper) {
              let tmp10;
              if (cResult[12] === tmp6) {
                tmp10 = cResult[13];
              }
              return tmp10;
            }
            const obj2 = { style: tmp3.guildWrapper, children: tmp6 };
            const tmp13 = closure_10(closure_5, obj2);
            cResult[11] = tmp3.guildWrapper;
            cResult[12] = tmp6;
            cResult[13] = tmp13;
            tmp10 = tmp13;
          }
        }
      }
    }
    const obj3 = { size: 48, borderRadius: 16, guildId, selected, onPress: tmp4, onLongPress: tmp5, backgroundColor: tmp3.maskStrokeStyle.backgroundColor };
    const tmp9 = closure_10(onGuildSelect(17702), obj3);
    cResult[5] = guildId;
    cResult[6] = tmp5;
    cResult[7] = tmp4;
    cResult[8] = selected;
    cResult[9] = tmp3.maskStrokeStyle.backgroundColor;
    cResult[10] = tmp9;
    tmp6 = tmp9;
  }
  const fn = function n() {
    onGuildSelect(guildId);
  };
  cResult[0] = guildId;
  cResult[1] = onGuildSelect;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function GuildItemInner(guildId) {
  let obj2;
  guildId = guildId.guildId;
  onGuildSelect = guildId.onGuildSelect;
  const selected = guildId.selected;
  const tmp = closure_12();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = react.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  let obj = { style: tmp.guildWrapper, children: closure_10(onGuildSelect(17702), obj2) };
  const callback1 = react.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guildId);
  }, items1);
  obj2 = { size: 48, borderRadius: 16, guildId, selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  return closure_10(closure_5, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PrivateChannelItemInner(channelId) {
  let first;
  let items3;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp7;
  let tmp8;
  const tmp = channelId;
  const tmp2 = stateFromStores1;
  let obj = channelId(stateFromStores1[10]);
  const cResult = obj.c(28);
  channelId = channelId.channelId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function k() {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      let user;
      if (isPrivateResult) {
        user = UserStore.getUser(obj.getRecipientId());
      }
      return user;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult4 = tmp(tmp2[13]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ReadStateStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const fn3 = function z() {
      let num = 0;
      if (null != stateFromStores) {
        num = ReadStateStore.getMentionCount(tmp.id);
      }
      return num;
    };
    cResult[7] = stateFromStores;
    cResult[8] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult5 = tmp(tmp2[13]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp12, tmp14);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      if (cResult[9] === tmp4.privateChannelIcon) {
        let tmp30;
        if (cResult[10] === stateFromStores1) {
          tmp30 = cResult[11];
        }
        tmp18 = tmp30;
      }
      class E {
        constructor() {
          let items;
          if (null != stateFromStores) {
            if (stateFromStores.type === ChannelTypes.DM) {
              if (null != stateFromStores1) {
                const obj3 = { recipientIds: items };
                items = [tmp2.id];
                const obj2 = ChannelActionCreatorsDefault;
                obj2.openPrivateChannel(obj3);
              }
            }
            const obj = transitionToChannel;
            obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
          }
        }
      }
      tmp32[0] = tmp4.privateChannelIcon;
      tmp32[1] = stateFromStores1;
      const Avatar = tmp(tmp2[14]).Avatar;
      tmp32[3] = tmp(tmp2[14]).AvatarSizes.LARGE_48;
      const tmp33 = closure_10(Avatar, tmp32);
      cResult[9] = tmp4.privateChannelIcon;
      cResult[10] = stateFromStores1;
      cResult[11] = tmp33;
      tmp30 = tmp33;
    }
    if (cResult[19] === stateFromStores) {
      let tmp34;
      let tmp37Result;
      if (cResult[20] === stateFromStores1) {
        tmp34 = cResult[21];
      }
      if (cResult[22] === stateFromStores2) {
        if (cResult[23] === stateFromStores) {
          if (cResult[24] === tmp34) {
            if (cResult[25] === tmp18) {
              let tmp35;
              if (cResult[26] === tmp4) {
                tmp35 = cResult[27];
              }
              return tmp35;
            }
          }
        }
      }
      class E {
        constructor() {
          let items;
          if (null != stateFromStores) {
            if (stateFromStores.type === ChannelTypes.DM) {
              if (null != stateFromStores1) {
                const obj3 = { recipientIds: items };
                items = [tmp2.id];
                const obj2 = ChannelActionCreatorsDefault;
                obj2.openPrivateChannel(obj3);
              }
            }
            const obj = transitionToChannel;
            obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
          }
        }
      }
      if (null != stateFromStores) {
        let obj2 = { onPress: tmp34, style: null, accessibilityRole: "button", accessible: true, children: items3 };
        class E {
          constructor() {
            let items;
            if (null != stateFromStores) {
              if (stateFromStores.type === ChannelTypes.DM) {
                if (null != stateFromStores1) {
                  const obj3 = { recipientIds: items };
                  items = [tmp2.id];
                  const obj2 = ChannelActionCreatorsDefault;
                  obj2.openPrivateChannel(obj3);
                }
              }
              const obj = transitionToChannel;
              obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
            }
          }
        }
        items3 = [tmp18, ];
        let tmp39 = stateFromStores2 > 0;
        const tmp37 = closure_11;
        const tmp38 = closure_4;
        if (tmp39) {
          class E {
            constructor() {
              let items;
              if (null != stateFromStores) {
                if (stateFromStores.type === ChannelTypes.DM) {
                  if (null != stateFromStores1) {
                    const obj3 = { recipientIds: items };
                    items = [tmp2.id];
                    const obj2 = ChannelActionCreatorsDefault;
                    obj2.openPrivateChannel(obj3);
                  }
                }
                const obj = transitionToChannel;
                obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
              }
            }
          }
          tmp42[0] = tmp4.badgeWrapper;
          let obj3 = { value: stateFromStores2, unread: true, backgroundColor: tmp4.maskStrokeStyle.backgroundColor };
          tmp42[1] = closure_10(stateFromStores(tmp2[20]), obj3);
          tmp39 = closure_10(closure_5, tmp42);
        }
        items3[1] = tmp39;
        tmp37Result = tmp37(tmp38, obj2);
      }
      cResult[22] = stateFromStores2;
      cResult[23] = stateFromStores;
      cResult[24] = tmp34;
      cResult[25] = tmp18;
      cResult[26] = tmp4;
      cResult[27] = tmp37Result;
      tmp35 = tmp37Result;
    }
    class E {
      constructor() {
        let items;
        if (null != stateFromStores) {
          if (stateFromStores.type === ChannelTypes.DM) {
            if (null != stateFromStores1) {
              const obj3 = { recipientIds: items };
              items = [tmp2.id];
              const obj2 = ChannelActionCreatorsDefault;
              obj2.openPrivateChannel(obj3);
            }
          }
          const obj = transitionToChannel;
          obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
        }
      }
    }
    cResult[19] = stateFromStores;
    cResult[20] = stateFromStores1;
    cResult[21] = E;
    tmp34 = E;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    let tmp24;
    if (cResult[12] !== stateFromStores) {
      class E {
        constructor() {
          let items;
          if (null != stateFromStores) {
            if (stateFromStores.type === ChannelTypes.DM) {
              if (null != stateFromStores1) {
                const obj3 = { recipientIds: items };
                items = [tmp2.id];
                const obj2 = ChannelActionCreatorsDefault;
                obj2.openPrivateChannel(obj3);
              }
            }
            const obj = transitionToChannel;
            obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
          }
        }
      }
      tmp28[0] = stateFromStores;
      const tmp27 = stateFromStores(tmp2[15]);
      tmp28[1] = tmp(tmp2[14]).AvatarSizes.LARGE_48;
      const tmp29 = closure_10(tmp27, tmp28);
      cResult[12] = stateFromStores;
      cResult[13] = tmp29;
      tmp24 = tmp29;
    } else {
      tmp24 = cResult[13];
    }
    tmp18 = tmp24;
  } else if (null != stateFromStores) {
    let tmp19;
    if (cResult[14] !== stateFromStores) {
      const tmpResult6 = tmp(tmp2[16]);
      const channelIconSource = tmpResult6.getChannelIconSource(stateFromStores);
      class E {
        constructor() {
          let items;
          if (null != stateFromStores) {
            if (stateFromStores.type === ChannelTypes.DM) {
              if (null != stateFromStores1) {
                const obj3 = { recipientIds: items };
                items = [tmp2.id];
                const obj2 = ChannelActionCreatorsDefault;
                obj2.openPrivateChannel(obj3);
              }
            }
            const obj = transitionToChannel;
            obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
          }
        }
      }
      cResult[14] = stateFromStores;
      cResult[15] = channelIconSource;
      tmp19 = channelIconSource;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] === tmp4.privateChannelIcon) {
      let tmp21;
      if (cResult[17] === tmp19) {
        tmp21 = cResult[18];
      }
      tmp18 = tmp21;
    }
    class E {
      constructor() {
        let items;
        if (null != stateFromStores) {
          if (stateFromStores.type === ChannelTypes.DM) {
            if (null != stateFromStores1) {
              const obj3 = { recipientIds: items };
              items = [tmp2.id];
              const obj2 = ChannelActionCreatorsDefault;
              obj2.openPrivateChannel(obj3);
            }
          }
          const obj = transitionToChannel;
          obj.transitionToChannel(stateFromStores.id, { navigationReplace: true });
        }
      }
    }
    const obj4 = { style: tmp4.privateChannelIcon, source: tmp19 };
    const tmp23 = closure_10(stateFromStores(tmp2[17]), obj4);
    cResult[16] = tmp4.privateChannelIcon;
    cResult[17] = tmp19;
    cResult[18] = tmp23;
    tmp21 = tmp23;
  }
}) : (function PrivateChannelItemInner(channelId) {
  let channelIconSource;
  let items4;
  let obj7;
  let tmp9Result;
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_12();
  const tmp2 = channelId;
  let obj = channelId(stateFromStores1[13]);
  let items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(stateFromStores1[13]);
  const items1 = [UserStore];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = obj.isPrivate();
    }
    let user;
    if (isPrivateResult) {
      user = UserStore.getUser(obj.getRecipientId());
    }
    return user;
  });
  const items2 = [ReadStateStore];
  const obj4 = channelId(stateFromStores1[13]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = ReadStateStore.getMentionCount(tmp.id);
    }
    return num;
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      let obj2 = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp2(tmp3[14]).AvatarSizes.LARGE_48 };
      const Avatar = tmp2(tmp3[14]).Avatar;
      tmp9Result = closure_10(Avatar, obj2);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp20Result = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: tmp18, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: items4 };
      items4 = [tmp9Result, ];
      let num = 0;
      let tmp22 = stateFromStores2 > 0;
      const tmp20 = closure_11;
      const tmp21 = closure_4;
      if (tmp22) {
        const obj6 = { style: tmp.badgeWrapper, children: closure_10(stateFromStores(stateFromStores1[20]), obj7) };
        obj7 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        tmp22 = closure_10(closure_5, obj6);
      }
      items4[1] = tmp22;
      tmp20Result = tmp20(tmp21, obj5);
    }
    return tmp20Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj8 = { channel: stateFromStores, size: tmp2(stateFromStores1[14]).AvatarSizes.LARGE_48 };
    const tmp15 = stateFromStores(stateFromStores1[15]);
    tmp9Result = closure_10(tmp15, obj8);
  } else if (null != stateFromStores) {
    const obj9 = { style: tmp.privateChannelIcon, source: channelIconSource };
    const tmp11 = stateFromStores(stateFromStores1[17]);
    const tmp2Result = tmp2(stateFromStores1[16]);
    channelIconSource = tmp2Result.getChannelIconSource(stateFromStores);
    tmp9Result = closure_10(tmp11, obj9);
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistorySeparator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.guildHistorySeparator) {
    const obj2 = { style: tmp2.guildHistorySeparator };
    const tmp6 = authStore(hasOwnProperty, obj2);
    cResult[0] = tmp2.guildHistorySeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.guildHistorySeparatorWrapper) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { style: tmp2.guildHistorySeparatorWrapper, children: tmp3 };
  const tmp8 = authStore(hasOwnProperty, obj3);
  cResult[2] = tmp2.guildHistorySeparatorWrapper;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function HistorySeparator() {
  let obj2;
  const tmp = closure_12();
  const obj = { style: tmp.guildHistorySeparatorWrapper, children: authStore(hasOwnProperty, obj2) };
  obj2 = { style: tmp.guildHistorySeparator };
  return authStore(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LaunchPadUnreadServers(selectedGuildId) {
  let unreadPrivateChannelIds;
  let obj = selectedGuildId(unreadPrivateChannelIds[10]);
  const cResult = obj.c(28);
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  unreadPrivateChannelIds = selectedGuildId.unreadPrivateChannelIds;
  const unreadGuilds = selectedGuildId.unreadGuilds;
  const guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  closure_12();
  let obj2 = selectedGuildId(unreadPrivateChannelIds[21]);
  const categoryStyles = obj2.useCategoryStyles();
  const width = setSelectedGuild(unreadPrivateChannelIds[22])().width;
  let ref = unreadGuilds.useRef(-1);
  if (cResult[0] === selectedGuildId) {
    let tmp4;
    let tmp7;
    let tmp6;
    let tmp12;
    let tmp11;
    if (cResult[1] === setSelectedGuild) {
      tmp4 = cResult[2];
    }
    onGuildSelect = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          return () => clearTimeout(ref.current);
        }
      }
      const items = [];
      let num = 3;
      cResult[3] = T;
      cResult[4] = items;
      tmp7 = items;
      tmp6 = T;
    } else {
      class T {
        constructor() {
          return () => clearTimeout(ref.current);
        }
      }
      tmp7 = cResult[4];
    }
    const effect = obj3.useEffect(tmp6, tmp7);
    ref = obj3.useRef(null);
    if (cResult[5] !== visible) {
      class W {
        constructor() {
          const tmp = visible;
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.scrollToTop(false);
            }
          }
        }
      }
      const items1 = [visible];
      cResult[5] = visible;
      cResult[6] = W;
      cResult[7] = items1;
      tmp12 = items1;
      tmp11 = W;
    } else {
      class W {
        constructor() {
          const tmp = visible;
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.scrollToTop(false);
            }
          }
        }
      }
      tmp12 = cResult[7];
    }
    const effect1 = obj3.useEffect(tmp11, tmp12);
    if (cResult[8] === guildHistory) {
      class W {
        constructor() {
          const tmp = visible;
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.scrollToTop(false);
            }
          }
        }
      }
    }
    class A {
      constructor(arg0, arg1) {
        if (0 === arg0) {
          let tmp14 = null != tmp12;
          if (tmp14) {
            const obj2 = { channelId: unreadPrivateChannelIds[arg1] };
            tmp14 = authStore(closure_14, obj2);
          }
          return tmp14;
        } else if (arg0 >= 1) {
          let tmp3;
          if (1 === arg0) {
            tmp3 = unreadGuilds[arg1];
          } else {
            tmp3 = guildHistory[arg1];
          }
          let tmp6 = null != tmp3;
          if (tmp6) {
            const obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect };
            tmp6 = authStore(closure_13, obj);
          }
          return tmp6;
        } else {
          return null;
        }
      }
    }
    cResult[8] = guildHistory;
    cResult[9] = tmp4;
    cResult[10] = selectedGuildId;
    cResult[11] = unreadGuilds;
    cResult[12] = unreadPrivateChannelIds;
    cResult[13] = A;
    let tmp14 = A;
  }
  const fn = function l(arg0) {
    if (ref.current < 0) {
      if (isGuildSelectableDefault(arg0)) {
        let tmp6;
        const tmp4 = setSelectedGuild;
        if (arg0 !== selectedGuildId) {
          tmp6 = arg0;
        }
        tmp4(tmp6);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(tmp.current);
    ref.current = -1;
    const obj = transitionToGuild;
    obj.transitionToGuild(arg0);
  };
  cResult[0] = selectedGuildId;
  cResult[1] = setSelectedGuild;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function LaunchPadUnreadServers(selectedGuildId) {
  let items4;
  let items5;
  let tmp13Result;
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  const prop = selectedGuildId.unreadPrivateChannelIds;
  const unreadGuilds = selectedGuildId.unreadGuilds;
  const guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let tmp = closure_12();
  let tmp3 = prop;
  let obj = selectedGuildId(prop[21]);
  const categoryStyles = obj.useCategoryStyles();
  const width = setSelectedGuild(prop[22])().width;
  unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  onGuildSelect = unreadGuilds.useCallback((arg0) => {
    if (ref.current < 0) {
      if (isGuildSelectableDefault(arg0)) {
        let tmp6;
        const tmp4 = setSelectedGuild;
        if (arg0 !== selectedGuildId) {
          tmp6 = arg0;
        }
        tmp4(tmp6);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(tmp.current);
    ref.current = -1;
    const obj = transitionToGuild;
    obj.transitionToGuild(arg0);
  }, items);
  const effect = unreadGuilds.useEffect(() => () => clearTimeout(ref.current), []);
  const ref = unreadGuilds.useRef(null);
  const items1 = [visible];
  const effect1 = unreadGuilds.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, prop, selectedGuildId, onGuildSelect, guildHistory];
  const items3 = [unreadGuilds.length, prop.length, guildHistory.length];
  const callback1 = unreadGuilds.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        const obj2 = { channelId: prop[arg1] };
        tmp14 = authStore(closure_14, obj2);
      }
      return tmp14;
    } else if (arg0 >= 1) {
      let tmp3;
      if (1 === arg0) {
        tmp3 = unreadGuilds[arg1];
      } else {
        tmp3 = guildHistory[arg1];
      }
      let tmp6 = null != tmp3;
      if (tmp6) {
        const obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect };
        tmp6 = authStore(closure_13, obj);
      }
      return tmp6;
    } else {
      return null;
    }
  }, items2);
  let tmp11 = unreadGuilds.length > 0;
  const callback2 = unreadGuilds.useCallback((arg0) => {
    let num = 0;
    if (2 === arg0) {
      num = 0;
      if (guildHistory.length > 0) {
        if (prop.length > 0) {
          num = 10;
        } else {
          num = 0;
        }
      }
    }
    return num;
  }, items3);
  if (!tmp11) {
    tmp11 = prop.length > 0;
  }
  if (tmp11) {
    let stringResult;
    let obj2 = { style: tmp.listWrapper, children: items4 };
    let tmp14 = visible;
    const renderCategoryItem = tmp2(tmp3[21]).renderCategoryItem;
    selectedGuildId(tmp3[21]);
    const intl = tmp2(tmp3[24]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[24]).t;
    const tmp13 = closure_11;
    if (tmp11) {
      stringResult = string(t.xSY9BH);
    } else {
      stringResult = string(t.kCt2zG);
    }
    const obj3 = { name: stringResult, styles: categoryStyles };
    items4 = [renderCategoryItem(obj3), ];
    const obj4 = { ref, style: tmp.list, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: callback2, sections: items5, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
    items5 = [prop.length, unreadGuilds.length, guildHistory.length];
    items4[1] = closure_10(selectedGuildId(tmp3[25]).AnimatedFastList, obj4);
    tmp13Result = tmp13(tmp14, obj2);
  } else {
    tmp13Result = null;
  }
  return tmp13Result;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default memoResult;
