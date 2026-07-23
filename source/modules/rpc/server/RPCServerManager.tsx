// Module ID: 13390
// Function ID: 102944
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 6942, 1348, 1917, 1838, 4177, 4217, 4202, 3767, 1906, 1849, 4146, 653, 4155, 10480, 4191, 1327, 10501, 10526, 13391, 10502, 6965, 477, 686, 675, 566, 2]

// Module 13390 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import ME from "ME";
import { ActivityLayoutMode } from "items3";
import { FrameLayoutModes } from "FrameLayoutModes";
import { MediaEngineContextTypes } from "DesktopSources";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = ME);
let tmp3 = (() => {
  class RPCServerManager {
    constructor(arg0) {
      self = this;
      self = this;
      tmp = outer1_4(this, self);
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
              const MESSAGE_CREATE = outer2_20.MESSAGE_CREATE;
              ({ channelId, message } = type);
              const _HermesInternal2 = HermesInternal;
              let combined = "" + MESSAGE_CREATE + type.message.id;
              let MESSAGE_UPDATE = MESSAGE_CREATE;
            }
          } else if ("MESSAGE_UPDATE" === type) {
            MESSAGE_UPDATE = outer2_20.MESSAGE_UPDATE;
            channelId = type.message.channel_id;
            message = type.message;
            combined = null;
          } else if ("MESSAGE_DELETE" === type) {
            const MESSAGE_DELETE = outer2_20.MESSAGE_DELETE;
            channelId = type.channelId;
            message = { id: type.id };
            const _HermesInternal = HermesInternal;
            combined = "" + MESSAGE_DELETE + type.id;
            MESSAGE_UPDATE = MESSAGE_DELETE;
          } else {
            let obj = RPCServerManager(outer2_2[18]);
            return obj.assertNever(type);
          }
          if (null != channelId) {
            const rpcServer = self.rpcServer;
            obj = { channel_id: channelId };
            obj = { channel_id: channelId, message: RPCServerManager(outer2_2[19]).transformInternalTextMessage(message) };
            const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
            const obj4 = RPCServerManager(outer2_2[19]);
          }
        }
      };
      this.handleSpeaking = (speakingFlags) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          if (0 !== speakingFlags.speakingFlags) {
            let SPEAKING_STOP = outer2_20.SPEAKING_START;
          } else {
            SPEAKING_STOP = outer2_20.SPEAKING_STOP;
          }
          if (speakingFlags.context === outer2_24.DEFAULT) {
            const voiceChannelId = outer2_14.getVoiceChannelId();
            if (null != voiceChannelId) {
              const channel = outer2_7.getChannel(voiceChannelId);
              if (null != channel) {
                const voiceState = outer2_16.getVoiceState(channel.getGuildId(), speakingFlags.userId);
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
          const result = rpcServer.dispatchToSubscriptions(outer2_20.VOICE_CHANNEL_SELECT, {}, obj);
        }
      };
      this.handleNotificationCreate = (icon) => {
        icon = icon.icon;
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          let obj = { channel_id: tmp, message: RPCServerManager(outer2_2[19]).transformInternalTextMessage(tmp2) };
          let remoteIconURL = null;
          if (null != icon) {
            obj = RPCServerManager(outer2_2[19]);
            remoteIconURL = obj.getRemoteIconURL(icon);
          }
          obj.icon_url = remoteIconURL;
          obj.title = tmp3;
          obj.body = tmp4;
          const result = rpcServer.dispatchToSubscriptions(outer2_20.NOTIFICATION_CREATE, {}, obj);
          const obj3 = RPCServerManager(outer2_2[19]);
        }
      };
      this.handleActivityJoin = (applicationId) => {
        applicationId = applicationId.applicationId;
        const parentApplicationId = applicationId.parentApplicationId;
        if (0 !== applicationId.rpcServer.subscriptions.length) {
          const obj = { application_id: applicationId, secret: tmp };
          if (tmp3) {
            obj.intent = tmp2;
          }
          const rpcServer = applicationId.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ACTIVITY_JOIN, (socket) => {
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
          const rpcServer2 = applicationId.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(outer2_20.GAME_JOIN, (socket) => socket.socket.application.id === applicationId, obj);
        }
      };
      this.handleActivityLayoutModeUpdate = (arg0) => {
        let layoutMode;
        let self;
        ({ applicationId: self, layoutMode } = arg0);
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          let obj = { is_pip_mode: layoutMode !== outer2_22.FOCUSED };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
          obj = { layout_mode: layoutMode };
          const rpcServer2 = self.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(outer2_20.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
          const rpcServer3 = self.rpcServer;
          const result2 = rpcServer3.dispatchToSubscriptions(outer2_20.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_0, obj);
        }
      };
      this.handleFrameUpdateLayoutMode = (applicationId) => {
        applicationId = applicationId.applicationId;
        if (0 !== applicationId.rpcServer.subscriptions.length) {
          if (tmp === outer2_23.PIP) {
            let FOCUSED = outer2_22.PIP;
          } else {
            FOCUSED = outer2_22.FOCUSED;
          }
          const rpcServer = applicationId.rpcServer;
          let obj = { is_pip_mode: FOCUSED !== outer2_22.FOCUSED };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          obj = { layout_mode: FOCUSED };
          const rpcServer2 = applicationId.rpcServer;
          const result1 = rpcServer2.dispatchToSubscriptions(outer2_20.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
          const rpcServer3 = applicationId.rpcServer;
          const result2 = rpcServer3.dispatchToSubscriptions(outer2_20.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
        }
      };
      this.handleThermalStateChange = (applicationId) => {
        applicationId = applicationId.applicationId;
        if (0 !== applicationId.rpcServer.subscriptions.length) {
          if (null != applicationId) {
            const obj = { thermal_state: RPCServerManager(outer2_2[20]).getThermalState() };
            const rpcServer = applicationId.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(outer2_20.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
            const obj2 = RPCServerManager(outer2_2[20]);
          }
        }
      };
      this.handleScreenOrientationUpdate = (arg0) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { screen_orientation: tmp };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ORIENTATION_UPDATE, {}, obj);
        }
      };
      this.handleEmbeddedActivityUpdate = () => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, RPCServerManager(outer2_2[21]).activityInstanceConnectedParticipants());
          const obj = RPCServerManager(outer2_2[21]);
        }
      };
      this.handleActivityMessage = (arg0) => {
        let activity;
        let application;
        let channelId;
        let message;
        ({ channelId, message } = arg0);
        let application_id;
        if (0 !== application_id.rpcServer.subscriptions.length) {
          ({ application, activity } = message);
          if (null != application) {
            if (null != activity) {
              if (null != activity.party_id) {
                const author = message.author;
                let id;
                if (null != author) {
                  id = author.id;
                }
                const user = outer2_15.getUser(id);
                if (null != user) {
                  const currentUser = outer2_15.getCurrentUser();
                  if (null != currentUser) {
                    if (user.id !== currentUser.id) {
                      if (activity.type === outer2_17.JOIN_REQUEST) {
                        let applicationActivity = outer2_11.getApplicationActivity(currentUser.id, application.id);
                      } else {
                        applicationActivity = outer2_11.getApplicationActivity(user.id, application.id);
                      }
                      if (null != applicationActivity) {
                        if (null != applicationActivity.party) {
                          if (applicationActivity.party.id === activity.party_id) {
                            application_id = applicationActivity.application_id;
                            const type = activity.type;
                            if (outer2_17.JOIN === type) {
                              const rpcServer = application_id.rpcServer;
                              let obj = { user: outer2_1(outer2_2[22])(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                              const result = rpcServer.dispatchToSubscriptions(outer2_20.ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                            } else if (outer2_17.JOIN_REQUEST === type) {
                              const rpcServer2 = application_id.rpcServer;
                              obj = { user: outer2_1(outer2_2[22])(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                              const result1 = rpcServer2.dispatchToSubscriptions(outer2_20.ACTIVITY_JOIN_REQUEST, (socket) => socket.socket.application.id === application_id, obj);
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
        accessToken = accessToken.accessToken;
        const sockets = accessToken.rpcServer.sockets;
        const item = sockets.forEach((authorization) => {
          if (authorization.authorization.accessToken === accessToken) {
            authorization.close(outer3_21.TOKEN_REVOKED, "Token revoked");
          }
        });
      };
      this.handleGuildCreate = (guild) => {
        const id = guild.guild.id;
        guild = outer2_9.getGuild(id);
        let tmp2 = 0 !== self.rpcServer.subscriptions.length;
        if (tmp2) {
          tmp2 = null != guild;
        }
        if (tmp2) {
          const rpcServer = self.rpcServer;
          const obj = { id, name: guild.name };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.GUILD_CREATE, {}, obj);
        }
      };
      this.handleChannelCreate = (arg0) => {
        if (0 !== self.rpcServer.subscriptions.length) {
          const rpcServer = self.rpcServer;
          const obj = { id: tmp, name: tmp2, type: tmp3 };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.CHANNEL_CREATE, {}, obj);
        }
      };
      this.handleLogout = () => {
        const sockets = self.rpcServer.sockets;
        const item = sockets.forEach((close) => close.close(outer3_21.CLOSE_NORMAL, "User logout"));
      };
      this.handleRelationshipAdd = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = outer2_15.getUser(tmp);
          if (null != user) {
            _self = RPCServerManager(outer2_2[19]).transformBaseRelationship(tmp2, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(outer2_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer3_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
            const obj = RPCServerManager(outer2_2[19]);
          }
        }
      };
      this.handleRelationshipUpdate = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = outer2_15.getUser(tmp);
          if (null != user) {
            _self = RPCServerManager(outer2_2[19]).transformBaseRelationship(tmp2, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(outer2_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer3_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
            const obj = RPCServerManager(outer2_2[19]);
          }
        }
      };
      this.handleRelationshipRemove = (arg0) => {
        let _self;
        if (0 !== _self.rpcServer.subscriptions.length) {
          const user = outer2_15.getUser(tmp);
          if (null != user) {
            _self = RPCServerManager(outer2_2[19]).transformBaseRelationship(outer2_18.NONE, user);
            const rpcServer = _self.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(outer2_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer3_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
            const obj = RPCServerManager(outer2_2[19]);
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
            const relationshipType = outer3_13.getRelationshipType(closure_0);
            if (relationshipType === outer3_18.NONE) {
              return 0;
            } else {
              const user = outer3_15.getUser(closure_0);
              if (null == user) {
                return 0;
              } else {
                closure_0 = RPCServerManager(outer3_2[19]).transformBaseRelationship(relationshipType, user);
                const rpcServer = outer1_1.rpcServer;
                const result = rpcServer.dispatchToSubscriptions(outer3_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer4_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
              }
            }
          }
          const set = new Set(updates.map((user) => user.user.id));
          const tmp6 = outer2_25(set.values());
          let iter = tmp6();
          if (!iter.done) {
            do {
              _self = iter.value;
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
        let self;
        if (0 !== self.rpcServer.subscriptions.length) {
          function _loop2() {
            if (closure_1 === outer3_18.NONE) {
              return 0;
            } else {
              const user = outer3_15.getUser(closure_0);
              if (null == user) {
                return 0;
              } else {
                closure_0 = RPCServerManager(outer3_2[19]).transformBaseRelationship(closure_1, user);
                const rpcServer = outer1_1.rpcServer;
                const result = rpcServer.dispatchToSubscriptions(outer3_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer4_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
              }
            }
          }
          const mutableRelationships = outer2_13.getMutableRelationships();
          const tmp3 = outer2_25(mutableRelationships.entries());
          let iter = tmp3();
          if (!iter.done) {
            do {
              let tmp4 = outer2_3;
              let tmp5 = outer2_3(iter.value, 2);
              self = tmp5[0];
              self = tmp5[1];
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
          const relationshipType = outer2_13.getRelationshipType(id);
          if (relationshipType !== outer2_18.NONE) {
            user = outer2_15.getUser(id);
            if (null != user) {
              _self = RPCServerManager(outer2_2[19]).transformBaseRelationship(relationshipType, user);
              const rpcServer = _self.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(outer2_20.RELATIONSHIP_UPDATE, {}, (socket) => RPCServerManager(outer3_2[19]).transformApplicationRelationship(closure_0, socket.socket.application.id));
              const obj = RPCServerManager(outer2_2[19]);
            }
          }
        }
      };
      this.handleEntitlementCreate = (entitlement) => {
        entitlement = entitlement.entitlement;
        if (0 !== entitlement.rpcServer.subscriptions.length) {
          const rpcServer = entitlement.rpcServer;
          const obj = { entitlement };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ENTITLEMENT_CREATE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
        }
      };
      this.handleEntitlementDelete = (entitlement) => {
        entitlement = entitlement.entitlement;
        if (0 !== entitlement.rpcServer.subscriptions.length) {
          const rpcServer = entitlement.rpcServer;
          const obj = { entitlement };
          const result = rpcServer.dispatchToSubscriptions(outer2_20.ENTITLEMENT_DELETE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
        }
      };
      this.handleQuestEnrollSuccess = (enrolledQuestUserStatus) => {
        enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
        let questId;
        let activityApplicationId;
        if (0 !== questId.rpcServer.subscriptions.length) {
          questId = enrolledQuestUserStatus.questId;
          const quest = outer2_6.getQuest(questId);
          if (null != quest) {
            let obj = RPCServerManager(outer2_2[23]);
            activityApplicationId = obj.getActivityApplicationId(quest);
            if (null != activityApplicationId) {
              const rpcServer = questId.rpcServer;
              obj = { quest_id: questId, is_enrolled: null != enrolledQuestUserStatus.enrolledAt, enrolled_at: enrolledQuestUserStatus.enrolledAt };
              const result = rpcServer.dispatchToSubscriptions(outer2_20.QUEST_ENROLLMENT_STATUS_UPDATE, (socket) => {
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
  let obj = {
    key: "loadServer",
    value: function loadServer() {
      let done;
      let length;
      let length2;
      const self = this;
      if (RPCServerManager(outer1_2[24]).isPlatformEmbedded) {
        const result = self.registerTransportsForEmbeddedPlatform();
      }
      const tmp2 = outer1_25(self.transports);
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
          let tmp4 = outer1_3;
          let tmp5 = outer1_3(entries[num], 2);
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
          let tmp7 = outer1_3;
          let tmp8 = outer1_3(entries1[num2], 2);
          let rpcServer3 = self.rpcServer;
          let setEventHandlerResult = rpcServer3.setEventHandler(tmp8[0], tmp8[1]);
          num2 = num2 + 1;
          length2 = entries1.length;
        } while (num2 < length2);
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "init",
    value: function init() {
      const self = this;
      this.rpcServer.getCurrentUser = () => outer2_15.getCurrentUser();
      this.rpcServer.onConnect = (app_id) => {
        let obj = outer2_1(outer2_2[25]);
        obj = { type: "RPC_APP_CONNECTED", socketId: app_id.id, application: app_id.application };
        obj.dispatch(obj);
        obj = { app_id: app_id.application.id, transport: app_id.transport };
        outer2_1(outer2_2[26]).track(outer2_19.AUTHORIZED_APP_CONNECTED, obj);
      };
      this.rpcServer.onDisconnect = (id, reason) => {
        let obj = outer2_1(outer2_2[25]);
        obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, reason };
        obj.dispatch(obj);
      };
      const items = [outer1_7, outer1_8, outer1_11, outer1_16, outer1_10, outer1_12];
      const batchedStoreListener = new RPCServerManager(outer1_2[27]).BatchedStoreListener(items.concat(this.stores), () => {
        const rpcServer = self.rpcServer;
        return rpcServer.updateSubscriptions();
      });
      batchedStoreListener.attach("RPCServerManager");
      const subscription = outer1_1(outer1_2[25]).subscribe("MESSAGE_CREATE", this.handleMessage);
      const obj2 = outer1_1(outer1_2[25]);
      const subscription1 = outer1_1(outer1_2[25]).subscribe("MESSAGE_UPDATE", this.handleMessage);
      const obj3 = outer1_1(outer1_2[25]);
      const subscription2 = outer1_1(outer1_2[25]).subscribe("MESSAGE_DELETE", this.handleMessage);
      const obj4 = outer1_1(outer1_2[25]);
      const subscription3 = outer1_1(outer1_2[25]).subscribe("SPEAKING", this.handleSpeaking);
      const obj5 = outer1_1(outer1_2[25]);
      const subscription4 = outer1_1(outer1_2[25]).subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
      const obj6 = outer1_1(outer1_2[25]);
      const subscription5 = outer1_1(outer1_2[25]).subscribe("GUILD_CREATE", this.handleGuildCreate);
      const obj7 = outer1_1(outer1_2[25]);
      const subscription6 = outer1_1(outer1_2[25]).subscribe("CHANNEL_CREATE", this.handleChannelCreate);
      const obj8 = outer1_1(outer1_2[25]);
      const subscription7 = outer1_1(outer1_2[25]).subscribe("LOGOUT", this.handleLogout);
      const obj9 = outer1_1(outer1_2[25]);
      const subscription8 = outer1_1(outer1_2[25]).subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj10 = outer1_1(outer1_2[25]);
      const subscription9 = outer1_1(outer1_2[25]).subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
      const obj11 = outer1_1(outer1_2[25]);
      const subscription10 = outer1_1(outer1_2[25]).subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
      const obj12 = outer1_1(outer1_2[25]);
      const subscription11 = outer1_1(outer1_2[25]).subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
      const obj13 = outer1_1(outer1_2[25]);
      const subscription12 = outer1_1(outer1_2[25]).subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
      const obj14 = outer1_1(outer1_2[25]);
      const subscription13 = outer1_1(outer1_2[25]).subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
      const obj15 = outer1_1(outer1_2[25]);
      const subscription14 = outer1_1(outer1_2[25]).subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
      const obj16 = outer1_1(outer1_2[25]);
      const subscription15 = outer1_1(outer1_2[25]).subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
      const obj17 = outer1_1(outer1_2[25]);
      const subscription16 = outer1_1(outer1_2[25]).subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
      const obj18 = outer1_1(outer1_2[25]);
      const subscription17 = outer1_1(outer1_2[25]).subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
      const obj19 = outer1_1(outer1_2[25]);
      const subscription18 = outer1_1(outer1_2[25]).subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
      const obj20 = outer1_1(outer1_2[25]);
      const subscription19 = outer1_1(outer1_2[25]).subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
      const obj21 = outer1_1(outer1_2[25]);
      const subscription20 = outer1_1(outer1_2[25]).subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
      const obj22 = outer1_1(outer1_2[25]);
      const subscription21 = outer1_1(outer1_2[25]).subscribe("USER_UPDATE", this.handleUserUpdate);
      const obj23 = outer1_1(outer1_2[25]);
      const subscription22 = outer1_1(outer1_2[25]).subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
      const obj24 = outer1_1(outer1_2[25]);
      const subscription23 = outer1_1(outer1_2[25]).subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
      const obj25 = outer1_1(outer1_2[25]);
      const subscription24 = outer1_1(outer1_2[25]).subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
  };
  items[1] = obj;
  obj = {
    key: "terminate",
    value: function terminate() {
      outer1_1(outer1_2[25]).unsubscribe("MESSAGE_CREATE", this.handleMessage);
      const obj = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("MESSAGE_UPDATE", this.handleMessage);
      const obj2 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("MESSAGE_DELETE", this.handleMessage);
      const obj3 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("SPEAKING", this.handleSpeaking);
      const obj4 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
      const obj5 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("GUILD_CREATE", this.handleGuildCreate);
      const obj6 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
      const obj7 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("LOGOUT", this.handleLogout);
      const obj8 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj9 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
      const obj10 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
      const obj11 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
      const obj12 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
      const obj13 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
      const obj14 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
      const obj15 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
      const obj16 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
      const obj17 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
      const obj18 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
      const obj19 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
      const obj20 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
      const obj21 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("USER_UPDATE", this.handleUserUpdate);
      const obj22 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
      const obj23 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
      const obj24 = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[25]).unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
  };
  items[2] = obj;
  return callback(RPCServerManager, items);
})();
let result = require("_defineProperties").fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");

export default tmp3;
