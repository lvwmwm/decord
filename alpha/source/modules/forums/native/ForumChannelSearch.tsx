// Module ID: 14514
// Function ID: 14515
// Name: ForumChannelSearch
// Dependencies: [19, 17, 4858, 8197, 21, 5009, 1499, 11311, 9791, 5629, 1114, 9819, 504, 7212, 8196, 2]

// Module 14514 (ForumChannelSearch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Tracking from "Tracking" /* 8196 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9819 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import ForumSearchStore from "ForumSearchStore" /* 8197 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memoResult = react.memo(function SearchButton(channelId) {
  let intl;
  channelId = channelId.channelId;
  let route;
  const tmp = closure_8();
  let obj = channelId(route[6]);
  navigation = obj.useNavigation();
  const obj2 = channelId(route[6]);
  route = obj2.useRoute();
  const items = [navigation, route];
  const obj3 = channelId(route[7]);
  const canSearchForumPostsByChannelId = obj3.useCanSearchForumPostsByChannelId(channelId);
  const effect = react.useEffect(() => () => {
    if (null != navigation) {
      const setOptions = tmp.setOptions;
      const obj = channelId(route[8]);
      setOptions(obj.getDefaultChannelStackHeaderProps(navigation, closure_1_2));
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    ({
      variant: "tertiary",
      size: "sm",
      text: intl.string(channelId(route[10]).t["ETE/oC"]),
      onPress() {
          if (null != channelId) {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(tmp, null);
          }
        }
    });
    const Button = tmp2(tmp3[9]).Button;
    intl = tmp2(tmp3[10]).intl;
    tmp8 = <View style={tmp.cancelButtonContainer}>{null}</View>;
  }
  return tmp8;
});
const memoResult1 = react.memo(function SearchInput(channelId) {
  let SearchBar;
  let obj4;
  let placeholder;
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let tmp2 = channelId;
  let tmp = closure_8();
  let obj = channelId(11311);
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
      let obj3 = { style: tmp.inputContainer, children: tmp8(SearchBar, obj4) };
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
      SearchBar = tmp2(7212).SearchBar;
      const tmp9 = View;
      if (null == placeholder) {
        const intl = tmp2(1114).intl;
        const string = intl.string;
        const t = tmp2(1114).t;
        placeholder = string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
      tmp8Result = tmp8(tmp9, obj3);
    }
  }
  return tmp8Result;
});
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memoResult1;
