// Module ID: 18047
// Function ID: 18048
// Name: AuditLogRecord
// Dependencies: [1404, 1085, 1254, 4659, 11, 2]
// Exports: AuditLogChange

// Module 18047 (AuditLogRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import _modDef4659 from "module_4659" /* 4659 */;
import Record from "Record" /* 1404 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
function getTargetType(action) {
  let CHANNEL;
  if (action === constants2.ALL) {
    CHANNEL = constants.ALL;
  } else if (action <= constants2.GUILD_UPDATE) {
    CHANNEL = constants.GUILD;
  } else {
    if (action > constants2.CHANNEL_DELETE) {
      if (action !== constants2.MESSAGE_BULK_DELETE) {
        if (action !== constants2.CHANNEL_POSITION_UPDATE) {
          if (action <= constants2.CHANNEL_OVERWRITE_DELETE) {
            CHANNEL = constants.CHANNEL_OVERWRITE;
          } else {
            if (action > constants2.BOT_ADD) {
              if (action !== constants2.MESSAGE_DELETE) {
                if (action !== constants2.MESSAGE_PIN) {
                  if (action !== constants2.MESSAGE_UNPIN) {
                    if (action > constants2.ROLE_DELETE) {
                      if (action !== constants2.ROLE_POSITION_UPDATE) {
                        if (action <= constants2.INVITE_DELETE) {
                          CHANNEL = constants.INVITE;
                        } else if (action <= constants2.WEBHOOK_DELETE) {
                          CHANNEL = constants.WEBHOOK;
                        } else if (action <= constants2.EMOJI_DELETE) {
                          CHANNEL = constants.EMOJI;
                        } else if (action <= constants2.INTEGRATION_DELETE) {
                          CHANNEL = constants.INTEGRATION;
                        } else if (action <= constants2.STAGE_INSTANCE_DELETE) {
                          CHANNEL = constants.STAGE_INSTANCE;
                        } else if (action <= constants2.STICKER_DELETE) {
                          CHANNEL = constants.STICKER;
                        } else if (action <= constants2.GUILD_SCHEDULED_EVENT_DELETE) {
                          CHANNEL = constants.GUILD_SCHEDULED_EVENT;
                        } else if (action <= constants2.THREAD_DELETE) {
                          CHANNEL = constants.THREAD;
                        } else if (action === constants2.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                          CHANNEL = constants.APPLICATION_COMMAND;
                        } else if (action <= constants2.SOUNDBOARD_SOUND_DELETE) {
                          CHANNEL = constants.GUILD_SOUNDBOARD;
                        } else if (action < constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                          CHANNEL = constants.AUTO_MODERATION_RULE;
                        } else {
                          if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                            if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
                              if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                                if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
                                  if (action <= constants2.CREATOR_MONETIZATION_TERMS_ACCEPTED) {
                                    CHANNEL = constants.GUILD;
                                  } else if (action <= constants2.ONBOARDING_PROMPT_DELETE) {
                                    CHANNEL = constants.ONBOARDING_PROMPT;
                                  } else if (action <= constants2.ONBOARDING_UPDATE) {
                                    CHANNEL = constants.GUILD_ONBOARDING;
                                  } else if (action <= constants2.GUILD_HOME_REMOVE_ITEM) {
                                    CHANNEL = constants.GUILD_HOME;
                                  } else if (action <= constants2.HARMFUL_LINKS_BLOCKED_MESSAGE) {
                                    CHANNEL = constants.GUILD;
                                  } else if (action <= constants2.HOME_SETTINGS_UPDATE) {
                                    CHANNEL = constants.HOME_SETTINGS;
                                  } else if (action <= constants2.VOICE_CHANNEL_STATUS_DELETE) {
                                    CHANNEL = constants.VOICE_CHANNEL_STATUS;
                                  } else if (action <= constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) {
                                    CHANNEL = constants.GUILD_SCHEDULED_EVENT_EXCEPTION;
                                  } else if (action <= constants2.GUILD_MEMBER_VERIFICATION_UPDATE) {
                                    CHANNEL = constants.GUILD_MEMBER_VERIFICATION;
                                  } else if (action <= constants2.GUILD_PROFILE_UPDATE) {
                                    CHANNEL = constants.GUILD_PROFILE;
                                  } else if (action <= constants2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) {
                                    CHANNEL = constants.GUILD;
                                  } else {
                                    const _HermesInternal = HermesInternal;
                                    const obj = SentryUtilsDefault;
                                    obj.captureMessage("Unknown target type for: " + action);
                                    CHANNEL = constants.UNKNOWN;
                                  }
                                }
                              }
                            }
                          }
                          CHANNEL = constants.USER;
                        }
                      }
                    }
                    CHANNEL = constants.ROLE;
                  }
                }
              }
            }
            CHANNEL = constants.USER;
          }
        }
      }
    }
    CHANNEL = constants.CHANNEL;
  }
  return CHANNEL;
}
function getActionType(action) {
  const tmp = constants2;
  if (constants2.CHANNEL_CREATE !== action) {
    if (tmp.CHANNEL_OVERWRITE_CREATE !== action) {
      if (tmp.MEMBER_BAN_REMOVE !== action) {
        if (tmp.ROLE_CREATE !== action) {
          if (tmp.INVITE_CREATE !== action) {
            if (tmp.WEBHOOK_CREATE !== action) {
              if (tmp.EMOJI_CREATE !== action) {
                if (tmp.STICKER_CREATE !== action) {
                  if (tmp.MESSAGE_PIN !== action) {
                    if (tmp.BOT_ADD !== action) {
                      if (tmp.INTEGRATION_CREATE !== action) {
                        if (tmp.STAGE_INSTANCE_CREATE !== action) {
                          if (tmp.GUILD_SCHEDULED_EVENT_CREATE !== action) {
                            if (tmp.THREAD_CREATE !== action) {
                              if (tmp.AUTO_MODERATION_RULE_CREATE !== action) {
                                if (tmp.CREATOR_MONETIZATION_REQUEST_CREATED !== action) {
                                  if (tmp.ONBOARDING_PROMPT_CREATE !== action) {
                                    if (tmp.ONBOARDING_CREATE !== action) {
                                      if (tmp.GUILD_HOME_FEATURE_ITEM !== action) {
                                        if (tmp.SOUNDBOARD_SOUND_CREATE !== action) {
                                          if (tmp.HOME_SETTINGS_CREATE !== action) {
                                            if (tmp.VOICE_CHANNEL_STATUS_CREATE !== action) {
                                              if (tmp.CHANNEL_DELETE !== action) {
                                                if (tmp.CHANNEL_OVERWRITE_DELETE !== action) {
                                                  if (tmp.MEMBER_KICK !== action) {
                                                    if (tmp.MEMBER_PRUNE !== action) {
                                                      if (tmp.MEMBER_BAN_ADD !== action) {
                                                        if (tmp.ROLE_DELETE !== action) {
                                                          if (tmp.INVITE_DELETE !== action) {
                                                            if (tmp.WEBHOOK_DELETE !== action) {
                                                              if (tmp.EMOJI_DELETE !== action) {
                                                                if (tmp.STICKER_DELETE !== action) {
                                                                  if (tmp.MESSAGE_DELETE !== action) {
                                                                    if (tmp.MESSAGE_BULK_DELETE !== action) {
                                                                      if (tmp.MESSAGE_UNPIN !== action) {
                                                                        if (tmp.INTEGRATION_DELETE !== action) {
                                                                          if (tmp.MEMBER_DISCONNECT !== action) {
                                                                            if (tmp.STAGE_INSTANCE_DELETE !== action) {
                                                                              if (tmp.GUILD_SCHEDULED_EVENT_DELETE !== action) {
                                                                                if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE !== action) {
                                                                                  if (tmp.THREAD_DELETE !== action) {
                                                                                    if (tmp.AUTO_MODERATION_BLOCK_MESSAGE !== action) {
                                                                                      if (tmp.AUTO_MODERATION_RULE_DELETE !== action) {
                                                                                        if (tmp.ONBOARDING_PROMPT_DELETE !== action) {
                                                                                          if (tmp.GUILD_HOME_REMOVE_ITEM !== action) {
                                                                                            if (tmp.SOUNDBOARD_SOUND_DELETE !== action) {
                                                                                              if (tmp.VOICE_CHANNEL_STATUS_DELETE !== action) {
                                                                                                if (tmp.GUILD_UPDATE !== action) {
                                                                                                  if (tmp.CHANNEL_UPDATE !== action) {
                                                                                                    if (tmp.CHANNEL_OVERWRITE_UPDATE !== action) {
                                                                                                      if (tmp.CHANNEL_POSITION_UPDATE !== action) {
                                                                                                        if (tmp.MEMBER_UPDATE !== action) {
                                                                                                          if (tmp.MEMBER_ROLE_UPDATE !== action) {
                                                                                                            if (tmp.ROLE_UPDATE !== action) {
                                                                                                              if (tmp.ROLE_POSITION_UPDATE !== action) {
                                                                                                                if (tmp.INVITE_UPDATE !== action) {
                                                                                                                  if (tmp.WEBHOOK_UPDATE !== action) {
                                                                                                                    if (tmp.EMOJI_UPDATE !== action) {
                                                                                                                      if (tmp.STICKER_UPDATE !== action) {
                                                                                                                        if (tmp.INTEGRATION_UPDATE !== action) {
                                                                                                                          if (tmp.MEMBER_MOVE !== action) {
                                                                                                                            if (tmp.STAGE_INSTANCE_UPDATE !== action) {
                                                                                                                              if (tmp.GUILD_SCHEDULED_EVENT_UPDATE !== action) {
                                                                                                                                if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
                                                                                                                                  if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
                                                                                                                                    if (tmp.THREAD_UPDATE !== action) {
                                                                                                                                      if (tmp.APPLICATION_COMMAND_PERMISSION_UPDATE !== action) {
                                                                                                                                        if (tmp.CREATOR_MONETIZATION_TERMS_ACCEPTED !== action) {
                                                                                                                                          if (tmp.AUTO_MODERATION_RULE_UPDATE !== action) {
                                                                                                                                            if (tmp.AUTO_MODERATION_FLAG_TO_CHANNEL !== action) {
                                                                                                                                              if (tmp.AUTO_MODERATION_USER_COMMUNICATION_DISABLED !== action) {
                                                                                                                                                if (tmp.AUTO_MODERATION_QUARANTINE_USER !== action) {
                                                                                                                                                  if (tmp.ONBOARDING_PROMPT_UPDATE !== action) {
                                                                                                                                                    if (tmp.ONBOARDING_UPDATE !== action) {
                                                                                                                                                      if (tmp.SOUNDBOARD_SOUND_UPDATE !== action) {
                                                                                                                                                        if (tmp.HOME_SETTINGS_UPDATE !== action) {
                                                                                                                                                          if (tmp.GUILD_MEMBER_VERIFICATION_UPDATE !== action) {
                                                                                                                                                            if (tmp.GUILD_PROFILE_UPDATE !== action) {
                                                                                                                                                              if (tmp.GUILD_MIGRATE_PIN_PERMISSION !== action) {
                                                                                                                                                                if (tmp.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION !== action) {
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
({ AuditLogTargetTypes: c2, AuditLogActions: c3, AuditLogActionTypes: closure_4 } = Constants);
class AuditLogRecord extends Record {
  constructor(timestampEnd) {
    let changes;
    let timestampStart;
    const tmp5 = new AuditLogRecord(tmp4, tmp3, tmp2, tmp, new.target);
    ({ id: tmp5.id, action: tmp5.action } = timestampEnd);
    tmp5.actionType = getActionType(tmp5.action);
    ({ targetId: tmp5.targetId, timestampStart } = timestampEnd);
    if (timestampStart == null) {
      const tmp8 = _modDef4659;
      const obj = SnowflakeUtilsDefault;
      timestampStart = tmp8(obj.extractTimestamp(tmp5.id));
    }
    tmp5.timestampStart = timestampStart;
    let timestampStart2 = timestampEnd.timestampEnd;
    if (timestampStart2 == null) {
      timestampStart2 = tmp5.timestampStart;
    }
    tmp5.timestampEnd = timestampStart2;
    ({ userId: tmp5.userId, changes } = timestampEnd);
    if (changes == null) {
      changes = [];
    }
    tmp5.changes = changes;
    tmp5.targetType = getTargetType(tmp5.action);
    let options = timestampEnd.options;
    if (options == null) {
      options = {};
    }
    tmp5.options = options;
    let id = timestampEnd.target;
    if (id == null) {
      id = timestampEnd.id;
    }
    tmp5.target = id;
    let user = timestampEnd.user;
    if (user == null) {
      user = null;
    }
    tmp5.user = user;
    return tmp5;
  }
}
const result = size.fileFinishedImporting("records/AuditLogRecord.tsx");

export default AuditLogRecord;
export { getTargetType };
export { getActionType };
export function AuditLogChange(key, old_value, added) {
  const obj = Object.create(new.target.prototype);
  obj.key = key;
  obj.oldValue = old_value;
  obj.newValue = added;
  return obj;
}
