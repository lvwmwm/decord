// Module ID: 13260
// Function ID: 100710
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 13260 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = arg1(dependencyMap[14]));
const ActivityLayoutMode = arg1(dependencyMap[15]).ActivityLayoutMode;
const FrameLayoutModes = arg1(dependencyMap[16]).FrameLayoutModes;
const MediaEngineContextTypes = arg1(dependencyMap[17]).MediaEngineContextTypes;
const tmp2 = arg1(dependencyMap[14]);
const tmp3 = () => {
  class RPCServerManager {
    constructor(arg0) {
      RPCServerManager = this;
      self = this;
      tmp = closure_4(this, RPCServerManager);
      this.handleMessage = (type) => {
        let channelId;
        let message;
        if (0 !== self.rpcServer.subscriptions.length) {
          if ("MESSAGE_CREATE" === type.type) {
            const result = self.handleActivityMessage(type);
          }
          type = type.type;
          if ("MESSAGE_CREATE" === type) {
            if ("SENDING" !== type.message.state) {
              const MESSAGE_CREATE = constants3.MESSAGE_CREATE;
              ({ channelId, message } = type);
              const _HermesInternal2 = HermesInternal;
              let combined = "" + MESSAGE_CREATE + type.message.id;
              let MESSAGE_UPDATE = MESSAGE_CREATE;
            }
          } else if ("MESSAGE_UPDATE" === type) {
            MESSAGE_UPDATE = constants3.MESSAGE_UPDATE;
            channelId = type.message.channel_id;
            message = type.message;
            combined = null;
          } else if ("MESSAGE_DELETE" === type) {
            const MESSAGE_DELETE = constants3.MESSAGE_DELETE;
            channelId = type.channelId;
            message = { id: type.id };
            const _HermesInternal = HermesInternal;
            combined = "" + MESSAGE_DELETE + type.id;
            MESSAGE_UPDATE = MESSAGE_DELETE;
          } else {
            let obj = self(closure_2[18]);
            return obj.assertNever(type);
          }
          if (null != channelId) {
            const rpcServer = self.rpcServer;
            obj = { channel_id: channelId };
            obj = { channel_id: channelId, message: self(closure_2[19]).transformInternalTextMessage(message) };
            const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
            const obj4 = self(closure_2[19]);
          }
        }
      };
      this.handleSpeaking = (speakingFlags) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          if (0 !== speakingFlags.speakingFlags) {
            let SPEAKING_STOP = constants3.SPEAKING_START;
          } else {
            SPEAKING_STOP = constants3.SPEAKING_STOP;
          }
          if (speakingFlags.context === constants6.DEFAULT) {
            const voiceChannelId = voiceChannelId.getVoiceChannelId();
            if (null != voiceChannelId) {
              const channel = channel.getChannel(voiceChannelId);
              if (null != channel) {
                const voiceState = voiceState.getVoiceState(channel.getGuildId(), speakingFlags.userId);
                if (null != voiceState) {
                  const rpcServer = self.rpcServer;
                  let obj = { channel_id: voiceState.channelId };
                  obj = { channel_id: voiceState.channelId, user_id: speakingFlags.userId };
                  const result = rpcServer.dispatchToSubscriptions(SPEAKING_STOP, obj, obj);
                }
              }
            }
          }
        }
      };
      this.handleVoiceChannelSelect = (arg0) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { channel_id: tmp2, guild_id: tmp };
          const result = rpcServer.dispatchToSubscriptions(constants3.VOICE_CHANNEL_SELECT, {}, obj);
        }
      };
      this.handleNotificationCreate = (icon) => {
        icon = icon.icon;
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          let obj = { channel_id: tmp, message: self(closure_2[19]).transformInternalTextMessage(tmp2) };
          let remoteIconURL = null;
          if (null != icon) {
            obj = self(closure_2[19]);
            remoteIconURL = obj.getRemoteIconURL(icon);
          }
          obj.icon_url = remoteIconURL;
          obj.title = tmp3;
          obj.body = tmp4;
          const result = rpcServer.dispatchToSubscriptions(constants3.NOTIFICATION_CREATE, {}, obj);
          const obj3 = self(closure_2[19]);
        }
      };
      this.handleActivityJoin = (applicationId) => {
        applicationId = applicationId.applicationId;
        let self = applicationId;
        self = applicationId.parentApplicationId;
        if (0 !== self.rpcServer.subscriptions.length) {
          const obj = { application_id: applicationId, secret: tmp };
          if (tmp3) {
            obj.intent = tmp2;
          }
          const rpcServer = self.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_JOIN, (socket) => {
            let tmp = socket.socket.application.id === applicationId;
            if (!tmp) {
              let tmp4 = null != parentApplicationId;
              if (tmp4) {
                tmp4 = socket.socket.application.parentId === parentApplicationId;
              }
              tmp = tmp4;
            }
            return tmp;
          }, obj);
          const rpcServer2 = self.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(constants3.GAME_JOIN, (socket) => socket.socket.application.id === applicationId, obj);
        }
      };
      this.handleActivityLayoutModeUpdate = (arg0) => {
        let layoutMode;
        ({ applicationId: closure_0, layoutMode } = arg0);
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          let obj = { is_pip_mode: layoutMode !== constants4.FOCUSED };
          const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
          obj = { layout_mode: layoutMode };
          const rpcServer2 = self.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
          const rpcServer3 = self.rpcServer;
          const result2 = rpcServer3.dispatchToSubscriptions(constants3.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        }
      };
      this.handleFrameUpdateLayoutMode = (applicationId) => {
        const self = applicationId.applicationId;
        if (0 !== self.rpcServer.subscriptions.length) {
          if (tmp === constants5.PIP) {
            let FOCUSED = constants4.PIP;
          } else {
            FOCUSED = constants4.FOCUSED;
          }
          const rpcServer = self.rpcServer;
          let obj = { is_pip_mode: FOCUSED !== constants4.FOCUSED };
          const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          obj = { layout_mode: FOCUSED };
          const rpcServer2 = self.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          const rpcServer3 = self.rpcServer;
          const result2 = rpcServer3.dispatchToSubscriptions(constants3.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
        }
      };
      this.handleThermalStateChange = (applicationId) => {
        applicationId = applicationId.applicationId;
        const self = applicationId;
        if (0 !== self.rpcServer.subscriptions.length) {
          if (null != applicationId) {
            const obj = { thermal_state: self(closure_2[20]).getThermalState() };
            const rpcServer = self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
            const obj2 = self(closure_2[20]);
          }
        }
      };
      this.handleScreenOrientationUpdate = (arg0) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { screen_orientation: tmp };
          const result = rpcServer.dispatchToSubscriptions(constants3.ORIENTATION_UPDATE, {}, obj);
        }
      };
      this.handleEmbeddedActivityUpdate = () => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, self(closure_2[21]).activityInstanceConnectedParticipants());
          const obj = self(closure_2[21]);
        }
      };
      this.handleActivityMessage = (arg0) => {
        let activity;
        let application;
        let channelId;
        let message;
        ({ channelId, message } = arg0);
        let self;
        if (0 !== self.rpcServer.subscriptions.length) {
          ({ application, activity } = message);
          if (null != application) {
            if (null != activity) {
              if (null != activity.party_id) {
                const author = message.author;
                let id;
                if (null != author) {
                  id = author.id;
                }
                const user = authStore.getUser(id);
                if (null != user) {
                  const currentUser = authStore.getCurrentUser();
                  if (null != currentUser) {
                    if (user.id !== currentUser.id) {
                      if (activity.type === constants.JOIN_REQUEST) {
                        let applicationActivity = store.getApplicationActivity(currentUser.id, application.id);
                      } else {
                        applicationActivity = store.getApplicationActivity(user.id, application.id);
                      }
                      if (null != applicationActivity) {
                        if (null != applicationActivity.party) {
                          if (applicationActivity.party.id === activity.party_id) {
                            self = applicationActivity.application_id;
                            const type = activity.type;
                            if (constants.JOIN === type) {
                              const rpcServer = self.rpcServer;
                              let obj = { user: self(closure_2[22])(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                              const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                            } else if (constants.JOIN_REQUEST === type) {
                              const rpcServer2 = self.rpcServer;
                              obj = { user: self(closure_2[22])(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                              const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_JOIN_REQUEST, (socket) => socket.socket.application.id === application_id, obj);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      this.handleOAuth2TokenRevoke = (accessToken) => {
        const self = accessToken.accessToken;
        const sockets = self.rpcServer.sockets;
        const item = sockets.forEach((authorization) => {
          if (authorization.authorization.accessToken === accessToken) {
            authorization.close(constants.TOKEN_REVOKED, "Token revoked");
          }
        });
      };
      this.handleGuildCreate = (guild) => {
        const id = guild.guild.id;
        guild = guild.getGuild(id);
        let tmp2 = 0 !== self.rpcServer.subscriptions.length;
        if (tmp2) {
          tmp2 = null != guild;
        }
        if (tmp2) {
          const rpcServer = self.rpcServer;
          const obj = { id, name: guild.name };
          const result = rpcServer.dispatchToSubscriptions(constants3.GUILD_CREATE, {}, obj);
        }
      };
      this.handleChannelCreate = (arg0) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { id: tmp, name: tmp2, type: tmp3 };
          const result = rpcServer.dispatchToSubscriptions(constants3.CHANNEL_CREATE, {}, obj);
        }
      };
      this.handleLogout = () => {
        const sockets = self.rpcServer.sockets;
        const item = sockets.forEach((close) => close.close(constants.CLOSE_NORMAL, "User logout"));
      };
      this.handleRelationshipAdd = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = authStore.getUser(tmp);
          if (null != user) {
            _self = _self(closure_2[19]).transformBaseRelationship(tmp2, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
            const obj = _self(closure_2[19]);
          }
        }
      };
      this.handleRelationshipUpdate = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = authStore.getUser(tmp);
          if (null != user) {
            _self = _self(closure_2[19]).transformBaseRelationship(tmp2, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
            const obj = _self(closure_2[19]);
          }
        }
      };
      this.handleRelationshipRemove = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = authStore.getUser(tmp);
          if (null != user) {
            _self = _self(closure_2[19]).transformBaseRelationship(constants2.NONE, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
            const obj = _self(closure_2[19]);
          }
        }
      };
      this.handlePresenceUpdates = (updates) => {
        let done;
        updates = updates.updates;
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const _Set = Set;
          function _loop() {
            const relationshipType = relationshipType.getRelationshipType(_undefined);
            if (relationshipType === constants.NONE) {
              return 0;
            } else {
              const user = user.getUser(_undefined);
              if (null == user) {
                return 0;
              } else {
                const _undefined = _undefined(closure_2[19]).transformBaseRelationship(relationshipType, user);
                const rpcServer = rpcServer.rpcServer;
                const result = rpcServer.dispatchToSubscriptions(constants2.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
              }
            }
          }
          const set = new Set(updates.map((user) => user.user.id));
          const tmp6 = callback(set.values());
          let iter = tmp6();
          if (!iter.done) {
            do {
              closure_0 = iter.value;
              let _loopResult = _loop();
              let iter2 = tmp6();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
      };
      this.handlePresencesReplace = () => {
        let done;
        if (0 !== self.rpcServer.subscriptions.length) {
          function _loop2() {
            if (rpcServer === constants.NONE) {
              return 0;
            } else {
              const user = user.getUser(callback);
              if (null == user) {
                return 0;
              } else {
                const callback = callback(closure_2[19]).transformBaseRelationship(rpcServer, user);
                const rpcServer = rpcServer.rpcServer;
                const result = rpcServer.dispatchToSubscriptions(constants2.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
              }
            }
          }
          const mutableRelationships = store2.getMutableRelationships();
          const tmp3 = callback(mutableRelationships.entries());
          let iter = tmp3();
          if (!iter.done) {
            do {
              let tmp4 = closure_3;
              let tmp5 = closure_3(iter.value, 2);
              closure_0 = tmp5[0];
              closure_1 = tmp5[1];
              let _loop2Result = _loop2();
              let iter2 = tmp3();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
      };
      this.handleUserUpdate = (user) => {
        const id = user.user.id;
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const relationshipType = store2.getRelationshipType(id);
          if (relationshipType !== constants2.NONE) {
            user = authStore.getUser(id);
            if (null != user) {
              _self = _self(closure_2[19]).transformBaseRelationship(relationshipType, user);
              const rpcServer = _self.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => callback(closure_2[19]).transformApplicationRelationship(callback, socket.socket.application.id));
              const obj = _self(closure_2[19]);
            }
          }
        }
      };
      this.handleEntitlementCreate = (entitlement) => {
        entitlement = entitlement.entitlement;
        const self = entitlement;
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { entitlement };
          const result = rpcServer.dispatchToSubscriptions(constants3.ENTITLEMENT_CREATE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
        }
      };
      this.handleEntitlementDelete = (entitlement) => {
        entitlement = entitlement.entitlement;
        const self = entitlement;
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { entitlement };
          const result = rpcServer.dispatchToSubscriptions(constants3.ENTITLEMENT_DELETE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
        }
      };
      this.handleQuestEnrollSuccess = (enrolledQuestUserStatus) => {
        enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
        let self;
        self = undefined;
        if (0 !== self.rpcServer.subscriptions.length) {
          const questId = enrolledQuestUserStatus.questId;
          self = questId;
          const quest = quest.getQuest(questId);
          if (null != quest) {
            let obj = self(closure_2[23]);
            const activityApplicationId = obj.getActivityApplicationId(quest);
            self = activityApplicationId;
            if (null != activityApplicationId) {
              const rpcServer = self.rpcServer;
              obj = { quest_id: questId, is_enrolled: null != enrolledQuestUserStatus.enrolledAt, enrolled_at: enrolledQuestUserStatus.enrolledAt };
              const result = rpcServer.dispatchToSubscriptions(constants3.QUEST_ENROLLMENT_STATUS_UPDATE, (socket) => {
                let tmp = socket.socket.application.id === activityApplicationId;
                if (tmp) {
                  const args = socket.args;
                  let quest_id;
                  if (null != args) {
                    quest_id = args.quest_id;
                  }
                  tmp = quest_id === questId;
                }
                return tmp;
              }, obj);
            }
          }
        }
      };
      ({ server: this.rpcServer, transports: this.transports, commands: this.rpcCommandHandlers, events: this.rpcEventHandlers, stores: this.stores, registerTransportsForEmbeddedPlatform: this.registerTransportsForEmbeddedPlatform } = arg0);
      return;
    }
  }
  const arg1 = RPCServerManager;
  let obj = {
    key: "loadServer",
    value: function loadServer() {
      let done;
      let length;
      let length2;
      const self = this;
      if (RPCServerManager(closure_2[24]).isPlatformEmbedded) {
        const result = self.registerTransportsForEmbeddedPlatform();
      }
      const tmp2 = callback3(self.transports);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let rpcServer = self.rpcServer;
          let registerTransportResult = rpcServer.registerTransport(iter.value);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const entries = Object.entries(self.rpcCommandHandlers);
      let num = 0;
      if (0 < entries.length) {
        do {
          let tmp4 = closure_3;
          let tmp5 = closure_3(entries[num], 2);
          let rpcServer2 = self.rpcServer;
          let setCommandHandlerResult = rpcServer2.setCommandHandler(tmp5[0], tmp5[1]);
          num = num + 1;
          length = entries.length;
        } while (num < length);
      }
      const entries1 = Object.entries(self.rpcEventHandlers);
      let num2 = 0;
      if (0 < entries1.length) {
        do {
          let tmp7 = closure_3;
          let tmp8 = closure_3(entries1[num2], 2);
          let rpcServer3 = self.rpcServer;
          let setEventHandlerResult = rpcServer3.setEventHandler(tmp8[0], tmp8[1]);
          num2 = num2 + 1;
          length2 = entries1.length;
        } while (num2 < length2);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "init",
    value: function init() {
      const RPCServerManager = this;
      this.rpcServer.getCurrentUser = () => currentUser.getCurrentUser();
      this.rpcServer.onConnect = (app_id) => {
        let obj = callback(closure_2[25]);
        obj = { type: "RPC_APP_CONNECTED", socketId: app_id.id, application: app_id.application };
        obj.dispatch(obj);
        obj = { app_id: app_id.application.id, transport: app_id.transport };
        callback(closure_2[26]).track(constants.AUTHORIZED_APP_CONNECTED, obj);
      };
      this.rpcServer.onDisconnect = (id, reason) => {
        let obj = callback(closure_2[25]);
        obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, reason };
        obj.dispatch(obj);
      };
      const items = [closure_7, closure_8, closure_11, closure_16, closure_10, closure_12];
      const batchedStoreListener = new RPCServerManager(closure_2[27]).BatchedStoreListener(items.concat(this.stores), () => {
        const rpcServer = self.rpcServer;
        return rpcServer.updateSubscriptions();
      });
      batchedStoreListener.attach("RPCServerManager");
      const subscription = callback(closure_2[25]).subscribe("MESSAGE_CREATE", this.handleMessage);
      const obj2 = callback(closure_2[25]);
      const subscription1 = callback(closure_2[25]).subscribe("MESSAGE_UPDATE", this.handleMessage);
      const obj3 = callback(closure_2[25]);
      const subscription2 = callback(closure_2[25]).subscribe("MESSAGE_DELETE", this.handleMessage);
      const obj4 = callback(closure_2[25]);
      const subscription3 = callback(closure_2[25]).subscribe("SPEAKING", this.handleSpeaking);
      const obj5 = callback(closure_2[25]);
      const subscription4 = callback(closure_2[25]).subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
      const obj6 = callback(closure_2[25]);
      const subscription5 = callback(closure_2[25]).subscribe("GUILD_CREATE", this.handleGuildCreate);
      const obj7 = callback(closure_2[25]);
      const subscription6 = callback(closure_2[25]).subscribe("CHANNEL_CREATE", this.handleChannelCreate);
      const obj8 = callback(closure_2[25]);
      const subscription7 = callback(closure_2[25]).subscribe("LOGOUT", this.handleLogout);
      const obj9 = callback(closure_2[25]);
      const subscription8 = callback(closure_2[25]).subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj10 = callback(closure_2[25]);
      const subscription9 = callback(closure_2[25]).subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
      const obj11 = callback(closure_2[25]);
      const subscription10 = callback(closure_2[25]).subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
      const obj12 = callback(closure_2[25]);
      const subscription11 = callback(closure_2[25]).subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
      const obj13 = callback(closure_2[25]);
      const subscription12 = callback(closure_2[25]).subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
      const obj14 = callback(closure_2[25]);
      const subscription13 = callback(closure_2[25]).subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
      const obj15 = callback(closure_2[25]);
      const subscription14 = callback(closure_2[25]).subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
      const obj16 = callback(closure_2[25]);
      const subscription15 = callback(closure_2[25]).subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
      const obj17 = callback(closure_2[25]);
      const subscription16 = callback(closure_2[25]).subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
      const obj18 = callback(closure_2[25]);
      const subscription17 = callback(closure_2[25]).subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
      const obj19 = callback(closure_2[25]);
      const subscription18 = callback(closure_2[25]).subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
      const obj20 = callback(closure_2[25]);
      const subscription19 = callback(closure_2[25]).subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
      const obj21 = callback(closure_2[25]);
      const subscription20 = callback(closure_2[25]).subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
      const obj22 = callback(closure_2[25]);
      const subscription21 = callback(closure_2[25]).subscribe("USER_UPDATE", this.handleUserUpdate);
      const obj23 = callback(closure_2[25]);
      const subscription22 = callback(closure_2[25]).subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
      const obj24 = callback(closure_2[25]);
      const subscription23 = callback(closure_2[25]).subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
      const obj25 = callback(closure_2[25]);
      const subscription24 = callback(closure_2[25]).subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
  };
  items[1] = obj;
  obj = {
    key: "terminate",
    value: function terminate() {
      callback(closure_2[25]).unsubscribe("MESSAGE_CREATE", this.handleMessage);
      const obj = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("MESSAGE_UPDATE", this.handleMessage);
      const obj2 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("MESSAGE_DELETE", this.handleMessage);
      const obj3 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("SPEAKING", this.handleSpeaking);
      const obj4 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
      const obj5 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("GUILD_CREATE", this.handleGuildCreate);
      const obj6 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
      const obj7 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("LOGOUT", this.handleLogout);
      const obj8 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj9 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
      const obj10 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
      const obj11 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
      const obj12 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
      const obj13 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
      const obj14 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
      const obj15 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
      const obj16 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
      const obj17 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
      const obj18 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
      const obj19 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
      const obj20 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
      const obj21 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("USER_UPDATE", this.handleUserUpdate);
      const obj22 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
      const obj23 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
      const obj24 = callback(closure_2[25]);
      callback(closure_2[25]).unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
  };
  items[2] = obj;
  return callback(RPCServerManager, items);
}();
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");

export default tmp3;
