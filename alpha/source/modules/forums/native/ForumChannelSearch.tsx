// Module ID: 12798
// Function ID: 12799
// Name: ForumChannelSearch
// Dependencies: [19, 17, 2064, 7886, 21, 5091, 558, 576, 1504, 12799, 9270, 9301, 1126, 5376, 504, 7885, 6737, 2]

// Module 12798 (ForumChannelSearch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Tracking from "Tracking" /* 7885 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9301 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import ForumSearchStore from "ForumSearchStore" /* 7886 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchButton(channelId) {
  let route;
  const tmp = channelId;
  let obj = channelId(route[7]);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  const tmp4 = closure_8();
  const obj2 = channelId(route[8]);
  navigation = obj2.useNavigation();
  const obj3 = channelId(route[8]);
  route = obj3.useRoute();
  channelId(route[9]);
  if (cResult[0] === navigation) {
    let tmp9;
    let tmp10;
    if (cResult[1] === route) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = react.useEffect(tmp9, tmp10);
    if (tmp8) {
      let tmp14;
      let tmp16;
      let tmp18;
      if (cResult[4] !== channelId) {
        function onPress() {
          if (null != channelId) {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(tmp, null);
          }
        }
        cResult[4] = channelId;
        cResult[5] = onPress;
        tmp14 = onPress;
      } else {
        tmp14 = cResult[5];
      }
      const _Symbol = Symbol;
      const cancelButtonContainer = tmp4.cancelButtonContainer;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[12]).intl;
        const stringResult = intl.string(tmp(route[12]).t["ETE/oC"]);
        cResult[6] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== tmp14) {
        const tmp20 = jsx(tmp(route[13]).Button, { variant: "tertiary", size: "sm", text: tmp16, onPress: tmp14 });
        cResult[7] = tmp14;
        cResult[8] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === tmp4.cancelButtonContainer) {
        let tmp21;
        if (cResult[10] === tmp18) {
          tmp21 = cResult[11];
        }
        return tmp21;
      }
      const tmp24 = <View style={cancelButtonContainer}>{tmp18}</View>;
      cResult[9] = tmp4.cancelButtonContainer;
      cResult[10] = tmp18;
      cResult[11] = tmp24;
      tmp21 = tmp24;
    } else {
      return null;
    }
  }
  const fn = function u() {
    return () => {
      if (null != navigation) {
        const setOptions = tmp.setOptions;
        const obj = channelId(route[10]);
        setOptions(obj.getDefaultChannelStackHeaderProps(navigation, closure_1_2));
      }
    };
  };
  const items = [navigation, route];
  cResult[0] = navigation;
  cResult[1] = route;
  cResult[2] = fn;
  cResult[3] = items;
  tmp10 = items;
  tmp9 = fn;
}) : (function SearchButton(channelId) {
  let intl;
  channelId = channelId.channelId;
  let route;
  const tmp = closure_8();
  let obj = channelId(route[8]);
  navigation = obj.useNavigation();
  const obj2 = channelId(route[8]);
  route = obj2.useRoute();
  const items = [navigation, route];
  const obj3 = channelId(route[9]);
  const canSearchForumPostsByChannelId = obj3.useCanSearchForumPostsByChannelId(channelId);
  const effect = react.useEffect(() => () => {
    if (null != navigation) {
      const setOptions = tmp.setOptions;
      const obj = channelId(route[10]);
      setOptions(obj.getDefaultChannelStackHeaderProps(navigation, closure_1_2));
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    ({
      variant: "tertiary",
      size: "sm",
      text: intl.string(channelId(route[12]).t["ETE/oC"]),
      onPress() {
          if (null != channelId) {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(tmp, null);
          }
        }
    });
    const Button = tmp2(tmp3[13]).Button;
    intl = tmp2(tmp3[12]).intl;
    tmp8 = <View style={tmp.cancelButtonContainer}>{null}</View>;
  }
  return tmp8;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchInput(channelId) {
  let first;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  let tmp = channelId;
  let tmp2 = dependencyMap;
  let obj = channelId(576);
  const cResult = obj.c(25);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  closure_8();
  let obj2 = channelId(12799);
  const canSearchForumPostsByChannelId = obj2.useCanSearchForumPostsByChannelId(channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      let searchQuery = null;
      if (null != channelId) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = B;
    cResult[7] = items3;
    tmp14 = items3;
    tmp13 = B;
  } else {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
  if (canSearchForumPostsByChannelId) {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    if (null != stateFromStores) {
      class B {
        constructor() {
          let tmp2 = null != channelId;
          if (tmp2) {
            const channel = ChannelStore.getChannel(tmp);
            let flag;
            if (channel != null) {
              flag = channel.isGameInvitesChannel();
            }
            if (flag == null) {
              flag = false;
            }
            tmp2 = flag;
          }
          return tmp2;
        }
      }
      function clearSearchInput() {
        let tmp2 = null != guildId;
        const tmp = guildId;
        if (tmp2) {
          tmp2 = null != channelId;
        }
        if (tmp2) {
          const obj2 = { guildId: tmp, channelId };
          const obj = Tracking;
          const result = obj.trackForumSearchCleared(obj2);
        }
        if (null != channelId) {
          const obj3 = ForumActionCreatorsDefault;
          const result1 = obj3.updateForumSearchQuery(tmp8, "");
        }
      }
      cResult[8] = channelId;
      cResult[9] = guildId;
      cResult[10] = clearSearchInput;
    }
  }
  return null;
}) : (function SearchInput(channelId) {
  let SearchField;
  let obj4;
  let placeholder;
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let tmp2 = channelId;
  let tmp = closure_8();
  let obj = channelId(12799);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  let obj2 = channelId(504);
  const items = [ForumSearchStore];
  const items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = ForumSearchStore.getSearchQuery(tmp);
    }
    return searchQuery;
  }, items1);
  channelId(504);
  [][0] = channelId;
  let tmp8Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp8Result = null;
    if (null != stateFromStores) {
      const tmp8 = jsx;
      let obj3 = { style: tmp.inputContainer, children: tmp8(SearchField, obj4) };
      obj4 = {
        size: "sm",
        defaultValue: stateFromStores,
        onChange: function onChangeText(query) {
              if (null != channelId) {
                const obj = ForumActionCreatorsDefault;
                const result = obj.updateForumSearchQuery(tmp, query);
              }
            },
        placeholder,
        autoFocus: 0 === stateFromStores.length,
        onClear: function clearSearchInput() {
              let tmp2 = null != importDefault;
              const tmp = importDefault;
              if (tmp2) {
                tmp2 = null != channelId;
              }
              if (tmp2) {
                const obj2 = { guildId: tmp, channelId };
                const obj = Tracking;
                const result = obj.trackForumSearchCleared(obj2);
              }
              if (null != channelId) {
                const obj3 = ForumActionCreatorsDefault;
                const result1 = obj3.updateForumSearchQuery(tmp8, "");
              }
            },
        grow: false
      };
      SearchField = tmp2(6737).SearchField;
      const tmp9 = View;
      if (null == placeholder) {
        const intl = tmp2(1126).intl;
        const string = intl.string;
        const t = tmp2(1126).t;
        placeholder = string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
      tmp8Result = tmp8(tmp9, obj3);
    }
  }
  return tmp8Result;
}));
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memo2Result;
