// Module ID: 10159
// Function ID: 78548
// Name: GroupDMInviteManagement
// Dependencies: []

// Module 10159 (GroupDMInviteManagement)
let Platform;
function GroupDMInviteManagement(channelId) {
  const arg1 = channelId.channelId;
  const tmp2 = callback(importAllResult.useState([]), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp3 = callback(importAllResult.useState(true), 2);
  let closure_3 = tmp3[1];
  importDefault(closure_2[9])(() => {
    function _fetchInvites() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetchInvites = obj;
      return obj(...arguments);
    }
    function fetchInvites() {
      return _fetchInvites(...arguments);
    }().catch(() => {
      callback(false);
    });
  });
  const tmp5 = callback(importAllResult.useState(21), 2);
  let callback = tmp5[1];
  const items = [first];
  const memo = importAllResult.useMemo(() => first(closure_2[11]).sortBy(first, (inviter) => {
    inviter = inviter.inviter;
    let formatted;
    if (null != inviter) {
      if (null != inviter.username) {
        formatted = str.toLowerCase();
      }
    }
    let str2 = "";
    if (null != formatted) {
      str2 = formatted;
    }
    return str2;
  }), items);
  const effect = importAllResult.useEffect(() => {
    callback(21);
  }, []);
  [][0] = first;
  callback = importAllResult.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp12 = jsx(arg1(closure_2[14]).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj = { lightSource: importDefault(closure_2[16]), darkSource: importDefault(closure_2[17]) };
    const intl = arg1(closure_2[18]).intl;
    obj.title = intl.string(arg1(closure_2[18]).t.+nLJkZ);
    const intl2 = arg1(closure_2[18]).intl;
    obj.body = intl2.string(arg1(closure_2[18]).t.F53CAc);
    tmp12 = jsx(arg1(closure_2[15]).EmptyState, obj);
  } else {
    obj = { style: tmp.list, data: memo, keyExtractor: callback, renderItem: tmp9, initialNumToRender: 10, windowSize: tmp5[0] };
    tmp12 = <closure_7 {...obj} />;
  }
  return tmp12;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Platform, View: closure_6, FlatList: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
arg1(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ ChannelSettingsSections: closure_9, Endpoints: closure_10 } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
const tmp4 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[8]).createStyles({ list: { paddingTop: 8 } });
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const onClose = channelId.onClose;
  const importDefault = onClose;
  const items = [channelId, onClose];
  const memo = importAllResult.useMemo(() => function getScreens(channelId, onClose) {
    let obj = {};
    obj = {};
    const intl = channelId(closure_2[18]).intl;
    obj.title = intl.string(channelId(closure_2[18]).t.OQ9MKu);
    obj.headerLeft = channelId(closure_2[19]).getHeaderCloseButton(onClose);
    obj.render = function render() {
      return callback(closure_13, { channelId: arg0 });
    };
    obj.impressionName = channelId(closure_2[20]).ImpressionNames.GDM_SETTINGS_INVITES;
    obj[constants.INSTANT_INVITES_MANAGEMENT] = obj;
    return obj;
  }(channelId, onClose), items);
  return jsx(arg1(dependencyMap[21]).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
