// Module ID: 10141
// Function ID: 78453
// Name: items
// Dependencies: [31, 8007, 4167, 6855, 4153, 1849, 653, 1881, 566, 7975, 686, 5468, 2]
// Exports: default

// Module 10141 (items)
import result from "result";
import { useQueryState } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

const require = arg1;
let items = [require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT, require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.MESSAGE, require("PermissionOverwriteType").ApplicationCommandType.USER];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default function useAppDMChatInputState(context) {
  let dependencyMap;
  let application;
  const channel = context.context.channel;
  const items = [channel];
  const memo = application.useMemo(() => {
    if (null != channel) {
      if (true === channel.isDM()) {
        const user = outer1_8.getUser(channel.getRecipientId());
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
  let obj = channel(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    return outer1_5.getAppIdForBotUserId(id);
  });
  let obj1 = channel(566);
  const items2 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let tmp;
    if (null !== memo) {
      let id;
      if (null != memo) {
        id = memo.id;
      }
      const userProfile = outer1_6.getUserProfile(id);
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
  const effect = application.useEffect(() => {
    if (null == _undefined) {
      let id;
      if (null != memo) {
        id = memo.id;
      }
      if (null == id) {
        id = outer1_9;
      }
      const obj = { withMutualGuilds: true };
      memo(_undefined[9])(id, undefined, obj);
      const tmp3 = memo(_undefined[9]);
    }
  }, items3);
  let id1;
  if (null != memo) {
    id1 = memo.id;
  }
  const items4 = [id1];
  const effect1 = application.useEffect(() => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    if (null != id) {
      let obj = memo(_undefined[10]);
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
    return id === c2;
  });
  application = undefined;
  if (null != found) {
    application = found.application;
  }
  const items5 = [application];
  const memo1 = application.useMemo(() => {
    let fromServer;
    if (null != application) {
      fromServer = outer1_7.createFromServer(application);
    }
    return fromServer;
  }, items5);
  let tmp15;
  if (null == memo1) {
    tmp15 = tmp4;
  }
  let getOrFetchApplication = channel(5468).useGetOrFetchApplication(tmp15);
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
