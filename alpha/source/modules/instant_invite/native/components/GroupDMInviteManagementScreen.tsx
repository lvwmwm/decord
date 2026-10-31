// Module ID: 10807
// Function ID: 10808
// Name: GroupDMInviteManagementScreen
// Dependencies: [5, 32, 19, 17, 8201, 8200, 1072, 21, 5014, 575, 5593, 1282, 12, 10808, 7208, 1187, 10826, 10827, 1113, 7294, 6998, 1260, 7169, 2]

// Module 10807 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InviteRecord from "InviteRecord" /* 8201 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8200 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap, inviter;

let Platform;
let c9;
let metroImportAll;
let metroRequire;
let obj2;
function GroupDMInviteManagement(channelId) {
  let closure_2;
  let closure_3;
  let first;
  let first1;
  let tmp13;
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = closure_11();
  [first, dependencyMap] = react.useState([]);
  [first1, closure_3] = react.useState(true);
  first(5593)(() => {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const HTTP = closure_2_0(closure_2_2[11]).HTTP;
                const obj4 = { url: closure_2_9.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
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
                const tmp2 = new closure_1_7(obj);
                return tmp2;
              });
              c2(closure_0);
              c3(false);
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
  const callback = react.useCallback((code) => code.code, []);
  if (first1) {
    tmp13 = jsx(channelId(7208).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    const EmptyState = channelId(1187).EmptyState;
    const intl = channelId(1113).intl;
    const intl2 = channelId(1113).intl;
    tmp13 = <EmptyState lightSource={tmp5(10826)} darkSource={tmp5(10827)} title={intl.string(channelId(1113).t["+nLJkZ"])} body={intl2.string(channelId(1113).t.F53CAc)} />;
  } else {
    const tmp12 = channelId;
    tmp13 = jsx(channelId(7294).FlashList, { contentContainerStyle: tmp.listContent, data: memo, keyExtractor: callback, renderItem: tmp10 });
  }
  return tmp13;
}
({ Platform, View: metroRequire } = react_native);
({ ChannelSettingsSections: metroImportAll, Endpoints: c9 } = Constants);
const jsx = Fragment.jsx;
let obj = { listContent: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    let closure_0 = channelId;
    let obj = {};
    const INSTANT_INVITES_MANAGEMENT = metroImportAll.INSTANT_INVITES_MANAGEMENT;
    const obj2 = {
      title: intl.string(intl3.t.OQ9MKu),
      headerLeft: obj3.getHeaderCloseButton(onClose),
      render() {
        const obj = { channelId };
        return closure_2_10(closure_2_12, obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES
    };
    intl = intl3.intl;
    obj[INSTANT_INVITES_MANAGEMENT] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  return jsx(channelId(7169).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
