// Module ID: 16094
// Function ID: 123831
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16094 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getTargetType(arg0) {
  if (arg0 === constants2.ALL) {
    let CHANNEL = constants.ALL;
  } else if (arg0 <= constants2.GUILD_UPDATE) {
    CHANNEL = constants.GUILD;
  } else {
    if (arg0 > constants2.CHANNEL_DELETE) {
      if (arg0 !== constants2.MESSAGE_BULK_DELETE) {
        if (arg0 <= constants2.CHANNEL_OVERWRITE_DELETE) {
          CHANNEL = constants.CHANNEL_OVERWRITE;
        } else {
          if (arg0 > constants2.BOT_ADD) {
            if (arg0 !== constants2.MESSAGE_DELETE) {
              if (arg0 !== constants2.MESSAGE_PIN) {
                if (arg0 !== constants2.MESSAGE_UNPIN) {
                  if (arg0 <= constants2.ROLE_DELETE) {
                    CHANNEL = constants.ROLE;
                  } else if (arg0 <= constants2.INVITE_DELETE) {
                    CHANNEL = constants.INVITE;
                  } else if (arg0 <= constants2.WEBHOOK_DELETE) {
                    CHANNEL = constants.WEBHOOK;
                  } else if (arg0 <= constants2.EMOJI_DELETE) {
                    CHANNEL = constants.EMOJI;
                  } else if (arg0 <= constants2.INTEGRATION_DELETE) {
                    CHANNEL = constants.INTEGRATION;
                  } else if (arg0 <= constants2.STAGE_INSTANCE_DELETE) {
                    CHANNEL = constants.STAGE_INSTANCE;
                  } else if (arg0 <= constants2.STICKER_DELETE) {
                    CHANNEL = constants.STICKER;
                  } else if (arg0 <= constants2.GUILD_SCHEDULED_EVENT_DELETE) {
                    CHANNEL = constants.GUILD_SCHEDULED_EVENT;
                  } else if (arg0 <= constants2.THREAD_DELETE) {
                    CHANNEL = constants.THREAD;
                  } else if (arg0 === constants2.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                    CHANNEL = constants.APPLICATION_COMMAND;
                  } else if (arg0 <= constants2.SOUNDBOARD_SOUND_DELETE) {
                    CHANNEL = constants.GUILD_SOUNDBOARD;
                  } else if (arg0 < constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                    CHANNEL = constants.AUTO_MODERATION_RULE;
                  } else {
                    if (arg0 !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                      if (arg0 !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
                        if (arg0 !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                          if (arg0 !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
                            if (arg0 <= constants2.CREATOR_MONETIZATION_TERMS_ACCEPTED) {
                              CHANNEL = constants.GUILD;
                            } else if (arg0 <= constants2.ONBOARDING_PROMPT_DELETE) {
                              CHANNEL = constants.ONBOARDING_PROMPT;
                            } else if (arg0 <= constants2.ONBOARDING_UPDATE) {
                              CHANNEL = constants.GUILD_ONBOARDING;
                            } else if (arg0 <= constants2.GUILD_HOME_REMOVE_ITEM) {
                              CHANNEL = constants.GUILD_HOME;
                            } else if (arg0 <= constants2.HARMFUL_LINKS_BLOCKED_MESSAGE) {
                              CHANNEL = constants.GUILD;
                            } else if (arg0 <= constants2.HOME_SETTINGS_UPDATE) {
                              CHANNEL = constants.HOME_SETTINGS;
                            } else if (arg0 <= constants2.VOICE_CHANNEL_STATUS_DELETE) {
                              CHANNEL = constants.VOICE_CHANNEL_STATUS;
                            } else if (arg0 <= constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) {
                              CHANNEL = constants.GUILD_SCHEDULED_EVENT_EXCEPTION;
                            } else if (arg0 <= constants2.GUILD_MEMBER_VERIFICATION_UPDATE) {
                              CHANNEL = constants.GUILD_MEMBER_VERIFICATION;
                            } else if (arg0 <= constants2.GUILD_PROFILE_UPDATE) {
                              CHANNEL = constants.GUILD_PROFILE;
                            } else if (arg0 <= constants2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) {
                              CHANNEL = constants.GUILD;
                            } else {
                              const _HermesInternal = HermesInternal;
                              importDefault(dependencyMap[7]).captureMessage("Unknown target type for: " + arg0);
                              CHANNEL = constants.UNKNOWN;
                              const obj = importDefault(dependencyMap[7]);
                            }
                          }
                        }
                      }
                    }
                    CHANNEL = constants.USER;
                  }
                }
              }
            }
          }
          CHANNEL = constants.USER;
        }
      }
    }
    CHANNEL = constants.CHANNEL;
  }
  return CHANNEL;
}
function getActionType(arg0) {
  if (constants2.CHANNEL_CREATE !== arg0) {
    if (constants2.CHANNEL_OVERWRITE_CREATE !== arg0) {
      if (constants2.MEMBER_BAN_REMOVE !== arg0) {
        if (constants2.ROLE_CREATE !== arg0) {
          if (constants2.INVITE_CREATE !== arg0) {
            if (constants2.WEBHOOK_CREATE !== arg0) {
              if (constants2.EMOJI_CREATE !== arg0) {
                if (constants2.STICKER_CREATE !== arg0) {
                  if (constants2.MESSAGE_PIN !== arg0) {
                    if (constants2.BOT_ADD !== arg0) {
                      if (constants2.INTEGRATION_CREATE !== arg0) {
                        if (constants2.STAGE_INSTANCE_CREATE !== arg0) {
                          if (constants2.GUILD_SCHEDULED_EVENT_CREATE !== arg0) {
                            if (constants2.THREAD_CREATE !== arg0) {
                              if (constants2.AUTO_MODERATION_RULE_CREATE !== arg0) {
                                if (constants2.CREATOR_MONETIZATION_REQUEST_CREATED !== arg0) {
                                  if (constants2.ONBOARDING_PROMPT_CREATE !== arg0) {
                                    if (constants2.ONBOARDING_CREATE !== arg0) {
                                      if (constants2.GUILD_HOME_FEATURE_ITEM !== arg0) {
                                        if (constants2.SOUNDBOARD_SOUND_CREATE !== arg0) {
                                          if (constants2.HOME_SETTINGS_CREATE !== arg0) {
                                            if (constants2.VOICE_CHANNEL_STATUS_CREATE !== arg0) {
                                              if (constants2.CHANNEL_DELETE !== arg0) {
                                                if (constants2.CHANNEL_OVERWRITE_DELETE !== arg0) {
                                                  if (constants2.MEMBER_KICK !== arg0) {
                                                    if (constants2.MEMBER_PRUNE !== arg0) {
                                                      if (constants2.MEMBER_BAN_ADD !== arg0) {
                                                        if (constants2.ROLE_DELETE !== arg0) {
                                                          if (constants2.INVITE_DELETE !== arg0) {
                                                            if (constants2.WEBHOOK_DELETE !== arg0) {
                                                              if (constants2.EMOJI_DELETE !== arg0) {
                                                                if (constants2.STICKER_DELETE !== arg0) {
                                                                  if (constants2.MESSAGE_DELETE !== arg0) {
                                                                    if (constants2.MESSAGE_BULK_DELETE !== arg0) {
                                                                      if (constants2.MESSAGE_UNPIN !== arg0) {
                                                                        if (constants2.INTEGRATION_DELETE !== arg0) {
                                                                          if (constants2.MEMBER_DISCONNECT !== arg0) {
                                                                            if (constants2.STAGE_INSTANCE_DELETE !== arg0) {
                                                                              if (constants2.GUILD_SCHEDULED_EVENT_DELETE !== arg0) {
                                                                                if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE !== arg0) {
                                                                                  if (constants2.THREAD_DELETE !== arg0) {
                                                                                    if (constants2.AUTO_MODERATION_BLOCK_MESSAGE !== arg0) {
                                                                                      if (constants2.AUTO_MODERATION_RULE_DELETE !== arg0) {
                                                                                        if (constants2.ONBOARDING_PROMPT_DELETE !== arg0) {
                                                                                          if (constants2.GUILD_HOME_REMOVE_ITEM !== arg0) {
                                                                                            if (constants2.SOUNDBOARD_SOUND_DELETE !== arg0) {
                                                                                              if (constants2.VOICE_CHANNEL_STATUS_DELETE !== arg0) {
                                                                                                if (constants2.GUILD_UPDATE !== arg0) {
                                                                                                  if (constants2.CHANNEL_UPDATE !== arg0) {
                                                                                                    if (constants2.CHANNEL_OVERWRITE_UPDATE !== arg0) {
                                                                                                      if (constants2.MEMBER_UPDATE !== arg0) {
                                                                                                        if (constants2.MEMBER_ROLE_UPDATE !== arg0) {
                                                                                                          if (constants2.ROLE_UPDATE !== arg0) {
                                                                                                            if (constants2.INVITE_UPDATE !== arg0) {
                                                                                                              if (constants2.WEBHOOK_UPDATE !== arg0) {
                                                                                                                if (constants2.EMOJI_UPDATE !== arg0) {
                                                                                                                  if (constants2.STICKER_UPDATE !== arg0) {
                                                                                                                    if (constants2.INTEGRATION_UPDATE !== arg0) {
                                                                                                                      if (constants2.MEMBER_MOVE !== arg0) {
                                                                                                                        if (constants2.STAGE_INSTANCE_UPDATE !== arg0) {
                                                                                                                          if (constants2.GUILD_SCHEDULED_EVENT_UPDATE !== arg0) {
                                                                                                                            if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== arg0) {
                                                                                                                              if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== arg0) {
                                                                                                                                if (constants2.THREAD_UPDATE !== arg0) {
                                                                                                                                  if (constants2.APPLICATION_COMMAND_PERMISSION_UPDATE !== arg0) {
                                                                                                                                    if (constants2.CREATOR_MONETIZATION_TERMS_ACCEPTED !== arg0) {
                                                                                                                                      if (constants2.AUTO_MODERATION_RULE_UPDATE !== arg0) {
                                                                                                                                        if (constants2.AUTO_MODERATION_FLAG_TO_CHANNEL !== arg0) {
                                                                                                                                          if (constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED !== arg0) {
                                                                                                                                            if (constants2.AUTO_MODERATION_QUARANTINE_USER !== arg0) {
                                                                                                                                              if (constants2.ONBOARDING_PROMPT_UPDATE !== arg0) {
                                                                                                                                                if (constants2.ONBOARDING_UPDATE !== arg0) {
                                                                                                                                                  if (constants2.SOUNDBOARD_SOUND_UPDATE !== arg0) {
                                                                                                                                                    if (constants2.HOME_SETTINGS_UPDATE !== arg0) {
                                                                                                                                                      if (constants2.GUILD_MEMBER_VERIFICATION_UPDATE !== arg0) {
                                                                                                                                                        if (constants2.GUILD_PROFILE_UPDATE !== arg0) {
                                                                                                                                                          if (constants2.GUILD_MIGRATE_PIN_PERMISSION !== arg0) {
                                                                                                                                                            if (constants2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION !== arg0) {
                                                                                                                                                              return constants3.ALL;
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
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                return constants3.UPDATE;
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
                                                  }
                                                }
                                              }
                                              return constants3.DELETE;
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
  return constants3.CREATE;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importDefaultResult1 = importDefault(dependencyMap[5]);
({ AuditLogTargetTypes: closure_7, AuditLogActions: closure_8, AuditLogActionTypes: closure_9 } = arg1(dependencyMap[6]));
class AuditLogChange {
  constructor(arg0, arg1, arg2) {
    tmp = closure_6(this, AuditLogChange);
    this.key = global;
    this.oldValue = arg1;
    this.newValue = importDefault;
    return;
  }
}
const tmp4 = arg1(dependencyMap[6]);
const importDefaultResultResult = importDefaultResult(AuditLogChange);
const tmp6 = (importDefaultResult1) => {
  class AuditLogRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, AuditLogRecord);
      obj = closure_3(AuditLogRecord);
      tmp2 = closure_2;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, action: tmp6.action } = importDefaultResult1);
      tmp2Result.actionType = closure_12(tmp2Result.action);
      ({ targetId: tmp6.targetId, timestampStart } = importDefaultResult1);
      if (null == timestampStart) {
        tmp7 = AuditLogRecord;
        tmp8 = closure_1;
        num = 8;
        num2 = 9;
        tmp9 = AuditLogRecord(closure_1[8]);
        obj2 = AuditLogRecord(closure_1[9]);
        timestampStart = tmp9(obj2.extractTimestamp(tmp2Result.id));
      }
      tmp2Result.timestampStart = timestampStart;
      timestampStart2 = importDefaultResult1.timestampEnd;
      if (null == timestampStart2) {
        timestampStart2 = tmp2Result.timestampStart;
      }
      tmp2Result.timestampEnd = timestampStart2;
      ({ userId: tmp6.userId, changes } = importDefaultResult1);
      if (null == changes) {
        changes = [];
      }
      tmp2Result.changes = changes;
      tmp2Result.targetType = closure_11(tmp2Result.action);
      options = importDefaultResult1.options;
      if (null == options) {
        options = {};
      }
      tmp2Result.options = options;
      id = importDefaultResult1.target;
      if (null == id) {
        id = importDefaultResult1.id;
      }
      tmp2Result.target = id;
      user = importDefaultResult1.user;
      tmp10 = null;
      if (null != user) {
        tmp10 = user;
      }
      tmp2Result.user = tmp10;
      return tmp2Result;
    }
  }
  const importDefault = AuditLogRecord;
  callback(AuditLogRecord, importDefaultResult1);
  return importDefaultResult(AuditLogRecord);
}(importDefaultResult1);
const result = arg1(dependencyMap[10]).fileFinishedImporting("records/AuditLogRecord.tsx");

export default tmp6;
export { getTargetType };
export { getActionType };
export const AuditLogChange = importDefaultResultResult;
