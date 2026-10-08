// Module ID: 10678
// Function ID: 10679
// Name: useShouldForcePipOrientation
// Dependencies: [2062, 6041, 502, 2023, 5113, 558, 576, 10679, 504, 6043, 8426, 2]

// Module 10678 (useShouldForcePipOrientation)
import Constants from "Constants" /* 2023 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6043 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 10679 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallConstants from "CallConstants" /* 5113 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const OrientationLockState = Constants.OrientationLockState;
({ isStreamParticipant: metroImportDefault, ParticipantTypes: metroImportAll } = CallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldForcePipOrientation(channel) {
  let activityLockOrientation;
  let first;
  let focusedEmbeddedActivityParticipant;
  let tmp10;
  let tmp12;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(6);
  channel = channel.channel;
  let tmp4 = usePipVideoOrStreamDefault(channel.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, ];
    items[1] = AuthenticationStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    cResult[1] = channel.id;
    cResult[2] = P;
    tmp8 = P;
  } else {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  if (cResult[4] !== channel.id) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    cResult[4] = channel.id;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  } else {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  const tmpResult2 = channel(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp10, tmp12);
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  if (null != tmp4) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (tmp4.user.id !== AuthenticationStore.getId()) {
      class P {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  if (null != focusedEmbeddedActivityParticipant) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      class P {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
      return tmp17;
    } else {
      class P {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  } else {
    class P {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (activityLockOrientation === tmp16.PORTRAIT) {
      class P {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
}) : (function useShouldForcePipOrientation(channel) {
  let LANDSCAPE1;
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  let tmp2 = usePipVideoOrStreamDefault(channel.id);
  let obj = channel(504);
  const items = [ChannelRTCStore, ];
  let obj2 = AuthenticationStore;
  items[1] = AuthenticationStore;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === metroImportAll.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj3 = channel(504);
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let pipOrientationLockStateForApp;
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    let applicationId;
    const obj = EmbeddedActivitiesStore;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let tmp4 = null;
    if (null != applicationId) {
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      const obj4 = { applicationId: null, instanceId: null };
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      const obj2 = ChannelRTCParticipants;
      if (id === obj2.getEmbeddedActivityParticipantId(obj4)) {
        tmp4 = selectedParticipant;
      }
    }
    const obj6 = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: pipOrientationLockStateForApp };
    pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    return obj6;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp6 = null;
  if (null != tmp2) {
    tmp6 = null;
    if (tmp2.user.id !== obj2.getId()) {
      tmp6 = tmp2;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp6;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      let LANDSCAPE;
      if (null == stateFromStores) {
        LANDSCAPE = tmp3(8426).OrientationType.LANDSCAPE;
      }
      return LANDSCAPE;
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    LANDSCAPE1 = tmp3(8426).OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE1 = null;
    if (activityLockOrientation === tmp9.PORTRAIT) {
      LANDSCAPE1 = tmp3(8426).OrientationType.PORTRAIT;
    }
  }
  LANDSCAPE = LANDSCAPE1;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = tmp3;
