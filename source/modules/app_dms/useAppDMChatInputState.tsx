// Module ID: 10100
// Function ID: 78195
// Name: items
// Dependencies: []
// Exports: default

// Module 10100 (items)
let closure_3 = importAll(dependencyMap[0]);
const useQueryState = arg1(dependencyMap[1]).useQueryState;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[6]).EMPTY_STRING_SNOWFLAKE_ID;
const items = [arg1(dependencyMap[7]).ApplicationCommandType.PRIMARY_ENTRY_POINT, arg1(dependencyMap[7]).ApplicationCommandType.CHAT, arg1(dependencyMap[7]).ApplicationCommandType.MESSAGE, arg1(dependencyMap[7]).ApplicationCommandType.USER];
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default function useAppDMChatInputState(context) {
  let dependencyMap;
  let React;
  const channel = context.context.channel;
  const arg1 = channel;
  const items = [channel];
  const memo = React.useMemo(() => {
    if (null != channel) {
      if (true === channel.isDM()) {
        const user = user.getUser(channel.getRecipientId());
        let tmp5 = null;
        if (undefined !== user) {
          tmp5 = null;
          if (true === user.bot) {
            tmp5 = user;
          }
        }
        return tmp5;
      }
    }
    return null;
  }, items);
  const importDefault = memo;
  let obj = arg1(dependencyMap[8]);
  const items1 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    return appIdForBotUserId.getAppIdForBotUserId(id);
  });
  let obj1 = arg1(dependencyMap[8]);
  const items2 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let tmp;
    if (null !== memo) {
      let id;
      if (null != memo) {
        id = memo.id;
      }
      const userProfile = userProfile.getUserProfile(id);
      let application;
      if (null != userProfile) {
        application = userProfile.application;
      }
      tmp = application;
    }
    return tmp;
  });
  let tmp4 = stateFromStores;
  if (null == stateFromStores) {
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    tmp4 = id;
  }
  dependencyMap = tmp4;
  const items3 = [memo, tmp4];
  const effect = React.useEffect(() => {
    if (null == tmp4) {
      let id;
      if (null != memo) {
        id = memo.id;
      }
      if (null == id) {
        id = closure_9;
      }
      const obj = { withMutualGuilds: true };
      memo(memo[9])(id, undefined, obj);
      const tmp3 = memo(memo[9]);
    }
  }, items3);
  let id1;
  if (null != memo) {
    id1 = memo.id;
  }
  const items4 = [id1];
  const effect1 = React.useEffect(() => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    if (null != id) {
      let obj = memo(tmp4[10]);
      obj = { type: "APP_DM_OPEN", botUserId: memo.id };
      obj.dispatch(obj);
    }
  }, items4);
  obj = { commandTypes: items };
  obj = { applicationId: tmp4 };
  let id2;
  if (null != memo) {
    id2 = memo.id;
  }
  obj.allowFetch = null != id2;
  obj.allowApplicationState = true;
  const descriptors = useQueryState({ channel, type: "channel" }, obj, obj).descriptors;
  const found = descriptors.find((application) => {
    application = application.application;
    let id;
    if (null != application) {
      id = application.id;
    }
    return id === tmp4;
  });
  let application;
  if (null != found) {
    application = found.application;
  }
  React = application;
  const items5 = [application];
  const memo1 = React.useMemo(() => {
    let fromServer;
    if (null != application) {
      fromServer = closure_7.createFromServer(application);
    }
    return fromServer;
  }, items5);
  let tmp15;
  if (null == memo1) {
    tmp15 = tmp4;
  }
  let getOrFetchApplication = arg1(dependencyMap[11]).useGetOrFetchApplication(tmp15);
  obj1 = {};
  if (null != memo1) {
    getOrFetchApplication = memo1;
  }
  let tmp17;
  if (null != getOrFetchApplication) {
    tmp17 = getOrFetchApplication;
  }
  obj1.application = tmp17;
  let bot;
  if (null != memo) {
    bot = memo.bot;
  }
  obj1.isAppDM = null != bot && bot;
  return obj1;
};
