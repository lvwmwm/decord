// Module ID: 12838
// Function ID: 12839
// Name: useAppDMChatInputState
// Dependencies: [19, 8591, 5063, 7035, 2003, 1372, 1074, 1979, 504, 7632, 573, 6589, 2]
// Exports: default

// Module 12838 (useAppDMChatInputState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import Server from "Server" /* 1979 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const useQueryState = ApplicationCommandIndexStore.useQueryState;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT, Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.MESSAGE, Server.ApplicationCommandType.USER];
const result = size.fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default function useAppDMChatInputState(context) {
  let flag;
  let id2;
  let tmp16;
  let stateFromStores;
  let application;
  const channel = context.context.channel;
  let obj = application;
  items = [channel];
  const memo = application.useMemo(() => {
    if (null != channel) {
      if (true === channel.isDM()) {
        const user = UserStore.getUser(obj.getRecipientId());
        let tmp3 = null;
        if (undefined !== user) {
          tmp3 = null;
          if (true === user.bot) {
            tmp3 = user;
          }
        }
        return tmp3;
      }
    }
    return null;
  }, items);
  let tmp2 = channel;
  let tmp3 = stateFromStores;
  let obj2 = channel(stateFromStores[8]);
  const items1 = [ApplicationStore];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let id;
    const getAppIdForBotUserId = ApplicationStore.getAppIdForBotUserId;
    if (memo != null) {
      id = memo.id;
    }
    return getAppIdForBotUserId(id);
  });
  const items2 = [UserProfileStore];
  const obj3 = channel(stateFromStores[8]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp2;
    if (null !== memo) {
      let id;
      const getUserProfile = UserProfileStore.getUserProfile;
      if (memo != null) {
        id = tmp.id;
      }
      const userProfile = getUserProfile(id);
      application = undefined;
      if (userProfile != null) {
        application = userProfile.application;
      }
      tmp2 = application;
    }
    return tmp2;
  });
  if (stateFromStores == null) {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    stateFromStores = id;
  }
  const items3 = [memo, stateFromStores];
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      let id;
      const tmp3 = maybeFetchUserProfileDefault;
      if (memo != null) {
        id = memo.id;
      }
      if (id == null) {
        id = EMPTY_STRING_SNOWFLAKE_ID;
      }
      tmp3(id, undefined, { withMutualGuilds: true });
    }
  }, items3);
  let id1;
  const useEffect = obj.useEffect;
  if (memo != null) {
    id1 = memo.id;
  }
  const items4 = [id1];
  const effect1 = useEffect(() => {
    let id;
    if (memo != null) {
      id = tmp.id;
    }
    if (null != id) {
      const obj2 = { type: "APP_DM_OPEN", botUserId: memo.id };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items4);
  const obj5 = { applicationId: stateFromStores, allowFetch: null != id2, allowApplicationState: true };
  id2 = undefined;
  const obj4 = { commandTypes: items };
  const tmp10 = useQueryState;
  if (memo != null) {
    id2 = memo.id;
  }
  const descriptors = tmp10({ channel, type: "channel" }, obj4, obj5).descriptors;
  const found = descriptors.find((application) => {
    application = application.application;
    let id;
    if (application != null) {
      id = application.id;
    }
    return id === stateFromStores;
  });
  application = undefined;
  if (found != null) {
    application = found.application;
  }
  const items5 = [application];
  let memo1 = obj.useMemo(() => {
    let fromServer;
    if (null != application) {
      fromServer = ApplicationRecord.createFromServer(tmp);
    }
    return fromServer;
  }, items5);
  const useGetOrFetchApplication = tmp2(tmp3[11]).useGetOrFetchApplication;
  tmp2(tmp3[11]);
  if (null == memo1) {
    tmp16 = stateFromStores;
  }
  if (memo1 == null) {
    memo1 = useGetOrFetchApplication(tmp16);
  }
  const obj6 = { application: memo1, isAppDM: flag };
  flag = undefined;
  if (memo != null) {
    flag = memo.bot;
  }
  if (flag == null) {
    flag = false;
  }
  return obj6;
};
