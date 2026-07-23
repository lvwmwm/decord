// Module ID: 14878
// Function ID: 113446
// Dependencies: [31, 27, 4469, 33, 4130, 689, 4470, 1212, 566, 14869, 2]

// Module 14878
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ Image: closure_3, Pressable: closure_4 } = get_ActivityIndicator);
let obj = {};
obj = { marginTop: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
obj.unavailableGuilds = obj;
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.unavailableGuildsIcon = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = callback();
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.totalUnavailableGuilds);
  let tmp3 = null;
  if (stateFromStores > 0) {
    obj = { accessibilityRole: "button" };
    let intl = stateFromStores(1212).intl;
    obj = { count: stateFromStores };
    obj.accessibilityLabel = intl.formatToPlainString(stateFromStores(1212).t["MEpX+2"], obj);
    obj.onPress = function onPress() {
      let obj = outer1_1(outer1_2[6]);
      obj = {};
      const intl = stateFromStores(outer1_2[7]).intl;
      obj.title = intl.string(stateFromStores(outer1_2[7]).t.R0RpRX);
      const intl2 = stateFromStores(outer1_2[7]).intl;
      obj = { count: stateFromStores };
      obj.body = intl2.format(stateFromStores(outer1_2[7]).t["TnH05/"], obj);
      obj.show(obj);
    };
    obj.style = tmp.unavailableGuilds;
    const obj1 = { style: tmp.unavailableGuildsIcon, source: importDefault(14869) };
    obj.children = <closure_3 style={tmp.unavailableGuildsIcon} source={importDefault(14869)} />;
    tmp3 = <closure_4 count={stateFromStores} />;
  }
  return tmp3;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
