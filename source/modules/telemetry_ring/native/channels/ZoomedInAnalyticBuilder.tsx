// Module ID: 12998
// Function ID: 98898
// Name: convertDeviceEventBreadcrumb
// Dependencies: []
// Exports: buildZoomedInAnalyticsEvent

// Module 12998 (convertDeviceEventBreadcrumb)
function convertDeviceEventBreadcrumb(data) {
  data = data.data;
  if (null != data) {
    const _Object = Object;
    if (0 !== Object.keys(data).length) {
      let tmp2 = coerceString(data.action);
      if (null == tmp2) {
        tmp2 = coerceString(data.message);
      }
      let tmp5 = coerceString(data.message);
      if (null == tmp5) {
        tmp5 = coerceString(data.description);
      }
      const obj = {
        action: tmp2,
        description: tmp5,
        metadata: function formatDeviceMetadata(data) {
              const entries = Object.entries(data);
              const found = entries.filter((arg0) => {
                let tmp;
                [, tmp] = arg0;
                return null != tmp;
              });
              let joined = null;
              if (0 !== found.length) {
                const mapped = found.map((arg0) => {
                  let tmp;
                  let tmp2;
                  [tmp, tmp2] = arg0;
                  return "" + tmp + "=" + tmp2;
                });
                joined = mapped.join(", ");
              }
              return joined;
            }(data)
      };
      return obj;
    }
  }
  return null;
}
function resolveSocketKind(data, str) {
  let tmp = coerceString(data.socket_kind);
  if (null == tmp) {
    if (null == str) {
      tmp = null;
    } else {
      const formatted = str.toLowerCase();
      if (formatted.includes("gateway")) {
        let Gateway = closure_3.Gateway;
      } else if (formatted.includes("discord.media")) {
        Gateway = closure_3.RtcControl;
      } else if (formatted.includes("remote-auth")) {
        Gateway = closure_3.RemoteAuth;
      } else if (formatted.includes("spotify")) {
        Gateway = closure_3.Spotify;
      } else if (formatted.includes("rtc")) {
        Gateway = closure_3.RtcControl;
      } else {
        if (!formatted.includes("127.0.0.1")) {
          if (!formatted.includes("localhost")) {
            Gateway = null;
            if (formatted.includes("game")) {
              Gateway = null;
              if (formatted.includes("ping")) {
                Gateway = closure_3.GameServerPing;
              }
            }
          }
        }
        Gateway = closure_3.Rpc;
      }
    }
  }
  if (null != tmp) {
    return tmp;
  } else {
    if (null == data.cmd) {
      if (null == data.evt) {
        if (null != data.t) {
          let Gateway1 = closure_3.Gateway;
        } else {
          Gateway1 = null;
        }
      }
    }
    Gateway1 = closure_3.Rpc;
  }
}
function buildSocketMessageIdentity(data, arg1) {
  let evt = data.t;
  if (null == evt) {
    evt = data.type;
  }
  if (null == evt) {
    evt = data.evt;
  }
  const tmpResult = coerceString(evt);
  if (arg1 === closure_3.Gateway) {
    const tmp21 = coerceNumberFromUnknown(data.op);
    let tmp22 = null;
    if (null != tmp21) {
      const tmp25 = require(dependencyMap[2]).Opcode[tmp21];
      let tmp26 = null;
      if ("string" === typeof tmp25) {
        tmp26 = tmp25;
      }
      tmp22 = tmp26;
    }
    if (null != tmp22) {
      let combined = tmp22;
      if ("DISPATCH" === tmp22) {
        combined = tmp22;
        if (null != tmpResult) {
          const _HermesInternal3 = HermesInternal;
          combined = "" + tmp22 + "/" + tmpResult;
        }
      }
      return combined;
    } else {
      const tmp28 = coerceNumberFromUnknown(data.op);
      if (null == tmp28) {
        return tmpResult;
      } else if (null != tmpResult) {
        const _HermesInternal2 = HermesInternal;
        let combined1 = "" + tmp28 + "/" + tmpResult;
      } else {
        const _String2 = String;
        combined1 = String(tmp28);
      }
    }
  } else if (arg1 === closure_3.RtcControl) {
    const tmp10 = coerceNumberFromUnknown(data.op);
    let tmp11 = null;
    if (null != tmp10) {
      const tmp14 = require(dependencyMap[3]).RTCSocketOpcode[tmp10];
      let tmp15 = null;
      if ("string" === typeof tmp14) {
        tmp15 = tmp14;
      }
      tmp11 = tmp15;
    }
    if (null != tmp11) {
      return tmp11;
    } else {
      const tmp17 = coerceNumberFromUnknown(data.op);
      let StringResult = null;
      if (null != tmp17) {
        const _String = String;
        StringResult = String(tmp17);
      }
      return StringResult;
    }
  } else {
    const tmp4 = coerceString(data.cmd);
    const tmp5 = coerceString(data.evt);
    let tmp6 = tmpResult;
    if (null != tmp4) {
      let combined2 = tmp4;
      if (null != tmp5) {
        const _HermesInternal = HermesInternal;
        combined2 = "" + tmp4 + "/" + tmp5;
      }
      tmp6 = combined2;
    }
    return tmp6;
  }
}
function buildWebsocketMessageProps(data) {
  data = data.data;
  if (null == data) {
    let obj = { message_identity: "unknown", socket_kind: undefined };
    return obj;
  } else {
    let tmp2 = coerceString(data.url);
    const tmp4 = resolveSocketKind(data, tmp2);
    let tmp5 = coerceString(data.message_identity);
    if (null == tmp5) {
      tmp5 = buildSocketMessageIdentity(data, tmp4);
    }
    if (null == tmp5) {
      tmp5 = function buildLegacyMessageIdentity(data) {
        const tmp = callback(data.category);
        const tmp2 = callback(data.type);
        const tmp3 = callback(data.name);
        if (null == tmp) {
          if (null == tmp2) {
            let joined = null;
          }
          return joined;
        }
        const items = [tmp, tmp2, tmp3];
        const found = items.filter((arg0) => null != arg0);
        joined = found.join("/");
      }(data);
    }
    if (null != tmp5) {
      tmp2 = tmp5;
    }
    let str = "unknown";
    if (null != tmp2) {
      str = tmp2;
    }
    obj = { message_identity: str, socket_kind: tmp4 };
    return obj;
  }
}
function coerceNumber(duration_ms) {
  let tmp = null;
  if ("number" === typeof duration_ms) {
    const _Number = Number;
    tmp = null;
    if (Number.isFinite(duration_ms)) {
      tmp = duration_ms;
    }
  }
  return tmp;
}
function coerceString(message) {
  let tmp = null;
  if ("string" === typeof message) {
    tmp = message;
  }
  return tmp;
}
function coerceNumberFromUnknown(op) {
  if ("number" === typeof op) {
    const _Number = Number;
    if (Number.isFinite(op)) {
      return op;
    }
  }
  if ("string" === typeof op) {
    if ("" !== op.trim()) {
      const _Number2 = Number;
      const NumberResult = Number(op);
      const _Number3 = Number;
      let tmp5 = null;
      if (Number.isFinite(NumberResult)) {
        tmp5 = NumberResult;
      }
      return tmp5;
    }
  }
  return null;
}
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
let closure_3 = { Gateway: "gateway", RtcControl: "rtc_control", RemoteAuth: "remote_auth", Spotify: "spotify", Rpc: "rpc", GameServerPing: "game_server_ping" };
let closure_4 = {
  [AnalyticEvents.DEVICE_EVENT]: (data) => convertDeviceEventBreadcrumb(data),
  [AnalyticEvents.REACT_SOFT_EXCEPTION]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const obj = {};
      let tmp3 = coerceString(data.error_message);
      if (null == tmp3) {
        tmp3 = coerceString(data.message);
      }
      let tmp5;
      if (null != tmp3) {
        tmp5 = tmp3;
      }
      obj.error_message = tmp5;
      obj.component = coerceString(data.component);
      obj.stacktrace = coerceString(data.stacktrace);
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.NETWORK_CAPABILITIES_CHANGED]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const obj = { action: coerceString(data.action), network_type: coerceString(data.network_type), upload_bandwidth: coerceNumber(data.upload_bandwidth), download_bandwidth: coerceNumber(data.download_bandwidth) };
      let vpn_active = null;
      if ("boolean" === typeof data.vpn_active) {
        vpn_active = data.vpn_active;
      }
      obj.vpn_active = vpn_active;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.FOREGROUND_SERVICE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const obj = { service_name: coerceString(data.service_name), action: coerceString(data.action) };
      let tmp3 = coerceString(data.detail);
      if (null == tmp3) {
        tmp3 = coerceString(data.message);
      }
      obj.detail = tmp3;
      obj.fgs_operation = coerceString(data.fgs_operation);
      obj.fgs_configuration_type = coerceString(data.fgs_configuration_type);
      let guard_allowed = null;
      if ("boolean" === typeof data.guard_allowed) {
        guard_allowed = data.guard_allowed;
      }
      obj.guard_allowed = guard_allowed;
      obj.fgs_guard_reason = coerceString(data.fgs_guard_reason);
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.APP_LIFECYCLE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const obj = {};
      let tmp3 = coerceString(data.state);
      if (null == tmp3) {
        tmp3 = coerceString(data.message);
      }
      obj.state = tmp3;
      obj.previous_state = coerceString(data.previous_state);
      obj.details = coerceString(data.details);
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.UI_LIFECYCLE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const obj = {};
      let tmp3 = coerceString(data.activity_name);
      if (null == tmp3) {
        tmp3 = coerceString(data.screen);
      }
      obj.activity_name = tmp3;
      let tmp6 = coerceString(data.stage);
      if (null == tmp6) {
        tmp6 = coerceString(data.state);
      }
      obj.stage = tmp6;
      let tmp9 = coerceString(data.extra);
      if (null == tmp9) {
        tmp9 = coerceString(data.details);
      }
      if (null == tmp9) {
        tmp9 = coerceString(data.detail);
      }
      obj.extra = tmp9;
      tmp = obj;
    }
    return tmp;
  }
};
let closure_5 = {
  [AnalyticEvents.TOUCH_EVENT]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      let obj = importDefault(dependencyMap[1]);
      const currentHermesInstrumentedStatsSummary = obj.getCurrentHermesInstrumentedStatsSummary();
      let tmp7 = null;
      if (null != currentHermesInstrumentedStatsSummary) {
        tmp7 = currentHermesInstrumentedStatsSummary;
      }
      obj = { touch_action_type: coerceString(data.touch_action_type), client_timestamp_ms: coerceNumber(data.client_timestamp_ms), screen_x: coerceNumber(data.screen_x), screen_y: coerceNumber(data.screen_y), view_x: coerceNumber(data.view_x), view_y: coerceNumber(data.view_y), total_memory_mb: coerceNumber(data.total_memory_mb), memory_breakdown: coerceString(data.memory_breakdown), hermes_instrumented_stats_summary: tmp7, view_hierarchy: coerceString(data.view_hierarchy), gesture: coerceString(data.gesture), window_name: coerceString(data.window_name), hit_test_duration_us: coerceNumber(data.hit_test_duration_us), distance: coerceNumber(data.distance), duration_ms: coerceNumber(data.duration_ms), velocity: coerceNumber(data.velocity), scale_factor: coerceNumber(data.scale_factor) };
      tmp = obj;
      const tmp3 = coerceString(data.touch_action_type);
    }
    return tmp;
  },
  [AnalyticEvents.HTTP_REQUEST]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      let tmp3 = coerceString(data.url);
      if (null == tmp3) {
        tmp3 = coerceString(data.uri);
      }
      if (null == tmp3) {
        tmp3 = coerceString(data.request_url);
      }
      let tmp7 = coerceString(data.method);
      if (null == tmp7) {
        tmp7 = coerceString(data.http_method);
      }
      let tmp9 = null;
      if (null != tmp3) {
        const obj = { url: tmp3, method: tmp7, status_code: coerceNumber(data.status_code), duration_ms: coerceNumber(data.duration_ms), source: coerceString(data.source) };
        tmp9 = obj;
      }
      tmp = tmp9;
    }
    return tmp;
  },
  [AnalyticEvents.WEBSOCKET_MESSAGE_RECEIVED]: (data) => buildWebsocketMessageProps(data)
};
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInAnalyticBuilder.tsx");

export const buildZoomedInAnalyticsEvent = function buildZoomedInAnalyticsEvent(value) {
  if (value.key in closure_4) {
    const tmp7 = closure_4[key](value);
    let tmp8 = null;
    if (null != tmp7) {
      let obj = { key, props: tmp7 };
      tmp8 = obj;
    }
    return tmp8;
  } else if (key in closure_5) {
    const tmp4 = closure_5[value.key](value);
    let tmp5 = null;
    if (null != tmp4) {
      obj = { key: key2, props: tmp4 };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    return null;
  }
};
