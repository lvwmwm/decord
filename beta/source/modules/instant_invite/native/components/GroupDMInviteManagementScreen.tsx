// Module ID: 10392
// Function ID: 10393
// Name: GroupDMInviteManagementScreen
// Dependencies: [5, 32, 19, 17, 7828, 8086, 1074, 21, 4836, 5298, 1271, 12, 576, 10393, 6460, 1177, 10411, 10412, 1115, 5936, 1249, 6421, 2]

// Module 10392 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InviteRecord from "InviteRecord" /* 7828 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8086 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap, inviter;

let Platform;
let c10;
let c9;
let metroImportDefault;
let metroRequire;
function GroupDMInviteManagement(channelId) {
  let closure_2;
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let first2;
  let tmp16;
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  const tmp = closure_12();
  [first, dependencyMap] = react.useState([]);
  [first1, closure_3] = react.useState(true);
  first(5298)(() => {
    function fetchInvites() {
      return obj(...arguments);
    }
    let obj = function _fetchInvites() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        let v3;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                const HTTP = closure_2_0(closure_2_2[10]).HTTP;
                const obj4 = { url: closure_2_10.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
                const get = HTTP.get;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: get(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const body = value.body;
              closure_0 = body.map((item) => {
                obj = {};
                const merged = Object.assign(item);
                ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
                const tmp2 = new closure_1_8(obj);
                return tmp2;
              });
              c2(closure_0);
              c3(false);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      return obj(...arguments);
    };
    const promise = fetchInvites();
    promise.catch(() => {
      closure_1_3(false);
    });
  });
  [first2, _slicedToArray] = react.useState(21);
  const items = [first];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.sortBy(first, (inviter) => {
      inviter = inviter.inviter;
      let str;
      if (inviter != null) {
        if (inviter.username != null) {
          str = str2.toLowerCase();
        }
      }
      if (str == null) {
        str = "";
      }
      return str;
    });
  }, items);
  const effect = react.useEffect(() => {
    closure_4(21);
  }, []);
  [][0] = first;
  const callback = react.useCallback((code) => code.code, []);
  if (first1) {
    tmp16 = jsx(channelId(6460).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    const EmptyState = channelId(1177).EmptyState;
    const intl = channelId(1115).intl;
    const intl2 = channelId(1115).intl;
    tmp16 = <EmptyState lightSource={tmp5(10411)} darkSource={tmp5(10412)} title={intl.string(channelId(1115).t["+nLJkZ"])} body={intl2.string(channelId(1115).t.F53CAc)} />;
  } else {
    tmp16 = <closure_7 style={tmp.list} data={memo} keyExtractor={callback} renderItem={tmp13} initialNumToRender={10} windowSize={first2} />;
  }
  return tmp16;
}
let _slicedToArray = _slicedToArray_mod;
({ Platform, View: metroRequire, FlatList: metroImportDefault } = react_native);
({ ChannelSettingsSections: c9, Endpoints: c10 } = Constants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ list: { paddingTop: 8 } });
const memoResult = react.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    let closure_0 = channelId;
    let obj = {};
    const INSTANT_INVITES_MANAGEMENT = constants.INSTANT_INVITES_MANAGEMENT;
    const obj2 = {
      title: intl.string(intl3.t.OQ9MKu),
      headerLeft: obj3.getHeaderCloseButton(onClose),
      render() {
        const obj = { channelId };
        return closure_2_11(closure_2_13, obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES
    };
    intl = intl3.intl;
    obj[INSTANT_INVITES_MANAGEMENT] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  return jsx(channelId(6421).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
