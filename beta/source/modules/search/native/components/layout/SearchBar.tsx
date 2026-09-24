// Module ID: 17112
// Function ID: 17113
// Name: layout/SearchBar
// Dependencies: [19, 17, 2045, 2067, 4441, 1376, 12523, 8159, 8158, 1078, 21, 4790, 1119, 4943, 558, 568, 504, 5227, 12522, 12545, 4504, 12542, 12525, 17113, 9853, 2]

// Module 17112 (layout/SearchBar)
import util from "util" /* 1119 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4504 */;
import useChannelName from "useChannelName" /* 4943 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12522 */;
import SearchTokens from "SearchTokens" /* 12525 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12542 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12545 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;
import SearchQueryStore from "SearchQueryStore" /* 12523 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(8159);
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: closure_11 } = SearchConstants);
const SearchFilterAddLocations = fn(8158).SearchFilterAddLocations;
const SearchTypes = fn(1078).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_15 = createStyles.createStyles((minHeight) => {
  const obj = { searchBar: { minHeight: minHeight + 2 }, icon: { width: 32, minHeight, justifyContent: "center", zIndex: 10 } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      type = type.type;
      const channelIds = SearchQueryStore.getChannelIds(type);
      if (SearchTypes.GUILD_CHANNEL !== type) {
        if (tmp3.GUILD !== type) {
          if (tmp3.CHANNEL === type) {
            const channel = ChannelStore.getChannel(tmp.channelId);
            if (null == channel) {
              const intl4 = util.intl;
              let stringResult = intl4.string(util.t["5h0QOP"]);
            } else {
              const obj = useChannelName;
              const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
              const intl3 = util.intl;
              const obj2 = { guildName: channelName };
              stringResult = intl3.formatToPlainString(util.t.LDpotA, obj2);
            }
            return stringResult;
          } else if (tmp3.DMS === type) {
            const intl2 = util.intl;
            return intl2.string(util.t.m7OrlR);
          } else {
            const intl = util.intl;
            return intl.string(util.t["5h0QOP"]);
          }
        }
      }
      if (0 === channelIds.size) {
        guild = GuildStore.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (null == name) {
          const intl7 = util.intl;
          let stringResult1 = intl7.string(util.t["5h0QOP"]);
        } else {
          const intl6 = util.intl;
          const obj3 = { guildName: name };
          stringResult1 = intl6.formatToPlainString(util.t.LDpotA, obj3);
        }
      } else {
        const intl5 = util.intl;
        return intl5.string(util.t["5h0QOP"]);
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [SearchQueryStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    type = type.type;
    const channelIds = SearchQueryStore.getChannelIds(type);
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (tmp3.GUILD !== type) {
        if (tmp3.CHANNEL === type) {
          const channel = ChannelStore.getChannel(tmp.channelId);
          if (null == channel) {
            const intl4 = util.intl;
            let stringResult = intl4.string(util.t["5h0QOP"]);
          } else {
            const obj = useChannelName;
            const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
            const intl3 = util.intl;
            const obj2 = { guildName: channelName };
            stringResult = intl3.formatToPlainString(util.t.LDpotA, obj2);
          }
          return stringResult;
        } else if (tmp3.DMS === type) {
          const intl2 = util.intl;
          return intl2.string(util.t.m7OrlR);
        } else {
          const intl = util.intl;
          return intl.string(util.t["5h0QOP"]);
        }
      }
    }
    if (0 === channelIds.size) {
      guild = GuildStore.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = util.intl;
        let stringResult1 = intl7.string(util.t["5h0QOP"]);
      } else {
        const intl6 = util.intl;
        const obj3 = { guildName: name };
        stringResult1 = intl6.formatToPlainString(util.t.LDpotA, obj3);
      }
    } else {
      const intl5 = util.intl;
      return intl5.string(util.t["5h0QOP"]);
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext, ref) => {
  let v0zoRaK = searchContext;
  const cResult = searchContext(ref[15]).c(37);
  searchContext = searchContext.searchContext;
  const setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
  const obj = searchContext(ref[15]);
  const tmp4 = closure_15(closure_10 * Math.min(2, searchContext(ref[17]).useFontScale()));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function l() {
      return SearchQueryStore.getTags(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj2 = searchContext(ref[17]);
  const stateFromStores = v0zoRaK(ref[16]).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const mapped = stateFromStores.map(v0zoRaK(tmp2[18]).toSearchBarTag);
    cResult[4] = stateFromStores;
    cResult[5] = mapped;
    let tmp9 = mapped;
  } else {
    tmp9 = cResult[5];
  }
  if (0 === stateFromStores.length) {
    ref = noop.useRef(null);
    const tmp18 = closure_16(searchContext);
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      cResult[9] = M;
      const tmp19 = M;
    } else {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
    }
    const imperativeHandle = obj6.useImperativeHandle(ref, tmp19);
    if (cResult[10] !== searchContext) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      const items2 = [searchContext];
      cResult[10] = searchContext;
      cResult[11] = tmp24;
      cResult[12] = items2;
      let tmp23 = items2;
      const tmp22 = tmp24;
    } else {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      tmp23 = cResult[12];
    }
    const effect = obj6.useEffect(tmp22, tmp23);
    if (cResult[13] !== searchContext) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      cResult[13] = searchContext;
      cResult[14] = tmp27;
    } else {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
    }
    if (cResult[15] !== searchContext) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      cResult[15] = searchContext;
      cResult[16] = tmp29;
    } else {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
    }
    if (cResult[17] === searchContext) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      if (cResult[20] !== searchContext) {
        class M {
          constructor() {
            obj = {
              setText(arg0) {
                          const current = ref.current;
                          let setTextResult;
                          if (current != null) {
                            setTextResult = current.setText(arg0);
                          }
                          return setTextResult;
                        },
              getText() {
                          const current = ref.current;
                          let str;
                          if (current != null) {
                            str = current.getText();
                          }
                          if (str == null) {
                            str = "";
                          }
                          return str;
                        },
              blur() {
                          const current = ref.current;
                          let blurResult;
                          if (current != null) {
                            blurResult = current.blur();
                          }
                          return blurResult;
                        },
              focus() {
                          const current = ref.current;
                          let focusResult;
                          if (current != null) {
                            focusResult = current.focus();
                          }
                          return focusResult;
                        },
              isFocused() {
                          const current = ref.current;
                          let flag;
                          if (current != null) {
                            flag = current.isFocused();
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          return flag;
                        },
              measure(arg0) {
                          const current = ref.current;
                          let measureResult;
                          if (current != null) {
                            measureResult = current.measure(arg0);
                          }
                          return measureResult;
                        },
              measureInWindow(arg0) {
                          const current = ref.current;
                          let measureInWindowResult;
                          if (current != null) {
                            measureInWindowResult = current.measureInWindow(arg0);
                          }
                          return measureInWindowResult;
                        },
              measureLayout(arg0, arg1, arg2) {
                          const current = ref.current;
                          let measureLayoutResult;
                          if (current != null) {
                            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                          }
                          return measureLayoutResult;
                        }
            };
            return obj;
          }
        }
        const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
        cResult[20] = searchContext;
        cResult[21] = textInputValue;
      } else {
        class M {
          constructor() {
            obj = {
              setText(arg0) {
                          const current = ref.current;
                          let setTextResult;
                          if (current != null) {
                            setTextResult = current.setText(arg0);
                          }
                          return setTextResult;
                        },
              getText() {
                          const current = ref.current;
                          let str;
                          if (current != null) {
                            str = current.getText();
                          }
                          if (str == null) {
                            str = "";
                          }
                          return str;
                        },
              blur() {
                          const current = ref.current;
                          let blurResult;
                          if (current != null) {
                            blurResult = current.blur();
                          }
                          return blurResult;
                        },
              focus() {
                          const current = ref.current;
                          let focusResult;
                          if (current != null) {
                            focusResult = current.focus();
                          }
                          return focusResult;
                        },
              isFocused() {
                          const current = ref.current;
                          let flag;
                          if (current != null) {
                            flag = current.isFocused();
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          return flag;
                        },
              measure(arg0) {
                          const current = ref.current;
                          let measureResult;
                          if (current != null) {
                            measureResult = current.measure(arg0);
                          }
                          return measureResult;
                        },
              measureInWindow(arg0) {
                          const current = ref.current;
                          let measureInWindowResult;
                          if (current != null) {
                            measureInWindowResult = current.measureInWindow(arg0);
                          }
                          return measureInWindowResult;
                        },
              measureLayout(arg0, arg1, arg2) {
                          const current = ref.current;
                          let measureLayoutResult;
                          if (current != null) {
                            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                          }
                          return measureLayoutResult;
                        }
            };
            return obj;
          }
        }
      }
      if (cResult[22] !== searchContext) {
        class M {
          constructor() {
            obj = {
              setText(arg0) {
                          const current = ref.current;
                          let setTextResult;
                          if (current != null) {
                            setTextResult = current.setText(arg0);
                          }
                          return setTextResult;
                        },
              getText() {
                          const current = ref.current;
                          let str;
                          if (current != null) {
                            str = current.getText();
                          }
                          if (str == null) {
                            str = "";
                          }
                          return str;
                        },
              blur() {
                          const current = ref.current;
                          let blurResult;
                          if (current != null) {
                            blurResult = current.blur();
                          }
                          return blurResult;
                        },
              focus() {
                          const current = ref.current;
                          let focusResult;
                          if (current != null) {
                            focusResult = current.focus();
                          }
                          return focusResult;
                        },
              isFocused() {
                          const current = ref.current;
                          let flag;
                          if (current != null) {
                            flag = current.isFocused();
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          return flag;
                        },
              measure(arg0) {
                          const current = ref.current;
                          let measureResult;
                          if (current != null) {
                            measureResult = current.measure(arg0);
                          }
                          return measureResult;
                        },
              measureInWindow(arg0) {
                          const current = ref.current;
                          let measureInWindowResult;
                          if (current != null) {
                            measureInWindowResult = current.measureInWindow(arg0);
                          }
                          return measureInWindowResult;
                        },
              measureLayout(arg0, arg1, arg2) {
                          const current = ref.current;
                          let measureLayoutResult;
                          if (current != null) {
                            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                          }
                          return measureLayoutResult;
                        }
            };
            return obj;
          }
        }
        let obj3 = { searchContext };
        const tmp35 = jsx(setSuggestionsDismissed(tmp2[23]), { searchContext });
        cResult[22] = searchContext;
        cResult[23] = tmp35;
      } else {
        class M {
          constructor() {
            obj = {
              setText(arg0) {
                          const current = ref.current;
                          let setTextResult;
                          if (current != null) {
                            setTextResult = current.setText(arg0);
                          }
                          return setTextResult;
                        },
              getText() {
                          const current = ref.current;
                          let str;
                          if (current != null) {
                            str = current.getText();
                          }
                          if (str == null) {
                            str = "";
                          }
                          return str;
                        },
              blur() {
                          const current = ref.current;
                          let blurResult;
                          if (current != null) {
                            blurResult = current.blur();
                          }
                          return blurResult;
                        },
              focus() {
                          const current = ref.current;
                          let focusResult;
                          if (current != null) {
                            focusResult = current.focus();
                          }
                          return focusResult;
                        },
              isFocused() {
                          const current = ref.current;
                          let flag;
                          if (current != null) {
                            flag = current.isFocused();
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          return flag;
                        },
              measure(arg0) {
                          const current = ref.current;
                          let measureResult;
                          if (current != null) {
                            measureResult = current.measure(arg0);
                          }
                          return measureResult;
                        },
              measureInWindow(arg0) {
                          const current = ref.current;
                          let measureInWindowResult;
                          if (current != null) {
                            measureInWindowResult = current.measureInWindow(arg0);
                          }
                          return measureInWindowResult;
                        },
              measureLayout(arg0, arg1, arg2) {
                          const current = ref.current;
                          let measureLayoutResult;
                          if (current != null) {
                            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                          }
                          return measureLayoutResult;
                        }
            };
            return obj;
          }
        }
      }
      if (cResult[24] === tmp4.icon) {
        class M {
          constructor() {
            obj = {
              setText(arg0) {
                          const current = ref.current;
                          let setTextResult;
                          if (current != null) {
                            setTextResult = current.setText(arg0);
                          }
                          return setTextResult;
                        },
              getText() {
                          const current = ref.current;
                          let str;
                          if (current != null) {
                            str = current.getText();
                          }
                          if (str == null) {
                            str = "";
                          }
                          return str;
                        },
              blur() {
                          const current = ref.current;
                          let blurResult;
                          if (current != null) {
                            blurResult = current.blur();
                          }
                          return blurResult;
                        },
              focus() {
                          const current = ref.current;
                          let focusResult;
                          if (current != null) {
                            focusResult = current.focus();
                          }
                          return focusResult;
                        },
              isFocused() {
                          const current = ref.current;
                          let flag;
                          if (current != null) {
                            flag = current.isFocused();
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          return flag;
                        },
              measure(arg0) {
                          const current = ref.current;
                          let measureResult;
                          if (current != null) {
                            measureResult = current.measure(arg0);
                          }
                          return measureResult;
                        },
              measureInWindow(arg0) {
                          const current = ref.current;
                          let measureInWindowResult;
                          if (current != null) {
                            measureInWindowResult = current.measureInWindow(arg0);
                          }
                          return measureInWindowResult;
                        },
              measureLayout(arg0, arg1, arg2) {
                          const current = ref.current;
                          let measureLayoutResult;
                          if (current != null) {
                            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                          }
                          return measureLayoutResult;
                        }
            };
            return obj;
          }
        }
        if (cResult[27] === undefined) {
          class M {
            constructor() {
              obj = {
                setText(arg0) {
                              const current = ref.current;
                              let setTextResult;
                              if (current != null) {
                                setTextResult = current.setText(arg0);
                              }
                              return setTextResult;
                            },
                getText() {
                              const current = ref.current;
                              let str;
                              if (current != null) {
                                str = current.getText();
                              }
                              if (str == null) {
                                str = "";
                              }
                              return str;
                            },
                blur() {
                              const current = ref.current;
                              let blurResult;
                              if (current != null) {
                                blurResult = current.blur();
                              }
                              return blurResult;
                            },
                focus() {
                              const current = ref.current;
                              let focusResult;
                              if (current != null) {
                                focusResult = current.focus();
                              }
                              return focusResult;
                            },
                isFocused() {
                              const current = ref.current;
                              let flag;
                              if (current != null) {
                                flag = current.isFocused();
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              return flag;
                            },
                measure(arg0) {
                              const current = ref.current;
                              let measureResult;
                              if (current != null) {
                                measureResult = current.measure(arg0);
                              }
                              return measureResult;
                            },
                measureInWindow(arg0) {
                              const current = ref.current;
                              let measureInWindowResult;
                              if (current != null) {
                                measureInWindowResult = current.measureInWindow(arg0);
                              }
                              return measureInWindowResult;
                            },
                measureLayout(arg0, arg1, arg2) {
                              const current = ref.current;
                              let measureLayoutResult;
                              if (current != null) {
                                measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                              }
                              return measureLayoutResult;
                            }
              };
              return obj;
            }
          }
        }
        let obj4 = { ref, accessibilityHint: undefined, autoFocus: true, defaultValue: tmp31, style: tmp4.searchBar, tags: tmp9, icon: tmp36, onChangeText: tmp26, onRemove: tmp28, placeholder: tmp18, onSubmitEditing: tmp30, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false };
        const tmp43 = jsx(setSuggestionsDismissed(tmp2[24]), { ref, accessibilityHint: undefined, autoFocus: true, defaultValue: tmp31, style: tmp4.searchBar, tags: tmp9, icon: tmp36, onChangeText: tmp26, onRemove: tmp28, placeholder: tmp18, onSubmitEditing: tmp30, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false });
        class G {
          constructor() {
            tmp = setSuggestionsDismissed();
            obj = closure_9;
            tmp2 = searchContext;
            prefixTag = closure_9.getPrefixTag(searchContext);
            str = closure_9.getTextInputValue(searchContext);
            trimmed = str.trim();
            closure_0 = trimmed;
            result = null != prefixTag;
            if (result) {
              str2 = "";
              result = "" !== trimmed;
            }
            if (result) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[22]);
              result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
            }
            if (result) {
              tmp8 = closure_1;
              tmp9 = closure_2;
              obj3 = closure_1(closure_2[19]);
              updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
                setTextInputValue.setTextInputValue("");
                setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
                const result = setTextInputValue.restoreDraftTextInputValue();
              });
              obj4 = closure_1(closure_2[21]);
              obj1 = { searchContext: null, searchTokenType: null, location: null };
              obj1.searchContext = tmp2;
              ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
              trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
            }
            if (!obj.isQueryStringEmpty(tmp2)) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj6 = closure_1(closure_2[19]);
              updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
              obj7 = closure_1(closure_2[18]);
              initialMessages = obj7.fetchInitialMessages(tmp2);
            }
            return;
          }
        }
        cResult[27] = undefined;
        cResult[28] = tmp31;
        cResult[29] = tmp28;
        cResult[30] = tmp30;
        cResult[31] = tmp26;
        cResult[32] = tmp18;
        cResult[33] = tmp9;
        cResult[34] = tmp4.searchBar;
        cResult[35] = tmp36;
        cResult[36] = tmp43;
      }
      let obj5 = { style: tmp4.icon, children: tmp33 };
      cResult[24] = tmp4.icon;
      cResult[25] = tmp33;
      cResult[26] = <View style={tmp4.icon}>{tmp33}</View>;
      class G {
        constructor() {
          tmp = setSuggestionsDismissed();
          obj = closure_9;
          tmp2 = searchContext;
          prefixTag = closure_9.getPrefixTag(searchContext);
          str = closure_9.getTextInputValue(searchContext);
          trimmed = str.trim();
          closure_0 = trimmed;
          result = null != prefixTag;
          if (result) {
            str2 = "";
            result = "" !== trimmed;
          }
          if (result) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj2 = closure_0(closure_2[22]);
            result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
          }
          if (result) {
            tmp8 = closure_1;
            tmp9 = closure_2;
            obj3 = closure_1(closure_2[19]);
            updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
              setTextInputValue.setTextInputValue("");
              setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
              const result = setTextInputValue.restoreDraftTextInputValue();
            });
            obj4 = closure_1(closure_2[21]);
            obj1 = { searchContext: null, searchTokenType: null, location: null };
            obj1.searchContext = tmp2;
            ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
            trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
          }
          if (!obj.isQueryStringEmpty(tmp2)) {
            tmp12 = closure_1;
            tmp13 = closure_2;
            obj6 = closure_1(closure_2[19]);
            updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
            obj7 = closure_1(closure_2[18]);
            initialMessages = obj7.fetchInitialMessages(tmp2);
          }
          return;
        }
      }
      const tmp39 = <View style={tmp4.icon}>{tmp33}</View>;
    }
    class G {
      constructor() {
        tmp = setSuggestionsDismissed();
        obj = closure_9;
        tmp2 = searchContext;
        prefixTag = closure_9.getPrefixTag(searchContext);
        str = closure_9.getTextInputValue(searchContext);
        trimmed = str.trim();
        closure_0 = trimmed;
        result = null != prefixTag;
        if (result) {
          str2 = "";
          result = "" !== trimmed;
        }
        if (result) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[22]);
          result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
        }
        if (result) {
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj3 = closure_1(closure_2[19]);
          updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
            setTextInputValue.setTextInputValue("");
            setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
            const result = setTextInputValue.restoreDraftTextInputValue();
          });
          obj4 = closure_1(closure_2[21]);
          obj1 = { searchContext: null, searchTokenType: null, location: null };
          obj1.searchContext = tmp2;
          ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
          trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
        }
        if (!obj.isQueryStringEmpty(tmp2)) {
          tmp12 = closure_1;
          tmp13 = closure_2;
          obj6 = closure_1(closure_2[19]);
          updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
          obj7 = closure_1(closure_2[18]);
          initialMessages = obj7.fetchInitialMessages(tmp2);
        }
        return;
      }
    }
    cResult[17] = searchContext;
    cResult[18] = setSuggestionsDismissed;
    cResult[19] = G;
  } else {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
      cResult[8] = V;
      const tmp11 = V;
    } else {
      class M {
        constructor() {
          obj = {
            setText(arg0) {
                      const current = ref.current;
                      let setTextResult;
                      if (current != null) {
                        setTextResult = current.setText(arg0);
                      }
                      return setTextResult;
                    },
            getText() {
                      const current = ref.current;
                      let str;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
            blur() {
                      const current = ref.current;
                      let blurResult;
                      if (current != null) {
                        blurResult = current.blur();
                      }
                      return blurResult;
                    },
            focus() {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    },
            isFocused() {
                      const current = ref.current;
                      let flag;
                      if (current != null) {
                        flag = current.isFocused();
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      return flag;
                    },
            measure(arg0) {
                      const current = ref.current;
                      let measureResult;
                      if (current != null) {
                        measureResult = current.measure(arg0);
                      }
                      return measureResult;
                    },
            measureInWindow(arg0) {
                      const current = ref.current;
                      let measureInWindowResult;
                      if (current != null) {
                        measureInWindowResult = current.measureInWindow(arg0);
                      }
                      return measureInWindowResult;
                    },
            measureLayout(arg0, arg1, arg2) {
                      const current = ref.current;
                      let measureLayoutResult;
                      if (current != null) {
                        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                      }
                      return measureLayoutResult;
                    }
          };
          return obj;
        }
      }
    }
    const mapped1 = stateFromStores.map(tmp11);
    const joined = mapped1.join(", ");
    let intl = v0zoRaK(tmp2[12]).intl;
    v0zoRaK = v0zoRaK(tmp2[12]).t["0zoRaK"];
    let obj7 = { text: joined };
    cResult[6] = stateFromStores;
    class G {
      constructor() {
        tmp = setSuggestionsDismissed();
        obj = closure_9;
        tmp2 = searchContext;
        prefixTag = closure_9.getPrefixTag(searchContext);
        str = closure_9.getTextInputValue(searchContext);
        trimmed = str.trim();
        closure_0 = trimmed;
        result = null != prefixTag;
        if (result) {
          str2 = "";
          result = "" !== trimmed;
        }
        if (result) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[22]);
          result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
        }
        if (result) {
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj3 = closure_1(closure_2[19]);
          updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
            setTextInputValue.setTextInputValue("");
            setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
            const result = setTextInputValue.restoreDraftTextInputValue();
          });
          obj4 = closure_1(closure_2[21]);
          obj1 = { searchContext: null, searchTokenType: null, location: null };
          obj1.searchContext = tmp2;
          ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
          trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
        }
        if (!obj.isQueryStringEmpty(tmp2)) {
          tmp12 = closure_1;
          tmp13 = closure_2;
          obj6 = closure_1(closure_2[19]);
          updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
          obj7 = closure_1(closure_2[18]);
          initialMessages = obj7.fetchInitialMessages(tmp2);
        }
        return;
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(v0zoRaK, obj7);
  }
}) : ((searchContext, ref) => {
  searchContext = searchContext.searchContext;
  const setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
  let stateFromStores;
  ref = undefined;
  let tmp = closure_15(closure_10 * Math.min(2, searchContext(stateFromStores[17]).useFontScale()));
  let obj = searchContext(stateFromStores[17]);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[16]).useStateFromStores(items, () => SearchQueryStore.getTags(searchContext), items1);
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = ref.useMemo(() => stateFromStores.map(SearchPlatformUtils.toSearchBarTag), items2);
  const memo1 = ref.useMemo(() => {
    if (0 !== stateFromStores.length) {
      const mapped = arr.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = util.intl;
      const obj = { text: joined };
      return intl.formatToPlainString(util.t["0zoRaK"], obj);
    }
    arr = stateFromStores;
  }, items3);
  ref = ref.useRef(null);
  let obj2 = searchContext(stateFromStores[16]);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    setText(arg0) {
      const current = ref.current;
      let setTextResult;
      if (current != null) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = ref.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    blur() {
      const current = ref.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = ref.current;
      let flag;
      if (current != null) {
        flag = current.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    },
    measure(arg0) {
      const current = ref.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items4 = [searchContext];
  const effect = ref.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
    let tmp = arg2;
    if (!arg2) {
      tmp = null == arg0;
    }
    if (!tmp) {
      const current = ref.current;
      if (current != null) {
        current.setText(arg0);
      }
    }
  }), items4);
  const items5 = [searchContext];
  const items6 = [searchContext];
  const callback = ref.useCallback((arg0) => {
    closure_0 = arg0;
    if (SearchQueryStore.getTextInputValue(searchContext) !== arg0) {
      SearchPlatformActionCreatorsDefault.updateSearchQuery(tmp, (setTextInputValue) => {
        setTextInputValue.setTextInputValue(closure_0, true);
      });
      const tmp2 = importDefault;
      const result = SearchPlatformUtilsDefault.syncAutocompleteDebounced(tmp);
      if (!obj.isAutocompleteVisible(tmp)) {
        const tmp2Result = tmp2(12522);
        if (isInitialSearchQueryResult) {
          const initialMessages = tmp2Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(tmp);
        }
        isInitialSearchQueryResult = obj.isInitialSearchQuery(tmp);
      }
    }
  }, items5);
  const items7 = [searchContext, setSuggestionsDismissed];
  const callback1 = ref.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp2 = SearchQueryStore.getTags(searchContext)[arg0];
    const type = tmp2;
    if (null != tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj3 = { text: tmp2.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj3));
      if (tmp2.type === constants.COMPLETE) {
        const obj6 = { searchContext: tmp, searchTokenType: tmp2.searchTokenType, isDefault: tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD };
        let result = search_tracking_TrackingDefault.trackSearchFilterRemove(obj6);
      }
      SearchPlatformActionCreatorsDefault.updateSearchQuery(tmp, (removeTag) => {
        removeTag.removeTag(closure_0);
        if (type.type === constants.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const tmp6 = importDefault;
      const result1 = SearchPlatformUtilsDefault.syncAutocompleteDebounced(tmp);
      const queryString = obj.getQueryString(tmp);
      if (queryString !== searchResultsQuery) {
        const tmp6Result = tmp6(12522);
        if (tmp11) {
          const initialMessages = tmp6Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
        }
      }
      searchResultsQuery = obj.getSearchResultsQuery(tmp);
    }
  }, items6);
  const memo2 = ref.useMemo(() => () => {
    closure_1_1();
    const prefixTag = SearchQueryStore.getPrefixTag(closure_1_0);
    const trimmed = SearchQueryStore.getTextInputValue(closure_1_0).trim();
    let result = null != prefixTag;
    if (result) {
      result = "" !== trimmed;
    }
    if (result) {
      result = searchContext(stateFromStores[22]).isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
      const obj2 = searchContext(stateFromStores[22]);
    }
    if (result) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(tmp2, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj3 = setSuggestionsDismissed(stateFromStores[19]);
      const obj8 = { searchContext: tmp2, searchTokenType: null, location: null };
      ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
      setSuggestionsDismissed(stateFromStores[21]).trackSearchFilterAdd(obj8);
      const obj4 = setSuggestionsDismissed(stateFromStores[21]);
    }
    if (!SearchQueryStore.isQueryStringEmpty(closure_1_0)) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj6 = setSuggestionsDismissed(stateFromStores[19]);
      const initialMessages = setSuggestionsDismissed(stateFromStores[18]).fetchInitialMessages(tmp2);
      const obj7 = setSuggestionsDismissed(stateFromStores[18]);
    }
  }, items7);
  const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
  let obj3 = { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp.searchBar, tags: memo, icon: null, onChangeText: null, onRemove: null, placeholder: null, onSubmitEditing: null, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false };
  let obj4 = { style: tmp.icon, children: null };
  let tmp6 = closure_16(searchContext);
  obj4.children = jsx(setSuggestionsDismissed(stateFromStores[23]), { searchContext });
  obj3.icon = <View style={tmp.icon}>{null}</View>;
  obj3.onChangeText = callback;
  obj3.onRemove = callback1;
  obj3.placeholder = tmp6;
  obj3.onSubmitEditing = memo2;
  return jsx(setSuggestionsDismissed(stateFromStores[24]), { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp.searchBar, tags: memo, icon: null, onChangeText: null, onRemove: null, placeholder: null, onSubmitEditing: null, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false });
})));
