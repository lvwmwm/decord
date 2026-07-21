// Module ID: 11765
// Function ID: 91341
// Name: EmptyState
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11765 (EmptyState)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import { HubEmailConnectionSteps } from "result";
import result from "result";
import result from "result";
import result from "result";

function EmptyState() {
  const tmp = result();
  let obj = { style: tmp.emptyWrapper };
  obj = { style: tmp.emptyStateImage, source: importDefault(dependencyMap[8]) };
  const items = [callback2(closure_7, obj), ];
  obj = { delete: "primary", dispatch: null, raw: null, style: tmp.emptyStateTitle };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.6HXiuE);
  items[1] = callback2(arg1(dependencyMap[9]).Text, obj);
  obj.children = items;
  return callback3(closure_6, obj);
}
({ View: closure_6, Image: closure_7, FlatList: closure_8 } = result);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = result);
result = {};
result = { paddingTop: false, justifyContent: false, backgroundColor: require("result").colors.BACKGROUND_BASE_LOW };
result.scrollContainer = result;
result.fauxHeader = { paddingHorizontal: 0 };
result.emptyWrapper = {};
result.emptyStateImage = { marginBottom: 24 };
result.emptyStateTitle = { "Null": null, "Null": 1 };
result.error = { color: require("result").unsafe_rawColors.RED_400 };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  let guildsInfo;
  let obj2;
  ({ guildsInfo, email: closure_0, onClose: closure_1 } = arg0);
  let anyErrorMessage;
  const tmp = result();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[11]);
  let closure_3 = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  const callback = tmp2[0];
  [obj2, closure_5] = callback(React.useState(null), 2);
  const tmp3 = callback(React.useState(null), 2);
  [closure_6, closure_7] = callback(React.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    const tmp = callback2(tmp[12]);
    const formatted = closure_4.toLowerCase();
    return tmp(formatted, name.name.toLowerCase());
  });
  anyErrorMessage = undefined;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj = {};
  obj = { style: tmp.fauxHeader };
  const obj1 = {};
  const tmp4 = callback(React.useState(false), 2);
  const intl = arg1(dependencyMap[10]).intl;
  obj1.placeholder = intl.string(arg1(dependencyMap[10]).t.nL2wKD);
  obj1.onChange = tmp2[1];
  obj1.onClose = function onClose() {

  };
  obj.children = callback2(importDefault(dependencyMap[17]), obj1);
  const items = [callback2(arg1(dependencyMap[16]).FauxHeader, obj), ];
  obj2 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp = null;
      if (null != anyErrorMessage) {
        tmp = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: tmp.error, children: anyErrorMessage };
          tmp = callback3(callback(tmp[18]).LegacyText, obj);
        }
      }
      return tmp;
    },
    renderItem(item) {
      item = item.item;
      const obj = {};
      const id = item.id;
      // CreateGeneratorClosureLongIndex (0x67)
      obj.signup = arr(tmp);
      obj.guildInfo = item;
      obj.loading = closure_6;
      return callback3(id(tmp[19]).HubEmailConnectionGuildSelectRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return callback3(closure_14, {});
    },
    ItemSeparatorComponent() {
      return callback3(closure_6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: obj3
  };
  const tmp7 = importDefault(dependencyMap[17]);
  items[1] = callback2(anyErrorMessage, obj2);
  obj.children = items;
  return callback3(closure_12, obj);
};
