// Module ID: 11758
// Function ID: 91306
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 11758 (EmptyState)
function EmptyState() {
  const tmp = callback4();
  let obj = { style: tmp.emptyWrapper };
  obj = { style: tmp.emptyStateImage, source: importDefault(dependencyMap[8]) };
  const items = [callback2(closure_7, obj), ];
  obj = { Promise: "primary", marginTop: null, flags: null, style: tmp.emptyStateTitle };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.6HXiuE);
  items[1] = callback2(arg1(dependencyMap[9]).Text, obj);
  obj.children = items;
  return callback3(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7, FlatList: closure_8 } = arg1(dependencyMap[3]));
const HubEmailConnectionSteps = arg1(dependencyMap[4]).HubEmailConnectionSteps;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.scrollContainer = obj;
obj.fauxHeader = { paddingHorizontal: 0 };
obj.emptyWrapper = {};
obj.emptyStateImage = { marginBottom: 24 };
obj.emptyStateTitle = { bounces: "audio", keyboardShouldPersistTaps: "architecture" };
const obj1 = { position: 284959.3291015922, top: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017625297114732, width: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001498796676283465, height: 118199435585797980000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, color: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
obj.error = obj1;
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  let guildsInfo;
  let obj2;
  ({ guildsInfo, email: closure_0, onClose: closure_1 } = arg0);
  let anyErrorMessage;
  const tmp = callback4();
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
