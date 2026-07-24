// Module ID: 10197
// Function ID: 78779
// Name: GroupDMInviteManagement
// Dependencies: [5, 57, 31, 27, 7544, 7686, 653, 33, 4130, 4559, 507, 22, 689, 10198, 5583, 1273, 10216, 10217, 1212, 5087, 480, 5517, 2]

// Module 10197 (GroupDMInviteManagement)
import closure_3 from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function GroupDMInviteManagement(channelId) {
  channelId = channelId.channelId;
  const tmp2 = callback(importAllResult.useState([]), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp3 = callback(importAllResult.useState(true), 2);
  let closure_3 = tmp3[1];
  first(4559)(() => {
    function _fetchInvites() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    (function fetchInvites() {
      return _fetchInvites(...arguments);
    })().catch(() => {
      outer1_3(false);
    });
  });
  const tmp5 = callback(importAllResult.useState(21), 2);
  callback = tmp5[1];
  const items = [first];
  const memo = importAllResult.useMemo(() => first(22).sortBy(first, (inviter) => {
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
    let tmp12 = jsx(channelId(5583).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj = { lightSource: first(10216), darkSource: first(10217) };
    const intl = channelId(1212).intl;
    obj.title = intl.string(channelId(1212).t["+nLJkZ"]);
    const intl2 = channelId(1212).intl;
    obj.body = intl2.string(channelId(1212).t.F53CAc);
    tmp12 = jsx(channelId(1273).EmptyState, { lightSource: first(10216), darkSource: first(10217) });
  } else {
    obj = { style: tmp.list, data: memo, keyExtractor: callback, renderItem: tmp9, initialNumToRender: 10, windowSize: tmp5[0] };
    tmp12 = <closure_7 style={tmp.list} data={memo} keyExtractor={callback} renderItem={tmp9} initialNumToRender={10} windowSize={tmp5[0]} />;
  }
  return tmp12;
}
({ Platform, View: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ ChannelSettingsSections: closure_9, Endpoints: closure_10 } = ME);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ list: { paddingTop: 8 } });
const memoResult = importAllResult.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = importAllResult.useMemo(() => (function getScreens(channelId, onClose) {
    let closure_0 = channelId;
    let obj = {};
    obj = {};
    const intl = channelId(outer2_2[18]).intl;
    obj.title = intl.string(channelId(outer2_2[18]).t.OQ9MKu);
    obj.headerLeft = channelId(outer2_2[19]).getHeaderCloseButton(onClose);
    obj.render = function render() {
      return outer3_11(outer3_13, { channelId: closure_0 });
    };
    obj.impressionName = channelId(outer2_2[20]).ImpressionNames.GDM_SETTINGS_INVITES;
    obj[outer2_9.INSTANT_INVITES_MANAGEMENT] = obj;
    return obj;
  })(channelId, onClose), items);
  return jsx(channelId(5517).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
const result = require("result").fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
