// Module ID: 10133
// Function ID: 78406
// Name: ForumChannelCloseSearchButton
// Dependencies: [31, 27, 7009, 33, 4130, 1457, 10134, 9158, 4543, 1212, 9175, 566, 5772, 7008, 2]

// Module 10133 (ForumChannelCloseSearchButton)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let obj = channelId(route[5]);
  const navigation = obj.useNavigation();
  const tmp = callback();
  route = channelId(route[5]).useRoute();
  const obj2 = channelId(route[5]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = channelId(route[6]).useCanSearchForumPostsByChannelId(channelId);
  const effect = importAllResult.useEffect(() => () => {
    if (null != outer1_1) {
      outer1_1.setOptions(channelId(route[7]).getDefaultChannelStackHeaderProps(outer1_1, outer1_2));
      const obj = channelId(route[7]);
    }
  }, items);
  let tmp6 = null;
  if (canSearchForumPostsByChannelId) {
    obj = { style: tmp.cancelButtonContainer };
    obj = { variant: "tertiary", size: "sm" };
    const intl = channelId(route[9]).intl;
    obj.text = intl.string(channelId(route[9]).t["ETE/oC"]);
    obj.onPress = function onPress() {
      if (null != channelId) {
        const result = navigation(route[10]).updateForumSearchQuery(channelId, null);
        const obj = navigation(route[10]);
      }
    };
    obj.children = jsx(channelId(route[8]).Button, { variant: "tertiary", size: "sm" });
    tmp6 = <View variant="tertiary" size="sm" />;
  }
  return tmp6;
});
const memoResult1 = importAllResult.memo((channelId) => {
  let importDefault;
  let placeholder;
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let obj = channelId(10134);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  let tmp = callback();
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = channelId(566).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = outer1_5.getSearchQuery(channelId);
    }
    return searchQuery;
  }, items1);
  let tmp4Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp4Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.inputContainer };
      obj = {
        size: "sm",
        defaultValue: stateFromStores,
        onChange(query) {
              if (null != channelId) {
                const result = outer1_1(outer1_2[10]).updateForumSearchQuery(channelId, query);
                const obj = outer1_1(outer1_2[10]);
              }
            }
      };
      if (null == placeholder) {
        const intl = channelId(1212).intl;
        placeholder = intl.string(channelId(1212).t.Iy2gnS);
      }
      obj.placeholder = placeholder;
      obj.autoFocus = 0 === stateFromStores.length;
      obj.onClear = function onClear() {
        let tmp = null != closure_1;
        if (tmp) {
          tmp = null != channelId;
        }
        if (tmp) {
          let obj = channelId(outer1_2[13]);
          obj = { guildId: closure_1, channelId };
          const result = obj.trackForumSearchCleared(obj);
        }
        if (null != channelId) {
          const result1 = outer1_1(outer1_2[10]).updateForumSearchQuery(channelId, "");
          const obj3 = outer1_1(outer1_2[10]);
        }
      };
      obj.grow = false;
      obj.children = jsx(channelId(5772).SearchField, {
        size: "sm",
        defaultValue: stateFromStores,
        onChange(query) {
              if (null != channelId) {
                const result = outer1_1(outer1_2[10]).updateForumSearchQuery(channelId, query);
                const obj = outer1_1(outer1_2[10]);
              }
            }
      });
      tmp4Result = tmp4(View, obj);
      const tmp5 = View;
    }
  }
  return tmp4Result;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memoResult1;
